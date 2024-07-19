import React, { useState } from 'react';

export default function ComplexForm () {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
});

const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value});
};

const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted data: ${JSON.stringify(formData)}`);
};

return (
    <form onSubmit={handleSubmit}>
        <label>
            First Name
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </label>
        <label>
            Last Name
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </label>
        <label>
            Email
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
    </form>
);
}