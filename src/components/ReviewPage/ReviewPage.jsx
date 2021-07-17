import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";

function ReviewPage() {
    const history = useHistory();
    const dispatch = useDispatch();

    const feelingReducer = useSelector(store => store.feelingReducer);
    const understandingReducer = useSelector(store => store.understandingReducer);
    const supportReducer = useSelector(store => store.supportReducer);
    const commentReducer = useSelector(store => store.commentReducer);

    const submission = {
        feeling: feelingReducer,
        understanding: understandingReducer,
        support: supportReducer,
        comments: commentReducer
    }


    const submitButton = () => {
        axios.post('/feedback', submission)
        .then(response => {
            console.log('Success POSTing feedback', response);
            history.push('/thankyou')
            dispatch({
                type: 'RESET',
                payload: {}
            })
        }).catch(error => {
            console.log('Error POSTing to server', error)
        });
    }

    return(
        <div>
            <p>Review Your Feedback</p>
            <p>Feelings: {feelingReducer}</p>
            <p>Understanding: {understandingReducer}</p>
            <p>Support: {supportReducer}</p>
            <p>Comments: {commentReducer}</p>
            <button onClick={submitButton}>Submit</button>
            <br/>
            <button type="button" onClick={() => history.push('/comments')}>PREVIOUS</button>
        </div>
    )
}

export default ReviewPage