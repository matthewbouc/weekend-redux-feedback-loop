import { useHistory } from "react-router-dom"

function FeedbackSubmitted() {
    const history = useHistory();

    const leaveButton = () => {
        history.push('/');
    }

    return(
        <div>
            <p>Feedback Submitted!</p>
            <p>Thank you!</p>
            <button onClick={leaveButton}>Leave New Feedback</button>
        </div>
    )
}

export default FeedbackSubmitted