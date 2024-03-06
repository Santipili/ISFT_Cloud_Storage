import { signIn } from './components/signIn.js';
import { register} from './components/register.js';
import { home } from './components/home.js';




class init extends HTMLElement {
    constructor() {
      super();
      this.container = document.createElement('div');
      this.viewReference = null;
      this.home = new home();
      this.signIn = new signIn();
      this.register = new register();

    //   let style = document.createElement('style');
    //   style.innerText = `@import './app/styles/appStyle.css'`;
    //   this.appendChild(style);
    }
  
  connectedCallback() {
    this.container.className = 'appContainer';
    this.container.appendChild(this.home);
    this.appendChild(this.container);
    this.setCallbacks();
  }
  
  setCallbacks() {
        window.addEventListener('signin-button-event', () => { this.onSignInView();});
        window.addEventListener('register-button-event', () => { this.onRegisterView();});
  }

  onSignInView() {
    this.container.className = 'containerActive';
    if (this.viewReference) {
      this.container.removeChild(this.viewReference)
    }
    this.viewReference = this.signIn;
    this.container.appendChild(this.viewReference);
  }

  onRegisterView()
  {
    this.container.className = 'containerActive';
    if (this.viewReference) {
      this.container.removeChild(this.viewReference)
    }
    this.viewReference = this.register;
    this.container.appendChild(this.viewReference);
  }

}
  
customElements.define('x-init', init);
  
export { init };