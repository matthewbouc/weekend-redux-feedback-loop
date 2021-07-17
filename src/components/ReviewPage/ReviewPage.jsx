import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";

function ReviewPage() {
    const history = useHistory();
    const dispatch = useDispatch();

    const store = useSelector(store => store);

    const submission = {
        feeling: store.feelingReducer,
        understanding: store.understandingReducer,
        support: store.supportReducer,
        comments: store.commentReducer
    }


    const submitButton = () => {
        axios.post('/feedback', submission)
        .then(response => {
            console.log('Success POSTing feedback', response);
            history.push('/thankyou')
            dispatch({
                type: 'RESET',
                payload: ''
            })
        }).catch(error => {
            console.log('Error POSTing to server', error)
        });
    }

    return(
        <div>
            <p>Review Your Feedback</p>
            <p>Feelings: {store.feelingReducer}</p>
            <p>Understanding: {store.understandingReducer}</p>
            <p>Support: {store.supportReducer}</p>
            <p>Comments: {store.commentReducer}</p>
            <button onClick={submitButton}>Submit</button>
            <br/>
            <button type="button" onClick={() => history.push('/comments')}>PREVIOUS</button>
        </div>
    )
}

export default ReviewPage