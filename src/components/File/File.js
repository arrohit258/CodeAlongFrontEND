import React,{useState,useEffect,useRef} from 'react'
import{ useLocation} from 'react-router-dom'
import queryString from 'query-string'
import AceEditor from "react-ace";
import CodeMirror from '@uiw/react-codemirror';

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";

import { Form, TextArea } from 'semantic-ui-react'
import io from 'socket.io-client'
import "semantic-ui-css/semantic.min.css"
import './File.css'
import { xcodeLight, xcodeDark } from '@uiw/codemirror-theme-xcode';
import { javascript } from '@codemirror/lang-javascript';
//import {cpp} from '@codemirror/lang-cpp'
//import { langs } from '@uiw/codemirror-extensions-langs';

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
   if(id!=EditorId){
     remote.current=true;
    //if(code!==)
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
    /* <AceEditor
     // ref={editor}
      className="files"
      mode="java"
      theme="monokai"
      width="100%"
      onChange={(e)=>{

        handleChange(e)
      }}
      value={code}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
    />
    */
    
    <CodeMirror
     value={code}
     theme={xcodeDark}
     height="500px"
     //extensions={[javascript]}
    onChange={(value)=>{
      if(code!=value)
       setCode(value);
     }}
    onKeyUp={() => {
    handleChange(code);
    console.log("Hi");
    // console.log('value in editor is', editorValue);
    }}
    />
    
    

    )
}

export default File
