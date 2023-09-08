// import { useState, useEffect } from "react";
//   // import axios from "axios";
// import PersonService from "./Services/PersonService";
// import ContactForm from "./Components/ContactForm";
// import SearchFilter from "./Components/SearchFilter"
// import ContactList from "./Components/ContactList"
// // import Notification from "./Components/Notification";


// const App = (props) => {
//   const [persons, setPersons] = useState([] ) 
//   const [newName, setNewName] = useState('')
//   const [newNumber, setNewNumber] = useState('')
//   const [search, setSearch] = useState('');
  
//    useEffect(()=> {
//    PersonService
//    .getAll()
//    .then(response =>{
//      setPersons(response.data)
//    })
  
// }, [])

// const removePerson =(id) =>{
//   PersonService
//   .removePerson(id)
//   .then(response => {
//     setPersons(persons.filter(person => person.id !== id))
//     console.log(response)
//   })
//   .catch((error) => {
//     if(error.response){
//       console.log(error.response.data)
//     }
//   })
// }

// const changedNumber = id => {
//   const person = persons.find(person => person.id === id)
//   const changedPerson = {...person, number: newNumber}

//   PersonService
//   .update(id, changedPerson)
//   .then(response =>{
//     setPersons(persons.map(person => person.id !== id ? person: response.data))
//   })
// }

//   const addPerson = (event) =>{
//     event.preventDefault()
//     const personObject = {
//       name: newName,
//       number: newNumber
//     }

//     const existingPerson = persons.find((person)=> person.name === newName);

//     if(existingPerson){
//       const confirmResult = window.confirm(`'${newName}' is already added to the phonebook, replace
//       old number with a new one?`
      
//       );
//       if(confirmResult){
//         changedNumber(existingPerson.id);
//       }
//     }else{
//       PersonService
//       .create(personObject)
//       .then(response =>{
//         setPersons(persons.concat(response.data))
//         setNewName('')
//        setNewNumber('')
//     })
//     }

// }; 
//   const handlePersonChange =(event)=>{
//     console.log(event.target.value)
//     setNewName(event.target.value)
//   }
//   const handleNewNumber = (event) => {
//     console.log(event.target.value);
//     setNewNumber(event.target.value);
//   };

//   const handleSearch = (event) => {
//           console.log(event.target.value);
//          setSearch(event.target.value);
//         };
    
//        const filtered = !search
//          ? persons
//          : persons.filter(({ name }) => {
//              return  name.toLowerCase().includes(search.toLowerCase());
//            });

//   return (
//     <div>
//       <h2 className="phone">Phonebook</h2>
      
//       {/* <form onSubmit={addPerson}> */}

//         {/* filter shown with:
//         <input 
//         search = {search}
//         onChange = {handleSearch}/> */}
//         <SearchFilter search={search} handleSearch={handleSearch}/>
//         <h3>Add a new</h3>
        
//          <ContactForm addPerson={addPerson}
//          newName={newName}
//          handlePersonChange={handlePersonChange}
//          newNumber={newNumber}
//          handleNewNumber={handleNewNumber}
//           // update ={changedNumber}
//           /> 

         
      
//         {/* Name:
//           <input
//           value={newName} 
//           onChange={handlePersonChange}/>

//           Number:
//           <input
//           value={newNumber}
//           onChange={handleNewNumber}/> */}
      
//           {/* <button type="submit">add</button> */}
        
      
//       <h2>Numbers</h2>
//       <ContactList persons ={filtered} removePerson={removePerson}/>
//       <div>

//         {/* {filtered.map((person)=>{
//           return(
//             <p key={person.id}>
//               {person.name}
//               {person.number}
//             </p>
//           )
//         })}
//      */}
//       </div>
//     {/* </form> */}
//     </div>
  
//   )
//       }
    



// export default App


