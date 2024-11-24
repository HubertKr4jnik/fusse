import { useState } from "react"

export default function Shape() {

    const shapes = ["circle", "square"]

    const texts = ["Click", "Exit", "Return", "Abort"]

    let randomShape = shapes[Math.floor(Math.random() * shapes.length)]

    let randomText = texts[Math.floor(Math.random() * texts.length)]

    let borderRadius = "0";

    if (randomShape == "circle") {
        borderRadius = "50%"
    }

    return (
      <div className="w-full h-full bg-slate-500 flex flex-col place-items-center justify-evenly px-6 border-8 border-slate-800 module">
        <div style={{borderRadius: borderRadius}} className="rounded-full w-full aspect-square bg-sky-400 border-sky-600 border-4 flex place-items-center justify-center text-xl font-bold cursor-pointer">
            {randomText}
        </div>
      </div>
    )
  }
  