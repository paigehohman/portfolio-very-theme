/**
 * Copyright 2025 paigehohman
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./portfolio-very-screen.js";
import "./portfolio-very-header.js";
import "./project-card.js";

// PAIGE, YOU ADDED THIS IN
import "@haxtheweb/scroll-button/scroll-button.js";

/**
 * `portfolio-very-theme`
 *
 * @demo index.html
 * @element portfolio-very-theme
 */
export class PortfolioVeryTheme extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "portfolio-very-theme";
  }

  constructor() {
    super();
    this.pages = [];
    this.addEventListener("screen-change", (e) => {
      let tmp = this.screen + parseInt(e.detail.direction);
      if (tmp > this.screens.length - 1) {
        tmp = this.screens.length - 1;
      }
      if (tmp < 0) {
        tmp = 0;
      }
      this.screen = tmp;
    });
    this.addEventListener("screen-ready", (e) => {
      this.screens = [...this.screens, e.detail.screen];
    });
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    // use hash in URL
    if (parseInt(globalThis.location.hash.replace("#", "")) >= 0) {
      this.screen = parseInt(globalThis.location.hash.replace("#", ""));
    }
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      screen: { type: Number, reflect: true },
      screens: { type: Array },
      skipped: { type: Boolean, reflect: true },
      active: { type: Object },
      title: { type: String },
      pages: { type: Array },
    };
  }

  updated(changedProperties) {
    if (super.updated) {
      super.updated(changedProperties);
    }
    // if screen changes, update the hash
    if (
      this.shadowRoot &&
      (changedProperties.has("screens") || changedProperties.has("screen")) &&
      this.screens.length > 0
    ) {
      globalThis.location.hash = this.screen;
      // scroll the screen into view
      let active = this.screens.find((screen) => screen.sid == this.screen);
      if (active) {
        this.screens.map((screen) => {
          if (screen.sid == this.screen) {
            screen.active = true;
          } else {
            screen.active = false;
          }
        });
        this.active = null;
        this.active = active;
        this.active.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
        // ensure intro skipped if we jumped to something
        if (this.screen !== 0) {
          this.skipIntro();
        }
      }
    }
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          height: 100vh;
          color: var(--ddd-theme-primary);

          font-family: var(--ddd-font-navigation);
        }

        h3 span {
          font-size: var(
            --portfolio-very-theme-label-font-size,
            var(--ddd-font-size-s)
          );
        }
        scroll-button {
          position: fixed;
          right: 20px;
          bottom: 20px;
          z-index: 9999;
        }
        @media (max-width: 768px) {
          .wrapper {
            padding: var(--ddd-spacing-2);
            width: 100vw;
            height: 100vw;
          }
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html` <div class="wrapper">
      <h3><span>${this.t.title}:</span> ${this.title}</h3>
      <portfolio-very>
        <ul>
          ${this.pages.map(
            (page, index) =>
              html`<li>
                <a
                  href="#${page.number}"
                  @click="${this.linkChange}"
                  data-index="${index}"
                  >${page.title}</a
                >
              </li>`
          )}
        </ul>
      </portfolio-very>
      <div class="wrapper" @page-added="${this.addPage}">
        <slot></slot>
        <scroll-button></scroll-button>
      </div>
    </div>`;
  }

  linkChange(e) {
    let number = parseInt(e.target.getAttribute("data-index"));
    if (number >= 0) {
      this.pages[number].element.scrollIntoView();
    }
  }

  addPage(e) {
    const element = e.detail.value;
    const page = {
      number: element.pagenumber,
      title: element.title,
      element: element,
    };
    this.pages = [...this.pages, page];
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(PortfolioVeryTheme.tag, PortfolioVeryTheme);
