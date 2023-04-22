import { useState } from "react";

export const useField = (type) => {
    const [value, setValue] = useState('')

    const onChange = (e) => {
        setValue(e.target.value)
        console.log(value)
    }

    const onReset = () => {
        setValue('')
    }

    return { type, value, onChange, onReset }
}