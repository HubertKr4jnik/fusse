import { useEffect, useState } from "react"

export default function Display(props) {
    let beep = new Audio("https://hubert-krajnik.hackclub.app/assets/beep.m4a")

    beep.volume = .75

    beep.play()

    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(5)
  
    function updateTime() {
      if (minutes == 0 && seconds == 0) {
        //reset
        setSeconds(0);
        setMinutes(5);
      }
      else {
        if (seconds == 0) {
          setMinutes(minutes => minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds => seconds - 1);
        }
      }
    }
  
    useEffect(() => {
      let delay = 1000

      if (props.wrong == 1) {
        delay = 500
      }
      if (props.wrong == 2) {
        delay = 333
      }
      const token = setTimeout(updateTime, delay)
  
        if (minutes == 0 && seconds == 0) {
            clearTimeout(token);
            beep.pause()
            props.handleWrong(3)
            // window.location.reload()
        }

        if (props.wrong + props.correct == 8) {
          clearTimeout(token);
          beep.pause()
          // window.location.reload()
      }

        return () => {
            if(token !== null) clearTimeout(token);
        }
    })

  return (
    <div className="w-full h-full bg-slate-500 flex flex-col place-items-center justify-evenly px-6 border-8 border-slate-800 module">
        <p className="font-bold text-red-600 text-3xl bg-zinc-800 p-4 rounded border-zinc-900 border-4">{minutes < 10 ? "0"+minutes : minutes} : {seconds < 10 ? "0"+seconds : seconds }</p>
    </div>
  )
}
