import { html, property, query } from 'lit-element';
import type { TemplateResult, CSSResultArray, PropertyValues } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { nothing } from 'lit-html';
import { buttonStyles } from './pharos-button.css';
import { designTokens } from '../../styles/variables.css';
import { customElement } from '../../utils/decorators';

import { AnchorElement } from '../base/anchor-element';
import type { LinkTarget } from '../base/anchor-element';
import FocusMixin from '../../utils/mixins/focus';
import '../icon/pharos-icon';
import type { IconName } from '../icon/pharos-icon';

export type ButtonType = 'button' | 'submit' | 'reset';

export type ButtonVariant = 'primary' | 'secondary' | 'subtle';

export type { LinkTarget, IconName };

const TYPES = ['button', 'submit', 'reset'];

const VARIANTS = ['primary', 'secondary', 'subtle'];

/**
 * Pharos button component.
 *
 * @element pharos-button
 *
 * @slot - Contains the content of the button (the default slot).
 *
 */
@customElement('pharos-button')
export class PharosButton extends FocusMixin(AnchorElement) {
  /**
   * Indicates that the button should have input focus when the page loads.
   * @attr autofocus
   */
  @property({ type: Boolean, reflect: true })
  public autofocus = false;

  /**
   * Indicates that the button cannot be pressed or focused by the user.
   * @attr disabled
   */
  @property({ type: Boolean, reflect: true })
  public disabled = false;

  /**
   * Indicates the default behavior of the button via the HTML5 attribute.
   * @attr type
   * @type {ButtonType | undefined}
   */
  @property({ type: String, reflect: true })
  public type?: ButtonType;

  /**
   * Indicates the variant of button.
   * @attr variant
   */
  @property({ type: String, reflect: true })
  public variant: ButtonVariant = 'primary';

  /**
   * The icon to be shown as the content of the button.
   * @attr icon
   * @type {IconName | undefined}
   */
  @property({ type: String, reflect: true })
  public icon?: IconName;

  /**
   * Applies only to icon-only buttons. If true, the button will have minimal padding.
   * @attr icon-condensed
   */
  @property({ type: Boolean, reflect: true, attribute: 'icon-condensed' })
  public iconCondensed = false;

  /**
   * The icon to be shown on the right side.
   * @attr icon-right
   * @type {IconName | undefined}
   */
  @property({ type: String, reflect: true, attribute: 'icon-right' })
  public iconRight?: IconName;

  /**
   * The icon to be shown on the left side.
   * @attr icon-left
   * @type {IconName | undefined}
   */
  @property({ type: String, reflect: true, attribute: 'icon-left' })
  public iconLeft?: IconName;

  /**
   * Indicates the button is on a AA compliant background.
   * @attr on-background
   */
  @property({ type: Boolean, reflect: true, attribute: 'on-background' })
  public onBackground = false;

  /**
   * Indicates the button has more padding.
   * @attr large
   */
  @property({ type: Boolean, reflect: true })
  public large = false;

  /**
   * Indicates the aria label to apply to the button.
   * @attr label
   */
  @property({ type: String, reflect: true })
  public label?: string;

  /**
   * Indicates the button's width should match its container.
   * @attr full-width
   */
  @property({ type: Boolean, reflect: true, attribute: 'full-width' })
  public fullWidth = false;

  /**
   * Indicates the name when submitted with form data.
   * @attr name
   */
  @property({ type: String, reflect: true })
  public name?: string;

  /**
   * Indicates the value associated with the name when submitted with form data.
   * @attr value
   */
  @property({ type: String, reflect: true })
  public value?: string;

  @query('#button-element')
  private _button!: HTMLButtonElement | HTMLAnchorElement;

  private _formButton!: HTMLButtonElement;
  private _form!: HTMLFormElement | null;

  constructor() {
    super();
    this._stopClickLeak = this._stopClickLeak.bind(this);
  }

  public static get styles(): CSSResultArray {
    return [designTokens, buttonStyles];
  }

  protected firstUpdated(): void {
    this._formButton = document.createElement('button');
    this._formButton.addEventListener('click', this._stopClickLeak);
    this.addEventListener('click', this._handleClick);
  }

  protected update(changedProperties: PropertyValues): void {
    super.update && super.update(changedProperties);

    if (changedProperties.has('type') && this.type && !TYPES.includes(this.type)) {
      throw new Error(`${this.type} is not a valid type. Valid types are: ${TYPES.join(', ')}`);
    }
    if (changedProperties.has('variant') && this.variant && !VARIANTS.includes(this.variant)) {
      throw new Error(
        `${this.variant} is not a valid variant. Valid variants are: ${VARIANTS.join(', ')}`
      );
    }
  }

  connectedCallback(): void {
    super.connectedCallback && super.connectedCallback();
    this._form = this.closest('form');
  }

  disconnectedCallback(): void {
    super.disconnectedCallback && super.disconnectedCallback();
  }

  private _handleKeyup(event: KeyboardEvent): void {
    switch (event.key) {
      case ' ':
      case 'Spacebar':
        event.preventDefault();
        this._button.click();
        break;
    }
  }

  private _handleClick(): void {
    if ((this.type === 'submit' || this.type === 'reset') && this._form) {
      this._formButton.type = this.type;
      this._form?.appendChild(this._formButton);
      this._formButton.click();
      this._form?.removeChild(this._formButton);
    }
  }

  private _stopClickLeak(event: MouseEvent): void {
    if (event.target === this._formButton) {
      event.stopImmediatePropagation();
    }
  }

  private _renderIcon(direction = ''): TemplateResult | typeof nothing {
    let icon;

    if (direction === 'left') {
      icon = this.iconLeft;
    } else if (direction === 'right') {
      icon = this.iconRight;
    } else {
      icon = this.icon;
    }

    return icon ? html` <pharos-icon name="${icon}"></pharos-icon> ` : nothing;
  }

  protected get buttonContent(): TemplateResult {
    return this.icon
      ? html`${this._renderIcon()}`
      : html`
          ${this._renderIcon('left')}
          <slot></slot>
          ${this._renderIcon('right')}
        `;
  }

  protected render(): TemplateResult {
    return this.href
      ? html`
          <a
            id="button-element"
            role="button"
            download=${ifDefined(this.download)}
            href=${ifDefined(this.href)}
            hreflang=${ifDefined(this.hreflang)}
            ping=${ifDefined(this.ping)}
            rel=${ifDefined(this.rel)}
            target=${ifDefined(this.target)}
            aria-label=${ifDefined(this.label)}
            @keyup=${this._handleKeyup}
          >
            ${this.buttonContent}
          </a>
        `
      : html`
          <button
            id="button-element"
            name="${ifDefined(this.name)}"
            value="${ifDefined(this.value)}"
            ?autofocus=${this.autofocus}
            ?disabled=${this.disabled}
            type="${ifDefined(this.type)}"
            aria-label=${ifDefined(this.label)}
          >
            ${this.buttonContent}
          </button>
        `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pharos-button': PharosButton;
  }
}