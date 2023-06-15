import { AiFillHome, AiOutlineSearch, AiOutlineHome } from "react-icons/ai";
import {
  BsBookmark,
  BsFillBookmarkFill,
  BsPlusSquare,
  BsPlusSquareFill,
} from "react-icons/bs";

export const Menu = [
  {
    title: "Home",
    icon: <AiOutlineHome className="text-3xl ml-5" />,
    activeIcon: <AiFillHome className="text-3xl ml-5" />,
  },
  {
    title: "Search",
    icon: <AiOutlineSearch className="text-3xl ml-5" />,
    activeIcon: <AiOutlineSearch className="text-3xl ml-5" />,
  },
  {
    title: "BookMark",
    icon: <BsBookmark className="text-2xl ml-5" />,
    activeIcon: <BsFillBookmarkFill className="text-2xl ml-5" />,
  },
  {
    title: "Create",
    icon: <BsPlusSquare className="text-2xl ml-5" />,
    activeIcon: <BsPlusSquareFill className="text-2xl ml-5" />,
  },
];
