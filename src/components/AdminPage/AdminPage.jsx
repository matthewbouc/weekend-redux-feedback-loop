import axios from "axios"
import { useEffect, useState } from "react";

function AdminPage() {

    useEffect(() => {
        console.log('In useEffect');
        getFeedbackList();
    }, []);

    const [feedbackList, setFeedbackList] = useState([]);

    const getFeedbackList = () => {
        axios.get('/feedback')
        .then(response => {
            console.log('GET success', response);
            setFeedbackList(response.data);
        }).catch(error => {
            console.log('Error GETting from the server', error);
        });
    }

    const putFlagFeedback = (rowId) => {

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