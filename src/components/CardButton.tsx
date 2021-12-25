import React from 'react';

const CardButton = (props:any) => {
  const { btnLabel } = props;
  return (
    // eslint-disable-next-line max-len
    <div className="w-12 text-[0.5rem] text-center bg-gradient-to-r from-[#6e267c] to-[#be65bc] rounded-md text-white font-semibold py-[2px]">
      <h6>
        {btnLabel}
      </h6>
    </div>
  );
};

export default CardButton;
