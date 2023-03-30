//@ts-nocheck

type inputType = {
    id: number;
    type: string;
    name: string;
    placeholder: string;
    required: boolean;
}

const Input = (props: inputType)=>{
    return(
        <div>
            <label htmlFor={props.name}>{props.name}: </label>
            <input {...props}/>
        </div>
    )
}

export default Input