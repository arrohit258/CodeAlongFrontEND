import React from 'react'
import { Menu,Dropdown,Icon } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css";
import './Navbar.css'
import axios from 'axios'

const  Navbar=({language,setLanguage,code,setOutput,output,input})=> {

  const handleClick=()=>{
    setOutput('Loading...')
    
        
   
 

    axios.post('https://codelongserver.herokuapp.com/getOutput',{
     
      code:code,
      language:language,
      input:input
      
    })
    .then((response)=>{
      setOutput(response.data)
      console.log(output)
    })
  
    
    
    
    
  

  }
  

 const languages=[
   {
     key:'C++',
     text:'C++',
     value:'cpp'
   },
   {
    key:'Java',
    text:'Java',
    value:'java'
  },
  {
    key:'Python',
    text:'Python',
    value:'py'
  }
 ]
 const dictionary={
   'C++':'cpp',
   'Java':'java',
   'Python':'py'
 }



  return (
      <Menu inverted fixed="top" borderless color="blue" filled>
        <Menu.Item>
          {'</>'}
          </Menu.Item>
       
        <Menu.Item >
        <Dropdown filled className="ui teal" color="blue" placeholder="Language" compact selection options={languages}  onChange={(e)=>setLanguage(dictionary[e.target.innerText])}/>
         </Menu.Item>
        <Menu.Item
          name='Run'
          position="right"
          
          onClick={handleClick}
         
          
        >
          RUN
          <Icon name="angle right"/>
        </Menu.Item>

        </Menu>

        
    )
  }


export default Navbar
