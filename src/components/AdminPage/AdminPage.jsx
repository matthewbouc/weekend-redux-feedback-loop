import axios from "axios"
import { useEffect, useState } from "react";

function AdminPage() {

    useEffect(() => {
        console.log('In useEffect');
        getFeedbackList(); // GETs database on page load
    }, []);

    const [feedbackList, setFeedbackList] = useState([]);

    // DELETEs a specific id on trash icon click
    const deleteFeedback = (rowId) => {
        axios.delete('/:id')
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

    // Toggles 'flagged' status in the database between true/false
    const putFlagFeedback = (rowId) => {
        axios.put('/feedback/:id')
        .then(response => {
            console.log('Success PUTting to server', response);
            getFeedbackList();
        }).catch(error => {
            console.log('Error PUTting to server', error);
        });
    }

    return(
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
                            <td>Flag icon</td> 
                        {/* Flag onClick turn red.. start grey. This needs a PUT */}
                            <td>Delete Icon</td>
                        {/* Delete icon, turn on confirmation modal/alert/ thing 
                        This needs a DELETE*/}
                    </tr>
                    )
                })}
            </tbody>
        </table>
    )
}


export default AdminPage