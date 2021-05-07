# @ithaka/pharos

## 8.2.1

### Patch Changes

- [#9](https://github.com/ithaka/pharos/pull/9) [`bd2588a`](https://github.com/ithaka/pharos/commit/bd2588a3cf1fb77e68e98a5b6b8c5e2d9f14552b) Thanks [@Niznikr](https://github.com/Niznikr)! - update lit for forward-compatible features:

  - Update dependencies
  - Change `@internalProperty` to `@state`

## 8.2.0

### Minor Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Lint mdx and js files:

  - Add `eslint-plugin-mdx` for linting mdx files
  - Add `eslint-plugin-no-smart-quotes` to find and replace smart quotes
  - Use eslint overrides to explicitly configure settings for each file type
  - Address linting errors

* Thanks [@Niznikr](https://github.com/Niznikr)! - Update images for open source compliance:

  - Replace images on Pharos site and Storybook with compliant ones
  - Update styles to match design

### Patch Changes

- Thanks [@SMQuazi](https://github.com/SMQuazi)! - Add icon documentation to storybook and site

## 8.1.0

### Minor Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Add type styles documentation to storybook and site

* Thanks [@Niznikr](https://github.com/Niznikr)! - Add loading spinner documentation to storybook and site

- Thanks [@Niznikr](https://github.com/Niznikr)! - Add pagination documentation to storybook and site

### Patch Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Remove platform-native styling from buttons

* Thanks [@SMQuazi](https://github.com/SMQuazi)! - Add Tabs documentation to pharos site and storybook

- Thanks [@jialin-he](https://github.com/jialin-he)! - Fix toast when the toast content is very long

* Thanks [@SMQuazi](https://github.com/SMQuazi)! - Add dropdown menu documentation to storybook and site

- Thanks [@Niznikr](https://github.com/Niznikr)! - Fix changeset publish for core package

## 8.0.0

### Major Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Remove deprecated design tokens:

  - Migration guidelines can be found [here](#7200)

### Minor Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Forward Sass modules from a single entrypoint file

### Patch Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Move out functional tests and fonts:

  - Move functional tests to new repo `pharos-functional-tests` and update test job
  - Remove fonts and pull them in from S3
  - Fix site home page hero font and layout

* Thanks [@Niznikr](https://github.com/Niznikr)! - Remove hook from custom boundary tooltip story

- Thanks [@Niznikr](https://github.com/Niznikr)! - Reset sidenav host width for smaller viewports

## 7.25.0

### Minor Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Create Storybook example item detail page:

  - Create an item detail page inspired by latest designs
  - Update the revised header used in the example pages to allow enabling search for every breakpoint
  - Upgrade `husky` to v6

* Thanks [@Niznikr](https://github.com/Niznikr)! - Add input group documentation:

  - Add input group documentation and guidelines
  - Update Gatsby babel config to fix decorator runtime error
  - Remove `margin` and `padding` from `*` selector in site styles to not interfere with slotted component styles

### Patch Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Remove display property from links for proper wrapping:

  - Add `flex` prop to links to enable flexbox when displaying links with an icon

* Thanks [@Niznikr](https://github.com/Niznikr)! - Fix item detail carousels:

  - Update Storybook
  - Fix item detail carousels styles
  - Fix home page input placement

- Thanks [@likwidsage](https://github.com/likwidsage)! - Add Modal to Pharos site and storybook

* Thanks [@Niznikr](https://github.com/Niznikr)! - Ensure single word wraps on overflow in tooltips

## 7.24.0

### Minor Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Add responsive features to sidenav:

  - Add `menu` icon to `pharos-icon` set
  - Add `pharos-sidenav-button` that is only visible when viewport goes below breakpoint 1056px
  - Slide out `pharos-sidenav` when viewport goes below breakpoint 1056px or when its close button is clicked
  - Slide in `pharos-sidenav` when viewport is at least 1056px or when `pharos-sidenav-button` is clicked
  - Update example reports page to include `pharos-sidenav-button`
  - Delegate focus correctly when open/close buttons are clicked

* Thanks [@Niznikr](https://github.com/Niznikr)! - Create Storybook example reports page:

  - Create a reports page inspired by latest designs
  - Keep margin at 56px until 320px breakpoint is reached
  - Remove 1440px from list of breakpoints
  - Update 1024px to 1056px in list of breakpoints
  - Update margins used in the list of breakpoints
  - Add a modal for creating reports and error toasts when the download buttons are clicked
  - Add value prop to `pharos-button` as native buttons support name and value attributes for forms

### Patch Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Keep border for disabled inputs and textareas

* Thanks [@Niznikr](https://github.com/Niznikr)! - Bump chromatic delays:

  - Up the timeouts and snapshot delays for tooltip and dropdown menu stories for consistent results

- Thanks [@Niznikr](https://github.com/Niznikr)! - Update header columns to extend end column

## 7.23.3

### Patch Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Update last dropdown menu item on slot change

* Thanks [@Niznikr](https://github.com/Niznikr)! - Ensure dropdown menus in navs are placed at start

- Thanks [@Niznikr](https://github.com/Niznikr)! - Align header start slot container to end

## 7.23.2

### Patch Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Fix header responsive styles

* Thanks [@Niznikr](https://github.com/Niznikr)! - Wrap dropdown menu navs

## 7.23.1

### Patch Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Update header layout to center for large screens

## 7.23.0

### Minor Changes

- Thanks [@jialin-he](https://github.com/jialin-he)! - Add custom boundary to pharos tooltip

## 7.22.1

### Patch Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Update on changes to children for components without a slot:

  - Create a mixin that uses a `MutationObserver` to react to changes in a component's children and then call `requestUpdate` to re-render the component
  - Use `unsafeHTML(child.outerHTML)` for rendering children as otherwise the list of children is lost after first render with `child` alone
  - Update `pharos-breadcrumb` to utilize slots to ensure event listeners can be used on the passed items

## 7.22.0

### Minor Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Upgrade to Gatsby v3:

  - Update dependencies and verify `develop` and `build` scripts.
  - Import CSS modules as ES modules
  - Preload fonts for Pharos site
  - Use Webpack 5 builder for Storybook
  - Add `addon-backgrounds` to easily evaluate components on dark backgrounds

* Thanks [@likwidsage](https://github.com/likwidsage)! - \* Adds pharos-breadcrumb component which sets the container for the bread crumbs as intend to be the parent to pharos-breadcrumb-item components
  - Adds pharos-breadcrumb-item component which controls the styling and logic for the individual items in the breadcrumb

- Thanks [@Niznikr](https://github.com/Niznikr)! - Create Storybook example home page:

  - Create a home page inspired by latest designs
  - Create a revised header to use in the story
  - Change `contain` value for `pharos-heading` to address cutoff for large headings with prop `no-margin`
  - Fix `pharos-footer` centering for larger viewports
  - Add additional viewports to the story to test a wider range of breakpoints
  - Utilize a grid sass map for sharing layout design decisions between the home page and revised header
  - Use the `minmax` CSS function to add fluidity when transitioning between margins and content widths for each breakpoint range
  - Use a 12 column grid for breakpoints 1584 down to 768
  - Use a 8 column grid for 768 down to 320
  - Use a 4 column grid for 320

### Patch Changes

- Thanks [@likwidsage](https://github.com/likwidsage)! - use pharos-link in breadcrumb and use IDs in story

* Thanks [@Niznikr](https://github.com/Niznikr)! - Fix homepage hero relative path

- Thanks [@likwidsage](https://github.com/likwidsage)! - Remove spacing around breadcrumb component

* Thanks [@Niznikr](https://github.com/Niznikr)! - Add toast documentation

## 7.21.1

### Patch Changes

- Thanks [@daneah](https://github.com/daneah)! - Fix text overflow for dropdown menu descriptions

## 7.21.0

### Minor Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Add toast component:

  - Add `pharos-toaster` which manages `pharos-toast` generation, focusing, and positioning
  - Add `pharos-toast` which uses a cancelable debouncer to manage closing after 6 seconds
  - Open toasts when `pharos-toaster` is present and custom event `pharos-toast-open` is fired on the document
  - Read fields `status` and `content` from the event to generate toasts
  - Add `pharos-toast-button` variant which has modified hover styles

### Patch Changes

- Thanks [@jialin-he](https://github.com/jialin-he)! - Add folder-selected and workspace-selected to pharos icons

## 7.20.0

### Minor Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Conform design tokens:

  - Create new tokens without the word `brand` from color, line height, and spacing tokens
  - Update all styles to use the new tokens
  - Mark `base` and `brand` color, line height, and spacing tokens as deprecated
  - Store deprecated tokens in separate json
  - Ensure token related pages in Storybook and the Pharos site display updated names

  **Migration Guidelines**

  1. Remove `brand` from `pharos-color`, `pharos-line-height`, and `pharos-spacing` tokens:

     | Old Token                      | New Token                |
     | ------------------------------ | ------------------------ |
     | \$pharos-color-brand-jstor-red | \$pharos-color-jstor-red |

  2. Replace legacy `pharos-color-base` and `pharos-line-height-base` tokens with their modern equivalent:

     | Legacy Token                     | Modern Token                |
     | -------------------------------- | --------------------------- |
     | \$pharos-line-height-base-xsmall | \$pharos-line-height-xsmall |

  3. Replace legacy token `pharos-font-color-base` with `pharos-color-text-base`

  _Note: Make sure to update all token types used in your app: `scss`, `css`, and `es6` types_

* Thanks [@eslawski](https://github.com/eslawski)! - Remove border from condensed icon

### Patch Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Fix React button story formatting

* Thanks [@daneah](https://github.com/daneah)! - Fix pagination handling for child elements

## 7.19.0

### Minor Changes

- Thanks [@eslawski](https://github.com/eslawski)! - Enhance pharos-button to have a condensed icon only form

* Thanks [@Niznikr](https://github.com/Niznikr)! - Add sidenav component:

  - Create `SideElement` base class for `pharos-sidenav` and upcoming `pharos-sidebar` components to inherit styles from
  - Add `top` slot to `pharos-sidenav` for content shown above the main body
  - Construct default slot to house `pharos-sidenav-section`, `pharos-sidenav-menu`, and `pharos-sidenav-link` elements
  - Add `pharos-sidenav-section` with properties for adding a heading and/or divider
  - Add `pharos-sidenav-link` which extends `pharos-link` and include an `external` variant
  - Add `pharos-sidenav-menu` that acts as a menu of `pharos-sidenav-link` elements with appropriate accessibility features
  - Add `onBackground` variant for `pharos-text-input`

## 7.18.0

### Minor Changes

- Thanks [@eslawski](https://github.com/eslawski)! - Enhance pharos-dropdown-menu to allow for dynamic triggers and also add some open/close hooks

### Patch Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Instruct to import tokens to implement typography

* Thanks [@Niznikr](https://github.com/Niznikr)! - Add dropdown menu nav documentation in site and storybook

- Thanks [@michael-iden](https://github.com/michael-iden)! - Removes padding on the footer of the pharos modal when the footer has not slotted content

* Thanks [@Niznikr](https://github.com/Niznikr)! - Update to TypeScript 4.2

## 7.17.0

### Minor Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Create Storybook search page to test interoperability between atoms and molecules:

  - Create a search page inspired by latest designs
  - Add stories to `Pages` category to fit atomic design model
  - Use `stories.ts` and `stories.tsx` format to emulate developer experience
  - Add full width prop to buttons

### Patch Changes

- Thanks [@likwidsage](https://github.com/likwidsage)! - Add documentation for progress bar

* Thanks [@Niznikr](https://github.com/Niznikr)! - Fix header integration tests

- Thanks [@Niznikr](https://github.com/Niznikr)! - Show pixel value and remove controls from token stories

## 7.16.0

### Minor Changes

- Thanks [@ymouzakis](https://github.com/ymouzakis)! - This changeset adds search mode to the combobox. Search mode makes the following changes:
  - Search icon instead of chevron icon
  - Disables automatic highlighting
  - Fires change events when selecting from the list of options
  - The drop down will display all options regardless of exact matches.

### Patch Changes

- Thanks [@likwidsage](https://github.com/likwidsage)! - Add token story in StoryBook

## 7.15.0

### Minor Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Throw an error if invalid size is passed to modals

### Patch Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Keep js extension for non-entrypoint dependency imports

## 7.14.0

### Minor Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Add size prop to modals

### Patch Changes

- Thanks [@likwidsage](https://github.com/likwidsage)! - Add Pharos Header documentation in site and storybook

* Thanks [@Niznikr](https://github.com/Niznikr)! - Add chromatic viewports to applicable stories to test for regressions

- Thanks [@Niznikr](https://github.com/Niznikr)! - Update documentation:

  - Add docs on Node/Typescript requirements
  - Add docs on importing design tokens and typography styles
  - Add docs on importing Sass mixins and needed Webpack config

* Thanks [@Niznikr](https://github.com/Niznikr)! - Address error thrown when the footer creates icons

- Thanks [@Niznikr](https://github.com/Niznikr)! - Add slide in/out transition for modals on lower breakpoints

## 7.13.1

### Patch Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Add footer documentation in site and storybook

* Thanks [@michael-iden](https://github.com/michael-iden)! - Removes newlines preceding and following links that cause unintended spaces around the links

## 7.13.0

### Minor Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Update header and dropdown menu components to support a section for the PDS on JSTOR:

  - Add slot `top` to `pharos-header` for a top section on the header
  - Create base class `OverlayElement` for tooltips and dropdown menus to extend from
  - Update `pharos-dropdown-menus` to support menus with no items
  - Fix `pharos-dropdown-menus` screen reader experience by wrapping `ul` element with the focus trap
  - Implement responsive design

### Patch Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Center modals without CSS transform to fix Popper placements:

  - Center modals with flexbox and remove problematic styles
  - Verify in Chrome, Firefox, Safari, and IE11

## 7.12.0

### Minor Changes

- Thanks [@rehanabbasi](https://github.com/rehanabbasi)! - Create pagination component

* Thanks [@Niznikr](https://github.com/Niznikr)! - Do not close modals when overlay is clicked

### Patch Changes

- Thanks [@kelseytrabue](https://github.com/kelseytrabue)! - Button documentation, tooltip asset fixes:
  Added documentation for how buttons should be used along with its variants.
  Also changed the location of the tooltip component guidelines assets for better organization.

## 7.11.0

### Minor Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Add header component:

  - Add slots for sections of the header: `start`, `center`, `end`
  - Fix bugs in `pharos-dropdown-menu-nav` pertaining to opening/closing its menus
  - Verify in IE11
  - Add `bold` prop to `pharos-link`
  - Fix `pharos-input-group` focus/blur padding

### Patch Changes

- Thanks [@ymouzakis](https://github.com/ymouzakis)! - Add autocomplete attribute to pharos text input

* Thanks [@Niznikr](https://github.com/Niznikr)! - Update dependencies

- Thanks [@Niznikr](https://github.com/Niznikr)! - Fix autocomplete type error

## 7.10.0

### Minor Changes

- Thanks [@likwidsage](https://github.com/likwidsage)! - Add new icon to pharos-icon
  - Update pharos homepage styles

* Thanks [@Niznikr](https://github.com/Niznikr)! - Show Pharos version in Storybook

- Thanks [@Niznikr](https://github.com/Niznikr)! - Add footer component:

  - Add slots for various parts of the footer (many of which expect a list of links to display)
  - Implement layout and responsive design using CSS grid
  - Verify in IE11
  - Add Google icon
  - Add external styles to customize translate widget
  - Use a `MutationObserver` to update translate widget icons when rendered

### Patch Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Update WTR and config to handle modules resolved outside the root directory

* Thanks [@likwidsage](https://github.com/likwidsage)! - Add token for font type scale 14
  - Update pharos homepage

## 7.9.2

### Patch Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Fix tooltip and dropdown Chromatic false positives

* Thanks [@Niznikr](https://github.com/Niznikr)! - Update wtr and playwright launcher to run tests against latest browser versions

- Thanks [@daneah](https://github.com/daneah)! - Use forked version of @a11y/focus-trap to prevent duplicate component registration errors

## 7.9.1

### Patch Changes

- Thanks [@jialin-he](https://github.com/jialin-he)! - stop propagation of key events from tab-panel to allow white space to be entered in input inside a tab-panel

## 7.9.0

### Minor Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Add link documentation

### Patch Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Enable implicit form submission with Pharos buttons

## 7.8.0

### Minor Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Add content-label mixin

### Patch Changes

- Thanks [@eslawski](https://github.com/eslawski)! - Refactor the implementation of tab panel scrolling to give more flexibility to the consumer.

* Thanks [@Niznikr](https://github.com/Niznikr)! - Remove unused types

## 7.7.1

### Patch Changes

- Thanks [@eslawski](https://github.com/eslawski)! - Automatically overflow tab panel contents to prevent scrollbars from appearing erroneously

## 7.7.0

### Minor Changes

- Thanks [@likwidsage](https://github.com/likwidsage)! - \* Add `pharos-dropdown-menu-nav` component
  - Add `pharos-dropdown-menu-nav-link` component, which extends `pharos-link`
  - Modify `pharos-dropdown-menu` component to account for `pharos-dropdown-menu-nav` logic

### Patch Changes

- Thanks [@eslawski](https://github.com/eslawski)! - Prevents pharos-tab-panels from getting focus if they contain focusable elements.
  - Added some styling tweaks to support scrollable content in pharos-tab-panels.

## 7.6.0

### Minor Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Add input group component:

  - Add `pharos-input-group` component which extends the `pharos-text-input` component
  - Add default slot to support appended elements such as icons, buttons, and selects
  - Add `prepend` slot to support prepended elements
  - Update input padding based off items within the input group
  - Add `pharos-input-group-select` variant component

* Thanks [@Niznikr](https://github.com/Niznikr)! - Upgrade to React 17:

  - Update dependencies
  - Follow guide to configure Storybook and Gatsby to use new JSX transform
  - Verify Storybook and Gatsby develop/build commands
  - Verify React components work as intended on JSTOR

### Patch Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Move input group to form elements section in Storybook

* Thanks [@Niznikr](https://github.com/Niznikr)! - Add names to input group stories

## 7.5.1

### Patch Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Prevent click from firing from disabled elements

## 7.5.0

### Minor Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Add laptop icon

## 7.4.1

### Patch Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Fix submit and reset buttons within forms:

  - For buttons with type `submit` and `reset` in a form, on click attach a button element of the same type and click it for the desired effect on the form, and then detach it
  - Prevent the click on the helper button to propagate
  - Add method `_handleFormReset` to the form mixin and implement the reset logic for each form element
  - Add submit and reset buttons within a form story

* Thanks [@Niznikr](https://github.com/Niznikr)! - Update select CSS containment value

## 7.4.0

### Minor Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Add calendar and close-inverse icons

### Patch Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Support ref on React components:

  - Use `forwardRef` and `useImperativeHandle` to support ref on our React components
  - Ensure passing `tabIndex` is applied correctly

## 7.3.1

### Patch Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Remove CSS containment from combobox

* Thanks [@Niznikr](https://github.com/Niznikr)! - Fix space key handler in IE11 for tabs

- Thanks [@Niznikr](https://github.com/Niznikr)! - Fix optional string literal type prop definitions

## 7.3.0

### Minor Changes

- Thanks [@michael-iden](https://github.com/michael-iden)! - Add `pharos-tabs` component:

  - Add tabs component to take in the clickable tab elements and tab panels
  - Add functionality to change the visible panel when the tab is clicked
  - Ensure proper accessibility for tabs, and the panel it controls

### Patch Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Update TypeScript to 4.1

* Thanks [@Niznikr](https://github.com/Niznikr)! - Update WTR for improved coverage reports

## 7.2.0

### Minor Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Add additional icons:

  - Add `attachment` and `copy` icons

## 7.1.0

### Minor Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Add additional icons:

  - Add `book`, `collapse`, `expand`, `google-color`, and `question-inverse` icons

### Patch Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Add names to radio state story

* Thanks [@Niznikr](https://github.com/Niznikr)! - Update version of WTR Playwright which fixes the concurrency focus issues with Firefox

## 7.0.0

### Major Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Add `pharos-button` component:

  - Create button with `primary`, `secondary`, and `subtle` variants
  - Add `large`, `on-background`, `icon`, `icon-right`, and `icon-left` properties to further customize buttons
  - Remove `variant` property from links and instead allow buttons to be rendered as links with the `href` prop to allow for all design variations
  - Create `AnchorElement` base class for links and buttons to inherit anchor properties
  - Create string literal type for icon names
  - Update existing stories to use Pharos buttons
  - Update `combobox` and `modal` components to use `button` component

* Thanks [@Niznikr](https://github.com/Niznikr)! - Update icons in Pharos:

  - Remove `add-link`, `checkmark-large`, `close-inverse`, `external-link`, `external-link-arrow`, `gallery`, `list`, `magnifying-glass`, `new-folder`, `x` icons
  - Add `chevron-left-large`, `chevron-right-large`, `edit`, `email`, `facebook`, `fit-to-view`, `folder-new`, `fullscreen-minimize`, `fullscreen`, `instagram`, `link-add`, `link-external`, `linkedin`, `tumblr`, `twitter`, `view-grid`, `youtube`, `zoom-in`, `zoom-out` icons
  - Update existing icons
  - Add icon stories to show all possible icons and gain insight into regressions
  - Move component status page icons to `site` package as they should not be delivered as part of `core`
  - Update checkbox component to pull in icons for `checked` and `indeterminate` state
  - Update icon component to set dimensions to 16x16 for small icons (end with `-small`)

### Minor Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Add typography stories to Storybook:

  - Add typography stories
  - Add styles for lists

* Thanks [@Niznikr](https://github.com/Niznikr)! - Add component status page to Pharos site:

  - Add new icons for statuses
  - Create legend and status `json` files to indicate current status
  - Create component status page

- Thanks [@Niznikr](https://github.com/Niznikr)! - Add `pharos-link` component:

  - Add link component with `primary`, `subtle`, and `on background` states
  - Add `primary-button` and `secondary-button` variants
  - Style links appropriately when in a non-error alert
  - Create Sass mixins for links and buttons to reuse for variants
  - Ensure focus outline is consistent for links that span multiple lines across all browsers

* Thanks [@Niznikr](https://github.com/Niznikr)! - Use CSS containment for better visual isolation and performance:

  - Apply `contain: content` and `contain: strict` where possible for self-contained components
  - Ensure each component's `:host` is styled correctly to best support `contain`
  - Apply `contain: layout` for components whose styles/children go outside its boundary

- Thanks [@seanggani](https://github.com/seanggani)! - Add progress bar component

### Patch Changes

- Thanks [@likwidsage](https://github.com/likwidsage)! - Update README to include link to adoption governance model

* Thanks [@Niznikr](https://github.com/Niznikr)! - Fix disabled icon button padding on hover

- Thanks [@Niznikr](https://github.com/Niznikr)! - Add Sweden copyright statement to fonts file

## 6.0.0

### Major Changes

- Thanks [@daneah](https://github.com/daneah)! - Use tokens created in #267 to style Pharos components, add a few SCSS utilities where needed. Also update the Heading component to reflect the latest decisions from the Brand team on usage, leading to an API change:

  - Remove `expressive` and `size` properties
  - Add new `preset` property to indicate to Heading which visual display to use—these can be chosen quickly by designers and specified quickly in code to achieve the desired display.

### Minor Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Create typography tokens:

  - Create body font-family alias token
  - Create body font size alias tokens
  - Create brand line-height tokens
  - Create letter-spacing Sass mixins and deliver Sass utils as part of core package

* Thanks [@likwidsage](https://github.com/likwidsage)! - Add more icons to `pharos-icon` and update iconography & imagery pages

- Thanks [@Niznikr](https://github.com/Niznikr)! - Deliver fonts from Pharos:

  - Generate font-face definitions from tokens
  - Include assets with delivered package
  - Create font-family tokens with fallbacks
  - Pharos site uses fonts from core package

* Thanks [@Niznikr](https://github.com/Niznikr)! - Deliver typography styles from a separate file:

  - Move typography styles from `fonts.css` to `typography.scss` and deliver them as part of the package
  - Set base font size to 100% to allow browser configured font sizing to apply for better accessibility

- Thanks [@Niznikr](https://github.com/Niznikr)! - Add heading legend preset

### Patch Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Update WTR for improved speed

* Thanks [@Niznikr](https://github.com/Niznikr)! - Update checkbox name in story

- Thanks [@likwidsage](https://github.com/likwidsage)! - \* Update 3 inverse icons' sizing for pharos icons
  - Update exclamation and cite icons for new styles

* Thanks [@Niznikr](https://github.com/Niznikr)! - Update heading preset styles:

  - Change preset 1 `line-height` value
  - Add `th` styles to `typography.scss`

- Thanks [@Niznikr](https://github.com/Niznikr)! - Update dependencies

* Thanks [@Niznikr](https://github.com/Niznikr)! - Update dependencies:

  - Update PostCSS to v8 and tools that use it as a dependency

- Thanks [@Niznikr](https://github.com/Niznikr)! - Update tooltip and dropdown menu default position to fixed

* Thanks [@Niznikr](https://github.com/Niznikr)! - Address accessibility issues found by axe-core 4:

  - Remove `aria-required` from the checkbox-group fieldset as this is not a valid use of the attribute
  - Add role `radiogroup` to the radio-group fieldset in order to allow use of `aria-required`

- Thanks [@Niznikr](https://github.com/Niznikr)! - Update WTR config:

  - Bump up coverage thresholds
  - Move reduced concurrency to the browser that needs it as WTR now allows per browser configuration

## 5.0.0

### Major Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Rework tooltips for better accessibility

  Previous API:

  ```
  <pharos-tooltip>
    <button slot="target">I am a button</button>
    <span slot"content">Hi there!</span>
  </pharos-tooltip>
  ```

  New API:

  ```
  <button data-tooltip-id="my-tooltip">I am a button</button>
  <pharos-tooltip id="my-tooltip">Hi there!</pharos-tooltip>
  ```

* Thanks [@likwidsage](https://github.com/likwidsage)! - \* Update brand color page on site.
  - Update color tokens.
  - Update spinner tokens to reflect changes in color tokens.

- Thanks [@Niznikr](https://github.com/Niznikr)! - Update color alias tokens:

  - Add several new categories of color
  - Remove `primary` token
  - Move some colors out of `brand` into `feedback` category

* Thanks [@Niznikr](https://github.com/Niznikr)! - Provide design tokens in es6 format:

  - Rename js object design tokens to `tokens.js`
  - Add es6 design tokens as `variables.js`

- Thanks [@Niznikr](https://github.com/Niznikr)! - Update components to use new brand color tokens:

  - Update component colors based off design
  - Remove irrelevant component tokens
  - Update radio and checkbox SVG sizing to match design
  - Update gulp sass task to use sass as the compiler instead of node-sass to take advantage of sass modules for shared form element mixins

### Minor Changes

- Thanks [@daneah](https://github.com/daneah)! - Update alert styles for consistency with new brand

  - Alert text is now Marble Grey 20 (`pharos-color-text-20`) or White (`pharos-color-text-white`) for error alerts
  - Alert links are now black (`pharos-color-interactive-seondary`) or White (`pharos-color-text-white`) for error alerts
  - Alert links now remove their underline on hover
  - Info alert backgrounds are now Glacier Blue 80

* Thanks [@Niznikr](https://github.com/Niznikr)! - Add `<pharos-dropdown-menu>` component

### Patch Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Toggle combobox list on input click

* Thanks [@Niznikr](https://github.com/Niznikr)! - Use @open-wc/dedupe-mixin util for managing mixins

- Thanks [@Niznikr](https://github.com/Niznikr)! - Apply styles and classes in React wrapper

* Thanks [@Niznikr](https://github.com/Niznikr)! - Set core package type to module to load as ES modules

- Thanks [@Niznikr](https://github.com/Niznikr)! - Add experimental module flag to token and gulp scripts

* Thanks [@Niznikr](https://github.com/Niznikr)! - Set readonly props as optional in React wrapper

- Thanks [@Niznikr](https://github.com/Niznikr)! - Allow standard HTML and React attributes in React wrapper

* Thanks [@Niznikr](https://github.com/Niznikr)! - Move sass modules to utils to avoid redundant style import

- Thanks [@Niznikr](https://github.com/Niznikr)! - Convert Pharos site package to TypeScript

* Thanks [@Niznikr](https://github.com/Niznikr)! - Add additional alias tokens

- Thanks [@Niznikr](https://github.com/Niznikr)! - Add optional props and custom events to React wrapper interface

## 4.3.2

### Patch Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Make radio and checkbox inputs locatable for Watir

* Thanks [@Niznikr](https://github.com/Niznikr)! - Update to TypeScript 4

- Thanks [@Niznikr](https://github.com/Niznikr)! - Update lit-html with resolutions

* Thanks [@Niznikr](https://github.com/Niznikr)! - Add explicit keyframe for rotation of loading spinner

## 4.3.1

### Patch Changes

- Thanks [@daneah](https://github.com/daneah)! - Fix decorator for safe custom element definition

## 4.3.0

### Minor Changes

- Thanks [@Niznikr](https://github.com/Niznikr)! - Add `<pharos-modal>` component

* Thanks [@Niznikr](https://github.com/Niznikr)! - Add prop interface for React components

### Patch Changes

- Thanks [@daneah](https://github.com/daneah)! - Pharos components will now warn instead of raising an exception upon duplicate definition

* Thanks [@Niznikr](https://github.com/Niznikr)! - Add .js extension to imports in built package files

## 4.2.0

### Minor Changes

- Add dark variant and hover style for checkboxes
- Add an indeterminate state for checkboxes
- Add icons to pharos-icons and update site navigation

### Patch Changes

- Fix placeholder styling for text-input and textarea
- Upgrade to Storybook 6

## 4.1.0

### Minor Changes

- Add `<pharos-loading-spinner>` component

### Patch Changes

- Fix multiple bindings to handleFormdata
- Replace Lerna with Yarn and Changesets