
import React from "react";


 const ContactForm= ({addPerson, newName, handlePersonChange, newNumber, handleNewNumber}) =>{
   
    return(
      <div>
      <form onSubmit ={addPerson}>
      <div className="name-input"> 
      Name:   
      &nbsp;

      <input className = "name"
      value={newName}
      onChange={handlePersonChange}/>
      </div>
<br/>
<br/>
      <div className="Phone-no">
      Phone Number:  
&nbsp;
      <input className="number"
      value={newNumber}
      onChange={handleNewNumber}
      />
      &nbsp;&nbsp;
      </div>

      <>
      
      <button type="submit"  className="add-button">   Add</button>
      </>
      </form> 
      </div>
    
    )
 }
 export default ContactForm;