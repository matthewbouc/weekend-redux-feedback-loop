import { makeStyles } from '@material-ui/core/styles';
import theme from './theme';

const useStyles = makeStyles(() => ({
    nextButton: {
        backgroundColor: theme.palette.tertiary.main,
    },
    previousButton: {
        backgroundColor: theme.palette.quaternary.main,
    },
}));

export default useStyles;