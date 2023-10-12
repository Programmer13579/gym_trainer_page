import { useEffect } from 'react';

export const checkAndAnimateOnLoad = (elementRef) => {
  const element = elementRef.current;
  const elementPosition = element.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (elementPosition - windowHeight <= 0) {
    element.classList.add('animation_aparecer');
  }
};

export const useScrollEffect = (elementRef) => {
  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition - windowHeight <= 0) {
        element.classList.add('animation_aparecer');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [elementRef]);
};

// class AnimatedElement extends Component {
//   constructor(props) {
//     super(props);
//     this.animatedElementRef = React.createRef();
//     this.handleScroll = this.handleScroll.bind(this);
//     this.state = {
//       animate: false,
//     };
//   }

//   componentDidMount() {
//     window.addEventListener('scroll', this.handleScroll);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('scroll', this.handleScroll);
//   }

//   handleScroll() {
//     const element = this.animatedElementRef.current;
//     const elementPosition = element.getBoundingClientRect().top;
//     const windowHeight = window.innerHeight;

//     if (elementPosition - windowHeight <= 0) {
//       this.setState({ animate: true });
//     }
//   }

//   render() {
//     const { animate } = this.state;

//     return (
//       <div
//         ref={this.animatedElementRef}
//         className={`elemento-a-animar ${animate ? 'animation_aparecer' : ''}`}
//       >
//         Mi Elemento
//       </div>
//     );
//   }
// }

// export default AnimatedElement;