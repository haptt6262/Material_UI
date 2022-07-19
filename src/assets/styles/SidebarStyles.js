import { alpha, makeStyles } from "@material-ui/core";

export const SidebarStyle = makeStyles(theme => ({
    root: {
        backgroundColor: alpha('#919EAB', 0.12),
    },
    drawer: {
        width: '40vh',
        [theme.breakpoints.down(952)]: {
            display: 'none'
        }
    },
    dividerBar: {
        borderColor: null,
    },
    drawerPaper: {
        width: '40vh',
        color: '#fff !important',
        backgroundColor: '#141633 !important',

    },
    iconButton: {
        [theme.breakpoints.down(952)]: {
            margin: ' 0px !important',
            display: 'block',
        },
        backgroundColor: '#fff',
    },
    account: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: '15px',
        paddingBottom: '25px',
        color: 'white'
    },
    avatar: {
        backgroundColor: '#fff',
        width: 100,
        height: 100,
        borderRadius: 20,
        border: '1px solid #ccc',
        marginTop: '20px',
        marginBottom: '20px',
    },
    active: {
        backgroundColor: '#fff',
        width: '40vh',
        color: '#000',
    },
    hover: {
        backgroundColor: '#ccc',

    },
    list: {
        padding: 0,
    }

}))