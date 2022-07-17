import { Component, createRef, CSSProperties } from "react";

// type Device = "PC" | "MOBILE" | "TABLET";

export type Direction = "HORIZONTAL" | "VERTICAL";

/**
 * pixels that the slider should translate per second
 * Example data
 * {
 *   "1024": 30,
 *   "320": 18,
 *   "768": 24
 * }
 * Mobile First based comparison will be used, but if the device isn't defined then
 * the smallest device speed will be force-set to make the slider slide as usual
 */
export interface PixelsPerSecond {
  [dimension: string]: number;
}
/**
 * Mobile First based comparison will be used
 Example data
 {
  "1024": 300,
  "320": 180,
  "768": 240
}
 If you set the data as above and the screen size is 310px, the slider will not delay,
 the screens above 768px will delay for 240 seconds and the screens above 1024px will delay for 300
 */
export interface ScreenSizeDelay {
  [dimension: string]: number;
}

interface Speed {
  [dimension: string]: number;
}

interface Translate {
  x: number;
  y: number;
  z: number;
}

interface Props {
  children: JSX.Element;
  speed?: PixelsPerSecond;
  direction?: Direction;
  initialTranslateRatio?: number;
  shouldDuplicate?: boolean;
  delay?: ScreenSizeDelay;
  style?: CSSProperties;
  className?: string;
}

interface State {}

class CustomMarquee extends Component<Props, State> {
  private isPaused: boolean = false;
  /* this is the width/height given to the wrapper that translates across the screen */
  private superDistance = 9999999;
  private superFilmContainerRef = createRef<HTMLDivElement>();
  private wrapperRef = createRef<HTMLDivElement>();
  private duplicatedChildren: JSX.Element | null = null;
  private groupDimension: number = 0;
  private totalFilmDimension: number = 0;
  private sliderScreenDimension: number = 0;
  private shouldDuplicate: boolean = true;
  private readonly duplicatesCounter = 3;
  private readonly defaultVerticalSliderHeight: number = 300;
  private readonly direction: Direction = "HORIZONTAL";
  private animationFrame = 0;
  private pixelsToDelay = 0;
  private pixelsDelayedSoFar = 0;
  /* this is the initial translate value for the slider */
  private initialTranslatePixels: Translate = {
    x: 0,
    y: 0,
    z: 0,
  };

  private translatedPixels: Translate = {
    x: 0,
    y: 0,
    z: 0,
  };

  private translatedRatio: Translate = {
    x: 0,
    y: 0,
    z: 0,
  };

  private readonly defaultPixelsPerSecond: PixelsPerSecond = {
    "1024": 30,
    "320": 18,
    "768": 24,
  };

  private dimensionSpeedArray: number[] = [];

  /* this speed will automatically be updated during run time in the constructor and
   * during the component update */
  private speed: Speed = {};

  /* this will be updated automatically */
  private currentSpeed: number = 0;

  constructor(props: Props) {
    super(props);
    if (this.props.direction) {
      this.direction = this.props.direction;
    }

    if (typeof this.props.shouldDuplicate !== "undefined") {
      this.shouldDuplicate = this.props.shouldDuplicate;
    }

    this.updateSlider();
    this.evaluateDelay();
  }

  private updateSlider() {
    this.duplicatedChildren = this.createDuplicates(this.props.children);
    this.evaluateSpeed();
  }

  pauseSlider() {
    this.isPaused = true;
  }

  playSlider() {
    this.isPaused = false;
  }

  private animate() {
    this.animationFrame = requestAnimationFrame(this.animate.bind(this));

    if (this.isPaused) {
      return;
    }

    if (this.pixelsDelayedSoFar < this.pixelsToDelay) {
      this.pixelsDelayedSoFar = this.pixelsDelayedSoFar + this.currentSpeed;
      return;
    }

    /* revert the translation value to zero */
    if (this.direction === "HORIZONTAL") {
      if (Math.abs(this.translatedPixels.x) >= this.groupDimension) {
        this.translatedPixels.x = this.initialTranslatePixels.x;
      }
    } else {
      if (Math.abs(this.translatedPixels.y) >= this.groupDimension) {
        this.translatedPixels.y = this.initialTranslatePixels.y;
      }
    }

    /* negate the speed values to go to the required direction */
    const translateX =
      this.direction === "HORIZONTAL" ? this.translatedPixels.x - this.currentSpeed : this.translatedPixels.x;
    const translateY =
      this.direction === "VERTICAL" ? this.translatedPixels.y - this.currentSpeed : this.translatedPixels.y;

    this.updateTranslation(translateX, translateY);

    if (this.superFilmContainerRef.current) {
      this.superFilmContainerRef.current.style.transform = `translate3d(${translateX}px,${translateY}px,0)`;
    }
  }

