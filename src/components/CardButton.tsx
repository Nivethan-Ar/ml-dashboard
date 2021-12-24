import React from 'react';

const CardButton = (props:any) => {
  const { btnLabel } = props;
  return (
    <div className="">
      <h6 className="text-xs bg-fuchsia-800 w-16 rounded-lg px-1">
        {btnLabel}
      </h6>
    </div>
  );
};

export default CardButton;
