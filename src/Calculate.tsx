//@ts-nocheck
import { useState } from "react"
import Input from "./Input"

const Calculate = ()=>{
    const inputs=[
        {id:1,
        type: 'number',
        name: 'cart value',
        placeholder: 'cart value(in euros)',
        required: true},
        {id:2,
        type: 'number',
        name: 'distance',
        placeholder: 'distance(in meters)',
        required: true
        },
        {id:3,
        type: 'number',
        name: 'items',
        placeholder: 'amount of items',
        required: true
        },
        {id:4,
        type: 'date',
        name: 'date',
        placeholder: 'date',
        required: true
        },
    ]

    const [info, setInfo]= useState({
        cartValue: 0,
        distance: 0,
        items: 0,
        date: new Date()
    })

    const handleChange = (e)=>{
        setInfo({[e.target.name]: e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(info)
    }

    const inputsForm = inputs.map(input =>{
        return (
        <Input {...input} onChange={handleChange} value={[input.name]} key={input.id}/>
        )
    })
    return(
         <form>
         {inputsForm}
         <button type="submit" onClick={handleSubmit}>Calculate</button>
         </form>
        
       
    )
}

export default Calculate