import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FaceIcons from '../Icons/FaceIcons';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

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
        <form>
            <Typography variant="h5">Do you feel loved and supported by the Staff? Has at least one Staff member hugged you today?</Typography>
            <FaceIcons state={supportState} setState={setSupportState} />
            <Button variant="contained" color="primary" disabled={!supportState} onClick={handleNext}>NEXT</Button>
            <br/>
            <Button variant="contained" color="secondary" onClick={() => history.push('/understanding')}>
                Previous
            </Button>
        </form>
    )
}


export default SupportPage