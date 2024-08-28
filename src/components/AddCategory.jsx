import { useState } from "react"


export const AddCategory = ({ onNewValue }) => {


    const [input, setInput] = useState('')

    const onInputChange = ({ target }) => setInput(target.value)

    const onSubmit = (e) => {
        e.preventDefault();
        input.trim() <= 4 ? '' :
            onNewValue(input)
        setInput('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                name='input'
                value={input}
                onChange={onInputChange}
                placeholder="Buscar Gifs" />
        </form>
    )
}
