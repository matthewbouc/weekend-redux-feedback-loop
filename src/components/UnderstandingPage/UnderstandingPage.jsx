import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FaceIcons from '../Icons/FaceIcons';

function UnderstandingPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [understandingState, setUnderstandingState] = useState('');
    const understandingReducer = useSelector(store => store.understandingReducer)

    const handleNext = () => {
        if (!understandingReducer || understandingState){
            dispatch({
                type: 'GET_UNDERSTANDING',
                payload: understandingState
            })
        }
        history.push('/support');
    }

    return(
        <form>
            <p>How well did you understand today's material?</p>
            <FaceIcons state={understandingState} setState={setUnderstandingState} />
            <button type="button" disabled={!understandingReducer && !understandingState} onClick={handleNext}>NEXT</button>
            <br/>
            <button type="button" onClick={() => history.push('/feeling')}>PREVIOUS</button>
        </form>
    )
}


export default UnderstandingPage