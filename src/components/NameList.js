import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }]
        const personsList = persons.map(person => (<Person key={person.id} person={person}></Person>))
    const nameList = persons.map((person,index)=> <h2>{index},{person}</h2>)
        return (
        <div>
            {personsList}
        </div>
    )
}

export default NameList
