import React from "react";
import { render } from "react-dom";
import MyComponent from '../src';

function Demo() {
  return(
    <div>
      <MyComponent />
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
