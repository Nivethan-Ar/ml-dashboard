import React from 'react';

const CardButton = (props:any) => {
  const { btnLabel } = props;
  return (
    // eslint-disable-next-line max-len
    <div className="w-max px-2 text-[0.45rem] cursor-pointer text-center bg-gradient-to-r from-[#6e267c] to-[#be65bc] rounded-md text-white font-medium py-[2px]">
      <p className="uppercase tracking-wider">
        {btnLabel}
      </p>
    </div>
  );
};

export default CardButton;
