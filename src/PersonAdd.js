import React, {Component} from 'react'
import {connect} from 'react-redux';
import { clearSelected, addPerson } from './person'

export const mapDispatchToProps={
  clearSelected,
  addPerson,
}
class PersonAdd extends Component {

  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      id: ''
    }
  }

  changeFirstName = (event) => {
    const newState = JSON.parse(JSON.stringify(this.state))
    newState.firstName = event.target.value // text in the box
    super.setState(newState)
  }

  changeLastName = (event) => {
    const newState = JSON.parse(JSON.stringify(this.state))
    newState.lastName = event.target.value // text in the box
    super.setState(newState)
  }

  render() {
    return (
      <div className="PersonAdd">
        <span>Add a Person</span>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" value={this.state.firstName}
               id="firstName"
               onChange={this.changeFirstName}/>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" value={this.state.lastName}
               id="lastName"
               onChange={this.changeLastName}/>
        <div className="PersonAddBtns">
          <button className="button-primary" onClick={() => this.props.addPerson(this.state.firstName, this.state.lastName)}>SAVE</button>
          <button className="button-primary" onClick={this.props.clearSelected}>CANCEL</button>
        </div>
      </div>
    )
  }
}

export default connect(undefined,mapDispatchToProps)(PersonAdd);
