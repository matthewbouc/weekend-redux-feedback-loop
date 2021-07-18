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
            <Button variant="contained" color="primary" disabled={!supportState} onClick={handleNext}>NEXT</Button>
            </Grid>
        </form>
        </Grid>
        
    )
}


export default SupportPage