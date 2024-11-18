import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    autoNumber: '',
    phoneNumber: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => console.log(data.message))
    .catch(error => console.error('Error:', error));
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <h2>Registration Form</h2>
        <div className="name-row">
          <input className='input-field' type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
          <input className='input-field' type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
          <input className='input-field' type="number" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
          <input className='input-field' type="text" name="autonumber" placeholder="Auto Number - KA XX XX XXXX" value={formData.autoNumber} onChange={handleChange} required />
          <input className='input-field' type="text" name="email" placeholder="Email ID: example@example.com" value={formData.email} onChange={handleChange} required />
          <input className='input-field' type="text" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <div className="input-field">
            <label>Places you serve:</label>
            <div>
              <input 
                type="checkbox" 
                name="places" 
                value="Ujire"
                onChange={handleChange}
              /> Ujire
            </div>
            <div>
              <input 
                type="checkbox" 
                name="places" 
                value="Dharmastala"
                onChange={handleChange}
              /> Dharmastala
            </div>
            <div>
              <input 
                type="checkbox" 
                name="places" 
                value="Belthangady"
                onChange={handleChange}
              /> Belthangady
            </div>
          </div>
          <div className='register-button-container'>
            <button className='register-button' type="submit">Register</button>
          </div>
        </div>
        
      </form>
    </div>
  );
}

export default Form;