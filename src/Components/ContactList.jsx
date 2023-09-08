import React from "react"
const ContactList =({persons, removePerson}) =>{

const handleremovePerson =(id) =>{
const handlePersonToRemove = persons.find((person) => person.id === id);
const confirmed = window.confirm(`Delete '${handlePersonToRemove.name}'?`);

if(confirmed){
    removePerson(id)  
}else{
    console.log("deleting the person did not happen")
}
    };
    
    return(
        <div>
        {Boolean(persons)&&persons?.map (person =>{
           return(
        <p key={person?.id}>
            {person?.name}{person?.number}
            &nbsp;&nbsp;
            <button onClick={()=> handleremovePerson(person.id)} className="delete-btn">Delete</button>
        </p>
           ) 
        })}
        </div>
    )

}
export default ContactList;
