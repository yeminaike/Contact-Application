import { useState, useEffect } from "react";
  // import axios from "axios";
import PersonService from "./Services/PersonService";
import ContactForm from "./Components/ContactForm";
import SearchFilter from "./Components/SearchFilter"
import ContactList from "./Components/ContactList"
import Notification from "./Components/Notification";
import contactphoto from "./Components/Images/contactphoto.jpg"



const App = (props) => {
  const [persons, setPersons] = useState([] ) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('');
  // const [errorMessage, setErrorMessage] = useState('')
  const [notification, setNotification] = useState(null)
  
   useEffect(()=> {
   PersonService
   .getAll()
   .then(response =>{
     setPersons(response.data)
   })
  
}, [])

const removePerson =(id) =>{
  PersonService
  .removePerson(id)
  .then(response => {
    setPersons(persons.filter(person => person.id !== id))
    console.log(response)
  })
  .catch((error) => {
    if(error.response){
      console.log(error.response.data)
    }
  })
}

const changedNumber = id => {
  const person = persons.find(person => person.id === id)
  const changedPerson = {...person, number: newNumber}

  PersonService
  .update(id, changedPerson)
  .then((response) => {
    setPersons(
      persons.map((person) => (person.id !== id ? person : response.data))
    );
    setNotification({ 
      type: "success", 
      text: `'${newName}' has sucessfully been updated` });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  })
  .catch((error) => {
    setNotification({
      type: "error",
      text: `Information of '${newName}' has already been removed from the server`,
    });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
    setPersons(persons.filter(person => person.id !== id))
  });
};

  const addPerson = (event) =>{
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    const existingPerson = persons.find((person)=> person.name === newName);

    if(existingPerson){
      const confirmResult = window.confirm(`'${newName}' is already added to the phonebook, replace
      old number with a new one?`

      );
      
      if(confirmResult){
        changedNumber(existingPerson.id);
      }
      
      
     
    }else{
      PersonService
      .create(personObject)
      .then(response =>{
        setPersons(persons.concat(response.data))
        setNewName('')
       setNewNumber('')
        setNotification({
          type: "success",
          text: `'${newName} has been added.'`
        })

        setTimeout(()=> {
          setNotification(null)
        }, 5000)
    })
    .catch((error)=> {
      
      setNotification({
        type: "error",
        text: error.response ? error.response.data : "an error occured while adding the person."
      })
      setTimeout(()=> {
        setNotification(null)
      }, 5000);
      
    })
    }

}; 
  const handlePersonChange =(event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNewNumber = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleSearch = (event) => {
          console.log(event.target.value);
         setSearch(event.target.value);
        };
    
       const filtered = !search
         ? persons
         : persons.filter(({ name }) => {
             return  name.toLowerCase().includes(search.toLowerCase());
           });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
<div className="hidden sm:block">

<img className="w-6 h-6 opacity-50" width={200} src={contactphoto} alt="contact" />

</div>
    
    <div className="w-1/2 p-8 bg-white shadow">
      <h2 className="text-2xl font-semibold mb-4">Phonebook</h2>
      <Notification message={notification}/>
      
      {/* <form onSubmit={addPerson}> */}

        {/* filter shown with:
        <input 
        search = {search}
        onChange = {handleSearch}/> */}
        <SearchFilter search={search} handleSearch={handleSearch}/>
        <h3>Add a new</h3>
        
         <ContactForm addPerson={addPerson}
         newName={newName}
         handlePersonChange={handlePersonChange}
         newNumber={newNumber}
         handleNewNumber={handleNewNumber}
          // update ={changedNumber}
          /> 

         
      
        {/* Name:
          <input
          value={newName} 
          onChange={handlePersonChange}/>

          Number:
          <input
          value={newNumber}
          onChange={handleNewNumber}/> */}
      
          {/* <button type="submit">add</button> */}
        
      
      <h2>Numbers</h2>
      <ContactList persons ={filtered} removePerson={removePerson}/>
      <div>

        {/* {filtered.map((person)=>{
          return(
            <p key={person.id}>
              {person.name}
              {person.number}
            </p>
          )
        })}
     */}
      </div>
    {/* </form> */}
    </div>
    </div>
    
  
  )
      }
    



export default App


