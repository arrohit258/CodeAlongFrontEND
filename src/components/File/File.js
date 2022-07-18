import React,{useState,useEffect,useRef} from 'react'
import{ useLocation} from 'react-router-dom'
import queryString from 'query-string'
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";

import { Form, TextArea } from 'semantic-ui-react'
import io from 'socket.io-client'
import "semantic-ui-css/semantic.min.css"
import './File.css'
const SAVE_INTERVAL_MS=2000
//const ENDPOINT='http://localhost:5000/'
const ENDPOINT='https://codelongserver.herokuapp.com/'


let socket
const File = ({code,setCode}) => {

  let location=useLocation()
  console.log(location)
  const[name,setName]=useState('')
  const[room,setRoom]=useState('')
  const id = useRef(`${Date.now()}`);
  const recieveid=useRef('${Dar}')
  const editor = useRef<AceEditor | null>(null);
  const remote = useRef(false);
   
    useEffect(()=>{
      const{name,room}=queryString.parse(location.search)
      console.log(name,room)
      setName(name)
      setRoom(room)
      socket=io(ENDPOINT)
      console.log('reached here')
      if(!socket) return null

      socket.emit('join',{name,room},()=>{
           
      })

      return ()=>{
        socket.disconnect()
        socket.off()
      }
  },[ENDPOINT,location.search])

  

// useEffect(()=>{
  
  

// },[code])
useEffect(()=>{
  if(!socket )return null
  socket.on('recieve-code',({EditorId,code})=>{
   // console.log(code,"33");
   if(id!==EditorId){
     remote.current=true;
     setCode(code)
   }remote.current=false;
  })
})

 const handleChange=(e)=>{
  //console.log("KeyUped");
  //console.log("Changed to",e)
if(!remote.current){
  //if(!remote.current &&/\S/.test(e)){
  if(!socket || remote.current)return null
  socket.emit('send-code',{
    EditorId:id,
    code:e
  })
}
 }
    
    return (
      <AceEditor
     // ref={editor}
      className="files"
      mode="java"
      theme="monokai"
      width="100%"
      onChange={(e)=>{handleChange(e)}}
      value={code}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
    />
    )
}

export default File
