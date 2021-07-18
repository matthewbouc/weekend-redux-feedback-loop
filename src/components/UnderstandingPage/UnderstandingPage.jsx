import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FaceIcons from '../Icons/FaceIcons';
import Button from '@material-ui/core/Button';
import useStyles from '../Theme/useStyle';

function UnderstandingPage() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

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
        <form>
            <p>How well did you understand today's material?</p>
            <FaceIcons state={understandingState} setState={setUnderstandingState} />
            <Button variant="contained" className={classes.nextButton} disabled={!understandingState} onClick={handleNext}>NEXT</Button>
            <Button variant="contained" className={classes.previousButton}  onClick={() => history.push('/feeling')}>
                Previous
            </Button>
        </form>
    )
}


export default UnderstandingPage