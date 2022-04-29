const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
    //   singup
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link"),
      username = document.querySelector("#username"),
      email = document.querySelector("#email"),
      password1 = document.querySelector("#password1"),
      password2 = document.querySelector("#password2"),
    //   span 
      namespan = document.getElementById("namespan"),
      emailspan = document.getElementById("emailspan"),
      passwordspan = document.getElementById("passwordspan"),
    //   signin
      singupbtn = document.getElementById("singup"),
      singinpassword = document.getElementById("singinpassword"),
      singinemail = document.getElementById("singinemail");
    // NodeValue
const usernameValue = username.value.trim(),
      emailValue = email.value.trim(),
      password1Value = password1.value.trim(),
      password2Value = password2.value.trim();
      
const usersArray = [];
      
const data =  JSON.parse((localStorage.getItem('users')))

      pwShowHide.forEach(eyeIcon =>{
          eyeIcon.addEventListener("click", ()=>{
              pwFields.forEach(pwField =>{
                  if(pwField.type ==="password"){
                      pwField.type = "text";
                      
                      pwShowHide.forEach(icon =>{
                          icon.classList.replace("uil-eye-slash", "uil-eye");
                        })
                    }else{
                        pwField.type = "password";
                        
                        pwShowHide.forEach(icon =>{
                            icon.classList.replace("uil-eye", "uil-eye-slash");
                        })
                    }
            }) 
        })
    })

    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });
    username.addEventListener("click", ( )=>{
        errorBack(username)
        setErrorFor(namespan, "")
    });
    email.addEventListener("click", ( )=>{
        errorBack(email)
        setErrorFor(emailspan, "")
    });
    password1.addEventListener("click", ( )=>{
        errorBack(password1)
        errorBack(password2)
        setErrorFor(passwordspan, "")
    });

function resetInput() {
    username.addEventListener("click", ( )=>{
        setErrorFor(namespan, "")
    });
    email.addEventListener("click", ( )=>{
        setErrorFor(emailspan, "")
    });
    password1.addEventListener("click", ( )=>{
        setErrorFor(passwordspan, "")
    });

}
    
   
    

    
    singupbtn.addEventListener('click', e => {
        e.preventDefault();

        checkInputs()
    })


function checkInputs() {
    
    const usernameValue = username.value.trim(),
      emailValue = email.value.trim(),
      password1Value = password1.value.trim(),
      password2Value = password2.value.trim();

    if(usernameValue === '') {
        setErrorFor(namespan, "type your name")
        inputError(username)
    } else if (!alphanumeric(usernameValue)) {
        setErrorFor(namespan, "type your name")
        inputError(username)
    } else if(emailValue === '') {
        setErrorFor(emailspan, 'Email cannot be blank');
        inputError(email)
    } else if (!isEmail(emailValue)) {
        setErrorFor(emailspan, 'Not a valid email');
        inputError(email)
    } else if(password1Value === '') {
        setErrorFor(passwordspan, 'Password cannot be blank');
        inputError(password1)
    } else if(password2Value === '') {
        setErrorFor(passwordspan, 'Password cannot be blank');
        inputError(password2)
    } else if(password1Value !== password2Value) {
        setErrorFor(passwordspan, 'Passwords does not match');
        inputError(password1)
        inputError(password2)
    } else if(password1Value.length <= 7) {
        setErrorFor(passwordspan, 'Short password');
        inputError(password1)
        inputError(password2)
    } else {
        const user = makeUser(usernameValue, emailValue, password1Value);
        usersArray.push(user)
        localStorage.setItem('users', JSON.stringify(usersArray))
        resetInput()
        container.classList.remove("active"); 
    }
}

function singin() {
    if(data.some(item => item.email === singinemail.value && item.password === singinpassword.value)){
        window.open("/CS_GO SKINS/index.html", "_self")
    }else{
        singinemail.style.borderBottom = "1px solid red"
        singinpassword.style.borderBottom = "1px solid red"
    }
}

function setErrorFor(span, message) {
	span.innerText = message;
}
function inputError(input) {
	const inputError = input.parentElement;
	inputError.className = 'input-error input-field';
}
    
function errorBack(input) {
    const inputError = input.parentElement;
	inputError.className = 'input-field';
}
    
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function alphanumeric(data) { 
    let letters = /^[0-9a-zA-Z]+$/;
    if (letters.test(data)) {
      return true;
    }
    return false;
}

function makeUser(name, email, password) {
    return {
      name: name,
      email: email,
      password: password
    }
}
