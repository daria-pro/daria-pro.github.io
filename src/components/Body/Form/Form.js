import React, {useState, useEffect} from 'react'
import Button from '../../Button/Button'
import Text from '../../Typography/Text/Text'
import FileUpload from './FileUpload/FileUpload'
import './Form.scss'
import RadioInput from './RadioInput/RadioInput'
import TextInput from './TextInput/TextInput'
import axios from 'axios'
import successImage from '../../../images/success-image.svg'
import Heading from '../../Typography/Heading/Heading'

const Form = ({loadRefreshContent}) => {  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [positionId, setPositionId] = useState('');
  const [selectedFile, setSelectedFile] = useState({});
  const [positionsList, setPositionsList] = useState([]);
  const [token, setToken] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [error, setError] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  

  const POST_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';
  const GET_POSITIONS_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions';
  const GET_TOKEN = 'https://frontend-test-assignment-api.abz.agency/api/v1/token'

  useEffect(() => {
    axios(GET_POSITIONS_URL)
    .then((response) => setPositionsList(response.data.positions))
    axios(GET_TOKEN)
    .then((response) => setToken(response.data.token))
  }, []);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);  

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("position_id", positionId);
    formData.append("photo", selectedFile);

    fetch(POST_URL, 
    {
      method: 'POST', 
      body: formData, 
      headers: { 'Token': token }, 
    }) 
    
   .then(function(response) { 
    return response.json(); 
   }) 
   .then(function(data) { 
    if(data.success === true) {
      setIsSubmitted(true) 
      loadRefreshContent();
    } else { 
      setError(data.message) } 
    }) .catch(function(error) { 
      setError(error) 
    })
    .then(setIsPending(false));
  }
  
  const canBeSubmitted = () => {    
    return name.length > 0 && email.length > 0 && phone.length > 0 && positionId.length > 0 && selectedFile
  }
  
  useEffect(() => {
    setIsEnabled(canBeSubmitted());    
  }, [name, email, phone, positionId, selectedFile])

   
  return (
    <div className='form-container'>
    {!isSubmitted ?
      <>      
        <Heading>Working with POST request</Heading>
        <form onSubmit={handleSubmit} className='form' id='post'>
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
                onChange={(event) => setPositionId(`${event.target.value}`)}
                />
                <label>{position.name}</label>
              </>
            ))}          
          </div>
          <FileUpload 
          onFileSelectSuccess={(file) => setSelectedFile(file)}          
          onFileSelectError={({ error }) => alert(error)}
          />
          
            <div className='form-btn-container'>
              {error && <Text color='#CB3D40' padding='0 0 10px 0'>{error}</Text>} 
              {!isPending ? <Button type="submit" form="post" value="Sign up" variant={!isEnabled ? 'disabled' : 'yellow-btn'} >Sign up</Button>
              : <Button width='150px' variant='disabled'>Adding user...</Button>}
            </div> 
        </form> 
      </> 
      :
        <div className='success-container'>
          <Heading>User successfully registered</Heading>
          <img src={successImage} alt='success' className='success-image'/>
        </div>
      }
    </div>
  )
}


export default Form