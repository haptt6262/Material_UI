import { makeStyles } from "@material-ui/core";

export const DashboardAcceptAppStyles = makeStyles(theme => ({
    root: {
        marginLeft: '40px',
        marginRight: '40px'
    },
    dateTime: {
        marginLeft: '15px'
    },
    dateAndForm: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '40px',
        marginBottom: '15px'
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down(900)]: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row !important',
            justifyContent: 'space-around',
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
        }
    },
    btn: {

        [theme.breakpoints.down(900)]: {
            width: '25vw !important',

        }
    }
}))