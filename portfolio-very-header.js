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
          font-family: var(--ddd-font-navigation);
        }

        your-banner a {
          padding: 10px;
          display: inline-block;
          margin: 10px;
          background-color: var(--ddd-theme-default-slateGray);
          color: white;
          text-decoration: none;
        }

        your-banner {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: var(--ddd-theme-default-nittanyNavy);
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
        <a href="#2">Resume</a>
        <a href="#3">Projects</a>
        <a href="#4">Work Experience</a>
        <a href="#5">Contact</a>
      </your-banner>
      <slot></slot>
    </div>`;
  }

  /**
   * haxProperties integration via file reference
   */
}

globalThis.customElements.define(PortfolioVeryHeader.tag, PortfolioVeryHeader);
