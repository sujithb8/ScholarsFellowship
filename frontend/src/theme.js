// import { createTheme } from '@mui/material/styles';
import { blue, grey} from '@mui/material/colors';

// export const theme = createTheme({
//     palette: {
//         primary: {
//             main: blue[500]
//         },
//         secondary: {
//             main: lightBlue[800],
//             midNightBlue: "#003366"
//         }
//     }
// });

export const themeColors = (mode) => ({
    palette: {
        mode,
        ...(mode === 'dark'
            ? {
                // palette values for light mode
                primary: {
                    main: '#1a2736',
                    white: "#fff"
                },
                secondary: {
                    main:'#e75600',
                    midNightBlue: "#003366"
                },
                
                text: {
                     main: grey,
                },
            }
            : {
                // palette values for dark mode
                primary: {
                    main: "#003366",
                    white: "#003366"
                },
                secondary: {
                    main: blue[500],
                    midNightBlue: "#2196f3"
                },
                background: {
                    default: "#1e1e1e",
                },
                text: {
                    main: grey[100],
                },
            }),
    },
});
