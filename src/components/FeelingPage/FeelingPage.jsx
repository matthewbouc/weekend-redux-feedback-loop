import {useState} from 'react';
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

    // Brings in reducer and sets default local state to current reducer
    // If the user clicks Next and leaves the page, then comes back, their previous response is still shown.
    const feelingReducer = useSelector(store => store.feelingReducer);
    const [feelingState, setFeelingState] = useState(feelingReducer);

    
    // on Next, dispatch and move to next page.
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
                {/* Button is disabled and greyed out if there isn't a local state.  Local state persists beyond leaving page, thanks to reducer being default state (above) */}
                <Button variant="contained" color="primary" disabled={!feelingState} onClick={handleNext}>NEXT</Button>
            </Grid>
        </Grid>
    )
}


export default FeelingPage