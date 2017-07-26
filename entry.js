import React from "react";
import { render } from "react-dom";

class HelloReact extends React.Component {
  render() {
    return(
      <div id='helloReact'>
        Hello From React!
      </div>
    );
  }
} 

render(<HelloReact />, document.getElementById('root-app'));