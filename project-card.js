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
    this.link2 = "";
    this.image = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      description: { type: String },
      link: { type: String },
      link2: { type: String },
      image: { type: String },
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
          padding: 2rem;
          margin: 3rem auto;
          border-radius: 16px;
          max-width: 1000px;
        }

        a {
          color: var(--ddd-theme-default-beaverBlue);
          font-weight: bold;
          text-decoration: none;
        }
        h3 {
          margin: 0;
          font-size: 1.8rem;
        }
        img {
          width: 400px;
          height: auto;
          border-radius: 8px;
          border: 4px solid var(--ddd-theme-primary);
          object-fit: cover;
        }
        .project-content {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .text-project-content {
          flex: 1;
        }
        p {
          margin: 1rem 0;
        }
        @media (max-width: 600px) {
          .project-content {
            flex-direction: column;
            text-align: center;
          }
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
      <div class="project-content">
        <img src="${this.image}" alt="Project Preview" />
        <div class="text-project-content">
          <h3>${this.title}</h3>
          <p>${this.description}</p>
          <ul>
            ${this.link
              ? html`<li>
                  <a href="${this.link}" target="_blank">View Project</a>
                </li>`
              : ""}
            ${this.link2
              ? html`<li>
                  <a href="${this.link2}" target="_blank">Access GitHub</a>
                </li>`
              : ""}
          </ul>
        </div>
      </div>
    `;
  }
}

/**
 * haxProperties integration via file reference
 */

customElements.define(ProjectCard.tag, ProjectCard);
//globalThis.customElements.define(ProjectCard.tag, ProjectCard);
