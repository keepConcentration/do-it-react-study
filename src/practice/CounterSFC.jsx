import React, { useState } from "react";
import PropTypes from "prop-types";

function CounterSFC(props) {
  console.log(props.count);
  let [count, setCount] = useState(props.count);
  const [id, setId] = useState(props.id);
  const [name, setName] = useState(props.name);

  const { increaseFunc } = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>id: {id}</div>
      <div>name: {name}</div>
      <div>count: {count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>카운트 증가</button>
      </div>
    </>
  );
}

CounterSFC.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  increaseFunc: PropTypes.func,
  count: PropTypes.number,
};

CounterSFC.defaultProps = {
  id: "defaultId",
  name: "defaultName",
  increaseFunc: () => {},
  count: 0,
};

export default CounterSFC;
