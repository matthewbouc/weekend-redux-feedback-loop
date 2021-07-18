import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FaceIcons from '../Icons/FaceIcons';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import useStyles from '../Theme/useStyle';


function FeelingPage() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const feelingReducer = useSelector(store => store.feelingReducer);
    const [feelingState, setFeelingState] = useState(feelingReducer);

    

    const handleNext = () => {
            dispatch({
                type: 'GET_FEELINGS',
                payload: feelingState
            });
        history.push('/understanding');
    }

    return(
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h5">How are you feeling today?</Typography>
            </Grid>
            <Grid item xs={12}>
                <FaceIcons state={feelingState} setState={setFeelingState} />
            </Grid>
            <Grid item className={classes.buttonSpacing} ml={15} xs={12}>
                <Button variant="contained" color="primary" disabled={!feelingState} onClick={handleNext}>NEXT</Button>
            </Grid>
        </Grid>
    )
}


export default FeelingPage