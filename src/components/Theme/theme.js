import { createTheme } from "@material-ui/core";

const theme = createTheme({
    palette: {
        primary: {
            main: '#344648',
        },
        secondary: {
            main: '#7D8E95',
        },
        tertiary: {
            main: '#FFBB98',
        },
        quaternary: {
            main: '#FBE0C3',
        },
    },
    status: {
        danger: "orange"
    }
})


export default theme;