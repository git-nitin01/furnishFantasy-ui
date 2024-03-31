import React, { useEffect } from 'react'
import SignIn from './SignIn'
import { useState } from 'react'
import Sidebar from './Sidebar'
import SignUp from './SignUp'
import $ from 'jquery'

const Dialog = () => {

    // false --> Sign in
    // true --> Sign up
    const [isClicked, setIsClicked] = useState(false)
    const styles = "bg-white flex flex-row relative mx-auto rotate-90 sm:rotate-0 h-[60vw] w-[800px] sm:h-[500px] sm:w-[500px] rounded-3xl shadow-3xl overflow-hidden" //overflow-hidden
    
    // adding styles to fields & buttons
    const inpStyles = 'bg-white shadow-lg border border-gray-200 h-10 rounded-lg my-2 p-2'
    const buttonStyles = 'w-2/4 shadow-lg h-10 bg-black bg-opacity-80 text-white rounded-lg my-3 cursor-pointer hover:bg-opacity-100 transition duration-300 ease-in-out'
    const innerForm = 'flex flex-col items-center justify-center'

    // form container styles
    const containerStyles = 'text-black relative z-[2] h-full '

    // parent form conatiner styles
    const parentForm = 'h-full w-fit p-[20px] flex flex-col items-center justify-center sm:h-full'
    const parentFormAnimation = 'transition-transform duration-500 ease-out'
    const parentStyles = parentForm + ' ' + parentFormAnimation

    $(() => {
        $('.formContainer').addClass(containerStyles)
        $('#sign_in_form').addClass(parentStyles)
        $('#sign_up_form').addClass(parentStyles)
        $('.inpField').addClass(inpStyles)
        $('.clickBtn').addClass(buttonStyles)
        $('.innerForm').addClass(innerForm)
    })

    $(() => {
        let errorMessage = ''
        const errorClass = 'before-content before:text-red-500'

        // checking if email and retype email are same
        $('#inner-sign-up').on('submit', (e) => {
            e.preventDefault();
            $('#inner-sign-up').removeClass('before-content-success before:text-green-500')
            const email = $('#email').val();
            const retypeEmail = $('#reEmail').val();
            if (email !== retypeEmail) {
                errorMessage = 'Emails do not match'
                $('#inner-sign-up').attr('data-content', errorMessage)
                $('#inner-sign-up').addClass(errorClass)
            }
            

            // checking if password meets the requirements
            const password = $('#pass').val();
            const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
            if (password.length > 0 && !regex.test(password) ) {
                if (errorMessage.length > 0) {
                    errorMessage += "\n"
                }
                errorMessage = 'Password must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, and 1 number'
                $('#inner-sign-up').attr('data-content', errorMessage)
                $('#inner-sign-up').addClass(errorClass)
            }
            else{
                // checking if password and retype password are same
                const retypePassword = $('#rePass').val();
                if (password !== retypePassword) {
                    if (errorMessage.length > 0) {
                        errorMessage += "\n"
                    }
                    errorMessage += 'Passwords do not match'
                    $('#inner-sign-up').attr('data-content', errorMessage)
                    $("#inner-sign-up").removeClass(errorClass)
                    $('#inner-sign-up').addClass(errorClass)
                }
            }

            // checking if the error message is empty
            if (errorMessage.length === 0) {
                $('#inner-sign-up').attr('data-content', 'Sign Up Successful')
                $('#inner-sign-up').removeClass(errorClass)
                $('#inner-sign-up').addClass('before-content-success before:text-green-500')
                $('#inner-sign-up').trigger('reset')
            }

        })

        

        // removing the before content if the user corrects the email
        $('#email, #reEmail').on('focus', () => {
            errorMessage = ''
            $('#inner-sign-up').attr('data-content', errorMessage)
            $('#inner-sign-up').removeClass(errorClass)
        })

        // removing the before content if the user corrects the password
        $('#pass, #rePass').on('focus', () => {
            errorMessage = ''
            $('#inner-sign-up').attr('data-content', errorMessage)
            $('#inner-sign-up').removeClass(errorClass)
        })
    })

    // mobile device
    $(() => {
        $('#sign_in_form').addClass('rotate-[270deg] sm:rotate-0 ')
        $('#sign_up_form').addClass('rotate-[270deg] sm:rotate-0 ')
        $('.submitBtn').addClass('rotate-[270deg] sm:rotate-0 sm:scale-100 scale-[0.75]')
    })
    return (
        <div className="w-screen h-screen flex items-center justify-center p-0 overflow-hidden">
            <div className={styles}>
                <SignIn isClicked={isClicked} setIsClicked={setIsClicked} />
                <Sidebar isClicked={isClicked} setIsClicked={setIsClicked} />
                <SignUp isClicked={isClicked} setIsClicked={setIsClicked} />
            </div>
        </div>
    )
}

export default Dialog