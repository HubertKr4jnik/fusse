import { useState } from "react"

export default function Shape() {

    const shapes = ["circle", "square"]

    const texts = ["Click", "Exit", "Return", "Abort"]

    const colors = ["gray", "rgb(56 189 248)"]

    let randomShape = shapes[Math.floor(Math.random() * shapes.length)]

    let randomText = texts[Math.floor(Math.random() * texts.length)]

    let randomColor = colors[Math.floor(Math.random() * colors.length)]

    let borderRadius = "0";

    if (randomShape == "circle") {
        borderRadius = "50%"
    }

    const handleShapeClick = ()=>{
      
    }

    return (
      <div className="w-full h-full bg-slate-500 flex flex-col place-items-center justify-evenly px-6 border-8 border-slate-800 module">
        <div onClick={handleShapeClick} style={{borderRadius: borderRadius, backgroundColor: randomColor}} className="rounded-full w-full aspect-square border-4 flex place-items-center justify-center text-xl font-bold cursor-pointer">
            {randomText}
        </div>
      </div>
    )
  }
  