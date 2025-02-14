import { useState } from "react";
import Input from "./Input";
import Radio from "./Radio";
import Select from "./Select";
import Textarea from "./Textarea";

const Form = () => {
    const [color, setColor] = useState('');

    return (
        <div>
            <h1>Formulários</h1>
            <Input/>
            <Textarea/>
            <Select/>
            <Radio options={['blue', 'red']} value={color} setValue={setColor}/>
            <Radio options={['Poney', 'Cat']} value={color} setValue={setColor}/>
        </div>
    )
}
export default Form;