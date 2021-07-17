import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function CommentPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [commentState, setCommentState] = useState('');
    const commentReducer = useSelector(store => store.commentReducer);

    const handleNext = () => {
        if (!commentReducer || commentState){
            dispatch({
                type: 'GET_COMMENT',
                payload: commentState
            })
        }
        history.push('/review');
    }
    
    return(
        <form>
            <p>Please submit comments, praises, and insults below.</p>
            <input onChange={(event) => setCommentState(event.target.value)} type="text" />
            <button type="button" disabled={!commentReducer && !commentState} onClick={handleNext}>NEXT</button>
            <br/>
            <button type="button" onClick={() => history.push('/support')}>PREVIOUS</button>
        </form>
    )
}


export default CommentPage