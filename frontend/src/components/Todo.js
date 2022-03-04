import React from "react";
import { Button } from "react-bootstrap";


import "./styles/Todolist.css";

class Todolist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  removeItem(id) {
    fetch(`http://localhost:8081/item/del/${id}`).then(
      this.setState({
        items: this.state.items.filter((item) => item.id !== id),
      })
    );
  }

  toggleDone(id) {
    let items = [...this.state.items];
    let item = items.find((item) => item.id === id);
    item.done = !item.done;

    fetch(`http://localhost:8081/item/upd/${id}/${item.done}`).then(
      this.setState({ items })
    );
  }

  isDone(done) {
    if (done) {
      return <Button className="btn btn-success">Yes</Button>
      //return "✅";
    } else {
      return <Button className="btn btn-success">No</Button>
      //return "❎";
    }
  }

  createItem(item) {
    return (
        <div className="ListItem" key={item.id} id={item.id}>
          <div className="Title">
            {item.item}
          </div>
          <div className="Status" onClick={() => this.toggleDone(item.id)}>
            {this.isDone(item.done)}
          </div>
          <div className="RemoveItem" onClick={() => this.removeItem(item.id)}>
            <Button className="btn btn-danger">X</Button>
          </div>
        </div>
    );
  }

  componentDidMount() {
    fetch("http://localhost:8081/items")
      .then((res) => res.json())
      .then((json) => this.setState({ items: json.items }));
  }

//   render() {
//     var items = this.state.items;
//     return (
//       <div className="TodoList">
//         <div className="List">{items.map((item) => this.createItem(item))}</div>
//     </div>
//     );
//   }
// }

  render() {
    var items = this.state.items;
    return (
      <div className="container">
        <table class="table table-primary table-bordered ">
          <thead class="table-dark">
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Item</th>
              <th>Done</th>
              <th>Delete</th>
            </tr>
          </thead>
            {items.map((item) =>{
                return (
                  <tbody>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.item}</td>
                      <td>        
                        {/* <input
                          type="file"
                          class="form-control"
                          aria-label="file example" required
                        /> */}
          <div class="invalid-feedback">Example invalid form file feedback</div></td>
                      <td>
                        <div className="d-flex justify-content-center" >
                          <div className="Status" onClick={() => this.toggleDone(item.id)}>
                            {this.isDone(item.done)}
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center">
                          <div className="RemoveItem" onClick={() => this.removeItem(item.id)}>
                            <Button className="btn btn-danger">X</Button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                );
            })}
        </table>
      </div>
    );
  }
}

export default Todolist;