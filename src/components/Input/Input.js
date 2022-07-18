import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";


const InputFile = ({input,setInput}) => {
    
    
    return (
      <AceEditor
      // ref={editor}
       className="files"
       mode="ruby"
       theme="monokai"
       placeholder='Input Here'
       width="100%"
       onChange={(e)=>setInput(e)}
       value={input}
       name="UNIQUE_ID_OF_DIV"
       editorProps={{ $blockScrolling: true }}
     />
        
    )
}

export default InputFile
