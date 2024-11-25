import { useState } from "react"
import Binary from "./Binary"
import Cables from "./Cables"
import Display from "./Display"
import Empty from "./Empty"
import Shape from "./Shape"
import Captcha from "./Captcha"

export default function Cube() {
    const [correct, setCorrect] = useState(0)
    const [wrong, setWrong] = useState(0)

    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(5)

    const [elements] = useState([<Binary/>, <Cables/>, <Empty/>, <Captcha/>])

    let boom = new Audio("https://hubert-krajnik.hackclub.app/assets/boom.m4a")

    if (wrong >= 3) {
      boom.play()
    }
    return (
      <>
        {wrong >= 3 && <img src="https://hubert-krajnik.hackclub.app/assets/explosion.gif" alt=""/>}
        {wrong < 3 && <>
        <h1 className="pb-6 font-bold text-xl">
          <p className="text-green-600">Correct: {correct}</p>
          <p className="text-red-600">Wrong: {wrong}</p>
        </h1>
        <div  className="aspect-square h-4/5 bg-white grid grid-cols-3 grid-rows-3 gap-1 p-1 rounded">
          <Cables value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Captcha value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Binary value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Binary value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Display minutes={minutes} handleMinutes={setMinutes} seconds={seconds} handleSeconds={setSeconds} wrong={wrong} handleWrong={setWrong}/>
          <Cables value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Cables value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Binary value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
          <Captcha value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
        </div>
        <a className="text-white underline pt-4" href="https://hubert-krajnik.hackclub.app/fusse/src/instructions.html">Instructions for the 2nd player</a>
        </>}
      </>
    )
  }