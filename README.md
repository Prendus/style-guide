# Prendus Style Guide

### [Styling examples](https://prendus.github.io/style-guide/)

This style guide will be used to help guide the design of the [Prendus](https://prendus.com/) site.  We strive to be consistent, simple, and elegant.

**Please follow this style guide whenever possible** (it's usually possible).  Even if you disagree with the design, consistency is paramount to brand identity.  Refrain from adding custom CSS to change more than layout.  Sizes, colors, borders, padding, etc. should remain consistent across the site.

If styling for a certain element or feature is not mentioned here, follow [Google Material Design](https://material.google.com/) principles.  However, **if there is a conflict between Material Design and this guide, follow this guide.**

If you wish to contribute to the style guide, make a pull request and/or contact the styling lead (currently @intcreator).

## Including global styles

The Prendus CSS files are found in [intcreator/prendus-styles](https://github.com/intcreator/prendus-styles).  Include the component by running the following command in the same directory as bower.json:

```
$ bower install --save intcreator/prendus-styles
```

Import the component as needed with HTML imports.  If you're including styles on a static HTML page, you will have a `style` declaration that looks similar to this:

```html
<style is="custom-style" include="prendus-styles">

	/* styles */

</style>
```

If you're including styles in a Polymer element, you will have a `style` declaration that looks similar to this:

```html
<style include="prendus-styles">

	/* styles */

</style>
```

## Layout

Design all pages taking into consideration desktop and mobile usage.  Do not design for one before the other—design for both at the same time.

Before coding, make sketches of the basic layout (less than five minutes each) and show them to team members if not random people who match the site's audience to make sure the layouts make sense.

### Breakpoints

Prendus has the following breakpoints:

| Small Mobile | Mobile | Tablet | Desktop |
| --- | --- | --- | --- |
| < 500px | >= 500px | >= 768px | >= 992px |

Try to use as few explicit breakpoints as possible.  Instead of using media queries (`@media`), use `max-width` or other more automatic layout CSS.

## Colors

Some colors are given variable names such as `--prendus-primary-color`.  Refer to these colors as `var(--prendus-primary-color)` as in the following example:

```css
background-color: var(--prendus-primary-color);
```

### Color Variables

- **Prendus Primary Color (`--prendus-primary-color`)**: For logos, headers, and primary actions buttons.  Use to make clear the primary identity of Prendus.
- **Prendus Primary Color Emphasis (`--prendus-primary-color-emphasis`)**: For accents and places where a color change on hover is needed (such as on buttons).
- **Prendus Primary Color Light (`--prendus-primary-color-light`)**: For light backgrounds that could use a touch of color (such as tabs).
- **Prendus Off White (`--prendus-off-white`)**: For backgrounds that should light, but not plain white (such as cards, menus, highlights, etc.).
- **Prendus Grey (`--prendus-grey`)**: For outlines, dividers, and secondary buttons.
- **Prendus Red (`--prendus-red`)**: For drawing attention, announcing critical errors, and warning about destructive actions.

## Buttons

Prendus buttons should be either `<a>` or `<button>` tags.  Get a second opinion before using another tag as a button.  The default anchor and button tags provide usability features that are not present on other tags.

Prendus buttons are stylized by adding the appropriate classes as follows:

### Generic buttons

| Button type | Description | Class to add |
| :-- | :-- | :-- |
| Default | The base button class | `prendus-button` |
| Recommended | Used to recommend actions to the user | `prendus-button--recommended` |
| Minor | Used for closing dialogs or other small actions | `prendus-button--minor` |
| Destructive | Used to warn users that the action triggered by the button cannot be undone | `prendus-button--destructive` |
| Big | Used sparingly in calls to action (such as on the home page) | `prendus-button--big` |

### Link buttons

Link buttons are `<button>` elements that need to look like default `<a>` elements.  This is useful if you need to include button functionality inline in a body of text.  However, usually a generic button placed somewhere else will work better.

To create a link button, add the `prendus-link-button` class.

### Icon buttons

Icon buttons are primarily `<paper-icon-button>` elements that need to respond when the user hovers over them.  Avoid using `<iron-icon>` for button functionality (however, you can use `<iron-icon>` inside of `<a>` tags).

To create an icon button, add the `prendus-icon-button` class.

### How to use

If you are using a specific type of button (like a recommended action button) you need to include the base class (`prendus-button`) in addition to the specific class.  For example:

```html
<button class="prendus-button prendus-button--recommended">Sign up</button>
```
