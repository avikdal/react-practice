import React, { useState } from 'react'

function NewPersonEntryForm({ addPerson }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
    })

    function handleChange(e){
        let name = e.target.name
        let value= e.target.value

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/people', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then(res => res.json())
        .then(entry => {
            addPerson(entry)
            setFormData({
                firstName: "",
                lastName: "",
            })
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
            />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
        <hr></hr>
    </div>
  )
}

export default NewPersonEntryForm