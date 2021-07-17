import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
// import {useDispatch, useSelector} from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from "react-router-dom";
import FeelingPage from '../FeelingPage/FeelingPage';
import UnderstandingPage from '../UnderstandingPage/UnderstandingPage';
import SupportPage from '../SupportPage/SupportPage';
import CommentPage from '../CommentsPage/CommentsPage';
import AdminPage from '../AdminPage/AdminPage';
import ReviewPage from '../ReviewPage/ReviewPage';
import FeedbackSubmitted from '../FeedbackSubmitted/FeedbackSubmitted';
import Header from '../Header/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Route exact path="/">
          <p>Take your self-assessment for the day</p>
          <Link to="/feeling">Begin Assessment</Link>
        </Route>
        <Route exact path="/feeling" component={FeelingPage} />
        <Route exact path="/understanding" component={UnderstandingPage} />
        <Route exact path="/support" component={SupportPage} />
        <Route exact path="/comments" component={CommentPage} />
        <Route exact path="/review" component={ReviewPage} />
        <Route exact path="/thankyou" component={FeedbackSubmitted} />
        <Route exact path="/admin" component={AdminPage} />
      </Router>
    </div>
  );
}

export default App;
