import { Component, createRef } from "react";

export default class MyInput extends Component {
  constructor(props){
    super(props);
    
    this.fieldRef = createRef()
    this.state = {
      value: props.value,
      isDirty: false,
      isValid: true,
    }
  }

  componentDidMount(){
    console.log("MyInput mounted")
  }

  handleUpdate = (event)=>{
    this.setState({
      value:event.target.value,
      isDirty: true
    })
  }

  handleClick = (event)=>{
    if (this.state.isDirty){
      const regExName = /^[A-Z][a-zA-Z]*$/
      const isNameValid = regExName.test(this.state.value);
      this.setState({
        isValid: isNameValid
      });
      !isNameValid && this.fieldRef.current.focus();
    }
  }

  render(){
    return (
      <div>
        <label htmlFor={this.props.name}>
          {this.props.label}
        </label>
        <input
          id={this.props.name}
          name={this.props.name}
          onChange={this.handleUpdate}
          ref={this.fieldRef}
          type="text"
          value={this.state.value}
        />
        {this.state.isDirty && !this.state.isValid ? 
          (<div>Invalid Name</div>):(<br />)
        }
        <button
            type="button"
            onClick={this.handleClick}
          >
            Validate
          </button>
      </div>
    )
  }


}