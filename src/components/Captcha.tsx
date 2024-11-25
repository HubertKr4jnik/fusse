import { useEffect, useState } from "react"

export default function Captcha(props) {
    const [characters] = useState("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/*-+=`~?><.,'")
    const [randomCharacters, setRandomCharacters] = useState("")
    const [inputVal, setInputVal] = useState("")

    let random = ""
    for (let i = 0; i < 10; i++) {
        random += characters[Math.floor(Math.random() * characters.length)]
    }

    useEffect(()=>{
        setRandomCharacters(random)
    }, [props.wrong, props.value])

    const handleCaptchaSubmit = (e)=>{
        if (e.target.parentElement.style.borderColor != "lightgreen" && e.target.parentElement.style.borderColor != "lightgreen") {
            if (inputVal === randomCharacters) {
                props.handleChange((value) => value + 1)
                e.target.parentElement.style.borderColor = "lightgreen"
            }
            else{
                props.handleWrong((wrong) => wrong + 1)
                e.target.parentElement.style.borderColor = "red"
            } 
        }
    }

    return (
      <div className="w-full h-full bg-slate-500 flex flex-col place-items-center justify-evenly px-6 border-8 border-slate-800 module">
        <p className="w-5/6 bg-zinc-800 py-1 border-zinc-900 border-2 text-red-600 rounded text-center select-none">
            <span className="animate-pulse">
                {randomCharacters}
            </span>
        </p>
        <input type="text" name="" id="" value={inputVal} onChange={(e)=>{setInputVal(e.target.value)}} className="w-5/6 bg-zinc-800 py-1 border-zinc-900 border-2 text-red-600 rounded text-center"/>
        <input type="button" value="Submit" onClick={(e)=>{handleCaptchaSubmit(e)}} className="w-5/6 bg-zinc-800 py-1 border-zinc-900 border-2 text-red-700 rounded text-center cursor-pointer transition-all hover:text-red-600" />
      </div>
    )
  }
  