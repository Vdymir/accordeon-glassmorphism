import React, { useState } from 'react'
import { data } from '../data/data'
import { Answer, BoxContainer, Questions, Title } from './acordeon-styled'

const Acordeon = () => {

    const [show, setShow] = useState(null)

    const toggle = (i) => {
        if (show === i) {
            return setShow(null)
        }

        setShow(i)
    }

    return (
        <BoxContainer>
            
            {
                data.map((item, i) => (
                    <Questions key={i}>
                        <Title onClick={() => toggle(i)}>
                            <h2>{item.question}</h2>
                            <span>{show === i ? '-' : '+'}</span>
                        </Title>
                        {   
                            show === i ? 
                                <Answer>
                                    <p>{item.answer}</p>
                                </Answer> 
                                : null
                        }

                    </Questions>
                ))
            }
        </BoxContainer>
    )
}

export default Acordeon
