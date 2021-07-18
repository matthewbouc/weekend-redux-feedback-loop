import { Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom"

function FeedbackSubmitted() {
    const history = useHistory();

    const leaveButton = () => {
        history.push('/');
    }

    return(
        <div>
            <Typography variant="h5">Feedback Submitted!</Typography>
            <Typography variant="h5">Thank you!</Typography>
            <Button variant="contained" color="secondary" onClick={leaveButton}>Leave New Feedback</Button>
        </div>
    )
}

export default FeedbackSubmitted