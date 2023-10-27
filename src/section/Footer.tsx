import { Link } from "react-router-dom";
import { RiTwitterXFill } from "react-icons/ri"
import { GrFacebook, GrInstagram, GrYoutube } from "react-icons/gr"
import { FaTiktok, FaLinkedinIn } from "react-icons/fa"


export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 py-6 border-t-2 border-gray-300/20 text-[#343434]">
        <div className="flex flex-row items-center my-2.5 md:my-0">
            <Link to={"https://twitter.com/madebygoogle"} className="mx-2"><RiTwitterXFill className="text-[24px]"/></Link>
            <Link to={"https://www.facebook.com/DotA2.M9"} className="mx-2"><GrFacebook className="text-[24px]"/></Link>
            <Link to={"https://www.instagram.com/anantha.yoga"} className="mx-2"><GrInstagram className="text-[24px]"/></Link>
            <Link to={"https://www.youtube.com/@madebygoogle"} className="mx-2"><GrYoutube className="text-[24px]"/></Link>
            <Link to={"https://www.tiktok.com/@akagami.tiktok"} className="mx-2"><FaTiktok className="text-[24px]"/></Link>
            <Link to={"https://www.linkedin.com/in/madeananthayoga"} className="mx-2"><FaLinkedinIn className="text-[24px]"/></Link>
        </div>
        <div className="text-center md:text-left">Original by Google, Redesign by <Link to={"https://akagami.tech"} className="hover:underline">AKaGaMI</Link> - 2023</div>
    </footer>
  )
}
