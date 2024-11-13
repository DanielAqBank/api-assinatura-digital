/*! For license information please see form-c0816ad58b7377bcb1e6.js.LICENSE.txt */
(() => {
    "use strict";
    var e,
        t,
        n = {
            518: (e, t, n) => {
                n.d(t, { A: () => p });
                var i = n(601),
                    a = n.n(i),
                    r = n(314),
                    o = n.n(r),
                    s = n(417),
                    l = n.n(s),
                    d = new URL(n(876), n.b),
                    c = o()(a()),
                    u = l()(d);
                c.push([
                    e.id,
                    '/*\n! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n5. Use the user\'s configured `sans` font-feature-settings by default.\n6. Use the user\'s configured `sans` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */ /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n:root,\n[data-theme] {\n  background-color: hsl(var(--b1) / var(--tw-bg-opacity, 1));\n  color: hsl(var(--bc) / var(--tw-text-opacity, 1));\n}\n\nhtml {\n  -webkit-tap-highlight-color: transparent;\n}\n\n:root {\n  color-scheme: light;\n  --pf: 345 7% 82%;\n  --sf: 338 71% 71%;\n  --af: 39 84% 51%;\n  --nf: 280 46% 7%;\n  --in: 198 93% 60%;\n  --su: 158 64% 52%;\n  --wa: 43 96% 56%;\n  --er: 0 91% 71%;\n  --pc: 345 1% 17%;\n  --sc: 340 15% 16%;\n  --ac: 37 41% 13%;\n  --nc: 283 9% 81%;\n  --inc: 198 100% 12%;\n  --suc: 158 100% 10%;\n  --wac: 43 100% 11%;\n  --erc: 0 100% 14%;\n  --rounded-box: 16px;\n  --rounded-badge: 30.4px;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --p: 345 7% 89%;\n  --s: 338 71% 78%;\n  --a: 39 84% 58%;\n  --n: 280 46% 14%;\n  --b1: 24 33% 97%;\n  --b2: 27 22% 92%;\n  --b3: 23 14% 89%;\n  --bc: 280 46% 14%;\n  --rounded-btn: 30.4px;\n  --tab-border: 2px;\n  --tab-radius: 8px;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}.container {\n  width: 100%;\n}@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}.alert {\n  display: grid;\n  width: 100%;\n  grid-auto-flow: row;\n  align-content: flex-start;\n  align-items: center;\n  justify-items: center;\n  gap: 16px;\n  text-align: center;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--b2) / var(--tw-border-opacity));\n  padding: 16px;\n  --tw-text-opacity: 1;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n  border-radius: var(--rounded-box, 1rem);\n  --alert-bg: hsl(var(--b2));\n  --alert-bg-mix: hsl(var(--b1));\n  background-color: var(--alert-bg);\n}@media (min-width: 640px) {\n\n  .alert {\n    grid-auto-flow: column;\n    grid-template-columns: auto minmax(auto,1fr);\n    justify-items: start;\n    text-align: left;\n  }\n}.avatar.placeholder > div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}@media (hover:hover) {\n\n  .label a:hover {\n    --tw-text-opacity: 1;\n    color: hsl(var(--bc) / var(--tw-text-opacity));\n  }\n}.btn {\n  display: inline-flex;\n  flex-shrink: 0;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  border-color: transparent;\n  border-color: hsl(var(--b2) / var(--tw-border-opacity));\n  text-align: center;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  transition-duration: 200ms;\n  border-radius: var(--rounded-btn, 0.5rem);\n  height: 48px;\n  padding-left: 16px;\n  padding-right: 16px;\n  min-height: 48px;\n  font-size: 14px;\n  line-height: 1em;\n  gap: 8px;\n  font-weight: 600;\n  text-decoration-line: none;\n  border-width: var(--border-btn, 1px);\n  animation: button-pop var(--animation-btn, 0.25s) ease-out;\n  text-transform: var(--btn-text-case, uppercase);\n  --tw-border-opacity: 1;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b2) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n  outline-color: hsl(var(--bc) / 1);\n}.btn-disabled,\n  .btn[disabled],\n  .btn:disabled {\n  pointer-events: none;\n}.btn-circle {\n  height: 48px;\n  width: 48px;\n  border-radius: 9999px;\n  padding: 0px;\n}.btn-group > input[type="radio"].btn {\n  -webkit-appearance: none;\n          appearance: none;\n}.btn-group > input[type="radio"].btn:before {\n  content: attr(data-title);\n}.btn:is(input[type="checkbox"]),\n.btn:is(input[type="radio"]) {\n  width: auto;\n  -webkit-appearance: none;\n          appearance: none;\n}.btn:is(input[type="checkbox"]):after,\n.btn:is(input[type="radio"]):after {\n  --tw-content: attr(aria-label);\n  content: var(--tw-content);\n}.checkbox {\n  flex-shrink: 0;\n  --chkbg: var(--bc);\n  --chkfg: var(--b1);\n  height: 24px;\n  width: 24px;\n  cursor: pointer;\n  -webkit-appearance: none;\n          appearance: none;\n  border-width: 1px;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n  --tw-border-opacity: 0.2;\n  border-radius: var(--rounded-btn, 0.5rem);\n}@media (hover: hover) {\n\n  .btm-nav > *.disabled:hover,\n      .btm-nav > *[disabled]:hover {\n    pointer-events: none;\n    --tw-border-opacity: 0;\n    background-color: #01ffcd;\n    --tw-bg-opacity: 0.1;\n    color: hsl(var(--bc) / var(--tw-text-opacity));\n    --tw-text-opacity: 0.2;\n  }\n\n  .btn:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--b3) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--b3) / var(--tw-bg-opacity));\n  }\n\n  .btn-neutral:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--nf) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: #00A686;\n  }\n\n  .btn.glass:hover {\n    --glass-opacity: 25%;\n    --glass-border-opacity: 15%;\n  }\n\n  .btn-ghost:hover {\n    --tw-border-opacity: 0;\n    background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n    --tw-bg-opacity: 0.2;\n  }\n\n  .btn-outline:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--bc) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--b1) / var(--tw-text-opacity));\n  }\n\n  .btn-outline.btn-primary:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--pf) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--pf) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--pc) / var(--tw-text-opacity));\n  }\n\n  .btn-outline.btn-secondary:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--sf) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--sf) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--sc) / var(--tw-text-opacity));\n  }\n\n  .btn-outline.btn-accent:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--af) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--af) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--ac) / var(--tw-text-opacity));\n  }\n\n  .btn-outline.btn-success:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--su) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--su) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--suc) / var(--tw-text-opacity));\n  }\n\n  .btn-outline.btn-info:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--in) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--in) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--inc) / var(--tw-text-opacity));\n  }\n\n  .btn-outline.btn-warning:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--wa) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--wa) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--wac) / var(--tw-text-opacity));\n  }\n\n  .btn-outline.btn-error:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--er) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--er) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--erc) / var(--tw-text-opacity));\n  }\n\n  .btn-disabled:hover,\n    .btn[disabled]:hover,\n    .btn:disabled:hover {\n    --tw-border-opacity: 0;\n    background-color: #01ffcd;\n    --tw-bg-opacity: 0.2;\n    color: hsl(var(--bc) / var(--tw-text-opacity));\n    --tw-text-opacity: 0.2;\n  }\n\n  .btn:is(input[type="checkbox"]:checked):hover, .btn:is(input[type="radio"]:checked):hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--pf) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--pf) / var(--tw-bg-opacity));\n  }\n\n  :where(.menu li:not(.menu-title):not(.disabled) > *:not(ul):not(details):not(.menu-title)):not(.active):hover, :where(.menu li:not(.menu-title):not(.disabled) > details > summary:not(.menu-title)):not(.active):hover {\n    cursor: pointer;\n    background-color: hsl(var(--bc) / 0.1);\n    --tw-text-opacity: 1;\n    color: hsl(var(--bc) / var(--tw-text-opacity));\n    outline: 2px solid transparent;\n    outline-offset: 2px;\n  }\n}.form-control {\n  display: flex;\n  flex-direction: column;\n}.label {\n  display: flex;\n  -webkit-user-select: none;\n          user-select: none;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 4px;\n  padding-right: 4px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}.input {\n  flex-shrink: 1;\n  height: 48px;\n  padding-left: 16px;\n  padding-right: 16px;\n  font-size: 16px;\n  line-height: 2;\n  line-height: 24px;\n  border-width: 1px;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n  --tw-border-opacity: 0;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b1) / var(--tw-bg-opacity));\n  border-radius: var(--rounded-btn, 0.5rem);\n}.input-group > .input {\n  isolation: isolate;\n}.input-group > *,\n  .input-group > .input,\n  .input-group > .textarea,\n  .input-group > .select {\n  border-radius: 0px;\n}.join {\n  display: inline-flex;\n  align-items: stretch;\n  border-radius: var(--rounded-btn, 0.5rem);\n}.join :where(.join-item) {\n  border-start-end-radius: 0;\n  border-end-end-radius: 0;\n  border-end-start-radius: 0;\n  border-start-start-radius: 0;\n}.join .join-item:not(:first-child):not(:last-child),\n  .join *:not(:first-child):not(:last-child) .join-item {\n  border-start-end-radius: 0;\n  border-end-end-radius: 0;\n  border-end-start-radius: 0;\n  border-start-start-radius: 0;\n}.join .join-item:first-child:not(:last-child),\n  .join *:first-child:not(:last-child) .join-item {\n  border-start-end-radius: 0;\n  border-end-end-radius: 0;\n}.join .dropdown .join-item:first-child:not(:last-child),\n  .join *:first-child:not(:last-child) .dropdown .join-item {\n  border-start-end-radius: inherit;\n  border-end-end-radius: inherit;\n}.join :where(.join-item:first-child:not(:last-child)),\n  .join :where(*:first-child:not(:last-child) .join-item) {\n  border-end-start-radius: inherit;\n  border-start-start-radius: inherit;\n}.join .join-item:last-child:not(:first-child),\n  .join *:last-child:not(:first-child) .join-item {\n  border-end-start-radius: 0;\n  border-start-start-radius: 0;\n}.join :where(.join-item:last-child:not(:first-child)),\n  .join :where(*:last-child:not(:first-child) .join-item) {\n  border-start-end-radius: inherit;\n  border-end-end-radius: inherit;\n}@supports not selector(:has(*)) {\n\n  :where(.join *) {\n    border-radius: inherit;\n  }\n}@supports selector(:has(*)) {\n\n  :where(.join *:has(.join-item)) {\n    border-radius: inherit;\n  }\n}.link {\n  cursor: pointer;\n  text-decoration-line: underline;\n}.menu li.disabled {\n  cursor: not-allowed;\n  -webkit-user-select: none;\n          user-select: none;\n  color: hsl(var(--bc) / 0.3);\n}.modal {\n  pointer-events: none;\n  position: fixed;\n  inset: 0px;\n  margin: 0px;\n  display: grid;\n  height: 100%;\n  max-height: none;\n  width: 100%;\n  max-width: none;\n  justify-items: center;\n  padding: 0px;\n  opacity: 0;\n  overscroll-behavior: contain;\n  z-index: 999;\n  background-color: transparent;\n  color: inherit;\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  transition-property: transform, opacity, visibility;\n  overflow-y: hidden;\n}:where(.modal) {\n  align-items: center;\n}.modal-box {\n  max-height: calc(100vh - 5em);\n  grid-column-start: 1;\n  grid-row-start: 1;\n  width: 91.666667%;\n  max-width: 512px;\n  --tw-scale-x: .9;\n  --tw-scale-y: .9;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b1) / var(--tw-bg-opacity));\n  padding: 24px;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  transition-duration: 200ms;\n  border-top-left-radius: var(--rounded-box, 1rem);\n  border-top-right-radius: var(--rounded-box, 1rem);\n  border-bottom-left-radius: var(--rounded-box, 1rem);\n  border-bottom-right-radius: var(--rounded-box, 1rem);\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n}.modal-open,\n.modal:target,\n.modal-toggle:checked + .modal,\n.modal[open] {\n  pointer-events: auto;\n  visibility: visible;\n  opacity: 1;\n}:root:has(:is(.modal-open, .modal:target, .modal-toggle:checked + .modal, .modal[open])) {\n  overflow: hidden;\n}.radio {\n  flex-shrink: 0;\n  --chkbg: var(--bc);\n  height: 24px;\n  width: 24px;\n  cursor: pointer;\n  -webkit-appearance: none;\n          appearance: none;\n  border-radius: 9999px;\n  border-width: 1px;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n  --tw-border-opacity: 0.2;\n}.select {\n  display: inline-flex;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  -webkit-appearance: none;\n          appearance: none;\n  height: 48px;\n  padding-left: 16px;\n  padding-right: 40px;\n  font-size: 14px;\n  line-height: 20px;\n  line-height: 2;\n  min-height: 48px;\n  border-width: 1px;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n  --tw-border-opacity: 0;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b1) / var(--tw-bg-opacity));\n  border-radius: var(--rounded-btn, 0.5rem);\n  background-image: linear-gradient(45deg, transparent 50%, currentColor 50%),\n    linear-gradient(135deg, currentColor 50%, transparent 50%);\n  background-position: calc(100% - 20px) calc(1px + 50%),\n    calc(100% - 16.1px) calc(1px + 50%);\n  background-size: 4px 4px,\n    4px 4px;\n  background-repeat: no-repeat;\n}.select[multiple] {\n  height: auto;\n}.steps {\n  display: inline-grid;\n  grid-auto-flow: column;\n  overflow: hidden;\n  overflow-x: auto;\n  counter-reset: step;\n  grid-auto-columns: 1fr;\n}.steps .step {\n  display: grid;\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n  grid-template-columns: auto;\n  grid-template-rows: repeat(2, minmax(0, 1fr));\n  grid-template-rows: 40px 1fr;\n  place-items: center;\n  text-align: center;\n  min-width: 64px;\n}.textarea {\n  flex-shrink: 1;\n  min-height: 48px;\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  font-size: 14px;\n  line-height: 20px;\n  line-height: 2;\n  border-width: 1px;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n  --tw-border-opacity: 0;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b1) / var(--tw-bg-opacity));\n  border-radius: var(--rounded-btn, 0.5rem);\n}.btm-nav > *.disabled,\n    .btm-nav > *[disabled] {\n  pointer-events: none;\n  --tw-border-opacity: 0;\n  background-color: #01ffcd;\n  --tw-bg-opacity: 0.1;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n  --tw-text-opacity: 0.2;\n}.btm-nav > * .label {\n  font-size: 16px;\n  line-height: 24px;\n}.btn:active:hover,\n  .btn:active:focus {\n  animation: button-pop 0s ease-out;\n  transform: scale(var(--btn-focus-scale, 0.97));\n}.btn:focus-visible {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n}.btn-neutral {\n  --tw-border-opacity: 1;\n  #01ffcd;\n  --tw-bg-opacity: 1;\n  background-color: #01ffcd;\n  --tw-text-opacity: 1;\n  color: hsl(var(--nc) / var(--tw-text-opacity));\n  outline-color: hsl(var(--n) / 1);\n}.btn-neutral.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--nf) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: #00A686;\n}.btn.glass {\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  outline-color: currentColor;\n}.btn.glass.btn-active {\n  --glass-opacity: 25%;\n  --glass-border-opacity: 15%;\n}.btn-ghost {\n  border-width: 1px;\n  border-color: transparent;\n  background-color: transparent;\n  color: currentColor;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  outline-color: currentColor;\n}.btn-ghost.btn-active {\n  --tw-border-opacity: 0;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n  --tw-bg-opacity: 0.2;\n}.btn-outline {\n  border-color: currentColor;\n  background-color: transparent;\n  --tw-text-opacity: 1;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}.btn-outline.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--b1) / var(--tw-text-opacity));\n}.btn-outline.btn-primary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--p) / var(--tw-text-opacity));\n}.btn-outline.btn-primary.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--pf) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--pf) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--pc) / var(--tw-text-opacity));\n}.btn-outline.btn-secondary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--s) / var(--tw-text-opacity));\n}.btn-outline.btn-secondary.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--sf) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--sf) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--sc) / var(--tw-text-opacity));\n}.btn-outline.btn-accent {\n  --tw-text-opacity: 1;\n  color: hsl(var(--a) / var(--tw-text-opacity));\n}.btn-outline.btn-accent.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--af) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--af) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--ac) / var(--tw-text-opacity));\n}.btn-outline.btn-success {\n  --tw-text-opacity: 1;\n  color: hsl(var(--su) / var(--tw-text-opacity));\n}.btn-outline.btn-success.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--su) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--su) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--suc) / var(--tw-text-opacity));\n}.btn-outline.btn-info {\n  --tw-text-opacity: 1;\n  color: hsl(var(--in) / var(--tw-text-opacity));\n}.btn-outline.btn-info.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--in) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--in) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--inc) / var(--tw-text-opacity));\n}.btn-outline.btn-warning {\n  --tw-text-opacity: 1;\n  color: hsl(var(--wa) / var(--tw-text-opacity));\n}.btn-outline.btn-warning.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--wa) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--wa) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--wac) / var(--tw-text-opacity));\n}.btn-outline.btn-error {\n  --tw-text-opacity: 1;\n  color: hsl(var(--er) / var(--tw-text-opacity));\n}.btn-outline.btn-error.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--er) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--er) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--erc) / var(--tw-text-opacity));\n}.btn.btn-disabled,\n  .btn[disabled],\n  .btn:disabled {\n  --tw-border-opacity: 0;\n  background-color: #01ffcd;\n  --tw-bg-opacity: 0.2;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n  --tw-text-opacity: 0.2;\n}.btn-group > input[type="radio"]:checked.btn,\n  .btn-group > .btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--p) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--p) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--pc) / var(--tw-text-opacity));\n}.btn-group > input[type="radio"]:checked.btn:focus-visible, .btn-group > .btn-active:focus-visible {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-color: hsl(var(--p) / 1);\n}.btn:is(input[type="checkbox"]:checked),\n.btn:is(input[type="radio"]:checked) {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--p) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--p) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--pc) / var(--tw-text-opacity));\n}.btn:is(input[type="checkbox"]:checked):focus-visible, .btn:is(input[type="radio"]:checked):focus-visible {\n  outline-color: hsl(var(--p) / 1);\n}@keyframes button-pop {\n\n  0% {\n    transform: scale(var(--btn-focus-scale, 0.98));\n  }\n\n  40% {\n    transform: scale(1.02);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}.checkbox:focus-visible {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n  outline-color: hsl(var(--bc) / 1);\n}.checkbox:checked,\n  .checkbox[checked="true"],\n  .checkbox[aria-checked="true"] {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n  background-repeat: no-repeat;\n  animation: checkmark var(--animation-input, 0.2s) ease-out;\n  background-image: linear-gradient(-45deg, transparent 65%, hsl(var(--chkbg)) 65.99%),\n      linear-gradient(45deg, transparent 75%, hsl(var(--chkbg)) 75.99%),\n      linear-gradient(-45deg, hsl(var(--chkbg)) 40%, transparent 40.99%),\n      linear-gradient(\n        45deg,\n        hsl(var(--chkbg)) 30%,\n        hsl(var(--chkfg)) 30.99%,\n        hsl(var(--chkfg)) 40%,\n        transparent 40.99%\n      ),\n      linear-gradient(-45deg, hsl(var(--chkfg)) 50%, hsl(var(--chkbg)) 50.99%);\n}.checkbox:indeterminate {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n  background-repeat: no-repeat;\n  animation: checkmark var(--animation-input, 0.2s) ease-out;\n  background-image: linear-gradient(90deg, transparent 80%, hsl(var(--chkbg)) 80%),\n      linear-gradient(-90deg, transparent 80%, hsl(var(--chkbg)) 80%),\n      linear-gradient(\n        0deg,\n        hsl(var(--chkbg)) 43%,\n        hsl(var(--chkfg)) 43%,\n        hsl(var(--chkfg)) 57%,\n        hsl(var(--chkbg)) 57%\n      );\n}.checkbox:disabled {\n  cursor: not-allowed;\n  border-color: transparent;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n  opacity: 0.2;\n}@keyframes checkmark {\n\n  0% {\n    background-position-y: 5px;\n  }\n\n  50% {\n    background-position-y: -2px;\n  }\n\n  100% {\n    background-position-y: 0;\n  }\n}[dir="rtl"] .checkbox:checked,\n    [dir="rtl"] .checkbox[checked="true"],\n    [dir="rtl"] .checkbox[aria-checked="true"] {\n  background-image: linear-gradient(45deg, transparent 65%, hsl(var(--chkbg)) 65.99%),\n        linear-gradient(-45deg, transparent 75%, hsl(var(--chkbg)) 75.99%),\n        linear-gradient(45deg, hsl(var(--chkbg)) 40%, transparent 40.99%),\n        linear-gradient(\n          -45deg,\n          hsl(var(--chkbg)) 30%,\n          hsl(var(--chkfg)) 30.99%,\n          hsl(var(--chkfg)) 40%,\n          transparent 40.99%\n        ),\n        linear-gradient(45deg, hsl(var(--chkfg)) 50%, hsl(var(--chkbg)) 50.99%);\n}.input input:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}.input[list]::-webkit-calendar-picker-indicator {\n  line-height: 1em;\n}.input:focus,\n  .input:focus-within {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n  outline-color: hsl(var(--bc) / 0.2);\n}.input-disabled,\n  .input:disabled,\n  .input[disabled] {\n  cursor: not-allowed;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--b2) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b2) / var(--tw-bg-opacity));\n  --tw-text-opacity: 0.2;\n}.input-disabled::placeholder,\n  .input:disabled::placeholder,\n  .input[disabled]::placeholder {\n  color: hsl(var(--bc) / var(--tw-placeholder-opacity));\n  --tw-placeholder-opacity: 0.2;\n}.join > :where(*:not(:first-child)) {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  margin-left: -1px;\n}.link:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}.link:focus-visible {\n  outline: 2px solid currentColor;\n  outline-offset: 2px;\n}.loading {\n  pointer-events: none;\n  display: inline-block;\n  aspect-ratio: 1 / 1;\n  width: 24px;\n  background-color: currentColor;\n  -webkit-mask-size: 100%;\n          mask-size: 100%;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n          mask-position: center;\n  -webkit-mask-image: url(' +
                        u +
                        ");\n          mask-image: url(" +
                        u +
                        ');\n}:where(.menu li:not(.menu-title):not(.disabled) > *:not(ul):not(details):not(.menu-title)):not(summary):not(.active).focus,\n  :where(.menu li:not(.menu-title):not(.disabled) > *:not(ul):not(details):not(.menu-title)):not(summary):not(.active):focus,\n  :where(.menu li:not(.menu-title):not(.disabled) > *:not(ul):not(details):not(.menu-title)):is(summary):not(.active):focus-visible,\n  :where(.menu li:not(.menu-title):not(.disabled) > details > summary:not(.menu-title)):not(summary):not(.active).focus,\n  :where(.menu li:not(.menu-title):not(.disabled) > details > summary:not(.menu-title)):not(summary):not(.active):focus,\n  :where(.menu li:not(.menu-title):not(.disabled) > details > summary:not(.menu-title)):is(summary):not(.active):focus-visible {\n  cursor: pointer;\n  background-color: hsl(var(--bc) / 0.1);\n  --tw-text-opacity: 1;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}.mockup-phone .camera {\n  position: relative;\n  top: 0px;\n  left: 0px;\n  background: #000;\n  height: 25px;\n  width: 150px;\n  margin: 0 auto;\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  z-index: 11;\n}.mockup-phone .camera:before {\n  content: "";\n  position: absolute;\n  top: 35%;\n  left: 50%;\n  width: 50px;\n  height: 4px;\n  border-radius: 5px;\n  background-color: #0c0b0e;\n  transform: translate(-50%, -50%);\n}.mockup-phone .camera:after {\n  content: "";\n  position: absolute;\n  top: 20%;\n  left: 70%;\n  width: 8px;\n  height: 8px;\n  border-radius: 5px;\n  background-color: #0f0b25;\n}.mockup-browser .mockup-browser-toolbar .input {\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  height: 28px;\n  width: 384px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b2) / var(--tw-bg-opacity));\n  padding-left: 32px;\n}.mockup-browser .mockup-browser-toolbar .input:before {\n  content: "";\n  position: absolute;\n  left: 8px;\n  top: 50%;\n  aspect-ratio: 1 / 1;\n  height: 12px;\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  border-radius: 9999px;\n  border-width: 2px;\n  border-color: currentColor;\n  opacity: 0.6;\n}.mockup-browser .mockup-browser-toolbar .input:after {\n  content: "";\n  position: absolute;\n  left: 20px;\n  top: 50%;\n  height: 8px;\n  --tw-translate-y: 25%;\n  --tw-rotate: -45deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  border-radius: 9999px;\n  border-width: 1px;\n  border-color: currentColor;\n  opacity: 0.6;\n}.modal::-webkit-backdrop {\n  background-color: rgba(0, 0, 0, 0.3);\n  animation: modal-pop 0.2s ease-out;\n}.modal:not(dialog:not(.modal-open)),\n  .modal::backdrop {\n  background-color: rgba(0, 0, 0, 0.3);\n  animation: modal-pop 0.2s ease-out;\n}.modal-backdrop {\n  z-index: -1;\n  grid-column-start: 1;\n  grid-row-start: 1;\n  display: grid;\n  align-self: stretch;\n  justify-self: stretch;\n  color: transparent;\n}.modal-open .modal-box,\n.modal-toggle:checked + .modal .modal-box,\n.modal:target .modal-box,\n.modal[open] .modal-box {\n  --tw-translate-y: 0px;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}@keyframes modal-pop {\n\n  0% {\n    opacity: 0;\n  }\n}@keyframes progress-loading {\n\n  50% {\n    background-position-x: -115%;\n  }\n}.radio:focus-visible {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n  outline-color: hsl(var(--bc) / 1);\n}.radio:checked,\n  .radio[aria-checked="true"] {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n  animation: radiomark var(--animation-input, 0.2s) ease-out;\n  box-shadow: 0 0 0 4px hsl(var(--b1)) inset,\n      0 0 0 4px hsl(var(--b1)) inset;\n}.radio:disabled {\n  cursor: not-allowed;\n  opacity: 0.2;\n}@keyframes radiomark {\n\n  0% {\n    box-shadow: 0 0 0 12px hsl(var(--b1)) inset,\n      0 0 0 12px hsl(var(--b1)) inset;\n  }\n\n  50% {\n    box-shadow: 0 0 0 3px hsl(var(--b1)) inset,\n      0 0 0 3px hsl(var(--b1)) inset;\n  }\n\n  100% {\n    box-shadow: 0 0 0 4px hsl(var(--b1)) inset,\n      0 0 0 4px hsl(var(--b1)) inset;\n  }\n}@keyframes rating-pop {\n\n  0% {\n    transform: translateY(-0.125em);\n  }\n\n  40% {\n    transform: translateY(-0.125em);\n  }\n\n  100% {\n    transform: translateY(0);\n  }\n}.select:focus {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n  outline-color: hsl(var(--bc) / 0.2);\n}.select-disabled,\n  .select:disabled,\n  .select[disabled] {\n  cursor: not-allowed;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--b2) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b2) / var(--tw-bg-opacity));\n  --tw-text-opacity: 0.2;\n}.select-disabled::placeholder,\n  .select:disabled::placeholder,\n  .select[disabled]::placeholder {\n  color: hsl(var(--bc) / var(--tw-placeholder-opacity));\n  --tw-placeholder-opacity: 0.2;\n}.select-multiple,\n  .select[multiple],\n  .select[size].select:not([size="1"]) {\n  background-image: none;\n  padding-right: 16px;\n}[dir="rtl"] .select {\n  background-position: calc(0% + 12px) calc(1px + 50%),\n    calc(0% + 16px) calc(1px + 50%);\n}.steps .step:before {\n  top: 0px;\n  grid-column-start: 1;\n  grid-row-start: 1;\n  height: 8px;\n  width: 100%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b3) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n  content: "";\n  margin-left: -100%;\n}.steps .step:after {\n  content: counter(step);\n  counter-increment: step;\n  z-index: 1;\n  position: relative;\n  grid-column-start: 1;\n  grid-row-start: 1;\n  display: grid;\n  height: 32px;\n  width: 32px;\n  place-items: center;\n  place-self: center;\n  border-radius: 9999px;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b3) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n}.steps .step:first-child:before {\n  content: none;\n}.steps .step[data-content]:after {\n  content: attr(data-content);\n}.steps .step-neutral + .step-neutral:before,\n  .steps .step-neutral:after {\n  --tw-bg-opacity: 1;\n  background-color: #01ffcd;\n  --tw-text-opacity: 1;\n  color: hsl(var(--nc) / var(--tw-text-opacity));\n}.steps .step-primary + .step-primary:before,\n  .steps .step-primary:after {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--p) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--pc) / var(--tw-text-opacity));\n}.steps .step-secondary + .step-secondary:before,\n  .steps .step-secondary:after {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--s) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--sc) / var(--tw-text-opacity));\n}.steps .step-accent + .step-accent:before,\n  .steps .step-accent:after {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--a) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--ac) / var(--tw-text-opacity));\n}.steps .step-info + .step-info:before {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--in) / var(--tw-bg-opacity));\n}.steps .step-info:after {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--in) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--inc) / var(--tw-text-opacity));\n}.steps .step-success + .step-success:before {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--su) / var(--tw-bg-opacity));\n}.steps .step-success:after {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--su) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--suc) / var(--tw-text-opacity));\n}.steps .step-warning + .step-warning:before {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--wa) / var(--tw-bg-opacity));\n}.steps .step-warning:after {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--wa) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--wac) / var(--tw-text-opacity));\n}.steps .step-error + .step-error:before {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--er) / var(--tw-bg-opacity));\n}.steps .step-error:after {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--er) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--erc) / var(--tw-text-opacity));\n}.textarea:focus {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n  outline-color: hsl(var(--bc) / 0.2);\n}.textarea-disabled,\n  .textarea:disabled,\n  .textarea[disabled] {\n  cursor: not-allowed;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--b2) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b2) / var(--tw-bg-opacity));\n  --tw-text-opacity: 0.2;\n}.textarea-disabled::placeholder,\n  .textarea:disabled::placeholder,\n  .textarea[disabled]::placeholder {\n  color: hsl(var(--bc) / var(--tw-placeholder-opacity));\n  --tw-placeholder-opacity: 0.2;\n}@keyframes toast-pop {\n\n  0% {\n    transform: scale(0.9);\n    opacity: 0;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}.artboard.phone {\n  width: 320px;\n}.btn-xs {\n  height: 24px;\n  padding-left: 8px;\n  padding-right: 8px;\n  min-height: 24px;\n  font-size: 12px;\n}.btn-sm {\n  height: 32px;\n  padding-left: 12px;\n  padding-right: 12px;\n  min-height: 32px;\n  font-size: 14px;\n}.btn-square:where(.btn-xs) {\n  height: 24px;\n  width: 24px;\n  padding: 0px;\n}.btn-square:where(.btn-sm) {\n  height: 32px;\n  width: 32px;\n  padding: 0px;\n}.btn-circle:where(.btn-xs) {\n  height: 24px;\n  width: 24px;\n  border-radius: 9999px;\n  padding: 0px;\n}.btn-circle:where(.btn-sm) {\n  height: 32px;\n  width: 32px;\n  border-radius: 9999px;\n  padding: 0px;\n}.btn-circle:where(.btn-md) {\n  height: 48px;\n  width: 48px;\n  border-radius: 9999px;\n  padding: 0px;\n}.btn-circle:where(.btn-lg) {\n  height: 64px;\n  width: 64px;\n  border-radius: 9999px;\n  padding: 0px;\n}.join.join-vertical {\n  flex-direction: column;\n}.join.join-vertical .join-item:first-child:not(:last-child),\n  .join.join-vertical *:first-child:not(:last-child) .join-item {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n}.join.join-vertical .join-item:last-child:not(:first-child),\n  .join.join-vertical *:last-child:not(:first-child) .join-item {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: inherit;\n  border-bottom-right-radius: inherit;\n}.join.join-horizontal {\n  flex-direction: row;\n}.join.join-horizontal .join-item:first-child:not(:last-child),\n  .join.join-horizontal *:first-child:not(:last-child) .join-item {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: inherit;\n  border-top-left-radius: inherit;\n}.join.join-horizontal .join-item:last-child:not(:first-child),\n  .join.join-horizontal *:last-child:not(:first-child) .join-item {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: inherit;\n  border-top-right-radius: inherit;\n}.steps-horizontal .step {\n  display: grid;\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n  grid-template-rows: repeat(2, minmax(0, 1fr));\n  place-items: center;\n  text-align: center;\n}.steps-vertical .step {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  grid-template-rows: repeat(1, minmax(0, 1fr));\n}.tooltip {\n  position: relative;\n  display: inline-block;\n  --tooltip-offset: calc(100% + 1px + var(--tooltip-tail, 0px));\n}.tooltip:before {\n  position: absolute;\n  pointer-events: none;\n  z-index: 1;\n  content: var(--tw-content);\n  --tw-content: attr(data-tip);\n}.tooltip:before, .tooltip-top:before {\n  transform: translateX(-50%);\n  top: auto;\n  left: 50%;\n  right: auto;\n  bottom: var(--tooltip-offset);\n}.btn-group .btn:not(:first-child):not(:last-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}.btn-group .btn:first-child:not(:last-child) {\n  margin-left: -1px;\n  margin-top: -0px;\n  border-top-left-radius: var(--rounded-btn, 0.5rem);\n  border-top-right-radius: 0;\n  border-bottom-left-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-right-radius: 0;\n}.btn-group .btn:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: var(--rounded-btn, 0.5rem);\n}.btn-group-horizontal .btn:not(:first-child):not(:last-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}.btn-group-horizontal .btn:first-child:not(:last-child) {\n  margin-left: -1px;\n  margin-top: -0px;\n  border-top-left-radius: var(--rounded-btn, 0.5rem);\n  border-top-right-radius: 0;\n  border-bottom-left-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-right-radius: 0;\n}.btn-group-horizontal .btn:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: var(--rounded-btn, 0.5rem);\n}.btn-group-vertical .btn:first-child:not(:last-child) {\n  margin-left: -0px;\n  margin-top: -1px;\n  border-top-left-radius: var(--rounded-btn, 0.5rem);\n  border-top-right-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}.btn-group-vertical .btn:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-right-radius: var(--rounded-btn, 0.5rem);\n}.join.join-vertical > :where(*:not(:first-child)) {\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: -1px;\n}.join.join-horizontal > :where(*:not(:first-child)) {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  margin-left: -1px;\n}.modal-top :where(.modal-box) {\n  width: 100%;\n  max-width: none;\n  --tw-translate-y: -40px;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: var(--rounded-box, 1rem);\n  border-bottom-right-radius: var(--rounded-box, 1rem);\n}.modal-middle :where(.modal-box) {\n  width: 91.666667%;\n  max-width: 512px;\n  --tw-translate-y: 0px;\n  --tw-scale-x: .9;\n  --tw-scale-y: .9;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  border-top-left-radius: var(--rounded-box, 1rem);\n  border-top-right-radius: var(--rounded-box, 1rem);\n  border-bottom-left-radius: var(--rounded-box, 1rem);\n  border-bottom-right-radius: var(--rounded-box, 1rem);\n}.modal-bottom :where(.modal-box) {\n  width: 100%;\n  max-width: none;\n  --tw-translate-y: 40px;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  border-bottom-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-top-left-radius: var(--rounded-box, 1rem);\n  border-top-right-radius: var(--rounded-box, 1rem);\n}.steps-horizontal .step {\n  grid-template-rows: 40px 1fr;\n  grid-template-columns: auto;\n  min-width: 64px;\n}.steps-horizontal .step:before {\n  height: 8px;\n  width: 100%;\n  --tw-translate-x: 0px;\n  --tw-translate-y: 0px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  content: "";\n  margin-left: -100%;\n}.steps-vertical .step {\n  gap: 8px;\n  grid-template-columns: 40px 1fr;\n  grid-template-rows: auto;\n  min-height: 64px;\n  justify-items: start;\n}.steps-vertical .step:before {\n  height: 100%;\n  width: 8px;\n  --tw-translate-x: -50%;\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  margin-left: 50%;\n}[dir="rtl"] .steps-vertical .step:before {\n  margin-right: auto;\n}.tooltip {\n  position: relative;\n  display: inline-block;\n  text-align: center;\n  --tooltip-tail: 3px;\n  --tooltip-color: hsl(var(--n));\n  --tooltip-text-color: hsl(var(--nc));\n  --tooltip-tail-offset: calc(100% + 1px - var(--tooltip-tail));\n}.tooltip:before,\n.tooltip:after {\n  opacity: 0;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-delay: 100ms;\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}.tooltip:after {\n  position: absolute;\n  content: "";\n  border-style: solid;\n  border-width: var(--tooltip-tail, 0);\n  width: 0;\n  height: 0;\n  display: block;\n}.tooltip:before {\n  max-width: 320px;\n  border-radius: 4px;\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  font-size: 14px;\n  line-height: 20px;\n  background-color: var(--tooltip-color);\n  color: var(--tooltip-text-color);\n  width: max-content;\n}.tooltip.tooltip-open:before,\n.tooltip.tooltip-open:after,\n.tooltip:hover:before,\n.tooltip:hover:after {\n  opacity: 1;\n  transition-delay: 75ms;\n}.tooltip:has(:focus-visible):after,\n.tooltip:has(:focus-visible):before {\n  opacity: 1;\n  transition-delay: 75ms;\n}.tooltip:not([data-tip]):hover:before,\n.tooltip:not([data-tip]):hover:after {\n  visibility: hidden;\n  opacity: 0;\n}.tooltip:after, .tooltip-top:after {\n  transform: translateX(-50%);\n  border-color: var(--tooltip-color) transparent transparent transparent;\n  top: auto;\n  left: 50%;\n  right: auto;\n  bottom: var(--tooltip-tail-offset);\n}.pointer-events-none {\n  pointer-events: none;\n}.static {\n  position: static;\n}.absolute {\n  position: absolute;\n}.relative {\n  position: relative;\n}.sticky {\n  position: sticky;\n}.-top-7 {\n  top: -28px;\n}.bottom-0 {\n  bottom: 0px;\n}.bottom-4 {\n  bottom: 16px;\n}.left-0 {\n  left: 0px;\n}.right-0 {\n  right: 0px;\n}.right-0\\.5 {\n  right: 2px;\n}.right-1 {\n  right: 4px;\n}.right-1\\.5 {\n  right: 6px;\n}.top-0 {\n  top: 0px;\n}.top-0\\.5 {\n  top: 2px;\n}.top-1 {\n  top: 4px;\n}.top-1\\.5 {\n  top: 6px;\n}.z-10 {\n  z-index: 10;\n}.z-20 {\n  z-index: 20;\n}.z-50 {\n  z-index: 50;\n}.m-0 {\n  margin: 0px;\n}.m-0\\.5 {\n  margin: 2px;\n}.mx-1 {\n  margin-left: 4px;\n  margin-right: 4px;\n}.mx-32 {\n  margin-left: 128px;\n  margin-right: 128px;\n}.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}.my-4 {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}.-mb-2 {\n  margin-bottom: -8px;\n}.-mr-10 {\n  margin-right: -40px;\n}.-mt-3 {\n  margin-top: -12px;\n}.mb-1 {\n  margin-bottom: 4px;\n}.mb-2 {\n  margin-bottom: 8px;\n}.mb-3 {\n  margin-bottom: 12px;\n}.mb-4 {\n  margin-bottom: 16px;\n}.ml-1 {\n  margin-left: 4px;\n}.ml-2 {\n  margin-left: 8px;\n}.mr-1 {\n  margin-right: 4px;\n}.mr-2 {\n  margin-right: 8px;\n}.mr-3 {\n  margin-right: 12px;\n}.mr-4 {\n  margin-right: 16px;\n}.mt-1 {\n  margin-top: 4px;\n}.mt-12 {\n  margin-top: 48px;\n}.mt-2 {\n  margin-top: 8px;\n}.mt-20 {\n  margin-top: 80px;\n}.mt-4 {\n  margin-top: 16px;\n}.mt-5 {\n  margin-top: 20px;\n}.mt-6 {\n  margin-top: 24px;\n}.block {\n  display: block;\n}.inline-block {\n  display: inline-block;\n}.inline {\n  display: inline;\n}.flex {\n  display: flex;\n}.inline-flex {\n  display: inline-flex;\n}.hidden {\n  display: none;\n}.aspect-square {\n  aspect-ratio: 1 / 1;\n}.\\!h-7 {\n  height: 28px !important;\n}.\\!h-auto {\n  height: auto !important;\n}.\\!h-full {\n  height: 100% !important;\n}.h-0 {\n  height: 0px;\n}.h-10 {\n  height: 40px;\n}.h-3 {\n  height: 12px;\n}.h-32 {\n  height: 128px;\n}.h-40 {\n  height: 160px;\n}.h-52 {\n  height: 208px;\n}.h-9 {\n  height: 36px;\n}.h-\\[1\\.6vw\\] {\n  height: 1.6vw;\n}.h-full {\n  height: 100%;\n}.h-screen {\n  height: 100vh;\n}.max-h-10 {\n  max-height: 40px;\n}.max-h-20 {\n  max-height: 80px;\n}.max-h-44 {\n  max-height: 176px;\n}.max-h-9 {\n  max-height: 36px;\n}.max-h-none {\n  max-height: none;\n}.\\!w-7 {\n  width: 28px !important;\n}.\\!w-auto {\n  width: auto !important;\n}.\\!w-full {\n  width: 100% !important;\n}.w-10 {\n  width: 40px;\n}.w-3 {\n  width: 12px;\n}.w-6 {\n  width: 24px;\n}.w-9 {\n  width: 36px;\n}.w-\\[1\\.6vw\\] {\n  width: 1.6vw;\n}.w-auto {\n  width: auto;\n}.w-full {\n  width: 100%;\n}.max-w-md {\n  max-width: 448px;\n}.flex-none {\n  flex: none;\n}.flex-shrink {\n  flex-shrink: 1;\n}.flex-grow {\n  flex-grow: 1;\n}.\\!animate-none {\n  animation: none !important;\n}@keyframes spin {\n\n  to {\n    transform: rotate(360deg);\n  }\n}.animate-spin {\n  animation: spin 1s linear infinite;\n}.cursor-default {\n  cursor: default;\n}.cursor-pointer {\n  cursor: pointer;\n}.resize {\n  resize: both;\n}.flex-col {\n  flex-direction: column;\n}.flex-wrap {\n  flex-wrap: wrap;\n}.flex-nowrap {\n  flex-wrap: nowrap;\n}.items-start {\n  align-items: flex-start;\n}.items-center {\n  align-items: center;\n}.justify-start {\n  justify-content: flex-start;\n}.justify-center {\n  justify-content: center;\n}.justify-between {\n  justify-content: space-between;\n}.space-x-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(4px * var(--tw-space-x-reverse));\n  margin-left: calc(4px * calc(1 - var(--tw-space-x-reverse)));\n}.space-x-1\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(6px * var(--tw-space-x-reverse));\n  margin-left: calc(6px * calc(1 - var(--tw-space-x-reverse)));\n}.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(8px * var(--tw-space-x-reverse));\n  margin-left: calc(8px * calc(1 - var(--tw-space-x-reverse)));\n}.space-x-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(12px * var(--tw-space-x-reverse));\n  margin-left: calc(12px * calc(1 - var(--tw-space-x-reverse)));\n}.space-y-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(12px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(12px * var(--tw-space-y-reverse));\n}.space-y-3\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(14px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(14px * var(--tw-space-y-reverse));\n}.space-y-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(16px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(16px * var(--tw-space-y-reverse));\n}.space-y-6 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(24px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(24px * var(--tw-space-y-reverse));\n}.overflow-hidden {\n  overflow: hidden;\n}.overflow-y-auto {\n  overflow-y: auto;\n}.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}.whitespace-nowrap {\n  white-space: nowrap;\n}.whitespace-pre-wrap {\n  white-space: pre-wrap;\n}.rounded {\n  border-radius: 4px;\n}.rounded-2xl {\n  border-radius: 16px;\n}.rounded-full {\n  border-radius: 9999px;\n}.rounded-md {\n  border-radius: 6px;\n}.rounded-xl {\n  border-radius: 12px;\n}.\\!rounded-l-none {\n  border-top-left-radius: 0px !important;\n  border-bottom-left-radius: 0px !important;\n}.rounded-l-full {\n  border-top-left-radius: 9999px;\n  border-bottom-left-radius: 9999px;\n}.border {\n  border-width: 1px;\n}.border-y {\n  border-top-width: 1px;\n  border-bottom-width: 1px;\n}.\\!border-l-0 {\n  border-left-width: 0px !important;\n}.border-b {\n  border-bottom-width: 1px;\n}.border-dashed {\n  border-style: dashed;\n}.border-base-200 {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--b2) / var(--tw-border-opacity));\n}.border-base-300 {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--b3) / var(--tw-border-opacity));\n}.border-base-content {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n}.border-neutral-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(212 212 212 / var(--tw-border-opacity));\n}.border-red-100 {\n  --tw-border-opacity: 1;\n  border-color: rgb(254 226 226 / var(--tw-border-opacity));\n}.border-yellow-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(254 240 138 / var(--tw-border-opacity));\n}.bg-\\[\\#7B73FF\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(123 115 255 / var(--tw-bg-opacity));\n}.bg-base-100 {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b1) / var(--tw-bg-opacity));\n}.bg-base-200 {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b2) / var(--tw-bg-opacity));\n}.bg-base-300 {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b3) / var(--tw-bg-opacity));\n}.bg-base-content {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n}.bg-base-content\\/10 {\n  background-color: hsl(var(--bc) / 0.1);\n}.bg-red-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 226 226 / var(--tw-bg-opacity));\n}.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}.bg-yellow-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 249 195 / var(--tw-bg-opacity));\n}.bg-opacity-40 {\n  --tw-bg-opacity: 0.4;\n}.bg-opacity-80 {\n  --tw-bg-opacity: 0.8;\n}.object-contain {\n  object-fit: contain;\n}.p-2 {\n  padding: 8px;\n}.p-4 {\n  padding: 16px;\n}.p-\\[1px\\] {\n  padding: 1px;\n}.\\!px-5 {\n  padding-left: 20px !important;\n  padding-right: 20px !important;\n}.px-0 {\n  padding-left: 0px;\n  padding-right: 0px;\n}.px-0\\.5 {\n  padding-left: 2px;\n  padding-right: 2px;\n}.px-1 {\n  padding-left: 4px;\n  padding-right: 4px;\n}.px-2 {\n  padding-left: 8px;\n  padding-right: 8px;\n}.px-4 {\n  padding-left: 16px;\n  padding-right: 16px;\n}.px-6 {\n  padding-left: 24px;\n  padding-right: 24px;\n}.py-1 {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}.py-1\\.5 {\n  padding-top: 6px;\n  padding-bottom: 6px;\n}.py-2 {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}.\\!pr-11 {\n  padding-right: 44px !important;\n}.pb-2 {\n  padding-bottom: 8px;\n}.pb-6 {\n  padding-bottom: 24px;\n}.pb-72 {\n  padding-bottom: 288px;\n}.pr-0 {\n  padding-right: 0px;\n}.pr-0\\.5 {\n  padding-right: 2px;\n}.pt-4 {\n  padding-top: 16px;\n}.text-left {\n  text-align: left;\n}.text-center {\n  text-align: center;\n}.text-right {\n  text-align: right;\n}.font-serif {\n  font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;\n}.\\!text-2xl {\n  font-size: 24px !important;\n  line-height: 32px !important;\n}.text-2xl {\n  font-size: 24px;\n  line-height: 32px;\n}.text-3xl {\n  font-size: 30px;\n  line-height: 36px;\n}.text-5xl {\n  font-size: 48px;\n  line-height: 1;\n}.text-\\[1\\.0vw\\] {\n  font-size: 1.0vw;\n}.text-\\[1\\.6vw\\] {\n  font-size: 1.6vw;\n}.text-\\[1vw\\] {\n  font-size: 1vw;\n}.text-base {\n  font-size: 16px;\n  line-height: 24px;\n}.text-lg {\n  font-size: 18px;\n  line-height: 28px;\n}.text-sm {\n  font-size: 14px;\n  line-height: 20px;\n}.text-xl {\n  font-size: 20px;\n  line-height: 28px;\n}.text-xs {\n  font-size: 12px;\n  line-height: 16px;\n}.font-bold {\n  font-weight: 700;\n}.font-medium {\n  font-weight: 500;\n}.font-normal {\n  font-weight: 400;\n}.font-semibold {\n  font-weight: 600;\n}.uppercase {\n  text-transform: uppercase;\n}.\\!normal-case {\n  text-transform: none !important;\n}.italic {\n  font-style: italic;\n}.text-base-100 {\n  --tw-text-opacity: 1;\n  color: hsl(var(--b1) / var(--tw-text-opacity));\n}.text-base-content {\n  --tw-text-opacity: 1;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n}.text-base-content\\/60 {\n  color: hsl(var(--bc) / 0.6);\n}.text-gray-300 {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}.text-green-600 {\n  --tw-text-opacity: 1;\n  color: rgb(22 163 74 / var(--tw-text-opacity));\n}.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}.underline {\n  text-decoration-line: underline;\n}.opacity-0 {\n  opacity: 0;\n}.opacity-50 {\n  opacity: 0.5;\n}.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}.\\!outline-none {\n  outline: 2px solid transparent !important;\n  outline-offset: 2px !important;\n}.outline-dashed {\n  outline-style: dashed;\n}.outline-2 {\n  outline-width: 2px;\n}.-outline-offset-1 {\n  outline-offset: -1px;\n}.outline-offset-2 {\n  outline-offset: 2px;\n}.outline-neutral-content {\n  outline-color: hsl(var(--nc) / 1);\n}.outline-red-500 {\n  outline-color: #ef4444;\n}.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}:host{all:initial;background-color: transparent}a[href],input[type=checkbox],input[type=submit],input[type=image],input[type=radio],label[for],select,button{cursor:pointer}button .disabled{display:none}button[disabled] .disabled{display:initial}button .enabled{display:initial}button[disabled] .enabled{display:none}.input-bordered {\n  border-color: hsl(var(--bc) / 0.2);\n}.select-bordered {\n  border-color: hsl(var(--bc) / 0.2);\n}.textarea-bordered {\n  border-color: hsl(var(--bc) / 0.2);\n}.btn {\n  --btn-focus-scale: 1;\n  --animation-btn: 0;\n  --animation-input: 0;\n}.base-input {\n  flex-shrink: 1;\n  height: 48px;\n  padding-left: 16px;\n  padding-right: 16px;\n  font-size: 16px;\n  line-height: 2;\n  line-height: 24px;\n  border-width: 1px;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n  --tw-border-opacity: 0;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b1) / var(--tw-bg-opacity));\n  border-radius: var(--rounded-btn, 0.5rem);\n}.input-group > .base-input {\n  isolation: isolate;\n}\n  .input-group > .base-input {\n  border-radius: 0px;\n}.base-input input:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}.base-input[list]::-webkit-calendar-picker-indicator {\n  line-height: 1em;\n}.base-input {\n  --tw-border-opacity: 0.2;\n}.base-input:focus,.base-input:focus-within {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n  outline-color: hsl(var(--bc) / 0.2);\n}.base-input:disabled,.base-input[disabled] {\n  cursor: not-allowed;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--b2) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b2) / var(--tw-bg-opacity));\n  --tw-text-opacity: 0.2;\n}.base-input:disabled::placeholder,.base-input[disabled]::placeholder {\n  color: hsl(var(--bc) / var(--tw-placeholder-opacity));\n  --tw-placeholder-opacity: 0.2;\n}.mockup-browser .mockup-browser-toolbar .base-input {\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  height: 28px;\n  width: 384px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b2) / var(--tw-bg-opacity));\n  padding-left: 32px;\n}.mockup-browser .mockup-browser-toolbar .base-input:before {\n  content: "";\n  position: absolute;\n  left: 8px;\n  top: 50%;\n  aspect-ratio: 1 / 1;\n  height: 12px;\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  border-radius: 9999px;\n  border-width: 2px;\n  border-color: currentColor;\n  opacity: 0.6;\n}.mockup-browser .mockup-browser-toolbar .base-input:after {\n  content: "";\n  position: absolute;\n  left: 20px;\n  top: 50%;\n  height: 8px;\n  --tw-translate-y: 25%;\n  --tw-rotate: -45deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  border-radius: 9999px;\n  border-width: 1px;\n  border-color: currentColor;\n  opacity: 0.6;\n}.base-input {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n  border-color: hsl(var(--bc) / 0.2);\n}\n  .input-group > .base-textarea {\n  border-radius: 0px;\n}.base-textarea {\n  flex-shrink: 1;\n  min-height: 48px;\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  font-size: 14px;\n  line-height: 20px;\n  line-height: 2;\n  border-width: 1px;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b1) / var(--tw-bg-opacity));\n  border-radius: var(--rounded-btn, 0.5rem);\n  --tw-border-opacity: 0.2;\n}.base-textarea:focus {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n  outline-color: hsl(var(--bc) / 0.2);\n}.base-textarea:disabled,.base-textarea[disabled] {\n  cursor: not-allowed;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--b2) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b2) / var(--tw-bg-opacity));\n  --tw-text-opacity: 0.2;\n}.base-textarea:disabled::placeholder,.base-textarea[disabled]::placeholder {\n  color: hsl(var(--bc) / var(--tw-placeholder-opacity));\n  --tw-placeholder-opacity: 0.2;\n}.base-textarea {\n  border-radius: 24px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n  border-color: hsl(var(--bc) / 0.2);\n}.base-button {\n  display: inline-flex;\n  flex-shrink: 0;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  border-color: transparent;\n  border-color: hsl(var(--b2) / var(--tw-border-opacity));\n  text-align: center;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  transition-duration: 200ms;\n  border-radius: var(--rounded-btn, 0.5rem);\n  height: 48px;\n  padding-left: 16px;\n  padding-right: 16px;\n  min-height: 48px;\n  font-size: 14px;\n  line-height: 1em;\n  gap: 8px;\n  font-weight: 600;\n  text-decoration-line: none;\n  border-width: var(--border-btn, 1px);\n  animation: button-pop var(--animation-btn, 0.25s) ease-out;\n  text-transform: var(--btn-text-case, uppercase);\n  --tw-border-opacity: 1;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b2) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n  outline-color: hsl(var(--bc) / 1);\n}.base-button[disabled],.base-button:disabled {\n  pointer-events: none;\n}.btn-group > input[type="radio"].base-button {\n  -webkit-appearance: none;\n          appearance: none;\n}.btn-group > input[type="radio"].base-button:before {\n  content: attr(data-title);\n}.base-button:is(input[type="checkbox"]),.base-button:is(input[type="radio"]) {\n  width: auto;\n  -webkit-appearance: none;\n          appearance: none;\n}.base-button:is(input[type="checkbox"]):after,.base-button:is(input[type="radio"]):after {\n  --tw-content: attr(aria-label);\n  content: var(--tw-content);\n}@media (hover: hover) {\n\n  .base-button:hover {\n    border-color: hsl(var(--b3) / var(--tw-border-opacity));\n    background-color: hsl(var(--b3) / var(--tw-bg-opacity));\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--nf) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: #00A686;\n  }\n\n  .base-button.glass:hover {\n    --glass-opacity: 25%;\n    --glass-border-opacity: 15%;\n  }\n\n  .base-button[disabled]:hover,.base-button:disabled:hover {\n    --tw-border-opacity: 0;\n    background-color: #01ffcd;\n    --tw-bg-opacity: 0.2;\n    color: hsl(var(--bc) / var(--tw-text-opacity));\n    --tw-text-opacity: 0.2;\n  }\n\n  .base-button:is(input[type="checkbox"]:checked):hover,.base-button:is(input[type="radio"]:checked):hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--pf) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--pf) / var(--tw-bg-opacity));\n  }\n}.base-button:active:hover,.base-button:active:focus {\n  animation: button-pop 0s ease-out;\n  transform: scale(var(--btn-focus-scale, 0.97));\n}.base-button:focus-visible {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n}.base-button {\n  --tw-border-opacity: 1;\n  #01ffcd;\n  --tw-bg-opacity: 1;\n  background-color: #01ffcd;\n  --tw-text-opacity: 1;\n  color: hsl(var(--nc) / var(--tw-text-opacity));\n  outline-color: hsl(var(--n) / 1);\n}.base-button.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--nf) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: #00A686;\n}.base-button.glass {\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  outline-color: currentColor;\n}.base-button.glass.btn-active {\n  --glass-opacity: 25%;\n  --glass-border-opacity: 15%;\n}.base-button.btn-disabled,.base-button[disabled],.base-button:disabled {\n  --tw-border-opacity: 0;\n  background-color: #01ffcd;\n  --tw-bg-opacity: 0.2;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n  --tw-text-opacity: 0.2;\n}.btn-group > input[type="radio"]:checked.base-button {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--p) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--p) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--pc) / var(--tw-text-opacity));\n}.btn-group > input[type="radio"]:checked.base-button:focus-visible {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-color: hsl(var(--p) / 1);\n}.base-button:is(input[type="checkbox"]:checked),.base-button:is(input[type="radio"]:checked) {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--p) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--p) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--pc) / var(--tw-text-opacity));\n}.base-button:is(input[type="checkbox"]:checked):focus-visible,.base-button:is(input[type="radio"]:checked):focus-visible {\n  outline-color: hsl(var(--p) / 1);\n}.btn-group .base-button:not(:first-child):not(:last-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}.btn-group .base-button:first-child:not(:last-child) {\n  margin-left: -1px;\n  margin-top: -0px;\n  border-top-left-radius: var(--rounded-btn, 0.5rem);\n  border-top-right-radius: 0;\n  border-bottom-left-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-right-radius: 0;\n}.btn-group .base-button:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: var(--rounded-btn, 0.5rem);\n}.btn-group-horizontal .base-button:not(:first-child):not(:last-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}.btn-group-horizontal .base-button:first-child:not(:last-child) {\n  margin-left: -1px;\n  margin-top: -0px;\n  border-top-left-radius: var(--rounded-btn, 0.5rem);\n  border-top-right-radius: 0;\n  border-bottom-left-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-right-radius: 0;\n}.btn-group-horizontal .base-button:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: var(--rounded-btn, 0.5rem);\n}.btn-group-vertical .base-button:first-child:not(:last-child) {\n  margin-left: -0px;\n  margin-top: -1px;\n  border-top-left-radius: var(--rounded-btn, 0.5rem);\n  border-top-right-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}.btn-group-vertical .base-button:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-right-radius: var(--rounded-btn, 0.5rem);\n}.base-button {\n  font-size: 16px;\n  line-height: 24px;\n  --tw-text-opacity: 1;\n  color: #000;\n  --btn-focus-scale: 1;\n  --animation-btn: 0;\n  --animation-input: 0;\n}.white-button {\n  display: inline-flex;\n  flex-shrink: 0;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  border-color: transparent;\n  border-color: hsl(var(--b2) / var(--tw-border-opacity));\n  text-align: center;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  transition-duration: 200ms;\n  border-radius: var(--rounded-btn, 0.5rem);\n  height: 48px;\n  padding-left: 16px;\n  padding-right: 16px;\n  min-height: 48px;\n  font-size: 14px;\n  line-height: 1em;\n  gap: 8px;\n  font-weight: 600;\n  text-decoration-line: none;\n  border-width: var(--border-btn, 1px);\n  animation: button-pop var(--animation-btn, 0.25s) ease-out;\n  text-transform: var(--btn-text-case, uppercase);\n  --tw-border-opacity: 1;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b2) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n  outline-color: hsl(var(--bc) / 1);\n}.white-button[disabled],.white-button:disabled {\n  pointer-events: none;\n}.btn-group > input[type="radio"].white-button {\n  -webkit-appearance: none;\n          appearance: none;\n}.btn-group > input[type="radio"].white-button:before {\n  content: attr(data-title);\n}.white-button:is(input[type="checkbox"]),.white-button:is(input[type="radio"]) {\n  width: auto;\n  -webkit-appearance: none;\n          appearance: none;\n}.white-button:is(input[type="checkbox"]):after,.white-button:is(input[type="radio"]):after {\n  --tw-content: attr(aria-label);\n  content: var(--tw-content);\n}@media (hover: hover) {\n\n  .white-button:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--b3) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--b3) / var(--tw-bg-opacity));\n  }\n\n  .white-button.glass:hover {\n    --glass-opacity: 25%;\n    --glass-border-opacity: 15%;\n  }\n\n  .white-button:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--bc) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--b1) / var(--tw-text-opacity));\n  }\n\n  .white-button.btn-primary:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--pf) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--pf) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--pc) / var(--tw-text-opacity));\n  }\n\n  .white-button.btn-secondary:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--sf) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--sf) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--sc) / var(--tw-text-opacity));\n  }\n\n  .white-button.btn-accent:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--af) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--af) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--ac) / var(--tw-text-opacity));\n  }\n\n  .white-button.btn-success:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--su) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--su) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--suc) / var(--tw-text-opacity));\n  }\n\n  .white-button.btn-info:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--in) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--in) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--inc) / var(--tw-text-opacity));\n  }\n\n  .white-button.btn-warning:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--wa) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--wa) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--wac) / var(--tw-text-opacity));\n  }\n\n  .white-button.btn-error:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--er) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--er) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--erc) / var(--tw-text-opacity));\n  }\n\n  .white-button[disabled]:hover,.white-button:disabled:hover {\n    --tw-border-opacity: 0;\n    background-color: #01ffcd;\n    --tw-bg-opacity: 0.2;\n    color: hsl(var(--bc) / var(--tw-text-opacity));\n    --tw-text-opacity: 0.2;\n  }\n\n  .white-button:is(input[type="checkbox"]:checked):hover,.white-button:is(input[type="radio"]:checked):hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--pf) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--pf) / var(--tw-bg-opacity));\n  }\n}.white-button:active:hover,.white-button:active:focus {\n  animation: button-pop 0s ease-out;\n  transform: scale(var(--btn-focus-scale, 0.97));\n}.white-button:focus-visible {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n}.white-button.glass {\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  outline-color: currentColor;\n}.white-button.glass.btn-active {\n  --glass-opacity: 25%;\n  --glass-border-opacity: 15%;\n}.white-button {\n  border-color: currentColor;\n  background-color: transparent;\n  --tw-text-opacity: 1;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}.white-button.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--b1) / var(--tw-text-opacity));\n}.white-button.btn-primary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--p) / var(--tw-text-opacity));\n}.white-button.btn-primary.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--pf) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--pf) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--pc) / var(--tw-text-opacity));\n}.white-button.btn-secondary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--s) / var(--tw-text-opacity));\n}.white-button.btn-secondary.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--sf) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--sf) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--sc) / var(--tw-text-opacity));\n}.white-button.btn-accent {\n  --tw-text-opacity: 1;\n  color: hsl(var(--a) / var(--tw-text-opacity));\n}.white-button.btn-accent.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--af) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--af) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--ac) / var(--tw-text-opacity));\n}.white-button.btn-success {\n  --tw-text-opacity: 1;\n  color: hsl(var(--su) / var(--tw-text-opacity));\n}.white-button.btn-success.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--su) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--su) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--suc) / var(--tw-text-opacity));\n}.white-button.btn-info {\n  --tw-text-opacity: 1;\n  color: hsl(var(--in) / var(--tw-text-opacity));\n}.white-button.btn-info.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--in) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--in) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--inc) / var(--tw-text-opacity));\n}.white-button.btn-warning {\n  --tw-text-opacity: 1;\n  color: hsl(var(--wa) / var(--tw-text-opacity));\n}.white-button.btn-warning.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--wa) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--wa) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--wac) / var(--tw-text-opacity));\n}.white-button.btn-error {\n  --tw-text-opacity: 1;\n  color: hsl(var(--er) / var(--tw-text-opacity));\n}.white-button.btn-error.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--er) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--er) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--erc) / var(--tw-text-opacity));\n}.white-button.btn-disabled,.white-button[disabled],.white-button:disabled {\n  --tw-border-opacity: 0;\n  background-color: #01ffcd;\n  --tw-bg-opacity: 0.2;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n  --tw-text-opacity: 0.2;\n}.btn-group > input[type="radio"]:checked.white-button {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--p) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--p) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--pc) / var(--tw-text-opacity));\n}.btn-group > input[type="radio"]:checked.white-button:focus-visible {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-color: hsl(var(--p) / 1);\n}.white-button:is(input[type="checkbox"]:checked),.white-button:is(input[type="radio"]:checked) {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--p) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--p) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--pc) / var(--tw-text-opacity));\n}.white-button:is(input[type="checkbox"]:checked):focus-visible,.white-button:is(input[type="radio"]:checked):focus-visible {\n  outline-color: hsl(var(--p) / 1);\n}.btn-group .white-button:not(:first-child):not(:last-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}.btn-group .white-button:first-child:not(:last-child) {\n  margin-left: -1px;\n  margin-top: -0px;\n  border-top-left-radius: var(--rounded-btn, 0.5rem);\n  border-top-right-radius: 0;\n  border-bottom-left-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-right-radius: 0;\n}.btn-group .white-button:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: var(--rounded-btn, 0.5rem);\n}.btn-group-horizontal .white-button:not(:first-child):not(:last-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}.btn-group-horizontal .white-button:first-child:not(:last-child) {\n  margin-left: -1px;\n  margin-top: -0px;\n  border-top-left-radius: var(--rounded-btn, 0.5rem);\n  border-top-right-radius: 0;\n  border-bottom-left-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-right-radius: 0;\n}.btn-group-horizontal .white-button:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: var(--rounded-btn, 0.5rem);\n}.btn-group-vertical .white-button:first-child:not(:last-child) {\n  margin-left: -0px;\n  margin-top: -1px;\n  border-top-left-radius: var(--rounded-btn, 0.5rem);\n  border-top-right-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}.btn-group-vertical .white-button:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-right-radius: var(--rounded-btn, 0.5rem);\n}.white-button {\n  border-width: 2px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n  font-size: 16px;\n  line-height: 24px;\n  --btn-focus-scale: 1;\n  --animation-btn: 0;\n  --animation-input: 0;\n}.base-checkbox {\n  flex-shrink: 0;\n  --chkbg: var(--bc);\n  --chkfg: var(--b1);\n  height: 24px;\n  width: 24px;\n  cursor: pointer;\n  -webkit-appearance: none;\n          appearance: none;\n  border-width: 1px;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n  --tw-border-opacity: 0.2;\n  border-radius: var(--rounded-btn, 0.5rem);\n}.base-checkbox:focus-visible {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n  outline-color: hsl(var(--bc) / 1);\n}.base-checkbox:checked,.base-checkbox[checked="true"],.base-checkbox[aria-checked="true"] {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n  background-repeat: no-repeat;\n  animation: checkmark var(--animation-input, 0.2s) ease-out;\n  background-image: linear-gradient(-45deg, transparent 65%, hsl(var(--chkbg)) 65.99%),\n      linear-gradient(45deg, transparent 75%, hsl(var(--chkbg)) 75.99%),\n      linear-gradient(-45deg, hsl(var(--chkbg)) 40%, transparent 40.99%),\n      linear-gradient(\n        45deg,\n        hsl(var(--chkbg)) 30%,\n        hsl(var(--chkfg)) 30.99%,\n        hsl(var(--chkfg)) 40%,\n        transparent 40.99%\n      ),\n      linear-gradient(-45deg, hsl(var(--chkfg)) 50%, hsl(var(--chkbg)) 50.99%);\n}.base-checkbox:indeterminate {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n  background-repeat: no-repeat;\n  animation: checkmark var(--animation-input, 0.2s) ease-out;\n  background-image: linear-gradient(90deg, transparent 80%, hsl(var(--chkbg)) 80%),\n      linear-gradient(-90deg, transparent 80%, hsl(var(--chkbg)) 80%),\n      linear-gradient(\n        0deg,\n        hsl(var(--chkbg)) 43%,\n        hsl(var(--chkfg)) 43%,\n        hsl(var(--chkfg)) 57%,\n        hsl(var(--chkbg)) 57%\n      );\n}.base-checkbox:disabled {\n  cursor: not-allowed;\n  border-color: transparent;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n  opacity: 0.2;\n}[dir="rtl"] .base-checkbox:checked,\n    [dir="rtl"] .base-checkbox[checked="true"],\n    [dir="rtl"] .base-checkbox[aria-checked="true"] {\n  background-image: linear-gradient(45deg, transparent 65%, hsl(var(--chkbg)) 65.99%),\n        linear-gradient(-45deg, transparent 75%, hsl(var(--chkbg)) 75.99%),\n        linear-gradient(45deg, hsl(var(--chkbg)) 40%, transparent 40.99%),\n        linear-gradient(\n          -45deg,\n          hsl(var(--chkbg)) 30%,\n          hsl(var(--chkfg)) 30.99%,\n          hsl(var(--chkfg)) 40%,\n          transparent 40.99%\n        ),\n        linear-gradient(45deg, hsl(var(--chkfg)) 50%, hsl(var(--chkbg)) 50.99%);\n}.base-checkbox {\n  --btn-focus-scale: 1;\n  --animation-btn: 0;\n  --animation-input: 0;\n  height: 20px;\n  width: 20px;\n  border-radius: 4px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}.base-radio {\n  flex-shrink: 0;\n  --chkbg: var(--bc);\n  height: 24px;\n  width: 24px;\n  cursor: pointer;\n  -webkit-appearance: none;\n          appearance: none;\n  border-radius: 9999px;\n  border-width: 1px;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n  --tw-border-opacity: 0.2;\n}.base-radio:focus-visible {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n  outline-color: hsl(var(--bc) / 1);\n}.base-radio:checked,.base-radio[aria-checked="true"] {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n  animation: radiomark var(--animation-input, 0.2s) ease-out;\n  box-shadow: 0 0 0 4px hsl(var(--b1)) inset,\n      0 0 0 4px hsl(var(--b1)) inset;\n}.base-radio:disabled {\n  cursor: not-allowed;\n  opacity: 0.2;\n}.base-radio {\n  --btn-focus-scale: 1;\n  --animation-btn: 0;\n  --animation-input: 0;\n  height: 20px;\n  width: 20px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}.checked\\:checkbox:checked {\n  flex-shrink: 0;\n  --chkbg: var(--bc);\n  --chkfg: var(--b1);\n  height: 24px;\n  width: 24px;\n  cursor: pointer;\n  -webkit-appearance: none;\n          appearance: none;\n  border-width: 1px;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n  --tw-border-opacity: 0.2;\n  border-radius: var(--rounded-btn, 0.5rem);\n}.checked\\:checkbox:checked:focus-visible {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n  outline-color: hsl(var(--bc) / 1);\n}.checked\\:checkbox:checked:checked,.checked\\:checkbox:checked[checked="true"],.checked\\:checkbox:checked[aria-checked="true"] {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n  background-repeat: no-repeat;\n  animation: checkmark var(--animation-input, 0.2s) ease-out;\n  background-image: linear-gradient(-45deg, transparent 65%, hsl(var(--chkbg)) 65.99%),\n      linear-gradient(45deg, transparent 75%, hsl(var(--chkbg)) 75.99%),\n      linear-gradient(-45deg, hsl(var(--chkbg)) 40%, transparent 40.99%),\n      linear-gradient(\n        45deg,\n        hsl(var(--chkbg)) 30%,\n        hsl(var(--chkfg)) 30.99%,\n        hsl(var(--chkfg)) 40%,\n        transparent 40.99%\n      ),\n      linear-gradient(-45deg, hsl(var(--chkfg)) 50%, hsl(var(--chkbg)) 50.99%);\n}.checked\\:checkbox:checked:indeterminate {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n  background-repeat: no-repeat;\n  animation: checkmark var(--animation-input, 0.2s) ease-out;\n  background-image: linear-gradient(90deg, transparent 80%, hsl(var(--chkbg)) 80%),\n      linear-gradient(-90deg, transparent 80%, hsl(var(--chkbg)) 80%),\n      linear-gradient(\n        0deg,\n        hsl(var(--chkbg)) 43%,\n        hsl(var(--chkfg)) 43%,\n        hsl(var(--chkfg)) 57%,\n        hsl(var(--chkbg)) 57%\n      );\n}.checked\\:checkbox:checked:disabled {\n  cursor: not-allowed;\n  border-color: transparent;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n  opacity: 0.2;\n}[dir="rtl"] .checked\\:checkbox:checked:checked,\n    [dir="rtl"] .checked\\:checkbox:checked[checked="true"],\n    [dir="rtl"] .checked\\:checkbox:checked[aria-checked="true"] {\n  background-image: linear-gradient(45deg, transparent 65%, hsl(var(--chkbg)) 65.99%),\n        linear-gradient(-45deg, transparent 75%, hsl(var(--chkbg)) 75.99%),\n        linear-gradient(45deg, hsl(var(--chkbg)) 40%, transparent 40.99%),\n        linear-gradient(\n          -45deg,\n          hsl(var(--chkbg)) 30%,\n          hsl(var(--chkfg)) 30.99%,\n          hsl(var(--chkfg)) 40%,\n          transparent 40.99%\n        ),\n        linear-gradient(45deg, hsl(var(--chkfg)) 50%, hsl(var(--chkbg)) 50.99%);\n}.checked\\:checkbox-xs:checked {\n  height: 16px;\n  width: 16px;\n}@media (min-width: 768px) {\n\n  .md\\:btn-sm {\n    height: 32px;\n    padding-left: 12px;\n    padding-right: 12px;\n    min-height: 32px;\n    font-size: 14px;\n  }\n\n  .btn-square:where(.md\\:btn-sm) {\n    height: 32px;\n    width: 32px;\n    padding: 0px;\n  }\n\n  .btn-circle:where(.md\\:btn-sm) {\n    height: 32px;\n    width: 32px;\n    border-radius: 9999px;\n    padding: 0px;\n  }\n}.focus-within\\:outline:focus-within {\n  outline-style: solid;\n}.hover\\:bg-\\[\\#0A2540\\]:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(10 37 64 / var(--tw-bg-opacity));\n}.hover\\:bg-base-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b2) / var(--tw-bg-opacity));\n}.focus\\:text-clip:focus {\n  text-overflow: clip;\n}@media (min-width: 640px) {\n\n  .sm\\:inline {\n    display: inline;\n  }\n}@media (min-width: 768px) {\n\n  .md\\:bottom-4 {\n    bottom: 16px;\n  }\n\n  .md\\:-mb-4 {\n    margin-bottom: -16px;\n  }\n\n  .md\\:mt-4 {\n    margin-top: 16px;\n  }\n\n  .md\\:mt-7 {\n    margin-top: 28px;\n  }\n\n  .md\\:mt-8 {\n    margin-top: 32px;\n  }\n\n  .md\\:block {\n    display: block;\n  }\n\n  .md\\:inline {\n    display: inline;\n  }\n\n  .md\\:flex {\n    display: flex;\n  }\n\n  .md\\:hidden {\n    display: none;\n  }\n\n  .md\\:h-12 {\n    height: 48px;\n  }\n\n  .md\\:max-h-12 {\n    max-height: 48px;\n  }\n\n  .md\\:max-h-24 {\n    max-height: 96px;\n  }\n\n  .md\\:w-12 {\n    width: 48px;\n  }\n\n  .md\\:px-4 {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n\n  .md\\:text-2xl {\n    font-size: 24px;\n    line-height: 32px;\n  }\n\n  .md\\:text-3xl {\n    font-size: 30px;\n    line-height: 36px;\n  }\n}@media (min-width: 1024px) {\n\n  .lg\\:h-4 {\n    height: 16px;\n  }\n\n  .lg\\:w-4 {\n    width: 16px;\n  }\n\n  .lg\\:text-\\[0\\.55rem\\] {\n    font-size: 8.8px;\n  }\n\n  .lg\\:text-base {\n    font-size: 16px;\n    line-height: 24px;\n  }\n\n  .lg\\:text-xs {\n    font-size: 12px;\n    line-height: 16px;\n  }\n\n  .lg\\:leading-\\[0\\.65rem\\] {\n    line-height: 10.4px;\n  }\n}',
                    "",
                ]);
                const p = c;
            },
            314: (e) => {
                e.exports = function (e) {
                    var t = [];
                    return (
                        (t.toString = function () {
                            return this.map(function (t) {
                                var n = "",
                                    i = void 0 !== t[5];
                                return (
                                    t[4] && (n += "@supports (".concat(t[4], ") {")),
                                    t[2] && (n += "@media ".concat(t[2], " {")),
                                    i && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")),
                                    (n += e(t)),
                                    i && (n += "}"),
                                    t[2] && (n += "}"),
                                    t[4] && (n += "}"),
                                    n
                                );
                            }).join("");
                        }),
                        (t.i = function (e, n, i, a, r) {
                            "string" == typeof e && (e = [[null, e, void 0]]);
                            var o = {};
                            if (i)
                                for (var s = 0; s < this.length; s++) {
                                    var l = this[s][0];
                                    null != l && (o[l] = !0);
                                }
                            for (var d = 0; d < e.length; d++) {
                                var c = [].concat(e[d]);
                                (i && o[c[0]]) ||
                                    (void 0 !== r && (void 0 === c[5] || (c[1] = "@layer".concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {").concat(c[1], "}")), (c[5] = r)),
                                    n && (c[2] ? ((c[1] = "@media ".concat(c[2], " {").concat(c[1], "}")), (c[2] = n)) : (c[2] = n)),
                                    a && (c[4] ? ((c[1] = "@supports (".concat(c[4], ") {").concat(c[1], "}")), (c[4] = a)) : (c[4] = "".concat(a))),
                                    t.push(c));
                            }
                        }),
                        t
                    );
                };
            },
            417: (e) => {
                e.exports = function (e, t) {
                    return (
                        t || (t = {}),
                        e
                            ? ((e = String(e.__esModule ? e.default : e)),
                              /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                              t.hash && (e += t.hash),
                              /["'() \t\n]|(%20)/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e)
                            : e
                    );
                };
            },
            601: (e) => {
                e.exports = function (e) {
                    return e[1];
                };
            },
            262: (e, t) => {
                t.A = (e, t) => {
                    const n = e.__vccOpts || e;
                    for (const [e, i] of t) n[e] = i;
                    return n;
                };
            },
            876: (e) => {
                e.exports =
                    "data:image/svg+xml,%3Csvg width=%2724%27 height=%2724%27 stroke=%27%23000%27 viewBox=%270 0 24 24%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cstyle%3E.spinner_V8m1%7Btransform-origin:center;animation:spinner_zKoa 2s linear infinite%7D.spinner_V8m1 circle%7Bstroke-linecap:round;animation:spinner_YpZS 1.5s ease-out infinite%7D%40keyframes spinner_zKoa%7B100%25%7Btransform:rotate%28360deg%29%7D%7D%40keyframes spinner_YpZS%7B0%25%7Bstroke-dasharray:0 150;stroke-dashoffset:0%7D47.5%25%7Bstroke-dasharray:42 150;stroke-dashoffset:-16%7D95%25%2C100%25%7Bstroke-dasharray:42 150;stroke-dashoffset:-59%7D%7D%3C%2Fstyle%3E%3Cg class=%27spinner_V8m1%27%3E%3Ccircle cx=%2712%27 cy=%2712%27 r=%279.5%27 fill=%27none%27 stroke-width=%273%27%3E%3C%2Fcircle%3E%3C%2Fg%3E%3C%2Fsvg%3E";
            },
        },
        i = {};
    function a(e) {
        var t = i[e];
        if (void 0 !== t) return t.exports;
        var r = (i[e] = { id: e, exports: {} });
        return n[e].call(r.exports, r, r.exports, a), r.exports;
    }
    function r(e, t) {
        const n = Object.create(null),
            i = e.split(",");
        for (let e = 0; e < i.length; e++) n[i[e]] = !0;
        return t ? (e) => !!n[e.toLowerCase()] : (e) => !!n[e];
    }
    (a.m = n),
        (a.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return a.d(t, { a: t }), t;
        }),
        (a.d = (e, t) => {
            for (var n in t) a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
        (a.f = {}),
        (a.e = (e) => Promise.all(Object.keys(a.f).reduce((t, n) => (a.f[n](e, t), t), []))),
        (a.u = (e) => e + "-" + a.h() + ".js"),
        (a.h = () => "c0816ad58b7377bcb1e6"),
        (a.g = (function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if ("object" == typeof window) return window;
            }
        })()),
        (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (e = {}),
        (t = "docuseal_website:"),
        (a.l = (n, i, r, o) => {
            if (e[n]) e[n].push(i);
            else {
                var s, l;
                if (void 0 !== r)
                    for (var d = document.getElementsByTagName("script"), c = 0; c < d.length; c++) {
                        var u = d[c];
                        if (u.getAttribute("src") == n || u.getAttribute("data-webpack") == t + r) {
                            s = u;
                            break;
                        }
                    }
                s || ((l = !0), ((s = document.createElement("script")).charset = "utf-8"), (s.timeout = 120), a.nc && s.setAttribute("nonce", a.nc), s.setAttribute("data-webpack", t + r), (s.src = n)), (e[n] = [i]);
                var p = (t, i) => {
                        (s.onerror = s.onload = null), clearTimeout(h);
                        var a = e[n];
                        if ((delete e[n], s.parentNode && s.parentNode.removeChild(s), a && a.forEach((e) => e(i)), t)) return t(i);
                    },
                    h = setTimeout(p.bind(null, void 0, { type: "timeout", target: s }), 12e4);
                (s.onerror = p.bind(null, s.onerror)), (s.onload = p.bind(null, s.onload)), l && document.head.appendChild(s);
            }
        }),
        (a.r = (e) => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (a.p = "https://docuseal.com/js/"),
        (() => {
            a.b = document.baseURI || self.location.href;
            var e = { 325: 0 };
            a.f.j = (t, n) => {
                var i = a.o(e, t) ? e[t] : void 0;
                if (0 !== i)
                    if (i) n.push(i[2]);
                    else {
                        var r = new Promise((n, a) => (i = e[t] = [n, a]));
                        n.push((i[2] = r));
                        var o = a.p + a.u(t),
                            s = new Error();
                        a.l(
                            o,
                            (n) => {
                                if (a.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
                                    var r = n && ("load" === n.type ? "missing" : n.type),
                                        o = n && n.target && n.target.src;
                                    (s.message = "Loading chunk " + t + " failed.\n(" + r + ": " + o + ")"), (s.name = "ChunkLoadError"), (s.type = r), (s.request = o), i[1](s);
                                }
                            },
                            "chunk-" + t,
                            t
                        );
                    }
            };
            var t = (t, n) => {
                    var i,
                        r,
                        o = n[0],
                        s = n[1],
                        l = n[2],
                        d = 0;
                    if (o.some((t) => 0 !== e[t])) {
                        for (i in s) a.o(s, i) && (a.m[i] = s[i]);
                        l && l(a);
                    }
                    for (t && t(n); d < o.length; d++) (r = o[d]), a.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                },
                n = (self.webpackChunkdocuseal_website = self.webpackChunkdocuseal_website || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    const o = {},
        s = [],
        l = () => {},
        d = () => !1,
        c = /^on[^a-z]/,
        u = (e) => c.test(e),
        p = (e) => e.startsWith("onUpdate:"),
        h = Object.assign,
        m = (e, t) => {
            const n = e.indexOf(t);
            n > -1 && e.splice(n, 1);
        },
        b = Object.prototype.hasOwnProperty,
        g = (e, t) => b.call(e, t),
        f = Array.isArray,
        v = (e) => "[object Map]" === I(e),
        y = (e) => "[object Set]" === I(e),
        _ = (e) => "[object Date]" === I(e),
        w = (e) => "function" == typeof e,
        x = (e) => "string" == typeof e,
        k = (e) => "symbol" == typeof e,
        S = (e) => null !== e && "object" == typeof e,
        C = (e) => S(e) && w(e.then) && w(e.catch),
        F = Object.prototype.toString,
        I = (e) => F.call(e),
        z = (e) => I(e).slice(8, -1),
        M = (e) => "[object Object]" === I(e),
        P = (e) => x(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e,
        q = r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
        j = (e) => {
            const t = Object.create(null);
            return (n) => t[n] || (t[n] = e(n));
        },
        E = /-(\w)/g,
        A = j((e) => e.replace(E, (e, t) => (t ? t.toUpperCase() : ""))),
        T = /\B([A-Z])/g,
        D = j((e) => e.replace(T, "-$1").toLowerCase()),
        O = j((e) => e.charAt(0).toUpperCase() + e.slice(1)),
        V = j((e) => (e ? `on${O(e)}` : "")),
        B = (e, t) => !Object.is(e, t),
        R = (e, t) => {
            for (let n = 0; n < e.length; n++) e[n](t);
        },
        $ = (e, t, n) => {
            Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
        },
        U = (e) => {
            const t = parseFloat(e);
            return isNaN(t) ? e : t;
        },
        L = (e) => {
            const t = x(e) ? Number(e) : NaN;
            return isNaN(t) ? e : t;
        };
    let N;
    const W = () => N || (N = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== a.g ? a.g : {});
    function G(e) {
        if (f(e)) {
            const t = {};
            for (let n = 0; n < e.length; n++) {
                const i = e[n],
                    a = x(i) ? Z(i) : G(i);
                if (a) for (const e in a) t[e] = a[e];
            }
            return t;
        }
        return x(e) || S(e) ? e : void 0;
    }
    const K = /;(?![^(]*\))/g,
        H = /:([^]+)/,
        Y = /\/\*[^]*?\*\//g;
    function Z(e) {
        const t = {};
        return (
            e
                .replace(Y, "")
                .split(K)
                .forEach((e) => {
                    if (e) {
                        const n = e.split(H);
                        n.length > 1 && (t[n[0].trim()] = n[1].trim());
                    }
                }),
            t
        );
    }
    function J(e) {
        let t = "";
        if (x(e)) t = e;
        else if (f(e))
            for (let n = 0; n < e.length; n++) {
                const i = J(e[n]);
                i && (t += i + " ");
            }
        else if (S(e)) for (const n in e) e[n] && (t += n + " ");
        return t.trim();
    }
    const Q = r("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
    function X(e) {
        return !!e || "" === e;
    }
    function ee(e, t) {
        if (e === t) return !0;
        let n = _(e),
            i = _(t);
        if (n || i) return !(!n || !i) && e.getTime() === t.getTime();
        if (((n = k(e)), (i = k(t)), n || i)) return e === t;
        if (((n = f(e)), (i = f(t)), n || i))
            return (
                !(!n || !i) &&
                (function (e, t) {
                    if (e.length !== t.length) return !1;
                    let n = !0;
                    for (let i = 0; n && i < e.length; i++) n = ee(e[i], t[i]);
                    return n;
                })(e, t)
            );
        if (((n = S(e)), (i = S(t)), n || i)) {
            if (!n || !i) return !1;
            if (Object.keys(e).length !== Object.keys(t).length) return !1;
            for (const n in e) {
                const i = e.hasOwnProperty(n),
                    a = t.hasOwnProperty(n);
                if ((i && !a) || (!i && a) || !ee(e[n], t[n])) return !1;
            }
        }
        return String(e) === String(t);
    }
    const te = (e) => (x(e) ? e : null == e ? "" : f(e) || (S(e) && (e.toString === F || !w(e.toString))) ? JSON.stringify(e, ne, 2) : String(e)),
        ne = (e, t) =>
            t && t.__v_isRef ? ne(e, t.value) : v(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n]) => ((e[`${t} =>`] = n), e), {}) } : y(t) ? { [`Set(${t.size})`]: [...t.values()] } : !S(t) || f(t) || M(t) ? t : String(t);
    let ie;
    class ae {
        constructor(e = !1) {
            (this.detached = e), (this._active = !0), (this.effects = []), (this.cleanups = []), (this.parent = ie), !e && ie && (this.index = (ie.scopes || (ie.scopes = [])).push(this) - 1);
        }
        get active() {
            return this._active;
        }
        run(e) {
            if (this._active) {
                const t = ie;
                try {
                    return (ie = this), e();
                } finally {
                    ie = t;
                }
            }
        }
        on() {
            ie = this;
        }
        off() {
            ie = this.parent;
        }
        stop(e) {
            if (this._active) {
                let t, n;
                for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
                for (t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
                if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
                if (!this.detached && this.parent && !e) {
                    const e = this.parent.scopes.pop();
                    e && e !== this && ((this.parent.scopes[this.index] = e), (e.index = this.index));
                }
                (this.parent = void 0), (this._active = !1);
            }
        }
    }
    const re = (e) => {
            const t = new Set(e);
            return (t.w = 0), (t.n = 0), t;
        },
        oe = (e) => (e.w & ce) > 0,
        se = (e) => (e.n & ce) > 0,
        le = new WeakMap();
    let de = 0,
        ce = 1;
    const ue = 30;
    let pe;
    const he = Symbol(""),
        me = Symbol("");
    class be {
        constructor(e, t = null, n) {
            (this.fn = e),
                (this.scheduler = t),
                (this.active = !0),
                (this.deps = []),
                (this.parent = void 0),
                (function (e, t = ie) {
                    t && t.active && t.effects.push(e);
                })(this, n);
        }
        run() {
            if (!this.active) return this.fn();
            let e = pe,
                t = fe;
            for (; e; ) {
                if (e === this) return;
                e = e.parent;
            }
            try {
                return (
                    (this.parent = pe),
                    (pe = this),
                    (fe = !0),
                    (ce = 1 << ++de),
                    de <= ue
                        ? (({ deps: e }) => {
                              if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= ce;
                          })(this)
                        : ge(this),
                    this.fn()
                );
            } finally {
                de <= ue &&
                    ((e) => {
                        const { deps: t } = e;
                        if (t.length) {
                            let n = 0;
                            for (let i = 0; i < t.length; i++) {
                                const a = t[i];
                                oe(a) && !se(a) ? a.delete(e) : (t[n++] = a), (a.w &= ~ce), (a.n &= ~ce);
                            }
                            t.length = n;
                        }
                    })(this),
                    (ce = 1 << --de),
                    (pe = this.parent),
                    (fe = t),
                    (this.parent = void 0),
                    this.deferStop && this.stop();
            }
        }
        stop() {
            pe === this ? (this.deferStop = !0) : this.active && (ge(this), this.onStop && this.onStop(), (this.active = !1));
        }
    }
    function ge(e) {
        const { deps: t } = e;
        if (t.length) {
            for (let n = 0; n < t.length; n++) t[n].delete(e);
            t.length = 0;
        }
    }
    let fe = !0;
    const ve = [];
    function ye() {
        ve.push(fe), (fe = !1);
    }
    function _e() {
        const e = ve.pop();
        fe = void 0 === e || e;
    }
    function we(e, t, n) {
        if (fe && pe) {
            let t = le.get(e);
            t || le.set(e, (t = new Map()));
            let i = t.get(n);
            i || t.set(n, (i = re())), xe(i);
        }
    }
    function xe(e, t) {
        let n = !1;
        de <= ue ? se(e) || ((e.n |= ce), (n = !oe(e))) : (n = !e.has(pe)), n && (e.add(pe), pe.deps.push(e));
    }
    function ke(e, t, n, i, a, r) {
        const o = le.get(e);
        if (!o) return;
        let s = [];
        if ("clear" === t) s = [...o.values()];
        else if ("length" === n && f(e)) {
            const e = Number(i);
            o.forEach((t, n) => {
                ("length" === n || n >= e) && s.push(t);
            });
        } else
            switch ((void 0 !== n && s.push(o.get(n)), t)) {
                case "add":
                    f(e) ? P(n) && s.push(o.get("length")) : (s.push(o.get(he)), v(e) && s.push(o.get(me)));
                    break;
                case "delete":
                    f(e) || (s.push(o.get(he)), v(e) && s.push(o.get(me)));
                    break;
                case "set":
                    v(e) && s.push(o.get(he));
            }
        if (1 === s.length) s[0] && Se(s[0]);
        else {
            const e = [];
            for (const t of s) t && e.push(...t);
            Se(re(e));
        }
    }
    function Se(e, t) {
        const n = f(e) ? e : [...e];
        for (const e of n) e.computed && Ce(e);
        for (const e of n) e.computed || Ce(e);
    }
    function Ce(e, t) {
        (e !== pe || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
    }
    const Fe = r("__proto__,__v_isRef,__isVue"),
        Ie = new Set(
            Object.getOwnPropertyNames(Symbol)
                .filter((e) => "arguments" !== e && "caller" !== e)
                .map((e) => Symbol[e])
                .filter(k)
        ),
        ze = Ae(),
        Me = Ae(!1, !0),
        Pe = Ae(!0),
        qe = je();
    function je() {
        const e = {};
        return (
            ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
                e[t] = function (...e) {
                    const n = ft(this);
                    for (let e = 0, t = this.length; e < t; e++) we(n, 0, e + "");
                    const i = n[t](...e);
                    return -1 === i || !1 === i ? n[t](...e.map(ft)) : i;
                };
            }),
            ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
                e[t] = function (...e) {
                    ye();
                    const n = ft(this)[t].apply(this, e);
                    return _e(), n;
                };
            }),
            e
        );
    }
    function Ee(e) {
        const t = ft(this);
        return we(t, 0, e), t.hasOwnProperty(e);
    }
    function Ae(e = !1, t = !1) {
        return function (n, i, a) {
            if ("__v_isReactive" === i) return !e;
            if ("__v_isReadonly" === i) return e;
            if ("__v_isShallow" === i) return t;
            if ("__v_raw" === i && a === (e ? (t ? dt : lt) : t ? st : ot).get(n)) return n;
            const r = f(n);
            if (!e) {
                if (r && g(qe, i)) return Reflect.get(qe, i, a);
                if ("hasOwnProperty" === i) return Ee;
            }
            const o = Reflect.get(n, i, a);
            return (k(i) ? Ie.has(i) : Fe(i)) ? o : (e || we(n, 0, i), t ? o : wt(o) ? (r && P(i) ? o : o.value) : S(o) ? (e ? ut(o) : ct(o)) : o);
        };
    }
    function Te(e = !1) {
        return function (t, n, i, a) {
            let r = t[n];
            if (mt(r) && wt(r) && !wt(i)) return !1;
            if (!e && (bt(i) || mt(i) || ((r = ft(r)), (i = ft(i))), !f(t) && wt(r) && !wt(i))) return (r.value = i), !0;
            const o = f(t) && P(n) ? Number(n) < t.length : g(t, n),
                s = Reflect.set(t, n, i, a);
            return t === ft(a) && (o ? B(i, r) && ke(t, "set", n, i) : ke(t, "add", n, i)), s;
        };
    }
    const De = {
            get: ze,
            set: Te(),
            deleteProperty: function (e, t) {
                const n = g(e, t),
                    i = (e[t], Reflect.deleteProperty(e, t));
                return i && n && ke(e, "delete", t, void 0), i;
            },
            has: function (e, t) {
                const n = Reflect.has(e, t);
                return (k(t) && Ie.has(t)) || we(e, 0, t), n;
            },
            ownKeys: function (e) {
                return we(e, 0, f(e) ? "length" : he), Reflect.ownKeys(e);
            },
        },
        Oe = { get: Pe, set: (e, t) => !0, deleteProperty: (e, t) => !0 },
        Ve = h({}, De, { get: Me, set: Te(!0) }),
        Be = (e) => e,
        Re = (e) => Reflect.getPrototypeOf(e);
    function $e(e, t, n = !1, i = !1) {
        const a = ft((e = e.__v_raw)),
            r = ft(t);
        n || (t !== r && we(a, 0, t), we(a, 0, r));
        const { has: o } = Re(a),
            s = i ? Be : n ? _t : yt;
        return o.call(a, t) ? s(e.get(t)) : o.call(a, r) ? s(e.get(r)) : void (e !== a && e.get(t));
    }
    function Ue(e, t = !1) {
        const n = this.__v_raw,
            i = ft(n),
            a = ft(e);
        return t || (e !== a && we(i, 0, e), we(i, 0, a)), e === a ? n.has(e) : n.has(e) || n.has(a);
    }
    function Le(e, t = !1) {
        return (e = e.__v_raw), !t && we(ft(e), 0, he), Reflect.get(e, "size", e);
    }
    function Ne(e) {
        e = ft(e);
        const t = ft(this);
        return Re(t).has.call(t, e) || (t.add(e), ke(t, "add", e, e)), this;
    }
    function We(e, t) {
        t = ft(t);
        const n = ft(this),
            { has: i, get: a } = Re(n);
        let r = i.call(n, e);
        r || ((e = ft(e)), (r = i.call(n, e)));
        const o = a.call(n, e);
        return n.set(e, t), r ? B(t, o) && ke(n, "set", e, t) : ke(n, "add", e, t), this;
    }
    function Ge(e) {
        const t = ft(this),
            { has: n, get: i } = Re(t);
        let a = n.call(t, e);
        a || ((e = ft(e)), (a = n.call(t, e))), i && i.call(t, e);
        const r = t.delete(e);
        return a && ke(t, "delete", e, void 0), r;
    }
    function Ke() {
        const e = ft(this),
            t = 0 !== e.size,
            n = e.clear();
        return t && ke(e, "clear", void 0, void 0), n;
    }
    function He(e, t) {
        return function (n, i) {
            const a = this,
                r = a.__v_raw,
                o = ft(r),
                s = t ? Be : e ? _t : yt;
            return !e && we(o, 0, he), r.forEach((e, t) => n.call(i, s(e), s(t), a));
        };
    }
    function Ye(e, t, n) {
        return function (...i) {
            const a = this.__v_raw,
                r = ft(a),
                o = v(r),
                s = "entries" === e || (e === Symbol.iterator && o),
                l = "keys" === e && o,
                d = a[e](...i),
                c = n ? Be : t ? _t : yt;
            return (
                !t && we(r, 0, l ? me : he),
                {
                    next() {
                        const { value: e, done: t } = d.next();
                        return t ? { value: e, done: t } : { value: s ? [c(e[0]), c(e[1])] : c(e), done: t };
                    },
                    [Symbol.iterator]() {
                        return this;
                    },
                }
            );
        };
    }
    function Ze(e) {
        return function (...t) {
            return "delete" !== e && this;
        };
    }
    function Je() {
        const e = {
                get(e) {
                    return $e(this, e);
                },
                get size() {
                    return Le(this);
                },
                has: Ue,
                add: Ne,
                set: We,
                delete: Ge,
                clear: Ke,
                forEach: He(!1, !1),
            },
            t = {
                get(e) {
                    return $e(this, e, !1, !0);
                },
                get size() {
                    return Le(this);
                },
                has: Ue,
                add: Ne,
                set: We,
                delete: Ge,
                clear: Ke,
                forEach: He(!1, !0),
            },
            n = {
                get(e) {
                    return $e(this, e, !0);
                },
                get size() {
                    return Le(this, !0);
                },
                has(e) {
                    return Ue.call(this, e, !0);
                },
                add: Ze("add"),
                set: Ze("set"),
                delete: Ze("delete"),
                clear: Ze("clear"),
                forEach: He(!0, !1),
            },
            i = {
                get(e) {
                    return $e(this, e, !0, !0);
                },
                get size() {
                    return Le(this, !0);
                },
                has(e) {
                    return Ue.call(this, e, !0);
                },
                add: Ze("add"),
                set: Ze("set"),
                delete: Ze("delete"),
                clear: Ze("clear"),
                forEach: He(!0, !0),
            };
        return (
            ["keys", "values", "entries", Symbol.iterator].forEach((a) => {
                (e[a] = Ye(a, !1, !1)), (n[a] = Ye(a, !0, !1)), (t[a] = Ye(a, !1, !0)), (i[a] = Ye(a, !0, !0));
            }),
            [e, n, t, i]
        );
    }
    const [Qe, Xe, et, tt] = Je();
    function nt(e, t) {
        const n = t ? (e ? tt : et) : e ? Xe : Qe;
        return (t, i, a) => ("__v_isReactive" === i ? !e : "__v_isReadonly" === i ? e : "__v_raw" === i ? t : Reflect.get(g(n, i) && i in t ? n : t, i, a));
    }
    const it = { get: nt(!1, !1) },
        at = { get: nt(!1, !0) },
        rt = { get: nt(!0, !1) },
        ot = new WeakMap(),
        st = new WeakMap(),
        lt = new WeakMap(),
        dt = new WeakMap();
    function ct(e) {
        return mt(e) ? e : pt(e, !1, De, it, ot);
    }
    function ut(e) {
        return pt(e, !0, Oe, rt, lt);
    }
    function pt(e, t, n, i, a) {
        if (!S(e)) return e;
        if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
        const r = a.get(e);
        if (r) return r;
        const o =
            (s = e).__v_skip || !Object.isExtensible(s)
                ? 0
                : (function (e) {
                      switch (e) {
                          case "Object":
                          case "Array":
                              return 1;
                          case "Map":
                          case "Set":
                          case "WeakMap":
                          case "WeakSet":
                              return 2;
                          default:
                              return 0;
                      }
                  })(z(s));
        var s;
        if (0 === o) return e;
        const l = new Proxy(e, 2 === o ? i : n);
        return a.set(e, l), l;
    }
    function ht(e) {
        return mt(e) ? ht(e.__v_raw) : !(!e || !e.__v_isReactive);
    }
    function mt(e) {
        return !(!e || !e.__v_isReadonly);
    }
    function bt(e) {
        return !(!e || !e.__v_isShallow);
    }
    function gt(e) {
        return ht(e) || mt(e);
    }
    function ft(e) {
        const t = e && e.__v_raw;
        return t ? ft(t) : e;
    }
    function vt(e) {
        return $(e, "__v_skip", !0), e;
    }
    const yt = (e) => (S(e) ? ct(e) : e),
        _t = (e) => (S(e) ? ut(e) : e);
    function wt(e) {
        return !(!e || !0 !== e.__v_isRef);
    }
    const xt = {
        get: (e, t, n) => {
            return wt((i = Reflect.get(e, t, n))) ? i.value : i;
            var i;
        },
        set: (e, t, n, i) => {
            const a = e[t];
            return wt(a) && !wt(n) ? ((a.value = n), !0) : Reflect.set(e, t, n, i);
        },
    };
    function kt(e) {
        return ht(e) ? e : new Proxy(e, xt);
    }
    class St {
        constructor(e, t, n, i) {
            (this._setter = t),
                (this.dep = void 0),
                (this.__v_isRef = !0),
                (this.__v_isReadonly = !1),
                (this._dirty = !0),
                (this.effect = new be(e, () => {
                    this._dirty ||
                        ((this._dirty = !0),
                        (function (e) {
                            const t = (e = ft(e)).dep;
                            t && Se(t);
                        })(this));
                })),
                (this.effect.computed = this),
                (this.effect.active = this._cacheable = !i),
                (this.__v_isReadonly = n);
        }
        get value() {
            const e = ft(this);
            return (t = e), fe && pe && xe((t = ft(t)).dep || (t.dep = re())), (!e._dirty && e._cacheable) || ((e._dirty = !1), (e._value = e.effect.run())), e._value;
            var t;
        }
        set value(e) {
            this._setter(e);
        }
    }
    function Ct(e, t, n, i) {
        let a;
        try {
            a = i ? e(...i) : e();
        } catch (e) {
            It(e, t, n);
        }
        return a;
    }
    function Ft(e, t, n, i) {
        if (w(e)) {
            const a = Ct(e, t, n, i);
            return (
                a &&
                    C(a) &&
                    a.catch((e) => {
                        It(e, t, n);
                    }),
                a
            );
        }
        const a = [];
        for (let r = 0; r < e.length; r++) a.push(Ft(e[r], t, n, i));
        return a;
    }
    function It(e, t, n, i = !0) {
        if ((t && t.vnode, t)) {
            let i = t.parent;
            const a = t.proxy,
                r = n;
            for (; i; ) {
                const t = i.ec;
                if (t) for (let n = 0; n < t.length; n++) if (!1 === t[n](e, a, r)) return;
                i = i.parent;
            }
            const o = t.appContext.config.errorHandler;
            if (o) return void Ct(o, null, 10, [e, a, r]);
        }
        !(function (e) {
            console.error(e);
        })(e);
    }
    let zt = !1,
        Mt = !1;
    const Pt = [];
    let qt = 0;
    const jt = [];
    let Et = null,
        At = 0;
    const Tt = Promise.resolve();
    let Dt = null;
    function Ot(e) {
        const t = Dt || Tt;
        return e ? t.then(this ? e.bind(this) : e) : t;
    }
    function Vt(e) {
        (Pt.length && Pt.includes(e, zt && e.allowRecurse ? qt + 1 : qt)) ||
            (null == e.id
                ? Pt.push(e)
                : Pt.splice(
                      (function (e) {
                          let t = qt + 1,
                              n = Pt.length;
                          for (; t < n; ) {
                              const i = (t + n) >>> 1;
                              Ut(Pt[i]) < e ? (t = i + 1) : (n = i);
                          }
                          return t;
                      })(e.id),
                      0,
                      e
                  ),
            Bt());
    }
    function Bt() {
        zt || Mt || ((Mt = !0), (Dt = Tt.then(Nt)));
    }
    function Rt(e, t = zt ? qt + 1 : 0) {
        for (; t < Pt.length; t++) {
            const e = Pt[t];
            e && e.pre && (Pt.splice(t, 1), t--, e());
        }
    }
    function $t(e) {
        if (jt.length) {
            const e = [...new Set(jt)];
            if (((jt.length = 0), Et)) return void Et.push(...e);
            for (Et = e, Et.sort((e, t) => Ut(e) - Ut(t)), At = 0; At < Et.length; At++) Et[At]();
            (Et = null), (At = 0);
        }
    }
    const Ut = (e) => (null == e.id ? 1 / 0 : e.id),
        Lt = (e, t) => {
            const n = Ut(e) - Ut(t);
            if (0 === n) {
                if (e.pre && !t.pre) return -1;
                if (t.pre && !e.pre) return 1;
            }
            return n;
        };
    function Nt(e) {
        (Mt = !1), (zt = !0), Pt.sort(Lt);
        try {
            for (qt = 0; qt < Pt.length; qt++) {
                const e = Pt[qt];
                e && !1 !== e.active && Ct(e, null, 14);
            }
        } finally {
            (qt = 0), (Pt.length = 0), $t(), (zt = !1), (Dt = null), (Pt.length || jt.length) && Nt(e);
        }
    }
    let Wt,
        Gt = [],
        Kt = !1;
    function Ht(e, ...t) {
        Wt ? Wt.emit(e, ...t) : Kt || Gt.push({ event: e, args: t });
    }
    function Yt(e, t) {
        var n, i;
        (Wt = e),
            Wt
                ? ((Wt.enabled = !0), Gt.forEach(({ event: e, args: t }) => Wt.emit(e, ...t)), (Gt = []))
                : "undefined" != typeof window && window.HTMLElement && !(null == (i = null == (n = window.navigator) ? void 0 : n.userAgent) ? void 0 : i.includes("jsdom"))
                ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((e) => {
                      Yt(e, t);
                  }),
                  setTimeout(() => {
                      Wt || ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null), (Kt = !0), (Gt = []));
                  }, 3e3))
                : ((Kt = !0), (Gt = []));
    }
    const Zt = en("component:added"),
        Jt = en("component:updated"),
        Qt = en("component:removed"),
        Xt = (e) => {
            Wt && "function" == typeof Wt.cleanupBuffer && !Wt.cleanupBuffer(e) && Qt(e);
        };
    function en(e) {
        return (t) => {
            Ht(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
        };
    }
    function tn(e, t, ...n) {
        if (e.isUnmounted) return;
        const i = e.vnode.props || o;
        let a = n;
        const r = t.startsWith("update:"),
            s = r && t.slice(7);
        if (s && s in i) {
            const e = `${"modelValue" === s ? "model" : s}Modifiers`,
                { number: t, trim: r } = i[e] || o;
            r && (a = n.map((e) => (x(e) ? e.trim() : e))), t && (a = n.map(U));
        }
        let l;
        __VUE_PROD_DEVTOOLS__ &&
            (function (e, t, n) {
                Ht("component:emit", e.appContext.app, e, t, n);
            })(e, t, a);
        let d = i[(l = V(t))] || i[(l = V(A(t)))];
        !d && r && (d = i[(l = V(D(t)))]), d && Ft(d, e, 6, a);
        const c = i[l + "Once"];
        if (c) {
            if (e.emitted) {
                if (e.emitted[l]) return;
            } else e.emitted = {};
            (e.emitted[l] = !0), Ft(c, e, 6, a);
        }
    }
    function nn(e, t, n = !1) {
        const i = t.emitsCache,
            a = i.get(e);
        if (void 0 !== a) return a;
        const r = e.emits;
        let o = {},
            s = !1;
        if (__VUE_OPTIONS_API__ && !w(e)) {
            const i = (e) => {
                const n = nn(e, t, !0);
                n && ((s = !0), h(o, n));
            };
            !n && t.mixins.length && t.mixins.forEach(i), e.extends && i(e.extends), e.mixins && e.mixins.forEach(i);
        }
        return r || s ? (f(r) ? r.forEach((e) => (o[e] = null)) : h(o, r), S(e) && i.set(e, o), o) : (S(e) && i.set(e, null), null);
    }
    function an(e, t) {
        return !(!e || !u(t)) && ((t = t.slice(2).replace(/Once$/, "")), g(e, t[0].toLowerCase() + t.slice(1)) || g(e, D(t)) || g(e, t));
    }
    let rn = null,
        on = null;
    function sn(e) {
        const t = rn;
        return (rn = e), (on = (e && e.type.__scopeId) || null), t;
    }
    function ln(e, t = rn, n) {
        if (!t) return e;
        if (e._n) return e;
        const i = (...n) => {
            i._d && ta(-1);
            const a = sn(t);
            let r;
            try {
                r = e(...n);
            } finally {
                sn(a), i._d && ta(1);
            }
            return __VUE_PROD_DEVTOOLS__ && Jt(t), r;
        };
        return (i._n = !0), (i._c = !0), (i._d = !0), i;
    }
    function dn(e) {
        const {
            type: t,
            vnode: n,
            proxy: i,
            withProxy: a,
            props: r,
            propsOptions: [o],
            slots: s,
            attrs: l,
            emit: d,
            render: c,
            renderCache: u,
            data: h,
            setupState: m,
            ctx: b,
            inheritAttrs: g,
        } = e;
        let f, v;
        const y = sn(e);
        try {
            if (4 & n.shapeFlag) {
                const e = a || i;
                (f = ga(c.call(e, e, u, r, m, h, b))), (v = l);
            } else {
                const e = t;
                (f = ga(e.length > 1 ? e(r, { attrs: l, slots: s, emit: d }) : e(r, null))), (v = t.props ? l : cn(l));
            }
        } catch (t) {
            (Ji.length = 0), It(t, e, 1), (f = ua(Yi));
        }
        let _ = f;
        if (v && !1 !== g) {
            const e = Object.keys(v),
                { shapeFlag: t } = _;
            e.length && 7 & t && (o && e.some(p) && (v = un(v, o)), (_ = pa(_, v)));
        }
        return n.dirs && ((_ = pa(_)), (_.dirs = _.dirs ? _.dirs.concat(n.dirs) : n.dirs)), n.transition && (_.transition = n.transition), (f = _), sn(y), f;
    }
    const cn = (e) => {
            let t;
            for (const n in e) ("class" === n || "style" === n || u(n)) && ((t || (t = {}))[n] = e[n]);
            return t;
        },
        un = (e, t) => {
            const n = {};
            for (const i in e) (p(i) && i.slice(9) in t) || (n[i] = e[i]);
            return n;
        };
    function pn(e, t, n) {
        const i = Object.keys(t);
        if (i.length !== Object.keys(e).length) return !0;
        for (let a = 0; a < i.length; a++) {
            const r = i[a];
            if (t[r] !== e[r] && !an(n, r)) return !0;
        }
        return !1;
    }
    const hn = {};
    function mn(e, t, n) {
        return bn(e, t, n);
    }
    function bn(e, t, { immediate: n, deep: i, flush: a, onTrack: r, onTrigger: s } = o) {
        var d;
        const c = ie === (null == (d = xa) ? void 0 : d.scope) ? xa : null;
        let u,
            p,
            h = !1,
            b = !1;
        if (
            (wt(e)
                ? ((u = () => e.value), (h = bt(e)))
                : ht(e)
                ? ((u = () => e), (i = !0))
                : f(e)
                ? ((b = !0), (h = e.some((e) => ht(e) || bt(e))), (u = () => e.map((e) => (wt(e) ? e.value : ht(e) ? vn(e) : w(e) ? Ct(e, c, 2) : void 0))))
                : (u = w(e)
                      ? t
                          ? () => Ct(e, c, 2)
                          : () => {
                                if (!c || !c.isUnmounted) return p && p(), Ft(e, c, 3, [v]);
                            }
                      : l),
            t && i)
        ) {
            const e = u;
            u = () => vn(e());
        }
        let g,
            v = (e) => {
                p = k.onStop = () => {
                    Ct(e, c, 4);
                };
            };
        if (ja) {
            if (((v = l), t ? n && Ft(t, c, 3, [u(), b ? [] : void 0, v]) : u(), "sync" !== a)) return l;
            {
                const e = Ba();
                g = e.__watcherHandles || (e.__watcherHandles = []);
            }
        }
        let y = b ? new Array(e.length).fill(hn) : hn;
        const _ = () => {
            if (k.active)
                if (t) {
                    const e = k.run();
                    (i || h || (b ? e.some((e, t) => B(e, y[t])) : B(e, y))) && (p && p(), Ft(t, c, 3, [e, y === hn ? void 0 : b && y[0] === hn ? [] : y, v]), (y = e));
                } else k.run();
        };
        let x;
        (_.allowRecurse = !!t), "sync" === a ? (x = _) : "post" === a ? (x = () => Oi(_, c && c.suspense)) : ((_.pre = !0), c && (_.id = c.uid), (x = () => Vt(_)));
        const k = new be(u, x);
        t ? (n ? _() : (y = k.run())) : "post" === a ? Oi(k.run.bind(k), c && c.suspense) : k.run();
        const S = () => {
            k.stop(), c && c.scope && m(c.scope.effects, k);
        };
        return g && g.push(S), S;
    }
    function gn(e, t, n) {
        const i = this.proxy,
            a = x(e) ? (e.includes(".") ? fn(i, e) : () => i[e]) : e.bind(i, i);
        let r;
        w(t) ? (r = t) : ((r = t.handler), (n = t));
        const o = xa;
        Ia(this);
        const s = bn(a, r.bind(i), n);
        return o ? Ia(o) : za(), s;
    }
    function fn(e, t) {
        const n = t.split(".");
        return () => {
            let t = e;
            for (let e = 0; e < n.length && t; e++) t = t[n[e]];
            return t;
        };
    }
    function vn(e, t) {
        if (!S(e) || e.__v_skip) return e;
        if ((t = t || new Set()).has(e)) return e;
        if ((t.add(e), wt(e))) vn(e.value, t);
        else if (f(e)) for (let n = 0; n < e.length; n++) vn(e[n], t);
        else if (y(e) || v(e))
            e.forEach((e) => {
                vn(e, t);
            });
        else if (M(e)) for (const n in e) vn(e[n], t);
        return e;
    }
    function yn(e, t) {
        const n = rn;
        if (null === n) return e;
        const i = Ta(n) || n.proxy,
            a = e.dirs || (e.dirs = []);
        for (let e = 0; e < t.length; e++) {
            let [n, r, s, l = o] = t[e];
            n && (w(n) && (n = { mounted: n, updated: n }), n.deep && vn(r), a.push({ dir: n, instance: i, value: r, oldValue: void 0, arg: s, modifiers: l }));
        }
        return e;
    }
    function _n(e, t, n, i) {
        const a = e.dirs,
            r = t && t.dirs;
        for (let o = 0; o < a.length; o++) {
            const s = a[o];
            r && (s.oldValue = r[o].value);
            let l = s.dir[i];
            l && (ye(), Ft(l, n, 8, [e.el, s, e, t]), _e());
        }
    }
    const wn = [Function, Array],
        xn = {
            mode: String,
            appear: Boolean,
            persisted: Boolean,
            onBeforeEnter: wn,
            onEnter: wn,
            onAfterEnter: wn,
            onEnterCancelled: wn,
            onBeforeLeave: wn,
            onLeave: wn,
            onAfterLeave: wn,
            onLeaveCancelled: wn,
            onBeforeAppear: wn,
            onAppear: wn,
            onAfterAppear: wn,
            onAppearCancelled: wn,
        },
        kn = {
            name: "BaseTransition",
            props: xn,
            setup(e, { slots: t }) {
                const n = ka(),
                    i = (function () {
                        const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() };
                        return (
                            Bn(() => {
                                e.isMounted = !0;
                            }),
                            Un(() => {
                                e.isUnmounting = !0;
                            }),
                            e
                        );
                    })();
                let a;
                return () => {
                    const r = t.default && Mn(t.default(), !0);
                    if (!r || !r.length) return;
                    let o = r[0];
                    if (r.length > 1) {
                        let e = !1;
                        for (const t of r)
                            if (t.type !== Yi) {
                                (o = t), (e = !0);
                                break;
                            }
                    }
                    const s = ft(e),
                        { mode: l } = s;
                    if (i.isLeaving) return Fn(o);
                    const d = In(o);
                    if (!d) return Fn(o);
                    const c = Cn(d, s, i, n);
                    zn(d, c);
                    const u = n.subTree,
                        p = u && In(u);
                    let h = !1;
                    const { getTransitionKey: m } = d.type;
                    if (m) {
                        const e = m();
                        void 0 === a ? (a = e) : e !== a && ((a = e), (h = !0));
                    }
                    if (p && p.type !== Yi && (!oa(d, p) || h)) {
                        const e = Cn(p, s, i, n);
                        if ((zn(p, e), "out-in" === l))
                            return (
                                (i.isLeaving = !0),
                                (e.afterLeave = () => {
                                    (i.isLeaving = !1), !1 !== n.update.active && n.update();
                                }),
                                Fn(o)
                            );
                        "in-out" === l &&
                            d.type !== Yi &&
                            (e.delayLeave = (e, t, n) => {
                                (Sn(i, p)[String(p.key)] = p),
                                    (e._leaveCb = () => {
                                        t(), (e._leaveCb = void 0), delete c.delayedLeave;
                                    }),
                                    (c.delayedLeave = n);
                            });
                    }
                    return o;
                };
            },
        };
    function Sn(e, t) {
        const { leavingVNodes: n } = e;
        let i = n.get(t.type);
        return i || ((i = Object.create(null)), n.set(t.type, i)), i;
    }
    function Cn(e, t, n, i) {
        const {
                appear: a,
                mode: r,
                persisted: o = !1,
                onBeforeEnter: s,
                onEnter: l,
                onAfterEnter: d,
                onEnterCancelled: c,
                onBeforeLeave: u,
                onLeave: p,
                onAfterLeave: h,
                onLeaveCancelled: m,
                onBeforeAppear: b,
                onAppear: g,
                onAfterAppear: v,
                onAppearCancelled: y,
            } = t,
            _ = String(e.key),
            w = Sn(n, e),
            x = (e, t) => {
                e && Ft(e, i, 9, t);
            },
            k = (e, t) => {
                const n = t[1];
                x(e, t), f(e) ? e.every((e) => e.length <= 1) && n() : e.length <= 1 && n();
            },
            S = {
                mode: r,
                persisted: o,
                beforeEnter(t) {
                    let i = s;
                    if (!n.isMounted) {
                        if (!a) return;
                        i = b || s;
                    }
                    t._leaveCb && t._leaveCb(!0);
                    const r = w[_];
                    r && oa(e, r) && r.el._leaveCb && r.el._leaveCb(), x(i, [t]);
                },
                enter(e) {
                    let t = l,
                        i = d,
                        r = c;
                    if (!n.isMounted) {
                        if (!a) return;
                        (t = g || l), (i = v || d), (r = y || c);
                    }
                    let o = !1;
                    const s = (e._enterCb = (t) => {
                        o || ((o = !0), x(t ? r : i, [e]), S.delayedLeave && S.delayedLeave(), (e._enterCb = void 0));
                    });
                    t ? k(t, [e, s]) : s();
                },
                leave(t, i) {
                    const a = String(e.key);
                    if ((t._enterCb && t._enterCb(!0), n.isUnmounting)) return i();
                    x(u, [t]);
                    let r = !1;
                    const o = (t._leaveCb = (n) => {
                        r || ((r = !0), i(), x(n ? m : h, [t]), (t._leaveCb = void 0), w[a] === e && delete w[a]);
                    });
                    (w[a] = e), p ? k(p, [t, o]) : o();
                },
                clone: (e) => Cn(e, t, n, i),
            };
        return S;
    }
    function Fn(e) {
        if (qn(e)) return ((e = pa(e)).children = null), e;
    }
    function In(e) {
        return qn(e) ? (e.children ? e.children[0] : void 0) : e;
    }
    function zn(e, t) {
        6 & e.shapeFlag && e.component ? zn(e.component.subTree, t) : 128 & e.shapeFlag ? ((e.ssContent.transition = t.clone(e.ssContent)), (e.ssFallback.transition = t.clone(e.ssFallback))) : (e.transition = t);
    }
    function Mn(e, t = !1, n) {
        let i = [],
            a = 0;
        for (let r = 0; r < e.length; r++) {
            let o = e[r];
            const s = null == n ? o.key : String(n) + String(null != o.key ? o.key : r);
            o.type === Ki ? (128 & o.patchFlag && a++, (i = i.concat(Mn(o.children, t, s)))) : (t || o.type !== Yi) && i.push(null != s ? pa(o, { key: s }) : o);
        }
        if (a > 1) for (let e = 0; e < i.length; e++) i[e].patchFlag = -2;
        return i;
    }
    const Pn = (e) => !!e.type.__asyncLoader,
        qn = (e) => e.type.__isKeepAlive;
    function jn(e, t) {
        An(e, "a", t);
    }
    function En(e, t) {
        An(e, "da", t);
    }
    function An(e, t, n = xa) {
        const i =
            e.__wdc ||
            (e.__wdc = () => {
                let t = n;
                for (; t; ) {
                    if (t.isDeactivated) return;
                    t = t.parent;
                }
                return e();
            });
        if ((Dn(t, i, n), n)) {
            let e = n.parent;
            for (; e && e.parent; ) qn(e.parent.vnode) && Tn(i, t, n, e), (e = e.parent);
        }
    }
    function Tn(e, t, n, i) {
        const a = Dn(t, e, i, !0);
        Ln(() => {
            m(i[t], a);
        }, n);
    }
    function Dn(e, t, n = xa, i = !1) {
        if (n) {
            const a = n[e] || (n[e] = []),
                r =
                    t.__weh ||
                    (t.__weh = (...i) => {
                        if (n.isUnmounted) return;
                        ye(), Ia(n);
                        const a = Ft(t, n, e, i);
                        return za(), _e(), a;
                    });
            return i ? a.unshift(r) : a.push(r), r;
        }
    }
    RegExp, RegExp;
    const On = (e) => (t, n = xa) => (!ja || "sp" === e) && Dn(e, (...e) => t(...e), n),
        Vn = On("bm"),
        Bn = On("m"),
        Rn = On("bu"),
        $n = On("u"),
        Un = On("bum"),
        Ln = On("um"),
        Nn = On("sp"),
        Wn = On("rtg"),
        Gn = On("rtc");
    function Kn(e, t = xa) {
        Dn("ec", e, t);
    }
    const Hn = "components";
    function Yn(e, t) {
        return Qn(Hn, e, !0, t) || e;
    }
    const Zn = Symbol.for("v-ndc");
    function Jn(e) {
        return x(e) ? Qn(Hn, e, !1) || e : e || Zn;
    }
    function Qn(e, t, n = !0, i = !1) {
        const a = rn || xa;
        if (a) {
            const n = a.type;
            if (e === Hn) {
                const e = (function (e, t = !0) {
                    return w(e) ? e.displayName || e.name : e.name || (t && e.__name);
                })(n, !1);
                if (e && (e === t || e === A(t) || e === O(A(t)))) return n;
            }
            const r = Xn(a[e] || n[e], t) || Xn(a.appContext[e], t);
            return !r && i ? n : r;
        }
    }
    function Xn(e, t) {
        return e && (e[t] || e[A(t)] || e[O(A(t))]);
    }
    function ei(e, t, n, i) {
        let a;
        const r = n && n[i];
        if (f(e) || x(e)) {
            a = new Array(e.length);
            for (let n = 0, i = e.length; n < i; n++) a[n] = t(e[n], n, void 0, r && r[n]);
        } else if ("number" == typeof e) {
            a = new Array(e);
            for (let n = 0; n < e; n++) a[n] = t(n + 1, n, void 0, r && r[n]);
        } else if (S(e))
            if (e[Symbol.iterator]) a = Array.from(e, (e, n) => t(e, n, void 0, r && r[n]));
            else {
                const n = Object.keys(e);
                a = new Array(n.length);
                for (let i = 0, o = n.length; i < o; i++) {
                    const o = n[i];
                    a[i] = t(e[o], o, i, r && r[i]);
                }
            }
        else a = [];
        return n && (n[i] = a), a;
    }
    const ti = (e) => (e ? (Ma(e) ? Ta(e) || e.proxy : ti(e.parent)) : null),
        ni = h(Object.create(null), {
            $: (e) => e,
            $el: (e) => e.vnode.el,
            $data: (e) => e.data,
            $props: (e) => e.props,
            $attrs: (e) => e.attrs,
            $slots: (e) => e.slots,
            $refs: (e) => e.refs,
            $parent: (e) => ti(e.parent),
            $root: (e) => ti(e.root),
            $emit: (e) => e.emit,
            $options: (e) => (__VUE_OPTIONS_API__ ? di(e) : e.type),
            $forceUpdate: (e) => e.f || (e.f = () => Vt(e.update)),
            $nextTick: (e) => e.n || (e.n = Ot.bind(e.proxy)),
            $watch: (e) => (__VUE_OPTIONS_API__ ? gn.bind(e) : l),
        }),
        ii = (e, t) => e !== o && !e.__isScriptSetup && g(e, t),
        ai = {
            get({ _: e }, t) {
                const { ctx: n, setupState: i, data: a, props: r, accessCache: s, type: l, appContext: d } = e;
                let c;
                if ("$" !== t[0]) {
                    const l = s[t];
                    if (void 0 !== l)
                        switch (l) {
                            case 1:
                                return i[t];
                            case 2:
                                return a[t];
                            case 4:
                                return n[t];
                            case 3:
                                return r[t];
                        }
                    else {
                        if (ii(i, t)) return (s[t] = 1), i[t];
                        if (a !== o && g(a, t)) return (s[t] = 2), a[t];
                        if ((c = e.propsOptions[0]) && g(c, t)) return (s[t] = 3), r[t];
                        if (n !== o && g(n, t)) return (s[t] = 4), n[t];
                        (__VUE_OPTIONS_API__ && !oi) || (s[t] = 0);
                    }
                }
                const u = ni[t];
                let p, h;
                return u ? ("$attrs" === t && we(e, 0, t), u(e)) : (p = l.__cssModules) && (p = p[t]) ? p : n !== o && g(n, t) ? ((s[t] = 4), n[t]) : ((h = d.config.globalProperties), g(h, t) ? h[t] : void 0);
            },
            set({ _: e }, t, n) {
                const { data: i, setupState: a, ctx: r } = e;
                return ii(a, t) ? ((a[t] = n), !0) : i !== o && g(i, t) ? ((i[t] = n), !0) : !(g(e.props, t) || ("$" === t[0] && t.slice(1) in e) || ((r[t] = n), 0));
            },
            has({ _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, propsOptions: r } }, s) {
                let l;
                return !!n[s] || (e !== o && g(e, s)) || ii(t, s) || ((l = r[0]) && g(l, s)) || g(i, s) || g(ni, s) || g(a.config.globalProperties, s);
            },
            defineProperty(e, t, n) {
                return null != n.get ? (e._.accessCache[t] = 0) : g(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
            },
        };
    function ri(e) {
        return f(e) ? e.reduce((e, t) => ((e[t] = null), e), {}) : e;
    }
    let oi = !0;
    function si(e, t, n) {
        Ft(f(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
    }
    function li(e, t, n, i) {
        const a = i.includes(".") ? fn(n, i) : () => n[i];
        if (x(e)) {
            const n = t[e];
            w(n) && mn(a, n);
        } else if (w(e)) mn(a, e.bind(n));
        else if (S(e))
            if (f(e)) e.forEach((e) => li(e, t, n, i));
            else {
                const i = w(e.handler) ? e.handler.bind(n) : t[e.handler];
                w(i) && mn(a, i, e);
            }
    }
    function di(e) {
        const t = e.type,
            { mixins: n, extends: i } = t,
            {
                mixins: a,
                optionsCache: r,
                config: { optionMergeStrategies: o },
            } = e.appContext,
            s = r.get(t);
        let l;
        return s ? (l = s) : a.length || n || i ? ((l = {}), a.length && a.forEach((e) => ci(l, e, o, !0)), ci(l, t, o)) : (l = t), S(t) && r.set(t, l), l;
    }
    function ci(e, t, n, i = !1) {
        const { mixins: a, extends: r } = t;
        r && ci(e, r, n, !0), a && a.forEach((t) => ci(e, t, n, !0));
        for (const a in t)
            if (i && "expose" === a);
            else {
                const i = ui[a] || (n && n[a]);
                e[a] = i ? i(e[a], t[a]) : t[a];
            }
        return e;
    }
    const ui = {
        data: pi,
        props: gi,
        emits: gi,
        methods: bi,
        computed: bi,
        beforeCreate: mi,
        created: mi,
        beforeMount: mi,
        mounted: mi,
        beforeUpdate: mi,
        updated: mi,
        beforeDestroy: mi,
        beforeUnmount: mi,
        destroyed: mi,
        unmounted: mi,
        activated: mi,
        deactivated: mi,
        errorCaptured: mi,
        serverPrefetch: mi,
        components: bi,
        directives: bi,
        watch: function (e, t) {
            if (!e) return t;
            if (!t) return e;
            const n = h(Object.create(null), e);
            for (const i in t) n[i] = mi(e[i], t[i]);
            return n;
        },
        provide: pi,
        inject: function (e, t) {
            return bi(hi(e), hi(t));
        },
    };
    function pi(e, t) {
        return t
            ? e
                ? function () {
                      return h(w(e) ? e.call(this, this) : e, w(t) ? t.call(this, this) : t);
                  }
                : t
            : e;
    }
    function hi(e) {
        if (f(e)) {
            const t = {};
            for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
            return t;
        }
        return e;
    }
    function mi(e, t) {
        return e ? [...new Set([].concat(e, t))] : t;
    }
    function bi(e, t) {
        return e ? h(Object.create(null), e, t) : t;
    }
    function gi(e, t) {
        return e ? (f(e) && f(t) ? [...new Set([...e, ...t])] : h(Object.create(null), ri(e), ri(null != t ? t : {}))) : t;
    }
    function fi() {
        return {
            app: null,
            config: { isNativeTag: d, performance: !1, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} },
            mixins: [],
            components: {},
            directives: {},
            provides: Object.create(null),
            optionsCache: new WeakMap(),
            propsCache: new WeakMap(),
            emitsCache: new WeakMap(),
        };
    }
    let vi = 0;
    function yi(e, t) {
        return function (n, i = null) {
            w(n) || (n = h({}, n)), null == i || S(i) || (i = null);
            const a = fi(),
                r = new Set();
            let o = !1;
            const s = (a.app = {
                _uid: vi++,
                _component: n,
                _props: i,
                _container: null,
                _context: a,
                _instance: null,
                version: Ra,
                get config() {
                    return a.config;
                },
                set config(e) {},
                use: (e, ...t) => (r.has(e) || (e && w(e.install) ? (r.add(e), e.install(s, ...t)) : w(e) && (r.add(e), e(s, ...t))), s),
                mixin: (e) => (__VUE_OPTIONS_API__ && (a.mixins.includes(e) || a.mixins.push(e)), s),
                component: (e, t) => (t ? ((a.components[e] = t), s) : a.components[e]),
                directive: (e, t) => (t ? ((a.directives[e] = t), s) : a.directives[e]),
                mount(r, l, d) {
                    if (!o) {
                        const c = ua(n, i);
                        return (
                            (c.appContext = a),
                            l && t ? t(c, r) : e(c, r, d),
                            (o = !0),
                            (s._container = r),
                            (r.__vue_app__ = s),
                            __VUE_PROD_DEVTOOLS__ &&
                                ((s._instance = c.component),
                                (function (e, t) {
                                    Ht("app:init", e, t, { Fragment: Ki, Text: Hi, Comment: Yi, Static: Zi });
                                })(s, Ra)),
                            Ta(c.component) || c.component.proxy
                        );
                    }
                },
                unmount() {
                    o &&
                        (e(null, s._container),
                        __VUE_PROD_DEVTOOLS__ &&
                            ((s._instance = null),
                            (function (e) {
                                Ht("app:unmount", e);
                            })(s)),
                        delete s._container.__vue_app__);
                },
                provide: (e, t) => ((a.provides[e] = t), s),
                runWithContext(e) {
                    _i = s;
                    try {
                        return e();
                    } finally {
                        _i = null;
                    }
                },
            });
            return s;
        };
    }
    let _i = null;
    function wi(e, t, n = !1) {
        const i = xa || rn;
        if (i || _i) {
            const a = i ? (null == i.parent ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides) : _i._context.provides;
            if (a && e in a) return a[e];
            if (arguments.length > 1) return n && w(t) ? t.call(i && i.proxy) : t;
        }
    }
    function xi(e, t, n, i) {
        const [a, r] = e.propsOptions;
        let s,
            l = !1;
        if (t)
            for (let o in t) {
                if (q(o)) continue;
                const d = t[o];
                let c;
                a && g(a, (c = A(o))) ? (r && r.includes(c) ? ((s || (s = {}))[c] = d) : (n[c] = d)) : an(e.emitsOptions, o) || (o in i && d === i[o]) || ((i[o] = d), (l = !0));
            }
        if (r) {
            const t = ft(n),
                i = s || o;
            for (let o = 0; o < r.length; o++) {
                const s = r[o];
                n[s] = ki(a, t, s, i[s], e, !g(i, s));
            }
        }
        return l;
    }
    function ki(e, t, n, i, a, r) {
        const o = e[n];
        if (null != o) {
            const e = g(o, "default");
            if (e && void 0 === i) {
                const e = o.default;
                if (o.type !== Function && !o.skipFactory && w(e)) {
                    const { propsDefaults: r } = a;
                    n in r ? (i = r[n]) : (Ia(a), (i = r[n] = e.call(null, t)), za());
                } else i = e;
            }
            o[0] && (r && !e ? (i = !1) : !o[1] || ("" !== i && i !== D(n)) || (i = !0));
        }
        return i;
    }
    function Si(e, t, n = !1) {
        const i = t.propsCache,
            a = i.get(e);
        if (a) return a;
        const r = e.props,
            l = {},
            d = [];
        let c = !1;
        if (__VUE_OPTIONS_API__ && !w(e)) {
            const i = (e) => {
                c = !0;
                const [n, i] = Si(e, t, !0);
                h(l, n), i && d.push(...i);
            };
            !n && t.mixins.length && t.mixins.forEach(i), e.extends && i(e.extends), e.mixins && e.mixins.forEach(i);
        }
        if (!r && !c) return S(e) && i.set(e, s), s;
        if (f(r))
            for (let e = 0; e < r.length; e++) {
                const t = A(r[e]);
                Ci(t) && (l[t] = o);
            }
        else if (r)
            for (const e in r) {
                const t = A(e);
                if (Ci(t)) {
                    const n = r[e],
                        i = (l[t] = f(n) || w(n) ? { type: n } : h({}, n));
                    if (i) {
                        const e = zi(Boolean, i.type),
                            n = zi(String, i.type);
                        (i[0] = e > -1), (i[1] = n < 0 || e < n), (e > -1 || g(i, "default")) && d.push(t);
                    }
                }
            }
        const u = [l, d];
        return S(e) && i.set(e, u), u;
    }
    function Ci(e) {
        return "$" !== e[0];
    }
    function Fi(e) {
        const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
        return t ? t[2] : null === e ? "null" : "";
    }
    function Ii(e, t) {
        return Fi(e) === Fi(t);
    }
    function zi(e, t) {
        return f(t) ? t.findIndex((t) => Ii(t, e)) : w(t) && Ii(t, e) ? 0 : -1;
    }
    const Mi = (e) => "_" === e[0] || "$stable" === e,
        Pi = (e) => (f(e) ? e.map(ga) : [ga(e)]),
        qi = (e, t, n) => {
            if (t._n) return t;
            const i = ln((...e) => Pi(t(...e)), n);
            return (i._c = !1), i;
        },
        ji = (e, t, n) => {
            const i = e._ctx;
            for (const n in e) {
                if (Mi(n)) continue;
                const a = e[n];
                if (w(a)) t[n] = qi(0, a, i);
                else if (null != a) {
                    const e = Pi(a);
                    t[n] = () => e;
                }
            }
        },
        Ei = (e, t) => {
            const n = Pi(t);
            e.slots.default = () => n;
        },
        Ai = (e, t) => {
            if (32 & e.vnode.shapeFlag) {
                const n = t._;
                n ? ((e.slots = ft(t)), $(t, "_", n)) : ji(t, (e.slots = {}));
            } else (e.slots = {}), t && Ei(e, t);
            $(e.slots, sa, 1);
        },
        Ti = (e, t, n) => {
            const { vnode: i, slots: a } = e;
            let r = !0,
                s = o;
            if (32 & i.shapeFlag) {
                const e = t._;
                e ? (n && 1 === e ? (r = !1) : (h(a, t), n || 1 !== e || delete a._)) : ((r = !t.$stable), ji(t, a)), (s = t);
            } else t && (Ei(e, t), (s = { default: 1 }));
            if (r) for (const e in a) Mi(e) || e in s || delete a[e];
        };
    function Di(e, t, n, i, a = !1) {
        if (f(e)) return void e.forEach((e, r) => Di(e, t && (f(t) ? t[r] : t), n, i, a));
        if (Pn(i) && !a) return;
        const r = 4 & i.shapeFlag ? Ta(i.component) || i.component.proxy : i.el,
            s = a ? null : r,
            { i: l, r: d } = e,
            c = t && t.r,
            u = l.refs === o ? (l.refs = {}) : l.refs,
            p = l.setupState;
        if ((null != c && c !== d && (x(c) ? ((u[c] = null), g(p, c) && (p[c] = null)) : wt(c) && (c.value = null)), w(d))) Ct(d, l, 12, [s, u]);
        else {
            const t = x(d),
                i = wt(d);
            if (t || i) {
                const o = () => {
                    if (e.f) {
                        const n = t ? (g(p, d) ? p[d] : u[d]) : d.value;
                        a ? f(n) && m(n, r) : f(n) ? n.includes(r) || n.push(r) : t ? ((u[d] = [r]), g(p, d) && (p[d] = u[d])) : ((d.value = [r]), e.k && (u[e.k] = d.value));
                    } else t ? ((u[d] = s), g(p, d) && (p[d] = s)) : i && ((d.value = s), e.k && (u[e.k] = s));
                };
                s ? ((o.id = -1), Oi(o, n)) : o();
            }
        }
    }
    const Oi = function (e, t) {
        var n;
        t && t.pendingBranch ? (f(e) ? t.effects.push(...e) : t.effects.push(e)) : (f((n = e)) ? jt.push(...n) : (Et && Et.includes(n, n.allowRecurse ? At + 1 : At)) || jt.push(n), Bt());
    };
    function Vi(e, t) {
        "boolean" != typeof __VUE_OPTIONS_API__ && (W().__VUE_OPTIONS_API__ = !0), "boolean" != typeof __VUE_PROD_DEVTOOLS__ && (W().__VUE_PROD_DEVTOOLS__ = !1);
        const n = W();
        (n.__VUE__ = !0), __VUE_PROD_DEVTOOLS__ && Yt(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
        const { insert: i, remove: a, patchProp: r, createElement: d, createText: c, createComment: u, setText: p, setElementText: h, parentNode: m, nextSibling: b, setScopeId: f = l, insertStaticContent: v } = e,
            y = (e, t, n, i = null, a = null, r = null, o = !1, s = null, l = !!t.dynamicChildren) => {
                if (e === t) return;
                e && !oa(e, t) && ((i = Q(e)), K(e, a, r, !0), (e = null)), -2 === t.patchFlag && ((l = !1), (t.dynamicChildren = null));
                const { type: d, ref: c, shapeFlag: u } = t;
                switch (d) {
                    case Hi:
                        _(e, t, n, i);
                        break;
                    case Yi:
                        w(e, t, n, i);
                        break;
                    case Zi:
                        null == e && x(t, n, i, o);
                        break;
                    case Ki:
                        j(e, t, n, i, a, r, o, s, l);
                        break;
                    default:
                        1 & u ? k(e, t, n, i, a, r, o, s, l) : 6 & u ? E(e, t, n, i, a, r, o, s, l) : (64 & u || 128 & u) && d.process(e, t, n, i, a, r, o, s, l, ee);
                }
                null != c && a && Di(c, e && e.ref, r, t || e, !t);
            },
            _ = (e, t, n, a) => {
                if (null == e) i((t.el = c(t.children)), n, a);
                else {
                    const n = (t.el = e.el);
                    t.children !== e.children && p(n, t.children);
                }
            },
            w = (e, t, n, a) => {
                null == e ? i((t.el = u(t.children || "")), n, a) : (t.el = e.el);
            },
            x = (e, t, n, i) => {
                [e.el, e.anchor] = v(e.children, t, n, i, e.el, e.anchor);
            },
            k = (e, t, n, i, a, r, o, s, l) => {
                (o = o || "svg" === t.type), null == e ? S(t, n, i, a, r, o, s, l) : z(e, t, a, r, o, s, l);
            },
            S = (e, t, n, a, o, s, l, c) => {
                let u, p;
                const { type: m, props: b, shapeFlag: g, transition: f, dirs: v } = e;
                if (((u = e.el = d(e.type, s, b && b.is, b)), 8 & g ? h(u, e.children) : 16 & g && I(e.children, u, null, a, o, s && "foreignObject" !== m, l, c), v && _n(e, null, a, "created"), F(u, e, e.scopeId, l, a), b)) {
                    for (const t in b) "value" === t || q(t) || r(u, t, null, b[t], s, e.children, a, o, J);
                    "value" in b && r(u, "value", null, b.value), (p = b.onVnodeBeforeMount) && ya(p, a, e);
                }
                __VUE_PROD_DEVTOOLS__ && (Object.defineProperty(u, "__vnode", { value: e, enumerable: !1 }), Object.defineProperty(u, "__vueParentComponent", { value: a, enumerable: !1 })), v && _n(e, null, a, "beforeMount");
                const y = (!o || (o && !o.pendingBranch)) && f && !f.persisted;
                y && f.beforeEnter(u),
                    i(u, t, n),
                    ((p = b && b.onVnodeMounted) || y || v) &&
                        Oi(() => {
                            p && ya(p, a, e), y && f.enter(u), v && _n(e, null, a, "mounted");
                        }, o);
            },
            F = (e, t, n, i, a) => {
                if ((n && f(e, n), i)) for (let t = 0; t < i.length; t++) f(e, i[t]);
                if (a && t === a.subTree) {
                    const t = a.vnode;
                    F(e, t, t.scopeId, t.slotScopeIds, a.parent);
                }
            },
            I = (e, t, n, i, a, r, o, s, l = 0) => {
                for (let d = l; d < e.length; d++) {
                    const l = (e[d] = s ? fa(e[d]) : ga(e[d]));
                    y(null, l, t, n, i, a, r, o, s);
                }
            },
            z = (e, t, n, i, a, s, l) => {
                const d = (t.el = e.el);
                let { patchFlag: c, dynamicChildren: u, dirs: p } = t;
                c |= 16 & e.patchFlag;
                const m = e.props || o,
                    b = t.props || o;
                let g;
                n && Bi(n, !1), (g = b.onVnodeBeforeUpdate) && ya(g, n, t, e), p && _n(t, e, n, "beforeUpdate"), n && Bi(n, !0);
                const f = a && "foreignObject" !== t.type;
                if ((u ? M(e.dynamicChildren, u, d, n, i, f, s) : l || U(e, t, d, null, n, i, f, s, !1), c > 0)) {
                    if (16 & c) P(d, t, m, b, n, i, a);
                    else if ((2 & c && m.class !== b.class && r(d, "class", null, b.class, a), 4 & c && r(d, "style", m.style, b.style, a), 8 & c)) {
                        const o = t.dynamicProps;
                        for (let t = 0; t < o.length; t++) {
                            const s = o[t],
                                l = m[s],
                                c = b[s];
                            (c === l && "value" !== s) || r(d, s, l, c, a, e.children, n, i, J);
                        }
                    }
                    1 & c && e.children !== t.children && h(d, t.children);
                } else l || null != u || P(d, t, m, b, n, i, a);
                ((g = b.onVnodeUpdated) || p) &&
                    Oi(() => {
                        g && ya(g, n, t, e), p && _n(t, e, n, "updated");
                    }, i);
            },
            M = (e, t, n, i, a, r, o) => {
                for (let s = 0; s < t.length; s++) {
                    const l = e[s],
                        d = t[s],
                        c = l.el && (l.type === Ki || !oa(l, d) || 70 & l.shapeFlag) ? m(l.el) : n;
                    y(l, d, c, null, i, a, r, o, !0);
                }
            },
            P = (e, t, n, i, a, s, l) => {
                if (n !== i) {
                    if (n !== o) for (const o in n) q(o) || o in i || r(e, o, n[o], null, l, t.children, a, s, J);
                    for (const o in i) {
                        if (q(o)) continue;
                        const d = i[o],
                            c = n[o];
                        d !== c && "value" !== o && r(e, o, c, d, l, t.children, a, s, J);
                    }
                    "value" in i && r(e, "value", n.value, i.value);
                }
            },
            j = (e, t, n, a, r, o, s, l, d) => {
                const u = (t.el = e ? e.el : c("")),
                    p = (t.anchor = e ? e.anchor : c(""));
                let { patchFlag: h, dynamicChildren: m, slotScopeIds: b } = t;
                b && (l = l ? l.concat(b) : b),
                    null == e
                        ? (i(u, n, a), i(p, n, a), I(t.children, n, p, r, o, s, l, d))
                        : h > 0 && 64 & h && m && e.dynamicChildren
                        ? (M(e.dynamicChildren, m, n, r, o, s, l), (null != t.key || (r && t === r.subTree)) && Ri(e, t, !0))
                        : U(e, t, n, p, r, o, s, l, d);
            },
            E = (e, t, n, i, a, r, o, s, l) => {
                (t.slotScopeIds = s), null == e ? (512 & t.shapeFlag ? a.ctx.activate(t, n, i, o, l) : T(t, n, i, a, r, o, l)) : O(e, t, l);
            },
            T = (e, t, n, i, a, r, s) => {
                const l = (e.component = (function (e, t, n) {
                    const i = e.type,
                        a = (t ? t.appContext : e.appContext) || _a,
                        r = {
                            uid: wa++,
                            vnode: e,
                            type: i,
                            parent: t,
                            appContext: a,
                            root: null,
                            next: null,
                            subTree: null,
                            effect: null,
                            update: null,
                            scope: new ae(!0),
                            render: null,
                            proxy: null,
                            exposed: null,
                            exposeProxy: null,
                            withProxy: null,
                            provides: t ? t.provides : Object.create(a.provides),
                            accessCache: null,
                            renderCache: [],
                            components: null,
                            directives: null,
                            propsOptions: Si(i, a),
                            emitsOptions: nn(i, a),
                            emit: null,
                            emitted: null,
                            propsDefaults: o,
                            inheritAttrs: i.inheritAttrs,
                            ctx: o,
                            data: o,
                            props: o,
                            attrs: o,
                            slots: o,
                            refs: o,
                            setupState: o,
                            setupContext: null,
                            attrsProxy: null,
                            slotsProxy: null,
                            suspense: n,
                            suspenseId: n ? n.pendingId : 0,
                            asyncDep: null,
                            asyncResolved: !1,
                            isMounted: !1,
                            isUnmounted: !1,
                            isDeactivated: !1,
                            bc: null,
                            c: null,
                            bm: null,
                            m: null,
                            bu: null,
                            u: null,
                            um: null,
                            bum: null,
                            da: null,
                            a: null,
                            rtg: null,
                            rtc: null,
                            ec: null,
                            sp: null,
                        };
                    return (r.ctx = { _: r }), (r.root = t ? t.root : r), (r.emit = tn.bind(null, r)), e.ce && e.ce(r), r;
                })(e, i, a));
                if (
                    (qn(e) && (l.ctx.renderer = ee),
                    (function (e, t = !1) {
                        ja = t;
                        const { props: n, children: i } = e.vnode,
                            a = Ma(e);
                        (function (e, t, n, i = !1) {
                            const a = {},
                                r = {};
                            $(r, sa, 1), (e.propsDefaults = Object.create(null)), xi(e, t, a, r);
                            for (const t in e.propsOptions[0]) t in a || (a[t] = void 0);
                            n ? (e.props = i ? a : pt(a, !1, Ve, at, st)) : e.type.props ? (e.props = a) : (e.props = r), (e.attrs = r);
                        })(e, n, a, t),
                            Ai(e, i);
                        const r = a
                            ? (function (e, t) {
                                  const n = e.type;
                                  (e.accessCache = Object.create(null)), (e.proxy = vt(new Proxy(e.ctx, ai)));
                                  const { setup: i } = n;
                                  if (i) {
                                      const n = (e.setupContext =
                                          i.length > 1
                                              ? (function (e) {
                                                    const t = (t) => {
                                                        e.exposed = t || {};
                                                    };
                                                    return {
                                                        get attrs() {
                                                            return (function (e) {
                                                                return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs, { get: (t, n) => (we(e, 0, "$attrs"), t[n]) }));
                                                            })(e);
                                                        },
                                                        slots: e.slots,
                                                        emit: e.emit,
                                                        expose: t,
                                                    };
                                                })(e)
                                              : null);
                                      Ia(e), ye();
                                      const a = Ct(i, e, 0, [e.props, n]);
                                      if ((_e(), za(), C(a))) {
                                          if ((a.then(za, za), t))
                                              return a
                                                  .then((n) => {
                                                      Ea(e, n, t);
                                                  })
                                                  .catch((t) => {
                                                      It(t, e, 0);
                                                  });
                                          e.asyncDep = a;
                                      } else Ea(e, a, t);
                                  } else Aa(e, t);
                              })(e, t)
                            : void 0;
                        ja = !1;
                    })(l),
                    l.asyncDep)
                ) {
                    if ((a && a.registerDep(l, V), !e.el)) {
                        const e = (l.subTree = ua(Yi));
                        w(null, e, t, n);
                    }
                } else V(l, e, t, n, a, r, s);
            },
            O = (e, t, n) => {
                const i = (t.component = e.component);
                if (
                    (function (e, t, n) {
                        const { props: i, children: a, component: r } = e,
                            { props: o, children: s, patchFlag: l } = t,
                            d = r.emitsOptions;
                        if (t.dirs || t.transition) return !0;
                        if (!(n && l >= 0)) return !((!a && !s) || (s && s.$stable)) || (i !== o && (i ? !o || pn(i, o, d) : !!o));
                        if (1024 & l) return !0;
                        if (16 & l) return i ? pn(i, o, d) : !!o;
                        if (8 & l) {
                            const e = t.dynamicProps;
                            for (let t = 0; t < e.length; t++) {
                                const n = e[t];
                                if (o[n] !== i[n] && !an(d, n)) return !0;
                            }
                        }
                        return !1;
                    })(e, t, n)
                ) {
                    if (i.asyncDep && !i.asyncResolved) return void B(i, t, n);
                    (i.next = t),
                        (function (e) {
                            const t = Pt.indexOf(e);
                            t > qt && Pt.splice(t, 1);
                        })(i.update),
                        i.update();
                } else (t.el = e.el), (i.vnode = t);
            },
            V = (e, t, n, i, a, r, o) => {
                const s = (e.effect = new be(
                        () => {
                            if (e.isMounted) {
                                let t,
                                    { next: n, bu: i, u: s, parent: l, vnode: d } = e,
                                    c = n;
                                Bi(e, !1), n ? ((n.el = d.el), B(e, n, o)) : (n = d), i && R(i), (t = n.props && n.props.onVnodeBeforeUpdate) && ya(t, l, n, d), Bi(e, !0);
                                const u = dn(e),
                                    p = e.subTree;
                                (e.subTree = u),
                                    y(p, u, m(p.el), Q(p), e, a, r),
                                    (n.el = u.el),
                                    null === c &&
                                        (function ({ vnode: e, parent: t }, n) {
                                            for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
                                        })(e, u.el),
                                    s && Oi(s, a),
                                    (t = n.props && n.props.onVnodeUpdated) && Oi(() => ya(t, l, n, d), a),
                                    __VUE_PROD_DEVTOOLS__ && Jt(e);
                            } else {
                                let o;
                                const { el: s, props: l } = t,
                                    { bm: d, m: c, parent: u } = e,
                                    p = Pn(t);
                                if ((Bi(e, !1), d && R(d), !p && (o = l && l.onVnodeBeforeMount) && ya(o, u, t), Bi(e, !0), s && ne)) {
                                    const n = () => {
                                        (e.subTree = dn(e)), ne(s, e.subTree, e, a, null);
                                    };
                                    p ? t.type.__asyncLoader().then(() => !e.isUnmounted && n()) : n();
                                } else {
                                    const o = (e.subTree = dn(e));
                                    y(null, o, n, i, e, a, r), (t.el = o.el);
                                }
                                if ((c && Oi(c, a), !p && (o = l && l.onVnodeMounted))) {
                                    const e = t;
                                    Oi(() => ya(o, u, e), a);
                                }
                                (256 & t.shapeFlag || (u && Pn(u.vnode) && 256 & u.vnode.shapeFlag)) && e.a && Oi(e.a, a), (e.isMounted = !0), __VUE_PROD_DEVTOOLS__ && Zt(e), (t = n = i = null);
                            }
                        },
                        () => Vt(l),
                        e.scope
                    )),
                    l = (e.update = () => s.run());
                (l.id = e.uid), Bi(e, !0), l();
            },
            B = (e, t, n) => {
                t.component = e;
                const i = e.vnode.props;
                (e.vnode = t),
                    (e.next = null),
                    (function (e, t, n, i) {
                        const {
                                props: a,
                                attrs: r,
                                vnode: { patchFlag: o },
                            } = e,
                            s = ft(a),
                            [l] = e.propsOptions;
                        let d = !1;
                        if (!(i || o > 0) || 16 & o) {
                            let i;
                            xi(e, t, a, r) && (d = !0);
                            for (const r in s) (t && (g(t, r) || ((i = D(r)) !== r && g(t, i)))) || (l ? !n || (void 0 === n[r] && void 0 === n[i]) || (a[r] = ki(l, s, r, void 0, e, !0)) : delete a[r]);
                            if (r !== s) for (const e in r) (t && g(t, e)) || (delete r[e], (d = !0));
                        } else if (8 & o) {
                            const n = e.vnode.dynamicProps;
                            for (let i = 0; i < n.length; i++) {
                                let o = n[i];
                                if (an(e.emitsOptions, o)) continue;
                                const c = t[o];
                                if (l)
                                    if (g(r, o)) c !== r[o] && ((r[o] = c), (d = !0));
                                    else {
                                        const t = A(o);
                                        a[t] = ki(l, s, t, c, e, !1);
                                    }
                                else c !== r[o] && ((r[o] = c), (d = !0));
                            }
                        }
                        d && ke(e, "set", "$attrs");
                    })(e, t.props, i, n),
                    Ti(e, t.children, n),
                    ye(),
                    Rt(),
                    _e();
            },
            U = (e, t, n, i, a, r, o, s, l = !1) => {
                const d = e && e.children,
                    c = e ? e.shapeFlag : 0,
                    u = t.children,
                    { patchFlag: p, shapeFlag: m } = t;
                if (p > 0) {
                    if (128 & p) return void N(d, u, n, i, a, r, o, s, l);
                    if (256 & p) return void L(d, u, n, i, a, r, o, s, l);
                }
                8 & m ? (16 & c && J(d, a, r), u !== d && h(n, u)) : 16 & c ? (16 & m ? N(d, u, n, i, a, r, o, s, l) : J(d, a, r, !0)) : (8 & c && h(n, ""), 16 & m && I(u, n, i, a, r, o, s, l));
            },
            L = (e, t, n, i, a, r, o, l, d) => {
                t = t || s;
                const c = (e = e || s).length,
                    u = t.length,
                    p = Math.min(c, u);
                let h;
                for (h = 0; h < p; h++) {
                    const i = (t[h] = d ? fa(t[h]) : ga(t[h]));
                    y(e[h], i, n, null, a, r, o, l, d);
                }
                c > u ? J(e, a, r, !0, !1, p) : I(t, n, i, a, r, o, l, d, p);
            },
            N = (e, t, n, i, a, r, o, l, d) => {
                let c = 0;
                const u = t.length;
                let p = e.length - 1,
                    h = u - 1;
                for (; c <= p && c <= h; ) {
                    const i = e[c],
                        s = (t[c] = d ? fa(t[c]) : ga(t[c]));
                    if (!oa(i, s)) break;
                    y(i, s, n, null, a, r, o, l, d), c++;
                }
                for (; c <= p && c <= h; ) {
                    const i = e[p],
                        s = (t[h] = d ? fa(t[h]) : ga(t[h]));
                    if (!oa(i, s)) break;
                    y(i, s, n, null, a, r, o, l, d), p--, h--;
                }
                if (c > p) {
                    if (c <= h) {
                        const e = h + 1,
                            s = e < u ? t[e].el : i;
                        for (; c <= h; ) y(null, (t[c] = d ? fa(t[c]) : ga(t[c])), n, s, a, r, o, l, d), c++;
                    }
                } else if (c > h) for (; c <= p; ) K(e[c], a, r, !0), c++;
                else {
                    const m = c,
                        b = c,
                        g = new Map();
                    for (c = b; c <= h; c++) {
                        const e = (t[c] = d ? fa(t[c]) : ga(t[c]));
                        null != e.key && g.set(e.key, c);
                    }
                    let f,
                        v = 0;
                    const _ = h - b + 1;
                    let w = !1,
                        x = 0;
                    const k = new Array(_);
                    for (c = 0; c < _; c++) k[c] = 0;
                    for (c = m; c <= p; c++) {
                        const i = e[c];
                        if (v >= _) {
                            K(i, a, r, !0);
                            continue;
                        }
                        let s;
                        if (null != i.key) s = g.get(i.key);
                        else
                            for (f = b; f <= h; f++)
                                if (0 === k[f - b] && oa(i, t[f])) {
                                    s = f;
                                    break;
                                }
                        void 0 === s ? K(i, a, r, !0) : ((k[s - b] = c + 1), s >= x ? (x = s) : (w = !0), y(i, t[s], n, null, a, r, o, l, d), v++);
                    }
                    const S = w
                        ? (function (e) {
                              const t = e.slice(),
                                  n = [0];
                              let i, a, r, o, s;
                              const l = e.length;
                              for (i = 0; i < l; i++) {
                                  const l = e[i];
                                  if (0 !== l) {
                                      if (((a = n[n.length - 1]), e[a] < l)) {
                                          (t[i] = a), n.push(i);
                                          continue;
                                      }
                                      for (r = 0, o = n.length - 1; r < o; ) (s = (r + o) >> 1), e[n[s]] < l ? (r = s + 1) : (o = s);
                                      l < e[n[r]] && (r > 0 && (t[i] = n[r - 1]), (n[r] = i));
                                  }
                              }
                              for (r = n.length, o = n[r - 1]; r-- > 0; ) (n[r] = o), (o = t[o]);
                              return n;
                          })(k)
                        : s;
                    for (f = S.length - 1, c = _ - 1; c >= 0; c--) {
                        const e = b + c,
                            s = t[e],
                            p = e + 1 < u ? t[e + 1].el : i;
                        0 === k[c] ? y(null, s, n, p, a, r, o, l, d) : w && (f < 0 || c !== S[f] ? G(s, n, p, 2) : f--);
                    }
                }
            },
            G = (e, t, n, a, r = null) => {
                const { el: o, type: s, transition: l, children: d, shapeFlag: c } = e;
                if (6 & c) G(e.component.subTree, t, n, a);
                else if (128 & c) e.suspense.move(t, n, a);
                else if (64 & c) s.move(e, t, n, ee);
                else if (s !== Ki)
                    if (s !== Zi)
                        if (2 !== a && 1 & c && l)
                            if (0 === a) l.beforeEnter(o), i(o, t, n), Oi(() => l.enter(o), r);
                            else {
                                const { leave: e, delayLeave: a, afterLeave: r } = l,
                                    s = () => i(o, t, n),
                                    d = () => {
                                        e(o, () => {
                                            s(), r && r();
                                        });
                                    };
                                a ? a(o, s, d) : d();
                            }
                        else i(o, t, n);
                    else
                        (({ el: e, anchor: t }, n, a) => {
                            let r;
                            for (; e && e !== t; ) (r = b(e)), i(e, n, a), (e = r);
                            i(t, n, a);
                        })(e, t, n);
                else {
                    i(o, t, n);
                    for (let e = 0; e < d.length; e++) G(d[e], t, n, a);
                    i(e.anchor, t, n);
                }
            },
            K = (e, t, n, i = !1, a = !1) => {
                const { type: r, props: o, ref: s, children: l, dynamicChildren: d, shapeFlag: c, patchFlag: u, dirs: p } = e;
                if ((null != s && Di(s, null, n, e, !0), 256 & c)) return void t.ctx.deactivate(e);
                const h = 1 & c && p,
                    m = !Pn(e);
                let b;
                if ((m && (b = o && o.onVnodeBeforeUnmount) && ya(b, t, e), 6 & c)) Z(e.component, n, i);
                else {
                    if (128 & c) return void e.suspense.unmount(n, i);
                    h && _n(e, null, t, "beforeUnmount"), 64 & c ? e.type.remove(e, t, n, a, ee, i) : d && (r !== Ki || (u > 0 && 64 & u)) ? J(d, t, n, !1, !0) : ((r === Ki && 384 & u) || (!a && 16 & c)) && J(l, t, n), i && H(e);
                }
                ((m && (b = o && o.onVnodeUnmounted)) || h) &&
                    Oi(() => {
                        b && ya(b, t, e), h && _n(e, null, t, "unmounted");
                    }, n);
            },
            H = (e) => {
                const { type: t, el: n, anchor: i, transition: r } = e;
                if (t === Ki) return void Y(n, i);
                if (t === Zi)
                    return void (({ el: e, anchor: t }) => {
                        let n;
                        for (; e && e !== t; ) (n = b(e)), a(e), (e = n);
                        a(t);
                    })(e);
                const o = () => {
                    a(n), r && !r.persisted && r.afterLeave && r.afterLeave();
                };
                if (1 & e.shapeFlag && r && !r.persisted) {
                    const { leave: t, delayLeave: i } = r,
                        a = () => t(n, o);
                    i ? i(e.el, o, a) : a();
                } else o();
            },
            Y = (e, t) => {
                let n;
                for (; e !== t; ) (n = b(e)), a(e), (e = n);
                a(t);
            },
            Z = (e, t, n) => {
                const { bum: i, scope: a, update: r, subTree: o, um: s } = e;
                i && R(i),
                    a.stop(),
                    r && ((r.active = !1), K(o, e, t, n)),
                    s && Oi(s, t),
                    Oi(() => {
                        e.isUnmounted = !0;
                    }, t),
                    t && t.pendingBranch && !t.isUnmounted && e.asyncDep && !e.asyncResolved && e.suspenseId === t.pendingId && (t.deps--, 0 === t.deps && t.resolve()),
                    __VUE_PROD_DEVTOOLS__ && Xt(e);
            },
            J = (e, t, n, i = !1, a = !1, r = 0) => {
                for (let o = r; o < e.length; o++) K(e[o], t, n, i, a);
            },
            Q = (e) => (6 & e.shapeFlag ? Q(e.component.subTree) : 128 & e.shapeFlag ? e.suspense.next() : b(e.anchor || e.el)),
            X = (e, t, n) => {
                null == e ? t._vnode && K(t._vnode, null, null, !0) : y(t._vnode || null, e, t, null, null, null, n), Rt(), $t(), (t._vnode = e);
            },
            ee = { p: y, um: K, m: G, r: H, mt: T, mc: I, pc: U, pbc: M, n: Q, o: e };
        let te, ne;
        return t && ([te, ne] = t(ee)), { render: X, hydrate: te, createApp: yi(X, te) };
    }
    function Bi({ effect: e, update: t }, n) {
        e.allowRecurse = t.allowRecurse = n;
    }
    function Ri(e, t, n = !1) {
        const i = e.children,
            a = t.children;
        if (f(i) && f(a))
            for (let e = 0; e < i.length; e++) {
                const t = i[e];
                let r = a[e];
                1 & r.shapeFlag && !r.dynamicChildren && ((r.patchFlag <= 0 || 32 === r.patchFlag) && ((r = a[e] = fa(a[e])), (r.el = t.el)), n || Ri(t, r)), r.type === Hi && (r.el = t.el);
            }
    }
    const $i = (e) => e && (e.disabled || "" === e.disabled),
        Ui = (e) => "undefined" != typeof SVGElement && e instanceof SVGElement,
        Li = (e, t) => {
            const n = e && e.to;
            if (x(n)) {
                if (t) {
                    return t(n);
                }
                return null;
            }
            return n;
        };
    function Ni(e, t, n, { o: { insert: i }, m: a }, r = 2) {
        0 === r && i(e.targetAnchor, t, n);
        const { el: o, anchor: s, shapeFlag: l, children: d, props: c } = e,
            u = 2 === r;
        if ((u && i(o, t, n), (!u || $i(c)) && 16 & l)) for (let e = 0; e < d.length; e++) a(d[e], t, n, 2);
        u && i(s, t, n);
    }
    const Wi = {
        __isTeleport: !0,
        process(e, t, n, i, a, r, o, s, l, d) {
            const {
                    mc: c,
                    pc: u,
                    pbc: p,
                    o: { insert: h, querySelector: m, createText: b, createComment: g },
                } = d,
                f = $i(t.props);
            let { shapeFlag: v, children: y, dynamicChildren: _ } = t;
            if (null == e) {
                const e = (t.el = b("")),
                    d = (t.anchor = b(""));
                h(e, n, i), h(d, n, i);
                const u = (t.target = Li(t.props, m)),
                    p = (t.targetAnchor = b(""));
                u && (h(p, u), (o = o || Ui(u)));
                const g = (e, t) => {
                    16 & v && c(y, e, t, a, r, o, s, l);
                };
                f ? g(n, d) : u && g(u, p);
            } else {
                t.el = e.el;
                const i = (t.anchor = e.anchor),
                    c = (t.target = e.target),
                    h = (t.targetAnchor = e.targetAnchor),
                    b = $i(e.props),
                    g = b ? n : c,
                    v = b ? i : h;
                if (((o = o || Ui(c)), _ ? (p(e.dynamicChildren, _, g, a, r, o, s), Ri(e, t, !0)) : l || u(e, t, g, v, a, r, o, s, !1), f)) b || Ni(t, n, i, d, 1);
                else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                    const e = (t.target = Li(t.props, m));
                    e && Ni(t, e, null, d, 0);
                } else b && Ni(t, c, h, d, 1);
            }
            Gi(t);
        },
        remove(e, t, n, i, { um: a, o: { remove: r } }, o) {
            const { shapeFlag: s, children: l, anchor: d, targetAnchor: c, target: u, props: p } = e;
            if ((u && r(c), (o || !$i(p)) && (r(d), 16 & s)))
                for (let e = 0; e < l.length; e++) {
                    const i = l[e];
                    a(i, t, n, !0, !!i.dynamicChildren);
                }
        },
        move: Ni,
        hydrate: function (e, t, n, i, a, r, { o: { nextSibling: o, parentNode: s, querySelector: l } }, d) {
            const c = (t.target = Li(t.props, l));
            if (c) {
                const l = c._lpa || c.firstChild;
                if (16 & t.shapeFlag)
                    if ($i(t.props)) (t.anchor = d(o(e), t, s(e), n, i, a, r)), (t.targetAnchor = l);
                    else {
                        t.anchor = o(e);
                        let s = l;
                        for (; s; )
                            if (((s = o(s)), s && 8 === s.nodeType && "teleport anchor" === s.data)) {
                                (t.targetAnchor = s), (c._lpa = t.targetAnchor && o(t.targetAnchor));
                                break;
                            }
                        d(l, t, c, n, i, a, r);
                    }
                Gi(t);
            }
            return t.anchor && o(t.anchor);
        },
    };
    function Gi(e) {
        const t = e.ctx;
        if (t && t.ut) {
            let n = e.children[0].el;
            for (; n !== e.targetAnchor; ) 1 === n.nodeType && n.setAttribute("data-v-owner", t.uid), (n = n.nextSibling);
            t.ut();
        }
    }
    const Ki = Symbol.for("v-fgt"),
        Hi = Symbol.for("v-txt"),
        Yi = Symbol.for("v-cmt"),
        Zi = Symbol.for("v-stc"),
        Ji = [];
    let Qi = null;
    function Xi(e = !1) {
        Ji.push((Qi = e ? null : []));
    }
    let ea = 1;
    function ta(e) {
        ea += e;
    }
    function na(e) {
        return (e.dynamicChildren = ea > 0 ? Qi || s : null), Ji.pop(), (Qi = Ji[Ji.length - 1] || null), ea > 0 && Qi && Qi.push(e), e;
    }
    function ia(e, t, n, i, a, r) {
        return na(ca(e, t, n, i, a, r, !0));
    }
    function aa(e, t, n, i, a) {
        return na(ua(e, t, n, i, a, !0));
    }
    function ra(e) {
        return !!e && !0 === e.__v_isVNode;
    }
    function oa(e, t) {
        return e.type === t.type && e.key === t.key;
    }
    const sa = "__vInternal",
        la = ({ key: e }) => (null != e ? e : null),
        da = ({ ref: e, ref_key: t, ref_for: n }) => ("number" == typeof e && (e = "" + e), null != e ? (x(e) || wt(e) || w(e) ? { i: rn, r: e, k: t, f: !!n } : e) : null);
    function ca(e, t = null, n = null, i = 0, a = null, r = e === Ki ? 0 : 1, o = !1, s = !1) {
        const l = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e,
            props: t,
            key: t && la(t),
            ref: t && da(t),
            scopeId: on,
            slotScopeIds: null,
            children: n,
            component: null,
            suspense: null,
            ssContent: null,
            ssFallback: null,
            dirs: null,
            transition: null,
            el: null,
            anchor: null,
            target: null,
            targetAnchor: null,
            staticCount: 0,
            shapeFlag: r,
            patchFlag: i,
            dynamicProps: a,
            dynamicChildren: null,
            appContext: null,
            ctx: rn,
        };
        return s ? (va(l, n), 128 & r && e.normalize(l)) : n && (l.shapeFlag |= x(n) ? 8 : 16), ea > 0 && !o && Qi && (l.patchFlag > 0 || 6 & r) && 32 !== l.patchFlag && Qi.push(l), l;
    }
    const ua = function (e, t = null, n = null, i = 0, a = null, r = !1) {
        if (((e && e !== Zn) || (e = Yi), ra(e))) {
            const i = pa(e, t, !0);
            return n && va(i, n), ea > 0 && !r && Qi && (6 & i.shapeFlag ? (Qi[Qi.indexOf(e)] = i) : Qi.push(i)), (i.patchFlag |= -2), i;
        }
        if (((o = e), w(o) && "__vccOpts" in o && (e = e.__vccOpts), t)) {
            t = (function (e) {
                return e ? (gt(e) || sa in e ? h({}, e) : e) : null;
            })(t);
            let { class: e, style: n } = t;
            e && !x(e) && (t.class = J(e)), S(n) && (gt(n) && !f(n) && (n = h({}, n)), (t.style = G(n)));
        }
        var o;
        return ca(e, t, n, i, a, x(e) ? 1 : ((e) => e.__isSuspense)(e) ? 128 : ((e) => e.__isTeleport)(e) ? 64 : S(e) ? 4 : w(e) ? 2 : 0, r, !0);
    };
    function pa(e, t, n = !1) {
        const { props: i, ref: a, patchFlag: r, children: o } = e,
            s = t
                ? (function (...e) {
                      const t = {};
                      for (let n = 0; n < e.length; n++) {
                          const i = e[n];
                          for (const e in i)
                              if ("class" === e) t.class !== i.class && (t.class = J([t.class, i.class]));
                              else if ("style" === e) t.style = G([t.style, i.style]);
                              else if (u(e)) {
                                  const n = t[e],
                                      a = i[e];
                                  !a || n === a || (f(n) && n.includes(a)) || (t[e] = n ? [].concat(n, a) : a);
                              } else "" !== e && (t[e] = i[e]);
                      }
                      return t;
                  })(i || {}, t)
                : i;
        return {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: s,
            key: s && la(s),
            ref: t && t.ref ? (n && a ? (f(a) ? a.concat(da(t)) : [a, da(t)]) : da(t)) : a,
            scopeId: e.scopeId,
            slotScopeIds: e.slotScopeIds,
            children: o,
            target: e.target,
            targetAnchor: e.targetAnchor,
            staticCount: e.staticCount,
            shapeFlag: e.shapeFlag,
            patchFlag: t && e.type !== Ki ? (-1 === r ? 16 : 16 | r) : r,
            dynamicProps: e.dynamicProps,
            dynamicChildren: e.dynamicChildren,
            appContext: e.appContext,
            dirs: e.dirs,
            transition: e.transition,
            component: e.component,
            suspense: e.suspense,
            ssContent: e.ssContent && pa(e.ssContent),
            ssFallback: e.ssFallback && pa(e.ssFallback),
            el: e.el,
            anchor: e.anchor,
            ctx: e.ctx,
            ce: e.ce,
        };
    }
    function ha(e = " ", t = 0) {
        return ua(Hi, null, e, t);
    }
    function ma(e, t) {
        const n = ua(Zi, null, e);
        return (n.staticCount = t), n;
    }
    function ba(e = "", t = !1) {
        return t ? (Xi(), aa(Yi, null, e)) : ua(Yi, null, e);
    }
    function ga(e) {
        return null == e || "boolean" == typeof e ? ua(Yi) : f(e) ? ua(Ki, null, e.slice()) : "object" == typeof e ? fa(e) : ua(Hi, null, String(e));
    }
    function fa(e) {
        return (null === e.el && -1 !== e.patchFlag) || e.memo ? e : pa(e);
    }
    function va(e, t) {
        let n = 0;
        const { shapeFlag: i } = e;
        if (null == t) t = null;
        else if (f(t)) n = 16;
        else if ("object" == typeof t) {
            if (65 & i) {
                const n = t.default;
                return void (n && (n._c && (n._d = !1), va(e, n()), n._c && (n._d = !0)));
            }
            {
                n = 32;
                const i = t._;
                i || sa in t ? 3 === i && rn && (1 === rn.slots._ ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024))) : (t._ctx = rn);
            }
        } else w(t) ? ((t = { default: t, _ctx: rn }), (n = 32)) : ((t = String(t)), 64 & i ? ((n = 16), (t = [ha(t)])) : (n = 8));
        (e.children = t), (e.shapeFlag |= n);
    }
    function ya(e, t, n, i = null) {
        Ft(e, t, 7, [n, i]);
    }
    const _a = fi();
    let wa = 0;
    let xa = null;
    const ka = () => xa || rn;
    let Sa,
        Ca,
        Fa = "__VUE_INSTANCE_SETTERS__";
    (Ca = W()[Fa]) || (Ca = W()[Fa] = []),
        Ca.push((e) => (xa = e)),
        (Sa = (e) => {
            Ca.length > 1 ? Ca.forEach((t) => t(e)) : Ca[0](e);
        });
    const Ia = (e) => {
            Sa(e), e.scope.on();
        },
        za = () => {
            xa && xa.scope.off(), Sa(null);
        };
    function Ma(e) {
        return 4 & e.vnode.shapeFlag;
    }
    let Pa,
        qa,
        ja = !1;
    function Ea(e, t, n) {
        w(t) ? (e.type.__ssrInlineRender ? (e.ssrRender = t) : (e.render = t)) : S(t) && (__VUE_PROD_DEVTOOLS__ && (e.devtoolsRawSetupState = t), (e.setupState = kt(t))), Aa(e, n);
    }
    function Aa(e, t, n) {
        const i = e.type;
        if (!e.render) {
            if (!t && Pa && !i.render) {
                const t = i.template || di(e).template;
                if (t) {
                    const { isCustomElement: n, compilerOptions: a } = e.appContext.config,
                        { delimiters: r, compilerOptions: o } = i,
                        s = h(h({ isCustomElement: n, delimiters: r }, a), o);
                    i.render = Pa(t, s);
                }
            }
            (e.render = i.render || l), qa && qa(e);
        }
        __VUE_OPTIONS_API__ &&
            (Ia(e),
            ye(),
            (function (e) {
                const t = di(e),
                    n = e.proxy,
                    i = e.ctx;
                (oi = !1), t.beforeCreate && si(t.beforeCreate, e, "bc");
                const {
                    data: a,
                    computed: r,
                    methods: o,
                    watch: s,
                    provide: d,
                    inject: c,
                    created: u,
                    beforeMount: p,
                    mounted: h,
                    beforeUpdate: m,
                    updated: b,
                    activated: g,
                    deactivated: v,
                    beforeDestroy: y,
                    beforeUnmount: _,
                    destroyed: x,
                    unmounted: k,
                    render: C,
                    renderTracked: F,
                    renderTriggered: I,
                    errorCaptured: z,
                    serverPrefetch: M,
                    expose: P,
                    inheritAttrs: q,
                    components: j,
                    directives: E,
                    filters: A,
                } = t;
                if (
                    (c &&
                        (function (e, t) {
                            f(e) && (e = hi(e));
                            for (const n in e) {
                                const i = e[n];
                                let a;
                                (a = S(i) ? ("default" in i ? wi(i.from || n, i.default, !0) : wi(i.from || n)) : wi(i)),
                                    wt(a) ? Object.defineProperty(t, n, { enumerable: !0, configurable: !0, get: () => a.value, set: (e) => (a.value = e) }) : (t[n] = a);
                            }
                        })(c, i),
                    o)
                )
                    for (const e in o) {
                        const t = o[e];
                        w(t) && (i[e] = t.bind(n));
                    }
                if (a) {
                    const t = a.call(n, n);
                    S(t) && (e.data = ct(t));
                }
                if (((oi = !0), r))
                    for (const e in r) {
                        const t = r[e],
                            a = w(t) ? t.bind(n, n) : w(t.get) ? t.get.bind(n, n) : l,
                            o = !w(t) && w(t.set) ? t.set.bind(n) : l,
                            s = Da({ get: a, set: o });
                        Object.defineProperty(i, e, { enumerable: !0, configurable: !0, get: () => s.value, set: (e) => (s.value = e) });
                    }
                if (s) for (const e in s) li(s[e], i, n, e);
                if (d) {
                    const e = w(d) ? d.call(n) : d;
                    Reflect.ownKeys(e).forEach((t) => {
                        !(function (e, t) {
                            if (xa) {
                                let n = xa.provides;
                                const i = xa.parent && xa.parent.provides;
                                i === n && (n = xa.provides = Object.create(i)), (n[e] = t);
                            }
                        })(t, e[t]);
                    });
                }
                function T(e, t) {
                    f(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
                }
                if ((u && si(u, e, "c"), T(Vn, p), T(Bn, h), T(Rn, m), T($n, b), T(jn, g), T(En, v), T(Kn, z), T(Gn, F), T(Wn, I), T(Un, _), T(Ln, k), T(Nn, M), f(P)))
                    if (P.length) {
                        const t = e.exposed || (e.exposed = {});
                        P.forEach((e) => {
                            Object.defineProperty(t, e, { get: () => n[e], set: (t) => (n[e] = t) });
                        });
                    } else e.exposed || (e.exposed = {});
                C && e.render === l && (e.render = C), null != q && (e.inheritAttrs = q), j && (e.components = j), E && (e.directives = E);
            })(e),
            _e(),
            za());
    }
    function Ta(e) {
        if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(kt(vt(e.exposed)), { get: (t, n) => (n in t ? t[n] : n in ni ? ni[n](e) : void 0), has: (e, t) => t in e || t in ni }));
    }
    const Da = (e, t) =>
        (function (e, t, n = !1) {
            let i, a;
            const r = w(e);
            return r ? ((i = e), (a = l)) : ((i = e.get), (a = e.set)), new St(i, a, r || !a, n);
        })(e, 0, ja);
    function Oa(e, t, n) {
        const i = arguments.length;
        return 2 === i ? (S(t) && !f(t) ? (ra(t) ? ua(e, null, [t]) : ua(e, t)) : ua(e, null, t)) : (i > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : 3 === i && ra(n) && (n = [n]), ua(e, t, n));
    }
    const Va = Symbol.for("v-scx"),
        Ba = () => wi(Va),
        Ra = "3.3.4",
        $a = "undefined" != typeof document ? document : null,
        Ua = $a && $a.createElement("template"),
        La = {
            insert: (e, t, n) => {
                t.insertBefore(e, n || null);
            },
            remove: (e) => {
                const t = e.parentNode;
                t && t.removeChild(e);
            },
            createElement: (e, t, n, i) => {
                const a = t ? $a.createElementNS("http://www.w3.org/2000/svg", e) : $a.createElement(e, n ? { is: n } : void 0);
                return "select" === e && i && null != i.multiple && a.setAttribute("multiple", i.multiple), a;
            },
            createText: (e) => $a.createTextNode(e),
            createComment: (e) => $a.createComment(e),
            setText: (e, t) => {
                e.nodeValue = t;
            },
            setElementText: (e, t) => {
                e.textContent = t;
            },
            parentNode: (e) => e.parentNode,
            nextSibling: (e) => e.nextSibling,
            querySelector: (e) => $a.querySelector(e),
            setScopeId(e, t) {
                e.setAttribute(t, "");
            },
            insertStaticContent(e, t, n, i, a, r) {
                const o = n ? n.previousSibling : t.lastChild;
                if (a && (a === r || a.nextSibling)) for (; t.insertBefore(a.cloneNode(!0), n), a !== r && (a = a.nextSibling); );
                else {
                    Ua.innerHTML = i ? `<svg>${e}</svg>` : e;
                    const a = Ua.content;
                    if (i) {
                        const e = a.firstChild;
                        for (; e.firstChild; ) a.appendChild(e.firstChild);
                        a.removeChild(e);
                    }
                    t.insertBefore(a, n);
                }
                return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
            },
        },
        Na = /\s*!important$/;
    function Wa(e, t, n) {
        if (f(n)) n.forEach((n) => Wa(e, t, n));
        else if ((null == n && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
        else {
            const i = (function (e, t) {
                const n = Ka[t];
                if (n) return n;
                let i = A(t);
                if ("filter" !== i && i in e) return (Ka[t] = i);
                i = O(i);
                for (let n = 0; n < Ga.length; n++) {
                    const a = Ga[n] + i;
                    if (a in e) return (Ka[t] = a);
                }
                return t;
            })(e, t);
            Na.test(n) ? e.setProperty(D(i), n.replace(Na, ""), "important") : (e[i] = n);
        }
    }
    const Ga = ["Webkit", "Moz", "ms"],
        Ka = {},
        Ha = "http://www.w3.org/1999/xlink";
    function Ya(e, t, n, i) {
        e.addEventListener(t, n, i);
    }
    const Za = /(?:Once|Passive|Capture)$/;
    let Ja = 0;
    const Qa = Promise.resolve(),
        Xa = () => Ja || (Qa.then(() => (Ja = 0)), (Ja = Date.now())),
        er = /^on[a-z]/;
    "undefined" != typeof HTMLElement && HTMLElement;
    const tr = "transition",
        nr = "animation",
        ir = (e, { slots: t }) =>
            Oa(
                kn,
                (function (e) {
                    const t = {};
                    for (const n in e) n in ar || (t[n] = e[n]);
                    if (!1 === e.css) return t;
                    const {
                            name: n = "v",
                            type: i,
                            duration: a,
                            enterFromClass: r = `${n}-enter-from`,
                            enterActiveClass: o = `${n}-enter-active`,
                            enterToClass: s = `${n}-enter-to`,
                            appearFromClass: l = r,
                            appearActiveClass: d = o,
                            appearToClass: c = s,
                            leaveFromClass: u = `${n}-leave-from`,
                            leaveActiveClass: p = `${n}-leave-active`,
                            leaveToClass: m = `${n}-leave-to`,
                        } = e,
                        b = (function (e) {
                            if (null == e) return null;
                            if (S(e)) return [sr(e.enter), sr(e.leave)];
                            {
                                const t = sr(e);
                                return [t, t];
                            }
                        })(a),
                        g = b && b[0],
                        f = b && b[1],
                        { onBeforeEnter: v, onEnter: y, onEnterCancelled: _, onLeave: w, onLeaveCancelled: x, onBeforeAppear: k = v, onAppear: C = y, onAppearCancelled: F = _ } = t,
                        I = (e, t, n) => {
                            dr(e, t ? c : s), dr(e, t ? d : o), n && n();
                        },
                        z = (e, t) => {
                            (e._isLeaving = !1), dr(e, u), dr(e, m), dr(e, p), t && t();
                        },
                        M = (e) => (t, n) => {
                            const a = e ? C : y,
                                o = () => I(t, e, n);
                            rr(a, [t, o]),
                                cr(() => {
                                    dr(t, e ? l : r), lr(t, e ? c : s), or(a) || pr(t, i, g, o);
                                });
                        };
                    return h(t, {
                        onBeforeEnter(e) {
                            rr(v, [e]), lr(e, r), lr(e, o);
                        },
                        onBeforeAppear(e) {
                            rr(k, [e]), lr(e, l), lr(e, d);
                        },
                        onEnter: M(!1),
                        onAppear: M(!0),
                        onLeave(e, t) {
                            e._isLeaving = !0;
                            const n = () => z(e, t);
                            lr(e, u),
                                document.body.offsetHeight,
                                lr(e, p),
                                cr(() => {
                                    e._isLeaving && (dr(e, u), lr(e, m), or(w) || pr(e, i, f, n));
                                }),
                                rr(w, [e, n]);
                        },
                        onEnterCancelled(e) {
                            I(e, !1), rr(_, [e]);
                        },
                        onAppearCancelled(e) {
                            I(e, !0), rr(F, [e]);
                        },
                        onLeaveCancelled(e) {
                            z(e), rr(x, [e]);
                        },
                    });
                })(e),
                t
            );
    ir.displayName = "Transition";
    const ar = {
            name: String,
            type: String,
            css: { type: Boolean, default: !0 },
            duration: [String, Number, Object],
            enterFromClass: String,
            enterActiveClass: String,
            enterToClass: String,
            appearFromClass: String,
            appearActiveClass: String,
            appearToClass: String,
            leaveFromClass: String,
            leaveActiveClass: String,
            leaveToClass: String,
        },
        rr =
            ((ir.props = h({}, xn, ar)),
            (e, t = []) => {
                f(e) ? e.forEach((e) => e(...t)) : e && e(...t);
            }),
        or = (e) => !!e && (f(e) ? e.some((e) => e.length > 1) : e.length > 1);
    function sr(e) {
        return L(e);
    }
    function lr(e, t) {
        t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e._vtc || (e._vtc = new Set())).add(t);
    }
    function dr(e, t) {
        t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
        const { _vtc: n } = e;
        n && (n.delete(t), n.size || (e._vtc = void 0));
    }
    function cr(e) {
        requestAnimationFrame(() => {
            requestAnimationFrame(e);
        });
    }
    let ur = 0;
    function pr(e, t, n, i) {
        const a = (e._endId = ++ur),
            r = () => {
                a === e._endId && i();
            };
        if (n) return setTimeout(r, n);
        const { type: o, timeout: s, propCount: l } = (function (e, t) {
            const n = window.getComputedStyle(e),
                i = (e) => (n[e] || "").split(", "),
                a = i(`${tr}Delay`),
                r = i(`${tr}Duration`),
                o = hr(a, r),
                s = i(`${nr}Delay`),
                l = i(`${nr}Duration`),
                d = hr(s, l);
            let c = null,
                u = 0,
                p = 0;
            return (
                t === tr
                    ? o > 0 && ((c = tr), (u = o), (p = r.length))
                    : t === nr
                    ? d > 0 && ((c = nr), (u = d), (p = l.length))
                    : ((u = Math.max(o, d)), (c = u > 0 ? (o > d ? tr : nr) : null), (p = c ? (c === tr ? r.length : l.length) : 0)),
                { type: c, timeout: u, propCount: p, hasTransform: c === tr && /\b(transform|all)(,|$)/.test(i(`${tr}Property`).toString()) }
            );
        })(e, t);
        if (!o) return i();
        const d = o + "end";
        let c = 0;
        const u = () => {
                e.removeEventListener(d, p), r();
            },
            p = (t) => {
                t.target === e && ++c >= l && u();
            };
        setTimeout(() => {
            c < l && u();
        }, s + 1),
            e.addEventListener(d, p);
    }
    function hr(e, t) {
        for (; e.length < t.length; ) e = e.concat(e);
        return Math.max(...t.map((t, n) => mr(t) + mr(e[n])));
    }
    function mr(e) {
        return 1e3 * Number(e.slice(0, -1).replace(",", "."));
    }
    const br = (e) => {
        const t = e.props["onUpdate:modelValue"] || !1;
        return f(t) ? (e) => R(t, e) : t;
    };
    function gr(e) {
        e.target.composing = !0;
    }
    function fr(e) {
        const t = e.target;
        t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
    }
    const vr = {
            created(e, { modifiers: { lazy: t, trim: n, number: i } }, a) {
                e._assign = br(a);
                const r = i || (a.props && "number" === a.props.type);
                Ya(e, t ? "change" : "input", (t) => {
                    if (t.target.composing) return;
                    let i = e.value;
                    n && (i = i.trim()), r && (i = U(i)), e._assign(i);
                }),
                    n &&
                        Ya(e, "change", () => {
                            e.value = e.value.trim();
                        }),
                    t || (Ya(e, "compositionstart", gr), Ya(e, "compositionend", fr), Ya(e, "change", fr));
            },
            mounted(e, { value: t }) {
                e.value = null == t ? "" : t;
            },
            beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: i, number: a } }, r) {
                if (((e._assign = br(r)), e.composing)) return;
                if (document.activeElement === e && "range" !== e.type) {
                    if (n) return;
                    if (i && e.value.trim() === t) return;
                    if ((a || "number" === e.type) && U(e.value) === t) return;
                }
                const o = null == t ? "" : t;
                e.value !== o && (e.value = o);
            },
        },
        yr = {
            created(e, { value: t }, n) {
                (e.checked = ee(t, n.props.value)),
                    (e._assign = br(n)),
                    Ya(e, "change", () => {
                        e._assign(
                            (function (e) {
                                return "_value" in e ? e._value : e.value;
                            })(e)
                        );
                    });
            },
            beforeUpdate(e, { value: t, oldValue: n }, i) {
                (e._assign = br(i)), t !== n && (e.checked = ee(t, i.props.value));
            },
        };
    const _r = ["ctrl", "shift", "alt", "meta"],
        wr = {
            stop: (e) => e.stopPropagation(),
            prevent: (e) => e.preventDefault(),
            self: (e) => e.target !== e.currentTarget,
            ctrl: (e) => !e.ctrlKey,
            shift: (e) => !e.shiftKey,
            alt: (e) => !e.altKey,
            meta: (e) => !e.metaKey,
            left: (e) => "button" in e && 0 !== e.button,
            middle: (e) => "button" in e && 1 !== e.button,
            right: (e) => "button" in e && 2 !== e.button,
            exact: (e, t) => _r.some((n) => e[`${n}Key`] && !t.includes(n)),
        },
        xr = (e, t) => (n, ...i) => {
            for (let e = 0; e < t.length; e++) {
                const i = wr[t[e]];
                if (i && i(n, t)) return;
            }
            return e(n, ...i);
        },
        kr = { esc: "escape", space: " ", up: "arrow-up", left: "arrow-left", right: "arrow-right", down: "arrow-down", delete: "backspace" },
        Sr = {
            beforeMount(e, { value: t }, { transition: n }) {
                (e._vod = "none" === e.style.display ? "" : e.style.display), n && t ? n.beforeEnter(e) : Cr(e, t);
            },
            mounted(e, { value: t }, { transition: n }) {
                n && t && n.enter(e);
            },
            updated(e, { value: t, oldValue: n }, { transition: i }) {
                !t != !n &&
                    (i
                        ? t
                            ? (i.beforeEnter(e), Cr(e, !0), i.enter(e))
                            : i.leave(e, () => {
                                  Cr(e, !1);
                              })
                        : Cr(e, t));
            },
            beforeUnmount(e, { value: t }) {
                Cr(e, t);
            },
        };
    function Cr(e, t) {
        e.style.display = t ? e._vod : "none";
    }
    const Fr = h(
        {
            patchProp: (e, t, n, i, a = !1, r, o, s, l) => {
                "class" === t
                    ? (function (e, t, n) {
                          const i = e._vtc;
                          i && (t = (t ? [t, ...i] : [...i]).join(" ")), null == t ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : (e.className = t);
                      })(e, i, a)
                    : "style" === t
                    ? (function (e, t, n) {
                          const i = e.style,
                              a = x(n);
                          if (n && !a) {
                              if (t && !x(t)) for (const e in t) null == n[e] && Wa(i, e, "");
                              for (const e in n) Wa(i, e, n[e]);
                          } else {
                              const r = i.display;
                              a ? t !== n && (i.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (i.display = r);
                          }
                      })(e, n, i)
                    : u(t)
                    ? p(t) ||
                      (function (e, t, n, i, a = null) {
                          const r = e._vei || (e._vei = {}),
                              o = r[t];
                          if (i && o) o.value = i;
                          else {
                              const [n, s] = (function (e) {
                                  let t;
                                  if (Za.test(e)) {
                                      let n;
                                      for (t = {}; (n = e.match(Za)); ) (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0);
                                  }
                                  return [":" === e[2] ? e.slice(3) : D(e.slice(2)), t];
                              })(t);
                              if (i) {
                                  const o = (r[t] = (function (e, t) {
                                      const n = (e) => {
                                          if (e._vts) {
                                              if (e._vts <= n.attached) return;
                                          } else e._vts = Date.now();
                                          Ft(
                                              (function (e, t) {
                                                  if (f(t)) {
                                                      const n = e.stopImmediatePropagation;
                                                      return (
                                                          (e.stopImmediatePropagation = () => {
                                                              n.call(e), (e._stopped = !0);
                                                          }),
                                                          t.map((e) => (t) => !t._stopped && e && e(t))
                                                      );
                                                  }
                                                  return t;
                                              })(e, n.value),
                                              t,
                                              5,
                                              [e]
                                          );
                                      };
                                      return (n.value = e), (n.attached = Xa()), n;
                                  })(i, a));
                                  Ya(e, n, o, s);
                              } else
                                  o &&
                                      ((function (e, t, n, i) {
                                          e.removeEventListener(t, n, i);
                                      })(e, n, o, s),
                                      (r[t] = void 0));
                          }
                      })(e, t, 0, i, o)
                    : (
                          "." === t[0]
                              ? ((t = t.slice(1)), 1)
                              : "^" === t[0]
                              ? ((t = t.slice(1)), 0)
                              : (function (e, t, n, i) {
                                    return i
                                        ? "innerHTML" === t || "textContent" === t || !!(t in e && er.test(t) && w(n))
                                        : "spellcheck" !== t &&
                                              "draggable" !== t &&
                                              "translate" !== t &&
                                              "form" !== t &&
                                              ("list" !== t || "INPUT" !== e.tagName) &&
                                              ("type" !== t || "TEXTAREA" !== e.tagName) &&
                                              (!er.test(t) || !x(n)) &&
                                              t in e;
                                })(e, t, i, a)
                      )
                    ? (function (e, t, n, i, a, r, o) {
                          if ("innerHTML" === t || "textContent" === t) return i && o(i, a, r), void (e[t] = null == n ? "" : n);
                          const s = e.tagName;
                          if ("value" === t && "PROGRESS" !== s && !s.includes("-")) {
                              e._value = n;
                              const i = null == n ? "" : n;
                              return ("OPTION" === s ? e.getAttribute("value") : e.value) !== i && (e.value = i), void (null == n && e.removeAttribute(t));
                          }
                          let l = !1;
                          if ("" === n || null == n) {
                              const i = typeof e[t];
                              "boolean" === i ? (n = X(n)) : null == n && "string" === i ? ((n = ""), (l = !0)) : "number" === i && ((n = 0), (l = !0));
                          }
                          try {
                              e[t] = n;
                          } catch (e) {}
                          l && e.removeAttribute(t);
                      })(e, t, i, r, o, s, l)
                    : ("true-value" === t ? (e._trueValue = i) : "false-value" === t && (e._falseValue = i),
                      (function (e, t, n, i) {
                          if (i && t.startsWith("xlink:")) null == n ? e.removeAttributeNS(Ha, t.slice(6, t.length)) : e.setAttributeNS(Ha, t, n);
                          else {
                              const i = Q(t);
                              null == n || (i && !X(n)) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : n);
                          }
                      })(e, t, i, a));
            },
        },
        La
    );
    let Ir;
    const zr = { key: 1, class: "" },
        Mr = ["href"],
        Pr = { class: "max-w-md mx-auto px-2 mt-12 mb-4" },
        qr = { class: "space-y-6 mx-auto" },
        jr = { class: "space-y-6" },
        Er = { key: 0 },
        Ar = ["src", "width", "height"],
        Tr = { key: 1, class: "text-center w-full space-y-4" },
        Dr = { class: "mr-3 flex justify-center items-center" },
        Or = ca("h1", { class: "text-5xl font-bold text-center" }, " AqBank ", -1),
        Vr = { class: "flex items-center bg-base-200 rounded-xl p-4 mb-4" },
        Br = { class: "flex items-center" },
        Rr = { class: "mr-3" },
        $r = { class: "text-lg font-bold" },
        Ur = { class: "form-control" },
        Lr = { for: "email", class: "label" },
        Nr = ["placeholder"],
        Wr = { class: "form-control" },
        Gr = ["disabled"],
        Kr = { key: 0, class: "flex items-center space-x-2" },
        Hr = { key: 1 },
        Yr = { height: "40", width: "40", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 511.998 511.998", "xml:space": "preserve" },
        Zr = [
            ma(
                '',
                6
            ),
        ],
        Jr = { name: "ProjectLogo" };
    var Qr = a(262);
    const Xr = (0, Qr.A)(Jr, [
        [
            "render",
            function (e, t, n, i, a, r) {
                return Xi(), ia("svg", Yr, Zr);
            },
        ],
    ]);
    var eo = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" },
        to = Object.defineProperty,
        no = Object.defineProperties,
        io = Object.getOwnPropertyDescriptors,
        ao = Object.getOwnPropertySymbols,
        ro = Object.prototype.hasOwnProperty,
        oo = Object.prototype.propertyIsEnumerable,
        so = (e, t, n) => (t in e ? to(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)),
        lo = (e, t) => {
            for (var n in t || (t = {})) ro.call(t, n) && so(e, n, t[n]);
            if (ao) for (var n of ao(t)) oo.call(t, n) && so(e, n, t[n]);
            return e;
        },
        co = (e, t) => no(e, io(t));
    const uo = (e, t, n) => (t, { attrs: i, slots: a }) => {
        var r = t,
            { size: o, color: s, strokeWidth: l } = r,
            d = ((e, t) => {
                var n = {};
                for (var i in e) ro.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
                if (null != e && ao) for (var i of ao(e)) t.indexOf(i) < 0 && oo.call(e, i) && (n[i] = e[i]);
                return n;
            })(r, ["size", "color", "strokeWidth"]);
        return Oa(
            "svg",
            lo(
                co(lo(co(lo({}, eo), { width: o || eo.width, height: o || eo.height, stroke: s || eo.stroke, "stroke-width": l || eo["stroke-width"] }), i), {
                    class: ["tabler-icon", `tabler-icon-${e}`, (null == i ? void 0 : i.class) || ""],
                }),
                d
            ),
            [...n.map((e) => Oa(...e)), ...(a.default ? [a.default()] : [])]
        );
    };
    var po = uo("writing-sign", 0, [
            ["path", { d: "M3 19c3.333 -2 5 -4 5 -6c0 -3 -1 -3 -2 -3s-2.032 1.085 -2 3c.034 2.048 1.658 2.877 2.5 4c1.5 2 2.5 2.5 3.5 1c.667 -1 1.167 -1.833 1.5 -2.5c1 2.333 2.333 3.5 4 3.5h2.5", key: "svg-0" }],
            ["path", { d: "M20 17v-12c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v12l2 2l2 -2z", key: "svg-1" }],
            ["path", { d: "M16 7h4", key: "svg-2" }],
        ]),
        ho = uo("inner-shadow-top", 0, [
            ["path", { d: "M5.636 5.636a9 9 0 1 0 12.728 12.728a9 9 0 0 0 -12.728 -12.728z", key: "svg-0" }],
            ["path", { d: "M16.243 7.757a6 6 0 0 0 -8.486 0", key: "svg-1" }],
        ]);
    const mo = {
            name: "FromStart",
            components: { IconWritingSign: po, IconInnerShadowTop: ho, Logo: Xr },
            inject: ["t"],
            props: {
                template: { type: Object, required: !0 },
                logo: { type: Object, required: !1, default: null },
                submitterName: { type: String, required: !1, default: "" },
                signature: { type: String, required: !1, default: "" },
                signedSignatureUuids: { type: Object, required: !1, default: () => ({}) },
                values: { type: Object, required: !1, default: () => ({}) },
                metadata: { type: Object, required: !1, default: () => ({}) },
                fields: { type: Array, required: !1, default: () => [] },
                externalId: { type: String, required: !1, default: "" },
                sendCopyEmail: { type: Boolean, required: !1, default: null },
                baseUrl: { type: String, required: !0 },
                slug: { type: String, required: !0 },
            },
            emits: ["success"],
            data: () => ({ isLoading: !1, email: "" }),
            methods: {
                submit() {
                    return (
                        (this.isLoading = !0),
                        fetch(this.baseUrl + "/embed/forms", {
                            method: "POST",
                            body: JSON.stringify({
                                email: this.email,
                                slug: this.slug,
                                signature: this.signature,
                                signed_signature_uuids: this.signedSignatureUuids,
                                send_email: this.sendCopyEmail,
                                fields: this.fields,
                                submitter: this.submitterName,
                                external_id: this.externalId,
                                values: this.values,
                                metadata: this.metadata,
                            }),
                            headers: { "Content-Type": "application/json" },
                        })
                            .then(async (e) => {
                                this.$emit("success", await e.json());
                            })
                            .finally(() => {
                                this.isLoading = !1;
                            })
                    );
                },
            },
        },
        bo = (0, Qr.A)(mo, [
            [
                "render",
                function (e, t, n, i, a, r) {
                    const o = Yn("Logo"),
                        s = Yn("IconWritingSign"),
                        l = Yn("IconInnerShadowTop");
                    return (
                        Xi(),
                        ia("div", Pr, [
                            ca("div", qr, [
                                ca("div", jr, [
                                    n.logo
                                        ? (Xi(), ia("div", Er, [ca("img", { src: n.logo.url, width: n.logo.metadata?.width, height: n.logo.metadata?.height, alt: "Logo", class: "max-h-20 md:max-h-24 w-auto mx-auto" }, null, 8, Ar)]))
                                        : (Xi(), ia("div", Tr, [ca("span", Dr, [ua(o, { width: "60", height: "60" })]), Or])),
                                    ca("div", Vr, [ca("div", Br, [ca("div", Rr, [ua(s, { class: "w-10 h-10" })]), ca("div", null, [ca("p", $r, te(n.template.name), 1)])])]),
                                ]),
                                ca(
                                    "form",
                                    { class: "space-y-4", onSubmit: t[1] || (t[1] = xr((...e) => r.submit && r.submit(...e), ["prevent"])) },
                                    [
                                        ca("div", Ur, [
                                            ca("label", Lr, te(r.t("email")), 1),
                                            yn(
                                                ca(
                                                    "input",
                                                    {
                                                        id: "email",
                                                        "onUpdate:modelValue": t[0] || (t[0] = (e) => (a.email = e)),
                                                        name: "email",
                                                        type: "email",
                                                        class: "base-input",
                                                        placeholder: r.t("provide_your_email_to_start"),
                                                        required: "",
                                                    },
                                                    null,
                                                    8,
                                                    Nr
                                                ),
                                                [[vr, a.email]]
                                            ),
                                        ]),
                                        ca("div", Wr, [
                                            ca(
                                                "button",
                                                { type: "submit", class: "base-button", disabled: a.isLoading },
                                                [
                                                    a.isLoading
                                                        ? (Xi(), ia("span", Kr, [ua(l, { class: "animate-spin", width: "22", height: "22" }), ca("span", null, te(r.t("submitting_")), 1)]))
                                                        : (Xi(), ia("span", Hr, te(r.t("start")), 1)),
                                                ],
                                                8,
                                                Gr
                                            ),
                                        ]),
                                    ],
                                    32
                                ),
                            ]),
                        ])
                    );
                },
            ],
        ]),
        go = { class: "max-w-md mx-auto px-2 mt-12 mb-4" },
        fo = { class: "space-y-6 mx-auto" },
        vo = { class: "space-y-6" },
        yo = { key: 0 },
        _o = ["src", "width", "height"],
        wo = { key: 1, class: "text-center w-full space-y-4" },
        xo = { class: "mr-3 flex justify-center items-center" },
        ko = ca("h1", { class: "text-5xl font-bold text-center" }, " AqBank ", -1),
        So = { class: "flex items-center bg-base-200 rounded-xl p-4 mb-4" },
        Co = { class: "flex items-center" },
        Fo = { class: "mr-3" },
        Io = { class: "text-lg font-bold text-left" },
        zo = { class: "text-sm" },
        Mo = { class: "font-semibold" },
        Po = { class: "text-center text-2xl font-semibold" },
        qo = ["disabled"],
        jo = { key: 2 },
        Eo = { key: 3 },
        Ao = { key: 4 },
        To = ["disabled"];
    var Do = uo("reload", 0, [
            ["path", { d: "M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747", key: "svg-0" }],
            ["path", { d: "M20 4v5h-5", key: "svg-1" }],
        ]),
        Oo = uo("mail", 0, [
            ["path", { d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z", key: "svg-0" }],
            ["path", { d: "M3 7l9 6l9 -6", key: "svg-1" }],
        ]);
    const Vo = {
            name: "FromStart",
            components: { IconWritingSign: po, IconInnerShadowTop: ho, IconReload: Do, IconMail: Oo, Logo: Xr },
            inject: ["t"],
            props: {
                template: { type: Object, required: !0 },
                values: { type: Object, required: !1, default: () => ({}) },
                signature: { type: String, required: !1, default: "" },
                signedSignatureUuids: { type: Object, required: !1, default: () => ({}) },
                metadata: { type: Object, required: !1, default: () => ({}) },
                fields: { type: Array, required: !1, default: () => [] },
                submitterName: { type: String, required: !1, default: "" },
                sendCopyEmail: { type: Boolean, required: !1, default: null },
                externalId: { type: String, required: !1, default: "" },
                logo: { type: Object, required: !1, default: null },
                submitter: { type: Object, required: !0 },
                withSendCopyButton: { type: Boolean, required: !1, default: !0 },
                withResubmitButton: { type: Boolean, required: !1, default: !0 },
                baseUrl: { type: String, required: !0 },
            },
            emits: ["resubmit"],
            data: () => ({ isLoading: !1, isSendingCopy: !1, isEmailSent: !1, email: "" }),
            methods: {
                formatDate: (e) => new Intl.DateTimeFormat([], { year: "numeric", month: "long", day: "numeric" }).format(e),
                sendCopyToEmail() {
                    (this.isSendingCopy = !0),
                        fetch(this.baseUrl + `/embed/send_submission_email.json?template_slug=${this.template.slug}&email=${this.submitter.email}`, { method: "POST" })
                            .then(() => {
                                this.isEmailSent = !0;
                            })
                            .finally(() => {
                                this.isSendingCopy = !1;
                            });
                },
                resubmit() {
                    return (
                        (this.isLoading = !0),
                        fetch(this.baseUrl + "/embed/forms", {
                            method: "POST",
                            body: JSON.stringify({
                                email: this.submitter.email,
                                resubmit: !0,
                                send_email: this.sendCopyEmail,
                                fields: this.fields,
                                slug: this.template.slug,
                                submitter: this.submitterName,
                                external_id: this.externalId,
                                signed_signature_uuids: this.signedSignatureUuids,
                                signature: this.signature,
                                values: this.values,
                                metadata: this.metadata,
                            }),
                            headers: { "Content-Type": "application/json" },
                        })
                            .then(async (e) => {
                                this.$emit("resubmit", await e.json());
                            })
                            .finally(() => {
                                this.isLoading = !1;
                            })
                    );
                },
            },
        },
        Bo = (0, Qr.A)(Vo, [
            [
                "render",
                function (e, t, n, i, a, r) {
                    const o = Yn("Logo"),
                        s = Yn("IconWritingSign"),
                        l = Yn("IconInnerShadowTop"),
                        d = Yn("IconMail"),
                        c = Yn("IconReload");
                    return (
                        Xi(),
                        ia("div", go, [
                            ca("div", fo, [
                                ca("div", vo, [
                                    n.logo
                                        ? (Xi(), ia("div", yo, [ca("img", { src: n.logo.url, width: n.logo.metadata?.width, height: n.logo.metadata?.height, alt: "Logo", class: "max-h-20 md:max-h-24 w-auto mx-auto" }, null, 8, _o)]))
                                        : (Xi(), ia("div", wo, [ca("span", xo, [ua(o, { width: "60", height: "60" })]), ko])),
                                    ca("div", So, [
                                        ca("div", Co, [
                                            ca("div", Fo, [ua(s, { class: "w-10 h-10" })]),
                                            ca("div", null, [ca("p", Io, te(n.template.name), 1), ca("p", zo, [ha(te(r.t("submitted_on")) + " ", 1), ca("span", Mo, te(r.formatDate(new Date(n.submitter.completed_at))), 1)])]),
                                        ]),
                                    ]),
                                ]),
                                ca("div", Po, te(r.t("form_has_been_submitted_already")), 1),
                                ca("div", null, [
                                    n.withSendCopyButton
                                        ? (Xi(),
                                          ia(
                                              "button",
                                              {
                                                  key: 0,
                                                  class: "white-button flex items-center space-x-1 w-full",
                                                  disabled: a.isSendingCopy || a.isEmailSent,
                                                  onClick: t[0] || (t[0] = xr((...e) => r.sendCopyToEmail && r.sendCopyToEmail(...e), ["prevent"])),
                                              },
                                              [
                                                  a.isSendingCopy ? (Xi(), aa(l, { key: 0, class: "animate-spin" })) : (Xi(), aa(d, { key: 1 })),
                                                  a.isEmailSent
                                                      ? (Xi(), ia("span", jo, te(r.t("email_has_been_sent")), 1))
                                                      : a.isSendingCopy
                                                      ? (Xi(), ia("span", Eo, te(r.t("sending_")), 1))
                                                      : (Xi(), ia("span", Ao, te(r.t("send_copy_via_email")), 1)),
                                              ],
                                              8,
                                              qo
                                          ))
                                        : ba("", !0),
                                    n.withResubmitButton
                                        ? (Xi(),
                                          ia(
                                              "button",
                                              { key: 1, class: "base-button mt-4 flex items-center space-x-1 w-full", disabled: a.isLoading, onClick: t[1] || (t[1] = xr((...e) => r.resubmit && r.resubmit(...e), ["prevent"])) },
                                              [a.isLoading ? (Xi(), aa(l, { key: 0, class: "animate-spin" })) : (Xi(), aa(c, { key: 1 })), ca("span", null, te(r.t("resubmit")), 1)],
                                              8,
                                              To
                                          ))
                                        : ba("", !0),
                                ]),
                            ]),
                        ])
                    );
                },
            ],
        ]),
        Ro = { class: "max-w-md mx-auto px-2 mt-12 mb-4" },
        $o = { class: "space-y-6 mx-auto" },
        Uo = { class: "space-y-6" },
        Lo = { key: 0 },
        No = ["src", "width", "height"],
        Wo = { key: 1, class: "text-center w-full space-y-4" },
        Go = { class: "mr-3 flex justify-center items-center" },
        Ko = ca("h1", { class: "text-5xl font-bold text-center" }, " AqBank ", -1),
        Ho = { class: "flex items-center bg-base-200 rounded-xl p-4 mb-4" },
        Yo = { class: "flex items-center" },
        Zo = { class: "mr-3" },
        Jo = { class: "text-lg font-bold text-left" },
        Qo = { class: "text-sm" },
        Xo = { class: "font-semibold" },
        es = {
            name: "FromStart",
            components: { IconWritingSign: po, Logo: Xr },
            inject: ["t"],
            props: { template: { type: Object, required: !0 }, logo: { type: Object, required: !1, default: null }, submitter: { type: Object, required: !0 } },
            methods: { formatDate: (e) => new Intl.DateTimeFormat([], { year: "numeric", month: "long", day: "numeric" }).format(e) },
        },
        ts = (0, Qr.A)(es, [
            [
                "render",
                function (e, t, n, i, a, r) {
                    const o = Yn("Logo"),
                        s = Yn("IconWritingSign");
                    return (
                        Xi(),
                        ia("div", Ro, [
                            ca("div", $o, [
                                ca("div", Uo, [
                                    n.logo
                                        ? (Xi(), ia("div", Lo, [ca("img", { src: n.logo.url, width: n.logo.metadata?.width, height: n.logo.metadata?.height, alt: "Logo", class: "max-h-20 md:max-h-24 w-auto mx-auto" }, null, 8, No)]))
                                        : (Xi(), ia("div", Wo, [ca("span", Go, [ua(o, { width: "60", height: "60" })]), Ko])),
                                    ca("div", Ho, [
                                        ca("div", Yo, [
                                            ca("div", Zo, [ua(s, { class: "w-10 h-10" })]),
                                            ca("div", null, [
                                                ca("p", Jo, te(n.template.name), 1),
                                                ca("p", Qo, [
                                                    ha(te(n.submitter.declined_at ? r.t("declined_on") : r.t("expired_on")) + " ", 1),
                                                    ca("span", Xo, te(r.formatDate(new Date(n.submitter.declined_at || n.submitter.expire_at))), 1),
                                                ]),
                                            ]),
                                        ]),
                                    ]),
                                ]),
                            ]),
                        ])
                    );
                },
            ],
        ]),
        ns = { id: "scrollbox" },
        is = { class: "mx-auto block pb-72", style: { "max-width": "1000px" } },
        as = { key: 0, class: "mt-4 flex" },
        rs = ["src", "width", "height"],
        os = { key: 1, id: "form_header", class: "sticky top-0 z-50 bg-base-100 py-2 px-1 flex items-center", style: { "margin-bottom": "-16px" } },
        ss = { class: "text-xl md:text-2xl font-medium focus:text-clip", style: { width: "100%", overflow: "hidden", "text-overflow": "ellipsis", "white-space": "nowrap" } },
        ls = { class: "flex items-center space-x-2", style: { "margin-left": "20px", "flex-shrink": "0" } },
        ds = { class: "modal-box pt-4 pb-6 px-6 mt-20 max-h-none" },
        cs = { class: "flex justify-between items-center border-b pb-2 mb-2 font-medium" },
        us = { class: "mt-4 text-center" },
        ps = { class: "form-control mt-2" },
        hs = ["placeholder"],
        ms = ["disabled"],
        bs = { key: 0 },
        gs = { class: "flex items-center justify-center space-x-2" },
        fs = { class: "" },
        vs = { key: 1 },
        ys = { class: "flex items-center justify-center space-x-2" },
        _s = { class: "" },
        ws = { key: 0, class: "sticky bottom-0 h-0 z-20" },
        xs = { class: "mx-auto", style: { "max-width": "1000px" } },
        ks = ["title"],
        Ss = ["action"],
        Cs = ["value"],
        Fs = ca("input", { value: "put", name: "_method", type: "hidden" }, null, -1),
        Is = { class: "md:mt-4" },
        zs = { key: 0 },
        Ms = { key: 3 },
        Ps = ["for"],
        qs = { key: 1, class: "py-1" },
        js = { key: 2, dir: "auto", class: "mb-3 px-1" },
        Es = ["id", "required", "name"],
        As = ["selected"],
        Ts = ["selected", "value"],
        Ds = { key: 4 },
        Os = ["for"],
        Vs = { key: 1, dir: "auto", class: "mb-3 px-1" },
        Bs = { class: "flex w-full max-h-44 overflow-y-auto" },
        Rs = { key: 0, class: "text-xl px-1" },
        $s = { class: "font-semibold" },
        Us = ["for"],
        Ls = ["id", "name", "value", "required"],
        Ns = { class: "text-xl" },
        Ws = { key: 6 },
        Gs = { key: 0, dir: "auto", class: "mb-3 px-1" },
        Ks = { class: "flex w-full max-h-44 overflow-y-auto" },
        Hs = ca("input", { type: "hidden", name: "cast_boolean", value: "true" }, null, -1),
        Ys = { class: "space-y-3.5 mx-auto" },
        Zs = { class: "text-xl" },
        Js = { class: "font-semibold" },
        Qs = ["name", "value"],
        Xs = ["for"],
        el = ["name", "value"],
        tl = ["id", "oninvalid", "onchange", "required", "checked", "onClick"],
        nl = { key: 0, class: "text-xl" },
        il = { key: 1, class: "text-xl" },
        al = ["disabled"],
        rl = { class: "flex" },
        ol = { key: 1, class: "w-6 flex justify-start mr-1" },
        sl = [ca("span", null, "...", -1)],
        ll = { key: 0, class: "text-center mt-1" },
        dl = { key: 3, class: "flex justify-center" },
        cl = { class: "flex items-center mt-4 mb-1 flex-wrap" },
        ul = ["onClick"],
        pl = { key: 4, class: "mt-5" },
        hl = { key: 0, class: "absolute top-0 bottom-0 right-0 left-0 items-center justify-center h-full w-full" },
        ml = { key: 0, class: "flex justify-center items-center h-full opacity-50" },
        bl = { key: 1, class: "absolute -top-7 rounded bg-base-content text-base-100 px-2 text-sm whitespace-nowrap pointer-events-none" },
        gl = ["src"],
        fl = ["src"],
        vl = { key: 5, class: "flex flex-col justify-between h-full overflow-hidden" },
        yl = { class: "flex-grow flex overflow-hidden", style: { "min-height": "50%" } },
        _l = ["src"],
        wl = { key: 0, class: "w-full mt-1 text-[1vw] lg:text-[0.55rem] lg:leading-[0.65rem]" },
        xl = { class: "truncate uppercase" },
        kl = ["src"],
        Sl = { key: 7, class: "px-0.5 flex flex-col justify-center" },
        Cl = ["href"],
        Fl = ["checked"],
        Il = ["checked"],
        zl = ["checked"],
        Ml = { key: 11, class: "w-full flex items-center" },
        Pl = { key: 1 },
        ql = { key: 2 },
        jl = { key: 3 };
    var El = uo("paperclip", 0, [["path", { d: "M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5", key: "svg-0" }]]),
        Al = uo("check", 0, [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]]),
        Tl = uo("text-size", 0, [
            ["path", { d: "M3 7v-2h13v2", key: "svg-0" }],
            ["path", { d: "M10 5v14", key: "svg-1" }],
            ["path", { d: "M12 19h-4", key: "svg-2" }],
            ["path", { d: "M15 13v-1h6v1", key: "svg-3" }],
            ["path", { d: "M18 12v7", key: "svg-4" }],
            ["path", { d: "M17 19h2", key: "svg-5" }],
        ]),
        Dl = uo("calendar-event", 0, [
            ["path", { d: "M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }],
            ["path", { d: "M16 3l0 4", key: "svg-1" }],
            ["path", { d: "M8 3l0 4", key: "svg-2" }],
            ["path", { d: "M4 11l16 0", key: "svg-3" }],
            ["path", { d: "M8 15h2v2h-2z", key: "svg-4" }],
        ]),
        Ol = uo("square-number-1", 0, [
            ["path", { d: "M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z", key: "svg-0" }],
            ["path", { d: "M10 10l2 -2v8", key: "svg-1" }],
        ]),
        Vl = uo("photo", 0, [
            ["path", { d: "M15 8h.01", key: "svg-0" }],
            ["path", { d: "M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z", key: "svg-1" }],
            ["path", { d: "M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5", key: "svg-2" }],
            ["path", { d: "M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3", key: "svg-3" }],
        ]),
        Bl = uo("letter-case-upper", 0, [
            ["path", { d: "M3 19v-10.5a3.5 3.5 0 0 1 7 0v10.5", key: "svg-0" }],
            ["path", { d: "M3 13h7", key: "svg-1" }],
            ["path", { d: "M14 19v-10.5a3.5 3.5 0 0 1 7 0v10.5", key: "svg-2" }],
            ["path", { d: "M14 13h7", key: "svg-3" }],
        ]),
        Rl = uo("select", 0, [
            ["path", { d: "M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z", key: "svg-0" }],
            ["path", { d: "M9 11l3 3l3 -3", key: "svg-1" }],
        ]),
        $l = uo("checkbox", 0, [
            ["path", { d: "M9 11l3 3l8 -8", key: "svg-0" }],
            ["path", { d: "M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9", key: "svg-1" }],
        ]),
        Ul = uo("circle-dot", 0, [
            ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
            ["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-1" }],
        ]),
        Ll = uo("rubber-stamp", 0, [
            ["path", { d: "M21 17.85h-18c0 -4.05 1.421 -4.05 3.79 -4.05c5.21 0 1.21 -4.59 1.21 -6.8a4 4 0 1 1 8 0c0 2.21 -4 6.8 1.21 6.8c2.369 0 3.79 0 3.79 4.05z", key: "svg-0" }],
            ["path", { d: "M5 21h14", key: "svg-1" }],
        ]),
        Nl = uo("columns-3", 0, [["path", { d: "M3 3m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1zm6 -1v18m6 -18v18", key: "svg-0" }]]),
        Wl = uo("checks", 0, [
            ["path", { d: "M7 12l5 5l10 -10", key: "svg-0" }],
            ["path", { d: "M2 12l5 5m5 -5l5 -5", key: "svg-1" }],
        ]),
        Gl = uo("phone-check", 0, [
            ["path", { d: "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2", key: "svg-0" }],
            ["path", { d: "M15 6l2 2l4 -4", key: "svg-1" }],
        ]),
        Kl = uo("credit-card", 0, [
            ["path", { d: "M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z", key: "svg-0" }],
            ["path", { d: "M3 10l18 0", key: "svg-1" }],
            ["path", { d: "M7 15l.01 0", key: "svg-2" }],
            ["path", { d: "M11 15l2 0", key: "svg-3" }],
        ]);
    const Hl = {
            name: "FieldArea",
            components: { IconPaperclip: El, IconCheck: Al },
            inject: ["t"],
            props: {
                field: { type: Object, required: !0 },
                submitter: { type: Object, required: !1, default: () => ({}) },
                withSignatureId: { type: Boolean, required: !1, default: !1 },
                isValueSet: { type: Boolean, required: !1, default: !1 },
                scrollPadding: { type: String, required: !1, default: "-80px" },
                withFieldPlaceholder: { type: Boolean, required: !1, default: !1 },
                submittable: { type: Boolean, required: !1, default: !1 },
                modelValue: { type: [Array, String, Number, Object, Boolean], required: !1, default: "" },
                values: { type: Object, required: !1, default: () => ({}) },
                isActive: { type: Boolean, required: !1, default: !1 },
                withLabel: { type: Boolean, required: !1, default: !0 },
                fieldIndex: { type: Number, required: !1, default: 0 },
                attachmentsIndex: { type: Object, required: !1, default: () => ({}) },
                area: { type: Object, required: !0 },
            },
            emits: ["update:model-value"],
            data: () => ({ textOverflowChars: 0 }),
            computed: {
                fieldNames() {
                    return {
                        text: this.t("text"),
                        signature: this.t("signature"),
                        initials: this.t("initials"),
                        date: this.t("date"),
                        number: this.t("number"),
                        image: this.t("image"),
                        file: this.t("file"),
                        select: this.t("select"),
                        checkbox: this.t("checkbox"),
                        multiple: this.t("multiple"),
                        radio: this.t("radio"),
                        cells: this.t("cells"),
                        stamp: this.t("stamp"),
                        payment: this.t("payment"),
                        phone: this.t("phone"),
                    };
                },
                alignClasses: () => ({ center: "text-center", left: "text-left", right: "text-right" }),
                option() {
                    return this.field.options.find((e) => e.uuid === this.area.option_uuid);
                },
                fieldIcons: () => ({ text: Tl, signature: po, date: Dl, number: Ol, image: Vl, initials: Bl, file: El, select: Rl, checkbox: $l, radio: Ul, stamp: Ll, cells: Nl, multiple: Wl, phone: Gl, payment: Kl }),
                image() {
                    return "image" === this.field.type ? this.attachmentsIndex[this.modelValue] : null;
                },
                stamp() {
                    return "stamp" === this.field.type ? this.attachmentsIndex[this.modelValue] : null;
                },
                signature() {
                    return "signature" === this.field.type ? this.attachmentsIndex[this.modelValue] : null;
                },
                initials() {
                    return "initials" === this.field.type ? this.attachmentsIndex[this.modelValue] : null;
                },
                locale: () => Intl.DateTimeFormat().resolvedOptions()?.locale,
                formattedDate() {
                    return "date" === this.field.type && this.modelValue
                        ? this.formatDate("{{date}}" === this.modelValue ? new Date() : new Date(this.modelValue), this.field.preferences?.format || (this.locale.endsWith("-US") ? "MM/DD/YYYY" : "DD/MM/YYYY"))
                        : "";
                },
                attachments() {
                    return "file" === this.field.type ? (this.modelValue || []).map((e) => this.attachmentsIndex[e]) : "payment" === this.field.type ? [this.attachmentsIndex[this.modelValue]].filter(Boolean) : [];
                },
                computedStyle() {
                    const { x: e, y: t, w: n, h: i } = this.area,
                        a = { top: 100 * t + "%", left: 100 * e + "%", width: 100 * n + "%", height: 100 * i + "%" };
                    return this.field.preferences?.font_size && ((a.fontSize = `clamp(4pt, 1.6vw, ${this.field.preferences.font_size}pt)`), (a.lineHeight = `clamp(6pt, 2.0vw, ${parseInt(this.field.preferences.font_size) + 3}pt)`)), a;
                },
            },
            watch: {
                modelValue() {
                    this.$nextTick(() => {
                        ["date", "text", "number"].includes(this.field.type) &&
                            this.$refs.textContainer &&
                            (0 === this.textOverflowChars || this.textOverflowChars - 4 > `${this.modelValue}`.length) &&
                            (this.textOverflowChars = this.$refs.textContainer.scrollHeight > this.$refs.textContainer.clientHeight ? `${this.modelValue || (this.withFieldPlaceholder ? this.field.name : "")}`.length : 0);
                    });
                },
            },
            mounted() {
                this.$nextTick(() => {
                    ["date", "text", "number"].includes(this.field.type) &&
                        this.$refs.textContainer &&
                        (this.textOverflowChars = this.$refs.textContainer.scrollHeight > this.$refs.textContainer.clientHeight ? `${this.modelValue || (this.withFieldPlaceholder ? this.field.name : "")}`.length : 0);
                });
            },
            methods: {
                optionValue(e) {
                    if (e) {
                        if (e.value) return e.value;
                        {
                            const t = this.field.options.indexOf(e);
                            return `${this.t("option")} ${t + 1}`;
                        }
                    }
                },
                formatNumber: (e, t) => ("comma" === t ? new Intl.NumberFormat("en-US").format(e) : "dot" === t ? new Intl.NumberFormat("de-DE").format(e) : "space" === t ? new Intl.NumberFormat("fr-FR").format(e) : e),
                formatDate(e, t) {
                    const n = new Intl.DateTimeFormat([], {
                        day: { D: "numeric", DD: "2-digit" }[t.match(/D+/)],
                        month: { M: "numeric", MM: "2-digit", MMM: "short", MMMM: "long" }[t.match(/M+/)],
                        year: { YYYY: "numeric", YYY: "numeric", YY: "2-digit" }[t.match(/Y+/)],
                        timeZone: "UTC",
                    }).formatToParts(e);
                    return t
                        .replace(/D+/, n.find((e) => "day" === e.type).value)
                        .replace(/M+/, n.find((e) => "month" === e.type).value)
                        .replace(/Y+/, n.find((e) => "year" === e.type).value);
                },
                updateMultipleSelectValue(e) {
                    if (this.modelValue?.includes(e)) {
                        const t = [...this.modelValue];
                        t.splice(t.indexOf(e), 1), this.$emit("update:model-value", t);
                    } else {
                        const t = this.modelValue ? [...this.modelValue] : [];
                        t.push(e), this.$emit("update:model-value", t);
                    }
                },
            },
        },
        Yl = (0, Qr.A)(Hl, [
            [
                "render",
                function (e, t, n, i, a, r) {
                    const o = Yn("IconPaperclip"),
                        s = Yn("IconCheck");
                    return (
                        Xi(),
                        ia(
                            "div",
                            {
                                class: J([
                                    "field-area flex absolute lg:text-base -outline-offset-1",
                                    {
                                        "font-serif": "Times" === n.field.preferences?.font,
                                        "text-[1.6vw] lg:text-base": !a.textOverflowChars,
                                        "text-[1.0vw] lg:text-xs": a.textOverflowChars,
                                        "cursor-default": !n.submittable,
                                        "border border-red-100 bg-red-100 cursor-pointer": n.submittable,
                                        "border border-red-100": !n.isActive && n.submittable,
                                        "bg-opacity-80": !n.isActive && !n.isValueSet && n.submittable,
                                        "field-area-active outline-red-500 outline-dashed outline-2 z-10": n.isActive && n.submittable,
                                        "bg-opacity-40": (n.isActive || n.isValueSet) && n.submittable,
                                    },
                                ]),
                                dir: "auto",
                                style: G(r.computedStyle),
                            },
                            [
                                (n.withFieldPlaceholder && n.field.name && "cells" !== n.field.type) || n.isActive || n.isValueSet || "checkbox" === n.field.type || !n.submittable || n.area.option_uuid
                                    ? ba("", !0)
                                    : (Xi(), ia("div", hl, [n.field ? (Xi(), ia("span", ml, [(Xi(), aa(Jn(r.fieldIcons[n.field.type]), { width: "100%", height: "100%", class: "max-h-10 text-base-content" }))])) : ba("", !0)])),
                                !n.isActive || !n.withLabel || (n.area.option_uuid && r.option.value)
                                    ? ba("", !0)
                                    : (Xi(),
                                      ia("div", bl, [
                                          n.area.option_uuid && !r.option.value
                                              ? (Xi(), ia(Ki, { key: 0 }, [ha(te(r.optionValue(r.option)), 1)], 64))
                                              : (Xi(),
                                                ia(
                                                    Ki,
                                                    { key: 1 },
                                                    [
                                                        ha(te(n.field.title || n.field.name || r.fieldNames[n.field.type]) + " ", 1),
                                                        "checkbox" !== n.field.type || n.field.name
                                                            ? n.field.required || "checkbox" === n.field.type
                                                                ? ba("", !0)
                                                                : (Xi(), ia(Ki, { key: 1 }, [ha(" (" + te(r.t("optional")) + ") ", 1)], 64))
                                                            : (Xi(), ia(Ki, { key: 0 }, [ha(te(n.fieldIndex + 1), 1)], 64)),
                                                    ],
                                                    64
                                                )),
                                      ])),
                                n.isActive ? (Xi(), ia("div", { key: 2, ref: "scrollToElem", class: "absolute", style: G({ top: n.scrollPadding }) }, null, 4)) : ba("", !0),
                                "image" === n.field.type && r.image
                                    ? (Xi(), ia("img", { key: 3, class: "object-contain mx-auto", src: r.image.url }, null, 8, gl))
                                    : "stamp" === n.field.type && r.stamp
                                    ? (Xi(), ia("img", { key: 4, class: "object-contain mx-auto", src: r.stamp.url }, null, 8, fl))
                                    : "signature" === n.field.type && r.signature
                                    ? (Xi(),
                                      ia("div", vl, [
                                          ca("div", yl, [ca("img", { class: "object-contain mx-auto", src: r.signature.url }, null, 8, _l)]),
                                          n.withSignatureId
                                              ? (Xi(),
                                                ia("div", wl, [
                                                    ca("div", xl, " ID: " + te(r.signature.uuid), 1),
                                                    ca("div", null, [
                                                        ha(te(r.t("reason")) + ": " + te(n.values[n.field.preferences?.reason_field_uuid] || r.t("digitally_signed_by")) + " " + te(n.submitter.name) + " ", 1),
                                                        n.submitter.email ? (Xi(), ia(Ki, { key: 0 }, [ha(" <" + te(n.submitter.email) + "> ", 1)], 64)) : ba("", !0),
                                                    ]),
                                                    ca(
                                                        "div",
                                                        null,
                                                        te(new Date(r.signature.created_at).toLocaleString(void 0, { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric", timeZoneName: "short" })),
                                                        1
                                                    ),
                                                ]))
                                              : ba("", !0),
                                      ]))
                                    : "initials" === n.field.type && r.initials
                                    ? (Xi(), ia("img", { key: 6, class: "object-contain mx-auto", src: r.initials.url }, null, 8, kl))
                                    : ("file" !== n.field.type && "payment" !== n.field.type) || !r.attachments.length
                                    ? "checkbox" === n.field.type
                                        ? (Xi(),
                                          ia("div", { key: 8, class: "w-full p-[1px] flex items-center justify-center", onClick: t[1] || (t[1] = (e) => e.target.querySelector("input")?.click()) }, [
                                              n.submittable
                                                  ? (Xi(),
                                                    ia(
                                                        "input",
                                                        {
                                                            key: 0,
                                                            type: "checkbox",
                                                            value: !1,
                                                            class: J(["aspect-square base-checkbox", { "!w-auto !h-full": n.area.w > n.area.h, "!w-full !h-auto": n.area.w <= n.area.h }]),
                                                            checked: !!n.modelValue,
                                                            onClick: t[0] || (t[0] = (t) => e.$emit("update:model-value", !n.modelValue)),
                                                        },
                                                        null,
                                                        10,
                                                        Fl
                                                    ))
                                                  : n.modelValue
                                                  ? (Xi(), aa(s, { key: 1, class: J(["aspect-square", { "!w-auto !h-full": n.area.w > n.area.h, "!w-full !h-auto": n.area.w <= n.area.h }]) }, null, 8, ["class"]))
                                                  : ba("", !0),
                                          ]))
                                        : "radio" === n.field.type && n.area.option_uuid
                                        ? (Xi(),
                                          ia("div", { key: 9, class: "w-full p-[1px] flex items-center justify-center", onClick: t[3] || (t[3] = (e) => e.target.querySelector("input")?.click()) }, [
                                              n.submittable
                                                  ? (Xi(),
                                                    ia(
                                                        "input",
                                                        {
                                                            key: 0,
                                                            type: "radio",
                                                            value: !1,
                                                            class: J([
                                                                "aspect-square checked:checkbox checked:checkbox-xs",
                                                                { "base-radio": !n.modelValue || n.modelValue !== r.optionValue(r.option), "!w-auto !h-full": n.area.w > n.area.h, "!w-full !h-auto": n.area.w <= n.area.h },
                                                            ]),
                                                            checked: !!n.modelValue && n.modelValue === r.optionValue(r.option),
                                                            onClick: t[2] || (t[2] = (t) => e.$emit("update:model-value", r.optionValue(r.option))),
                                                        },
                                                        null,
                                                        10,
                                                        Il
                                                    ))
                                                  : n.modelValue && n.modelValue === r.optionValue(r.option)
                                                  ? (Xi(), aa(s, { key: 1, class: J(["aspect-square", { "!w-auto !h-full": n.area.w > n.area.h, "!w-full !h-auto": n.area.w <= n.area.h }]) }, null, 8, ["class"]))
                                                  : ba("", !0),
                                          ]))
                                        : "multiple" === n.field.type && n.area.option_uuid
                                        ? (Xi(),
                                          ia("div", { key: 10, class: "w-full p-[1px] flex items-center justify-center", onClick: t[5] || (t[5] = (e) => e.target.querySelector("input")?.click()) }, [
                                              n.submittable
                                                  ? (Xi(),
                                                    ia(
                                                        "input",
                                                        {
                                                            key: 0,
                                                            type: "checkbox",
                                                            value: !1,
                                                            class: J(["aspect-square base-checkbox", { "!w-auto !h-full": n.area.w > n.area.h, "!w-full !h-auto": n.area.w <= n.area.h }]),
                                                            checked: !!n.modelValue && n.modelValue.includes(r.optionValue(r.option)),
                                                            onChange: t[4] || (t[4] = (e) => r.updateMultipleSelectValue(r.optionValue(r.option))),
                                                        },
                                                        null,
                                                        42,
                                                        zl
                                                    ))
                                                  : n.modelValue && n.modelValue.includes(r.optionValue(r.option))
                                                  ? (Xi(), aa(s, { key: 1, class: J(["aspect-square", { "!w-auto !h-full": n.area.w > n.area.h, "!w-full !h-auto": n.area.w <= n.area.h }]) }, null, 8, ["class"]))
                                                  : ba("", !0),
                                          ]))
                                        : "cells" === n.field.type
                                        ? (Xi(),
                                          ia("div", Ml, [
                                              (Xi(!0),
                                              ia(
                                                  Ki,
                                                  null,
                                                  ei(n.modelValue, (e, t) => (Xi(), ia("div", { key: t, class: "text-center flex-none", style: G({ width: (n.area.cell_w / n.area.w) * 100 + "%" }) }, te(e), 5))),
                                                  128
                                              )),
                                          ]))
                                        : (Xi(),
                                          ia(
                                              "div",
                                              { key: 12, ref: "textContainer", dir: "auto", class: J(["flex items-center px-0.5 w-full", r.alignClasses[n.field.preferences?.align]]) },
                                              [
                                                  n.field && n.field.name && n.withFieldPlaceholder && !n.modelValue && 0 !== n.modelValue
                                                      ? (Xi(), ia("span", { key: 0, class: J(["whitespace-pre-wrap text-gray-400", { "w-full": n.field.preferences?.align }]) }, te(n.field.name), 3))
                                                      : Array.isArray(n.modelValue)
                                                      ? (Xi(), ia("span", Pl, te(n.modelValue.join(", ")), 1))
                                                      : "date" === n.field.type
                                                      ? (Xi(), ia("span", ql, te(r.formattedDate), 1))
                                                      : "number" === n.field.type
                                                      ? (Xi(), ia("span", jl, te(r.formatNumber(n.modelValue, n.field.preferences?.format)), 1))
                                                      : (Xi(), ia("span", { key: 4, class: J(["whitespace-pre-wrap", { "w-full": n.field.preferences?.align }]) }, te(n.modelValue), 3)),
                                              ],
                                              2
                                          ))
                                    : (Xi(),
                                      ia("div", Sl, [
                                          (Xi(!0),
                                          ia(
                                              Ki,
                                              null,
                                              ei(r.attachments, (e, t) => (Xi(), ia("a", { key: t, target: "_blank", href: e.url }, [ua(o, { class: "inline w-[1.6vw] h-[1.6vw] lg:w-4 lg:h-4" }), ha(" " + te(e.filename), 1)], 8, Cl))),
                                              128
                                          )),
                                      ])),
                            ],
                            6
                        )
                    );
                },
            ],
        ]),
        Zl = {
            name: "FieldAreas",
            components: { FieldArea: Yl },
            props: {
                steps: { type: Array, required: !1, default: () => [] },
                withSignatureId: { type: Boolean, required: !1, default: !1 },
                submittable: { type: Boolean, required: !1, default: !0 },
                submitter: { type: Object, required: !0 },
                values: { type: Object, required: !1, default: () => ({}) },
                withFieldPlaceholder: { type: Boolean, required: !1, default: !1 },
                scrollPadding: { type: String, required: !1, default: "-80px" },
                attachmentsIndex: { type: Object, required: !1, default: () => ({}) },
                withLabel: { type: Boolean, required: !1, default: !0 },
                scrollEl: { type: Object, required: !1, default: null },
                currentStep: { type: Array, required: !1, default: () => [] },
            },
            emits: ["focus-step"],
            data: () => ({ areaRefs: [] }),
            beforeUpdate() {
                this.areaRefs = [];
            },
            methods: {
                findPageElementForArea(e) {
                    return (this.$root.$el?.parentNode?.getRootNode() || document).getElementById(`page-${e.attachment_uuid}-${e.page}`);
                },
                scrollIntoField(e) {
                    e?.areas && this.scrollIntoArea(e.areas[0]);
                },
                scrollIntoArea(e) {
                    const t = this.areaRefs.find((t) => t.area === e);
                    if (t) {
                        const e = this.$root.$el.parentNode.getRootNode();
                        if ("hidden" === (e.body || e.querySelector("div")).style.overflow) this.scrollInContainer(t.$el);
                        else {
                            const e = t.$refs.scrollToElem.getBoundingClientRect(),
                                n = this.scrollEl || window;
                            let i = {};
                            (i = this.scrollEl === document.documentElement ? this.scrollEl.getBoundingClientRect() : (this.$root.$el?.parentNode?.classList?.contains("ds") ? this.$root.$el : document.body).getBoundingClientRect()),
                                n.scrollTo({ top: e.top - i.top, behavior: "smooth" });
                        }
                        return !0;
                    }
                },
                scrollInContainer(e) {
                    const t = this.$root.$el.parentNode.getRootNode(),
                        n = t.getElementById("scrollbox"),
                        i = t.getElementById("form_container"),
                        a = t.body || t.querySelector("div"),
                        r = n.children[0].getBoundingClientRect(),
                        o = e.getBoundingClientRect().top - r.top;
                    n.scrollTo({ top: o - a.offsetHeight + i.offsetHeight + e.offsetHeight + 64, behavior: "smooth" });
                },
                setAreaRef(e) {
                    e && this.areaRefs.push(e);
                },
            },
        },
        Jl = (0, Qr.A)(Zl, [
            [
                "render",
                function (e, t, n, i, a, r) {
                    const o = Yn("FieldArea");
                    return (
                        Xi(!0),
                        ia(
                            Ki,
                            null,
                            ei(
                                n.steps,
                                (t, i) => (
                                    Xi(),
                                    ia(
                                        Ki,
                                        { key: t[0].uuid },
                                        [
                                            (Xi(!0),
                                            ia(
                                                Ki,
                                                null,
                                                ei(
                                                    t,
                                                    (a, s) => (
                                                        Xi(),
                                                        ia(
                                                            Ki,
                                                            { key: a.uuid },
                                                            [
                                                                (Xi(!0),
                                                                ia(
                                                                    Ki,
                                                                    null,
                                                                    ei(
                                                                        a.areas,
                                                                        (l, d) => (
                                                                            Xi(),
                                                                            ia(
                                                                                Ki,
                                                                                { key: d },
                                                                                [
                                                                                    r.findPageElementForArea(l)
                                                                                        ? (Xi(),
                                                                                          aa(
                                                                                              Wi,
                                                                                              { key: 0, to: r.findPageElementForArea(l) },
                                                                                              [
                                                                                                  ua(
                                                                                                      o,
                                                                                                      {
                                                                                                          ref_for: !0,
                                                                                                          ref: r.setAreaRef,
                                                                                                          modelValue: n.values[a.uuid],
                                                                                                          "onUpdate:modelValue": (e) => (n.values[a.uuid] = e),
                                                                                                          values: n.values,
                                                                                                          field: a,
                                                                                                          area: l,
                                                                                                          submittable: n.submittable,
                                                                                                          "field-index": s,
                                                                                                          "scroll-padding": n.scrollPadding,
                                                                                                          submitter: n.submitter,
                                                                                                          "with-field-placeholder": n.withFieldPlaceholder,
                                                                                                          "with-signature-id": n.withSignatureId,
                                                                                                          "is-active": n.currentStep === t,
                                                                                                          "with-label": n.withLabel && !n.withFieldPlaceholder && t.length < 2,
                                                                                                          "is-value-set": t.some((e) => e.uuid in n.values),
                                                                                                          "attachments-index": n.attachmentsIndex,
                                                                                                          onClick: (t) => e.$emit("focus-step", i),
                                                                                                      },
                                                                                                      null,
                                                                                                      8,
                                                                                                      [
                                                                                                          "modelValue",
                                                                                                          "onUpdate:modelValue",
                                                                                                          "values",
                                                                                                          "field",
                                                                                                          "area",
                                                                                                          "submittable",
                                                                                                          "field-index",
                                                                                                          "scroll-padding",
                                                                                                          "submitter",
                                                                                                          "with-field-placeholder",
                                                                                                          "with-signature-id",
                                                                                                          "is-active",
                                                                                                          "with-label",
                                                                                                          "is-value-set",
                                                                                                          "attachments-index",
                                                                                                          "onClick",
                                                                                                      ]
                                                                                                  ),
                                                                                              ],
                                                                                              8,
                                                                                              ["to"]
                                                                                          ))
                                                                                        : ba("", !0),
                                                                                ],
                                                                                64
                                                                            )
                                                                        )
                                                                    ),
                                                                    128
                                                                )),
                                                            ],
                                                            64
                                                        )
                                                    )
                                                ),
                                                128
                                            )),
                                        ],
                                        64
                                    )
                                )
                            ),
                            128
                        )
                    );
                },
            ],
        ]),
        Ql = {
            name: "FormulaFieldAreas",
            components: { FieldArea: Yl },
            props: { fields: { type: Array, required: !1, default: () => [] }, values: { type: Object, required: !1, default: () => ({}) } },
            data: () => ({ isMathLoaded: !1 }),
            async mounted() {
                const {
                    create: e,
                    evaluateDependencies: t,
                    addDependencies: n,
                    subtractDependencies: i,
                    divideDependencies: r,
                    multiplyDependencies: o,
                    powDependencies: s,
                    roundDependencies: l,
                    absDependencies: d,
                    sinDependencies: c,
                    tanDependencies: u,
                    cosDependencies: p,
                } = await a.e(793).then(a.bind(a, 793));
                (this.math = e({
                    evaluateDependencies: t,
                    addDependencies: n,
                    subtractDependencies: i,
                    divideDependencies: r,
                    multiplyDependencies: o,
                    powDependencies: s,
                    roundDependencies: l,
                    absDependencies: d,
                    sinDependencies: c,
                    tanDependencies: u,
                    cosDependencies: p,
                })),
                    (this.isMathLoaded = !0);
            },
            methods: {
                findPageElementForArea(e) {
                    return (this.$root.$el?.parentNode?.getRootNode() || document).getElementById(`page-${e.attachment_uuid}-${e.page}`);
                },
                calculateFormula(e) {
                    const t = e.preferences.formula.replace(/{{(.*?)}}/g, (e, t) => this.values[t] || 0);
                    return this.math.evaluate(t.toLowerCase());
                },
            },
        },
        Xl = (0, Qr.A)(Ql, [
            [
                "render",
                function (e, t, n, i, a, r) {
                    const o = Yn("FieldArea");
                    return (
                        Xi(!0),
                        ia(
                            Ki,
                            null,
                            ei(
                                n.fields,
                                (e, t) => (
                                    Xi(),
                                    ia(
                                        Ki,
                                        { key: e.uuid },
                                        [
                                            (Xi(!0),
                                            ia(
                                                Ki,
                                                null,
                                                ei(
                                                    e.areas,
                                                    (n, i) => (
                                                        Xi(),
                                                        ia(
                                                            Ki,
                                                            { key: i },
                                                            [
                                                                r.findPageElementForArea(n)
                                                                    ? (Xi(),
                                                                      aa(
                                                                          Wi,
                                                                          { key: 0, to: r.findPageElementForArea(n) },
                                                                          [
                                                                              a.isMathLoaded
                                                                                  ? (Xi(),
                                                                                    aa(o, { key: 0, "model-value": r.calculateFormula(e), field: e, area: n, submittable: !1, "field-index": t }, null, 8, [
                                                                                        "model-value",
                                                                                        "field",
                                                                                        "area",
                                                                                        "field-index",
                                                                                    ]))
                                                                                  : ba("", !0),
                                                                          ],
                                                                          8,
                                                                          ["to"]
                                                                      ))
                                                                    : ba("", !0),
                                                            ],
                                                            64
                                                        )
                                                    )
                                                ),
                                                128
                                            )),
                                        ],
                                        64
                                    )
                                )
                            ),
                            128
                        )
                    );
                },
            ],
        ]),
        ed = { key: 0 },
        td = { class: "flex justify-between items-center w-full mb-2" },
        nd = { class: "label text-2xl" },
        id = ["src"],
        ad = ["value", "name"],
        rd = { key: 1 },
        od = { key: 0, dir: "auto", class: "mb-3 px-1" },
        sd = ["for"],
        ld = { class: "absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center" },
        dd = { class: "flex flex-col items-center" },
        cd = { key: 2, class: "font-medium mb-1" },
        ud = { class: "text-xs" },
        pd = { class: "font-medium" },
        hd = ["id", "multiple", "accept"],
        md = {
            name: "FileDropzone",
            components: {
                IconCloudUpload: uo("cloud-upload", 0, [
                    ["path", { d: "M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1", key: "svg-0" }],
                    ["path", { d: "M9 15l3 -3l3 3", key: "svg-1" }],
                    ["path", { d: "M12 12l0 9", key: "svg-2" }],
                ]),
                IconInnerShadowTop: ho,
            },
            inject: ["baseUrl", "t"],
            props: {
                message: { type: String, required: !0 },
                submitterSlug: { type: String, required: !0 },
                dryRun: { type: Boolean, required: !1, default: !1 },
                accept: { type: String, required: !1, default: "*/*" },
                multiple: { type: Boolean, required: !1, default: !1 },
            },
            emits: ["upload"],
            data: () => ({ isLoading: !1 }),
            computed: { inputId: () => "el" + Math.random().toString(32).split(".")[1] },
            methods: {
                onDropFiles(e) {
                    this.uploadFiles(e.dataTransfer.files);
                },
                onSelectFiles(e) {
                    e.preventDefault(),
                        this.uploadFiles(this.$refs.input.files).then(() => {
                            this.$refs.input && (this.$refs.input.value = "");
                        });
                },
                async uploadFiles(e) {
                    return (
                        (this.isLoading = !0),
                        await Promise.all(
                            Array.from(e).map(async (e) => {
                                const t = new FormData();
                                return this.dryRun
                                    ? new Promise((t) => {
                                          const n = new FileReader();
                                          n.readAsDataURL(e),
                                              (n.onloadend = () => {
                                                  t({ url: n.result, uuid: Math.random().toString(), filename: e.name });
                                              });
                                      })
                                    : ("image/bmp" === e.type && (e = await this.convertBmpToPng(e)),
                                      t.append("file", e),
                                      t.append("submitter_slug", this.submitterSlug),
                                      t.append("name", "attachments"),
                                      fetch(this.baseUrl + "/api/attachments", { method: "POST", body: t })
                                          .then((e) => e.json())
                                          .then((e) => e));
                            })
                        )
                            .then((e) => {
                                this.$emit("upload", e);
                            })
                            .finally(() => {
                                this.isLoading = !1;
                            })
                    );
                },
                convertBmpToPng: (e) =>
                    new Promise((t, n) => {
                        const i = new FileReader();
                        (i.onload = function (n) {
                            const i = new Image();
                            (i.onload = function () {
                                const n = document.createElement("canvas"),
                                    a = n.getContext("2d");
                                (n.width = i.width),
                                    (n.height = i.height),
                                    a.drawImage(i, 0, 0),
                                    n.toBlob(function (n) {
                                        const i = new File([n], e.name.replace(/\.\w+$/, ".png"), { type: "image/png" });
                                        t(i);
                                    }, "image/png");
                            }),
                                (i.src = n.target.result);
                        }),
                            (i.onerror = n),
                            i.readAsDataURL(e);
                    }),
            },
        },
        bd = (0, Qr.A)(md, [
            [
                "render",
                function (e, t, n, i, a, r) {
                    const o = Yn("IconInnerShadowTop"),
                        s = Yn("IconCloudUpload");
                    return (
                        Xi(),
                        ia(
                            "div",
                            { class: "flex h-32 w-full", onDragover: t[1] || (t[1] = xr(() => {}, ["prevent"])), onDrop: t[2] || (t[2] = xr((...e) => r.onDropFiles && r.onDropFiles(...e), ["prevent"])) },
                            [
                                ca(
                                    "label",
                                    { for: r.inputId, class: J(["w-full relative bg-base-300 hover:bg-base-200 rounded-md border border-base-content border-dashed", { "opacity-50": a.isLoading }]) },
                                    [
                                        ca("div", ld, [
                                            ca("div", dd, [
                                                a.isLoading ? (Xi(), aa(o, { key: 0, class: "animate-spin", width: 30, height: 30 })) : (Xi(), aa(s, { key: 1, width: 30, height: 30 })),
                                                n.message ? (Xi(), ia("div", cd, te(n.message), 1)) : ba("", !0),
                                                ca("div", ud, [ca("span", pd, te(r.t("click_to_upload")), 1), ha(" " + te(r.t("or_drag_and_drop_files")), 1)]),
                                            ]),
                                        ]),
                                        ca(
                                            "input",
                                            { id: r.inputId, ref: "input", multiple: n.multiple, accept: n.accept, type: "file", class: "hidden", onChange: t[0] || (t[0] = (...e) => r.onSelectFiles && r.onSelectFiles(...e)) },
                                            null,
                                            40,
                                            hd
                                        ),
                                    ],
                                    10,
                                    sd
                                ),
                            ],
                            32
                        )
                    );
                },
            ],
        ]),
        gd = ["href"],
        fd = { key: 1 },
        vd = { key: 2 },
        yd = { key: 3 };
    var _d = { "": ["<em>", "</em>"], _: ["<strong>", "</strong>"], "*": ["<strong>", "</strong>"], "~": ["<s>", "</s>"], "\n": ["<br />"], " ": ["<br />"], "-": ["<hr />"] };
    function wd(e) {
        return e.replace(RegExp("^" + (e.match(/^(\t| )+/) || "")[0], "gm"), "");
    }
    function xd(e) {
        return (e + "").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    function kd(e, t) {
        var n,
            i,
            a,
            r,
            o,
            s = /((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,
            l = [],
            d = "",
            c = t || {},
            u = 0;
        function p(e) {
            var t = _d[e[1] || ""],
                n = l[l.length - 1] == e;
            return t ? (t[1] ? (n ? l.pop() : l.push(e), t[0 | n]) : t[0]) : e;
        }
        function h() {
            for (var e = ""; l.length; ) e += p(l[l.length - 1]);
            return e;
        }
        for (
            e = e
                .replace(/^\[(.+?)\]:\s*(.+)$/gm, function (e, t, n) {
                    return (c[t.toLowerCase()] = n), "";
                })
                .replace(/^\n+|\n+$/g, "");
            (a = s.exec(e));

        )
            (i = e.substring(u, a.index)),
                (u = s.lastIndex),
                (n = a[0]),
                i.match(/[^\\](\\\\)*\\$/) ||
                    ((o = a[3] || a[4])
                        ? (n = '<pre class="code ' + (a[4] ? "poetry" : a[2].toLowerCase()) + '"><code' + (a[2] ? ' class="language-' + a[2].toLowerCase() + '"' : "") + ">" + wd(xd(o).replace(/^\n+|\n+$/g, "")) + "</code></pre>")
                        : (o = a[6])
                        ? (o.match(/\./) && (a[5] = a[5].replace(/^\d+/gm, "")),
                          (r = kd(wd(a[5].replace(/^\s*[>*+.-]/gm, "")))),
                          ">" == o ? (o = "blockquote") : ((o = o.match(/\./) ? "ol" : "ul"), (r = r.replace(/^(.*)(\n|$)/gm, "<li>$1</li>"))),
                          (n = "<" + o + ">" + r + "</" + o + ">"))
                        : a[8]
                        ? (n = '<img src="' + xd(a[8]) + '" alt="' + xd(a[7]) + '">')
                        : a[10]
                        ? ((d = d.replace("<a>", '<a href="' + xd(a[11] || c[i.toLowerCase()]) + '">')), (n = h() + "</a>"))
                        : a[9]
                        ? (n = "<a>")
                        : a[12] || a[14]
                        ? (n = "<" + (o = "h" + (a[14] ? a[14].length : a[13] > "=" ? 1 : 2)) + ">" + kd(a[12] || a[15], c) + "</" + o + ">")
                        : a[16]
                        ? (n = "<code>" + xd(a[16]) + "</code>")
                        : (a[17] || a[1]) && (n = p(a[17] || "--"))),
                (d += i),
                (d += n);
        return (d + e.substring(u) + h()).replace(/^\n+|\n+$/g, "");
    }
    const Sd = /(<a.+?<\/a>|<i>.+?<\/i>|<b>.+?<\/b>|<em>.+?<\/em>|<strong>.+?<\/strong>|<br>)/,
        Cd = {
            name: "MarkdownContent",
            props: { string: { type: String, required: !1, default: "" } },
            computed: {
                items() {
                    const e = this.string.split(/(https?:\/\/[^\s)]+)/g);
                    return kd(
                        e
                            .map((t, n) => (!t.match(/^https?:\/\//) || e[n - 1]?.match(/\(\s*$/) || e[n + 1]?.match(/^\s*\)/) ? t : `[${t}](${t})`))
                            .join("")
                            .replace(/\n/g, "<br>")
                    ).split(Sd);
                },
            },
            methods: {
                sanitizeHref(e) {
                    if (e && e.trim().match(/^((?:https?:\/\/)|\/)/)) return e.replace(/javascript:/g, "");
                },
                extractAttr(e, t) {
                    if (e.includes(t)) return e.split(t).pop().split('"')[1];
                },
                extractText(e) {
                    if (e) return e.match(/>(.+?)</)?.[1];
                },
            },
        },
        Fd = (0, Qr.A)(Cd, [
            [
                "render",
                function (e, t, n, i, a, r) {
                    return (
                        Xi(),
                        ia("span", null, [
                            (Xi(!0),
                            ia(
                                Ki,
                                null,
                                ei(
                                    r.items,
                                    (e, t) => (
                                        Xi(),
                                        ia(
                                            Ki,
                                            { key: t },
                                            [
                                                e.startsWith("<a") && e.endsWith("</a>")
                                                    ? (Xi(),
                                                      ia(
                                                          "a",
                                                          { key: 0, href: r.sanitizeHref(r.extractAttr(e, "href")), rel: "noopener noreferrer nofollow", class: J(r.extractAttr(e, "class") || "link"), target: "_blank" },
                                                          te(r.extractText(e)),
                                                          11,
                                                          gd
                                                      ))
                                                    : e.startsWith("<b>") || e.startsWith("<strong>")
                                                    ? (Xi(), ia("b", fd, te(r.extractText(e)), 1))
                                                    : e.startsWith("<i>") || e.startsWith("<em>")
                                                    ? (Xi(), ia("i", vd, te(r.extractText(e)), 1))
                                                    : "<br>" === e || "\n" === e
                                                    ? (Xi(), ia("br", yd))
                                                    : (Xi(), ia(Ki, { key: 4 }, [ha(te(e), 1)], 64)),
                                            ],
                                            64
                                        )
                                    )
                                ),
                                128
                            )),
                        ])
                    );
                },
            ],
        ]),
        Id = {
            name: "ImageStep",
            components: { FileDropzone: bd, IconReload: Do, MarkdownContent: Fd },
            inject: ["t"],
            props: {
                field: { type: Object, required: !0 },
                showFieldNames: { type: Boolean, required: !1, default: !0 },
                dryRun: { type: Boolean, required: !1, default: !1 },
                submitterSlug: { type: String, required: !0 },
                attachmentsIndex: { type: Object, required: !1, default: () => ({}) },
                modelValue: { type: String, required: !1, default: "" },
            },
            emits: ["attached", "update:model-value"],
            methods: {
                remove() {
                    this.$emit("update:model-value", "");
                },
                onImageUpload(e) {
                    this.$emit("attached", e[0]), this.$emit("update:model-value", e[0].uuid);
                },
            },
        },
        zd = (0, Qr.A)(Id, [
            [
                "render",
                function (e, t, n, i, a, r) {
                    const o = Yn("IconReload"),
                        s = Yn("MarkdownContent"),
                        l = Yn("FileDropzone");
                    return (
                        Xi(),
                        ia(
                            Ki,
                            null,
                            [
                                n.modelValue
                                    ? (Xi(),
                                      ia("div", ed, [
                                          ca("div", td, [
                                              ca("label", nd, te(n.showFieldNames && n.field.name ? n.field.name : r.t("image")), 1),
                                              ca("button", { class: "btn btn-outline btn-sm", onClick: t[0] || (t[0] = xr((...e) => r.remove && r.remove(...e), ["prevent"])) }, [ua(o, { width: 16 }), ha(" " + te(r.t("reupload")), 1)]),
                                          ]),
                                          ca("div", null, [ca("img", { src: n.attachmentsIndex[n.modelValue].url, class: "h-52 border border-base-300 rounded mx-auto" }, null, 8, id)]),
                                          ca("input", { value: n.modelValue, type: "hidden", name: `values[${n.field.uuid}]` }, null, 8, ad),
                                      ]))
                                    : ba("", !0),
                                n.modelValue
                                    ? ba("", !0)
                                    : (Xi(),
                                      ia("div", rd, [
                                          n.field.description ? (Xi(), ia("div", od, [ua(s, { string: n.field.description }, null, 8, ["string"])])) : ba("", !0),
                                          ua(
                                              l,
                                              {
                                                  message: `${r.t("upload")} ${n.field.name || r.t("image")}${n.field.required ? "" : ` (${r.t("optional")})`}`,
                                                  "submitter-slug": n.submitterSlug,
                                                  "dry-run": n.dryRun,
                                                  accept: "image/*",
                                                  onUpload: r.onImageUpload,
                                              },
                                              null,
                                              8,
                                              ["message", "submitter-slug", "dry-run", "onUpload"]
                                          ),
                                      ])),
                            ],
                            64
                        )
                    );
                },
            ],
        ]),
        Md = { dir: "auto", class: "relative" },
        Pd = { class: "label text-2xl" },
        qd = { class: "space-x-2 flex" },
        jd = ["data-tip"],
        Ed = { class: "hidden sm:inline" },
        Ad = ["data-tip"],
        Td = { class: "hidden sm:inline" },
        Dd = ["data-tip"],
        Od = { class: "btn btn-outline btn-sm font-medium inline-flex flex-nowrap" },
        Vd = { class: "hidden sm:inline" },
        Bd = ["data-tip"],
        Rd = ["title"],
        $d = { key: 0, dir: "auto", class: "mb-3 px-1" },
        Ud = ["value", "name"],
        Ld = ["src"],
        Nd = { class: "relative" },
        Wd = { key: 0, class: "absolute top-0.5 right-0.5" },
        Gd = { key: 1, class: "absolute top-0 right-0 left-0 bottom-0" },
        Kd = { ref: "canvas", style: { padding: "1px" }, class: "bg-white border border-base-300 rounded-2xl w-full" },
        Hd = { key: 2, class: "top-0 bottom-0 right-0 left-0 absolute bg-white rounded-2xl m-0.5" },
        Yd = { key: 3, class: "top-0 bottom-0 right-0 left-0 absolute bg-base-content/10 rounded-2xl" },
        Zd = { class: "absolute top-1.5 right-1.5 tooltip" },
        Jd = { class: "flex items-center justify-center w-full h-full p-4" },
        Qd = { class: "bg-white p-4 rounded-xl h-full" },
        Xd = { ref: "qrCanvas", class: "h-full", width: "132", height: "132" },
        ec = ["required", "placeholder"],
        tc = ["name"],
        nc = ["selected"],
        ic = ["value", "selected"],
        ac = { value: "other", class: "text-base-content" },
        rc = ["name", "placeholder", "value"],
        oc = ["value"],
        sc = { key: 6, dir: "auto", class: "text-base-content/60 text-xs text-center w-full mt-1" },
        lc = { key: 7, dir: "auto", class: "text-base-content/60 text-xs text-center w-full mt-1" },
        dc = { href: "https://www.docuseal.com/esign-disclosure", target: "_blank" },
        cc = { class: "inline md:hidden" },
        uc = { class: "hidden md:inline" },
        pc = { key: 8, class: "mt-5 md:mt-7" };
    var hc = uo("camera", 0, [
            ["path", { d: "M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2", key: "svg-0" }],
            ["path", { d: "M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0", key: "svg-1" }],
        ]),
        mc = uo("qrcode", 0, [
            ["path", { d: "M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z", key: "svg-0" }],
            ["path", { d: "M7 17l0 .01", key: "svg-1" }],
            ["path", { d: "M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z", key: "svg-2" }],
            ["path", { d: "M7 7l0 .01", key: "svg-3" }],
            ["path", { d: "M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z", key: "svg-4" }],
            ["path", { d: "M17 7l0 .01", key: "svg-5" }],
            ["path", { d: "M14 14l3 0", key: "svg-6" }],
            ["path", { d: "M20 14l0 .01", key: "svg-7" }],
            ["path", { d: "M14 14l0 3", key: "svg-8" }],
            ["path", { d: "M14 20l3 0", key: "svg-9" }],
            ["path", { d: "M17 17l3 0", key: "svg-10" }],
            ["path", { d: "M20 17l0 3", key: "svg-11" }],
        ]),
        bc = uo("x", 0, [
            ["path", { d: "M18 6l-12 12", key: "svg-0" }],
            ["path", { d: "M6 6l12 12", key: "svg-1" }],
        ]),
        gc = uo("signature", 0, [
            ["path", { d: "M3 17c3.333 -3.333 5 -6 5 -8c0 -3 -1 -3 -2 -3s-2.032 1.085 -2 3c.034 2.048 1.658 4.877 2.5 6c1.5 2 2.5 2.5 3.5 1l2 -3c.333 2.667 1.333 4 3 4c.53 0 2.639 -2 3 -2c.517 0 1.517 .667 3 2", key: "svg-0" }],
        ]),
        fc = uo("arrows-diagonal-minimize-2", 0, [
            ["path", { d: "M18 10h-4v-4", key: "svg-0" }],
            ["path", { d: "M20 4l-6 6", key: "svg-1" }],
            ["path", { d: "M6 14h4v4", key: "svg-2" }],
            ["path", { d: "M10 14l-6 6", key: "svg-3" }],
        ]);
    function vc(e, { errorOnTooSmall: t } = { errorOnTooSmall: !1 }) {
        const n = e.getContext("2d"),
            i = e.width,
            a = e.height;
        let r = a,
            o = 0,
            s = i,
            l = 0;
        const d = n.getImageData(0, 0, i, a).data;
        for (let e = 0; e < a; e++) for (let t = 0; t < i; t++) 0 !== d[4 * (e * i + t) + 3] && ((r = Math.min(r, e)), (o = Math.max(o, e)), (s = Math.min(s, t)), (l = Math.max(l, t)));
        const c = l - s + 1,
            u = o - r + 1,
            p = document.createElement("canvas");
        (p.width = c), (p.height = u);
        const h = p.getContext("2d");
        return t && (c < 20 || u < 20)
            ? Promise.reject(new Error("Image too small"))
            : (h.drawImage(e, s, r, c, u, 0, 0, c, u),
              new Promise((e, t) => {
                  p.toBlob((n) => {
                      n ? e(n) : t(new Error("Failed to create a PNG blob."));
                  }, "image/png");
              }));
    }
    class yc {
        constructor(e, t, n, i) {
            if (isNaN(e) || isNaN(t)) throw new Error(`Point is invalid: (${e}, ${t})`);
            (this.x = +e), (this.y = +t), (this.pressure = n || 0), (this.time = i || Date.now());
        }
        distanceTo(e) {
            return Math.sqrt(Math.pow(this.x - e.x, 2) + Math.pow(this.y - e.y, 2));
        }
        equals(e) {
            return this.x === e.x && this.y === e.y && this.pressure === e.pressure && this.time === e.time;
        }
        velocityFrom(e) {
            return this.time !== e.time ? this.distanceTo(e) / (this.time - e.time) : 0;
        }
    }
    class _c {
        constructor(e, t, n, i, a, r) {
            (this.startPoint = e), (this.control2 = t), (this.control1 = n), (this.endPoint = i), (this.startWidth = a), (this.endWidth = r);
        }
        static fromPoints(e, t) {
            const n = this.calculateControlPoints(e[0], e[1], e[2]).c2,
                i = this.calculateControlPoints(e[1], e[2], e[3]).c1;
            return new _c(e[1], n, i, e[2], t.start, t.end);
        }
        static calculateControlPoints(e, t, n) {
            const i = e.x - t.x,
                a = e.y - t.y,
                r = t.x - n.x,
                o = t.y - n.y,
                s = (e.x + t.x) / 2,
                l = (e.y + t.y) / 2,
                d = (t.x + n.x) / 2,
                c = (t.y + n.y) / 2,
                u = Math.sqrt(i * i + a * a),
                p = Math.sqrt(r * r + o * o),
                h = p / (u + p),
                m = d + (s - d) * h,
                b = c + (l - c) * h,
                g = t.x - m,
                f = t.y - b;
            return { c1: new yc(s + g, l + f), c2: new yc(d + g, c + f) };
        }
        length() {
            let e,
                t,
                n = 0;
            for (let i = 0; i <= 10; i += 1) {
                const a = i / 10,
                    r = this.point(a, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x),
                    o = this.point(a, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
                if (i > 0) {
                    const i = r - e,
                        a = o - t;
                    n += Math.sqrt(i * i + a * a);
                }
                (e = r), (t = o);
            }
            return n;
        }
        point(e, t, n, i, a) {
            return t * (1 - e) * (1 - e) * (1 - e) + 3 * n * (1 - e) * (1 - e) * e + 3 * i * (1 - e) * e * e + a * e * e * e;
        }
    }
    class wc {
        constructor() {
            try {
                this._et = new EventTarget();
            } catch (e) {
                this._et = document;
            }
        }
        addEventListener(e, t, n) {
            this._et.addEventListener(e, t, n);
        }
        dispatchEvent(e) {
            return this._et.dispatchEvent(e);
        }
        removeEventListener(e, t, n) {
            this._et.removeEventListener(e, t, n);
        }
    }
    class xc extends wc {
        constructor(e, t = {}) {
            super(),
                (this.canvas = e),
                (this._drawningStroke = !1),
                (this._isEmpty = !0),
                (this._lastPoints = []),
                (this._data = []),
                (this._lastVelocity = 0),
                (this._lastWidth = 0),
                (this._handleMouseDown = (e) => {
                    1 === e.buttons && ((this._drawningStroke = !0), this._strokeBegin(e));
                }),
                (this._handleMouseMove = (e) => {
                    this._drawningStroke && this._strokeMoveUpdate(e);
                }),
                (this._handleMouseUp = (e) => {
                    1 === e.buttons && this._drawningStroke && ((this._drawningStroke = !1), this._strokeEnd(e));
                }),
                (this._handleTouchStart = (e) => {
                    if ((e.cancelable && e.preventDefault(), 1 === e.targetTouches.length)) {
                        const t = e.changedTouches[0];
                        this._strokeBegin(t);
                    }
                }),
                (this._handleTouchMove = (e) => {
                    e.cancelable && e.preventDefault();
                    const t = e.targetTouches[0];
                    this._strokeMoveUpdate(t);
                }),
                (this._handleTouchEnd = (e) => {
                    if (e.target === this.canvas) {
                        e.cancelable && e.preventDefault();
                        const t = e.changedTouches[0];
                        this._strokeEnd(t);
                    }
                }),
                (this._handlePointerStart = (e) => {
                    (this._drawningStroke = !0), e.preventDefault(), this._strokeBegin(e);
                }),
                (this._handlePointerMove = (e) => {
                    this._drawningStroke && (e.preventDefault(), this._strokeMoveUpdate(e));
                }),
                (this._handlePointerEnd = (e) => {
                    this._drawningStroke && (e.preventDefault(), (this._drawningStroke = !1), this._strokeEnd(e));
                }),
                (this.velocityFilterWeight = t.velocityFilterWeight || 0.7),
                (this.minWidth = t.minWidth || 0.5),
                (this.maxWidth = t.maxWidth || 2.5),
                (this.throttle = "throttle" in t ? t.throttle : 16),
                (this.minDistance = "minDistance" in t ? t.minDistance : 5),
                (this.dotSize = t.dotSize || 0),
                (this.penColor = t.penColor || "black"),
                (this.backgroundColor = t.backgroundColor || "rgba(0,0,0,0)"),
                (this._strokeMoveUpdate = this.throttle
                    ? (function (e, t = 250) {
                          let n,
                              i,
                              a,
                              r = 0,
                              o = null;
                          const s = () => {
                              (r = Date.now()), (o = null), (n = e.apply(i, a)), o || ((i = null), (a = []));
                          };
                          return function (...l) {
                              const d = Date.now(),
                                  c = t - (d - r);
                              return (i = this), (a = l), c <= 0 || c > t ? (o && (clearTimeout(o), (o = null)), (r = d), (n = e.apply(i, a)), o || ((i = null), (a = []))) : o || (o = window.setTimeout(s, c)), n;
                          };
                      })(xc.prototype._strokeUpdate, this.throttle)
                    : xc.prototype._strokeUpdate),
                (this._ctx = e.getContext("2d")),
                this.clear(),
                this.on();
        }
        clear() {
            const { _ctx: e, canvas: t } = this;
            (e.fillStyle = this.backgroundColor), e.clearRect(0, 0, t.width, t.height), e.fillRect(0, 0, t.width, t.height), (this._data = []), this._reset(this._getPointGroupOptions()), (this._isEmpty = !0);
        }
        fromDataURL(e, t = {}) {
            return new Promise((n, i) => {
                const a = new Image(),
                    r = t.ratio || window.devicePixelRatio || 1,
                    o = t.width || this.canvas.width / r,
                    s = t.height || this.canvas.height / r,
                    l = t.xOffset || 0,
                    d = t.yOffset || 0;
                this._reset(this._getPointGroupOptions()),
                    (a.onload = () => {
                        this._ctx.drawImage(a, l, d, o, s), n();
                    }),
                    (a.onerror = (e) => {
                        i(e);
                    }),
                    (a.crossOrigin = "anonymous"),
                    (a.src = e),
                    (this._isEmpty = !1);
            });
        }
        toDataURL(e = "image/png", t) {
            return "image/svg+xml" === e ? ("object" != typeof t && (t = void 0), `data:image/svg+xml;base64,${btoa(this.toSVG(t))}`) : ("number" != typeof t && (t = void 0), this.canvas.toDataURL(e, t));
        }
        on() {
            (this.canvas.style.touchAction = "none"), (this.canvas.style.msTouchAction = "none"), (this.canvas.style.userSelect = "none");
            const e = /Macintosh/.test(navigator.userAgent) && "ontouchstart" in document;
            window.PointerEvent && !e ? this._handlePointerEvents() : (this._handleMouseEvents(), "ontouchstart" in window && this._handleTouchEvents());
        }
        off() {
            (this.canvas.style.touchAction = "auto"),
                (this.canvas.style.msTouchAction = "auto"),
                (this.canvas.style.userSelect = "auto"),
                this.canvas.removeEventListener("pointerdown", this._handlePointerStart),
                this.canvas.removeEventListener("pointermove", this._handlePointerMove),
                this.canvas.ownerDocument.removeEventListener("pointerup", this._handlePointerEnd),
                this.canvas.removeEventListener("mousedown", this._handleMouseDown),
                this.canvas.removeEventListener("mousemove", this._handleMouseMove),
                this.canvas.ownerDocument.removeEventListener("mouseup", this._handleMouseUp),
                this.canvas.removeEventListener("touchstart", this._handleTouchStart),
                this.canvas.removeEventListener("touchmove", this._handleTouchMove),
                this.canvas.removeEventListener("touchend", this._handleTouchEnd);
        }
        isEmpty() {
            return this._isEmpty;
        }
        fromData(e, { clear: t = !0 } = {}) {
            t && this.clear(), this._fromData(e, this._drawCurve.bind(this), this._drawDot.bind(this)), (this._data = this._data.concat(e));
        }
        toData() {
            return this._data;
        }
        _getPointGroupOptions(e) {
            return {
                penColor: e && "penColor" in e ? e.penColor : this.penColor,
                dotSize: e && "dotSize" in e ? e.dotSize : this.dotSize,
                minWidth: e && "minWidth" in e ? e.minWidth : this.minWidth,
                maxWidth: e && "maxWidth" in e ? e.maxWidth : this.maxWidth,
                velocityFilterWeight: e && "velocityFilterWeight" in e ? e.velocityFilterWeight : this.velocityFilterWeight,
            };
        }
        _strokeBegin(e) {
            this.dispatchEvent(new CustomEvent("beginStroke", { detail: e }));
            const t = this._getPointGroupOptions(),
                n = Object.assign(Object.assign({}, t), { points: [] });
            this._data.push(n), this._reset(t), this._strokeUpdate(e);
        }
        _strokeUpdate(e) {
            if (0 === this._data.length) return void this._strokeBegin(e);
            this.dispatchEvent(new CustomEvent("beforeUpdateStroke", { detail: e }));
            const t = e.clientX,
                n = e.clientY,
                i = void 0 !== e.pressure ? e.pressure : void 0 !== e.force ? e.force : 0,
                a = this._createPoint(t, n, i),
                r = this._data[this._data.length - 1],
                o = r.points,
                s = o.length > 0 && o[o.length - 1],
                l = !!s && a.distanceTo(s) <= this.minDistance,
                d = this._getPointGroupOptions(r);
            if (!s || !s || !l) {
                const e = this._addPoint(a, d);
                s ? e && this._drawCurve(e, d) : this._drawDot(a, d), o.push({ time: a.time, x: a.x, y: a.y, pressure: a.pressure });
            }
            this.dispatchEvent(new CustomEvent("afterUpdateStroke", { detail: e }));
        }
        _strokeEnd(e) {
            this._strokeUpdate(e), this.dispatchEvent(new CustomEvent("endStroke", { detail: e }));
        }
        _handlePointerEvents() {
            (this._drawningStroke = !1),
                this.canvas.addEventListener("pointerdown", this._handlePointerStart),
                this.canvas.addEventListener("pointermove", this._handlePointerMove),
                this.canvas.ownerDocument.addEventListener("pointerup", this._handlePointerEnd);
        }
        _handleMouseEvents() {
            (this._drawningStroke = !1),
                this.canvas.addEventListener("mousedown", this._handleMouseDown),
                this.canvas.addEventListener("mousemove", this._handleMouseMove),
                this.canvas.ownerDocument.addEventListener("mouseup", this._handleMouseUp);
        }
        _handleTouchEvents() {
            this.canvas.addEventListener("touchstart", this._handleTouchStart), this.canvas.addEventListener("touchmove", this._handleTouchMove), this.canvas.addEventListener("touchend", this._handleTouchEnd);
        }
        _reset(e) {
            (this._lastPoints = []), (this._lastVelocity = 0), (this._lastWidth = (e.minWidth + e.maxWidth) / 2), (this._ctx.fillStyle = e.penColor);
        }
        _createPoint(e, t, n) {
            const i = this.canvas.getBoundingClientRect();
            return new yc(e - i.left, t - i.top, n, new Date().getTime());
        }
        _addPoint(e, t) {
            const { _lastPoints: n } = this;
            if ((n.push(e), n.length > 2)) {
                3 === n.length && n.unshift(n[0]);
                const e = this._calculateCurveWidths(n[1], n[2], t),
                    i = _c.fromPoints(n, e);
                return n.shift(), i;
            }
            return null;
        }
        _calculateCurveWidths(e, t, n) {
            const i = n.velocityFilterWeight * t.velocityFrom(e) + (1 - n.velocityFilterWeight) * this._lastVelocity,
                a = this._strokeWidth(i, n),
                r = { end: a, start: this._lastWidth };
            return (this._lastVelocity = i), (this._lastWidth = a), r;
        }
        _strokeWidth(e, t) {
            return Math.max(t.maxWidth / (e + 1), t.minWidth);
        }
        _drawCurveSegment(e, t, n) {
            const i = this._ctx;
            i.moveTo(e, t), i.arc(e, t, n, 0, 2 * Math.PI, !1), (this._isEmpty = !1);
        }
        _drawCurve(e, t) {
            const n = this._ctx,
                i = e.endWidth - e.startWidth,
                a = 2 * Math.ceil(e.length());
            n.beginPath(), (n.fillStyle = t.penColor);
            for (let n = 0; n < a; n += 1) {
                const r = n / a,
                    o = r * r,
                    s = o * r,
                    l = 1 - r,
                    d = l * l,
                    c = d * l;
                let u = c * e.startPoint.x;
                (u += 3 * d * r * e.control1.x), (u += 3 * l * o * e.control2.x), (u += s * e.endPoint.x);
                let p = c * e.startPoint.y;
                (p += 3 * d * r * e.control1.y), (p += 3 * l * o * e.control2.y), (p += s * e.endPoint.y);
                const h = Math.min(e.startWidth + s * i, t.maxWidth);
                this._drawCurveSegment(u, p, h);
            }
            n.closePath(), n.fill();
        }
        _drawDot(e, t) {
            const n = this._ctx,
                i = t.dotSize > 0 ? t.dotSize : (t.minWidth + t.maxWidth) / 2;
            n.beginPath(), this._drawCurveSegment(e.x, e.y, i), n.closePath(), (n.fillStyle = t.penColor), n.fill();
        }
        _fromData(e, t, n) {
            for (const i of e) {
                const { points: e } = i,
                    a = this._getPointGroupOptions(i);
                if (e.length > 1)
                    for (let n = 0; n < e.length; n += 1) {
                        const i = e[n],
                            r = new yc(i.x, i.y, i.pressure, i.time);
                        0 === n && this._reset(a);
                        const o = this._addPoint(r, a);
                        o && t(o, a);
                    }
                else this._reset(a), n(e[0], a);
            }
        }
        toSVG({ includeBackgroundColor: e = !1 } = {}) {
            const t = this._data,
                n = Math.max(window.devicePixelRatio || 1, 1),
                i = this.canvas.width / n,
                a = this.canvas.height / n,
                r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            if (
                (r.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
                r.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"),
                r.setAttribute("viewBox", `0 0 ${i} ${a}`),
                r.setAttribute("width", i.toString()),
                r.setAttribute("height", a.toString()),
                e && this.backgroundColor)
            ) {
                const e = document.createElement("rect");
                e.setAttribute("width", "100%"), e.setAttribute("height", "100%"), e.setAttribute("fill", this.backgroundColor), r.appendChild(e);
            }
            return (
                this._fromData(
                    t,
                    (e, { penColor: t }) => {
                        const n = document.createElement("path");
                        if (!(isNaN(e.control1.x) || isNaN(e.control1.y) || isNaN(e.control2.x) || isNaN(e.control2.y))) {
                            const i = `M ${e.startPoint.x.toFixed(3)},${e.startPoint.y.toFixed(3)} C ${e.control1.x.toFixed(3)},${e.control1.y.toFixed(3)} ${e.control2.x.toFixed(3)},${e.control2.y.toFixed(3)} ${e.endPoint.x.toFixed(
                                3
                            )},${e.endPoint.y.toFixed(3)}`;
                            n.setAttribute("d", i), n.setAttribute("stroke-width", (2.25 * e.endWidth).toFixed(3)), n.setAttribute("stroke", t), n.setAttribute("fill", "none"), n.setAttribute("stroke-linecap", "round"), r.appendChild(n);
                        }
                    },
                    (e, { penColor: t, dotSize: n, minWidth: i, maxWidth: a }) => {
                        const o = document.createElement("circle"),
                            s = n > 0 ? n : (i + a) / 2;
                        o.setAttribute("r", s.toString()), o.setAttribute("cx", e.x.toString()), o.setAttribute("cy", e.y.toString()), o.setAttribute("fill", t), r.appendChild(o);
                    }
                ),
                r.outerHTML
            );
        }
    }
    const kc = { key: 0, dir: "auto", class: "mb-2" },
        Sc = { class: "flex space-x-1 text-sm ml-1 -mt-3" },
        Cc = ["onClick"],
        Fc = {
            name: "AppearsOn",
            inject: ["t", "scrollIntoArea"],
            props: { field: { type: Object, required: !0 } },
            computed: {
                isMultipleDocs() {
                    return this.attachmentUuids.length > 1;
                },
                attachmentUuids() {
                    return [...new Set(this.uniqueAreas.map((e) => e.attachment_uuid))];
                },
                uniqueAreas() {
                    const e = {};
                    return (
                        this.field.areas?.forEach((t) => {
                            e[t.attachment_uuid + t.page] ||= t;
                        }),
                        Object.values(e).slice(0, 6)
                    );
                },
            },
        },
        Ic = (0, Qr.A)(Fc, [
            [
                "render",
                function (e, t, n, i, a, r) {
                    return r.uniqueAreas.length > 1
                        ? (Xi(),
                          ia("div", kc, [
                              ca("div", Sc, [
                                  ca("span", null, te(r.t("appears_on")) + ": ", 1),
                                  (Xi(!0),
                                  ia(
                                      Ki,
                                      null,
                                      ei(
                                          r.uniqueAreas,
                                          (e) => (
                                              Xi(),
                                              ia(
                                                  "a",
                                                  { key: e.uuid, href: "#", class: "link pr-0.5", onClick: xr((t) => r.scrollIntoArea(e), ["prevent"]) },
                                                  [ha(te(r.t("page")) + " ", 1), r.isMultipleDocs ? (Xi(), ia(Ki, { key: 0 }, [ha(te(r.attachmentUuids.indexOf(e.attachment_uuid) + 1) + "-", 1)], 64)) : ba("", !0), ha(te(e.page + 1), 1)],
                                                  8,
                                                  Cc
                                              )
                                          )
                                      ),
                                      128
                                  )),
                              ]),
                          ]))
                        : ba("", !0);
                },
            ],
        ]),
        zc = { randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
    let Mc;
    const Pc = new Uint8Array(16);
    function qc() {
        if (!Mc && ((Mc = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)), !Mc))
            throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return Mc(Pc);
    }
    const jc = [];
    for (let e = 0; e < 256; ++e) jc.push((e + 256).toString(16).slice(1));
    const Ec = function (e, t, n) {
        if (zc.randomUUID && !t && !e) return zc.randomUUID();
        const i = (e = e || {}).random || (e.rng || qc)();
        if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), t)) {
            n = n || 0;
            for (let e = 0; e < 16; ++e) t[n + e] = i[e];
            return t;
        }
        return (function (e, t = 0) {
            return (
                jc[e[t + 0]] +
                jc[e[t + 1]] +
                jc[e[t + 2]] +
                jc[e[t + 3]] +
                "-" +
                jc[e[t + 4]] +
                jc[e[t + 5]] +
                "-" +
                jc[e[t + 6]] +
                jc[e[t + 7]] +
                "-" +
                jc[e[t + 8]] +
                jc[e[t + 9]] +
                "-" +
                jc[e[t + 10]] +
                jc[e[t + 11]] +
                jc[e[t + 12]] +
                jc[e[t + 13]] +
                jc[e[t + 14]] +
                jc[e[t + 15]]
            ).toLowerCase();
        })(i);
    };
    let Ac = !1;
    const Tc = {
            name: "SignatureStep",
            components: { AppearsOn: Ic, IconReload: Do, IconCamera: hc, IconQrcode: mc, MarkdownContent: Fd, IconX: bc, IconTextSize: Tl, IconSignature: gc, IconArrowsDiagonalMinimize2: fc },
            inject: ["baseUrl", "t"],
            props: {
                field: { type: Object, required: !0 },
                requireSigningReason: { type: Boolean, required: !1, default: !1 },
                submitter: { type: Object, required: !0 },
                showFieldNames: { type: Boolean, required: !1, default: !0 },
                dryRun: { type: Boolean, required: !1, default: !1 },
                withDisclosure: { type: Boolean, required: !1, default: !1 },
                withQrButton: { type: Boolean, required: !1, default: !1 },
                buttonText: { type: String, required: !1, default: "Submit" },
                withTypedSignature: { type: Boolean, required: !1, default: !0 },
                rememberSignature: { type: Boolean, required: !1, default: !1 },
                attachmentsIndex: { type: Object, required: !1, default: () => ({}) },
                previousValue: { type: String, required: !1, default: "" },
                reason: { type: String, required: !1, default: "" },
                modelValue: { type: String, required: !1, default: "" },
            },
            emits: ["attached", "update:model-value", "start", "minimize", "update:reason"],
            data() {
                return { isSignatureStarted: !!this.previousValue, isShowQr: !1, isOtherReason: !1, isUsePreviousValue: !0, isTextSignature: "typed" === this.field.preferences?.format, uploadImageInputKey: Math.random().toString() };
            },
            computed: {
                submitterSlug() {
                    return this.submitter.slug;
                },
                defaultReasons() {
                    return { [this.t("approved_by")]: this.t("approved"), [this.t("reviewed_by")]: this.t("reviewed"), [this.t("authored_by")]: this.t("authored_by_me") };
                },
                computedPreviousValue() {
                    return this.isUsePreviousValue ? this.previousValue : null;
                },
            },
            created() {
                this.requireSigningReason && ((this.field.preferences ||= {}), (this.field.preferences.reason_field_uuid ||= Ec()), (this.isOtherReason = this.reason && !this.defaultReasons[this.reason]));
            },
            async mounted() {
                this.$nextTick(() => {
                    this.$refs.canvas &&
                        ((this.$refs.canvas.width = 3 * this.$refs.canvas.parentNode.clientWidth), (this.$refs.canvas.height = (3 * this.$refs.canvas.parentNode.clientWidth) / 3), this.$refs.canvas.getContext("2d").scale(3, 3));
                }),
                    this.$refs.canvas &&
                        ((this.pad = new xc(this.$refs.canvas)),
                        this.pad.addEventListener("endStroke", () => {
                            (this.isSignatureStarted = !0), this.$emit("start");
                        }),
                        (this.intersectionObserver = new IntersectionObserver((e, t) => {
                            e.forEach((e) => {
                                e.isIntersecting &&
                                    ((this.$refs.canvas.width = 3 * this.$refs.canvas.parentNode.clientWidth),
                                    (this.$refs.canvas.height = (3 * this.$refs.canvas.parentNode.clientWidth) / 3),
                                    this.$refs.canvas.getContext("2d").scale(3, 3),
                                    this.intersectionObserver?.disconnect());
                            });
                        })),
                        this.intersectionObserver.observe(this.$refs.canvas));
            },
            beforeUnmount() {
                this.intersectionObserver?.disconnect(), this.stopCheckSignature();
            },
            methods: {
                remove() {
                    this.$emit("update:model-value", ""), (this.isUsePreviousValue = !1), (this.isSignatureStarted = !1);
                },
                loadFont() {
                    Ac ||
                        new FontFace("Dancing Script", `url(${this.baseUrl}/fonts/DancingScript-Regular.otf) format("opentype")`)
                            .load()
                            .then((e) => {
                                document.fonts.add(e), (Ac = !0);
                            })
                            .catch((e) => {
                                console.error("Font loading failed:", e);
                            });
                },
                showQr() {
                    (this.isShowQr = !0),
                        this.$nextTick(() => {
                            a.e(766)
                                .then(a.bind(a, 766))
                                .then(({ default: e }) => {
                                    this.$refs.qrCanvas &&
                                        e.render({ text: `${document.location.origin}/p/${this.submitterSlug}?f=${this.field.uuid.split("-")[0]}`, radius: 0, ecLevel: "H", background: null, size: 132 }, this.$refs.qrCanvas);
                                });
                        }),
                        this.startCheckSignature();
                },
                hideQr() {
                    (this.isShowQr = !1), this.stopCheckSignature();
                },
                startCheckSignature() {
                    const e = JSON.stringify(new Date());
                    this.checkSignatureInterval = setInterval(() => {
                        this.checkSignature({ after: e });
                    }, 2e3);
                },
                stopCheckSignature() {
                    this.checkSignatureInterval && clearInterval(this.checkSignatureInterval);
                },
                checkSignature(e = {}) {
                    return fetch(this.baseUrl + "/s/" + this.submitterSlug + "/values?field_uuid=" + this.field.uuid + "&after=" + e.after, { method: "GET" }).then(async (e) => {
                        const { attachment: t } = await e.json();
                        t?.uuid && (this.$emit("attached", t), this.$emit("update:model-value", t.uuid), this.hideQr());
                    });
                },
                clear() {
                    this.pad.clear(), (this.isSignatureStarted = !1), this.$refs.textInput && ((this.$refs.textInput.value = ""), this.$refs.textInput.focus());
                },
                updateWrittenSignature(e) {
                    this.isSignatureStarted = !!e.target.value;
                    const t = this.$refs.canvas,
                        n = t.getContext("2d"),
                        i = (e) => {
                            n.font = `italic  ${e}px Dancing Script`;
                        };
                    ((e, t) => {
                        let a = 44;
                        for (i(a); n.measureText(e).width > t && a > 1; ) (a -= 1), i(a);
                    })(e.target.value, t.width / 3),
                        (n.textAlign = "center"),
                        n.clearRect(0, 0, t.width / 3, t.height / 3),
                        n.fillText(e.target.value, t.width / 2 / 3, t.height / 2 / 3 + 11);
                },
                toggleTextInput() {
                    this.remove(),
                        this.clear(),
                        (this.isTextSignature = !this.isTextSignature),
                        this.isTextSignature &&
                            this.$nextTick(() => {
                                this.$refs.textInput.focus(), this.loadFont(), this.$emit("start");
                            });
                },
                drawImage(e) {
                    this.remove(), (this.isSignatureStarted = !0), this.drawOnCanvas(e.target.files[0], this.$refs.canvas), (this.uploadImageInputKey = Math.random().toString());
                },
                drawOnCanvas(e, t) {
                    if (e && e.type.match("image.*")) {
                        const n = new FileReader();
                        (n.onload = (e) => {
                            const n = new Image();
                            (n.src = e.target.result),
                                (n.onload = () => {
                                    const e = t.getContext("2d"),
                                        i = n.width / n.height,
                                        a = t.width / 3,
                                        r = t.height / 3;
                                    let o = a,
                                        s = r;
                                    if ((a / r > i ? (o = r * i) : (s = a / i), s > o)) {
                                        const e = s / o;
                                        (o *= e), (s *= e);
                                    }
                                    const l = (a - o) / 2,
                                        d = (r - s) / 2;
                                    setTimeout(() => {
                                        e.clearRect(0, 0, a, r), e.drawImage(n, l, d, o, s), this.$emit("start");
                                    }, 50);
                                });
                        }),
                            n.readAsDataURL(e);
                    }
                },
                maybeSetSignedUuid(e) {
                    try {
                        if (window.localStorage && e && this.rememberSignature) {
                            const t = window.localStorage.getItem("signed_signature_uuids");
                            let n;
                            (n = t ? JSON.parse(t) : {}), (n[this.submitter.email] = e), window.localStorage.setItem("signed_signature_uuids", JSON.stringify(n));
                        }
                    } catch (e) {
                        console.error(e);
                    }
                },
                async submit() {
                    return this.modelValue || this.computedPreviousValue
                        ? (this.computedPreviousValue && this.$emit("update:model-value", this.computedPreviousValue), Promise.resolve({}))
                        : new Promise((e, t) => {
                              vc(this.$refs.canvas, { errorOnTooSmall: !0 })
                                  .then(async (t) => {
                                      const n = new File([t], "signature.png", { type: "image/png" });
                                      if (!this.dryRun) {
                                          const t = new FormData();
                                          return (
                                              t.append("file", n),
                                              t.append("submitter_slug", this.submitterSlug),
                                              t.append("name", "attachments"),
                                              t.append("remember_signature", this.rememberSignature),
                                              fetch(this.baseUrl + "/api/attachments", { method: "POST", body: t })
                                                  .then((e) => e.json())
                                                  .then((t) => (this.$emit("attached", t), this.$emit("update:model-value", t.uuid), this.maybeSetSignedUuid(t.signed_uuid), e(t)))
                                          );
                                      }
                                      {
                                          const t = new FileReader();
                                          t.readAsDataURL(n),
                                              (t.onloadend = () => {
                                                  const n = { url: t.result, uuid: Math.random().toString() };
                                                  this.$emit("attached", n), this.$emit("update:model-value", n.uuid), e(n);
                                              });
                                      }
                                  })
                                  .catch((n) => ("Image too small" === n.message && !1 === this.field.required ? e({}) : t(n)));
                          });
                },
            },
        },
        Dc = (0, Qr.A)(Tc, [
            [
                "render",
                function (e, t, n, i, a, r) {
                    const o = Yn("MarkdownContent"),
                        s = Yn("IconSignature"),
                        l = Yn("IconTextSize"),
                        d = Yn("IconCamera"),
                        c = Yn("IconReload"),
                        u = Yn("IconQrcode"),
                        p = Yn("IconArrowsDiagonalMinimize2"),
                        h = Yn("AppearsOn"),
                        m = Yn("IconX");
                    return (
                        Xi(),
                        ia("div", Md, [
                            ca(
                                "div",
                                { class: J(["flex justify-between items-center w-full", { "mb-2": !n.field.description }]) },
                                [
                                    ca("label", Pd, [
                                        n.field.title ? (Xi(), aa(o, { key: 0, string: n.field.title }, null, 8, ["string"])) : (Xi(), ia(Ki, { key: 1 }, [ha(te(n.showFieldNames && n.field.name ? n.field.name : r.t("signature")), 1)], 64)),
                                    ]),
                                    ca("div", qd, [
                                        a.isTextSignature && "typed" !== n.field.preferences?.format
                                            ? (Xi(),
                                              ia(
                                                  "span",
                                                  { key: 0, class: "tooltip", "data-tip": r.t("draw_signature") },
                                                  [
                                                      ca("a", { id: "type_text_button", href: "#", class: "btn btn-outline btn-sm font-medium", onClick: t[0] || (t[0] = xr((e) => [r.toggleTextInput(), r.hideQr()], ["prevent"])) }, [
                                                          ua(s, { width: 16 }),
                                                          ca("span", Ed, te(r.t("draw")), 1),
                                                      ]),
                                                  ],
                                                  8,
                                                  jd
                                              ))
                                            : n.withTypedSignature && "typed" !== n.field.preferences?.format && "drawn" !== n.field.preferences?.format
                                            ? (Xi(),
                                              ia(
                                                  "span",
                                                  { key: 1, class: "tooltip ml-2", "data-tip": r.t("type_text") },
                                                  [
                                                      ca(
                                                          "a",
                                                          {
                                                              id: "type_text_button",
                                                              href: "#",
                                                              class: "btn btn-outline btn-sm font-medium inline-flex flex-nowrap",
                                                              onClick: t[1] || (t[1] = xr((e) => [r.toggleTextInput(), r.hideQr()], ["prevent"])),
                                                          },
                                                          [ua(l, { width: 16 }), ca("span", Td, te(r.t("type")), 1)]
                                                      ),
                                                  ],
                                                  8,
                                                  Ad
                                              ))
                                            : ba("", !0),
                                        "typed" !== n.field.preferences?.format && "drawn" !== n.field.preferences?.format
                                            ? (Xi(),
                                              ia(
                                                  "span",
                                                  { key: 2, class: "tooltip", "data-tip": r.t("take_photo") },
                                                  [
                                                      ca("label", Od, [
                                                          ua(d, { width: 16 }),
                                                          (Xi(), ia("input", { key: a.uploadImageInputKey, type: "file", hidden: "", accept: "image/*", onChange: t[2] || (t[2] = (...e) => r.drawImage && r.drawImage(...e)) }, null, 32)),
                                                          ca("span", Vd, te(r.t("upload")), 1),
                                                      ]),
                                                  ],
                                                  8,
                                                  Dd
                                              ))
                                            : ba("", !0),
                                        n.modelValue || r.computedPreviousValue
                                            ? (Xi(),
                                              ia("a", { key: 3, href: "#", class: "btn btn-outline btn-sm font-medium", onClick: t[3] || (t[3] = xr((...e) => r.remove && r.remove(...e), ["prevent"])) }, [
                                                  ua(c, { width: 16 }),
                                                  ha(" " + te(r.t("redraw")), 1),
                                              ]))
                                            : ba("", !0),
                                        !n.withQrButton || n.modelValue || r.computedPreviousValue || "typed" === n.field.preferences?.format
                                            ? ba("", !0)
                                            : (Xi(),
                                              ia(
                                                  "span",
                                                  { key: 4, class: "tooltip", "data-tip": r.t("drawn_signature_on_a_touchscreen_device") },
                                                  [
                                                      ca(
                                                          "a",
                                                          {
                                                              href: "#",
                                                              class: J(["btn btn-sm btn-neutral font-medium hidden md:flex", { "btn-outline": !a.isShowQr, "text-white": a.isShowQr }]),
                                                              onClick: t[4] || (t[4] = xr((e) => (a.isShowQr ? r.hideQr() : [(a.isTextSignature = !1), r.showQr()]), ["prevent"])),
                                                          },
                                                          [ua(u, { width: 19, height: 19 })],
                                                          2
                                                      ),
                                                  ],
                                                  8,
                                                  Bd
                                              )),
                                        ca("a", { href: "#", title: r.t("minimize"), class: "py-1.5 inline md:hidden", onClick: t[5] || (t[5] = xr((t) => e.$emit("minimize"), ["prevent"])) }, [ua(p, { width: 20, height: 20 })], 8, Rd),
                                    ]),
                                ],
                                2
                            ),
                            n.field.description ? (Xi(), ia("div", $d, [ua(o, { string: n.field.description }, null, 8, ["string"])])) : ba("", !0),
                            ua(h, { field: n.field }, null, 8, ["field"]),
                            ca("input", { value: n.modelValue || r.computedPreviousValue, type: "hidden", name: `values[${n.field.uuid}]` }, null, 8, Ud),
                            n.modelValue || r.computedPreviousValue
                                ? (Xi(), ia("img", { key: 1, src: n.attachmentsIndex[n.modelValue || r.computedPreviousValue].url, class: "mx-auto bg-white border border-base-300 rounded max-h-44" }, null, 8, Ld))
                                : ba("", !0),
                            ca("div", Nd, [
                                n.modelValue || r.computedPreviousValue || a.isShowQr || a.isTextSignature || !a.isSignatureStarted
                                    ? ba("", !0)
                                    : (Xi(),
                                      ia("div", Wd, [
                                          ca("a", { href: "#", class: "btn btn-ghost font-medium btn-xs md:btn-sm", onClick: t[6] || (t[6] = xr((e) => [r.clear(), r.hideQr()], ["prevent"])) }, [
                                              ua(c, { width: 16 }),
                                              ha(" " + te(r.t("clear")), 1),
                                          ]),
                                      ])),
                                a.isTextSignature ? (Xi(), ia("div", Gd)) : ba("", !0),
                                yn(ca("canvas", Kd, null, 512), [[Sr, !n.modelValue && !r.computedPreviousValue]]),
                                a.isShowQr ? (Xi(), ia("div", Hd)) : ba("", !0),
                                a.isShowQr
                                    ? (Xi(),
                                      ia("div", Yd, [
                                          ca("div", Zd, [ca("a", { href: "#", class: "btn btn-sm btn-circle btn-normal btn-outline", onClick: t[7] || (t[7] = xr((...e) => r.hideQr && r.hideQr(...e), ["prevent"])) }, [ua(m)])]),
                                          ca("div", Jd, [ca("div", Qd, [ca("canvas", Xd, null, 512)])]),
                                      ]))
                                    : ba("", !0),
                            ]),
                            a.isTextSignature
                                ? (Xi(),
                                  ia(
                                      "input",
                                      {
                                          key: 2,
                                          id: "signature_text_input",
                                          ref: "textInput",
                                          class: "base-input !text-2xl w-full mt-6",
                                          required: n.field.required && !a.isSignatureStarted,
                                          placeholder: `${r.t("type_signature_here")}...`,
                                          type: "text",
                                          onInput: t[8] || (t[8] = (...e) => r.updateWrittenSignature && r.updateWrittenSignature(...e)),
                                      },
                                      null,
                                      40,
                                      ec
                                  ))
                                : ba("", !0),
                            n.requireSigningReason && !a.isOtherReason
                                ? (Xi(),
                                  ia(
                                      "select",
                                      {
                                          key: 3,
                                          class: J(["select base-input !text-2xl w-full mt-6 text-center", { "text-gray-300": !n.reason }]),
                                          required: "",
                                          name: `values[${n.field.preferences.reason_field_uuid}]`,
                                          onChange: t[9] || (t[9] = (t) => ("other" === t.target.value ? [(n.reason = ""), (a.isOtherReason = !0)] : e.$emit("update:reason", t.target.value))),
                                      },
                                      [
                                          ca("option", { value: "", disabled: "", selected: !n.reason, class: "text-gray-300" }, te(r.t("select_a_reason")), 9, nc),
                                          (Xi(!0),
                                          ia(
                                              Ki,
                                              null,
                                              ei(r.defaultReasons, (e, t) => (Xi(), ia("option", { key: t, value: t, selected: n.reason === t, class: "text-base-content" }, te(e), 9, ic))),
                                              128
                                          )),
                                          ca("option", ac, te(r.t("other")), 1),
                                      ],
                                      42,
                                      tc
                                  ))
                                : ba("", !0),
                            n.requireSigningReason && a.isOtherReason
                                ? (Xi(),
                                  ia(
                                      "input",
                                      {
                                          key: 4,
                                          class: "base-input !text-2xl w-full mt-6",
                                          required: "",
                                          name: `values[${n.field.preferences.reason_field_uuid}]`,
                                          placeholder: r.t("type_here_"),
                                          value: n.reason,
                                          type: "text",
                                          onInput: t[10] || (t[10] = (t) => e.$emit("update:reason", t.target.value)),
                                      },
                                      null,
                                      40,
                                      rc
                                  ))
                                : ba("", !0),
                            n.requireSigningReason ? (Xi(), ia("input", { key: 5, hidden: "", name: "with_reason", value: n.field.preferences.reason_field_uuid }, null, 8, oc)) : ba("", !0),
                            a.isShowQr
                                ? (Xi(), ia("div", sc, te(r.t("scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature")), 1))
                                : n.withDisclosure
                                ? (Xi(),
                                  ia("div", lc, [
                                      ha(te(r.t("by_clicking_you_agree_to_the").replace("{button}", n.buttonText.charAt(0).toUpperCase() + n.buttonText.slice(1))) + " ", 1),
                                      ca("a", dc, [ca("span", cc, te(r.t("esignature_disclosure")), 1), ca("span", uc, te(r.t("electronic_signature_disclosure")), 1)]),
                                  ]))
                                : (Xi(), ia("div", pc)),
                        ])
                    );
                },
            ],
        ]),
        Oc = { dir: "auto" },
        Vc = { class: "label text-2xl" },
        Bc = { class: "space-x-2 flex" },
        Rc = ["data-tip"],
        $c = { class: "hidden sm:inline" },
        Uc = ["data-tip"],
        Lc = { class: "hidden sm:inline" },
        Nc = ["data-tip"],
        Wc = { class: "btn btn-outline btn-sm font-medium inline-flex flex-nowrap" },
        Gc = { class: "hidden sm:inline" },
        Kc = ["title"],
        Hc = { key: 0, dir: "auto", class: "mb-3 px-1" },
        Yc = ["value", "name"],
        Zc = ["src"],
        Jc = { ref: "canvas", class: "bg-white border border-base-300 rounded-2xl w-full" },
        Qc = ["required", "placeholder"];
    const Xc = {
            name: "InitialsStep",
            components: {
                IconUpload: uo("upload", 0, [
                    ["path", { d: "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2", key: "svg-0" }],
                    ["path", { d: "M7 9l5 -5l5 5", key: "svg-1" }],
                    ["path", { d: "M12 4l0 12", key: "svg-2" }],
                ]),
                AppearsOn: Ic,
                IconReload: Do,
                IconTextSize: Tl,
                IconSignature: gc,
                MarkdownContent: Fd,
                IconArrowsDiagonalMinimize2: fc,
            },
            inject: ["baseUrl", "t"],
            props: {
                field: { type: Object, required: !0 },
                dryRun: { type: Boolean, required: !1, default: !1 },
                submitterSlug: { type: String, required: !0 },
                showFieldNames: { type: Boolean, required: !1, default: !0 },
                attachmentsIndex: { type: Object, required: !1, default: () => ({}) },
                previousValue: { type: String, required: !1, default: "" },
                modelValue: { type: String, required: !1, default: "" },
            },
            emits: ["attached", "update:model-value", "start", "minimize", "focus"],
            data() {
                return { isInitialsStarted: !!this.previousValue, isUsePreviousValue: !0, isDrawInitials: !1, uploadImageInputKey: Math.random().toString() };
            },
            computed: {
                computedPreviousValue() {
                    return this.isUsePreviousValue ? this.previousValue : null;
                },
            },
            async mounted() {
                this.$nextTick(() => {
                    this.$refs.canvas &&
                        ((this.$refs.canvas.width = 3 * this.$refs.canvas.parentNode.clientWidth), (this.$refs.canvas.height = (this.$refs.canvas.parentNode.clientWidth / 4.5) * 3), this.$refs.canvas.getContext("2d").scale(3, 3));
                }),
                    this.$refs.canvas &&
                        ((this.pad = new xc(this.$refs.canvas)),
                        this.pad.addEventListener("beginStroke", () => {
                            (this.isInitialsStarted = !0), this.$emit("start");
                        }),
                        (this.intersectionObserver = new IntersectionObserver((e, t) => {
                            e.forEach((e) => {
                                e.isIntersecting &&
                                    ((this.$refs.canvas.width = 3 * this.$refs.canvas.parentNode.clientWidth),
                                    (this.$refs.canvas.height = (this.$refs.canvas.parentNode.clientWidth / 4.5) * 3),
                                    this.$refs.canvas.getContext("2d").scale(3, 3),
                                    this.intersectionObserver?.disconnect());
                            });
                        })),
                        this.intersectionObserver.observe(this.$refs.canvas));
            },
            beforeUnmount() {
                this.intersectionObserver?.disconnect();
            },
            methods: {
                drawOnCanvas: Dc.methods.drawOnCanvas,
                drawImage(e) {
                    this.remove(), (this.isInitialsStarted = !0), this.drawOnCanvas(e.target.files[0], this.$refs.canvas), (this.uploadImageInputKey = Math.random().toString());
                },
                remove() {
                    this.$emit("update:model-value", ""), (this.isUsePreviousValue = !1), (this.isInitialsStarted = !1);
                },
                clear() {
                    this.pad.clear(), (this.isInitialsStarted = !1), this.$refs.textInput && (this.$refs.textInput.value = "");
                },
                updateWrittenInitials(e) {
                    this.isInitialsStarted = !!e.target.value;
                    const t = this.$refs.canvas,
                        n = t.getContext("2d"),
                        i = (e) => {
                            n.font = `italic  ${e}px Arial`;
                        };
                    ((e, t) => {
                        let a = 50;
                        for (i(a); n.measureText(e).width > t && a > 1; ) (a -= 1), i(a);
                    })(e.target.value, t.width / 3),
                        (n.textAlign = "center"),
                        n.clearRect(0, 0, t.width / 3, t.height / 3),
                        n.fillText(e.target.value, t.width / 2 / 3, t.height / 2 / 3 + 11);
                },
                toggleTextInput() {
                    this.remove(),
                        this.clear(),
                        (this.isDrawInitials = !this.isDrawInitials),
                        this.isDrawInitials ||
                            this.$nextTick(() => {
                                this.$refs.textInput.focus(), this.$emit("start");
                            });
                },
                async submit() {
                    return this.modelValue || this.computedPreviousValue
                        ? (this.computedPreviousValue && this.$emit("update:model-value", this.computedPreviousValue), Promise.resolve({}))
                        : new Promise((e) => {
                              vc(this.$refs.canvas).then(async (t) => {
                                  const n = new File([t], "initials.png", { type: "image/png" });
                                  if (!this.dryRun) {
                                      const t = new FormData();
                                      return (
                                          t.append("file", n),
                                          t.append("submitter_slug", this.submitterSlug),
                                          t.append("name", "attachments"),
                                          fetch(this.baseUrl + "/api/attachments", { method: "POST", body: t })
                                              .then((e) => e.json())
                                              .then((t) => (this.$emit("attached", t), this.$emit("update:model-value", t.uuid), e(t)))
                                      );
                                  }
                                  {
                                      const t = new FileReader();
                                      t.readAsDataURL(n),
                                          (t.onloadend = () => {
                                              const n = { url: t.result, uuid: Math.random().toString() };
                                              this.$emit("attached", n), this.$emit("update:model-value", n.uuid), e(n);
                                          });
                                  }
                              });
                          });
                },
            },
        },
        eu = (0, Qr.A)(Xc, [
            [
                "render",
                function (e, t, n, i, a, r) {
                    const o = Yn("MarkdownContent"),
                        s = Yn("IconTextSize"),
                        l = Yn("IconSignature"),
                        d = Yn("IconUpload"),
                        c = Yn("IconReload"),
                        u = Yn("IconArrowsDiagonalMinimize2"),
                        p = Yn("AppearsOn");
                    return (
                        Xi(),
                        ia("div", Oc, [
                            ca(
                                "div",
                                { class: J(["flex justify-between items-center w-full", { "mb-2": !n.field.description }]) },
                                [
                                    ca("label", Vc, [
                                        n.field.title ? (Xi(), aa(o, { key: 0, string: n.field.title }, null, 8, ["string"])) : (Xi(), ia(Ki, { key: 1 }, [ha(te(n.showFieldNames && n.field.name ? n.field.name : r.t("initials")), 1)], 64)),
                                    ]),
                                    ca("div", Bc, [
                                        a.isDrawInitials
                                            ? (Xi(),
                                              ia(
                                                  "span",
                                                  { key: 0, class: "tooltip", "data-tip": r.t("type_initial") },
                                                  [
                                                      ca(
                                                          "a",
                                                          { id: "type_text_button", href: "#", class: "btn btn-outline font-medium btn-sm", onClick: t[0] || (t[0] = xr((...e) => r.toggleTextInput && r.toggleTextInput(...e), ["prevent"])) },
                                                          [ua(s, { width: 16 }), ca("span", $c, te(r.t("type")), 1)]
                                                      ),
                                                  ],
                                                  8,
                                                  Rc
                                              ))
                                            : (Xi(),
                                              ia(
                                                  "span",
                                                  { key: 1, class: "tooltip ml-2", "data-tip": r.t("draw_initials") },
                                                  [
                                                      ca(
                                                          "a",
                                                          { id: "type_text_button", href: "#", class: "btn btn-outline font-medium btn-sm", onClick: t[1] || (t[1] = xr((...e) => r.toggleTextInput && r.toggleTextInput(...e), ["prevent"])) },
                                                          [ua(l, { width: 16 }), ca("span", Lc, te(r.t("draw")), 1)]
                                                      ),
                                                  ],
                                                  8,
                                                  Uc
                                              )),
                                        ca(
                                            "span",
                                            { class: "tooltip", "data-tip": r.t("click_to_upload") },
                                            [
                                                ca("label", Wc, [
                                                    ua(d, { width: 16 }),
                                                    (Xi(), ia("input", { key: a.uploadImageInputKey, type: "file", hidden: "", accept: "image/*", onChange: t[2] || (t[2] = (...e) => r.drawImage && r.drawImage(...e)) }, null, 32)),
                                                    ca("span", Gc, te(r.t("upload")), 1),
                                                ]),
                                            ],
                                            8,
                                            Nc
                                        ),
                                        n.modelValue || r.computedPreviousValue
                                            ? (Xi(),
                                              ia("a", { key: 2, href: "#", class: "btn font-medium btn-outline btn-sm", onClick: t[3] || (t[3] = xr((...e) => r.remove && r.remove(...e), ["prevent"])) }, [
                                                  ua(c, { width: 16 }),
                                                  ha(" " + te(r.t("clear")), 1),
                                              ]))
                                            : (Xi(),
                                              ia("a", { key: 3, href: "#", class: "btn font-medium btn-outline btn-sm", onClick: t[4] || (t[4] = xr((...e) => r.clear && r.clear(...e), ["prevent"])) }, [
                                                  ua(c, { width: 16 }),
                                                  ha(" " + te(r.t("clear")), 1),
                                              ])),
                                        ca("a", { title: r.t("minimize"), href: "#", class: "py-1.5 inline md:hidden", onClick: t[5] || (t[5] = xr((t) => e.$emit("minimize"), ["prevent"])) }, [ua(u, { width: 20, height: 20 })], 8, Kc),
                                    ]),
                                ],
                                2
                            ),
                            n.field.description ? (Xi(), ia("div", Hc, [ua(o, { string: n.field.description }, null, 8, ["string"])])) : ba("", !0),
                            ua(p, { field: n.field }, null, 8, ["field"]),
                            ca("input", { value: n.modelValue || r.computedPreviousValue, type: "hidden", name: `values[${n.field.uuid}]` }, null, 8, Yc),
                            n.modelValue || r.computedPreviousValue
                                ? (Xi(), ia("img", { key: 1, src: n.attachmentsIndex[n.modelValue || r.computedPreviousValue].url, class: "mx-auto bg-white border border-base-300 rounded max-h-44" }, null, 8, Zc))
                                : ba("", !0),
                            yn(ca("canvas", Jc, null, 512), [[Sr, !n.modelValue && !r.computedPreviousValue]]),
                            a.isDrawInitials || n.modelValue || r.computedPreviousValue
                                ? ba("", !0)
                                : (Xi(),
                                  ia(
                                      "input",
                                      {
                                          key: 2,
                                          id: "initials_text_input",
                                          ref: "textInput",
                                          class: "base-input !text-2xl w-full mt-6 text-center",
                                          required: n.field.required && !a.isInitialsStarted,
                                          placeholder: `${r.t("type_initial_here")}...`,
                                          type: "text",
                                          onFocus: t[6] || (t[6] = (t) => e.$emit("focus")),
                                          onInput: t[7] || (t[7] = (...e) => r.updateWrittenInitials && r.updateWrittenInitials(...e)),
                                      },
                                      null,
                                      40,
                                      Qc
                                  )),
                        ])
                    );
                },
            ],
        ]),
        tu = { key: 0 },
        nu = ["value", "name"],
        iu = ["href"],
        au = ["onClick"],
        ru = ["name"],
        ou = { key: 2, dir: "auto", class: "mb-3 px-1" };
    var su = uo("trash-x", 0, [
        ["path", { d: "M4 7h16", key: "svg-0" }],
        ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-1" }],
        ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-2" }],
        ["path", { d: "M10 12l4 4m0 -4l-4 4", key: "svg-3" }],
    ]);
    const lu = {
            name: "AttachmentStep",
            components: { FileDropzone: bd, MarkdownContent: Fd, IconPaperclip: El, IconTrashX: su },
            inject: ["t"],
            props: {
                field: { type: Object, required: !0 },
                submitterSlug: { type: String, required: !0 },
                dryRun: { type: Boolean, required: !1, default: !1 },
                attachmentsIndex: { type: Object, required: !1, default: () => ({}) },
                modelValue: { type: Array, required: !1, default: () => [] },
            },
            emits: ["attached", "update:model-value"],
            computed: {
                value: {
                    set(e) {
                        this.$emit("update:model-value", this.modelValue || []);
                    },
                    get() {
                        return this.modelValue || [];
                    },
                },
            },
            methods: {
                removeAttachment(e) {
                    this.value.splice(this.value.indexOf(e), 1), this.$emit("update:model-value", this.value);
                },
                onUpload(e) {
                    e.forEach((e) => {
                        this.$emit("attached", e);
                    }),
                        this.$emit("update:model-value", [...this.value, ...e.map((e) => e.uuid)]);
                },
            },
        },
        du = (0, Qr.A)(lu, [
            [
                "render",
                function (e, t, n, i, a, r) {
                    const o = Yn("IconPaperclip"),
                        s = Yn("IconTrashX"),
                        l = Yn("MarkdownContent"),
                        d = Yn("FileDropzone");
                    return (
                        Xi(),
                        ia("div", null, [
                            r.value.length
                                ? (Xi(),
                                  ia("div", tu, [
                                      (Xi(!0),
                                      ia(
                                          Ki,
                                          null,
                                          ei(
                                              r.value,
                                              (e, t) => (
                                                  Xi(),
                                                  ia("div", { key: t, class: "flex mb-2" }, [
                                                      ca("input", { value: e, type: "hidden", name: `values[${n.field.uuid}][]` }, null, 8, nu),
                                                      e
                                                          ? (Xi(),
                                                            ia(
                                                                "a",
                                                                { key: 0, class: "flex items-center space-x-1.5 w-full", href: n.attachmentsIndex[e].url, target: "_blank" },
                                                                [ua(o, { width: 16, class: "flex-none", heigh: 16 }), ca("span", null, te(n.attachmentsIndex[e].filename), 1)],
                                                                8,
                                                                iu
                                                            ))
                                                          : ba("", !0),
                                                      ca("button", { onClick: xr((t) => r.removeAttachment(e), ["prevent"]) }, [ua(s, { width: 18, heigh: 19 })], 8, au),
                                                  ])
                                              )
                                          ),
                                          128
                                      )),
                                  ]))
                                : (Xi(), ia("input", { key: 1, value: "", type: "hidden", name: `values[${n.field.uuid}][]` }, null, 8, ru)),
                            n.field.description && !n.modelValue.length ? (Xi(), ia("div", ou, [ua(l, { string: n.field.description }, null, 8, ["string"])])) : ba("", !0),
                            ua(
                                d,
                                { message: `${r.t("upload")} ${n.field.name || r.t("files")}${n.field.required ? "" : ` (${r.t("optional")})`}`, "submitter-slug": n.submitterSlug, multiple: !0, "dry-run": n.dryRun, onUpload: r.onUpload },
                                null,
                                8,
                                ["message", "submitter-slug", "dry-run", "onUpload"]
                            ),
                        ])
                    );
                },
            ],
        ]),
        cu = ["for"],
        uu = { key: 1, dir: "auto", class: "mb-3 px-1" },
        pu = { class: "flex w-full max-h-44 overflow-y-auto" },
        hu = ["name"],
        mu = { key: 1, class: "text-xl px-1" },
        bu = { class: "font-semibold" },
        gu = ["for"],
        fu = ["id", "name", "value", "checked"],
        vu = { class: "text-xl" },
        yu = {
            name: "MultiSelectStep",
            components: { MarkdownContent: Fd },
            inject: ["t", "scrollIntoField"],
            props: {
                field: { type: Object, required: !0 },
                isLastStep: { type: Boolean, required: !0, default: !1 },
                showFieldNames: { type: Boolean, required: !1, default: !0 },
                modelValue: { type: Array, required: !1, default: () => [] },
            },
            emits: ["update:model-value"],
            data: () => ({ inputRefs: [] }),
            computed: {
                showOptions() {
                    return this.showFieldNames && (this.field.options.some((e) => e.value) || this.field.options.length < 5);
                },
            },
            beforeUpdate() {
                this.inputRefs = [];
            },
            methods: {
                setInputRef(e) {
                    e && this.inputRefs.push(e);
                },
                optionValue(e, t) {
                    return e.value ? e.value : `${this.t("option")} ${t + 1}`;
                },
                onChange() {
                    this.$emit(
                        "update:model-value",
                        this.inputRefs.filter((e) => e.checked).map((e, t) => this.optionValue(e, t))
                    );
                },
            },
        },
        _u = (0, Qr.A)(yu, [
            [
                "render",
                function (e, t, n, i, a, r) {
                    const o = Yn("MarkdownContent");
                    return (
                        Xi(),
                        ia(
                            Ki,
                            null,
                            [
                                n.showFieldNames && (n.field.name || n.field.title)
                                    ? (Xi(),
                                      ia(
                                          "label",
                                          { key: 0, for: n.field.uuid, dir: "auto", class: J(["label text-2xl", { "mb-2": !n.field.description }]) },
                                          [n.field.title ? (Xi(), aa(o, { key: 0, string: n.field.title }, null, 8, ["string"])) : (Xi(), ia(Ki, { key: 1 }, [ha(te(n.field.name), 1)], 64))],
                                          10,
                                          cu
                                      ))
                                    : ba("", !0),
                                n.field.description ? (Xi(), ia("div", uu, [ua(o, { string: n.field.description }, null, 8, ["string"])])) : ba("", !0),
                                ca("div", pu, [
                                    0 === n.modelValue.length ? (Xi(), ia("input", { key: 0, type: "text", name: `values[${n.field.uuid}][]`, value: "", class: "hidden" }, null, 8, hu)) : ba("", !0),
                                    r.showOptions
                                        ? ba("", !0)
                                        : (Xi(),
                                          ia("div", mu, [
                                              ca("span", { onClick: t[0] || (t[0] = (e) => r.scrollIntoField(n.field)) }, [
                                                  ha(te(r.t("complete_hightlighted_checkboxes_and_click")) + " ", 1),
                                                  ca("span", bu, te(n.isLastStep ? r.t("submit") : r.t("next")), 1),
                                                  ha(". "),
                                              ]),
                                          ])),
                                    ca(
                                        "div",
                                        { class: J(["space-y-3.5 mx-auto", { hidden: !r.showOptions }]) },
                                        [
                                            (Xi(!0),
                                            ia(
                                                Ki,
                                                null,
                                                ei(
                                                    n.field.options,
                                                    (e, i) => (
                                                        Xi(),
                                                        ia("div", { key: e.uuid }, [
                                                            ca(
                                                                "label",
                                                                { for: e.uuid, class: "flex items-center space-x-3", onClick: t[2] || (t[2] = (e) => r.scrollIntoField(n.field)) },
                                                                [
                                                                    ca(
                                                                        "input",
                                                                        {
                                                                            id: e.uuid,
                                                                            ref_for: !0,
                                                                            ref: r.setInputRef,
                                                                            type: "checkbox",
                                                                            name: `values[${n.field.uuid}][]`,
                                                                            value: r.optionValue(e, i),
                                                                            class: "base-checkbox !h-7 !w-7",
                                                                            checked: (n.modelValue || []).includes(r.optionValue(e, i)),
                                                                            onChange: t[1] || (t[1] = (...e) => r.onChange && r.onChange(...e)),
                                                                        },
                                                                        null,
                                                                        40,
                                                                        fu
                                                                    ),
                                                                    ca("span", vu, te(r.optionValue(e, i)), 1),
                                                                ],
                                                                8,
                                                                gu
                                                            ),
                                                        ])
                                                    )
                                                ),
                                                128
                                            )),
                                        ],
                                        2
                                    ),
                                ]),
                            ],
                            64
                        )
                    );
                },
            ],
        ]),
        wu = ["for"],
        xu = { key: 0, dir: "auto", class: "mb-3 px-1" },
        ku = ca("input", { type: "hidden", name: "normalize_phone", value: "true" }, null, -1),
        Su = { key: 0 },
        Cu = ["placeholder"],
        Fu = { class: "flex justify-between mt-2 -mb-2 md:-mb-4" },
        Iu = { class: "flex w-full rounded-full outline-neutral-content outline-2 outline-offset-2 focus-within:outline" },
        zu = { class: "relative inline-block" },
        Mu = { class: "btn bg-base-200 border border-neutral-300 text-2xl whitespace-nowrap font-normal rounded-l-full" },
        Pu = ["disabled"],
        qu = ["value"],
        ju = ["name", "value"],
        Eu = ["id", "value", "readonly", "required"],
        Au = [
            ["United States", "1", "🇺🇸", ["New_York", "Chicago", "Denver", "Los_Angeles", "Anchorage", "Adak", "Honolulu"]],
            ["Afghanistan", "93", "🇦🇫", ["Kabul"]],
            ["Aland Islands", "358", "🇦🇽", ["Mariehamn"]],
            ["Albania", "355", "🇦🇱", ["Tirane"]],
            ["Algeria", "213", "🇩🇿", ["Algiers"]],
            ["American Samoa", "1684", "🇦🇸", ["Pago_Pago"]],
            ["Andorra", "376", "🇦🇩", ["Andorra"]],
            ["Angola", "244", "🇦🇴", ["Luanda"]],
            ["Anguilla", "1264", "🇦🇮", ["Anguilla"]],
            ["Antigua and Barbuda", "1268", "🇦🇬", ["Antigua"]],
            ["Argentina", "54", "🇦🇷", ["Buenos_Aires", "Catamarca", "Cordoba", "Jujuy", "La_Rioja", "Mendoza", "Rio_Gallegos", "Salta", "San_Juan", "San_Luis", "Tucuman", "Ushuaia"]],
            ["Armenia", "374", "🇦🇲", ["Yerevan"]],
            ["Aruba", "297", "🇦🇼", ["Aruba"]],
            ["Australia", "61", "🇦🇺", ["Adelaide", "Brisbane", "Broken_Hill", "Currie", "Darwin", "Eucla", "Hobart", "Lindeman", "Lord_Howe", "Melbourne", "Perth", "Sydney"]],
            ["Austria", "43", "🇦🇹", ["Vienna"]],
            ["Azerbaijan", "994", "🇦🇿", ["Baku"]],
            ["Bahamas", "1242", "🇧🇸", ["Nassau"]],
            ["Bahrain", "973", "🇧🇭", ["Bahrain"]],
            ["Bangladesh", "880", "🇧🇩", ["Dhaka"]],
            ["Barbados", "1246", "🇧🇧", ["Barbados"]],
            ["Belgium", "32", "🇧🇪", ["Brussels"]],
            ["Belize", "501", "🇧🇿", ["Belize"]],
            ["Benin", "229", "🇧🇯", ["Porto-Novo"]],
            ["Bermuda", "1441", "🇧🇲", ["Bermuda"]],
            ["Bhutan", "975", "🇧🇹", ["Thimphu"]],
            ["Bolivia", "591", "🇧🇴", ["La_Paz"]],
            ["Bosnia and Herzegovina", "387", "🇧🇦", ["Sarajevo"]],
            ["Botswana", "267", "🇧🇼", ["Gaborone"]],
            ["Brazil", "55", "🇧🇷", ["Araguaina", "Bahia", "Belem", "Boa_Vista", "Campo_Grande", "Cuiaba", "Eirunepe", "Fortaleza", "Maceio", "Manaus", "Noronha", "Porto_Velho", "Recife", "Rio_Branco", "Santarem", "Sao_Paulo"]],
            ["British Indian Ocean Territory", "246", "🇮🇴", ["Chagos"]],
            ["Brunei Darussalam", "673", "🇧🇳", ["Brunei"]],
            ["Bulgaria", "359", "🇧🇬", ["Sofia"]],
            ["Burkina Faso", "226", "🇧🇫", ["Ouagadougou"]],
            ["Burundi", "257", "🇧🇮", ["Bujumbura"]],
            ["Cambodia", "855", "🇰🇭", ["Phnom_Penh"]],
            ["Cameroon", "237", "🇨🇲", ["Douala"]],
            [
                "Canada",
                "1",
                "🇨🇦",
                [
                    "Atikokan",
                    "Blanc-Sablon",
                    "Cambridge_Bay",
                    "Creston",
                    "Dawson",
                    "Dawson_Creek",
                    "Edmonton",
                    "Fort_Nelson",
                    "Glace_Bay",
                    "Goose_Bay",
                    "Halifax",
                    "Inuvik",
                    "Iqaluit",
                    "Moncton",
                    "Nipigon",
                    "Pangnirtung",
                    "Rainy_River",
                    "Rankin_Inlet",
                    "Regina",
                    "Resolute",
                    "St_Johns",
                    "Swift_Current",
                    "Thunder_Bay",
                    "Toronto",
                    "Vancouver",
                    "Whitehorse",
                    "Winnipeg",
                    "Yellowknife",
                ],
            ],
            ["Cape Verde", "238", "🇨🇻", ["Cape_Verde"]],
            ["Cayman Islands", "1345", "🇰🇾", ["Cayman"]],
            ["Chad", "235", "🇹🇩", ["Ndjamena"]],
            ["Chile", "56", "🇨🇱", ["Punta_Arenas", "Santiago", "Easter"]],
            ["China", "86", "🇨🇳", ["Shanghai", "Urumqi"]],
            ["Christmas Island", "61", "🇨🇽", ["Christmas"]],
            ["Cocos (Keeling) Islands", "61", "🇨🇨", ["Cocos"]],
            ["Colombia", "57", "🇨🇴", ["Bogota"]],
            ["Comoros", "269", "🇰🇲", ["Comoro"]],
            ["Congo, The Democratic Republic of the", "243", "🇨🇩", ["Kinshasa", "Lubumbashi"]],
            ["Cook Islands", "682", "🇨🇰", ["Rarotonga"]],
            ["Costa Rica", "506", "🇨🇷", ["Costa_Rica"]],
            ["Côte d'Ivoire", "225", "🇨🇮", ["Abidjan"]],
            ["Croatia", "385", "🇭🇷", ["Zagreb"]],
            ["Cyprus", "357", "🇨🇾", ["Nicosia", "Famagusta"]],
            ["Czech Republic", "420", "🇨🇿", ["Prague"]],
            ["Denmark", "45", "🇩🇰", ["Copenhagen"]],
            ["Djibouti", "253", "🇩🇯", ["Djibouti"]],
            ["Dominica", "1767", "🇩🇲", ["Dominica"]],
            ["Dominican Republic", "1849", "🇩🇴", ["Santo_Domingo"]],
            ["Ecuador", "593", "🇪🇨", ["Guayaquil", "Galapagos"]],
            ["Egypt", "20", "🇪🇬", ["Cairo"]],
            ["El Salvador", "503", "🇸🇻", ["El_Salvador"]],
            ["Equatorial Guinea", "240", "🇬🇶", ["Malabo"]],
            ["Eritrea", "291", "🇪🇷", ["Asmara"]],
            ["Estonia", "372", "🇪🇪", ["Tallinn"]],
            ["Ethiopia", "251", "🇪🇹", ["Addis_Ababa"]],
            ["Falkland Islands (Malvinas)", "500", "🇫🇰", ["Stanley"]],
            ["Faroe Islands", "298", "🇫🇴", ["Faroe"]],
            ["Fiji", "679", "🇫🇯", ["Fiji"]],
            ["Finland", "358", "🇫🇮", ["Helsinki"]],
            ["France", "33", "🇫🇷", ["Paris"]],
            ["French Guiana", "594", "🇬🇫", ["Cayenne"]],
            ["French Polynesia", "689", "🇵🇫", ["Tahiti", "Marquesas", "Gambier"]],
            ["Gabon", "241", "🇬🇦", ["Libreville"]],
            ["Gambia", "220", "🇬🇲", ["Banjul"]],
            ["Georgia", "995", "🇬🇪", ["Tbilisi"]],
            ["Germany", "49", "🇩🇪", ["Berlin", "Busingen"]],
            ["Ghana", "233", "🇬🇭", ["Accra"]],
            ["Gibraltar", "350", "🇬🇮", ["Gibraltar"]],
            ["Greece", "30", "🇬🇷", ["Athens"]],
            ["Greenland", "299", "🇬🇱", ["Nuuk", "Danmarkshavn", "Scoresbysund", "Thule"]],
            ["Grenada", "1473", "🇬🇩", ["Grenada"]],
            ["Guadeloupe", "590", "🇬🇵", ["Guadeloupe"]],
            ["Guam", "1671", "🇬🇺", ["Guam"]],
            ["Guatemala", "502", "🇬🇹", ["Guatemala"]],
            ["Guinea", "224", "🇬🇳", ["Conakry"]],
            ["Guinea-Bissau", "245", "🇬🇼", ["Bissau"]],
            ["Guyana", "592", "🇬🇾", ["Guyana"]],
            ["Haiti", "509", "🇭🇹", ["Port-au-Prince"]],
            ["Honduras", "504", "🇭🇳", ["Tegucigalpa"]],
            ["Hong Kong", "852", "🇭🇰", ["Hong_Kong"]],
            ["Hungary", "36", "🇭🇺", ["Budapest"]],
            ["Iceland", "354", "🇮🇸", ["Reykjavik"]],
            ["India", "91", "🇮🇳", ["Kolkata"]],
            ["Indonesia", "62", "🇮🇩", ["Jakarta", "Pontianak", "Makassar", "Jayapura"]],
            ["Iraq", "964", "🇮🇶", ["Baghdad"]],
            ["Ireland", "353", "🇮🇪", ["Dublin"]],
            ["Isle of Man", "44", "🇮🇲", ["Isle_of_Man"]],
            ["Israel", "972", "🇮🇱", ["Jerusalem"]],
            ["Italy", "39", "🇮🇹", ["Rome"]],
            ["Jamaica", "1876", "🇯🇲", ["Jamaica"]],
            ["Japan", "81", "🇯🇵", ["Tokyo"]],
            ["Jersey", "44", "🇯🇪", ["Jersey"]],
            ["Jordan", "962", "🇯🇴", ["Amman"]],
            ["Kazakhstan", "7", "🇰🇿", ["Almaty", "Qyzylorda", "Aqtobe", "Aqtau", "Oral"]],
            ["Kenya", "254", "🇰🇪", ["Nairobi"]],
            ["Kiribati", "686", "🇰🇮", ["Tarawa", "Enderbury", "Kiritimati"]],
            ["South Korea", "82", "🇰🇷", ["Seoul"]],
            ["Kuwait", "965", "🇰🇼", ["Kuwait"]],
            ["Kyrgyzstan", "996", "🇰🇬", ["Bishkek"]],
            ["Laos", "856", "🇱🇦", ["Vientiane"]],
            ["Latvia", "371", "🇱🇻", ["Riga"]],
            ["Lebanon", "961", "🇱🇧", ["Beirut"]],
            ["Lesotho", "266", "🇱🇸", ["Maseru"]],
            ["Liberia", "231", "🇱🇷", ["Monrovia"]],
            ["Liechtenstein", "423", "🇱🇮", ["Vaduz"]],
            ["Lithuania", "370", "🇱🇹", ["Vilnius"]],
            ["Luxembourg", "352", "🇱🇺", ["Luxembourg"]],
            ["Macao", "853", "🇲🇴", ["Macau"]],
            ["North Macedonia", "389", "🇲🇰", ["Skopje"]],
            ["Madagascar", "261", "🇲🇬", ["Antananarivo"]],
            ["Malawi", "265", "🇲🇼", ["Blantyre"]],
            ["Malaysia", "60", "🇲🇾", ["Kuala_Lumpur", "Kuching"]],
            ["Maldives", "960", "🇲🇻", ["Maldives"]],
            ["Mali", "223", "🇲🇱", ["Bamako"]],
            ["Malta", "356", "🇲🇹", ["Malta"]],
            ["Marshall Islands", "692", "🇲🇭", ["Majuro", "Kwajalein"]],
            ["Martinique", "596", "🇲🇶", ["Martinique"]],
            ["Mauritania", "222", "🇲🇷", ["Nouakchott"]],
            ["Mauritius", "230", "🇲🇺", ["Mauritius"]],
            ["Mayotte", "262", "🇾🇹", ["Mayotte"]],
            ["Mexico", "52", "🇲🇽", ["Bahia_Banderas", "Cancun", "Chihuahua", "Hermosillo", "Matamoros", "Mazatlan", "Merida", "Mexico_City", "Monterrey", "Ojinaga", "Tijuana"]],
            ["Micronesia, Federated States of", "691", "🇫🇲", ["Chuuk", "Pohnpei", "Kosrae"]],
            ["Moldova", "373", "🇲🇩", ["Chisinau"]],
            ["Monaco", "377", "🇲🇨", ["Monaco"]],
            ["Mongolia", "976", "🇲🇳", ["Ulaanbaatar", "Hovd", "Choibalsan"]],
            ["Montenegro", "382", "🇲🇪", ["Podgorica"]],
            ["Montserrat", "1664", "🇲🇸", ["Montserrat"]],
            ["Morocco", "212", "🇲🇦", ["Casablanca"]],
            ["Mozambique", "258", "🇲🇿", ["Maputo"]],
            ["Namibia", "264", "🇳🇦", ["Windhoek"]],
            ["Nauru", "674", "🇳🇷", ["Nauru"]],
            ["Nepal", "977", "🇳🇵", ["Kathmandu"]],
            ["Netherlands", "31", "🇳🇱", ["Amsterdam"]],
            ["New Caledonia", "687", "🇳🇨", ["Noumea"]],
            ["New Zealand", "64", "🇳🇿", ["Auckland", "Chatham"]],
            ["Niger", "227", "🇳🇪", ["Niamey"]],
            ["Nigeria", "234", "🇳🇬", ["Lagos"]],
            ["Niue", "683", "🇳🇺", ["Niue"]],
            ["Norfolk Island", "672", "🇳🇫", ["Norfolk"]],
            ["Northern Mariana Islands", "1670", "🇲🇵", ["Saipan"]],
            ["Norway", "47", "🇳🇴", ["Oslo"]],
            ["Oman", "968", "🇴🇲", ["Muscat"]],
            ["Pakistan", "92", "🇵🇰", ["Karachi"]],
            ["Palau", "680", "🇵🇼", ["Palau"]],
            ["Panama", "507", "🇵🇦", ["Panama"]],
            ["Papua New Guinea", "675", "🇵🇬", ["Port_Moresby", "Bougainville"]],
            ["Paraguay", "595", "🇵🇾", ["Asuncion"]],
            ["Peru", "51", "🇵🇪", ["Lima"]],
            ["Philippines", "63", "🇵🇭", ["Manila"]],
            ["Pitcairn", "872", "🇵🇳", ["Pitcairn"]],
            ["Poland", "48", "🇵🇱", ["Warsaw"]],
            ["Portugal", "351", "🇵🇹", ["Lisbon", "Madeira", "Azores"]],
            ["Puerto Rico", "1939", "🇵🇷", ["Puerto_Rico"]],
            ["Qatar", "974", "🇶🇦", ["Qatar"]],
            ["Romania", "40", "🇷🇴", ["Bucharest"]],
            ["Rwanda", "250", "🇷🇼", ["Kigali"]],
            ["Reunion", "262", "🇷🇪", ["Reunion"]],
            ["Saint Barthelemy", "590", "🇧🇱", ["St_Barthelemy"]],
            ["Saint Helena, Ascension and Tristan Da Cunha", "290", "🇸🇭", ["St_Helena"]],
            ["Saint Kitts and Nevis", "1869", "🇰🇳", ["St_Kitts"]],
            ["Saint Lucia", "1758", "🇱🇨", ["St_Lucia"]],
            ["Saint Martin", "590", "🇲🇫", ["Marigot"]],
            ["Saint Pierre and Miquelon", "508", "🇵🇲", ["Miquelon"]],
            ["Saint Vincent and the Grenadines", "1784", "🇻🇨", ["St_Vincent"]],
            ["Samoa", "685", "🇼🇸", ["Apia"]],
            ["San Marino", "378", "🇸🇲", ["San_Marino"]],
            ["Sao Tome and Principe", "239", "🇸🇹", ["Sao_Tome"]],
            ["Saudi Arabia", "966", "🇸🇦", ["Riyadh"]],
            ["Senegal", "221", "🇸🇳", ["Dakar"]],
            ["Serbia", "381", "🇷🇸", ["Belgrade"]],
            ["Seychelles", "248", "🇸🇨", ["Mahe"]],
            ["Sierra Leone", "232", "🇸🇱", ["Freetown"]],
            ["Singapore", "65", "🇸🇬", ["Singapore"]],
            ["Slovakia", "421", "🇸🇰", ["Bratislava"]],
            ["Slovenia", "386", "🇸🇮", ["Ljubljana"]],
            ["Solomon Islands", "677", "🇸🇧", ["Guadalcanal"]],
            ["South Africa", "27", "🇿🇦", ["Johannesburg"]],
            ["Spain", "34", "🇪🇸", ["Madrid", "Ceuta", "Canary"]],
            ["Sri Lanka", "94", "🇱🇰", ["Colombo"]],
            ["Suriname", "597", "🇸🇷", ["Paramaribo"]],
            ["Svalbard and Jan Mayen", "47", "🇸🇯", ["Longyearbyen"]],
            ["Eswatini", "268", "🇸🇿", ["Mbabane"]],
            ["Sweden", "46", "🇸🇪", ["Stockholm"]],
            ["Switzerland", "41", "🇨🇭", ["Zurich"]],
            ["Taiwan", "886", "🇹🇼", ["Taipei"]],
            ["Tajikistan", "992", "🇹🇯", ["Dushanbe"]],
            ["Tanzania, United Republic of", "255", "🇹🇿", ["Dar_es_Salaam"]],
            ["Thailand", "66", "🇹🇭", ["Bangkok"]],
            ["Timor-Leste", "670", "🇹🇱", ["Dili"]],
            ["Togo", "228", "🇹🇬", ["Lome"]],
            ["Tokelau", "690", "🇹🇰", ["Fakaofo"]],
            ["Tonga", "676", "🇹🇴", ["Tongatapu"]],
            ["Trinidad and Tobago", "1868", "🇹🇹", ["Port_of_Spain"]],
            ["Tunisia", "216", "🇹🇳", ["Tunis"]],
            ["Turkey", "90", "🇹🇷", ["Istanbul"]],
            ["Turkmenistan", "993", "🇹🇲", ["Ashgabat"]],
            ["Turks and Caicos Islands", "1649", "🇹🇨", ["Grand_Turk"]],
            ["Tuvalu", "688", "🇹🇻", ["Funafuti"]],
            ["Uganda", "256", "🇺🇬", ["Kampala"]],
            ["Ukraine", "380", "🇺🇦", ["Kyiv", "Kiev", "Uzhgorod", "Zaporozhye"]],
            ["United Arab Emirates", "971", "🇦🇪", ["Dubai"]],
            ["United Kingdom", "44", "🇬🇧", ["London"]],
            ["Uruguay", "598", "🇺🇾", ["Montevideo"]],
            ["Uzbekistan", "998", "🇺🇿", ["Samarkand", "Tashkent"]],
            ["Vanuatu", "678", "🇻🇺", ["Efate"]],
            ["Vietnam", "84", "🇻🇳", ["Ho_Chi_Minh"]],
            ["Virgin Islands, British", "1284", "🇻🇬", ["Tortola"]],
            ["Virgin Islands, U.S.", "1340", "🇻🇮", ["St_Thomas"]],
            ["Wallis and Futuna", "681", "🇼🇫", ["Wallis"]],
            ["Yemen", "967", "🇾🇪", ["Aden"]],
            ["Zambia", "260", "🇿🇲", ["Lusaka"]],
        ],
        Tu = {
            name: "PhoneStep",
            components: { MarkdownContent: Fd },
            inject: ["t", "baseUrl"],
            props: {
                field: { type: Object, required: !0 },
                verifiedValue: { type: String, required: !1, default: "" },
                submitterSlug: { type: String, required: !0 },
                locale: { type: String, required: !1, default: "en" },
                showFieldNames: { type: Boolean, required: !1, default: !0 },
                modelValue: { type: String, required: !1, default: "" },
                defaultValue: { type: String, required: !1, default: "" },
            },
            emits: ["update:model-value", "focus", "submit"],
            data() {
                return { isCodeSent: !1, isResendLoading: !1, phoneValue: this.modelValue || this.defaultValue || "", selectedCountry: {} };
            },
            computed: {
                countries: () => Au.map(([e, t, n, i]) => ({ name: e, dial: t, flag: n, tz: i })),
                countriesDialIndex() {
                    return this.countries.reduce((e, t) => ((e[t.dial] ||= t), e), {});
                },
                dialCodesRegexp() {
                    const e = this.countries.map((e) => e.dial).sort((e, t) => t.length - e.length);
                    return new RegExp(`^\\+(${e.join("|")})`);
                },
                detectedPhoneValueDialCode() {
                    return (this.phoneValue || "").replace(/[^\d+]/g, "").match(this.dialCodesRegexp)?.[1];
                },
                fullInternationalPhoneValue() {
                    return this.detectedPhoneValueDialCode ? this.phoneValue : this.phoneValue ? ["+", this.selectedCountry.dial, this.phoneValue].filter(Boolean).join("") : "";
                },
            },
            mounted() {
                const e = Intl.DateTimeFormat().resolvedOptions().timeZone;
                if (this.detectedPhoneValueDialCode) this.selectedCountry = this.countriesDialIndex[this.detectedPhoneValueDialCode];
                else if (e) {
                    const t = e.split("/")[1];
                    this.selectedCountry = this.countries.find((e) => e.tz.includes(t)) || this.countries[0];
                }
            },
            methods: {
                emitSubmit: (function (e) {
                    let t = 0;
                    return function (...n) {
                        const i = Date.now();
                        i - t >= 1e3 && (e.apply(this, n), (t = i));
                    };
                })(function (e) {
                    this.$emit("submit");
                }),
                onCountrySelect(e) {
                    this.selectedCountry.flag !== e.flag && (this.phoneValue = this.phoneValue.replace(`+${this.selectedCountry.dial}`, `+${e.dial}`)), (this.selectedCountry = e), this.$refs.phone.focus();
                },
                onPhoneInput(e) {
                    (this.phoneValue = e.target.value), this.detectedPhoneValueDialCode && (this.selectedCountry = this.countriesDialIndex[this.detectedPhoneValueDialCode]);
                },
                onInputCode(e) {
                    6 === e.target.value.length && this.emitSubmit();
                },
                resendCode() {
                    (this.isResendLoading = !0),
                        this.sendVerificationCode().finally(() => {
                            alert(this.t("verification_code_has_been_resent")), (this.isResendLoading = !1);
                        });
                },
                sendVerificationCode() {
                    return fetch(this.baseUrl + "/api/send_phone_verification_code", {
                        method: "POST",
                        body: JSON.stringify({ submitter_slug: this.submitterSlug, locale: this.locale, phone: this.fullInternationalPhoneValue }),
                        headers: { "Content-Type": "application/json" },
                    }).then(async (e) => {
                        if (422 === e.status) {
                            const t = await e.json();
                            return alert(this.t("number_phone_is_invalid").replace("{number}", this.fullInternationalPhoneValue)), Promise.reject(new Error(t.error));
                        }
                    });
                },
                async submit() {
                    return this.verifiedValue && this.verifiedValue === this.modelValue
                        ? Promise.resolve({})
                        : this.fullInternationalPhoneValue.toString().startsWith("+")
                        ? this.isCodeSent
                            ? Promise.resolve({})
                            : this.sendVerificationCode().then(() => (this.$emit("update:model-value", this.fullInternationalPhoneValue), (this.isCodeSent = !0), Promise.reject(new Error("verify with code"))))
                        : (alert(this.t("use_international_format")), Promise.reject(new Error("phone invalid")));
                },
            },
        },
        Du = (0, Qr.A)(Tu, [
            [
                "render",
                function (e, t, n, i, a, r) {
                    const o = Yn("MarkdownContent");
                    return (
                        Xi(),
                        ia("div", null, [
                            ca(
                                "label",
                                { for: a.isCodeSent ? "one_time_code" : n.field.uuid, class: J(["label text-2xl", { "mb-2": !n.field.description }]) },
                                [
                                    n.field.title
                                        ? (Xi(), aa(o, { key: 0, string: n.field.title }, null, 8, ["string"]))
                                        : (Xi(),
                                          ia(
                                              Ki,
                                              { key: 1 },
                                              [
                                                  ha(te(n.showFieldNames && n.field.name ? n.field.name : r.t("verified_phone_number")) + " ", 1),
                                                  n.field.required ? ba("", !0) : (Xi(), ia(Ki, { key: 0 }, [ha(" (" + te(r.t("optional")) + ") ", 1)], 64)),
                                              ],
                                              64
                                          )),
                                ],
                                10,
                                wu
                            ),
                            n.field.description ? (Xi(), ia("div", xu, [ua(o, { string: n.field.description }, null, 8, ["string"])])) : ba("", !0),
                            ca("div", null, [
                                ku,
                                a.isCodeSent
                                    ? (Xi(),
                                      ia("div", Su, [
                                          ca(
                                              "input",
                                              {
                                                  id: "one_time_code",
                                                  class: "base-input !text-2xl w-full text-center",
                                                  name: "one_time_code",
                                                  type: "text",
                                                  autocomplete: "one-time-code",
                                                  placeholder: r.t("six_digits_code"),
                                                  required: "",
                                                  maxlength: "6",
                                                  autofocus: "",
                                                  inputmode: "decimal",
                                                  onInput: t[0] || (t[0] = (...e) => r.onInputCode && r.onInputCode(...e)),
                                              },
                                              null,
                                              40,
                                              Cu
                                          ),
                                          ca("div", Fu, [
                                              n.defaultValue ? ba("", !0) : (Xi(), ia("a", { key: 0, href: "#", class: "link", onClick: t[1] || (t[1] = xr((e) => (a.isCodeSent = !1), ["prevent"])) }, te(r.t("change_phone_number")), 1)),
                                              ca("a", { href: "#", class: "link", onClick: t[2] || (t[2] = xr((...e) => r.resendCode && r.resendCode(...e), ["prevent"])) }, te(a.isResendLoading ? r.t("sending") : r.t("resend_code")), 1),
                                          ]),
                                      ]))
                                    : ba("", !0),
                                yn(
                                    ca(
                                        "div",
                                        Iu,
                                        [
                                            ca("div", zu, [
                                                ca("div", Mu, te(a.selectedCountry.flag) + " +" + te(a.selectedCountry.dial), 1),
                                                ca(
                                                    "select",
                                                    {
                                                        class: "absolute top-0 bottom-0 right-0 left-0 opacity-0 w-full h-full cursor-pointer",
                                                        disabled: !!n.defaultValue,
                                                        onChange: t[3] || (t[3] = (e) => r.onCountrySelect(r.countries.find((t) => t.flag === e.target.value))),
                                                    },
                                                    [
                                                        (Xi(!0),
                                                        ia(
                                                            Ki,
                                                            null,
                                                            ei(r.countries, (e, t) => (Xi(), ia("option", { key: t, value: e.flag }, te(e.flag) + " " + te(e.name), 9, qu))),
                                                            128
                                                        )),
                                                    ],
                                                    40,
                                                    Pu
                                                ),
                                            ]),
                                            ca("input", { name: `values[${n.field.uuid}]`, value: r.fullInternationalPhoneValue, hidden: "" }, null, 8, ju),
                                            ca(
                                                "input",
                                                {
                                                    id: n.field.uuid,
                                                    ref: "phone",
                                                    value: a.phoneValue,
                                                    readonly: !!n.defaultValue,
                                                    class: "base-input !text-2xl !rounded-l-none !border-l-0 !outline-none w-full",
                                                    autocomplete: "tel",
                                                    type: "tel",
                                                    inputmode: "tel",
                                                    required: n.field.required,
                                                    placeholder: "234 567-8900",
                                                    onInput: t[4] || (t[4] = (...e) => r.onPhoneInput && r.onPhoneInput(...e)),
                                                    onFocus: t[5] || (t[5] = (t) => e.$emit("focus")),
                                                },
                                                null,
                                                40,
                                                Eu
                                            ),
                                        ],
                                        512
                                    ),
                                    [[Sr, !a.isCodeSent]]
                                ),
                            ]),
                        ])
                    );
                },
            ],
        ]),
        Ou = ["for"],
        Vu = { key: 1, dir: "auto", class: "mb-4 px-1" },
        Bu = ["value", "name"],
        Ru = { key: 0, class: "text-2xl mb-2" },
        $u = { key: 1 },
        Uu = { key: 0, disabled: "", class: "base-button w-full" },
        Lu = ["id", "disabled"],
        Nu = {
            name: "PaymentStep",
            components: {
                IconBrandStripe: uo("brand-stripe", 0, [
                    [
                        "path",
                        {
                            d:
                                "M11.453 8.056c0 -.623 .518 -.979 1.442 -.979c1.69 0 3.41 .343 4.605 .923l.5 -4c-.948 -.449 -2.82 -1 -5.5 -1c-1.895 0 -3.373 .087 -4.5 1c-1.172 .956 -2 2.33 -2 4c0 3.03 1.958 4.906 5 6c1.961 .69 3 .743 3 1.5c0 .735 -.851 1.5 -2 1.5c-1.423 0 -3.963 -.609 -5.5 -1.5l-.5 4c1.321 .734 3.474 1.5 6 1.5c2 0 3.957 -.468 5.084 -1.36c1.263 -.979 1.916 -2.268 1.916 -4.14c0 -3.096 -1.915 -4.547 -5 -5.637c-1.646 -.605 -2.544 -1.07 -2.544 -1.807z",
                            key: "svg-0",
                        },
                    ],
                ]),
                MarkdownContent: Fd,
                IconInnerShadowTop: ho,
                IconLoader: uo("loader", 0, [
                    ["path", { d: "M12 6l0 -3", key: "svg-0" }],
                    ["path", { d: "M16.25 7.75l2.15 -2.15", key: "svg-1" }],
                    ["path", { d: "M18 12l3 0", key: "svg-2" }],
                    ["path", { d: "M16.25 16.25l2.15 2.15", key: "svg-3" }],
                    ["path", { d: "M12 18l0 3", key: "svg-4" }],
                    ["path", { d: "M7.75 16.25l-2.15 2.15", key: "svg-5" }],
                    ["path", { d: "M6 12l-3 0", key: "svg-6" }],
                    ["path", { d: "M7.75 7.75l-2.15 -2.15", key: "svg-7" }],
                ]),
            },
            inject: ["baseUrl", "t"],
            props: { modelValue: { type: String, required: !1, default: "" }, field: { type: Object, required: !0 }, values: { type: Object, required: !0 }, submitterSlug: { type: String, required: !0 } },
            emits: ["focus", "submit", "update:model-value", "attached"],
            data: () => ({ isCreatingCheckout: !1, isMathLoaded: !1 }),
            computed: {
                queryParams: () => new URLSearchParams(window.location.search),
                sessionId() {
                    return this.queryParams.get("stripe_session_id");
                },
                defaultName() {
                    const { price: e, currency: t } = this.field.preferences || {},
                        n = new Intl.NumberFormat([], { style: "currency", currency: t });
                    return this.field.preferences?.formula ? (this.isMathLoaded ? this.t("pay") + " " + n.format(this.calculateFormula()) : "") : this.t("pay") + " " + n.format(e);
                },
            },
            async mounted() {
                if ((this.sessionId && this.$emit("submit"), this.sessionId || this.postCheckout({ checkStatus: !0 }), this.field.preferences?.formula)) {
                    const {
                        create: e,
                        evaluateDependencies: t,
                        addDependencies: n,
                        subtractDependencies: i,
                        divideDependencies: r,
                        multiplyDependencies: o,
                        powDependencies: s,
                        roundDependencies: l,
                        absDependencies: d,
                        sinDependencies: c,
                        tanDependencies: u,
                        cosDependencies: p,
                    } = await a.e(793).then(a.bind(a, 793));
                    (this.math = e({
                        evaluateDependencies: t,
                        addDependencies: n,
                        subtractDependencies: i,
                        divideDependencies: r,
                        multiplyDependencies: o,
                        powDependencies: s,
                        roundDependencies: l,
                        absDependencies: d,
                        sinDependencies: c,
                        tanDependencies: u,
                        cosDependencies: p,
                    })),
                        (this.isMathLoaded = !0);
                }
            },
            methods: {
                calculateFormula() {
                    const e = this.field.preferences.formula.replace(/{{(.*?)}}/g, (e, t) => this.values[t] || 0);
                    return this.math.evaluate(e.toLowerCase());
                },
                async submit() {
                    return this.sessionId
                        ? fetch(this.baseUrl + "/api/stripe_payments/" + this.sessionId, { method: "PUT", body: JSON.stringify({ submitter_slug: this.submitterSlug }), headers: { "Content-Type": "application/json" } }).then(async (e) => {
                              if (422 === e.status || 500 === e.status) {
                                  const t = await e.json();
                                  return alert(t.error || "Unexpected error"), Promise.reject(new Error(t.error));
                              }
                              const t = await e.json();
                              return window.history.replaceState({}, document.title, window.location.pathname), this.$emit("update:model-value", t.uuid), this.$emit("attached", t), e;
                          })
                        : Promise.resolve({});
                },
                postCheckout({ checkStatus: e } = {}) {
                    (this.isCreatingCheckout = !0),
                        fetch(this.baseUrl + "/api/stripe_payments", {
                            method: "POST",
                            body: JSON.stringify({ submitter_slug: this.submitterSlug, field_uuid: this.field.uuid, check_status: e, referer: document.location.href }),
                            headers: { "Content-Type": "application/json" },
                        })
                            .then(async (e) => {
                                if (422 === e.status || 500 === e.status) {
                                    const t = await e.json();
                                    return alert(t.message || "Unexpected error"), Promise.reject(new Error(t.message));
                                }
                                const { url: t } = await e.json(),
                                    n = document.createElement("a");
                                (n.href = t), t && n.click();
                            })
                            .finally(() => {
                                this.isCreatingCheckout = !1;
                            });
                },
            },
        },
        Wu = (0, Qr.A)(Nu, [
            [
                "render",
                function (e, t, n, i, a, r) {
                    const o = Yn("MarkdownContent"),
                        s = Yn("IconLoader"),
                        l = Yn("IconInnerShadowTop"),
                        d = Yn("IconBrandStripe");
                    return (
                        Xi(),
                        ia(
                            Ki,
                            null,
                            [
                                n.modelValue || r.sessionId
                                    ? ba("", !0)
                                    : (Xi(),
                                      ia(
                                          "label",
                                          { key: 0, for: n.field.uuid, class: "label text-2xl mb-2" },
                                          [n.field.title ? (Xi(), aa(o, { key: 0, string: n.field.title }, null, 8, ["string"])) : (Xi(), ia(Ki, { key: 1 }, [ha(te(n.field.name || r.defaultName), 1)], 64))],
                                          8,
                                          Ou
                                      )),
                                n.field.description ? (Xi(), ia("div", Vu, [ua(o, { string: n.field.description }, null, 8, ["string"])])) : ba("", !0),
                                ca("div", null, [
                                    ca("input", { type: "text", value: n.modelValue, hidden: "", name: `values[${n.field.uuid}]`, class: "hidden" }, null, 8, Bu),
                                    n.modelValue && !r.sessionId
                                        ? (Xi(), ia("div", Ru, te(r.t("already_paid")), 1))
                                        : (Xi(),
                                          ia("div", $u, [
                                              r.sessionId
                                                  ? (Xi(), ia("button", Uu, [ua(s, { width: "22", class: "animate-spin" }), ca("span", null, te(r.t("processing")) + "... ", 1)]))
                                                  : (Xi(),
                                                    ia(
                                                        "button",
                                                        {
                                                            key: 1,
                                                            id: n.field.uuid,
                                                            class: J(["btn bg-[#7B73FF] text-white hover:bg-[#0A2540] text-lg w-full", { disabled: a.isCreatingCheckout }]),
                                                            disabled: a.isCreatingCheckout,
                                                            onClick: t[0] || (t[0] = xr((...e) => r.postCheckout && r.postCheckout(...e), ["prevent"])),
                                                        },
                                                        [a.isCreatingCheckout ? (Xi(), aa(l, { key: 0, width: "22", class: "animate-spin" })) : (Xi(), aa(d, { key: 1, width: "22" })), ca("span", null, te(r.t("pay_with_strip")), 1)],
                                                        10,
                                                        Lu
                                                    )),
                                          ])),
                                ]),
                            ],
                            64
                        )
                    );
                },
            ],
        ]),
        Gu = ["for"],
        Ku = { key: 1, class: "py-1" },
        Hu = { key: 2, dir: "auto", class: "mb-3 px-1" },
        Yu = { class: "items-center flex" },
        Zu = ["id", "maxlength", "required", "pattern", "placeholder", "name"],
        Ju = ["id", "placeholder", "required", "name"],
        Qu = ["data-tip"],
        Xu = {
            name: "TextStep",
            components: {
                IconAlignBoxLeftTop: uo("align-box-left-top", 0, [
                    ["path", { d: "M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z", key: "svg-0" }],
                    ["path", { d: "M9 13h-2", key: "svg-1" }],
                    ["path", { d: "M13 10h-6", key: "svg-2" }],
                    ["path", { d: "M11 7h-4", key: "svg-3" }],
                ]),
                MarkdownContent: Fd,
                AppearsOn: Ic,
            },
            inject: ["t"],
            props: { field: { type: Object, required: !0 }, showFieldNames: { type: Boolean, required: !1, default: !0 }, modelValue: { type: String, required: !1, default: "" } },
            emits: ["update:model-value", "focus"],
            data: () => ({ isTextArea: !1 }),
            computed: {
                cellsMaxLegth() {
                    if ("cells" === this.field.type) {
                        const e = this.field.areas?.[0];
                        return e ? parseInt(e.w / e.cell_w) + 1 : null;
                    }
                    return null;
                },
                text: {
                    set(e) {
                        this.$emit("update:model-value", e);
                    },
                    get() {
                        return this.modelValue;
                    },
                },
            },
            mounted() {
                this.modelValue &&
                    ((this.isTextArea = this.modelValue.toString().includes("\n")),
                    this.isTextArea &&
                        this.$nextTick(() => {
                            this.resizeTextarea();
                        }));
            },
            methods: {
                resizeTextarea() {
                    const e = this.$refs.textarea;
                    (e.style.height = "auto"), (e.style.height = Math.min(250, e.scrollHeight) + "px");
                },
                toggleTextArea() {
                    (this.isTextArea = !0),
                        this.$nextTick(() => {
                            this.$refs.textarea.focus(), this.$refs.textarea.setSelectionRange(this.$refs.textarea.value.length, this.$refs.textarea.value.length), this.resizeTextarea();
                        });
                },
            },
        },
        ep = (0, Qr.A)(Xu, [
            [
                "render",
                function (e, t, n, i, a, r) {
                    const o = Yn("MarkdownContent"),
                        s = Yn("AppearsOn"),
                        l = Yn("IconAlignBoxLeftTop");
                    return (
                        Xi(),
                        ia(
                            Ki,
                            null,
                            [
                                n.showFieldNames && (n.field.name || n.field.title)
                                    ? (Xi(),
                                      ia(
                                          "label",
                                          { key: 0, for: n.field.uuid, dir: "auto", class: J(["label text-2xl", { "mb-2": !n.field.description }]) },
                                          [
                                              n.field.title ? (Xi(), aa(o, { key: 0, string: n.field.title }, null, 8, ["string"])) : (Xi(), ia(Ki, { key: 1 }, [ha(te(n.field.name), 1)], 64)),
                                              n.field.required ? ba("", !0) : (Xi(), ia(Ki, { key: 2 }, [ha(" (" + te(r.t("optional")) + ") ", 1)], 64)),
                                          ],
                                          10,
                                          Gu
                                      ))
                                    : (Xi(), ia("div", Ku)),
                                n.field.description ? (Xi(), ia("div", Hu, [ua(o, { string: n.field.description }, null, 8, ["string"])])) : ba("", !0),
                                ua(s, { field: n.field }, null, 8, ["field"]),
                                ca("div", Yu, [
                                    a.isTextArea
                                        ? ba("", !0)
                                        : yn(
                                              (Xi(),
                                              ia(
                                                  "input",
                                                  {
                                                      key: 0,
                                                      id: n.field.uuid,
                                                      "onUpdate:modelValue": t[0] || (t[0] = (e) => (r.text = e)),
                                                      maxlength: r.cellsMaxLegth,
                                                      dir: "auto",
                                                      class: J(["base-input !text-2xl w-full", { "!pr-11 -mr-10": !n.field.validation?.pattern }]),
                                                      required: n.field.required,
                                                      pattern: n.field.validation?.pattern,
                                                      placeholder: `${r.t("type_here_")}${n.field.required ? "" : ` (${r.t("optional")})`}`,
                                                      type: "text",
                                                      name: `values[${n.field.uuid}]`,
                                                      onInvalid: t[1] || (t[1] = (e) => (n.field.validation?.message ? e.target.setCustomValidity(n.field.validation.message) : "")),
                                                      onInput: t[2] || (t[2] = (e) => (n.field.validation?.message ? e.target.setCustomValidity("") : "")),
                                                      onFocus: t[3] || (t[3] = (t) => e.$emit("focus")),
                                                  },
                                                  null,
                                                  42,
                                                  Zu
                                              )),
                                              [[vr, r.text]]
                                          ),
                                    a.isTextArea
                                        ? yn(
                                              (Xi(),
                                              ia(
                                                  "textarea",
                                                  {
                                                      key: 1,
                                                      id: n.field.uuid,
                                                      ref: "textarea",
                                                      "onUpdate:modelValue": t[4] || (t[4] = (e) => (r.text = e)),
                                                      dir: "auto",
                                                      class: "base-textarea !text-2xl w-full",
                                                      placeholder: `${r.t("type_here_")}${n.field.required ? "" : ` (${r.t("optional")})`}`,
                                                      required: n.field.required,
                                                      name: `values[${n.field.uuid}]`,
                                                      onInput: t[5] || (t[5] = (...e) => r.resizeTextarea && r.resizeTextarea(...e)),
                                                      onFocus: t[6] || (t[6] = (t) => e.$emit("focus")),
                                                  },
                                                  null,
                                                  40,
                                                  Ju
                                              )),
                                              [[vr, r.text]]
                                          )
                                        : ba("", !0),
                                    a.isTextArea || "cells" === n.field.type || n.field.validation?.pattern
                                        ? ba("", !0)
                                        : (Xi(),
                                          ia(
                                              "div",
                                              { key: 2, class: "tooltip", "data-tip": r.t("toggle_multiline_text") },
                                              [ca("a", { href: "#", class: "btn btn-ghost btn-circle btn-sm", onClick: t[7] || (t[7] = xr((...e) => r.toggleTextArea && r.toggleTextArea(...e), ["prevent"])) }, [ua(l)])],
                                              8,
                                              Qu
                                          )),
                                ]),
                            ],
                            64
                        )
                    );
                },
            ],
        ]),
        tp = ["for"],
        np = { key: 1, class: "py-1" },
        ip = { key: 2, dir: "auto", class: "mb-3 px-1" },
        ap = { class: "items-center flex" },
        rp = ca("input", { type: "hidden", name: "cast_number", value: "true" }, null, -1),
        op = ["id", "required", "placeholder", "name"],
        sp = {
            name: "TextStep",
            components: { AppearsOn: Ic, MarkdownContent: Fd },
            inject: ["t"],
            props: { field: { type: Object, required: !0 }, showFieldNames: { type: Boolean, required: !1, default: !0 }, modelValue: { type: [String, Number], required: !1, default: "" } },
            emits: ["update:model-value", "focus"],
            computed: {
                number: {
                    set(e) {
                        this.$emit("update:model-value", e);
                    },
                    get() {
                        return this.modelValue;
                    },
                },
            },
        },
        lp = (0, Qr.A)(sp, [
            [
                "render",
                function (e, t, n, i, a, r) {
                    const o = Yn("MarkdownContent"),
                        s = Yn("AppearsOn");
                    return (
                        Xi(),
                        ia(
                            Ki,
                            null,
                            [
                                n.showFieldNames && (n.field.name || n.field.title)
                                    ? (Xi(),
                                      ia(
                                          "label",
                                          { key: 0, for: n.field.uuid, dir: "auto", class: J(["label text-2xl", { "mb-2": !n.field.description }]) },
                                          [
                                              n.field.title ? (Xi(), aa(o, { key: 0, string: n.field.title }, null, 8, ["string"])) : (Xi(), ia(Ki, { key: 1 }, [ha(te(n.field.name), 1)], 64)),
                                              n.field.required ? ba("", !0) : (Xi(), ia(Ki, { key: 2 }, [ha(" (" + te(r.t("optional")) + ") ", 1)], 64)),
                                          ],
                                          10,
                                          tp
                                      ))
                                    : (Xi(), ia("div", np)),
                                n.field.description ? (Xi(), ia("div", ip, [ua(o, { string: n.field.description }, null, 8, ["string"])])) : ba("", !0),
                                ua(s, { field: n.field }, null, 8, ["field"]),
                                ca("div", ap, [
                                    rp,
                                    yn(
                                        ca(
                                            "input",
                                            {
                                                id: n.field.uuid,
                                                "onUpdate:modelValue": t[0] || (t[0] = (e) => (r.number = e)),
                                                type: "number",
                                                class: "base-input !text-2xl w-full",
                                                step: "any",
                                                required: n.field.required,
                                                placeholder: `${r.t("type_here_")}${n.field.required ? "" : ` (${r.t("optional")})`}`,
                                                name: `values[${n.field.uuid}]`,
                                                onFocus: t[1] || (t[1] = (t) => e.$emit("focus")),
                                            },
                                            null,
                                            40,
                                            op
                                        ),
                                        [[vr, r.number]]
                                    ),
                                ]),
                            ],
                            64
                        )
                    );
                },
            ],
        ]),
        dp = { dir: "auto" },
        cp = ["for"],
        up = { key: 0, class: "mb-3 px-1", dir: "auto" },
        pp = { class: "text-center" },
        hp = ["required", "name"],
        mp = {
            name: "DateStep",
            components: {
                IconCalendarCheck: uo("calendar-check", 0, [
                    ["path", { d: "M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6", key: "svg-0" }],
                    ["path", { d: "M16 3v4", key: "svg-1" }],
                    ["path", { d: "M8 3v4", key: "svg-2" }],
                    ["path", { d: "M4 11h16", key: "svg-3" }],
                    ["path", { d: "M15 19l2 2l4 -4", key: "svg-4" }],
                ]),
                MarkdownContent: Fd,
                AppearsOn: Ic,
            },
            inject: ["t"],
            props: { field: { type: Object, required: !0 }, showFieldNames: { type: Boolean, required: !1, default: !0 }, modelValue: { type: String, required: !1, default: "" } },
            emits: ["update:model-value", "focus", "submit"],
            computed: {
                value: {
                    set(e) {
                        this.$emit("update:model-value", e);
                    },
                    get() {
                        return this.modelValue;
                    },
                },
            },
            methods: {
                onEnter(e) {
                    this.modelValue && (e.preventDefault(), this.$emit("submit"));
                },
                onPaste(e) {
                    e.preventDefault();
                    let t = e.clipboardData.getData("text").trim();
                    t.match(/^\d{2}\.\d{2}\.\d{4}$/) && (t = t.split(".").reverse().join("-"));
                    const n = new Date(t);
                    if (!isNaN(n)) {
                        const e = this.$refs.input;
                        (e.valueAsDate = new Date(n.getTime() - 6e4 * n.getTimezoneOffset())), e.dispatchEvent(new Event("input", { bubbles: !0 }));
                    }
                },
                setCurrentDate() {
                    const e = this.$refs.input;
                    (e.valueAsDate = new Date(new Date().getTime() - 6e4 * new Date().getTimezoneOffset())), e.dispatchEvent(new Event("input", { bubbles: !0 }));
                },
            },
        },
        bp = (0, Qr.A)(mp, [
            [
                "render",
                function (e, t, n, i, a, r) {
                    const o = Yn("MarkdownContent"),
                        s = Yn("IconCalendarCheck"),
                        l = Yn("AppearsOn");
                    return (
                        Xi(),
                        ia("div", dp, [
                            ca(
                                "div",
                                { class: J(["flex justify-between items-center w-full", { "mb-2": !n.field.description }]) },
                                [
                                    ca(
                                        "label",
                                        { for: n.field.uuid, class: "label text-2xl" },
                                        [
                                            n.field.title
                                                ? (Xi(), aa(o, { key: 0, string: n.field.title }, null, 8, ["string"]))
                                                : (Xi(),
                                                  ia(
                                                      Ki,
                                                      { key: 1 },
                                                      [
                                                          ha(te(n.field.name && n.showFieldNames ? n.field.name : r.t("date")) + " ", 1),
                                                          n.field.required ? ba("", !0) : (Xi(), ia(Ki, { key: 0 }, [ha(" (" + te(r.t("optional")) + ") ", 1)], 64)),
                                                      ],
                                                      64
                                                  )),
                                        ],
                                        8,
                                        cp
                                    ),
                                    ca("button", { class: "btn btn-outline btn-sm !normal-case font-normal", onClick: t[0] || (t[0] = xr((t) => [r.setCurrentDate(), e.$emit("focus")], ["prevent"])) }, [
                                        ua(s, { width: 16 }),
                                        ha(" " + te(r.t("set_today")), 1),
                                    ]),
                                ],
                                2
                            ),
                            n.field.description ? (Xi(), ia("div", up, [ua(o, { string: n.field.description }, null, 8, ["string"])])) : ba("", !0),
                            ua(l, { field: n.field }, null, 8, ["field"]),
                            ca("div", pp, [
                                yn(
                                    ca(
                                        "input",
                                        {
                                            ref: "input",
                                            "onUpdate:modelValue": t[1] || (t[1] = (e) => (r.value = e)),
                                            class: "base-input !text-2xl text-center w-full",
                                            required: n.field.required,
                                            type: "date",
                                            name: `values[${n.field.uuid}]`,
                                            onKeydown:
                                                t[2] ||
                                                (t[2] =
                                                    ((d = (...e) => r.onEnter && r.onEnter(...e)),
                                                    (c = ["enter"]),
                                                    (e) => {
                                                        if (!("key" in e)) return;
                                                        const t = D(e.key);
                                                        return c.some((e) => e === t || kr[e] === t) ? d(e) : void 0;
                                                    })),
                                            onFocus: t[3] || (t[3] = (t) => e.$emit("focus")),
                                            onPaste: t[4] || (t[4] = (...e) => r.onPaste && r.onPaste(...e)),
                                        },
                                        null,
                                        40,
                                        hp
                                    ),
                                    [[vr, r.value]]
                                ),
                            ]),
                        ])
                    );
                    var d, c;
                },
            ],
        ]),
        gp = ["value"],
        fp = ["value"],
        vp = ["for"],
        yp = ["id", "placeholder"],
        _p = { class: "mt-6 md:mt-8" },
        wp = ["disabled"],
        xp = { class: "flex" },
        kp = { key: 1, class: "w-6 flex justify-start mr-1" },
        Sp = [ca("span", null, "...", -1)],
        Cp = {
            name: "InviteForm",
            components: { IconInnerShadowTop: ho },
            inject: ["t"],
            props: { submitters: { type: Array, required: !0 }, url: { type: String, required: !0 }, authenticityToken: { type: String, required: !0 }, submitterSlug: { type: String, required: !0 } },
            emits: ["success"],
            data: () => ({ isSubmitting: !1 }),
            methods: {
                submit() {
                    return (
                        (this.isSubmitting = !0),
                        fetch(this.url, { method: "POST", body: new FormData(this.$refs.form) })
                            .then((e) => {
                                200 === e.status && this.$emit("success");
                            })
                            .finally(() => {
                                this.isSubmitting = !1;
                            })
                    );
                },
            },
        },
        Fp = (0, Qr.A)(Cp, [
            [
                "render",
                function (e, t, n, i, a, r) {
                    const o = Yn("IconInnerShadowTop");
                    return (
                        Xi(),
                        ia(
                            "form",
                            { ref: "form", action: "post", method: "post", class: "mx-auto", onSubmit: t[0] || (t[0] = xr((...e) => r.submit && r.submit(...e), ["prevent"])) },
                            [
                                ca("input", { type: "hidden", name: "authenticity_token", value: n.authenticityToken }, null, 8, gp),
                                (Xi(!0),
                                ia(
                                    Ki,
                                    null,
                                    ei(
                                        n.submitters,
                                        (e, t) => (
                                            Xi(),
                                            ia(
                                                "div",
                                                { key: e.uuid, class: J({ "mt-4": 0 !== t }) },
                                                [
                                                    ca("input", { value: e.uuid, hidden: "", name: "submission[submitters][][uuid]" }, null, 8, fp),
                                                    ca("label", { for: e.uuid, dir: "auto", class: "label text-2xl" }, te(r.t("invite")) + " " + te(e.name), 9, vp),
                                                    ca(
                                                        "input",
                                                        { id: e.uuid, dir: "auto", class: "base-input !text-2xl w-full", placeholder: r.t("email"), type: "email", required: "", autofocus: "true", name: "submission[submitters][][email]" },
                                                        null,
                                                        8,
                                                        yp
                                                    ),
                                                ],
                                                2
                                            )
                                        )
                                    ),
                                    128
                                )),
                                ca("div", _p, [
                                    ca(
                                        "button",
                                        { type: "submit", class: "base-button w-full flex justify-center", disabled: a.isSubmitting },
                                        [
                                            ca("span", xp, [
                                                a.isSubmitting ? (Xi(), aa(o, { key: 0, class: "mr-1 animate-spin" })) : ba("", !0),
                                                ca("span", null, te(r.t("submit")), 1),
                                                a.isSubmitting ? (Xi(), ia("span", kp, Sp)) : ba("", !0),
                                            ]),
                                        ],
                                        8,
                                        wp
                                    ),
                                ]),
                            ],
                            544
                        )
                    );
                },
            ],
        ]),
        Ip = { id: "form_completed", class: "mx-auto max-w-md flex flex-col", dir: "auto" },
        zp = { class: "font-medium text-2xl flex items-center space-x-1.5 mx-auto" },
        Mp = { key: 0, class: "mt-2" },
        Pp = { class: "space-y-3 mt-5" },
        qp = ["href"],
        jp = ["disabled"],
        Ep = ["disabled"],
        Ap = { key: 3, target: "_blank", href: "https://github.com/docusealco/docuseal", class: "white-button flex items-center space-x-1 w-full" },
        Tp = ca("span", null, " Star on Github ", -1),
        Dp = { key: 4, href: "https://docuseal.com/sign_up", class: "white-button flex items-center space-x-1 w-full" },
        Op = { key: 1, class: "text-center mt-4" },
        Vp = ca("a", { href: "https://www.docuseal.com/start", target: "_blank", class: "underline" }, "DocuSeal", -1),
        Bp = {
            name: "FormCompleted",
            components: {
                MarkdownContent: Fd,
                IconCircleCheck: uo("circle-check", 0, [
                    ["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }],
                    ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }],
                ]),
                IconInnerShadowTop: ho,
                IconBrandGithub: uo("brand-github", 0, [
                    [
                        "path",
                        {
                            d:
                                "M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5",
                            key: "svg-0",
                        },
                    ],
                ]),
                IconMail: Oo,
                IconLogin: uo("login", 0, [
                    ["path", { d: "M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2", key: "svg-0" }],
                    ["path", { d: "M21 12h-13l3 -3", key: "svg-1" }],
                    ["path", { d: "M11 15l-3 -3", key: "svg-2" }],
                ]),
                IconDownload: uo("download", 0, [
                    ["path", { d: "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2", key: "svg-0" }],
                    ["path", { d: "M7 11l5 5l5 -5", key: "svg-1" }],
                    ["path", { d: "M12 4l0 12", key: "svg-2" }],
                ]),
            },
            inject: ["baseUrl", "t"],
            props: {
                submitterSlug: { type: String, required: !0 },
                isDemo: { type: Boolean, required: !1, default: !1 },
                attribution: { type: Boolean, required: !1, default: !0 },
                hasSignatureFields: { type: Boolean, required: !1, default: !1 },
                hasMultipleDocuments: { type: Boolean, required: !1, default: !1 },
                withDownloadButton: { type: Boolean, required: !1, default: !0 },
                withSendCopyButton: { type: Boolean, required: !1, default: !0 },
                withConfetti: { type: Boolean, required: !1, default: !1 },
                canSendEmail: { type: Boolean, required: !1, default: !1 },
                completedButton: { type: Object, required: !1, default: () => ({}) },
                completedMessage: { type: Object, required: !1, default: () => ({}) },
            },
            data: () => ({ isSendingCopy: !1, isDownloading: !1 }),
            computed: { isWebView: () => /webview|wv|ip((?!.*Safari)|(?=.*like Safari))/i.test(window.navigator.userAgent) },
            async mounted() {
                if (this.withConfetti) {
                    const { default: e } = await a.e(685).then(a.bind(a, 685));
                    e({ particleCount: 50, startVelocity: 30, spread: 140 });
                }
                window.decline_button && window.decline_button.setAttribute("disabled", "true");
            },
            methods: {
                sendCopyToEmail() {
                    (this.isSendingCopy = !0),
                        fetch(this.baseUrl + `/send_submission_email.json?submitter_slug=${this.submitterSlug}`, { method: "POST" })
                            .then(() => {
                                alert(this.t("email_has_been_sent"));
                            })
                            .finally(() => {
                                this.isSendingCopy = !1;
                            });
                },
                download() {
                    (this.isDownloading = !0),
                        fetch(this.baseUrl + `/submitters/${this.submitterSlug}/download`).then(async (e) => {
                            if (e.ok) {
                                const t = await e.json();
                                /iPhone|iPad|iPod/i.test(navigator.userAgent) && t.length > 1 ? this.downloadSafariIos(t) : this.downloadUrls(t);
                            } else alert(this.t("failed_to_download_files"));
                        });
                },
                downloadUrls(e) {
                    e.map((e) => () =>
                        fetch(e).then(async (t) => {
                            const n = URL.createObjectURL(await t.blob()),
                                i = document.createElement("a");
                            (i.href = n), i.setAttribute("download", decodeURI(e.split("/").pop())), i.click(), URL.revokeObjectURL(n);
                        })
                    )
                        .reduce((e, t) => e.then(() => t()), Promise.resolve())
                        .finally(() => {
                            this.isDownloading = !1;
                        });
                },
                sanitizeHref(e) {
                    if (e && e.trim().match(/^((?:https?:\/\/)|\/)/)) return e.replace(/javascript:/g, "");
                },
                downloadSafariIos(e) {
                    const t = e.map((e) =>
                        fetch(e).then(async (t) => {
                            const n = await t.blob(),
                                i = URL.createObjectURL(n.slice(0, n.size, "application/octet-stream")),
                                a = document.createElement("a");
                            return (a.href = i), a.setAttribute("download", decodeURI(e.split("/").pop())), a;
                        })
                    );
                    Promise.all(t)
                        .then((e) => {
                            e.forEach((e, t) => {
                                setTimeout(() => {
                                    e.click(), URL.revokeObjectURL(e.href);
                                }, 50 * t);
                            });
                        })
                        .finally(() => {
                            this.isDownloading = !1;
                        });
                },
            },
        },
        Rp = (0, Qr.A)(Bp, [
            [
                "render",
                function (e, t, n, i, a, r) {
                    const o = Yn("IconCircleCheck"),
                        s = Yn("MarkdownContent"),
                        l = Yn("IconInnerShadowTop"),
                        d = Yn("IconMail"),
                        c = Yn("IconDownload"),
                        u = Yn("IconBrandGithub"),
                        p = Yn("IconLogin");
                    return (
                        Xi(),
                        ia("div", Ip, [
                            ca("div", zp, [
                                ua(o, { class: "inline text-green-600", width: 30, height: 30 }),
                                ca("span", null, te(n.completedMessage.title || (n.hasSignatureFields ? (n.hasMultipleDocuments ? r.t("documents_have_been_signed") : r.t("document_has_been_signed")) : r.t("form_has_been_completed"))), 1),
                            ]),
                            n.completedMessage.body ? (Xi(), ia("div", Mp, [ua(s, { string: n.completedMessage.body }, null, 8, ["string"])])) : ba("", !0),
                            ca("div", Pp, [
                                n.completedButton.url
                                    ? (Xi(),
                                      ia(
                                          "a",
                                          { key: 0, href: r.sanitizeHref(n.completedButton.url), rel: "noopener noreferrer nofollow", class: "white-button flex items-center w-full" },
                                          [ca("span", null, te(n.completedButton.title || "Back to Website"), 1)],
                                          8,
                                          qp
                                      ))
                                    : ba("", !0),
                                n.canSendEmail && !n.isDemo && n.withSendCopyButton
                                    ? (Xi(),
                                      ia(
                                          "button",
                                          {
                                              key: 1,
                                              class: "white-button !h-auto flex items-center space-x-1 w-full",
                                              disabled: a.isSendingCopy,
                                              onClick: t[0] || (t[0] = xr((...e) => r.sendCopyToEmail && r.sendCopyToEmail(...e), ["prevent"])),
                                          },
                                          [a.isSendingCopy ? (Xi(), aa(l, { key: 0, class: "animate-spin" })) : (Xi(), aa(d, { key: 1 })), ca("span", null, te(r.t("send_copy_via_email")), 1)],
                                          8,
                                          jp
                                      ))
                                    : ba("", !0),
                                !r.isWebView && n.withDownloadButton
                                    ? (Xi(),
                                      ia(
                                          "button",
                                          { key: 2, class: "base-button flex items-center space-x-1 w-full", disabled: a.isDownloading, onClick: t[1] || (t[1] = xr((...e) => r.download && r.download(...e), ["prevent"])) },
                                          [a.isDownloading ? (Xi(), aa(l, { key: 0, class: "animate-spin" })) : (Xi(), aa(c, { key: 1 })), ca("span", null, te(r.t("download")), 1)],
                                          8,
                                          Ep
                                      ))
                                    : ba("", !0),
                                n.isDemo ? (Xi(), ia("a", Ap, [ua(u), Tp])) : ba("", !0),
                                n.isDemo ? (Xi(), ia("a", Dp, [ua(p), ca("span", null, te(r.t("create_a_free_account")), 1)])) : ba("", !0),
                            ]),
                            n.attribution ? (Xi(), ia("div", Op, [ha(te(r.t("powered_by")) + " ", 1), Vp, ha(" - " + te(r.t("open_source_documents_software")), 1)])) : ba("", !0),
                        ])
                    );
                },
            ],
        ]);
    var $p = uo("arrows-diagonal", 0, [
        ["path", { d: "M16 4l4 0l0 4", key: "svg-0" }],
        ["path", { d: "M14 10l6 -6", key: "svg-1" }],
        ["path", { d: "M8 20l-4 0l0 -4", key: "svg-2" }],
        ["path", { d: "M4 20l6 -6", key: "svg-3" }],
    ]);
    const Up = {
            en: {
                complete: "Completo",
                sign_and_complete: "Assinar e Completar",
                text: "Texto",
                by_clicking_you_agree_to_the: 'Ao clicar em "{button}", você concorda com a',
                electronic_signature_disclosure: "Divulgação de Assinatura Eletrônica",
                esignature_disclosure: "Divulgação de eAssinatura",
                signature: "Assinatura",
                initials: "Inicial",
                drawn_signature_on_a_touchscreen_device: "Assinatura desenhada em um dispositivo com tela tátil",
                approved: "Aprovado",
                reviewed: "Revisado",
                other: "Outro",
                authored_by_me: "Escrito por mim",
                invite: "Convidar",
                email: "Email",
                approved_by: "Aprovado por",
                reviewed_by: "Revisado por",
                authored_by: "Escrito por",
                select_a_reason: "Selecione uma razão",
                scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature: "Escaneie o código QR com a aplicação de câmera para abrir o formulário no celular e desenhar sua assinatura",
                date: "Data",
                number: "Número",
                value_is_invalid: "Valor inválido",
                verification_code_is_invalid: "Código de verificação inválido",
                already_paid: "Já pago",
                image: "Imagem",
                pay: "Pagar",
                take_photo: "Tirar foto",
                number_phone_is_invalid: "{number} telefone é inválido",
                file: "Arquivo",
                digitally_signed_by: "Assinado digitalmente por",
                reason: "Razão",
                select: "Selecionar",
                checkbox: "Caixa de seleção",
                multiple: "Múltiplo",
                radio: "Rádio",
                cells: "Células",
                stamp: "Selo",
                minimize: "Minimizar",
                payment: "Pagamento",
                phone: "Telefone",
                start_now: "Começar agora",
                continue: "Continuar",
                sign_now: "Assinar agora",
                type_here_: "Escreva aqui...",
                optional: "opcional",
                option: "Opção",
                appears_on: "Aparece em",
                page: "Página",
                select_your_option: "Selecione sua opção",
                complete_hightlighted_checkboxes_and_click: "Complete as caixas de seleção destacadas e clique",
                submit: "enviar",
                next: "próximo",
                click_to_upload: "Clique para enviar",
                or_drag_and_drop_files: "ou arraste e solte arquivos",
                send_copy_via_email: "Enviar cópia por email",
                download: "Baixar",
                clear: "Limpar",
                redraw: "Redesenhar",
                draw_initials: "Desenhar inicial",
                type_signature_here: "Escreva a assinatura aqui",
                type_initial_here: "Escreva as iniciales aqui",
                form_has_been_completed: "Formulário foi completado!",
                document_has_been_signed: "Documento foi assinado!",
                documents_have_been_signed: "Documentos foram assinados!",
                create_a_free_account: "Criar uma conta gratuita",
                powered_by: "Desenvolvido por",
                please_check_the_box_to_continue: "Por favor, marque a caixa para continuar",
                open_source_documents_software: "software de documentos de código aberto",
                verified_phone_number: "Verificar número de telefone",
                use_international_format: "Usar formato internacional: +1xxx",
                six_digits_code: "Código de 6 dígitos",
                change_phone_number: "Alterar número de telefone",
                sending: "Enviando...",
                resend_code: "Reenviar código",
                verification_code_has_been_resent: "Código de verificação foi reenviado via SMS",
                please_fill_all_required_fields: "Por favor, preencha todos os campos obrigatórios",
                set_today: "Definir hoje",
                toggle_multiline_text: "Alternar texto multilinha",
                draw_signature: "Desenhar assinatura",
                type_initial: "Escrever inicial",
                draw: "Desenhar",
                type: "Escrever",
                type_text: "Escrever texto",
                email_has_been_sent: "Email foi enviado",
                processing: "Processando",
                pay_with_strip: "Pagar com Stripe",
                reupload: "Reenviar",
                upload: "Enviar",
                files: "Arquivos",
            },
            es: {
                complete: "Completar",
                sign_and_complete: "Firmar y Completar",
                invite: "Invitar",
                email: "Correo electrónico",
                approved: "Aprobado",
                reviewed: "Revisado",
                other: "Otro",
                authored_by_me: "Escrito por mí",
                approved_by: "Aprobado por",
                reviewed_by: "Revisado por",
                authored_by: "Escrito por",
                select_a_reason: "Selecciona una razón",
                value_is_invalid: "El valor no es válido",
                verification_code_is_invalid: "El código de verificación no es válido",
                drawn_signature_on_a_touchscreen_device: "Firma dibujada en un dispositivo con pantalla táctil",
                scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature: "Escanea el código QR con la aplicación de la cámara para abrir el formulario en el móvil y dibujar tu firma",
                by_clicking_you_agree_to_the: 'Al hacer clic en "{button}", usted acepta el',
                electronic_signature_disclosure: "Divulgación de Firma Electrónica",
                esignature_disclosure: "Divulgación de eFirma",
                already_paid: "Ya pagado",
                minimize: "Minimizar",
                text: "Texto",
                signature: "Firma",
                pay: "Pagar",
                digitally_signed_by: "Firmado digitalmente por",
                reason: "Razón",
                initials: "Iniciales",
                date: "Fecha",
                number: "Número",
                image: "Imagen",
                file: "Archivo",
                select: "Seleccionar",
                checkbox: "Casilla",
                number_phone_is_invalid: "{number} teléfono es inválido",
                multiple: "Múltiple",
                radio: "Radio",
                cells: "Celdas",
                stamp: "Sello",
                payment: "Pago",
                phone: "Teléfono",
                take_photo: "Tomar foto",
                start_now: "Comenzar ahora",
                continue: "Continuar",
                sign_now: "Firmar ahora",
                type_here_: "Escribe aquí...",
                optional: "opcional",
                appears_on: "Aparece en",
                page: "Página",
                select_your_option: "Selecciona tu opción",
                complete_hightlighted_checkboxes_and_click: "Completa las casillas resaltadas y haz clic",
                submit: "enviar",
                next: "siguiente",
                click_to_upload: "Haz clic para cargar",
                or_drag_and_drop_files: "o arrastra y suelta archivos",
                send_copy_via_email: "Enviar copia por correo electrónico",
                download: "Descargar",
                clear: "Borrar",
                redraw: "Redibujar",
                draw_initials: "Dibujar iniciales",
                type_signature_here: "Escribe la firma aquí",
                type_initial_here: "Escribe las iniciales aquí",
                form_has_been_completed: "¡El formulario ha sido completado!",
                document_has_been_signed: "¡El documento ha sido firmado!",
                documents_have_been_signed: "¡Los documentos han sido firmados!",
                create_a_free_account: "Crear una Cuenta Gratuita",
                powered_by: "Desarrollado por",
                please_check_the_box_to_continue: "Por favor marque la casilla para continuar",
                open_source_documents_software: "software de documentos de código abierto",
                verified_phone_number: "Verificar número de teléfono",
                use_international_format: "Usar formato internacional: +1xxx",
                six_digits_code: "Código de 6 dígitos",
                change_phone_number: "Cambiar número de teléfono",
                sending: "Enviando...",
                resend_code: "Reenviar código",
                verification_code_has_been_resent: "El código de verificación ha sido reenviado por SMS",
                please_fill_all_required_fields: "Por favor, complete todos los campos obligatorios",
                set_today: "Establecer Hoy",
                toggle_multiline_text: "Alternar Texto Multilínea",
                draw_signature: "Dibujar firma",
                type_initial: "Escribir iniciales",
                draw: "Dibujar",
                type: "Escribir",
                type_text: "Escribir texto",
                email_has_been_sent: "El correo electrónico ha sido enviado",
                processing: "Procesando",
                pay_with_strip: "Pagar con Stripe",
                reupload: "Volver a subir",
                upload: "Subir",
                files: "Archivos",
            },
            it: {
                complete: "Completa",
                sign_and_complete: "Firma e Completa",
                invite: "Invita",
                email: "Email",
                approved: "Approvato",
                reviewed: "Revisionato",
                other: "Altro",
                authored_by_me: "Creato da me",
                approved_by: "Approvato da",
                reviewed_by: "Revisionato da",
                authored_by: "Creato da",
                select_a_reason: "Seleziona una ragione",
                value_is_invalid: "Il valore non è valido",
                verification_code_is_invalid: "Il codice di verifica non è valido",
                drawn_signature_on_a_touchscreen_device: "Firma disegnata su un dispositivo con schermo tattile",
                scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature: "Scansiona il codice QR con l'app della fotocamera per aprire il modulo sul cellulare e disegnare la tua firma",
                by_clicking_you_agree_to_the: 'Cliccando su "{button}", accetti il',
                electronic_signature_disclosure: "Divulgazione della Firma Elettronica",
                esignature_disclosure: "Divulgazione della eFirma",
                minimize: "Minimizza",
                already_paid: "Pagato",
                text: "Testo",
                signature: "Firma",
                digitally_signed_by: "Firmato digitalmente da",
                reason: "Motivo",
                initials: "Iniziali",
                date: "Data",
                number: "Numero",
                image: "Immagine",
                pay: "Pagamento",
                file: "File",
                select: "Seleziona",
                checkbox: "Checkbox",
                multiple: "Multiplo",
                radio: "Radio",
                cells: "Celle",
                stamp: "Timbro",
                payment: "Pagamento",
                number_phone_is_invalid: "{number} telefono non è valido",
                phone: "Telefono",
                start_now: "Inizia ora",
                continue: "Continua",
                sign_now: "Firma ora",
                type_here_: "Digita qui...",
                optional: "opzionale",
                appears_on: "Compare su",
                page: "Pagina",
                take_photo: "Scattare una foto",
                select_your_option: "Seleziona la tua opzione",
                complete_hightlighted_checkboxes_and_click: "Completa le caselle evidenziate e fai clic",
                submit: "invia",
                next: "avanti",
                click_to_upload: "Clicca per caricare",
                or_drag_and_drop_files: "oppure trascina e rilascia i file",
                send_copy_via_email: "Invia copia via email",
                download: "Scarica",
                clear: "Cancella",
                redraw: "Ridisegna",
                draw_initials: "Disegna iniziali",
                type_signature_here: "Scrivi la firma qui",
                type_initial_here: "Scrivi le iniziali qui",
                form_has_been_completed: "Il modulo è stato completato!",
                document_has_been_signed: "Il documento è stato firmato!",
                documents_have_been_signed: "I documenti sono stati firmati!",
                create_a_free_account: "Crea un Account Gratuito",
                powered_by: "Desarrollado por",
                please_check_the_box_to_continue: "Si prega di spuntare la casella per continuare",
                open_source_documents_software: "software di documenti open source",
                verified_phone_number: "Verifica numero di telefono",
                use_international_format: "Usa formato internazionale: +1xxx",
                six_digits_code: "Codice a 6 cifre",
                change_phone_number: "Cambia numero di telefono",
                sending: "Invio in corso...",
                resend_code: "Rinvia codice",
                verification_code_has_been_resent: "Il codice di verifica è stato rinviato tramite SMS",
                please_fill_all_required_fields: "Si prega di compilare tutti i campi obbligatori",
                set_today: "Imposta Oggi",
                draw_signature: "Disegna firma",
                type_initial: "Inserisci iniziali",
                draw: "Disegna",
                type: "Inserisci",
                type_text: "Inserisci testo",
                toggle_multiline_text: "Attiva Testo Multilinea",
                email_has_been_sent: "L'email è stata inviata",
                processing: "Elaborazione",
                pay_with_strip: "Paga con Stripe",
                reupload: "Ricarica",
                upload: "Carica",
                files: "File",
            },
            de: {
                complete: "Abschließen",
                sign_and_complete: "Signieren und Abschließen",
                invite: "Einladen",
                email: "E-Mail",
                approved: "Genehmigt",
                reviewed: "Überprüft",
                other: "Andere",
                authored_by_me: "Von mir verfasst",
                approved_by: "Genehmigt von",
                reviewed_by: "Überprüft von",
                authored_by: "Verfasst von",
                select_a_reason: "Grund auswählen",
                value_is_invalid: "Wert ist ungültig",
                verification_code_is_invalid: "Bestätigungscode ist ungültig",
                drawn_signature_on_a_touchscreen_device: "Gezeichnete Unterschrift auf einem Touchscreen-Gerät",
                scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature: "Scannen Sie den QR-Code mit der Kamera-App, um das Formular auf dem Handy zu öffnen und Ihre Unterschrift zu zeichnen",
                by_clicking_you_agree_to_the: 'Durch Klicken auf "{button}" stimmen Sie zu, dass Sie die',
                electronic_signature_disclosure: "Elektronische Unterschriftenoffenlegung",
                esignature_disclosure: "eSignatur Offenlegung",
                already_paid: "Bereits bezahlt",
                minimize: "Minimieren",
                text: "Text",
                signature: "Unterschrift",
                digitally_signed_by: "Digital unterschrieben von",
                reason: "Grund",
                initials: "Initialen",
                date: "Datum",
                number: "Nummer",
                image: "Bild",
                pay: "Bezahlen",
                file: "Datei",
                select: "Auswählen",
                checkbox: "Checkbox",
                multiple: "Mehrere",
                radio: "Radio",
                cells: "Zellen",
                stamp: "Stempel",
                payment: "Zahlung",
                number_phone_is_invalid: "{number} Telefonnummer ist ungültig",
                phone: "Telefon",
                start_now: "Jetzt starten",
                continue: "Fortsetzen",
                sign_now: "Jetzt unterschreiben",
                type_here_: "Hier eingeben...",
                optional: "optional",
                appears_on: "Erscheint auf",
                page: "Seite",
                take_photo: "Foto aufnehmen",
                select_your_option: "Wähle deine Option",
                complete_hightlighted_checkboxes_and_click: "Markierte Kontrollkästchen ausfüllen und klicken",
                submit: "absenden",
                next: "weiter",
                click_to_upload: "Klicken zum Hochladen",
                or_drag_and_drop_files: "oder Dateien hierher ziehen und ablegen",
                send_copy_via_email: "Kopie per E-Mail senden",
                download: "Herunterladen",
                clear: "Löschen",
                redraw: "Neu zeichnen",
                draw_initials: "Initialen zeichnen",
                type_signature_here: "Unterschrift hier eingeben",
                type_initial_here: "Initialen hier eingeben",
                form_has_been_completed: "Formular wurde ausgefüllt!",
                document_has_been_signed: "Dokument wurde unterschrieben!",
                documents_have_been_signed: "Dokumente wurden unterschrieben!",
                create_a_free_account: "Kostenloses Konto erstellen",
                powered_by: "Bereitgestellt von",
                please_check_the_box_to_continue: "Bitte setzen Sie das Häkchen, um fortzufahren",
                open_source_documents_software: "Open-Source-Dokumentensoftware",
                verified_phone_number: "Telefonnummer überprüfen",
                use_international_format: "Internationales Format verwenden: +1xxx",
                six_digits_code: "6-stelliger Code",
                change_phone_number: "Telefonnummer ändern",
                sending: "Senden...",
                resend_code: "Code erneut senden",
                verification_code_has_been_resent: "Die Verifizierungscode wurde erneut per SMS gesendet",
                please_fill_all_required_fields: "Bitte füllen Sie alle erforderlichen Felder aus",
                set_today: "Heute einstellen",
                draw_signature: "Unterschrift zeichnen",
                type_initial: "Initialen eingeben",
                draw: "Zeichnen",
                type: "Eingeben",
                type_text: "Text eingeben",
                toggle_multiline_text: "Mehrzeiligen Text umschalten",
                email_has_been_sent: "Die E-Mail wurde gesendet",
                processing: "Verarbeitung",
                pay_with_strip: "Mit Stripe bezahlen",
                reupload: "Erneut hochladen",
                upload: "Hochladen",
                files: "Dateien",
            },
            fr: {
                complete: "Terminer",
                sign_and_complete: "Signer et Terminer",
                invite: "Inviter",
                email: "Courriel",
                approved: "Approuvé",
                reviewed: "Révisé",
                other: "Autre",
                authored_by_me: "Rédigé par moi",
                approved_by: "Approuvé par",
                reviewed_by: "Révisé par",
                authored_by: "Rédigé par",
                select_a_reason: "Sélectionnez une raison",
                value_is_invalid: "La valeur est invalide",
                verification_code_is_invalid: "Le code de vérification est invalide",
                drawn_signature_on_a_touchscreen_device: "Signature dessinée sur un appareil à écran tactile",
                scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature: "Scannez le code QR avec l'application de l'appareil photo pour ouvrir le formulaire sur mobile et dessiner votre signature",
                by_clicking_you_agree_to_the: 'En cliquant sur "{button}", vous acceptez la',
                electronic_signature_disclosure: "Divulgation de Signature Électronique",
                esignature_disclosure: "Divulgation de la eSignature",
                minimize: "Réduire",
                text: "Texte",
                already_paid: "Déjà payé",
                signature: "Signature",
                initials: "Initiales",
                digitally_signed_by: "Signé numériquement par",
                reason: "Raison",
                pay: "Payer",
                date: "Date",
                number: "Numéro",
                image: "Image",
                file: "Fichier",
                select: "Choisir",
                checkbox: "Coche",
                multiple: "Multiple",
                radio: "Radio",
                cells: "Cellules",
                stamp: "Tampon",
                payment: "Paiement",
                number_phone_is_invalid: "{number} téléphone est invalide",
                phone: "Téléphone",
                start_now: "Commencer maintenant",
                continue: "Continuer",
                sign_now: "Signer maintenant",
                type_here_: "Tapez ici...",
                optional: "facultatif",
                appears_on: "Apparaît sur",
                page: "Page",
                take_photo: "Prendre une photo",
                select_your_option: "Sélectionnez votre option",
                complete_hightlighted_checkboxes_and_click: "Complétez les cases à cocher en surbrillance et cliquez",
                submit: "envoyer",
                next: "suivant",
                click_to_upload: "Cliquez pour télécharger",
                or_drag_and_drop_files: "ou faites glisser-déposer les fichiers",
                send_copy_via_email: "Envoyer une copie par e-mail",
                download: "Télécharger",
                clear: "Effacer",
                redraw: "Redessiner",
                draw_initials: "Dessiner les initiales",
                type_signature_here: "Tapez la signature ici",
                type_initial_here: "Tapez les initiales ici",
                form_has_been_completed: "Le formulaire a été complété !",
                document_has_been_signed: "Le document a été signé!",
                documents_have_been_signed: "Les documents ont été signés!",
                create_a_free_account: "Créer un Compte Gratuit",
                powered_by: "Propulsé par",
                please_check_the_box_to_continue: "Veuillez cocher la case pour continuer",
                open_source_documents_software: "logiciel de documents open source",
                verified_phone_number: "Vérifier le numéro de téléphone",
                use_international_format: "Utiliser le format international : +1xxx",
                six_digits_code: "Code à 6 chiffres",
                change_phone_number: "Changer le numéro de téléphone",
                sending: "Envoi en cours...",
                resend_code: "Renvoyer le code",
                verification_code_has_been_resent: "Le code de vérification a été renvoyé par SMS",
                please_fill_all_required_fields: "Veuillez remplir tous les champs obligatoires",
                set_today: "Définir Aujourd'hui",
                draw_signature: "Dessiner une signature",
                type_initial: "Saisir les initiales",
                draw: "Dessiner",
                type: "Saisir",
                type_text: "Saisir du texte",
                toggle_multiline_text: "Basculer le Texte Multiligne",
                email_has_been_sent: "L'email a été envoyé",
                processing: "Traitement",
                pay_with_strip: "Paiement avec Stripe",
                reupload: "Recharger",
                upload: "Télécharger",
                files: "Fichiers",
            },
            pl: {
                complete: "Zakończ",
                sign_and_complete: "Podpisz i zakończ",
                invite: "Zaproś",
                email: "E-mail",
                approved: "Zaakceptowany",
                reviewed: "Przejrzany",
                other: "Inny",
                authored_by_me: "Napisane przeze mnie",
                approved_by: "Zaakceptowany przez",
                reviewed_by: "Przejrzany przez",
                authored_by: "Napisane przez",
                select_a_reason: "Wybierz powód",
                value_is_invalid: "Wartość jest nieprawidłowa",
                verification_code_is_invalid: "Kod weryfikacyjny jest nieprawidłowy",
                drawn_signature_on_a_touchscreen_device: "Podpis odręczny na urządzeniu z ekranem dotykowym",
                scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature: "Zeskanuj kod QR za pomocą aplikacji aparatu, aby otworzyć formularz na telefonie i narysować swój podpis",
                by_clicking_you_agree_to_the: 'Klikając na "{button}", zgadzasz się na',
                electronic_signature_disclosure: "Ujawnienie Elektronicznej Sygnatury",
                esignature_disclosure: "Ujawnienie ePodpisu",
                minimize: "Zminimalizuj",
                text: "Tekst",
                already_paid: "Już zapłacono",
                digitally_signed_by: "Podpisano cyfrowo przez",
                reason: "Powód",
                signature: "Podpis",
                initials: "Inicjały",
                date: "Data",
                number: "Numer",
                image: "Obraz",
                file: "Plik",
                pay: "Zapłać",
                select: "Wybierz",
                checkbox: "Pole wyboru",
                multiple: "Wielokrotne",
                radio: "Radio",
                cells: "Komórki",
                stamp: "Pieczątka",
                payment: "Płatność",
                number_phone_is_invalid: "{number} telefon jest nieprawidłowy",
                phone: "Telefon",
                start_now: "Zacznij teraz",
                continue: "Kontynuuj",
                sign_now: "Podpisz teraz",
                type_here_: "Wpisz tutaj...",
                optional: "opcjonalny",
                appears_on: "Pojawia się na",
                page: "Strona",
                select_your_option: "Wybierz swoją opcję",
                complete_hightlighted_checkboxes_and_click: "Wypełnij zaznaczone pola wyboru i kliknij",
                submit: "wyślij",
                next: "dalej",
                take_photo: "Zrób zdjęcie",
                click_to_upload: "Kliknij, aby przesłać",
                or_drag_and_drop_files: "lub przeciągnij i upuść pliki",
                send_copy_via_email: "Wyślij kopię drogą mailową",
                download: "Pobierz",
                clear: "Wyczyść",
                redraw: "Przerysuj",
                draw_initials: "Narysuj inicjały",
                type_signature_here: "Wpisz podpis tutaj",
                type_initial_here: "Wpisz inicjały tutaj",
                form_has_been_completed: "Formularz został wypełniony!",
                document_has_been_signed: "Dokument został podpisany!",
                documents_have_been_signed: "Dokumenty zostały podpisane!",
                create_a_free_account: "Utwórz darmowe konto",
                powered_by: "Napędzany przez",
                please_check_the_box_to_continue: "Proszę zaznaczyć pole, aby kontynuować",
                open_source_documents_software: "oprogramowanie do dokumentów open source",
                verified_phone_number: "Zweryfikuj numer telefonu",
                use_international_format: "Użyj międzynarodowego formatu: +1xxx",
                six_digits_code: "6-cyfrowy kod",
                change_phone_number: "Zmień numer telefonu",
                sending: "Wysyłanie...",
                resend_code: "Ponownie wyślij kod",
                verification_code_has_been_resent: "Kod weryfikacyjny został ponownie wysłany",
                please_fill_all_required_fields: "Proszę wypełnić wszystkie wymagane pola",
                set_today: "Ustaw Dziś",
                draw_signature: "Rysuj podpis",
                type_initial: "Wprowadź inicjały",
                draw: "Rysuj",
                type: "Wprowadź",
                type_text: "Wprowadź tekst",
                toggle_multiline_text: "Przełącz Tekst Wielolinijkowy",
                email_has_been_sent: "E-mail został wysłany",
                processing: "Przetwarzanie",
                pay_with_strip: "Płatność za pomocą Stripe",
                reupload: "Ponowne przesłanie",
                upload: "Przesyłanie",
                files: "Pliki",
            },
            uk: {
                complete: "Завершити",
                sign_and_complete: "Підписати і завершити",
                invite: "Запросити",
                email: "Електронна пошта",
                approved: "Затверджено",
                reviewed: "Переглянуто",
                other: "Інше",
                authored_by_me: "Авторство моє",
                approved_by: "Затверджено",
                reviewed_by: "Переглянуто",
                authored_by: "Автор",
                select_a_reason: "Виберіть причину",
                value_is_invalid: "Значення є неправильним",
                verification_code_is_invalid: "Код підтвердження є неправильним",
                drawn_signature_on_a_touchscreen_device: "Підпис на сенсорному пристрої",
                scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature: "Скануйте QR-код за допомогою програми камери, щоб відкрити форму на мобільному пристрої та намалювати свій підпис",
                by_clicking_you_agree_to_the: 'Натиснувши на "{button}", ви погоджуєтеся з',
                electronic_signature_disclosure: "Розголошення Електронного Підпису",
                esignature_disclosure: "Розголошення еПідпису",
                minimize: "Зменшити",
                text: "Текст",
                already_paid: "Вже оплачено",
                signature: "Підпис",
                digitally_signed_by: "Підписано в електронному вигляді",
                reason: "Причина",
                initials: "Ініціали",
                date: "Дата",
                number: "Число",
                image: "Зображення",
                pay: "Оплатити",
                file: "Файл",
                select: "Вибрати",
                checkbox: "Прапорець",
                multiple: "Множинний",
                radio: "Радіо",
                cells: "Клітинки",
                stamp: "Штамп",
                payment: "Платіж",
                number_phone_is_invalid: "{number} телефон недійсний",
                phone: "Телефон",
                start_now: "Почати зараз",
                continue: "Продовжити",
                sign_now: "Підписати зараз",
                type_here_: "Введіть тут",
                optional: "необов’язково",
                appears_on: "З'являється на",
                page: "Сторінка",
                take_photo: "Зробити фото",
                select_your_option: "Виберіть варіант",
                complete_hightlighted_checkboxes_and_click: "Заповніть позначені прапорці та натисніть",
                submit: "надіслати",
                next: "далі",
                click_to_upload: "Клацніть, щоб завантажити",
                or_drag_and_drop_files: "або перетягніть файли сюди",
                send_copy_via_email: "Надіслати копію електронною поштою",
                download: "Завантажити",
                clear: "Очистити",
                redraw: "Перемалювати",
                draw_initials: "Намалювати ініціали",
                type_signature_here: "Введіть підпис тут",
                type_initial_here: "Введіть ініціали тут",
                form_has_been_completed: "Форму заповнено!",
                document_has_been_signed: "Документ був підписаний!",
                documents_have_been_signed: "Документи були підписані!",
                create_a_free_account: "Створити безкоштовний обліковий запис",
                powered_by: "Працює на базі",
                please_check_the_box_to_continue: "Будь ласка, позначте прапорець, щоб продовжити",
                open_source_documents_software: "відкритий програмний засіб для документів",
                verified_phone_number: "Підтвердіть номер телефону",
                use_international_format: "Використовуйте міжнародний формат: +1xxx",
                six_digits_code: "6-значний код",
                change_phone_number: "Змінити номер телефону",
                sending: "Надсилаю...",
                resend_code: "Повторно відправити код",
                verification_code_has_been_resent: "Код підтвердження був повторно надісланий",
                please_fill_all_required_fields: "Будь ласка, заповніть всі обов'язкові поля",
                set_today: "Задати Сьогодні",
                draw_signature: "Намалюйте підпис",
                type_initial: "Введіть ініціали",
                draw: "Підпис",
                type: "Текст",
                type_text: "Введіть текст",
                toggle_multiline_text: "Перемкнути Багаторядковий Текст",
                email_has_been_sent: "Електронний лист був відправлений",
                processing: "Обробка",
                pay_with_strip: "Сплатити за допомогою Stripe",
                reupload: "Перезавантажити",
                upload: "Завантажити",
                files: "Файли",
            },
            cs: {
                complete: "Dokončit",
                sign_and_complete: "Podepsat a dokončit",
                invite: "Pozvat",
                email: "E-mail",
                approved: "Schváleno",
                reviewed: "Zkontrolováno",
                other: "Jiné",
                authored_by_me: "Autorem jsem já",
                approved_by: "Schváleno kým",
                reviewed_by: "Zkontrolováno kým",
                authored_by: "Autorem",
                select_a_reason: "Vyberte důvod",
                value_is_invalid: "Hodnota je neplatná",
                verification_code_is_invalid: "Ověřovací kód je neplatný",
                drawn_signature_on_a_touchscreen_device: "Namalovaný podpis na dotykovém zařízení",
                scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature: "Naskenujte QR kód pomocí aplikace fotoaparátu, abyste otevřeli formulář na mobilním zařízení a nakreslili svůj podpis",
                by_clicking_you_agree_to_the: 'Kliknutím na "{button}" souhlasíte s',
                electronic_signature_disclosure: "Zveřejněním Elektronického Podpisu",
                esignature_disclosure: "Zveřejnění ePodpisu",
                already_paid: "Už zaplaceno",
                minimize: "Minimalizovat",
                text: "Text",
                signature: "Podpis",
                initials: "Iniciály",
                date: "Datum",
                number: "Číslo",
                digitally_signed_by: "Digitálně podepsáno",
                reason: "Důvod",
                image: "Obrázek",
                pay: "Zaplatit",
                file: "Soubor",
                select: "Vybrat",
                checkbox: "Zaškrtávací políčko",
                multiple: "Více možností",
                radio: "Rádio",
                cells: "Buňky",
                stamp: "Razítko",
                payment: "Platba",
                phone: "Telefon",
                number_phone_is_invalid: "{number} telefon je neplatný",
                start_now: "Začít nyní",
                continue: "Pokračovat",
                sign_now: "Podepsat nyní",
                type_here_: "Zadejte zde",
                optional: "volitelné",
                appears_on: "Zobrazuje se na",
                page: "Stránka",
                select_your_option: "Vyberte svou volbu",
                take_photo: "Fotit",
                complete_hightlighted_checkboxes_and_click: "Označte zvýrazněné zaškrtávací políčka a klikněte na",
                submit: "odeslat",
                next: "další",
                click_to_upload: "Klikněte pro nahrání",
                or_drag_and_drop_files: "nebo přetáhněte soubory sem",
                send_copy_via_email: "Odeslat kopii e-mailem",
                download: "Stáhnout",
                clear: "Smazat",
                redraw: "Překreslit",
                draw_initials: "Nakreslit iniciály",
                type_signature_here: "Sem zadejte podpis",
                type_initial_here: "Sem zadejte iniciály",
                form_has_been_completed: "Formulář byl dokončen!",
                document_has_been_signed: "Dokument byl podepsán!",
                documents_have_been_signed: "Dokumenty byly podepsány!",
                create_a_free_account: "Vytvořit bezplatný účet",
                powered_by: "Poháněno",
                please_check_the_box_to_continue: "Prosím, zaškrtněte políčko pro pokračování",
                open_source_documents_software: "open source software pro dokumenty",
                verified_phone_number: "Ověřte telefonní číslo",
                use_international_format: "Použijte mezinárodní formát: +1xxx",
                six_digits_code: "6-místný kód",
                change_phone_number: "Změnit telefonní číslo",
                sending: "Odesílání...",
                resend_code: "Znovu odeslat kód",
                verification_code_has_been_resent: "Ověřovací kód byl znovu odeslán",
                please_fill_all_required_fields: "Prosím vyplňte všechny povinné položky",
                set_today: "Nastavit Dnes",
                draw_signature: "Nakreslit podpis",
                type_initial: "Zadat iniciály",
                draw: "Kreslit",
                type: "Zadat",
                type_text: "Zadat text",
                toggle_multiline_text: "Přepnout Víceřádkový Text",
                email_has_been_sent: "E-mail byl odeslán",
                processing: "Zpracování",
                pay_with_strip: "Zaplacení přes Stripe",
                reupload: "Znovu nahrát",
                upload: "Nahrát",
                files: "Soubory",
            },
            pt: {
                complete: "Completar",
                sign_and_complete: "Assinar e Completar",
                invite: "Convidar",
                email: "E-mail",
                approved: "Aprovado",
                reviewed: "Revisado",
                other: "Outro",
                authored_by_me: "Autorizado por mim",
                approved_by: "Aprovado por",
                reviewed_by: "Revisado por",
                authored_by: "Autorizado por",
                select_a_reason: "Selecione um motivo",
                value_is_invalid: "Valor é inválido",
                verification_code_is_invalid: "Código de verificação é inválido",
                drawn_signature_on_a_touchscreen_device: "Assinatura desenhada em um dispositivo com tela sensível ao toque",
                scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature: "Escaneie o código QR com o aplicativo da câmera para abrir o formulário no celular e desenhar sua assinatura",
                by_clicking_you_agree_to_the: 'Ao clicar em "{button}", você concorda com o',
                electronic_signature_disclosure: "Divulgação de Assinatura Eletrônica",
                esignature_disclosure: "Divulgação da eAssinatura",
                already_paid: "Já pago",
                minimize: "Minimizar",
                text: "Texto",
                signature: "Assinatura",
                initials: "Iniciais",
                digitally_signed_by: "Assinado digitalmente por",
                reason: "Razão",
                date: "Data",
                number: "Número",
                image: "Imagem",
                pay: "Pagar",
                file: "Arquivo",
                select: "Selecionar",
                checkbox: "Caixa",
                multiple: "Múltiplo",
                radio: "Rádio",
                cells: "Células",
                stamp: "Carimbo",
                payment: "Pagamento",
                number_phone_is_invalid: "{number} telefone é inválido",
                phone: "Telefone",
                start_now: "Começar agora",
                continue: "Continuar",
                sign_now: "Assinar agora",
                type_here_: "Digite aqui",
                optional: "opcional",
                appears_on: "Aparece em",
                page: "Página",
                take_photo: "Tirar foto",
                select_your_option: "Selecione sua opção",
                complete_hightlighted_checkboxes_and_click: "Complete as caixas de seleção destacadas e clique",
                submit: "enviar",
                next: "próximo",
                click_to_upload: "Clique para fazer o upload",
                or_drag_and_drop_files: "ou arraste e solte arquivos",
                send_copy_via_email: "Enviar cópia por e-mail",
                download: "Baixar",
                clear: "Limpar",
                redraw: "Redesenhar",
                draw_initials: "Desenhar iniciais",
                type_signature_here: "Digite a assinatura aqui",
                type_initial_here: "Digite as iniciais aqui",
                form_has_been_completed: "O formulário foi concluído!",
                document_has_been_signed: "O documento foi assinado!",
                documents_have_been_signed: "Os documentos foram assinados!",
                create_a_free_account: "Criar uma Conta Gratuita",
                powered_by: "Desenvolvido por",
                please_check_the_box_to_continue: "Por favor, marque a caixa para continuar",
                open_source_documents_software: "software de documentos de código aberto",
                verified_phone_number: "Verificar Número de Telefone",
                use_international_format: "Use formato internacional: +1xxx",
                six_digits_code: "Código de 6 dígitos",
                change_phone_number: "Alterar número de telefone",
                sending: "Enviando...",
                resend_code: "Reenviar código",
                verification_code_has_been_resent: "O código de verificação foi reenviado via SMS",
                please_fill_all_required_fields: "Por favor, preencha todos os campos obrigatórios",
                set_today: "Definir Hoje",
                draw_signature: "Desenhar assinatura",
                type_initial: "Inserir iniciais",
                draw: "Desenhar",
                type: "Inserir",
                type_text: "Inserir texto",
                toggle_multiline_text: "Alternar Texto Multilinha",
                email_has_been_sent: "Email enviado",
                processing: "Processamento",
                pay_with_strip: "Pagar com Stripe",
                reupload: "Reenviar",
                upload: "Carregar",
                files: "Arquivos",
            },
            he: {
                complete: "השלם",
                sign_and_complete: "חתום והשלם",
                invite: "הזמן",
                email: 'דוא"ל',
                approved: "מאושר",
                reviewed: "נסקר",
                other: "אחר",
                authored_by_me: "נכתב על ידי",
                approved_by: "אושר על ידי",
                reviewed_by: "נסקר על ידי",
                authored_by: "נכתב על ידי",
                select_a_reason: "בחר סיבה",
                value_is_invalid: "ערך לא תקין",
                verification_code_is_invalid: "קוד האימות אינו תקין",
                drawn_signature_on_a_touchscreen_device: "חתימה שנוצרה במכשיר עם מסך מגע",
                scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature: "סרוק את קוד ה-QR באמצעות אפליקציית המצלמה כדי לפתוח את הטופס במובייל ולצייר את החתימה שלך",
                by_clicking_you_agree_to_the: 'על ידי לחיצה על "{button}", אתה מסכים ל',
                electronic_signature_disclosure: "חשיפת חתימה אלקטרונית",
                esignature_disclosure: "חשיפת ה-eחתימה",
                minimize: "לקטן",
                text: "טקסט",
                already_paid: "כבר שולם",
                signature: "חתימה",
                initials: "ראשי תיבות",
                date: "תאריך",
                digitally_signed_by: "חתום דיגיטלית על ידי",
                reason: "סיבה",
                number: "מספר",
                image: "תמונה",
                file: "קובץ",
                pay: "תשלום",
                select: "בחר",
                checkbox: "תיק בחירה",
                multiple: "רב ערכים",
                radio: "רדיו",
                cells: "תאים",
                stamp: "חותמת",
                payment: "תשלום",
                phone: "טלפון",
                number_phone_is_invalid: "{number} טלפון אינו חוקי",
                start_now: "התחל עכשיו",
                continue: "המשך",
                sign_now: "חתום כעת",
                type_here_: "הקלד כאן",
                optional: "אופציונלי",
                option: "אפשרות",
                appears_on: "מופיע ב",
                page: "עמוד",
                take_photo: "צלם תמונה",
                select_your_option: "בחר את האפשרות שלך",
                complete_hightlighted_checkboxes_and_click: "השלם את תיבות הסימון המודגשות ולחץ",
                submit: "שליחה",
                next: "הבא",
                click_to_upload: "לחץ להעלאה",
                or_drag_and_drop_files: "או גרור ושחרר קבצים",
                send_copy_via_email: "שלח עותק באמצעות אימייל",
                download: "הורדה",
                clear: "נקה",
                redraw: "צייר מחדש",
                draw_initials: "צייר ציוני ראשי תיבות",
                type_signature_here: "הקלד חתימה כאן",
                type_initial_here: "הקלד ציוני ראשי תיבות כאן",
                form_has_been_completed: "הטופס הושלם",
                document_has_been_signed: "המסמך נחתם!",
                documents_have_been_signed: "המסמכים נחתמו!",
                create_a_free_account: "צור חשבון חינם",
                powered_by: "מופעל על ידי",
                please_check_the_box_to_continue: "אנא סמן את התיבה כדי להמשיך",
                open_source_documents_software: "תוכנה פתוחה למסמכים",
                verified_phone_number: "אימות מספר טלפון",
                use_international_format: "השתמש בפורמט בינלאומי: +1xxx",
                six_digits_code: "קוד משתמש שש ספרות",
                change_phone_number: "שינוי מספר טלפון",
                sending: "שולח",
                resend_code: "שלח מחדש קוד",
                verification_code_has_been_resent: "קוד האימות נשלח מחדש בSMS",
                please_fill_all_required_fields: "אנא מלא את כל השדות הדרושים",
                set_today: "קבע היום",
                toggle_multiline_text: "שנה בין טקסט במספר שורות לטקסט בשורה אחת",
                draw_signature: "צייר חתימה",
                type_initial: "הקלד ציוני ראשי תיבות",
                draw: "צייר",
                type: "הקלד",
                type_text: "הקלד טקסט",
                email_has_been_sent: "האימייל נשלח",
                processing: "מעבד",
                pay_with_strip: "שלם עם סטרייפ",
                reupload: "העלה שוב",
                upload: "העלאה",
                files: "קבצים",
            },
            nl: {
                complete: "Voltooien",
                sign_and_complete: "Ondertekenen en voltooien",
                invite: "Uitnodigen",
                email: "E-mail",
                approved: "Goedgekeurd",
                reviewed: "Beoordeeld",
                other: "Anders",
                authored_by_me: "Door mij geschreven",
                approved_by: "Goedgekeurd door",
                reviewed_by: "Beoordeeld door",
                authored_by: "Geschreven door",
                select_a_reason: "Selecteer een reden",
                value_is_invalid: "Waarde is ongeldig",
                verification_code_is_invalid: "Verificatiecode is ongeldig",
                drawn_signature_on_a_touchscreen_device: "Getekende handtekening op een apparaat met een touchscreen",
                scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature: "Scan de QR-code met de camera-app om het formulier op mobiel te openen en uw handtekening te tekenen",
                by_clicking_you_agree_to_the: 'Door op "{button}" te klikken, gaat u akkoord met de',
                electronic_signature_disclosure: "Openbaarmaking van Elektronische Handtekening",
                esignature_disclosure: "Openbaarmaking van eHandtekening",
                minimize: "Minimaliseren",
                text: "Tekst",
                already_paid: "Al betaald",
                signature: "Handtekening",
                digitally_signed_by: "Digitaal ondertekend door",
                reason: "Reden",
                initials: "Initialen",
                date: "Datum",
                number: "Nummer",
                image: "Afbeelding",
                take_photo: "Maak een foto",
                file: "Bestand",
                select: "Selecteer",
                checkbox: "Aankruisvakje",
                multiple: "Meerdere",
                pay: "Betaal",
                radio: "Radio",
                cells: "Cellen",
                stamp: "Stempel",
                payment: "Betaling",
                phone: "Telefoon",
                number_phone_is_invalid: "{number} telefoon is ongeldig",
                start_now: "Nu beginnen",
                continue: "Doorgaan",
                sign_now: "Nu ondertekenen",
                type_here_: "Typ hier...",
                optional: "Optioneel",
                option: "Optie",
                appears_on: "Verschijnt op",
                page: "Pagina",
                select_your_option: "Selecteer uw optie",
                complete_hightlighted_checkboxes_and_click: "Voltooi de gemarkeerde selectievakjes en klik",
                submit: "Voltooien",
                next: "Volgende",
                click_to_upload: "Klik om te uploaden",
                or_drag_and_drop_files: "of sleep en plaats bestanden",
                send_copy_via_email: "Stuur kopie per e-mail",
                download: "Downloaden",
                clear: "Wissen",
                redraw: "Opnieuw tekenen",
                draw_initials: "Initialen tekenen",
                type_signature_here: "Typ hier uw handtekening",
                type_initial_here: "Typ hier uw initialen",
                form_has_been_completed: "Formulier is voltooid!",
                document_has_been_signed: "Document is ondertekend!",
                documents_have_been_signed: "De documenten zijn ondertekend!",
                create_a_free_account: "Maak een gratis account aan",
                powered_by: "Aangedreven door",
                please_check_the_box_to_continue: "Vink het vakje aan om door te gaan",
                open_source_documents_software: "Open source documenten software",
                verified_phone_number: "Geverifieerd telefoonnummer",
                use_international_format: "Gebruik internationaal formaat: +1xxx",
                six_digits_code: "6-cijferige code",
                change_phone_number: "Wijzig telefoonnummer",
                sending: "Voltooien...",
                resend_code: "Code opnieuw verzenden",
                verification_code_has_been_resent: "Verificatiecode is opnieuw verzonden via SMS",
                please_fill_all_required_fields: "Vul alle verplichte velden in",
                set_today: "Vandaag",
                toggle_multiline_text: "Schakel meerregelige tekst in/uit",
                draw_signature: "Handtekening tekenen",
                type_initial: "Typ initialen",
                draw: "Tekenen",
                type: "Typen",
                type_text: "Typ tekst",
                email_has_been_sent: "E-mail is verzonden",
                processing: "Verwerken",
                pay_with_strip: "Betalen met Stripe",
                reupload: "Opnieuw uploaden",
                upload: "Uploaden",
                files: "Bestanden",
            },
            ar: {
                complete: "اكتمال",
                sign_and_complete: "التوقيع والاكتمال",
                invite: "دعوة",
                email: "البريد الإلكتروني",
                approved: "موافق عليه",
                reviewed: "تمت مراجعته",
                other: "آخر",
                authored_by_me: "مؤلف بواسطتي",
                approved_by: "موافق عليه من قبل",
                reviewed_by: "مراجع من قبل",
                authored_by: "مؤلف من قبل",
                select_a_reason: "اختر سببًا",
                value_is_invalid: "القيمة غير صالحة",
                verification_code_is_invalid: "رمز التحقق غير صالح",
                drawn_signature_on_a_touchscreen_device: "توقيع مرسوم على جهاز بشاشة تعمل باللمس",
                scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature: "امسح رمز الاستجابة السريعة باستخدام تطبيق الكاميرا لفتح النموذج على الهاتف المحمول ورسم توقيعك",
                by_clicking_you_agree_to_the: 'بالنقر فوق "{button}"، أنت توافق على',
                electronic_signature_disclosure: "كشف التوقيع الإلكتروني",
                esignature_disclosure: "كشف التوقيع الإلكتروني",
                text: "نص",
                signature: "توقيع",
                initials: "الاختصارات",
                date: "تاريخ",
                number: "رقم",
                digitally_signed_by: "تم التوقيع رقميًا بواسطة",
                reason: "السبب",
                image: "صورة",
                take_photo: "التقاط صورة",
                pay: "دفع",
                file: "ملف",
                select: "اختيار",
                checkbox: "خانة اختيار",
                multiple: "متعدد",
                radio: "راديو",
                cells: "خلايا",
                stamp: "ختم",
                minimize: "تصغير",
                payment: "الدفع",
                phone: "هاتف",
                number_phone_is_invalid: "{number} هاتف غير صالح",
                start_now: "ابدأ الآن",
                continue: "متابعة",
                sign_now: "وقع الآن",
                type_here_: "اكتب هنا",
                optional: "اختياري",
                option: "خيار",
                appears_on: "يظهر على",
                page: "صفحة",
                select_your_option: "اختر خيارك",
                complete_hightlighted_checkboxes_and_click: "أكمل الخانات المميزة وانقر",
                submit: "إرسال",
                next: "التالي",
                click_to_upload: "انقر للتحميل",
                or_drag_and_drop_files: "أو اسحب وأسقط الملفات",
                send_copy_via_email: "إرسال نسخة عبر البريد الإلكتروني",
                download: "تحميل",
                clear: "مسح",
                redraw: "إعادة الرسم",
                draw_initials: "ارسم الاختصارات",
                type_signature_here: "اكتب التوقيع هنا",
                type_initial_here: "اكتب الاختصارات هنا",
                form_has_been_completed: "تم إكمال النموذج!",
                document_has_been_signed: "تم توقيع الوثيقة!",
                documents_have_been_signed: "تم توقيع الوثائق!",
                create_a_free_account: "إنشاء حساب مجاني",
                powered_by: "مدعوم من",
                please_check_the_box_to_continue: "الرجاء التحقق من الخانة للمتابعة",
                open_source_documents_software: "برنامج وثائق مفتوح المصدر",
                verified_phone_number: "تحقق من رقم الهاتف",
                use_international_format: "استخدم الشكل الدولي: +1xxx",
                six_digits_code: "رمز مكون من 6 أرقام",
                change_phone_number: "تغيير رقم الهاتف",
                sending: "جارٍ الإرسال",
                resend_code: "إعادة إرسال الرمز",
                verification_code_has_been_resent: "تم إعادة إرسال رمز التحقق عبر الرسائل القصيرة",
                please_fill_all_required_fields: "الرجاء ملء جميع الحقول المطلوبة",
                set_today: "تعيين اليوم",
                toggle_multiline_text: "تبديل النصوص متعددة الأسطر",
                draw_signature: "ارسم التوقيع",
                type_initial: "اكتب الاختصارات",
                draw: "ارسم",
                type: "اكتب",
                type_text: "اكتب نصًا",
                email_has_been_sent: "تم إرسال البريد الإلكتروني",
                processing: "جارٍ المعالجة",
                pay_with_strip: "الدفع بواسطة Stripe",
                reupload: "إعادة التحميل",
                upload: "تحميل",
                files: "الملفات",
            },
            ko: {
                complete: "완료",
                sign_and_complete: "서명하고 완료하기",
                invite: "초대하기",
                email: "이메일",
                approved: "승인됨",
                reviewed: "검토됨",
                other: "기타",
                authored_by_me: "내가 작성한",
                approved_by: "승인자",
                reviewed_by: "검토자",
                authored_by: "작성자",
                select_a_reason: "이유 선택",
                drawn_signature_on_a_touchscreen_device: "터치스크린 장치에서 그린 서명",
                scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature: "카메라 앱으로 QR 코드를 스캔하여 모바일에서 양식을 열고 서명을 그리세요",
                by_clicking_you_agree_to_the: '"{button}"를 클릭함으로써, 다음에 동의하게 됩니다',
                electronic_signature_disclosure: "전자 서명 공개",
                esignature_disclosure: "전자 서명 공개",
                already_paid: "이미 지불됨",
                text: "텍스트",
                signature: "서명",
                initials: "이니셜",
                date: "날짜",
                digitally_signed_by: "디지털 서명이 완료되었습니다",
                reason: "이유",
                number: "숫자",
                pay: "급여",
                image: "이미지",
                take_photo: "사진 찍기",
                file: "파일",
                select: "선택",
                checkbox: "체크박스",
                multiple: "다중",
                radio: "라디오",
                cells: "셀",
                stamp: "스탬프",
                minimize: "최소화",
                payment: "결제",
                phone: "전화",
                number_phone_is_invalid: "{number} 전화번호가 유효하지 않습니다",
                start_now: "지금 시작하기",
                continue: "계속하다",
                sign_now: "지금 서명",
                type_here_: "여기에 입력...",
                optional: "선택 사항",
                option: "옵션",
                appears_on: "다음에 나타납니다",
                page: "페이지",
                select_your_option: "옵션 선택",
                complete_hightlighted_checkboxes_and_click: "강조된 체크박스를 완료하고 클릭",
                submit: "제출",
                next: "다음",
                click_to_upload: "업로드하려면 클릭",
                or_drag_and_drop_files: "또는 파일을 드래그하여 놓으십시오",
                send_copy_via_email: "이메일로 사본 보내기",
                download: "다운로드",
                clear: "지우기",
                redraw: "다시 그리기",
                draw_initials: "이니셜 그리기",
                type_signature_here: "여기에 서명 입력",
                type_initial_here: "여기에 이니셜 입력",
                form_has_been_completed: "양식이 완료되었습니다!",
                document_has_been_signed: "문서가 서명되었습니다!",
                documents_have_been_signed: "문서가 서명되었습니다!",
                create_a_free_account: "무료 계정 생성",
                powered_by: "구동",
                please_check_the_box_to_continue: "계속하려면 확인란을 선택하십시오",
                open_source_documents_software: "오픈 소스 문서 소프트웨어",
                verified_phone_number: "전화번호 확인됨",
                use_international_format: "국제 포맷 사용: +1xxx",
                six_digits_code: "6자리 코드",
                change_phone_number: "전화번호 변경",
                sending: "전송 중...",
                resend_code: "코드 다시 보내기",
                verification_code_has_been_resent: "인증 코드가 SMS로 다시 전송되었습니다",
                please_fill_all_required_fields: "필수 필드를 모두 입력하십시오",
                set_today: "오늘 날짜로 설정",
                toggle_multiline_text: "다중 텍스트 전환",
                draw_signature: "서명 그리기",
                type_initial: "이니셜 입력",
                draw: "그리기",
                type: "입력",
                type_text: "텍스트 입력",
                email_has_been_sent: "이메일이 전송되었습니다",
                processing: "처리 중",
                pay_with_strip: "스트라이프로 결제",
                reupload: "다시 업로드",
                upload: "업로드",
                files: "파일",
            },
        },
        Lp = (e) => null == e || (Array.isArray(e) ? 0 === e.length : "string" == typeof e ? 0 === e.trim().length : "object" == typeof e ? 0 === Object.keys(e).length : !1 === e),
        Np = {
            name: "SubmissionForm",
            components: {
                FieldAreas: Jl,
                ImageStep: zd,
                SignatureStep: Dc,
                AppearsOn: Ic,
                IconWritingSign: po,
                AttachmentStep: du,
                InitialsStep: eu,
                InviteForm: Fp,
                MultiSelectStep: _u,
                IconInnerShadowTop: ho,
                DateStep: bp,
                IconArrowsDiagonal: $p,
                TextStep: ep,
                NumberStep: lp,
                FormulaFieldAreas: Xl,
                PhoneStep: Du,
                MarkdownContent: Fd,
                PaymentStep: Wu,
                IconArrowsDiagonalMinimize2: fc,
                FormCompleted: Rp,
            },
            provide() {
                return { baseUrl: this.baseUrl, scrollIntoArea: this.scrollIntoArea, scrollIntoField: this.scrollIntoField, t: this.t };
            },
            props: {
                submitter: { type: Object, required: !0 },
                inviteSubmitters: { type: Array, required: !1, default: () => [] },
                withSignatureId: { type: Boolean, required: !1, default: !1 },
                scrollPadding: { type: String, required: !1, default: "-80px" },
                requireSigningReason: { type: Boolean, required: !1, default: !1 },
                canSendEmail: { type: Boolean, required: !1, default: !1 },
                attachments: { type: Array, required: !1, default: () => [] },
                withFieldPlaceholder: { type: Boolean, required: !1, default: !1 },
                scrollEl: { type: Object, required: !1, default: null },
                onComplete: { type: Function, required: !1, default: () => () => {} },
                expand: { type: Boolean, required: !1, default: null },
                rememberSignature: { type: Boolean, required: !1, default: !1 },
                minimize: { type: Boolean, required: !1, default: !1 },
                withDisclosure: { type: Boolean, required: !1, default: !1 },
                reuseSignature: { type: Boolean, required: !1, default: !0 },
                withConfetti: { type: Boolean, required: !1, default: !1 },
                autoscrollFields: { type: Boolean, required: !1, default: !0 },
                showFieldNames: { type: Boolean, required: !1, default: !0 },
                withQrButton: { type: Boolean, required: !1, default: !1 },
                withTypedSignature: { type: Boolean, required: !1, default: !0 },
                isBreakpointMd: { type: Boolean, required: !1, default: !0 },
                baseUrl: { type: String, required: !1, default: "" },
                fields: { type: Array, required: !1, default: () => [] },
                backgroundColor: { type: String, required: !1, default: "" },
                previousSignatureValue: { type: String, required: !1, default: "" },
                allowToSkip: { type: Boolean, required: !1, default: !1 },
                goToLast: { type: Boolean, required: !1, default: !0 },
                isDemo: { type: Boolean, required: !1, default: !1 },
                dryRun: { type: Boolean, required: !1, default: !1 },
                attribution: { type: Boolean, required: !1, default: !0 },
                language: { type: String, required: !1, default: "" },
                values: { type: Object, required: !1, default: () => ({}) },
                authenticityToken: { type: String, required: !1, default: "" },
                i18n: { type: Object, required: !1, default: () => ({}) },
                withSendCopyButton: { type: Boolean, required: !1, default: !0 },
                withDownloadButton: { type: Boolean, required: !1, default: !0 },
                completedRedirectUrl: { type: String, required: !1, default: "" },
                completedButton: { type: Object, required: !1, default: () => ({}) },
                completedMessage: { type: Object, required: !1, default: () => ({}) },
            },
            data() {
                return {
                    isCompleted: !1,
                    isInvite: !1,
                    isFormVisible: !1 !== this.expand,
                    showFillAllRequiredFields: !1,
                    currentStep: 0,
                    isShowContinue: !1,
                    enableScrollIntoField: !0,
                    phoneVerifiedValues: {},
                    orientation: screen?.orientation?.type,
                    isSubmitting: !1,
                    submittedValues: {},
                    recalculateButtonDisabledKey: "",
                };
            },
            computed: {
                isMobile: () => /android|iphone|ipad/i.test(navigator.userAgent),
                submitButtonText() {
                    return this.alwaysMinimize ? this.t("submit") : this.stepFields.length === this.currentStep + 1 ? ("signature" === this.currentField.type ? this.t("sign_and_complete") : this.t("complete")) : this.t("next");
                },
                alwaysMinimize() {
                    return this.minimize || (this.orientation?.includes("landscape") && this.isMobile && parseInt(window.innerHeight) < 550);
                },
                hasMultipleDocuments() {
                    return (
                        Object.keys(
                            this.stepFields.reduce(
                                (e, t) => (
                                    t.forEach((t) => {
                                        t.areas?.forEach((t) => {
                                            e[t.attachment_uuid] = 1;
                                        });
                                    }),
                                    e
                                ),
                                {}
                            )
                        ).filter(Boolean).length > 1
                    );
                },
                currentStepFields() {
                    return this.stepFields[this.currentStep] || [];
                },
                browserLanguage: () => (navigator.language || navigator.userLanguage || "en").split("-")[0],
                queryParams: () => new URLSearchParams(window.location.search),
                submitterSlug() {
                    return this.submitter.slug;
                },
                fieldsUuidIndex() {
                    return this.fields.reduce((e, t) => ((e[t.uuid] = t), e), {});
                },
                previousInitialsValue() {
                    if (!1 !== this.reuseSignature) {
                        const e = [...this.fields].reverse().find((e) => "initials" === e.type && !!this.values[e.uuid]);
                        return this.values[e?.uuid];
                    }
                    return null;
                },
                isAnonymousChecboxes() {
                    return "checkbox" === this.currentField.type && this.currentStepFields.every((e) => !e.name && !e.required) && this.currentStepFields.length > 4;
                },
                isButtonDisabled() {
                    return (
                        !!this.recalculateButtonDisabledKey &&
                        (this.isSubmitting ||
                            (this.currentField.required && ["image", "file", "multiple"].includes(this.currentField.type) && !this.values[this.currentField.uuid]?.length) ||
                            (this.currentField.required && "signature" === this.currentField.type && !this.values[this.currentField.uuid]?.length && this.$refs.currentStep && !this.$refs.currentStep.isSignatureStarted) ||
                            (this.currentField.required && "initials" === this.currentField.type && !this.values[this.currentField.uuid]?.length && this.$refs.currentStep && !this.$refs.currentStep.isInitialsStarted))
                    );
                },
                currentField() {
                    return this.currentStepFields[0];
                },
                readonlyConditionalFields() {
                    return this.fields.filter((e) => e.readonly && e.conditions?.length && this.checkFieldConditions(e));
                },
                stepFields() {
                    return this.fields
                        .filter((e) => !e.readonly)
                        .reduce((e, t) => {
                            const n = e[e.length - 1];
                            return this.checkFieldConditions(t) && ("checkbox" === t.type && Array.isArray(n) && "checkbox" === n[0].type && !t.description ? n.push(t) : e.push([t])), e;
                        }, []);
                },
                formulaFields() {
                    return this.fields.filter((e) => e.preferences?.formula && "payment" !== e.type);
                },
                attachmentsIndex() {
                    return this.attachments.reduce((e, t) => ((e[t.uuid] = t), e), {});
                },
                submitPath() {
                    return `/s/${this.submitterSlug}`;
                },
            },
            watch: {
                expand(e) {
                    this.isFormVisible = e;
                },
                currentStepFields(e) {
                    Lp(e) && this.currentStep > 0 && (this.currentStep -= 1);
                },
            },
            beforeUnmount() {
                screen?.orientation?.removeEventListener("change", this.onOrientationChange);
            },
            mounted() {
                if (
                    ((this.submittedValues = JSON.parse(JSON.stringify(this.values))),
                    screen?.orientation?.addEventListener("change", this.onOrientationChange),
                    this.fields.forEach((e) => {
                        e.default_value && !e.readonly && (this.values[e.uuid] ||= e.default_value);
                    }),
                    this.queryParams.get("field_uuid"))
                ) {
                    const e = this.stepFields.findIndex((e) => e.some((e) => e.uuid === this.queryParams.get("field_uuid")));
                    this.currentStep = Math.max(e, 0);
                } else if (this.goToLast) {
                    const e = this.stepFields.indexOf(this.stepFields.find((e) => e.some((e) => e.required && !this.submittedValues[e.uuid]))),
                        t = this.stepFields.indexOf([...this.stepFields].reverse().find((e) => e.some((e) => !!this.submittedValues[e.uuid]))) + 1,
                        n = [this.stepFields.length - 1];
                    -1 !== e && n.push(e), -1 !== t && n.push(t), (this.currentStep = Math.min(...n));
                }
                document.body?.clientWidth >= 768 && !0 !== this.expand && ["signature", "initials", "file", "image"].includes(this.currentField?.type) && this.minimizeForm(),
                    this.alwaysMinimize && this.minimizeForm(),
                    /iPhone|iPad|iPod/i.test(navigator.userAgent) &&
                        this.$nextTick(() => {
                            const e = this.$root.$el.parentNode.getRootNode(),
                                t = e.getElementById("scrollbox");
                            ((e.body || e.querySelector("div")).style.overflow = "hidden"),
                                t.classList.add("h-full", "overflow-y-auto"),
                                t.parentNode.classList.add("h-screen", "overflow-y-auto"),
                                (t.parentNode.style.maxHeight = "-webkit-fill-available");
                        }),
                    this.$nextTick(() => {
                        (this.recalculateButtonDisabledKey = Math.random()),
                            this.dryRun ||
                                Promise.all([this.maybeTrackEmailClick(), this.maybeTrackSmsClick()]).finally(() => {
                                    this.trackViewForm();
                                });
                    });
            },
            methods: {
                t(e) {
                    return this.i18n[e] || Up[this.language?.toLowerCase()]?.[e] || Up[this.browserLanguage]?.[e] || Up.en[e] || e;
                },
                onOrientationChange(e) {
                    this.orientation = e.target.type;
                },
                checkFieldConditions(e) {
                    return (
                        !e.conditions?.length ||
                        e.conditions.reduce((e, t) => {
                            const n = this.fieldsUuidIndex[t.field_uuid];
                            if (["not_empty", "checked", "equal", "contains"].includes(t.action) && n && !this.checkFieldConditions(n)) return !1;
                            if (["empty", "unchecked"].includes(t.action)) return e && Lp(this.values[t.field_uuid]);
                            if (["not_empty", "checked"].includes(t.action)) return e && !Lp(this.values[t.field_uuid]);
                            if (["equal", "contains"].includes(t.action) && n) {
                                const i = n.options.find((e) => e.uuid === t.value),
                                    a = [this.values[t.field_uuid]].flat();
                                return e && a.includes(this.optionValue(i, n.options.indexOf(i)));
                            }
                            if (["not_equal", "does_not_contain"].includes(t.action) && n) {
                                const i = n.options.find((e) => e.uuid === t.value),
                                    a = [this.values[t.field_uuid]].flat();
                                return e && !a.includes(this.optionValue(i, n.options.indexOf(i)));
                            }
                            return e;
                        }, !0)
                    );
                },
                optionValue(e, t) {
                    return e.value ? e.value : `${this.t("option")} ${t + 1}`;
                },
                maybeTrackEmailClick() {
                    const { queryParams: e } = this;
                    if (e.has("t")) {
                        const t = e.get("t");
                        e.delete("t");
                        const n = [window.location.pathname, e.toString()].filter(Boolean).join("?");
                        return (
                            window.history.replaceState({}, document.title, n),
                            fetch(this.baseUrl + "/api/submitter_email_clicks", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ t, submitter_slug: this.submitterSlug }) })
                        );
                    }
                    return Promise.resolve({});
                },
                maybeTrackSmsClick() {
                    const { queryParams: e } = this;
                    if (e.has("c")) {
                        const t = e.get("c");
                        e.delete("c");
                        const n = [window.location.pathname, e.toString()].filter(Boolean).join("?");
                        return (
                            window.history.replaceState({}, document.title, n),
                            fetch(this.baseUrl + "/api/submitter_sms_clicks", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ c: t, submitter_slug: this.submitterSlug }) })
                        );
                    }
                    return Promise.resolve({});
                },
                trackViewForm() {
                    fetch(this.baseUrl + "/api/submitter_form_views", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ submitter_slug: this.submitterSlug }) });
                },
                previousSignatureValueFor(e) {
                    if (!1 !== this.reuseSignature) {
                        const t = [...this.fields].reverse().find((t) => "signature" === t.type && e.preferences?.format === t.preferences?.format && !!this.values[t.uuid]);
                        return this.values[t?.uuid];
                    }
                    return null;
                },
                goToStep(e, t = !1, n = !1) {
                    (this.currentStep = e),
                        (this.showFillAllRequiredFields = !1),
                        this.$nextTick(() => {
                            (this.recalculateButtonDisabledKey = Math.random()),
                                this.isCompleted ||
                                    (t && this.scrollIntoField(this.currentField),
                                    (this.enableScrollIntoField = !1),
                                    this.$refs.form.querySelector('input[type="date"], input[type="number"], input[type="text"], select')?.focus(),
                                    (this.enableScrollIntoField = !0),
                                    n && !this.values[this.currentField.uuid] && ["file", "image"].includes(this.currentField.type) && this.$refs.form.querySelector('input[type="file"]')?.click());
                        });
                },
                saveStep(e) {
                    const t = this.currentStepFields.map((e) => e.uuid),
                        n = this.currentField.type;
                    if (e || this.$refs.form.checkValidity())
                        return this.dryRun
                            ? (t.forEach((e) => {
                                  this.submittedValues[e] = this.values[e];
                              }),
                              Promise.resolve({}))
                            : this.isCompleted
                            ? Promise.resolve({})
                            : fetch(this.baseUrl + this.submitPath, { method: "POST", body: e || new FormData(this.$refs.form) }).then(
                                  (e) => (
                                      200 === e.status &&
                                          t.forEach((e) => {
                                              (this.submittedValues[e] = this.values[e]), "phone" === n && (this.phoneVerifiedValues[e] = this.values[e]);
                                          }),
                                      e
                                  )
                              );
                },
                scrollIntoField(e) {
                    if (this.enableScrollIntoField) return this.$refs.areas.scrollIntoField(e);
                },
                scrollIntoArea(e) {
                    return this.$refs.areas.scrollIntoArea(e);
                },
                async submitStep() {
                    this.isSubmitting = !0;
                    const e = this.currentStep;
                    (["signature", "phone", "initials", "payment"].includes(this.currentField.type) ? this.$refs.currentStep.submit : () => Promise.resolve({}))()
                        .then(async () => {
                            const t = this.stepFields.find((t, n) => !(n >= e) && t.some((e) => e.required && ("phone" === e.type || !this.allowToSkip) && Lp(this.submittedValues[e.uuid]))),
                                n = new FormData(this.$refs.form),
                                i = e === this.stepFields.length - 1;
                            let a;
                            !i || t || this.inviteSubmitters.length || n.append("completed", "true"),
                                (a = !i && this.phoneVerifiedValues[this.currentField.uuid] && this.phoneVerifiedValues[this.currentField.uuid] === this.values[this.currentField.uuid] ? Promise.resolve({}) : this.saveStep(n)),
                                await a
                                    .then(async (n) => {
                                        if (422 === n.status || 500 === n.status) {
                                            const e = await n.json(),
                                                t = e.error ? this.t(e.error.replace(/\s+/g, "_").toLowerCase()) : "";
                                            return alert(t !== e.error ? t : e.error || this.t("value_is_invalid")), Promise.reject(new Error(e.error));
                                        }
                                        const a = (i && t) || this.stepFields[e + 1];
                                        a
                                            ? (this.alwaysMinimize && this.minimizeForm(), this.goToStep(this.stepFields.indexOf(a), this.autoscrollFields), t === a && (this.showFillAllRequiredFields = !0))
                                            : this.inviteSubmitters.length
                                            ? (this.isInvite = !0)
                                            : this.performComplete(n);
                                    })
                                    .catch((e) => {
                                        console.error(e);
                                    })
                                    .finally(() => {
                                        this.isSubmitting = !1;
                                    });
                        })
                        .catch((e) => {
                            "Image too small" === e?.message ? alert(this.t("signature_is_too_small_please_redraw")) : console.log(e);
                        })
                        .finally(() => {
                            this.isSubmitting = !1;
                        });
                },
                minimizeForm() {
                    (this.isFormVisible = !1), (this.isShowContinue = !0);
                },
                async performComplete(e) {
                    if (((this.isCompleted = !0), e?.text)) {
                        const t = await e.text();
                        t && this.onComplete(JSON.parse(t));
                    }
                    this.completedRedirectUrl && (window.location.href = this.completedRedirectUrl);
                },
            },
        },
        Wp = (0, Qr.A)(Np, [
            [
                "render",
                function (e, t, n, i, a, r) {
                    const o = Yn("FieldAreas"),
                        s = Yn("FormulaFieldAreas"),
                        l = Yn("IconWritingSign"),
                        d = Yn("IconArrowsDiagonal"),
                        c = Yn("IconArrowsDiagonalMinimize2"),
                        u = Yn("TextStep"),
                        p = Yn("NumberStep"),
                        h = Yn("DateStep"),
                        m = Yn("MarkdownContent"),
                        b = Yn("AppearsOn"),
                        g = Yn("MultiSelectStep"),
                        f = Yn("ImageStep"),
                        v = Yn("SignatureStep"),
                        y = Yn("InitialsStep"),
                        _ = Yn("AttachmentStep"),
                        w = Yn("PhoneStep"),
                        x = Yn("PaymentStep"),
                        k = Yn("IconInnerShadowTop"),
                        S = Yn("InviteForm"),
                        C = Yn("FormCompleted");
                    return (
                        Xi(),
                        ia(
                            Ki,
                            null,
                            [
                                ua(
                                    o,
                                    {
                                        ref: "areas",
                                        steps: r.stepFields,
                                        values: n.values,
                                        "with-field-placeholder": n.withFieldPlaceholder,
                                        submitter: n.submitter,
                                        "scroll-el": n.scrollEl,
                                        "with-signature-id": n.withSignatureId,
                                        "attachments-index": r.attachmentsIndex,
                                        "with-label": !r.isAnonymousChecboxes && n.showFieldNames,
                                        "current-step": r.currentStepFields,
                                        "scroll-padding": n.scrollPadding,
                                        onFocusStep: t[0] || (t[0] = (e) => [r.saveStep(), "checkbox" !== r.currentField.type ? (a.isFormVisible = !0) : "", r.goToStep(e, !1, !0)]),
                                    },
                                    null,
                                    8,
                                    ["steps", "values", "with-field-placeholder", "submitter", "scroll-el", "with-signature-id", "attachments-index", "with-label", "current-step", "scroll-padding"]
                                ),
                                ua(o, { steps: r.readonlyConditionalFields.map((e) => [e]), values: r.readonlyConditionalFields.reduce((e, t) => ((e[t.uuid] = t.default_value), e), {}), submitter: n.submitter, submittable: !1 }, null, 8, [
                                    "steps",
                                    "values",
                                    "submitter",
                                ]),
                                r.formulaFields.length ? (Xi(), aa(s, { key: 0, fields: r.formulaFields, values: n.values }, null, 8, ["fields", "values"])) : ba("", !0),
                                a.isFormVisible
                                    ? ba("", !0)
                                    : (Xi(),
                                      ia(
                                          "button",
                                          {
                                              key: 1,
                                              id: "expand_form_button",
                                              class: "btn btn-neutral flex text-white absolute bottom-0 w-full mb-3",
                                              style: { width: "96%", "margin-left": "2%" },
                                              onClick: t[1] || (t[1] = xr((e) => [(a.isFormVisible = !0), r.scrollIntoField(r.currentField)], ["prevent"])),
                                          },
                                          [
                                              ["initials", "signature"].includes(r.currentField.type)
                                                  ? (Xi(), ia(Ki, { key: 0 }, [ua(l, { "stroke-width": "1.5" }), ha(" " + te(r.t("sign_now")), 1)], 64))
                                                  : r.alwaysMinimize
                                                  ? (Xi(), ia(Ki, { key: 1 }, [ha(te(r.t("next")), 1)], 64))
                                                  : a.isShowContinue
                                                  ? (Xi(), ia(Ki, { key: 2 }, [ha(te(r.t("continue")), 1)], 64))
                                                  : (Xi(), ia(Ki, { key: 3 }, [ha(te(r.t("start_now")), 1)], 64)),
                                              ua(d, { class: "absolute right-0 mr-4", width: 20, height: 20 }),
                                          ]
                                      )),
                                yn(
                                    ca(
                                        "div",
                                        {
                                            id: "form_container",
                                            class: J(["shadow-md bg-base-100 absolute bottom-0 w-full border-base-200 border p-4 rounded", { "md:bottom-4": n.isBreakpointMd }]),
                                            style: G({ backgroundColor: n.backgroundColor }),
                                        },
                                        [
                                            a.isCompleted
                                                ? ba("", !0)
                                                : (Xi(),
                                                  ia(
                                                      "button",
                                                      {
                                                          key: 0,
                                                          id: "minimize_form_button",
                                                          class: "absolute right-0 mr-2 mt-2 top-0 hidden md:block",
                                                          title: r.t("minimize"),
                                                          onClick: t[2] || (t[2] = xr((...e) => r.minimizeForm && r.minimizeForm(...e), ["prevent"])),
                                                      },
                                                      [ua(c, { width: 20, height: 20 })],
                                                      8,
                                                      ks
                                                  )),
                                            ca(
                                                "div",
                                                { class: J({ "md:px-4": n.isBreakpointMd }) },
                                                [
                                                    a.isCompleted || a.isInvite
                                                        ? a.isInvite
                                                            ? (Xi(),
                                                              aa(
                                                                  S,
                                                                  {
                                                                      key: 1,
                                                                      submitters: n.inviteSubmitters,
                                                                      "submitter-slug": r.submitterSlug,
                                                                      "authenticity-token": n.authenticityToken,
                                                                      url: n.baseUrl + r.submitPath + "/invite",
                                                                      style: G({ maxWidth: n.isBreakpointMd ? "582px" : "" }),
                                                                      onSuccess: t[36] || (t[36] = (e) => [(a.isInvite = !1), r.performComplete(e)]),
                                                                  },
                                                                  null,
                                                                  8,
                                                                  ["submitters", "submitter-slug", "authenticity-token", "url", "style"]
                                                              ))
                                                            : (Xi(),
                                                              aa(
                                                                  C,
                                                                  {
                                                                      key: 2,
                                                                      "is-demo": n.isDemo,
                                                                      attribution: n.attribution,
                                                                      "has-signature-fields": r.stepFields.some((e) => e.some((e) => ["signature", "initials"].includes(e.type))),
                                                                      "has-multiple-documents": r.hasMultipleDocuments,
                                                                      "completed-button": n.completedRedirectUrl ? {} : n.completedButton,
                                                                      "completed-message": n.completedRedirectUrl ? {} : n.completedMessage,
                                                                      "with-send-copy-button": n.withSendCopyButton && !n.completedRedirectUrl,
                                                                      "with-download-button": n.withDownloadButton && !n.completedRedirectUrl && !n.dryRun,
                                                                      "with-confetti": n.withConfetti,
                                                                      "can-send-email": n.canSendEmail && !!n.submitter.email,
                                                                      "submitter-slug": r.submitterSlug,
                                                                  },
                                                                  null,
                                                                  8,
                                                                  [
                                                                      "is-demo",
                                                                      "attribution",
                                                                      "has-signature-fields",
                                                                      "has-multiple-documents",
                                                                      "completed-button",
                                                                      "completed-message",
                                                                      "with-send-copy-button",
                                                                      "with-download-button",
                                                                      "with-confetti",
                                                                      "can-send-email",
                                                                      "submitter-slug",
                                                                  ]
                                                              ))
                                                        : (Xi(),
                                                          ia(
                                                              "form",
                                                              {
                                                                  key: 0,
                                                                  ref: "form",
                                                                  action: r.submitPath,
                                                                  method: "post",
                                                                  class: "mx-auto",
                                                                  style: G({ maxWidth: n.isBreakpointMd ? "582px" : "" }),
                                                                  onSubmit: t[35] || (t[35] = xr((...e) => r.submitStep && r.submitStep(...e), ["prevent"])),
                                                              },
                                                              [
                                                                  ca("input", { type: "hidden", name: "authenticity_token", value: n.authenticityToken }, null, 8, Cs),
                                                                  Fs,
                                                                  ca("div", Is, [
                                                                      ["cells", "text"].includes(r.currentField.type)
                                                                          ? (Xi(),
                                                                            ia("div", zs, [
                                                                                (Xi(),
                                                                                aa(
                                                                                    u,
                                                                                    {
                                                                                        key: r.currentField.uuid,
                                                                                        modelValue: n.values[r.currentField.uuid],
                                                                                        "onUpdate:modelValue": t[3] || (t[3] = (e) => (n.values[r.currentField.uuid] = e)),
                                                                                        "show-field-names": n.showFieldNames,
                                                                                        field: r.currentField,
                                                                                        onFocus: t[4] || (t[4] = (e) => r.scrollIntoField(r.currentField)),
                                                                                    },
                                                                                    null,
                                                                                    8,
                                                                                    ["modelValue", "show-field-names", "field"]
                                                                                )),
                                                                            ]))
                                                                          : "number" === r.currentField.type
                                                                          ? (Xi(),
                                                                            aa(
                                                                                p,
                                                                                {
                                                                                    key: r.currentField.uuid,
                                                                                    modelValue: n.values[r.currentField.uuid],
                                                                                    "onUpdate:modelValue": t[5] || (t[5] = (e) => (n.values[r.currentField.uuid] = e)),
                                                                                    "show-field-names": n.showFieldNames,
                                                                                    field: r.currentField,
                                                                                    onFocus: t[6] || (t[6] = (e) => r.scrollIntoField(r.currentField)),
                                                                                },
                                                                                null,
                                                                                8,
                                                                                ["modelValue", "show-field-names", "field"]
                                                                            ))
                                                                          : "date" === r.currentField.type
                                                                          ? (Xi(),
                                                                            aa(
                                                                                h,
                                                                                {
                                                                                    key: r.currentField.uuid,
                                                                                    modelValue: n.values[r.currentField.uuid],
                                                                                    "onUpdate:modelValue": t[7] || (t[7] = (e) => (n.values[r.currentField.uuid] = e)),
                                                                                    "show-field-names": n.showFieldNames,
                                                                                    field: r.currentField,
                                                                                    onSubmit: t[8] || (t[8] = (e) => !a.isSubmitting && r.submitStep()),
                                                                                    onFocus: t[9] || (t[9] = (e) => r.scrollIntoField(r.currentField)),
                                                                                },
                                                                                null,
                                                                                8,
                                                                                ["modelValue", "show-field-names", "field"]
                                                                            ))
                                                                          : "select" === r.currentField.type
                                                                          ? (Xi(),
                                                                            ia("div", Ms, [
                                                                                n.showFieldNames && (r.currentField.name || r.currentField.title)
                                                                                    ? (Xi(),
                                                                                      ia(
                                                                                          "label",
                                                                                          { key: 0, for: r.currentField.uuid, dir: "auto", class: J(["label text-2xl", { "mb-2": !r.currentField.description }]) },
                                                                                          [
                                                                                              r.currentField.title
                                                                                                  ? (Xi(), aa(m, { key: 0, string: r.currentField.title }, null, 8, ["string"]))
                                                                                                  : (Xi(),
                                                                                                    ia(
                                                                                                        Ki,
                                                                                                        { key: 1 },
                                                                                                        [
                                                                                                            ha(te(r.currentField.name) + " ", 1),
                                                                                                            r.currentField.required ? ba("", !0) : (Xi(), ia(Ki, { key: 0 }, [ha("(" + te(r.t("optional")) + ")", 1)], 64)),
                                                                                                        ],
                                                                                                        64
                                                                                                    )),
                                                                                          ],
                                                                                          10,
                                                                                          Ps
                                                                                      ))
                                                                                    : (Xi(), ia("div", qs)),
                                                                                r.currentField.description ? (Xi(), ia("div", js, [ua(m, { string: r.currentField.description }, null, 8, ["string"])])) : ba("", !0),
                                                                                ua(b, { field: r.currentField }, null, 8, ["field"]),
                                                                                ca(
                                                                                    "select",
                                                                                    {
                                                                                        id: r.currentField.uuid,
                                                                                        dir: "auto",
                                                                                        required: r.currentField.required,
                                                                                        class: J(["select base-input !text-2xl w-full text-center font-normal", { "text-gray-300": !n.values[r.currentField.uuid] }]),
                                                                                        name: `values[${r.currentField.uuid}]`,
                                                                                        onChange: t[10] || (t[10] = (e) => (n.values[r.currentField.uuid] = e.target.value)),
                                                                                        onFocus: t[11] || (t[11] = (e) => r.scrollIntoField(r.currentField)),
                                                                                    },
                                                                                    [
                                                                                        ca("option", { value: "", selected: !n.values[r.currentField.uuid], class: "text-gray-300" }, te(r.t("select_your_option")), 9, As),
                                                                                        (Xi(!0),
                                                                                        ia(
                                                                                            Ki,
                                                                                            null,
                                                                                            ei(
                                                                                                r.currentField.options,
                                                                                                (e) => (
                                                                                                    Xi(),
                                                                                                    ia(
                                                                                                        "option",
                                                                                                        { key: e.uuid, selected: n.values[r.currentField.uuid] == e.value, value: e.value, class: "text-base-content" },
                                                                                                        te(e.value),
                                                                                                        9,
                                                                                                        Ts
                                                                                                    )
                                                                                                )
                                                                                            ),
                                                                                            128
                                                                                        )),
                                                                                    ],
                                                                                    42,
                                                                                    Es
                                                                                ),
                                                                            ]))
                                                                          : "radio" === r.currentField.type
                                                                          ? (Xi(),
                                                                            ia("div", Ds, [
                                                                                n.showFieldNames && (r.currentField.name || r.currentField.title)
                                                                                    ? (Xi(),
                                                                                      ia(
                                                                                          "label",
                                                                                          { key: 0, for: r.currentField.uuid, dir: "auto", class: J(["label text-2xl", { "mb-2": !r.currentField.description }]) },
                                                                                          [
                                                                                              r.currentField.title
                                                                                                  ? (Xi(), aa(m, { key: 0, string: r.currentField.title }, null, 8, ["string"]))
                                                                                                  : (Xi(),
                                                                                                    ia(
                                                                                                        Ki,
                                                                                                        { key: 1 },
                                                                                                        [
                                                                                                            ha(te(r.currentField.name) + " ", 1),
                                                                                                            r.currentField.required ? ba("", !0) : (Xi(), ia(Ki, { key: 0 }, [ha("(" + te(r.t("optional")) + ")", 1)], 64)),
                                                                                                        ],
                                                                                                        64
                                                                                                    )),
                                                                                          ],
                                                                                          10,
                                                                                          Os
                                                                                      ))
                                                                                    : ba("", !0),
                                                                                r.currentField.description ? (Xi(), ia("div", Vs, [ua(m, { string: r.currentField.description }, null, 8, ["string"])])) : ba("", !0),
                                                                                ca("div", Bs, [
                                                                                    !n.showFieldNames || (r.currentField.options.every((e) => !e.value) && r.currentField.options.length > 4)
                                                                                        ? (Xi(),
                                                                                          ia("div", Rs, [
                                                                                              ca("span", { onClick: t[12] || (t[12] = (e) => r.scrollIntoField(r.currentField)) }, [
                                                                                                  ha(te(r.t("complete_hightlighted_checkboxes_and_click")) + " ", 1),
                                                                                                  ca("span", $s, te(r.submitButtonText), 1),
                                                                                                  ha(". "),
                                                                                              ]),
                                                                                          ]))
                                                                                        : ba("", !0),
                                                                                    ca(
                                                                                        "div",
                                                                                        {
                                                                                            class: J([
                                                                                                "space-y-3.5 mx-auto",
                                                                                                { hidden: !n.showFieldNames || (r.currentField.options.every((e) => !e.value) && r.currentField.options.length > 4) },
                                                                                            ]),
                                                                                        },
                                                                                        [
                                                                                            (Xi(!0),
                                                                                            ia(
                                                                                                Ki,
                                                                                                null,
                                                                                                ei(
                                                                                                    r.currentField.options,
                                                                                                    (e, i) => (
                                                                                                        Xi(),
                                                                                                        ia("div", { key: e.uuid }, [
                                                                                                            ca(
                                                                                                                "label",
                                                                                                                { for: e.uuid, class: "flex items-center space-x-3" },
                                                                                                                [
                                                                                                                    yn(
                                                                                                                        ca(
                                                                                                                            "input",
                                                                                                                            {
                                                                                                                                id: e.uuid,
                                                                                                                                "onUpdate:modelValue": t[13] || (t[13] = (e) => (n.values[r.currentField.uuid] = e)),
                                                                                                                                type: "radio",
                                                                                                                                class: "base-radio !h-7 !w-7",
                                                                                                                                name: `values[${r.currentField.uuid}]`,
                                                                                                                                value: e.value || `${r.t("option")} ${i + 1}`,
                                                                                                                                required: r.currentField.required,
                                                                                                                                onClick: t[14] || (t[14] = (e) => r.scrollIntoField(r.currentField)),
                                                                                                                            },
                                                                                                                            null,
                                                                                                                            8,
                                                                                                                            Ls
                                                                                                                        ),
                                                                                                                        [[yr, n.values[r.currentField.uuid]]]
                                                                                                                    ),
                                                                                                                    ca("span", Ns, te(e.value || `${r.t("option")} ${i + 1}`), 1),
                                                                                                                ],
                                                                                                                8,
                                                                                                                Us
                                                                                                            ),
                                                                                                        ])
                                                                                                    )
                                                                                                ),
                                                                                                128
                                                                                            )),
                                                                                        ],
                                                                                        2
                                                                                    ),
                                                                                ]),
                                                                            ]))
                                                                          : "multiple" === r.currentField.type
                                                                          ? (Xi(),
                                                                            aa(
                                                                                g,
                                                                                {
                                                                                    key: r.currentField.uuid,
                                                                                    modelValue: n.values[r.currentField.uuid],
                                                                                    "onUpdate:modelValue": t[15] || (t[15] = (e) => (n.values[r.currentField.uuid] = e)),
                                                                                    "show-field-names": n.showFieldNames,
                                                                                    "is-last-step": r.stepFields.length === a.currentStep + 1,
                                                                                    field: r.currentField,
                                                                                },
                                                                                null,
                                                                                8,
                                                                                ["modelValue", "show-field-names", "is-last-step", "field"]
                                                                            ))
                                                                          : "checkbox" === r.currentField.type
                                                                          ? (Xi(),
                                                                            ia("div", Ws, [
                                                                                r.currentField.description ? (Xi(), ia("div", Gs, [ua(m, { string: r.currentField.description }, null, 8, ["string"])])) : ba("", !0),
                                                                                ca("div", Ks, [
                                                                                    Hs,
                                                                                    ca("div", Ys, [
                                                                                        r.isAnonymousChecboxes || !n.showFieldNames
                                                                                            ? (Xi(),
                                                                                              ia(
                                                                                                  Ki,
                                                                                                  { key: 0 },
                                                                                                  [
                                                                                                      ca("span", Zs, [ha(te(r.t("complete_hightlighted_checkboxes_and_click")) + " ", 1), ca("span", Js, te(r.submitButtonText), 1), ha(". ")]),
                                                                                                      (Xi(!0),
                                                                                                      ia(
                                                                                                          Ki,
                                                                                                          null,
                                                                                                          ei(
                                                                                                              r.currentStepFields,
                                                                                                              (e) => (Xi(), ia("input", { key: e.uuid, type: "hidden", name: `values[${e.uuid}]`, value: !!n.values[e.uuid] }, null, 8, Qs))
                                                                                                          ),
                                                                                                          128
                                                                                                      )),
                                                                                                  ],
                                                                                                  64
                                                                                              ))
                                                                                            : (Xi(!0),
                                                                                              ia(
                                                                                                  Ki,
                                                                                                  { key: 1 },
                                                                                                  ei(
                                                                                                      r.currentStepFields,
                                                                                                      (e, t) => (
                                                                                                          Xi(),
                                                                                                          ia("div", { key: e.uuid }, [
                                                                                                              ca(
                                                                                                                  "label",
                                                                                                                  { for: e.uuid, class: "flex items-center space-x-3" },
                                                                                                                  [
                                                                                                                      ca("input", { type: "hidden", name: `values[${e.uuid}]`, value: !!n.values[e.uuid] }, null, 8, el),
                                                                                                                      ca(
                                                                                                                          "input",
                                                                                                                          {
                                                                                                                              id: e.uuid,
                                                                                                                              type: "checkbox",
                                                                                                                              class: "base-checkbox !h-7 !w-7",
                                                                                                                              oninvalid: `this.setCustomValidity('${r.t("please_check_the_box_to_continue")}')`,
                                                                                                                              onchange: `this.setCustomValidity(validity.valueMissing ? '${r.t("please_check_the_box_to_continue")}' : '');`,
                                                                                                                              required: e.required,
                                                                                                                              checked: !!n.values[e.uuid],
                                                                                                                              onClick: (t) => [r.scrollIntoField(e), (n.values[e.uuid] = !n.values[e.uuid])],
                                                                                                                          },
                                                                                                                          null,
                                                                                                                          8,
                                                                                                                          tl
                                                                                                                      ),
                                                                                                                      e.title
                                                                                                                          ? (Xi(), ia("span", nl, [ua(m, { string: e.title }, null, 8, ["string"])]))
                                                                                                                          : (Xi(), ia("span", il, te(e.name || e.type + " " + (t + 1)), 1)),
                                                                                                                  ],
                                                                                                                  8,
                                                                                                                  Xs
                                                                                                              ),
                                                                                                          ])
                                                                                                      )
                                                                                                  ),
                                                                                                  128
                                                                                              )),
                                                                                    ]),
                                                                                ]),
                                                                            ]))
                                                                          : "image" === r.currentField.type || "stamp" === r.currentField.type
                                                                          ? (Xi(),
                                                                            aa(
                                                                                f,
                                                                                {
                                                                                    key: r.currentField.uuid,
                                                                                    modelValue: n.values[r.currentField.uuid],
                                                                                    "onUpdate:modelValue": t[16] || (t[16] = (e) => (n.values[r.currentField.uuid] = e)),
                                                                                    field: r.currentField,
                                                                                    "dry-run": n.dryRun,
                                                                                    "attachments-index": r.attachmentsIndex,
                                                                                    "submitter-slug": r.submitterSlug,
                                                                                    "show-field-names": n.showFieldNames,
                                                                                    onAttached: t[17] || (t[17] = (e) => [n.attachments.push(e), r.scrollIntoField(r.currentField)]),
                                                                                },
                                                                                null,
                                                                                8,
                                                                                ["modelValue", "field", "dry-run", "attachments-index", "submitter-slug", "show-field-names"]
                                                                            ))
                                                                          : "signature" === r.currentField.type
                                                                          ? (Xi(),
                                                                            aa(
                                                                                v,
                                                                                {
                                                                                    ref: "currentStep",
                                                                                    key: r.currentField.uuid,
                                                                                    modelValue: n.values[r.currentField.uuid],
                                                                                    "onUpdate:modelValue": t[18] || (t[18] = (e) => (n.values[r.currentField.uuid] = e)),
                                                                                    reason: n.values[r.currentField.preferences?.reason_field_uuid],
                                                                                    field: r.currentField,
                                                                                    "previous-value": r.previousSignatureValueFor(r.currentField) || n.previousSignatureValue,
                                                                                    "with-typed-signature": n.withTypedSignature,
                                                                                    "remember-signature": n.rememberSignature,
                                                                                    "attachments-index": r.attachmentsIndex,
                                                                                    "require-signing-reason": n.requireSigningReason,
                                                                                    "button-text": r.submitButtonText,
                                                                                    "dry-run": n.dryRun,
                                                                                    "with-disclosure": n.withDisclosure,
                                                                                    "with-qr-button": n.withQrButton,
                                                                                    submitter: n.submitter,
                                                                                    "show-field-names": n.showFieldNames,
                                                                                    "onUpdate:reason": t[19] || (t[19] = (e) => (n.values[r.currentField.preferences?.reason_field_uuid] = e)),
                                                                                    onAttached: t[20] || (t[20] = (e) => n.attachments.push(e)),
                                                                                    onStart: t[21] || (t[21] = (e) => r.scrollIntoField(r.currentField)),
                                                                                    onMinimize: r.minimizeForm,
                                                                                },
                                                                                null,
                                                                                8,
                                                                                [
                                                                                    "modelValue",
                                                                                    "reason",
                                                                                    "field",
                                                                                    "previous-value",
                                                                                    "with-typed-signature",
                                                                                    "remember-signature",
                                                                                    "attachments-index",
                                                                                    "require-signing-reason",
                                                                                    "button-text",
                                                                                    "dry-run",
                                                                                    "with-disclosure",
                                                                                    "with-qr-button",
                                                                                    "submitter",
                                                                                    "show-field-names",
                                                                                    "onMinimize",
                                                                                ]
                                                                            ))
                                                                          : "initials" === r.currentField.type
                                                                          ? (Xi(),
                                                                            aa(
                                                                                y,
                                                                                {
                                                                                    ref: "currentStep",
                                                                                    key: r.currentField.uuid,
                                                                                    modelValue: n.values[r.currentField.uuid],
                                                                                    "onUpdate:modelValue": t[22] || (t[22] = (e) => (n.values[r.currentField.uuid] = e)),
                                                                                    field: r.currentField,
                                                                                    "dry-run": n.dryRun,
                                                                                    "previous-value": r.previousInitialsValue,
                                                                                    "attachments-index": r.attachmentsIndex,
                                                                                    "show-field-names": n.showFieldNames,
                                                                                    "submitter-slug": r.submitterSlug,
                                                                                    onAttached: t[23] || (t[23] = (e) => n.attachments.push(e)),
                                                                                    onStart: t[24] || (t[24] = (e) => r.scrollIntoField(r.currentField)),
                                                                                    onFocus: t[25] || (t[25] = (e) => r.scrollIntoField(r.currentField)),
                                                                                    onMinimize: r.minimizeForm,
                                                                                },
                                                                                null,
                                                                                8,
                                                                                ["modelValue", "field", "dry-run", "previous-value", "attachments-index", "show-field-names", "submitter-slug", "onMinimize"]
                                                                            ))
                                                                          : "file" === r.currentField.type
                                                                          ? (Xi(),
                                                                            aa(
                                                                                _,
                                                                                {
                                                                                    key: r.currentField.uuid,
                                                                                    modelValue: n.values[r.currentField.uuid],
                                                                                    "onUpdate:modelValue": t[26] || (t[26] = (e) => (n.values[r.currentField.uuid] = e)),
                                                                                    "dry-run": n.dryRun,
                                                                                    field: r.currentField,
                                                                                    "attachments-index": r.attachmentsIndex,
                                                                                    "submitter-slug": r.submitterSlug,
                                                                                    onAttached: t[27] || (t[27] = (e) => [n.attachments.push(e), r.scrollIntoField(r.currentField)]),
                                                                                },
                                                                                null,
                                                                                8,
                                                                                ["modelValue", "dry-run", "field", "attachments-index", "submitter-slug"]
                                                                            ))
                                                                          : "phone" === r.currentField.type
                                                                          ? (Xi(),
                                                                            aa(
                                                                                w,
                                                                                {
                                                                                    ref: "currentStep",
                                                                                    key: r.currentField.uuid,
                                                                                    modelValue: n.values[r.currentField.uuid],
                                                                                    "onUpdate:modelValue": t[28] || (t[28] = (e) => (n.values[r.currentField.uuid] = e)),
                                                                                    field: r.currentField,
                                                                                    locale: n.language?.toLowerCase() || r.browserLanguage,
                                                                                    "show-field-names": n.showFieldNames,
                                                                                    "verified-value": a.phoneVerifiedValues[r.currentField.uuid],
                                                                                    "default-value": n.submitter.phone,
                                                                                    "submitter-slug": r.submitterSlug,
                                                                                    onFocus: t[29] || (t[29] = (e) => r.scrollIntoField(r.currentField)),
                                                                                    onSubmit: t[30] || (t[30] = (e) => !a.isSubmitting && r.submitStep()),
                                                                                },
                                                                                null,
                                                                                8,
                                                                                ["modelValue", "field", "locale", "show-field-names", "verified-value", "default-value", "submitter-slug"]
                                                                            ))
                                                                          : "payment" === r.currentField.type
                                                                          ? (Xi(),
                                                                            aa(
                                                                                x,
                                                                                {
                                                                                    ref: "currentStep",
                                                                                    key: r.currentField.uuid,
                                                                                    modelValue: n.values[r.currentField.uuid],
                                                                                    "onUpdate:modelValue": t[31] || (t[31] = (e) => (n.values[r.currentField.uuid] = e)),
                                                                                    field: r.currentField,
                                                                                    "submitter-slug": r.submitterSlug,
                                                                                    values: n.values,
                                                                                    onAttached: t[32] || (t[32] = (e) => n.attachments.push(e)),
                                                                                    onFocus: t[33] || (t[33] = (e) => r.scrollIntoField(r.currentField)),
                                                                                    onSubmit: t[34] || (t[34] = (e) => !a.isSubmitting && r.submitStep()),
                                                                                },
                                                                                null,
                                                                                8,
                                                                                ["modelValue", "field", "submitter-slug", "values"]
                                                                            ))
                                                                          : ba("", !0),
                                                                  ]),
                                                                  "payment" !== r.currentField.type || a.submittedValues[r.currentField.uuid]
                                                                      ? (Xi(),
                                                                        ia(
                                                                            "div",
                                                                            { key: 0, class: J("signature" === r.currentField.type ? "mt-2" : "mt-6 md:mt-8") },
                                                                            [
                                                                                ca(
                                                                                    "button",
                                                                                    { id: "submit_form_button", ref: "submitButton", type: "submit", class: "base-button w-full flex justify-center", disabled: r.isButtonDisabled },
                                                                                    [
                                                                                        ca("span", rl, [
                                                                                            a.isSubmitting ? (Xi(), aa(k, { key: 0, class: "mr-1 animate-spin" })) : ba("", !0),
                                                                                            ca("span", null, te(r.submitButtonText), 1),
                                                                                            a.isSubmitting ? (Xi(), ia("span", ol, sl)) : ba("", !0),
                                                                                        ]),
                                                                                    ],
                                                                                    8,
                                                                                    al
                                                                                ),
                                                                                a.showFillAllRequiredFields ? (Xi(), ia("div", ll, te(r.t("please_fill_all_required_fields")), 1)) : ba("", !0),
                                                                            ],
                                                                            2
                                                                        ))
                                                                      : ba("", !0),
                                                              ],
                                                              44,
                                                              Ss
                                                          )),
                                                    r.stepFields.length < 80
                                                        ? (Xi(),
                                                          ia("div", dl, [
                                                              ca("div", cl, [
                                                                  (Xi(!0),
                                                                  ia(
                                                                      Ki,
                                                                      null,
                                                                      ei(
                                                                          r.stepFields,
                                                                          (e, t) => (
                                                                              Xi(),
                                                                              ia(
                                                                                  "a",
                                                                                  {
                                                                                      key: e[0].uuid,
                                                                                      href: "#",
                                                                                      class: J([
                                                                                          "inline border border-base-300 h-3 w-3 rounded-full mx-1 mt-1",
                                                                                          {
                                                                                              "bg-base-300": t === a.currentStep,
                                                                                              "bg-base-content":
                                                                                                  (t < a.currentStep && r.stepFields[t].every((e) => !e.required || ![null, void 0, ""].includes(n.values[e.uuid]))) || a.isCompleted,
                                                                                              "bg-white": t > a.currentStep,
                                                                                          },
                                                                                      ]),
                                                                                      onClick: xr((e) => (a.isCompleted ? "" : [r.saveStep(), r.goToStep(t, !0)]), ["prevent"]),
                                                                                  },
                                                                                  null,
                                                                                  10,
                                                                                  ul
                                                                              )
                                                                          )
                                                                      ),
                                                                      128
                                                                  )),
                                                              ]),
                                                          ]))
                                                        : (Xi(), ia("div", pl)),
                                                ],
                                                2
                                            ),
                                        ],
                                        6
                                    ),
                                    [[Sr, a.isFormVisible]]
                                ),
                            ],
                            64
                        )
                    );
                },
            ],
        ]),
        Gp = Wp,
        Kp = ["src", "width", "height"],
        Hp = ["id"],
        Yp = ["href"],
        Zp = {
            name: "FormDocument",
            components: { FieldArea: Yl },
            props: {
                defaultValues: { type: Object, required: !1, default: () => ({}) },
                baseUrl: { type: String, required: !0 },
                document: { type: Object, required: !0 },
                attachmentsIndex: { type: Object, required: !1, default: () => ({}) },
                documentPageAreasIndex: { type: Object, required: !1, default: () => ({}) },
                documentPageAnnotationsIndex: { type: Object, required: !1, default: () => ({}) },
                values: { type: Object, required: !1, default: () => ({}) },
            },
            computed: {
                numberOfPages() {
                    return this.document.metadata?.pdf?.number_of_pages || this.document.preview_images.length;
                },
                sortedPreviewImages() {
                    const e = this.document.preview_images[this.document.preview_images.length - 1].metadata;
                    return [...Array(this.numberOfPages).keys()].map(
                        (t) => this.previewImagesIndex[t] || { metadata: e, id: Math.random().toString(), url: `${this.baseUrl}/preview/${this.document.signed_uuid || this.document.uuid}/${t}.jpg` }
                    );
                },
                previewImagesIndex() {
                    return this.document.preview_images.reduce((e, t) => ((e[parseInt(t.filename)] = t), e), {});
                },
            },
            methods: {
                isEmpty: (e) => null == e || (Array.isArray(e) ? 0 === e.length : "string" == typeof e ? 0 === e.trim().length : "object" == typeof e ? 0 === Object.keys(e).length : !1 === e),
                onImageLoad(e) {
                    e.target.setAttribute("width", e.target.naturalWidth), e.target.setAttribute("height", e.target.naturalHeight);
                },
            },
        },
        Jp = {
            name: "FormPages",
            components: {
                Logo: Xr,
                FormDocument: (0, Qr.A)(Zp, [
                    [
                        "render",
                        function (e, t, n, i, a, r) {
                            const o = Yn("FieldArea");
                            return (
                                Xi(!0),
                                ia(
                                    Ki,
                                    null,
                                    ei(
                                        r.sortedPreviewImages,
                                        (e, i) => (
                                            Xi(),
                                            ia("div", { key: e.uuid, class: "relative my-4 shadow-md border" }, [
                                                ca("img", { loading: "lazy", src: e.url, width: e.metadata.width, height: e.metadata.height, onLoad: t[0] || (t[0] = (...e) => r.onImageLoad && r.onImageLoad(...e)) }, null, 40, Kp),
                                                ca(
                                                    "div",
                                                    { id: `page-${[n.document.uuid, i].join("-")}`, class: "top-0 bottom-0 left-0 right-0 absolute" },
                                                    [
                                                        n.documentPageAnnotationsIndex[n.document.uuid]?.[i]?.length
                                                            ? (Xi(!0),
                                                              ia(
                                                                  Ki,
                                                                  { key: 0 },
                                                                  ei(
                                                                      n.documentPageAnnotationsIndex[n.document.uuid][i],
                                                                      (e, t) => (
                                                                          Xi(),
                                                                          ia(
                                                                              "a",
                                                                              {
                                                                                  key: t,
                                                                                  href: e.value,
                                                                                  rel: "noopener noreferrer nofollow",
                                                                                  target: "_blank",
                                                                                  class: "flex absolute",
                                                                                  style: G({ width: 100 * e.w + "%", height: 100 * e.h + "%", left: 100 * e.x + "%", top: 100 * e.y + "%" }),
                                                                              },
                                                                              null,
                                                                              12,
                                                                              Yp
                                                                          )
                                                                      )
                                                                  ),
                                                                  128
                                                              ))
                                                            : ba("", !0),
                                                        n.documentPageAreasIndex[n.document.uuid]?.[i]?.length
                                                            ? (Xi(!0),
                                                              ia(
                                                                  Ki,
                                                                  { key: 1 },
                                                                  ei(
                                                                      n.documentPageAreasIndex[n.document.uuid][i],
                                                                      (e, t) => (
                                                                          Xi(),
                                                                          ia(
                                                                              Ki,
                                                                              { key: t },
                                                                              [
                                                                                  r.isEmpty(n.defaultValues[e.field.uuid] ?? n.values[e.field.uuid] ?? e.field.default_value)
                                                                                      ? ba("", !0)
                                                                                      : (Xi(),
                                                                                        aa(
                                                                                            o,
                                                                                            {
                                                                                                key: 0,
                                                                                                "model-value": n.defaultValues[e.field.uuid] ?? n.values[e.field.uuid] ?? e.field.default_value,
                                                                                                field: e.field,
                                                                                                area: e.area,
                                                                                                submittable: !1,
                                                                                                "attachments-index": n.attachmentsIndex,
                                                                                            },
                                                                                            null,
                                                                                            8,
                                                                                            ["model-value", "field", "area", "attachments-index"]
                                                                                        )),
                                                                              ],
                                                                              64
                                                                          )
                                                                      )
                                                                  ),
                                                                  128
                                                              ))
                                                            : ba("", !0),
                                                    ],
                                                    8,
                                                    Hp
                                                ),
                                            ])
                                        )
                                    ),
                                    128
                                )
                            );
                        },
                    ],
                ]),
                IconInnerShadowTop: ho,
                SubmitterForm: Gp,
            },
            inject: ["t"],
            props: {
                submitter: { type: Object, required: !0 },
                withDecline: { type: Boolean, required: !1, default: !1 },
                withTitle: { type: Boolean, required: !1, default: !0 },
                expand: { type: Boolean, required: !1, default: null },
                scrollEl: { type: Object, required: !1, default: null },
                minimize: { type: Boolean, required: !1, default: !1 },
                rememberSignature: { type: Boolean, required: !1, default: !1 },
                withFieldPlaceholder: { type: Boolean, required: !1, default: !1 },
                language: { type: String, required: !1, default: "" },
                withFieldNames: { type: Boolean, required: !1, default: !0 },
                reuseSignature: { type: Boolean, required: !1, default: !0 },
                autoscrollFields: { type: Boolean, required: !1, default: !0 },
                i18n: { type: Object, required: !1, default: () => {} },
                withSendCopyButton: { type: Boolean, required: !1, default: !0 },
                withDownloadButton: { type: Boolean, required: !1, default: !0 },
                completedRedirectUrl: { type: String, required: !1, default: "" },
                defaultSignatureValue: { type: String, required: !1, default: "" },
                defaultValues: { type: Object, required: !1, default: () => ({}) },
                allowTypedSignature: { type: Boolean, required: !1, default: !0 },
                dryRun: { type: Boolean, required: !1, default: !1 },
                preview: { type: Boolean, required: !1, default: !1 },
                baseUrl: { type: String, required: !0 },
                onComplete: { type: Function, required: !1, default: () => () => {} },
                logo: { type: Object, required: !1, default: null },
                template: { type: Object, required: !0 },
                backgroundColor: { type: String, required: !1, default: "" },
                schema: { type: Array, required: !0 },
                documents: { type: Array, required: !0 },
                goToLast: { type: Boolean, required: !1, default: !0 },
                skipFields: { type: Boolean, required: !1, default: !0 },
                isBreakpointMd: { type: Boolean, required: !1, default: !0 },
                attachments: { type: Array, required: !1, default: () => [] },
                fields: { type: Array, required: !1, default: () => [] },
                readonlyFields: { type: Array, required: !1, default: () => [] },
                completedButton: { type: Object, required: !1, default: () => ({}) },
                completedMessage: { type: Object, required: !1, default: () => ({}) },
                values: { type: Object, required: !1, default: () => ({}) },
            },
            emits: ["decline"],
            data: () => ({ isShowDeclineModal: !1, isDeclineLoading: !1 }),
            computed: {
                documentPageAnnotationsIndex() {
                    return this.sortedDocuments.reduce((e, t) => ((e[t.uuid] = (t.metadata?.pdf?.annotations || []).reduce((e, t) => ((e[t.page] ||= []), e[t.page].push(t), e), {})), e), {});
                },
                submitterFields() {
                    return this.fields.filter((e) => e.submitter_uuid === this.submitter.uuid && !this.readonlyFields.includes(e.name));
                },
                documentPageAreasIndex() {
                    const e = {};
                    return (
                        this.fields.forEach((t) => {
                            (t.submitter_uuid !== this.submitter.uuid || this.readonlyFields.includes(t.name) || (t.readonly && !t.conditions?.length) || this.preview) &&
                                ((t.submitter_uuid !== this.submitter.uuid && "{{date}}" === (this.defaultValues[t.uuid] || this.values[t.uuid] || t.default_value)) ||
                                    (t.areas || []).forEach((n) => {
                                        (e[n.attachment_uuid] ||= {}), (e[n.attachment_uuid][n.page] ||= []), e[n.attachment_uuid][n.page].push({ area: n, field: t });
                                    }));
                        }),
                        e
                    );
                },
                attachmentsIndex() {
                    return this.attachments.reduce((e, t) => ((e[t.uuid] = t), e), {});
                },
                sortedDocuments() {
                    return this.schema.map((e) => this.documents.find((t) => t.uuid === e.attachment_uuid));
                },
            },
            methods: {
                submitDecline() {
                    return (
                        (this.isDeclineLoading = !0),
                        fetch(this.baseUrl + "/embed/submit_form_decline", { method: "POST", body: JSON.stringify({ slug: this.submitter.slug, reason: this.$refs.reasonField.value }), headers: { "Content-Type": "application/json" } })
                            .then(async (e) => {
                                if (e.status >= 400) return console.error("Unable to submit");
                                this.$emit("decline", await e.json());
                            })
                            .finally(() => {
                                this.isDeclineLoading = !1;
                            })
                    );
                },
            },
        },
        Qp = (0, Qr.A)(Jp, [
            [
                "render",
                function (e, t, n, i, a, r) {
                    const o = Yn("Logo"),
                        s = Yn("IconInnerShadowTop"),
                        l = Yn("FormDocument"),
                        d = Yn("SubmitterForm");
                    return (
                        Xi(),
                        ia(
                            Ki,
                            null,
                            [
                                ca("div", null, [
                                    ca("div", ns, [
                                        ca("div", is, [
                                            n.withTitle && !n.withDecline
                                                ? (Xi(),
                                                  ia("div", as, [
                                                      ca(
                                                          "span",
                                                          { class: J(["mx-auto text-2xl font-bold items-center flex space-x-3", { "md:text-3xl": n.isBreakpointMd }]) },
                                                          [
                                                              n.logo
                                                                  ? (Xi(),
                                                                    ia("img", { key: 0, src: n.logo.url, width: n.logo.metadata?.width, alt: "Logo", height: n.logo.metadata?.height, class: "max-h-9 md:max-h-12 w-auto" }, null, 8, rs))
                                                                  : (Xi(), aa(o, { key: 1, class: "w-9 h-9 md:w-12 md:h-12" })),
                                                              ca("span", null, te(n.template.name), 1),
                                                          ],
                                                          2
                                                      ),
                                                  ]))
                                                : ba("", !0),
                                            n.withDecline
                                                ? (Xi(),
                                                  ia("div", os, [
                                                      ca("div", ss, te(n.template.name), 1),
                                                      ca("div", ls, [
                                                          ca("div", null, [
                                                              ca("button", { class: "btn btn-sm !px-5", onClick: t[0] || (t[0] = (e) => (a.isShowDeclineModal = !0)) }, te(r.t("decline")), 1),
                                                              ca(
                                                                  "div",
                                                                  { class: J(["modal items-start !animate-none overflow-y-auto", { "modal-open": a.isShowDeclineModal }]) },
                                                                  [
                                                                      ca("div", ds, [
                                                                          ca("div", cs, [
                                                                              ca("span", null, te(r.t("decline")), 1),
                                                                              ca("label", { class: "text-xl cursor-pointer", onClick: t[1] || (t[1] = (e) => (a.isShowDeclineModal = !1)) }, "×"),
                                                                          ]),
                                                                          ca("div", null, [
                                                                              ca(
                                                                                  "form",
                                                                                  { ref: "declineForm", onSubmit: t[2] || (t[2] = xr((...e) => r.submitDecline && r.submitDecline(...e), ["prevent"])) },
                                                                                  [
                                                                                      ca("div", us, te(r.t("provide_the_reason_you_declined")), 1),
                                                                                      ca("div", ps, [
                                                                                          ca(
                                                                                              "textarea",
                                                                                              {
                                                                                                  id: "reason",
                                                                                                  ref: "reasonField",
                                                                                                  required: "required",
                                                                                                  class: "base-input w-full py-2 h-40",
                                                                                                  dir: "auto",
                                                                                                  placeholder: r.t("reason"),
                                                                                                  style: { height: "200px" },
                                                                                                  rows: "10",
                                                                                                  name: "reason",
                                                                                              },
                                                                                              null,
                                                                                              8,
                                                                                              hs
                                                                                          ),
                                                                                      ]),
                                                                                      ca(
                                                                                          "button",
                                                                                          { name: "button", type: "submit", disabled: a.isDeclineLoading, class: "base-button w-full mt-4" },
                                                                                          [
                                                                                              a.isDeclineLoading
                                                                                                  ? (Xi(),
                                                                                                    ia("span", vs, [
                                                                                                        ca("span", ys, [
                                                                                                            a.isDeclineLoading ? (Xi(), aa(s, { key: 0, class: "mr-1 animate-spin" })) : ba("", !0),
                                                                                                            ca("span", _s, te(r.t("submitting_")), 1),
                                                                                                        ]),
                                                                                                    ]))
                                                                                                  : (Xi(), ia("span", bs, [ca("span", gs, [ca("span", fs, te(r.t("decline")), 1)])])),
                                                                                          ],
                                                                                          8,
                                                                                          ms
                                                                                      ),
                                                                                  ],
                                                                                  544
                                                                              ),
                                                                          ]),
                                                                      ]),
                                                                      ca("label", { class: "modal-backdrop", onClick: t[3] || (t[3] = (e) => (a.isShowDeclineModal = !1)) }),
                                                                  ],
                                                                  2
                                                              ),
                                                          ]),
                                                      ]),
                                                  ]))
                                                : ba("", !0),
                                            (Xi(!0),
                                            ia(
                                                Ki,
                                                null,
                                                ei(
                                                    r.sortedDocuments,
                                                    (e) => (
                                                        Xi(),
                                                        aa(
                                                            l,
                                                            {
                                                                key: e.uuid,
                                                                "document-page-annotations-index": r.documentPageAnnotationsIndex,
                                                                "document-page-areas-index": r.documentPageAreasIndex,
                                                                "base-url": n.baseUrl,
                                                                "attachments-index": r.attachmentsIndex,
                                                                values: n.values,
                                                                "default-values": n.defaultValues,
                                                                document: e,
                                                            },
                                                            null,
                                                            8,
                                                            ["document-page-annotations-index", "document-page-areas-index", "base-url", "attachments-index", "values", "default-values", "document"]
                                                        )
                                                    )
                                                ),
                                                128
                                            )),
                                        ]),
                                    ]),
                                ]),
                                n.preview
                                    ? ba("", !0)
                                    : (Xi(),
                                      ia("div", ws, [
                                          ca("div", xs, [
                                              ca(
                                                  "div",
                                                  { class: J([{ "mx-32": n.isBreakpointMd }, "relative"]) },
                                                  [
                                                      ua(
                                                          d,
                                                          {
                                                              submitter: n.submitter,
                                                              "background-color": n.backgroundColor,
                                                              "can-send-email": !0,
                                                              "allow-to-skip": n.skipFields,
                                                              "previous-signature-value": n.defaultSignatureValue,
                                                              "remember-signature": n.rememberSignature,
                                                              "is-breakpoint-md": n.isBreakpointMd,
                                                              "scroll-el": n.scrollEl,
                                                              "go-to-last": n.goToLast,
                                                              "show-field-names": n.withFieldNames,
                                                              "scroll-padding": n.withDecline ? "-110px" : "-80px",
                                                              attachments: n.attachments,
                                                              attribution: !1,
                                                              "dry-run": n.dryRun,
                                                              i18n: n.i18n,
                                                              "autoscroll-fields": n.autoscrollFields,
                                                              "with-field-placeholder": n.withFieldPlaceholder,
                                                              "reuse-signature": n.reuseSignature,
                                                              expand: n.expand,
                                                              minimize: n.minimize,
                                                              "completed-redirect-url": n.completedRedirectUrl || n.submitter.preferences?.completed_redirect_url,
                                                              language: n.language,
                                                              "with-typed-signature": n.allowTypedSignature,
                                                              "with-send-copy-button": n.withSendCopyButton,
                                                              "with-download-button": n.withDownloadButton,
                                                              "base-url": `${n.baseUrl}/embed`,
                                                              "on-complete": n.onComplete,
                                                              "completed-button": n.completedButton,
                                                              "completed-message": n.completedMessage,
                                                              fields: r.submitterFields,
                                                              values: n.values,
                                                          },
                                                          null,
                                                          8,
                                                          [
                                                              "submitter",
                                                              "background-color",
                                                              "allow-to-skip",
                                                              "previous-signature-value",
                                                              "remember-signature",
                                                              "is-breakpoint-md",
                                                              "scroll-el",
                                                              "go-to-last",
                                                              "show-field-names",
                                                              "scroll-padding",
                                                              "attachments",
                                                              "dry-run",
                                                              "i18n",
                                                              "autoscroll-fields",
                                                              "with-field-placeholder",
                                                              "reuse-signature",
                                                              "expand",
                                                              "minimize",
                                                              "completed-redirect-url",
                                                              "language",
                                                              "with-typed-signature",
                                                              "with-send-copy-button",
                                                              "with-download-button",
                                                              "base-url",
                                                              "on-complete",
                                                              "completed-button",
                                                              "completed-message",
                                                              "fields",
                                                              "values",
                                                          ]
                                                      ),
                                                  ],
                                                  2
                                              ),
                                          ]),
                                      ])),
                            ],
                            64
                        )
                    );
                },
            ],
        ]);
    var Xp = uo("info-circle", 0, [
        ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }],
        ["path", { d: "M12 9h.01", key: "svg-1" }],
        ["path", { d: "M11 12h1v4h1", key: "svg-2" }],
    ]);
    const eh = {
            en: {
                ...Up.en,
                decline: "Decline",
                declined_on: "Declined on",
                reason: "Reason",
                provide_the_reason_you_declined: "Provide the reason you declined",
                provide_your_email_to_start: "Provide your email to start",
                email: "Email",
                submitting_: "Submitting...",
                expired_on: "Expired on",
                start: "Start",
                form_has_been_submitted_already: "Form has been submitted already",
                email_has_been_sent: "Email has been sent",
                sending_: "Sending...",
                send_copy_via_email: "Send copy via email",
                resubmit: "Resubmit",
                submitted_on: "Submitted on",
            },
            es: {
                ...Up.es,
                decline: "Rechazar",
                declined_on: "Rechazado el",
                reason: "Razón",
                provide_the_reason_you_declined: "Proporcione la razón por la que rechazó",
                provide_your_email_to_start: "Proporcione su correo electrónico para comenzar",
                email: "Correo electrónico",
                submitting_: "Enviando...",
                expired_on: "Expirado el",
                start: "Comenzar",
                form_has_been_submitted_already: "El formulario ya ha sido enviado",
                email_has_been_sent: "El correo electrónico ha sido enviado",
                sending_: "Enviando...",
                send_copy_via_email: "Enviar copia por correo electrónico",
                resubmit: "Volver a enviar",
                submitted_on: "Enviado en",
            },
            it: {
                ...Up.it,
                decline: "Rifiuta",
                declined_on: "Rifiutato il",
                reason: "Motivo",
                provide_the_reason_you_declined: "Fornisci il motivo per cui hai rifiutato",
                provide_your_email_to_start: "Fornisci la tua email per iniziare",
                email: "Email",
                submitting_: "Invio in corso...",
                start: "Inizia",
                expired_on: "Scaduto il",
                form_has_been_submitted_already: "Il modulo è già stato inviato",
                email_has_been_sent: "L'email è stata inviata",
                sending_: "Invio in corso...",
                send_copy_via_email: "Invia copia via email",
                resubmit: "Rinvia",
                submitted_on: "Inviato il",
            },
            de: {
                ...Up.de,
                decline: "Ablehnen",
                declined_on: "Abgelehnt am",
                reason: "Grund",
                provide_the_reason_you_declined: "Bitte geben Sie den Grund für Ihre Ablehnung an",
                provide_your_email_to_start: "Geben Sie Ihre E-Mail-Adresse ein, um zu starten",
                email: "E-Mail",
                submitting_: "Senden...",
                start: "Starten",
                expired_on: "Abgelaufen am",
                form_has_been_submitted_already: "Das Formular wurde bereits gesendet",
                email_has_been_sent: "E-Mail wurde gesendet",
                sending_: "Senden...",
                send_copy_via_email: "Kopie per E-Mail senden",
                resubmit: "Erneut senden",
                submitted_on: "Gesendet am",
            },
            fr: {
                ...Up.fr,
                decline: "Refuser",
                declined_on: "Refusé le",
                reason: "Raison",
                provide_the_reason_you_declined: "Veuillez fournir la raison pour laquelle vous avez refusé",
                provide_your_email_to_start: "Entrez votre adresse e-mail pour commencer",
                email: "E-mail",
                submitting_: "Envoi en cours...",
                start: "Démarrer",
                expired_on: "Expiré le",
                form_has_been_submitted_already: "Le formulaire a déjà été soumis",
                email_has_been_sent: "L'e-mail a été envoyé",
                sending_: "Envoi en cours...",
                send_copy_via_email: "Envoyer une copie par e-mail",
                resubmit: "Renvoyer",
                submitted_on: "Soumis le",
            },
            pl: {
                ...Up.pl,
                decline: "Odmówić",
                declined_on: "Odmówiono w",
                reason: "Powód",
                provide_the_reason_you_declined: "Podaj powód odmowy",
                provide_your_email_to_start: "Podaj swój adres e-mail, aby rozpocząć",
                email: "E-mail",
                submitting_: "Wysyłanie...",
                start: "Rozpocznij",
                expired_on: "Wygasło dnia",
                form_has_been_submitted_already: "Formularz został już wysłany",
                email_has_been_sent: "E-mail został wysłany",
                sending_: "Wysyłanie...",
                send_copy_via_email: "Wyślij kopię przez e-mail",
                resubmit: "Ponownie wyślij",
                submitted_on: "Wysłano dnia",
            },
            uk: {
                ...Up.uk,
                decline: "Відмовитися",
                declined_on: "Відмовлено",
                reason: "Причина",
                provide_the_reason_you_declined: "Вкажіть причину вашої відмови",
                provide_your_email_to_start: "Вкажіть свою електронну адресу, щоб розпочати",
                email: "Електронна пошта",
                submitting_: "Відправка...",
                start: "Почати",
                expired_on: "Термін дії закінчився",
                form_has_been_submitted_already: "Форма вже була відправлена",
                email_has_been_sent: "Електронний лист відправлено",
                sending_: "Відправка...",
                send_copy_via_email: "Надіслати копію електронною поштою",
                resubmit: "Відправити знову",
                submitted_on: "Відправлено",
            },
            cs: {
                ...Up.cs,
                decline: "Odmítnout",
                declined_on: "Odmítnuto dne",
                reason: "Důvod",
                provide_the_reason_you_declined: "Uveďte důvod, proč jste odmítli",
                provide_your_email_to_start: "Zadejte svůj e-mail pro spuštění",
                email: "E-mail",
                submitting_: "Odesílání...",
                start: "Spustit",
                expired_on: "Platnost vypršela dne",
                form_has_been_submitted_already: "Formulář již byl odeslán",
                email_has_been_sent: "E-mail byl odeslán",
                sending_: "Odesílání...",
                send_copy_via_email: "Odeslat kopii e-mailem",
                resubmit: "Odeslat znovu",
                submitted_on: "Odesláno dne",
            },
            pt: {
                ...Up.pt,
                decline: "Recusar",
                declined_on: "Recusado em",
                reason: "Motivo",
                provide_the_reason_you_declined: "Forneça o motivo pelo qual você recusou",
                provide_your_email_to_start: "Forneça seu e-mail para começar",
                email: "E-mail",
                submitting_: "Enviando...",
                start: "Iniciar",
                form_has_been_submitted_already: "O formulário já foi enviado",
                expired_on: "Expirado em",
                email_has_been_sent: "E-mail enviado",
                sending_: "Enviando...",
                send_copy_via_email: "Enviar cópia por e-mail",
                resubmit: "Reenviar",
                submitted_on: "Enviado em",
            },
            he: {
                ...Up.he,
                decline: "סירוב",
                declined_on: "נדחה ב",
                reason: "סיבה",
                provide_the_reason_you_declined: "אנא ספק את הסיבה לסירובך",
                provide_your_email_to_start: "ספק את כתובת האימייל שלך כדי להתחיל",
                email: "אימייל",
                submitting_: "מבצע שליחה...",
                start: "התחל",
                form_has_been_submitted_already: "הטופס כבר נשלח",
                expired_on: "פג תוקף בתאריך",
                email_has_been_sent: "האימייל נשלח",
                sending_: "שולח...",
                send_copy_via_email: "שלח עותק באמצעות אימייל",
                resubmit: "שלח מחדש",
                submitted_on: "נשלח בתאריך",
            },
            nl: {
                ...Up.nl,
                decline: "Afwijzen",
                declined_on: "Afgewezen op",
                reason: "Reden",
                provide_the_reason_you_declined: "Geef de reden op waarom je hebt afgewezen",
                provide_your_email_to_start: "Geef uw e-mailadres om te beginnen",
                email: "E-mail",
                submitting_: "Bezig met indienen...",
                start: "Start",
                form_has_been_submitted_already: "Formulier is al ingediend",
                email_has_been_sent: "E-mail is verstuurd",
                sending_: "Versturen...",
                send_copy_via_email: "Stuur kopie via e-mail",
                resubmit: "Opnieuw indienen",
                expired_on: "Verlopen op",
                submitted_on: "Ingediend op",
            },
            ar: {
                ...Up.ar,
                decline: "رفض",
                declined_on: "تم الرفض في",
                reason: "السبب",
                provide_the_reason_you_declined: "يرجى تقديم السبب الذي تم الرفض بسببه",
                provide_your_email_to_start: "قدم بريدك الإلكتروني للبدء",
                email: "البريد الإلكتروني",
                submitting_: "جارٍ الإرسال",
                start: "بدء",
                expired_on: "انتهت الصلاحية في",
                form_has_been_submitted_already: "تم تقديم الاستمارة بالفعل",
                email_has_been_sent: "تم إرسال البريد الإلكتروني",
                sending_: "جارٍ الإرسال",
                send_copy_via_email: "إرسال نسخة عبر البريد الإلكتروني",
                resubmit: "إعادة التقديم",
                submitted_on: "تم التقديم في",
            },
            ko: {
                ...Up.ko,
                decline: "거절하다",
                declined_on: "거절한 날짜",
                reason: "이유",
                provide_the_reason_you_declined: "거절한 이유를 제공하세요",
                provide_your_email_to_start: "이메일을 제공하여 시작하세요",
                email: "이메일",
                submitting_: "제출 중...",
                expired_on: "만료 일시",
                start: "시작",
                form_has_been_submitted_already: "양식이 이미 제출되었습니다",
                email_has_been_sent: "이메일이 전송되었습니다",
                sending_: "전송 중...",
                send_copy_via_email: "이메일로 사본 보내기",
                resubmit: "재제출",
                submitted_on: "제출 일시",
            },
        },
        th = {
            name: "DocusealForm",
            components: { FormStart: bo, FormCompleted: Bo, FormExpired: ts, IconInfoCircle: Xp, FormPages: Qp },
            provide() {
                return { t: this.t };
            },
            props: {
                src: { type: String, required: !1, default: "" },
                expand: { type: Boolean, required: !1, default: null },
                minimize: { type: Boolean, required: !1, default: !1 },
                scrollEl: { type: Object, required: !1, default: null },
                onComplete: { type: Function, required: !1, default: () => () => {} },
                onDecline: { type: Function, required: !1, default: () => () => {} },
                onInit: { type: Function, required: !1, default: () => () => {} },
                onLoad: { type: Function, required: !1, default: () => () => {} },
                preview: { type: Boolean, required: !1, default: !1 },
                language: { type: String, required: !1, default: "" },
                goToLast: { type: Boolean, required: !1, default: !0 },
                withFieldPlaceholder: { type: Boolean, required: !1, default: !1 },
                withFieldNames: { type: Boolean, required: !1, default: !0 },
                skipFields: { type: Boolean, required: !1, default: !0 },
                autoscrollFields: { type: Boolean, required: !1, default: !0 },
                reuseSignature: { type: Boolean, required: !1, default: !0 },
                dryRun: { type: Boolean, required: !1, default: !1 },
                fields: { type: Array, required: !1, default: () => [] },
                submitter: { type: String, required: !1, default: "" },
                externalId: { type: String, required: !1, default: "" },
                rememberSignature: { type: Boolean, required: !1, default: !1 },
                signature: { type: String, required: !1, default: "" },
                completedRedirectUrl: { type: String, required: !1, default: "" },
                backgroundColor: { type: String, required: !1, default: "" },
                withTitle: { type: Boolean, required: !1, default: !0 },
                withDecline: { type: Boolean, required: !1, default: !1 },
                withDownloadButton: { type: Boolean, required: !1, default: !0 },
                sendCopyEmail: { type: Boolean, required: !1, default: null },
                withSendCopyButton: { type: Boolean, required: !1, default: !0 },
                withResubmitButton: { type: Boolean, required: !1, default: !0 },
                allowTypedSignature: { type: Boolean, required: !1, default: !0 },
                logo: { type: String, required: !1, default: "" },
                i18n: { type: Object, required: !1, default: () => {} },
                values: { type: Object, required: !1, default: () => ({}) },
                metadata: { type: Object, required: !1, default: () => ({}) },
                readonlyFields: { type: Array, required: !1, default: () => [] },
                completedButton: { type: Object, required: !1, default: () => ({}) },
                completedMessage: { type: Object, required: !1, default: () => ({}) },
                email: { type: String, required: !1, default: "" },
                customCss: { type: String, required: !1, default: "" },
            },
            data: () => ({ form: null, isBreakpointMd: !0 }),
            computed: {
                browserLanguage: () => (navigator.language || navigator.userLanguage || "en").split("-")[0],
                signedSignatureUuids() {
                    if (!this.rememberSignature) return {};
                    try {
                        return JSON.parse(window.localStorage.getItem("signed_signature_uuids") || "{}");
                    } catch (e) {
                        return console.error(e), {};
                    }
                },
                upgradeUrl() {
                    return this.src.includes("docuseal.eu") ? "https://console.docuseal.eu/plans" : "https://console.docuseal.com/plans";
                },
                url() {
                    return this.src?.match(/^http/) ? this.src.match(/^https?:\/\/[^/]+/)[0] : "http://localhost:3000";
                },
                slug() {
                    return this.src.split("/").pop();
                },
            },
            mounted() {
                this.$nextTick(() => {
                    this.onInit && this.onInit(), this.onWindowResize();
                }),
                    window.addEventListener("resize", this.onWindowResize),
                    this.loadForm(),
                    (this.intersectionObserver = new IntersectionObserver((e, t) => {
                        e.forEach((e) => {
                            e.isIntersecting && this.onWindowResize();
                        });
                    }).observe(this.$el));
            },
            unmounted() {
                window.removeEventListener("resize", this.onWindowResize);
            },
            beforeUnmount() {
                this.intersectionObserver?.disconnect();
            },
            methods: {
                t(e) {
                    return this.i18n[e] || eh[this.language?.toLowerCase()]?.[e] || eh[this.browserLanguage]?.[e] || eh.en[e] || e;
                },
                onWindowResize(e) {
                    this.isBreakpointMd = this.$el.getRootNode().querySelector("div[data-v-app]").offsetWidth < 768;
                },
                load() {
                    return this.slug
                        ? fetch(this.url + "/embed/forms", {
                              method: "POST",
                              body: JSON.stringify({
                                  email: this.email,
                                  submitter: this.submitter,
                                  send_email: this.sendCopyEmail,
                                  fields: this.fields,
                                  preview: this.preview,
                                  dry_run: this.dryRun,
                                  external_id: this.externalId,
                                  values: this.values,
                                  signed_signature_uuids: this.signedSignatureUuids,
                                  signature: this.signature,
                                  metadata: this.metadata,
                                  slug: this.slug,
                              }),
                              headers: { "Content-Type": "application/json" },
                          }).then(async (e) =>
                              404 === e.status
                                  ? console.error(`Unable to find form with slug '${this.slug}' on ${this.url}`)
                                  : e.status >= 400
                                  ? console.error(`Error loading the form ${this.url}`)
                                  : ((this.form = await e.json()),
                                    void (
                                        this.onLoad &&
                                        this.$nextTick(() => {
                                            this.onLoad(this.form);
                                        })
                                    ))
                          )
                        : Promise.resolve({});
                },
                loadForm() {
                    return this.slug ? this.load() : Promise.resolve({});
                },
            },
        },
        nh = (0, Qr.A)(th, [
            [
                "render",
                function (e, t, n, i, a, r) {
                    const o = Yn(""),
                        s = Yn("FormExpired"),
                        l = Yn("FormCompleted"),
                        d = Yn("FormStart"),
                        c = Yn("FormPages");
                    return (
                        Xi(),
                        ia("div", null, [
                            n.customCss ? (Xi(), aa(Jn(""), { key: 0 }, { default: ln(() => [ha(te(n.customCss), 1)]), _: 1 })) : ba("", !0),
                            a.form && a.form.sandbox
                                ? (Xi(),
                                  ia("div", zr, [
                                      ua(o),
                                      ca("span", null, [ha(""), ca("a", { href: r.upgradeUrl, target: "_blank", class: "link font-semibold" }, "", 8, Mr), ha("")]),
                                  ]))
                                : ba("", !0),
                            a.form && a.form.expired_submitter && !a.form.submitter && !n.preview
                                ? (Xi(), aa(s, { key: 2, template: a.form.template, submitter: a.form.expired_submitter, logo: n.logo ? { url: n.logo } : a.form.logo }, null, 8, ["template", "submitter", "logo"]))
                                : a.form && a.form.completed_submitter && !a.form.submitter && !n.preview
                                ? (Xi(),
                                  aa(
                                      l,
                                      {
                                          key: 3,
                                          template: a.form.template,
                                          submitter: a.form.completed_submitter,
                                          "with-send-copy-button": n.withSendCopyButton,
                                          "with-resubmit-button": n.withResubmitButton,
                                          "send-copy-email": n.sendCopyEmail,
                                          signature: n.signature,
                                          "signed-signature-uuids": r.signedSignatureUuids,
                                          values: n.values,
                                          metadata: n.metadata,
                                          fields: n.fields,
                                          "submitter-name": n.submitter,
                                          "external-id": n.externalId,
                                          "base-url": r.url,
                                          logo: n.logo ? { url: n.logo } : a.form.logo,
                                          onResubmit: t[0] || (t[0] = (e) => (a.form = e)),
                                      },
                                      null,
                                      8,
                                      [
                                          "template",
                                          "submitter",
                                          "with-send-copy-button",
                                          "with-resubmit-button",
                                          "send-copy-email",
                                          "signature",
                                          "signed-signature-uuids",
                                          "values",
                                          "metadata",
                                          "fields",
                                          "submitter-name",
                                          "external-id",
                                          "base-url",
                                          "logo",
                                      ]
                                  ))
                                : !a.form || a.form.submitter || n.preview
                                ? a.form
                                    ? (Xi(),
                                      aa(
                                          c,
                                          {
                                              key: 5,
                                              "with-title": n.withTitle,
                                              "with-decline": n.withDecline,
                                              submitter: a.form.submitter,
                                              template: a.form.template,
                                              "default-signature-value": a.form.default_signature_value,
                                              "background-color": n.backgroundColor,
                                              "completed-button": n.completedButton,
                                              "completed-message": n.completedMessage,
                                              "is-breakpoint-md": !a.isBreakpointMd,
                                              "scroll-el": n.scrollEl,
                                              "with-field-placeholder": n.withFieldPlaceholder,
                                              "with-send-copy-button": n.withSendCopyButton,
                                              language: n.language,
                                              expand: n.expand,
                                              minimize: n.minimize,
                                              "with-field-names": n.withFieldNames,
                                              preview: n.preview,
                                              "dry-run": n.dryRun,
                                              "with-download-button": n.withDownloadButton,
                                              "autoscroll-fields": n.autoscrollFields,
                                              "reuse-signature": n.reuseSignature,
                                              "remember-signature": n.rememberSignature,
                                              "allow-typed-signature": n.allowTypedSignature,
                                              "completed-redirect-url": n.completedRedirectUrl,
                                              schema: a.form.submission.template_schema,
                                              logo: n.logo ? { url: n.logo } : a.form.logo,
                                              "base-url": r.url,
                                              i18n: n.i18n,
                                              "on-complete": n.onComplete,
                                              "skip-fields": n.skipFields,
                                              "go-to-last": n.goToLast,
                                              "readonly-fields": n.readonlyFields,
                                              "default-values": a.form.values,
                                              documents: a.form.documents,
                                              attachments: a.form.attachments,
                                              fields: a.form.submission.template_fields,
                                              values: a.form.submitter?.values || {},
                                              onDecline: t[2] || (t[2] = (e) => [n.onDecline(e), (a.form.expired_submitter = e), delete a.form.submitter]),
                                          },
                                          null,
                                          8,
                                          [
                                              "with-title",
                                              "with-decline",
                                              "submitter",
                                              "template",
                                              "default-signature-value",
                                              "background-color",
                                              "completed-button",
                                              "completed-message",
                                              "is-breakpoint-md",
                                              "scroll-el",
                                              "with-field-placeholder",
                                              "with-send-copy-button",
                                              "language",
                                              "expand",
                                              "minimize",
                                              "with-field-names",
                                              "preview",
                                              "dry-run",
                                              "with-download-button",
                                              "autoscroll-fields",
                                              "reuse-signature",
                                              "remember-signature",
                                              "allow-typed-signature",
                                              "completed-redirect-url",
                                              "schema",
                                              "logo",
                                              "base-url",
                                              "i18n",
                                              "on-complete",
                                              "skip-fields",
                                              "go-to-last",
                                              "readonly-fields",
                                              "default-values",
                                              "documents",
                                              "attachments",
                                              "fields",
                                              "values",
                                          ]
                                      ))
                                    : ba("", !0)
                                : (Xi(),
                                  aa(
                                      d,
                                      {
                                          key: 4,
                                          template: a.form.template,
                                          slug: r.slug,
                                          "send-copy-email": n.sendCopyEmail,
                                          "signed-signature-uuids": r.signedSignatureUuids,
                                          signature: n.signature,
                                          "base-url": r.url,
                                          "external-id": n.externalId,
                                          values: n.values,
                                          metadata: n.metadata,
                                          "submitter-name": n.submitter,
                                          fields: n.fields,
                                          logo: n.logo ? { url: n.logo } : a.form.logo,
                                          onSuccess: t[1] || (t[1] = (e) => (a.form = e)),
                                      },
                                      null,
                                      8,
                                      ["template", "slug", "send-copy-email", "signed-signature-uuids", "signature", "base-url", "external-id", "values", "metadata", "submitter-name", "fields", "logo"]
                                  )),
                        ])
                    );
                },
            ],
        ]);
    var ih = a(518);
    function ah(e) {
        const t = getComputedStyle(e, null).getPropertyValue("overflow");
        return t.indexOf("scroll") > -1 || t.indexOf("auto") > -1;
    }
    const rh = class extends HTMLElement {
        get propGetters() {
            return {
                src: () => this.dataset.src,
                submitter: () => this.dataset.role || this.dataset.submitter,
                backgroundColor: () => this.dataset.backgroundColor,
                externalId: () => this.dataset.externalId || this.dataset.applicationKey,
                language: () => this.dataset.language,
                withTitle: () => "false" !== this.dataset.withTitle,
                withFieldNames: () => "false" !== this.dataset.withFieldNames,
                withDownloadButton: () => "false" !== this.dataset.withDownloadButton,
                autoscrollFields: () => "false" !== this.dataset.autoscrollFields,
                withSendCopyButton: () => "false" !== this.dataset.withSendCopyButton,
                sendCopyEmail: () => (this.dataset.sendCopyEmail ? "false" !== this.dataset.sendCopyEmail : null),
                withResubmitButton: () => "false" !== this.dataset.allowToResubmit,
                withDecline: () => "true" === this.dataset.withDecline,
                withFieldPlaceholder: () => "true" === this.dataset.withFieldPlaceholder,
                allowTypedSignature: () => "false" !== this.dataset.allowTypedSignature,
                rememberSignature: () => "true" === this.dataset.rememberSignature,
                signature: () => this.dataset.signature,
                completedRedirectUrl: () => this.dataset.completedRedirectUrl,
                completedButton: () => ({ title: this.dataset.completedButtonTitle, url: this.dataset.completedButtonUrl }),
                completedMessage: () => ({ title: this.dataset.completedMessageTitle, body: this.dataset.completedMessageBody }),
                readonlyFields: () => (this.dataset.readonlyFields || "").split(",").filter(Boolean),
                goToLast: () => "false" !== this.dataset.goToLast,
                skipFields: () => "true" === this.dataset.skipFields,
                reuseSignature: () => "false" !== this.dataset.reuseSignature,
                fields: () => JSON.parse(this.dataset.fields || "[]"),
                expand: () => (this.dataset.expand ? "false" !== this.dataset.expand : null),
                minimize: () => "true" === this.dataset.minimize,
                preview: () => "true" === this.dataset.preview,
                dryRun: () => "true" === this.dataset.dryRun,
                logo: () => this.dataset.logo,
                values: () => JSON.parse(this.dataset.values || "{}"),
                metadata: () => JSON.parse(this.dataset.metadata || "{}"),
                i18n: () => this.i18nObject,
                email: () => this.dataset.email,
                customCss: () => this.dataset.customCss,
            };
        }
        get reloadProps() {
            return ["email", "submitter", "fields", "preview", "metadata", "externalId", "values", "src", "rememberSignature", "signature"];
        }
        get i18nObject() {
            const e = JSON.parse(this.dataset.i18n || "{}");
            return e.submit_form && (e.start_now ||= e.submit_form), e.form_has_been_completed && ((e.document_has_been_signed ||= e.form_has_been_completed), (e.documents_have_been_signed ||= e.form_has_been_completed)), e;
        }
        static observedAttributes = [
            "data-email",
            "data-values",
            "data-logo",
            "data-preview",
            "data-language",
            "data-expand",
            "data-minimize",
            "data-fields",
            "data-skip-fields",
            "data-go-to-last",
            "data-dry-run",
            "data-readonly-fields",
            "data-completed-button-url",
            "data-completed-button-title",
            "data-remember-signature",
            "data-signature",
            "data-with-field-placeholder",
            "data-completed-message-title",
            "data-completed-message-body",
            "data-completed-redirect-url",
            "data-autoscroll-fields",
            "data-allow-typed-signature",
            "data-with-resubmit-button",
            "data-with-send-copy-button",
            "data-with-download-button",
            "data-with-decline",
            "data-send-copy-email",
            "data-with-title",
            "data-application-key",
            "data-external-id",
            "data-background-color",
            "data-reuse-signature",
            "data-submitter",
            "data-i18n",
            "data-role",
            "data-src",
            "data-metadata",
            "data-custom-css",
        ];
        toCamelCase(e) {
            return e.replace(/-([a-z])/g, function (e) {
                return e[1].toUpperCase();
            });
        }
        attributeChangedCallback(e, t, n) {
            if (!this.props) return;
            if (t === n) return;
            let i = this.toCamelCase(e.replace(/^data-/, ""));
            ["completedButtonTitle", "completedButtonUrl"].includes(i)
                ? (i = "completedButton")
                : ["completedMessageTitle", "completedMessageBody"].includes(i)
                ? (i = "completedMessage")
                : "role" === i
                ? (i = "submitter")
                : "applicationKey" === i && (i = "externalId"),
                this.propGetters[i] &&
                    ((this.props[i] = this.propGetters[i].call()),
                    this.reloadProps.includes(i) &&
                        (clearTimeout(this.processChangesTimeout),
                        (this.processChangesTimeout = setTimeout(() => {
                            this.component.$refs.form.loadForm();
                        }, 10))));
        }
        connectedCallback() {
            const e = this.attachShadow({ mode: "open" }),
                t = document.createElement("style");
            (t.textContent = ih.A[0][1].replace(/:root/g, ":host").replace(/html {/g, ".ds {")), (this.appElem = document.createElement("div")), this.appElem.classList.add("ds"), (this.appElem.style.width = "100%"), e.appendChild(t);
            const n = this.querySelectorAll("style"),
                i = (t) => {
                    t.forEach((t) => e.appendChild(t));
                };
            "undefined" != typeof document && 0 === n.length
                ? document.addEventListener("DOMContentLoaded", () => {
                      i(this.querySelectorAll("style"));
                  })
                : i(n);
            const a = Object.fromEntries(Object.entries(this.propGetters).map(([e, t]) => [e, t.call()]));
            (this.props = ct({
                ...a,
                ref: "form",
                scrollEl: ah(this) ? this : this.getScrollParent(this),
                onInit: () => {
                    this.dispatchEvent(new CustomEvent("init"));
                },
                onLoad: (e) => {
                    this.dispatchEvent(new CustomEvent("load", { detail: JSON.parse(JSON.stringify(e)) }));
                },
                onComplete: (e) => {
                    this.dispatchEvent(new CustomEvent("completed", { detail: e }));
                },
                onDecline: (e) => {
                    this.dispatchEvent(new CustomEvent("declined", { detail: e }));
                },
            })),
                (this.app = ((...e) => {
                    const t = (Ir || (Ir = Vi(Fr))).createApp(...e),
                        { mount: n } = t;
                    return (
                        (t.mount = (e) => {
                            const i = (function (e) {
                                return x(e) ? document.querySelector(e) : e;
                            })(e);
                            if (!i) return;
                            const a = t._component;
                            w(a) || a.render || a.template || (a.template = i.innerHTML), (i.innerHTML = "");
                            const r = n(i, !1, i instanceof SVGElement);
                            return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), r;
                        }),
                        t
                    );
                })({ render: () => Oa(nh, this.props) })),
                (this.component = this.app.mount(this.appElem)),
                e.appendChild(this.appElem);
        }
        disconnectedCallback() {
            this.app?.unmount(), this.appElem?.remove();
        }
        getScrollParent(e) {
            if (!(e instanceof HTMLElement || e instanceof SVGElement)) return;
            let t = e.parentNode;
            for (; t.parentNode; ) {
                if (ah(t)) return t;
                t = t.parentNode;
            }
            return document.scrollingElement || document.documentElement;
        }
    };
    window.customElements.get("docuseal-form") || window.customElements.define("docuseal-form", rh);
})();
