import { useState } from "react"
import Binary from "./Binary"
import Cables from "./Cables"
import Display from "./Display"
import Empty from "./Empty"
import Shape from "./Shape"

export default function Cube() {
    const [correct, setCorrect] = useState(0)
    const [wrong, setWrong] = useState(0)
    return (
      <>
      {wrong >= 2 && <img src="src\assets\giphy.gif" alt=""/>}
      {wrong < 2 && <>
      <h1 className="pb-6 font-bold text-xl">
        <p className="text-green-600">Correct: {correct}</p>
        <p className="text-red-600">Wrong: {wrong}</p>
      </h1>
      <div  className="aspect-square h-4/5 bg-white grid grid-cols-3 grid-rows-3 gap-1 p-1 rounded">
        <Cables value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
        <Empty />
        <Binary value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
        <Binary value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
        <Display wrong={wrong} handleWrong={setWrong}/>
        <Cables value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
        <Cables value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
        <Binary value={correct} handleChange={setCorrect} wrong={wrong} handleWrong={setWrong}/>
        <Shape />
      </div></>}
      </>
    )
  }