  private updateTranslation(translateX: number, translateY: number) {
    this.translatedPixels = {
      z: 0,
      x: translateX,
      y: translateY,
    };

    this.translatedRatio = {
      z: 0,
      x: translateX / this.totalFilmDimension,
      y: translateY / this.totalFilmDimension,
    };
  }

  private onSliderResize() {
    this.evaluateDOM();
    /* convert the previous translation ratio to the current translate pixels */
    if (this.direction === "HORIZONTAL") {
      this.translatedPixels.x = this.translatedRatio.x * this.totalFilmDimension;
    } else {
      this.translatedPixels.y = this.translatedRatio.y * this.totalFilmDimension;
    }

    this.updateSpeedByScreenDimension();
  }

  componentWillUnmount() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
    window.removeEventListener("resize", this.onSliderResize);
  }

  componentDidMount() {
    this.evaluateDOM();
    if (this.props.initialTranslateRatio) {
      const initialTranslateDistance = this.sliderScreenDimension * this.props.initialTranslateRatio;
      if (this.direction === "HORIZONTAL") {
        this.initialTranslatePixels.x = initialTranslateDistance;
      } else {
        this.initialTranslatePixels.y = initialTranslateDistance;
      }

      this.updateTranslation(this.initialTranslatePixels.x, this.initialTranslatePixels.y);
    }

    /* translate the slider to the initial location */
    if (this.superFilmContainerRef.current) {
      this.superFilmContainerRef.current.style.transform = `translate3d(${this.initialTranslatePixels.x}px,${this.initialTranslatePixels.y}px,0)`;
    }

    window.addEventListener("resize", this.onSliderResize.bind(this));
    this.animate();
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any) {
    this.evaluateDOM();
    this.evaluateSpeed();
  }

  private evaluateSpeed() {
    let pixelsPerSecond;
    if (this.props.speed) {
      pixelsPerSecond = { ...this.props.speed };
    } else {
      pixelsPerSecond = { ...this.defaultPixelsPerSecond };
    }

    for (const key in pixelsPerSecond) {
      if (Number(key)) {
        this.dimensionSpeedArray.push(Number(key));
      }
    }

    if (this.dimensionSpeedArray.length === 0) {
      /* something is wrong with the user speeds push in some default speed so that
      the slider slides as usual */
      pixelsPerSecond = { ...this.defaultPixelsPerSecond };
      for (const key in pixelsPerSecond) {
        if (Number(key)) {
          this.dimensionSpeedArray.push(Number(key));
        }
      }
    }

    /* All dimensions will be arranged in ascending order for later use */
    this.dimensionSpeedArray = this.dimensionSpeedArray.sort((a, b) => a - b);

    this.speed = CustomMarquee.convertPixelsPerSecondToSpeed(pixelsPerSecond);
    this.updateSpeedByScreenDimension();
  }

  private getDelayPixelsByScreenDimension(screensArray: number[], delayArray: ScreenSizeDelay): number {
    let screenDimension: number;
    if (this.direction === "HORIZONTAL") {
      screenDimension = window.innerWidth;
    } else {
      screenDimension = window.innerHeight;
    }

    /* dimensions will be compared using mobile first mode for example if in our
     * screensArray we have [320,450,768,920,1024] and our window dimension is
     * 800px, 320 will be matched first then will be replaced by 450 and at last
     * 768 will win the race  */
    let dimensionKey: string = "";
    screensArray.forEach((dimension) => {
      if (screenDimension >= dimension) {
        dimensionKey = `${dimension}`;
      }
    });
    if (dimensionKey === "") {
      return 0;
    }
    if (!delayArray[dimensionKey]) {
      return 0;
    }

    const delayTime = delayArray[dimensionKey];

    const framesPerSecond = 60;
    const speedPerSecond = this.currentSpeed * framesPerSecond;

    return speedPerSecond * delayTime;
  }

  private updateSpeedByScreenDimension() {
    let screenDimension: number;
    if (this.direction === "HORIZONTAL") {
      screenDimension = window.innerWidth;
    } else {
      screenDimension = window.innerHeight;
    }
    /* dimensions will be compared using mobile first mode for example if in our
     * dimensionSpeedArray we have [320,450,768,920,1024] and our window dimension is
     * 800px, 320 will be matched first then will be replaced by 450 and at last
     * 768 will win the race  */
    let dimensionKey: string = "";
    this.dimensionSpeedArray.forEach((dimension) => {
      if (screenDimension >= dimension) {
        dimensionKey = `${dimension}`;
      }
    });

    if (dimensionKey === "") {
      /* no speed was given for such a small screen, apply the first speed in the
       * array by default */
      /* this.dimensionSpeedArray's length MUST be greater than zero */
      dimensionKey = `${this.dimensionSpeedArray[0]}`;
    }

    this.currentSpeed = this.speed[dimensionKey];
  }

  /* 60 that got used here is 60fps */
  private static convertPixelsPerSecondToSpeed(pixelsPerSecond: PixelsPerSecond): Speed {
    const framesPerSecond = 60;
    const speed: Speed = {};
    for (const key in pixelsPerSecond) {
      const value = pixelsPerSecond[key];
      speed[key] = value / framesPerSecond;
    }
    return speed;
  }

  private evaluateDelay() {
    let screenSizeDelay: ScreenSizeDelay | undefined;
    if (this.props.delay) {
      screenSizeDelay = { ...this.props.delay };
    }

    if (!screenSizeDelay) {
      return;
    }

    let screensArray = [];

    for (const key in screenSizeDelay) {
      if (Number(key)) {
        screensArray.push(Number(key));
      }
    }

    if (screensArray.length === 0) {
      /* something is wrong with the user delay data, don't delay the slider */
      return;
    }

    /* All dimensions will be arranged in ascending order for later use */
    screensArray = screensArray.sort((a, b) => a - b);

    this.pixelsToDelay = this.getDelayPixelsByScreenDimension(screensArray, screenSizeDelay);
  }

  private evaluateDOM() {
    if (this.superFilmContainerRef.current && this.superFilmContainerRef.current.children.length > 0) {
      /* we at least have one child item, there must be this.duplicateCounter items */
      const sliderGroup = this.superFilmContainerRef.current.children[0];
      this.groupDimension = this.direction === "HORIZONTAL" ? sliderGroup.clientWidth : sliderGroup.clientHeight;
      if (this.shouldDuplicate) {
        this.totalFilmDimension = this.groupDimension * this.duplicatesCounter;
      } else {
        this.totalFilmDimension = this.groupDimension;
      }
    }

    /* get the slider display width/height, this is the overflow hidden DOM that wraps the whole slider.
     * it could be  */
    if (this.wrapperRef.current) {
      this.sliderScreenDimension =
        this.direction === "HORIZONTAL" ? this.wrapperRef.current.clientWidth : this.wrapperRef.current.clientHeight;
    }
  }

  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
    this.duplicatedChildren = this.createDuplicates(nextProps.children);
    return true;
  }

  private createDuplicates(children: JSX.Element): JSX.Element {
    if (!this.shouldDuplicate) {
      return children;
    }
    return (
      <>
        {children}
        {children}
        {children}
      </>
    );
  }

  render() {
    const outsideStyles = this.props.style ? this.props.style : {};
    const superContainerStyle: CSSProperties =
      this.direction === "HORIZONTAL"
        ? { width: `${this.superDistance}px`, display: "flex", flexDirection: "row", flexWrap: "nowrap" }
        : { height: `${this.superDistance}px`, display: "flex", flexDirection: "column" };
    /* set maximum height to avoid the slider from being too tall if it is a vertical slider */
    const wrapperDefaultStyle: CSSProperties =
      this.direction === "HORIZONTAL" ? { width: "100%" } : { height: `${this.defaultVerticalSliderHeight}px` };
    return (
      <div
        style={{ ...wrapperDefaultStyle, ...outsideStyles, overflow: "hidden" }}
        className={`inner-class ${this.props.className}`}
        ref={this.wrapperRef}
      >
        <div ref={this.superFilmContainerRef} style={superContainerStyle}>
          {this.duplicatedChildren}
        </div>
      </div>
    );
  }
}

export default CustomMarquee;
