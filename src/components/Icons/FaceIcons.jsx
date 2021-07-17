import { IconButton } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import MoodBadTwoToneIcon from '@material-ui/icons/MoodBadTwoTone';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedTwoToneIcon from '@material-ui/icons/SentimentDissatisfiedTwoTone';
import SentimentSatisfiedTwoToneIcon from '@material-ui/icons/SentimentSatisfiedTwoTone';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import MoodTwoToneIcon from '@material-ui/icons/MoodTwoTone';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    veryDissatisfied: {
        color: 'red'
    },
    dissatisfied: {
        color: 'orange'
    },
    mood: {
        color: 'grey'
    },
    satisfied: {
        color: '#52BA52'
    },
    verySatisfied: {
        color: 'green'
    },

}));

function FaceIcons ({state, setState}) {
    const classes = useStyles();

    return (
        <>
            <IconButton onClick={() => setState(1)}>
            { state == 1 ? <MoodBadTwoToneIcon className={classes.veryDissatisfied} fontSize="large"/> : <MoodBadIcon className={classes.veryDissatisfied} fontSize="large"/> }
            </IconButton>
            <IconButton onClick={() => setState(2)}>
            { state == 2 ? <SentimentDissatisfiedTwoToneIcon className={classes.dissatisfied} fontSize="large"/> : <SentimentVeryDissatisfiedIcon className={classes.dissatisfied} fontSize="large"/> }
            </IconButton>
            <IconButton onClick={() => setState(3)}>
            { state == 3 ? <FaceIcon className={classes.mood} fontSize="large"/> : <FaceOutlinedIcon className={classes.mood} fontSize="large"/>}
            </IconButton>
            <IconButton onClick={() => setState(4)}>
            { state == 4 ? <SentimentSatisfiedTwoToneIcon className={classes.satisfied} fontSize="large"/> : <SentimentSatisfiedAltIcon className={classes.satisfied} fontSize="large"/> }
            </IconButton>
            <IconButton onClick={() => setState(5)}>
            { state == 5 ? <MoodTwoToneIcon className={classes.verySatisfied} fontSize="large" /> : <SentimentVerySatisfiedIcon className={classes.verySatisfied} fontSize="large" /> }
            </IconButton>
        </>
    )
}

export default FaceIcons