// Define Initial State
export const initialState = {
  people: [
    {firstName: 'Margaret', lastName: 'Hamilton', id: '81d6ff6c-10f4-4db0-88f2-1ebf789b7779'},
    {firstName: 'Donald', lastName: 'Knuth', id: 'f515b8de-5916-47db-9fa8-75efe4a5ebb2'}
  ],
  view: 'PersonList',
  selectedPerson: undefined
}
// Define Types
const PAGE__SET="PAGE@@SET_PAGE";
const SELECTED__SET_SELECTED="SELECTED@@SET_SELECTED";
const SELECTED__CLEAR_SELECTED="SELECTED@@CLEAR_SELECTED";
const PERSON__ADD_PERSON="PERSON@@ADD_PERSON";
const PERSON__UPDATE_PERSON="PERSON@@UPDATE_PERSON";
const PERSON__DELETE_PERSON="PERSON@@DELETE_PERSON";

// Define Actions
export function setView(name){
  return {
    type:PAGE__SET,
    payload: name
  }
}

export function setSelected(id){
  return {
    type: SELECTED__SET_SELECTED,
    payload: id
  }
}

export function clearSelected(){
  return {
    type: SELECTED__CLEAR_SELECTED,
  };
}

export function addPerson(firstName, lastName){
  return {
    type: PERSON__ADD_PERSON,
    payload: {
      id:new Date().getTime(),
      firstName,
      lastName,
    }
  }
}

export function updatedPerson(firstName, lastName){
  return {
    type: PERSON__UPDATE_PERSON,
    payload:{
      firstName, lastName
    }
  }
}

export function deletePerson(){
  return {
    type: PERSON__DELETE_PERSON,
  }
}

// Define Thunks


// Define Reducer
export default function TodoReducer(state=initialState,{type,payload}){
  switch(type){
    case PAGE__SET:
      return {
        ...state,
        view: payload
      };
    case SELECTED__SET_SELECTED:
      return {
        ...state,
        view: 'PersonEdit',
        selectedPerson: payload
      };
    case SELECTED__CLEAR_SELECTED:
      return {
        ...state,
        view:initialState.view,
        selectedPerson: initialState.selectedPerson
      };
    case PERSON__ADD_PERSON:
      return {
        ...state,
        view:initialState.view,
        people:[
          ...state.people,
          payload
        ]
      }
    case PERSON__UPDATE_PERSON:
      return {
        ...state,
        selectedPerson: initialState.selectedPerson,
        people: state.people.map(({id, ...person})=>id===state.selectedPerson
          ? {...payload,id:state.selectedPerson}
          : {...person, id})
      }
    case PERSON__DELETE_PERSON:
      return {
        ...state,
        view:initialState.view,
        selectedPerson: initialState.selectedPerson,
        people: state.people.filter(({id})=>id!==state.selectedPerson)
      }
    default:
      return state;
  }
}