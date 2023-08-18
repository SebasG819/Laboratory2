class Mylogo extends HTMLElement {
    // this is how you declare which props are you interested in
    // static get observedAttributes() {
    //   return ["count"];
    // }
  
  
    // this is the method is triggered when the component is added to the document
    connectedCallback() {
      
    }
  
    // dissconnectedCallback() {
    //   console.log("unmounted");
    //   this.removeEventListeners();
    // }
  
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }

  
    render() {
      console.log("render");
      this.shadowRoot.innerHTML = `
          <section>
          <img src="https://offers.hubspot.es/hubfs/assets/hs-cms-modules/HubSpot-Logo.svg">
          </section>
      `;
    }
  
  }
  
  customElements.define("my-logo", Mylogo);
  export default Mylogo;