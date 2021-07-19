import React from 'react';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

function ReviewPage() {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const store = useSelector(store => store);

    // submission object contains four responses from user
    const submission = {
        feeling: store.feelingReducer,
        understanding: store.understandingReducer,
        support: store.supportReducer,
        comments: store.commentReducer
    }

    // on submit, POSTs 'submission' to database, Resets reducers.
    const submitButton = () => {
        axios.post('/feedback', submission)
        .then(response => {
            console.log('Success POSTing feedback', response);
            history.push('/thankyou')
            dispatch({
                type: 'RESET',
                payload: ''
            })
        }).catch(error => {
            console.log('Error POSTing to server', error)
        });
    }

    return(
        
        <Grid item container direction="column" justifyContent="center">
            <Grid item xs={12}>
            {/* Displays responses to survey */}
            <p>Review Your Feedback</p>
            <p>Feelings: {store.feelingReducer}</p>
            <p>Understanding: {store.understandingReducer}</p>
            <p>Support: {store.supportReducer}</p>
            <p>Comments: {store.commentReducer}</p>
            </Grid>
            <Grid item xs={12}>
            <Button variant="contained" color="secondary" onClick={() => history.push('/comments')}>
                Previous
            </Button>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
                onClick={submitButton}
            >Send
            </Button>
            </Grid>
        </Grid>
        
    )
}

export default ReviewPage