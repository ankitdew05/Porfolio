import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";




function Profile() {

    const [isActive, setActive] = useState('visible');
  const handleToggle = () => {
    setActive('invisible');  };





  return (
    <div className="App">
      <div className="mt-[41px] ml-[59px] grid frid-cols-2 grid-flow-row-dense">
        <div className="col-span-2 min-h-[100px]  flex ">
          <div className="flex p-5 pt-0">
            <div>
              <img
                className=""
                src="https://i.ibb.co/sw24tK9/Group-965.png"
              ></img>
            </div>
            <div className="pl-5 pt-0">
              <h1 className="text-black font-semibold text-2xl text-left">
                Ankit
              </h1>
              <p className="font-thin">Dewangan</p>
            </div>
          </div>
          <div className="flex ml-[343px]">
            <h1 className=" pl-0 pt-0 p-2">I</h1>
            <h1 className="pt-0 p-2">AM</h1>
            <h1 className="pt-0 p-2">A</h1>
            <h1 className="pt-0 p-2">FULL STACK</h1>
            <h1 className="pt-0 p-2">WEB DEVELOPER</h1>
          </div>
          <div className="ml-[440px]">
            <button className="bg-orange-500 px-6 py-1 text-sm rounded-xl font-semibold text-white "
            onClick={handleToggle}>
              Portfolio
            </button>
          </div>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-2">
            <div className="flexc flex-col text-left ml-[100px] ">
              <h1 className="text-5xl pt-[150px] font-bold text-black">
                Web Developer
              </h1>
              <p className="mt-10 font-thin text-base">
                Passionate full-stack web developer with 1+ years of self
                learning, experience in developing scalable
                websites/applications using a wide range of front-end and
                back-end skills like HTML, CSS, Node, JavaScript, etc. Developed
                1 websites from scratch at Scaler for Outreach Club IIT Roorkee.
                Looking to further enhance HTML5, CSS3 ,Tailwind, JS skills as
                the future full stack developer.
              </p>
             <button className="bg-white text-yellow-700 mt-10 text-sm  border-yellow-200 border-2 px-7 py-2 rounded-2xl ">
                TAP TO KNOW MORE
              </button>
            </div>
            <div className="flex justify-center">
              <img
                className="pt-[50px]"
                src="https://media.istockphoto.com/photos/illustration-of-happy-smiling-businessman-in-suit-with-laptop-sitting-picture-id1248415323?k=20&m=1248415323&s=612x612&w=0&h=mpz6fKC488an1F9dNcZ22zYENnpL-_xI5uVuZcuWihQ="
                alt="5274053-1"
              ></img>
            </div>
          </div>
        </div>

        <div className="col-span-2 mt-[238px]">
          <div className="grid grid-cols-2">
            <div className="flex">
              <img
                className=""
                src="https://i.ibb.co/qD7MhkZ/Mask-Group.png"
                alt="Mask-Group"
              ></img>
              <img
                //translate-x-[280px] translate-y-[-400px]
                className=" translate-x-[-200px] rounded-xl translate-y-[100px]  "
                src="https://i.ibb.co/0yZxWjQ/image-72.png"
                alt="image-71"
              ></img>
            </div>

            <div className="flex flex-col text-left pt-[10px] ">
              <p className="text-gray-500 font-thin pb-5">
                ..........................................................................
              </p>
              <h1 className="text-4xl font-bold opacity-80 text-blue-600">
                About Me
              </h1>
              <p className="text-gray-500 text-xs pt-10 w-4/5">
                I am Ankit Dewangan pursuing my degree from Indian Institute of
                Technology, Roorkee (IIT Roorkee), which is one of the premier
                colleges in the country, but currently pursuing Online due to
                Pandemic. This has exposed me to interaction and teamwork with
                students with high intellect and belonging to various cultures
                and backgrounds. Also, studying in this college gave me immense
                opportunities to buildup ultimate design skills and to delve in
                various extracurricular activities like working as
                Designer,Developer at IIT Roorkee OutReach Club. I believe that
                apart from a good academic background, these qualities go a long
                way in shaping personalities and creating efficient workforce.
              </p>
              <div className="mt-10 text-gray-500">
              <p>Email : ankit_d@ar.iitr.ac.in</p>
              <p>Contact No. : 8770672066</p>
              </div>
              <p className="text-gray-500 text-xs  w-4/5 pt-4"></p>
              <div className="grid grid-cols-4 mt-[90px] pr-10">
                <div className="flex-col">
                  <div className="flex">
                    <img
                      className="w-1/5 h-1/5 pt-2"
                      src="https://i.ibb.co/VxWWt5K/sketch-1.png"
                      alt="sketch-1"
                    ></img>
                    <h1 className="font-bold text-black p-3">HTML</h1>
                  </div>
                  <p className="text-[0.7rem] w-1/2 text-center text-gray-400">
                    I had worked with HTML, CSS , JAVASCRIPT ,Tailwind CSS
                  </p>
                </div>
                <div className="flex-col">
                  <div className="flex">
                    <img
                      className="w-1/5 h-1/5 pt-2"
                      src="https://i.ibb.co/Q8MKPxt/scholarship-1.png"
                      alt="sketch-1"
                    ></img>
                    <h1 className="font-bold text-black p-3">Tailwind CSS</h1>
                  </div>
                  <p className="text-[0.7rem] w-1/2 text-center text-gray-400">
                    Found it very easy and interesting, exploring it
                  </p>
                </div>
                <div className="flex-col">
                  <div className="flex">
                    <img
                      className="w-1/5 h-1/5 pt-2"
                      src="https://i.ibb.co/PCPp45K/rocket-1.png"
                      alt="sketch-1"
                    ></img>
                    <h1 className="font-bold text-black p-3">React</h1>
                  </div>
                  <p className="text-[0.7rem] w-1/2 text-center text-gray-400">
                    I had a good grip on reactjs now exploring nextjs
                  </p>
                </div>
                <div className="flex-col">
                  <div className="flex">
                    <img
                      className="w-1/5 h-1/5 pt-2"
                      src="https://i.ibb.co/PCPp45K/rocket-1.png"
                      alt="sketch-1"
                    ></img>
                    <h1 className="font-bold text-black p-3">Node JS</h1>
                  </div>
                  <p className="text-[0.7rem] w-1/2 text-center text-gray-400">
                    learning node,express,mongodb also made full stack project
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 mt-[138px]">
          <h1 className="text-orange-500 font-bold text-4xl">Projects</h1>
          <p className="pt-5 text-sm"></p>
        </div>

        <div className="col-span-2    flex justify-center  ">
          <h1 className="text-black text-center w-1/4">
            I have made various UI using HML, Tailwind CSS , React
          </h1>
        </div>

        <div className="col-span-2 grid grid-cols-2 mt-[150px] mr-[] min-h-[400px] ">
          <div className="flex-col justify-left pt-[100px] ">
            <h1 className="text-orange-500  text-4xl font-bold">
              OutReach Website
            </h1>
            <div className="flex-col justify-center mt-10">
              <p className="w-2/3 text-center ml-[100px]">
                Studying in this college gave me immense opportunities to
                buildup ultimate design,development skills and to delve in
                various extracurricular activities like working as
                Designer,Developer at IIT Roorkee OutReach Club. Outreach cell,
                IIT Roorkee, is a student-led community under the aegis of Dean
                of Students' Welfare, IIT Roorkee, to connect the outside world
                with the culture of IIT Roorkee.
              </p>
              <button className="bg-white text-yellow-700 mt-10 text-sm  border-yellow-200 border-2  py-2 px-2 rounded-2xl ">
                <Link to="/outreach">TAP TO VIEW PROJECT</Link>
              </button>
            </div>
          </div>
          <div className="flex justify-start pr-[150px]">
            <img
              src="https://i.ibb.co/fSyfMTn/Out-Reach-IIT-Roorkee.png"
              alt="Group-1010"
            ></img>
          </div>
        </div>

        <div className="col-span-2 grid grid-cols-2 mt-[150px] mr-[] min-h-[400px] ">
          <div className="flex justify-start pl-[150px]">
            <img
              src="https://i.ibb.co/BgkfMQY/BLock-Chain.png"
              alt="Group-1010"
            ></img>
          </div>

          <div className="flex-col justify-left pt-[100px] ">
            <h1 className="text-orange-500  text-4xl font-bold">
              BlockChain Society IIT Roorkee
            </h1>
            <div className="flex-col justify-center  mt-10">
              <p className="w-2/3 ml-[130px]">
                group of Blockchain enthusiasts aiming to unite the blockchain
                community of IIT Roorkee, in a highly collaborative environment
                that is open for all. We are always open to collaborations on
                fun projects, and quirky discussions on crypto, Defi, Web3.0 and
                beyond, here developed variour landing pages as project , also
                learning solidity
              </p>
              <button className="bg-white text-yellow-700 mt-10 text-sm  border-yellow-200 border-2  py-2 px-2 rounded-2xl ">
                <Link to="/bitcoin">TAP TO VIEW PROJECT</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-2 grid grid-cols-2 mt-[150px] mr-[] min-h-[400px] ">
          <div className="flex-col justify-left pt-[100px] ">
            <h1 className="text-orange-500  text-4xl font-bold">Youtube Clone</h1>
            <div className="flex-col justify-center mt-10 ">
              <p className="w-2/3 ml-[100px]">
                after learning various concepts of tailwind css i wanted to test
                it by building something therefore in 1 hour i mae this using
                simple grids and flexblox
              </p>
              <button className="bg-white text-yellow-700 mt-10 text-sm  border-yellow-200 border-2  py-2 px-2 rounded-2xl ">
               <Link to='/youtube'>TAP TO VIEW PROJECT</Link> 
              </button>
            </div>
          </div>
          <div className="flex justify-start pr-[150px]">
            <img
              src="https://i.ibb.co/HLyRXRj/Work-Studio-Creative-Space.png"
              alt="Group-1010"
            ></img>
          </div>
        </div>

        <div className="col-span-2 grid grid-cols-2 mt-[150px] mr-[] min-h-[400px] ">
          <div className="flex justify-start pl-[150px]">
            <img
              src="https://i.ibb.co/Zm1ksXw/Work-Studio-Creative-Space-1.png"
              alt="Group-1010"
            ></img>
          </div>

          <div className="flex-col justify-left pt-[100px] ">
            <h1 className="text-orange-500  text-4xl font-bold">Random Clones for Practice</h1>
            <div className="flex-col justify-center mt-10">
              <p className="w-2/3 ml-[100px]">
                tried to make clones of various websites for practice
              </p>
              <button className="bg-white text-yellow-700 mt-10 text-sm  border-yellow-200 border-2  py-2 px-2 rounded-2xl ">
                <Link to='/random'>TAP TO VIEW PROJECT</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-2 h-[350px] bg-black mr-[60px] pt-[100px] mt-[100px] flex justify-center ">
          <div className="flex flex-col text-left ">
            <div className="flex p-5 pt-0">
              <div>
                <img
                  className=""
                  src="https://i.ibb.co/sw24tK9/Group-965.png"
                ></img>
              </div>
              <div className="pl-5 pt-0">
                <h1 className="text-white font-semibold text-xl text-left">
                  Ankit Dewangan
                </h1>
                <p className="font-thin text-white">I I T R O O R K E E</p>
              </div>
            </div>

            <div className="flex flex-col text-left text-white font-semibold pr-4 text-sm">
              <h1 className="pt-2 ">+91 8770672066</h1>
              <h1 className="pt-2 ">ankit_d@ar.iitr.ac.in</h1>
              <h1 className="pt-2 ">
                Jawahar Bhawan, IIT Roorkee, Roorkee, Uttrakhand, India - 247667
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

//<a href="https://imgbb.com/"><img src="https://i.ibb.co/fSyfMTn/Out-Reach-IIT-Roorkee.png" alt="Out-Reach-IIT-Roorkee" border="0"></a>
//<a href="https://imgbb.com/"><img src="https://i.ibb.co/BgkfMQY/BLock-Chain.png" alt="BLock-Chain" border="0"></a>
//<a href="https://imgbb.com/"><img src="https://i.ibb.co/HLyRXRj/Work-Studio-Creative-Space.png" alt="Work-Studio-Creative-Space" border="0"></a>
//<a href="https://imgbb.com/"><img src="https://i.ibb.co/Zm1ksXw/Work-Studio-Creative-Space-1.png" alt="Work-Studio-Creative-Space-1" border="0"></a>
//<a href="https://ibb.co/YQNT2Fc"><img src="https://i.ibb.co/yPNB0c6/aaa.jpg" alt="aaa" border="0"></a>
//<a href="https://imgbb.com/"><img src="https://i.ibb.co/0yZxWjQ/image-72.png" alt="image-72" border="0"></a>
