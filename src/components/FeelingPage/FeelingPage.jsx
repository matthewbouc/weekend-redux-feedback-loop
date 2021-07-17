import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FaceIcons from '../Icons/FaceIcons';


function FeelingPage() {
    const [feelingState, setFeelingState] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const feelingReducer = useSelector(store => store.feelingReducer);

    const handleNext = () => {
        if (!feelingReducer || feelingState){
            dispatch({
                type: 'GET_FEELINGS',
                payload: feelingState
            });
        }
        history.push('/understanding');
    }

    return(
        <form>
            <p>How are you feeling today?</p>
                <FaceIcons state={feelingState} setState={setFeelingState} />
            <button type="button" disabled={!feelingReducer && !feelingState} onClick={handleNext}>NEXT</button>
        </form>
    )
}


export default FeelingPage