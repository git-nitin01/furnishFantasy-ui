import React, { useEffect } from 'react'
import $ from 'jquery'

function SignUp({isClicked}) {
  // form animation
  const toLeft = 'translate-x-[160%] sm:translate-x-[120%]'
  const toRight = 'translate-x-[-55%] sm:translate-x-[13%]'

  useEffect(() => {
    $(() => {
      if(isClicked) {
        $('#sign_up_form').removeClass(toLeft)
        $('#sign_up_form').addClass(toRight)
      } else {
        $('#sign_up_form').removeClass(toRight)
        $('#sign_up_form').addClass(toLeft)
      }
  })
  }, [isClicked])

  return (
      <div id="top-container-1" className='formContainer sm:scale-100 scale-[0.50]'>
        <div id="sign_up_form" className={toRight}>
          <form id="inner-sign-up" className="innerForm" data-content=''>
            <input type="text" placeholder="Name" className='inpField' required/>
            <input id="email" type="email" placeholder="Email" className='inpField' required/>
            <input id="reEmail" type="email" placeholder="Retype mail" className='inpField' required/>
            <input id="pass" type="password" placeholder="Password" className='inpField' required/>
            <input id="rePass" type="password" placeholder="Retype password" className='inpField' required/>
            <button className='clickBtn'>Sign Up</button>
          </form>
        </div>
      </div>
  )
}

export default SignUp