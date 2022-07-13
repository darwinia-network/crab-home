import { Component, createRef } from "react";
import { CompanyLogo } from "../../data/types";

interface Props {
  delay?: boolean;
  data: CompanyLogo[];
}

interface State {
  totalWidth: number;
  itemWidth: number;
  groupWidth: number;
}

type Device = "MOBILE" | "PC";

export default class LogosSlider extends Component<Props, State> {
  private readonly laptopWidth = 1024;
  private readonly logoMaxWidth = 268;
  private innerList: CompanyLogo[] = [];
  private wrapper = createRef<HTMLDivElement>();
  private slidesFilm = createRef<HTMLDivElement>();
  private animationFrame = 0;
  private translateXValue = 0;
  private translateXRatio = 0;
  /* width in percentage for a single slider image */
  private mobilePercentageItemWidth = 27.56;
  private PCPercentageItemWidth = 18.61;
  private percentageItemWidth = 0;
  /* how many times the slider group should be duplicated to show the smooth transition */
  private duplicates = 3;
  /* these are the speeds for particular devices */
  private speed = 0.5;
  private mobileSpeed = 0.3;
  private PCSpeed = 0.5;
  private isFirstMount = true;
  private lastDevice: Device = "MOBILE";
  /* change this to adjust the amount that the slider will have to delay,
   * the value ranges from 0 to 1, if you set 0.5 that means that the slider
   *  will delay a half of a single slider width */
  private delayWidthRatio = 0.5;
  /* don't change this, this is simply the distance that is required to be delayed
  by the slider, it will be calculated automatically using delayWidthRatio */
  private requiredDelayDistance = 0;
  /* don't change this, this variable simply tracks the distance that has been delayed
  so far by the slider */
  private delayedDistance = 0;

  constructor(props: Props) {
    super(props);
    this.state = {
      totalWidth: 0,
      groupWidth: 0,
      itemWidth: 0,
    };
    this.evaluateSliderByDevice();
    for (let i = 0; i < this.duplicates; i++) {
      this.innerList.push(...this.props.data);
    }
  }

  private evaluateSliderByDevice() {
    let currentDevice: Device;
    if (window.innerWidth >= this.laptopWidth) {
      this.speed = this.PCSpeed;
      this.percentageItemWidth = this.PCPercentageItemWidth;
      currentDevice = "PC";
    } else {
      this.speed = this.mobileSpeed;
      this.percentageItemWidth = this.mobilePercentageItemWidth;
      currentDevice = "MOBILE";
    }
    if (this.lastDevice !== currentDevice) {
      this.revertSliderToZero();
      this.lastDevice = currentDevice;
    }
  }

  private animate() {
    if (this.slidesFilm.current) {
      /* move the slider back to zero (translateX = 0) when it reaches the end */
      if (this.translateXValue >= this.state.groupWidth) {
        this.translateXValue = 0;
      }

      /* delay for a certain distance */
      if (this.isFirstMount && this.props.delay && this.delayedDistance < this.requiredDelayDistance) {
        this.delayedDistance += this.speed;
        this.animationFrame = requestAnimationFrame(this.animate.bind(this));
        return;
      }

      this.isFirstMount = false;
      this.delayedDistance = 0;

      this.translateXRatio = this.translateXValue / this.state.groupWidth;
      this.translateXValue += this.speed;
      this.slidesFilm.current.style.transform = `translate3d(${-this.translateXValue}px,0,0)`;
      this.slidesFilm.current.style.transitionTimingFunction = `linear`;
    }

    this.animationFrame = requestAnimationFrame(this.animate.bind(this));
  }

  componentDidMount() {
    this.initSlide();
    window.addEventListener("resize", this.initSlide.bind(this));
  }

  private clearAnimation() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }

  private revertSliderToZero() {
    if (!this.slidesFilm.current) {
      return;
    }
    this.translateXRatio = 0;
    this.delayedDistance = 0;
    this.translateXValue = 0;
    this.isFirstMount = true;
    this.slidesFilm.current.style.transform = `translate3d(0,0,0)`;
    this.slidesFilm.current.style.transitionTimingFunction = ``;
  }

  private initSlide() {
    this.clearAnimation();
    this.evaluateSliderByDevice();
    if (this.wrapper.current) {
      const wrapperWidth = this.wrapper.current.clientWidth;
      let singleItemWidth = (this.percentageItemWidth / 100) * wrapperWidth;
      singleItemWidth = singleItemWidth > this.logoMaxWidth ? this.logoMaxWidth : singleItemWidth;
      if (this.props.delay) {
        this.requiredDelayDistance = this.delayWidthRatio * singleItemWidth;
      }
      const groupWidth = singleItemWidth * this.props.data.length;
      const totalWidth = groupWidth * this.duplicates;
      // get new translateXValue for the new dimensions
      this.translateXValue = this.translateXRatio * groupWidth;
      /* update the slider state values including width etc */
      this.setState((oldState) => {
        return {
          ...oldState,
          itemWidth: singleItemWidth,
          totalWidth,
          groupWidth,
        };
      });
      this.animate();
    }
  }

  componentWillUnmount() {
    this.clearAnimation();
    window.removeEventListener("resize", this.initSlide);
  }

  render() {
    return (
      <div ref={this.wrapper} style={{ display: "flex", overflow: "hidden" }}>
        <div
          ref={this.slidesFilm}
          style={{ width: `${this.state.totalWidth}px`, flexShrink: 0, display: "flex", flexDirection: "row" }}
        >
          {this.innerList.map((company, index) => {
            const random = Math.random();
            return (
              <div
                style={{ width: `${this.state.itemWidth}px`, maxWidth: `${this.logoMaxWidth}px` }}
                key={`${index}-${random}`}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <img className={"w-full"} src={company.logo} alt="image" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
