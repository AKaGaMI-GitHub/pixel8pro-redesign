import Slider from "../component/Slider"
import { photoData, videoData } from "../context/Context"

export default function PhotoVideo() {
  return (
    <section id="photovideo" className="bg-[#CDDFF5] text-[#343434] px-4 md:px-88 flex flex-col justify-center items-center mt-20 py-16">
      <div className="text-center text-[14px] md:text-[24px] font-[500]">
          Photo & Video
      </div>
      <div className="text-center font-[500] text-[28px] md:text-[48px] font-[500] w-full md:w-[40rem] my-2">
          Everyday moments through a pro-level lens.
      </div>
      <Slider data={photoData} videoData={videoData}/>
    </section>
  )
}
