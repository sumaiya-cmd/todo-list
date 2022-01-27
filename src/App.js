
import React,{useState} from 'react';
import Show from "./Show/Show.js";
import './app.css'

const App = () => {

  const [list, setlist] = useState([
    {text:"Something Here" ,color:"red" , isdone:false },
    {text:"CSS",color:"blue" , isdone:false },
    {text:"HTML",color:"black", isdone:false},
    {text:"Vue",color:"green" , isdone:false},
  ]);

  const [first, setfirst] = useState({
    text:"",
    color:""
  });

  const changeHandler =(e)=>{
    setfirst({...first, [e.target.name]:e.target.value})
  }


  const addlist= ()=>{
    const copylist=[...list];
    copylist.push(first)
    setlist(copylist)
    console.log(list)
  }

  const del_list =(data)=>{
    console.log(data.index)
    const copylist =[...list]
    copylist.splice(data.index,1)
    setlist(copylist)
    
  } 

  const comp = (data)=>{
    const copylist =[...list]
    copylist[data.index].isdone = true;
    setlist(copylist)
    console.log(list)
  }

  return <div className='first'>

    <div className="showtwo">
    <Show list={list} del={del_list} comp={comp} />

    <div className="add">
      <input className='addplace' value={first.text} onChange={changeHandler} name='text' type="text" placeholder='ADD TODO... '  />
      <button className='addbutton' onClick={addlist} >ADD</button>
      <input type="color" onChange={changeHandler} id="body" name="color"
            value="{first.color}"></input>
    </div>
    
    </div>
    

  </div>
};

export default App;
