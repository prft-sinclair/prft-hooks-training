import React from 'react'
import {connect} from 'react-redux'
import { setView, setSelected } from './person'

export function mapStateToProps(state){
  return {
    people: state.App.people
  };
}

export const mapDispatchToProps = {
  setView, setSelected
}

export function PersonList(props) {
  return (
    <div>
      <ul className="PersonList">
        {props.people.map((person) =>
          <li key={person.id}
              onClick={() => props.setSelected(person.id)}>{person.firstName} {person.lastName}</li>)}
      </ul>
      <button className="button-primary" onClick={() => props.setView('PersonAdd')}>
        Add a Person
      </button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);
