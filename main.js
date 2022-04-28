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
            email.addEventListener('click', () => {
                document.getElementById('emailspan').innerHTML = `<span id="emailspan"></span>`
              });
            return document.getElementById('emailspan').innerHTML = `<span class="passwordred">this email is already in use</span>`
        }
        if(data.find(item => item.username === username.value)){
            username.value = '';
            username.addEventListener('click', () => {
                document.getElementById('namespan').innerHTML = `<span id="namespan"></span>`
              });
            return document.getElementById('namespan').innerHTML = `<span class="passwordred">this name is already in use</span>`
        }
        if (password1.value === password2.value){
             password = password1
        }
        if(password1.value !== password2.value){
            return document.getElementById('passwordspan').innerHTML = `<span class="passwordred">Password don't match</span>`
        }
        if(password1.value.length === 0 || password2.value.length === 0){
            password1.addEventListener('click', () => {
                document.getElementById('passwordspan').innerHTML = `<span id="passwordspan"></span>`
              });
            return document.getElementById('passwordspan').innerHTML = `<span class="passwordred">Enter password to continue</span>`
        }else if(email.value == ''){
            email.addEventListener('click', () => {
                document.getElementById('emailspan').innerHTML = `<span id="emailspan"></span>`
              });
            return document.getElementById('emailspan').innerHTML = `<span class="passwordred">Enter Email to continue</span>`
        }else if(username.value == '' ){
            username.addEventListener('click', () => {
                document.getElementById('namespan').innerHTML = `<span id="namespan"></span>`
              });
            return document.getElementById('namespan').innerHTML = `<span class="passwordred">Enter your name to continue</span>`
        }else if(password1.value.length <= 7) {
            password1.addEventListener('click', () => {
                password1.value = ""
                password2.value = ""
                document.getElementById('passwordspan').innerHTML = `<span id="passwordspan"></span>`
              });
            return document.getElementById('passwordspan').innerHTML = `<span class="passwordred">Please enter at least 8 characters</span>`
        }else if(username.value > 0  || email.value > 0  || password1.value.length >= 8) {
            data.push({
                username: username.value,
                password: password.value,
                email: email.value,
            })
            alert('You create acount')
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