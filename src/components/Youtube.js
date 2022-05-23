import React from "react";

function Youtube() {
  return (
    <div className="grid grid-cols-5 gap-2 p-2 grid-flow-row-dense">
      <div className="  row-span-6">
        <div className="h-[50px] flex justify-center mt-5">
          <img
            className="w-1/6  "
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX/////AAD/WVn/sbH/nJz/8fH/Kir/4uL/3t7/zs7/xsb/YGD/7e3/GBj/9fX/y8v/trb/19f/PT3/oaH/jIz/goL/fX3/c3P/bm7/paX/NDT/Dg7/SEj/+vr/wcH/vLz/VFT/IiL/aGj/k5P/UFD/LS3/X1//iYn/gID/Ojr/srL/nZ3/RUX/d3eHgOMVAAAEkklEQVR4nO2d22KiQAyGWdQFBRE84QnBc9ut7/96i9tuz4ZBAiPh/+560Zn8LTCTZCYxDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzSPyOq5l2UHQ7XYHg9469lut+ai9241Pk+k5nG23W8c5mmaSJKZ5dJz051l4nk5O492uPZq3Wn687g0G6W8HgW1ZbseLdKqJPNcKuuu4Nd9NQmf/PFwcNpv+8hcfy/5mc1gMn/dOONnNW/G6G1iuF5Ws2nPtgZ9qmiVDXjnKoofJLNXrD2zX4xbXsf3TcVG9qmssF8eTb3eY1LlxOLwfbR9ZDs+xW1Re1Nv2dQsh6W97hV7OONGtQIEkvllfJ9RtvCLhjW9k76DbcmUOvVsE+rrNzsU8v8C2bptz0pYuMPd/saXb3hvw8wgMdFt7E4G6QG+l29ibWKnvVk+6bb2Rk+xn9IKtqPBBt6E386Am0LpPT0KFpaWksH5L4Ttq6349P6QvrJQeUt1WFkLlMX3SbWQhWgoKJ7qNLITK13Sv28hCrLJjGu59x2Wy6GeHpga6bSxItrf/R7eJBcleEesSfbpGmCUwqvN6f2Gf9anxfus2sSC/s5zEGm+7X8jcfHd1W1iYbobCWLeBhcmK8Y90G1iYUYbCqW4DCzPNUHjUbWBhjhkKh7oNLMwwQ2Hdl8N0QaQFdlg9Cy1ra59OJvKGMEx/wTqeGvSSzxsMNo1oV727SacveqxzmZen4sw6pAK0h8ibVTP/jTmo2F2hg1G80WDzddSnSk8E0D7wmHWu/wqNzrjCz+qYVMi7aTPfB7ZnrCNT0Ns2XjvMj0P3nlnHvs6MVOiwzmV+HnxezYbJIRXynvL6otBwK0kuJ6RC3g/7V4XpjoL3IfkRMv8UPbLO9V2hYaxL38g9UtG2iHf6nxQa3mjDOsk3FpRC5ljijwrT17HcQAIZT+xsWOe6ojB9HctMcG0o94k58XRVoWGU6FeR6SeXd3NFKDS80vyqJaWQOYdPKUwnKysJRLnAlSosza+6I4WpP1rGRo5SaPNOla3QcEvwq6jTbcxn9hQUpn/VLe+kdKCGOfOkpJDfr6KyT7yBKFWFRjTfcE5LhaKYc2uqCtPXkfOcEpVf06Yw/QSYbNNSCplvkeRRmP55ubJC1KF95ksI+RSmfhXPRo4KmM5ZZngjp0KuADl1t0S3wtQChg3APSss/38o/z2U/y2Vvx7K39PI35fK9y3k+4fyfXz5cRrE2nJyh/FS+TFv+XkL+bkn+flD+Tlg+Xl8+WcxGnCeRv6ZKPnn2uSfTZR/vlT+GWH557zln9WXf99C/p0Z+fee5N9da8D9Q/l3SOXfA5Z/l1v+fXz5NRXk18WQX9tEfn0a+TWGGlAnSn6tL/n12uTX3GtA3UT5tS/l1y+VX4O2AXWEa7z5VqwFLb+eN/fptgpR7h0gvq5+A3oj1LR3QI7+Fg3oUVLHRTF3t6C6SczdK6gB/Z4a0LOrAX3XDPm984wG9D+8ILyH5Suy+5C+IbqX7GfE9gOmVYvq6QwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQBd/AeVenzu8wDl+AAAAAElFTkSuQmCC"
          ></img>
          <h1 className="text-centre mt-3 text-xl font-bold translate-x-2">
            YouTube
          </h1>
        </div>
        <div className="grid grid-rows-13 hover: ">
          <div className="flex ml-[25px] w-1/2">
            <svg
              className="w-1/5 text-centre"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>

            <button className="bg-white font-semibold hover:bg-gray-200 h-[47px] translate-y-[-20] ml-10 text-left">
              Home
            </button>
          </div>

          <button className="bg-white font-semibold hover:bg-gray-200 h-[47px]">
            Explore
          </button>
          <button className="bg-white font-semibold hover:bg-gray-200 h-[47px]">
            Shorts
          </button>
          <button className="bg-white font-semibold hover:bg-gray-200 h-[47px]">
            Subscription
          </button>
          <button className="bg-white font-semibold hover:bg-gray-200 h-[47px]">
            Library
          </button>
          <button className="bg-white font-semibold hover:bg-gray-200 h-[47px]">
            Your videos
          </button>
          <button className="bg-white font-semibold hover:bg-gray-200 h-[47px]">
            Watch later
          </button>
          <button className="bg-white font-semibold hover:bg-gray-200 h-[47px]">
            Liked videos
          </button>
          <button className="bg-white font-semibold hover:bg-gray-200 h-[47px]">
            Gaming
          </button>
          <button className="bg-white font-semibold hover:bg-gray-200 h-[47px]">
            Movies
          </button>
          <button className="bg-white font-semibold hover:bg-gray-200 h-[47px]">
            Learning
          </button>
          <button className="bg-white font-semibold hover:bg-gray-200 h-[47px]">
            Sports
          </button>
          <button className="bg-white font-semibold hover:bg-gray-200 h-[47px]">
            Setting
          </button>
          <button className="bg-white font-semibold hover:bg-gray-200 h-[47px]">
            Report
          </button>
          <button className="bg-white font-semibold hover:bg-gray-200 h-[47px]">
            Help
          </button>
          <button className="bg-white font-semibold hover:bg-gray-200 h-[47px]">
            Home
          </button>
        </div>
      </div>

      <div className=" h-[60px] col-span-4 flex justify-center mt-5">
        <input
          placeholder="Search"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3 mt-2 px-1 w-1/2 py-1  border-2 border-gray-300"
        ></input>
      </div>
      <div className=" h-[60px] col-span-4 grid grid-cols-8 border-2 border-r-0 border-l-0 border-gray-200  ">
        <button className="bg-black text-white font-semibold rounded-full m-4 mx-10 my-3  ">
          <h1>All</h1>
        </button>
        <button className="bg-gray-100 rounded-full m-4 mx-8  my-3">
          <h1>Domics</h1>
        </button>
        <button className="bg-gray-100 rounded-full m-4 mx-8  my-3">
          <h1>Gaming</h1>
        </button>
        <button className="bg-gray-100 rounded-full m-4 mx-8  my-3">
          <h1>News</h1>
        </button>
        <button className="bg-gray-100 rounded-full m-4 mx-8  my-3">
          <h1>Music</h1>
        </button>
        <button className="bg-gray-100 rounded-full m-4 mx-8  my-3">
          <h1>Blog</h1>
        </button>
        <button className="bg-gray-100 rounded-full m-4 mx-8  my-3">
          <h1>Computer</h1>
        </button>
        <button className="bg-gray-100 rounded-full m-4 mx-8 my-3 ">
          <h1>Vlogging</h1>
        </button>
      </div>
      <div className="bg-grey-200 h-[270px]">
        <div>
          <img src="https://i.ytimg.com/vi/Vu_bTKMSpbA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB73UINWiUYBQ9r5abQ0oMbxWs7dg"></img>
        </div>
        <div className="flex text-left">
          <img
            className="rounded-full w-1/6 p-2 h-1/6 mt-2"
            src="https://yt3.ggpht.com/xeFBITJaPUqPwo_wNbtNfQi3RDiGA07TBRJqiCcCGOrMN-d8qE-EfGgPAWG3gFGX1e9fCOoC=s88-c-k-c0x00ffffff-no-rj"
          ></img>
          <div className="w-2/3">
            <h1 className="  text-[.8rem] font-bold p-2 pt-3">
              IIT Roorkee Freshers Party
            </h1>
          </div>
        </div>
        <div className=" text-[.7rem] text-left translate-x-[55px]  font-bold opacity-60">
          <p className="">Ankit Dewangan</p>
          <p className="">679k views 9 hours ago</p>
        </div>
      </div>
      <div className="bg-grey-200 h-[270px]">
        <div>
          <img src="https://i.ytimg.com/vi/JG4rB4dRdug/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDh8EpL_ywPCsmanGZ0m8UgC1NmAQ"></img>
        </div>
        <div className="flex text-left">
          <img
            className="rounded-full w-1/6 p-2 h-1/6 mt-2"
            src="https://yt3.ggpht.com/UjKc54x7sVzQ4KLlS5rgMI0DdLoaa4cFbFpsFsxLxcSXEbTWotIPvyCA63BjTddipDv8LQufiQ=s68-c-k-c0x00ffffff-no-rj"
          ></img>
          <div className="w-2/3">
            <h1 className="  text-[.8rem] font-bold p-2 pt-3">
              FOREX Analysis || GOLD Analysis{" "}
            </h1>
          </div>
        </div>
        <div className=" text-[.7rem] text-left translate-x-[55px] translate-y-[-5px] font-bold opacity-60">
          <p className="">Sandeep Maheswari</p>
          <p className="">679k views 9 hours ago</p>
        </div>
      </div>
      <div className="bg-grey-200 h-[270px]">
        <div>
          <img src="https://i.ytimg.com/vi/hhZtiytNaBQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcrc8HMnMEtITpwA6BaYvoteOkJw"></img>
        </div>
        <div className="flex text-left">
          <img
            className="rounded-full w-1/6 p-2 h-1/6 mt-2"
            src="https://yt3.ggpht.com/UjKc54x7sVzQ4KLlS5rgMI0DdLoaa4cFbFpsFsxLxcSXEbTWotIPvyCA63BjTddipDv8LQufiQ=s68-c-k-c0x00ffffff-no-rj"
          ></img>
          <div className="w-2/3">
            <h1 className="  text-[.8rem] font-bold p-2 pt-3">
              FOREX Analysis || GOLD Analysis{" "}
            </h1>
          </div>
        </div>
        <div className=" text-[.7rem] text-left translate-x-[55px] translate-y-[-5px] font-bold opacity-60">
          <p className="">Sandeep Maheswari</p>
          <p className="">679k views 9 hours ago</p>
        </div>
      </div>
      <div className="bg-grey-200 h-[270px]">
        <div>
          <img src="https://i.ytimg.com/vi/FUWjT2CgJUM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACKDx2QLieMC1ptnVs8IKoQF8m0A"></img>
        </div>
        <div className="flex text-left">
          <img
            className="rounded-full w-1/6 p-2 h-1/6 mt-2"
            src="https://yt3.ggpht.com/UjKc54x7sVzQ4KLlS5rgMI0DdLoaa4cFbFpsFsxLxcSXEbTWotIPvyCA63BjTddipDv8LQufiQ=s68-c-k-c0x00ffffff-no-rj"
          ></img>
          <div className="w-2/3">
            <h1 className="  text-[.8rem] font-bold p-2 pt-3">
              FOREX Analysis || GOLD Analysis{" "}
            </h1>
          </div>
        </div>
        <div className=" text-[.7rem] text-left translate-x-[55px] translate-y-[-5px] font-bold opacity-60">
          <p className="">Sandeep Maheswari</p>
          <p className="">679k views 9 hours ago</p>
        </div>
      </div>
      <div className="bg-grey-200 h-[270px]">
        <div>
          <img src="https://i.ytimg.com/vi/hdBUo3P-sU8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCfeylELldHW-F_dZiuu4fQUrs3SQ"></img>
        </div>
        <div className="flex text-left">
          <img
            className="rounded-full w-1/6 p-2 h-1/6 mt-2"
            src="https://yt3.ggpht.com/UjKc54x7sVzQ4KLlS5rgMI0DdLoaa4cFbFpsFsxLxcSXEbTWotIPvyCA63BjTddipDv8LQufiQ=s68-c-k-c0x00ffffff-no-rj"
          ></img>
          <div className="w-2/3">
            <h1 className="  text-[.8rem] font-bold p-2 pt-3">
              FOREX Analysis || GOLD Analysis{" "}
            </h1>
          </div>
        </div>
        <div className=" text-[.7rem] text-left translate-x-[55px] translate-y-[-5px] font-bold opacity-60">
          <p className="">Sandeep Maheswari</p>
          <p className="">679k views 9 hours ago</p>
        </div>
      </div>
      <div className="bg-grey-200 h-[270px]">
        <div>
          <img src="https://i.ytimg.com/vi/KMufa47AylY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA4UX_8-JdjrT3TMA0RoUeY8bXKLw"></img>
        </div>
        <div className="flex text-left">
          <img
            className="rounded-full w-1/6 p-2 h-1/6 mt-2"
            src="https://yt3.ggpht.com/UjKc54x7sVzQ4KLlS5rgMI0DdLoaa4cFbFpsFsxLxcSXEbTWotIPvyCA63BjTddipDv8LQufiQ=s68-c-k-c0x00ffffff-no-rj"
          ></img>
          <div className="w-2/3">
            <h1 className="  text-[.8rem] font-bold p-2 pt-3">
              FOREX Analysis || GOLD Analysis{" "}
            </h1>
          </div>
        </div>
        <div className=" text-[.7rem] text-left translate-x-[55px] translate-y-[-5px] font-bold opacity-60">
          <p className="">Sandeep Maheswari</p>
          <p className="">679k views 9 hours ago</p>
        </div>
      </div>
      <div className="bg-grey-200 h-[270px]">
        <div>
          <img src="https://i.ytimg.com/vi/C_cOG701tMY/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDQcUBw0r5mkCFi7yEwxHnmwvgow"></img>
        </div>
        <div className="flex text-left">
          <img
            className="rounded-full w-1/6 p-2 h-1/6 mt-2"
            src="https://yt3.ggpht.com/UjKc54x7sVzQ4KLlS5rgMI0DdLoaa4cFbFpsFsxLxcSXEbTWotIPvyCA63BjTddipDv8LQufiQ=s68-c-k-c0x00ffffff-no-rj"
          ></img>
          <div className="w-2/3">
            <h1 className="  text-[.8rem] font-bold p-2 pt-3">
              FOREX Analysis || GOLD Analysis{" "}
            </h1>
          </div>
        </div>
        <div className=" text-[.7rem] text-left translate-x-[55px] translate-y-[-5px] font-bold opacity-60">
          <p className="">Sandeep Maheswari</p>
          <p className="">679k views 9 hours ago</p>
        </div>
      </div>
      <div className="bg-grey-200 h-[270px]">
        <div>
          <img src="https://i.ytimg.com/vi/YZLKoG_vhDY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBtCsnXOwDv6hdqf7iDSzLPxaZLRA"></img>
        </div>
        <div className="flex text-left">
          <img
            className="rounded-full w-1/6 p-2 h-1/6 mt-2"
            src="https://yt3.ggpht.com/UjKc54x7sVzQ4KLlS5rgMI0DdLoaa4cFbFpsFsxLxcSXEbTWotIPvyCA63BjTddipDv8LQufiQ=s68-c-k-c0x00ffffff-no-rj"
          ></img>
          <div className="w-2/3">
            <h1 className="  text-[.8rem] font-bold p-2 pt-3">
              FOREX Analysis || GOLD Analysis{" "}
            </h1>
          </div>
        </div>
        <div className=" text-[.7rem] text-left translate-x-[55px] translate-y-[-5px] font-bold opacity-60">
          <p className="">Sandeep Maheswari</p>
          <p className="">679k views 9 hours ago</p>
        </div>
      </div>
      <div className="bg-grey-200 h-[270px]">
        <div>
          <img src="https://i.ytimg.com/vi/6PfYFeJSGjo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAADSyGfuLY8jIbHz1T1CAQ8cy2CQ"></img>
        </div>
        <div className="flex text-left">
          <img
            className="rounded-full w-1/6 p-2 h-1/6 mt-2"
            src="https://yt3.ggpht.com/UjKc54x7sVzQ4KLlS5rgMI0DdLoaa4cFbFpsFsxLxcSXEbTWotIPvyCA63BjTddipDv8LQufiQ=s68-c-k-c0x00ffffff-no-rj"
          ></img>
          <div className="w-2/3">
            <h1 className="  text-[.8rem] font-bold p-2 pt-3">
              FOREX Analysis || GOLD Analysis{" "}
            </h1>
          </div>
        </div>
        <div className=" text-[.7rem] text-left translate-x-[55px] translate-y-[-5px] font-bold opacity-60">
          <p className="">Sandeep Maheswari</p>
          <p className="">679k views 9 hours ago</p>
        </div>
      </div>
      <div className="bg-grey-200 h-[270px]">
        <div>
          <img src="https://i.ytimg.com/an_webp/3SW9i2kk8iU/mqdefault_6s.webp?du=3000&sqp=CMu-pZQG&rs=AOn4CLAr9hVbmX44EWgrBbNCxhOb6REJ5A"></img>
        </div>
        <div className="flex text-left">
          <img
            className="rounded-full w-1/6 p-2 h-1/6 mt-2"
            src="https://yt3.ggpht.com/UjKc54x7sVzQ4KLlS5rgMI0DdLoaa4cFbFpsFsxLxcSXEbTWotIPvyCA63BjTddipDv8LQufiQ=s68-c-k-c0x00ffffff-no-rj"
          ></img>
          <div className="w-2/3">
            <h1 className="  text-[.8rem] font-bold p-2 pt-3">
              FOREX Analysis || GOLD Analysis{" "}
            </h1>
          </div>
        </div>
        <div className=" text-[.7rem] text-left translate-x-[55px] translate-y-[-5px] font-bold opacity-60">
          <p className="">Sandeep Maheswari</p>
          <p className="">679k views 9 hours ago</p>
        </div>
      </div>
      <div className="bg-grey-200 h-[270px]">
        <div>
          <img src="https://i.ytimg.com/vi/68eu5ufYaeY/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYAlYXst3G4R4pJmcr1SY4pdNQbA"></img>
        </div>
        <div className="flex text-left">
          <img
            className="rounded-full w-1/6 p-2 h-1/6 mt-2"
            src="https://yt3.ggpht.com/UjKc54x7sVzQ4KLlS5rgMI0DdLoaa4cFbFpsFsxLxcSXEbTWotIPvyCA63BjTddipDv8LQufiQ=s68-c-k-c0x00ffffff-no-rj"
          ></img>
          <div className="w-2/3">
            <h1 className="  text-[.8rem] font-bold p-2 pt-3">
              FOREX Analysis || GOLD Analysis{" "}
            </h1>
          </div>
        </div>
        <div className=" text-[.7rem] text-left translate-x-[55px] translate-y-[-5px] font-bold opacity-60">
          <p className="">Sandeep Maheswari</p>
          <p className="">679k views 9 hours ago</p>
        </div>
      </div>
    </div>
  );
}

export default Youtube;
