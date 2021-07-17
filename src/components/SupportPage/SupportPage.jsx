import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function SupportPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [supportState, setSupportState] = useState('');
    const supportReducer = useSelector(store => store.supportReducer);

    const handleNext = () => {
        if (!supportReducer || supportState){
            dispatch({
                type: 'GET_SUPPORT',
                payload: supportState
            })
        }
        history.push('/comments');
    }

    return(
        <form>
            <p>Do you feel loved and supported by the Staff?</p>
            <input onChange={(event) => setSupportState(event.target.value)} type="text" />
            <button type="button" disabled={!supportReducer && !supportState} onClick={handleNext}>NEXT</button>
            <br/>
            <button type="button" onClick={() => history.push('/understanding')}>PREVIOUS</button>
        </form>
    )
}


export default SupportPage