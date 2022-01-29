import React from 'react';

const Rules = ({ setShowModal }) => {
  return (
    <div onClick={() => setShowModal(true)} className="absolute bottom-10 cursor-pointer select-none md:p-3 p-2 w-32 text-center md:right-10 md:left-auto md:ml-0 md:mr-0 left-0 right-0 ml-auto mr-auto rules rounded-lg text-white tracking-widest font-semibold">
        RULES
    </div>
  );
};

export default Rules;
