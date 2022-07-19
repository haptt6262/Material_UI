import { makeStyles } from "@material-ui/core";

export const WidgetSummaryStyle = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    typo: {
        display: 'flex',
        flexDirection: 'column !important',
        justifyContent: 'center',
        alignItems: 'center',
        height: '140px',
        borderRadius: '12px',
        color: 'white',
        textTransform: 'uppercase',
    }

}))