import Image from 'next/image';
import React from 'react';

const Dot = ({ classname }) => {
    return (
        <div className={`w-[10px] h-[10px] ${classname} rounded-full`}>

        </div>
    )
}

const RotatedUIButtons = () => {
  return (
    <div >
      <div className="relative w-[206px] h-[261.75px]">
        <div 
          className="absolute bg-[#636AB636] rounded-[9999px] w-[119.1px] h-[48px] p-[20px] text-white font-medium shadow-lg"
          style={{
            transform: 'rotate(-54.55deg)',
            top: '119px',
            left: '0px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
         <Dot classname={"mr-2 bg-[#C883FB]"}/>
          Rewrite
        </div>

        <div 
          className="absolute bg-[#E27F5A] rounded-full w-[56px] h-[56px] p-[14px] flex items-center justify-center shadow-lg"
          style={{
            top: '117px',
            left: '102px'
          }}
        >
          <Image src={"/gift.svg"} width={24} height={24} />
        </div>

        <div 
          className="absolute bg-[#636AB636] rounded-full flex items-center justify-between px-4 py-2 shadow-lg"
          style={{
            transform: 'rotate(38deg)',
            top: '182px',
            left: '63px',
            width: '100px',
            height: '48px'
          }}
        >
            <Image src={"/settings.svg"} width={24} height={24} />
            <Image src={"/zap-circle.svg"} width={24} height={24} />
        </div>

        <div 
          className="absolute bg-[#5F33D6] p-[12px] rounded-full w-[56px] h-[56px] flex items-center justify-center shadow-lg"
          style={{
            top: '200px',
            left: '20px'
          }}
        >
          <Image src="/camera.svg" width={21} height={18} />
        </div>

        <div 
          className="absolute bg-[#636AB62E] rounded-full flex flex-col items-center justify-center p-[20px] shadow-lg"
          style={{
            top: '57px',
            right: '-6px',
            width: '48px',
            height: '194px'
          }}
        >
          <div className="text-white flex items-center justify-center text-xs font-medium mb-4" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
            <Dot classname={"mb-1 mt-2 bg-[#44B7FF]"}/>
            PDF
          </div>
          
          <div className="text-white flex items-center justify-center text-xs font-medium mb-4" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
            <Dot classname={"mb-1 bg-[#FFB266]"}/>
            PNG
          </div>
          
          <div className="text-white flex items-center justify-center text-xs font-medium mb-4" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
            JPG
            <Dot classname={"mt-1 bg-[#C883FB]"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotatedUIButtons;