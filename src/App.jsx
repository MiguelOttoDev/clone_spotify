import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">

        <Sidebar />

        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="w-6 h-8">
              <FaChevronLeft />
            </button>
            <button className="w-6 h-8">
              <FaChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good morning</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <img src="/album.jpeg" width={80} height={80} alt="album" />
              <strong>Peregrino</strong>
              <button className="p-3 rounded-full bg-green-500 ml-auto mr-8 invisible group-hover:visible">
                <FaPlay color="#000" />
              </button>
            </a>

            <a href="" className="bg-white/10 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <img src="/live_album.jpeg" width={80} height={80} alt="album" />
              <strong>Live at Home</strong>
              <button className="p-3 rounded-full bg-green-500 ml-auto mr-8 invisible group-hover:visible">
                <FaPlay color="#000" />
              </button>
            </a>

            <a href="" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <img src="/carpinteiro_album.jpeg" width={80} height={80} alt="album" />
              <strong>O carpinteiro</strong>
              <button className="p-3 rounded-full bg-green-500 ml-auto mr-8 invisible group-hover:visible">
                <FaPlay color="#000" />
              </button>
            </a>

            <a href="" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <img src="/fogo_album.jpeg" width={80} height={80} alt="album" />
              <strong>O fogo nunca dorme</strong>

              <button className="p-3 rounded-full bg-green-500 ml-auto mr-8 invisible group-hover:visible">
                <FaPlay color="#000" />
              </button>

            </a>

            <a href="" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <img src="/secreto_album.jpeg" width={80} height={80} alt="album" />
              <strong>Som do secreto vol 3 </strong>
              <button className="p-3 rounded-full bg-green-500 ml-auto mr-8 invisible group-hover:visible">
                <FaPlay color="#000" />
              </button>
            </a>


            <a href="" className="bg-white/10 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <img src="/bem_mais_precioso.jpg" width={80} height={80} alt="album" />
              <strong>Bem mais precioso</strong>

              <button className="p-3 rounded-full bg-green-500 ml-auto mr-8 invisible group-hover:visible">
                <FaPlay color="#000" />
              </button>

            </a>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Made for Miguel Otto</h1>

          <div className="grid grid-cols-8 gap-4 mt-4">
          <a href="" className="bg-white/5 p-3 rounded-md flex flex-col group gap-2 hover:bg-white/10 relative">
              <div className="relative">
                <img src="/secreto_album.jpeg" className="w-full" width={80} height={80} alt="album" />
                <button className="p-3 rounded-full bg-green-500 absolute bottom-2 right-2 invisible group-hover:visible">
                  <FaPlay color="#000" />
                </button>
              </div>
              <strong className="font-semibold">Som do secreto vol 3</strong>
              <span className="text-xs text-zinc-500">Álbum • Som Do Reino</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col group gap-2 hover:bg-white/10 relative">
              <div className="relative">
                <img src="/secreto_album.jpeg" className="w-full" width={80} height={80} alt="album" />
                <button className="p-3 rounded-full bg-green-500 absolute bottom-2 right-2 invisible group-hover:visible">
                  <FaPlay color="#000" />
                </button>
              </div>
              <strong className="font-semibold">Som do secreto vol 3</strong>
              <span className="text-xs text-zinc-500">Álbum • Som Do Reino</span>
            </a>

            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col group gap-2 hover:bg-white/10 relative">
              <div className="relative">
                <img src="/secreto_album.jpeg" className="w-full" width={80} height={80} alt="album" />
                <button className="p-3 rounded-full bg-green-500 absolute bottom-2 right-2 invisible group-hover:visible">
                  <FaPlay color="#000" />
                </button>
              </div>
              <strong className="font-semibold">Som do secreto vol 3</strong>
              <span className="text-xs text-zinc-500">Álbum • Som Do Reino</span>
            </a>

            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col group gap-2 hover:bg-white/10 relative">
              <div className="relative">
                <img src="/secreto_album.jpeg" className="w-full" width={80} height={80} alt="album" />
                <button className="p-3 rounded-full bg-green-500 absolute bottom-2 right-2 invisible group-hover:visible">
                  <FaPlay color="#000" />
                </button>
              </div>
              <strong className="font-semibold">Som do secreto vol 3</strong>
              <span className="text-xs text-zinc-500">Álbum • Som Do Reino</span>
            </a>

            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col group gap-2 hover:bg-white/10 relative">
              <div className="relative">
                <img src="/secreto_album.jpeg" className="w-full" width={80} height={80} alt="album" />
                <button className="p-3 rounded-full bg-green-500 absolute bottom-2 right-2 invisible group-hover:visible">
                  <FaPlay color="#000" />
                </button>
              </div>
              <strong className="font-semibold">Som do secreto vol 3</strong>
              <span className="text-xs text-zinc-500">Álbum • Som Do Reino</span>
            </a>
          </div>

        </main>

      </div>

      <Footer />

    </div>


  );
}

export default App;
