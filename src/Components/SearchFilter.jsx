import React from "react";


const SearchFilter = ({search, handleSearch}) =>{
return(
<>
filter persons: {""}
<input className="search"
type="search"
placeholder="search"
value={search}
onChange={handleSearch}/>
</>
)

}
export default SearchFilter