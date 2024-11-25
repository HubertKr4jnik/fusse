export default function Binary(props) {

    let binary1 = []
    let binary2 = []

    for (let i = 0; i < 5; i++) {
        binary1[i] = {value: Math.round(Math.random() * 1), key: i}
        binary2[i] = {value: Math.round(Math.random() * 1), key: i}
    }

    let number1 = 0;
    for (let i = 0; i < binary1.length; i++) {
        if (binary1[i].value == 1) {
            switch (i) {
                case 0:
                    number1 += 16
                break;
                case 1:
                    number1 += 8
                break;
                case 2:
                    number1 += 4
                break;
                case 3:
                    number1 += 2
                break;
                case 4:
                    number1 += 1
                break;
            }   
        }
    }

    let number2 = 0;
    for (let i = 0; i < binary2.length; i++) {
        if (binary2[i].value == 1) {
            switch (i) {
                case 0:
                    number2 += 16
                break;
                case 1:
                    number2 += 8
                break;
                case 2:
                    number2 += 4
                break;
                case 3:
                    number2 += 2
                break;
                case 4:
                    number2 += 1
                break;
            }   
        }
    }

    let answer = number1 * number2;

    let answers = []

    let random = Math.round(Math.random() * 1);

    if (random == 1) {
        answers[0] = answer
        answers[1] = Math.round(Math.random() * answer)   
    }
    else{
        answers[1] = answer
        answers[0] = Math.round(Math.random() * answer)   
    }

    // console.log(answer)

    const handleValueInput = (e: React.MouseEvent<HTMLElement>, props)=>{
        if (e.target.parentElement.style.borderColor != "lightgreen" && e.target.parentElement.style.borderColor != "red") {
            if (e.target.value == answer) {
                e.target.parentElement.style.borderColor = "lightgreen"
                props.handleChange((value) => value + 1)
            }
            else{
                 e.target.parentElement.style.borderColor = "red"
                 props.handleWrong(((wrong) => wrong + 1))
            }
        }
    }

    return (
      <div className="w-full h-full bg-slate-500 flex flex-col place-items-center justify-evenly px-6 border-8 border-slate-800 module">
        <div className="flex w-full flex-row place-items-center justify-between">
            {binary1.map(dot =>{
                if (dot.value == 1) {
                    return <span className="bg-white rounded-full h-4 w-4 border-zinc-900 border-2" key={dot.key}></span>
                }
                else{
                    return <span className="bg-gray-600 rounded-full h-4 w-4 border-zinc-900 border-2" key={dot.key}></span>
                }
            })}
        </div>
        <div className="flex w-full flex-row place-items-center justify-between">
            {binary2.map(dot =>{
                if (dot.value == 1) {
                    return <span className="bg-white rounded-full h-4 w-4 border-zinc-900 border-2" key={dot.key}></span>
                }
                else{
                    return <span className="bg-gray-600 rounded-full h-4 w-4 border-zinc-900 border-2" key={dot.key}></span>
                }
            })}
        </div>
        <input type="button" value={answers[0]} onClick={(e)=>{handleValueInput(e, props)}} className="w-5/6 bg-zinc-800 py-1 border-zinc-900 border-2 text-red-700 rounded text-center cursor-pointer transition-all hover:text-red-600"/>
        <input type="button" value={answers[1]} onClick={(e)=>{handleValueInput(e, props)}} className="w-5/6 bg-zinc-800 py-1 border-zinc-900 border-2 text-red-700 rounded text-center cursor-pointer transition-all hover:text-red-600"/>
      </div>
    )
  }
  