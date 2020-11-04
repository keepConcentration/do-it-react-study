import React from "react";
import PropTypes from "prop-types";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      name: props.name,
      count: props.count,
    };

    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  }

  render() {
    return (
      <>
        <div>id: {this.id}</div>
        <div>name: {this.name}</div>
        <div>stateId: {this.state.id}</div>
        <div>stateName: {this.state.name}</div>
        <div>stateCount: {this.state.count}</div>
        <div>카운트: {this.state.count}</div>
        <div>
          <button onClick={this.increaseCount}>카운트 증가</button>
        </div>
      </>
    );
  }
}

Counter.propsTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  count: PropTypes.number,
};

Counter.defaultProps = {
  id: "id",
  name: "name",
  count: 0,
};
export default Counter;
