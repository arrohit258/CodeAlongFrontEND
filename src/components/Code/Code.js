import React ,{useState,useEffect}from 'react'
import File from '../File/File'
import Navbar from '../Navbar/Navbar'
import {Grid, Input} from 'semantic-ui-react'
import { Tab } from 'semantic-ui-react'
import Output from '../Output/Output'
import InputFile from '../Input/Input'

const Code = () => {
   
    
    
    const [code,setCode]=useState('')
    const[input,setInput]=useState('')
    const [output,setOutput]=useState('')
    const [language,setLanguage]=useState('c')

   

    
    const panes = [
        { menuItem: 'Code', render :() => <Tab.Pane>
       
    <File code={code} setCode={setCode} />
   
    </Tab.Pane> },
        { menuItem: 'Input',render:  () => <Tab.Pane>
        
    <InputFile input={input} setInput={setInput} />
</Tab.Pane> },
        { menuItem: 'Output',render : () => <Tab.Pane>
        
    <Output  output={output} setOutput={setOutput}/>
    </Tab.Pane> },
      ]
      
    

    
    return (
        <Grid container >

            <Grid.Row >
            <Navbar language={language} setLanguage={setLanguage} setOutput={setOutput} output={output} code={code} input={input}/>
               
            </Grid.Row>
            {/* <Grid.Row >
                <Grid.Column>
            <File code={code} setCode={setCode} />
            </Grid.Column>
            </Grid.Row> */}
            <Grid.Row >
            <Grid.Column>
             <Tab menu={{ color:'blue',inverted:true,fluid: true, vertical: true  }} 
             menuPosition='right'
             panes={panes} />
             </Grid.Column>
             </Grid.Row>
        </Grid>
    )
}

export default Code
