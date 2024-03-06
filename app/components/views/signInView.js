class signInView extends HTMLElement
{
    constructor()
    {
        super();
        this.formContainer = document.createElement('div');
        this.form = document.createElement('form');   

        this.userNickNameContainer = document.createElement('div');      
        this.userNickNameInput = document.createElement('input');
        this.nickNameSpan = document.createElement('span');
        this.nickNameHint = document.createElement('img');

        this.passwordContainer = document.createElement('div');
        this.inputPassword = document.createElement('input');
        this.passwordSpan = document.createElement('span');
        this.passwordHint = document.createElement('img');

        this.forgotPasswordContainer = document.createElement('div');
        this.forgotPassword = document.createElement('a');

        this.buttonSignIn = document.createElement('button');
    }

    connectedCallback()
    {
        this.render();
    }

    disconectedCallback()
    {

    }

    render()
    {
        this.className = 'componente';
        this.formContainer.classList.add("form-container");
        this.form.classList.add("form");

        this.userNickNameContainer.classList.add("input-group");
        this.userNickNameInput.setAttribute('type', 'text');
        this.userNickNameInput.setAttribute('id', 'userNickName');
        this.userNickNameInput.classList.add("input");
        this.nickNameSpan.textContent = 'Nick Name';
        this.nickNameSpan.classList.add("label");
        // this.nickNameHint.setAttribute('src', './app/src/info.png');

        this.passwordContainer.classList.add("input-group");
        this.inputPassword.setAttribute('type', 'password');
        this.inputPassword.setAttribute('id', 'inputPassword');
        this.inputPassword.classList.add("input");
        this.passwordSpan.textContent = 'Password';
        this.passwordSpan.classList.add("label");
        // this.passwordHint.setAttribute('src', './app/src/info.png');

        this.forgotPasswordContainer.classList.add("forgot");
        this.forgotPassword.innerHTML = 'Forgot your password?';
        this.forgotPassword.id= "forgotPassword";

        this.buttonSignIn.classList.add("signButton");
        this.buttonSignIn.innerHTML = "Enviar";
        this.buttonSignIn.id = "signInButton";

        
        // this.userNickNameLabel.for = this.userNickNameInput;
        // this.userNickNameContainer.appendChild(this.userNickNameLabel);
        this.userNickNameContainer.appendChild(this.userNickNameInput);
        this.userNickNameContainer.appendChild(this.nickNameSpan);
        this.userNickNameContainer.appendChild(this.nickNameHint);


        // this.passwordLabel.for = this.inputPassword;
        // this.passwordContainer.appendChild(this.passwordLabel);
        this.passwordContainer.appendChild(this.inputPassword);
        this.passwordContainer.appendChild(this.passwordSpan);
        this.passwordContainer.appendChild(this.passwordHint);

        this.forgotPasswordContainer.appendChild(this.forgotPassword);     

        this.form.appendChild(this.userNickNameContainer);
        this.form.appendChild(this.passwordContainer);
        this.form.appendChild(this.forgotPasswordContainer);
        this.form.appendChild(this.buttonSignIn);      

        this.formContainer.appendChild(this.form);

        this.appendChild(this.formContainer);
    }

    signInData(){
      let userDataRegister = {
        'nickname'  : this.userNickNameInput.value,
        'password'  : this.inputPassword.value,
      }
      return userDataRegister;
    }

}

customElements.define('x-sign-in-view', signInView);
  
export { signInView}