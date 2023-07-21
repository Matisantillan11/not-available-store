import { useState } from 'react'
import './styles/hamburguer.style.css'
export const Hamburguer = () => {
  const [ isOpen, setIsOpen ] = useState<boolean>(false)
  return (
    <div className="hamburguer" onClick={() => setIsOpen(!isOpen)}>
      <div className={`stick ${isOpen ? 'open' : 'close'}`}/>
      <div className={`stick ${isOpen ? 'open disapear' : 'close'}`}/>
      <div className={`stick ${isOpen ? 'open' : 'close'}`}/>
    </div>
  )
}