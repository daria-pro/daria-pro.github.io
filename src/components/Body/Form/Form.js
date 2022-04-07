import React, {useState, useEffect} from 'react'
import Button from '../../Button/Button'
import Text from '../../Typography/Text/Text'
import FileUpload from './FileUpload/FileUpload'
import './Form.scss'
import RadioInput from './RadioInput/RadioInput'
import TextInput from './TextInput/TextInput'
import axios from 'axios'

const Form = () => {  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [positionId, setPositionId] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [positionsList, setPositionsList] = useState([]);
  console.log(positionId)

  const POST_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';
  const GET_POSITIONS_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions';

  useEffect(() => {
    axios(GET_POSITIONS_URL)
    .then((response) => setPositionsList(response.data.positions))
  }, []);

  const submitForm = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", selectedFile);
  
    axios
      .post(POST_URL, formData)
      .then((res) => {
        alert("File Upload success");
      })
      .catch((err) => alert("File Upload Error"));
  };
  const func = (value) => { 
    console.log(value)
    setPositionId(value.toString())
    console.log(positionId)
  }

  return (
    <div>
      <form action="/action_page.php" className='form' id='post'>
        <TextInput 
        type="text" 
        id="name" 
        name="name" 
        placeholder='Your name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        /><br/>
        <TextInput 
        type="email" 
        id="email" 
        name="email" 
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        /><br/>
        <TextInput 
        type="phone" 
        id="phone" 
        name="phone" 
        placeholder='Phone' 
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        /><br/>
        <label className='text-input-label' for="phone">+380-XXX-XX-XX</label><br/>
        <Text textAlign='left' padding='23px 0 12px'>Select your position</Text>
        <div className='radio-container'>
          {positionsList.map((position) => (
            <>
              <RadioInput 
              key={position.id} 
              type='radio' 
              value={position.id} 
              name='position'
              onChange={(e) => func(e.target.value)}
              />
              <label>{position.name}</label>
            </>
          ))}
          {/* <RadioInput type='radio' value='Backend developer' name='position'/>
          <label for="css">Backend developer</label>
          <RadioInput type='radio' value='Designer' name='position'/>
          <label for="css">Designer</label>
          <RadioInput type='radio' value='QA' name='position'/>
          <label for="css">QA</label><br/> */}
        </div>
        <FileUpload onFileSelectSuccess={(file) => setSelectedFile(file)}
          onFileSelectError={({ error }) => alert(error)}/><br/>
        <div className='form-btn-container'>
          <Button type="submit" form="post" value="Sign up" variant='disabled'>Sign up</Button>
        </div>  
      </form> 
    </div>
  )
}

export default Form