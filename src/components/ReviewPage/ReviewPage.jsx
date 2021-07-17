import axios from "axios";
import { useSelector } from "react-redux"

function ReviewPage() {
    const feelingReducer = useSelector(store => store.feelingReducer);
    const understandingReducer = useSelector(store => store.understandingReducer);
    const supportReducer = useSelector(store => store.supportReducer);
    const commentReducer = useSelector(store => store.commentReducer);

    const submission = {
        feelings: feelingReducer,
        understanding: understandingReducer,
        support: supportReducer,
        comments: commentReducer
    }

    const submitButton = () => {
        axios.post('/feedback', submission)
        .then(response => {
            console.log('Success POSTing feedback', response);
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
        </div>
    )
}

export default ReviewPage