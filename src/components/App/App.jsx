import React from 'react';
import axios from 'axios';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {HashRouter as Router, Route, Link} from "react-router-dom";
import FeelingPage from '../FeelingPage/FeelingPage';
import UnderstandingPage from '../UnderstandingPage/UnderstandingPage';
import SupportPage from '../SupportPage/SupportPage';
import CommentPage from '../CommentsPage/CommentsPage';
import AdminPage from '../AdminPage/AdminPage';

function App() {
  // const dispatch = useDispatch();

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      {/* <Router>
        <Route exact path="/"> */}
          <p>Take your self-assessment for the day</p>
        {/* </Route>
        <Route exact path="/feeling"> */}
          <FeelingPage />
        {/* </Route>
        <Route exact path="/understanding"> */}
          <UnderstandingPage />
        {/* </Route>
        <Route exact path="/support"> */}
          <SupportPage />
        {/* </Route>
        <Route exact path="/comments"> */}
          <CommentPage />
        {/* </Route>
        <Route exact path="/admin"> */}
          <AdminPage />
        {/* </Route>
      </Router> */}
    </div>
  );
}

export default App;
