import { useState } from "react";

export default function PlusLogo(props: any) {

  const [addSpin, setSpin] = useState(false)
  function handleSpin() {
    setSpin(!addSpin)
  }
  return (
    <svg onClick={() => handleSpin()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-9 h-9 large:w-16 large:h-16 duration-700 transition-all ${addSpin ? 'rotate-180': 'rotate-0'}`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  )
}