import { useState } from "react"

export default function Cables(props) {
    const [numOfCables, setNumOfCables] = useState(Math.floor(Math.random() * 3) + 3)

    const colors = ["red", "green", "blue", "yellow", "black"]

    let cableColors: string[] = [];

    for (let i = 0; i < numOfCables; i++) {
        cableColors.push(colors[Math.floor(Math.random() * 5)])
    }

    let cables = []

    for (let i = 0; i < cableColors.length; i++) {
        cables.push({
            color: cableColors[i],
            key: i
        }) 
    }

    const handleCableClick = (e: React.MouseEvent<HTMLElement>, props)=>{
        if (e.target.parentElement.style.borderColor != "lightgreen" && e.target.parentElement.style.borderColor != "red") {
            if (e.target.id == "correct") {
                console.log("correct cable")
                e.target.parentElement.style.borderColor = "lightgreen"
                props.handleChange((value) => value + 1)

                // props.handleChange(props.value + 1)
            }
            else{
                console.log("wrong cable")
                e.target.parentElement.style.borderColor = "red"
                props.handleWrong(((wrong) => wrong + 1))
            } 
        }
    }

    // console.log(numOfCables)

    return (
      <div className="w-full h-full bg-slate-500 flex flex-col place-items-center justify-evenly px-6 border-8 border-slate-800 module">
            {
            cables.map(cable =>{
                if (numOfCables == 3) {
                    if (cableColors.includes("yellow")) {
                        // console.log("3 cables cut 2nd")
                        if (cable.key == 1) {
                            return <span style={{backgroundColor: cable.color}} id={"correct"} onClick={(e)=>{handleCableClick(e, props)}} className="w-full h-2 rounded cursor-pointer" key={cable.key}></span>
                        }
                    }
                    else if(cableColors.includes("red")){
                        if (cable.key == 0) {
                            return <span style={{backgroundColor: cable.color}} id={"correct"} onClick={(e)=>{handleCableClick(e, props)}} className="w-full h-2 rounded cursor-pointer" key={cable.key}></span>
                        }
                        // console.log("3 cables cut 1st")  
                    }
                    else if(cableColors.includes("black")){
                        if (cableColors[cable.key] == "black") {
                            return <span style={{backgroundColor: cable.color}} id={"correct"} onClick={(e)=>{handleCableClick(e, props)}} className="w-full h-2 rounded cursor-pointer" key={cable.key}></span>
                        }
                        // console.log("3 cables cut black")  
                    }
                    else if (cable.key == 2) {
                        return <span style={{backgroundColor: cable.color}} id={"correct"} onClick={(e)=>{handleCableClick(e, props)}} className="w-full h-2 rounded cursor-pointer" key={cable.key}></span>
                    }
                }
                else if (numOfCables == 4) {
                    // console.log("4 cables")
                    if (cableColors.includes("green")) {
                        // console.log("4 cables cut 1st")
                        if (cable.key == 0) {
                            return <span style={{backgroundColor: cable.color}} id={"correct"} onClick={(e)=>{handleCableClick(e, props)}} className="w-full h-2 rounded cursor-pointer" key={cable.key}></span>
                        }
                    }
                    else if(cableColors.includes("black")){
                        if (cable.key == 1) {
                            return <span style={{backgroundColor: cable.color}} id={"correct"} onClick={(e)=>{handleCableClick(e, props)}} className="w-full h-2 rounded cursor-pointer" key={cable.key}></span>
                        }
                        // console.log("4 cables cut 2nd")  
                    }
                    else if(cableColors.includes("blue")){
                        if (cable.key == 3) {
                            return <span style={{backgroundColor: cable.color}} id={"correct"} onClick={(e)=>{handleCableClick(e, props)}} className="w-full h-2 rounded cursor-pointer" key={cable.key}></span>
                        }
                        // console.log("4 cables cut 4th")  
                    }
                    else if (cable.key == 2) {
                        // console.log("4 cables cut 3rd")
                        return <span style={{backgroundColor: cable.color}} id={"correct"} onClick={(e)=>{handleCableClick(e, props)}} className="w-full h-2 rounded cursor-pointer" key={cable.key}></span>  
                    }
                }
                else if (numOfCables == 5) {
                    // console.log("5 cables")
                    if (cableColors.includes("red")) {
                        // console.log("5 cables cut 1st")
                        if (cable.key == 0) {
                            return <span style={{backgroundColor: cable.color}} id={"correct"} onClick={(e)=>{handleCableClick(e, props)}} className="w-full h-2 rounded cursor-pointer" key={cable.key}></span>
                        }
                    }
                    else if(cableColors.includes("green")){
                        if (cable.key == 1) {
                            return <span style={{backgroundColor: cable.color}} id={"correct"} onClick={(e)=>{handleCableClick(e, props)}} className="w-full h-2 rounded cursor-pointer" key={cable.key}></span>
                        }
                        // console.log("5 cables cut 2nd")  
                    }
                    else if(cableColors.includes("blue")){
                        if (cable.key == 2) {
                            return <span style={{backgroundColor: cable.color}} id={"correct"} onClick={(e)=>{handleCableClick(e, props)}} className="w-full h-2 rounded cursor-pointer" key={cable.key}></span>
                        }
                        // console.log("5 cables cut 3rd")  
                    }
                    else if(cableColors.includes("yellow")){
                        if (cable.key == 3) {
                            return <span style={{backgroundColor: cable.color}} id={"correct"} onClick={(e)=>{handleCableClick(e, props)}} className="w-full h-2 rounded cursor-pointer" key={cable.key}></span>
                        }
                        // console.log("5 cables cut 4th")  
                    }
                    else if(cableColors.includes("black")){
                        if (cable.key == 4) {
                            return <span style={{backgroundColor: cable.color}} id={"correct"} onClick={(e)=>{handleCableClick(e, props)}} className="w-full h-2 rounded cursor-pointer" key={cable.key}></span>
                        }
                        // console.log("5 cables cut 5th")  
                    }
                }
                return <span style={{backgroundColor: cable.color}} id={"c"+cable.key} onClick={(e)=>{handleCableClick(e, props)}} className="w-full h-2 rounded cursor-pointer" key={cable.key}></span>
            })}
      </div>
    )
  }