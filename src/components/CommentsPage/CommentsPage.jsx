import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function CommentPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [commentState, setCommentState] = useState('');

    const handleNext = () => {
        dispatch({
            type: 'GET_COMMENT',
            payload: commentState
        })
        history.push('/review');
    }
    
    return(
        <form>
            <input onChange={(event) => setSupportState(event.target.value)} type="textfield" />
            <button onClick={handleNext} type="button">NEXT</button>
        </form>
    )
}


export default CommentPage