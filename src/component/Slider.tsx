import { useState } from "react";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import { IoIosPlay, IoIosPause } from "react-icons/io";
import { motion } from "framer-motion"

type TypeData = {
    data: Array<{
        id: number;
        title: string;
        description: string;
        img: string;
        imgResponsive: string;
    }>,
    videoData: Array<{
      id: number;
      title: string;
      description: string;
      videoURL: string;
      responsiveURL: string;
  }>,
}

export default function Slider({ data, videoData }: TypeData) {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [currentVideoSlide, setCurrentVideoSlide] = useState<number>(1);
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1)
  } 
  const backSlide = () => {
    setCurrentSlide(currentSlide - 1)
  }
  const nextVideoSlide = () => {
    setCurrentVideoSlide(currentVideoSlide + 1)
  } 
  const backVideoSlide = () => {
    setCurrentVideoSlide(currentVideoSlide - 1)
  }

  const handlePlay = (dataID: string) => {
    const video = document.getElementById(`${dataID}`) as HTMLVideoElement
    if (video) {
      video?.play()
      video.addEventListener('ended', () => {
        setIsPlay(false);
      });
      setIsPlay(true)
    }
  }

  const handlePause = (dataID: string) => {
    const video = document.getElementById(`${dataID}`) as HTMLVideoElement;
    video?.pause();
    setIsPlay(false)
  }
  
  return (
    <div>
      {data.map((index: any) => (
       <div key={index.id} className={`${currentSlide === index.id ? `block` : `hidden`} flex flex-col items-center justify-center mx-0 md:mx-[220px] my-2`}>
        <motion.div initial={{ y: -10, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { ease: [0.6, 0.01, 0.05, 0.95], duration: 1.2 } }}>
          <img src={index.img} className="md:block hidden w-[2024px] h-auto rounded-xl my-1.5 md:my-6"/>
          <img src={index.imgResponsive} className="md:hidden block rounded-xl my-1.5 md:my-6"/>
        </motion.div>
        <div className="flex flex-row items-center justify-between py-4">
          {index.id === 1 ? (
            <button className="p-4 bg-gray-300 rounded-full"><MdOutlineArrowBackIos className="text-[#343434] text-[16px] md:text-[24px]"/></button>
          ) : (
            <button className="p-4 bg-white rounded-full active:bg-[#1A73E8]" onClick={() => backSlide()}><MdOutlineArrowBackIos className="text-[#343434] active:text-white text-[16px] md:text-[24px]"/></button>
          )}
          <div className="text-center font-[500] text-[22px] md:text-[32px] mx-4 md:mx-28">{index.title}</div>
          {index.id === data.length ? (
            <button className="p-4 bg-gray-300 rounded-full"><MdOutlineArrowForwardIos className="text-[#343434] text-[16px] md:text-[24px] text-[#1A73E8]"/></button>
            ) : (
            <button className="p-4 bg-white rounded-full active:bg-[#1A73E8]" onClick={() => nextSlide()}><MdOutlineArrowForwardIos className="text-[#343434] active:text-white text-[16px] md:text-[24px]"/></button>
          )}
        </div>
        <div className="text-center text-[18px] font-[400] md:text-[24px]">{index.description}</div>
       </div> 
      ))}
      <div className="mt-8">
        {videoData.map((dataVideo: any) => (
        <div key={dataVideo.id} className={`${currentVideoSlide === dataVideo.id ? `block` : `hidden`} flex flex-col items-center justify-center mx-0 md:mx-[220px] my-2`}>
          <motion.div className="mb-[-44px] md:mb-[-68px]" initial={{ y: -10, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { ease: [0.6, 0.01, 0.05, 0.95], duration: 1.2 } }}>
            <div className="hidden md:block">
              <video id={dataVideo.id} muted src={dataVideo.videoURL} className="hidden md:block w-[2024px] h-auto rounded-xl my-1.5 md:my-6"></video>
              <div className="flex justify-end">
                {isPlay ? (
                  <button className="relative p-3 bg-white rounded-full right-8 bottom-32" style={{zIndex: 999}} onClick={() => handlePause(dataVideo.id)}><IoIosPause className="text-[#343434] text-[50px]"/></button>
                  ) : (
                  <button className="relative p-3 bg-white rounded-full right-8 bottom-32" style={{zIndex: 999}} onClick={() => handlePlay(dataVideo.id)}><IoIosPlay className="text-[#343434] text-[50px]"/></button>
                )}
              </div>
            </div>
            <div className="block md:hidden">
              <video id={`${dataVideo.id}_responsive`} muted src={dataVideo.responsiveURL} className="block md:hidden rounded-xl my-1.5 md:my-6"></video>
              <div className="flex justify-end">
                {isPlay ? (
                  <button className="relative p-3.5 bg-white rounded-full right-2 bottom-16" style={{zIndex: 999}} onClick={() => handlePause(`${dataVideo.id}_responsive`)}><IoIosPause className="text-[#343434] text-[18px]"/></button>
                  ) : (
                  <button className="relative p-3.5 bg-white rounded-full right-2 bottom-16" style={{zIndex: 999}} onClick={() => handlePlay(`${dataVideo.id}_responsive`)}><IoIosPlay className="text-[#343434] text-[18px]"/></button>
                )}
              </div>
            </div>
          </motion.div>
          <div className="flex flex-row items-center justify-between py-4">
            {dataVideo.id === 1 ? (
              <button className="p-4 bg-gray-300 rounded-full"><MdOutlineArrowBackIos className="text-[#343434] text-[16px] md:text-[24px]"/></button>
            ) : (
              <button className="p-4 bg-white rounded-full active:bg-[#1A73E8]" onClick={() => backVideoSlide()}><MdOutlineArrowBackIos className="text-[#343434] active:text-white text-[16px] md:text-[24px]"/></button>
            )}
            <div className="text-center font-[500] text-[22px] md:text-[32px] mx-4 md:mx-28">{dataVideo.title}</div>
            {dataVideo.id === videoData.length ? (
              <button className="p-4 bg-gray-300 rounded-full"><MdOutlineArrowForwardIos className="text-[#343434] text-[16px] md:text-[24px] text-[#1A73E8]"/></button>
              ) : (
              <button className="p-4 bg-white rounded-full active:bg-[#1A73E8]" onClick={() => nextVideoSlide()}><MdOutlineArrowForwardIos className="text-[#343434] active:text-white text-[16px] md:text-[24px]"/></button>
            )}
          </div>
          <div className="text-center text-[18px] font-[400] md:text-[24px] ">{dataVideo.description}</div>
        </div> 
        ))}
      </div>
    </div>
  )
}
