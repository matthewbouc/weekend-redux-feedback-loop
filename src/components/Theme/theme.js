import { createTheme } from "@material-ui/core";

const theme = createTheme({
    palette: {
        primary: {
            main: '#748B6F',
        },
        secondary: {
            main: '#D05663',
        },
        tertiary: {
            main: '#2A403D',
        },
        quaternary: {
            main: '#C3CBD6',
        },
    },
    status: {
        danger: "orange"
    }
})


export default theme;