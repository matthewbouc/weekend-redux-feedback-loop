import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

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

    // const disabledButton = () => {
    //     console.log(feelingReducer)
    //     if (!feelingReducer && !feelingState){
    //         return true
    //     }
    //     return false
    // }
    // console.log(disabledButton());

    return(
        <form>
            <p>How are you feeling today?</p>
            <input onChange={(event)=>setFeelingState(event.target.value)} type="text" />
            <button type="button" disabled={!feelingReducer && !feelingState} onClick={handleNext}>NEXT</button>
        </form>
    )
}


export default FeelingPage