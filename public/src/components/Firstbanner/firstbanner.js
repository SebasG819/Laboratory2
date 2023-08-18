class Mylogo extends HTMLElement {
    // this is how you declare which props are you interested in
    // static get observedAttributes() {
    //   return ["count"];
    // }
  
  
    // this is the method is triggered when the component is added to the document
    connectedCallback() {
      this.render();
    }
  
    // dissconnectedCallback() {
    //   console.log("unmounted");
    //   this.removeEventListeners();
    // }
  
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }

    attributeChangedCallback(propName, oldValue, newValue) {
      this[propName] = newValue;
      this.render();
  }

  
    render() {
      console.log("render");
      this.shadowRoot.innerHTML = `
          <section>
          <img src="https://offers.hubspot.es/hubfs/assets/hs-cms-modules/HubSpot-Logo.svg">
          <p> Conéctate con tus clientes, supera sus expectativas y conviértelos en promotores para potenciar el crecimiento de tu empresa.</p>
          <p>Todas las herramientas que necesitas para garantizar la organización y eficiencia de tu equipo de servicio al cliente.</p>
          </section>
      `;
    }
  
  }
  
  customElements.define("my-logo", Mylogo);
  export default Mylogo;