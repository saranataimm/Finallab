import React from "react";
import "./styles/Addbar.css";
import { useState } from "react";

class AddBar extends React.Component {
  addItem = event => {
    if (event.key === "Enter") {
      fetch(`http://localhost:8081/item/add/${event.target.value}`).then(
      alert("Bug: Reload The Page To View Changes")
      );
    }
  };

  render() {
    return (
      <form action="">
      <label className="AddBar">
        <input
          className="AddBar-Text"
          type="text"
          placeholder="Enter TODO Item"
          onKeyDown={this.addItem} 
          />
        <button onClick={this.addItem} class="btn btn-primary" type="submit">Save</button>
      </label>
        <br/>
      </form>
    );
  }

}


// class AddDetail extends React.Component {
//   addDetail = event => {
//     if (event.key === "Enter") {
//       fetch(`http://localhost:8081/detail/add/${event.target.value}`).then(
//       alert("Bug: Reload The Page To View Changes")
//       );
//     }
//   };

//   render() {
//     return (
//       <div className="AddBar">
//         <input
//           className="AddBar-Text"
//           type="text"
//           placeholder="Enter TODO Item"
//           onKeyDown={this.addItem} 
//         />
//       </div>
//     );
//   }  
// }




export default AddBar;
