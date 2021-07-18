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
import { Grid, Typography } from '@material-ui/core';
import useStyles from '../Theme/useStyle';
import { AppBar } from '@material-ui/core';


function App() {
  const classes = useStyles();
  return (
    <div className='App'>
      <AppBar className={classes.header} position="relative">
        <Header />
      </AppBar>
      <Grid container >
        <Router>
          <Route exact path="/">
            <Typography variant="h5">Take your self-assessment for the day!</Typography>
            <Link to="/feeling"><Typography variant="h5">Begin Assessment</Typography></Link>
          </Route>
          <Route exact path="/feeling" component={FeelingPage} />
          <Route exact path="/understanding" component={UnderstandingPage} />
          <Route exact path="/support" component={SupportPage} />
          <Route exact path="/comments" component={CommentPage} />
          <Route exact path="/review" component={ReviewPage} />
          <Route exact path="/thankyou" component={FeedbackSubmitted} />
          <Route exact path="/admin" component={AdminPage} />
        </Router>
      </Grid>
    </div>
  );
}

export default App;
