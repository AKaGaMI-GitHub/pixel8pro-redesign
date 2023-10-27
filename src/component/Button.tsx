import { Link } from "react-router-dom";

type ButtonProps = {
    nameButton: string;
    link: string;
};

export default function Button({nameButton, link}: ButtonProps) {
  return (
    <Link className="py-2 md:py-3 px-8 text-white bg-[#1A73E8] text-[18px] rounded-md font-[500] my-4 md:my-6" to={link}>
      {nameButton}
    </Link>
  )
}
