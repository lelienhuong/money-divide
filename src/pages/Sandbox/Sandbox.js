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
import { useEffect, useState } from 'react';
import { CSSTransition, SwitchTransition, Transition, TransitionGroup } from 'react-transition-group';
// import Button from '@material-ui/core/Button';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Table from '../../components/common/Table/Table'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Sandbox(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            '& .MuiStepIcon-active':{
                color:"#1976d2"
            },
            '& .MuiStepIcon-completed':{
                color:"#1976d2"
            },
            '& .MuiStepIcon-text':{
                fill:"white"
            }
        },
        button: {
            marginRight: theme.spacing(1),
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
    }));

    function getSteps() {
        return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
    }

    function getStepContent(step) {
        switch (step) {
            case 0:
                return 'Select campaign settings...';
            case 1:
                return 'What is an ad group anyways?';
            case 2:
                return 'This is the bit I really care about!';
            default:
                return 'Unknown step';
        }
    }
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = <Typography variant="caption">Optional</Typography>;
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Button onClick={handleReset} className={classes.button}>
                            Reset
                        </Button>
                    </div>
                ) : (
                    <div>
                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        <div>
                            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                Back
                            </Button>
                            {isStepOptional(activeStep) && (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSkip}
                                    className={classes.button}
                                >
                                    Skip
                                </Button>
                            )}

                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                            >
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );    // const duration = 300;

    // const defaultStyle = {
    //     transition: `opacity ${duration}ms ease-in-out`,
    //     opacity: 0,
    // }

    // const transitionStyles = {
    //     entering: { opacity: 0, transform: "translateX(-100%)" },
    //     entered: { opacity: 1, transform: "translateX(0%)" },
    //     exiting: { opacity: 1, transform: "translateX(0%)", },
    //     exited: { opacity: 0, transform: "translateX(100%)" },
    // };
    // const [items, setItems] = useState([
    //     "My Profile", "My Groups", "Groups List"
    //     // { id: 1, text: 'Buy eggs' },
    //     // { id: 2, text: 'Pay bills' },
    //     // { id: 3, text: 'Invite friends over' },
    //     // { id: 4, text: 'Fix the TV' },
    // ]);
    // const [inProp, setInProp] = useState(false);
    // var [count, setCount] = useState(0);
    // const [state, setState] = useState(true);
    // return (
    //     <div>
    //         {/* <SwitchTransition mode="out-in">
    //             <TransitionGroup style={{ display: "flex",justifyContent:"center"}}> */}
    //         <ReactCSSTransitionGroup
    //             transitionName="fade" 
    //             style={{display:"flex",justifyContent:"center"}}
    //             transitionAppear={true} 
    //             transitionAppearTimeout={500} 
    //             transitionEnterTimeout={500} 
    //             transitionLeaveTimeout={300}>                
    //             {items.map((item,index) => {
    //                 return (
    //                             // key={count}
    //                             // addEndListener={(node, done) => {
    //                             //     node.addEventListener("transitionend", done, false);
    //                             // }}
    //                             // classNames="my-node"

    //                     <div style={{transitionDelay:`${index*100}ms`,zIndex:`${1000-index}`,transitionDuration:'300ms',backgroundColor:"#FFF"}}>
    //                         {item} /
    //                     </div>
    //                 )
    //             })}
    //         </ReactCSSTransitionGroup>
    //         {/* </TransitionGroup> */}
    //         {/* </SwitchTransition> */}
    //         <Button onClick={() => setItems(items.splice(0,1))}>
    //             Change
    //         </Button>
    //     </div>

    //     // <div>
    //     /* <Transition in={inProp} timeout={duration}>
    //                 {state => (
    //                     <div style={{
    //                         ...defaultStyle,
    //                         ...transitionStyles[state]
    //                     }}>
    //                         I'm a fade Transition!
    //                     </div>
    //                 )}
    //             </Transition> */
    //     /* <CSSTransition
    //                 key={inProp}
    //                 addEndListener={(node, done) => {
    //                     node.addEventListener("transitionend", done, false);
    //                 }}
    //                 classNames="fade"
    //             >
    //                 <div>HI</div>
    //             </CSSTransition>
    //             <button onClick={() => setInProp(!inProp)}>
    //                 Click to Enter
    //             </button> */
    //     /* <TransitionGroup>
    //                 {items.map(({ id, text }) => (
    //                     <CSSTransition
    //                         key={inProp}
    //                         timeout={300}
    //                         classNames="my-node"
    //                     >
    //                         <div style={{ width: "5vw", margin: "auto" }}>
    //                             hi
    //                         </div>
    //                     </CSSTransition>))}
    //             </TransitionGroup>
    //             <button type="button" onClick={() => setInProp(!inProp)}>
    //                 Click to Enter
    //             </button>
    //         </div> */
    // )
}
export default Sandbox;
