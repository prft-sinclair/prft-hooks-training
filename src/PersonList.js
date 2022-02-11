import React from 'react'
import { setView, setSelected } from './person'
import { useDispatch, useSelector } from 'react-redux';

export default function PersonList(props) {
  const dispatch = useDispatch()
  const  {people} =  useSelector((state)=>{
    return {
      people: state.App.people
    };
  })
  return (
    <div>
      <ul className="PersonList">
        {people.map((person) =>
          <li key={person.id}
              onClick={() => dispatch(setSelected(person.id))}>{person.firstName} {person.lastName}</li>)}
      </ul>
      <button className="button-primary" onClick={() => dispatch(setView('PersonAdd'))}>
        Add a Person
      </button>
    </div>
  )
}