import { Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom"
import { Grid } from "@material-ui/core";

function FeedbackSubmitted() {
    const history = useHistory();

    const leaveButton = () => {
        history.push('/');
    }

    return(
        <Grid container justifyContent="center" direction="column">
            <Typography variant="h5">Feedback Submitted!</Typography>
            <Typography variant="h5">Thank you!</Typography>
            <Grid item xs={12}>
            <Button variant="contained" color="secondary" onClick={leaveButton}>Leave New Feedback</Button>
            </Grid>
        </Grid>
    )
}

export default FeedbackSubmitted