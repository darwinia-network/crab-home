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

export default class LogosSlider extends Component<Props, State> {
  innerList: CompanyLogo[] = [];
  wrapper = createRef<HTMLDivElement>();
  slidesFilm = createRef<HTMLDivElement>();
  animationFrame = 0;
  translateXValue = 0;
  translateXRatio = 0;
  /* width in percentage for a single slider image */
  mobilePercentageItemWidth = 25;
  PCPercentageItemWidth = 35;
  percentageItemWidth = 0;
  /* how many times the slider group should be duplicated to show the smooth transition */
  duplicates = 3;
  /* these are the speeds for particular devices */
  speed = 0.5;
  mobileSpeed = 0.3;
  PCSpeed = 0.5;
  isFirstMount = true;
  /* change this to adjust the amount that the slider will have to delay,
   * the value ranges from 0 to 1, if you set 0.5 that means that the slider
   *  will delay a half of a single slider width */
  delayWidthRatio = 0.5;
  /* don't change this, this is simply the distance that is required to be delayed
  by the slider, it will be calculated automatically using delayWidthRatio */
  requiredDelayDistance = 0;
  /* don't change this, this variable simply tracks the distance that has been delayed
  so far by the slider */
  delayedDistance = 0;

  constructor(props: Props) {
    super(props);
    this.state = {
      totalWidth: 0,
      groupWidth: 0,
      itemWidth: 0,
    };
    this.assignSliderSpeedAndSize();
    for (let i = 0; i < this.duplicates; i++) {
      this.innerList.push(...this.props.data);
    }
  }

  assignSliderSpeedAndSize() {
    if (window.innerWidth > 900) {
      this.speed = this.PCSpeed;
      this.percentageItemWidth = this.PCPercentageItemWidth;
    } else {
      this.speed = this.mobileSpeed;
      this.percentageItemWidth = this.mobilePercentageItemWidth;
    }
  }

  animate() {
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

  clearAnimation() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }

  initSlide() {
    this.clearAnimation();
    this.assignSliderSpeedAndSize();
    if (this.wrapper.current) {
      const wrapperWidth = this.wrapper.current.clientWidth;
      const singleItemWidth = (this.percentageItemWidth / 100) * wrapperWidth;
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
              <div style={{ width: `${this.state.itemWidth}px`, background: "tomato" }} key={`${index}-${random}`}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <img src={company.logo} alt="image" />
                  <div style={{ color: "black" }}>AAAAA</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
