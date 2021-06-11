import React, { useEffect } from 'react';
import { createContext } from 'react';
import LayoutContext from '../../context/LayoutContext';
import Navbar from '../Navbar/Navbar';
import useStyle from './styles'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    withRouter,
    useHistory
} from "react-router-dom";
import GroupList from '../../pages/Group/GroupList';
import Sandbox from '../../pages/Sandbox/Sandbox';
import GroupDetail from '../../pages/Group/GroupDetail';
import { routes } from '../../routers/routers';
import GroupCreate from '../../pages/Group/GroupCreate';
import BillList from '../../pages/MyBill/BillList';
import BillCreate from '../../pages/MyBill/BillCreate';
import BillDetail from '../../pages/MyBill/BillDetail';
import Sidebar from '../Sidebar/Sidebar';

function Layout(props) {
    const classes = useStyle()
    var [isOpen, setOpen] = React.useState(true);
    useEffect(() => {
        var routes = routes;
    })
    return (
        <LayoutContext.Provider value={{ isOpen: isOpen,routes:routes,setIsOpen: (props) => setOpen(props) }}>
            <div className={classes.root}>
                <LayoutContext.Consumer>
                    {() => (
                        <>
                            <Sidebar/>
                            <div style={{ width: "100%" }}>
                                <Navbar />
                                <Switch>
                                    <Route exact="true" path="/my-profile/groups/groups-index" component={GroupList} />
                                    <Route exact="true" path="/my-profile/groups/groups-create" component={GroupCreate} />
                                    <Route exact="true" path="/my-profile/groups/groups-detail" component={GroupDetail} />
                                    <Route exact="true" path="/my-profile/bills/bills-index" component={BillList} />
                                    <Route exact="true" path="/my-profile/bills/bills-create" component={BillCreate} />
                                    <Route exact="true" path="/my-profile/bills/bills-detail" component={BillDetail} />
                                </Switch>
                            </div>
                        </>
                    )}
                </LayoutContext.Consumer>
            </div>
        </LayoutContext.Provider >
    );
}

export default withRouter(Layout);