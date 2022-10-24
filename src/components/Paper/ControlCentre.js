import React from 'react';
import BG from '../../assets/images/bg.jpg';
import {
  FlightIcon,
  RadioIcon,
  WifiIcon,
  BluetoothIcon,
  RotateLockIcon,
  DndIcon,
  BatteryIcon,
  SignalIcon,
  ScreenMirrorIcon,
  PlayIcon,
  BackwardIcon,
  ForwardIcon,
  BrightnessIcon,
  VolumeIcon,
  FlashlightIcon,
  CalculatorIcon,
  CameraIcon,
  RecoderIcon,
  CarIcon,
} from '../../Icons';
function IconButton({
  bgColor,
  size,
  shape,
  icon,
  blur = true,
  active = false,
  text,
}) {
  const options = 'backdrop-blur-xl';
  const colors = {
    white: 'bg-white/10',
    blue: 'bg-blue-500',
    yellow: 'bg-yellow-500',
    green: 'bg-green-500',
    dark: 'bg-black/40',
    fill: 'bg-white/90',
  };
  return (
    <div
      className={`flex gap-2 items-center w-fit p-${size ? size : '4'} ${
        blur ? options : ''
      } ${
        active
          ? colors[bgColor]
          : bgColor == 'dark'
          ? colors.dark
          : colors.white
      } ${shape} transition-all  hover:bg-white/10`}
    >
      {icon}{' '}
      {text && <span className='text-xs text-white leading-none'>{text}</span>}
    </div>
  );
}
function IconContainer({ children }) {
  return (
    <div className='w-fit p-2 grid grid-cols-2 gap-2 rounded-2xl backdrop-blur-xl bg-black/40'>
      {children}
    </div>
  );
}

function MusicPlayer({ text }) {
  return (
    <div className='w-1/2 flex py-4 justify-between items-center flex-col p-2 gap-2 rounded-2xl backdrop-blur-xl bg-black/40'>
      <span className='text-white mt-4'>{text}</span>
      <div className='w-full flex items-center justify-center gap-2'>
        <BackwardIcon size={26} className='text-white/30' />
        <PlayIcon size={42} color={'white'} />
        <ForwardIcon size={26} className='text-white/30' />
      </div>
    </div>
  );
}

const iconOptions = {
  size: 26,
  color: 'white',
};
const icons = [
  {
    icon: (
      <FlightIcon {...iconOptions} style={{ transform: 'rotate(90deg)' }} />
    ),
    bg: 'white',
    active: false,
  },
  { icon: <RadioIcon {...iconOptions} />, bg: 'green', active: true },
  { icon: <WifiIcon {...iconOptions} />, bg: 'blue', active: false },
  { icon: <BluetoothIcon {...iconOptions} />, bg: 'blue', active: true },
];

function Slider({ children, fill }) {
  return (
    <div
      className='py-4 select-none rounded-2xl w-1/2 flex justify-center items-end cursor-pointer cursor-white'
      style={{
        background: `linear-gradient(
    to top,
    rgba(255,255,255,0.9) 0%,
    rgba(255,255,255,0.9) ${fill ? fill : '100'}%,
    rgba(0,0,0,0.4) 0%,
    rgba(0,0,0,0.4) 50%
  )`,
      }}
    >
      {children}
    </div>
  );
}

export default function ControlCentre() {
  return (
    <div className='w-screen h-screen grid place-items-center bg-black'>
      <div
        className='w-80 h-[660px] '
        style={{ background: `url(${BG}) no-repeat`, backgroundSize: 'cover' }}
      >
        <div className='backdrop-blur-2xl relative flex flex-col gap-4 bg-white/10 w-full h-full transition-all pt-20 px-6'>
          <div className='w-full flex justify-between px-2'>
            <div className='flex gap-2 items-center'>
              <SignalIcon size={16} color={'white'} />
              <span className='text-white'>Jio</span>
              <WifiIcon size={16} color={'white'} />
            </div>
            <div className='flex gap-2 items-center'>
              <BluetoothIcon size={16} color={'white'} />
              <span className='text-white select-none'>99%</span>
              <BatteryIcon size={24} color={'white'} />
            </div>
          </div>
          <div className='flex justify-between gap-2'>
            <IconContainer>
              {icons &&
                icons.map((item, idx) => (
                  <IconButton
                    key={idx}
                    shape={'rounded-full'}
                    icon={item.icon}
                    bgColor={item.bg}
                    blur={false}
                    active={item.active}
                  />
                ))}
            </IconContainer>
            <MusicPlayer text={'Music'} />
          </div>
          <div className='flex gap-2'>
            <div className='w-1/2 rounded flex gap-2 flex-col'>
              <div className='flex gap-1 justify-between'>
                <IconButton
                  shape={'rounded-2xl'}
                  icon={<RotateLockIcon {...iconOptions} size={34} />}
                  bgColor={'dark'}
                  size={4}
                />
                <IconButton
                  shape={'rounded-2xl'}
                  icon={<DndIcon {...iconOptions} size={34} />}
                  bgColor={'dark'}
                  size={4}
                />
              </div>
              <div>
                <IconButton
                  shape={'rounded-2xl'}
                  icon={<ScreenMirrorIcon {...iconOptions} size={34} />}
                  bgColor={'dark'}
                  size={4}
                  text={'Screen Mirroring'}
                />
              </div>
            </div>
            <div className='w-1/2 rounded flex gap-2 justify-between'>
              <Slider>
                <BrightnessIcon size={34} className='text-black/40' />
              </Slider>
              <Slider fill={60}>
                <VolumeIcon size={34} className='text-black/40' />
              </Slider>
            </div>
          </div>
          <div className='grid grid-cols-4 gap-2 overflow-y-scroll scrollbar-hide'>
            <IconButton
              shape={'rounded-2xl'}
              icon={<FlashlightIcon {...iconOptions} size={28} />}
              bgColor={'dark'}
              size={4}
            />
            <IconButton
              shape={'rounded-2xl'}
              icon={<CalculatorIcon {...iconOptions} size={28} />}
              bgColor={'dark'}
              size={4}
            />
            <IconButton
              shape={'rounded-2xl'}
              icon={<RecoderIcon {...iconOptions} size={28} />}
              bgColor={'dark'}
              size={4}
            />
            <IconButton
              shape={'rounded-2xl'}
              icon={<CameraIcon {...iconOptions} size={28} />}
              bgColor={'dark'}
              size={4}
            />
            <IconButton
              shape={'rounded-2xl'}
              icon={<CarIcon {...iconOptions} size={28} />}
              bgColor={'dark'}
              size={4}
            />
            <IconButton
              shape={'rounded-2xl'}
              icon={<RotateLockIcon {...iconOptions} size={28} />}
              bgColor={'dark'}
              size={4}
            />
            <IconButton
              shape={'rounded-2xl'}
              icon={<RotateLockIcon {...iconOptions} size={28} />}
              bgColor={'dark'}
              size={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
