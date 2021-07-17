import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function FeelingPage() {
    const [feelingState, setFeelingState] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleNext = () => {
        dispatch({
            type: 'GET_FEELINGS',
            payload: feelingState
        })
        history.push('/understanding');
    }

    return(
        <form>
            <p>How are you feeling today?</p>
            <input onChange={(event)=>setFeelingState(event.target.value)} type="text" />
            <button type="button" disabled={!feelingState} onClick={handleNext}>NEXT</button>
        </form>
    )
}


export default FeelingPage