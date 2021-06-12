import React, { useLayoutEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import '@fontsource/roboto';
import useStyle from './styles'
import { AppBar, Avatar, Breadcrumbs, Button, ClickAwayListener, Grow, IconButton, Menu, MenuItem, MenuList, Paper, Popper, Toolbar } from '@material-ui/core';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {
    NotificationsNone as NotificationsIcon
} from "@material-ui/icons";
import { Link, useLocation } from 'react-router-dom';
import Notification from '../common/Notification/Notification';
import LayoutContext from '../../context/LayoutContext';
import { useContext } from 'react';

function Navbar(props) {
    const notifications = [
        {
            id: 1,
            color: "secondary",
            type: "notification",
            message: "wants to be your friend",
        },
        {
            id: 2,
            color: "secondary",
            type: "notification",
            message: "wants to be your friend",
        },
        {
            id: 3,
            color: "secondary",
            type: "notification",
            message: "wants to be your friend",
        },
        {
            id: 4,
            color: "secondary",
            type: "notification",
            message: "12 new orders has arrived today",
        },
    ];
    const classes = useStyle();

    var { isOpen, routes, setIsOpen } = useContext(LayoutContext)
    const [isAvatarBtnOpen, setAvatarBtnOpen] = React.useState(false);
    var [notificationsMenu, setNotificationsMenu] = useState(null);

    // get title of each route from routes list to make Breadcrumbs
    let location = useLocation();
    var recentLocation = location.pathname
    let indexOfLastSeparator = recentLocation.lastIndexOf("/")
    let prevLocation = recentLocation.substring(0, indexOfLastSeparator)
    var breadCrumbArray = ["My Profile"]
    routes.forEach(route => {
        if (route.path == prevLocation) {
            breadCrumbArray.push(route.meta.title)
            route.children.forEach(childRoute => {
                if (childRoute.path == recentLocation) {
                    breadCrumbArray.push(childRoute.meta.title)
                }
            })
        }
    });
    useLayoutEffect(() => {
        // setBreadcrum(location.pathname)
        // alert(JSON.stringify(breadCrumbArray))
    })
    const handleToggleSideBar = () => {
        isOpen = !isOpen
        setIsOpen(isOpen)
    }

    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setAvatarBtnOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setAvatarBtnOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setAvatarBtnOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(isAvatarBtnOpen);

    React.useEffect(() => {
        if (prevOpen.current === true && isAvatarBtnOpen === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = isAvatarBtnOpen;
    }, [isAvatarBtnOpen]);

    return (
        <div>
            <AppBar
                position="sticky"
                className={clsx(classes.appBar)}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleToggleSideBar}
                        edge="start"
                        className={clsx({ [classes.menuButton]: isOpen })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div style={{ justifyContent: "space-between", display: "flex", alignItems: "center", width: "100%" }}>
                        <Typography variant="h6" noWrap>
                            <Breadcrumbs style={{ transitionDuration: "3s" }} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                                {
                                    breadCrumbArray.map((item, index) => {
                                        if (index == breadCrumbArray.length - 1) return
                                        return (
                                            <Link style={{ color: "#b9b9b9", textDecoration: "none", float: "left" }} href="/app"> {item} </Link>
                                        )
                                    }
                                    )}
                                <Typography color="textPrimary">{breadCrumbArray[breadCrumbArray.length - 1]}</Typography>
                            </Breadcrumbs>
                        </Typography>
                        <div style={{ justifyContent: "space-between", display: "flex", alignItems: "center" }}>
                            <IconButton
                                color="inherit"
                                aria-haspopup="true"
                                aria-controls="notifications-menu"
                                color="#4A4A4A"
                                onClick={e => {
                                    setNotificationsMenu(e.currentTarget);
                                }}
                            >
                                <NotificationsIcon fontSize="large" classes={{ root: classes.headerIcon }} />
                            </IconButton>
                            <IconButton
                                className={classes.avatarButton}
                                ref={anchorRef}
                                aria-controls={isAvatarBtnOpen ? 'menu-list-grow' : undefined}
                                aria-haspopup="true"
                                onClick={handleToggle}
                            >
                                <Avatar alt="Lien Huong" src="https://cdn.tgdd.vn/GameApp/3/229047/Screentshots/sky-children-of-the-light-03-03-2021-0.png" />
                            </IconButton>
                        </div>
                        <Menu
                            id="notifications-menu"
                            open={Boolean(notificationsMenu)}
                            anchorEl={notificationsMenu}
                            onClose={() => setNotificationsMenu(null)}
                            className={classes.headerMenu}
                            disableAutoFocusItem
                        >
                            {notifications.map(notification => (
                                <MenuItem
                                    key={notification.id}
                                    // onClick={() => setNotificationsMenu(null)}
                                    className={classes.headerMenuItem}
                                >
                                    <Notification {...notification} typographyVariant="inherit" />
                                </MenuItem>
                            ))}
                        </Menu>
                    </div>
                    <Popper open={isAvatarBtnOpen} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList autoFocusItem={isAvatarBtnOpen} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                                            <MenuItem onClick={handleClose}>My account</MenuItem>
                                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;