import React, {Component} from 'react'
import {connect} from 'react-redux';
import PersonList from './PersonList'
import PersonEdit from './PersonEdit'
import PersonAdd from './PersonAdd'
import Nav from './Nav'
import './styles/App.css'
import './skeleton.css'

import MyInput from './MyInput';
import MyInput2 from './MyInput2';

export function mapStateToProps(state, ownProps){
  return {
    view: state.App.view,
  }
}

function getView(view){
  switch (view){
    case 'PersonAdd':
      return PersonAdd;
    case 'PersonEdit':
      return PersonEdit;
    default:
      return PersonList;
  }
}

function App({view}){
  const CurrentView = getView(view);
      return (
      <div className="main">
        <Nav/>
        <CurrentView />
        <MyInput label="First Name" name="fname" value="" />
        <hr />
        <MyInput2 label="First Name" name="fname" value="" />
      </div>
    )
}

export default connect(mapStateToProps)(App)
