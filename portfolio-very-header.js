/**
 * Copyright 2025 paigehohman
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `final-test`
 *
 * @demo index.html
 * @element final-test
 */
export class PortfolioVeryHeader extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "portfolio-very-header";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/final-test.ar.json", import.meta.url).href + "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          background-color: var(--ddd-theme-default-nittanyNavy);
          font-family: var(--ddd-font-navigation);
        }
        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
        }
        h3 span {
          font-size: var(--final-test-label-font-size, var(--ddd-font-size-s));
        }
        :root {
          scroll-behavior: smooth;
        }
        div h1 {
          margin-top: 200px;
        }
        div {
          padding: 100px;
          width: calc(100vw - 200px);
          overflow-x: hidden;
          height: 100vh;
        }

        ::slotted(.red) {
          background-color: red;
        }

        your-banner a {
          border: 2px solid black;
          padding: 10px;
          display: inline-block;
          margin: 10px;
          background-color: black;
          color: white;
          text-decoration: none;
        }

        your-banner {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #00000066;
          position: fixed;
          top: 100px;
          left: 0;
          height: 100px;
          right: 0;
          z-index: 1;
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html` <div class="wrapper">
      <your-banner>
        <a href="#1">About</a>
        <a href="#2">Research</a>
        <a href="#3">Presentations and Publications</a>
        <a href="#4">Professional Development</a>
        <a href="#5">Contact</a>
      </your-banner>
      <h3><span>${this.t.title}:</span> ${this.title}</h3>
      <slot></slot>
    </div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(PortfolioVeryHeader.tag, PortfolioVeryHeader);
