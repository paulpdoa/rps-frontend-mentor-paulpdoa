import { useState,useEffect } from 'react';
import { motion } from 'framer-motion';

const handVars = {
    hidden: {
        opacity:0,
        y:-20
    },
    visible: {
        opacity:1,
        y:0,
        transition: {
            type:'spring',
            duration:1
        }
    }
}

const ChosenHands = ({ userChoice,computer,Paper,Rock,Scissor,result,setShowChoices }) => {

    const [choice,setChoice] = useState('');
    const [finalRes,setFinalRes] = useState('');
    const [btn,setBtn] = useState(false);
    useEffect(() => {
        setTimeout(() => {
           setChoice(computer);
           setFinalRes(result);
           setBtn(true);
        },1000)
    },[computer,choice,result]);
    

  return (
    <div className="flex justify-center absolute h-screen top-0 items-center w-full">
        <div className="max-w-7xl w-full flex justify-center items-center">
            <div className="md:w-auto w-full h-96 text-white grid md:grid-cols-3 grid-cols-2 gap-5 md:gap-0 justify-items-center md:items-center items-start relative md:mt-52">
                <div className="md:w-full md:h-full flex md:flex-col flex-col-reverse items-center relative md:mt-0 mt-16">
                    <h1 className="font-semibold md:text-3xl text-xl absolute -bottom-7 md:block md:w-72 md:text-center md:-top-10">YOU PICKED</h1>
                    { userChoice === 'scissor' ? 
                        <motion.div className="scissor-chosen-mobile md:h-52 md:w-52"
                        initial="hidden"
                        animate="visible"
                        variants={handVars}
                        >
                            <Scissor />
                        </motion.div>
                     : userChoice === 'paper' ? 
                        <motion.div className="paper-chosen-mobile md:h-52 md:w-52"
                        initial="hidden"
                        animate="visible"
                        variants={handVars}
                        >
                            <Paper />
                        </motion.div>
                     :
                     <motion.div className="rock-chosen-mobile md:h-52 md:w-52"
                      initial="hidden"
                      animate="visible"
                      variants={handVars}
                     >
                        <Rock />
                     </motion.div> }
                </div>
                <div className="absolute bottom-0 md:static">
                    <h1 className="text-5xl font-bold text-white">{finalRes}</h1>
                    { btn && 
                    <motion.button onClick={() => setShowChoices(true)} className="mt-2 dark-text tracking-wider font-semibold bg-white p-2 rounded-lg w-full"
                    initial={{ x:'-2vw' }}
                    animate={{ x:0 }}
                    transition={{ type:'spring',duration:1 }}
                    >PLAY AGAIN</motion.button> }
                </div>
                <div className="w-full md:h-full flex md:flex-col flex-col-reverse items-center relative md:mt-0 mt-16">
                    <h1 className="font-semibold md:text-3xl text-xl absolute -bottom-7 md:w-72 md:text-center md:block md:-top-10">THE HOUSE PICKED</h1>
                    { choice === 'scissor' ? 
                        <motion.div className="scissor-chosen-comp-mobile md:h-52 md:w-52"
                        initial="hidden"
                        animate="visible"
                        variants={handVars}
                        >
                            <Scissor />
                        </motion.div>
                     : choice === 'paper' ? 
                        <motion.div className="paper-chosen-comp-mobile md:h-52 md:w-52"
                        initial="hidden"
                        animate="visible"
                        variants={handVars}
                        >
                            <Paper />
                        </motion.div>
                     : choice === 'rock' ?
                        <motion.div className="rock-chosen-comp-mobile md:h-52 md:w-52"
                        initial="hidden"
                        animate="visible"
                        variants={handVars}
                        >
                            <Rock />
                        </motion.div> : <div className="filler-chosen-mobile"></div> }
                </div>
            </div>
        </div>
    </div>
  );
};

export default ChosenHands;
