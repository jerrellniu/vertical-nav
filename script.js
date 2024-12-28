(function () {
  const template = document.createElement("template");
  template.innerHTML = `
    <style>
      :host {
        display: none; /* Initially hidden */
      }

      .vertical-nav {
        position: fixed;
        display: flex;
        justify-content: center;
        top: 0;
        height: 100%;
        writing-mode: vertical-rl; /* Aligns text vertically */
        z-index: 10000; /* Keeps the navigation above other elements */
      }

      a {
        text-decoration: none; /* Remove default underline from links */
      }

      ::slotted(*) {
        display: inline-block;
        position: relative;
        border: 1px solid transparent;
      }

      ::slotted(a:not(:first-of-type)) {
        margin-top: 20px; /* Add space between items except the first */
      }

      ::slotted(*:hover) {
        border-left: 1px solid black; /* Add a hover effect */
      }

      .left {
        left: 5%;
      }

      .right {
        right: 5%;
      }

      @media (min-width: 768px) {
        :host {
          display: block; /* Display only on larger screens */
        }
      }
    </style>
    <div class="vertical-nav">
      <slot></slot>
    </div>
  `;

  class VerticalNav extends HTMLElement {
    static get observedAttributes() {
      return ["side", "textcolor"];
    }

    // Getters and setters for 'side' attribute
    get side() {
      return this.getAttribute("side");
    }

    set side(value) {
      if (value) {
        this.setAttribute("side", value);
      } else {
        this.removeAttribute("side");
      }
    }

    // Getters and setters for 'textColor' attribute
    get textColor() {
      return this.getAttribute("textColor");
    }

    set textColor(value) {
      if (value) {
        this.setAttribute("textColor", value);
      } else {
        this.removeAttribute("textColor");
      }
    }

    // Apply the 'side' class based on the attribute
    checkSide() {
      const side = this.side;
      const element = this.shadowRoot.querySelector(".vertical-nav");

      element.classList.remove("left", "right"); // Clear previous classes
      if (side === "left") {
        element.classList.add("left");
      } else if (side === "right") {
        element.classList.add("right");
      }
    }

    // Apply custom text colour based on the 'textColor' attribute
    checkTextColor() {
      if (!this.textColor) return;

      const textColor = this.textColor;
      const style = this.shadowRoot.querySelector("style");

      style.insertAdjacentHTML(
        "beforeend",
        `
          ::slotted(a) {
            color: ${textColor};
          }
        `
      );
    }

    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
      this.checkSide();
      this.checkTextColor();
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === "side") {
        this.checkSide();
      } else if (name === "textcolor") {
        this.checkTextColor();
      }
    }
  }

  window.customElements.define("vertical-nav", VerticalNav);
})();
