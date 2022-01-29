import Close from './Close';
import RuleImage from './RuleImage';

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

const RulesModal = ({ setShowModal }) => {
  return (
      <div className="absolute top-0 flex items-center w-full bg-gray-900 bg-opacity-50 justify-center h-screen">
        <motion.div className="bg-white h-96 md:w-96 w-11/12 px-5 py-5 rounded-lg flex items-center flex-col"
        initial="hidden"
        animate="visible"
        variants={boomVar}
        >
            <div className="flex w-full justify-between items-center px-5 py-3">
                <h1 className="dark-text font-bold text-2xl">RULES</h1>
                <span className="cursor-pointer" onClick={() => setShowModal(false)}><Close /></span>
            </div>
            <RuleImage />
        </motion.div>
      </div>
  )
};

export default RulesModal;
