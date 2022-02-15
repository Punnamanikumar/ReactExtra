import React from "react";
import RenderData from "./RenderData";

class FormData extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      department: "",
      rating: "",
      data: [],
      displayForm:true,
    };
  }

  handelInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handelSubmit = (e) => {
    e.preventDefault();

    if( this.state.name === "" || this.state.department === "" || this.state.rating === "" ){
      alert("Please Fill all the data");
    } 
    else {
      const tempArr = this.state.data;
      const tempObj = {
        name: this.state.name,
        department: this.state.department,
        rating: this.state.rating,
      };
      tempArr.push(tempObj);
      this.setState({
        data: tempArr,
        displayForm:false,
        name:"",
        department:"",
        rating:""
      });
    }
  };
  
  render() {
    return (
      <>
        <h1>{this.state.displayForm ? "EMPLOYEE FEEDBACK FORM" : "EMPLOYEE FEEDBACK DATA"}</h1>
        {this.state.displayForm &&
          <form>
            <label>Name</label>
            <input name="name" onChange={this.handelInput} value={this.state.name} placeholder="Enter your name" className="input3" /><br />
            <label>Department</label>
            <input name="department" onChange={this.handelInput} value={this.state.department} placeholder="Enter your department"/><br />
            <label>Rating</label>
            <input name="rating" type="number" onChange={this.handelInput} value={this.state.rating} placeholder="Rating" className="input3"/><br />
            <button onClick={this.handelSubmit}>Submit</button>
          </form>}

          {!this.state.displayForm && <div className="Parentdiv">{this.state.data.map((val,index)=>{return(<RenderData name={val.name} department={val.department} rating={val.rating} key="index" />)})}</div>}
          {!this.state.displayForm && <button type="submit" onClick={()=>this.setState({displayForm:true})}> GoBack </button>}
      </>
    );
  }
}
export default FormData;
