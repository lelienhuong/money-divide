// import React from 'react';
// import Layout from '../../components/layouts/Layout';
// import Navbar from '../../components/Navbar/Navbar';

// function Sandbox(props) {
//     return (
//         <div>
//             <Layout/>
//         </div>
//     );
// }

// export default Sandbox;
import LoginTab from "../Login/LoginTab";
import RegisterTab from "../Login/RegisterTab";
import { useState } from "react";
import {
  CSSTransition,
  SwitchTransition,
  Transition,
  TransitionGroup,
} from "react-transition-group";
import Button from "@material-ui/core/Button";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function Sandbox(props) {
  return (
    <div>
      <RegisterTab />
    </div>
  );
}
export default Sandbox;
