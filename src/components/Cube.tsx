import { useEffect, useState } from "react"
import Binary from "./Binary"
import Cables from "./Cables"
import Display from "./Display"
import Empty from "./Empty"
import Shape from "./Shape"
import Captcha from "./Captcha"

export default function Cube() {
    const [started, setStarted] = useState(false)

    const [correct, setCorrect] = useState(0)
    const [wrong, setWrong] = useState(0)

    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(5)

    const [random] = useState(Math.round(Math.random() * 5))

    let boom = new Audio("https://hubert-krajnik.hackclub.app/assets/boom.m4a")

    if (wrong >= 3) {
      boom.play()
    }

    let victory = new Audio("https://hubert-krajnik.hackclub.app/assets/victory.m4a")

    if (wrong + correct == 8) {
      victory.play()
    }

    return (
      <>
        {
          !started && <div className="h-fit p-10 bg-slate-300 rounded flex flex-col place-items-center justify-evenly shadow-2xl shadow-black border-4 border-slate-500">
          <div className="text-center pb-4">
            <h1 className="font-bold text-4xl">Welcome to "Fusse"</h1>
            <p>Please select your role:</p>
          </div>
          <div className="flex flex-col place-items-center text-center">
            <input type="button" value="Defuser 💣" onClick={()=>setStarted(true)} className="w-fit bg-white px-3 py-1 my-2 cursor-pointer font-semibold rounded transition-all hover:bg-gray-200"/>
            <a href="https://hubert-krajnik.hackclub.app/fusse/src/instructions.html">
              <input type="button" value="Instruction reader 📖" className="w-fit bg-white px-3 py-1 cursor-pointer font-semibold rounded transition-all hover:bg-gray-200"/>
            </a>
          </div>
        </div>
        }
        {wrong >= 3 && <img src="https://hubert-krajnik.hackclub.app/assets/explosion.gif" alt=""/>}
        {wrong + correct == 8 && <> 
          <img src="https://media0.giphy.com/media/Exc9GvjitUCPczepZe/giphy.gif?cid=6c09b9529efgn919sgfyba5mg8rxhuf8fnudmj16cnvw707t&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="" />
          <h1 className="text-white font-bold text-3xl">Congratulations!</h1>
          <p className="text-white text-xl pt-4 text-center">You overcame yourself and defused the bomb</p>
        </>}
        {wrong < 3 && started && wrong + correct != 8 && random == 0 && <>
        <h1 className="pb-6 font-bold text-xl">
          <p className="text-green-600 border-2 py-2 px-4 rounded-3xl shadow-lg shadow-black">{8 - (correct + wrong)} module(s) left</p>
        </h1>
        <div className="aspect-square h-4/5 bg-white grid grid-cols-3 grid-rows-3 gap-1 p-1 rounded shadow-2xl shadow-black">
          <Cables value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Binary value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Captcha value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Display minutes={minutes} handleMinutes={setMinutes} seconds={seconds} handleSeconds={setSeconds} wrong={wrong} handleWrong={setWrong} correct={correct}/>
          <Captcha value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Binary value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Cables value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Binary value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Cables value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
        </div>
        </>}
        {wrong < 3 && started && wrong + correct != 8 && random == 1 && <>
        <h1 className="pb-6 font-bold text-xl">
          <p className="text-green-600 border-2 py-2 px-4 rounded-3xl shadow-lg shadow-black">{8 - (correct + wrong)} module(s) left</p>
        </h1>
        <div className="aspect-square h-4/5 bg-white grid grid-cols-3 grid-rows-3 gap-1 p-1 rounded shadow-2xl shadow-black">
          <Cables value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Captcha value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Binary value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Binary value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Display minutes={minutes} handleMinutes={setMinutes} seconds={seconds} handleSeconds={setSeconds} wrong={wrong} handleWrong={setWrong} correct={correct}/>
          <Cables value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Cables value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Binary value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Captcha value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
        </div>
        </>}
        {wrong < 3 && started && wrong + correct != 8 && random == 2 && <>
        <h1 className="pb-6 font-bold text-xl">
          <p className="text-green-600 border-2 py-2 px-4 rounded-3xl shadow-lg shadow-black">{8 - (correct + wrong)} module(s) left</p>
        </h1>
        <div className="aspect-square h-4/5 bg-white grid grid-cols-3 grid-rows-3 gap-1 p-1 rounded shadow-2xl shadow-black">
          <Cables value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Captcha value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Captcha value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Binary value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Empty />
          <Display minutes={minutes} handleMinutes={setMinutes} seconds={seconds} handleSeconds={setSeconds} wrong={wrong} handleWrong={setWrong} correct={correct}/>
          <Cables value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Binary value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Cables value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
        </div>
        </>}
        {wrong < 3 && started && wrong + correct != 8 && random == 3 && <>
        <h1 className="pb-6 font-bold text-xl">
          <p className="text-green-600 border-2 py-2 px-4 rounded-3xl shadow-lg shadow-black">{8 - (correct + wrong)} module(s) left</p>
        </h1>
        <div className="aspect-square h-4/5 bg-white grid grid-cols-3 grid-rows-3 gap-1 p-1 rounded shadow-2xl shadow-black">
          <Captcha value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Display minutes={minutes} handleMinutes={setMinutes} seconds={seconds} handleSeconds={setSeconds} wrong={wrong} handleWrong={setWrong} correct={correct}/>
          <Cables value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Binary value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Cables value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Cables value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Empty />
          <Binary value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Cables value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
        </div>
        </>}
        {wrong < 3 && started && wrong + correct != 8 && random == 4 && <>
        <h1 className="pb-6 font-bold text-xl">
          <p className="text-green-600 border-2 py-2 px-4 rounded-3xl shadow-lg shadow-black">{8 - (correct + wrong)} module(s) left</p>
        </h1>
        <div className="aspect-square h-4/5 bg-white grid grid-cols-3 grid-rows-3 gap-1 p-1 rounded shadow-2xl shadow-black">
          <Empty />
          <Cables value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Binary value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Captcha value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Cables value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Binary value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Display minutes={minutes} handleMinutes={setMinutes} seconds={seconds} handleSeconds={setSeconds} wrong={wrong} handleWrong={setWrong} correct={correct}/>
          <Binary value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Cables value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
        </div>
        </>}
        {wrong < 3 && started && wrong + correct != 8 && random == 5 && <>
        <h1 className="pb-6 font-bold text-xl">
          <p className="text-green-600 border-2 py-2 px-4 rounded-3xl shadow-lg shadow-black">{8 - (correct + wrong)} module(s) left</p>
        </h1>
        <div className="aspect-square h-4/5 bg-white grid grid-cols-3 grid-rows-3 gap-1 p-1 rounded shadow-2xl shadow-black">
          <Binary value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Binary value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Cables value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Display minutes={minutes} handleMinutes={setMinutes} seconds={seconds} handleSeconds={setSeconds} wrong={wrong} handleWrong={setWrong} correct={correct}/>
          <Empty />
          <Captcha value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Binary value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Cables value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Cables value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
        </div>
        </>}
      </>
    )
  }