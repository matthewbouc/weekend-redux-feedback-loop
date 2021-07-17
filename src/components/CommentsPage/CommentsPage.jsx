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
            <p>Please submit comments, praises, and insults below.</p>
            <input onChange={(event) => setCommentState(event.target.value)} type="text" />
            <button type="button" disabled={!commentState} onClick={handleNext}>NEXT</button>
        </form>
    )
}


export default CommentPage