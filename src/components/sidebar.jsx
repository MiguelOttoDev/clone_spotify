import { GoHomeFill as HomeIcon } from "react-icons/go";
import { LuLibrary } from "react-icons/lu";
import { IoIosSearch as SearchIcon  } from "react-icons/io";
export default function Sidebar(){
           return(
            <aside className="w-72 bg-zinc-950 p-6">
    
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
    
              </div>
    
              <nav className="space-y-5 mt-10">
                <a href="" className="flex items-center gap-3 text-lg font-semibold text-zinc-200">
                  <HomeIcon />
                  Home
                </a>
                <a href="" className="flex items-center gap-3 text-lg font-semibold text-zinc-200">
                  <SearchIcon />
                  Search
                </a>
                <a href="" className="flex items-center gap-3 text-lg font-semibold text-zinc-200">
                  <LuLibrary />
                  Your Library
                </a>
              </nav>
    
              <nav className="mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3">
                <a href="" className=" text-sm text-zinc-400 hover:text-zinc-100" >Músicas curtidas</a>
                <a href="" className=" text-sm text-zinc-400 hover:text-zinc-100" >Adoração</a>
                <a href="" className=" text-sm text-zinc-400 hover:text-zinc-100" >Radio FM</a>
                <a href="" className=" text-sm text-zinc-400 hover:text-zinc-100" >Som do Reino</a>
    
              </nav>
    
            </aside>
           ) 
}