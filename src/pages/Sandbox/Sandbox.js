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
import { useState } from 'react';
import { CSSTransition, SwitchTransition, Transition, TransitionGroup } from 'react-transition-group';
import Button from '@material-ui/core/Button';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Sandbox(props) {
    const duration = 300;

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    }

    const transitionStyles = {
        entering: { opacity: 0, transform: "translateX(-100%)" },
        entered: { opacity: 1, transform: "translateX(0%)" },
        exiting: { opacity: 1, transform: "translateX(0%)", },
        exited: { opacity: 0, transform: "translateX(100%)" },
    };
    const [items, setItems] = useState([
        "My Profile", "My Groups", "Groups List"
        // { id: 1, text: 'Buy eggs' },
        // { id: 2, text: 'Pay bills' },
        // { id: 3, text: 'Invite friends over' },
        // { id: 4, text: 'Fix the TV' },
    ]);
    const [inProp, setInProp] = useState(false);
    var [count, setCount] = useState(0);
    const [state, setState] = useState(true);
    return (
        <div>
            {/* <SwitchTransition mode="out-in">
                <TransitionGroup style={{ display: "flex",justifyContent:"center"}}> */}
            <ReactCSSTransitionGroup
                transitionName="fade" 
                style={{display:"flex",justifyContent:"center"}}
                transitionAppear={true} 
                transitionAppearTimeout={500} 
                transitionEnterTimeout={500} 
                transitionLeaveTimeout={300}>                
                {items.map((item,index) => {
                    return (
                                // key={count}
                                // addEndListener={(node, done) => {
                                //     node.addEventListener("transitionend", done, false);
                                // }}
                                // classNames="my-node"
                            
                        <div style={{transitionDelay:`${index*100}ms`,zIndex:`${1000-index}`,transitionDuration:'300ms',backgroundColor:"#FFF"}}>
                            {item} /
                        </div>
                    )
                })}
            </ReactCSSTransitionGroup>
            {/* </TransitionGroup> */}
            {/* </SwitchTransition> */}
            <Button onClick={() => setItems(items.splice(0,1))}>
                Change
            </Button>
        </div>

        // <div>
        /* <Transition in={inProp} timeout={duration}>
                    {state => (
                        <div style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}>
                            I'm a fade Transition!
                        </div>
                    )}
                </Transition> */
        /* <CSSTransition
                    key={inProp}
                    addEndListener={(node, done) => {
                        node.addEventListener("transitionend", done, false);
                    }}
                    classNames="fade"
                >
                    <div>HI</div>
                </CSSTransition>
                <button onClick={() => setInProp(!inProp)}>
                    Click to Enter
                </button> */
        /* <TransitionGroup>
                    {items.map(({ id, text }) => (
                        <CSSTransition
                            key={inProp}
                            timeout={300}
                            classNames="my-node"
                        >
                            <div style={{ width: "5vw", margin: "auto" }}>
                                hi
                            </div>
                        </CSSTransition>))}
                </TransitionGroup>
                <button type="button" onClick={() => setInProp(!inProp)}>
                    Click to Enter
                </button>
            </div> */
    )
}
export default Sandbox;
