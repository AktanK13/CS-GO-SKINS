const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link"),
      username = document.querySelector("#username"),
      email = document.querySelector("#email"),
      password1 = document.querySelector("#password1"),
      password2 = document.querySelector("#password2"),
      singupbtn = document.getElementById("singup"),
      singinpassword = document.getElementById("singinpassword"),
      singinemail = document.getElementById("singinemail");

const data =  JSON.parse((localStorage.getItem('users')))

    let password = ''

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

    
    
    singupbtn.addEventListener('click', addToStore)
    

    
      
    function addToStore() {
        if(data.find(item => item.email === email.value)){
            email.value = '';
            return alert("this email already be taken")
        }
        if(data.find(item => item.username === username.value)){
            username.value = '';
            return alert("this username already be taken")
        }
        if (password1.value === password2.value){
             password = password1
        }else if(password1.value !== password2.value){
            return alert('diferent password')
        }
        if(password1.value.length === 0 || password2.value.length === 0){
            return alert('type password')
        }else if(email.value == ''){
            return alert('type email')
        }else if(username.value == '' ){
            return alert('type your name')
        }else if(password1.value.length <= 8) {
            return alert('short password')
        }else if(username.value > 0  || email.value > 0  || password1.value.length >= 8) {
            data.push({
                username: username.value,
                password: password.value,
                email: email.value,
            })
            alert('new acount be ceated')
            username.value = '';
            email.value = '';
            password1.value = '';
            password2.value = '';
            container.classList.remove("active"); 
            // window.location.reload()
        }

        let dataJson = JSON.stringify(data)
        localStorage.setItem('users', dataJson)

        
        document.getElementById('emailspan').innerHTML = `<span></span>`
        document.getElementById('passwordspan').innerHTML = `<span></span>`

    }

    function singin() {
        if(data.some(item => item.email === singinemail.value && item.password === singinpassword.value)){
            window.open("/CS_GO SKINS/index.html", "_self")
        }else{
            singinemail.style.borderBottom = "1px solid red"
            singinpassword.style.borderBottom = "1px solid red"
        }
    }