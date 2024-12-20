import IconArrow from "@/assets/icon/IconArrow";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    !!showMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [showMenu]);
  const linkList = [
    {
      id: 1,
      name: "Chú rể & cô dâu",
      link: "#daure",
    },
    {
      id: 3,
      name: "Tiệc cưới",
      link: "#diadiem",
    },
    {
      id: 2,
      name: "Ảnh cưới",
      link: "#anhcuoi",
    },
    {
      id: 2,
      name: "Chúc mừng",
      link: "#chucmung",
    },
  ];
  return (
    <footer className="absolute backdrop-blur-md flex justify-between sm:px-[7rem] pt-[12px] pb-1 w-full items-center z-[10] max-sm:px-[16px]">
      <div className="flex flex-col sm:items-center">
        <a href="/" rel="noopener noreferrer">
          {/* <Image
            src="/assets/images/chew/logo.png"
            alt="err"
            width={60}
            height={61}
            className="rounded-full"
          /> */}
          <div className="text-white flex text-[18px]">
            TA <div className="ml-2">❤︎</div> PA
          </div>
        </a>
      </div>
      <ul
        className={`${
          !showMenu && "max-sm:hidden"
        } flex max-sm:flex-col gap-[13px] sm:gap-[1rem] 2xl:gap-[5rem] max-sm:absolute max-sm:top-0 max-sm:gap-[2rem] max-sm:mt-[3.5rem] max-sm:bg-[rgba(0,0,0,0.60)] max-sm:h-screen max-sm:w-full max-sm:left-0 max-sm:items-center max-sm:py-[1.5rem]`}
      >
        {linkList.map((item) => (
          <li
            key={item.id}
            className="flex gap-[20px] items-center"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            <a href={item.link}>
              <div className="hover:text-[black] font-normal hover:cursor-pointer transition-all text-[24px] sm:text-[28px] text-white">
                {item.name}
              </div>
            </a>
          </li>
        ))}
      </ul>
      <IconArrow
        className={`sm:hidden ${showMenu && "rotate-180"} transition-all`}
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      />
    </footer>
  );
};

export default Header;
