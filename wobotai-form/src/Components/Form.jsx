import React, { useState } from 'react';
import logo from "./Icons/logo.svg";



const Form = () => {
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [industry, setIndustry] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, e.g., submit it to a server
    console.log('Name:', name);
    console.log('Company Name:', companyName);
    console.log('Industry:', industry);
  };

  return (
    
     <div className="main-card">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="Form-content">
                    <h3>It's a delight to have you onboard</h3>
                    <p>Help us know you better.</p>
                    <p id='paragraph'>(This is how we Optimize Wobot as per your business needs )</p>
                </div>
                
    <form onSubmit={handleSubmit}>
        
            <div className='YourName'>
                <label className='YourNameLabel'>Your Name</label>
                <input type="text" placeholder='e.g Jhon Smith'  onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="CompanyName">
            <label className='CompanyNameLabel'>Company name</label>
                <input type="text" placeholder='e.g Alph Inc'  onChange={(e) => setCompanyName(e.target.value)}/>
            </div>
            <div className="Industry">
            <label className='IndustryLabel' onChange={(e) => setIndustry(e.target.value)}>Industry</label>
                <select name="" >
                    <option value="Select">Select</option>
                </select>
            </div>
            <p className='NumberLocation'>Number of locations</p>
            <div className="NumberOfLocation">
                
                <div className='Box-number'>1-20</div>
                <div className='Box-number'>21-50</div>
                <div className='Box-number_blue'>51-200</div>
                <div className='Box-number'>201-500</div>
                <div className='Box-number'>500+</div>
            </div>
            <button type='submit' id='submit'>Get Started</button>

    </form>
    </div>
    
  )
  }
export default Form;
