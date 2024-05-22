import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.cdn1.stockunlimited.net/preview1300/galaxy-background-design_2001751.jpg')" }}>
      <div className="flex flex-col rounded-lg overflow-hidden bg-black bg-opacity-50 backdrop-filter backdrop-blur-xl">
        <div className="flex items-center space-x-1 p-3">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <input type="text" value="0" className="text-right text-5xl w-72 bg-transparent text-white px-4 font-light" />
        <div className="grid grid-cols-4">
          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">AC</button>
          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">+/-</button>
          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">%</button>
          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">/</button>
          
          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">7</button>
          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">8</button>
          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">9</button>
          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">*</button>

          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">4</button>
          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">5</button>
          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">6</button>
          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">-</button>

          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">1</button>
          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">2</button>
          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">3</button>
          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">+</button>

          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">0</button>
          <div className="bg-purple-400 bg-opacity-10"></div>
          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">,</button>
          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">=</button>
        </div>
      </div>
    </div>
  );
}

