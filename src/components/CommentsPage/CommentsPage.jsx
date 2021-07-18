import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';


function CommentPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const commentReducer = useSelector(store => store.commentReducer);
    const [commentState, setCommentState] = useState(commentReducer);

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
            <input onChange={(event) => setCommentState(event.target.value)} type="text" value={commentState}/>
            <Button variant="contained" color="primary" disabled={!commentState} onClick={handleNext}>NEXT</Button>
            <Button variant="contained" color="primary" onClick={() => history.push('/support')}>
                Previous
            </Button>
        </form>
    )
}


export default CommentPage