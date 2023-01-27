import React, { useState } from 'react'

const Email = () => {
  // STATES
  const [email, setEmail] = useState('');
  const [check, setCheck] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (check) {
      console.log(`email: ${email} \n check: ${check}`);
    } else {
      alert('You must be clicked on the check button of privacy policy');
    }
  }
  return (
    <div className='email'>
      <h1 className="email__title">
        SIGN UP AND JOIN NOW GET 35% DISCOUNT!
      </h1>
      <div className="email__info">
        <form action="#">
          <input type="email" placeholder='Email address' className='email__info__userEmail' onChange={(e) => setEmail(prevEmail => prevEmail = e.target.value)}/>
          <input type="submit" value="SEND" className='email__info__cta' onClick={(e) => handleSubmit(e)} /> <br />
          <input type="checkbox" onClick={() => setCheck(prevCheck => prevCheck = true)} /> I have read and accept the Terms and Conditions and Privacy Policy and Information Document on Personal Data.
        </form>
      </div>
    </div>
  )
}

export default Email;