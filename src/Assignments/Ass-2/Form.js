import React from "react";
class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      department: "",
      rating: "",
      item:[]
    };
  }
  handelInput=(e)=>{
      this.setState({[e.target.name]:e.target.value})
  }
  handelSubmit=(e)=>{
    e.preventDefault();
    if(this.state.name==="" || this.state.department==="" || this.state.rating===""){
        alert("Please Fill all the data")
    }else{
        const tempArr=this.state.item;
        const tempObj={
            name:this.state.name,
            department:this.state.department,
            rating:this.state.rating
        }
        tempArr.push(tempObj);
        this.setState({
            item:tempArr,
        })
    }
  }
  render() {
    return( 
    <>
    <h1>EMPLOYEE FEEDBACK FORM</h1>
    <form>
        <label>Name</label>
        <input name="name" onChange={this.handelInput} value={this.state.name} placeholder="Enter your name"/><br/>
        <label>Department</label>
        <input name="department" onChange={this.handelInput} value={this.state.department} placeholder="Enter your department"/><br/>
        <label>Rating</label>
        <input name="rating" onChange={this.handelInput} value={this.state.rating} placeholder="Rating" /><br/>
        <button onClick={this.handelSubmit}>Submit</button>
    </form>
    <div>
        {this.state.item.map((val,index)=>{
            return(<div key={this.state.name}>
                {val.name} || {val.department} || {val.rating}
            </div>)
        })}
    </div>
    </>);
  }
}
export default Form;
