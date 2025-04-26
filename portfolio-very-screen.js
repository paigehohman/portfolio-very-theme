/**
 * Copyright 2025 paigehohman
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `final-test`
 *
 * @demo index.html
 * @element final-test
 *
 */
export class PortfolioVeryScreen extends DDDSuper(LitElement) {
  static get tag() {
    return "portfolio-very-screen";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
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
          height: 100vh;
          padding: 20px;
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
        }
        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
          padding-top: 5px;
        }
        h3 span {
          font-size: var(--final-test-label-font-size, var(--ddd-font-size-s));
        }
        :host(.about) {
          background-color: var(--ddd-theme-default-beaverBlue);
          color: var(--ddd-theme-default-slateMaxLight);
        }
        :host(.resume) {
          background-color: var(--ddd-theme-default-beaver70);
          color: var(--ddd-theme-default-slateMaxLight);
        }
        :host(.projects) {
          background-color: var(--ddd-theme-default-beaver80);
          color: var(--ddd-theme-default-slateMaxLight);
        }
        :host(.work) {
          background-color: var(--ddd-theme-default-navy40);
          color: var(--ddd-theme-default-slateMaxLight);
        }
        :host(.contact) {
          background-color: var(--ddd-theme-default-navy60);
          color: var(--ddd-theme-default-slateMaxLight);
        }
        .contact-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          padding: 4rem 2rem 2rem 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        .text-contact-content {
          flex: 1;
          font-size: 1.2rem;
          line-height: 1.5;
        }
        .contact-content img {
          width: 300px;
          height: auto;
          border-radius: 8px;
          border: 4px solid var(--ddd-theme-primary);
          object-fit: cover;
        }
        @media (max-width: 600px) {
          .contact-content {
            flex-direction: column;
            text-align: center;
          }
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html` <div class="wrapper">
      <h3>${this.title}</h3>
      <slot></slot>
    </div>`;
  }

  /**
   * haxProperties integration via file reference
   */
}

globalThis.customElements.define(PortfolioVeryScreen.tag, PortfolioVeryScreen);
