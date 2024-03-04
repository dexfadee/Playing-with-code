import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [password, setPassword] = useState("");
  

  const passwordGenerator = useCallback( ()=>{
    let password = "";
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (symbol) characters += "!@#$%^&*()_+~`|{}";
    if (number) characters += "0123456789";
    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random()*characters.length+1)
      password = password + characters.charAt(char)
    };
    setPassword(password);
  }, [length, number, symbol, setPassword]);

  useEffect(() => {
    passwordGenerator()
  }, [length, number, symbol, passwordGenerator]);

  const passRef = useRef(null)

  const [copyText, setCopyText] = useState('Copy')

  const copyPassoword = useCallback(()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
    setCopyText('Copied!')
    setTimeout(() => {
      setCopyText('Copy')
    }, 1000);
  }, [password])

  return (
    <>
      <div className="w-[60vw] mt-8 bg-neutral-800 p-4 mx-auto text-rose-900 rounded-md">
        <h1 className='text-4xl text-center mb-4'>Password Generator</h1>
        <div htmlFor="text" className="flex">
          <input type="text" id="text" className="rounded-l-md shadow-md outline-none p-2 w-full" placeholder="password" value={password} readOnly ref={passRef}/>
          <button className="bg-blue-700 hover:bg-blue-800 rounded-r-md p-2 text-white" onClick={copyPassoword}>{copyText}</button>
        </div>
        <div className="flex gap-6 mt-4 mx-4 items-center">
          <label htmlFor="length"><input type="range" min={6} max={50} value={length} id="length" className="outline-none w-[10vw] h-4" onInput={(e)=>{setLength(e.target.value)}}/> Length:{length}</label>
          <label htmlFor="number"><input type="checkbox" defaultChecked={number} id="number" onChange={()=>{setNumber((prev) => !prev)}}/> Numbers</label>
          <label htmlFor="symbols"><input type="checkbox" defaultChecked={symbol} id="symbols" onChange={()=>{setSymbol((prev) => !prev)}}/> Symbols</label>
        </div>
      </div>
    </>
  )
}

export default App;