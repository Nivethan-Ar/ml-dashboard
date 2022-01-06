/* eslint-disable react/require-default-props */
import React from 'react';
import CardButton from './CardButton';

/* eslint-disable max-len */
interface Props{
  GraphComp: React.ElementType;
  h1Type: 1 | 2;
  h2?:string;
}

const GraphCard:React.FC<Props> = (props) => {
  const { GraphComp, h1Type, h2 } = props;

  return (
    <div
      className="bg-[#10172d] grid flex-shrink-0 tracking-wide rounded-lg w-64 relative"
    >
      <div className="px-4 pt-4">
        <div className="text-sm">
          {
              h1Type === 1
                ? (
                  <h6>
                    <span className="text-blue-400">Estimated </span>
                    <span>vs</span>
                    <span className="text-green-400"> Achieved</span>
                  </h6>
                ) : (
                  <h6>
                    <span className="">Number of </span>
                  </h6>
                )
          }

        </div>
        <h6 className="font-medium">{h2}</h6>
      </div>

      <GraphComp />

      <div className="place-self-end [bottom:20px] [right:20px] absolute">
        <CardButton btnLabel="view in detail" />
      </div>
    </div>
  );
};

export default GraphCard;
