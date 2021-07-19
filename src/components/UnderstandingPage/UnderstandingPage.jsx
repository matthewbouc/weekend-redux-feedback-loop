import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FaceIcons from '../Icons/FaceIcons';
import Button from '@material-ui/core/Button';
import useStyles from '../Theme/useStyle';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';

function UnderstandingPage() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    // Brings in reducer and sets default local state to current reducer
    // If the user clicks Next and leaves the page, then comes back, their previous response is still shown.
    const understandingReducer = useSelector(store => store.understandingReducer)
    const [understandingState, setUnderstandingState] = useState(understandingReducer);
    

    const handleNext = () => {
            dispatch({
                type: 'GET_UNDERSTANDING',
                payload: understandingState
            })
        history.push('/support');
    }

    return(
        
        <Grid container justifyContent="center">
        <form>
            <Grid item xs={12}>
            <Typography variant="h5">How well did you understand today's material?</Typography>
            </Grid>
            <Grid item xs={12}>
            <FaceIcons state={understandingState} setState={setUnderstandingState} />
            </Grid>
            <Grid item xs={12}>
            <Button variant="contained" color="secondary"  onClick={() => history.push('/feeling')}>
                Previous
            </Button>
            {/* Button is disabled and greyed out if there isn't a local state.  Local state persists beyond leaving page, thanks to reducer being default state (above) */}
            <Button variant="contained" color="primary" disabled={!understandingState} onClick={handleNext}>NEXT</Button>
            </Grid>
        </form>
        </Grid>
    )
}


export default UnderstandingPage