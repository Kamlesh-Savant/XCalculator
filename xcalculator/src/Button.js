import React from 'react';
import './Button.css';

function Button({name, query, setQuery, setResult}) {

  const handleClick = (e)=>{

    if(name === "="){
      if(query === "" || query[query.length-1] === "+" ||query[query.length-1] === "-" ||query[query.length-1] === "*" ||query[query.length-1] === "/" ){
        setResult("Error");  
      }
      else
      {
        setResult(eval(query));
      }
    }
    else if(name === "C"){
      setQuery('');
      setResult('');
    }
    else{
      setQuery(query+name);
    }
  }

  return (
    <button className='btn' onClick={handleClick}>{name}</button>
  )
}

export default Button