import { Component, createRef } from "react";

interface Props {
  delay?: boolean;
}

interface State {
  totalWidth: number;
  itemWidth: number;
  groupWidth: number;
}

export default class LogosSlider extends Component<Props, State> {
  list = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
  ];

  innerList: string[] = [];
  wrapper = createRef<HTMLDivElement>();
  slidesFilm = createRef<HTMLDivElement>();
  animationFrame = 0;
  translateXValue = 0;
  translateXRatio = 0;
  percentageItemWidth = 25;
  duplicates = 3;
  speed = 0.5;
  mobileSpeed = 0.3;
  PCSpeed = 0.5;
  isFirstMount = true;
  delayWidthRatio = 0.5;
  requiredDelayDistance = 0;
  delayedDistance = 0;

  constructor(props: Props) {
    super(props);
    this.state = {
      totalWidth: 0,
      groupWidth: 0,
      itemWidth: 0,
    };
    this.assignSliderSpeed();
    for (let i = 0; i < this.duplicates; i++) {
      this.innerList.push(...this.list);
    }
  }

  assignSliderSpeed() {
    if (window.innerWidth > 900) {
      this.speed = this.PCSpeed;
    } else {
      this.speed = this.mobileSpeed;
    }
  }

  animate() {
    if (this.slidesFilm.current) {
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
    this.assignSliderSpeed();
    if (this.wrapper.current) {
      const wrapperWidth = this.wrapper.current.clientWidth;
      const singleItemWidth = (this.percentageItemWidth / 100) * wrapperWidth;
      if (this.props.delay) {
        this.requiredDelayDistance = this.delayWidthRatio * singleItemWidth;
      }
      const groupWidth = singleItemWidth * this.list.length;
      const totalWidth = groupWidth * this.duplicates;
      // get new translateXValue for the new dimensions
      this.translateXValue = this.translateXRatio * groupWidth;
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
          {this.innerList.map((image, index) => {
            const random = Math.random();
            return (
              <div
                style={{ width: `${this.state.itemWidth}px`, background: "white" }}
                key={`${index}-${random}`}
                className={"border border-primary"}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <img src={image} alt="image" />
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
