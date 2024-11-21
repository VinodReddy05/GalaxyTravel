import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";

const Faq = () => {

    const data = [
        {
            question: "Question 1?",
            answers: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis esse libero assumenda eius. Iusto eaque fuga impedit perspiciatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis esse libero assumenda eius. Iusto eaque fuga impedit perspiciatis!",
        },
    {
            question: "Question 2?",
            answers: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis esse libero assumenda eius. Iusto eaque fuga impedit perspiciatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis esse libero assumenda eius. Iusto eaque fuga impedit perspiciatis!",
        },
        {
            question: "Question 3?",
            answers: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis esse libero assumenda eius. Iusto eaque fuga impedit perspiciatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis esse libero assumenda eius. Iusto eaque fuga impedit perspiciatis!",
        },
        {
            question: "Question 4?",
            answers: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis esse libero assumenda eius. Iusto eaque fuga impedit perspiciatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis esse libero assumenda eius. Iusto eaque fuga impedit perspiciatis!",
        },
        {
            question: "Question 5?",
            answers: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis esse libero assumenda eius. Iusto eaque fuga impedit perspiciatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis esse libero assumenda eius. Iusto eaque fuga impedit perspiciatis!",
        }
    ]

    const [selected,setSelected] = useState(null)
    const handleSelect =(i)=>{
        if(selected===i){
            return setSelected(null)
        }
        setSelected(i)
        
        
    }

    return (
        <>
            <h1 className='heading'>FAQ'S</h1>
            <section className="faq">
                <div className="item">
                    {
                        data.map((item,i) => {
                            return (
                                <div className='wrapper' key={i}>
                                    <div className="question"  onClick={()=>handleSelect(i)} >
                                        <h3>{item.question}</h3>
                                        <p className={selected ===i ? "reverse" : ""}><FaChevronDown /></p>
                                
                                    </div>
                                    <div className={selected===i ? "answers show" :"answers"} >
                                        <p>{item.answers}</p>
                                    </div>
                                </div >
                            )
                        })
                    }     

                </div>

            </section>
        </>
    )
}

export default Faq
