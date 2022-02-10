import React from "react";

class FormHandling extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      contact: null,
      user: [],
    };
  }
  handelInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handelSubmit = (e) => {
    e.preventDefault();
    const tempObj = {
      name: this.state.name,
      contact: this.state.contact,
    };
    const tempArr = this.state.user;
    tempArr.push(tempObj);
    this.setState({
      user: tempArr,
    });
  };

  render() {
    return (
      <>
        <form>
          <label>Name</label>
          <input
            value={this.state.name}
            onChange={this.handelInput}
            name="name"
          />
          <label>Contact</label>
          <input
            value={this.state.contact}
            name="contact"
            onChange={this.handelInput}
            type="number"
          />
          <button onClick={this.handelSubmit}>Submit</button>
        </form>
        <div>
          {this.state.user.map((val, index) => {
            return (
              <h3>
                Name:{val.name} || Contact:{val.contact}
              </h3>
            );
          })}
        </div>
      </>
    );
  }
}

export default FormHandling;
