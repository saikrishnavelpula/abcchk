
import React, { Component } from 'react';
import './App.css';

class App extends Component {
 constructor (props, context) {
    super(props, context)

  this.state = {
      toplabel: "test",
      bottomlabel: 123,
     
      config:{
        toplabelcalss: "toplabelclass",
        bottomlabelclass: "bottomlabelclass",
        superscript: false
        toplabelclasswithSuper:
        bottomlabelwithSuper:
      }
    }


  }

    render() {
    return (
      <section>

        <div>
          <span className={this.state.superscript ? "textclass" : "numberclass"}>{this.state.toplabel}</span>{this.state.superscript ? <sup>123</sup> : ""} 
        </div>
        <div>
          <span className={this.state.superscript ? "textclass" : "numberclass"}>{this.state.bottomlabel}</span>
        </div>
      
    </section>
    );
  }
}

const Pie1 = (props) => {
  return (
   <h1>dummy</h1>
    )
};

export default App;
