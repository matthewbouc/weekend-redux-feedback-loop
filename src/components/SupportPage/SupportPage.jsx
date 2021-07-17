import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FaceIcons from '../Icons/FaceIcons';

function SupportPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const supportReducer = useSelector(store => store.supportReducer);
    const [supportState, setSupportState] = useState(supportReducer);
    

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
            <FaceIcons state={supportState} setState={setSupportState} />
            <button type="button" disabled={!supportReducer && !supportState} onClick={handleNext}>NEXT</button>
            <br/>
            <button type="button" onClick={() => history.push('/understanding')}>PREVIOUS</button>
        </form>
    )
}


export default SupportPage