import React, { useState } from 'react'
import Modal from "./Modal";


const CallTOAction = () => {

    const [modal, setModal] = useState(false)

    const handleClick=()=>{
        setModal(!modal);

    }

  return (
    <div>
      <section className="call-to-action">
        <h2>Hurry Up Book your Ticket !</h2>
        <button  onClick={handleClick}>Know More!</button>
      </section>
      {
        modal && <Modal modal={modal} handleClick={handleClick}/>
      }
    </div>
  )
}

export default CallTOAction
