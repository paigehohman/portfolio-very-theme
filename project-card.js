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
export class ProjectCard extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "project-card";
  }

  constructor() {
    super();
    this.title = "";
    this.description = "";
    this.link = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      description: { type: String },
      link: { type: String },
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
          padding: 1rem;
          margin: 1rem;
          border-radius: 16px;
          max-width: 400px;
        }
        //  .wrapper {
        //    margin: var(--ddd-spacing-2);
        //    padding: var(--ddd-spacing-4);
        //   }
        a {
          color: var(--ddd-theme-default-beaverBlue);
          font-weight: bold;
          text-decoration: none;
        }
        h3 {
          margin-top: 0;
        }
      `,
    ];
  }

  // Lit render the HTML
  // <div class="wrapper">
  // <h3><span>${this.t.title}:</span> ${this.title}</h3>
  //  <slot></slot>
  // </div>`;
  render() {
    return html`
      <h3>${this.title}</h3>
      <p>${this.description}</p>
      <a href="${this.link}" target="_blank" rel="noopener noreferrer"
        >View Project</a
      >
    `;
  }
}

/**
 * haxProperties integration via file reference
 */

globalThis.customElements.define(ProjectCard.tag, ProjectCard);
