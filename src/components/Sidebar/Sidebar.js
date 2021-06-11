import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import useStyles from './styles'
import LayoutContext from '../../context/LayoutContext';
import { useContext } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

function Sidebar(props) {
    const classes = useStyles();
    const theme = useTheme();
    var [open, setOpen] = React.useState(false);
    var { isOpen } = useContext(LayoutContext)
    let history = useHistory()
    useEffect(() => {
    })
    const handleRoute1 = () => {
        history.push("/app/groups/groups-index")
    }
    const handleRoute2 = () => {
        history.push("/app/bills/bills-create")
    }
    return (
        <div style={{ width: "fit-content" }}>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: isOpen,
                    [classes.drawerClose]: !isOpen,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: isOpen,
                        [classes.drawerClose]: !isOpen,
                    }),
                }}
            >
                {/* <div className={classes.toolbar}>
                </div>
                <Divider /> */}
                <List>
                    <ListItem onClick={handleRoute1} button key="Group List">
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary="Group List" />
                    </ListItem>
                    <ListItem onClick={handleRoute2} button key="Group Detail">
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary="Group Detail" />
                    </ListItem>

                    {/* {['Group List', 'Group Create', 'Bill List', 'Drafts'].map((text, index) => (
                        <ListItem onClick={handleRoute} button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))} */}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}

export default Sidebar;