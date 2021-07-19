import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FaceIcons from '../Icons/FaceIcons';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';

function SupportPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    // Brings in reducer and sets default local state to current reducer
    // If the user clicks Next and leaves the page, then comes back, their previous response is still shown.
    const supportReducer = useSelector(store => store.supportReducer);
    const [supportState, setSupportState] = useState(supportReducer);
    

    const handleNext = () => {
            dispatch({
                type: 'GET_SUPPORT',
                payload: supportState
            })
        history.push('/comments');
    }

    return(
        
        <Grid item container justifyContent="center">
        <form>
            <Grid item xs={12}>
            <Typography variant="h5">Do you feel loved and supported by the Staff?</Typography>
            </Grid>
            <Grid item xs={12}>
            <FaceIcons state={supportState} setState={setSupportState} />
            </Grid>
            <Grid item xs={12}>
            <Button variant="contained" color="secondary" onClick={() => history.push('/understanding')}>Previous</Button>
            {/* Button is disabled and greyed out if there isn't a local state.  Local state persists beyond leaving page, thanks to reducer being default state (above) */}
            <Button variant="contained" color="primary" disabled={!supportState} onClick={handleNext}>NEXT</Button>
            </Grid>
        </form>
        </Grid>
        
    )
}


export default SupportPage