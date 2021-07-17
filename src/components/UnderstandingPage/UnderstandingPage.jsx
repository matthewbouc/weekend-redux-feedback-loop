import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function UnderstandingPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [understandingState, setUnderstandingState] = useState('');

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
            <input onChange={(event) => setUnderstandingState(event.target.value)} type="text" />
            <button type="button" disabled={!understandingState} onClick={handleNext}>NEXT</button>
            <br/>
            <button type="button" onClick={() => history.push('/feeling')}>PREVIOUS</button>
        </form>
    )
}


export default UnderstandingPage