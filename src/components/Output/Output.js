import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";



const Output = ({output,setOutput}) => {
    
    console.log(output,"hi")
    return (
      <AceEditor
      // ref={editor}
       className="files"
       mode="ruby"
       theme="monokai"
       placeholder='Output here'
       width="100%"
       onChange={(e)=>setOutput(e)}
       value={output}
       name="UNIQUE_ID_OF_DIV"
       editorProps={{ $blockScrolling: true }}
     />
    )
}

export default Output
