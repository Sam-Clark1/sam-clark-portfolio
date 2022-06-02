import { useState } from "react";
import { Box, TextField, Button } from "@mui/material"
import {validateEmail} from '../utils/helpers'
export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const validEmail = validateEmail(e.target.value);
            if (!validEmail) {
            setErrorMessage('Your email is invalid.');
            } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          }
          }  else if (e.target.name === 'name') {
            const validName = e.target.value.length > 0;
            console.log(e.target.value.length)
            if (!validName) {
            setErrorMessage('Must enter a name.');
            } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          }
          } else {
            const validMessage = e.target.value.length > 0;
            console.log(e.target.value.length > 0)
            if (!validMessage) {
            setErrorMessage('You must enter a message.');
            } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          }
          }
        
          if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
      }

      function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }
    return(
        <Box sx={{color:'white', display:'flex', justifyContent:'center'}}>
            <section>
                <Box sx={{display:'flex', justifyContent:'center'}}>  
                    <h1>Contact me</h1>
                </Box>

                <form id="contact-form" onSubmit={handleSubmit}>

                    <div>
                    <TextField name="name" type="text" onBlur={handleChange}  label='Name' color="success" focused sx={{mb:2}} InputProps={{className:'textfield__label'}}/>
                    </div>

                    <div>
                    <TextField type="email" name="email" onBlur={handleChange} label='Email' color="success" focused sx={{mb:2}} InputProps={{className:'textfield__label'}}/>
                    </div>

                    <div>
                    <TextField name="message" onBlur={handleChange} multiline rows={5} label='Message' color="success" focused sx={{mb:2}} InputProps={{className:'textfield__label'}}/>
                    {errorMessage && (
                        <Box sx={{display:'flex', justifyContent:'center'}}>
                            <p>{errorMessage}</p>
                        </Box >
                        )}
                    </div>

                    <Box sx={{display:'flex', justifyContent:'center'}}>
                        <Button variant="contained" sx={{backgroundColor:'white', color: '#011936', fontSize:12, display:'flex', justifyContent:'center'}} size="auto">Submit</Button>
                    </Box>

                </form>
            </section>
        </Box>
    )
}