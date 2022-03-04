import React from "react";
import "./styles/Add.css";

class AddDetail extends React.Component {
  AddDetail = event => {
    if (event.key === "Enter") {
      fetch(`http://localhost:8081/detail/add/${event.target.value}`).then(
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
          onKeyDown={this.AddDetail} 
          />
        <button class="btn btn-primary" type="submit">Submit form</button>
      </label>
        <br/>
      </form>
    );
  }  
}

export default AddDetail;
