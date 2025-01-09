import { BiRepeat } from "react-icons/bi";
import { TbMicrophone2 } from "react-icons/tb"
import { HiQueueList } from "react-icons/hi2";
import { FaComputer } from "react-icons/fa6";
import { FiMaximize2 } from "react-icons/fi";
import { IoIosSearch as SearchIcon, IoIosShuffle  } from "react-icons/io";
import {FaPlay, FaVolumeUp  } from "react-icons/fa";
import { IoPlaySkipBackSharp, IoPlaySkipForward  } from "react-icons/io5";

export default function Footer(){
    return(
        <footer className="bg-zinc-800 border-t border-zinc-700 p-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
        <img src="/bem_mais_precioso.jpg" className="rounded" width={60} height={60} alt="album" />
        <div className="flex flex-col gap-1">
          <strong className="font-normal">Bem mais precioso</strong>
          <span className="text-xs text-zinc-400">Rubens Oliveira</span>
        </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3">
            <IoIosShuffle className="text-zinc-400 text-3xl"/>
            <IoPlaySkipBackSharp  className="text-zinc-400 text-xl" />
            <button className="p-3 rounded-full bg-white ml-auto ">
                <FaPlay color="#000" />
              </button>
            <IoPlaySkipForward  className="text-zinc-400 text-xl"/>
            <BiRepeat  className="text-zinc-400 text-2xl"/>
          </div>
          <div className="flex items-center gap-2 mt-1">
            
            <span className="text-xs text-zin-400">1:59</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zin-400">4:03</span>


          </div>
        </div>

        <div className="flex items-center gap-2">
        <TbMicrophone2 size={20}/>
        <HiQueueList  size={20}/>
        <FaComputer  size={20}/>
        <FaVolumeUp size={20}/>
        <div className="h-1 rounded-full w-28 bg-zinc-600">
              <div className="bg-zinc-200 h-1 w-10 rounded-full"></div>
            </div>
            <FiMaximize2 size={20}/>
        </div>
      </footer>
    )
}