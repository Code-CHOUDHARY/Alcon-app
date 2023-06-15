import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "./SidebarConfig";
const LeftSideNavbar = () => {
  const [activetab, setActiveTab] = useState();
  const navigate = useNavigate();
  const handleTabClick = (title) => {
    setActiveTab(title);
    if (title === "profile") {
      navigate("/username");
    } else if (title === "home") {
      navigate("/");
    }
  };

  return (
    <div className="sticky top-0">
      <div>
        <h3 className="items-center">Alcon</h3>
        {/* <img className="w-20" src="./assets/images/alcon.svg" alt="alcon" /> */}
      </div>

      <div className="mt-20 ">
        {Menu.map((item) => (
          <div
            onClick={() => handleTabClick(item.title)}
            className="flex items-center mb-5 cursor-pointer text-lg"
          >
            <p className="ml-5 p-2">
              {activetab === item.title ? item.activeIcon : item.icon}
            </p>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNavbar;
