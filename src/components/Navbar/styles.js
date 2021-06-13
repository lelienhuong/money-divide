import { makeStyles } from "@material-ui/styles";

const drawerWidth = 240;

export default makeStyles(theme => ({
    avatarButton: {
        cursor: "pointer"
    },
    appBar: {
        width: "100%",
        position: "sticky",
        right: "auto",
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        boxShadow: "0 1px 4px rgb(0 21 41 / 8%) !important"
    },
    breadCrumbsLink: {
        textDecoration: "none",
        float: "left",
        transitionDuration: '300ms',
    },
    menuButton: {
        marginRight: "36px !important",
    },
    hide: {
        display: 'none',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    headerMenu: {
        height: '50vh',
        width: '40vw'
    }
}))