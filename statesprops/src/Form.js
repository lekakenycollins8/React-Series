import React, { useState } from "react";

export default function Form () {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Hello, ${name}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input type="text" value={name} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}