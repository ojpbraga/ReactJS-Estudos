import { useState } from "react";
import Input from "./Input";
import Radio from "./Radio";
import Select from "./Select";
import Textarea from "./Textarea";
import Checkbox from "./Checkbox";
import Validation from "./Validation";

const Form = () => {
    const [color, setColor] = useState('');
    const [checkbox, setCheckbox] = useState([]);
    const [terms, setTerms] = useState([]);

    return (
        <div>
            <h1>Formulários</h1>
            <Input/>
            <Textarea/>
            <Select/>
            <Radio options={['blue', 'red']} value={color} setValue={setColor}/>
            <Radio options={['Poney', 'Cat']} value={color} setValue={setColor}/>
            <Checkbox options={['JS', 'PHP', 'VUE']} value={checkbox} setValue={setCheckbox}/>
            <Checkbox options={['Li e aceito os termos']} value={terms} setValue={setTerms}/>
            <Validation/>
        </div>
    )
}
export default Form;