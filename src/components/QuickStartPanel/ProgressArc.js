import React from 'react';
import PropTypes from 'prop-types';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.state = {
      lineWidth: 30,
    };
  }

  percentToRadian = (percent) => {
    return ((percent * 360) / 100) * (Math.PI / 180);
  };

  draw = () => {
    const { percent, canvasSize, big = false } = this.props;
    const center = canvasSize / 2;
    const lineWidth = this.state.lineWidth;
    const middleSquarePosition = center - lineWidth / 2;
    const dependsOnBigProp = big ? 2 * lineWidth : lineWidth;
    const ctx = this.canvas.current.getContext('2d');

    ctx.clearRect(0, 0, 300, 300);
    ctx.fillStyle = 'red';
    ctx.strokeStyle = '#23272B';
    ctx.beginPath();
    ctx.arc(
      center,
      center,
      dependsOnBigProp,
      0,
      this.percentToRadian(percent),
      false
    );
    ctx.lineWidth = dependsOnBigProp;
    ctx.stroke();
    ctx.clearRect(
      middleSquarePosition,
      middleSquarePosition,
      lineWidth,
      lineWidth
    );
  };

  componentDidMount() {
    this.draw();
  }

  componentDidUpdate() {
    this.draw();
  }

  render() {
    const { canvasSize } = this.props;
    return (
      <canvas
        className="mx-auto rounded-circle"
        ref={this.canvas}
        style={{
          border: '15px solid #23272B',
          backgroundColor: 'rgba(255,255,255, .7)',
        }}
        width={canvasSize}
        height={canvasSize}
      ></canvas>
    );
  }
}

function progressPercentage(props, propName, componentName) {
  const isNotNumber = typeof props.percent !== 'number';
  const isNotGreaterThanZero = props.percent < 0;
  const isNotLessThanHundred = props.percent > 100;
  if (
    props[propName] === props.percent &&
    isNotNumber &&
    isNotGreaterThanZero &&
    isNotLessThanHundred
  ) {
    return new Error(
      `Invalid prop '${propName}' issued to component ${componentName} it has to number between 0 - 100 `
    );
  }
}

ProgressBar.defaultProps = {
  className: '',
};

ProgressBar.propTypes = {
  percent: progressPercentage,
  color: PropTypes.exact({
    red: PropTypes.string,
    green: PropTypes.string,
    blue: PropTypes.string,
  }),
};

export default ProgressBar;
