import React, { useEffect, useRef, useState } from 'react'
import Result from './result'

const App = () => {
  const first = useRef()
  const latest = useRef()
  const [result, setResult] = useState(null)


  console.log(result)

  function raqamlarYigindisi(baslangish, axirgi) {
    let uluwma_jiyindi = 0
    for (let i = baslangish; i <= axirgi; i++) {
      let sonStr = i.toString()
      for (let sifr of sonStr) {
        uluwma_jiyindi += parseInt(sifr)
      }
    }
    return uluwma_jiyindi
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const firstValue = parseInt(first.current.value)
    const latestValue = parseInt(latest.current.value)

    if (!isNaN(firstValue) && !isNaN(latestValue)) {
      const result = raqamlarYigindisi(firstValue, latestValue)
      setResult(result)
    } else {
      alert("Ótinish, tuwrı nomerlerdi kiritiń")
    }
  }

  useEffect(() => {
    
  }, [handleSubmit])

  return (
    <div className='flex justify-center flex-col items-center min-h-screen font-mont'>
      <h1 className='text-[20px] sm:text-[26px] text-center font-bold mb-8'>
        Sifr jıyındısın esaplaytuǵın kalkulyator
        </h1>
      <form onSubmit={handleSubmit} className="flex justify-center flex-col gap-2">
        <input
          ref={first}
          required
          className='text-[16px] px-5 py-2 border-[1px] outline-none rounded-lg border-black'
          placeholder='Boshlanish sonini kiriting'
          type="text" />
        <input
          ref={latest}
          required
          className='text-[16px] px-5 py-2 border-[1px] outline-none rounded-lg border-black'
          placeholder='Oxirgi sonni kiriting'
          type="text" />
        <button
          className='flex justify-center items-center px-2 py-1 bg-indigo-300 hover:bg-indigo-500 active:scale-95 duration-500' 
          type='submit'>
          Natija
        </button>
      </form>

      {result !== 0 ?
        <Result>
          {result}
        </Result>
        : 
        <Result>
          <div className="">Ótinish, tuwrı nomerlerdi kiritiń</div>
        </Result>}

        <div className="text-[14px] sm:text-[16px] mt-10 text-center text-black">
          Coded by : <a className='text-blue-600' href="https://t.me/samancik_me">samancik</a>
        </div>
    </div>
  )
}

export default App
