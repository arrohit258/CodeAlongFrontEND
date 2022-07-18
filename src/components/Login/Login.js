import React,{useState} from "react";
import {Link} from "react-router-dom"

import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

import "./Login.css";

const Login=()=> {
    const[name,setName]=useState('')
    const[room,setRoom]=useState('')
   


  
    return (
      <div className="App">
           
        <Grid textAlign="center" verticalAlign="middle">
        
          <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1" color="blue" textAlign="center">
             Code Along {'</>'}
            </Header>
           
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="User Name"
                  onChange={(e)=>setName(e.target.value)}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Room Code"
                  onChange={(e)=>setRoom(e.target.value)}
                  
                />
                <Link onClick={e=>(!name||!room)?e.preventDefault():null} to={`/code?name=${name}&room=${room}`}>
                <Button color="blue" fluid size="large">
                  Enter
                </Button>
                </Link>
              </Segment>
            </Form>
           
          </Grid.Column>
        </Grid>
      </div>
    );
  
}
export default Login