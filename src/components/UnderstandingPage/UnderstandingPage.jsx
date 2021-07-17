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
            <input onChange={(event) => setUnderstandingState(event.target.value)} type="text" />
            <button onClick={handleNext} type="button">NEXT</button>
        </form>
    )
}


export default UnderstandingPage