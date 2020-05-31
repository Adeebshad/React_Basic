import React from 'react';
import Person from './Person';

function  NameList(params) {
    const Persons = [
        {
            Name : 'adeeb',
            age : 18,
            id : 1,
            skill : 'web develop'
        },
        {
            Name : 'shad',
            age : 23,
            id : 2,
            skill : 'programming'
        },
        {
            Name : 'abid',
            age : 38,
            id : 3,
            skill : 'UI/UX'
        }
    ]
const PersonList = Persons.map(person1 => <Person person1={person1} />)
    return(
        <div>
            {PersonList}
        </div>
    )
}

export default NameList;