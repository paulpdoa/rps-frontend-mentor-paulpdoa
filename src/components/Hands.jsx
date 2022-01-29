import Triangle from "./Triangle";
import Rock from "./Rock";
import Paper from "./Paper";
import Scissor from "./Scissor";
import { motion } from 'framer-motion';

const boomVar = {
  hidden: {
    scale: 0
  },
  visible: {
    scale:1,
    transition: {
      type:'spring',
      duration:1
    }
  }
}
// create a variable which contains width and height
// pass as props to triangle comp
//
const Hands = ({ selectChoice }) => {

    return (
        <div className="flex justify-center absolute h-screen top-0 items-center w-full">
            <div className="max-w-7xl md:w-full w-1/2 flex justify-center items-center">
                <motion.div className="md:w-1/2 w-screen md:h-auto h-52 flex justify-center relative mt-28"
                initial="hidden"
                animate="visible"
                variants={boomVar}
                >
                    <div className="md:block hidden">
                      <Triangle />
                    </div>
                    <div className="md:hidden h-full flex items-center justify-center w-full relative">
                      <svg className="transform absolute -top-10 scale-75 h-full" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" stroke="#000" strokeWidth="15" d="M291.5 7.5H4.574c3.119 0 52.416 84.667 147.892 254L291.5 7.5z" opacity=".2"/>
                      </svg>;
                    </div>

                    <div onClick={ () => selectChoice('paper') } className="paper-mobile md:h-32 md:w-32 md:left-24 cursor-pointer">
                        <Paper />
                    </div>
                    <div onClick={ () => selectChoice('scissor') } className="scissor-mobile md:h-32 md:w-32 md:right-24 cursor-pointer">
                        <Scissor />
                    </div>
                    <div onClick={ () => selectChoice('rock') } className="rock-mobile md:h-32 md:w-32 cursor-pointer">
                        <Rock />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hands;