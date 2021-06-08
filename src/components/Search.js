import React, { useState,useEffect } from "react";
import axios from 'axios';
const Search = () => {
  const [term, setTerm] = useState("");
  
  useEffect (()=>{
    
  });
  return (
    <div>
      <div className="ui form">
        <div className="field"></div>
        <label>Enter Search Term</label>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="input"
        />
      </div>
    </div>
  );
};
export default Search;
