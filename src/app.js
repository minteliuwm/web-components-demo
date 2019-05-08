import './app.scss';

export default class MyApp extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = this.template;
  }

  get template() {
    return `
      <style include="app"></style>
      <div class="title">This is a div</div>
    `;
  }
}

customElements.define('my-app', MyApp);