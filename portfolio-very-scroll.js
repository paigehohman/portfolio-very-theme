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
 *
 *
 * @demo index.html
 * @element final-test
 */
export class PortfolioVeryScroll extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "portfolio-very-scroll";
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
        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
        }
        h3 span {
          font-size: var(--final-test-label-font-size, var(--ddd-font-size-s));
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

globalThis.customElements.define(PortfolioVeryScroll.tag, PortfolioVeryScroll);
