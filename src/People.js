import React, { useEffect, useState } from 'react'
import Person from './Person'
import NewPersonEntryForm from './NewPersonEntryForm'

function People() {
    const [people, setPeople] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/people')
        .then(res => res.json())
        .then(data => setPeople(data))
    }, [])

    function addPerson(person){
        setPeople([...people, person])
    }

    const individualPeople = people.map(individual => <Person key={individual.id} individualData={individual} />)

  return (
    <div>
        <NewPersonEntryForm addPerson={addPerson} />
        <div>{individualPeople}</div>
    </div>
  )
}

export default People