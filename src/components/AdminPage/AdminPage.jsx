import React from "react";
import axios from "axios"
import { useEffect, useState } from "react";
import FlagIcon from '@material-ui/icons/Flag';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles, Modal } from "@material-ui/core";
import { Button } from "@material-ui/core";
import './AdminPage.css';
import { Grid } from "@material-ui/core";

// Styling for Modal
const useStyles = makeStyles((theme) => ({
    paper: {
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  
function AdminPage() {
    const classes = useStyles();

    useEffect(() => {
        console.log('In useEffect');
        getFeedbackList(); // GETs database on page load
    }, []);

    const [feedbackList, setFeedbackList] = useState([]);
    const [deleteId, setDeleteId] = useState('');
    const [open, setOpen] = useState(false);  

    // handleOpen and handleClose for Modal popup
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    // clicking trash icon opens modal and sets delete id
    const handleInitialDelete = (surveyId) => {
        handleOpen();
        setDeleteId(surveyId)
    }
    // modal delete button, runs DELETE request and closes modal
    const handleFinalDelete = () => {
        deleteFeedback(deleteId);
        setDeleteId('');
        handleClose();
    }
    

    // DELETEs a specific id
    const deleteFeedback = (rowId) => {
        axios.delete(`/feedback/${rowId}`)
        .then(response => {
            console.log('Success DELETE-ing to server', response);
            getFeedbackList();
        }).catch(error => {
            console.log('Error DELETE-ing to server', error);
        });
    }

    // GETs feedback on page load and after PUT/DELETE requests
    const getFeedbackList = () => {
        axios.get('/feedback')
        .then(response => {
            console.log('GET success', response);
            setFeedbackList(response.data);
        }).catch(error => {
            console.log('Error GETting from the server', error);
        });
    }

    // PUT request toggles 'flagged' status in the database between true/false
    const putFlagFeedback = (rowId) => {
        axios.put(`/feedback/${rowId}`)
        .then(response => {
            console.log('Success PUTting to server', response);
            getFeedbackList();
        }).catch(error => {
            console.log('Error PUTting to server', error);
        });
    }

    return(
        <Grid container justifyContent="center">
        <table>
            <thead>
                <tr>
                    <th>Feeling</th>
                    <th>Comprehension</th>
                    <th>Support</th>
                    <th>Comments</th>
                    <th>Flag</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {feedbackList.map((survey) => {
                    return(
                        <tr key={survey.id}>
                            <td>{survey.feeling}</td>
                            <td>{survey.understanding}</td>
                            <td>{survey.support}</td>
                            <td>{survey.comments}</td>
                            {/* Ternary to flip between red and grey icons*/}
                            <td>{survey.flagged ? 
                                <FlagIcon 
                                    onClick={() => putFlagFeedback(survey.id)} 
                                    color="secondary" 
                                    fontSize="small" 
                                    className="clickableIcon"/> : 
                                <FlagIcon 
                                    onClick={() => putFlagFeedback(survey.id)}
                                    color="action"
                                    fontSize="small"
                                    className="clickableIcon"/> }
                            </td> 
                            <td>
                                <DeleteIcon
                                    onClick={() => handleInitialDelete(survey.id)}
                                    color="primary"
                                    className="clickableIcon"/>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        {/* Modal appears on trash icon click */}
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div className={classes.paper}>
                <h2 id="simple-modal-title">Delete Feedback</h2>
                <p id="simple-modal-description">
                Are you sure you want to permanently delete this feedback survey?
                </p>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleFinalDelete}
                >
                    Delete
                </Button>
            </div>
        </Modal>
        </Grid>
    )
}


export default AdminPage