
import React from 'react';
import './Show.css'
const Show = (props) => {

  

  const del=(i)=>{
    let index= i.target.id
    props.del({index})
  }

  const changeHandler=(e)=>{
    let index= e.target.id
    props.comp({index})
  }

  const count =()=>{
    let newarray = props.list.filter((e)=>{
      return e.isdone !== true
    })
    console.log(newarray)
    return newarray
    
  }


  const renderlist=props.list.map((e,i)=>{
    return <div className="list">
      <p style={{color:e.color}} key={i}> 
      <input type="checkbox" onClick={changeHandler }  name="" id={i} />
       { (e.isdone===true)? <s>{e.text}</s>  : e.text}
      
      </p>
      <button className='delete' id={i} onClick={del} > delete</button>
      </div> 
  })

  return <div className="show">
    <div className="txt">
      <h1>{count().length} tasks </h1>
        <h3 > {count().length} remains</h3>
    </div>
      
      <ul>
        {renderlist}
      </ul>
      
  </div>
};

export default Show;
