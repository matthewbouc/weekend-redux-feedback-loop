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
            <input onChange={(event)=>setFeelingState(event.target.value)} type="text" />
            <button onClick={handleNext} type="button">NEXT</button>
        </form>
    )
}


export default FeelingPage