import React, { useEffect } from 'react'
import $ from 'jquery'


function SignIn({isClicked}) {
  // form animation=
  const toLeft = 'translate-x-[-100%]'
  const toRight = 'translate-x-[0%]'

  useEffect(() => {
    $(() => {
      if(isClicked) {
        $('#sign_in_form').removeClass(toRight)
        $('#sign_in_form').addClass(toLeft)
      } else {
        $('#sign_in_form').removeClass(toLeft)
        $('#sign_in_form').addClass(toRight)
      }
  })
  }, [isClicked])

  return (
      <div id='top-container-0' className='formContainer sm:scale-100 scale-[0.75]'>
        <div id="sign_in_form" className={toRight}>
          <form className="innerForm">
            <input type="email" placeholder="Email" className='inpField' required/>
            <input type="password" placeholder="Password" className='inpField' required/>
            <button className="clickBtn">Sign In</button>
          </form>
        </div>
      </div>
  )
}

export default SignIn