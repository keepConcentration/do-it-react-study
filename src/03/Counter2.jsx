import React from "react";

class Counter2 extends React.Component {
  render() {
    return (
      <div>
        현재 카운트 : {this.props.count}
        <button onClick={() => this.props.onAdd()}>카운트 증가</button>
      </div>
    );
  }
}

export default Counter2;
