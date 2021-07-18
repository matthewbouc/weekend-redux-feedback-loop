import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { TextareaAutosize } from '@material-ui/core';


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
            <Typography variant="h5">Please submit comments, praises, and insults below.</Typography>
            <TextareaAutosize aria-label="minimum height" minRows={3} onChange={(event) => setCommentState(event.target.value)} value={commentState}/>
            <Button variant="contained" color="primary" disabled={!commentState} onClick={handleNext}>NEXT</Button>
            <Button variant="contained" color="secondary" onClick={() => history.push('/support')}>
                Previous
            </Button>
        </form>
    )
}


export default CommentPage