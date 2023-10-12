import React, { Component } from 'react';
import '../Styles/AnimatedElement.css'

class AnimatedElement extends Component {
  constructor(props) {
    super(props);
    this.animatedElementRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      animate: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const element = this.animatedElementRef.current;
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition - windowHeight <= 0) {
      this.setState({ animate: true });
    }
  }

  render() {
    const { animate } = this.state;

    return (
      <div
        ref={this.animatedElementRef}
        className={`elemento-a-animar ${animate ? 'animate' : ''}`}
      >
        Mi Elemento
      </div>
    );
  }
}

export default AnimatedElement;