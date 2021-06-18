import React, { useState } from "react";
import "./first.css";

export default function First(props) {
  const name = "Himanshu Tripathi";

  // collecting props in the object and then later on can just use the object property variable to get the props
  let properties = {
    ame: props.game,
    desc: props.desc,
  };
  //props destructing
  const { game, desc } = props;

  const [count, setcount] = useState(0);

  const increamentCounter = () => {
    setcount(count + 1);
  };
  return (
    <React.Fragment>
      <h1 className="title"> Function Component</h1>
      <p className="display-4 m-5 p-5">Describe yourself {name}</p>
      <span>{properties.ame}</span>
      <br />
      <span style={styles}>{properties.desc}</span>
      <p>{game + desc}</p>
      <p>{count}</p>
      <button onClick={increamentCounter}>Increament Counter</button>
    </React.Fragment>
  );
}

let styles = {
  fontSize: "1.5em",
  backgroundColor: "lightgray",
};
