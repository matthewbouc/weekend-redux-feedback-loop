import { makeStyles } from '@material-ui/core/styles';
import { Autorenew } from '@material-ui/icons';
import theme from './theme';

const useStyles = makeStyles(() => ({
    nextButton: {
        backgroundColor: theme.palette.primary.main,
    },
    previousButton: {
        backgroundColor: theme.palette.secondary.main,
    },
    header: {
        backgroundColor: theme.palette.tertiary.main,
    },
    buttonSpacing: {
        spacing:  8,
    },
}));

export default useStyles;