//@ts-nocheck
import { useState } from "react"
import Input from "./Input"

const Calculate = ()=>{
    let value = 0
    const inputs=[
        {id:1,
        type: 'number',
        name: 'cartValue',
        placeholder: 'cart value(in euros)',
       },
        {id:2,
        type: 'number',
        name: 'distance',
        placeholder: 'distance(in meters)',
        
        },
        {id:3,
        type: 'number',
        name: 'items',
        placeholder: 'amount of items',
        
        },
        {id:4,
        type: 'date',
        name: 'date',
        placeholder: 'date',
        
        },
    ]

    const [info, setInfo]= useState({
        cartValue: '',
        distance: '',
        items: '',
        date: new Date()
    })

    const handleChange = (e)=>{
        setInfo(prev => {
            return {...prev, [e.target.name]: parseFloat(e.target.value)}})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(info)
        if(info.cartValue < 10){
            value += 10 - info.cartValue
        }
        if(info.distance < 1000){
            value += 2
        }else{
            const ha = Math.round((info.distance -1000)/500)
            console.log(ha)

        }
        console.log(info)
        console.log(value)
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