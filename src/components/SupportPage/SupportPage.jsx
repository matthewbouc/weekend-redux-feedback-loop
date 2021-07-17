import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function SupportPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [supportState, setSupportState] = useState('');

    const handleNext = () => {
        dispatch({
            type: 'GET_SUPPORT',
            payload: supportState
        })
        history.push('/comments');
    }

    return(
        <form>
            <input onChange={(event) => setSupportState(event.target.value)} type="text" />
            <button onClick={handleNext} type="button">NEXT</button>
        </form>
    )
}


export default SupportPage