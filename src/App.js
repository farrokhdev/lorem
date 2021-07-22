import React, { useState } from 'react';
import data from './data';
function App() {
  const[count,setCount]=useState(0);
  const[text,setText]=useState([]);

  const submitHandle=(e)=>{
    e.preventDefault();
    let amount = parseInt(count);
    if(count<=0){
      amount=1;
    }
    if(count>data.length){
      amount=data.length;
    }
    console.log(data.length);
    setText(data.slice(0,amount));

  }
  
  return (
  <section className="section-center">
    <h3>getting bored by lorem ipsum dummy text?!</h3>
    <form className="lorem-form" action="" onSubmit={submitHandle}>
      <label htmlFor="amount">
        paragraphs number:
      </label>
      <input type="number" name="amount" id="amount" value={count}
      onChange={(e)=>setCount(e.target.value)}
      />
      <button className="btn" type="submit">Generate</button>
    </form>
    <article className="lorem-text">
      {text.map((item,index)=>{
        return(
          <p key={index}>{item}</p>
        )
      })}
    </article>
  </section>
    )
}

export default App;
