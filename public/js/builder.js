(() => {
    "use strict";
    var e = {
            391: (e, t, n) => {
                n.d(t, { A: () => u });
                var o = n(601),
                    i = n.n(o),
                    r = n(314),
                    a = n.n(r),
                    l = n(417),
                    s = n.n(l),
                    d = new URL(n(876), n.b),
                    c = a()(i()),
                    p = s()(d);
                c.push([
                    e.id,
                    '/*\n! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n5. Use the user\'s configured `sans` font-feature-settings by default.\n6. Use the user\'s configured `sans` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */ /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n:root,\n[data-theme] {\n  background-color: hsl(var(--b1) / var(--tw-bg-opacity, 1));\n  color: hsl(var(--bc) / var(--tw-text-opacity, 1));\n}\n\nhtml {\n  -webkit-tap-highlight-color: transparent;\n}\n\n:root {\n  color-scheme: light;\n  --pf: 345 7% 82%;\n  --sf: 338 71% 71%;\n  --af: 39 84% 51%;\n  --nf: 280 46% 7%;\n  --in: 198 93% 60%;\n  --su: 158 64% 52%;\n  --wa: 43 96% 56%;\n  --er: 0 91% 71%;\n  --pc: 345 1% 17%;\n  --sc: 340 15% 16%;\n  --ac: 37 41% 13%;\n  --nc: 283 9% 81%;\n  --inc: 198 100% 12%;\n  --suc: 158 100% 10%;\n  --wac: 43 100% 11%;\n  --erc: 0 100% 14%;\n  --rounded-box: 16px;\n  --rounded-badge: 30.4px;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --p: 345 7% 89%;\n  --s: 338 71% 78%;\n  --a: 39 84% 58%;\n  --n: 280 46% 14%;\n  --b1: 24 33% 97%;\n  --b2: 27 22% 92%;\n  --b3: 23 14% 89%;\n  --bc: 280 46% 14%;\n  --rounded-btn: 30.4px;\n  --tab-border: 2px;\n  --tab-radius: 8px;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}.alert {\n  display: grid;\n  width: 100%;\n  grid-auto-flow: row;\n  align-content: flex-start;\n  align-items: center;\n  justify-items: center;\n  gap: 16px;\n  text-align: center;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--b2) / var(--tw-border-opacity));\n  padding: 16px;\n  --tw-text-opacity: 1;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n  border-radius: var(--rounded-box, 1rem);\n  --alert-bg: hsl(var(--b2));\n  --alert-bg-mix: hsl(var(--b1));\n  background-color: var(--alert-bg);\n}@media (min-width: 640px) {\n\n  .alert {\n    grid-auto-flow: column;\n    grid-template-columns: auto minmax(auto,1fr);\n    justify-items: start;\n    text-align: left;\n  }\n}.avatar.placeholder > div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}.badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  transition-duration: 200ms;\n  height: 20px;\n  font-size: 14px;\n  line-height: 20px;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding-left: 9.008px;\n  padding-right: 9.008px;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--b2) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b1) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n  border-radius: var(--rounded-badge, 1.9rem);\n}@media (hover:hover) {\n\n  .label a:hover {\n    --tw-text-opacity: 1;\n    color: hsl(var(--bc) / var(--tw-text-opacity));\n  }\n\n  .menu li > *:not(ul):not(.menu-title):not(details):active,\n.menu li > *:not(ul):not(.menu-title):not(details).active,\n.menu li > details > summary:active {\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--n) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--nc) / var(--tw-text-opacity));\n  }\n\n  .table tr.hover:hover,\n  .table tr.hover:nth-child(even):hover {\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--b2) / var(--tw-bg-opacity));\n  }\n}.btn {\n  display: inline-flex;\n  flex-shrink: 0;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  border-color: transparent;\n  border-color: hsl(var(--b2) / var(--tw-border-opacity));\n  text-align: center;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  transition-duration: 200ms;\n  border-radius: var(--rounded-btn, 0.5rem);\n  height: 48px;\n  padding-left: 16px;\n  padding-right: 16px;\n  min-height: 48px;\n  font-size: 14px;\n  line-height: 1em;\n  gap: 8px;\n  font-weight: 600;\n  text-decoration-line: none;\n  border-width: var(--border-btn, 1px);\n  animation: button-pop var(--animation-btn, 0.25s) ease-out;\n  text-transform: var(--btn-text-case, uppercase);\n  --tw-border-opacity: 1;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b2) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n  outline-color: hsl(var(--bc) / 1);\n}.btn-disabled,\n  .btn[disabled],\n  .btn:disabled {\n  pointer-events: none;\n}.btn-circle {\n  height: 48px;\n  width: 48px;\n  border-radius: 9999px;\n  padding: 0px;\n}.btn-group > input[type="radio"].btn {\n  -webkit-appearance: none;\n          appearance: none;\n}.btn-group > input[type="radio"].btn:before {\n  content: attr(data-title);\n}.btn:is(input[type="checkbox"]),\n.btn:is(input[type="radio"]) {\n  width: auto;\n  -webkit-appearance: none;\n          appearance: none;\n}.btn:is(input[type="checkbox"]):after,\n.btn:is(input[type="radio"]):after {\n  --tw-content: attr(aria-label);\n  content: var(--tw-content);\n}.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  border-radius: var(--rounded-box, 1rem);\n}.card:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}.card-body {\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  padding: var(--padding-card, 2rem);\n  gap: 8px;\n}.card-body :where(p) {\n  flex-grow: 1;\n}.card figure {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}.card.image-full {\n  display: grid;\n}.card.image-full:before {\n  position: relative;\n  content: "";\n  z-index: 10;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--n) / var(--tw-bg-opacity));\n  opacity: 0.75;\n  border-radius: var(--rounded-box, 1rem);\n}.card.image-full:before,\n    .card.image-full > * {\n  grid-column-start: 1;\n  grid-row-start: 1;\n}.card.image-full > figure img {\n  height: 100%;\n  object-fit: cover;\n}.card.image-full > .card-body {\n  position: relative;\n  z-index: 20;\n  --tw-text-opacity: 1;\n  color: hsl(var(--nc) / var(--tw-text-opacity));\n}.checkbox {\n  flex-shrink: 0;\n  --chkbg: var(--bc);\n  --chkfg: var(--b1);\n  height: 24px;\n  width: 24px;\n  cursor: pointer;\n  -webkit-appearance: none;\n          appearance: none;\n  border-width: 1px;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n  --tw-border-opacity: 0.2;\n  border-radius: var(--rounded-btn, 0.5rem);\n}.collapse:not(td):not(tr):not(colgroup) {\n  visibility: visible;\n}.collapse {\n  position: relative;\n  display: grid;\n  overflow: hidden;\n  grid-template-rows: auto 0fr;\n  transition: grid-template-rows 0.2s;\n  width: 100%;\n  border-radius: var(--rounded-box, 1rem);\n}.collapse-title,\n.collapse > input[type="checkbox"],\n.collapse > input[type="radio"],\n.collapse-content {\n  grid-column-start: 1;\n  grid-row-start: 1;\n}.collapse > input[type="checkbox"],\n.collapse > input[type="radio"] {\n  -webkit-appearance: none;\n          appearance: none;\n  opacity: 0;\n}.collapse[open],\n.collapse-open,\n.collapse:focus:not(.collapse-close) {\n  grid-template-rows: auto 1fr;\n}.collapse:not(.collapse-close):has(> input[type="checkbox"]:checked),\n.collapse:not(.collapse-close):has(> input[type="radio"]:checked) {\n  grid-template-rows: auto 1fr;\n}.collapse[open] > .collapse-content,\n.collapse-open > .collapse-content,\n.collapse:focus:not(.collapse-close) > .collapse-content,\n.collapse:not(.collapse-close) > input[type="checkbox"]:checked ~ .collapse-content,\n.collapse:not(.collapse-close) > input[type="radio"]:checked ~ .collapse-content {\n  visibility: visible;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n}.dropdown {\n  position: relative;\n  display: inline-block;\n}.dropdown > *:not(summary):focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}.dropdown .dropdown-content {\n  position: absolute;\n}.dropdown:is(:not(details)) .dropdown-content {\n  visibility: hidden;\n  opacity: 0;\n  transform-origin: top;\n  --tw-scale-x: .95;\n  --tw-scale-y: .95;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  transition-duration: 200ms;\n}.dropdown-end .dropdown-content {\n  right: 0px;\n}.dropdown-left .dropdown-content {\n  bottom: auto;\n  right: 100%;\n  top: 0px;\n  transform-origin: right;\n}.dropdown-right .dropdown-content {\n  bottom: auto;\n  left: 100%;\n  top: 0px;\n  transform-origin: left;\n}.dropdown-bottom .dropdown-content {\n  bottom: auto;\n  top: 100%;\n  transform-origin: top;\n}.dropdown-top .dropdown-content {\n  bottom: 100%;\n  top: auto;\n  transform-origin: bottom;\n}.dropdown-end.dropdown-right .dropdown-content {\n  bottom: 0px;\n  top: auto;\n}.dropdown-end.dropdown-left .dropdown-content {\n  bottom: 0px;\n  top: auto;\n}.dropdown.dropdown-open .dropdown-content,\n.dropdown:not(.dropdown-hover):focus .dropdown-content,\n.dropdown:focus-within .dropdown-content {\n  visibility: visible;\n  opacity: 1;\n}@media (hover: hover) {\n\n  .dropdown.dropdown-hover:hover .dropdown-content {\n    visibility: visible;\n    opacity: 1;\n  }\n\n  .btm-nav > *.disabled:hover,\n      .btm-nav > *[disabled]:hover {\n    pointer-events: none;\n    --tw-border-opacity: 0;\n    background-color: hsl(var(--n) / var(--tw-bg-opacity));\n    --tw-bg-opacity: 0.1;\n    color: hsl(var(--bc) / var(--tw-text-opacity));\n    --tw-text-opacity: 0.2;\n  }\n\n  .btn:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--b3) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--b3) / var(--tw-bg-opacity));\n  }\n\n  .btn-primary:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--pf) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--pf) / var(--tw-bg-opacity));\n  }\n\n  .btn-neutral:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--nf) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--nf) / var(--tw-bg-opacity));\n  }\n\n  .btn.glass:hover {\n    --glass-opacity: 25%;\n    --glass-border-opacity: 15%;\n  }\n\n  .btn-ghost:hover {\n    --tw-border-opacity: 0;\n    background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n    --tw-bg-opacity: 0.2;\n  }\n\n  .btn-outline:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--bc) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--b1) / var(--tw-text-opacity));\n  }\n\n  .btn-outline.btn-primary:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--pf) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--pf) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--pc) / var(--tw-text-opacity));\n  }\n\n  .btn-outline.btn-secondary:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--sf) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--sf) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--sc) / var(--tw-text-opacity));\n  }\n\n  .btn-outline.btn-accent:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--af) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--af) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--ac) / var(--tw-text-opacity));\n  }\n\n  .btn-outline.btn-success:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--su) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--su) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--suc) / var(--tw-text-opacity));\n  }\n\n  .btn-outline.btn-info:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--in) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--in) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--inc) / var(--tw-text-opacity));\n  }\n\n  .btn-outline.btn-warning:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--wa) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--wa) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--wac) / var(--tw-text-opacity));\n  }\n\n  .btn-outline.btn-error:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--er) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--er) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--erc) / var(--tw-text-opacity));\n  }\n\n  .btn-disabled:hover,\n    .btn[disabled]:hover,\n    .btn:disabled:hover {\n    --tw-border-opacity: 0;\n    background-color: hsl(var(--n) / var(--tw-bg-opacity));\n    --tw-bg-opacity: 0.2;\n    color: hsl(var(--bc) / var(--tw-text-opacity));\n    --tw-text-opacity: 0.2;\n  }\n\n  .btn:is(input[type="checkbox"]:checked):hover, .btn:is(input[type="radio"]:checked):hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--pf) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--pf) / var(--tw-bg-opacity));\n  }\n\n  .dropdown.dropdown-hover:hover .dropdown-content {\n    --tw-scale-x: 1;\n    --tw-scale-y: 1;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  :where(.menu li:not(.menu-title):not(.disabled) > *:not(ul):not(details):not(.menu-title)):not(.active):hover, :where(.menu li:not(.menu-title):not(.disabled) > details > summary:not(.menu-title)):not(.active):hover {\n    cursor: pointer;\n    background-color: hsl(var(--bc) / 0.1);\n    --tw-text-opacity: 1;\n    color: hsl(var(--bc) / var(--tw-text-opacity));\n    outline: 2px solid transparent;\n    outline-offset: 2px;\n  }\n}.dropdown:is(details) summary::-webkit-details-marker {\n  display: none;\n}.form-control {\n  display: flex;\n  flex-direction: column;\n}.label {\n  display: flex;\n  -webkit-user-select: none;\n          user-select: none;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 4px;\n  padding-right: 4px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}.input {\n  flex-shrink: 1;\n  height: 48px;\n  padding-left: 16px;\n  padding-right: 16px;\n  font-size: 16px;\n  line-height: 2;\n  line-height: 24px;\n  border-width: 1px;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n  --tw-border-opacity: 0;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b1) / var(--tw-bg-opacity));\n  border-radius: var(--rounded-btn, 0.5rem);\n}.input-group > .input {\n  isolation: isolate;\n}.input-group > *,\n  .input-group > .input,\n  .input-group > .textarea,\n  .input-group > .select {\n  border-radius: 0px;\n}.join {\n  display: inline-flex;\n  align-items: stretch;\n  border-radius: var(--rounded-btn, 0.5rem);\n}.join :where(.join-item) {\n  border-start-end-radius: 0;\n  border-end-end-radius: 0;\n  border-end-start-radius: 0;\n  border-start-start-radius: 0;\n}.join .join-item:not(:first-child):not(:last-child),\n  .join *:not(:first-child):not(:last-child) .join-item {\n  border-start-end-radius: 0;\n  border-end-end-radius: 0;\n  border-end-start-radius: 0;\n  border-start-start-radius: 0;\n}.join .join-item:first-child:not(:last-child),\n  .join *:first-child:not(:last-child) .join-item {\n  border-start-end-radius: 0;\n  border-end-end-radius: 0;\n}.join .dropdown .join-item:first-child:not(:last-child),\n  .join *:first-child:not(:last-child) .dropdown .join-item {\n  border-start-end-radius: inherit;\n  border-end-end-radius: inherit;\n}.join :where(.join-item:first-child:not(:last-child)),\n  .join :where(*:first-child:not(:last-child) .join-item) {\n  border-end-start-radius: inherit;\n  border-start-start-radius: inherit;\n}.join .join-item:last-child:not(:first-child),\n  .join *:last-child:not(:first-child) .join-item {\n  border-end-start-radius: 0;\n  border-start-start-radius: 0;\n}.join :where(.join-item:last-child:not(:first-child)),\n  .join :where(*:last-child:not(:first-child) .join-item) {\n  border-start-end-radius: inherit;\n  border-end-end-radius: inherit;\n}@supports not selector(:has(*)) {\n\n  :where(.join *) {\n    border-radius: inherit;\n  }\n}@supports selector(:has(*)) {\n\n  :where(.join *:has(.join-item)) {\n    border-radius: inherit;\n  }\n}.link {\n  cursor: pointer;\n  text-decoration-line: underline;\n}.mask {\n  -webkit-mask-size: contain;\n          mask-size: contain;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n          mask-position: center;\n}.menu {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  font-size: 14px;\n  line-height: 20px;\n  padding: 8px;\n}.menu :where(li ul) {\n  position: relative;\n  white-space: nowrap;\n  margin-left: 16px;\n  padding-left: 8px;\n}.menu :where(li:not(.menu-title) > *:not(ul):not(details):not(.menu-title)),\n  .menu :where(li:not(.menu-title) > details > summary:not(.menu-title)) {\n  display: grid;\n  grid-auto-flow: column;\n  align-content: flex-start;\n  align-items: center;\n  gap: 8px;\n  grid-auto-columns: minmax(auto, max-content) auto max-content;\n  -webkit-user-select: none;\n          user-select: none;\n}.menu li.disabled {\n  cursor: not-allowed;\n  -webkit-user-select: none;\n          user-select: none;\n  color: hsl(var(--bc) / 0.3);\n}.menu :where(li > .menu-dropdown:not(.menu-dropdown-show)) {\n  display: none;\n}:where(.menu li) {\n  position: relative;\n  display: flex;\n  flex-shrink: 0;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-items: stretch;\n}:where(.menu li) .badge {\n  justify-self: end;\n}.modal {\n  pointer-events: none;\n  position: fixed;\n  inset: 0px;\n  margin: 0px;\n  display: grid;\n  height: 100%;\n  max-height: none;\n  width: 100%;\n  max-width: none;\n  justify-items: center;\n  padding: 0px;\n  opacity: 0;\n  overscroll-behavior: contain;\n  z-index: 999;\n  background-color: transparent;\n  color: inherit;\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  transition-property: transform, opacity, visibility;\n  overflow-y: hidden;\n}:where(.modal) {\n  align-items: center;\n}.modal-box {\n  max-height: calc(100vh - 5em);\n  grid-column-start: 1;\n  grid-row-start: 1;\n  width: 91.666667%;\n  max-width: 512px;\n  --tw-scale-x: .9;\n  --tw-scale-y: .9;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b1) / var(--tw-bg-opacity));\n  padding: 24px;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  transition-duration: 200ms;\n  border-top-left-radius: var(--rounded-box, 1rem);\n  border-top-right-radius: var(--rounded-box, 1rem);\n  border-bottom-left-radius: var(--rounded-box, 1rem);\n  border-bottom-right-radius: var(--rounded-box, 1rem);\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n}.modal-open,\n.modal:target,\n.modal-toggle:checked + .modal,\n.modal[open] {\n  pointer-events: auto;\n  visibility: visible;\n  opacity: 1;\n}:root:has(:is(.modal-open, .modal:target, .modal-toggle:checked + .modal, .modal[open])) {\n  overflow: hidden;\n}.radio {\n  flex-shrink: 0;\n  --chkbg: var(--bc);\n  height: 24px;\n  width: 24px;\n  cursor: pointer;\n  -webkit-appearance: none;\n          appearance: none;\n  border-radius: 9999px;\n  border-width: 1px;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n  --tw-border-opacity: 0.2;\n}.range {\n  height: 24px;\n  width: 100%;\n  cursor: pointer;\n  appearance: none;\n  -webkit-appearance: none;\n  --range-shdw: var(--bc);\n  overflow: hidden;\n  background-color: transparent;\n  border-radius: var(--rounded-box, 1rem);\n}.range:focus {\n  outline: none;\n}.select {\n  display: inline-flex;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  -webkit-appearance: none;\n          appearance: none;\n  height: 48px;\n  padding-left: 16px;\n  padding-right: 40px;\n  font-size: 14px;\n  line-height: 20px;\n  line-height: 2;\n  min-height: 48px;\n  border-width: 1px;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n  --tw-border-opacity: 0;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b1) / var(--tw-bg-opacity));\n  border-radius: var(--rounded-btn, 0.5rem);\n  background-image: linear-gradient(45deg, transparent 50%, currentColor 50%),\n    linear-gradient(135deg, currentColor 50%, transparent 50%);\n  background-position: calc(100% - 20px) calc(1px + 50%),\n    calc(100% - 16.1px) calc(1px + 50%);\n  background-size: 4px 4px,\n    4px 4px;\n  background-repeat: no-repeat;\n}.select[multiple] {\n  height: auto;\n}.table {\n  position: relative;\n  width: 100%;\n  text-align: left;\n  font-size: 14px;\n  line-height: 20px;\n  border-radius: var(--rounded-box, 1rem);\n}.table :where(.table-pin-rows thead tr) {\n  position: sticky;\n  top: 0px;\n  z-index: 1;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b1) / var(--tw-bg-opacity));\n}.table :where(.table-pin-rows tfoot tr) {\n  position: sticky;\n  bottom: 0px;\n  z-index: 1;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b1) / var(--tw-bg-opacity));\n}.table :where(.table-pin-cols tr th) {\n  position: sticky;\n  left: 0px;\n  right: 0px;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b1) / var(--tw-bg-opacity));\n}.textarea {\n  flex-shrink: 1;\n  min-height: 48px;\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  font-size: 14px;\n  line-height: 20px;\n  line-height: 2;\n  border-width: 1px;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n  --tw-border-opacity: 0;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b1) / var(--tw-bg-opacity));\n  border-radius: var(--rounded-btn, 0.5rem);\n}.toggle {\n  flex-shrink: 0;\n  --tglbg: hsl(var(--b1));\n  --handleoffset: 24px;\n  --handleoffsetcalculator: calc(var(--handleoffset) * -1);\n  --togglehandleborder: 0 0;\n  height: 24px;\n  width: 48px;\n  cursor: pointer;\n  -webkit-appearance: none;\n          appearance: none;\n  border-width: 1px;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n  --tw-border-opacity: 0.2;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n  --tw-bg-opacity: 0.5;\n  border-radius: var(--rounded-badge, 1.9rem);\n  transition: background,\n    box-shadow var(--animation-input, 0.2s) ease-out;\n  box-shadow: var(--handleoffsetcalculator) 0 0 2px var(--tglbg) inset,\n    0 0 0 2px var(--tglbg) inset,\n    var(--togglehandleborder);\n}.badge-info {\n  border-color: transparent;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--in) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--inc) / var(--tw-text-opacity));\n}.badge-success {\n  border-color: transparent;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--su) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--suc) / var(--tw-text-opacity));\n}.badge-warning {\n  border-color: transparent;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--wa) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--wac) / var(--tw-text-opacity));\n}.badge-outline.badge-info {\n  --tw-text-opacity: 1;\n  color: hsl(var(--in) / var(--tw-text-opacity));\n}.badge-outline.badge-success {\n  --tw-text-opacity: 1;\n  color: hsl(var(--su) / var(--tw-text-opacity));\n}.badge-outline.badge-warning {\n  --tw-text-opacity: 1;\n  color: hsl(var(--wa) / var(--tw-text-opacity));\n}.btm-nav > *:where(.active) {\n  border-top-width: 2px;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b1) / var(--tw-bg-opacity));\n}.btm-nav > *.disabled,\n    .btm-nav > *[disabled] {\n  pointer-events: none;\n  --tw-border-opacity: 0;\n  background-color: hsl(var(--n) / var(--tw-bg-opacity));\n  --tw-bg-opacity: 0.1;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n  --tw-text-opacity: 0.2;\n}.btm-nav > * .label {\n  font-size: 16px;\n  line-height: 24px;\n}.btn:active:hover,\n  .btn:active:focus {\n  animation: button-pop 0s ease-out;\n  transform: scale(var(--btn-focus-scale, 0.97));\n}.btn:focus-visible {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n}.btn-primary {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--p) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--p) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--pc) / var(--tw-text-opacity));\n  outline-color: hsl(var(--p) / 1);\n}.btn-primary.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--pf) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--pf) / var(--tw-bg-opacity));\n}.btn-neutral {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--n) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--n) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--nc) / var(--tw-text-opacity));\n  outline-color: hsl(var(--n) / 1);\n}.btn-neutral.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--nf) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--nf) / var(--tw-bg-opacity));\n}.btn.glass {\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  outline-color: currentColor;\n}.btn.glass.btn-active {\n  --glass-opacity: 25%;\n  --glass-border-opacity: 15%;\n}.btn-ghost {\n  border-width: 1px;\n  border-color: transparent;\n  background-color: transparent;\n  color: currentColor;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  outline-color: currentColor;\n}.btn-ghost.btn-active {\n  --tw-border-opacity: 0;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n  --tw-bg-opacity: 0.2;\n}.btn-outline {\n  border-color: currentColor;\n  background-color: transparent;\n  --tw-text-opacity: 1;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}.btn-outline.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--b1) / var(--tw-text-opacity));\n}.btn-outline.btn-primary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--p) / var(--tw-text-opacity));\n}.btn-outline.btn-primary.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--pf) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--pf) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--pc) / var(--tw-text-opacity));\n}.btn-outline.btn-secondary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--s) / var(--tw-text-opacity));\n}.btn-outline.btn-secondary.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--sf) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--sf) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--sc) / var(--tw-text-opacity));\n}.btn-outline.btn-accent {\n  --tw-text-opacity: 1;\n  color: hsl(var(--a) / var(--tw-text-opacity));\n}.btn-outline.btn-accent.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--af) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--af) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--ac) / var(--tw-text-opacity));\n}.btn-outline.btn-success {\n  --tw-text-opacity: 1;\n  color: hsl(var(--su) / var(--tw-text-opacity));\n}.btn-outline.btn-success.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--su) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--su) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--suc) / var(--tw-text-opacity));\n}.btn-outline.btn-info {\n  --tw-text-opacity: 1;\n  color: hsl(var(--in) / var(--tw-text-opacity));\n}.btn-outline.btn-info.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--in) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--in) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--inc) / var(--tw-text-opacity));\n}.btn-outline.btn-warning {\n  --tw-text-opacity: 1;\n  color: hsl(var(--wa) / var(--tw-text-opacity));\n}.btn-outline.btn-warning.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--wa) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--wa) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--wac) / var(--tw-text-opacity));\n}.btn-outline.btn-error {\n  --tw-text-opacity: 1;\n  color: hsl(var(--er) / var(--tw-text-opacity));\n}.btn-outline.btn-error.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--er) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--er) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--erc) / var(--tw-text-opacity));\n}.btn.btn-disabled,\n  .btn[disabled],\n  .btn:disabled {\n  --tw-border-opacity: 0;\n  background-color: hsl(var(--n) / var(--tw-bg-opacity));\n  --tw-bg-opacity: 0.2;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n  --tw-text-opacity: 0.2;\n}.btn-group > input[type="radio"]:checked.btn,\n  .btn-group > .btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--p) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--p) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--pc) / var(--tw-text-opacity));\n}.btn-group > input[type="radio"]:checked.btn:focus-visible, .btn-group > .btn-active:focus-visible {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-color: hsl(var(--p) / 1);\n}.btn:is(input[type="checkbox"]:checked),\n.btn:is(input[type="radio"]:checked) {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--p) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--p) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--pc) / var(--tw-text-opacity));\n}.btn:is(input[type="checkbox"]:checked):focus-visible, .btn:is(input[type="radio"]:checked):focus-visible {\n  outline-color: hsl(var(--p) / 1);\n}@keyframes button-pop {\n\n  0% {\n    transform: scale(var(--btn-focus-scale, 0.98));\n  }\n\n  40% {\n    transform: scale(1.02);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}.card :where(figure:first-child) {\n  overflow: hidden;\n  border-start-start-radius: inherit;\n  border-start-end-radius: inherit;\n  border-end-start-radius: unset;\n  border-end-end-radius: unset;\n}.card :where(figure:last-child) {\n  overflow: hidden;\n  border-start-start-radius: unset;\n  border-start-end-radius: unset;\n  border-end-start-radius: inherit;\n  border-end-end-radius: inherit;\n}.card:focus-visible {\n  outline: 2px solid currentColor;\n  outline-offset: 2px;\n}.card.bordered {\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--b2) / var(--tw-border-opacity));\n}.card.compact .card-body {\n  padding: 16px;\n  font-size: 14px;\n  line-height: 20px;\n}.card.\\!compact .card-body {\n  padding: 16px !important;\n  font-size: 14px !important;\n  line-height: 20px !important;\n}.card.image-full :where(figure) {\n  overflow: hidden;\n  border-radius: inherit;\n}.checkbox:focus-visible {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n  outline-color: hsl(var(--bc) / 1);\n}.checkbox:checked,\n  .checkbox[checked="true"],\n  .checkbox[aria-checked="true"] {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n  background-repeat: no-repeat;\n  animation: checkmark var(--animation-input, 0.2s) ease-out;\n  background-image: linear-gradient(-45deg, transparent 65%, hsl(var(--chkbg)) 65.99%),\n      linear-gradient(45deg, transparent 75%, hsl(var(--chkbg)) 75.99%),\n      linear-gradient(-45deg, hsl(var(--chkbg)) 40%, transparent 40.99%),\n      linear-gradient(\n        45deg,\n        hsl(var(--chkbg)) 30%,\n        hsl(var(--chkfg)) 30.99%,\n        hsl(var(--chkfg)) 40%,\n        transparent 40.99%\n      ),\n      linear-gradient(-45deg, hsl(var(--chkfg)) 50%, hsl(var(--chkbg)) 50.99%);\n}.checkbox:indeterminate {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n  background-repeat: no-repeat;\n  animation: checkmark var(--animation-input, 0.2s) ease-out;\n  background-image: linear-gradient(90deg, transparent 80%, hsl(var(--chkbg)) 80%),\n      linear-gradient(-90deg, transparent 80%, hsl(var(--chkbg)) 80%),\n      linear-gradient(\n        0deg,\n        hsl(var(--chkbg)) 43%,\n        hsl(var(--chkfg)) 43%,\n        hsl(var(--chkfg)) 57%,\n        hsl(var(--chkbg)) 57%\n      );\n}.checkbox:disabled {\n  cursor: not-allowed;\n  border-color: transparent;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n  opacity: 0.2;\n}@keyframes checkmark {\n\n  0% {\n    background-position-y: 5px;\n  }\n\n  50% {\n    background-position-y: -2px;\n  }\n\n  100% {\n    background-position-y: 0;\n  }\n}[dir="rtl"] .checkbox:checked,\n    [dir="rtl"] .checkbox[checked="true"],\n    [dir="rtl"] .checkbox[aria-checked="true"] {\n  background-image: linear-gradient(45deg, transparent 65%, hsl(var(--chkbg)) 65.99%),\n        linear-gradient(-45deg, transparent 75%, hsl(var(--chkbg)) 75.99%),\n        linear-gradient(45deg, hsl(var(--chkbg)) 40%, transparent 40.99%),\n        linear-gradient(\n          -45deg,\n          hsl(var(--chkbg)) 30%,\n          hsl(var(--chkfg)) 30.99%,\n          hsl(var(--chkfg)) 40%,\n          transparent 40.99%\n        ),\n        linear-gradient(45deg, hsl(var(--chkfg)) 50%, hsl(var(--chkbg)) 50.99%);\n}details.collapse {\n  width: 100%;\n}details.collapse summary {\n  position: relative;\n  display: block;\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}details.collapse summary::-webkit-details-marker {\n  display: none;\n}.collapse:focus-visible {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n  outline-color: hsl(var(--bc) / 1);\n}.collapse:has(.collapse-title:focus-visible),\n.collapse:has(> input[type="checkbox"]:focus-visible),\n.collapse:has(> input[type="radio"]:focus-visible) {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n  outline-color: hsl(var(--bc) / 1);\n}.collapse:not(.collapse-open):not(.collapse-close) > input[type="checkbox"],\n.collapse:not(.collapse-open):not(.collapse-close) > input[type="radio"]:not(:checked),\n.collapse:not(.collapse-open):not(.collapse-close) > .collapse-title {\n  cursor: pointer;\n}.collapse:focus:not(.collapse-open):not(.collapse-close):not(.collapse[open]) > .collapse-title {\n  cursor: unset;\n}:where(.collapse > input[type="checkbox"]),\n:where(.collapse > input[type="radio"]) {\n  z-index: 1;\n}.collapse-title,\n:where(.collapse > input[type="checkbox"]),\n:where(.collapse > input[type="radio"]) {\n  width: 100%;\n  padding: 16px;\n  padding-right: 48px;\n  min-height: 60px;\n  transition: background-color 0.2s ease-out;\n}.collapse[open] > :where(.collapse-content),\n.collapse-open > :where(.collapse-content),\n.collapse:focus:not(.collapse-close) > :where(.collapse-content),\n.collapse:not(.collapse-close) > :where(input[type="checkbox"]:checked ~ .collapse-content),\n.collapse:not(.collapse-close) > :where(input[type="radio"]:checked ~ .collapse-content) {\n  padding-bottom: 16px;\n  transition: padding 0.2s ease-out,\n    background-color 0.2s ease-out;\n}.collapse[open].collapse-arrow > .collapse-title:after,\n.collapse-open.collapse-arrow > .collapse-title:after,\n.collapse-arrow:focus:not(.collapse-close) > .collapse-title:after,\n.collapse-arrow:not(.collapse-close) > input[type="checkbox"]:checked ~ .collapse-title:after,\n.collapse-arrow:not(.collapse-close) > input[type="radio"]:checked ~ .collapse-title:after {\n  --tw-translate-y: -50%;\n  --tw-rotate: 225deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}[dir="rtl"] .collapse[open].collapse-arrow > .collapse-title:after,\n[dir="rtl"] .collapse-open.collapse-arrow > .collapse-title:after,\n[dir="rtl"] .collapse-arrow:focus:not(.collapse-close) .collapse-title:after,\n[dir="rtl"]\n  .collapse-arrow:not(.collapse-close)\n  input[type="checkbox"]:checked\n  ~ .collapse-title:after {\n  --tw-rotate: 135deg;\n}.collapse[open].collapse-plus > .collapse-title:after,\n.collapse-open.collapse-plus > .collapse-title:after,\n.collapse-plus:focus:not(.collapse-close) > .collapse-title:after,\n.collapse-plus:not(.collapse-close) > input[type="checkbox"]:checked ~ .collapse-title:after,\n.collapse-plus:not(.collapse-close) > input[type="radio"]:checked ~ .collapse-title:after {\n  content: "−";\n}.dropdown.dropdown-open .dropdown-content,\n.dropdown:focus .dropdown-content,\n.dropdown:focus-within .dropdown-content {\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}.label-text {\n  font-size: 14px;\n  line-height: 20px;\n  --tw-text-opacity: 1;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n}.input input:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}.input[list]::-webkit-calendar-picker-indicator {\n  line-height: 1em;\n}.input-bordered {\n  --tw-border-opacity: 0.2;\n}.input:focus,\n  .input:focus-within {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n  outline-color: hsl(var(--bc) / 0.2);\n}.input-ghost {\n  --tw-bg-opacity: 0.05;\n}.input-ghost:focus,\n    .input-ghost:focus-within {\n  --tw-bg-opacity: 1;\n  --tw-text-opacity: 1;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n  box-shadow: none;\n}.input-primary {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--p) / var(--tw-border-opacity));\n}.input-primary:focus,\n    .input-primary:focus-within {\n  outline-color: hsl(var(--p) / 1);\n}.input-disabled,\n  .input:disabled,\n  .input[disabled] {\n  cursor: not-allowed;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--b2) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b2) / var(--tw-bg-opacity));\n  --tw-text-opacity: 0.2;\n}.input-disabled::placeholder,\n  .input:disabled::placeholder,\n  .input[disabled]::placeholder {\n  color: hsl(var(--bc) / var(--tw-placeholder-opacity));\n  --tw-placeholder-opacity: 0.2;\n}.join > :where(*:not(:first-child)) {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  margin-left: -1px;\n}.join-item:focus {\n  isolation: isolate;\n}.link:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}.link:focus-visible {\n  outline: 2px solid currentColor;\n  outline-offset: 2px;\n}.loading {\n  pointer-events: none;\n  display: inline-block;\n  aspect-ratio: 1 / 1;\n  width: 24px;\n  background-color: currentColor;\n  -webkit-mask-size: 100%;\n          mask-size: 100%;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n          mask-position: center;\n  -webkit-mask-image: url(' +
                        p +
                        ");\n          mask-image: url(" +
                        p +
                        ');\n}:where(.menu li:empty) {\n  background-color: hsl(var(--bc) / 0.1);\n  margin: 8px 16px;\n  height: 1px;\n}.menu :where(li ul):before {\n  position: absolute;\n  bottom: 12px;\n  left: 0px;\n  top: 12px;\n  width: 1px;\n  background-color: hsl(var(--bc) / 0.1);\n  content: "";\n}.menu :where(li:not(.menu-title) > *:not(ul):not(details):not(.menu-title)),\n.menu :where(li:not(.menu-title) > details > summary:not(.menu-title)) {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  text-align: left;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  transition-duration: 200ms;\n  border-radius: var(--rounded-btn, 0.5rem);\n  text-wrap: balance;\n}:where(.menu li:not(.menu-title):not(.disabled) > *:not(ul):not(details):not(.menu-title)):not(summary):not(.active).focus,\n  :where(.menu li:not(.menu-title):not(.disabled) > *:not(ul):not(details):not(.menu-title)):not(summary):not(.active):focus,\n  :where(.menu li:not(.menu-title):not(.disabled) > *:not(ul):not(details):not(.menu-title)):is(summary):not(.active):focus-visible,\n  :where(.menu li:not(.menu-title):not(.disabled) > details > summary:not(.menu-title)):not(summary):not(.active).focus,\n  :where(.menu li:not(.menu-title):not(.disabled) > details > summary:not(.menu-title)):not(summary):not(.active):focus,\n  :where(.menu li:not(.menu-title):not(.disabled) > details > summary:not(.menu-title)):is(summary):not(.active):focus-visible {\n  cursor: pointer;\n  background-color: hsl(var(--bc) / 0.1);\n  --tw-text-opacity: 1;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}.menu li > *:not(ul):not(.menu-title):not(details):active,\n.menu li > *:not(ul):not(.menu-title):not(details).active,\n.menu li > details > summary:active {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--n) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--nc) / var(--tw-text-opacity));\n}.menu :where(li > details > summary)::-webkit-details-marker {\n  display: none;\n}.menu :where(li > details > summary):after,\n.menu :where(li > .menu-dropdown-toggle):after {\n  justify-self: end;\n  display: block;\n  margin-top: -8px;\n  height: 8px;\n  width: 8px;\n  transform: rotate(45deg);\n  transition-property: transform, margin-top;\n  transition-duration: 0.3s;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  content: "";\n  transform-origin: 75% 75%;\n  box-shadow: 2px 2px;\n  pointer-events: none;\n}.menu :where(li > details[open] > summary):after,\n.menu :where(li > .menu-dropdown-toggle.menu-dropdown-show):after {\n  transform: rotate(225deg);\n  margin-top: 0;\n}.mockup-phone .display {\n  overflow: hidden;\n  border-radius: 40px;\n  margin-top: -25px;\n}.mockup-browser .mockup-browser-toolbar .input {\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  height: 28px;\n  width: 384px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b2) / var(--tw-bg-opacity));\n  padding-left: 32px;\n}.mockup-browser .mockup-browser-toolbar .input:before {\n  content: "";\n  position: absolute;\n  left: 8px;\n  top: 50%;\n  aspect-ratio: 1 / 1;\n  height: 12px;\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  border-radius: 9999px;\n  border-width: 2px;\n  border-color: currentColor;\n  opacity: 0.6;\n}.mockup-browser .mockup-browser-toolbar .input:after {\n  content: "";\n  position: absolute;\n  left: 20px;\n  top: 50%;\n  height: 8px;\n  --tw-translate-y: 25%;\n  --tw-rotate: -45deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  border-radius: 9999px;\n  border-width: 1px;\n  border-color: currentColor;\n  opacity: 0.6;\n}.modal::-webkit-backdrop {\n  background-color: rgba(0, 0, 0, 0.3);\n  animation: modal-pop 0.2s ease-out;\n}.modal:not(dialog:not(.modal-open)),\n  .modal::backdrop {\n  background-color: rgba(0, 0, 0, 0.3);\n  animation: modal-pop 0.2s ease-out;\n}.modal-open .modal-box,\n.modal-toggle:checked + .modal .modal-box,\n.modal:target .modal-box,\n.modal[open] .modal-box {\n  --tw-translate-y: 0px;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}@keyframes modal-pop {\n\n  0% {\n    opacity: 0;\n  }\n}@keyframes progress-loading {\n\n  50% {\n    background-position-x: -115%;\n  }\n}.radio:focus-visible {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n  outline-color: hsl(var(--bc) / 1);\n}.radio:checked,\n  .radio[aria-checked="true"] {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n  animation: radiomark var(--animation-input, 0.2s) ease-out;\n  box-shadow: 0 0 0 4px hsl(var(--b1)) inset,\n      0 0 0 4px hsl(var(--b1)) inset;\n}.radio:disabled {\n  cursor: not-allowed;\n  opacity: 0.2;\n}@keyframes radiomark {\n\n  0% {\n    box-shadow: 0 0 0 12px hsl(var(--b1)) inset,\n      0 0 0 12px hsl(var(--b1)) inset;\n  }\n\n  50% {\n    box-shadow: 0 0 0 3px hsl(var(--b1)) inset,\n      0 0 0 3px hsl(var(--b1)) inset;\n  }\n\n  100% {\n    box-shadow: 0 0 0 4px hsl(var(--b1)) inset,\n      0 0 0 4px hsl(var(--b1)) inset;\n  }\n}.range:focus-visible::-webkit-slider-thumb {\n  --focus-shadow: 0 0 0 6px hsl(var(--b1)) inset, 0 0 0 32px hsl(var(--range-shdw)) inset;\n}.range:focus-visible::-moz-range-thumb {\n  --focus-shadow: 0 0 0 6px hsl(var(--b1)) inset, 0 0 0 32px hsl(var(--range-shdw)) inset;\n}.range::-webkit-slider-runnable-track {\n  height: 8px;\n  width: 100%;\n  background-color: hsl(var(--bc) / 0.1);\n  border-radius: var(--rounded-box, 1rem);\n}.range::-moz-range-track {\n  height: 8px;\n  width: 100%;\n  background-color: hsl(var(--bc) / 0.1);\n  border-radius: var(--rounded-box, 1rem);\n}.range::-webkit-slider-thumb {\n  position: relative;\n  height: 24px;\n  width: 24px;\n  border-style: none;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b1) / var(--tw-bg-opacity));\n  border-radius: var(--rounded-box, 1rem);\n  appearance: none;\n  -webkit-appearance: none;\n  top: 50%;\n  color: hsl(var(--range-shdw));\n  transform: translateY(-50%);\n  --filler-size: 1600px;\n  --filler-offset: 9.6px;\n  box-shadow: 0 0 0 3px hsl(var(--range-shdw)) inset,\n      var(--focus-shadow, 0 0),\n      calc(var(--filler-size) * -1 - var(--filler-offset)) 0 0 var(--filler-size);\n}.range::-moz-range-thumb {\n  position: relative;\n  height: 24px;\n  width: 24px;\n  border-style: none;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b1) / var(--tw-bg-opacity));\n  border-radius: var(--rounded-box, 1rem);\n  top: 50%;\n  color: hsl(var(--range-shdw));\n  --filler-size: 1600px;\n  --filler-offset: 8px;\n  box-shadow: 0 0 0 3px hsl(var(--range-shdw)) inset,\n      var(--focus-shadow, 0 0),\n      calc(var(--filler-size) * -1 - var(--filler-offset)) 0 0 var(--filler-size);\n}@keyframes rating-pop {\n\n  0% {\n    transform: translateY(-0.125em);\n  }\n\n  40% {\n    transform: translateY(-0.125em);\n  }\n\n  100% {\n    transform: translateY(0);\n  }\n}.select-bordered {\n  --tw-border-opacity: 0.2;\n}.select:focus {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n  outline-color: hsl(var(--bc) / 0.2);\n}.select-disabled,\n  .select:disabled,\n  .select[disabled] {\n  cursor: not-allowed;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--b2) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b2) / var(--tw-bg-opacity));\n  --tw-text-opacity: 0.2;\n}.select-disabled::placeholder,\n  .select:disabled::placeholder,\n  .select[disabled]::placeholder {\n  color: hsl(var(--bc) / var(--tw-placeholder-opacity));\n  --tw-placeholder-opacity: 0.2;\n}.select-multiple,\n  .select[multiple],\n  .select[size].select:not([size="1"]) {\n  background-image: none;\n  padding-right: 16px;\n}[dir="rtl"] .select {\n  background-position: calc(0% + 12px) calc(1px + 50%),\n    calc(0% + 16px) calc(1px + 50%);\n}.table :where(th, td) {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  vertical-align: middle;\n}.table tr.active,\n  .table tr.active:nth-child(even),\n  .table-zebra tbody tr:nth-child(even) {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b2) / var(--tw-bg-opacity));\n}.table-zebra tr.active,\n    .table-zebra tr.active:nth-child(even),\n    .table-zebra-zebra tbody tr:nth-child(even) {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b3) / var(--tw-bg-opacity));\n}.table :where(thead, tbody) :where(tr:not(:last-child)),\n    .table :where(thead, tbody) :where(tr:first-child:last-child) {\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-bottom-color: hsl(var(--b2) / var(--tw-border-opacity));\n}.table :where(thead, tfoot) {\n  white-space: nowrap;\n  font-size: 12px;\n  line-height: 16px;\n  font-weight: 700;\n  color: hsl(var(--bc) / 0.6);\n}.textarea:focus {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n  outline-color: hsl(var(--bc) / 0.2);\n}.textarea-disabled,\n  .textarea:disabled,\n  .textarea[disabled] {\n  cursor: not-allowed;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--b2) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b2) / var(--tw-bg-opacity));\n  --tw-text-opacity: 0.2;\n}.textarea-disabled::placeholder,\n  .textarea:disabled::placeholder,\n  .textarea[disabled]::placeholder {\n  color: hsl(var(--bc) / var(--tw-placeholder-opacity));\n  --tw-placeholder-opacity: 0.2;\n}@keyframes toast-pop {\n\n  0% {\n    transform: scale(0.9);\n    opacity: 0;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}[dir="rtl"] .toggle {\n  --handleoffsetcalculator: calc(var(--handleoffset) * 1);\n}.toggle:focus-visible {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n  outline-color: hsl(var(--bc) / 0.2);\n}.toggle:checked,\n  .toggle[checked="true"],\n  .toggle[aria-checked="true"] {\n  --handleoffsetcalculator: var(--handleoffset);\n  --tw-border-opacity: 1;\n  --tw-bg-opacity: 1;\n}[dir="rtl"] .toggle:checked, [dir="rtl"] .toggle[checked="true"], [dir="rtl"] .toggle[aria-checked="true"] {\n  --handleoffsetcalculator: calc(var(--handleoffset) * -1);\n}.toggle:indeterminate {\n  --tw-border-opacity: 1;\n  --tw-bg-opacity: 1;\n  box-shadow: calc(var(--handleoffset) / 2) 0 0 2px var(--tglbg) inset,\n      calc(var(--handleoffset) / -2) 0 0 2px var(--tglbg) inset,\n      0 0 0 2px var(--tglbg) inset;\n}[dir="rtl"] .toggle:indeterminate {\n  box-shadow: calc(var(--handleoffset) / 2) 0 0 2px var(--tglbg) inset,\n        calc(var(--handleoffset) / -2) 0 0 2px var(--tglbg) inset,\n        0 0 0 2px var(--tglbg) inset;\n}.toggle:disabled {\n  cursor: not-allowed;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n  background-color: transparent;\n  opacity: 0.3;\n  --togglehandleborder: 0 0 0 3px hsl(var(--bc)) inset,\n      var(--handleoffsetcalculator) 0 0 3px hsl(var(--bc)) inset;\n}.rounded-box {\n  border-radius: var(--rounded-box, 1rem);\n}.no-animation {\n  --btn-focus-scale: 1;\n  --animation-btn: 0;\n  --animation-input: 0;\n}.artboard.phone {\n  width: 320px;\n}.badge-lg {\n  height: 24px;\n  font-size: 16px;\n  line-height: 24px;\n  padding-left: 11.008px;\n  padding-right: 11.008px;\n}.btm-nav-xs > *:where(.active) {\n  border-top-width: 1px;\n}.btm-nav-sm > *:where(.active) {\n  border-top-width: 2px;\n}.btm-nav-md > *:where(.active) {\n  border-top-width: 2px;\n}.btm-nav-lg > *:where(.active) {\n  border-top-width: 4px;\n}.btn-xs {\n  height: 24px;\n  padding-left: 8px;\n  padding-right: 8px;\n  min-height: 24px;\n  font-size: 12px;\n}.btn-sm {\n  height: 32px;\n  padding-left: 12px;\n  padding-right: 12px;\n  min-height: 32px;\n  font-size: 14px;\n}.btn-lg {\n  height: 64px;\n  padding-left: 24px;\n  padding-right: 24px;\n  min-height: 64px;\n  font-size: 18px;\n}.btn-square:where(.btn-xs) {\n  height: 24px;\n  width: 24px;\n  padding: 0px;\n}.btn-square:where(.btn-sm) {\n  height: 32px;\n  width: 32px;\n  padding: 0px;\n}.btn-square:where(.btn-lg) {\n  height: 64px;\n  width: 64px;\n  padding: 0px;\n}.btn-circle:where(.btn-xs) {\n  height: 24px;\n  width: 24px;\n  border-radius: 9999px;\n  padding: 0px;\n}.btn-circle:where(.btn-sm) {\n  height: 32px;\n  width: 32px;\n  border-radius: 9999px;\n  padding: 0px;\n}.btn-circle:where(.btn-md) {\n  height: 48px;\n  width: 48px;\n  border-radius: 9999px;\n  padding: 0px;\n}.btn-circle:where(.btn-lg) {\n  height: 64px;\n  width: 64px;\n  border-radius: 9999px;\n  padding: 0px;\n}.checkbox-xs {\n  height: 16px;\n  width: 16px;\n}.input-xs {\n  height: 24px;\n  padding-left: 8px;\n  padding-right: 8px;\n  font-size: 12px;\n  line-height: 16px;\n  line-height: 1.625;\n}.input-sm {\n  height: 32px;\n  padding-left: 12px;\n  padding-right: 12px;\n  font-size: 14px;\n  line-height: 32px;\n}.join.join-vertical {\n  flex-direction: column;\n}.join.join-vertical .join-item:first-child:not(:last-child),\n  .join.join-vertical *:first-child:not(:last-child) .join-item {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n}.join.join-vertical .join-item:last-child:not(:first-child),\n  .join.join-vertical *:last-child:not(:first-child) .join-item {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: inherit;\n  border-bottom-right-radius: inherit;\n}.join.join-horizontal {\n  flex-direction: row;\n}.join.join-horizontal .join-item:first-child:not(:last-child),\n  .join.join-horizontal *:first-child:not(:last-child) .join-item {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: inherit;\n  border-top-left-radius: inherit;\n}.join.join-horizontal .join-item:last-child:not(:first-child),\n  .join.join-horizontal *:last-child:not(:first-child) .join-item {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: inherit;\n  border-top-right-radius: inherit;\n}.\\!select-sm {\n  height: 32px !important;\n  padding-left: 12px !important;\n  padding-right: 32px !important;\n  font-size: 14px !important;\n  line-height: 32px !important;\n  min-height: 32px !important;\n}.select-sm {\n  height: 32px;\n  padding-left: 12px;\n  padding-right: 32px;\n  font-size: 14px;\n  line-height: 32px;\n  min-height: 32px;\n}[dir="rtl"] .\\!select-sm {\n  padding-left: 32px !important;\n  padding-right: 12px !important;\n}[dir="rtl"] .select-sm {\n  padding-left: 32px;\n  padding-right: 12px;\n}.select-xs {\n  height: 24px;\n  padding-left: 8px;\n  padding-right: 32px;\n  font-size: 12px;\n  line-height: 16px;\n  line-height: 1.625;\n  min-height: 24px;\n}[dir="rtl"] .select-xs {\n  padding-left: 32px;\n  padding-right: 8px;\n}.toggle-xs {\n  --handleoffset: 8px;\n  height: 16px;\n  width: 24px;\n}.tooltip {\n  position: relative;\n  display: inline-block;\n  --tooltip-offset: calc(100% + 1px + var(--tooltip-tail, 0px));\n}.tooltip:before {\n  position: absolute;\n  pointer-events: none;\n  z-index: 1;\n  content: var(--tw-content);\n  --tw-content: attr(data-tip);\n}.tooltip:before, .tooltip-top:before {\n  transform: translateX(-50%);\n  top: auto;\n  left: 50%;\n  right: auto;\n  bottom: var(--tooltip-offset);\n}.tooltip-bottom:before {\n  transform: translateX(-50%);\n  top: var(--tooltip-offset);\n  left: 50%;\n  right: auto;\n  bottom: auto;\n}.tooltip-left:before {\n  transform: translateY(-50%);\n  top: 50%;\n  left: auto;\n  right: var(--tooltip-offset);\n  bottom: auto;\n}.btn-group .btn:not(:first-child):not(:last-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}.btn-group .btn:first-child:not(:last-child) {\n  margin-left: -1px;\n  margin-top: -0px;\n  border-top-left-radius: var(--rounded-btn, 0.5rem);\n  border-top-right-radius: 0;\n  border-bottom-left-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-right-radius: 0;\n}.btn-group .btn:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: var(--rounded-btn, 0.5rem);\n}.btn-group-horizontal .btn:not(:first-child):not(:last-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}.btn-group-horizontal .btn:first-child:not(:last-child) {\n  margin-left: -1px;\n  margin-top: -0px;\n  border-top-left-radius: var(--rounded-btn, 0.5rem);\n  border-top-right-radius: 0;\n  border-bottom-left-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-right-radius: 0;\n}.btn-group-horizontal .btn:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: var(--rounded-btn, 0.5rem);\n}.btn-group-vertical .btn:first-child:not(:last-child) {\n  margin-left: -0px;\n  margin-top: -1px;\n  border-top-left-radius: var(--rounded-btn, 0.5rem);\n  border-top-right-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}.btn-group-vertical .btn:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-right-radius: var(--rounded-btn, 0.5rem);\n}.card-compact .card-body {\n  padding: 16px;\n  font-size: 14px;\n  line-height: 20px;\n}.card-compact .card-title {\n  margin-bottom: 4px;\n}.card-normal .card-body {\n  padding: var(--padding-card, 2rem);\n  font-size: 16px;\n  line-height: 24px;\n}.join.join-vertical > :where(*:not(:first-child)) {\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: -1px;\n}.join.join-horizontal > :where(*:not(:first-child)) {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  margin-left: -1px;\n}.menu-xs :where(li:not(.menu-title) > *:not(ul):not(details):not(.menu-title)),\n  .menu-xs :where(li:not(.menu-title) > details > summary:not(.menu-title)) {\n  border-radius: 4px;\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  font-size: 12px;\n  line-height: 16px;\n}.menu-xs .menu-title {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}.modal-top :where(.modal-box) {\n  width: 100%;\n  max-width: none;\n  --tw-translate-y: -40px;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: var(--rounded-box, 1rem);\n  border-bottom-right-radius: var(--rounded-box, 1rem);\n}.modal-middle :where(.modal-box) {\n  width: 91.666667%;\n  max-width: 512px;\n  --tw-translate-y: 0px;\n  --tw-scale-x: .9;\n  --tw-scale-y: .9;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  border-top-left-radius: var(--rounded-box, 1rem);\n  border-top-right-radius: var(--rounded-box, 1rem);\n  border-bottom-left-radius: var(--rounded-box, 1rem);\n  border-bottom-right-radius: var(--rounded-box, 1rem);\n}.modal-bottom :where(.modal-box) {\n  width: 100%;\n  max-width: none;\n  --tw-translate-y: 40px;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  border-bottom-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-top-left-radius: var(--rounded-box, 1rem);\n  border-top-right-radius: var(--rounded-box, 1rem);\n}.tooltip {\n  position: relative;\n  display: inline-block;\n  text-align: center;\n  --tooltip-tail: 3px;\n  --tooltip-color: hsl(var(--n));\n  --tooltip-text-color: hsl(var(--nc));\n  --tooltip-tail-offset: calc(100% + 1px - var(--tooltip-tail));\n}.tooltip:before,\n.tooltip:after {\n  opacity: 0;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-delay: 100ms;\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}.tooltip:after {\n  position: absolute;\n  content: "";\n  border-style: solid;\n  border-width: var(--tooltip-tail, 0);\n  width: 0;\n  height: 0;\n  display: block;\n}.tooltip:before {\n  max-width: 320px;\n  border-radius: 4px;\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  font-size: 14px;\n  line-height: 20px;\n  background-color: var(--tooltip-color);\n  color: var(--tooltip-text-color);\n  width: max-content;\n}.tooltip.tooltip-open:before,\n.tooltip.tooltip-open:after,\n.tooltip:hover:before,\n.tooltip:hover:after {\n  opacity: 1;\n  transition-delay: 75ms;\n}.tooltip:has(:focus-visible):after,\n.tooltip:has(:focus-visible):before {\n  opacity: 1;\n  transition-delay: 75ms;\n}.tooltip:not([data-tip]):hover:before,\n.tooltip:not([data-tip]):hover:after {\n  visibility: hidden;\n  opacity: 0;\n}.tooltip:after, .tooltip-top:after {\n  transform: translateX(-50%);\n  border-color: var(--tooltip-color) transparent transparent transparent;\n  top: auto;\n  left: 50%;\n  right: auto;\n  bottom: var(--tooltip-tail-offset);\n}.tooltip-bottom:after {\n  transform: translateX(-50%);\n  border-color: transparent transparent var(--tooltip-color) transparent;\n  top: var(--tooltip-tail-offset);\n  left: 50%;\n  right: auto;\n  bottom: auto;\n}.tooltip-left:after {\n  transform: translateY(-50%);\n  border-color: transparent transparent transparent var(--tooltip-color);\n  top: 50%;\n  left: auto;\n  right: calc(var(--tooltip-tail-offset) + 1px);\n  bottom: auto;\n}.pointer-events-none {\n  pointer-events: none;\n}.invisible {\n  visibility: hidden;\n}.collapse {\n  visibility: collapse;\n}.static {\n  position: static;\n}.absolute {\n  position: absolute;\n}.relative {\n  position: relative;\n}.sticky {\n  position: sticky;\n}.inset-0 {\n  inset: 0px;\n}.-bottom-1 {\n  bottom: -4px;\n}.-left-\\[1px\\] {\n  left: -1px;\n}.-right-1 {\n  right: -4px;\n}.-top-1 {\n  top: -4px;\n}.bottom-0 {\n  bottom: 0px;\n}.bottom-4 {\n  bottom: 16px;\n}.left-0 {\n  left: 0px;\n}.left-2 {\n  left: 8px;\n}.left-2\\.5 {\n  left: 10px;\n}.right-0 {\n  right: 0px;\n}.right-1 {\n  right: 4px;\n}.right-4 {\n  right: 16px;\n}.top-0 {\n  top: 0px;\n}.top-1 {\n  top: 4px;\n}.top-1\\.5 {\n  top: 6px;\n}.z-10 {\n  z-index: 10;\n}.z-20 {\n  z-index: 20;\n}.z-50 {\n  z-index: 50;\n}.z-\\[1\\] {\n  z-index: 1;\n}.float-right {\n  float: right;\n}.mx-1 {\n  margin-left: 4px;\n  margin-right: 4px;\n}.mx-2 {\n  margin-left: 8px;\n  margin-right: 8px;\n}.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}.my-4 {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}.my-6 {\n  margin-top: 24px;\n  margin-bottom: 24px;\n}.my-auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}.-mb-1 {\n  margin-bottom: -4px;\n}.-mr-6 {\n  margin-right: -24px;\n}.-mt-1 {\n  margin-top: -4px;\n}.mb-1 {\n  margin-bottom: 4px;\n}.mb-2 {\n  margin-bottom: 8px;\n}.mb-3 {\n  margin-bottom: 12px;\n}.mb-4 {\n  margin-bottom: 16px;\n}.ml-1 {\n  margin-left: 4px;\n}.ml-1\\.5 {\n  margin-left: 6px;\n}.ml-3 {\n  margin-left: 12px;\n}.mr-1 {\n  margin-right: 4px;\n}.mr-3 {\n  margin-right: 12px;\n}.mr-6 {\n  margin-right: 24px;\n}.mt-0 {\n  margin-top: 0px;\n}.mt-0\\.5 {\n  margin-top: 2px;\n}.mt-1 {\n  margin-top: 4px;\n}.mt-1\\.5 {\n  margin-top: 6px;\n}.mt-2 {\n  margin-top: 8px;\n}.mt-20 {\n  margin-top: 80px;\n}.mt-3 {\n  margin-top: 12px;\n}.mt-4 {\n  margin-top: 16px;\n}.mt-\\[1px\\] {\n  margin-top: 1px;\n}.block {\n  display: block;\n}.inline {\n  display: inline;\n}.flex {\n  display: flex;\n}.inline-flex {\n  display: inline-flex;\n}.table {\n  display: table;\n}.grid {\n  display: grid;\n}.hidden {\n  display: none;\n}.aspect-square {\n  aspect-ratio: 1 / 1;\n}.\\!h-10 {\n  height: 40px !important;\n}.\\!h-7 {\n  height: 28px !important;\n}.\\!h-auto {\n  height: auto !important;\n}.\\!h-full {\n  height: 100% !important;\n}.h-0 {\n  height: 0px;\n}.h-10 {\n  height: 40px;\n}.h-11 {\n  height: 44px;\n}.h-2 {\n  height: 8px;\n}.h-2\\.5 {\n  height: 10px;\n}.h-3 {\n  height: 12px;\n}.h-3\\.5 {\n  height: 14px;\n}.h-4 {\n  height: 16px;\n}.h-5 {\n  height: 20px;\n}.h-52 {\n  height: 208px;\n}.h-6 {\n  height: 24px;\n}.h-60 {\n  height: 240px;\n}.h-7 {\n  height: 28px;\n}.h-8 {\n  height: 32px;\n}.h-full {\n  height: 100%;\n}.max-h-10 {\n  max-height: 40px;\n}.max-h-none {\n  max-height: none;\n}.min-h-full {\n  min-height: 100%;\n}.\\!w-auto {\n  width: auto !important;\n}.\\!w-full {\n  width: 100% !important;\n}.w-0 {\n  width: 0px;\n}.w-2 {\n  width: 8px;\n}.w-2\\.5 {\n  width: 10px;\n}.w-3 {\n  width: 12px;\n}.w-3\\.5 {\n  width: 14px;\n}.w-4 {\n  width: 16px;\n}.w-5 {\n  width: 20px;\n}.w-52 {\n  width: 208px;\n}.w-6 {\n  width: 24px;\n}.w-80 {\n  width: 320px;\n}.w-full {\n  width: 100%;\n}.min-w-max {\n  min-width: max-content;\n}.max-w-2xl {\n  max-width: 672px;\n}.max-w-3xl {\n  max-width: 768px;\n}.max-w-xl {\n  max-width: 576px;\n}.max-w-xs {\n  max-width: 320px;\n}.flex-none {\n  flex: none;\n}.flex-shrink-0 {\n  flex-shrink: 0;\n}.shrink-0 {\n  flex-shrink: 0;\n}.\\!animate-none {\n  animation: none !important;\n}@keyframes bounce {\n\n  0%, 100% {\n    transform: translateY(-25%);\n    animation-timing-function: cubic-bezier(0.8,0,1,1);\n  }\n\n  50% {\n    transform: none;\n    animation-timing-function: cubic-bezier(0,0,0.2,1);\n  }\n}.animate-bounce {\n  animation: bounce 1s infinite;\n}@keyframes spin {\n\n  to {\n    transform: rotate(360deg);\n  }\n}.animate-spin {\n  animation: spin 1s linear infinite;\n}.cursor-crosshair {\n  cursor: crosshair;\n}.cursor-ew-resize {\n  cursor: ew-resize;\n}.cursor-grab {\n  cursor: grab;\n}.cursor-nwse-resize {\n  cursor: nwse-resize;\n}.cursor-pointer {\n  cursor: pointer;\n}.cursor-text {\n  cursor: text;\n}.select-none {\n  -webkit-user-select: none;\n          user-select: none;\n}.resize {\n  resize: both;\n}.list-outside {\n  list-style-position: outside;\n}.list-disc {\n  list-style-type: disc;\n}.grid-cols-3 {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}.flex-col {\n  flex-direction: column;\n}.items-start {\n  align-items: flex-start;\n}.items-end {\n  align-items: flex-end;\n}.items-center {\n  align-items: center;\n}.justify-start {\n  justify-content: flex-start;\n}.justify-end {\n  justify-content: flex-end;\n}.justify-center {\n  justify-content: center;\n}.justify-between {\n  justify-content: space-between;\n}.gap-1 {\n  gap: 4px;\n}.gap-2 {\n  gap: 8px;\n}.gap-4 {\n  gap: 16px;\n}.space-x-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(4px * var(--tw-space-x-reverse));\n  margin-left: calc(4px * calc(1 - var(--tw-space-x-reverse)));\n}.space-x-1\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(6px * var(--tw-space-x-reverse));\n  margin-left: calc(6px * calc(1 - var(--tw-space-x-reverse)));\n}.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(8px * var(--tw-space-x-reverse));\n  margin-left: calc(8px * calc(1 - var(--tw-space-x-reverse)));\n}.space-x-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(12px * var(--tw-space-x-reverse));\n  margin-left: calc(12px * calc(1 - var(--tw-space-x-reverse)));\n}.space-x-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(16px * var(--tw-space-x-reverse));\n  margin-left: calc(16px * calc(1 - var(--tw-space-x-reverse)));\n}.space-y-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(4px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(4px * var(--tw-space-y-reverse));\n}.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(6px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(6px * var(--tw-space-y-reverse));\n}.space-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(8px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(8px * var(--tw-space-y-reverse));\n}.space-y-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(16px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(16px * var(--tw-space-y-reverse));\n}.space-y-5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(20px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(20px * var(--tw-space-y-reverse));\n}.overflow-auto {\n  overflow: auto;\n}.overflow-hidden {\n  overflow: hidden;\n}.overflow-visible {\n  overflow: visible;\n}.overflow-y-auto {\n  overflow-y: auto;\n}.overflow-x-hidden {\n  overflow-x: hidden;\n}.overflow-y-hidden {\n  overflow-y: hidden;\n}.whitespace-nowrap {\n  white-space: nowrap;\n}.whitespace-pre-wrap {\n  white-space: pre-wrap;\n}.break-all {\n  word-break: break-all;\n}.\\!rounded {\n  border-radius: 4px !important;\n}.\\!rounded-xl {\n  border-radius: 12px !important;\n}.rounded {\n  border-radius: 4px;\n}.rounded-2xl {\n  border-radius: 16px;\n}.rounded-full {\n  border-radius: 9999px;\n}.rounded-lg {\n  border-radius: 8px;\n}.rounded-md {\n  border-radius: 6px;\n}.rounded-xl {\n  border-radius: 12px;\n}.\\!rounded-l-none {\n  border-top-left-radius: 0px !important;\n  border-bottom-left-radius: 0px !important;\n}.\\!rounded-r-none {\n  border-top-right-radius: 0px !important;\n  border-bottom-right-radius: 0px !important;\n}.rounded-t {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}.rounded-t-none {\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n}.rounded-tr-none {\n  border-top-right-radius: 0px;\n}.border {\n  border-width: 1px;\n}.border-0 {\n  border-width: 0px;\n}.border-2 {\n  border-width: 2px;\n}.border-y {\n  border-top-width: 1px;\n  border-bottom-width: 1px;\n}.border-b {\n  border-bottom-width: 1px;\n}.border-l {\n  border-left-width: 1px;\n}.border-r {\n  border-right-width: 1px;\n}.border-t {\n  border-top-width: 1px;\n}.border-dashed {\n  border-style: dashed;\n}.border-base-200 {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--b2) / var(--tw-border-opacity));\n}.border-base-300 {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--b3) / var(--tw-border-opacity));\n}.border-base-content {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n}.border-base-content\\/10 {\n  border-color: hsl(var(--bc) / 0.1);\n}.border-base-content\\/20 {\n  border-color: hsl(var(--bc) / 0.2);\n}.border-base-content\\/30 {\n  border-color: hsl(var(--bc) / 0.3);\n}.border-base-content\\/40 {\n  border-color: hsl(var(--bc) / 0.4);\n}.border-cyan-500\\/80 {\n  border-color: rgb(6 182 212 / 0.8);\n}.border-emerald-500\\/80 {\n  border-color: rgb(16 185 129 / 0.8);\n}.border-gray-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n}.border-gray-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(156 163 175 / var(--tw-border-opacity));\n}.border-indigo-500\\/80 {\n  border-color: rgb(99 102 241 / 0.8);\n}.border-lime-500\\/80 {\n  border-color: rgb(132 204 22 / 0.8);\n}.border-orange-500\\/80 {\n  border-color: rgb(249 115 22 / 0.8);\n}.border-pink-500\\/80 {\n  border-color: rgb(236 72 153 / 0.8);\n}.border-purple-600\\/80 {\n  border-color: rgb(147 51 234 / 0.8);\n}.border-red-500\\/80 {\n  border-color: rgb(239 68 68 / 0.8);\n}.border-sky-500\\/80 {\n  border-color: rgb(14 165 233 / 0.8);\n}.border-yellow-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(254 240 138 / var(--tw-border-opacity));\n}.border-yellow-300\\/80 {\n  border-color: rgb(253 224 71 / 0.8);\n}.\\!border-l-neutral-500 {\n  --tw-border-opacity: 1 !important;\n  border-left-color: rgb(115 115 115 / var(--tw-border-opacity)) !important;\n}.\\!bg-base-200 {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(var(--b2) / var(--tw-bg-opacity)) !important;\n}.bg-\\[\\#7B73FF\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(123 115 255 / var(--tw-bg-opacity));\n}.bg-base-100 {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b1) / var(--tw-bg-opacity));\n}.bg-base-200 {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b2) / var(--tw-bg-opacity));\n}.bg-base-200\\/20 {\n  background-color: hsl(var(--b2) / 0.2);\n}.bg-base-200\\/50 {\n  background-color: hsl(var(--b2) / 0.5);\n}.bg-base-300 {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b3) / var(--tw-bg-opacity));\n}.bg-cyan-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(207 250 254 / var(--tw-bg-opacity));\n}.bg-cyan-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(6 182 212 / var(--tw-bg-opacity));\n}.bg-emerald-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(209 250 229 / var(--tw-bg-opacity));\n}.bg-emerald-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(16 185 129 / var(--tw-bg-opacity));\n}.bg-gray-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity));\n}.bg-indigo-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(224 231 255 / var(--tw-bg-opacity));\n}.bg-indigo-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(99 102 241 / var(--tw-bg-opacity));\n}.bg-lime-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(236 252 203 / var(--tw-bg-opacity));\n}.bg-lime-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(132 204 22 / var(--tw-bg-opacity));\n}.bg-orange-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 237 213 / var(--tw-bg-opacity));\n}.bg-orange-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 115 22 / var(--tw-bg-opacity));\n}.bg-pink-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(252 231 243 / var(--tw-bg-opacity));\n}.bg-pink-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(236 72 153 / var(--tw-bg-opacity));\n}.bg-purple-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 232 255 / var(--tw-bg-opacity));\n}.bg-purple-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(147 51 234 / var(--tw-bg-opacity));\n}.bg-red-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 226 226 / var(--tw-bg-opacity));\n}.bg-red-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity));\n}.bg-sky-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(224 242 254 / var(--tw-bg-opacity));\n}.bg-sky-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(14 165 233 / var(--tw-bg-opacity));\n}.bg-transparent {\n  background-color: transparent;\n}.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}.bg-yellow-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 249 195 / var(--tw-bg-opacity));\n}.bg-yellow-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(253 224 71 / var(--tw-bg-opacity));\n}.bg-opacity-50 {\n  --tw-bg-opacity: 0.5;\n}.bg-opacity-80 {\n  --tw-bg-opacity: 0.8;\n}.stroke-info {\n  stroke: hsl(var(--in) / 1);\n}.p-1 {\n  padding: 4px;\n}.p-2 {\n  padding: 8px;\n}.p-5 {\n  padding: 20px;\n}.p-8 {\n  padding: 32px;\n}.\\!px-3 {\n  padding-left: 12px !important;\n  padding-right: 12px !important;\n}.px-0 {\n  padding-left: 0px;\n  padding-right: 0px;\n}.px-0\\.5 {\n  padding-left: 2px;\n  padding-right: 2px;\n}.px-1 {\n  padding-left: 4px;\n  padding-right: 4px;\n}.px-2 {\n  padding-left: 8px;\n  padding-right: 8px;\n}.px-2\\.5 {\n  padding-left: 10px;\n  padding-right: 10px;\n}.px-3 {\n  padding-left: 12px;\n  padding-right: 12px;\n}.px-4 {\n  padding-left: 16px;\n  padding-right: 16px;\n}.px-6 {\n  padding-left: 24px;\n  padding-right: 24px;\n}.py-0 {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}.py-0\\.5 {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}.py-1 {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}.py-1\\.5 {\n  padding-top: 6px;\n  padding-bottom: 6px;\n}.py-2 {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}.py-5 {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}.\\!pl-1 {\n  padding-left: 4px !important;\n}.\\!pr-2 {\n  padding-right: 8px !important;\n}.\\!pr-7 {\n  padding-right: 28px !important;\n}.pb-0 {\n  padding-bottom: 0px;\n}.pb-0\\.5 {\n  padding-bottom: 2px;\n}.pb-1 {\n  padding-bottom: 4px;\n}.pb-2 {\n  padding-bottom: 8px;\n}.pb-4 {\n  padding-bottom: 16px;\n}.pb-6 {\n  padding-bottom: 24px;\n}.pl-0 {\n  padding-left: 0px;\n}.pl-0\\.5 {\n  padding-left: 2px;\n}.pl-1 {\n  padding-left: 4px;\n}.pl-3 {\n  padding-left: 12px;\n}.pl-4 {\n  padding-left: 16px;\n}.pr-1 {\n  padding-right: 4px;\n}.pr-1\\.5 {\n  padding-right: 6px;\n}.pr-3 {\n  padding-right: 12px;\n}.pr-3\\.5 {\n  padding-right: 14px;\n}.pr-4 {\n  padding-right: 16px;\n}.pt-0 {\n  padding-top: 0px;\n}.pt-0\\.5 {\n  padding-top: 2px;\n}.pt-1 {\n  padding-top: 4px;\n}.pt-1\\.5 {\n  padding-top: 6px;\n}.pt-2 {\n  padding-top: 8px;\n}.pt-4 {\n  padding-top: 16px;\n}.text-center {\n  text-align: center;\n}.text-right {\n  text-align: right;\n}.align-middle {\n  vertical-align: middle;\n}.align-bottom {\n  vertical-align: bottom;\n}.align-text-top {\n  vertical-align: text-top;\n}.font-mono {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n}.\\!text-base {\n  font-size: 16px !important;\n  line-height: 24px !important;\n}.text-2xl {\n  font-size: 24px;\n  line-height: 32px;\n}.text-3xl {\n  font-size: 30px;\n  line-height: 36px;\n}.text-\\[1\\.0vw\\] {\n  font-size: 1.0vw;\n}.text-\\[1\\.6vw\\] {\n  font-size: 1.6vw;\n}.text-base {\n  font-size: 16px;\n  line-height: 24px;\n}.text-lg {\n  font-size: 18px;\n  line-height: 28px;\n}.text-sm {\n  font-size: 14px;\n  line-height: 20px;\n}.text-xl {\n  font-size: 20px;\n  line-height: 28px;\n}.text-xs {\n  font-size: 12px;\n  line-height: 16px;\n}.font-medium {\n  font-weight: 500;\n}.font-normal {\n  font-weight: 400;\n}.font-semibold {\n  font-weight: 600;\n}.uppercase {\n  text-transform: uppercase;\n}.\\!normal-case {\n  text-transform: none !important;\n}.normal-case {\n  text-transform: none;\n}.\\!text-gray-300 {\n  --tw-text-opacity: 1 !important;\n  color: rgb(209 213 219 / var(--tw-text-opacity)) !important;\n}.text-base-100 {\n  --tw-text-opacity: 1;\n  color: hsl(var(--b1) / var(--tw-text-opacity));\n}.text-base-content {\n  --tw-text-opacity: 1;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n}.text-gray-300 {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}.text-green-600 {\n  --tw-text-opacity: 1;\n  color: rgb(22 163 74 / var(--tw-text-opacity));\n}.text-red-400 {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity));\n}.text-red-500 {\n  --tw-text-opacity: 1;\n  color: rgb(239 68 68 / var(--tw-text-opacity));\n}.text-transparent {\n  color: transparent;\n}.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}.underline {\n  text-decoration-line: underline;\n}.opacity-0 {\n  opacity: 0;\n}.opacity-100 {\n  opacity: 1;\n}.opacity-50 {\n  opacity: 0.5;\n}.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}.outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}.\\!outline-0 {\n  outline-width: 0px !important;\n}.\\!ring-0 {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;\n}.blur {\n  --tw-blur: blur(8px);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}.transition-colors {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}.transition-none {\n  transition-property: none;\n}.duration-75 {\n  transition-duration: 75ms;\n}:host{all:initial;background-color: transparent}a[href],input[type=checkbox],input[type=submit],input[type=image],input[type=radio],label[for],select,button{cursor:pointer}button .disabled{display:none}button[disabled] .disabled{display:initial}button .enabled{display:initial}button[disabled] .enabled{display:none}.input-bordered {\n  border-color: hsl(var(--bc) / 0.2);\n}.select-bordered {\n  border-color: hsl(var(--bc) / 0.2);\n}.textarea-bordered {\n  border-color: hsl(var(--bc) / 0.2);\n}.btn {\n  --btn-focus-scale: 1;\n  --animation-btn: 0;\n  --animation-input: 0;\n}.base-input {\n  flex-shrink: 1;\n  height: 48px;\n  padding-left: 16px;\n  padding-right: 16px;\n  font-size: 16px;\n  line-height: 2;\n  line-height: 24px;\n  border-width: 1px;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n  --tw-border-opacity: 0;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b1) / var(--tw-bg-opacity));\n  border-radius: var(--rounded-btn, 0.5rem);\n}.input-group > .base-input {\n  isolation: isolate;\n}\n  .input-group > .base-input {\n  border-radius: 0px;\n}.base-input input:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}.base-input[list]::-webkit-calendar-picker-indicator {\n  line-height: 1em;\n}.base-input {\n  --tw-border-opacity: 0.2;\n}.base-input:focus,.base-input:focus-within {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n  outline-color: hsl(var(--bc) / 0.2);\n}.base-input:disabled,.base-input[disabled] {\n  cursor: not-allowed;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--b2) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b2) / var(--tw-bg-opacity));\n  --tw-text-opacity: 0.2;\n}.base-input:disabled::placeholder,.base-input[disabled]::placeholder {\n  color: hsl(var(--bc) / var(--tw-placeholder-opacity));\n  --tw-placeholder-opacity: 0.2;\n}.mockup-browser .mockup-browser-toolbar .base-input {\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  height: 28px;\n  width: 384px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b2) / var(--tw-bg-opacity));\n  padding-left: 32px;\n}.mockup-browser .mockup-browser-toolbar .base-input:before {\n  content: "";\n  position: absolute;\n  left: 8px;\n  top: 50%;\n  aspect-ratio: 1 / 1;\n  height: 12px;\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  border-radius: 9999px;\n  border-width: 2px;\n  border-color: currentColor;\n  opacity: 0.6;\n}.mockup-browser .mockup-browser-toolbar .base-input:after {\n  content: "";\n  position: absolute;\n  left: 20px;\n  top: 50%;\n  height: 8px;\n  --tw-translate-y: 25%;\n  --tw-rotate: -45deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  border-radius: 9999px;\n  border-width: 1px;\n  border-color: currentColor;\n  opacity: 0.6;\n}.base-input {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n  border-color: hsl(var(--bc) / 0.2);\n}\n  .input-group > .base-textarea {\n  border-radius: 0px;\n}.base-textarea {\n  flex-shrink: 1;\n  min-height: 48px;\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  font-size: 14px;\n  line-height: 20px;\n  line-height: 2;\n  border-width: 1px;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b1) / var(--tw-bg-opacity));\n  border-radius: var(--rounded-btn, 0.5rem);\n  --tw-border-opacity: 0.2;\n}.base-textarea:focus {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n  outline-color: hsl(var(--bc) / 0.2);\n}.base-textarea:disabled,.base-textarea[disabled] {\n  cursor: not-allowed;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--b2) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b2) / var(--tw-bg-opacity));\n  --tw-text-opacity: 0.2;\n}.base-textarea:disabled::placeholder,.base-textarea[disabled]::placeholder {\n  color: hsl(var(--bc) / var(--tw-placeholder-opacity));\n  --tw-placeholder-opacity: 0.2;\n}.base-textarea {\n  border-radius: 24px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n  border-color: hsl(var(--bc) / 0.2);\n}.base-button {\n  display: inline-flex;\n  flex-shrink: 0;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  border-color: transparent;\n  border-color: hsl(var(--b2) / var(--tw-border-opacity));\n  text-align: center;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  transition-duration: 200ms;\n  border-radius: var(--rounded-btn, 0.5rem);\n  height: 48px;\n  padding-left: 16px;\n  padding-right: 16px;\n  min-height: 48px;\n  font-size: 14px;\n  line-height: 1em;\n  gap: 8px;\n  font-weight: 600;\n  text-decoration-line: none;\n  border-width: var(--border-btn, 1px);\n  animation: button-pop var(--animation-btn, 0.25s) ease-out;\n  text-transform: var(--btn-text-case, uppercase);\n  --tw-border-opacity: 1;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b2) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n  outline-color: hsl(var(--bc) / 1);\n}.base-button[disabled],.base-button:disabled {\n  pointer-events: none;\n}.btn-group > input[type="radio"].base-button {\n  -webkit-appearance: none;\n          appearance: none;\n}.btn-group > input[type="radio"].base-button:before {\n  content: attr(data-title);\n}.base-button:is(input[type="checkbox"]),.base-button:is(input[type="radio"]) {\n  width: auto;\n  -webkit-appearance: none;\n          appearance: none;\n}.base-button:is(input[type="checkbox"]):after,.base-button:is(input[type="radio"]):after {\n  --tw-content: attr(aria-label);\n  content: var(--tw-content);\n}@media (hover: hover) {\n\n  .base-button:hover {\n    border-color: hsl(var(--b3) / var(--tw-border-opacity));\n    background-color: hsl(var(--b3) / var(--tw-bg-opacity));\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--nf) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--nf) / var(--tw-bg-opacity));\n  }\n\n  .base-button.glass:hover {\n    --glass-opacity: 25%;\n    --glass-border-opacity: 15%;\n  }\n\n  .base-button[disabled]:hover,.base-button:disabled:hover {\n    --tw-border-opacity: 0;\n    background-color: hsl(var(--n) / var(--tw-bg-opacity));\n    --tw-bg-opacity: 0.2;\n    color: hsl(var(--bc) / var(--tw-text-opacity));\n    --tw-text-opacity: 0.2;\n  }\n\n  .base-button:is(input[type="checkbox"]:checked):hover,.base-button:is(input[type="radio"]:checked):hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--pf) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--pf) / var(--tw-bg-opacity));\n  }\n}.base-button:active:hover,.base-button:active:focus {\n  animation: button-pop 0s ease-out;\n  transform: scale(var(--btn-focus-scale, 0.97));\n}.base-button:focus-visible {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n}.base-button {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--n) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--n) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--nc) / var(--tw-text-opacity));\n  outline-color: hsl(var(--n) / 1);\n}.base-button.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--nf) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--nf) / var(--tw-bg-opacity));\n}.base-button.glass {\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  outline-color: currentColor;\n}.base-button.glass.btn-active {\n  --glass-opacity: 25%;\n  --glass-border-opacity: 15%;\n}.base-button.btn-disabled,.base-button[disabled],.base-button:disabled {\n  --tw-border-opacity: 0;\n  background-color: hsl(var(--n) / var(--tw-bg-opacity));\n  --tw-bg-opacity: 0.2;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n  --tw-text-opacity: 0.2;\n}.btn-group > input[type="radio"]:checked.base-button {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--p) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--p) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--pc) / var(--tw-text-opacity));\n}.btn-group > input[type="radio"]:checked.base-button:focus-visible {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-color: hsl(var(--p) / 1);\n}.base-button:is(input[type="checkbox"]:checked),.base-button:is(input[type="radio"]:checked) {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--p) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--p) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--pc) / var(--tw-text-opacity));\n}.base-button:is(input[type="checkbox"]:checked):focus-visible,.base-button:is(input[type="radio"]:checked):focus-visible {\n  outline-color: hsl(var(--p) / 1);\n}.btn-group .base-button:not(:first-child):not(:last-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}.btn-group .base-button:first-child:not(:last-child) {\n  margin-left: -1px;\n  margin-top: -0px;\n  border-top-left-radius: var(--rounded-btn, 0.5rem);\n  border-top-right-radius: 0;\n  border-bottom-left-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-right-radius: 0;\n}.btn-group .base-button:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: var(--rounded-btn, 0.5rem);\n}.btn-group-horizontal .base-button:not(:first-child):not(:last-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}.btn-group-horizontal .base-button:first-child:not(:last-child) {\n  margin-left: -1px;\n  margin-top: -0px;\n  border-top-left-radius: var(--rounded-btn, 0.5rem);\n  border-top-right-radius: 0;\n  border-bottom-left-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-right-radius: 0;\n}.btn-group-horizontal .base-button:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: var(--rounded-btn, 0.5rem);\n}.btn-group-vertical .base-button:first-child:not(:last-child) {\n  margin-left: -0px;\n  margin-top: -1px;\n  border-top-left-radius: var(--rounded-btn, 0.5rem);\n  border-top-right-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}.btn-group-vertical .base-button:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-right-radius: var(--rounded-btn, 0.5rem);\n}.base-button {\n  font-size: 16px;\n  line-height: 24px;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n  --btn-focus-scale: 1;\n  --animation-btn: 0;\n  --animation-input: 0;\n}.white-button {\n  display: inline-flex;\n  flex-shrink: 0;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  border-color: transparent;\n  border-color: hsl(var(--b2) / var(--tw-border-opacity));\n  text-align: center;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  transition-duration: 200ms;\n  border-radius: var(--rounded-btn, 0.5rem);\n  height: 48px;\n  padding-left: 16px;\n  padding-right: 16px;\n  min-height: 48px;\n  font-size: 14px;\n  line-height: 1em;\n  gap: 8px;\n  font-weight: 600;\n  text-decoration-line: none;\n  border-width: var(--border-btn, 1px);\n  animation: button-pop var(--animation-btn, 0.25s) ease-out;\n  text-transform: var(--btn-text-case, uppercase);\n  --tw-border-opacity: 1;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b2) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n  outline-color: hsl(var(--bc) / 1);\n}.white-button[disabled],.white-button:disabled {\n  pointer-events: none;\n}.btn-group > input[type="radio"].white-button {\n  -webkit-appearance: none;\n          appearance: none;\n}.btn-group > input[type="radio"].white-button:before {\n  content: attr(data-title);\n}.white-button:is(input[type="checkbox"]),.white-button:is(input[type="radio"]) {\n  width: auto;\n  -webkit-appearance: none;\n          appearance: none;\n}.white-button:is(input[type="checkbox"]):after,.white-button:is(input[type="radio"]):after {\n  --tw-content: attr(aria-label);\n  content: var(--tw-content);\n}@media (hover: hover) {\n\n  .white-button:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--b3) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--b3) / var(--tw-bg-opacity));\n  }\n\n  .white-button.glass:hover {\n    --glass-opacity: 25%;\n    --glass-border-opacity: 15%;\n  }\n\n  .white-button:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--bc) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--b1) / var(--tw-text-opacity));\n  }\n\n  .white-button.btn-primary:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--pf) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--pf) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--pc) / var(--tw-text-opacity));\n  }\n\n  .white-button.btn-secondary:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--sf) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--sf) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--sc) / var(--tw-text-opacity));\n  }\n\n  .white-button.btn-accent:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--af) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--af) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--ac) / var(--tw-text-opacity));\n  }\n\n  .white-button.btn-success:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--su) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--su) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--suc) / var(--tw-text-opacity));\n  }\n\n  .white-button.btn-info:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--in) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--in) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--inc) / var(--tw-text-opacity));\n  }\n\n  .white-button.btn-warning:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--wa) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--wa) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--wac) / var(--tw-text-opacity));\n  }\n\n  .white-button.btn-error:hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--er) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--er) / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: hsl(var(--erc) / var(--tw-text-opacity));\n  }\n\n  .white-button[disabled]:hover,.white-button:disabled:hover {\n    --tw-border-opacity: 0;\n    background-color: hsl(var(--n) / var(--tw-bg-opacity));\n    --tw-bg-opacity: 0.2;\n    color: hsl(var(--bc) / var(--tw-text-opacity));\n    --tw-text-opacity: 0.2;\n  }\n\n  .white-button:is(input[type="checkbox"]:checked):hover,.white-button:is(input[type="radio"]:checked):hover {\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--pf) / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--pf) / var(--tw-bg-opacity));\n  }\n}.white-button:active:hover,.white-button:active:focus {\n  animation: button-pop 0s ease-out;\n  transform: scale(var(--btn-focus-scale, 0.97));\n}.white-button:focus-visible {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n}.white-button.glass {\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  outline-color: currentColor;\n}.white-button.glass.btn-active {\n  --glass-opacity: 25%;\n  --glass-border-opacity: 15%;\n}.white-button {\n  border-color: currentColor;\n  background-color: transparent;\n  --tw-text-opacity: 1;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}.white-button.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--b1) / var(--tw-text-opacity));\n}.white-button.btn-primary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--p) / var(--tw-text-opacity));\n}.white-button.btn-primary.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--pf) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--pf) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--pc) / var(--tw-text-opacity));\n}.white-button.btn-secondary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--s) / var(--tw-text-opacity));\n}.white-button.btn-secondary.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--sf) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--sf) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--sc) / var(--tw-text-opacity));\n}.white-button.btn-accent {\n  --tw-text-opacity: 1;\n  color: hsl(var(--a) / var(--tw-text-opacity));\n}.white-button.btn-accent.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--af) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--af) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--ac) / var(--tw-text-opacity));\n}.white-button.btn-success {\n  --tw-text-opacity: 1;\n  color: hsl(var(--su) / var(--tw-text-opacity));\n}.white-button.btn-success.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--su) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--su) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--suc) / var(--tw-text-opacity));\n}.white-button.btn-info {\n  --tw-text-opacity: 1;\n  color: hsl(var(--in) / var(--tw-text-opacity));\n}.white-button.btn-info.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--in) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--in) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--inc) / var(--tw-text-opacity));\n}.white-button.btn-warning {\n  --tw-text-opacity: 1;\n  color: hsl(var(--wa) / var(--tw-text-opacity));\n}.white-button.btn-warning.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--wa) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--wa) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--wac) / var(--tw-text-opacity));\n}.white-button.btn-error {\n  --tw-text-opacity: 1;\n  color: hsl(var(--er) / var(--tw-text-opacity));\n}.white-button.btn-error.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--er) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--er) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--erc) / var(--tw-text-opacity));\n}.white-button.btn-disabled,.white-button[disabled],.white-button:disabled {\n  --tw-border-opacity: 0;\n  background-color: hsl(var(--n) / var(--tw-bg-opacity));\n  --tw-bg-opacity: 0.2;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n  --tw-text-opacity: 0.2;\n}.btn-group > input[type="radio"]:checked.white-button {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--p) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--p) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--pc) / var(--tw-text-opacity));\n}.btn-group > input[type="radio"]:checked.white-button:focus-visible {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-color: hsl(var(--p) / 1);\n}.white-button:is(input[type="checkbox"]:checked),.white-button:is(input[type="radio"]:checked) {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--p) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--p) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--pc) / var(--tw-text-opacity));\n}.white-button:is(input[type="checkbox"]:checked):focus-visible,.white-button:is(input[type="radio"]:checked):focus-visible {\n  outline-color: hsl(var(--p) / 1);\n}.btn-group .white-button:not(:first-child):not(:last-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}.btn-group .white-button:first-child:not(:last-child) {\n  margin-left: -1px;\n  margin-top: -0px;\n  border-top-left-radius: var(--rounded-btn, 0.5rem);\n  border-top-right-radius: 0;\n  border-bottom-left-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-right-radius: 0;\n}.btn-group .white-button:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: var(--rounded-btn, 0.5rem);\n}.btn-group-horizontal .white-button:not(:first-child):not(:last-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}.btn-group-horizontal .white-button:first-child:not(:last-child) {\n  margin-left: -1px;\n  margin-top: -0px;\n  border-top-left-radius: var(--rounded-btn, 0.5rem);\n  border-top-right-radius: 0;\n  border-bottom-left-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-right-radius: 0;\n}.btn-group-horizontal .white-button:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: var(--rounded-btn, 0.5rem);\n}.btn-group-vertical .white-button:first-child:not(:last-child) {\n  margin-left: -0px;\n  margin-top: -1px;\n  border-top-left-radius: var(--rounded-btn, 0.5rem);\n  border-top-right-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}.btn-group-vertical .white-button:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-right-radius: var(--rounded-btn, 0.5rem);\n}.white-button {\n  border-width: 2px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n  font-size: 16px;\n  line-height: 24px;\n  --btn-focus-scale: 1;\n  --animation-btn: 0;\n  --animation-input: 0;\n}.base-checkbox {\n  flex-shrink: 0;\n  --chkbg: var(--bc);\n  --chkfg: var(--b1);\n  height: 24px;\n  width: 24px;\n  cursor: pointer;\n  -webkit-appearance: none;\n          appearance: none;\n  border-width: 1px;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n  --tw-border-opacity: 0.2;\n  border-radius: var(--rounded-btn, 0.5rem);\n}.base-checkbox:focus-visible {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n  outline-color: hsl(var(--bc) / 1);\n}.base-checkbox:checked,.base-checkbox[checked="true"],.base-checkbox[aria-checked="true"] {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n  background-repeat: no-repeat;\n  animation: checkmark var(--animation-input, 0.2s) ease-out;\n  background-image: linear-gradient(-45deg, transparent 65%, hsl(var(--chkbg)) 65.99%),\n      linear-gradient(45deg, transparent 75%, hsl(var(--chkbg)) 75.99%),\n      linear-gradient(-45deg, hsl(var(--chkbg)) 40%, transparent 40.99%),\n      linear-gradient(\n        45deg,\n        hsl(var(--chkbg)) 30%,\n        hsl(var(--chkfg)) 30.99%,\n        hsl(var(--chkfg)) 40%,\n        transparent 40.99%\n      ),\n      linear-gradient(-45deg, hsl(var(--chkfg)) 50%, hsl(var(--chkbg)) 50.99%);\n}.base-checkbox:indeterminate {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n  background-repeat: no-repeat;\n  animation: checkmark var(--animation-input, 0.2s) ease-out;\n  background-image: linear-gradient(90deg, transparent 80%, hsl(var(--chkbg)) 80%),\n      linear-gradient(-90deg, transparent 80%, hsl(var(--chkbg)) 80%),\n      linear-gradient(\n        0deg,\n        hsl(var(--chkbg)) 43%,\n        hsl(var(--chkfg)) 43%,\n        hsl(var(--chkfg)) 57%,\n        hsl(var(--chkbg)) 57%\n      );\n}.base-checkbox:disabled {\n  cursor: not-allowed;\n  border-color: transparent;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n  opacity: 0.2;\n}[dir="rtl"] .base-checkbox:checked,\n    [dir="rtl"] .base-checkbox[checked="true"],\n    [dir="rtl"] .base-checkbox[aria-checked="true"] {\n  background-image: linear-gradient(45deg, transparent 65%, hsl(var(--chkbg)) 65.99%),\n        linear-gradient(-45deg, transparent 75%, hsl(var(--chkbg)) 75.99%),\n        linear-gradient(45deg, hsl(var(--chkbg)) 40%, transparent 40.99%),\n        linear-gradient(\n          -45deg,\n          hsl(var(--chkbg)) 30%,\n          hsl(var(--chkfg)) 30.99%,\n          hsl(var(--chkfg)) 40%,\n          transparent 40.99%\n        ),\n        linear-gradient(45deg, hsl(var(--chkfg)) 50%, hsl(var(--chkbg)) 50.99%);\n}.base-checkbox {\n  --btn-focus-scale: 1;\n  --animation-btn: 0;\n  --animation-input: 0;\n  height: 20px;\n  width: 20px;\n  border-radius: 4px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}.base-radio {\n  flex-shrink: 0;\n  --chkbg: var(--bc);\n  height: 24px;\n  width: 24px;\n  cursor: pointer;\n  -webkit-appearance: none;\n          appearance: none;\n  border-radius: 9999px;\n  border-width: 1px;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n  --tw-border-opacity: 0.2;\n}.base-radio:focus-visible {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n  outline-color: hsl(var(--bc) / 1);\n}.base-radio:checked,.base-radio[aria-checked="true"] {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n  animation: radiomark var(--animation-input, 0.2s) ease-out;\n  box-shadow: 0 0 0 4px hsl(var(--b1)) inset,\n      0 0 0 4px hsl(var(--b1)) inset;\n}.base-radio:disabled {\n  cursor: not-allowed;\n  opacity: 0.2;\n}.base-radio {\n  --btn-focus-scale: 1;\n  --animation-btn: 0;\n  --animation-input: 0;\n  height: 20px;\n  width: 20px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n  .input-group > .base-select {\n  border-radius: 0px;\n}.base-select {\n  display: inline-flex;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  -webkit-appearance: none;\n          appearance: none;\n  height: 48px;\n  padding-left: 16px;\n  padding-right: 40px;\n  font-size: 14px;\n  line-height: 20px;\n  line-height: 2;\n  min-height: 48px;\n  border-width: 1px;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n  --tw-border-opacity: 0;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b1) / var(--tw-bg-opacity));\n  border-radius: var(--rounded-btn, 0.5rem);\n  background-image: linear-gradient(45deg, transparent 50%, currentColor 50%),\n    linear-gradient(135deg, currentColor 50%, transparent 50%);\n  background-position: calc(100% - 20px) calc(1px + 50%),\n    calc(100% - 16.1px) calc(1px + 50%);\n  background-size: 4px 4px,\n    4px 4px;\n  background-repeat: no-repeat;\n}.base-select[multiple] {\n  height: auto;\n}.base-select:focus {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n  outline-color: hsl(var(--bc) / 0.2);\n}.base-select:disabled,.base-select[disabled] {\n  cursor: not-allowed;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--b2) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b2) / var(--tw-bg-opacity));\n  --tw-text-opacity: 0.2;\n}.base-select:disabled::placeholder,.base-select[disabled]::placeholder {\n  color: hsl(var(--bc) / var(--tw-placeholder-opacity));\n  --tw-placeholder-opacity: 0.2;\n}.base-select[multiple],.base-select[size].select:not([size="1"]) {\n  background-image: none;\n  padding-right: 16px;\n}[dir="rtl"] .base-select {\n  background-position: calc(0% + 12px) calc(1px + 50%),\n    calc(0% + 16px) calc(1px + 50%);\n}.base-select {\n  width: 100%;\n  font-weight: 400;\n  flex-shrink: 1;\n  height: 48px;\n  padding-left: 16px;\n  padding-right: 16px;\n  font-size: 16px;\n  line-height: 2;\n  line-height: 24px;\n  border-width: 1px;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n  --tw-border-opacity: 0;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b1) / var(--tw-bg-opacity));\n  border-radius: var(--rounded-btn, 0.5rem);\n}.input-group > .base-select {\n  isolation: isolate;\n}\n  .input-group > .base-select {\n  border-radius: 0px;\n}.base-select input:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}.base-select[list]::-webkit-calendar-picker-indicator {\n  line-height: 1em;\n}.base-select {\n  --tw-border-opacity: 0.2;\n}.base-select:focus,.base-select:focus-within {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n  outline-color: hsl(var(--bc) / 0.2);\n}.base-select:disabled,.base-select[disabled] {\n  cursor: not-allowed;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--b2) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b2) / var(--tw-bg-opacity));\n  --tw-text-opacity: 0.2;\n}.base-select:disabled::placeholder,.base-select[disabled]::placeholder {\n  color: hsl(var(--bc) / var(--tw-placeholder-opacity));\n  --tw-placeholder-opacity: 0.2;\n}.mockup-browser .mockup-browser-toolbar .base-select {\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  height: 28px;\n  width: 384px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b2) / var(--tw-bg-opacity));\n  padding-left: 32px;\n}.mockup-browser .mockup-browser-toolbar .base-select:before {\n  content: "";\n  position: absolute;\n  left: 8px;\n  top: 50%;\n  aspect-ratio: 1 / 1;\n  height: 12px;\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  border-radius: 9999px;\n  border-width: 2px;\n  border-color: currentColor;\n  opacity: 0.6;\n}.mockup-browser .mockup-browser-toolbar .base-select:after {\n  content: "";\n  position: absolute;\n  left: 20px;\n  top: 50%;\n  height: 8px;\n  --tw-translate-y: 25%;\n  --tw-rotate: -45deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  border-radius: 9999px;\n  border-width: 1px;\n  border-color: currentColor;\n  opacity: 0.6;\n}.base-select {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n  border-color: hsl(var(--bc) / 0.2);\n}.tooltip-bottom-end:before{transform:translateX(-95%);top:var(--tooltip-offset);left:100%;right:auto;bottom:auto}.tooltip-bottom-end:after{transform:translateX(-25%);border-color:rgba(0,0,0,0) rgba(0,0,0,0) var(--tooltip-color) rgba(0,0,0,0);top:var(--tooltip-tail-offset);left:50%;right:auto;bottom:auto}.before\\:text-gray-400::before {\n  content: var(--tw-content);\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}.empty\\:before\\:content-\\[attr\\(placeholder\\)\\]:empty::before {\n  --tw-content: attr(placeholder);\n  content: var(--tw-content);\n}.hover\\:border-base-content:hover {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n}.hover\\:border-base-content\\/20:hover {\n  border-color: hsl(var(--bc) / 0.2);\n}.hover\\:bg-\\[\\#0A2540\\]:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(10 37 64 / var(--tw-bg-opacity));\n}.hover\\:bg-base-200\\/30:hover {\n  background-color: hsl(var(--b2) / 0.3);\n}.hover\\:bg-base-content:hover {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n}.hover\\:text-base-100:hover {\n  --tw-text-opacity: 1;\n  color: hsl(var(--b1) / var(--tw-text-opacity));\n}.hover\\:underline:hover {\n  text-decoration-line: underline;\n}.focus\\:block:focus {\n  display: block;\n}.focus\\:text-clip:focus {\n  text-overflow: clip;\n}.group:hover .group-hover\\:block {\n  display: block;\n}.group\\/\\31:hover .group-hover\\/1\\:inline {\n  display: inline;\n}.group:hover .group-hover\\:flex {\n  display: flex;\n}.group:hover .group-hover\\:border {\n  border-width: 1px;\n}.group:hover .group-hover\\:bg-base-200\\/50 {\n  background-color: hsl(var(--b2) / 0.5);\n}.group:hover .group-hover\\:text-base-content {\n  --tw-text-opacity: 1;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n}.group\\/contenteditable-container:hover .group-hover\\/contenteditable-container\\:opacity-100 {\n  opacity: 1;\n}.group\\/contenteditable:hover .group-hover\\/contenteditable\\:opacity-100 {\n  opacity: 1;\n}.group:hover .group-hover\\:opacity-100 {\n  opacity: 1;\n}.group:focus .group-focus\\:inline {\n  display: inline;\n}.group:focus .group-focus\\:hidden {\n  display: none;\n}.peer:focus ~ .peer-focus\\:hidden {\n  display: none;\n}@media (min-width: 768px) {\n\n  .md\\:mr-2 {\n    margin-right: 8px;\n  }\n\n  .md\\:block {\n    display: block;\n  }\n\n  .md\\:inline {\n    display: inline;\n  }\n\n  .md\\:flex {\n    display: flex;\n  }\n\n  .md\\:hidden {\n    display: none;\n  }\n\n  .md\\:h-2 {\n    height: 8px;\n  }\n\n  .md\\:h-2\\.5 {\n    height: 10px;\n  }\n\n  .md\\:max-h-\\[100\\%\\] {\n    max-height: 100%;\n  }\n\n  .md\\:max-h-\\[calc\\(100\\%_-_60px\\)\\] {\n    max-height: calc(100% - 60px);\n  }\n\n  .md\\:w-2 {\n    width: 8px;\n  }\n\n  .md\\:w-2\\.5 {\n    width: 10px;\n  }\n\n  .md\\:w-24 {\n    width: 96px;\n  }\n\n  .md\\:w-32 {\n    width: 128px;\n  }\n\n  .md\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .md\\:flex-row {\n    flex-direction: row;\n  }\n\n  .md\\:items-center {\n    align-items: center;\n  }\n\n  .md\\:justify-between {\n    justify-content: space-between;\n  }\n\n  .md\\:space-y-0 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(0px * var(--tw-space-y-reverse));\n  }\n\n  .md\\:overflow-y-auto {\n    overflow-y: auto;\n  }\n\n  .md\\:\\!px-6 {\n    padding-left: 24px !important;\n    padding-right: 24px !important;\n  }\n\n  .md\\:pl-4 {\n    padding-left: 16px;\n  }\n\n  .md\\:text-3xl {\n    font-size: 30px;\n    line-height: 36px;\n  }\n}@media (min-width: 1024px) {\n\n  .lg\\:block {\n    display: block;\n  }\n\n  .lg\\:text-base {\n    font-size: 16px;\n    line-height: 24px;\n  }\n\n  .lg\\:text-xs {\n    font-size: 12px;\n    line-height: 16px;\n  }\n}',
                    "",
                ]);
                const u = c;
            },
            314: (e) => {
                e.exports = function (e) {
                    var t = [];
                    return (
                        (t.toString = function () {
                            return this.map(function (t) {
                                var n = "",
                                    o = void 0 !== t[5];
                                return (
                                    t[4] && (n += "@supports (".concat(t[4], ") {")),
                                    t[2] && (n += "@media ".concat(t[2], " {")),
                                    o && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")),
                                    (n += e(t)),
                                    o && (n += "}"),
                                    t[2] && (n += "}"),
                                    t[4] && (n += "}"),
                                    n
                                );
                            }).join("");
                        }),
                        (t.i = function (e, n, o, i, r) {
                            "string" == typeof e && (e = [[null, e, void 0]]);
                            var a = {};
                            if (o)
                                for (var l = 0; l < this.length; l++) {
                                    var s = this[l][0];
                                    null != s && (a[s] = !0);
                                }
                            for (var d = 0; d < e.length; d++) {
                                var c = [].concat(e[d]);
                                (o && a[c[0]]) ||
                                    (void 0 !== r && (void 0 === c[5] || (c[1] = "@layer".concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {").concat(c[1], "}")), (c[5] = r)),
                                    n && (c[2] ? ((c[1] = "@media ".concat(c[2], " {").concat(c[1], "}")), (c[2] = n)) : (c[2] = n)),
                                    i && (c[4] ? ((c[1] = "@supports (".concat(c[4], ") {").concat(c[1], "}")), (c[4] = i)) : (c[4] = "".concat(i))),
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
                    for (const [e, o] of t) n[e] = o;
                    return n;
                };
            },
            876: (e) => {
                e.exports =
                    "data:image/svg+xml,%3Csvg width=%2724%27 height=%2724%27 stroke=%27%23000%27 viewBox=%270 0 24 24%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cstyle%3E.spinner_V8m1%7Btransform-origin:center;animation:spinner_zKoa 2s linear infinite%7D.spinner_V8m1 circle%7Bstroke-linecap:round;animation:spinner_YpZS 1.5s ease-out infinite%7D%40keyframes spinner_zKoa%7B100%25%7Btransform:rotate%28360deg%29%7D%7D%40keyframes spinner_YpZS%7B0%25%7Bstroke-dasharray:0 150;stroke-dashoffset:0%7D47.5%25%7Bstroke-dasharray:42 150;stroke-dashoffset:-16%7D95%25%2C100%25%7Bstroke-dasharray:42 150;stroke-dashoffset:-59%7D%7D%3C%2Fstyle%3E%3Cg class=%27spinner_V8m1%27%3E%3Ccircle cx=%2712%27 cy=%2712%27 r=%279.5%27 fill=%27none%27 stroke-width=%273%27%3E%3C%2Fcircle%3E%3C%2Fg%3E%3C%2Fsvg%3E";
            },
        },
        t = {};
    function n(o) {
        var i = t[o];
        if (void 0 !== i) return i.exports;
        var r = (t[o] = { id: o, exports: {} });
        return e[o](r, r.exports, n), r.exports;
    }
    (n.m = e),
        (n.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return n.d(t, { a: t }), t;
        }),
        (n.d = (e, t) => {
            for (var o in t) n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
        }),
        (n.g = (function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if ("object" == typeof window) return window;
            }
        })()),
        (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (n.r = (e) => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.b = document.baseURI || self.location.href);
    var o = {};
    n.r(o), n.d(o, { de: () => qu, en: () => Mu, es: () => zu, fr: () => Eu, it: () => Iu, pt: () => Ru });
    var i = {};
    function r(e, t) {
        const n = Object.create(null),
            o = e.split(",");
        for (let e = 0; e < o.length; e++) n[o[e]] = !0;
        return t ? (e) => !!n[e.toLowerCase()] : (e) => !!n[e];
    }
    n.r(i), n.d(i, { ar: () => Kh, de: () => Xh, en: () => Uh, es: () => Lh, fr: () => Wh, he: () => Hh, it: () => Vh, pt: () => Yh });
    const a = {},
        l = [],
        s = () => {},
        d = () => !1,
        c = /^on[^a-z]/,
        p = (e) => c.test(e),
        u = (e) => e.startsWith("onUpdate:"),
        h = Object.assign,
        b = (e, t) => {
            const n = e.indexOf(t);
            n > -1 && e.splice(n, 1);
        },
        f = Object.prototype.hasOwnProperty,
        m = (e, t) => f.call(e, t),
        g = Array.isArray,
        w = (e) => "[object Map]" === D(e),
        y = (e) => "[object Set]" === D(e),
        v = (e) => "[object Date]" === D(e),
        x = (e) => "function" == typeof e,
        _ = (e) => "string" == typeof e,
        k = (e) => "symbol" == typeof e,
        C = (e) => null !== e && "object" == typeof e,
        S = (e) => C(e) && x(e.then) && x(e.catch),
        F = Object.prototype.toString,
        D = (e) => F.call(e),
        A = (e) => D(e).slice(8, -1),
        T = (e) => "[object Object]" === D(e),
        P = (e) => _(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e,
        M = r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
        z = (e) => {
            const t = Object.create(null);
            return (n) => t[n] || (t[n] = e(n));
        },
        I = /-(\w)/g,
        R = z((e) => e.replace(I, (e, t) => (t ? t.toUpperCase() : ""))),
        E = /\B([A-Z])/g,
        q = z((e) => e.replace(E, "-$1").toLowerCase()),
        O = z((e) => e.charAt(0).toUpperCase() + e.slice(1)),
        $ = z((e) => (e ? `on${O(e)}` : "")),
        N = (e, t) => !Object.is(e, t),
        j = (e, t) => {
            for (let n = 0; n < e.length; n++) e[n](t);
        },
        B = (e, t, n) => {
            Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
        },
        U = (e) => {
            const t = parseFloat(e);
            return isNaN(t) ? e : t;
        },
        L = (e) => {
            const t = _(e) ? Number(e) : NaN;
            return isNaN(t) ? e : t;
        };
    let V;
    const Y = () => V || (V = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n.g ? n.g : {});
    function W(e) {
        if (g(e)) {
            const t = {};
            for (let n = 0; n < e.length; n++) {
                const o = e[n],
                    i = _(o) ? Z(o) : W(o);
                if (i) for (const e in i) t[e] = i[e];
            }
            return t;
        }
        return _(e) || C(e) ? e : void 0;
    }
    const X = /;(?![^(]*\))/g,
        H = /:([^]+)/,
        K = /\/\*[^]*?\*\//g;
    function Z(e) {
        const t = {};
        return (
            e
                .replace(K, "")
                .split(X)
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
        if (_(e)) t = e;
        else if (g(e))
            for (let n = 0; n < e.length; n++) {
                const o = J(e[n]);
                o && (t += o + " ");
            }
        else if (C(e)) for (const n in e) e[n] && (t += n + " ");
        return t.trim();
    }
    const G = r("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
    function Q(e) {
        return !!e || "" === e;
    }
    function ee(e, t) {
        if (e === t) return !0;
        let n = v(e),
            o = v(t);
        if (n || o) return !(!n || !o) && e.getTime() === t.getTime();
        if (((n = k(e)), (o = k(t)), n || o)) return e === t;
        if (((n = g(e)), (o = g(t)), n || o))
            return (
                !(!n || !o) &&
                (function (e, t) {
                    if (e.length !== t.length) return !1;
                    let n = !0;
                    for (let o = 0; n && o < e.length; o++) n = ee(e[o], t[o]);
                    return n;
                })(e, t)
            );
        if (((n = C(e)), (o = C(t)), n || o)) {
            if (!n || !o) return !1;
            if (Object.keys(e).length !== Object.keys(t).length) return !1;
            for (const n in e) {
                const o = e.hasOwnProperty(n),
                    i = t.hasOwnProperty(n);
                if ((o && !i) || (!o && i) || !ee(e[n], t[n])) return !1;
            }
        }
        return String(e) === String(t);
    }
    function te(e, t) {
        return e.findIndex((e) => ee(e, t));
    }
    const ne = (e) => (_(e) ? e : null == e ? "" : g(e) || (C(e) && (e.toString === F || !x(e.toString))) ? JSON.stringify(e, oe, 2) : String(e)),
        oe = (e, t) =>
            t && t.__v_isRef ? oe(e, t.value) : w(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n]) => ((e[`${t} =>`] = n), e), {}) } : y(t) ? { [`Set(${t.size})`]: [...t.values()] } : !C(t) || g(t) || T(t) ? t : String(t);
    let ie;
    class re {
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
    const ae = (e) => {
            const t = new Set(e);
            return (t.w = 0), (t.n = 0), t;
        },
        le = (e) => (e.w & pe) > 0,
        se = (e) => (e.n & pe) > 0,
        de = new WeakMap();
    let ce = 0,
        pe = 1;
    const ue = 30;
    let he;
    const be = Symbol(""),
        fe = Symbol("");
    class me {
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
            let e = he,
                t = we;
            for (; e; ) {
                if (e === this) return;
                e = e.parent;
            }
            try {
                return (
                    (this.parent = he),
                    (he = this),
                    (we = !0),
                    (pe = 1 << ++ce),
                    ce <= ue
                        ? (({ deps: e }) => {
                              if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= pe;
                          })(this)
                        : ge(this),
                    this.fn()
                );
            } finally {
                ce <= ue &&
                    ((e) => {
                        const { deps: t } = e;
                        if (t.length) {
                            let n = 0;
                            for (let o = 0; o < t.length; o++) {
                                const i = t[o];
                                le(i) && !se(i) ? i.delete(e) : (t[n++] = i), (i.w &= ~pe), (i.n &= ~pe);
                            }
                            t.length = n;
                        }
                    })(this),
                    (pe = 1 << --ce),
                    (he = this.parent),
                    (we = t),
                    (this.parent = void 0),
                    this.deferStop && this.stop();
            }
        }
        stop() {
            he === this ? (this.deferStop = !0) : this.active && (ge(this), this.onStop && this.onStop(), (this.active = !1));
        }
    }
    function ge(e) {
        const { deps: t } = e;
        if (t.length) {
            for (let n = 0; n < t.length; n++) t[n].delete(e);
            t.length = 0;
        }
    }
    let we = !0;
    const ye = [];
    function ve() {
        ye.push(we), (we = !1);
    }
    function xe() {
        const e = ye.pop();
        we = void 0 === e || e;
    }
    function _e(e, t, n) {
        if (we && he) {
            let t = de.get(e);
            t || de.set(e, (t = new Map()));
            let o = t.get(n);
            o || t.set(n, (o = ae())), ke(o);
        }
    }
    function ke(e, t) {
        let n = !1;
        ce <= ue ? se(e) || ((e.n |= pe), (n = !le(e))) : (n = !e.has(he)), n && (e.add(he), he.deps.push(e));
    }
    function Ce(e, t, n, o, i, r) {
        const a = de.get(e);
        if (!a) return;
        let l = [];
        if ("clear" === t) l = [...a.values()];
        else if ("length" === n && g(e)) {
            const e = Number(o);
            a.forEach((t, n) => {
                ("length" === n || n >= e) && l.push(t);
            });
        } else
            switch ((void 0 !== n && l.push(a.get(n)), t)) {
                case "add":
                    g(e) ? P(n) && l.push(a.get("length")) : (l.push(a.get(be)), w(e) && l.push(a.get(fe)));
                    break;
                case "delete":
                    g(e) || (l.push(a.get(be)), w(e) && l.push(a.get(fe)));
                    break;
                case "set":
                    w(e) && l.push(a.get(be));
            }
        if (1 === l.length) l[0] && Se(l[0]);
        else {
            const e = [];
            for (const t of l) t && e.push(...t);
            Se(ae(e));
        }
    }
    function Se(e, t) {
        const n = g(e) ? e : [...e];
        for (const e of n) e.computed && Fe(e);
        for (const e of n) e.computed || Fe(e);
    }
    function Fe(e, t) {
        (e !== he || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
    }
    const De = r("__proto__,__v_isRef,__isVue"),
        Ae = new Set(
            Object.getOwnPropertyNames(Symbol)
                .filter((e) => "arguments" !== e && "caller" !== e)
                .map((e) => Symbol[e])
                .filter(k)
        ),
        Te = Ee(),
        Pe = Ee(!1, !0),
        Me = Ee(!0),
        ze = Ie();
    function Ie() {
        const e = {};
        return (
            ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
                e[t] = function (...e) {
                    const n = wt(this);
                    for (let e = 0, t = this.length; e < t; e++) _e(n, 0, e + "");
                    const o = n[t](...e);
                    return -1 === o || !1 === o ? n[t](...e.map(wt)) : o;
                };
            }),
            ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
                e[t] = function (...e) {
                    ve();
                    const n = wt(this)[t].apply(this, e);
                    return xe(), n;
                };
            }),
            e
        );
    }
    function Re(e) {
        const t = wt(this);
        return _e(t, 0, e), t.hasOwnProperty(e);
    }
    function Ee(e = !1, t = !1) {
        return function (n, o, i) {
            if ("__v_isReactive" === o) return !e;
            if ("__v_isReadonly" === o) return e;
            if ("__v_isShallow" === o) return t;
            if ("__v_raw" === o && i === (e ? (t ? ct : dt) : t ? st : lt).get(n)) return n;
            const r = g(n);
            if (!e) {
                if (r && m(ze, o)) return Reflect.get(ze, o, i);
                if ("hasOwnProperty" === o) return Re;
            }
            const a = Reflect.get(n, o, i);
            return (k(o) ? Ae.has(o) : De(o)) ? a : (e || _e(n, 0, o), t ? a : Ct(a) ? (r && P(o) ? a : a.value) : C(a) ? (e ? ut(a) : pt(a)) : a);
        };
    }
    function qe(e = !1) {
        return function (t, n, o, i) {
            let r = t[n];
            if (ft(r) && Ct(r) && !Ct(o)) return !1;
            if (!e && (mt(o) || ft(o) || ((r = wt(r)), (o = wt(o))), !g(t) && Ct(r) && !Ct(o))) return (r.value = o), !0;
            const a = g(t) && P(n) ? Number(n) < t.length : m(t, n),
                l = Reflect.set(t, n, o, i);
            return t === wt(i) && (a ? N(o, r) && Ce(t, "set", n, o) : Ce(t, "add", n, o)), l;
        };
    }
    const Oe = {
            get: Te,
            set: qe(),
            deleteProperty: function (e, t) {
                const n = m(e, t),
                    o = (e[t], Reflect.deleteProperty(e, t));
                return o && n && Ce(e, "delete", t, void 0), o;
            },
            has: function (e, t) {
                const n = Reflect.has(e, t);
                return (k(t) && Ae.has(t)) || _e(e, 0, t), n;
            },
            ownKeys: function (e) {
                return _e(e, 0, g(e) ? "length" : be), Reflect.ownKeys(e);
            },
        },
        $e = { get: Me, set: (e, t) => !0, deleteProperty: (e, t) => !0 },
        Ne = h({}, Oe, { get: Pe, set: qe(!0) }),
        je = (e) => e,
        Be = (e) => Reflect.getPrototypeOf(e);
    function Ue(e, t, n = !1, o = !1) {
        const i = wt((e = e.__v_raw)),
            r = wt(t);
        n || (t !== r && _e(i, 0, t), _e(i, 0, r));
        const { has: a } = Be(i),
            l = o ? je : n ? xt : vt;
        return a.call(i, t) ? l(e.get(t)) : a.call(i, r) ? l(e.get(r)) : void (e !== i && e.get(t));
    }
    function Le(e, t = !1) {
        const n = this.__v_raw,
            o = wt(n),
            i = wt(e);
        return t || (e !== i && _e(o, 0, e), _e(o, 0, i)), e === i ? n.has(e) : n.has(e) || n.has(i);
    }
    function Ve(e, t = !1) {
        return (e = e.__v_raw), !t && _e(wt(e), 0, be), Reflect.get(e, "size", e);
    }
    function Ye(e) {
        e = wt(e);
        const t = wt(this);
        return Be(t).has.call(t, e) || (t.add(e), Ce(t, "add", e, e)), this;
    }
    function We(e, t) {
        t = wt(t);
        const n = wt(this),
            { has: o, get: i } = Be(n);
        let r = o.call(n, e);
        r || ((e = wt(e)), (r = o.call(n, e)));
        const a = i.call(n, e);
        return n.set(e, t), r ? N(t, a) && Ce(n, "set", e, t) : Ce(n, "add", e, t), this;
    }
    function Xe(e) {
        const t = wt(this),
            { has: n, get: o } = Be(t);
        let i = n.call(t, e);
        i || ((e = wt(e)), (i = n.call(t, e))), o && o.call(t, e);
        const r = t.delete(e);
        return i && Ce(t, "delete", e, void 0), r;
    }
    function He() {
        const e = wt(this),
            t = 0 !== e.size,
            n = e.clear();
        return t && Ce(e, "clear", void 0, void 0), n;
    }
    function Ke(e, t) {
        return function (n, o) {
            const i = this,
                r = i.__v_raw,
                a = wt(r),
                l = t ? je : e ? xt : vt;
            return !e && _e(a, 0, be), r.forEach((e, t) => n.call(o, l(e), l(t), i));
        };
    }
    function Ze(e, t, n) {
        return function (...o) {
            const i = this.__v_raw,
                r = wt(i),
                a = w(r),
                l = "entries" === e || (e === Symbol.iterator && a),
                s = "keys" === e && a,
                d = i[e](...o),
                c = n ? je : t ? xt : vt;
            return (
                !t && _e(r, 0, s ? fe : be),
                {
                    next() {
                        const { value: e, done: t } = d.next();
                        return t ? { value: e, done: t } : { value: l ? [c(e[0]), c(e[1])] : c(e), done: t };
                    },
                    [Symbol.iterator]() {
                        return this;
                    },
                }
            );
        };
    }
    function Je(e) {
        return function (...t) {
            return "delete" !== e && this;
        };
    }
    function Ge() {
        const e = {
                get(e) {
                    return Ue(this, e);
                },
                get size() {
                    return Ve(this);
                },
                has: Le,
                add: Ye,
                set: We,
                delete: Xe,
                clear: He,
                forEach: Ke(!1, !1),
            },
            t = {
                get(e) {
                    return Ue(this, e, !1, !0);
                },
                get size() {
                    return Ve(this);
                },
                has: Le,
                add: Ye,
                set: We,
                delete: Xe,
                clear: He,
                forEach: Ke(!1, !0),
            },
            n = {
                get(e) {
                    return Ue(this, e, !0);
                },
                get size() {
                    return Ve(this, !0);
                },
                has(e) {
                    return Le.call(this, e, !0);
                },
                add: Je("add"),
                set: Je("set"),
                delete: Je("delete"),
                clear: Je("clear"),
                forEach: Ke(!0, !1),
            },
            o = {
                get(e) {
                    return Ue(this, e, !0, !0);
                },
                get size() {
                    return Ve(this, !0);
                },
                has(e) {
                    return Le.call(this, e, !0);
                },
                add: Je("add"),
                set: Je("set"),
                delete: Je("delete"),
                clear: Je("clear"),
                forEach: Ke(!0, !0),
            };
        return (
            ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
                (e[i] = Ze(i, !1, !1)), (n[i] = Ze(i, !0, !1)), (t[i] = Ze(i, !1, !0)), (o[i] = Ze(i, !0, !0));
            }),
            [e, n, t, o]
        );
    }
    const [Qe, et, tt, nt] = Ge();
    function ot(e, t) {
        const n = t ? (e ? nt : tt) : e ? et : Qe;
        return (t, o, i) => ("__v_isReactive" === o ? !e : "__v_isReadonly" === o ? e : "__v_raw" === o ? t : Reflect.get(m(n, o) && o in t ? n : t, o, i));
    }
    const it = { get: ot(!1, !1) },
        rt = { get: ot(!1, !0) },
        at = { get: ot(!0, !1) },
        lt = new WeakMap(),
        st = new WeakMap(),
        dt = new WeakMap(),
        ct = new WeakMap();
    function pt(e) {
        return ft(e) ? e : ht(e, !1, Oe, it, lt);
    }
    function ut(e) {
        return ht(e, !0, $e, at, dt);
    }
    function ht(e, t, n, o, i) {
        if (!C(e)) return e;
        if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
        const r = i.get(e);
        if (r) return r;
        const a =
            (l = e).__v_skip || !Object.isExtensible(l)
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
                  })(A(l));
        var l;
        if (0 === a) return e;
        const s = new Proxy(e, 2 === a ? o : n);
        return i.set(e, s), s;
    }
    function bt(e) {
        return ft(e) ? bt(e.__v_raw) : !(!e || !e.__v_isReactive);
    }
    function ft(e) {
        return !(!e || !e.__v_isReadonly);
    }
    function mt(e) {
        return !(!e || !e.__v_isShallow);
    }
    function gt(e) {
        return bt(e) || ft(e);
    }
    function wt(e) {
        const t = e && e.__v_raw;
        return t ? wt(t) : e;
    }
    function yt(e) {
        return B(e, "__v_skip", !0), e;
    }
    const vt = (e) => (C(e) ? pt(e) : e),
        xt = (e) => (C(e) ? ut(e) : e);
    function _t(e) {
        we && he && ke((e = wt(e)).dep || (e.dep = ae()));
    }
    function kt(e, t) {
        const n = (e = wt(e)).dep;
        n && Se(n);
    }
    function Ct(e) {
        return !(!e || !0 !== e.__v_isRef);
    }
    function St(e) {
        return (n = !1), Ct((t = e)) ? t : new Ft(t, n);
        var t, n;
    }
    class Ft {
        constructor(e, t) {
            (this.__v_isShallow = t), (this.dep = void 0), (this.__v_isRef = !0), (this._rawValue = t ? e : wt(e)), (this._value = t ? e : vt(e));
        }
        get value() {
            return _t(this), this._value;
        }
        set value(e) {
            const t = this.__v_isShallow || mt(e) || ft(e);
            (e = t ? e : wt(e)), N(e, this._rawValue) && ((this._rawValue = e), (this._value = t ? e : vt(e)), kt(this));
        }
    }
    const Dt = {
        get: (e, t, n) => {
            return Ct((o = Reflect.get(e, t, n))) ? o.value : o;
            var o;
        },
        set: (e, t, n, o) => {
            const i = e[t];
            return Ct(i) && !Ct(n) ? ((i.value = n), !0) : Reflect.set(e, t, n, o);
        },
    };
    function At(e) {
        return bt(e) ? e : new Proxy(e, Dt);
    }
    class Tt {
        constructor(e, t, n, o) {
            (this._setter = t),
                (this.dep = void 0),
                (this.__v_isRef = !0),
                (this.__v_isReadonly = !1),
                (this._dirty = !0),
                (this.effect = new me(e, () => {
                    this._dirty || ((this._dirty = !0), kt(this));
                })),
                (this.effect.computed = this),
                (this.effect.active = this._cacheable = !o),
                (this.__v_isReadonly = n);
        }
        get value() {
            const e = wt(this);
            return _t(e), (!e._dirty && e._cacheable) || ((e._dirty = !1), (e._value = e.effect.run())), e._value;
        }
        set value(e) {
            this._setter(e);
        }
    }
    function Pt(e, t, n, o) {
        let i;
        try {
            i = o ? e(...o) : e();
        } catch (e) {
            zt(e, t, n);
        }
        return i;
    }
    function Mt(e, t, n, o) {
        if (x(e)) {
            const i = Pt(e, t, n, o);
            return (
                i &&
                    S(i) &&
                    i.catch((e) => {
                        zt(e, t, n);
                    }),
                i
            );
        }
        const i = [];
        for (let r = 0; r < e.length; r++) i.push(Mt(e[r], t, n, o));
        return i;
    }
    function zt(e, t, n, o = !0) {
        if ((t && t.vnode, t)) {
            let o = t.parent;
            const i = t.proxy,
                r = n;
            for (; o; ) {
                const t = o.ec;
                if (t) for (let n = 0; n < t.length; n++) if (!1 === t[n](e, i, r)) return;
                o = o.parent;
            }
            const a = t.appContext.config.errorHandler;
            if (a) return void Pt(a, null, 10, [e, i, r]);
        }
        !(function (e) {
            console.error(e);
        })(e);
    }
    let It = !1,
        Rt = !1;
    const Et = [];
    let qt = 0;
    const Ot = [];
    let $t = null,
        Nt = 0;
    const jt = Promise.resolve();
    let Bt = null;
    function Ut(e) {
        const t = Bt || jt;
        return e ? t.then(this ? e.bind(this) : e) : t;
    }
    function Lt(e) {
        (Et.length && Et.includes(e, It && e.allowRecurse ? qt + 1 : qt)) ||
            (null == e.id
                ? Et.push(e)
                : Et.splice(
                      (function (e) {
                          let t = qt + 1,
                              n = Et.length;
                          for (; t < n; ) {
                              const o = (t + n) >>> 1;
                              Xt(Et[o]) < e ? (t = o + 1) : (n = o);
                          }
                          return t;
                      })(e.id),
                      0,
                      e
                  ),
            Vt());
    }
    function Vt() {
        It || Rt || ((Rt = !0), (Bt = jt.then(Kt)));
    }
    function Yt(e, t = It ? qt + 1 : 0) {
        for (; t < Et.length; t++) {
            const e = Et[t];
            e && e.pre && (Et.splice(t, 1), t--, e());
        }
    }
    function Wt(e) {
        if (Ot.length) {
            const e = [...new Set(Ot)];
            if (((Ot.length = 0), $t)) return void $t.push(...e);
            for ($t = e, $t.sort((e, t) => Xt(e) - Xt(t)), Nt = 0; Nt < $t.length; Nt++) $t[Nt]();
            ($t = null), (Nt = 0);
        }
    }
    const Xt = (e) => (null == e.id ? 1 / 0 : e.id),
        Ht = (e, t) => {
            const n = Xt(e) - Xt(t);
            if (0 === n) {
                if (e.pre && !t.pre) return -1;
                if (t.pre && !e.pre) return 1;
            }
            return n;
        };
    function Kt(e) {
        (Rt = !1), (It = !0), Et.sort(Ht);
        try {
            for (qt = 0; qt < Et.length; qt++) {
                const e = Et[qt];
                e && !1 !== e.active && Pt(e, null, 14);
            }
        } finally {
            (qt = 0), (Et.length = 0), Wt(), (It = !1), (Bt = null), (Et.length || Ot.length) && Kt(e);
        }
    }
    let Zt,
        Jt = [],
        Gt = !1;
    function Qt(e, ...t) {
        Zt ? Zt.emit(e, ...t) : Gt || Jt.push({ event: e, args: t });
    }
    function en(e, t) {
        var n, o;
        (Zt = e),
            Zt
                ? ((Zt.enabled = !0), Jt.forEach(({ event: e, args: t }) => Zt.emit(e, ...t)), (Jt = []))
                : "undefined" != typeof window && window.HTMLElement && !(null == (o = null == (n = window.navigator) ? void 0 : n.userAgent) ? void 0 : o.includes("jsdom"))
                ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((e) => {
                      en(e, t);
                  }),
                  setTimeout(() => {
                      Zt || ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null), (Gt = !0), (Jt = []));
                  }, 3e3))
                : ((Gt = !0), (Jt = []));
    }
    const tn = an("component:added"),
        nn = an("component:updated"),
        on = an("component:removed"),
        rn = (e) => {
            Zt && "function" == typeof Zt.cleanupBuffer && !Zt.cleanupBuffer(e) && on(e);
        };
    function an(e) {
        return (t) => {
            Qt(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
        };
    }
    function ln(e, t, ...n) {
        if (e.isUnmounted) return;
        const o = e.vnode.props || a;
        let i = n;
        const r = t.startsWith("update:"),
            l = r && t.slice(7);
        if (l && l in o) {
            const e = `${"modelValue" === l ? "model" : l}Modifiers`,
                { number: t, trim: r } = o[e] || a;
            r && (i = n.map((e) => (_(e) ? e.trim() : e))), t && (i = n.map(U));
        }
        let s;
        __VUE_PROD_DEVTOOLS__ &&
            (function (e, t, n) {
                Qt("component:emit", e.appContext.app, e, t, n);
            })(e, t, i);
        let d = o[(s = $(t))] || o[(s = $(R(t)))];
        !d && r && (d = o[(s = $(q(t)))]), d && Mt(d, e, 6, i);
        const c = o[s + "Once"];
        if (c) {
            if (e.emitted) {
                if (e.emitted[s]) return;
            } else e.emitted = {};
            (e.emitted[s] = !0), Mt(c, e, 6, i);
        }
    }
    function sn(e, t, n = !1) {
        const o = t.emitsCache,
            i = o.get(e);
        if (void 0 !== i) return i;
        const r = e.emits;
        let a = {},
            l = !1;
        if (__VUE_OPTIONS_API__ && !x(e)) {
            const o = (e) => {
                const n = sn(e, t, !0);
                n && ((l = !0), h(a, n));
            };
            !n && t.mixins.length && t.mixins.forEach(o), e.extends && o(e.extends), e.mixins && e.mixins.forEach(o);
        }
        return r || l ? (g(r) ? r.forEach((e) => (a[e] = null)) : h(a, r), C(e) && o.set(e, a), a) : (C(e) && o.set(e, null), null);
    }
    function dn(e, t) {
        return !(!e || !p(t)) && ((t = t.slice(2).replace(/Once$/, "")), m(e, t[0].toLowerCase() + t.slice(1)) || m(e, q(t)) || m(e, t));
    }
    let cn = null,
        pn = null;
    function un(e) {
        const t = cn;
        return (cn = e), (pn = (e && e.type.__scopeId) || null), t;
    }
    function hn(e, t = cn, n) {
        if (!t) return e;
        if (e._n) return e;
        const o = (...n) => {
            o._d && ci(-1);
            const i = un(t);
            let r;
            try {
                r = e(...n);
            } finally {
                un(i), o._d && ci(1);
            }
            return __VUE_PROD_DEVTOOLS__ && nn(t), r;
        };
        return (o._n = !0), (o._c = !0), (o._d = !0), o;
    }
    function bn(e) {
        const {
            type: t,
            vnode: n,
            proxy: o,
            withProxy: i,
            props: r,
            propsOptions: [a],
            slots: l,
            attrs: s,
            emit: d,
            render: c,
            renderCache: p,
            data: h,
            setupState: b,
            ctx: f,
            inheritAttrs: m,
        } = e;
        let g, w;
        const y = un(e);
        try {
            if (4 & n.shapeFlag) {
                const e = i || o;
                (g = Si(c.call(e, e, p, r, b, h, f))), (w = s);
            } else {
                const e = t;
                (g = Si(e.length > 1 ? e(r, { attrs: s, slots: l, emit: d }) : e(r, null))), (w = t.props ? s : fn(s));
            }
        } catch (t) {
            (ai.length = 0), zt(t, e, 1), (g = vi(ii));
        }
        let v = g;
        if (w && !1 !== m) {
            const e = Object.keys(w),
                { shapeFlag: t } = v;
            e.length && 7 & t && (a && e.some(u) && (w = mn(w, a)), (v = xi(v, w)));
        }
        return n.dirs && ((v = xi(v)), (v.dirs = v.dirs ? v.dirs.concat(n.dirs) : n.dirs)), n.transition && (v.transition = n.transition), (g = v), un(y), g;
    }
    const fn = (e) => {
            let t;
            for (const n in e) ("class" === n || "style" === n || p(n)) && ((t || (t = {}))[n] = e[n]);
            return t;
        },
        mn = (e, t) => {
            const n = {};
            for (const o in e) (u(o) && o.slice(9) in t) || (n[o] = e[o]);
            return n;
        };
    function gn(e, t, n) {
        const o = Object.keys(t);
        if (o.length !== Object.keys(e).length) return !0;
        for (let i = 0; i < o.length; i++) {
            const r = o[i];
            if (t[r] !== e[r] && !dn(n, r)) return !0;
        }
        return !1;
    }
    const wn = {};
    function yn(e, t, n) {
        return vn(e, t, n);
    }
    function vn(e, t, { immediate: n, deep: o, flush: i, onTrack: r, onTrigger: l } = a) {
        var d;
        const c = ie === (null == (d = zi) ? void 0 : d.scope) ? zi : null;
        let p,
            u,
            h = !1,
            f = !1;
        if (
            (Ct(e)
                ? ((p = () => e.value), (h = mt(e)))
                : bt(e)
                ? ((p = () => e), (o = !0))
                : g(e)
                ? ((f = !0), (h = e.some((e) => bt(e) || mt(e))), (p = () => e.map((e) => (Ct(e) ? e.value : bt(e) ? kn(e) : x(e) ? Pt(e, c, 2) : void 0))))
                : (p = x(e)
                      ? t
                          ? () => Pt(e, c, 2)
                          : () => {
                                if (!c || !c.isUnmounted) return u && u(), Mt(e, c, 3, [w]);
                            }
                      : s),
            t && o)
        ) {
            const e = p;
            p = () => kn(e());
        }
        let m,
            w = (e) => {
                u = k.onStop = () => {
                    Pt(e, c, 4);
                };
            };
        if (Ui) {
            if (((w = s), t ? n && Mt(t, c, 3, [p(), f ? [] : void 0, w]) : p(), "sync" !== i)) return s;
            {
                const e = Ki();
                m = e.__watcherHandles || (e.__watcherHandles = []);
            }
        }
        let y = f ? new Array(e.length).fill(wn) : wn;
        const v = () => {
            if (k.active)
                if (t) {
                    const e = k.run();
                    (o || h || (f ? e.some((e, t) => N(e, y[t])) : N(e, y))) && (u && u(), Mt(t, c, 3, [e, y === wn ? void 0 : f && y[0] === wn ? [] : y, w]), (y = e));
                } else k.run();
        };
        let _;
        (v.allowRecurse = !!t), "sync" === i ? (_ = v) : "post" === i ? (_ = () => Wo(v, c && c.suspense)) : ((v.pre = !0), c && (v.id = c.uid), (_ = () => Lt(v)));
        const k = new me(p, _);
        t ? (n ? v() : (y = k.run())) : "post" === i ? Wo(k.run.bind(k), c && c.suspense) : k.run();
        const C = () => {
            k.stop(), c && c.scope && b(c.scope.effects, k);
        };
        return m && m.push(C), C;
    }
    function xn(e, t, n) {
        const o = this.proxy,
            i = _(e) ? (e.includes(".") ? _n(o, e) : () => o[e]) : e.bind(o, o);
        let r;
        x(t) ? (r = t) : ((r = t.handler), (n = t));
        const a = zi;
        Oi(this);
        const l = vn(i, r.bind(o), n);
        return a ? Oi(a) : $i(), l;
    }
    function _n(e, t) {
        const n = t.split(".");
        return () => {
            let t = e;
            for (let e = 0; e < n.length && t; e++) t = t[n[e]];
            return t;
        };
    }
    function kn(e, t) {
        if (!C(e) || e.__v_skip) return e;
        if ((t = t || new Set()).has(e)) return e;
        if ((t.add(e), Ct(e))) kn(e.value, t);
        else if (g(e)) for (let n = 0; n < e.length; n++) kn(e[n], t);
        else if (y(e) || w(e))
            e.forEach((e) => {
                kn(e, t);
            });
        else if (T(e)) for (const n in e) kn(e[n], t);
        return e;
    }
    function Cn(e, t) {
        const n = cn;
        if (null === n) return e;
        const o = Yi(n) || n.proxy,
            i = e.dirs || (e.dirs = []);
        for (let e = 0; e < t.length; e++) {
            let [n, r, l, s = a] = t[e];
            n && (x(n) && (n = { mounted: n, updated: n }), n.deep && kn(r), i.push({ dir: n, instance: o, value: r, oldValue: void 0, arg: l, modifiers: s }));
        }
        return e;
    }
    function Sn(e, t, n, o) {
        const i = e.dirs,
            r = t && t.dirs;
        for (let a = 0; a < i.length; a++) {
            const l = i[a];
            r && (l.oldValue = r[a].value);
            let s = l.dir[o];
            s && (ve(), Mt(s, n, 8, [e.el, l, e, t]), xe());
        }
    }
    const Fn = [Function, Array],
        Dn = {
            mode: String,
            appear: Boolean,
            persisted: Boolean,
            onBeforeEnter: Fn,
            onEnter: Fn,
            onAfterEnter: Fn,
            onEnterCancelled: Fn,
            onBeforeLeave: Fn,
            onLeave: Fn,
            onAfterLeave: Fn,
            onLeaveCancelled: Fn,
            onBeforeAppear: Fn,
            onAppear: Fn,
            onAfterAppear: Fn,
            onAppearCancelled: Fn,
        },
        An = {
            name: "BaseTransition",
            props: Dn,
            setup(e, { slots: t }) {
                const n = Ii(),
                    o = (function () {
                        const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() };
                        return (
                            Vn(() => {
                                e.isMounted = !0;
                            }),
                            Xn(() => {
                                e.isUnmounting = !0;
                            }),
                            e
                        );
                    })();
                let i;
                return () => {
                    const r = t.default && Rn(t.default(), !0);
                    if (!r || !r.length) return;
                    let a = r[0];
                    if (r.length > 1) {
                        let e = !1;
                        for (const t of r)
                            if (t.type !== ii) {
                                (a = t), (e = !0);
                                break;
                            }
                    }
                    const l = wt(e),
                        { mode: s } = l;
                    if (o.isLeaving) return Mn(a);
                    const d = zn(a);
                    if (!d) return Mn(a);
                    const c = Pn(d, l, o, n);
                    In(d, c);
                    const p = n.subTree,
                        u = p && zn(p);
                    let h = !1;
                    const { getTransitionKey: b } = d.type;
                    if (b) {
                        const e = b();
                        void 0 === i ? (i = e) : e !== i && ((i = e), (h = !0));
                    }
                    if (u && u.type !== ii && (!fi(d, u) || h)) {
                        const e = Pn(u, l, o, n);
                        if ((In(u, e), "out-in" === s))
                            return (
                                (o.isLeaving = !0),
                                (e.afterLeave = () => {
                                    (o.isLeaving = !1), !1 !== n.update.active && n.update();
                                }),
                                Mn(a)
                            );
                        "in-out" === s &&
                            d.type !== ii &&
                            (e.delayLeave = (e, t, n) => {
                                (Tn(o, u)[String(u.key)] = u),
                                    (e._leaveCb = () => {
                                        t(), (e._leaveCb = void 0), delete c.delayedLeave;
                                    }),
                                    (c.delayedLeave = n);
                            });
                    }
                    return a;
                };
            },
        };
    function Tn(e, t) {
        const { leavingVNodes: n } = e;
        let o = n.get(t.type);
        return o || ((o = Object.create(null)), n.set(t.type, o)), o;
    }
    function Pn(e, t, n, o) {
        const {
                appear: i,
                mode: r,
                persisted: a = !1,
                onBeforeEnter: l,
                onEnter: s,
                onAfterEnter: d,
                onEnterCancelled: c,
                onBeforeLeave: p,
                onLeave: u,
                onAfterLeave: h,
                onLeaveCancelled: b,
                onBeforeAppear: f,
                onAppear: m,
                onAfterAppear: w,
                onAppearCancelled: y,
            } = t,
            v = String(e.key),
            x = Tn(n, e),
            _ = (e, t) => {
                e && Mt(e, o, 9, t);
            },
            k = (e, t) => {
                const n = t[1];
                _(e, t), g(e) ? e.every((e) => e.length <= 1) && n() : e.length <= 1 && n();
            },
            C = {
                mode: r,
                persisted: a,
                beforeEnter(t) {
                    let o = l;
                    if (!n.isMounted) {
                        if (!i) return;
                        o = f || l;
                    }
                    t._leaveCb && t._leaveCb(!0);
                    const r = x[v];
                    r && fi(e, r) && r.el._leaveCb && r.el._leaveCb(), _(o, [t]);
                },
                enter(e) {
                    let t = s,
                        o = d,
                        r = c;
                    if (!n.isMounted) {
                        if (!i) return;
                        (t = m || s), (o = w || d), (r = y || c);
                    }
                    let a = !1;
                    const l = (e._enterCb = (t) => {
                        a || ((a = !0), _(t ? r : o, [e]), C.delayedLeave && C.delayedLeave(), (e._enterCb = void 0));
                    });
                    t ? k(t, [e, l]) : l();
                },
                leave(t, o) {
                    const i = String(e.key);
                    if ((t._enterCb && t._enterCb(!0), n.isUnmounting)) return o();
                    _(p, [t]);
                    let r = !1;
                    const a = (t._leaveCb = (n) => {
                        r || ((r = !0), o(), _(n ? b : h, [t]), (t._leaveCb = void 0), x[i] === e && delete x[i]);
                    });
                    (x[i] = e), u ? k(u, [t, a]) : a();
                },
                clone: (e) => Pn(e, t, n, o),
            };
        return C;
    }
    function Mn(e) {
        if (qn(e)) return ((e = xi(e)).children = null), e;
    }
    function zn(e) {
        return qn(e) ? (e.children ? e.children[0] : void 0) : e;
    }
    function In(e, t) {
        6 & e.shapeFlag && e.component ? In(e.component.subTree, t) : 128 & e.shapeFlag ? ((e.ssContent.transition = t.clone(e.ssContent)), (e.ssFallback.transition = t.clone(e.ssFallback))) : (e.transition = t);
    }
    function Rn(e, t = !1, n) {
        let o = [],
            i = 0;
        for (let r = 0; r < e.length; r++) {
            let a = e[r];
            const l = null == n ? a.key : String(n) + String(null != a.key ? a.key : r);
            a.type === ni ? (128 & a.patchFlag && i++, (o = o.concat(Rn(a.children, t, l)))) : (t || a.type !== ii) && o.push(null != l ? xi(a, { key: l }) : a);
        }
        if (i > 1) for (let e = 0; e < o.length; e++) o[e].patchFlag = -2;
        return o;
    }
    const En = (e) => !!e.type.__asyncLoader,
        qn = (e) => e.type.__isKeepAlive;
    function On(e, t) {
        Nn(e, "a", t);
    }
    function $n(e, t) {
        Nn(e, "da", t);
    }
    function Nn(e, t, n = zi) {
        const o =
            e.__wdc ||
            (e.__wdc = () => {
                let t = n;
                for (; t; ) {
                    if (t.isDeactivated) return;
                    t = t.parent;
                }
                return e();
            });
        if ((Bn(t, o, n), n)) {
            let e = n.parent;
            for (; e && e.parent; ) qn(e.parent.vnode) && jn(o, t, n, e), (e = e.parent);
        }
    }
    function jn(e, t, n, o) {
        const i = Bn(t, e, o, !0);
        Hn(() => {
            b(o[t], i);
        }, n);
    }
    function Bn(e, t, n = zi, o = !1) {
        if (n) {
            const i = n[e] || (n[e] = []),
                r =
                    t.__weh ||
                    (t.__weh = (...o) => {
                        if (n.isUnmounted) return;
                        ve(), Oi(n);
                        const i = Mt(t, n, e, o);
                        return $i(), xe(), i;
                    });
            return o ? i.unshift(r) : i.push(r), r;
        }
    }
    RegExp, RegExp;
    const Un = (e) => (t, n = zi) => (!Ui || "sp" === e) && Bn(e, (...e) => t(...e), n),
        Ln = Un("bm"),
        Vn = Un("m"),
        Yn = Un("bu"),
        Wn = Un("u"),
        Xn = Un("bum"),
        Hn = Un("um"),
        Kn = Un("sp"),
        Zn = Un("rtg"),
        Jn = Un("rtc");
    function Gn(e, t = zi) {
        Bn("ec", e, t);
    }
    const Qn = "components";
    function eo(e, t) {
        return oo(Qn, e, !0, t) || e;
    }
    const to = Symbol.for("v-ndc");
    function no(e) {
        return _(e) ? oo(Qn, e, !1) || e : e || to;
    }
    function oo(e, t, n = !0, o = !1) {
        const i = cn || zi;
        if (i) {
            const n = i.type;
            if (e === Qn) {
                const e = (function (e, t = !0) {
                    return x(e) ? e.displayName || e.name : e.name || (t && e.__name);
                })(n, !1);
                if (e && (e === t || e === R(t) || e === O(R(t)))) return n;
            }
            const r = io(i[e] || n[e], t) || io(i.appContext[e], t);
            return !r && o ? n : r;
        }
    }
    function io(e, t) {
        return e && (e[t] || e[R(t)] || e[O(R(t))]);
    }
    function ro(e, t, n, o) {
        let i;
        const r = n && n[o];
        if (g(e) || _(e)) {
            i = new Array(e.length);
            for (let n = 0, o = e.length; n < o; n++) i[n] = t(e[n], n, void 0, r && r[n]);
        } else if ("number" == typeof e) {
            i = new Array(e);
            for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, r && r[n]);
        } else if (C(e))
            if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, r && r[n]));
            else {
                const n = Object.keys(e);
                i = new Array(n.length);
                for (let o = 0, a = n.length; o < a; o++) {
                    const a = n[o];
                    i[o] = t(e[a], a, o, r && r[o]);
                }
            }
        else i = [];
        return n && (n[o] = i), i;
    }
    function ao(e, t) {
        for (let n = 0; n < t.length; n++) {
            const o = t[n];
            if (g(o)) for (let t = 0; t < o.length; t++) e[o[t].name] = o[t].fn;
            else
                o &&
                    (e[o.name] = o.key
                        ? (...e) => {
                              const t = o.fn(...e);
                              return t && (t.key = o.key), t;
                          }
                        : o.fn);
        }
        return e;
    }
    function lo(e, t, n = {}, o, i) {
        if (cn.isCE || (cn.parent && En(cn.parent) && cn.parent.isCE)) return "default" !== t && (n.name = t), vi("slot", n, o && o());
        let r = e[t];
        r && r._c && (r._d = !1), si();
        const a = r && so(r(n)),
            l = hi(ni, { key: n.key || (a && a.key) || `_${t}` }, a || (o ? o() : []), a && 1 === e._ ? 64 : -2);
        return !i && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), r && r._c && (r._d = !0), l;
    }
    function so(e) {
        return e.some((e) => !bi(e) || (e.type !== ii && !(e.type === ni && !so(e.children)))) ? e : null;
    }
    const co = (e) => (e ? (Ni(e) ? Yi(e) || e.proxy : co(e.parent)) : null),
        po = h(Object.create(null), {
            $: (e) => e,
            $el: (e) => e.vnode.el,
            $data: (e) => e.data,
            $props: (e) => e.props,
            $attrs: (e) => e.attrs,
            $slots: (e) => e.slots,
            $refs: (e) => e.refs,
            $parent: (e) => co(e.parent),
            $root: (e) => co(e.root),
            $emit: (e) => e.emit,
            $options: (e) => (__VUE_OPTIONS_API__ ? wo(e) : e.type),
            $forceUpdate: (e) => e.f || (e.f = () => Lt(e.update)),
            $nextTick: (e) => e.n || (e.n = Ut.bind(e.proxy)),
            $watch: (e) => (__VUE_OPTIONS_API__ ? xn.bind(e) : s),
        }),
        uo = (e, t) => e !== a && !e.__isScriptSetup && m(e, t),
        ho = {
            get({ _: e }, t) {
                const { ctx: n, setupState: o, data: i, props: r, accessCache: l, type: s, appContext: d } = e;
                let c;
                if ("$" !== t[0]) {
                    const s = l[t];
                    if (void 0 !== s)
                        switch (s) {
                            case 1:
                                return o[t];
                            case 2:
                                return i[t];
                            case 4:
                                return n[t];
                            case 3:
                                return r[t];
                        }
                    else {
                        if (uo(o, t)) return (l[t] = 1), o[t];
                        if (i !== a && m(i, t)) return (l[t] = 2), i[t];
                        if ((c = e.propsOptions[0]) && m(c, t)) return (l[t] = 3), r[t];
                        if (n !== a && m(n, t)) return (l[t] = 4), n[t];
                        (__VUE_OPTIONS_API__ && !fo) || (l[t] = 0);
                    }
                }
                const p = po[t];
                let u, h;
                return p ? ("$attrs" === t && _e(e, 0, t), p(e)) : (u = s.__cssModules) && (u = u[t]) ? u : n !== a && m(n, t) ? ((l[t] = 4), n[t]) : ((h = d.config.globalProperties), m(h, t) ? h[t] : void 0);
            },
            set({ _: e }, t, n) {
                const { data: o, setupState: i, ctx: r } = e;
                return uo(i, t) ? ((i[t] = n), !0) : o !== a && m(o, t) ? ((o[t] = n), !0) : !(m(e.props, t) || ("$" === t[0] && t.slice(1) in e) || ((r[t] = n), 0));
            },
            has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: i, propsOptions: r } }, l) {
                let s;
                return !!n[l] || (e !== a && m(e, l)) || uo(t, l) || ((s = r[0]) && m(s, l)) || m(o, l) || m(po, l) || m(i.config.globalProperties, l);
            },
            defineProperty(e, t, n) {
                return null != n.get ? (e._.accessCache[t] = 0) : m(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
            },
        };
    function bo(e) {
        return g(e) ? e.reduce((e, t) => ((e[t] = null), e), {}) : e;
    }
    let fo = !0;
    function mo(e, t, n) {
        Mt(g(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
    }
    function go(e, t, n, o) {
        const i = o.includes(".") ? _n(n, o) : () => n[o];
        if (_(e)) {
            const n = t[e];
            x(n) && yn(i, n);
        } else if (x(e)) yn(i, e.bind(n));
        else if (C(e))
            if (g(e)) e.forEach((e) => go(e, t, n, o));
            else {
                const o = x(e.handler) ? e.handler.bind(n) : t[e.handler];
                x(o) && yn(i, o, e);
            }
    }
    function wo(e) {
        const t = e.type,
            { mixins: n, extends: o } = t,
            {
                mixins: i,
                optionsCache: r,
                config: { optionMergeStrategies: a },
            } = e.appContext,
            l = r.get(t);
        let s;
        return l ? (s = l) : i.length || n || o ? ((s = {}), i.length && i.forEach((e) => yo(s, e, a, !0)), yo(s, t, a)) : (s = t), C(t) && r.set(t, s), s;
    }
    function yo(e, t, n, o = !1) {
        const { mixins: i, extends: r } = t;
        r && yo(e, r, n, !0), i && i.forEach((t) => yo(e, t, n, !0));
        for (const i in t)
            if (o && "expose" === i);
            else {
                const o = vo[i] || (n && n[i]);
                e[i] = o ? o(e[i], t[i]) : t[i];
            }
        return e;
    }
    const vo = {
        data: xo,
        props: So,
        emits: So,
        methods: Co,
        computed: Co,
        beforeCreate: ko,
        created: ko,
        beforeMount: ko,
        mounted: ko,
        beforeUpdate: ko,
        updated: ko,
        beforeDestroy: ko,
        beforeUnmount: ko,
        destroyed: ko,
        unmounted: ko,
        activated: ko,
        deactivated: ko,
        errorCaptured: ko,
        serverPrefetch: ko,
        components: Co,
        directives: Co,
        watch: function (e, t) {
            if (!e) return t;
            if (!t) return e;
            const n = h(Object.create(null), e);
            for (const o in t) n[o] = ko(e[o], t[o]);
            return n;
        },
        provide: xo,
        inject: function (e, t) {
            return Co(_o(e), _o(t));
        },
    };
    function xo(e, t) {
        return t
            ? e
                ? function () {
                      return h(x(e) ? e.call(this, this) : e, x(t) ? t.call(this, this) : t);
                  }
                : t
            : e;
    }
    function _o(e) {
        if (g(e)) {
            const t = {};
            for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
            return t;
        }
        return e;
    }
    function ko(e, t) {
        return e ? [...new Set([].concat(e, t))] : t;
    }
    function Co(e, t) {
        return e ? h(Object.create(null), e, t) : t;
    }
    function So(e, t) {
        return e ? (g(e) && g(t) ? [...new Set([...e, ...t])] : h(Object.create(null), bo(e), bo(null != t ? t : {}))) : t;
    }
    function Fo() {
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
    let Do = 0;
    function Ao(e, t) {
        return function (n, o = null) {
            x(n) || (n = h({}, n)), null == o || C(o) || (o = null);
            const i = Fo(),
                r = new Set();
            let a = !1;
            const l = (i.app = {
                _uid: Do++,
                _component: n,
                _props: o,
                _container: null,
                _context: i,
                _instance: null,
                version: Zi,
                get config() {
                    return i.config;
                },
                set config(e) {},
                use: (e, ...t) => (r.has(e) || (e && x(e.install) ? (r.add(e), e.install(l, ...t)) : x(e) && (r.add(e), e(l, ...t))), l),
                mixin: (e) => (__VUE_OPTIONS_API__ && (i.mixins.includes(e) || i.mixins.push(e)), l),
                component: (e, t) => (t ? ((i.components[e] = t), l) : i.components[e]),
                directive: (e, t) => (t ? ((i.directives[e] = t), l) : i.directives[e]),
                mount(r, s, d) {
                    if (!a) {
                        const c = vi(n, o);
                        return (
                            (c.appContext = i),
                            s && t ? t(c, r) : e(c, r, d),
                            (a = !0),
                            (l._container = r),
                            (r.__vue_app__ = l),
                            __VUE_PROD_DEVTOOLS__ &&
                                ((l._instance = c.component),
                                (function (e, t) {
                                    Qt("app:init", e, t, { Fragment: ni, Text: oi, Comment: ii, Static: ri });
                                })(l, Zi)),
                            Yi(c.component) || c.component.proxy
                        );
                    }
                },
                unmount() {
                    a &&
                        (e(null, l._container),
                        __VUE_PROD_DEVTOOLS__ &&
                            ((l._instance = null),
                            (function (e) {
                                Qt("app:unmount", e);
                            })(l)),
                        delete l._container.__vue_app__);
                },
                provide: (e, t) => ((i.provides[e] = t), l),
                runWithContext(e) {
                    To = l;
                    try {
                        return e();
                    } finally {
                        To = null;
                    }
                },
            });
            return l;
        };
    }
    let To = null;
    function Po(e, t, n = !1) {
        const o = zi || cn;
        if (o || To) {
            const i = o ? (null == o.parent ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides) : To._context.provides;
            if (i && e in i) return i[e];
            if (arguments.length > 1) return n && x(t) ? t.call(o && o.proxy) : t;
        }
    }
    function Mo(e, t, n, o) {
        const [i, r] = e.propsOptions;
        let l,
            s = !1;
        if (t)
            for (let a in t) {
                if (M(a)) continue;
                const d = t[a];
                let c;
                i && m(i, (c = R(a))) ? (r && r.includes(c) ? ((l || (l = {}))[c] = d) : (n[c] = d)) : dn(e.emitsOptions, a) || (a in o && d === o[a]) || ((o[a] = d), (s = !0));
            }
        if (r) {
            const t = wt(n),
                o = l || a;
            for (let a = 0; a < r.length; a++) {
                const l = r[a];
                n[l] = zo(i, t, l, o[l], e, !m(o, l));
            }
        }
        return s;
    }
    function zo(e, t, n, o, i, r) {
        const a = e[n];
        if (null != a) {
            const e = m(a, "default");
            if (e && void 0 === o) {
                const e = a.default;
                if (a.type !== Function && !a.skipFactory && x(e)) {
                    const { propsDefaults: r } = i;
                    n in r ? (o = r[n]) : (Oi(i), (o = r[n] = e.call(null, t)), $i());
                } else o = e;
            }
            a[0] && (r && !e ? (o = !1) : !a[1] || ("" !== o && o !== q(n)) || (o = !0));
        }
        return o;
    }
    function Io(e, t, n = !1) {
        const o = t.propsCache,
            i = o.get(e);
        if (i) return i;
        const r = e.props,
            s = {},
            d = [];
        let c = !1;
        if (__VUE_OPTIONS_API__ && !x(e)) {
            const o = (e) => {
                c = !0;
                const [n, o] = Io(e, t, !0);
                h(s, n), o && d.push(...o);
            };
            !n && t.mixins.length && t.mixins.forEach(o), e.extends && o(e.extends), e.mixins && e.mixins.forEach(o);
        }
        if (!r && !c) return C(e) && o.set(e, l), l;
        if (g(r))
            for (let e = 0; e < r.length; e++) {
                const t = R(r[e]);
                Ro(t) && (s[t] = a);
            }
        else if (r)
            for (const e in r) {
                const t = R(e);
                if (Ro(t)) {
                    const n = r[e],
                        o = (s[t] = g(n) || x(n) ? { type: n } : h({}, n));
                    if (o) {
                        const e = Oo(Boolean, o.type),
                            n = Oo(String, o.type);
                        (o[0] = e > -1), (o[1] = n < 0 || e < n), (e > -1 || m(o, "default")) && d.push(t);
                    }
                }
            }
        const p = [s, d];
        return C(e) && o.set(e, p), p;
    }
    function Ro(e) {
        return "$" !== e[0];
    }
    function Eo(e) {
        const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
        return t ? t[2] : null === e ? "null" : "";
    }
    function qo(e, t) {
        return Eo(e) === Eo(t);
    }
    function Oo(e, t) {
        return g(t) ? t.findIndex((t) => qo(t, e)) : x(t) && qo(t, e) ? 0 : -1;
    }
    const $o = (e) => "_" === e[0] || "$stable" === e,
        No = (e) => (g(e) ? e.map(Si) : [Si(e)]),
        jo = (e, t, n) => {
            if (t._n) return t;
            const o = hn((...e) => No(t(...e)), n);
            return (o._c = !1), o;
        },
        Bo = (e, t, n) => {
            const o = e._ctx;
            for (const n in e) {
                if ($o(n)) continue;
                const i = e[n];
                if (x(i)) t[n] = jo(0, i, o);
                else if (null != i) {
                    const e = No(i);
                    t[n] = () => e;
                }
            }
        },
        Uo = (e, t) => {
            const n = No(t);
            e.slots.default = () => n;
        },
        Lo = (e, t) => {
            if (32 & e.vnode.shapeFlag) {
                const n = t._;
                n ? ((e.slots = wt(t)), B(t, "_", n)) : Bo(t, (e.slots = {}));
            } else (e.slots = {}), t && Uo(e, t);
            B(e.slots, mi, 1);
        },
        Vo = (e, t, n) => {
            const { vnode: o, slots: i } = e;
            let r = !0,
                l = a;
            if (32 & o.shapeFlag) {
                const e = t._;
                e ? (n && 1 === e ? (r = !1) : (h(i, t), n || 1 !== e || delete i._)) : ((r = !t.$stable), Bo(t, i)), (l = t);
            } else t && (Uo(e, t), (l = { default: 1 }));
            if (r) for (const e in i) $o(e) || e in l || delete i[e];
        };
    function Yo(e, t, n, o, i = !1) {
        if (g(e)) return void e.forEach((e, r) => Yo(e, t && (g(t) ? t[r] : t), n, o, i));
        if (En(o) && !i) return;
        const r = 4 & o.shapeFlag ? Yi(o.component) || o.component.proxy : o.el,
            l = i ? null : r,
            { i: s, r: d } = e,
            c = t && t.r,
            p = s.refs === a ? (s.refs = {}) : s.refs,
            u = s.setupState;
        if ((null != c && c !== d && (_(c) ? ((p[c] = null), m(u, c) && (u[c] = null)) : Ct(c) && (c.value = null)), x(d))) Pt(d, s, 12, [l, p]);
        else {
            const t = _(d),
                o = Ct(d);
            if (t || o) {
                const a = () => {
                    if (e.f) {
                        const n = t ? (m(u, d) ? u[d] : p[d]) : d.value;
                        i ? g(n) && b(n, r) : g(n) ? n.includes(r) || n.push(r) : t ? ((p[d] = [r]), m(u, d) && (u[d] = p[d])) : ((d.value = [r]), e.k && (p[e.k] = d.value));
                    } else t ? ((p[d] = l), m(u, d) && (u[d] = l)) : o && ((d.value = l), e.k && (p[e.k] = l));
                };
                l ? ((a.id = -1), Wo(a, n)) : a();
            }
        }
    }
    const Wo = function (e, t) {
        var n;
        t && t.pendingBranch ? (g(e) ? t.effects.push(...e) : t.effects.push(e)) : (g((n = e)) ? Ot.push(...n) : ($t && $t.includes(n, n.allowRecurse ? Nt + 1 : Nt)) || Ot.push(n), Vt());
    };
    function Xo(e, t) {
        "boolean" != typeof __VUE_OPTIONS_API__ && (Y().__VUE_OPTIONS_API__ = !0), "boolean" != typeof __VUE_PROD_DEVTOOLS__ && (Y().__VUE_PROD_DEVTOOLS__ = !1);
        const n = Y();
        (n.__VUE__ = !0), __VUE_PROD_DEVTOOLS__ && en(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
        const { insert: o, remove: i, patchProp: r, createElement: d, createText: c, createComment: p, setText: u, setElementText: h, parentNode: b, nextSibling: f, setScopeId: g = s, insertStaticContent: w } = e,
            y = (e, t, n, o = null, i = null, r = null, a = !1, l = null, s = !!t.dynamicChildren) => {
                if (e === t) return;
                e && !fi(e, t) && ((o = G(e)), X(e, i, r, !0), (e = null)), -2 === t.patchFlag && ((s = !1), (t.dynamicChildren = null));
                const { type: d, ref: c, shapeFlag: p } = t;
                switch (d) {
                    case oi:
                        v(e, t, n, o);
                        break;
                    case ii:
                        x(e, t, n, o);
                        break;
                    case ri:
                        null == e && _(t, n, o, a);
                        break;
                    case ni:
                        z(e, t, n, o, i, r, a, l, s);
                        break;
                    default:
                        1 & p ? k(e, t, n, o, i, r, a, l, s) : 6 & p ? I(e, t, n, o, i, r, a, l, s) : (64 & p || 128 & p) && d.process(e, t, n, o, i, r, a, l, s, ee);
                }
                null != c && i && Yo(c, e && e.ref, r, t || e, !t);
            },
            v = (e, t, n, i) => {
                if (null == e) o((t.el = c(t.children)), n, i);
                else {
                    const n = (t.el = e.el);
                    t.children !== e.children && u(n, t.children);
                }
            },
            x = (e, t, n, i) => {
                null == e ? o((t.el = p(t.children || "")), n, i) : (t.el = e.el);
            },
            _ = (e, t, n, o) => {
                [e.el, e.anchor] = w(e.children, t, n, o, e.el, e.anchor);
            },
            k = (e, t, n, o, i, r, a, l, s) => {
                (a = a || "svg" === t.type), null == e ? C(t, n, o, i, r, a, l, s) : A(e, t, i, r, a, l, s);
            },
            C = (e, t, n, i, a, l, s, c) => {
                let p, u;
                const { type: b, props: f, shapeFlag: m, transition: g, dirs: w } = e;
                if (((p = e.el = d(e.type, l, f && f.is, f)), 8 & m ? h(p, e.children) : 16 & m && D(e.children, p, null, i, a, l && "foreignObject" !== b, s, c), w && Sn(e, null, i, "created"), F(p, e, e.scopeId, s, i), f)) {
                    for (const t in f) "value" === t || M(t) || r(p, t, null, f[t], l, e.children, i, a, J);
                    "value" in f && r(p, "value", null, f.value), (u = f.onVnodeBeforeMount) && Ti(u, i, e);
                }
                __VUE_PROD_DEVTOOLS__ && (Object.defineProperty(p, "__vnode", { value: e, enumerable: !1 }), Object.defineProperty(p, "__vueParentComponent", { value: i, enumerable: !1 })), w && Sn(e, null, i, "beforeMount");
                const y = (!a || (a && !a.pendingBranch)) && g && !g.persisted;
                y && g.beforeEnter(p),
                    o(p, t, n),
                    ((u = f && f.onVnodeMounted) || y || w) &&
                        Wo(() => {
                            u && Ti(u, i, e), y && g.enter(p), w && Sn(e, null, i, "mounted");
                        }, a);
            },
            F = (e, t, n, o, i) => {
                if ((n && g(e, n), o)) for (let t = 0; t < o.length; t++) g(e, o[t]);
                if (i && t === i.subTree) {
                    const t = i.vnode;
                    F(e, t, t.scopeId, t.slotScopeIds, i.parent);
                }
            },
            D = (e, t, n, o, i, r, a, l, s = 0) => {
                for (let d = s; d < e.length; d++) {
                    const s = (e[d] = l ? Fi(e[d]) : Si(e[d]));
                    y(null, s, t, n, o, i, r, a, l);
                }
            },
            A = (e, t, n, o, i, l, s) => {
                const d = (t.el = e.el);
                let { patchFlag: c, dynamicChildren: p, dirs: u } = t;
                c |= 16 & e.patchFlag;
                const b = e.props || a,
                    f = t.props || a;
                let m;
                n && Ho(n, !1), (m = f.onVnodeBeforeUpdate) && Ti(m, n, t, e), u && Sn(t, e, n, "beforeUpdate"), n && Ho(n, !0);
                const g = i && "foreignObject" !== t.type;
                if ((p ? T(e.dynamicChildren, p, d, n, o, g, l) : s || U(e, t, d, null, n, o, g, l, !1), c > 0)) {
                    if (16 & c) P(d, t, b, f, n, o, i);
                    else if ((2 & c && b.class !== f.class && r(d, "class", null, f.class, i), 4 & c && r(d, "style", b.style, f.style, i), 8 & c)) {
                        const a = t.dynamicProps;
                        for (let t = 0; t < a.length; t++) {
                            const l = a[t],
                                s = b[l],
                                c = f[l];
                            (c === s && "value" !== l) || r(d, l, s, c, i, e.children, n, o, J);
                        }
                    }
                    1 & c && e.children !== t.children && h(d, t.children);
                } else s || null != p || P(d, t, b, f, n, o, i);
                ((m = f.onVnodeUpdated) || u) &&
                    Wo(() => {
                        m && Ti(m, n, t, e), u && Sn(t, e, n, "updated");
                    }, o);
            },
            T = (e, t, n, o, i, r, a) => {
                for (let l = 0; l < t.length; l++) {
                    const s = e[l],
                        d = t[l],
                        c = s.el && (s.type === ni || !fi(s, d) || 70 & s.shapeFlag) ? b(s.el) : n;
                    y(s, d, c, null, o, i, r, a, !0);
                }
            },
            P = (e, t, n, o, i, l, s) => {
                if (n !== o) {
                    if (n !== a) for (const a in n) M(a) || a in o || r(e, a, n[a], null, s, t.children, i, l, J);
                    for (const a in o) {
                        if (M(a)) continue;
                        const d = o[a],
                            c = n[a];
                        d !== c && "value" !== a && r(e, a, c, d, s, t.children, i, l, J);
                    }
                    "value" in o && r(e, "value", n.value, o.value);
                }
            },
            z = (e, t, n, i, r, a, l, s, d) => {
                const p = (t.el = e ? e.el : c("")),
                    u = (t.anchor = e ? e.anchor : c(""));
                let { patchFlag: h, dynamicChildren: b, slotScopeIds: f } = t;
                f && (s = s ? s.concat(f) : f),
                    null == e
                        ? (o(p, n, i), o(u, n, i), D(t.children, n, u, r, a, l, s, d))
                        : h > 0 && 64 & h && b && e.dynamicChildren
                        ? (T(e.dynamicChildren, b, n, r, a, l, s), (null != t.key || (r && t === r.subTree)) && Ko(e, t, !0))
                        : U(e, t, n, u, r, a, l, s, d);
            },
            I = (e, t, n, o, i, r, a, l, s) => {
                (t.slotScopeIds = l), null == e ? (512 & t.shapeFlag ? i.ctx.activate(t, n, o, a, s) : E(t, n, o, i, r, a, s)) : O(e, t, s);
            },
            E = (e, t, n, o, i, r, l) => {
                const s = (e.component = (function (e, t, n) {
                    const o = e.type,
                        i = (t ? t.appContext : e.appContext) || Pi,
                        r = {
                            uid: Mi++,
                            vnode: e,
                            type: o,
                            parent: t,
                            appContext: i,
                            root: null,
                            next: null,
                            subTree: null,
                            effect: null,
                            update: null,
                            scope: new re(!0),
                            render: null,
                            proxy: null,
                            exposed: null,
                            exposeProxy: null,
                            withProxy: null,
                            provides: t ? t.provides : Object.create(i.provides),
                            accessCache: null,
                            renderCache: [],
                            components: null,
                            directives: null,
                            propsOptions: Io(o, i),
                            emitsOptions: sn(o, i),
                            emit: null,
                            emitted: null,
                            propsDefaults: a,
                            inheritAttrs: o.inheritAttrs,
                            ctx: a,
                            data: a,
                            props: a,
                            attrs: a,
                            slots: a,
                            refs: a,
                            setupState: a,
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
                    return (r.ctx = { _: r }), (r.root = t ? t.root : r), (r.emit = ln.bind(null, r)), e.ce && e.ce(r), r;
                })(e, o, i));
                if (
                    (qn(e) && (s.ctx.renderer = ee),
                    (function (e, t = !1) {
                        Ui = t;
                        const { props: n, children: o } = e.vnode,
                            i = Ni(e);
                        (function (e, t, n, o = !1) {
                            const i = {},
                                r = {};
                            B(r, mi, 1), (e.propsDefaults = Object.create(null)), Mo(e, t, i, r);
                            for (const t in e.propsOptions[0]) t in i || (i[t] = void 0);
                            n ? (e.props = o ? i : ht(i, !1, Ne, rt, st)) : e.type.props ? (e.props = i) : (e.props = r), (e.attrs = r);
                        })(e, n, i, t),
                            Lo(e, o);
                        const r = i
                            ? (function (e, t) {
                                  const n = e.type;
                                  (e.accessCache = Object.create(null)), (e.proxy = yt(new Proxy(e.ctx, ho)));
                                  const { setup: o } = n;
                                  if (o) {
                                      const n = (e.setupContext =
                                          o.length > 1
                                              ? (function (e) {
                                                    const t = (t) => {
                                                        e.exposed = t || {};
                                                    };
                                                    return {
                                                        get attrs() {
                                                            return (function (e) {
                                                                return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs, { get: (t, n) => (_e(e, 0, "$attrs"), t[n]) }));
                                                            })(e);
                                                        },
                                                        slots: e.slots,
                                                        emit: e.emit,
                                                        expose: t,
                                                    };
                                                })(e)
                                              : null);
                                      Oi(e), ve();
                                      const i = Pt(o, e, 0, [e.props, n]);
                                      if ((xe(), $i(), S(i))) {
                                          if ((i.then($i, $i), t))
                                              return i
                                                  .then((n) => {
                                                      Li(e, n, t);
                                                  })
                                                  .catch((t) => {
                                                      zt(t, e, 0);
                                                  });
                                          e.asyncDep = i;
                                      } else Li(e, i, t);
                                  } else Vi(e, t);
                              })(e, t)
                            : void 0;
                        Ui = !1;
                    })(s),
                    s.asyncDep)
                ) {
                    if ((i && i.registerDep(s, $), !e.el)) {
                        const e = (s.subTree = vi(ii));
                        x(null, e, t, n);
                    }
                } else $(s, e, t, n, i, r, l);
            },
            O = (e, t, n) => {
                const o = (t.component = e.component);
                if (
                    (function (e, t, n) {
                        const { props: o, children: i, component: r } = e,
                            { props: a, children: l, patchFlag: s } = t,
                            d = r.emitsOptions;
                        if (t.dirs || t.transition) return !0;
                        if (!(n && s >= 0)) return !((!i && !l) || (l && l.$stable)) || (o !== a && (o ? !a || gn(o, a, d) : !!a));
                        if (1024 & s) return !0;
                        if (16 & s) return o ? gn(o, a, d) : !!a;
                        if (8 & s) {
                            const e = t.dynamicProps;
                            for (let t = 0; t < e.length; t++) {
                                const n = e[t];
                                if (a[n] !== o[n] && !dn(d, n)) return !0;
                            }
                        }
                        return !1;
                    })(e, t, n)
                ) {
                    if (o.asyncDep && !o.asyncResolved) return void N(o, t, n);
                    (o.next = t),
                        (function (e) {
                            const t = Et.indexOf(e);
                            t > qt && Et.splice(t, 1);
                        })(o.update),
                        o.update();
                } else (t.el = e.el), (o.vnode = t);
            },
            $ = (e, t, n, o, i, r, a) => {
                const l = (e.effect = new me(
                        () => {
                            if (e.isMounted) {
                                let t,
                                    { next: n, bu: o, u: l, parent: s, vnode: d } = e,
                                    c = n;
                                Ho(e, !1), n ? ((n.el = d.el), N(e, n, a)) : (n = d), o && j(o), (t = n.props && n.props.onVnodeBeforeUpdate) && Ti(t, s, n, d), Ho(e, !0);
                                const p = bn(e),
                                    u = e.subTree;
                                (e.subTree = p),
                                    y(u, p, b(u.el), G(u), e, i, r),
                                    (n.el = p.el),
                                    null === c &&
                                        (function ({ vnode: e, parent: t }, n) {
                                            for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
                                        })(e, p.el),
                                    l && Wo(l, i),
                                    (t = n.props && n.props.onVnodeUpdated) && Wo(() => Ti(t, s, n, d), i),
                                    __VUE_PROD_DEVTOOLS__ && nn(e);
                            } else {
                                let a;
                                const { el: l, props: s } = t,
                                    { bm: d, m: c, parent: p } = e,
                                    u = En(t);
                                if ((Ho(e, !1), d && j(d), !u && (a = s && s.onVnodeBeforeMount) && Ti(a, p, t), Ho(e, !0), l && ne)) {
                                    const n = () => {
                                        (e.subTree = bn(e)), ne(l, e.subTree, e, i, null);
                                    };
                                    u ? t.type.__asyncLoader().then(() => !e.isUnmounted && n()) : n();
                                } else {
                                    const a = (e.subTree = bn(e));
                                    y(null, a, n, o, e, i, r), (t.el = a.el);
                                }
                                if ((c && Wo(c, i), !u && (a = s && s.onVnodeMounted))) {
                                    const e = t;
                                    Wo(() => Ti(a, p, e), i);
                                }
                                (256 & t.shapeFlag || (p && En(p.vnode) && 256 & p.vnode.shapeFlag)) && e.a && Wo(e.a, i), (e.isMounted = !0), __VUE_PROD_DEVTOOLS__ && tn(e), (t = n = o = null);
                            }
                        },
                        () => Lt(s),
                        e.scope
                    )),
                    s = (e.update = () => l.run());
                (s.id = e.uid), Ho(e, !0), s();
            },
            N = (e, t, n) => {
                t.component = e;
                const o = e.vnode.props;
                (e.vnode = t),
                    (e.next = null),
                    (function (e, t, n, o) {
                        const {
                                props: i,
                                attrs: r,
                                vnode: { patchFlag: a },
                            } = e,
                            l = wt(i),
                            [s] = e.propsOptions;
                        let d = !1;
                        if (!(o || a > 0) || 16 & a) {
                            let o;
                            Mo(e, t, i, r) && (d = !0);
                            for (const r in l) (t && (m(t, r) || ((o = q(r)) !== r && m(t, o)))) || (s ? !n || (void 0 === n[r] && void 0 === n[o]) || (i[r] = zo(s, l, r, void 0, e, !0)) : delete i[r]);
                            if (r !== l) for (const e in r) (t && m(t, e)) || (delete r[e], (d = !0));
                        } else if (8 & a) {
                            const n = e.vnode.dynamicProps;
                            for (let o = 0; o < n.length; o++) {
                                let a = n[o];
                                if (dn(e.emitsOptions, a)) continue;
                                const c = t[a];
                                if (s)
                                    if (m(r, a)) c !== r[a] && ((r[a] = c), (d = !0));
                                    else {
                                        const t = R(a);
                                        i[t] = zo(s, l, t, c, e, !1);
                                    }
                                else c !== r[a] && ((r[a] = c), (d = !0));
                            }
                        }
                        d && Ce(e, "set", "$attrs");
                    })(e, t.props, o, n),
                    Vo(e, t.children, n),
                    ve(),
                    Yt(),
                    xe();
            },
            U = (e, t, n, o, i, r, a, l, s = !1) => {
                const d = e && e.children,
                    c = e ? e.shapeFlag : 0,
                    p = t.children,
                    { patchFlag: u, shapeFlag: b } = t;
                if (u > 0) {
                    if (128 & u) return void V(d, p, n, o, i, r, a, l, s);
                    if (256 & u) return void L(d, p, n, o, i, r, a, l, s);
                }
                8 & b ? (16 & c && J(d, i, r), p !== d && h(n, p)) : 16 & c ? (16 & b ? V(d, p, n, o, i, r, a, l, s) : J(d, i, r, !0)) : (8 & c && h(n, ""), 16 & b && D(p, n, o, i, r, a, l, s));
            },
            L = (e, t, n, o, i, r, a, s, d) => {
                t = t || l;
                const c = (e = e || l).length,
                    p = t.length,
                    u = Math.min(c, p);
                let h;
                for (h = 0; h < u; h++) {
                    const o = (t[h] = d ? Fi(t[h]) : Si(t[h]));
                    y(e[h], o, n, null, i, r, a, s, d);
                }
                c > p ? J(e, i, r, !0, !1, u) : D(t, n, o, i, r, a, s, d, u);
            },
            V = (e, t, n, o, i, r, a, s, d) => {
                let c = 0;
                const p = t.length;
                let u = e.length - 1,
                    h = p - 1;
                for (; c <= u && c <= h; ) {
                    const o = e[c],
                        l = (t[c] = d ? Fi(t[c]) : Si(t[c]));
                    if (!fi(o, l)) break;
                    y(o, l, n, null, i, r, a, s, d), c++;
                }
                for (; c <= u && c <= h; ) {
                    const o = e[u],
                        l = (t[h] = d ? Fi(t[h]) : Si(t[h]));
                    if (!fi(o, l)) break;
                    y(o, l, n, null, i, r, a, s, d), u--, h--;
                }
                if (c > u) {
                    if (c <= h) {
                        const e = h + 1,
                            l = e < p ? t[e].el : o;
                        for (; c <= h; ) y(null, (t[c] = d ? Fi(t[c]) : Si(t[c])), n, l, i, r, a, s, d), c++;
                    }
                } else if (c > h) for (; c <= u; ) X(e[c], i, r, !0), c++;
                else {
                    const b = c,
                        f = c,
                        m = new Map();
                    for (c = f; c <= h; c++) {
                        const e = (t[c] = d ? Fi(t[c]) : Si(t[c]));
                        null != e.key && m.set(e.key, c);
                    }
                    let g,
                        w = 0;
                    const v = h - f + 1;
                    let x = !1,
                        _ = 0;
                    const k = new Array(v);
                    for (c = 0; c < v; c++) k[c] = 0;
                    for (c = b; c <= u; c++) {
                        const o = e[c];
                        if (w >= v) {
                            X(o, i, r, !0);
                            continue;
                        }
                        let l;
                        if (null != o.key) l = m.get(o.key);
                        else
                            for (g = f; g <= h; g++)
                                if (0 === k[g - f] && fi(o, t[g])) {
                                    l = g;
                                    break;
                                }
                        void 0 === l ? X(o, i, r, !0) : ((k[l - f] = c + 1), l >= _ ? (_ = l) : (x = !0), y(o, t[l], n, null, i, r, a, s, d), w++);
                    }
                    const C = x
                        ? (function (e) {
                              const t = e.slice(),
                                  n = [0];
                              let o, i, r, a, l;
                              const s = e.length;
                              for (o = 0; o < s; o++) {
                                  const s = e[o];
                                  if (0 !== s) {
                                      if (((i = n[n.length - 1]), e[i] < s)) {
                                          (t[o] = i), n.push(o);
                                          continue;
                                      }
                                      for (r = 0, a = n.length - 1; r < a; ) (l = (r + a) >> 1), e[n[l]] < s ? (r = l + 1) : (a = l);
                                      s < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), (n[r] = o));
                                  }
                              }
                              for (r = n.length, a = n[r - 1]; r-- > 0; ) (n[r] = a), (a = t[a]);
                              return n;
                          })(k)
                        : l;
                    for (g = C.length - 1, c = v - 1; c >= 0; c--) {
                        const e = f + c,
                            l = t[e],
                            u = e + 1 < p ? t[e + 1].el : o;
                        0 === k[c] ? y(null, l, n, u, i, r, a, s, d) : x && (g < 0 || c !== C[g] ? W(l, n, u, 2) : g--);
                    }
                }
            },
            W = (e, t, n, i, r = null) => {
                const { el: a, type: l, transition: s, children: d, shapeFlag: c } = e;
                if (6 & c) W(e.component.subTree, t, n, i);
                else if (128 & c) e.suspense.move(t, n, i);
                else if (64 & c) l.move(e, t, n, ee);
                else if (l !== ni)
                    if (l !== ri)
                        if (2 !== i && 1 & c && s)
                            if (0 === i) s.beforeEnter(a), o(a, t, n), Wo(() => s.enter(a), r);
                            else {
                                const { leave: e, delayLeave: i, afterLeave: r } = s,
                                    l = () => o(a, t, n),
                                    d = () => {
                                        e(a, () => {
                                            l(), r && r();
                                        });
                                    };
                                i ? i(a, l, d) : d();
                            }
                        else o(a, t, n);
                    else
                        (({ el: e, anchor: t }, n, i) => {
                            let r;
                            for (; e && e !== t; ) (r = f(e)), o(e, n, i), (e = r);
                            o(t, n, i);
                        })(e, t, n);
                else {
                    o(a, t, n);
                    for (let e = 0; e < d.length; e++) W(d[e], t, n, i);
                    o(e.anchor, t, n);
                }
            },
            X = (e, t, n, o = !1, i = !1) => {
                const { type: r, props: a, ref: l, children: s, dynamicChildren: d, shapeFlag: c, patchFlag: p, dirs: u } = e;
                if ((null != l && Yo(l, null, n, e, !0), 256 & c)) return void t.ctx.deactivate(e);
                const h = 1 & c && u,
                    b = !En(e);
                let f;
                if ((b && (f = a && a.onVnodeBeforeUnmount) && Ti(f, t, e), 6 & c)) Z(e.component, n, o);
                else {
                    if (128 & c) return void e.suspense.unmount(n, o);
                    h && Sn(e, null, t, "beforeUnmount"), 64 & c ? e.type.remove(e, t, n, i, ee, o) : d && (r !== ni || (p > 0 && 64 & p)) ? J(d, t, n, !1, !0) : ((r === ni && 384 & p) || (!i && 16 & c)) && J(s, t, n), o && H(e);
                }
                ((b && (f = a && a.onVnodeUnmounted)) || h) &&
                    Wo(() => {
                        f && Ti(f, t, e), h && Sn(e, null, t, "unmounted");
                    }, n);
            },
            H = (e) => {
                const { type: t, el: n, anchor: o, transition: r } = e;
                if (t === ni) return void K(n, o);
                if (t === ri)
                    return void (({ el: e, anchor: t }) => {
                        let n;
                        for (; e && e !== t; ) (n = f(e)), i(e), (e = n);
                        i(t);
                    })(e);
                const a = () => {
                    i(n), r && !r.persisted && r.afterLeave && r.afterLeave();
                };
                if (1 & e.shapeFlag && r && !r.persisted) {
                    const { leave: t, delayLeave: o } = r,
                        i = () => t(n, a);
                    o ? o(e.el, a, i) : i();
                } else a();
            },
            K = (e, t) => {
                let n;
                for (; e !== t; ) (n = f(e)), i(e), (e = n);
                i(t);
            },
            Z = (e, t, n) => {
                const { bum: o, scope: i, update: r, subTree: a, um: l } = e;
                o && j(o),
                    i.stop(),
                    r && ((r.active = !1), X(a, e, t, n)),
                    l && Wo(l, t),
                    Wo(() => {
                        e.isUnmounted = !0;
                    }, t),
                    t && t.pendingBranch && !t.isUnmounted && e.asyncDep && !e.asyncResolved && e.suspenseId === t.pendingId && (t.deps--, 0 === t.deps && t.resolve()),
                    __VUE_PROD_DEVTOOLS__ && rn(e);
            },
            J = (e, t, n, o = !1, i = !1, r = 0) => {
                for (let a = r; a < e.length; a++) X(e[a], t, n, o, i);
            },
            G = (e) => (6 & e.shapeFlag ? G(e.component.subTree) : 128 & e.shapeFlag ? e.suspense.next() : f(e.anchor || e.el)),
            Q = (e, t, n) => {
                null == e ? t._vnode && X(t._vnode, null, null, !0) : y(t._vnode || null, e, t, null, null, null, n), Yt(), Wt(), (t._vnode = e);
            },
            ee = { p: y, um: X, m: W, r: H, mt: E, mc: D, pc: U, pbc: T, n: G, o: e };
        let te, ne;
        return t && ([te, ne] = t(ee)), { render: Q, hydrate: te, createApp: Ao(Q, te) };
    }
    function Ho({ effect: e, update: t }, n) {
        e.allowRecurse = t.allowRecurse = n;
    }
    function Ko(e, t, n = !1) {
        const o = e.children,
            i = t.children;
        if (g(o) && g(i))
            for (let e = 0; e < o.length; e++) {
                const t = o[e];
                let r = i[e];
                1 & r.shapeFlag && !r.dynamicChildren && ((r.patchFlag <= 0 || 32 === r.patchFlag) && ((r = i[e] = Fi(i[e])), (r.el = t.el)), n || Ko(t, r)), r.type === oi && (r.el = t.el);
            }
    }
    const Zo = (e) => e && (e.disabled || "" === e.disabled),
        Jo = (e) => "undefined" != typeof SVGElement && e instanceof SVGElement,
        Go = (e, t) => {
            const n = e && e.to;
            if (_(n)) {
                if (t) {
                    return t(n);
                }
                return null;
            }
            return n;
        };
    function Qo(e, t, n, { o: { insert: o }, m: i }, r = 2) {
        0 === r && o(e.targetAnchor, t, n);
        const { el: a, anchor: l, shapeFlag: s, children: d, props: c } = e,
            p = 2 === r;
        if ((p && o(a, t, n), (!p || Zo(c)) && 16 & s)) for (let e = 0; e < d.length; e++) i(d[e], t, n, 2);
        p && o(l, t, n);
    }
    const ei = {
        __isTeleport: !0,
        process(e, t, n, o, i, r, a, l, s, d) {
            const {
                    mc: c,
                    pc: p,
                    pbc: u,
                    o: { insert: h, querySelector: b, createText: f, createComment: m },
                } = d,
                g = Zo(t.props);
            let { shapeFlag: w, children: y, dynamicChildren: v } = t;
            if (null == e) {
                const e = (t.el = f("")),
                    d = (t.anchor = f(""));
                h(e, n, o), h(d, n, o);
                const p = (t.target = Go(t.props, b)),
                    u = (t.targetAnchor = f(""));
                p && (h(u, p), (a = a || Jo(p)));
                const m = (e, t) => {
                    16 & w && c(y, e, t, i, r, a, l, s);
                };
                g ? m(n, d) : p && m(p, u);
            } else {
                t.el = e.el;
                const o = (t.anchor = e.anchor),
                    c = (t.target = e.target),
                    h = (t.targetAnchor = e.targetAnchor),
                    f = Zo(e.props),
                    m = f ? n : c,
                    w = f ? o : h;
                if (((a = a || Jo(c)), v ? (u(e.dynamicChildren, v, m, i, r, a, l), Ko(e, t, !0)) : s || p(e, t, m, w, i, r, a, l, !1), g)) f || Qo(t, n, o, d, 1);
                else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                    const e = (t.target = Go(t.props, b));
                    e && Qo(t, e, null, d, 0);
                } else f && Qo(t, c, h, d, 1);
            }
            ti(t);
        },
        remove(e, t, n, o, { um: i, o: { remove: r } }, a) {
            const { shapeFlag: l, children: s, anchor: d, targetAnchor: c, target: p, props: u } = e;
            if ((p && r(c), (a || !Zo(u)) && (r(d), 16 & l)))
                for (let e = 0; e < s.length; e++) {
                    const o = s[e];
                    i(o, t, n, !0, !!o.dynamicChildren);
                }
        },
        move: Qo,
        hydrate: function (e, t, n, o, i, r, { o: { nextSibling: a, parentNode: l, querySelector: s } }, d) {
            const c = (t.target = Go(t.props, s));
            if (c) {
                const s = c._lpa || c.firstChild;
                if (16 & t.shapeFlag)
                    if (Zo(t.props)) (t.anchor = d(a(e), t, l(e), n, o, i, r)), (t.targetAnchor = s);
                    else {
                        t.anchor = a(e);
                        let l = s;
                        for (; l; )
                            if (((l = a(l)), l && 8 === l.nodeType && "teleport anchor" === l.data)) {
                                (t.targetAnchor = l), (c._lpa = t.targetAnchor && a(t.targetAnchor));
                                break;
                            }
                        d(s, t, c, n, o, i, r);
                    }
                ti(t);
            }
            return t.anchor && a(t.anchor);
        },
    };
    function ti(e) {
        const t = e.ctx;
        if (t && t.ut) {
            let n = e.children[0].el;
            for (; n !== e.targetAnchor; ) 1 === n.nodeType && n.setAttribute("data-v-owner", t.uid), (n = n.nextSibling);
            t.ut();
        }
    }
    const ni = Symbol.for("v-fgt"),
        oi = Symbol.for("v-txt"),
        ii = Symbol.for("v-cmt"),
        ri = Symbol.for("v-stc"),
        ai = [];
    let li = null;
    function si(e = !1) {
        ai.push((li = e ? null : []));
    }
    let di = 1;
    function ci(e) {
        di += e;
    }
    function pi(e) {
        return (e.dynamicChildren = di > 0 ? li || l : null), ai.pop(), (li = ai[ai.length - 1] || null), di > 0 && li && li.push(e), e;
    }
    function ui(e, t, n, o, i, r) {
        return pi(yi(e, t, n, o, i, r, !0));
    }
    function hi(e, t, n, o, i) {
        return pi(vi(e, t, n, o, i, !0));
    }
    function bi(e) {
        return !!e && !0 === e.__v_isVNode;
    }
    function fi(e, t) {
        return e.type === t.type && e.key === t.key;
    }
    const mi = "__vInternal",
        gi = ({ key: e }) => (null != e ? e : null),
        wi = ({ ref: e, ref_key: t, ref_for: n }) => ("number" == typeof e && (e = "" + e), null != e ? (_(e) || Ct(e) || x(e) ? { i: cn, r: e, k: t, f: !!n } : e) : null);
    function yi(e, t = null, n = null, o = 0, i = null, r = e === ni ? 0 : 1, a = !1, l = !1) {
        const s = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e,
            props: t,
            key: t && gi(t),
            ref: t && wi(t),
            scopeId: pn,
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
            patchFlag: o,
            dynamicProps: i,
            dynamicChildren: null,
            appContext: null,
            ctx: cn,
        };
        return l ? (Di(s, n), 128 & r && e.normalize(s)) : n && (s.shapeFlag |= _(n) ? 8 : 16), di > 0 && !a && li && (s.patchFlag > 0 || 6 & r) && 32 !== s.patchFlag && li.push(s), s;
    }
    const vi = function (e, t = null, n = null, o = 0, i = null, r = !1) {
        if (((e && e !== to) || (e = ii), bi(e))) {
            const o = xi(e, t, !0);
            return n && Di(o, n), di > 0 && !r && li && (6 & o.shapeFlag ? (li[li.indexOf(e)] = o) : li.push(o)), (o.patchFlag |= -2), o;
        }
        if (((a = e), x(a) && "__vccOpts" in a && (e = e.__vccOpts), t)) {
            t = (function (e) {
                return e ? (gt(e) || mi in e ? h({}, e) : e) : null;
            })(t);
            let { class: e, style: n } = t;
            e && !_(e) && (t.class = J(e)), C(n) && (gt(n) && !g(n) && (n = h({}, n)), (t.style = W(n)));
        }
        var a;
        return yi(e, t, n, o, i, _(e) ? 1 : ((e) => e.__isSuspense)(e) ? 128 : ((e) => e.__isTeleport)(e) ? 64 : C(e) ? 4 : x(e) ? 2 : 0, r, !0);
    };
    function xi(e, t, n = !1) {
        const { props: o, ref: i, patchFlag: r, children: a } = e,
            l = t ? Ai(o || {}, t) : o;
        return {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: l,
            key: l && gi(l),
            ref: t && t.ref ? (n && i ? (g(i) ? i.concat(wi(t)) : [i, wi(t)]) : wi(t)) : i,
            scopeId: e.scopeId,
            slotScopeIds: e.slotScopeIds,
            children: a,
            target: e.target,
            targetAnchor: e.targetAnchor,
            staticCount: e.staticCount,
            shapeFlag: e.shapeFlag,
            patchFlag: t && e.type !== ni ? (-1 === r ? 16 : 16 | r) : r,
            dynamicProps: e.dynamicProps,
            dynamicChildren: e.dynamicChildren,
            appContext: e.appContext,
            dirs: e.dirs,
            transition: e.transition,
            component: e.component,
            suspense: e.suspense,
            ssContent: e.ssContent && xi(e.ssContent),
            ssFallback: e.ssFallback && xi(e.ssFallback),
            el: e.el,
            anchor: e.anchor,
            ctx: e.ctx,
            ce: e.ce,
        };
    }
    function _i(e = " ", t = 0) {
        return vi(oi, null, e, t);
    }
    function ki(e, t) {
        const n = vi(ri, null, e);
        return (n.staticCount = t), n;
    }
    function Ci(e = "", t = !1) {
        return t ? (si(), hi(ii, null, e)) : vi(ii, null, e);
    }
    function Si(e) {
        return null == e || "boolean" == typeof e ? vi(ii) : g(e) ? vi(ni, null, e.slice()) : "object" == typeof e ? Fi(e) : vi(oi, null, String(e));
    }
    function Fi(e) {
        return (null === e.el && -1 !== e.patchFlag) || e.memo ? e : xi(e);
    }
    function Di(e, t) {
        let n = 0;
        const { shapeFlag: o } = e;
        if (null == t) t = null;
        else if (g(t)) n = 16;
        else if ("object" == typeof t) {
            if (65 & o) {
                const n = t.default;
                return void (n && (n._c && (n._d = !1), Di(e, n()), n._c && (n._d = !0)));
            }
            {
                n = 32;
                const o = t._;
                o || mi in t ? 3 === o && cn && (1 === cn.slots._ ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024))) : (t._ctx = cn);
            }
        } else x(t) ? ((t = { default: t, _ctx: cn }), (n = 32)) : ((t = String(t)), 64 & o ? ((n = 16), (t = [_i(t)])) : (n = 8));
        (e.children = t), (e.shapeFlag |= n);
    }
    function Ai(...e) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const o = e[n];
            for (const e in o)
                if ("class" === e) t.class !== o.class && (t.class = J([t.class, o.class]));
                else if ("style" === e) t.style = W([t.style, o.style]);
                else if (p(e)) {
                    const n = t[e],
                        i = o[e];
                    !i || n === i || (g(n) && n.includes(i)) || (t[e] = n ? [].concat(n, i) : i);
                } else "" !== e && (t[e] = o[e]);
        }
        return t;
    }
    function Ti(e, t, n, o = null) {
        Mt(e, t, 7, [n, o]);
    }
    const Pi = Fo();
    let Mi = 0;
    let zi = null;
    const Ii = () => zi || cn;
    let Ri,
        Ei,
        qi = "__VUE_INSTANCE_SETTERS__";
    (Ei = Y()[qi]) || (Ei = Y()[qi] = []),
        Ei.push((e) => (zi = e)),
        (Ri = (e) => {
            Ei.length > 1 ? Ei.forEach((t) => t(e)) : Ei[0](e);
        });
    const Oi = (e) => {
            Ri(e), e.scope.on();
        },
        $i = () => {
            zi && zi.scope.off(), Ri(null);
        };
    function Ni(e) {
        return 4 & e.vnode.shapeFlag;
    }
    let ji,
        Bi,
        Ui = !1;
    function Li(e, t, n) {
        x(t) ? (e.type.__ssrInlineRender ? (e.ssrRender = t) : (e.render = t)) : C(t) && (__VUE_PROD_DEVTOOLS__ && (e.devtoolsRawSetupState = t), (e.setupState = At(t))), Vi(e, n);
    }
    function Vi(e, t, n) {
        const o = e.type;
        if (!e.render) {
            if (!t && ji && !o.render) {
                const t = o.template || wo(e).template;
                if (t) {
                    const { isCustomElement: n, compilerOptions: i } = e.appContext.config,
                        { delimiters: r, compilerOptions: a } = o,
                        l = h(h({ isCustomElement: n, delimiters: r }, i), a);
                    o.render = ji(t, l);
                }
            }
            (e.render = o.render || s), Bi && Bi(e);
        }
        __VUE_OPTIONS_API__ &&
            (Oi(e),
            ve(),
            (function (e) {
                const t = wo(e),
                    n = e.proxy,
                    o = e.ctx;
                (fo = !1), t.beforeCreate && mo(t.beforeCreate, e, "bc");
                const {
                    data: i,
                    computed: r,
                    methods: a,
                    watch: l,
                    provide: d,
                    inject: c,
                    created: p,
                    beforeMount: u,
                    mounted: h,
                    beforeUpdate: b,
                    updated: f,
                    activated: m,
                    deactivated: w,
                    beforeDestroy: y,
                    beforeUnmount: v,
                    destroyed: _,
                    unmounted: k,
                    render: S,
                    renderTracked: F,
                    renderTriggered: D,
                    errorCaptured: A,
                    serverPrefetch: T,
                    expose: P,
                    inheritAttrs: M,
                    components: z,
                    directives: I,
                    filters: R,
                } = t;
                if (
                    (c &&
                        (function (e, t) {
                            g(e) && (e = _o(e));
                            for (const n in e) {
                                const o = e[n];
                                let i;
                                (i = C(o) ? ("default" in o ? Po(o.from || n, o.default, !0) : Po(o.from || n)) : Po(o)),
                                    Ct(i) ? Object.defineProperty(t, n, { enumerable: !0, configurable: !0, get: () => i.value, set: (e) => (i.value = e) }) : (t[n] = i);
                            }
                        })(c, o),
                    a)
                )
                    for (const e in a) {
                        const t = a[e];
                        x(t) && (o[e] = t.bind(n));
                    }
                if (i) {
                    const t = i.call(n, n);
                    C(t) && (e.data = pt(t));
                }
                if (((fo = !0), r))
                    for (const e in r) {
                        const t = r[e],
                            i = x(t) ? t.bind(n, n) : x(t.get) ? t.get.bind(n, n) : s,
                            a = !x(t) && x(t.set) ? t.set.bind(n) : s,
                            l = Wi({ get: i, set: a });
                        Object.defineProperty(o, e, { enumerable: !0, configurable: !0, get: () => l.value, set: (e) => (l.value = e) });
                    }
                if (l) for (const e in l) go(l[e], o, n, e);
                if (d) {
                    const e = x(d) ? d.call(n) : d;
                    Reflect.ownKeys(e).forEach((t) => {
                        !(function (e, t) {
                            if (zi) {
                                let n = zi.provides;
                                const o = zi.parent && zi.parent.provides;
                                o === n && (n = zi.provides = Object.create(o)), (n[e] = t);
                            }
                        })(t, e[t]);
                    });
                }
                function E(e, t) {
                    g(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
                }
                if ((p && mo(p, e, "c"), E(Ln, u), E(Vn, h), E(Yn, b), E(Wn, f), E(On, m), E($n, w), E(Gn, A), E(Jn, F), E(Zn, D), E(Xn, v), E(Hn, k), E(Kn, T), g(P)))
                    if (P.length) {
                        const t = e.exposed || (e.exposed = {});
                        P.forEach((e) => {
                            Object.defineProperty(t, e, { get: () => n[e], set: (t) => (n[e] = t) });
                        });
                    } else e.exposed || (e.exposed = {});
                S && e.render === s && (e.render = S), null != M && (e.inheritAttrs = M), z && (e.components = z), I && (e.directives = I);
            })(e),
            xe(),
            $i());
    }
    function Yi(e) {
        if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(At(yt(e.exposed)), { get: (t, n) => (n in t ? t[n] : n in po ? po[n](e) : void 0), has: (e, t) => t in e || t in po }));
    }
    const Wi = (e, t) =>
        (function (e, t, n = !1) {
            let o, i;
            const r = x(e);
            return r ? ((o = e), (i = s)) : ((o = e.get), (i = e.set)), new Tt(o, i, r || !i, n);
        })(e, 0, Ui);
    function Xi(e, t, n) {
        const o = arguments.length;
        return 2 === o ? (C(t) && !g(t) ? (bi(t) ? vi(e, null, [t]) : vi(e, t)) : vi(e, null, t)) : (o > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : 3 === o && bi(n) && (n = [n]), vi(e, t, n));
    }
    const Hi = Symbol.for("v-scx"),
        Ki = () => Po(Hi),
        Zi = "3.3.4",
        Ji = "undefined" != typeof document ? document : null,
        Gi = Ji && Ji.createElement("template"),
        Qi = {
            insert: (e, t, n) => {
                t.insertBefore(e, n || null);
            },
            remove: (e) => {
                const t = e.parentNode;
                t && t.removeChild(e);
            },
            createElement: (e, t, n, o) => {
                const i = t ? Ji.createElementNS("http://www.w3.org/2000/svg", e) : Ji.createElement(e, n ? { is: n } : void 0);
                return "select" === e && o && null != o.multiple && i.setAttribute("multiple", o.multiple), i;
            },
            createText: (e) => Ji.createTextNode(e),
            createComment: (e) => Ji.createComment(e),
            setText: (e, t) => {
                e.nodeValue = t;
            },
            setElementText: (e, t) => {
                e.textContent = t;
            },
            parentNode: (e) => e.parentNode,
            nextSibling: (e) => e.nextSibling,
            querySelector: (e) => Ji.querySelector(e),
            setScopeId(e, t) {
                e.setAttribute(t, "");
            },
            insertStaticContent(e, t, n, o, i, r) {
                const a = n ? n.previousSibling : t.lastChild;
                if (i && (i === r || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== r && (i = i.nextSibling); );
                else {
                    Gi.innerHTML = o ? `<svg>${e}</svg>` : e;
                    const i = Gi.content;
                    if (o) {
                        const e = i.firstChild;
                        for (; e.firstChild; ) i.appendChild(e.firstChild);
                        i.removeChild(e);
                    }
                    t.insertBefore(i, n);
                }
                return [a ? a.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
            },
        },
        er = /\s*!important$/;
    function tr(e, t, n) {
        if (g(n)) n.forEach((n) => tr(e, t, n));
        else if ((null == n && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
        else {
            const o = (function (e, t) {
                const n = or[t];
                if (n) return n;
                let o = R(t);
                if ("filter" !== o && o in e) return (or[t] = o);
                o = O(o);
                for (let n = 0; n < nr.length; n++) {
                    const i = nr[n] + o;
                    if (i in e) return (or[t] = i);
                }
                return t;
            })(e, t);
            er.test(n) ? e.setProperty(q(o), n.replace(er, ""), "important") : (e[o] = n);
        }
    }
    const nr = ["Webkit", "Moz", "ms"],
        or = {},
        ir = "http://www.w3.org/1999/xlink";
    function rr(e, t, n, o) {
        e.addEventListener(t, n, o);
    }
    const ar = /(?:Once|Passive|Capture)$/;
    let lr = 0;
    const sr = Promise.resolve(),
        dr = () => lr || (sr.then(() => (lr = 0)), (lr = Date.now())),
        cr = /^on[a-z]/;
    "undefined" != typeof HTMLElement && HTMLElement;
    const pr = "transition",
        ur = "animation",
        hr = (e, { slots: t }) =>
            Xi(
                An,
                (function (e) {
                    const t = {};
                    for (const n in e) n in br || (t[n] = e[n]);
                    if (!1 === e.css) return t;
                    const {
                            name: n = "v",
                            type: o,
                            duration: i,
                            enterFromClass: r = `${n}-enter-from`,
                            enterActiveClass: a = `${n}-enter-active`,
                            enterToClass: l = `${n}-enter-to`,
                            appearFromClass: s = r,
                            appearActiveClass: d = a,
                            appearToClass: c = l,
                            leaveFromClass: p = `${n}-leave-from`,
                            leaveActiveClass: u = `${n}-leave-active`,
                            leaveToClass: b = `${n}-leave-to`,
                        } = e,
                        f = (function (e) {
                            if (null == e) return null;
                            if (C(e)) return [gr(e.enter), gr(e.leave)];
                            {
                                const t = gr(e);
                                return [t, t];
                            }
                        })(i),
                        m = f && f[0],
                        g = f && f[1],
                        { onBeforeEnter: w, onEnter: y, onEnterCancelled: v, onLeave: x, onLeaveCancelled: _, onBeforeAppear: k = w, onAppear: S = y, onAppearCancelled: F = v } = t,
                        D = (e, t, n) => {
                            yr(e, t ? c : l), yr(e, t ? d : a), n && n();
                        },
                        A = (e, t) => {
                            (e._isLeaving = !1), yr(e, p), yr(e, b), yr(e, u), t && t();
                        },
                        T = (e) => (t, n) => {
                            const i = e ? S : y,
                                a = () => D(t, e, n);
                            fr(i, [t, a]),
                                vr(() => {
                                    yr(t, e ? s : r), wr(t, e ? c : l), mr(i) || _r(t, o, m, a);
                                });
                        };
                    return h(t, {
                        onBeforeEnter(e) {
                            fr(w, [e]), wr(e, r), wr(e, a);
                        },
                        onBeforeAppear(e) {
                            fr(k, [e]), wr(e, s), wr(e, d);
                        },
                        onEnter: T(!1),
                        onAppear: T(!0),
                        onLeave(e, t) {
                            e._isLeaving = !0;
                            const n = () => A(e, t);
                            wr(e, p),
                                document.body.offsetHeight,
                                wr(e, u),
                                vr(() => {
                                    e._isLeaving && (yr(e, p), wr(e, b), mr(x) || _r(e, o, g, n));
                                }),
                                fr(x, [e, n]);
                        },
                        onEnterCancelled(e) {
                            D(e, !1), fr(v, [e]);
                        },
                        onAppearCancelled(e) {
                            D(e, !0), fr(F, [e]);
                        },
                        onLeaveCancelled(e) {
                            A(e), fr(_, [e]);
                        },
                    });
                })(e),
                t
            );
    hr.displayName = "Transition";
    const br = {
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
        fr =
            ((hr.props = h({}, Dn, br)),
            (e, t = []) => {
                g(e) ? e.forEach((e) => e(...t)) : e && e(...t);
            }),
        mr = (e) => !!e && (g(e) ? e.some((e) => e.length > 1) : e.length > 1);
    function gr(e) {
        return L(e);
    }
    function wr(e, t) {
        t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e._vtc || (e._vtc = new Set())).add(t);
    }
    function yr(e, t) {
        t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
        const { _vtc: n } = e;
        n && (n.delete(t), n.size || (e._vtc = void 0));
    }
    function vr(e) {
        requestAnimationFrame(() => {
            requestAnimationFrame(e);
        });
    }
    let xr = 0;
    function _r(e, t, n, o) {
        const i = (e._endId = ++xr),
            r = () => {
                i === e._endId && o();
            };
        if (n) return setTimeout(r, n);
        const { type: a, timeout: l, propCount: s } = (function (e, t) {
            const n = window.getComputedStyle(e),
                o = (e) => (n[e] || "").split(", "),
                i = o(`${pr}Delay`),
                r = o(`${pr}Duration`),
                a = kr(i, r),
                l = o(`${ur}Delay`),
                s = o(`${ur}Duration`),
                d = kr(l, s);
            let c = null,
                p = 0,
                u = 0;
            return (
                t === pr
                    ? a > 0 && ((c = pr), (p = a), (u = r.length))
                    : t === ur
                    ? d > 0 && ((c = ur), (p = d), (u = s.length))
                    : ((p = Math.max(a, d)), (c = p > 0 ? (a > d ? pr : ur) : null), (u = c ? (c === pr ? r.length : s.length) : 0)),
                { type: c, timeout: p, propCount: u, hasTransform: c === pr && /\b(transform|all)(,|$)/.test(o(`${pr}Property`).toString()) }
            );
        })(e, t);
        if (!a) return o();
        const d = a + "end";
        let c = 0;
        const p = () => {
                e.removeEventListener(d, u), r();
            },
            u = (t) => {
                t.target === e && ++c >= s && p();
            };
        setTimeout(() => {
            c < s && p();
        }, l + 1),
            e.addEventListener(d, u);
    }
    function kr(e, t) {
        for (; e.length < t.length; ) e = e.concat(e);
        return Math.max(...t.map((t, n) => Cr(t) + Cr(e[n])));
    }
    function Cr(e) {
        return 1e3 * Number(e.slice(0, -1).replace(",", "."));
    }
    const Sr = (e) => {
        const t = e.props["onUpdate:modelValue"] || !1;
        return g(t) ? (e) => j(t, e) : t;
    };
    function Fr(e) {
        e.target.composing = !0;
    }
    function Dr(e) {
        const t = e.target;
        t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
    }
    const Ar = {
            created(e, { modifiers: { lazy: t, trim: n, number: o } }, i) {
                e._assign = Sr(i);
                const r = o || (i.props && "number" === i.props.type);
                rr(e, t ? "change" : "input", (t) => {
                    if (t.target.composing) return;
                    let o = e.value;
                    n && (o = o.trim()), r && (o = U(o)), e._assign(o);
                }),
                    n &&
                        rr(e, "change", () => {
                            e.value = e.value.trim();
                        }),
                    t || (rr(e, "compositionstart", Fr), rr(e, "compositionend", Dr), rr(e, "change", Dr));
            },
            mounted(e, { value: t }) {
                e.value = null == t ? "" : t;
            },
            beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: o, number: i } }, r) {
                if (((e._assign = Sr(r)), e.composing)) return;
                if (document.activeElement === e && "range" !== e.type) {
                    if (n) return;
                    if (o && e.value.trim() === t) return;
                    if ((i || "number" === e.type) && U(e.value) === t) return;
                }
                const a = null == t ? "" : t;
                e.value !== a && (e.value = a);
            },
        },
        Tr = {
            deep: !0,
            created(e, t, n) {
                (e._assign = Sr(n)),
                    rr(e, "change", () => {
                        const t = e._modelValue,
                            n = Rr(e),
                            o = e.checked,
                            i = e._assign;
                        if (g(t)) {
                            const e = te(t, n),
                                r = -1 !== e;
                            if (o && !r) i(t.concat(n));
                            else if (!o && r) {
                                const n = [...t];
                                n.splice(e, 1), i(n);
                            }
                        } else if (y(t)) {
                            const e = new Set(t);
                            o ? e.add(n) : e.delete(n), i(e);
                        } else i(Er(e, o));
                    });
            },
            mounted: Pr,
            beforeUpdate(e, t, n) {
                (e._assign = Sr(n)), Pr(e, t, n);
            },
        };
    function Pr(e, { value: t, oldValue: n }, o) {
        (e._modelValue = t), g(t) ? (e.checked = te(t, o.props.value) > -1) : y(t) ? (e.checked = t.has(o.props.value)) : t !== n && (e.checked = ee(t, Er(e, !0)));
    }
    const Mr = {
            created(e, { value: t }, n) {
                (e.checked = ee(t, n.props.value)),
                    (e._assign = Sr(n)),
                    rr(e, "change", () => {
                        e._assign(Rr(e));
                    });
            },
            beforeUpdate(e, { value: t, oldValue: n }, o) {
                (e._assign = Sr(o)), t !== n && (e.checked = ee(t, o.props.value));
            },
        },
        zr = {
            deep: !0,
            created(e, { value: t, modifiers: { number: n } }, o) {
                const i = y(t);
                rr(e, "change", () => {
                    const t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => (n ? U(Rr(e)) : Rr(e)));
                    e._assign(e.multiple ? (i ? new Set(t) : t) : t[0]);
                }),
                    (e._assign = Sr(o));
            },
            mounted(e, { value: t }) {
                Ir(e, t);
            },
            beforeUpdate(e, t, n) {
                e._assign = Sr(n);
            },
            updated(e, { value: t }) {
                Ir(e, t);
            },
        };
    function Ir(e, t) {
        const n = e.multiple;
        if (!n || g(t) || y(t)) {
            for (let o = 0, i = e.options.length; o < i; o++) {
                const i = e.options[o],
                    r = Rr(i);
                if (n) g(t) ? (i.selected = te(t, r) > -1) : (i.selected = t.has(r));
                else if (ee(Rr(i), t)) return void (e.selectedIndex !== o && (e.selectedIndex = o));
            }
            n || -1 === e.selectedIndex || (e.selectedIndex = -1);
        }
    }
    function Rr(e) {
        return "_value" in e ? e._value : e.value;
    }
    function Er(e, t) {
        const n = t ? "_trueValue" : "_falseValue";
        return n in e ? e[n] : t;
    }
    const qr = {
        created(e, t, n) {
            Or(e, t, n, null, "created");
        },
        mounted(e, t, n) {
            Or(e, t, n, null, "mounted");
        },
        beforeUpdate(e, t, n, o) {
            Or(e, t, n, o, "beforeUpdate");
        },
        updated(e, t, n, o) {
            Or(e, t, n, o, "updated");
        },
    };
    function Or(e, t, n, o, i) {
        const r = (function (e, t) {
            switch (e) {
                case "SELECT":
                    return zr;
                case "TEXTAREA":
                    return Ar;
                default:
                    switch (t) {
                        case "checkbox":
                            return Tr;
                        case "radio":
                            return Mr;
                        default:
                            return Ar;
                    }
            }
        })(e.tagName, n.props && n.props.type)[i];
        r && r(e, t, n, o);
    }
    const $r = ["ctrl", "shift", "alt", "meta"],
        Nr = {
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
            exact: (e, t) => $r.some((n) => e[`${n}Key`] && !t.includes(n)),
        },
        jr = (e, t) => (n, ...o) => {
            for (let e = 0; e < t.length; e++) {
                const o = Nr[t[e]];
                if (o && o(n, t)) return;
            }
            return e(n, ...o);
        },
        Br = { esc: "escape", space: " ", up: "arrow-up", left: "arrow-left", right: "arrow-right", down: "arrow-down", delete: "backspace" },
        Ur = (e, t) => (n) => {
            if (!("key" in n)) return;
            const o = q(n.key);
            return t.some((e) => e === o || Br[e] === o) ? e(n) : void 0;
        },
        Lr = {
            beforeMount(e, { value: t }, { transition: n }) {
                (e._vod = "none" === e.style.display ? "" : e.style.display), n && t ? n.beforeEnter(e) : Vr(e, t);
            },
            mounted(e, { value: t }, { transition: n }) {
                n && t && n.enter(e);
            },
            updated(e, { value: t, oldValue: n }, { transition: o }) {
                !t != !n &&
                    (o
                        ? t
                            ? (o.beforeEnter(e), Vr(e, !0), o.enter(e))
                            : o.leave(e, () => {
                                  Vr(e, !1);
                              })
                        : Vr(e, t));
            },
            beforeUnmount(e, { value: t }) {
                Vr(e, t);
            },
        };
    function Vr(e, t) {
        e.style.display = t ? e._vod : "none";
    }
    const Yr = h(
        {
            patchProp: (e, t, n, o, i = !1, r, a, l, s) => {
                "class" === t
                    ? (function (e, t, n) {
                          const o = e._vtc;
                          o && (t = (t ? [t, ...o] : [...o]).join(" ")), null == t ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : (e.className = t);
                      })(e, o, i)
                    : "style" === t
                    ? (function (e, t, n) {
                          const o = e.style,
                              i = _(n);
                          if (n && !i) {
                              if (t && !_(t)) for (const e in t) null == n[e] && tr(o, e, "");
                              for (const e in n) tr(o, e, n[e]);
                          } else {
                              const r = o.display;
                              i ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = r);
                          }
                      })(e, n, o)
                    : p(t)
                    ? u(t) ||
                      (function (e, t, n, o, i = null) {
                          const r = e._vei || (e._vei = {}),
                              a = r[t];
                          if (o && a) a.value = o;
                          else {
                              const [n, l] = (function (e) {
                                  let t;
                                  if (ar.test(e)) {
                                      let n;
                                      for (t = {}; (n = e.match(ar)); ) (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0);
                                  }
                                  return [":" === e[2] ? e.slice(3) : q(e.slice(2)), t];
                              })(t);
                              if (o) {
                                  const a = (r[t] = (function (e, t) {
                                      const n = (e) => {
                                          if (e._vts) {
                                              if (e._vts <= n.attached) return;
                                          } else e._vts = Date.now();
                                          Mt(
                                              (function (e, t) {
                                                  if (g(t)) {
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
                                      return (n.value = e), (n.attached = dr()), n;
                                  })(o, i));
                                  rr(e, n, a, l);
                              } else
                                  a &&
                                      ((function (e, t, n, o) {
                                          e.removeEventListener(t, n, o);
                                      })(e, n, a, l),
                                      (r[t] = void 0));
                          }
                      })(e, t, 0, o, a)
                    : (
                          "." === t[0]
                              ? ((t = t.slice(1)), 1)
                              : "^" === t[0]
                              ? ((t = t.slice(1)), 0)
                              : (function (e, t, n, o) {
                                    return o
                                        ? "innerHTML" === t || "textContent" === t || !!(t in e && cr.test(t) && x(n))
                                        : "spellcheck" !== t &&
                                              "draggable" !== t &&
                                              "translate" !== t &&
                                              "form" !== t &&
                                              ("list" !== t || "INPUT" !== e.tagName) &&
                                              ("type" !== t || "TEXTAREA" !== e.tagName) &&
                                              (!cr.test(t) || !_(n)) &&
                                              t in e;
                                })(e, t, o, i)
                      )
                    ? (function (e, t, n, o, i, r, a) {
                          if ("innerHTML" === t || "textContent" === t) return o && a(o, i, r), void (e[t] = null == n ? "" : n);
                          const l = e.tagName;
                          if ("value" === t && "PROGRESS" !== l && !l.includes("-")) {
                              e._value = n;
                              const o = null == n ? "" : n;
                              return ("OPTION" === l ? e.getAttribute("value") : e.value) !== o && (e.value = o), void (null == n && e.removeAttribute(t));
                          }
                          let s = !1;
                          if ("" === n || null == n) {
                              const o = typeof e[t];
                              "boolean" === o ? (n = Q(n)) : null == n && "string" === o ? ((n = ""), (s = !0)) : "number" === o && ((n = 0), (s = !0));
                          }
                          try {
                              e[t] = n;
                          } catch (e) {}
                          s && e.removeAttribute(t);
                      })(e, t, o, r, a, l, s)
                    : ("true-value" === t ? (e._trueValue = o) : "false-value" === t && (e._falseValue = o),
                      (function (e, t, n, o) {
                          if (o && t.startsWith("xlink:")) null == n ? e.removeAttributeNS(ir, t.slice(6, t.length)) : e.setAttributeNS(ir, t, n);
                          else {
                              const o = G(t);
                              null == n || (o && !Q(n)) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
                          }
                      })(e, t, o, i));
            },
        },
        Qi
    );
    let Wr;
    const Xr = { class: "h-full" },
        Hr = { key: 1, class: "" },
        Kr = ["href"],
        Zr = { key: 2, class: "text-center p-8 h-full flex items-center justify-center" },
        Jr = { key: 3, class: "h-full" },
        Gr = ["href"],
        Qr = { class: "hidden md:inline" },
        ea = { class: "hidden md:inline" },
        ta = ["href"],
        na = { class: "hidden md:inline" },
        oa = { class: "hidden md:inline" },
        ia = { style: { "max-width": "1600px" }, class: "mx-auto pl-3 md:pl-4 h-full" },
        ra = { key: 0, class: "top-1.5 sticky h-0 z-20 max-w-2xl mx-auto" },
        aa = { class: "alert border-base-content/30 py-2 px-2.5" },
        la = { class: "flex items-center space-x-3" },
        sa = { key: 0, href: "/" },
        da = { class: "space-x-3 flex items-center flex-shrink-0" },
        ca = ["href", "target", "data-turbo-frame"],
        pa = { class: "hidden md:inline" },
        ua = ["href"],
        ha = { class: "hidden md:inline" },
        ba = { key: 2, class: "flex" },
        fa = { class: "hidden md:inline" },
        ma = { class: "dropdown dropdown-end" },
        ga = { tabindex: "0", class: "base-button !rounded-l-none !pl-1 !pr-2 !border-l-neutral-500" },
        wa = { class: "text-sm align-text-top" },
        ya = { tabindex: "0", class: "dropdown-content p-2 mt-2 shadow menu text-base bg-base-100 rounded-box text-right" },
        va = ["href"],
        xa = { class: "whitespace-nowrap" },
        _a = ["href"],
        ka = { class: "whitespace-nowrap" },
        Ca = ["href"],
        Sa = { class: "hidden md:inline" },
        Fa = { id: "pages_container", class: "w-full overflow-y-hidden md:overflow-y-auto overflow-x-hidden mt-0.5 pt-0.5" },
        Da = { ref: "documents", class: "pr-3.5 pl-0.5" },
        Aa = { key: 0, class: "pb-4 space-y-2" },
        Ta = { class: "bg-base-200 rounded-lg p-5 text-center space-y-4" },
        Pa = { class: "sticky bottom-0" },
        Ma = yi("div", { id: "docuseal_modal_container" }, null, -1),
        za = ["for"],
        Ia = { key: 2 },
        Ra = { key: 3 },
        Ea = { key: 4 },
        qa = { ref: "form", class: "hidden" },
        Oa = ["id", "accept"];
    var $a = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" },
        Na = Object.defineProperty,
        ja = Object.defineProperties,
        Ba = Object.getOwnPropertyDescriptors,
        Ua = Object.getOwnPropertySymbols,
        La = Object.prototype.hasOwnProperty,
        Va = Object.prototype.propertyIsEnumerable,
        Ya = (e, t, n) => (t in e ? Na(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)),
        Wa = (e, t) => {
            for (var n in t || (t = {})) La.call(t, n) && Ya(e, n, t[n]);
            if (Ua) for (var n of Ua(t)) Va.call(t, n) && Ya(e, n, t[n]);
            return e;
        },
        Xa = (e, t) => ja(e, Ba(t));
    const Ha = (e, t, n) => (t, { attrs: o, slots: i }) => {
        var r = t,
            { size: a, color: l, strokeWidth: s } = r,
            d = ((e, t) => {
                var n = {};
                for (var o in e) La.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                if (null != e && Ua) for (var o of Ua(e)) t.indexOf(o) < 0 && Va.call(e, o) && (n[o] = e[o]);
                return n;
            })(r, ["size", "color", "strokeWidth"]);
        return Xi(
            "svg",
            Wa(
                Xa(Wa(Xa(Wa({}, $a), { width: a || $a.width, height: a || $a.height, stroke: l || $a.stroke, "stroke-width": s || $a["stroke-width"] }), o), {
                    class: ["tabler-icon", `tabler-icon-${e}`, (null == o ? void 0 : o.class) || ""],
                }),
                d
            ),
            [...n.map((e) => Xi(...e)), ...(i.default ? [i.default()] : [])]
        );
    };
    var Ka = Ha("upload", 0, [
            ["path", { d: "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2", key: "svg-0" }],
            ["path", { d: "M7 9l5 -5l5 5", key: "svg-1" }],
            ["path", { d: "M12 4l0 12", key: "svg-2" }],
        ]),
        Za = Ha("inner-shadow-top", 0, [
            ["path", { d: "M5.636 5.636a9 9 0 1 0 12.728 12.728a9 9 0 0 0 -12.728 -12.728z", key: "svg-0" }],
            ["path", { d: "M16.243 7.757a6 6 0 0 0 -8.486 0", key: "svg-1" }],
        ]);
    const Ja = {
        name: "DocumentsUpload",
        components: { IconUpload: Ka, IconInnerShadowTop: Za },
        inject: ["baseFetch", "t"],
        props: { templateId: { type: [Number, String], required: !0 }, acceptFileTypes: { type: String, required: !1, default: "image/*, application/pdf" } },
        emits: ["success"],
        data: () => ({ isLoading: !1, isProcessing: !1 }),
        computed: { inputId: () => "el" + Math.random().toString(32).split(".")[1] },
        methods: {
            async upload() {
                (this.isLoading = !0),
                    this.baseFetch(`/templates/${this.templateId}/documents`, { method: "POST", body: new FormData(this.$refs.form) })
                        .then((e) => {
                            e.ok
                                ? e.json().then((e) => {
                                      this.$emit("success", e), (this.$refs.input.value = "");
                                  })
                                : 422 === e.status &&
                                  e.json().then((e) => {
                                      if ("pdf_encrypted" === e.status) {
                                          const e = new FormData(this.$refs.form);
                                          e.append("password", prompt(this.t("enter_pdf_password"))),
                                              this.baseFetch(`/templates/${this.templateId}/documents`, { method: "POST", body: e }).then(async (e) => {
                                                  e.ok ? (this.$emit("success", await e.json()), (this.$refs.input.value = "")) : alert(this.t("wrong_password"));
                                              });
                                      }
                                  });
                        })
                        .finally(() => {
                            this.isLoading = !1;
                        });
            },
        },
    };
    var Ga = n(262);
    const Qa = (0, Ga.A)(Ja, [
            [
                "render",
                function (e, t, n, o, i, r) {
                    const a = eo("IconInnerShadowTop"),
                        l = eo("IconUpload");
                    return (
                        si(),
                        ui("div", null, [
                            yi(
                                "label",
                                { id: "add_document_button", for: r.inputId, class: J(["btn btn-outline w-full", { "btn-disabled": i.isLoading || i.isProcessing }]) },
                                [
                                    i.isLoading || i.isProcessing ? (si(), hi(a, { key: 0, width: "20", class: "animate-spin" })) : (si(), hi(l, { key: 1, width: "20" })),
                                    i.isLoading ? (si(), ui("span", Ia, ne(r.t("uploading_")), 1)) : i.isProcessing ? (si(), ui("span", Ra, ne(r.t("processing_")), 1)) : (si(), ui("span", Ea, ne(r.t("add_document")), 1)),
                                ],
                                10,
                                za
                            ),
                            yi(
                                "form",
                                qa,
                                [yi("input", { id: r.inputId, ref: "input", name: "files[]", type: "file", accept: n.acceptFileTypes, multiple: "", onChange: t[0] || (t[0] = (...e) => r.upload && r.upload(...e)) }, null, 40, Oa)],
                                512
                            ),
                        ])
                    );
                },
            ],
        ]),
        el = ["for"],
        tl = { class: "absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center" },
        nl = { class: "flex flex-col items-center" },
        ol = { key: 2, class: "font-medium text-lg mb-1" },
        il = { class: "text-sm" },
        rl = { class: "font-medium" },
        al = { ref: "form", class: "hidden" },
        ll = ["id", "accept"],
        sl = {
            name: "FileDropzone",
            components: {
                IconCloudUpload: Ha("cloud-upload", 0, [
                    ["path", { d: "M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1", key: "svg-0" }],
                    ["path", { d: "M9 15l3 -3l3 3", key: "svg-1" }],
                    ["path", { d: "M12 12l0 9", key: "svg-2" }],
                ]),
                IconInnerShadowTop: Za,
            },
            inject: ["baseFetch", "t"],
            props: { templateId: { type: [Number, String], required: !0 }, acceptFileTypes: { type: String, required: !1, default: "image/*, application/pdf" } },
            emits: ["success"],
            data: () => ({ isLoading: !1, isProcessing: !1 }),
            computed: {
                inputId: () => "el" + Math.random().toString(32).split(".")[1],
                message() {
                    return this.isLoading ? this.t("uploading") : this.isProcessing ? this.t("processing_") : "image/*, application/pdf" === this.acceptFileTypes ? this.t("add_pdf_documents_or_images") : this.t("add_documents_or_images");
                },
            },
            methods: {
                upload: Qa.methods.upload,
                onDropFiles(e) {
                    "image/*, application/pdf" !== this.acceptFileTypes || [...e.dataTransfer.files].every((e) => e.type.match(/(?:image\/)|(?:application\/pdf)/))
                        ? ((this.$refs.input.files = e.dataTransfer.files), this.upload())
                        : alert(this.t("only_pdf_and_images_are_supported"));
                },
            },
        },
        dl = (0, Ga.A)(sl, [
            [
                "render",
                function (e, t, n, o, i, r) {
                    const a = eo("IconInnerShadowTop"),
                        l = eo("IconCloudUpload");
                    return (
                        si(),
                        ui(
                            "div",
                            { class: "flex h-60 w-full", onDragover: t[1] || (t[1] = jr(() => {}, ["prevent"])), onDrop: t[2] || (t[2] = jr((...e) => r.onDropFiles && r.onDropFiles(...e), ["prevent"])) },
                            [
                                yi(
                                    "label",
                                    {
                                        id: "document_dropzone",
                                        class: J(["w-full relative hover:bg-base-200/30 rounded-md border border-2 border-base-content/10 border-dashed", { "opacity-50": i.isLoading || i.isProcessing }]),
                                        for: r.inputId,
                                    },
                                    [
                                        yi("div", tl, [
                                            yi("div", nl, [
                                                i.isLoading || i.isProcessing ? (si(), hi(a, { key: 0, class: "animate-spin", width: 40, height: 40 })) : (si(), hi(l, { key: 1, width: 40, height: 40 })),
                                                r.message ? (si(), ui("div", ol, ne(r.message), 1)) : Ci("", !0),
                                                yi("div", il, [yi("span", rl, ne(r.t("click_to_upload")), 1), _i(" " + ne(r.t("or_drag_and_drop_files")), 1)]),
                                            ]),
                                        ]),
                                        yi(
                                            "form",
                                            al,
                                            [
                                                yi(
                                                    "input",
                                                    { id: r.inputId, ref: "input", type: "file", name: "files[]", accept: n.acceptFileTypes, multiple: "", onChange: t[0] || (t[0] = (...e) => r.upload && r.upload(...e)) },
                                                    null,
                                                    40,
                                                    ll
                                                ),
                                            ],
                                            512
                                        ),
                                    ],
                                    10,
                                    el
                                ),
                            ],
                            32
                        )
                    );
                },
            ],
        ]),
        cl = { key: 0 },
        pl = yi("hr", { class: "mb-2" }, null, -1),
        ul = ["placeholder"],
        hl = yi("hr", { class: "mb-2" }, null, -1),
        bl = { key: 0, class: "top-0 bottom-0 text-center absolute flex items-center justify-center w-full flex-col" },
        fl = ["onDragstart"],
        ml = { class: "flex items-center justify-between relative cursor-grab" },
        gl = { class: "flex items-center p-1 space-x-1" },
        wl = { class: "block pl-0.5" },
        yl = ["data-tip"],
        vl = { key: 1, class: "grid grid-cols-3 gap-1 pb-2" },
        xl = ["onDragstart", "onClick"],
        _l = { class: "flex items-center flex-col px-2 py-2" },
        kl = { class: "text-xs mt-1" },
        Cl = ["data-tip"],
        Sl = { class: "w-0 absolute left-0" },
        Fl = { class: "flex items-center flex-col px-2 py-2" },
        Dl = { class: "text-xs mt-1" },
        Al = { key: 2, class: "text-xs p-2 border border-base-200 rounded" },
        Tl = { class: "list-disc list-outside ml-3" },
        Pl = { class: "list-field group mb-2" },
        Ml = { class: "flex items-center justify-between relative group/contenteditable-container" },
        zl = { class: "flex items-center p-1 space-x-1" },
        Il = { key: 0, class: "flex items-center relative" },
        Rl = ["id"],
        El = ["for"],
        ql = { key: 1, class: "flex items-center space-x-1" },
        Ol = ["title"],
        $l = ["title"],
        Nl = ["title"],
        jl = ["title"],
        Bl = ["title"],
        Ul = { class: "text-sm w-3.5" },
        Ll = { key: 0, class: "items-center flex w-full" },
        Vl = ["onUpdate:modelValue", "placeholder"],
        Yl = ["title", "onClick"],
        Wl = ["onUpdate:modelValue", "placeholder", "readonly", "onFocus"],
        Xl = ["onClick"],
        Hl = { key: 0, class: "pb-1" },
        Kl = ["contenteditable"],
        Zl = {
            name: "ContenteditableField",
            components: {
                IconPencil: Ha("pencil", 0, [
                    ["path", { d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4", key: "svg-0" }],
                    ["path", { d: "M13.5 6.5l4 4", key: "svg-1" }],
                ]),
            },
            inject: ["t"],
            props: {
                modelValue: { type: String, required: !1, default: "" },
                iconInline: { type: Boolean, required: !1, default: !1 },
                iconWidth: { type: Number, required: !1, default: 30 },
                withRequired: { type: Boolean, required: !1, default: !1 },
                selectOnEditClick: { type: Boolean, required: !1, default: !1 },
                editable: { type: Boolean, required: !1, default: !0 },
                iconStrokeWidth: { type: Number, required: !1, default: 2 },
            },
            emits: ["update:model-value", "focus", "blur"],
            data: () => ({ value: "" }),
            watch: {
                modelValue: {
                    handler(e) {
                        this.value = e;
                    },
                    immediate: !0,
                },
            },
            methods: {
                onPaste(e) {
                    const t = (e.clipboardData || window.clipboardData).getData("text/plain"),
                        n = this.$el.getRootNode().getSelection();
                    n.rangeCount && (n.deleteFromDocument(), n.getRangeAt(0).insertNode(document.createTextNode(t)), n.collapseToEnd());
                },
                selectContent() {
                    const e = this.$refs.contenteditable,
                        t = document.createRange();
                    t.selectNodeContents(e);
                    const n = window.getSelection();
                    n.removeAllRanges(), n.addRange(t);
                },
                onBlur(e) {
                    setTimeout(() => {
                        (this.value = this.$refs.contenteditable.innerText.trim() || this.modelValue), this.$emit("update:model-value", this.value), this.$emit("blur", e);
                    }, 1);
                },
                focusContenteditable() {
                    this.$refs.contenteditable.focus();
                },
                blurContenteditable() {
                    this.$refs.contenteditable.blur();
                },
            },
        },
        Jl = (0, Ga.A)(Zl, [
            [
                "render",
                function (e, t, n, o, i, r) {
                    const a = eo("IconPencil");
                    return (
                        si(),
                        ui(
                            "div",
                            { class: J(["group/contenteditable relative overflow-visible", { "flex items-center": !n.iconInline }]) },
                            [
                                yi(
                                    "span",
                                    {
                                        ref: "contenteditable",
                                        dir: "auto",
                                        contenteditable: n.editable,
                                        style: { "min-width": "2px" },
                                        class: J([n.iconInline ? "inline" : "block", "peer outline-none focus:block"]),
                                        onPaste: t[0] || (t[0] = jr((...e) => r.onPaste && r.onPaste(...e), ["prevent"])),
                                        onKeydown:
                                            t[1] ||
                                            (t[1] = Ur(
                                                jr((...e) => r.blurContenteditable && r.blurContenteditable(...e), ["prevent"]),
                                                ["enter"]
                                            )),
                                        onFocus: t[2] || (t[2] = (t) => e.$emit("focus", t)),
                                        onBlur: t[3] || (t[3] = (...e) => r.onBlur && r.onBlur(...e)),
                                    },
                                    ne(i.value),
                                    43,
                                    Kl
                                ),
                                n.withRequired
                                    ? (si(), ui("span", { key: 0, title: "Required", class: "text-red-500 peer-focus:hidden", onClick: t[4] || (t[4] = (...e) => r.focusContenteditable && r.focusContenteditable(...e)) }, " * "))
                                    : Ci("", !0),
                                vi(
                                    a,
                                    {
                                        class: J([
                                            "cursor-pointer flex-none opacity-0 group-hover/contenteditable-container:opacity-100 group-hover/contenteditable:opacity-100 align-middle peer-focus:hidden",
                                            { invisible: !n.editable, "ml-1": !n.withRequired, absolute: !n.iconInline, "inline align-bottom": n.iconInline },
                                        ]),
                                        style: W(n.iconInline ? {} : { right: -1.1 * n.iconWidth + "px" }),
                                        title: r.t("edit"),
                                        width: n.iconWidth,
                                        "stroke-width": n.iconStrokeWidth,
                                        onClick: t[5] || (t[5] = (e) => [r.focusContenteditable(), n.selectOnEditClick && r.selectContent()]),
                                    },
                                    null,
                                    8,
                                    ["style", "title", "class", "width", "stroke-width"]
                                ),
                            ],
                            2
                        )
                    );
                },
            ],
        ]),
        Gl = ["title"],
        Ql = { key: 0 },
        es = ["onClick"];
    var ts = Ha("heading", 0, [
            ["path", { d: "M7 12h10", key: "svg-0" }],
            ["path", { d: "M7 5v14", key: "svg-1" }],
            ["path", { d: "M17 5v14", key: "svg-2" }],
            ["path", { d: "M15 19h4", key: "svg-3" }],
            ["path", { d: "M15 5h4", key: "svg-4" }],
            ["path", { d: "M5 19h4", key: "svg-5" }],
            ["path", { d: "M5 5h4", key: "svg-6" }],
        ]),
        ns = Ha("text-size", 0, [
            ["path", { d: "M3 7v-2h13v2", key: "svg-0" }],
            ["path", { d: "M10 5v14", key: "svg-1" }],
            ["path", { d: "M12 19h-4", key: "svg-2" }],
            ["path", { d: "M15 13v-1h6v1", key: "svg-3" }],
            ["path", { d: "M18 12v7", key: "svg-4" }],
            ["path", { d: "M17 19h2", key: "svg-5" }],
        ]),
        os = Ha("writing-sign", 0, [
            ["path", { d: "M3 19c3.333 -2 5 -4 5 -6c0 -3 -1 -3 -2 -3s-2.032 1.085 -2 3c.034 2.048 1.658 2.877 2.5 4c1.5 2 2.5 2.5 3.5 1c.667 -1 1.167 -1.833 1.5 -2.5c1 2.333 2.333 3.5 4 3.5h2.5", key: "svg-0" }],
            ["path", { d: "M20 17v-12c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v12l2 2l2 -2z", key: "svg-1" }],
            ["path", { d: "M16 7h4", key: "svg-2" }],
        ]),
        is = Ha("letter-case-upper", 0, [
            ["path", { d: "M3 19v-10.5a3.5 3.5 0 0 1 7 0v10.5", key: "svg-0" }],
            ["path", { d: "M3 13h7", key: "svg-1" }],
            ["path", { d: "M14 19v-10.5a3.5 3.5 0 0 1 7 0v10.5", key: "svg-2" }],
            ["path", { d: "M14 13h7", key: "svg-3" }],
        ]),
        rs = Ha("calendar-event", 0, [
            ["path", { d: "M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }],
            ["path", { d: "M16 3l0 4", key: "svg-1" }],
            ["path", { d: "M8 3l0 4", key: "svg-2" }],
            ["path", { d: "M4 11l16 0", key: "svg-3" }],
            ["path", { d: "M8 15h2v2h-2z", key: "svg-4" }],
        ]),
        as = Ha("square-number-1", 0, [
            ["path", { d: "M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z", key: "svg-0" }],
            ["path", { d: "M10 10l2 -2v8", key: "svg-1" }],
        ]),
        ls = Ha("photo", 0, [
            ["path", { d: "M15 8h.01", key: "svg-0" }],
            ["path", { d: "M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z", key: "svg-1" }],
            ["path", { d: "M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5", key: "svg-2" }],
            ["path", { d: "M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3", key: "svg-3" }],
        ]),
        ss = Ha("checkbox", 0, [
            ["path", { d: "M9 11l3 3l8 -8", key: "svg-0" }],
            ["path", { d: "M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9", key: "svg-1" }],
        ]),
        ds = Ha("checks", 0, [
            ["path", { d: "M7 12l5 5l10 -10", key: "svg-0" }],
            ["path", { d: "M2 12l5 5m5 -5l5 -5", key: "svg-1" }],
        ]),
        cs = Ha("paperclip", 0, [["path", { d: "M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5", key: "svg-0" }]]),
        ps = Ha("circle-dot", 0, [
            ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
            ["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-1" }],
        ]),
        us = Ha("select", 0, [
            ["path", { d: "M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z", key: "svg-0" }],
            ["path", { d: "M9 11l3 3l3 -3", key: "svg-1" }],
        ]),
        hs = Ha("columns-3", 0, [["path", { d: "M3 3m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1zm6 -1v18m6 -18v18", key: "svg-0" }]]),
        bs = Ha("rubber-stamp", 0, [
            ["path", { d: "M21 17.85h-18c0 -4.05 1.421 -4.05 3.79 -4.05c5.21 0 1.21 -4.59 1.21 -6.8a4 4 0 1 1 8 0c0 2.21 -4 6.8 1.21 6.8c2.369 0 3.79 0 3.79 4.05z", key: "svg-0" }],
            ["path", { d: "M5 21h14", key: "svg-1" }],
        ]),
        fs = Ha("credit-card", 0, [
            ["path", { d: "M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z", key: "svg-0" }],
            ["path", { d: "M3 10l18 0", key: "svg-1" }],
            ["path", { d: "M7 15l.01 0", key: "svg-2" }],
            ["path", { d: "M11 15l2 0", key: "svg-3" }],
        ]),
        ms = Ha("phone-check", 0, [
            ["path", { d: "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2", key: "svg-0" }],
            ["path", { d: "M15 6l2 2l4 -4", key: "svg-1" }],
        ]);
    const gs = {
            name: "FiledTypeDropdown",
            inject: ["withPhone", "withPayment", "t", "fieldTypes"],
            props: {
                modelValue: { type: String, required: !0 },
                menuClasses: { type: String, required: !1, default: "mt-1.5 bg-base-100" },
                menuStyle: { type: Object, required: !1, default: () => ({}) },
                buttonClasses: { type: String, required: !1, default: "" },
                editable: { type: Boolean, required: !1, default: !0 },
                buttonWidth: { type: Number, required: !1, default: 18 },
            },
            emits: ["update:model-value"],
            data: () => ({ renderDropdown: !1 }),
            computed: {
                fieldNames() {
                    return {
                        heading: this.t("heading"),
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
                fieldLabels() {
                    return {
                        text: this.t("text_field"),
                        signature: this.t("signature_field"),
                        initials: this.t("initials_field"),
                        date: this.t("date_field"),
                        number: this.t("number_field"),
                        image: this.t("image_field"),
                        file: this.t("file_field"),
                        select: this.t("select_field"),
                        checkbox: this.t("checkbox_field"),
                        multiple: this.t("multiple_field"),
                        radio: this.t("radio_field"),
                        cells: this.t("cells_field"),
                        stamp: this.t("stamp_field"),
                        payment: this.t("payment_field"),
                        phone: this.t("phone_field"),
                    };
                },
                fieldIcons: () => ({ heading: ts, text: ns, signature: os, initials: is, date: rs, number: as, image: ls, checkbox: ss, multiple: ds, file: cs, radio: ps, select: us, cells: hs, stamp: bs, payment: fs, phone: ms }),
                fieldIconsSorted() {
                    return this.fieldTypes.length ? this.fieldTypes.reduce((e, t) => ((e[t] = this.fieldIcons[t]), e), {}) : Object.fromEntries(Object.entries(this.fieldIcons).filter(([e]) => "heading" !== e));
                },
            },
            methods: {
                closeDropdown() {
                    document.activeElement.blur();
                },
            },
        },
        ws = (0, Ga.A)(gs, [
            [
                "render",
                function (e, t, n, o, i, r) {
                    return (
                        si(),
                        ui(
                            "span",
                            { class: "dropdown", onMouseenter: t[1] || (t[1] = (e) => (i.renderDropdown = !0)), onTouchstart: t[2] || (t[2] = (e) => (i.renderDropdown = !0)) },
                            [
                                lo(e.$slots, "default", {}, () => [
                                    yi(
                                        "label",
                                        { tabindex: "0", title: r.fieldNames[n.modelValue], class: "cursor-pointer" },
                                        [(si(), hi(no(r.fieldIcons[n.modelValue]), { width: n.buttonWidth, class: J(n.buttonClasses), "stroke-width": 1.6 }, null, 8, ["width", "class"]))],
                                        8,
                                        Gl
                                    ),
                                ]),
                                n.editable && i.renderDropdown
                                    ? (si(),
                                      ui(
                                          "ul",
                                          {
                                              key: 0,
                                              tabindex: "0",
                                              class: J(["dropdown-content menu menu-xs p-2 shadow rounded-box w-52 z-10 mb-3", n.menuClasses]),
                                              style: W(n.menuStyle),
                                              onClick: t[0] || (t[0] = (...e) => r.closeDropdown && r.closeDropdown(...e)),
                                          },
                                          [
                                              (si(!0),
                                              ui(
                                                  ni,
                                                  null,
                                                  ro(
                                                      r.fieldIconsSorted,
                                                      (t, o) => (
                                                          si(),
                                                          ui(
                                                              ni,
                                                              { key: o },
                                                              [
                                                                  (0 !== r.fieldTypes.length && !r.fieldTypes.includes(o)) || (!r.withPhone && "phone" == o) || (!r.withPayment && "payment" == o)
                                                                      ? Ci("", !0)
                                                                      : (si(),
                                                                        ui("li", Ql, [
                                                                            yi(
                                                                                "a",
                                                                                { href: "#", class: J(["text-sm py-1 px-2", { active: o === n.modelValue }]), onClick: jr((t) => e.$emit("update:model-value", o), ["prevent"]) },
                                                                                [(si(), hi(no(t), { "stroke-width": 1.6, width: 20 })), _i(" " + ne(r.fieldNames[o]), 1)],
                                                                                10,
                                                                                es
                                                                            ),
                                                                        ])),
                                                              ],
                                                              64
                                                          )
                                                      )
                                                  ),
                                                  128
                                              )),
                                          ],
                                          6
                                      ))
                                    : Ci("", !0),
                            ],
                            32
                        )
                    );
                },
            ],
        ]),
        ys = ["title"],
        vs = ["placeholder"],
        xs = ["value"],
        _s = ["placeholder"],
        ks = ["placeholder"],
        Cs = { class: "flex items-center justify-center" },
        Ss = yi("span", { class: "h-2.5 border-l border-base-content mx-1" }, null, -1),
        Fs = { key: 0, class: "text-sm text-center" },
        Ds = { key: 1, "data-turbo": "false", action: "/auth/stripe_connect", "accept-charset": "UTF-8", target: "_blank", method: "post" },
        As = ["value"],
        Ts = ["value"],
        Ps = yi("input", { type: "hidden", name: "scope", value: "read_write", autocomplete: "off" }, null, -1),
        Ms = ["value"],
        zs = ["disabled"],
        Is = { key: 0, class: "flex items-center space-x-1" },
        Rs = yi("span", null, " Connect Stripe ", -1),
        Es = { key: 1, class: "flex items-center space-x-1" },
        qs = yi("span", null, " Connect Stripe ", -1),
        Os = { key: 2, class: "block link text-center mt-1", href: "https://www.docuseal.com/blog/accept-payments-and-request-signatures-with-ease", target: "_blank", "data-turbo": "false" },
        $s = { key: 2, class: "mb-1" },
        Ns = { class: "text-sm" },
        js = yi("hr", null, null, -1),
        Bs = { class: "text-sm" },
        Us = { class: "mt-1" },
        Ls = { class: "text-sm" };
    var Vs = Ha("settings", 0, [
            [
                "path",
                {
                    d:
                        "M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",
                    key: "svg-0",
                },
            ],
            ["path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0", key: "svg-1" }],
        ]),
        Ys = Ha("circle-check", 0, [
            ["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }],
            ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }],
        ]),
        Ws = Ha("route-alt-left", 0, [
            ["path", { d: "M8 3h-5v5", key: "svg-0" }],
            ["path", { d: "M16 3h5v5", key: "svg-1" }],
            ["path", { d: "M3 3l7.536 7.536a5 5 0 0 1 1.464 3.534v6.93", key: "svg-2" }],
            ["path", { d: "M18 6.01v-.01", key: "svg-3" }],
            ["path", { d: "M16 8.02v-.01", key: "svg-4" }],
            ["path", { d: "M14 10v.01", key: "svg-5" }],
        ]),
        Xs = Ha("info-circle", 0, [
            ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }],
            ["path", { d: "M12 9h.01", key: "svg-1" }],
            ["path", { d: "M11 12h1v4h1", key: "svg-2" }],
        ]),
        Hs = Ha("math-function", 0, [
            ["path", { d: "M3 19a2 2 0 0 0 2 2c2 0 2 -4 3 -9s1 -9 3 -9a2 2 0 0 1 2 2", key: "svg-0" }],
            ["path", { d: "M5 12h6", key: "svg-1" }],
            ["path", { d: "M15 12l6 6", key: "svg-2" }],
            ["path", { d: "M15 18l6 -6", key: "svg-3" }],
        ]),
        Ks = Ha("brand-stripe", 0, [
            [
                "path",
                {
                    d:
                        "M11.453 8.056c0 -.623 .518 -.979 1.442 -.979c1.69 0 3.41 .343 4.605 .923l.5 -4c-.948 -.449 -2.82 -1 -5.5 -1c-1.895 0 -3.373 .087 -4.5 1c-1.172 .956 -2 2.33 -2 4c0 3.03 1.958 4.906 5 6c1.961 .69 3 .743 3 1.5c0 .735 -.851 1.5 -2 1.5c-1.423 0 -3.963 -.609 -5.5 -1.5l-.5 4c1.321 .734 3.474 1.5 6 1.5c2 0 3.957 -.468 5.084 -1.36c1.263 -.979 1.916 -2.268 1.916 -4.14c0 -3.096 -1.915 -4.547 -5 -5.637c-1.646 -.605 -2.544 -1.07 -2.544 -1.807z",
                    key: "svg-0",
                },
            ],
        ]);
    const Zs = St(!1),
        Js = {
            name: "PaymentSettings",
            components: { IconSettings: Vs, IconCircleCheck: Ys, IconRouteAltLeft: Ws, IconInfoCircle: Xs, IconMathFunction: Hs, IconInnerShadowTop: Za, IconBrandStripe: Ks },
            inject: ["backgroundColor", "save", "currencies", "t", "isPaymentConnected"],
            props: { field: { type: Object, required: !0 } },
            emits: ["click-condition", "click-description", "click-formula"],
            data: () => ({ isLoading: !1 }),
            computed: {
                isConnected: () => Zs.value,
                isOauthSuccess: () => document.location.search?.includes("stripe_connect_success"),
                redirectUri: () => document.location.origin + "/auth/stripe_connect/callback",
                defaultCurrencies: () => ["USD", "EUR", "GBP", "CAD", "AUD"],
                currenciesList() {
                    return this.currencies.length ? this.currencies : this.defaultCurrencies;
                },
                authenticityToken: () => document.querySelector('meta[name="csrf-token"]')?.content,
                oauthState() {
                    const e = new URLSearchParams("");
                    return e.set("redir", document.location.href), e.toString();
                },
                defaultCurrency() {
                    const e = Intl.DateTimeFormat().resolvedOptions().timeZone;
                    return e.startsWith("Europe")
                        ? "EUR"
                        : e.includes("London") || e.includes("Belfast")
                        ? "GBP"
                        : e.includes("Vancouver") || e.includes("Toronto") || e.includes("Halifax") || e.includes("Edmonton")
                        ? "CAD"
                        : e.startsWith("Australia")
                        ? "AUD"
                        : "USD";
                },
            },
            created() {
                this.field.preferences ||= {};
            },
            mounted() {
                (this.field.preferences.currency ||= this.defaultCurrency), (Zs.value ||= this.isPaymentConnected), this.isConnected || this.checkStatus();
            },
            methods: {
                checkStatus() {
                    (this.isLoading = !0),
                        fetch("/api/stripe_connect")
                            .then(async (e) => {
                                const { status: t } = await e.json();
                                "connected" === t && (Zs.value = !0);
                            })
                            .finally(() => {
                                this.isLoading = !1;
                            });
                },
                closeDropdown() {
                    document.activeElement.blur();
                },
            },
        },
        Gs = (0, Ga.A)(Js, [
            [
                "render",
                function (e, t, n, o, i, r) {
                    const a = eo("IconSettings"),
                        l = eo("IconCircleCheck"),
                        s = eo("IconInnerShadowTop"),
                        d = eo("IconBrandStripe"),
                        c = eo("IconMathFunction"),
                        p = eo("IconInfoCircle"),
                        u = eo("IconRouteAltLeft");
                    return (
                        si(),
                        ui(
                            "span",
                            { class: J(["dropdown dropdown-end", { "dropdown-open": !(((n.field.preferences?.price || n.field.preferences?.formula) && r.isConnected) || i.isLoading) }]) },
                            [
                                yi("label", { tabindex: "0", title: r.t("settings"), class: "cursor-pointer text-transparent group-hover:text-base-content" }, [vi(a, { width: 18, "stroke-width": 1.6 })], 8, ys),
                                yi(
                                    "ul",
                                    {
                                        tabindex: "0",
                                        class: "mt-1.5 dropdown-content menu menu-xs p-2 shadow bg-base-100 rounded-box w-52 z-10",
                                        draggable: "true",
                                        onDragstart: t[15] || (t[15] = jr(() => {}, ["prevent", "stop"])),
                                        onClick: t[16] || (t[16] = (...e) => r.closeDropdown && r.closeDropdown(...e)),
                                    },
                                    [
                                        "price_id" in n.field.preferences
                                            ? Ci("", !0)
                                            : (si(),
                                              ui("div", { key: 0, class: "py-1.5 px-1 relative", onClick: t[2] || (t[2] = jr(() => {}, ["stop"])) }, [
                                                  Cn(
                                                      yi(
                                                          "select",
                                                          {
                                                              "onUpdate:modelValue": t[0] || (t[0] = (e) => (n.field.preferences.currency = e)),
                                                              placeholder: r.t("price"),
                                                              class: "select select-bordered select-xs font-normal w-full max-w-xs !h-7 !outline-0",
                                                              onChange: t[1] || (t[1] = (...e) => r.save && r.save(...e)),
                                                          },
                                                          [
                                                              (si(!0),
                                                              ui(
                                                                  ni,
                                                                  null,
                                                                  ro(r.currenciesList, (e) => (si(), ui("option", { key: e, value: e }, ne(e), 9, xs))),
                                                                  128
                                                              )),
                                                          ],
                                                          40,
                                                          vs
                                                      ),
                                                      [[zr, n.field.preferences.currency]]
                                                  ),
                                                  yi("label", { style: W([{ backgroundColor: r.backgroundColor }, { "font-size": "8px" }]), class: "absolute -top-1 left-2.5 px-1 h-4" }, ne(r.t("currency")), 5),
                                              ])),
                                        yi("div", { class: "py-1.5 px-1 relative", onClick: t[10] || (t[10] = jr(() => {}, ["stop"])) }, [
                                            n.field.preferences.formula
                                                ? (si(),
                                                  ui(
                                                      "input",
                                                      {
                                                          key: 0,
                                                          type: "number",
                                                          placeholder: r.t("price"),
                                                          disabled: "true",
                                                          class: "input input-bordered input-xs w-full max-w-xs h-7 !outline-0",
                                                          onBlur: t[3] || (t[3] = (...e) => r.save && r.save(...e)),
                                                      },
                                                      null,
                                                      40,
                                                      _s
                                                  ))
                                                : "price_id" in n.field.preferences
                                                ? Cn(
                                                      (si(),
                                                      ui(
                                                          "input",
                                                          {
                                                              key: 1,
                                                              "onUpdate:modelValue": t[4] || (t[4] = (e) => (n.field.preferences.price_id = e)),
                                                              placeholder: "Price ID: price_XXXXX",
                                                              class: "input input-bordered input-xs w-full max-w-xs h-7 !outline-0",
                                                              onBlur: t[5] || (t[5] = (...e) => r.save && r.save(...e)),
                                                          },
                                                          null,
                                                          544
                                                      )),
                                                      [[Ar, n.field.preferences.price_id]]
                                                  )
                                                : Cn(
                                                      (si(),
                                                      ui(
                                                          "input",
                                                          {
                                                              key: 2,
                                                              "onUpdate:modelValue": t[6] || (t[6] = (e) => (n.field.preferences.price = e)),
                                                              type: "number",
                                                              placeholder: r.t("price"),
                                                              class: "input input-bordered input-xs w-full max-w-xs h-7 !outline-0",
                                                              onBlur: t[7] || (t[7] = (...e) => r.save && r.save(...e)),
                                                          },
                                                          null,
                                                          40,
                                                          ks
                                                      )),
                                                      [[Ar, n.field.preferences.price]]
                                                  ),
                                            n.field.preferences.price && !n.field.preferences.formula
                                                ? (si(), ui("label", { key: 3, style: W([{ backgroundColor: r.backgroundColor }, { "font-size": "8px" }]), class: "absolute -top-1 left-2.5 px-1 h-4" }, ne(r.t("price")), 5))
                                                : Ci("", !0),
                                            yi("div", Cs, [
                                                yi(
                                                    "a",
                                                    {
                                                        href: "#",
                                                        class: J(["hover:underline", { underline: !("price_id" in n.field.preferences) }]),
                                                        style: { "font-size": "11px" },
                                                        onClick: t[8] || (t[8] = (e) => delete n.field.preferences.price_id),
                                                    },
                                                    ne(r.t("one_off")),
                                                    3
                                                ),
                                                Ss,
                                                yi(
                                                    "a",
                                                    {
                                                        href: "#",
                                                        class: J(["hover:underline", { underline: "price_id" in n.field.preferences }]),
                                                        style: { "font-size": "11px" },
                                                        onClick: t[9] || (t[9] = (e) => (n.field.preferences.price_id ??= "")),
                                                    },
                                                    ne(r.t("recurrent")),
                                                    3
                                                ),
                                            ]),
                                        ]),
                                        !r.isConnected || r.isOauthSuccess
                                            ? (si(),
                                              ui("div", { key: 1, class: "py-1.5 px-1 relative", onClick: t[11] || (t[11] = jr(() => {}, ["stop"])) }, [
                                                  r.isConnected && r.isOauthSuccess ? (si(), ui("div", Fs, [vi(l, { class: "inline text-green-600 w-4 h-4" }), _i(" Stripe Connected ")])) : Ci("", !0),
                                                  r.isConnected
                                                      ? Ci("", !0)
                                                      : (si(),
                                                        ui("form", Ds, [
                                                            yi("input", { type: "hidden", name: "state", value: r.oauthState, autocomplete: "off" }, null, 8, As),
                                                            yi("input", { type: "hidden", name: "redirect_uri", value: r.redirectUri, autocomplete: "off" }, null, 8, Ts),
                                                            Ps,
                                                            yi("input", { type: "hidden", name: "authenticity_token", value: r.authenticityToken, autocomplete: "off" }, null, 8, Ms),
                                                            yi(
                                                                "button",
                                                                { type: "submit", disabled: i.isLoading, class: "btn bg-[#7B73FF] hover:bg-[#0A2540] btn-sm text-white w-full" },
                                                                [i.isLoading ? (si(), ui("span", Is, [vi(s, { class: "w-4 h-4 animate-spin inline" }), Rs])) : (si(), ui("span", Es, [vi(d, { class: "w-4 h-4 inline" }), qs]))],
                                                                8,
                                                                zs
                                                            ),
                                                        ])),
                                                  r.isConnected ? Ci("", !0) : (si(), ui("a", Os, ne(r.t("learn_more")), 1)),
                                              ]))
                                            : Ci("", !0),
                                        "price_id" in n.field.preferences
                                            ? Ci("", !0)
                                            : (si(),
                                              ui("li", $s, [
                                                  yi("label", { class: "label-text cursor-pointer text-center w-full flex items-center", onClick: t[12] || (t[12] = (t) => e.$emit("click-formula")) }, [
                                                      vi(c, { width: "18" }),
                                                      yi("span", Ns, ne(r.t("formula")), 1),
                                                  ]),
                                              ])),
                                        js,
                                        yi("li", null, [
                                            yi("label", { class: "label-text cursor-pointer text-center w-full flex items-center", onClick: t[13] || (t[13] = (t) => e.$emit("click-description")) }, [
                                                vi(p, { width: "18" }),
                                                yi("span", Bs, ne(r.t("description")), 1),
                                            ]),
                                        ]),
                                        yi("li", Us, [
                                            yi("label", { class: "label-text cursor-pointer text-center w-full flex items-center", onClick: t[14] || (t[14] = (t) => e.$emit("click-condition")) }, [
                                                vi(u, { width: "18" }),
                                                yi("span", Ls, ne(r.t("condition")), 1),
                                            ]),
                                        ]),
                                    ],
                                    32
                                ),
                            ],
                            2
                        )
                    );
                },
            ],
        ]),
        Qs = ["placeholder"],
        ed = ["value", "selected"],
        td = ["selected", "value"],
        nd = ["placeholder"],
        od = ["selected"],
        id = ["value", "selected"],
        rd = ["placeholder", "type"],
        ad = ["selected"],
        ld = ["selected", "value"],
        sd = ["selected", "value"],
        dd = ["placeholder"],
        cd = ["placeholder"],
        pd = ["value"],
        ud = ["placeholder"],
        hd = ["selected"],
        bd = ["selected"],
        fd = ["selected"],
        md = { class: "cursor-pointer py-1.5" },
        gd = ["disabled"],
        wd = { class: "label-text" },
        yd = { class: "cursor-pointer py-1.5" },
        vd = ["checked"],
        xd = { class: "label-text" },
        _d = { class: "cursor-pointer py-1.5" },
        kd = { class: "label-text" },
        Cd = { class: "cursor-pointer py-1.5" },
        Sd = { class: "label-text" },
        Fd = { class: "cursor-pointer py-1.5" },
        Dd = { class: "label-text" },
        Ad = { key: 13, class: "pb-0.5 mt-0.5" },
        Td = { key: 14 },
        Pd = { class: "text-sm" },
        Md = { key: 15 },
        zd = { class: "text-sm" },
        Id = { key: 16 },
        Rd = { class: "text-sm" },
        Ed = yi("hr", { class: "pb-0.5 mt-0.5" }, null, -1),
        qd = ["onClick"],
        Od = { key: 0 },
        $d = { key: 18 };
    var Nd = Ha("shape", 0, [
            ["path", { d: "M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-0" }],
            ["path", { d: "M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-1" }],
            ["path", { d: "M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-2" }],
            ["path", { d: "M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-3" }],
            ["path", { d: "M5 7l0 10", key: "svg-4" }],
            ["path", { d: "M7 5l10 0", key: "svg-5" }],
            ["path", { d: "M7 19l10 0", key: "svg-6" }],
            ["path", { d: "M19 7l0 10", key: "svg-7" }],
        ]),
        jd = Ha("copy", 0, [
            ["path", { d: "M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z", key: "svg-0" }],
            ["path", { d: "M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1", key: "svg-1" }],
        ]),
        Bd = Ha("new-section", 0, [
            ["path", { d: "M9 12l6 0", key: "svg-0" }],
            ["path", { d: "M12 9l0 6", key: "svg-1" }],
            ["path", { d: "M4 6v-1a1 1 0 0 1 1 -1h1m5 0h2m5 0h1a1 1 0 0 1 1 1v1m0 5v2m0 5v1a1 1 0 0 1 -1 1h-1m-5 0h-2m-5 0h-1a1 1 0 0 1 -1 -1v-1m0 -5v-2m0 -5", key: "svg-2" }],
        ]),
        Ud = Ha("x", 0, [
            ["path", { d: "M18 6l-12 12", key: "svg-0" }],
            ["path", { d: "M6 6l12 12", key: "svg-1" }],
        ]);
    const Ld = {
            name: "FieldSettings",
            components: { IconShape: Nd, IconInfoCircle: Xs, IconMathFunction: Hs, IconRouteAltLeft: Ws, IconCopy: jd, IconNewSection: Bd, IconX: Ud },
            inject: ["template", "save", "t"],
            props: {
                field: { type: Object, required: !0 },
                backgroundColor: { type: String, required: !1, default: null },
                defaultField: { type: Object, required: !1, default: null },
                withRequired: { type: Boolean, required: !1, default: !0 },
                withAreas: { type: Boolean, required: !1, default: !0 },
                editable: { type: Boolean, required: !1, default: !0 },
            },
            emits: ["set-draw", "scroll-to", "click-formula", "click-description", "click-condition", "remove-area"],
            data: () => ({}),
            computed: {
                schemaAttachmentsIndexes() {
                    return (this.template.schema || []).reduce((e, t, n) => ((e[t.attachment_uuid] = n), e), {});
                },
                numberFormats: () => ["none", "comma", "dot", "space"],
                dateFormats() {
                    const e = ["MM/DD/YYYY", "DD/MM/YYYY", "YYYY-MM-DD", "DD-MM-YYYY", "DD.MM.YYYY", "MMM D, YYYY", "MMMM D, YYYY", "D MMM YYYY", "D MMMM YYYY"];
                    return (
                        (Intl.DateTimeFormat().resolvedOptions().timeZone?.includes("Seoul") || navigator.language?.startsWith("ko")) && e.push("YYYY년 MM월 DD일"),
                        this.field.preferences?.format && !e.includes(this.field.preferences.format) && e.unshift(this.field.preferences.format),
                        e
                    );
                },
                validations: () => ({
                    "^[0-9]{3}-[0-9]{2}-[0-9]{4}$": "ssn",
                    "^[0-9]{2}-[0-9]{7}$": "ein",
                    "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$": "email",
                    "^https?://.*": "url",
                    "^[0-9]{5}(?:-[0-9]{4})?$": "zip",
                    "^[0-9]+$": "numbers_only",
                    "^[a-zA-Z]+$": "letters_only",
                }),
                sortedAreas() {
                    return (this.field.areas || []).sort((e, t) => this.schemaAttachmentsIndexes[e.attachment_uuid] - this.schemaAttachmentsIndexes[t.attachment_uuid]);
                },
            },
            methods: {
                onChangeValidation(e) {
                    "custom" === e.target.value
                        ? ((this.field.validation = { pattern: "" }), this.$nextTick(() => this.$refs.validationCustom.focus()))
                        : e.target.value
                        ? ((this.field.validation ||= {}), (this.field.validation.pattern = e.target.value))
                        : delete this.field.validation,
                        this.save();
                },
                copyToAllPages(e) {
                    const t = JSON.stringify(e.areas[0]);
                    this.template.documents.forEach((n) => {
                        const o = n.metadata?.pdf?.number_of_pages || n.preview_images.length;
                        for (let i = 0; i <= o - 1; i++) e.areas.find((e) => e.attachment_uuid === n.uuid && e.page === i) || e.areas.push({ ...JSON.parse(t), attachment_uuid: n.uuid, page: i });
                    }),
                        this.$emit("scroll-to", this.field.areas[this.field.areas.length - 1]),
                        this.save();
                },
                formatNumber: (e, t) => ("comma" === t ? new Intl.NumberFormat("en-US").format(e) : "dot" === t ? new Intl.NumberFormat("de-DE").format(e) : "space" === t ? new Intl.NumberFormat("fr-FR").format(e) : e),
                formatDate(e, t) {
                    const n = new Intl.DateTimeFormat([], {
                        day: { D: "numeric", DD: "2-digit" }[t.match(/D+/)],
                        month: { M: "numeric", MM: "2-digit", MMM: "short", MMMM: "long" }[t.match(/M+/)],
                        year: { YYYY: "numeric", YY: "2-digit" }[t.match(/Y+/)],
                    }).formatToParts(e);
                    return t
                        .replace(/D+/, n.find((e) => "day" === e.type).value)
                        .replace(/M+/, n.find((e) => "month" === e.type).value)
                        .replace(/Y+/, n.find((e) => "year" === e.type).value);
                },
            },
        },
        Vd = (0, Ga.A)(Ld, [
            [
                "render",
                function (e, t, n, o, i, r) {
                    const a = eo("IconInfoCircle"),
                        l = eo("IconRouteAltLeft"),
                        s = eo("IconMathFunction"),
                        d = eo("IconShape"),
                        c = eo("IconX"),
                        p = eo("IconNewSection"),
                        u = eo("IconCopy");
                    return (
                        si(),
                        ui(
                            ni,
                            null,
                            [
                                "number" === n.field.type
                                    ? (si(),
                                      ui("div", { key: 0, class: "py-1.5 px-1 relative", onClick: t[1] || (t[1] = jr(() => {}, ["stop"])) }, [
                                          yi(
                                              "select",
                                              {
                                                  placeholder: r.t("format"),
                                                  class: "select select-bordered select-xs font-normal w-full max-w-xs !h-7 !outline-0 bg-transparent",
                                                  onChange: t[0] || (t[0] = (e) => [(n.field.preferences ||= {}), (n.field.preferences.format = e.target.value), r.save()]),
                                              },
                                              [
                                                  (si(!0),
                                                  ui(
                                                      ni,
                                                      null,
                                                      ro(
                                                          r.numberFormats,
                                                          (e) => (
                                                              si(),
                                                              ui("option", { key: e, value: e, selected: e === n.field.preferences?.format || ("none" === e && !n.field.preferences?.format) }, ne(r.formatNumber(123456789.567, e)), 9, ed)
                                                          )
                                                      ),
                                                      128
                                                  )),
                                              ],
                                              40,
                                              Qs
                                          ),
                                          yi("label", { style: W([{ backgroundColor: n.backgroundColor }, { "font-size": "8px" }]), class: "absolute -top-1 left-2.5 px-1 h-4" }, ne(r.t("format")), 5),
                                      ]))
                                    : Ci("", !0),
                                ["number"].includes(n.field.type)
                                    ? (si(),
                                      ui("div", { key: 1, class: "py-1.5 px-1 relative", onClick: t[3] || (t[3] = jr(() => {}, ["stop"])) }, [
                                          yi(
                                              "select",
                                              {
                                                  class: "select select-bordered select-xs w-full max-w-xs h-7 !outline-0 font-normal bg-transparent",
                                                  onChange: t[2] || (t[2] = (e) => [(n.field.preferences ||= {}), (n.field.preferences.align = e.target.value), r.save()]),
                                              },
                                              [
                                                  (si(),
                                                  ui(
                                                      ni,
                                                      null,
                                                      ro(["left", "right", "center"], (e) => yi("option", { key: e, selected: n.field.preferences?.align ? e === n.field.preferences.align : "left" === e, value: e }, ne(r.t(e)), 9, td)),
                                                      64
                                                  )),
                                              ],
                                              32
                                          ),
                                          yi("label", { style: W([{ backgroundColor: n.backgroundColor }, { "font-size": "8px" }]), class: "absolute -top-1 left-2.5 px-1 h-4" }, ne(r.t("align")), 5),
                                      ]))
                                    : Ci("", !0),
                                ["select", "radio"].includes(n.field.type) && !n.defaultField
                                    ? (si(),
                                      ui("div", { key: 2, class: "py-1.5 px-1 relative", onClick: t[5] || (t[5] = jr(() => {}, ["stop"])) }, [
                                          yi(
                                              "select",
                                              {
                                                  placeholder: r.t("default_value"),
                                                  dir: "auto",
                                                  class: "select select-bordered select-xs w-full max-w-xs h-7 !outline-0 font-normal bg-transparent",
                                                  onChange: t[4] || (t[4] = (e) => [(n.field.default_value = e.target.value), !n.field.default_value && delete n.field.default_value, r.save()]),
                                              },
                                              [
                                                  yi("option", { value: "", selected: !n.field.default_value }, ne(r.t("none")), 9, od),
                                                  (si(!0),
                                                  ui(
                                                      ni,
                                                      null,
                                                      ro(
                                                          n.field.options || [],
                                                          (e, t) => (
                                                              si(),
                                                              ui(
                                                                  "option",
                                                                  { key: e.uuid, value: e.value || `${r.t("option")} ${t + 1}`, selected: n.field.default_value === (e.value || `${r.t("option")} ${t + 1}`) },
                                                                  ne(e.value || `${r.t("option")} ${t + 1}`),
                                                                  9,
                                                                  id
                                                              )
                                                          )
                                                      ),
                                                      128
                                                  )),
                                              ],
                                              40,
                                              nd
                                          ),
                                          yi("label", { style: W([{ backgroundColor: n.backgroundColor }, { "font-size": "8px" }]), class: "absolute -top-1 left-2.5 px-1 h-4" }, ne(r.t("default_value")), 5),
                                      ]))
                                    : Ci("", !0),
                                ["text", "number"].includes(n.field.type) && !n.defaultField
                                    ? (si(),
                                      ui("div", { key: 3, class: "py-1.5 px-1 relative", onClick: t[8] || (t[8] = jr(() => {}, ["stop"])) }, [
                                          Cn(
                                              yi(
                                                  "input",
                                                  {
                                                      "onUpdate:modelValue": t[6] || (t[6] = (e) => (n.field.default_value = e)),
                                                      placeholder: r.t("default_value"),
                                                      dir: "auto",
                                                      type: n.field.type,
                                                      class: "input input-bordered input-xs w-full max-w-xs h-7 !outline-0 bg-transparent",
                                                      onBlur: t[7] || (t[7] = (...e) => r.save && r.save(...e)),
                                                  },
                                                  null,
                                                  40,
                                                  rd
                                              ),
                                              [[qr, n.field.default_value]]
                                          ),
                                          n.field.default_value
                                              ? (si(), ui("label", { key: 0, style: W([{ backgroundColor: n.backgroundColor }, { "font-size": "8px" }]), class: "absolute -top-1 left-2.5 px-1 h-4" }, ne(r.t("default_value")), 5))
                                              : Ci("", !0),
                                      ]))
                                    : Ci("", !0),
                                ["text", "cells"].includes(n.field.type)
                                    ? (si(),
                                      ui("div", { key: 4, class: "py-1.5 px-1 relative", onClick: t[10] || (t[10] = jr(() => {}, ["stop"])) }, [
                                          yi(
                                              "select",
                                              { class: "select select-bordered select-xs w-full max-w-xs h-7 !outline-0 font-normal bg-transparent", onChange: t[9] || (t[9] = (...e) => r.onChangeValidation && r.onChangeValidation(...e)) },
                                              [
                                                  yi("option", { selected: !n.field.validation, value: "" }, ne(r.t("none")), 9, ad),
                                                  (si(!0),
                                                  ui(
                                                      ni,
                                                      null,
                                                      ro(r.validations, (e, t) => (si(), ui("option", { key: e, selected: n.field.validation?.pattern ? t === n.field.validation.pattern : "none" === t, value: t }, ne(r.t(e)), 9, ld))),
                                                      128
                                                  )),
                                                  yi(
                                                      "option",
                                                      {
                                                          selected: n.field.validation && !r.validations[n.field.validation.pattern],
                                                          value: r.validations[n.field.validation?.pattern] || !n.field.validation?.pattern ? "custom" : n.field.validation?.pattern,
                                                      },
                                                      ne(r.t("custom")),
                                                      9,
                                                      sd
                                                  ),
                                              ],
                                              32
                                          ),
                                          yi("label", { style: W([{ backgroundColor: n.backgroundColor }, { "font-size": "8px" }]), class: "absolute -top-1 left-2.5 px-1 h-4" }, ne(r.t("validation")), 5),
                                      ]))
                                    : Ci("", !0),
                                ["text", "cells"].includes(n.field.type) && n.field.validation && !r.validations[n.field.validation.pattern]
                                    ? (si(),
                                      ui("div", { key: 5, class: "py-1.5 px-1 relative", onClick: t[13] || (t[13] = jr(() => {}, ["stop"])) }, [
                                          Cn(
                                              yi(
                                                  "input",
                                                  {
                                                      ref: "validationCustom",
                                                      "onUpdate:modelValue": t[11] || (t[11] = (e) => (n.field.validation.pattern = e)),
                                                      placeholder: r.t("regexp_validation"),
                                                      dir: "auto",
                                                      class: "input input-bordered input-xs w-full max-w-xs h-7 !outline-0 bg-transparent",
                                                      onBlur: t[12] || (t[12] = (...e) => r.save && r.save(...e)),
                                                  },
                                                  null,
                                                  40,
                                                  dd
                                              ),
                                              [[Ar, n.field.validation.pattern]]
                                          ),
                                          n.field.validation.pattern
                                              ? (si(), ui("label", { key: 0, style: W([{ backgroundColor: n.backgroundColor }, { "font-size": "8px" }]), class: "absolute -top-1 left-2.5 px-1 h-4" }, ne(r.t("regexp_validation")), 5))
                                              : Ci("", !0),
                                      ]))
                                    : Ci("", !0),
                                "date" === n.field.type
                                    ? (si(),
                                      ui("div", { key: 6, class: "py-1.5 px-1 relative", onClick: t[16] || (t[16] = jr(() => {}, ["stop"])) }, [
                                          Cn(
                                              yi(
                                                  "select",
                                                  {
                                                      "onUpdate:modelValue": t[14] || (t[14] = (e) => (n.field.preferences.format = e)),
                                                      placeholder: r.t("format"),
                                                      class: "select select-bordered select-xs font-normal w-full max-w-xs !h-7 !outline-0 bg-transparent",
                                                      onChange: t[15] || (t[15] = (...e) => r.save && r.save(...e)),
                                                  },
                                                  [
                                                      (si(!0),
                                                      ui(
                                                          ni,
                                                          null,
                                                          ro(r.dateFormats, (e) => (si(), ui("option", { key: e, value: e }, ne(r.formatDate(new Date(), e)), 9, pd))),
                                                          128
                                                      )),
                                                  ],
                                                  40,
                                                  cd
                                              ),
                                              [[zr, n.field.preferences.format]]
                                          ),
                                          yi("label", { style: W([{ backgroundColor: n.backgroundColor }, { "font-size": "8px" }]), class: "absolute -top-1 left-2.5 px-1 h-4" }, ne(r.t("format")), 5),
                                      ]))
                                    : Ci("", !0),
                                "signature" === n.field.type
                                    ? (si(),
                                      ui("div", { key: 7, class: "py-1.5 px-1 relative", onClick: t[18] || (t[18] = jr(() => {}, ["stop"])) }, [
                                          yi(
                                              "select",
                                              {
                                                  placeholder: r.t("format"),
                                                  class: "select select-bordered select-xs font-normal w-full max-w-xs !h-7 !outline-0 bg-transparent",
                                                  onChange: t[17] || (t[17] = (e) => [(n.field.preferences.format = e.target.value), r.save()]),
                                              },
                                              [
                                                  yi("option", { value: "any", selected: !n.field.preferences?.format || "any" === n.field.preferences.format }, ne(r.t("any")), 9, hd),
                                                  yi("option", { value: "drawn", selected: "drawn" === n.field.preferences?.format }, ne(r.t("drawn")), 9, bd),
                                                  yi("option", { value: "typed", selected: "typed" === n.field.preferences?.format }, ne(r.t("typed")), 9, fd),
                                              ],
                                              40,
                                              ud
                                          ),
                                          yi("label", { style: W([{ backgroundColor: n.backgroundColor }, { "font-size": "8px" }]), class: "absolute -top-1 left-2.5 px-1 h-4" }, ne(r.t("format")), 5),
                                      ]))
                                    : Ci("", !0),
                                n.withRequired && "phone" != n.field.type && "stamp" != n.field.type
                                    ? (si(),
                                      ui("li", { key: 8, onClick: t[21] || (t[21] = jr(() => {}, ["stop"])) }, [
                                          yi("label", md, [
                                              Cn(
                                                  yi(
                                                      "input",
                                                      {
                                                          "onUpdate:modelValue": [t[19] || (t[19] = (e) => (n.field.required = e)), t[20] || (t[20] = (...e) => r.save && r.save(...e))],
                                                          type: "checkbox",
                                                          disabled: !n.editable || n.defaultField,
                                                          class: "toggle toggle-xs",
                                                      },
                                                      null,
                                                      8,
                                                      gd
                                                  ),
                                                  [[Tr, n.field.required]]
                                              ),
                                              yi("span", wd, ne(r.t("required")), 1),
                                          ]),
                                      ]))
                                    : Ci("", !0),
                                "stamp" == n.field.type
                                    ? (si(),
                                      ui("li", { key: 9, onClick: t[23] || (t[23] = jr(() => {}, ["stop"])) }, [
                                          yi("label", yd, [
                                              yi(
                                                  "input",
                                                  {
                                                      checked: 0 != n.field.preferences?.with_logo,
                                                      type: "checkbox",
                                                      class: "toggle toggle-xs",
                                                      onChange: t[22] || (t[22] = (e) => [(n.field.preferences ||= {}), (n.field.preferences.with_logo = 0 == n.field.preferences.with_logo), r.save()]),
                                                  },
                                                  null,
                                                  40,
                                                  vd
                                              ),
                                              yi("span", xd, ne(r.t("with_logo")), 1),
                                          ]),
                                      ]))
                                    : Ci("", !0),
                                "checkbox" == n.field.type
                                    ? (si(),
                                      ui("li", { key: 10, onClick: t[26] || (t[26] = jr(() => {}, ["stop"])) }, [
                                          yi("label", _d, [
                                              Cn(
                                                  yi(
                                                      "input",
                                                      {
                                                          "onUpdate:modelValue": [t[24] || (t[24] = (e) => (n.field.default_value = e)), t[25] || (t[25] = (e) => [(n.field.default_value = e), (n.field.readonly = e), r.save()])],
                                                          type: "checkbox",
                                                          class: "toggle toggle-xs",
                                                      },
                                                      null,
                                                      512
                                                  ),
                                                  [[Tr, n.field.default_value]]
                                              ),
                                              yi("span", kd, ne(r.t("checked")), 1),
                                          ]),
                                      ]))
                                    : Ci("", !0),
                                "date" == n.field.type
                                    ? (si(),
                                      ui("li", { key: 11, onClick: t[29] || (t[29] = jr(() => {}, ["stop"])) }, [
                                          yi("label", Cd, [
                                              Cn(
                                                  yi(
                                                      "input",
                                                      {
                                                          "onUpdate:modelValue": [
                                                              t[27] || (t[27] = (e) => (n.field.readonly = e)),
                                                              t[28] || (t[28] = (e) => [(n.field.default_value = e ? "{{date}}" : null), (n.field.readonly = e), r.save()]),
                                                          ],
                                                          type: "checkbox",
                                                          class: "toggle toggle-xs",
                                                      },
                                                      null,
                                                      512
                                                  ),
                                                  [[Tr, n.field.readonly]]
                                              ),
                                              yi("span", Sd, ne(r.t("set_signing_date")), 1),
                                          ]),
                                      ]))
                                    : Ci("", !0),
                                ["text", "number"].includes(n.field.type) && !n.defaultField
                                    ? (si(),
                                      ui("li", { key: 12, onClick: t[32] || (t[32] = jr(() => {}, ["stop"])) }, [
                                          yi("label", Fd, [
                                              Cn(
                                                  yi(
                                                      "input",
                                                      { "onUpdate:modelValue": [t[30] || (t[30] = (e) => (n.field.readonly = e)), t[31] || (t[31] = (...e) => r.save && r.save(...e))], type: "checkbox", class: "toggle toggle-xs" },
                                                      null,
                                                      512
                                                  ),
                                                  [[Tr, n.field.readonly]]
                                              ),
                                              yi("span", Dd, ne(r.t("read_only")), 1),
                                          ]),
                                      ]))
                                    : Ci("", !0),
                                "stamp" != n.field.type ? (si(), ui("hr", Ad)) : Ci("", !0),
                                "stamp" != n.field.type
                                    ? (si(),
                                      ui("li", Td, [
                                          yi("label", { class: "label-text cursor-pointer text-center w-full flex items-center", onClick: t[33] || (t[33] = (t) => e.$emit("click-description")) }, [
                                              vi(a, { width: "18" }),
                                              yi("span", Pd, ne(r.t("description")), 1),
                                          ]),
                                      ]))
                                    : Ci("", !0),
                                "stamp" != n.field.type
                                    ? (si(),
                                      ui("li", Md, [
                                          yi("label", { class: "label-text cursor-pointer text-center w-full flex items-center", onClick: t[34] || (t[34] = (t) => e.$emit("click-condition")) }, [
                                              vi(l, { width: "18" }),
                                              yi("span", zd, ne(r.t("condition")), 1),
                                          ]),
                                      ]))
                                    : Ci("", !0),
                                "number" == n.field.type
                                    ? (si(),
                                      ui("li", Id, [
                                          yi("label", { class: "label-text cursor-pointer text-center w-full flex items-center", onClick: t[35] || (t[35] = (t) => e.$emit("click-formula")) }, [
                                              vi(s, { width: "18" }),
                                              yi("span", Rd, ne(r.t("formula")), 1),
                                          ]),
                                      ]))
                                    : Ci("", !0),
                                Ed,
                                n.withAreas
                                    ? (si(),
                                      ui(
                                          ni,
                                          { key: 17 },
                                          [
                                              (si(!0),
                                              ui(
                                                  ni,
                                                  null,
                                                  ro(
                                                      r.sortedAreas,
                                                      (t, n) => (
                                                          si(),
                                                          ui("li", { key: n }, [
                                                              yi(
                                                                  "a",
                                                                  { href: "#", class: "text-sm py-1 px-2 group/1", onClick: jr((n) => e.$emit("scroll-to", t), ["prevent"]) },
                                                                  [
                                                                      vi(d, { width: 20, "stroke-width": 1.6 }),
                                                                      _i(" " + ne(r.t("page")) + " ", 1),
                                                                      r.template.schema.length > 1
                                                                          ? (si(), ui(ni, { key: 0 }, [_i(ne(r.template.schema.findIndex((e) => e.attachment_uuid === t.attachment_uuid) + 1) + "-", 1)], 64))
                                                                          : Ci("", !0),
                                                                      _i(ne(t.page + 1) + " ", 1),
                                                                      vi(
                                                                          c,
                                                                          {
                                                                              width: 12,
                                                                              class: "group-hover/1:inline hidden",
                                                                              onClick: jr((n) => [e.$emit("remove-area", t), n.target.closest(".dropdown").querySelector("label").focus()], ["prevent", "stop"]),
                                                                          },
                                                                          null,
                                                                          8,
                                                                          ["onClick"]
                                                                      ),
                                                                  ],
                                                                  8,
                                                                  qd
                                                              ),
                                                          ])
                                                      )
                                                  ),
                                                  128
                                              )),
                                              n.field.areas?.length && ["radio", "multiple"].includes(n.field.type)
                                                  ? Ci("", !0)
                                                  : (si(),
                                                    ui("li", Od, [
                                                        yi("a", { href: "#", class: "text-sm py-1 px-2", onClick: t[36] || (t[36] = jr((t) => e.$emit("set-draw", { field: n.field }), ["prevent"])) }, [
                                                            vi(p, { width: 20, "stroke-width": 1.6 }),
                                                            _i(" " + ne(r.t("draw_new_area")), 1),
                                                        ]),
                                                    ])),
                                          ],
                                          64
                                      ))
                                    : Ci("", !0),
                                1 === n.field.areas?.length && ["date", "signature", "initials", "text", "cells"].includes(n.field.type)
                                    ? (si(),
                                      ui("li", $d, [
                                          yi("a", { href: "#", class: "text-sm py-1 px-2", onClick: t[37] || (t[37] = jr((e) => r.copyToAllPages(n.field), ["prevent"])) }, [
                                              vi(u, { width: 20, "stroke-width": 1.6 }),
                                              _i(" " + ne(r.t("copy_to_all_pages")), 1),
                                          ]),
                                      ]))
                                    : Ci("", !0),
                            ],
                            64
                        )
                    );
                },
            ],
        ]),
        Yd = { class: "modal modal-open items-start !animate-none overflow-y-auto" },
        Wd = { class: "modal-box pt-4 pb-6 px-6 mt-20 max-h-none w-full max-w-xl" },
        Xd = { class: "flex justify-between items-center border-b pb-2 mb-2 font-medium" },
        Hd = { key: 0, class: "bg-base-300 rounded-xl py-2 px-3 text-center" },
        Kd = { href: "https://www.docuseal.com/pricing", target: "_blank", class: "link" },
        Zd = { class: "flex-inline mb-2 gap-2 space-y-1" },
        Jd = ["onClick"],
        Gd = { class: "flex" },
        Qd = ["readonly"],
        ec = { class: "mb-3 mt-1" },
        tc = { target: "blank", class: "text-sm mb-2 inline space-x-2" },
        nc = {
            name: "FormulaModal",
            components: {
                IconCodePlus: Ha("code-plus", 0, [
                    ["path", { d: "M9 12h6", key: "svg-0" }],
                    ["path", { d: "M12 9v6", key: "svg-1" }],
                    ["path", { d: "M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2", key: "svg-2" }],
                    ["path", { d: "M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2", key: "svg-3" }],
                ]),
            },
            inject: ["t", "save", "template", "withFormula"],
            props: { field: { type: Object, required: !0 }, editable: { type: Boolean, required: !1, default: !0 }, buildDefaultName: { type: Function, required: !0 } },
            emits: ["close"],
            data: () => ({ formula: "" }),
            computed: {
                fields() {
                    return this.template.fields.reduce((e, t) => (t !== this.field && t.submitter_uuid === this.field.submitter_uuid && ["number"].includes(t.type) && !t.preferences?.formula && e.push(t), e), []);
                },
            },
            created() {
                this.field.preferences ||= {};
            },
            mounted() {
                this.formula = this.humanizeFormula(this.field.preferences.formula || "");
            },
            methods: {
                humanizeFormula(e) {
                    return e.replace(/{{(.*?)}}/g, (e, t) => {
                        const n = this.fields.find((e) => e.uuid === t);
                        return n ? `{{${n.name || this.buildDefaultName(n, this.template.fields)}}}` : "{{FIELD NOT FOUND}}";
                    });
                },
                normalizeFormula(e) {
                    return e.replace(/{{(.*?)}}/g, (e, t) => {
                        const n = this.fields.find((e) => (e.name || this.buildDefaultName(e, this.template.fields)).trim() === t.trim());
                        return n ? `{{${n.uuid}}}` : "{{FIELD NOT FOUND}}";
                    });
                },
                validateSaveAndClose() {
                    if (!this.withFormula) return alert(this.t("available_only_in_pro"));
                    const e = this.normalizeFormula(this.formula);
                    e.includes("FIELD NOT FOUND")
                        ? alert(this.t("some_fields_are_missing_in_the_formula"))
                        : ((this.field.preferences.formula = e), "payment" !== this.field.type && (this.field.readonly = !!e), this.save(), this.$emit("close"));
                },
                insertTextUnderCursor(e) {
                    const t = this.$refs.textarea,
                        n = t.selectionEnd,
                        o = t.value.substring(0, n) + e + t.value.substring(n);
                    (this.formula = o), t.setSelectionRange(n + e.length, n + e.length), t.focus();
                },
                resizeTextarea() {
                    const e = this.$refs.textarea;
                    (e.style.height = "auto"), (e.style.height = e.scrollHeight + "px");
                },
            },
        },
        oc = (0, Ga.A)(nc, [
            [
                "render",
                function (e, t, n, o, i, r) {
                    const a = eo("IconCodePlus");
                    return (
                        si(),
                        ui("div", Yd, [
                            yi("div", { class: "absolute top-0 bottom-0 right-0 left-0", onClick: t[0] || (t[0] = jr((t) => e.$emit("close"), ["prevent"])) }),
                            yi("div", Wd, [
                                yi("div", Xd, [
                                    yi("span", null, ne(r.t("formula")) + " - " + ne(n.field.name || n.buildDefaultName(n.field, r.template.fields)), 1),
                                    yi("a", { href: "#", class: "text-xl", onClick: t[1] || (t[1] = jr((t) => e.$emit("close"), ["prevent"])) }, "×"),
                                ]),
                                yi("div", null, [
                                    r.withFormula ? Ci("", !0) : (si(), ui("div", Hd, [yi("a", Kd, ne(r.t("available_in_pro")), 1)])),
                                    yi("div", Zd, [
                                        (si(!0),
                                        ui(
                                            ni,
                                            null,
                                            ro(
                                                r.fields,
                                                (e) => (
                                                    si(),
                                                    ui(
                                                        "button",
                                                        {
                                                            key: e.uuid,
                                                            class: "mr-1 btn btn-neutral btn-outline border-base-content/20 btn-sm normal-case font-normal bg-white !rounded-xl",
                                                            onClick: jr((t) => r.insertTextUnderCursor(`{{${e.name || n.buildDefaultName(e, r.template.fields)}}}`), ["prevent"]),
                                                        },
                                                        [vi(a, { width: "20", height: "20", "stroke-width": "1.5" }), _i(" " + ne(e.name || n.buildDefaultName(e, r.template.fields)), 1)],
                                                        8,
                                                        Jd
                                                    )
                                                )
                                            ),
                                            128
                                        )),
                                    ]),
                                    yi("div", null, [
                                        yi("div", Gd, [
                                            Cn(
                                                yi(
                                                    "textarea",
                                                    {
                                                        ref: "textarea",
                                                        "onUpdate:modelValue": t[2] || (t[2] = (e) => (i.formula = e)),
                                                        class: "base-textarea !rounded-xl !text-base font-mono w-full !outline-0 !ring-0 !px-3",
                                                        readonly: !n.editable,
                                                        required: "true",
                                                        onInput: t[3] || (t[3] = (...e) => r.resizeTextarea && r.resizeTextarea(...e)),
                                                    },
                                                    null,
                                                    40,
                                                    Qd
                                                ),
                                                [[Ar, i.formula]]
                                            ),
                                        ]),
                                        yi("div", ec, [
                                            yi("div", tc, [
                                                yi("button", { class: "bg-base-200 px-2 rounded-xl", onClick: t[4] || (t[4] = (e) => r.insertTextUnderCursor(" + ")) }, " + "),
                                                yi("button", { class: "bg-base-200 px-2 rounded-xl", onClick: t[5] || (t[5] = (e) => r.insertTextUnderCursor(" - ")) }, " - "),
                                                yi("button", { class: "bg-base-200 px-2 rounded-xl", onClick: t[6] || (t[6] = (e) => r.insertTextUnderCursor(" * ")) }, " * "),
                                                yi("button", { class: "bg-base-200 px-2 rounded-xl", onClick: t[7] || (t[7] = (e) => r.insertTextUnderCursor(" / ")) }, " / "),
                                                yi("button", { class: "bg-base-200 px-2 rounded-xl", onClick: t[8] || (t[8] = (e) => r.insertTextUnderCursor(" % ")) }, " % "),
                                                yi("button", { class: "bg-base-200 px-2 rounded-xl", onClick: t[9] || (t[9] = (e) => r.insertTextUnderCursor("^")) }, " ^ "),
                                                yi("button", { class: "bg-base-200 px-2 rounded-xl", onClick: t[10] || (t[10] = (e) => r.insertTextUnderCursor("round()")) }, " round(n, d) "),
                                                yi("button", { class: "bg-base-200 px-2 rounded-xl", onClick: t[11] || (t[11] = (e) => r.insertTextUnderCursor("abs()")) }, " abs(n) "),
                                            ]),
                                        ]),
                                    ]),
                                    yi("button", { class: "base-button w-full", onClick: t[12] || (t[12] = jr((...e) => r.validateSaveAndClose && r.validateSaveAndClose(...e), ["prevent"])) }, ne(r.t("save")), 1),
                                ]),
                            ]),
                        ])
                    );
                },
            ],
        ]),
        ic = { class: "modal modal-open items-start !animate-none overflow-y-auto" },
        rc = { class: "modal-box pt-4 pb-6 px-6 mt-20 max-h-none w-full max-w-xl" },
        ac = { class: "flex justify-between items-center border-b pb-2 mb-2 font-medium" },
        lc = { key: 0, class: "bg-base-300 rounded-xl py-2 px-3 text-center" },
        sc = { href: "https://www.docuseal.com/pricing", target: "_blank", class: "link" },
        dc = { class: "my-4 space-y-5" },
        cc = { key: 0, class: "flex justify-between border-b mx-1 -mb-1 pb-1" },
        pc = { class: "text-sm" },
        uc = ["onClick"],
        hc = ["onChange"],
        bc = ["selected"],
        fc = ["value", "selected"],
        mc = ["onUpdate:modelValue", "required"],
        gc = ["value"],
        wc = ["onChange"],
        yc = { value: "", disabled: "", selected: "" },
        vc = ["value", "selected"],
        xc = { class: "base-button w-full mt-2" },
        _c = { key: 1, class: "text-center w-full mt-4" },
        kc = {
            name: "ConditionModal",
            inject: ["t", "save", "template", "withConditions"],
            props: { field: { type: Object, required: !0 }, buildDefaultName: { type: Function, required: !0 } },
            emits: ["close"],
            data() {
                return { conditions: this.field.conditions?.[0] ? JSON.parse(JSON.stringify(this.field.conditions)) : [{}] };
            },
            computed: {
                fields() {
                    return this.template.fields.reduce((e, t) => (t !== this.field && t.submitter_uuid === this.field.submitter_uuid && e.push(t), e), []);
                },
            },
            created() {
                this.field.conditions ||= [];
            },
            methods: {
                conditionField(e) {
                    return this.fields.find((t) => t.uuid === e.field_uuid);
                },
                conditionActions(e) {
                    return this.fieldActions(this.conditionField(e));
                },
                fieldActions(e) {
                    const t = [];
                    return e
                        ? ("checkbox" === e.type
                              ? t.push("checked", "unchecked")
                              : ["radio", "select"].includes(e.type)
                              ? t.push("equal", "not_equal")
                              : ["multiple"].includes(e.type)
                              ? t.push("contains", "does_not_contain")
                              : t.push("not_empty", "empty"),
                          t)
                        : t;
                },
                validateSaveAndClose() {
                    if (!this.withConditions) return alert(this.t("available_only_in_pro"));
                    this.conditions.find((e) => e.field_uuid) ? (this.field.conditions = this.conditions) : delete this.field.conditions, this.save(), this.$emit("close");
                },
            },
        },
        Cc = (0, Ga.A)(kc, [
            [
                "render",
                function (e, t, n, o, i, r) {
                    return (
                        si(),
                        ui("div", ic, [
                            yi("div", { class: "absolute top-0 bottom-0 right-0 left-0", onClick: t[0] || (t[0] = jr((t) => e.$emit("close"), ["prevent"])) }),
                            yi("div", rc, [
                                yi("div", ac, [
                                    yi("span", null, ne(r.t("condition")) + " - " + ne(n.field.name || n.buildDefaultName(n.field, r.template.fields)), 1),
                                    yi("a", { href: "#", class: "text-xl", onClick: t[1] || (t[1] = jr((t) => e.$emit("close"), ["prevent"])) }, "×"),
                                ]),
                                yi("div", null, [
                                    r.withConditions ? Ci("", !0) : (si(), ui("div", lc, [yi("a", sc, ne(r.t("available_in_pro")), 1)])),
                                    yi(
                                        "form",
                                        { onSubmit: t[3] || (t[3] = jr((...e) => r.validateSaveAndClose && r.validateSaveAndClose(...e), ["prevent"])) },
                                        [
                                            yi("div", dc, [
                                                (si(!0),
                                                ui(
                                                    ni,
                                                    null,
                                                    ro(
                                                        i.conditions,
                                                        (e, t) => (
                                                            si(),
                                                            ui("div", { key: t, class: "space-y-4 relative" }, [
                                                                i.conditions.length > 1
                                                                    ? (si(),
                                                                      ui("div", cc, [
                                                                          yi("span", pc, ne(r.t("condition")) + " " + ne(t + 1), 1),
                                                                          yi("a", { href: "#", class: "link text-sm", onClick: jr((e) => i.conditions.splice(t, 1), ["prevent"]) }, ne(r.t("remove")), 9, uc),
                                                                      ]))
                                                                    : Ci("", !0),
                                                                yi(
                                                                    "select",
                                                                    {
                                                                        class: J(["select select-bordered select-sm w-full bg-white h-11 pl-4 text-base font-normal", { "text-gray-300": !e.field_uuid }]),
                                                                        required: "",
                                                                        onChange: (t) => [(e.field_uuid = t.target.value), delete e.value, r.conditionActions(e).includes(e.action) ? "" : (e.action = r.conditionActions(e)[0])],
                                                                    },
                                                                    [
                                                                        yi("option", { value: "", disabled: "", selected: !e.field_uuid }, ne(r.t("select_field_")), 9, bc),
                                                                        (si(!0),
                                                                        ui(
                                                                            ni,
                                                                            null,
                                                                            ro(
                                                                                r.fields,
                                                                                (t) => (
                                                                                    si(),
                                                                                    ui(
                                                                                        "option",
                                                                                        { key: t.uuid, value: t.uuid, class: "text-base-content", selected: e.field_uuid === t.uuid },
                                                                                        ne(t.name || n.buildDefaultName(t, r.template.fields)),
                                                                                        9,
                                                                                        fc
                                                                                    )
                                                                                )
                                                                            ),
                                                                            128
                                                                        )),
                                                                    ],
                                                                    42,
                                                                    hc
                                                                ),
                                                                Cn(
                                                                    yi(
                                                                        "select",
                                                                        {
                                                                            "onUpdate:modelValue": (t) => (e.action = t),
                                                                            class: J(["select select-bordered select-sm w-full h-11 pl-4 text-base font-normal", { "bg-white": e.field_uuid, "bg-base-300": !e.field_uuid }]),
                                                                            required: e.field_uuid,
                                                                        },
                                                                        [
                                                                            (si(!0),
                                                                            ui(
                                                                                ni,
                                                                                null,
                                                                                ro(r.conditionActions(e), (e) => (si(), ui("option", { key: e, value: e }, ne(r.t(e)), 9, gc))),
                                                                                128
                                                                            )),
                                                                        ],
                                                                        10,
                                                                        mc
                                                                    ),
                                                                    [[zr, e.action]]
                                                                ),
                                                                ["radio", "select", "multiple"].includes(r.conditionField(e)?.type) && r.conditionField(e)?.options
                                                                    ? (si(),
                                                                      ui(
                                                                          "select",
                                                                          {
                                                                              key: 1,
                                                                              class: J(["select select-bordered select-sm w-full bg-white h-11 pl-4 text-base font-normal", { "text-gray-300": !e.value }]),
                                                                              required: "",
                                                                              onChange: (t) => (e.value = t.target.value),
                                                                          },
                                                                          [
                                                                              yi("option", yc, ne(r.t("select_value_")), 1),
                                                                              (si(!0),
                                                                              ui(
                                                                                  ni,
                                                                                  null,
                                                                                  ro(
                                                                                      r.conditionField(e).options,
                                                                                      (t, n) => (
                                                                                          si(),
                                                                                          ui(
                                                                                              "option",
                                                                                              { key: t.uuid, value: t.uuid, selected: e.value === t.uuid, class: "text-base-content" },
                                                                                              ne(t.value || `${r.t("option")} ${n + 1}`),
                                                                                              9,
                                                                                              vc
                                                                                          )
                                                                                      )
                                                                                  ),
                                                                                  128
                                                                              )),
                                                                          ],
                                                                          42,
                                                                          wc
                                                                      ))
                                                                    : Ci("", !0),
                                                            ])
                                                        )
                                                    ),
                                                    128
                                                )),
                                            ]),
                                            yi("a", { href: "#", class: "inline float-right link text-right mb-3 px-2", onClick: t[2] || (t[2] = jr((e) => i.conditions.push({}), ["prevent"])) }, " + " + ne(r.t("add_condition")), 1),
                                            yi("button", xc, ne(r.t("save")), 1),
                                        ],
                                        32
                                    ),
                                    n.field.conditions?.[0]?.field_uuid
                                        ? (si(), ui("div", _c, [yi("button", { class: "link", onClick: t[4] || (t[4] = (e) => [(i.conditions = []), delete n.field.conditions, r.validateSaveAndClose()]) }, ne(r.t("remove_condition")), 1)]))
                                        : Ci("", !0),
                                ]),
                            ]),
                        ])
                    );
                },
            ],
        ]),
        Sc = { class: "modal modal-open items-start !animate-none overflow-y-auto" },
        Fc = { class: "modal-box pt-4 pb-6 px-6 mt-20 max-h-none w-full max-w-xl" },
        Dc = { class: "flex justify-between items-center border-b pb-2 mb-2 font-medium" },
        Ac = { class: "space-y-1 mb-1" },
        Tc = { dir: "auto", class: "label text-sm", for: "description_field" },
        Pc = ["readonly"],
        Mc = { dir: "auto", class: "label text-sm", for: "title_field" },
        zc = ["readonly"],
        Ic = { class: "base-button w-full mt-4" },
        Rc = {
            name: "DescriptionModal",
            inject: ["t", "save", "template"],
            props: { field: { type: Object, required: !0 }, editable: { type: Boolean, required: !1, default: !0 }, buildDefaultName: { type: Function, required: !0 } },
            emits: ["close"],
            data() {
                return { description: this.field.description, title: this.field.title };
            },
            mounted() {
                this.resizeTextarea();
            },
            methods: {
                saveAndClose() {
                    (this.field.description = this.description), (this.field.title = this.title), this.save(), this.$emit("close");
                },
                resizeTextarea() {
                    const e = this.$refs.textarea;
                    (e.style.height = "auto"), (e.style.height = e.scrollHeight + "px");
                },
            },
        },
        Ec = (0, Ga.A)(Rc, [
            [
                "render",
                function (e, t, n, o, i, r) {
                    return (
                        si(),
                        ui("div", Sc, [
                            yi("div", { class: "absolute top-0 bottom-0 right-0 left-0", onClick: t[0] || (t[0] = jr((t) => e.$emit("close"), ["prevent"])) }),
                            yi("div", Fc, [
                                yi("div", Dc, [
                                    yi("span", null, ne(n.field.name || n.buildDefaultName(n.field, r.template.fields)), 1),
                                    yi("a", { href: "#", class: "text-xl", onClick: t[1] || (t[1] = jr((t) => e.$emit("close"), ["prevent"])) }, "×"),
                                ]),
                                yi("div", null, [
                                    yi(
                                        "form",
                                        { onSubmit: t[5] || (t[5] = jr((...e) => r.saveAndClose && r.saveAndClose(...e), ["prevent"])) },
                                        [
                                            yi("div", Ac, [
                                                yi("div", null, [
                                                    yi("label", Tc, ne(r.t("description")), 1),
                                                    Cn(
                                                        yi(
                                                            "textarea",
                                                            {
                                                                id: "description_field",
                                                                ref: "textarea",
                                                                "onUpdate:modelValue": t[2] || (t[2] = (e) => (i.description = e)),
                                                                dir: "auto",
                                                                class: "base-textarea !text-base w-full",
                                                                readonly: !n.editable,
                                                                onInput: t[3] || (t[3] = (...e) => r.resizeTextarea && r.resizeTextarea(...e)),
                                                            },
                                                            null,
                                                            40,
                                                            Pc
                                                        ),
                                                        [[Ar, i.description]]
                                                    ),
                                                ]),
                                                yi("div", null, [
                                                    yi("label", Mc, ne(r.t("display_title")) + " (" + ne(r.t("optional")) + ") ", 1),
                                                    Cn(
                                                        yi(
                                                            "input",
                                                            { id: "title_field", "onUpdate:modelValue": t[4] || (t[4] = (e) => (i.title = e)), dir: "auto", readonly: !n.editable, class: "base-input !text-base w-full" },
                                                            null,
                                                            8,
                                                            zc
                                                        ),
                                                        [[Ar, i.title]]
                                                    ),
                                                ]),
                                            ]),
                                            yi("button", Ic, ne(r.t("save")), 1),
                                        ],
                                        32
                                    ),
                                ]),
                            ]),
                        ])
                    );
                },
            ],
        ]);
    var qc = Ha("trash-x", 0, [
        ["path", { d: "M4 7h16", key: "svg-0" }],
        ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-1" }],
        ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-2" }],
        ["path", { d: "M10 12l4 4m0 -4l-4 4", key: "svg-3" }],
    ]);
    const Oc = { randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
    let $c;
    const Nc = new Uint8Array(16);
    function jc() {
        if (!$c && (($c = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)), !$c))
            throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return $c(Nc);
    }
    const Bc = [];
    for (let e = 0; e < 256; ++e) Bc.push((e + 256).toString(16).slice(1));
    const Uc = function (e, t, n) {
            if (Oc.randomUUID && !t && !e) return Oc.randomUUID();
            const o = (e = e || {}).random || (e.rng || jc)();
            if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), t)) {
                n = n || 0;
                for (let e = 0; e < 16; ++e) t[n + e] = o[e];
                return t;
            }
            return (function (e, t = 0) {
                return (
                    Bc[e[t + 0]] +
                    Bc[e[t + 1]] +
                    Bc[e[t + 2]] +
                    Bc[e[t + 3]] +
                    "-" +
                    Bc[e[t + 4]] +
                    Bc[e[t + 5]] +
                    "-" +
                    Bc[e[t + 6]] +
                    Bc[e[t + 7]] +
                    "-" +
                    Bc[e[t + 8]] +
                    Bc[e[t + 9]] +
                    "-" +
                    Bc[e[t + 10]] +
                    Bc[e[t + 11]] +
                    Bc[e[t + 12]] +
                    Bc[e[t + 13]] +
                    Bc[e[t + 14]] +
                    Bc[e[t + 15]]
                ).toLowerCase();
            })(o);
        },
        Lc = {
            name: "TemplateField",
            components: {
                Contenteditable: Jl,
                IconSettings: Vs,
                FieldSettings: Vd,
                PaymentSettings: Gs,
                IconNewSection: Bd,
                FormulaModal: oc,
                DescriptionModal: Ec,
                ConditionsModal: Cc,
                IconRouteAltLeft: Ws,
                IconTrashX: qc,
                IconMathFunction: Hs,
                FieldType: ws,
            },
            inject: ["template", "save", "backgroundColor", "selectedAreaRef", "t", "locale"],
            props: { field: { type: Object, required: !0 }, defaultField: { type: Object, required: !1, default: null }, editable: { type: Boolean, required: !1, default: !0 } },
            emits: ["set-draw", "remove", "scroll-to"],
            data: () => ({ isNameFocus: !1, showPaymentModal: !1, isShowFormulaModal: !1, isShowConditionsModal: !1, isShowDescriptionModal: !1, renderDropdown: !1 }),
            computed: {
                fieldNames: ws.computed.fieldNames,
                fieldLabels: ws.computed.fieldLabels,
                dropdownBgColor() {
                    return ["", null, "transparent"].includes(this.backgroundColor) ? "white" : this.backgroundColor;
                },
                schemaAttachmentsIndexes() {
                    return (this.template.schema || []).reduce((e, t, n) => ((e[t.attachment_uuid] = n), e), {});
                },
                sortedAreas() {
                    return (this.field.areas || []).sort((e, t) => this.schemaAttachmentsIndexes[e.attachment_uuid] - this.schemaAttachmentsIndexes[t.attachment_uuid]);
                },
                modalContainerEl() {
                    return this.$el.getRootNode().querySelector("#docuseal_modal_container");
                },
                defaultName() {
                    return this.buildDefaultName(this.field, this.template.fields);
                },
                areas() {
                    return this.field.areas || [];
                },
            },
            created() {
                (this.field.preferences ||= {}),
                    "date" === this.field.type &&
                        (this.field.preferences.format ||=
                            { "de-DE": "DD.MM.YYYY" }[this.locale] ||
                            (Intl.DateTimeFormat().resolvedOptions().locale.endsWith("-US") || new Intl.DateTimeFormat("en-US", { timeZoneName: "short" }).format(new Date()).match(/\s(?:CST|CDT|PST|PDT|EST|EDT)$/)
                                ? "MM/DD/YYYY"
                                : "DD/MM/YYYY"));
            },
            methods: {
                removeArea(e) {
                    this.field.areas.splice(this.field.areas.indexOf(e), 1), this.save();
                },
                buildDefaultName(e, t) {
                    if ("payment" === e.type && e.preferences?.price && !e.preferences?.formula) {
                        const { price: t, currency: n } = e.preferences || {},
                            o = new Intl.NumberFormat([], { style: "currency", currency: n }).format(t);
                        return `${this.fieldNames[e.type]} ${o}`;
                    }
                    {
                        const n = t.filter((t) => t.type === e.type).indexOf(e);
                        return "heading" === this.field.type ? `${this.fieldNames[e.type]} ${n + 1}` : `${this.fieldLabels[e.type]} ${n + 1}`;
                    }
                },
                onNameFocus(e) {
                    (this.isNameFocus = !0),
                        this.field.name ||
                            setTimeout(() => {
                                this.$refs.name.$refs.contenteditable.innerText = " ";
                            }, 1);
                },
                maybeFocusOnOptionArea(e) {
                    const t = this.field.areas.find((t) => t.option_uuid === e.uuid);
                    t && (this.selectedAreaRef.value = t);
                },
                scrollToFirstArea() {
                    return this.sortedAreas[0] && this.$emit("scroll-to", this.sortedAreas[0]);
                },
                closeDropdown() {
                    document.activeElement.blur();
                },
                addOption() {
                    this.field.options.push({ value: "", uuid: Uc() }),
                        this.$nextTick(() => {
                            const e = this.$refs.options.querySelectorAll("input");
                            e[e.length - 1]?.focus();
                        }),
                        this.save();
                },
                removeOption(e) {
                    this.field.options.splice(this.field.options.indexOf(e), 1),
                        -1 !== this.field.areas.findIndex((t) => t.option_uuid === e.uuid) &&
                            this.field.areas.splice(
                                this.field.areas.findIndex((t) => t.option_uuid === e.uuid),
                                1
                            ),
                        this.save();
                },
                maybeUpdateOptions() {
                    delete this.field.default_value,
                        ["radio", "multiple", "select"].includes(this.field.type) || delete this.field.options,
                        ["radio", "multiple", "select"].includes(this.field.type) && (this.field.options ||= [{ value: "", uuid: Uc() }]),
                        ["heading"].includes(this.field.type) && (this.field.readonly = !0),
                        (this.field.areas || []).forEach((e) => {
                            "cells" === this.field.type ? (e.cell_w = (2 * e.w) / Math.floor(e.w / e.h)) : delete e.cell_w;
                        });
                },
                onNameBlur(e) {
                    const t = this.$refs.name.$refs.contenteditable.innerText.trim();
                    t ? (this.field.name = t) : ((this.field.name = ""), (this.$refs.name.$refs.contenteditable.innerText = this.defaultName)), (this.isNameFocus = !1), this.save();
                },
            },
        },
        Vc = (0, Ga.A)(Lc, [
            [
                "render",
                function (e, t, n, o, i, r) {
                    const a = eo("FieldType"),
                        l = eo("Contenteditable"),
                        s = eo("IconNewSection"),
                        d = eo("IconMathFunction"),
                        c = eo("IconRouteAltLeft"),
                        p = eo("PaymentSettings"),
                        u = eo("IconSettings"),
                        h = eo("FieldSettings"),
                        b = eo("IconTrashX"),
                        f = eo("FormulaModal"),
                        m = eo("ConditionsModal"),
                        g = eo("DescriptionModal");
                    return (
                        si(),
                        ui("div", Pl, [
                            yi(
                                "div",
                                { class: "border border-base-300 rounded rounded-tr-none relative group", style: W({ backgroundColor: r.backgroundColor }) },
                                [
                                    yi("div", Ml, [
                                        yi("div", { class: "absolute top-0 bottom-0 right-0 left-0 cursor-pointer", onClick: t[0] || (t[0] = (...e) => r.scrollToFirstArea && r.scrollToFirstArea(...e)) }),
                                        yi("div", zl, [
                                            vi(
                                                a,
                                                {
                                                    modelValue: n.field.type,
                                                    "onUpdate:modelValue": [t[1] || (t[1] = (e) => (n.field.type = e)), t[2] || (t[2] = (e) => [r.maybeUpdateOptions(), r.save()])],
                                                    editable: n.editable && !n.defaultField && "heading" != n.field.type,
                                                    "button-width": 20,
                                                    "menu-classes": "mt-1.5",
                                                    "menu-style": { backgroundColor: r.dropdownBgColor },
                                                    onClick: r.scrollToFirstArea,
                                                },
                                                null,
                                                8,
                                                ["modelValue", "editable", "menu-style", "onClick"]
                                            ),
                                            vi(
                                                l,
                                                {
                                                    ref: "name",
                                                    "model-value": (n.defaultField && n.field.title) || n.field.name || r.defaultName,
                                                    editable: n.editable && !n.defaultField && "heading" != n.field.type,
                                                    "icon-inline": !0,
                                                    "icon-width": 18,
                                                    "icon-stroke-width": 1.6,
                                                    onFocus: t[3] || (t[3] = (e) => [r.onNameFocus(), r.scrollToFirstArea()]),
                                                    onBlur: r.onNameBlur,
                                                },
                                                null,
                                                8,
                                                ["model-value", "editable", "onBlur"]
                                            ),
                                        ]),
                                        i.isNameFocus
                                            ? (si(),
                                              ui("div", Il, [
                                                  "phone" != n.field.type
                                                      ? (si(),
                                                        ui(
                                                            ni,
                                                            { key: 0 },
                                                            [
                                                                Cn(
                                                                    yi(
                                                                        "input",
                                                                        {
                                                                            id: `required-checkbox-${n.field.uuid}`,
                                                                            "onUpdate:modelValue": t[4] || (t[4] = (e) => (n.field.required = e)),
                                                                            type: "checkbox",
                                                                            class: "checkbox checkbox-xs no-animation rounded",
                                                                            onMousedown: t[5] || (t[5] = jr(() => {}, ["prevent"])),
                                                                        },
                                                                        null,
                                                                        40,
                                                                        Rl
                                                                    ),
                                                                    [[Tr, n.field.required]]
                                                                ),
                                                                yi(
                                                                    "label",
                                                                    {
                                                                        for: `required-checkbox-${n.field.uuid}`,
                                                                        class: "label text-xs",
                                                                        onClick: t[6] || (t[6] = jr((e) => (n.field.required = !n.field.required), ["prevent"])),
                                                                        onMousedown: t[7] || (t[7] = jr(() => {}, ["prevent"])),
                                                                    },
                                                                    ne(r.t("required")),
                                                                    41,
                                                                    El
                                                                ),
                                                            ],
                                                            64
                                                        ))
                                                      : Ci("", !0),
                                              ]))
                                            : n.editable
                                            ? (si(),
                                              ui("div", ql, [
                                                  n.field && !n.field.areas?.length
                                                      ? (si(),
                                                        ui(
                                                            "button",
                                                            {
                                                                key: 0,
                                                                title: r.t("draw"),
                                                                class: "relative cursor-pointer text-transparent group-hover:text-base-content",
                                                                onClick: t[8] || (t[8] = (t) => e.$emit("set-draw", { field: n.field })),
                                                            },
                                                            [vi(s, { width: 18, "stroke-width": 1.6 })],
                                                            8,
                                                            Ol
                                                        ))
                                                      : Ci("", !0),
                                                  n.field.preferences?.formula
                                                      ? (si(),
                                                        ui(
                                                            "button",
                                                            { key: 1, class: "relative cursor-pointer text-transparent group-hover:text-base-content", title: r.t("formula"), onClick: t[9] || (t[9] = (e) => (i.isShowFormulaModal = !0)) },
                                                            [vi(d, { width: 18, "stroke-width": 1.6 })],
                                                            8,
                                                            $l
                                                        ))
                                                      : Ci("", !0),
                                                  n.field.conditions?.length
                                                      ? (si(),
                                                        ui(
                                                            "button",
                                                            {
                                                                key: 2,
                                                                class: "relative cursor-pointer text-transparent group-hover:text-base-content",
                                                                title: r.t("condition"),
                                                                onClick: t[10] || (t[10] = (e) => (i.isShowConditionsModal = !0)),
                                                            },
                                                            [vi(c, { width: 18, "stroke-width": 1.6 })],
                                                            8,
                                                            Nl
                                                        ))
                                                      : Ci("", !0),
                                                  "payment" === n.field.type
                                                      ? (si(),
                                                        hi(
                                                            p,
                                                            {
                                                                key: 3,
                                                                field: n.field,
                                                                onClickCondition: t[11] || (t[11] = (e) => (i.isShowConditionsModal = !0)),
                                                                onClickDescription: t[12] || (t[12] = (e) => (i.isShowDescriptionModal = !0)),
                                                                onClickFormula: t[13] || (t[13] = (e) => (i.isShowFormulaModal = !0)),
                                                            },
                                                            null,
                                                            8,
                                                            ["field"]
                                                        ))
                                                      : "heading" !== n.field.type
                                                      ? (si(),
                                                        ui(
                                                            "span",
                                                            { key: 4, class: "dropdown dropdown-end", onMouseenter: t[21] || (t[21] = (e) => (i.renderDropdown = !0)), onTouchstart: t[22] || (t[22] = (e) => (i.renderDropdown = !0)) },
                                                            [
                                                                yi(
                                                                    "label",
                                                                    { tabindex: "0", title: r.t("settings"), class: "cursor-pointer text-transparent group-hover:text-base-content" },
                                                                    [vi(u, { width: 18, "stroke-width": 1.6 })],
                                                                    8,
                                                                    jl
                                                                ),
                                                                i.renderDropdown
                                                                    ? (si(),
                                                                      ui(
                                                                          "ul",
                                                                          {
                                                                              key: 0,
                                                                              tabindex: "0",
                                                                              class: "mt-1.5 dropdown-content menu menu-xs p-2 shadow rounded-box w-52 z-10",
                                                                              style: W({ backgroundColor: r.dropdownBgColor }),
                                                                              draggable: "true",
                                                                              onDragstart: t[19] || (t[19] = jr(() => {}, ["prevent", "stop"])),
                                                                              onClick: t[20] || (t[20] = (...e) => r.closeDropdown && r.closeDropdown(...e)),
                                                                          },
                                                                          [
                                                                              vi(
                                                                                  h,
                                                                                  {
                                                                                      field: n.field,
                                                                                      "default-field": n.defaultField,
                                                                                      editable: n.editable,
                                                                                      "background-color": r.dropdownBgColor,
                                                                                      onClickFormula: t[14] || (t[14] = (e) => (i.isShowFormulaModal = !0)),
                                                                                      onClickDescription: t[15] || (t[15] = (e) => (i.isShowDescriptionModal = !0)),
                                                                                      onClickCondition: t[16] || (t[16] = (e) => (i.isShowConditionsModal = !0)),
                                                                                      onSetDraw: t[17] || (t[17] = (t) => e.$emit("set-draw", t)),
                                                                                      onRemoveArea: r.removeArea,
                                                                                      onScrollTo: t[18] || (t[18] = (t) => e.$emit("scroll-to", t)),
                                                                                  },
                                                                                  null,
                                                                                  8,
                                                                                  ["field", "default-field", "editable", "background-color", "onRemoveArea"]
                                                                              ),
                                                                          ],
                                                                          36
                                                                      ))
                                                                    : Ci("", !0),
                                                            ],
                                                            32
                                                        ))
                                                      : Ci("", !0),
                                                  yi(
                                                      "button",
                                                      { class: "relative text-transparent group-hover:text-base-content pr-1", title: r.t("remove"), onClick: t[23] || (t[23] = (t) => e.$emit("remove", n.field)) },
                                                      [vi(b, { width: 18, "stroke-width": 1.6 })],
                                                      8,
                                                      Bl
                                                  ),
                                              ]))
                                            : Ci("", !0),
                                    ]),
                                    n.field.options
                                        ? (si(),
                                          ui(
                                              "div",
                                              { key: 0, ref: "options", class: "border-t border-base-300 mx-2 pt-2 space-y-1.5", draggable: "true", onDragstart: t[27] || (t[27] = jr(() => {}, ["prevent", "stop"])) },
                                              [
                                                  (si(!0),
                                                  ui(
                                                      ni,
                                                      null,
                                                      ro(
                                                          n.field.options,
                                                          (o, i) => (
                                                              si(),
                                                              ui("div", { key: o.uuid, class: "flex space-x-1.5 items-center" }, [
                                                                  yi("span", Ul, ne(i + 1) + ". ", 1),
                                                                  n.editable &&
                                                                  ["radio", "multiple"].includes(n.field.type) &&
                                                                  (i > 0 || n.field.areas.find((e) => e.option_uuid) || !n.field.areas.length) &&
                                                                  !n.field.areas.find((e) => e.option_uuid === o.uuid)
                                                                      ? (si(),
                                                                        ui("div", Ll, [
                                                                            Cn(
                                                                                yi(
                                                                                    "input",
                                                                                    {
                                                                                        "onUpdate:modelValue": (e) => (o.value = e),
                                                                                        class: "w-full input input-primary input-xs text-sm bg-transparent !pr-7 -mr-6",
                                                                                        type: "text",
                                                                                        dir: "auto",
                                                                                        required: "",
                                                                                        placeholder: `${r.t("option")} ${i + 1}`,
                                                                                        onBlur: t[24] || (t[24] = (...e) => r.save && r.save(...e)),
                                                                                    },
                                                                                    null,
                                                                                    40,
                                                                                    Vl
                                                                                ),
                                                                                [[Ar, o.value]]
                                                                            ),
                                                                            yi(
                                                                                "button",
                                                                                { title: r.t("draw"), tabindex: "-1", onClick: jr((t) => e.$emit("set-draw", { field: n.field, option: o }), ["prevent"]) },
                                                                                [vi(s, { width: 18, "stroke-width": 1.6 })],
                                                                                8,
                                                                                Yl
                                                                            ),
                                                                        ]))
                                                                      : Cn(
                                                                            (si(),
                                                                            ui(
                                                                                "input",
                                                                                {
                                                                                    key: 1,
                                                                                    "onUpdate:modelValue": (e) => (o.value = e),
                                                                                    class: "w-full input input-primary input-xs text-sm bg-transparent",
                                                                                    placeholder: `${r.t("option")} ${i + 1}`,
                                                                                    type: "text",
                                                                                    readonly: !n.editable,
                                                                                    required: "",
                                                                                    dir: "auto",
                                                                                    onFocus: (e) => r.maybeFocusOnOptionArea(o),
                                                                                    onBlur: t[25] || (t[25] = (...e) => r.save && r.save(...e)),
                                                                                },
                                                                                null,
                                                                                40,
                                                                                Wl
                                                                            )),
                                                                            [[Ar, o.value]]
                                                                        ),
                                                                  n.editable ? (si(), ui("button", { key: 2, class: "text-sm w-3.5", tabindex: "-1", onClick: (e) => r.removeOption(o) }, " × ", 8, Xl)) : Ci("", !0),
                                                              ])
                                                          )
                                                      ),
                                                      128
                                                  )),
                                                  n.field.options && !n.editable
                                                      ? (si(), ui("div", Hl))
                                                      : n.field.options && n.editable
                                                      ? (si(), ui("button", { key: 1, class: "text-center text-sm w-full pb-1", onClick: t[26] || (t[26] = (...e) => r.addOption && r.addOption(...e)) }, " + " + ne(r.t("add_option")), 1))
                                                      : Ci("", !0),
                                              ],
                                              544
                                          ))
                                        : Ci("", !0),
                                ],
                                4
                            ),
                            i.isShowFormulaModal
                                ? (si(),
                                  hi(
                                      ei,
                                      { key: 0, to: r.modalContainerEl },
                                      [
                                          vi(f, { field: n.field, editable: n.editable && !n.defaultField, "build-default-name": r.buildDefaultName, onClose: t[28] || (t[28] = (e) => (i.isShowFormulaModal = !1)) }, null, 8, [
                                              "field",
                                              "editable",
                                              "build-default-name",
                                          ]),
                                      ],
                                      8,
                                      ["to"]
                                  ))
                                : Ci("", !0),
                            i.isShowConditionsModal
                                ? (si(),
                                  hi(
                                      ei,
                                      { key: 1, to: r.modalContainerEl },
                                      [vi(m, { field: n.field, "build-default-name": r.buildDefaultName, onClose: t[29] || (t[29] = (e) => (i.isShowConditionsModal = !1)) }, null, 8, ["field", "build-default-name"])],
                                      8,
                                      ["to"]
                                  ))
                                : Ci("", !0),
                            i.isShowDescriptionModal
                                ? (si(),
                                  hi(
                                      ei,
                                      { key: 2, to: r.modalContainerEl },
                                      [
                                          vi(g, { field: n.field, editable: n.editable && !n.defaultField, "build-default-name": r.buildDefaultName, onClose: t[30] || (t[30] = (e) => (i.isShowDescriptionModal = !1)) }, null, 8, [
                                              "field",
                                              "editable",
                                              "build-default-name",
                                          ]),
                                      ],
                                      8,
                                      ["to"]
                                  ))
                                : Ci("", !0),
                        ])
                    );
                },
            ],
        ]),
        Yc = { class: "flex space-x-2 items-end" },
        Wc = { class: "group/contenteditable-container bg-base-100 rounded-md p-2 border border-base-300 w-full flex justify-between items-end" },
        Xc = { class: "flex items-center space-x-2" },
        Hc = { class: "dropdown dropdown-top dropdown-end" },
        Kc = { tabindex: "0", class: "bg-base-100 cursor-pointer rounded-md p-2 border border-base-300 w-full flex justify-center" },
        Zc = ["onClick"],
        Jc = { class: "py-1 flex items-center" },
        Gc = ["onClick"],
        Qc = { key: 0 },
        ep = { class: "py-1" },
        tp = ["title"],
        np = { key: 1, ref: "label", tabindex: "0", class: "group cursor-pointer group/contenteditable-container rounded-md p-2 border border-base-300 hover:border-content w-full flex justify-between" },
        op = { class: "flex items-center space-x-2" },
        ip = { class: "flex items-center transition-all duration-75 group-hover:border border-base-content/20 border-dashed w-6 h-6 flex justify-center items-center rounded" },
        rp = ["onClick"],
        ap = { class: "py-1 flex items-center" },
        lp = { key: 0, class: "flex" },
        sp = { class: "flex-col pr-1 hidden group-hover:flex -mt-1 h-0" },
        dp = ["title", "onClick"],
        cp = ["title", "onClick"],
        pp = ["onClick"],
        up = { key: 0 },
        hp = { class: "py-1" };
    var bp = Ha("user-plus", 0, [
            ["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0", key: "svg-0" }],
            ["path", { d: "M16 19h6", key: "svg-1" }],
            ["path", { d: "M19 16v6", key: "svg-2" }],
            ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4", key: "svg-3" }],
        ]),
        fp = Ha("chevron-down", 0, [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]]),
        mp = Ha("plus", 0, [
            ["path", { d: "M12 5l0 14", key: "svg-0" }],
            ["path", { d: "M5 12l14 0", key: "svg-1" }],
        ]);
    const gp = {
            name: "FieldSubmitter",
            components: { IconUserPlus: bp, IconChevronDown: fp, Contenteditable: Jl, IconPlus: mp, IconTrashX: qc, IconChevronUp: Ha("chevron-up", 0, [["path", { d: "M6 15l6 -6l6 6", key: "svg-0" }]]) },
            inject: ["t", "save"],
            props: {
                submitters: { type: Array, required: !0 },
                editable: { type: Boolean, required: !1, default: !0 },
                compact: { type: Boolean, required: !1, default: !1 },
                mobileView: { type: Boolean, required: !1, default: !1 },
                allowAddNew: { type: Boolean, required: !1, default: !0 },
                modelValue: { type: String, required: !0 },
                menuStyle: { type: Object, required: !1, default: () => ({}) },
                menuClasses: { type: String, required: !1, default: "dropdown-content menu p-2 shadow rounded-box w-full z-10" },
            },
            emits: ["update:model-value", "remove", "new-submitter", "name-change"],
            data: () => ({ renderDropdown: !1 }),
            computed: {
                colors: () => [
                    "bg-red-500",
                    "bg-sky-500",
                    "bg-emerald-500",
                    "bg-yellow-300",
                    "bg-purple-600",
                    "bg-pink-500",
                    "bg-cyan-500",
                    "bg-orange-500",
                    "bg-lime-500",
                    "bg-indigo-500",
                    "bg-red-500",
                    "bg-sky-500",
                    "bg-emerald-500",
                    "bg-yellow-300",
                    "bg-purple-600",
                    "bg-pink-500",
                    "bg-cyan-500",
                    "bg-orange-500",
                    "bg-lime-500",
                    "bg-indigo-500",
                ],
                names() {
                    return [
                        this.t("first_party"),
                        this.t("second_party"),
                        this.t("third_party"),
                        this.t("fourth_party"),
                        this.t("fifth_party"),
                        this.t("sixth_party"),
                        this.t("seventh_party"),
                        this.t("eighth_party"),
                        this.t("ninth_party"),
                        this.t("tenth_party"),
                        this.t("eleventh_party"),
                        this.t("twelfth_party"),
                        this.t("thirteenth_party"),
                        this.t("fourteenth_party"),
                        this.t("fifteenth_party"),
                        this.t("sixteenth_party"),
                        this.t("seventeenth_party"),
                        this.t("eighteenth_party"),
                        this.t("nineteenth_party"),
                        this.t("twentieth_party"),
                    ];
                },
                selectedSubmitter() {
                    return this.submitters.find((e) => e.uuid === this.modelValue);
                },
            },
            methods: {
                selectSubmitter(e) {
                    this.$emit("update:model-value", e.uuid);
                },
                remove(e) {
                    window.confirm(this.t("are_you_sure_")) && this.$emit("remove", e);
                },
                move(e, t) {
                    const n = this.submitters.indexOf(e);
                    this.submitters.splice(n, 1), n + t > this.submitters.length ? this.submitters.unshift(e) : n + t < 0 ? this.submitters.push(e) : this.submitters.splice(n + t, 0, e), this.selectSubmitter(e), this.save();
                },
                addSubmitter() {
                    const e = { name: this.names[this.submitters.length], uuid: Uc() };
                    this.submitters.push(e), this.$emit("update:model-value", e.uuid), this.$emit("new-submitter", e);
                },
                closeDropdown() {
                    document.activeElement.blur();
                },
            },
        },
        wp = (0, Ga.A)(gp, [
            [
                "render",
                function (e, t, n, o, i, r) {
                    const a = eo("Contenteditable"),
                        l = eo("IconChevronUp"),
                        s = eo("IconTrashX"),
                        d = eo("IconUserPlus");
                    return n.mobileView
                        ? (si(),
                          ui(
                              "div",
                              { key: 0, onMouseenter: t[4] || (t[4] = (e) => (i.renderDropdown = !0)), onTouchstart: t[5] || (t[5] = (e) => (i.renderDropdown = !0)) },
                              [
                                  yi("div", Yc, [
                                      yi("div", Wc, [
                                          yi("div", Xc, [
                                              yi("span", { class: J(["w-3 h-3 flex-shrink-0 rounded-full", r.colors[n.submitters.indexOf(r.selectedSubmitter)]]) }, null, 2),
                                              vi(
                                                  a,
                                                  {
                                                      modelValue: r.selectedSubmitter.name,
                                                      "onUpdate:modelValue": [t[0] || (t[0] = (e) => (r.selectedSubmitter.name = e)), t[1] || (t[1] = (t) => e.$emit("name-change", r.selectedSubmitter))],
                                                      class: "cursor-text",
                                                      "icon-inline": !0,
                                                      editable: n.editable,
                                                      "select-on-edit-click": !0,
                                                      "icon-width": 18,
                                                  },
                                                  null,
                                                  8,
                                                  ["modelValue", "editable"]
                                              ),
                                          ]),
                                      ]),
                                      yi("div", Hc, [
                                          yi("label", Kc, [vi(l, { width: "24", height: "24" })]),
                                          n.editable && i.renderDropdown
                                              ? (si(),
                                                ui(
                                                    "ul",
                                                    { key: 0, tabindex: "0", class: J(["rounded-md min-w-max mb-2", n.menuClasses]), style: W(n.menuStyle), onClick: t[3] || (t[3] = (...e) => r.closeDropdown && r.closeDropdown(...e)) },
                                                    [
                                                        (si(!0),
                                                        ui(
                                                            ni,
                                                            null,
                                                            ro(
                                                                n.submitters,
                                                                (e, t) => (
                                                                    si(),
                                                                    ui("li", { key: e.uuid }, [
                                                                        yi(
                                                                            "a",
                                                                            {
                                                                                href: "#",
                                                                                class: J(["flex px-2 group justify-between items-center", { active: e === r.selectedSubmitter }]),
                                                                                onClick: jr((t) => r.selectSubmitter(e), ["prevent"]),
                                                                            },
                                                                            [
                                                                                yi("span", Jc, [yi("span", { class: J(["rounded-full w-3 h-3 ml-1 mr-3", r.colors[t]]) }, null, 2), yi("span", null, ne(e.name), 1)]),
                                                                                n.submitters.length > 1 && n.editable
                                                                                    ? (si(), ui("button", { key: 0, class: "px-2", onClick: jr((t) => r.remove(e), ["prevent", "stop"]) }, [vi(s, { width: 18 })], 8, Gc))
                                                                                    : Ci("", !0),
                                                                            ],
                                                                            10,
                                                                            Zc
                                                                        ),
                                                                    ])
                                                                )
                                                            ),
                                                            128
                                                        )),
                                                        n.submitters.length < r.names.length && n.editable
                                                            ? (si(),
                                                              ui("li", Qc, [
                                                                  yi("a", { href: "#", class: "flex px-2", onClick: t[2] || (t[2] = jr((...e) => r.addSubmitter && r.addSubmitter(...e), ["prevent"])) }, [
                                                                      vi(d, { width: 20, "stroke-width": 1.6 }),
                                                                      yi("span", ep, ne(r.t("add")) + " " + ne(r.names[n.submitters.length]), 1),
                                                                  ]),
                                                              ]))
                                                            : Ci("", !0),
                                                    ],
                                                    6
                                                ))
                                              : Ci("", !0),
                                      ]),
                                  ]),
                              ],
                              32
                          ))
                        : (si(),
                          ui(
                              "div",
                              { key: 1, class: "dropdown", onMouseenter: t[10] || (t[10] = (e) => (i.renderDropdown = !0)), onTouchstart: t[11] || (t[11] = (e) => (i.renderDropdown = !0)) },
                              [
                                  n.compact
                                      ? (si(),
                                        ui(
                                            "label",
                                            { key: 0, tabindex: "0", title: r.selectedSubmitter?.name, class: "cursor-pointer text-base-100 flex h-full items-center justify-center" },
                                            [yi("button", { class: J(["mx-1 w-3 h-3 rounded-full", r.colors[n.submitters.indexOf(r.selectedSubmitter)]]) }, null, 2)],
                                            8,
                                            tp
                                        ))
                                      : (si(),
                                        ui(
                                            "label",
                                            np,
                                            [
                                                yi("div", op, [
                                                    yi("span", { class: J(["w-3 h-3 rounded-full", r.colors[n.submitters.indexOf(r.selectedSubmitter)]]) }, null, 2),
                                                    vi(
                                                        a,
                                                        {
                                                            modelValue: r.selectedSubmitter.name,
                                                            "onUpdate:modelValue": [t[6] || (t[6] = (e) => (r.selectedSubmitter.name = e)), t[7] || (t[7] = (t) => e.$emit("name-change", r.selectedSubmitter))],
                                                            class: "cursor-text",
                                                            "icon-inline": !0,
                                                            editable: n.editable,
                                                            "select-on-edit-click": !0,
                                                            "icon-width": 18,
                                                        },
                                                        null,
                                                        8,
                                                        ["modelValue", "editable"]
                                                    ),
                                                ]),
                                                yi("span", ip, [(si(), hi(no(n.editable ? "IconPlus" : "IconChevronDown"), { width: "18", height: "18" }))]),
                                            ],
                                            512
                                        )),
                                  (!n.editable && n.compact) || !i.renderDropdown
                                      ? Ci("", !0)
                                      : (si(),
                                        ui(
                                            "ul",
                                            { key: 2, tabindex: "0", class: J(n.menuClasses), style: W(n.menuStyle), onClick: t[9] || (t[9] = (...e) => r.closeDropdown && r.closeDropdown(...e)) },
                                            [
                                                (si(!0),
                                                ui(
                                                    ni,
                                                    null,
                                                    ro(
                                                        n.submitters,
                                                        (t, o) => (
                                                            si(),
                                                            ui("li", { key: t.uuid }, [
                                                                yi(
                                                                    "a",
                                                                    {
                                                                        href: "#",
                                                                        class: J(["flex px-2 group justify-between items-center", { active: t === r.selectedSubmitter, "py-0.5": n.submitters.length > 8 }]),
                                                                        onClick: jr((e) => r.selectSubmitter(t), ["prevent"]),
                                                                    },
                                                                    [
                                                                        yi("span", ap, [yi("span", { class: J(["rounded-full w-3 h-3 ml-1 mr-3", r.colors[o]]) }, null, 2), yi("span", null, ne(t.name), 1)]),
                                                                        !n.compact && n.submitters.length > 1 && n.editable
                                                                            ? (si(),
                                                                              ui("div", lp, [
                                                                                  yi("div", sp, [
                                                                                      yi(
                                                                                          "button",
                                                                                          {
                                                                                              title: r.t("up"),
                                                                                              class: "relative w-2",
                                                                                              style: { "font-size": "10px", "margin-bottom": "-4px" },
                                                                                              onClick: jr((n) => [r.move(t, -1), e.$refs.label.focus()], ["prevent", "stop"]),
                                                                                          },
                                                                                          " ▲ ",
                                                                                          8,
                                                                                          dp
                                                                                      ),
                                                                                      yi(
                                                                                          "button",
                                                                                          {
                                                                                              title: r.t("down"),
                                                                                              class: "relative w-2",
                                                                                              style: { "font-size": "10px", "margin-top": "-4px" },
                                                                                              onClick: jr((n) => [r.move(t, 1), e.$refs.label.focus()], ["prevent", "stop"]),
                                                                                          },
                                                                                          " ▼ ",
                                                                                          8,
                                                                                          cp
                                                                                      ),
                                                                                  ]),
                                                                                  !n.compact && n.submitters.length > 1 && n.editable
                                                                                      ? (si(),
                                                                                        ui("button", { key: 0, class: "hidden group-hover:block px-2", onClick: jr((e) => r.remove(t), ["prevent", "stop"]) }, [vi(s, { width: 18 })], 8, pp))
                                                                                      : Ci("", !0),
                                                                              ]))
                                                                            : Ci("", !0),
                                                                    ],
                                                                    10,
                                                                    rp
                                                                ),
                                                            ])
                                                        )
                                                    ),
                                                    128
                                                )),
                                                n.submitters.length < r.names.length && n.editable && n.allowAddNew
                                                    ? (si(),
                                                      ui("li", up, [
                                                          yi("a", { href: "#", class: "flex px-2", onClick: t[8] || (t[8] = jr((...e) => r.addSubmitter && r.addSubmitter(...e), ["prevent"])) }, [
                                                              vi(d, { width: 20, "stroke-width": 1.6 }),
                                                              yi("span", hp, ne(r.t("add")) + " " + ne(r.names[n.submitters.length]), 1),
                                                          ]),
                                                      ]))
                                                    : Ci("", !0),
                                            ],
                                            6
                                        )),
                              ],
                              32
                          ));
                },
            ],
        ]);
    var yp = Ha("circle-plus", 0, [
            ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }],
            ["path", { d: "M9 12h6", key: "svg-1" }],
            ["path", { d: "M12 9v6", key: "svg-2" }],
        ]),
        vp = Ha("lock", 0, [
            ["path", { d: "M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z", key: "svg-0" }],
            ["path", { d: "M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0", key: "svg-1" }],
            ["path", { d: "M8 11v-4a4 4 0 1 1 8 0v4", key: "svg-2" }],
        ]);
    const xp = { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "currentColor", fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round" },
        _p = [
            ki(
                '<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>',
                7
            ),
        ],
        kp = { name: "DragIcon" },
        Cp = {
            name: "TemplateFields",
            components: {
                Field: Vc,
                FieldType: ws,
                IconCirclePlus: yp,
                FieldSubmitter: wp,
                IconDrag: (0, Ga.A)(kp, [
                    [
                        "render",
                        function (e, t, n, o, i, r) {
                            return si(), ui("svg", xp, _p);
                        },
                    ],
                ]),
                IconLock: vp,
            },
            inject: ["save", "backgroundColor", "withPhone", "withPayment", "t", "fieldsDragFieldRef"],
            props: {
                fields: { type: Array, required: !0 },
                withHelp: { type: Boolean, required: !1, default: !0 },
                editable: { type: Boolean, required: !1, default: !0 },
                defaultFields: { type: Array, required: !1, default: () => [] },
                defaultRequiredFields: { type: Array, required: !1, default: () => [] },
                onlyDefinedFields: { type: Boolean, required: !1, default: !0 },
                drawFieldType: { type: String, required: !1, default: "" },
                defaultSubmitters: { type: Array, required: !1, default: () => [] },
                withStickySubmitters: { type: Boolean, required: !1, default: !0 },
                fieldTypes: { type: Array, required: !1, default: () => [] },
                submitters: { type: Array, required: !0 },
                selectedSubmitter: { type: Object, required: !0 },
            },
            emits: ["add-field", "set-draw", "set-draw-type", "set-drag", "drag-end", "scroll-to-area", "change-submitter"],
            data: () => ({ defaultFieldsSearch: "" }),
            computed: {
                fieldNames: ws.computed.fieldNames,
                fieldIcons: ws.computed.fieldIcons,
                isShowFieldSearch() {
                    return this.submitterDefaultFields.length > 15;
                },
                fieldIconsSorted() {
                    return this.fieldTypes.length ? this.fieldTypes.reduce((e, t) => ((e[t] = this.fieldIcons[t]), e), {}) : Object.fromEntries(Object.entries(this.fieldIcons).filter(([e]) => "heading" !== e));
                },
                submitterFields() {
                    return this.fields.filter((e) => e.submitter_uuid === this.selectedSubmitter.uuid);
                },
                submitterDefaultFields() {
                    return this.defaultFields.filter((e) => !(this.submitterFields.find((t) => t.name === e.name) || (e.role && e.role !== this.selectedSubmitter.name)));
                },
                filteredSubmitterDefaultFields() {
                    return this.defaultFieldsSearch ? this.submitterDefaultFields.filter((e) => e.name.toLowerCase().includes(this.defaultFieldsSearch.toLowerCase())) : this.submitterDefaultFields;
                },
            },
            methods: {
                onDragstart(e) {
                    this.$emit("set-drag", e);
                },
                onFieldDragover(e) {
                    const t = e.target.closest("[data-uuid]"),
                        n = this.$refs.fields.querySelector(`[data-uuid="${this.fieldsDragFieldRef.value.uuid}"]`);
                    if (n && t && t !== n) {
                        const e = Array.from(this.$refs.fields.children);
                        e.indexOf(n) < e.indexOf(t) ? t.after(n) : t.before(n);
                    }
                },
                reorderFields() {
                    Array.from(this.$refs.fields.children).forEach((e, t) => {
                        if (e.dataset.uuid !== this.fields[t].uuid) {
                            const n = this.fields.find((t) => t.uuid === e.dataset.uuid);
                            this.fields.splice(this.fields.indexOf(n), 1), this.fields.splice(t, 0, n);
                        }
                    }),
                        this.save();
                },
                removeSubmitter(e) {
                    [...this.fields].forEach((t) => {
                        t.submitter_uuid === e.uuid && this.removeField(t);
                    }),
                        this.submitters.splice(this.submitters.indexOf(e), 1),
                        this.selectedSubmitter === e && this.$emit("change-submitter", this.submitters[0]),
                        this.save();
                },
                removeField(e) {
                    this.fields.splice(this.fields.indexOf(e), 1),
                        this.fields.forEach((t) => {
                            (t.conditions || []).forEach((n) => {
                                n.field_uuid === e.uuid && t.conditions.splice(t.conditions.indexOf(n), 1);
                            });
                        }),
                        this.save();
                },
            },
        },
        Sp = (0, Ga.A)(Cp, [
            [
                "render",
                function (e, t, n, o, i, r) {
                    const a = eo("FieldSubmitter"),
                        l = eo("Field"),
                        s = eo("IconDrag"),
                        d = eo("FieldType"),
                        c = eo("IconLock");
                    return (
                        si(),
                        ui(
                            ni,
                            null,
                            [
                                yi(
                                    "div",
                                    { class: J(n.withStickySubmitters ? "sticky top-0 z-[1]" : "") },
                                    [
                                        vi(
                                            a,
                                            {
                                                "model-value": n.selectedSubmitter.uuid,
                                                class: "roles-dropdown w-full rounded-lg",
                                                style: W(n.withStickySubmitters ? { backgroundColor: r.backgroundColor } : {}),
                                                submitters: n.submitters,
                                                "menu-style": { backgroundColor: ["", null, "transparent"].includes(r.backgroundColor) ? "white" : r.backgroundColor },
                                                editable: n.editable && !n.defaultSubmitters.length,
                                                onNewSubmitter: r.save,
                                                onRemove: r.removeSubmitter,
                                                onNameChange: r.save,
                                                "onUpdate:modelValue":
                                                    t[0] ||
                                                    (t[0] = (t) =>
                                                        e.$emit(
                                                            "change-submitter",
                                                            n.submitters.find((e) => e.uuid === t)
                                                        )),
                                            },
                                            null,
                                            8,
                                            ["model-value", "style", "submitters", "menu-style", "editable", "onNewSubmitter", "onRemove", "onNameChange"]
                                        ),
                                    ],
                                    2
                                ),
                                yi(
                                    "div",
                                    {
                                        ref: "fields",
                                        class: "fields mb-1 mt-2",
                                        onDragover: t[4] || (t[4] = jr((...e) => r.onFieldDragover && r.onFieldDragover(...e), ["prevent"])),
                                        onDrop: t[5] || (t[5] = (...e) => r.reorderFields && r.reorderFields(...e)),
                                    },
                                    [
                                        (si(!0),
                                        ui(
                                            ni,
                                            null,
                                            ro(
                                                r.submitterFields,
                                                (o) => (
                                                    si(),
                                                    hi(
                                                        l,
                                                        {
                                                            key: o.uuid,
                                                            "data-uuid": o.uuid,
                                                            field: o,
                                                            "type-index": n.fields.filter((e) => e.type === o.type).indexOf(o),
                                                            editable: n.editable && (!r.fieldsDragFieldRef.value || r.fieldsDragFieldRef.value !== o),
                                                            "default-field": n.defaultFields.find((e) => e.name === o.name),
                                                            draggable: n.editable,
                                                            onDragstart: (e) => (r.fieldsDragFieldRef.value = o),
                                                            onDragend: t[1] || (t[1] = (e) => (r.fieldsDragFieldRef.value = null)),
                                                            onRemove: r.removeField,
                                                            onScrollTo: t[2] || (t[2] = (t) => e.$emit("scroll-to-area", t)),
                                                            onSetDraw: t[3] || (t[3] = (t) => e.$emit("set-draw", t)),
                                                        },
                                                        null,
                                                        8,
                                                        ["data-uuid", "field", "type-index", "editable", "default-field", "draggable", "onDragstart", "onRemove"]
                                                    )
                                                )
                                            ),
                                            128
                                        )),
                                    ],
                                    544
                                ),
                                r.submitterDefaultFields.length && n.editable
                                    ? (si(),
                                      ui("div", cl, [
                                          pl,
                                          r.isShowFieldSearch
                                              ? (si(),
                                                ui(
                                                    ni,
                                                    { key: 0 },
                                                    [
                                                        Cn(
                                                            yi(
                                                                "input",
                                                                {
                                                                    "onUpdate:modelValue": t[6] || (t[6] = (e) => (i.defaultFieldsSearch = e)),
                                                                    placeholder: r.t("search_field"),
                                                                    class: "input input-ghost input-xs px-0 text-base mb-2 !outline-0 !rounded bg-transparent w-full",
                                                                },
                                                                null,
                                                                8,
                                                                ul
                                                            ),
                                                            [[Ar, i.defaultFieldsSearch]]
                                                        ),
                                                        hl,
                                                    ],
                                                    64
                                                ))
                                              : Ci("", !0),
                                          yi(
                                              "div",
                                              { class: "overflow-auto relative", style: W({ maxHeight: r.isShowFieldSearch ? "210px" : "", minHeight: r.isShowFieldSearch ? "210px" : "" }) },
                                              [
                                                  !r.filteredSubmitterDefaultFields.length && i.defaultFieldsSearch
                                                      ? (si(),
                                                        ui("div", bl, [
                                                            yi("div", null, ne(r.t("field_not_found")), 1),
                                                            yi("a", { href: "#", class: "link", onClick: t[7] || (t[7] = jr((e) => (i.defaultFieldsSearch = ""), ["prevent"])) }, ne(r.t("clear")), 1),
                                                        ]))
                                                      : Ci("", !0),
                                                  (si(!0),
                                                  ui(
                                                      ni,
                                                      null,
                                                      ro(
                                                          r.filteredSubmitterDefaultFields,
                                                          (o) => (
                                                              si(),
                                                              ui(
                                                                  "div",
                                                                  {
                                                                      key: o.name,
                                                                      style: W({ backgroundColor: r.backgroundColor }),
                                                                      draggable: "true",
                                                                      class: "default-field border border-base-300 rounded rounded-tr-none relative group mb-2",
                                                                      onDragstart: (e) => r.onDragstart({ type: "text", ...o }),
                                                                      onDragend: t[8] || (t[8] = (t) => e.$emit("drag-end")),
                                                                  },
                                                                  [
                                                                      yi("div", ml, [
                                                                          yi("div", gl, [
                                                                              vi(s),
                                                                              vi(d, { "model-value": o.type || "text", editable: !1, "button-width": 20 }, null, 8, ["model-value"]),
                                                                              yi("span", wl, ne(o.title || o.name), 1),
                                                                          ]),
                                                                          n.defaultRequiredFields.includes(o)
                                                                              ? (si(), ui("span", { key: 0, "data-tip": r.t("required"), class: "text-red-400 text-3xl pr-1.5 tooltip tooltip-left h-8" }, " * ", 8, yl))
                                                                              : Ci("", !0),
                                                                      ]),
                                                                  ],
                                                                  44,
                                                                  fl
                                                              )
                                                          )
                                                      ),
                                                      128
                                                  )),
                                              ],
                                              4
                                          ),
                                      ]))
                                    : Ci("", !0),
                                n.editable && !n.onlyDefinedFields
                                    ? (si(),
                                      ui("div", vl, [
                                          (si(!0),
                                          ui(
                                              ni,
                                              null,
                                              ro(
                                                  r.fieldIconsSorted,
                                                  (o, i) => (
                                                      si(),
                                                      ui(
                                                          ni,
                                                          { key: i },
                                                          [
                                                              (0 !== n.fieldTypes.length && !n.fieldTypes.includes(i)) || (!r.withPhone && "phone" == i) || (!r.withPayment && "payment" == i)
                                                                  ? "phone" != i || (0 !== n.fieldTypes.length && !n.fieldTypes.includes(i))
                                                                      ? Ci("", !0)
                                                                      : (si(),
                                                                        ui(
                                                                            "div",
                                                                            {
                                                                                key: 1,
                                                                                class: J(["tooltip tooltip-bottom flex", { "tooltip-bottom-end": r.withPayment, "tooltip-bottom": !r.withPayment }]),
                                                                                "data-tip": r.t("unlock_sms_verified_phone_number_field_with_paid_plan_use_text_field_for_phone_numbers_without_verification"),
                                                                            },
                                                                            [
                                                                                yi(
                                                                                    "a",
                                                                                    {
                                                                                        href: "https://www.docuseal.com/pricing",
                                                                                        target: "_blank",
                                                                                        class: "opacity-50 flex items-center justify-center border border-dashed border-base-300 w-full rounded relative",
                                                                                        style: W({ backgroundColor: r.backgroundColor }),
                                                                                    },
                                                                                    [yi("div", Sl, [vi(c, { width: "18", height: "18", "stroke-width": "1.5" })]), yi("div", Fl, [(si(), hi(no(o))), yi("span", Dl, ne(r.fieldNames[i]), 1)])],
                                                                                    4
                                                                                ),
                                                                            ],
                                                                            10,
                                                                            Cl
                                                                        ))
                                                                  : (si(),
                                                                    ui(
                                                                        "button",
                                                                        {
                                                                            key: 0,
                                                                            draggable: "true",
                                                                            class: J([
                                                                                "field-type-button group flex items-center justify-center border border-dashed w-full rounded relative",
                                                                                n.drawFieldType === i ? "border-base-content/40" : "border-base-300 hover:border-base-content/20",
                                                                            ]),
                                                                            style: W({ backgroundColor: r.backgroundColor }),
                                                                            onDragstart: (e) => r.onDragstart({ type: i }),
                                                                            onDragend: t[9] || (t[9] = (t) => e.$emit("drag-end")),
                                                                            onClick: (t) => (["file", "payment"].includes(i) ? e.$emit("add-field", i) : e.$emit("set-draw-type", i)),
                                                                        },
                                                                        [
                                                                            yi(
                                                                                "div",
                                                                                { class: J(["flex items-console transition-all cursor-grab h-full absolute left-0", n.drawFieldType === i ? "bg-base-200/50" : "group-hover:bg-base-200/50"]) },
                                                                                [vi(s, { class: "my-auto" })],
                                                                                2
                                                                            ),
                                                                            yi("div", _l, [(si(), hi(no(o))), yi("span", kl, ne(r.fieldNames[i]), 1)]),
                                                                        ],
                                                                        46,
                                                                        xl
                                                                    )),
                                                          ],
                                                          64
                                                      )
                                                  )
                                              ),
                                              128
                                          )),
                                      ]))
                                    : Ci("", !0),
                                n.fields.length < 4 && n.editable && n.withHelp
                                    ? (si(),
                                      ui("div", Al, [
                                          yi("ul", Tl, [
                                              yi("li", null, ne(r.t("draw_a_text_field_on_the_page_with_a_mouse")), 1),
                                              yi("li", null, ne(r.t("drag_and_drop_any_other_field_type_on_the_page")), 1),
                                              yi("li", null, ne(r.t("click_on_the_field_type_above_to_start_drawing_it")), 1),
                                          ]),
                                      ]))
                                    : Ci("", !0),
                            ],
                            64
                        )
                    );
                },
            ],
        ]),
        Fp = Sp,
        Dp = { class: "absolute text-center w-full bottom-0 pr-3 mb-4" },
        Ap = { class: "w-full bg-base-200 px-4 py-2 rounded-md inline-flex space-x-2 mx-auto items-center justify-between mb-2 z-20 md:hidden" },
        Tp = { class: "flex items-center space-x-2" },
        Pp = {
            name: "MobileDrawField",
            components: { Field: Vc, FieldSubmitter: wp },
            inject: ["save", "t", "backgroundColor"],
            props: {
                drawField: { type: Object, required: !0 },
                editable: { type: Boolean, required: !1, default: !0 },
                submitters: { type: Array, required: !0 },
                fields: { type: Array, required: !0 },
                selectedSubmitter: { type: Object, required: !0 },
            },
            emits: ["change-submitter", "cancel"],
            computed: { fieldNames: ws.computed.fieldNames, fieldIcons: ws.computed.fieldIcons },
            methods: {
                removeSubmitter(e) {
                    [...this.fields].forEach((t) => {
                        t.submitter_uuid === e.uuid && this.removeField(t);
                    }),
                        this.submitters.splice(this.submitters.indexOf(e), 1),
                        this.selectedSubmitter === e && this.$emit("change-submitter", this.submitters[0]),
                        this.save();
                },
                removeField(e) {
                    this.fields.splice(this.fields.indexOf(e), 1), this.save();
                },
            },
        },
        Mp = (0, Ga.A)(Pp, [
            [
                "render",
                function (e, t, n, o, i, r) {
                    const a = eo("FieldSubmitter");
                    return (
                        si(),
                        ui("div", Dp, [
                            yi("span", Ap, [
                                yi("div", Tp, [
                                    (si(), hi(no(r.fieldIcons[n.drawField.type]), { width: 20, height: 20, class: "inline", "stroke-width": 1.6 })),
                                    yi("span", null, ne(r.t("draw_field").replace("{field}", r.fieldNames[n.drawField.type])), 1),
                                ]),
                                yi("a", { href: "#", class: "link block text-center", onClick: t[0] || (t[0] = jr((t) => e.$emit("cancel"), ["prevent"])) }, ne(r.t("cancel")), 1),
                            ]),
                            vi(
                                a,
                                {
                                    "model-value": n.selectedSubmitter.uuid,
                                    submitters: n.submitters,
                                    editable: n.editable,
                                    "mobile-view": !0,
                                    "menu-style": { backgroundColor: ["", null, "transparent"].includes(r.backgroundColor) ? "white" : r.backgroundColor },
                                    onNewSubmitter: r.save,
                                    onRemove: r.removeSubmitter,
                                    onNameChange: r.save,
                                    "onUpdate:modelValue":
                                        t[1] ||
                                        (t[1] = (t) =>
                                            e.$emit(
                                                "change-submitter",
                                                n.submitters.find((e) => e.uuid === t)
                                            )),
                                },
                                null,
                                8,
                                ["model-value", "submitters", "editable", "menu-style", "onNewSubmitter", "onRemove", "onNameChange"]
                            ),
                        ])
                    );
                },
            ],
        ]),
        zp = ["src", "width", "height"],
        Ip = { key: 1, class: "top-0 bottom-0 right-0 left-0 absolute" },
        Rp = ["contenteditable"],
        Ep = { key: 2, class: "flex items-center ml-1.5" },
        qp = ["id"],
        Op = ["for"],
        $p = ["id", "checked"],
        Np = ["for"],
        jp = ["title"],
        Bp = ["title"],
        Up = { key: 1, class: "whitespace-pre-wrap" },
        Lp = { key: 2 },
        Vp = { key: 3, class: "w-full flex items-center" },
        Yp = ["contenteditable", "placeholder"],
        Wp = {
            name: "FieldArea",
            components: {
                FieldType: ws,
                IconCheck: Ha("check", 0, [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]]),
                FieldSettings: Vd,
                FormulaModal: oc,
                IconDotsVertical: Ha("dots-vertical", 0, [
                    ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
                    ["path", { d: "M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
                    ["path", { d: "M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }],
                ]),
                DescriptionModal: Ec,
                ConditionsModal: Cc,
                FieldSubmitter: wp,
                IconX: Ud,
            },
            inject: ["template", "selectedAreaRef", "save", "t"],
            props: {
                area: { type: Object, required: !0 },
                inputMode: { type: Boolean, required: !1, default: !1 },
                isDraw: { type: Boolean, required: !1, default: !1 },
                defaultField: { type: Object, required: !1, default: null },
                withFieldPlaceholder: { type: Boolean, required: !1, default: !1 },
                defaultSubmitters: { type: Array, required: !1, default: () => [] },
                editable: { type: Boolean, required: !1, default: !0 },
                field: { type: Object, required: !1, default: null },
            },
            emits: ["start-resize", "stop-resize", "start-drag", "stop-drag", "remove", "scroll-to"],
            data: () => ({
                isShowFormulaModal: !1,
                isShowConditionsModal: !1,
                isContenteditable: !1,
                isSettingsFocus: !1,
                isShowDescriptionModal: !1,
                isResize: !1,
                isDragged: !1,
                isMoved: !1,
                renderDropdown: !1,
                isNameFocus: !1,
                textOverflowChars: 0,
                dragFrom: { x: 0, y: 0 },
            }),
            computed: {
                fieldNames: ws.computed.fieldNames,
                fieldLabels: ws.computed.fieldLabels,
                fieldIcons: ws.computed.fieldIcons,
                isDefaultValuePresent() {
                    return !("radio" === this.field?.type && this.field?.areas?.length > 1) && (this.field?.default_value || 0 === this.field?.default_value);
                },
                isValueInput() {
                    return ("heading" === this.field.type && this.isSelected) || this.isContenteditable || (this.inputMode && ["text", "number", "date"].includes(this.field.type));
                },
                modalContainerEl() {
                    return this.$el.getRootNode().querySelector("#docuseal_modal_container");
                },
                defaultName() {
                    return this.buildDefaultName(this.field, this.template.fields);
                },
                alignClasses: () => ({ center: "justify-center", left: "justify-start", right: "justify-end" }),
                optionIndexText() {
                    return this.area.option_uuid && this.field.options ? `${this.field.options.findIndex((e) => e.uuid === this.area.option_uuid) + 1}.` : "";
                },
                cells() {
                    const e = [];
                    let t = 0;
                    for (; t + (this.area.cell_w + this.area.cell_w / 4) < this.area.w; ) (t += this.area.cell_w || 9999999), e.push(t);
                    return e;
                },
                submitter() {
                    return this.template.submitters.find((e) => e.uuid === this.field.submitter_uuid);
                },
                submitterIndex() {
                    return this.template.submitters.indexOf(this.submitter);
                },
                borderColors: () => [
                    "border-red-500/80",
                    "border-sky-500/80",
                    "border-emerald-500/80",
                    "border-yellow-300/80",
                    "border-purple-600/80",
                    "border-pink-500/80",
                    "border-cyan-500/80",
                    "border-orange-500/80",
                    "border-lime-500/80",
                    "border-indigo-500/80",
                    "border-red-500/80",
                    "border-sky-500/80",
                    "border-emerald-500/80",
                    "border-yellow-300/80",
                    "border-purple-600/80",
                    "border-pink-500/80",
                    "border-cyan-500/80",
                    "border-orange-500/80",
                    "border-lime-500/80",
                    "border-indigo-500/80",
                ],
                bgColors: () => [
                    "bg-red-100",
                    "bg-sky-100",
                    "bg-emerald-100",
                    "bg-yellow-100",
                    "bg-purple-100",
                    "bg-pink-100",
                    "bg-cyan-100",
                    "bg-orange-100",
                    "bg-lime-100",
                    "bg-indigo-100",
                    "bg-red-100",
                    "bg-sky-100",
                    "bg-emerald-100",
                    "bg-yellow-100",
                    "bg-purple-100",
                    "bg-pink-100",
                    "bg-cyan-100",
                    "bg-orange-100",
                    "bg-lime-100",
                    "bg-indigo-100",
                ],
                isSelected() {
                    return this.selectedAreaRef.value === this.area;
                },
                positionStyle() {
                    const { x: e, y: t, w: n, h: o } = this.area;
                    return { top: 100 * t + "%", left: 100 * e + "%", width: 100 * n + "%", height: 100 * o + "%" };
                },
            },
            watch: {
                "field.default_value"() {
                    this.$nextTick(() => {
                        ["date", "text", "number"].includes(this.field.type) &&
                            this.field.default_value &&
                            this.$refs.textContainer &&
                            (0 === this.textOverflowChars || this.textOverflowChars - 4 > `${this.field.default_value}`.length) &&
                            (this.textOverflowChars = this.$el.clientHeight < this.$refs.textContainer.clientHeight ? `${this.field.default_value}`.length : 0);
                    });
                },
            },
            mounted() {
                this.$nextTick(() => {
                    ["date", "text", "number"].includes(this.field.type) &&
                        this.field.default_value &&
                        this.$refs.textContainer &&
                        (0 === this.textOverflowChars || this.textOverflowChars - 4 > `${this.field.default_value}`.length) &&
                        (this.textOverflowChars = this.$el.clientHeight < this.$refs.textContainer.clientHeight ? `${this.field.default_value}`.length : 0);
                });
            },
            methods: {
                buildDefaultName: Vc.methods.buildDefaultName,
                closeDropdown() {
                    document.activeElement.blur();
                },
                maybeToggleDefaultValue() {
                    ["text", "number"].includes(this.field.type)
                        ? ((this.isContenteditable = !0), this.$nextTick(() => this.focusValueInput()))
                        : "checkbox" === this.field.type
                        ? ((this.field.readonly = !this.field.readonly), !0 === this.field.default_value ? delete this.field.default_value : (this.field.default_value = !0), this.save())
                        : "date" === this.field.type && ((this.field.readonly = !this.field.readonly), "{{date}}" === this.field.default_value ? delete this.field.default_value : (this.field.default_value = "{{date}}"), this.save());
                },
                maybeToggleCheckboxValue() {
                    this.inputMode && "checkbox" === this.field.type && ((this.field.readonly = !this.field.readonly), !0 === this.field.default_value ? delete this.field.default_value : (this.field.default_value = !0), this.save());
                },
                focusValueInput(e) {
                    this.$refs.defaultValue !== document.activeElement &&
                        (this.$refs.defaultValue.focus(),
                        this.$refs.defaultValue.innerText.length && this.$refs.defaultValue !== e?.target && window.getSelection().collapse(this.$refs.defaultValue.firstChild, this.$refs.defaultValue.innerText.length));
                },
                formatNumber: (e, t) => ("comma" === t ? new Intl.NumberFormat("en-US").format(e) : "dot" === t ? new Intl.NumberFormat("de-DE").format(e) : "space" === t ? new Intl.NumberFormat("fr-FR").format(e) : e),
                maybeBlurSettings(e) {
                    (e.relatedTarget && this.$refs.settingsDropdown.contains(e.relatedTarget)) || (this.isSettingsFocus = !1);
                },
                onNameFocus(e) {
                    (this.selectedAreaRef.value = this.area),
                        (this.isNameFocus = !0),
                        (this.$refs.name.style.minWidth = this.$refs.name.clientWidth + "px"),
                        this.field.name ||
                            setTimeout(() => {
                                this.$refs.name.innerText = " ";
                            }, 1);
                },
                startResizeCell(e) {
                    this.$el.getRootNode().addEventListener("mousemove", this.onResizeCell), this.$el.getRootNode().addEventListener("mouseup", this.stopResizeCell), this.$emit("start-resize", "ew");
                },
                stopResizeCell(e) {
                    this.$el.getRootNode().removeEventListener("mousemove", this.onResizeCell), this.$el.getRootNode().removeEventListener("mouseup", this.stopResizeCell), this.$emit("stop-resize"), this.save();
                },
                onPaste(e) {
                    const t = (e.clipboardData || window.clipboardData).getData("text/plain"),
                        n = this.$el.getRootNode().getSelection();
                    n.rangeCount && (n.deleteFromDocument(), n.getRangeAt(0).insertNode(document.createTextNode(t)), n.collapseToEnd());
                },
                onResizeCell(e) {
                    if ("mask" === e.target.id) {
                        const t = e.offsetX / (e.target.clientWidth - 1);
                        t > this.area.x && (this.area.cell_w = t - this.area.x);
                    }
                },
                maybeUpdateOptions() {
                    delete this.field.default_value,
                        ["radio", "multiple", "select"].includes(this.field.type) || delete this.field.options,
                        ["heading"].includes(this.field.type) && (this.field.readonly = !0),
                        ["select", "multiple", "radio"].includes(this.field.type) && (this.field.options ||= [{ value: "", uuid: Uc() }]),
                        (this.field.areas || []).forEach((e) => {
                            "cells" === this.field.type ? (e.cell_w = (2 * e.w) / Math.floor(e.w / e.h)) : delete e.cell_w;
                        });
                },
                onNameBlur(e) {
                    e.relatedTarget === this.$refs.settingsButton && (this.isSettingsFocus = !0);
                    const t = this.$refs.name.innerText.trim();
                    (this.isNameFocus = !1), (this.$refs.name.style.minWidth = ""), t ? (this.field.name = t) : ((this.field.name = ""), (this.$refs.name.innerText = this.defaultName)), this.save();
                },
                onDefaultValueBlur(e) {
                    const t = this.$refs.defaultValue.innerText.trim();
                    if (((this.isContenteditable = !1), t)) {
                        if ("number" === this.field.type) {
                            const e = parseFloat(t);
                            (e || 0 === e) && (this.field.default_value = parseFloat(t));
                        } else this.field.default_value = t;
                        [!0, !1].includes(this.field.readonly) || (this.field.readonly = !0), (this.$refs.defaultValue.innerText = t);
                    } else delete this.field.readonly, delete this.field.default_value, (this.$refs.defaultValue.innerText = "");
                    this.save();
                },
                onDefaultValueEnter(e) {
                    "heading" !== this.field.type && (e.preventDefault(), this.$refs.defaultValue.blur());
                },
                onNameEnter(e) {
                    this.$refs.name.blur();
                },
                resize(e) {
                    "mask" === e.target.id && ((this.area.w = e.offsetX / e.target.clientWidth - this.area.x), (this.area.h = e.offsetY / e.target.clientHeight - this.area.y));
                },
                drag(e) {
                    "mask" === e.target.id && ((this.isDragged = !0), (this.area.x = (e.offsetX - this.dragFrom.x) / e.target.clientWidth), (this.area.y = (e.offsetY - this.dragFrom.y) / e.target.clientHeight));
                },
                startTouchDrag(e) {
                    if (e.target !== this.$refs.touchTarget && e.target !== this.$refs.touchValueTarget) return;
                    document.activeElement?.blur(), e.preventDefault(), (this.isDragged = !0);
                    const t = e.target.getBoundingClientRect();
                    (this.selectedAreaRef.value = this.area),
                        (this.dragFrom = { x: t.left - e.touches[0].clientX, y: t.top - e.touches[0].clientY }),
                        this.$el.getRootNode().addEventListener("touchmove", this.touchDrag),
                        this.$el.getRootNode().addEventListener("touchend", this.stopTouchDrag),
                        this.$emit("start-drag");
                },
                touchDrag(e) {
                    if (!this.editable) return;
                    const t = this.$parent.$refs.mask.previousSibling.getBoundingClientRect();
                    (this.area.x = Math.min(Math.max((this.dragFrom.x + e.touches[0].clientX - t.left) / t.width, 0), 1 - this.area.w)),
                        (this.area.y = Math.min(Math.max((this.dragFrom.y + e.touches[0].clientY - t.top) / t.height, 0), 1 - this.area.h));
                },
                stopTouchDrag() {
                    this.$el.getRootNode().removeEventListener("touchmove", this.touchDrag),
                        this.$el.getRootNode().removeEventListener("touchend", this.stopTouchDrag),
                        this.isDragged && this.save(),
                        (this.isDragged = !1),
                        this.$emit("stop-drag");
                },
                startMouseMove(e) {
                    if (e.target !== this.$refs.touchTarget && e.target !== this.$refs.touchValueTarget) return;
                    document.activeElement !== this.$refs.defaultValue && document.activeElement?.blur(), e.preventDefault(), (this.isDragged = !0);
                    const t = e.target.getBoundingClientRect();
                    (this.selectedAreaRef.value = this.area),
                        "heading" === this.field.type && this.$nextTick(() => this.focusValueInput()),
                        (this.dragFrom = { x: t.left - e.clientX, y: t.top - e.clientY }),
                        this.$el.getRootNode().addEventListener("mousemove", this.mouseMove),
                        this.$el.getRootNode().addEventListener("mouseup", this.stopMouseMove),
                        this.$emit("start-drag");
                },
                mouseMove(e) {
                    if (!this.editable) return;
                    this.isMoved = !0;
                    const t = this.$parent.$refs.mask.previousSibling.getBoundingClientRect();
                    (this.area.x = Math.min(Math.max((this.dragFrom.x + e.clientX - t.left) / t.width, 0), 1 - this.area.w)), (this.area.y = Math.min(Math.max((this.dragFrom.y + e.clientY - t.top) / t.height, 0), 1 - this.area.h));
                },
                stopMouseMove(e) {
                    this.$el.getRootNode().removeEventListener("mousemove", this.mouseMove),
                        this.$el.getRootNode().removeEventListener("mouseup", this.stopMouseMove),
                        this.isMoved && this.save(),
                        (this.isDragged = !1),
                        (this.isMoved = !1),
                        this.$emit("stop-drag");
                },
                stopDrag() {
                    this.$el.getRootNode().removeEventListener("mousemove", this.drag), this.$el.getRootNode().removeEventListener("mouseup", this.stopDrag), this.isDragged && this.save(), (this.isDragged = !1), this.$emit("stop-drag");
                },
                startResize() {
                    (this.selectedAreaRef.value = this.area), this.$el.getRootNode().addEventListener("mousemove", this.resize), this.$el.getRootNode().addEventListener("mouseup", this.stopResize), this.$emit("start-resize", "nwse");
                },
                stopResize() {
                    this.$el.getRootNode().removeEventListener("mousemove", this.resize), this.$el.getRootNode().removeEventListener("mouseup", this.stopResize), this.$emit("stop-resize"), this.save();
                },
                startTouchResize(e) {
                    (this.selectedAreaRef.value = this.area),
                        this.$refs?.name?.blur(),
                        e.preventDefault(),
                        this.$el.getRootNode().addEventListener("touchmove", this.touchResize),
                        this.$el.getRootNode().addEventListener("touchend", this.stopTouchResize),
                        this.$emit("start-resize", "nwse");
                },
                touchResize(e) {
                    const t = this.$parent.$refs.mask.previousSibling.getBoundingClientRect();
                    (this.area.w = (e.touches[0].clientX - t.left) / t.width - this.area.x), (this.area.h = (e.touches[0].clientY - t.top) / t.height - this.area.y);
                },
                stopTouchResize() {
                    this.$el.getRootNode().removeEventListener("touchmove", this.touchResize), this.$el.getRootNode().removeEventListener("touchend", this.stopTouchResize), this.$emit("stop-resize"), this.save();
                },
            },
        },
        Xp = {
            name: "TemplatePage",
            components: {
                FieldArea: (0, Ga.A)(Wp, [
                    [
                        "render",
                        function (e, t, n, o, i, r) {
                            const a = eo("FieldSubmitter"),
                                l = eo("FieldType"),
                                s = eo("IconDotsVertical"),
                                d = eo("FieldSettings"),
                                c = eo("IconX"),
                                p = eo("IconCheck"),
                                u = eo("FormulaModal"),
                                h = eo("ConditionsModal"),
                                b = eo("DescriptionModal");
                            return (
                                si(),
                                ui(
                                    "div",
                                    {
                                        class: "absolute overflow-visible group",
                                        style: W(r.positionStyle),
                                        onPointerdown: t[43] || (t[43] = jr(() => {}, ["stop"])),
                                        onMousedown: t[44] || (t[44] = (...e) => r.startMouseMove && r.startMouseMove(...e)),
                                        onTouchstart: t[45] || (t[45] = (...e) => r.startTouchDrag && r.startTouchDrag(...e)),
                                    },
                                    [
                                        r.isSelected || n.isDraw
                                            ? (si(),
                                              ui("div", { key: 0, class: J(["top-0 bottom-0 right-0 left-0 absolute border border-1.5 pointer-events-none", "heading" === n.field.type ? "" : r.borderColors[r.submitterIndex]]) }, null, 2))
                                            : Ci("", !0),
                                        "cells" === n.field.type && (r.isSelected || n.isDraw)
                                            ? (si(),
                                              ui("div", Ip, [
                                                  (si(!0),
                                                  ui(
                                                      ni,
                                                      null,
                                                      ro(
                                                          r.cells,
                                                          (e, o) => (
                                                              si(),
                                                              ui(
                                                                  "div",
                                                                  {
                                                                      key: o,
                                                                      class: J(["absolute top-0 bottom-0 border-r", "heading" === n.field.type ? "" : r.borderColors[r.submitterIndex]]),
                                                                      style: W({ left: (e / n.area.w) * 100 + "%" }),
                                                                  },
                                                                  [
                                                                      0 === o && n.editable
                                                                          ? (si(),
                                                                            ui(
                                                                                "span",
                                                                                {
                                                                                    key: 0,
                                                                                    class: "h-2.5 w-2.5 rounded-full -bottom-1 border-gray-400 bg-white shadow-md border absolute cursor-ew-resize z-10",
                                                                                    style: { left: "-4px" },
                                                                                    onMousedown: t[0] || (t[0] = jr((...e) => r.startResizeCell && r.startResizeCell(...e), ["stop"])),
                                                                                },
                                                                                null,
                                                                                32
                                                                            ))
                                                                          : Ci("", !0),
                                                                  ],
                                                                  6
                                                              )
                                                          )
                                                      ),
                                                      128
                                                  )),
                                              ]))
                                            : Ci("", !0),
                                        n.field?.type && (r.isSelected || i.isNameFocus)
                                            ? (si(),
                                              ui(
                                                  "div",
                                                  {
                                                      key: 2,
                                                      class: "absolute bg-white rounded-t border overflow-visible whitespace-nowrap flex z-10",
                                                      style: { top: "-25px", height: "25px" },
                                                      onMousedown: t[30] || (t[30] = jr(() => {}, ["stop"])),
                                                      onPointerdown: t[31] || (t[31] = jr(() => {}, ["stop"])),
                                                  },
                                                  [
                                                      "heading" != n.field.type
                                                          ? (si(),
                                                            hi(
                                                                a,
                                                                {
                                                                    key: 0,
                                                                    modelValue: n.field.submitter_uuid,
                                                                    "onUpdate:modelValue": [t[1] || (t[1] = (e) => (n.field.submitter_uuid = e)), r.save],
                                                                    class: "border-r",
                                                                    compact: !0,
                                                                    editable: n.editable && (!n.defaultField || n.defaultField.role !== r.submitter?.name),
                                                                    "allow-add-new": !n.defaultSubmitters.length,
                                                                    "menu-classes": "dropdown-content bg-white menu menu-xs p-2 shadow rounded-box w-52 rounded-t-none -left-[1px] mt-[1px]",
                                                                    submitters: r.template.submitters,
                                                                    onClick: t[2] || (t[2] = (e) => (r.selectedAreaRef.value = n.area)),
                                                                },
                                                                null,
                                                                8,
                                                                ["modelValue", "editable", "allow-add-new", "submitters", "onUpdate:modelValue"]
                                                            ))
                                                          : Ci("", !0),
                                                      vi(
                                                          l,
                                                          {
                                                              modelValue: n.field.type,
                                                              "onUpdate:modelValue": [t[3] || (t[3] = (e) => (n.field.type = e)), t[4] || (t[4] = (e) => [r.maybeUpdateOptions(), r.save()])],
                                                              "button-width": 27,
                                                              editable: n.editable && !n.defaultField,
                                                              "button-classes": "px-1",
                                                              "menu-classes": "bg-white rounded-t-none",
                                                              onClick: t[5] || (t[5] = (e) => (r.selectedAreaRef.value = n.area)),
                                                          },
                                                          null,
                                                          8,
                                                          ["modelValue", "editable"]
                                                      ),
                                                      "checkbox" !== n.field.type || n.field.name
                                                          ? (si(),
                                                            ui(
                                                                "span",
                                                                {
                                                                    key: 1,
                                                                    ref: "name",
                                                                    contenteditable: n.editable && !n.defaultField && "heading" !== n.field.type,
                                                                    dir: "auto",
                                                                    class: "pr-1 cursor-text outline-none block",
                                                                    style: { "min-width": "2px" },
                                                                    onPaste: t[6] || (t[6] = jr((...e) => r.onPaste && r.onPaste(...e), ["prevent"])),
                                                                    onKeydown:
                                                                        t[7] ||
                                                                        (t[7] = Ur(
                                                                            jr((...e) => r.onNameEnter && r.onNameEnter(...e), ["prevent"]),
                                                                            ["enter"]
                                                                        )),
                                                                    onFocus: t[8] || (t[8] = (...e) => r.onNameFocus && r.onNameFocus(...e)),
                                                                    onBlur: t[9] || (t[9] = (...e) => r.onNameBlur && r.onNameBlur(...e)),
                                                                },
                                                                ne(r.optionIndexText) + " " + ne((n.defaultField && n.field.title) || n.field.name || r.defaultName),
                                                                41,
                                                                Rp
                                                            ))
                                                          : Ci("", !0),
                                                      i.isSettingsFocus || (r.isValueInput && "heading" !== n.field.type) || (i.isNameFocus && !["checkbox", "phone"].includes(n.field.type))
                                                          ? (si(),
                                                            ui("div", Ep, [
                                                                r.isValueInput
                                                                    ? Ci("", !0)
                                                                    : Cn(
                                                                          (si(),
                                                                          ui(
                                                                              "input",
                                                                              {
                                                                                  key: 0,
                                                                                  id: `required-checkbox-${n.field.uuid}`,
                                                                                  "onUpdate:modelValue": t[10] || (t[10] = (e) => (n.field.required = e)),
                                                                                  type: "checkbox",
                                                                                  class: "checkbox checkbox-xs no-animation rounded",
                                                                                  onMousedown: t[11] || (t[11] = jr(() => {}, ["prevent"])),
                                                                              },
                                                                              null,
                                                                              40,
                                                                              qp
                                                                          )),
                                                                          [[Tr, n.field.required]]
                                                                      ),
                                                                r.isValueInput
                                                                    ? Ci("", !0)
                                                                    : (si(),
                                                                      ui(
                                                                          "label",
                                                                          {
                                                                              key: 1,
                                                                              for: `required-checkbox-${n.field.uuid}`,
                                                                              class: "label text-xs",
                                                                              onClick: t[12] || (t[12] = jr((e) => (n.field.required = !n.field.required), ["prevent"])),
                                                                              onMousedown: t[13] || (t[13] = jr(() => {}, ["prevent"])),
                                                                          },
                                                                          ne(r.t("required")),
                                                                          41,
                                                                          Op
                                                                      )),
                                                                r.isValueInput
                                                                    ? (si(),
                                                                      ui(
                                                                          "input",
                                                                          {
                                                                              key: 2,
                                                                              id: `readonly-checkbox-${n.field.uuid}`,
                                                                              type: "checkbox",
                                                                              class: "checkbox checkbox-xs no-animation rounded",
                                                                              checked: !(n.field.readonly ?? 1),
                                                                              onChange: t[14] || (t[14] = (e) => (n.field.readonly = !(n.field.readonly ?? 1))),
                                                                              onMousedown: t[15] || (t[15] = jr(() => {}, ["prevent"])),
                                                                          },
                                                                          null,
                                                                          40,
                                                                          $p
                                                                      ))
                                                                    : Ci("", !0),
                                                                r.isValueInput
                                                                    ? (si(),
                                                                      ui(
                                                                          "label",
                                                                          {
                                                                              key: 3,
                                                                              for: `readonly-checkbox-${n.field.uuid}`,
                                                                              class: "label text-xs",
                                                                              onClick: t[16] || (t[16] = jr((e) => (n.field.readonly = !(n.field.readonly ?? 1)), ["prevent"])),
                                                                              onMousedown: t[17] || (t[17] = jr(() => {}, ["prevent"])),
                                                                          },
                                                                          ne(r.t("editable")),
                                                                          41,
                                                                          Np
                                                                      ))
                                                                    : Ci("", !0),
                                                                "payment" === n.field.type || r.isValueInput
                                                                    ? Ci("", !0)
                                                                    : (si(),
                                                                      ui(
                                                                          "span",
                                                                          {
                                                                              key: 4,
                                                                              class: "dropdown dropdown-end",
                                                                              onMouseenter: t[27] || (t[27] = (e) => (i.renderDropdown = !0)),
                                                                              onTouchstart: t[28] || (t[28] = (e) => (i.renderDropdown = !0)),
                                                                          },
                                                                          [
                                                                              yi(
                                                                                  "label",
                                                                                  {
                                                                                      ref: "settingsButton",
                                                                                      tabindex: "0",
                                                                                      title: r.t("settings"),
                                                                                      class: "cursor-pointer flex items-center",
                                                                                      style: { height: "25px" },
                                                                                      onFocus: t[18] || (t[18] = (e) => (i.isSettingsFocus = !0)),
                                                                                      onBlur: t[19] || (t[19] = (...e) => r.maybeBlurSettings && r.maybeBlurSettings(...e)),
                                                                                  },
                                                                                  [vi(s, { class: "w-5 h-5" })],
                                                                                  40,
                                                                                  jp
                                                                              ),
                                                                              i.renderDropdown
                                                                                  ? (si(),
                                                                                    ui(
                                                                                        "ul",
                                                                                        {
                                                                                            key: 0,
                                                                                            ref: "settingsDropdown",
                                                                                            tabindex: "0",
                                                                                            class: "dropdown-content menu menu-xs px-2 pb-2 pt-1 shadow rounded-box w-52 z-10 rounded-t-none",
                                                                                            style: { backgroundColor: "white" },
                                                                                            onDragstart: t[24] || (t[24] = jr(() => {}, ["prevent", "stop"])),
                                                                                            onClick: t[25] || (t[25] = (...e) => r.closeDropdown && r.closeDropdown(...e)),
                                                                                            onFocusout: t[26] || (t[26] = (...e) => r.maybeBlurSettings && r.maybeBlurSettings(...e)),
                                                                                        },
                                                                                        [
                                                                                            vi(
                                                                                                d,
                                                                                                {
                                                                                                    field: n.field,
                                                                                                    "default-field": n.defaultField,
                                                                                                    editable: n.editable,
                                                                                                    "background-color": "white",
                                                                                                    "with-required": !1,
                                                                                                    "with-areas": !1,
                                                                                                    onClickFormula: t[20] || (t[20] = (e) => (i.isShowFormulaModal = !0)),
                                                                                                    onClickDescription: t[21] || (t[21] = (e) => (i.isShowDescriptionModal = !0)),
                                                                                                    onClickCondition: t[22] || (t[22] = (e) => (i.isShowConditionsModal = !0)),
                                                                                                    onScrollTo: t[23] || (t[23] = (t) => [(r.selectedAreaRef.value = t), e.$emit("scroll-to", t)]),
                                                                                                },
                                                                                                null,
                                                                                                8,
                                                                                                ["field", "default-field", "editable"]
                                                                                            ),
                                                                                        ],
                                                                                        544
                                                                                    ))
                                                                                  : Ci("", !0),
                                                                          ],
                                                                          32
                                                                      )),
                                                            ]))
                                                          : n.editable
                                                          ? (si(), ui("button", { key: 3, class: "pr-1", title: r.t("remove"), onClick: t[29] || (t[29] = jr((t) => e.$emit("remove"), ["prevent"])) }, [vi(c, { width: "14" })], 8, Bp))
                                                          : Ci("", !0),
                                                  ],
                                                  32
                                              ))
                                            : Ci("", !0),
                                        yi(
                                            "div",
                                            {
                                                ref: "touchValueTarget",
                                                class: J([
                                                    "flex items-center h-full w-full",
                                                    [
                                                        r.isValueInput ? "bg-opacity-50" : "bg-opacity-80",
                                                        "heading" === n.field.type ? "bg-gray-50" : r.bgColors[r.submitterIndex],
                                                        r.isDefaultValuePresent || r.isValueInput || (n.withFieldPlaceholder && n.field.areas) ? r.alignClasses[n.field.preferences?.align] || "" : "justify-center",
                                                    ],
                                                ]),
                                                dir: "auto",
                                                onClick: t[35] || (t[35] = (...e) => r.focusValueInput && r.focusValueInput(...e)),
                                            },
                                            [
                                                n.field
                                                    ? (si(),
                                                      ui(
                                                          "span",
                                                          { key: 0, class: J(["flex justify-center items-center space-x-1", { "w-full": ["cells", "checkbox"].includes(n.field.type), "h-full": !r.isValueInput }]) },
                                                          [
                                                              r.isDefaultValuePresent || r.isValueInput || (n.withFieldPlaceholder && n.field.areas && "checkbox" !== n.field.type)
                                                                  ? (si(),
                                                                    ui(
                                                                        "div",
                                                                        {
                                                                            key: 0,
                                                                            class: J({
                                                                                "w-full h-full": ["cells", "checkbox"].includes(n.field.type),
                                                                                "text-[1.6vw] lg:text-base": !i.textOverflowChars,
                                                                                "text-[1.0vw] lg:text-xs": i.textOverflowChars,
                                                                            }),
                                                                        },
                                                                        [
                                                                            yi(
                                                                                "div",
                                                                                { ref: "textContainer", class: J(["flex items-center px-0.5", { "w-full h-full": ["cells", "checkbox"].includes(n.field.type) }]) },
                                                                                [
                                                                                    "checkbox" == n.field.type
                                                                                        ? (si(),
                                                                                          hi(p, { key: 0, class: J(["aspect-square mx-auto", { "!w-auto !h-full": n.area.w > n.area.h, "!w-full !h-auto": n.area.w <= n.area.h }]) }, null, 8, [
                                                                                              "class",
                                                                                          ]))
                                                                                        : "number" !== n.field.type || r.isValueInput || (!n.field.default_value && 0 != n.field.default_value)
                                                                                        ? "{{date}}" === n.field.default_value
                                                                                            ? (si(), ui("span", Lp, ne(r.t("signing_date")), 1))
                                                                                            : "cells" === n.field.type && n.field.default_value
                                                                                            ? (si(),
                                                                                              ui("div", Vp, [
                                                                                                  (si(!0),
                                                                                                  ui(
                                                                                                      ni,
                                                                                                      null,
                                                                                                      ro(
                                                                                                          n.field.default_value,
                                                                                                          (e, t) => (
                                                                                                              si(), ui("div", { key: t, class: "text-center flex-none", style: W({ width: (n.area.cell_w / n.area.w) * 100 + "%" }) }, ne(e), 5)
                                                                                                          )
                                                                                                      ),
                                                                                                      128
                                                                                                  )),
                                                                                              ]))
                                                                                            : (si(),
                                                                                              ui(
                                                                                                  "span",
                                                                                                  {
                                                                                                      key: 4,
                                                                                                      ref: "defaultValue",
                                                                                                      contenteditable: r.isValueInput,
                                                                                                      class: J([
                                                                                                          "whitespace-pre-wrap outline-none empty:before:content-[attr(placeholder)] before:text-gray-400",
                                                                                                          { "cursor-text": r.isValueInput },
                                                                                                      ]),
                                                                                                      placeholder: n.withFieldPlaceholder && !r.isValueInput ? n.field.name || r.defaultName : r.t("type_value"),
                                                                                                      onBlur: t[32] || (t[32] = (...e) => r.onDefaultValueBlur && r.onDefaultValueBlur(...e)),
                                                                                                      onPaste: t[33] || (t[33] = jr((...e) => r.onPaste && r.onPaste(...e), ["prevent"])),
                                                                                                      onKeydown: t[34] || (t[34] = Ur((...e) => r.onDefaultValueEnter && r.onDefaultValueEnter(...e), ["enter"])),
                                                                                                  },
                                                                                                  ne(n.field.default_value),
                                                                                                  43,
                                                                                                  Yp
                                                                                              ))
                                                                                        : (si(), ui("span", Up, ne(r.formatNumber(n.field.default_value, n.field.preferences?.format)), 1)),
                                                                                ],
                                                                                2
                                                                            ),
                                                                        ],
                                                                        2
                                                                    ))
                                                                  : (si(), hi(no(r.fieldIcons[n.field.type]), { key: 1, width: "100%", height: "100%", class: "max-h-10 opacity-50" })),
                                                          ],
                                                          2
                                                      ))
                                                    : Ci("", !0),
                                            ],
                                            2
                                        ),
                                        r.isValueInput
                                            ? Ci("", !0)
                                            : (si(),
                                              ui(
                                                  "div",
                                                  {
                                                      key: 3,
                                                      ref: "touchTarget",
                                                      class: J(["absolute top-0 bottom-0 right-0 left-0", i.isDragged ? "cursor-grab" : "cursor-pointer"]),
                                                      onDblclick: t[36] || (t[36] = (...e) => r.maybeToggleDefaultValue && r.maybeToggleDefaultValue(...e)),
                                                      onClick: t[37] || (t[37] = (...e) => r.maybeToggleCheckboxValue && r.maybeToggleCheckboxValue(...e)),
                                                  },
                                                  null,
                                                  34
                                              )),
                                        n.field?.type && n.editable
                                            ? (si(),
                                              ui(
                                                  "span",
                                                  {
                                                      key: 4,
                                                      class: "h-4 w-4 md:h-2.5 md:w-2.5 -right-1 rounded-full -bottom-1 border-gray-400 bg-white shadow-md border absolute cursor-nwse-resize",
                                                      onMousedown: t[38] || (t[38] = jr((...e) => r.startResize && r.startResize(...e), ["stop"])),
                                                      onTouchstart: t[39] || (t[39] = (...e) => r.startTouchResize && r.startTouchResize(...e)),
                                                  },
                                                  null,
                                                  32
                                              ))
                                            : Ci("", !0),
                                        i.isShowFormulaModal
                                            ? (si(),
                                              hi(
                                                  ei,
                                                  { key: 5, to: r.modalContainerEl },
                                                  [
                                                      vi(u, { field: n.field, editable: n.editable && !n.defaultField, "build-default-name": r.buildDefaultName, onClose: t[40] || (t[40] = (e) => (i.isShowFormulaModal = !1)) }, null, 8, [
                                                          "field",
                                                          "editable",
                                                          "build-default-name",
                                                      ]),
                                                  ],
                                                  8,
                                                  ["to"]
                                              ))
                                            : Ci("", !0),
                                        i.isShowConditionsModal
                                            ? (si(),
                                              hi(
                                                  ei,
                                                  { key: 6, to: r.modalContainerEl },
                                                  [vi(h, { field: n.field, "build-default-name": r.buildDefaultName, onClose: t[41] || (t[41] = (e) => (i.isShowConditionsModal = !1)) }, null, 8, ["field", "build-default-name"])],
                                                  8,
                                                  ["to"]
                                              ))
                                            : Ci("", !0),
                                        i.isShowDescriptionModal
                                            ? (si(),
                                              hi(
                                                  ei,
                                                  { key: 7, to: r.modalContainerEl },
                                                  [
                                                      vi(
                                                          b,
                                                          { field: n.field, editable: n.editable && !n.defaultField, "build-default-name": r.buildDefaultName, onClose: t[42] || (t[42] = (e) => (i.isShowDescriptionModal = !1)) },
                                                          null,
                                                          8,
                                                          ["field", "editable", "build-default-name"]
                                                      ),
                                                  ],
                                                  8,
                                                  ["to"]
                                              ))
                                            : Ci("", !0),
                                    ],
                                    36
                                )
                            );
                        },
                    ],
                ]),
            },
            inject: ["fieldTypes", "defaultDrawFieldType", "fieldsDragFieldRef"],
            props: {
                image: { type: Object, required: !0 },
                areas: { type: Array, required: !1, default: () => [] },
                inputMode: { type: Boolean, required: !1, default: !1 },
                defaultFields: { type: Array, required: !1, default: () => [] },
                withFieldPlaceholder: { type: Boolean, required: !1, default: !1 },
                drawFieldType: { type: String, required: !1, default: "" },
                allowDraw: { type: Boolean, required: !1, default: !0 },
                selectedSubmitter: { type: Object, required: !0 },
                defaultSubmitters: { type: Array, required: !1, default: () => [] },
                drawField: { type: Object, required: !1, default: null },
                editable: { type: Boolean, required: !1, default: !0 },
                isDrag: { type: Boolean, required: !1, default: !1 },
                number: { type: Number, required: !0 },
            },
            emits: ["draw", "drop-field", "remove-area", "scroll-to"],
            data: () => ({ areaRefs: [], showMask: !1, resizeDirection: null, newArea: null }),
            computed: {
                defaultFieldType() {
                    return this.drawFieldType
                        ? this.drawFieldType
                        : this.defaultDrawFieldType && "text" !== this.defaultDrawFieldType
                        ? this.defaultDrawFieldType
                        : 0 === this.fieldTypes.length || this.fieldTypes.includes("text")
                        ? "text"
                        : this.fieldTypes[0];
                },
                isMobile: () => /android|iphone|ipad/i.test(navigator.userAgent),
                resizeDirectionClasses: () => ({ nwse: "cursor-nwse-resize", ew: "cursor-ew-resize" }),
                width() {
                    return this.image.metadata.width;
                },
                height() {
                    return this.image.metadata.height;
                },
            },
            beforeUpdate() {
                this.areaRefs = [];
            },
            methods: {
                onImageLoad(e) {
                    e.target.setAttribute("width", e.target.naturalWidth), e.target.setAttribute("height", e.target.naturalHeight);
                },
                setAreaRefs(e) {
                    e && this.areaRefs.push(e);
                },
                onDrop(e) {
                    this.$emit("drop-field", { x: e.offsetX, y: e.offsetY, maskW: this.$refs.mask.clientWidth, maskH: this.$refs.mask.clientHeight, page: this.number });
                },
                onStartDraw(e) {
                    this.allowDraw &&
                        ((this.isMobile && !this.drawField) ||
                            (this.editable &&
                                ((this.showMask = !0),
                                this.$nextTick(() => {
                                    this.newArea = {
                                        initialX: e.offsetX / this.$refs.mask.clientWidth,
                                        initialY: e.offsetY / this.$refs.mask.clientHeight,
                                        x: e.offsetX / this.$refs.mask.clientWidth,
                                        y: e.offsetY / this.$refs.mask.clientHeight,
                                        w: 0,
                                        h: 0,
                                    };
                                }))));
                },
                onPointermove(e) {
                    if (this.newArea) {
                        const t = e.offsetX / this.$refs.mask.clientWidth - this.newArea.initialX,
                            n = e.offsetY / this.$refs.mask.clientHeight - this.newArea.initialY;
                        (this.newArea.x = t > 0 ? this.newArea.initialX : e.offsetX / this.$refs.mask.clientWidth),
                            (this.newArea.y = n > 0 ? this.newArea.initialY : e.offsetY / this.$refs.mask.clientHeight),
                            "cells" === (this.drawField?.type || this.drawFieldType) && (this.newArea.cell_w = this.newArea.h * (this.$refs.mask.clientHeight / this.$refs.mask.clientWidth)),
                            (this.newArea.w = Math.abs(t)),
                            (this.newArea.h = Math.abs(n));
                    }
                },
                onPointerup(e) {
                    if (this.newArea) {
                        const e = { x: this.newArea.x, y: this.newArea.y, w: this.newArea.w, h: this.newArea.h, page: this.number };
                        "cell_w" in this.newArea && (e.cell_w = this.newArea.cell_w), this.$emit("draw", e);
                    }
                    (this.showMask = !1), (this.newArea = null);
                },
            },
        },
        Hp = {
            name: "TemplateDocument",
            components: {
                Page: (0, Ga.A)(Xp, [
                    [
                        "render",
                        function (e, t, n, o, i, r) {
                            const a = eo("FieldArea");
                            return (
                                si(),
                                ui(
                                    "div",
                                    { class: "relative cursor-crosshair select-none", style: W(n.drawField ? "touch-action: none" : "") },
                                    [
                                        yi(
                                            "img",
                                            { ref: "image", loading: "lazy", src: n.image.url, width: r.width, height: r.height, class: "border rounded mb-4", onLoad: t[0] || (t[0] = (...e) => r.onImageLoad && r.onImageLoad(...e)) },
                                            null,
                                            40,
                                            zp
                                        ),
                                        yi(
                                            "div",
                                            { class: "top-0 bottom-0 left-0 right-0 absolute", onPointerdown: t[4] || (t[4] = (...e) => r.onStartDraw && r.onStartDraw(...e)) },
                                            [
                                                (si(!0),
                                                ui(
                                                    ni,
                                                    null,
                                                    ro(
                                                        n.areas,
                                                        (o, l) => (
                                                            si(),
                                                            hi(
                                                                a,
                                                                {
                                                                    key: l,
                                                                    ref_for: !0,
                                                                    ref: r.setAreaRefs,
                                                                    area: o.area,
                                                                    "input-mode": n.inputMode,
                                                                    field: o.field,
                                                                    editable: n.editable,
                                                                    "with-field-placeholder": n.withFieldPlaceholder,
                                                                    "default-field": n.defaultFields.find((e) => e.name === o.field.name),
                                                                    "default-submitters": n.defaultSubmitters,
                                                                    onStartResize: t[1] || (t[1] = (e) => (i.resizeDirection = e)),
                                                                    onStopResize: t[2] || (t[2] = (e) => (i.resizeDirection = null)),
                                                                    onRemove: (t) => e.$emit("remove-area", o.area),
                                                                    onScrollTo: t[3] || (t[3] = (t) => e.$emit("scroll-to", t)),
                                                                },
                                                                null,
                                                                8,
                                                                ["area", "input-mode", "field", "editable", "with-field-placeholder", "default-field", "default-submitters", "onRemove"]
                                                            )
                                                        )
                                                    ),
                                                    128
                                                )),
                                                i.newArea
                                                    ? (si(), hi(a, { key: 0, "is-draw": !0, field: { submitter_uuid: n.selectedSubmitter.uuid, type: n.drawField?.type || r.defaultFieldType }, area: i.newArea }, null, 8, ["field", "area"]))
                                                    : Ci("", !0),
                                            ],
                                            32
                                        ),
                                        Cn(
                                            yi(
                                                "div",
                                                {
                                                    id: "mask",
                                                    ref: "mask",
                                                    class: J([
                                                        "top-0 bottom-0 left-0 right-0 absolute",
                                                        { "z-10": !r.isMobile, "cursor-grab": n.isDrag, "cursor-nwse-resize": n.drawField, [r.resizeDirectionClasses[i.resizeDirection]]: !!r.resizeDirectionClasses },
                                                    ]),
                                                    onPointermove: t[5] || (t[5] = (...e) => r.onPointermove && r.onPointermove(...e)),
                                                    onPointerdown: t[6] || (t[6] = (...e) => r.onStartDraw && r.onStartDraw(...e)),
                                                    onDragover: t[7] || (t[7] = jr(() => {}, ["prevent"])),
                                                    onDrop: t[8] || (t[8] = (...e) => r.onDrop && r.onDrop(...e)),
                                                    onPointerup: t[9] || (t[9] = (...e) => r.onPointerup && r.onPointerup(...e)),
                                                },
                                                null,
                                                34
                                            ),
                                            [[Lr, i.resizeDirection || n.isDrag || i.showMask || (n.drawField && r.isMobile) || r.fieldsDragFieldRef.value]]
                                        ),
                                    ],
                                    4
                                )
                            );
                        },
                    ],
                ]),
            },
            props: {
                document: { type: Object, required: !0 },
                inputMode: { type: Boolean, required: !1, default: !1 },
                areasIndex: { type: Object, required: !1, default: () => ({}) },
                defaultFields: { type: Array, required: !1, default: () => [] },
                withFieldPlaceholder: { type: Boolean, required: !1, default: !1 },
                drawFieldType: { type: String, required: !1, default: "" },
                defaultSubmitters: { type: Array, required: !1, default: () => [] },
                allowDraw: { type: Boolean, required: !1, default: !0 },
                selectedSubmitter: { type: Object, required: !0 },
                editable: { type: Boolean, required: !1, default: !0 },
                drawField: { type: Object, required: !1, default: null },
                baseUrl: { type: String, required: !1, default: "" },
                isDrag: { type: Boolean, required: !1, default: !1 },
            },
            emits: ["draw", "drop-field", "remove-area"],
            data: () => ({ pageRefs: [] }),
            computed: {
                basePreviewUrl() {
                    return this.baseUrl ? new URL(this.baseUrl).origin : "";
                },
                numberOfPages() {
                    return this.document.metadata?.pdf?.number_of_pages || this.document.preview_images.length;
                },
                sortedPreviewImages() {
                    const e = this.document.preview_images[this.document.preview_images.length - 1].metadata;
                    return [...Array(this.numberOfPages).keys()].map(
                        (t) => this.previewImagesIndex[t] || { metadata: e, id: Math.random().toString(), url: this.basePreviewUrl + `/preview/${this.document.signed_uuid || this.document.uuid}/${t}.jpg` }
                    );
                },
                previewImagesIndex() {
                    return this.document.preview_images.reduce((e, t) => ((e[parseInt(t.filename)] = t), e), {});
                },
            },
            beforeUpdate() {
                this.pageRefs = [];
            },
            methods: {
                scrollToArea(e) {
                    this.$nextTick(() => {
                        this.pageRefs[e.page].areaRefs.find((t) => t.area === e).$el.scrollIntoView({ behavior: "smooth", block: "center" });
                    });
                },
                setPageRefs(e) {
                    e && this.pageRefs.push(e);
                },
            },
        },
        Kp = (0, Ga.A)(Hp, [
            [
                "render",
                function (e, t, n, o, i, r) {
                    const a = eo("Page");
                    return (
                        si(),
                        ui("div", null, [
                            (si(!0),
                            ui(
                                ni,
                                null,
                                ro(
                                    r.sortedPreviewImages,
                                    (o, i) => (
                                        si(),
                                        hi(
                                            a,
                                            {
                                                key: o.id,
                                                ref_for: !0,
                                                ref: r.setPageRefs,
                                                "input-mode": n.inputMode,
                                                number: i,
                                                editable: n.editable,
                                                areas: n.areasIndex[i],
                                                "allow-draw": n.allowDraw,
                                                "is-drag": n.isDrag,
                                                "with-field-placeholder": n.withFieldPlaceholder,
                                                "default-fields": n.defaultFields,
                                                "default-submitters": n.defaultSubmitters,
                                                "draw-field": n.drawField,
                                                "draw-field-type": n.drawFieldType,
                                                "selected-submitter": n.selectedSubmitter,
                                                image: o,
                                                onDropField: t[0] || (t[0] = (t) => e.$emit("drop-field", { ...t, attachment_uuid: n.document.uuid })),
                                                onRemoveArea: t[1] || (t[1] = (t) => e.$emit("remove-area", t)),
                                                onScrollTo: r.scrollToArea,
                                                onDraw: t[2] || (t[2] = (t) => e.$emit("draw", { ...t, attachment_uuid: n.document.uuid })),
                                            },
                                            null,
                                            8,
                                            [
                                                "input-mode",
                                                "number",
                                                "editable",
                                                "areas",
                                                "allow-draw",
                                                "is-drag",
                                                "with-field-placeholder",
                                                "default-fields",
                                                "default-submitters",
                                                "draw-field",
                                                "draw-field-type",
                                                "selected-submitter",
                                                "image",
                                                "onScrollTo",
                                            ]
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
        Zp = { height: "40", width: "40", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 511.998 511.998", "xml:space": "preserve" },
        Jp = [
            ki(
                '<path style="fill:#AA968C;" d="M503.999,247.999c0,128.13-111.033,240-248,240S8,376.129,8,247.999s111.033-224,248-224\n    S503.999,119.869,503.999,247.999z"></path><path style="fill:#AA968C;" d="M255.999,23.999C119.033,23.999,8,119.868,8,247.999c0,24.631,4.138,48.647,11.74,71.397\n    c25.518,34.29,66.232,56.602,112.26,56.602c53.893,0,100.6-30.495,124-75.13c23.4,44.636,70.107,75.13,124,75.13\n    c46.028,0,86.743-22.312,112.26-56.602c7.602-22.75,11.74-46.767,11.74-71.397C503.999,119.868,392.966,23.999,255.999,23.999z"></path><circle style="fill:#C8AF9B;" cx="256" cy="351.999" r="136"></circle><g><circle style="fill:#464655;" cx="132" cy="203.999" r="28"></circle><circle style="fill:#464655;" cx="380" cy="203.999" r="28"></circle><path style="fill:#464655;" d="M269.949,284.516c-7.672,10.741-20.227,10.741-27.899,0l-12.101-16.941\n      c-7.672-10.741-3.15-19.53,10.05-19.53h32c13.2,0,17.723,8.788,10.05,19.53L269.949,284.516z"></path></g><path style="fill:#AA968C;" d="M 350.964 399.998 C 316.628 399.998 299.021 351.998 255.882 351.998 C 212.742 351.998 195.135 399.998 160.801 399.998 C 145.395 399.998 131.723 394.147 120.621 374.798 C 131.595 439.03 187.893 487.998 255.881 487.998 C 323.868 487.998 380.168 439.03 391.14 374.798 C 380.04 394.148 366.368 399.998 350.964 399.998 Z"></path><g><path style="fill:#8C7873;" d="M32,423.998c-3.172,0-6.18-1.906-7.43-5.031c-1.641-4.105,0.359-8.758,4.461-10.402l160.008-64\n      c4.062-1.617,8.758,0.352,10.398,4.457s-0.359,8.758-4.461,10.402l-160.008,64C34,423.811,32.992,423.998,32,423.998z"></path><path style="fill:#8C7873;" d="M15.992,375.995c-3.547,0-6.781-2.375-7.727-5.965c-1.125-4.273,1.422-8.648,5.695-9.773l152-40\n      c4.289-1.121,8.648,1.426,9.773,5.703c1.125,4.273-1.422,8.648-5.695,9.773l-152,40C17.351,375.913,16.672,375.995,15.992,375.995z\n      "></path><path style="fill:#8C7873;" d="M7.992,335.995c-3.812,0-7.187-2.73-7.867-6.609c-0.773-4.352,2.133-8.5,6.484-9.27l136-24\n      c4.328-0.77,8.508,2.141,9.266,6.488c0.773,4.352-2.133,8.5-6.484,9.27l-136,24C8.922,335.956,8.453,335.995,7.992,335.995z"></path><path style="fill:#8C7873;" d="M480,423.998c3.172,0,6.18-1.906,7.43-5.031c1.641-4.105-0.359-8.758-4.461-10.402l-160.008-64\n      c-4.063-1.617-8.758,0.352-10.398,4.457s0.359,8.758,4.461,10.402l160.008,64C478,423.811,479.007,423.998,480,423.998z"></path><path style="fill:#8C7873;" d="M496.007,375.995c3.547,0,6.781-2.375,7.727-5.965c1.125-4.273-1.422-8.648-5.695-9.773l-152-40\n      c-4.289-1.121-8.648,1.426-9.773,5.703c-1.125,4.273,1.422,8.648,5.695,9.773l152,40\n      C494.648,375.913,495.328,375.995,496.007,375.995z"></path><path style="fill:#8C7873;" d="M504.007,335.995c3.813,0,7.188-2.73,7.867-6.609c0.773-4.352-2.133-8.5-6.484-9.27l-136-24\n      c-4.328-0.77-8.508,2.141-9.266,6.488c-0.773,4.352,2.133,8.5,6.484,9.27l136,24C503.078,335.956,503.546,335.995,504.007,335.995z\n      "></path></g>',
                6
            ),
        ],
        Gp = { name: "ProjectLogo" },
        Qp = (0, Ga.A)(Gp, [
            [
                "render",
                function (e, t, n, o, i, r) {
                    return si(), ui("svg", Zp, Jp);
                },
            ],
        ]),
        eu = { class: "relative" },
        tu = ["src", "width", "height"],
        nu = { key: 0, class: "flex justify-between w-full" },
        ou = yi("div", { style: { width: "26px" } }, null, -1),
        iu = { class: "" },
        ru = { class: "flex flex-col justify-between opacity-0 group-hover:opacity-100" },
        au = { key: 0, class: "flex flex-col space-y-1" },
        lu = { class: "flex pb-2 pt-1.5" },
        su = ["for"],
        du = { ref: "form", class: "hidden" },
        cu = ["id", "accept"],
        pu = {
            name: "ReplaceDocument",
            inject: ["baseFetch", "t"],
            props: { templateId: { type: [Number, String], required: !0 }, acceptFileTypes: { type: String, required: !1, default: "image/*, application/pdf" } },
            emits: ["success"],
            data: () => ({ isLoading: !1, isProcessing: !1 }),
            computed: {
                inputId: () => "el" + Math.random().toString(32).split(".")[1],
                message() {
                    return this.isLoading ? this.t("uploading_") : this.isProcessing ? this.t("processing_") : this.t("replace");
                },
            },
            methods: { upload: Qa.methods.upload },
        },
        uu = (0, Ga.A)(pu, [
            [
                "render",
                function (e, t, n, o, i, r) {
                    return (
                        si(),
                        ui(
                            "label",
                            { for: r.inputId, class: J(["btn btn-neutral btn-xs text-white transition-none", { "opacity-100": i.isLoading || i.isProcessing }]) },
                            [
                                _i(ne(r.message) + " ", 1),
                                yi("form", du, [yi("input", { id: r.inputId, ref: "input", name: "files[]", type: "file", accept: n.acceptFileTypes, onChange: t[0] || (t[0] = (...e) => r.upload && r.upload(...e)) }, null, 40, cu)], 512),
                            ],
                            10,
                            su
                        )
                    );
                },
            ],
        ]),
        hu = {
            name: "DocumentPreview",
            components: { Contenteditable: Jl, ReplaceButton: uu },
            props: {
                item: { type: Object, required: !0 },
                template: { type: Object, required: !0 },
                document: { type: Object, required: !0 },
                editable: { type: Boolean, required: !1, default: !0 },
                acceptFileTypes: { type: String, required: !1, default: "image/*, application/pdf" },
                withReplaceButton: { type: Boolean, required: !0, default: !0 },
                withArrows: { type: Boolean, required: !1, default: !0 },
            },
            emits: ["scroll-to", "change", "remove", "up", "down", "replace"],
            computed: {
                previewImage() {
                    return [...this.document.preview_images].sort((e, t) => parseInt(e.filename) - parseInt(t.filename))[0];
                },
            },
            methods: {
                upload: Qa.methods.upload,
                onUpdateName(e) {
                    (this.item.name = e), this.$emit("change");
                },
            },
        },
        bu = (0, Ga.A)(hu, [
            [
                "render",
                function (e, t, n, o, i, r) {
                    const a = eo("ReplaceButton"),
                        l = eo("Contenteditable");
                    return (
                        si(),
                        ui("div", null, [
                            yi("div", eu, [
                                yi("img", { src: r.previewImage.url, width: r.previewImage.metadata.width, height: r.previewImage.metadata.height, class: "rounded border", loading: "lazy" }, null, 8, tu),
                                yi("div", { class: "group flex justify-end cursor-pointer top-0 bottom-0 left-0 right-0 absolute p-1", onClick: t[5] || (t[5] = (t) => e.$emit("scroll-to", n.item)) }, [
                                    n.editable
                                        ? (si(),
                                          ui("div", nu, [
                                              ou,
                                              yi("div", iu, [
                                                  n.withReplaceButton
                                                      ? (si(),
                                                        hi(
                                                            a,
                                                            {
                                                                key: 0,
                                                                "template-id": n.template.id,
                                                                "accept-file-types": n.acceptFileTypes,
                                                                class: "opacity-0 group-hover:opacity-100",
                                                                onClick: t[0] || (t[0] = jr(() => {}, ["stop"])),
                                                                onSuccess: t[1] || (t[1] = (t) => e.$emit("replace", { replaceSchemaItem: n.item, ...t })),
                                                            },
                                                            null,
                                                            8,
                                                            ["template-id", "accept-file-types"]
                                                        ))
                                                      : Ci("", !0),
                                              ]),
                                              yi("div", ru, [
                                                  yi("div", null, [
                                                      yi(
                                                          "button",
                                                          {
                                                              class: "btn border-base-200 bg-white text-base-content btn-xs rounded hover:text-base-100 hover:bg-base-content hover:border-base-content w-full transition-colors",
                                                              style: { width: "24px", height: "24px" },
                                                              onClick: t[2] || (t[2] = jr((t) => e.$emit("remove", n.item), ["stop"])),
                                                          },
                                                          " × "
                                                      ),
                                                  ]),
                                                  n.withArrows
                                                      ? (si(),
                                                        ui("div", au, [
                                                            yi(
                                                                "button",
                                                                {
                                                                    class: "btn border-base-200 bg-white text-base-content btn-xs rounded hover:text-base-100 hover:bg-base-content hover:border-base-content w-full transition-colors",
                                                                    style: { width: "24px", height: "24px" },
                                                                    onClick: t[3] || (t[3] = jr((t) => e.$emit("up", n.item), ["stop"])),
                                                                },
                                                                " ↑ "
                                                            ),
                                                            yi(
                                                                "button",
                                                                {
                                                                    class: "btn border-base-200 bg-white text-base-content btn-xs rounded hover:text-base-100 hover:bg-base-content hover:border-base-content w-full transition-colors",
                                                                    style: { width: "24px", height: "24px" },
                                                                    onClick: t[4] || (t[4] = jr((t) => e.$emit("down", n.item), ["stop"])),
                                                                },
                                                                " ↓ "
                                                            ),
                                                        ]))
                                                      : Ci("", !0),
                                              ]),
                                          ]))
                                        : Ci("", !0),
                                ]),
                            ]),
                            yi("div", lu, [
                                vi(l, { "model-value": n.item.name, "icon-width": 16, editable: n.editable, style: { "max-width": "95%" }, class: "mx-auto", "onUpdate:modelValue": r.onUpdateName }, null, 8, [
                                    "model-value",
                                    "editable",
                                    "onUpdate:modelValue",
                                ]),
                            ]),
                        ])
                    );
                },
            ],
        ]),
        fu = { class: "flex space-x-2" },
        mu = {
            name: "DocumentControls",
            components: { Contenteditable: Jl, ReplaceButton: uu },
            props: {
                item: { type: Object, required: !0 },
                template: { type: Object, required: !0 },
                document: { type: Object, required: !0 },
                acceptFileTypes: { type: String, required: !1, default: "image/*, application/pdf" },
                withReplaceButton: { type: Boolean, required: !0, default: !0 },
                withArrows: { type: Boolean, required: !1, default: !0 },
            },
            emits: ["change", "remove", "up", "down", "replace"],
            methods: {
                upload: Qa.methods.upload,
                onUpdateName(e) {
                    (this.item.name = e), this.$emit("change");
                },
            },
        },
        gu = (0, Ga.A)(mu, [
            [
                "render",
                function (e, t, n, o, i, r) {
                    const a = eo("Contenteditable"),
                        l = eo("ReplaceButton");
                    return (
                        si(),
                        ui("div", fu, [
                            vi(a, { class: "w-full block mr-6", "model-value": n.item.name, "icon-width": 16, "onUpdate:modelValue": r.onUpdateName }, null, 8, ["model-value", "onUpdate:modelValue"]),
                            n.withReplaceButton
                                ? (si(),
                                  hi(
                                      l,
                                      {
                                          key: 0,
                                          "template-id": n.template.id,
                                          "accept-file-types": n.acceptFileTypes,
                                          onClick: t[0] || (t[0] = jr(() => {}, ["stop"])),
                                          onSuccess: t[1] || (t[1] = (t) => e.$emit("replace", { replaceSchemaItem: n.item, ...t })),
                                      },
                                      null,
                                      8,
                                      ["template-id", "accept-file-types"]
                                  ))
                                : Ci("", !0),
                            n.withArrows
                                ? (si(),
                                  ui(
                                      "button",
                                      {
                                          key: 1,
                                          class: "btn border-base-200 bg-white text-base-content btn-xs rounded hover:text-base-100 hover:bg-base-content hover:border-base-content w-full transition-colors",
                                          style: { width: "24px", height: "24px" },
                                          onClick: t[2] || (t[2] = jr((t) => e.$emit("up", n.item), ["stop"])),
                                      },
                                      " ↑ "
                                  ))
                                : Ci("", !0),
                            n.withArrows
                                ? (si(),
                                  ui(
                                      "button",
                                      {
                                          key: 2,
                                          class: "btn border-base-200 bg-white text-base-content btn-xs rounded hover:text-base-100 hover:bg-base-content hover:border-base-content w-full transition-colors",
                                          style: { width: "24px", height: "24px" },
                                          onClick: t[3] || (t[3] = jr((t) => e.$emit("down", n.item), ["stop"])),
                                      },
                                      " ↓ "
                                  ))
                                : Ci("", !0),
                            yi(
                                "button",
                                {
                                    class: "btn border-base-200 bg-white text-base-content btn-xs rounded hover:text-base-100 hover:bg-base-content hover:border-base-content w-full transition-colors",
                                    style: { width: "24px", height: "24px" },
                                    onClick: t[4] || (t[4] = jr((t) => e.$emit("remove", n.item), ["stop"])),
                                },
                                " × "
                            ),
                        ])
                    );
                },
            ],
        ]),
        wu = { class: "dropdown dropdown-top dropdown-end absolute bottom-4 right-4 z-10 md:hidden" },
        yu = { class: "btn btn-neutral text-white btn-circle btn-lg group", tabindex: "0" },
        vu = ["onClick"],
        xu = ["data-tip"],
        _u = { key: 0 },
        ku = ["onClick"],
        Cu = {
            name: "MobileFields",
            components: { IconPlus: mp, IconX: Ud },
            inject: ["withPhone", "withPayment", "backgroundColor", "t"],
            props: {
                modelValue: { type: String, required: !1, default: "" },
                fields: { type: Array, required: !1, default: () => [] },
                selectedSubmitter: { type: Object, required: !0 },
                fieldTypes: { type: Array, required: !1, default: () => [] },
                defaultRequiredFields: { type: Array, required: !1, default: () => [] },
                defaultFields: { type: Array, required: !1, default: () => [] },
            },
            emits: ["select"],
            computed: {
                ...ws.computed,
                submitterFields() {
                    return this.fields.filter((e) => e.submitter_uuid === this.selectedSubmitter.uuid);
                },
                submitterDefaultFields() {
                    return this.defaultFields.filter((e) => !e.role || e.role === this.selectedSubmitter.name);
                },
            },
            methods: {
                closeDropdown() {
                    document.activeElement.blur();
                },
            },
        },
        Su = (0, Ga.A)(Cu, [
            [
                "render",
                function (e, t, n, o, i, r) {
                    const a = eo("IconPlus"),
                        l = eo("IconX");
                    return (
                        si(),
                        ui("span", wu, [
                            yi("label", yu, [vi(a, { class: "group-focus:hidden", width: "28", height: "28" }), vi(l, { class: "hidden group-focus:inline", width: "28", height: "28" })]),
                            yi("ul", { tabindex: "0", class: "dropdown-content menu menu-xs p-2 shadow rounded-box w-52 z-10 mb-3 mt-1.5 bg-base-100", onClick: t[0] || (t[0] = (...e) => r.closeDropdown && r.closeDropdown(...e)) }, [
                                r.submitterDefaultFields.length
                                    ? (si(!0),
                                      ui(
                                          ni,
                                          { key: 0 },
                                          ro(
                                              r.submitterDefaultFields,
                                              (t) => (
                                                  si(),
                                                  ui("li", { key: t.name }, [
                                                      yi(
                                                          "a",
                                                          { href: "#", class: "text-sm py-1 px-2", onClick: jr((n) => e.$emit("select", { name: t.name || "", type: t.type || "text" }), ["prevent"]) },
                                                          [
                                                              (si(), hi(no(e.fieldIcons[t.type || "text"]), { "stroke-width": 1.6, width: 20 })),
                                                              _i(" " + ne(t.title || t.name) + " ", 1),
                                                              n.defaultRequiredFields.includes(t)
                                                                  ? (si(), ui("span", { key: 0, "data-tip": r.t("required"), class: "text-red-400 text-2xl tooltip tooltip-left h-6" }, " * ", 8, xu))
                                                                  : Ci("", !0),
                                                          ],
                                                          8,
                                                          vu
                                                      ),
                                                  ])
                                              )
                                          ),
                                          128
                                      ))
                                    : (si(!0),
                                      ui(
                                          ni,
                                          { key: 1 },
                                          ro(
                                              e.fieldIconsSorted,
                                              (t, o) => (
                                                  si(),
                                                  ui(
                                                      ni,
                                                      { key: o },
                                                      [
                                                          (0 !== n.fieldTypes.length && !n.fieldTypes.includes(o)) || (!r.withPhone && "phone" == o) || (!r.withPayment && "payment" == o)
                                                              ? Ci("", !0)
                                                              : (si(),
                                                                ui("li", _u, [
                                                                    yi(
                                                                        "a",
                                                                        { href: "#", class: J(["text-sm py-1 px-2", { active: o === n.modelValue }]), onClick: jr((t) => e.$emit("select", { type: o }), ["prevent"]) },
                                                                        [(si(), hi(no(t), { "stroke-width": 1.6, width: 20 })), _i(" " + ne(e.fieldNames[o]), 1)],
                                                                        10,
                                                                        ku
                                                                    ),
                                                                ])),
                                                      ],
                                                      64
                                                  )
                                              )
                                          ),
                                          128
                                      )),
                            ]),
                        ])
                    );
                },
            ],
        ]),
        Fu = Su;
    var Du = Ha("users-plus", 0, [
            ["path", { d: "M5 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0", key: "svg-0" }],
            ["path", { d: "M3 21v-2a4 4 0 0 1 4 -4h4c.96 0 1.84 .338 2.53 .901", key: "svg-1" }],
            ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "svg-2" }],
            ["path", { d: "M16 19h6", key: "svg-3" }],
            ["path", { d: "M19 16v6", key: "svg-4" }],
        ]),
        Au = Ha("adjustments", 0, [
            ["path", { d: "M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }],
            ["path", { d: "M6 4v4", key: "svg-1" }],
            ["path", { d: "M6 12v8", key: "svg-2" }],
            ["path", { d: "M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-3" }],
            ["path", { d: "M12 4v10", key: "svg-4" }],
            ["path", { d: "M12 18v2", key: "svg-5" }],
            ["path", { d: "M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-6" }],
            ["path", { d: "M18 4v1", key: "svg-7" }],
            ["path", { d: "M18 9v11", key: "svg-8" }],
        ]),
        Tu = Ha("eye", 0, [
            ["path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }],
            ["path", { d: "M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6", key: "svg-1" }],
        ]),
        Pu = Ha("device-floppy", 0, [
            ["path", { d: "M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2", key: "svg-0" }],
            ["path", { d: "M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-1" }],
            ["path", { d: "M14 4l0 4l-6 0l0 -4", key: "svg-2" }],
        ]);
    const Mu = {
            editable: "Editável",
            recurrent: "Recorrente",
            one_off: "Único",
            search_field: "Campo de busca",
            field_not_found: "Campo não encontrado",
            clear: "Limpar",
            align: "Alinhar",
            add_all_required_fields_to_continue: "Adicione todos os campos necessários para continuar",
            uploaded_pdf_contains_form_fields_keep_or_remove_them: "O PDF enviado contém campos. Mantenha ou remova-os?",
            keep: "Mantenha",
            left: "Esquerda",
            heading: "Título",
            validation: "Validação",
            add_blank_page: "Adicionar página em branco",
            right: "Direita",
            center: "Centro",
            description: "Descrição",
            display_title: "Título de visualização",
            with_logo: "Com logotipo",
            unchecked: "Não marcado",
            price: "Preço",
            type_value: "Digite o valor",
            equal: "Igual",
            not_equal: "Diferente",
            contains: "Contém",
            does_not_contain: "Não contém",
            not_empty: "Não vazio",
            empty: "Vazio",
            select_field_: "Selecionar campo...",
            select_value_: "Selecionar valor...",
            remove_condition: "Remover condição",
            add_condition: "Adicionar condição",
            are_you_sure_: "Tem certeza?",
            sign_yourself: "Assinar Documento",
            set_signing_date: "Definir data de assinatura",
            signing_date: "Data de Assinatura",
            send: "Enviar",
            remove: "Remover",
            edit: "Editar",
            settings: "Configurações",
            up: "Acima",
            down: "Abaixo",
            checked: "Marcado",
            save: "Salvar",
            cancel: "Cancelar",
            any: "Qualquer",
            drawn: "Desenhado",
            formula: "Formula",
            typed: "Typed",
            draw_field_on_the_document: "Draw a field on the document",
            click_to_upload: "Clique para enviar",
            or_drag_and_drop_files: "ou arraste e solte arquivos",
            uploading: "Enviando",
            processing_: "Processando...",
            add_pdf_documents_or_images: "Adicionar documentos PDF ou imagens",
            add_documents_or_images: "Adicionar documentos ou imagens",
            required: "Obrigatório",
            default_value: "Valor padrão",
            format: "Formato",
            read_only: "Somente leitura",
            page: "Página",
            draw_new_area: "Desenhar nova área",
            copy_to_all_pages: "Copiar para todas as páginas",
            add_option: "Adicionar opção",
            option: "Opção",
            condition: "Condição",
            first_party: "Primeira Parte",
            second_party: "Segunda Parte",
            third_party: "Terceira Parte",
            fourth_party: "Quarta Parte",
            fifth_party: "Quinta Parte",
            sixth_party: "Sexta Parte",
            seventh_party: "Sétima Parte",
            eighth_party: "Oitava Parte",
            ninth_party: "Nono Parte",
            tenth_party: "Tenth Party",
            eleventh_party: "Décimo Primeiro Partido",
            twelfth_party: "Décimo Segundo Partido",
            thirteenth_party: "Décimo Terceiro Partido",
            fourteenth_party: "Décimo Quarto Partido",
            fifteenth_party: "Décimo Quinto Partido",
            sixteenth_party: "Décimo Sexto Partido",
            seventeenth_party: "Décimo Sétimo Partido",
            eighteenth_party: "Décimo Oitavo Partido",
            nineteenth_party: "Nineteenth Party",
            twentieth_party: "Vigésima Parte",
            draw: "Desenhar",
            add: "Adicionar",
            or_add_field_without_drawing: "Ou adicionar campo sem desenhar",
            text: "Texto",
            number: "Número",
            signature: "Assinatura",
            initials: "Iniciais",
            date: "Data",
            image: "Imagem",
            file: "Arquivo",
            select: "Selecionar",
            checkbox: "Checkbox",
            multiple: "Múltiplo",
            radio: "Radio",
            cells: "Células",
            stamp: "Selo",
            payment: "Pagamento",
            phone: "Telefone",
            text_field: "Campo de Texto",
            signature_field: "Campo de Assinatura",
            initials_field: "Campo de Iniciales",
            date_field: "Campo de Data",
            number_field: "Campo de Número",
            image_field: "Campo de Imagem",
            file_field: "Campo de Arquivo",
            select_field: "Campo de Seleção",
            checkbox_field: "Campo de Checkbox",
            multiple_field: "Campo de Múltiplo",
            radio_field: "Campo de Grupo Radio",
            cells_field: "Campo de Células",
            stamp_field: "Campo de Selo",
            payment_field: "Campo de Pagamento",
            phone_field: "Campo de Telefone",
            draw_a_text_field_on_the_page_with_a_mouse: "Desenhar um campo de texto na página com o mouse",
            drag_and_drop_any_other_field_type_on_the_page: "Arraste e solte qualquer outro tipo de campo na página",
            click_on_the_field_type_above_to_start_drawing_it: "Clique no tipo de campo acima para começar a desenhar",
            please_draw_fields_to_prepare_the_document: "Por favor, desenhe os campos para preparar o documento.",
            only_pdf_and_images_are_supported: "Apenas PDF e imagens são suportados.",
            unlock_sms_verified_phone_number_field_with_paid_plan_use_text_field_for_phone_numbers_without_verification: "BLOQUEADO.",
            available_only_in_pro: "Disponível apenas em Pro",
            failed_to_download_files: "Erro ao baixar arquivos",
            signature_is_too_small_please_redraw: "A assinatura é muito pequena - por favor, redesenhe.",
            please_add_fields_for_the_submitter_name_or_remove_the_submitter_name_if_not_needed: "Por favor, adicione campos para {submitter_name}. Ou, remova o {submitter_name} se não for necessário.",
            draw_field: "Desenhar {field} Field",
            replace: "Substituir",
            uploading_: "Enviando...",
            add_document: "Documento",
            none: "Nenhum",
            ssn: "SSN",
            ein: "EIN",
            email: "Email",
            url: "URL",
            zip: "ZIP",
            custom: "Custom",
            numbers_only: "Apenas números",
            letters_only: "Apenas letras",
            regexp_validation: "Validação de expressão regular",
            enter_pdf_password: "Digite a senha do PDF",
            wrong_password: "Senha incorreta",
            currency: "Moeda",
            save_and_preview: "Salvar e Previsualizar",
            preferences: "Preferências",
            available_in_pro: "Disponível em Pro",
            some_fields_are_missing_in_the_formula: "Alguns campos estão faltando na fórmula.",
            learn_more: "Saiba mais",
        },
        zu = {
            recurrent: "Recurrente",
            one_off: "Único",
            editable: "Editable",
            search_field: "Campo de búsqueda",
            field_not_found: "Campo no encontrado",
            clear: "Borrar",
            type_value: "Escriba valor",
            align: "Alinear",
            add_all_required_fields_to_continue: "Agregar todos los campos requeridos para continuar",
            uploaded_pdf_contains_form_fields_keep_or_remove_them: "El PDF cargado tiene campos. ¿Mantenerlos o eliminarlos?",
            keep: "Mantener",
            left: "Izquierda",
            heading: "Encabezado",
            validation: "Validación",
            add_blank_page: "Agregar página en blanco",
            right: "Derecha",
            center: "Centro",
            with_logo: "Con logotipo",
            description: "Descripción",
            signing_date: "Fecha de Firma",
            display_title: "Título de visualización",
            unchecked: "No marcado",
            price: "Precio",
            equal: "Igual",
            not_equal: "No es igual",
            contains: "Contiene",
            does_not_contain: "No contiene",
            not_empty: "No vacío",
            empty: "Vacío",
            select_field_: "Seleccionar campo...",
            select_value_: "Seleccionar valor...",
            remove_condition: "Eliminar condición",
            add_condition: "Agregar condición",
            condition: "Condición",
            formula: "Fórmula",
            edit: "Editar",
            settings: "Configuración",
            up: "Arriba",
            down: "Abajo",
            set_signing_date: "Establecer fecha de firma",
            are_you_sure_: "¿Estás seguro?",
            sign_yourself: "Firma tú mismo",
            checked: "Seleccionado",
            send: "Enviar",
            remove: "Eliminar",
            save: "Guardar",
            cancel: "Cancelar",
            or_add_field_without_drawing: "O añadir campo sin dibujar",
            draw_field_on_the_document: "Dibujar un campo en el documento",
            click_to_upload: "Haz clic para cargar",
            or_drag_and_drop_files: "o arrastra y suelta archivos",
            uploading: "Subiendo",
            processing_: "Procesando...",
            add_pdf_documents_or_images: "Agregar documentos PDF o imágenes",
            add_documents_or_images: "Agregar documentos o imágenes",
            required: "Requerido",
            default_value: "Valor predeterminado",
            format: "Formato",
            read_only: "Solo lectura",
            page: "Página",
            draw_new_area: "Dibujar nueva área",
            copy_to_all_pages: "Copiar a todas las páginas",
            add_option: "Agregar opción",
            option: "Opción",
            first_party: "Primera Parte",
            second_party: "Segunda Parte",
            third_party: "Tercera Parte",
            fourth_party: "Cuarta Parte",
            fifth_party: "Quinta Parte",
            sixth_party: "Sexta Parte",
            seventh_party: "Séptima Parte",
            eighth_party: "Octava Parte",
            ninth_party: "Novena Parte",
            tenth_party: "Décima Parte",
            eleventh_party: "Undécimo Partido",
            twelfth_party: "Duodécimo Partido",
            thirteenth_party: "Decimotercer Partido",
            fourteenth_party: "Catorceavo Partido",
            fifteenth_party: "Quinceavo Partido",
            sixteenth_party: "Dieciséisavo Partido",
            seventeenth_party: "Diecisieteavo Partido",
            eighteenth_party: "Dieciochoavo Partido",
            nineteenth_party: "Decimonovena Fiesta",
            twentieth_party: "Vigésima Fiesta",
            draw: "Dibujar",
            add: "Agregar",
            text: "Texto",
            signature: "Firma",
            initials: "Iniciales",
            date: "Fecha",
            number: "Número",
            image: "Imagen",
            file: "Archivo",
            select: "Seleccionar",
            checkbox: "Casilla",
            multiple: "Múltiple",
            radio: "Radio",
            cells: "Celdas",
            stamp: "Sello",
            payment: "Pago",
            phone: "Teléfono",
            text_field: "Campo de Texto",
            signature_field: "Campo de Firma",
            initials_field: "Campo de Iniciales",
            date_field: "Campo de Fecha",
            number_field: "Campo de Número",
            image_field: "Campo de Imagen",
            file_field: "Campo de Archivo",
            select_field: "Campo de Selección",
            checkbox_field: "Campo de Casilla",
            multiple_field: "Campo Múltiple",
            radio_field: "Campo de Grupo Radio",
            cells_field: "Campo de Celdas",
            stamp_field: "Campo de Sello",
            payment_field: "Campo de Pago",
            phone_field: "Campo de Teléfono",
            draw_a_text_field_on_the_page_with_a_mouse: "Dibujar un campo de texto en la página con el mouse",
            drag_and_drop_any_other_field_type_on_the_page: "Arrastra y suelta cualquier otro tipo de campo en la página",
            click_on_the_field_type_above_to_start_drawing_it: "Haz clic en el tipo de campo de arriba para comenzar a dibujarlo",
            please_draw_fields_to_prepare_the_document: "Por favor, dibuja los campos para preparar el documento.",
            only_pdf_and_images_are_supported: "Solo se admiten PDF e imágenes.",
            unlock_sms_verified_phone_number_field_with_paid_plan_use_text_field_for_phone_numbers_without_verification:
                "Desbloquea el campo de número de teléfono verificado por SMS con un plan pago. Usa el campo de texto para números de teléfono sin verificación.",
            available_only_in_pro: "Disponible solo en Pro",
            failed_to_download_files: "Error al descargar los archivos",
            signature_is_too_small_please_redraw: "La firma es demasiado pequeña. Por favor, dibújala de nuevo.",
            please_add_fields_for_the_submitter_name_or_remove_the_submitter_name_if_not_needed: "Por favor, añade campos para {submitter_name} o elimina {submitter_name} si no es necesario.",
            draw_field: "Dibujar campo {field}",
            replace: "Reemplazar",
            uploading_: "Subiendo...",
            add_document: "Subir",
            any: "Cualquier",
            drawn: "Dibujado",
            typed: "Escrito",
            none: "Ninguno",
            ssn: "SSN",
            ein: "EIN",
            email: "Correo electrónico",
            url: "URL",
            zip: "ZIP",
            custom: "Personalizado",
            numbers_only: "Solo números",
            letters_only: "Solo letras",
            regexp_validation: "Validación de expresión regular",
            enter_pdf_password: "Ingrese la contraseña del PDF",
            wrong_password: "Contraseña incorrecta",
            currency: "Moneda",
            save_and_preview: "Guardar y previsualizar",
            preferences: "Preferencias",
            available_in_pro: "Disponible en Pro",
            some_fields_are_missing_in_the_formula: "Faltan algunos campos en la fórmula.",
            learn_more: "Aprende más",
        },
        Iu = {
            ricorrente: "Ricorrente",
            una_volta: "Una volta",
            editable: "Modificabile",
            search_field: "Campo di ricerca",
            field_not_found: "Campo non trovato",
            clear: "Cancella",
            align: "Allinea",
            add_all_required_fields_to_continue: "Aggiungi tutti i campi obbligatori per continuare",
            uploaded_pdf_contains_form_fields_keep_or_remove_them: "Il PDF caricato contiene campi del modulo. Mantenerli o rimuoverli?",
            keep: "Mantieni",
            left: "Sinistra",
            heading: "Intestazione",
            validation: "Validazione",
            add_blank_page: "Aggiungi pagina vuota",
            right: "Destra",
            center: "Centro",
            description: "Descrizione",
            display_title: "Mostra titolo",
            with_logo: "Con logo",
            unchecked: "Non selezionato",
            price: "Prezzo",
            type_value: "Inserisci valore",
            equal: "Uguale",
            not_equal: "Non uguale",
            contains: "Contiene",
            does_not_contain: "Non contiene",
            not_empty: "Non vuoto",
            empty: "Vuoto",
            select_field_: "Seleziona campo...",
            select_value_: "Seleziona valore...",
            remove_condition: "Rimuovi condizione",
            add_condition: "Aggiungi condizione",
            are_you_sure_: "Sei sicuro?",
            sign_yourself: "Firma te stesso",
            set_signing_date: "Imposta data di firma",
            signing_date: "Data di firma",
            send: "Invia",
            remove: "Rimuovi",
            edit: "Modifica",
            settings: "Impostazioni",
            up: "Su",
            down: "Giù",
            checked: "Selezionato",
            save: "Salva",
            cancel: "Annulla",
            any: "Qualsiasi",
            drawn: "Disegnato",
            formula: "Formula",
            typed: "Digitato",
            draw_field_on_the_document: "Disegnare un campo sul documento",
            click_to_upload: "Clicca per caricare",
            or_drag_and_drop_files: "o trascina e rilascia i file",
            uploading: "Caricamento in corso",
            processing_: "Elaborazione...",
            add_pdf_documents_or_images: "Aggiungi documenti PDF o immagini",
            add_documents_or_images: "Aggiungi documenti o immagini",
            required: "Obbligatorio",
            default_value: "Valore predefinito",
            format: "Formato",
            read_only: "Sola lettura",
            page: "Pagina",
            draw_new_area: "Disegna nuova area",
            copy_to_all_pages: "Copia in tutte le pagine",
            add_option: "Aggiungi opzione",
            option: "Opzione",
            condition: "Condizione",
            first_party: "Prima parte",
            second_party: "Seconda parte",
            third_party: "Terza parte",
            fourth_party: "Quarta parte",
            fifth_party: "Quinta parte",
            sixth_party: "Sesta parte",
            seventh_party: "Settima parte",
            eighth_party: "Ottava parte",
            ninth_party: "Nona parte",
            tenth_party: "Decima parte",
            eleventh_party: "Undicesima parte",
            twelfth_party: "Dodicesima parte",
            thirteenth_party: "Tredicesima parte",
            fourteenth_party: "Quattordicesima parte",
            fifteenth_party: "Quindicesima parte",
            sixteenth_party: "Sedicesima parte",
            seventeenth_party: "Diciassettesima parte",
            eighteenth_party: "Diciottesima parte",
            nineteenth_party: "Diciannovesima parte",
            twentieth_party: "Ventesima parte",
            draw: "Disegna",
            add: "Aggiungi",
            or_add_field_without_drawing: "Oppure aggiungi campo senza disegno",
            text: "Testo",
            number: "Numero",
            signature: "Firma",
            initials: "Iniziali",
            date: "Data",
            image: "Immagine",
            file: "File",
            select: "Seleziona",
            checkbox: "Checkbox",
            multiple: "Multiplo",
            radio: "Radio",
            cells: "Celle",
            stamp: "Timbro",
            payment: "Pagamento",
            phone: "Telefono",
            text_field: "Campo di Testo",
            signature_field: "Campo di Firma",
            initials_field: "Campo di Iniziali",
            date_field: "Campo Data",
            number_field: "Campo Numero",
            image_field: "Campo Immagine",
            file_field: "Campo File",
            select_field: "Campo di Selezione",
            checkbox_field: "Campo di Checkbox",
            multiple_field: "Campo Selezione Multipla",
            radio_field: "Campo di Gruppo Radio",
            cells_field: "Campo Celle",
            stamp_field: "Campo Timbro",
            payment_field: "Campo Pagamento",
            phone_field: "Campo Telefono",
            draw_a_text_field_on_the_page_with_a_mouse: "Disegna un campo di testo sulla pagina con il mouse",
            drag_and_drop_any_other_field_type_on_the_page: "Trascina e rilascia qualsiasi altro tipo di campo sulla pagina",
            click_on_the_field_type_above_to_start_drawing_it: "Clicca sul tipo di campo sopra per iniziare a disegnarlo",
            please_draw_fields_to_prepare_the_document: "Per favore, disegna i campi per preparare il documento.",
            only_pdf_and_images_are_supported: "Sono supportati solo PDF e immagini.",
            unlock_sms_verified_phone_number_field_with_paid_plan_use_text_field_for_phone_numbers_without_verification:
                "Sblocca il campo numero di telefono verificato tramite SMS con un piano a pagamento. Usa il campo di testo per numeri di telefono senza verifica.",
            available_only_in_pro: "Disponibile solo in Pro",
            failed_to_download_files: "Impossibile scaricare i file",
            signature_is_too_small_please_redraw: "La firma è troppo piccola. Ridisegnala per favore.",
            please_add_fields_for_the_submitter_name_or_remove_the_submitter_name_if_not_needed: "Aggiungi campi per {submitter_name} o rimuovi {submitter_name} se non necessario.",
            draw_field: "Disegna il campo {field}",
            replace: "Sostituisci",
            uploading_: "Caricamento in corso...",
            add_document: "Aggiungi",
            none: "Nessuno",
            ssn: "SSN",
            ein: "EIN",
            email: "Email",
            url: "URL",
            zip: "CAP",
            custom: "Personalizzato",
            numbers_only: "Solo numeri",
            letters_only: "Solo lettere",
            regexp_validation: "Validazione regexp",
            enter_pdf_password: "Inserisci password PDF",
            wrong_password: "Password errata",
            currency: "Valuta",
            save_and_preview: "Salva e Anteprima",
            preferences: "Preferenze",
            available_in_pro: "Disponibile in Pro",
            some_fields_are_missing_in_the_formula: "Alcuni campi mancano nella formula.",
            learn_more: "Scopri di più",
        },
        Ru = {
            recurrent: "Recurrente",
            one_off: "Único",
            editable: "Editável",
            search_field: "Campo de busca",
            field_not_found: "Campo não encontrado",
            clear: "Limpar",
            type_value: "Digite valor",
            add_all_required_fields_to_continue: "Adicione todos os campos obrigatórios para continuar",
            uploaded_pdf_contains_form_fields_keep_or_remove_them: "O PDF carregado contém campos. Manter ou removê-los?",
            keep: "Manter",
            align: "Alinhar",
            left: "Esquerda",
            heading: "Cabeçalho",
            validation: "Validação",
            add_blank_page: "Adicionar página em branco",
            right: "Direita",
            center: "Centro",
            with_logo: "Com logotipo",
            description: "Descrição",
            display_title: "Título de exibição",
            signing_date: "Data da Assinatura",
            unchecked: "Não marcado",
            price: "Preço",
            equal: "Igual",
            not_equal: "Não é igual",
            contains: "Contém",
            does_not_contain: "Não contém",
            not_empty: "Não vazio",
            empty: "Vazio",
            add_condition: "Adicionar condição",
            select_field_: "Selecionar campo...",
            select_value_: "Selecionar valor...",
            remove_condition: "Remover condição",
            condition: "Condição",
            formula: "Fórmula",
            edit: "Editar",
            settings: "Configurações",
            up: "Para cima",
            down: "Para baixo",
            set_signing_date: "Definir data de assinatura",
            are_you_sure_: "Tem certeza?",
            sign_yourself: "Assine você mesmo",
            checked: "Marcado",
            send: "Enviar",
            remove: "Remover",
            save: "Salvar",
            cancel: "Cancelar",
            or_add_field_without_drawing: "Ou adicione campo sem desenhar",
            draw_field_on_the_document: "Desenhar um campo no documento",
            click_to_upload: "Clique para enviar",
            or_drag_and_drop_files: "ou arraste e solte arquivos",
            uploading: "Carregando",
            processing_: "Processando...",
            add_pdf_documents_or_images: "Adicionar documentos PDF ou imagens",
            add_documents_or_images: "Adicionar documentos ou imagens",
            required: "Obrigatório",
            default_value: "Valor padrão",
            format: "Formato",
            read_only: "Somente leitura",
            page: "Página",
            draw_new_area: "Desenhar nova área",
            copy_to_all_pages: "Copiar para todas as páginas",
            add_option: "Adicionar opção",
            option: "Opção",
            first_party: "Primeira Parte",
            second_party: "Segunda Parte",
            third_party: "Terceira Parte",
            fourth_party: "Quarta Parte",
            fifth_party: "Quinta Parte",
            sixth_party: "Sexta Parte",
            seventh_party: "Sétima Parte",
            eighth_party: "Oitava Parte",
            ninth_party: "Nona Parte",
            tenth_party: "Décima Parte",
            eleventh_party: "Décima Primeira Parte",
            twelfth_party: "Décima Segunda Parte",
            thirteenth_party: "Décima Terceira Parte",
            fourteenth_party: "Décima Quarta Parte",
            fifteenth_party: "Décima Quinta Parte",
            sixteenth_party: "Décima Sexta Parte",
            seventeenth_party: "Décima Sétima Parte",
            eighteenth_party: "Décima Oitava Parte",
            nineteenth_party: "Décima Nona Parte",
            twentieth_party: "Vigésima Parte",
            draw: "Desenhar",
            add: "Adicionar",
            text: "Texto",
            signature: "Assinatura",
            initials: "Rúbrica",
            date: "Data",
            number: "Número",
            image: "Imagem",
            file: "Arquivo",
            select: "Selecionar",
            checkbox: "Caixa",
            multiple: "Múltiplo",
            radio: "Rádio",
            cells: "Células",
            stamp: "Carimbo",
            payment: "Pagamento",
            phone: "Telefone",
            text_field: "Campo de Texto",
            signature_field: "Campo de Assinatura",
            initials_field: "Campo de Rúbrica",
            date_field: "Campo de Data",
            number_field: "Campo de Número",
            image_field: "Campo de Imagem",
            file_field: "Campo de Arquivo",
            select_field: "Campo de Seleção",
            checkbox_field: "Campo de Caixa",
            multiple_field: "Campo de Opção Múltipla",
            radio_field: "Campo de Grupo Rádio",
            cells_field: "Campo de Células",
            stamp_field: "Campo de Carimbo",
            payment_field: "Campo de Pagamento",
            phone_field: "Campo de Telefone",
            draw_a_text_field_on_the_page_with_a_mouse: "Desenhar um campo de texto na página com o mouse",
            drag_and_drop_any_other_field_type_on_the_page: "Arraste e solte qualquer outro tipo de campo na página",
            click_on_the_field_type_above_to_start_drawing_it: "Clique no tipo de campo acima para começar a desenhá-lo",
            please_draw_fields_to_prepare_the_document: "Por favor, desenhe os campos para preparar o documento.",
            only_pdf_and_images_are_supported: "Apenas PDFs e imagens são suportados.",
            unlock_sms_verified_phone_number_field_with_paid_plan_use_text_field_for_phone_numbers_without_verification:
                "BLOQUEADO",
            available_only_in_pro: "Disponível apenas no Pro",
            failed_to_download_files: "Falha ao baixar arquivos",
            signature_is_too_small_please_redraw: "A assinatura é muito pequena. Por favor, redesenhe.",
            please_add_fields_for_the_submitter_name_or_remove_the_submitter_name_if_not_needed: "Adicione campos para {submitter_name} ou remova {submitter_name} se não for necessário.",
            draw_field: "Desenhar campo {field}",
            replace: "Substituir",
            uploading_: "Carregando...",
            add_document: "Enviar",
            any: "Qualquer",
            drawn: "Desenhado",
            typed: "Digitado",
            none: "Nenhum",
            ssn: "SSN",
            ein: "EIN",
            email: "Email",
            url: "URL",
            zip: "ZIP",
            custom: "Personalizado",
            numbers_only: "Somente números",
            letters_only: "Somente letras",
            regexp_validation: "Validação de expressão regular",
            enter_pdf_password: "Digite a senha do PDF",
            wrong_password: "Senha incorreta",
            currency: "Moeda",
            save_and_preview: "Salvar e Pré-visualizar",
            preferences: "Preferências",
            available_in_pro: "Disponível no Pro",
            some_fields_are_missing_in_the_formula: "Faltam alguns campos na fórmula.",
            learn_more: "Saiba mais",
        },
        Eu = {
            recurrent: "Récurrent",
            one_off: "Ponctuel",
            editable: "Éditable",
            search_field: "Champ de recherche",
            field_not_found: "Champ non trouvé",
            clear: "Effacer",
            type_value: "Tapez la valeur",
            add_all_required_fields_to_continue: "Ajoutez tous les champs obligatoires pour continuer",
            uploaded_pdf_contains_form_fields_keep_or_remove_them: "Le PDF téléchargé contient des champs. Les conserver ou les supprimer?",
            keep: "Conserver",
            align: "Aligner",
            left: "Gauche",
            heading: "En-tête",
            validation: "Validation",
            add_blank_page: "Ajouter une page blanche",
            right: "Droite",
            add_condition: "Ajouter une condition",
            center: "Centre",
            with_logo: "Avec logo",
            description: "Description",
            display_title: "Titre d'affichage",
            unchecked: "Non coché",
            price: "Prix",
            equal: "Égal",
            not_equal: "Non égal",
            contains: "Contient",
            signing_date: "Date de signature",
            does_not_contain: "Ne contient pas",
            not_empty: "Non vide",
            empty: "Vide",
            select_field_: "Sélectionner un champ...",
            select_value_: "Sélectionner une valeur...",
            remove_condition: "Supprimer la condition",
            condition: "Condition",
            formula: "Formule",
            edit: "Éditer",
            settings: "Paramètres",
            up: "Haut",
            down: "Bas",
            set_signing_date: "Définir la date de signature",
            are_you_sure_: "Êtes-vous sûr?",
            sign_yourself: "Signez-vous",
            checked: "Coché",
            send: "Envoyer",
            remove: "Supprimer",
            save: "Enregistrer",
            cancel: "Annuler",
            draw_field_on_the_document: "Dessiner un champ sur le document",
            click_to_upload: "Cliquez pour télécharger",
            or_drag_and_drop_files: "ou faites glisser-déposer des fichiers",
            uploading: "Téléchargement en cours",
            processing_: "Traitement en cours...",
            add_pdf_documents_or_images: "Ajoutez des documents PDF ou des images",
            add_documents_or_images: "Ajoutez des documents ou des images",
            required: "Requis",
            default_value: "Valeur par défaut",
            format: "Format",
            read_only: "Lecture seule",
            page: "Page",
            draw_new_area: "Dessiner une nouvelle zone",
            copy_to_all_pages: "Copier sur toutes les pages",
            add_option: "Ajouter une option",
            option: "Option",
            first_party: "Première partie",
            second_party: "Deuxième partie",
            third_party: "Troisième partie",
            fourth_party: "Quatrième partie",
            fifth_party: "Cinquième partie",
            sixth_party: "Sixième partie",
            seventh_party: "Septième partie",
            eighth_party: "Huitième partie",
            ninth_party: "Neuvième partie",
            tenth_party: "Dixième partie",
            eleventh_party: "Onzième Parti",
            twelfth_party: "Douzième Parti",
            thirteenth_party: "Treizième Parti",
            fourteenth_party: "Quatorzième Parti",
            fifteenth_party: "Quinzième Parti",
            sixteenth_party: "Seizième Parti",
            seventeenth_party: "Dix-septième Parti",
            eighteenth_party: "Dix-huitième Parti",
            nineteenth_party: "Dix-Neuvième Fête",
            twentieth_party: "Vingtième Fête",
            draw: "Dessiner",
            add: "Ajouter",
            or_add_field_without_drawing: "Ou ajoutez un champ sans dessiner",
            text: "Texte",
            signature: "Signature",
            initials: "Initiales",
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
            phone: "Téléphone",
            text_field: "Champ de Texte",
            signature_field: "Champ de Signature",
            initials_field: "Champ d'Initiales",
            date_field: "Champ de Date",
            number_field: "Champ de Numéro",
            image_field: "Champ d'Image",
            file_field: "Champ de Fichier",
            select_field: "Champ de Choix",
            checkbox_field: "Champ de Coche",
            multiple_field: "Champ de Choix Multiple",
            radio_field: "Champ de Groupe Radio",
            cells_field: "Champ de Cellules",
            stamp_field: "Champ de Tampon",
            payment_field: "Champ de Paiement",
            phone_field: "Champ de Téléphone",
            draw_a_text_field_on_the_page_with_a_mouse: "Dessinez un champ texte sur la page avec une souris",
            drag_and_drop_any_other_field_type_on_the_page: "Glissez et déposez tout autre type de champ sur la page",
            click_on_the_field_type_above_to_start_drawing_it: "Cliquez sur le type de champ ci-dessus pour commencer à le dessiner",
            please_draw_fields_to_prepare_the_document: "Veuillez dessiner les champs pour préparer le document.",
            only_pdf_and_images_are_supported: "Seuls les PDF et les images sont pris en charge.",
            unlock_sms_verified_phone_number_field_with_paid_plan_use_text_field_for_phone_numbers_without_verification:
                "Débloquez le champ de numéro de téléphone vérifié par SMS avec un plan payant. Utilisez un champ texte pour les numéros de téléphone sans vérification.",
            available_only_in_pro: "Disponible uniquement en Pro",
            failed_to_download_files: "Échec du téléchargement des fichiers",
            signature_is_too_small_please_redraw: "La signature est trop petite. Veuillez la redessiner.",
            please_add_fields_for_the_submitter_name_or_remove_the_submitter_name_if_not_needed: "Veuillez ajouter des champs pour {submitter_name} ou retirer {submitter_name} si ce n'est pas nécessaire.",
            draw_field: "Dessiner le champ {field}",
            replace: "Remplacer",
            uploading_: "Téléchargement en cours...",
            add_document: "Télécharger",
            any: "Tout",
            drawn: "Dessiné",
            typed: "Tapé",
            none: "Aucun",
            ssn: "SSN",
            ein: "EIN",
            email: "E-mail",
            url: "URL",
            zip: "ZIP",
            custom: "Personnalisé",
            numbers_only: "Chiffres uniquement",
            letters_only: "Lettres uniquement",
            regexp_validation: "Validation par expression régulière",
            enter_pdf_password: "Entrez le mot de passe PDF",
            wrong_password: "Mot de passe incorrect",
            currency: "Devise",
            save_and_preview: "Enregistrer et prévisualiser",
            preferences: "Préférences",
            available_in_pro: "Disponible en version Pro",
            some_fields_are_missing_in_the_formula: "Certains champs manquent dans la formule.",
            learn_more: "En savoir plus",
        },
        qu = {
            wiederkehrend: "Wiederkehrend",
            einmalig: "Einmalig",
            editable: "Bearbeitbar",
            search_field: "Suchfeld",
            field_not_found: "Feld nicht gefunden",
            clear: "Löschen",
            type_value: "Wert eingeben",
            add_all_required_fields_to_continue: "Fügen Sie alle erforderlichen Felder hinzu, um fortzufahren",
            uploaded_pdf_contains_form_fields_keep_or_remove_them: "Das hochgeladene PDF enthält Formularfelder. Behalten oder entfernen?",
            keep: "Behalten",
            align: "Ausrichten",
            left: "Links",
            heading: "Überschrift",
            validation: "Validierung",
            add_blank_page: "Leere Seite hinzufügen",
            right: "Rechts",
            add_condition: "Bedingung hinzufügen",
            center: "Zentriert",
            with_logo: "Mit Logo",
            description: "Beschreibung",
            display_title: "Anzeigetitel",
            unchecked: "Nicht überprüft",
            price: "Preis",
            equal: "Gleich",
            not_equal: "Ungleich",
            contains: "Enthält",
            does_not_contain: "Enthält nicht",
            not_empty: "Nicht leer",
            empty: "Leer",
            signing_date: "Signaturdatum",
            select_field_: "Feld auswählen...",
            select_value_: "Wert auswählen...",
            remove_condition: "Bedingung entfernen",
            condition: "Bedingung",
            formula: "Formel",
            edit: "Bearbeiten",
            settings: "Einstellungen",
            up: "Nach oben",
            down: "Nach unten",
            set_signing_date: "Unterschriftdatum festlegen",
            are_you_sure_: "Bist du sicher?",
            sign_yourself: "Unterschreiben Sie selbst",
            checked: "Ausgewählt",
            send: "Senden",
            remove: "Entfernen",
            save: "Speichern",
            cancel: "Abbrechen",
            draw_field_on_the_document: "Ein Feld auf dem Dokument zeichnen",
            click_to_upload: "Klicken Sie zum Hochladen",
            or_drag_and_drop_files: "oder Dateien hierher ziehen",
            uploading: "Hochladen",
            processing_: "Verarbeitung...",
            add_pdf_documents_or_images: "PDF-Dokumente oder Bilder hinzufügen",
            add_documents_or_images: "Dokumente oder Bilder hinzufügen",
            required: "Erforderlich",
            default_value: "Standardwert",
            format: "Format",
            read_only: "Nur lesen",
            page: "Seite",
            draw_new_area: "Neuen Bereich zeichnen",
            copy_to_all_pages: "Auf alle Seiten kopieren",
            add_option: "Option hinzufügen",
            option: "Option",
            first_party: "Erste Partei",
            second_party: "Zweite Partei",
            third_party: "Dritte Partei",
            fourth_party: "Vierte Partei",
            fifth_party: "Fünfte Partei",
            sixth_party: "Sechste Partei",
            seventh_party: "Siebte Partei",
            eighth_party: "Achte Partei",
            ninth_party: "Neunte Partei",
            tenth_party: "Zehnte Partei",
            eleventh_party: "Elfte Partei",
            twelfth_party: "Zwölfte Partei",
            thirteenth_party: "Dreizehnte Partei",
            fourteenth_party: "Vierzehnte Partei",
            fifteenth_party: "Fünfzehnte Partei",
            sixteenth_party: "Sechzehnte Partei",
            seventeenth_party: "Siebzehnte Partei",
            eighteenth_party: "Achtzehnte Partei",
            nineteenth_party: "Neunzehnte Party",
            twentieth_party: "Zwanzigste Party",
            draw: "Zeichnen",
            add: "Hinzufügen",
            or_add_field_without_drawing: "Oder Feld ohne Zeichnung hinzufügen",
            text: "Text",
            signature: "Unterschrift",
            initials: "Initialen",
            date: "Datum",
            number: "Nummer",
            image: "Bild",
            file: "Datei",
            select: "Auswählen",
            checkbox: "Checkbox",
            multiple: "Mehrere",
            radio: "Radio",
            cells: "Zellen",
            stamp: "Stempel",
            payment: "Zahlung",
            phone: "Telefon",
            text_field: "Textfeld",
            signature_field: "Unterschriftsfeld",
            initials_field: "Initialenfeld",
            date_field: "Datumsfeld",
            number_field: "Zahlenfeld",
            image_field: "Bildfeld",
            file_field: "Dateifeld",
            select_field: "Auswahlfeld",
            checkbox_field: "Checkbox-Feld",
            multiple_field: "Mehrfach-Auswahlfeld",
            radio_field: "Radio-Gruppenfeld",
            cells_field: "Zellenfeld",
            stamp_field: "Stempelfeld",
            payment_field: "Zahlungsfeld",
            phone_field: "Telefonfeld",
            draw_a_text_field_on_the_page_with_a_mouse: "Textfeld auf der Seite mit der Maus zeichnen",
            drag_and_drop_any_other_field_type_on_the_page: "Ziehe und lasse einen anderen Feldtyp auf die Seite fallen",
            click_on_the_field_type_above_to_start_drawing_it: "Klicke auf den Feldtyp oben, um mit dem Zeichnen zu beginnen",
            please_draw_fields_to_prepare_the_document: "Bitte zeichne Felder, um das Dokument vorzubereiten.",
            only_pdf_and_images_are_supported: "Nur PDFs und Bilder werden unterstützt.",
            unlock_sms_verified_phone_number_field_with_paid_plan_use_text_field_for_phone_numbers_without_verification:
                "Schalte das SMS-verifizierte Telefonnummernfeld mit einem kostenpflichtigen Plan frei. Verwende das Textfeld für Telefonnummern ohne Verifizierung.",
            available_only_in_pro: "Nur in Pro verfügbar",
            failed_to_download_files: "Fehler beim Herunterladen der Dateien",
            signature_is_too_small_please_redraw: "Die Unterschrift ist zu klein. Bitte erneut zeichnen.",
            please_add_fields_for_the_submitter_name_or_remove_the_submitter_name_if_not_needed: "Bitte füge Felder für {submitter_name} hinzu oder entferne {submitter_name}, falls nicht erforderlich.",
            draw_field: "Feld {field} zeichnen",
            replace: "Ersetzen",
            uploading_: "Hochladen...",
            add_document: "Hochladen",
            any: "Jede",
            drawn: "Gezeichnet",
            typed: "Getippt",
            none: "Keine",
            ssn: "SSN",
            ein: "EIN",
            email: "E-Mail",
            url: "URL",
            zip: "ZIP",
            custom: "Benutzerdefiniert",
            numbers_only: "Nur Zahlen",
            letters_only: "Nur Buchstaben",
            regexp_validation: "Regulärer Ausdruck Überprüfung",
            enter_pdf_password: "Geben Sie das PDF-Passwort ein",
            wrong_password: "Falsches Passwort",
            currency: "Währung",
            save_and_preview: "Speichern und Vorschau",
            preferences: "Einstellungen",
            available_in_pro: "In Pro verfügbar",
            some_fields_are_missing_in_the_formula: "Einige Felder fehlen in der Formel.",
            learn_more: "Erfahren Sie mehr",
        },
        Ou = {
            name: "TemplateBuilder",
            components: {
                Upload: Qa,
                Document: Kp,
                Fields: Fp,
                IconInfoCircle: Xs,
                MobileDrawField: Mp,
                IconPlus: mp,
                IconWritingSign: os,
                MobileFields: Fu,
                Logo: Qp,
                Dropzone: dl,
                DocumentPreview: bu,
                DocumentControls: gu,
                IconInnerShadowTop: Za,
                Contenteditable: Jl,
                IconUsersPlus: Du,
                IconChevronDown: fp,
                IconAdjustments: Au,
                IconEye: Tu,
                IconDeviceFloppy: Pu,
            },
            provide() {
                return {
                    template: this.template,
                    save: this.save,
                    t: this.t,
                    currencies: this.currencies,
                    locale: this.locale,
                    baseFetch: this.baseFetch,
                    fieldTypes: this.fieldTypes,
                    backgroundColor: this.backgroundColor,
                    withPhone: this.withPhone,
                    withPayment: this.withPayment,
                    isPaymentConnected: this.isPaymentConnected,
                    withFormula: this.withFormula,
                    withConditions: this.withConditions,
                    defaultDrawFieldType: this.defaultDrawFieldType,
                    selectedAreaRef: Wi(() => this.selectedAreaRef),
                    fieldsDragFieldRef: Wi(() => this.fieldsDragFieldRef),
                };
            },
            props: {
                template: { type: Object, required: !0 },
                i18n: { type: Object, required: !1, default: () => ({}) },
                withFieldPlaceholder: { type: Boolean, required: !1, default: !1 },
                backgroundColor: { type: String, required: !1, default: "" },
                locale: { type: String, required: !1, default: "" },
                editable: { type: Boolean, required: !1, default: !0 },
                withSendButton: { type: Boolean, required: !1, default: !0 },
                withSignYourselfButton: { type: Boolean, required: !1, default: !0 },
                inputMode: { type: Boolean, required: !1, default: !1 },
                withHelp: { type: Boolean, required: !1, default: !0 },
                withAddPageButton: { type: Boolean, required: !1, default: !1 },
                autosave: { type: Boolean, required: !1, default: !0 },
                defaultFields: { type: Array, required: !1, default: () => [] },
                defaultRequiredFields: { type: Array, required: !1, default: () => [] },
                withSelectedFieldType: { type: Boolean, required: !1, default: !1 },
                defaultDrawFieldType: { type: String, required: !1, default: "text" },
                currencies: { type: Array, required: !1, default: () => [] },
                fieldTypes: { type: Array, required: !1, default: () => [] },
                defaultSubmitters: { type: Array, required: !1, default: () => [] },
                defineSubmitters: { type: Array, required: !1, default: () => [] },
                acceptFileTypes: { type: String, required: !1, default: "image/*, application/pdf" },
                baseUrl: { type: String, required: !1, default: "" },
                withLogo: { type: Boolean, required: !1, default: !0 },
                onUpload: { type: Function, required: !1, default: () => () => {} },
                onSave: { type: Function, required: !1, default: () => () => {} },
                onChange: { type: Function, required: !1, default: () => () => {} },
                withStickySubmitters: { type: Boolean, required: !1, default: !0 },
                withUploadButton: { type: Boolean, required: !1, default: !0 },
                withTitle: { type: Boolean, required: !1, default: !0 },
                withFieldsList: { type: Boolean, required: !1, default: !0 },
                authenticityToken: { type: String, required: !1, default: "" },
                withDocumentsList: { type: Boolean, required: !1, default: !0 },
                withPhone: { type: Boolean, required: !1, default: !1 },
                withPayment: { type: Boolean, required: !1, default: !1 },
                isPaymentConnected: { type: Boolean, required: !1, default: !1 },
                withFormula: { type: Boolean, required: !1, default: !1 },
                withConditions: { type: Boolean, required: !1, default: !1 },
                onlyDefinedFields: { type: Boolean, required: !1, default: !1 },
                fetchOptions: { type: Object, required: !1, default: () => ({ headers: {} }) },
            },
            data: () => ({
                documentRefs: [],
                isBreakpointLg: !1,
                isLoadingBlankPage: !1,
                isSaving: !1,
                selectedSubmitter: null,
                showDrawField: !1,
                pendingFieldAttachmentUuids: [],
                drawField: null,
                copiedArea: null,
                drawFieldType: null,
                drawOption: null,
                dragField: null,
            }),
            computed: {
                submitterDefaultNames: wp.computed.names,
                selectedAreaRef: () => St(),
                fieldsDragFieldRef: () => St(),
                language() {
                    return this.locale.split("-")[0].toLowerCase();
                },
                defaultDateFormat() {
                    const e = Intl.DateTimeFormat().resolvedOptions().locale.endsWith("-US"),
                        t = new Intl.DateTimeFormat("en-US", { timeZoneName: "short" }).format(new Date()).match(/\s(?:CST|CDT|PST|PDT|EST|EDT)$/);
                    return this.localeDateFormats[this.locale] || (e || t ? "MM/DD/YYYY" : "DD/MM/YYYY");
                },
                localeDateFormats: () => ({ "de-DE": "DD.MM.YYYY", "fr-FR": "DD/MM/YYYY", "it-IT": "DD/MM/YYYY", "en-GB": "DD/MM/YYYY", "es-ES": "DD/MM/YYYY" }),
                fieldAreasIndex() {
                    const e = {};
                    return (
                        this.template.fields.forEach((t) => {
                            (t.areas || []).forEach((n) => {
                                (e[n.attachment_uuid] ||= {}), (e[n.attachment_uuid][n.page] ||= []).push({ area: n, field: t });
                            });
                        }),
                        e
                    );
                },
                isAllRequiredFieldsAdded() {
                    return !this.defaultRequiredFields?.some((e) => !this.template.fields?.some((t) => t.name === e.name));
                },
                selectedField() {
                    return this.template.fields.find((e) => e.areas?.includes(this.selectedAreaRef.value));
                },
                sortedDocuments() {
                    return this.template.schema.map((e) => this.template.documents.find((t) => t.uuid === e.attachment_uuid));
                },
            },
            created() {
                this.template.fields?.length || 1 !== this.template.submitters?.length || ("Primeira Parte" === this.template.submitters[0]?.name && (this.template.submitters[0].name = this.t("first_party")));
                const e = this.defaultSubmitters.map((e) => this.template.submitters.find((t) => t.name === e)?.uuid);
                this.defaultSubmitters.forEach((t, n) => {
                    const o = (this.template.submitters[n] ||= {});
                    (o.name = t), e.filter(Boolean).length ? (o.uuid = e[n] || o.uuid || Uc()) : (o.uuid ||= Uc());
                }),
                    this.defineSubmitters.forEach((t, n) => {
                        const o = (this.template.submitters[n] ||= {});
                        (o.name = t || this.submitterDefaultNames[n]), e.filter(Boolean).length ? (o.uuid = e[n] || o.uuid || Uc()) : (o.uuid ||= Uc());
                    }),
                    (this.selectedSubmitter = this.template.submitters[0]);
            },
            mounted() {
                (this.undoStack = [JSON.stringify(this.template)]),
                    (this.redoStack = []),
                    this.$nextTick(() => {
                        this.onWindowResize();
                    }),
                    document.addEventListener("keyup", this.onKeyUp),
                    window.addEventListener("keydown", this.onKeyDown),
                    window.addEventListener("resize", this.onWindowResize),
                    this.$nextTick(() => {
                        document.location.search?.includes("stripe_connect_success") && document.querySelector('form[action="/auth/stripe_connect"]')?.closest(".dropdown")?.querySelector("label")?.focus();
                    }),
                    this.template.schema.forEach((e) => {
                        e.pending_fields && this.pendingFieldAttachmentUuids.push(e.attachment_uuid);
                    });
            },
            unmounted() {
                document.removeEventListener("keyup", this.onKeyUp), window.removeEventListener("keydown", this.onKeyDown), window.removeEventListener("resize", this.onWindowResize);
            },
            beforeUpdate() {
                this.documentRefs = [];
            },
            methods: {
                closeDropdown() {
                    document.activeElement.blur();
                },
                t(e) {
                    return this.i18n[e] || o[this.language]?.[e] || Mu[e] || e;
                },
                removePendingFields() {
                    (this.template.fields = this.template.fields.filter((e) => this.template.schema.find((t) => t.attachment_uuid === e.attachment_uuid && t.pending_fields))), this.save();
                },
                addField(e, t = null) {
                    const n = { name: "", uuid: Uc(), required: "checkbox" !== e, areas: t ? [t] : [], submitter_uuid: this.selectedSubmitter.uuid, type: e };
                    ["select", "multiple", "radio"].includes(e) && (n.options = [{ value: "", uuid: Uc() }]),
                        "stamp" === e && (n.readonly = !0),
                        "date" === e && (n.preferences = { format: this.defaultDateFormat }),
                        this.template.fields.push(n),
                        this.save();
                },
                startFieldDraw({ name: e, type: t }) {
                    const n = this.template.fields?.find((t) => t.submitter_uuid === this.selectedSubmitter.uuid && e && e === t.name);
                    if (n) this.drawField = n;
                    else {
                        const n = { name: e || "", uuid: Uc(), required: "checkbox" !== t, areas: [], submitter_uuid: this.selectedSubmitter.uuid, type: t };
                        ["select", "multiple", "radio"].includes(t) && (n.options = [{ value: "", uuid: Uc() }]),
                            "stamp" === t && (n.readonly = !0),
                            "date" === t && (n.preferences = { format: this.defaultDateFormat }),
                            (this.drawField = n);
                    }
                    this.drawOption = null;
                },
                undo() {
                    if (this.undoStack.length > 1) {
                        this.undoStack.pop();
                        const e = this.undoStack[this.undoStack.length - 1],
                            t = JSON.stringify(this.template);
                        e && e !== t && (this.redoStack.push(t), Object.assign(this.template, JSON.parse(e)), this.save());
                    }
                },
                redo() {
                    const e = this.redoStack.pop();
                    this.lastRedoData = e;
                    const t = JSON.stringify(this.template);
                    e && e !== t && (this.undoStack[this.undoStack.length - 1] !== t && this.undoStack.push(t), Object.assign(this.template, JSON.parse(e)), this.save());
                },
                onWindowResize(e) {
                    this.isBreakpointLg = this.$el.getRootNode().querySelector("div[data-v-app]").offsetWidth < 1024;
                },
                setDocumentRefs(e) {
                    e && this.documentRefs.push(e);
                },
                scrollIntoDocument(e) {
                    this.documentRefs.find((t) => t.document.uuid === e.attachment_uuid).$el.scrollIntoView({ behavior: "smooth", block: "start" });
                },
                clearDrawField() {
                    (this.drawField = null), (this.drawOption = null), (this.showDrawField = !1), this.withSelectedFieldType || (this.drawFieldType = "");
                },
                onKeyUp(e) {
                    "Escape" === e.code && (this.clearDrawField(), (this.selectedAreaRef.value = null)),
                        this.editable &&
                            ["Backspace", "Delete"].includes(e.key) &&
                            this.selectedAreaRef.value &&
                            document.activeElement === document.body &&
                            (this.removeArea(this.selectedAreaRef.value), (this.selectedAreaRef.value = null));
                },
                onKeyDown(e) {
                    (e.metaKey && e.shiftKey && "z" === e.key) || (e.ctrlKey && "Z" === e.key)
                        ? (e.stopImmediatePropagation(), e.preventDefault(), this.redo())
                        : (e.ctrlKey || e.metaKey) && "z" === e.key
                        ? (e.stopImmediatePropagation(), e.preventDefault(), this.undo())
                        : (e.ctrlKey || e.metaKey) && "c" === e.key && document.activeElement === document.body
                        ? (e.preventDefault(), (this.copiedArea = this.selectedAreaRef?.value))
                        : (e.ctrlKey || e.metaKey) && "v" === e.key && this.copiedArea && document.activeElement === document.body
                        ? (e.preventDefault(), this.pasteField())
                        : this.selectedAreaRef.value && ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"].includes(e.key) && document.activeElement === document.body && (e.preventDefault(), this.handleAreaArrows(e));
                },
                handleAreaArrows(e) {
                    if (!this.editable) return;
                    const t = this.selectedAreaRef.value,
                        n = this.documentRefs.find((e) => e.document.uuid === t.attachment_uuid).pageRefs[t.page].$refs.image.getBoundingClientRect(),
                        o = e.shiftKey ? 5 : 1;
                    "ArrowRight" === e.key && e.altKey
                        ? (t.w = Math.min(Math.max(t.w + o / n.width, 0), 1 - t.x))
                        : "ArrowLeft" === e.key && e.altKey
                        ? (t.w = Math.min(Math.max(t.w - o / n.width, 0), 1 - t.x))
                        : "ArrowUp" === e.key && e.altKey
                        ? (t.h = Math.min(Math.max(t.h - o / n.height, 0), 1 - t.y))
                        : "ArrowDown" === e.key && e.altKey
                        ? (t.h = Math.min(Math.max(t.h + o / n.height, 0), 1 - t.y))
                        : "ArrowRight" === e.key
                        ? (t.x = Math.min(Math.max(t.x + o / n.width, 0), 1 - t.w))
                        : "ArrowLeft" === e.key
                        ? (t.x = Math.min(Math.max(t.x - o / n.width, 0), 1 - t.w))
                        : "ArrowUp" === e.key
                        ? (t.y = Math.min(Math.max(t.y - o / n.height, 0), 1 - t.h))
                        : "ArrowDown" === e.key && (t.y = Math.min(Math.max(t.y + o / n.height, 0), 1 - t.h)),
                        this.debouncedSave();
                },
                debouncedSave() {
                    clearTimeout(this._saveTimeout),
                        (this._saveTimeout = setTimeout(() => {
                            this.save();
                        }, 700));
                },
                removeArea(e) {
                    const t = this.template.fields.find((t) => t.areas?.includes(e));
                    t.areas.splice(t.areas.indexOf(e), 1), t.areas.length || this.template.fields.splice(this.template.fields.indexOf(t), 1), this.save();
                },
                pasteField() {
                    const e = this.template.fields.find((e) => e.areas?.includes(this.copiedArea)),
                        t = this.selectedAreaRef?.value || this.copiedArea;
                    if (e && t) {
                        const n = { ...JSON.parse(JSON.stringify(this.copiedArea)), attachment_uuid: t.attachment_uuid, page: t.page, x: t.x, y: t.y + 1.3 * t.h };
                        ["radio", "multiple"].includes(e.type)
                            ? ((this.copiedArea.option_uuid ||= e.options[0].uuid), (n.option_uuid = Uc()), e.options.push({ uuid: n.option_uuid }), e.areas.push(n))
                            : this.template.fields.push({ ...JSON.parse(JSON.stringify(e)), uuid: Uc(), areas: [n] }),
                            (this.selectedAreaRef.value = n),
                            this.save();
                    }
                },
                pushUndo() {
                    const e = JSON.stringify(this.template);
                    this.undoStack[this.undoStack.length - 1] !== e && (this.undoStack.push(e), this.lastRedoData !== e && (this.redoStack = []));
                },
                setDefaultAreaSize(e, t) {
                    const n = this.documentRefs.find((t) => t.document.uuid === e.attachment_uuid).pageRefs[e.page].$refs.mask;
                    "checkbox" === t
                        ? ((e.w = n.clientWidth / 30 / n.clientWidth), (e.h = (n.clientWidth / 30 / n.clientWidth) * (n.clientWidth / n.clientHeight)))
                        : "image" === t
                        ? ((e.w = n.clientWidth / 5 / n.clientWidth), (e.h = (n.clientWidth / 5 / n.clientWidth) * (n.clientWidth / n.clientHeight)))
                        : "signature" === t || "stamp" === t
                        ? ((e.w = n.clientWidth / 5 / n.clientWidth), (e.h = ((n.clientWidth / 5 / n.clientWidth) * (n.clientWidth / n.clientHeight)) / 2))
                        : "initials" === t
                        ? ((e.w = n.clientWidth / 10 / n.clientWidth), (e.h = n.clientWidth / 35 / n.clientWidth))
                        : ((e.w = n.clientWidth / 5 / n.clientWidth), (e.h = n.clientWidth / 35 / n.clientWidth));
                },
                onDraw(e) {
                    if (this.drawField) {
                        if (this.drawOption) {
                            const t = this.drawField.areas?.find((e) => !e.option_uuid);
                            t && !this.drawField.areas.find((e) => e.option_uuid === this.drawField.options[0].uuid) && (t.option_uuid = this.drawField.options[0].uuid), (e.option_uuid = this.drawOption.uuid);
                        }
                        if (0 === e.w || 0 === e.h) {
                            const t = this.drawField.areas?.[this.drawField.areas.length - 1];
                            this.selectedField?.type === this.drawField.type
                                ? ((e.w = this.selectedAreaRef.value.w), (e.h = this.selectedAreaRef.value.h))
                                : t
                                ? ((e.w = t.w), (e.h = t.h))
                                : this.setDefaultAreaSize(e, this.drawOption ? "checkbox" : this.drawField?.type),
                                (e.x -= e.w / 2),
                                (e.y -= e.h / 2);
                        }
                        this.drawField.areas ||= [];
                        const t = this.drawField.areas.findIndex((t) => t.attachment_uuid === e.attachment_uuid && t.page > e.page);
                        -1 !== t ? this.drawField.areas.splice(t, 0, e) : this.drawField.areas.push(e),
                            -1 === this.template.fields.indexOf(this.drawField) && this.template.fields.push(this.drawField),
                            (this.drawField = null),
                            (this.drawOption = null),
                            (this.selectedAreaRef.value = e),
                            this.save();
                    } else {
                        const t = this.documentRefs.find((t) => t.document.uuid === e.attachment_uuid).pageRefs[e.page].$refs.mask;
                        let n = t.clientWidth * e.w < 35 ? "checkbox" : "text";
                        if (
                            (this.drawFieldType
                                ? (n = this.drawFieldType)
                                : this.defaultDrawFieldType && "text" !== this.defaultDrawFieldType
                                ? (n = this.defaultDrawFieldType)
                                : 0 === this.fieldTypes.length || this.fieldTypes.includes(n) || (n = this.fieldTypes[0]),
                            "checkbox" === n && !this.drawFieldType && ("checkbox" === this.template.fields[this.template.fields.length - 1]?.type || e.w))
                        ) {
                            const o = [...this.template.fields].reverse().find((e) => e.type === n),
                                i = o?.areas?.[o.areas.length - 1];
                            if (i || e.w) {
                                const n = i?.w || 30 / t.clientWidth,
                                    o = i?.h || 30 / t.clientHeight;
                                t.clientWidth * e.w < 5 && ((e.x = e.x - n / 2), (e.y = e.y - o / 2)), (e.w = n), (e.h = o);
                            }
                        }
                        !this.drawFieldType ||
                            (0 !== e.w && 0 !== e.h) ||
                            (this.selectedField?.type === this.drawFieldType ? ((e.w = this.selectedAreaRef.value.w), (e.h = this.selectedAreaRef.value.h)) : this.setDefaultAreaSize(e, this.drawFieldType),
                            (e.x -= e.w / 2),
                            (e.y -= e.h / 2)),
                            e.w && (this.addField(n, e), (this.selectedAreaRef.value = e));
                    }
                },
                onDropfield(e) {
                    const t = this.fieldsDragFieldRef.value || { name: "", uuid: Uc(), submitter_uuid: this.selectedSubmitter.uuid, required: "checkbox" !== this.dragField.type, ...this.dragField };
                    this.fieldsDragFieldRef.value ||
                        (["select", "multiple", "radio"].includes(t.type) && (t.options = [{ value: "", uuid: Uc() }]),
                        ["stamp", "heading"].includes(t.type) && (t.readonly = !0),
                        "date" === t.type && (t.preferences = { format: this.defaultDateFormat }));
                    const n = { x: (e.x - 6) / e.maskW, y: e.y / e.maskH, page: e.page, attachment_uuid: e.attachment_uuid },
                        o = [...this.template.fields].reverse().find((e) => e.type === t.type);
                    let i;
                    (i =
                        this.selectedField?.type === t.type
                            ? this.selectedAreaRef.value
                            : o?.areas?.length
                            ? o.areas[o.areas.length - 1]
                            : ["checkbox"].includes(t.type)
                            ? { w: e.maskW / 30 / e.maskW, h: (e.maskW / 30 / e.maskW) * (e.maskW / e.maskH) }
                            : "image" === t.type
                            ? { w: e.maskW / 5 / e.maskW, h: (e.maskW / 5 / e.maskW) * (e.maskW / e.maskH) }
                            : "signature" === t.type || "stamp" === t.type
                            ? { w: e.maskW / 5 / e.maskW, h: ((e.maskW / 5 / e.maskW) * (e.maskW / e.maskH)) / 2 }
                            : "initials" === t.type
                            ? { w: e.maskW / 10 / e.maskW, h: e.maskW / 35 / e.maskW }
                            : { w: e.maskW / 5 / e.maskW, h: e.maskW / 35 / e.maskW }),
                        (n.w = i.w),
                        (n.h = i.h),
                        (n.y = n.y - i.h / 2),
                        "cells" === t.type && (n.cell_w = i.cell_w || i.w / 5),
                        (t.areas ||= []);
                    const r = t.areas[t.areas.length - 1];
                    r && ((n.x -= r.w / 2), (n.w = r.w), (n.h = r.h)),
                        t.areas.push(n),
                        (this.selectedAreaRef.value = n),
                        -1 === this.template.fields.indexOf(t) && this.template.fields.push(t),
                        this.save(),
                        document.activeElement?.blur(),
                        "heading" === t.type &&
                            this.$nextTick(() => {
                                this.documentRefs
                                    .find((t) => t.document.uuid === e.attachment_uuid)
                                    .pageRefs[e.page].areaRefs.find((e) => e.area === this.selectedAreaRef.value)
                                    .focusValueInput();
                            });
                },
                addBlankPage() {
                    this.isLoadingBlankPage = !0;
                    const e = document.createElement("canvas");
                    (e.width = 816), (e.height = 1056);
                    const t = e.getContext("2d");
                    (t.fillStyle = "white"),
                        t.fillRect(0, 0, e.width, e.height),
                        e.toBlob((e) => {
                            const t = new File([e], `Page ${this.template.schema.length + 1}.png`, { type: e.type, lastModified: Date.now() }),
                                n = new FormData();
                            n.append("files[]", t),
                                this.baseFetch(`/templates/${this.template.id}/documents`, { method: "POST", body: n })
                                    .then(async (e) => {
                                        this.updateFromUpload(await e.json());
                                    })
                                    .finally(() => {
                                        this.isLoadingBlankPage = !1;
                                    });
                        }, "image/png");
                },
                updateFromUpload(e) {
                    this.template.schema.push(...e.schema),
                        this.template.documents.push(...e.documents),
                        e.fields && (this.template.fields = e.fields),
                        e.submitters && ((this.template.submitters = e.submitters), this.template.submitters.find((e) => e.uuid === this.selectedSubmitter?.uuid) || (this.selectedSubmitter = this.template.submitters[0])),
                        this.$nextTick(() => {
                            (this.$refs.previews.scrollTop = this.$refs.previews.scrollHeight), this.scrollIntoDocument(e.schema[0]);
                        }),
                        "New Document" === this.template.name && (this.template.name = this.template.schema[0].name),
                        this.onUpload && this.onUpload(this.template),
                        this.save(),
                        e.documents.forEach((e) => {
                            e.metadata?.pdf?.fields?.length &&
                                (this.pendingFieldAttachmentUuids.push(e.uuid),
                                e.metadata.pdf.fields.forEach((e) => {
                                    (e.submitter_uuid = this.selectedSubmitter.uuid), this.template.fields.push(e);
                                }));
                        });
                },
                updateName(e) {
                    (this.template.name = e), this.save();
                },
                onDocumentRemove(e) {
                    window.confirm(this.t("are_you_sure_")) && this.template.schema.splice(this.template.schema.indexOf(e), 1);
                    const t = [];
                    this.template.fields.forEach((n) => {
                        [...(n.areas || [])].forEach((o) => {
                            o.attachment_uuid === e.attachment_uuid && (n.areas.splice(n.areas.indexOf(o), 1), t.push(n.uuid));
                        });
                    }),
                        (this.template.fields = this.template.fields.filter((e) => !t.includes(e.uuid) || e.areas?.length)),
                        this.save();
                },
                onDocumentReplace(e) {
                    const { replaceSchemaItem: t, schema: n, documents: o } = e;
                    if ((this.template.schema.splice(this.template.schema.indexOf(t), 1, n[0]), this.template.documents.push(...o), e.fields)) {
                        this.template.fields = e.fields;
                        const n = [];
                        this.template.fields.forEach((e) => {
                            [...(e.areas || [])].forEach((o) => {
                                o.attachment_uuid === t.attachment_uuid && (e.areas.splice(e.areas.indexOf(o), 1), n.push(e.uuid));
                            });
                        }),
                            (this.template.fields = this.template.fields.filter((e) => !n.includes(e.uuid) || e.areas?.length));
                    }
                    e.submitters && ((this.template.submitters = e.submitters), this.template.submitters.find((e) => e.uuid === this.selectedSubmitter?.uuid) || (this.selectedSubmitter = this.template.submitters[0])),
                        this.template.fields.forEach((e) => {
                            (e.areas || []).forEach((e) => {
                                e.attachment_uuid === t.attachment_uuid && (e.attachment_uuid = n[0].attachment_uuid);
                            });
                        }),
                        this.onUpload && this.onUpload(this.template),
                        this.save();
                },
                moveDocument(e, t) {
                    const n = this.template.schema.indexOf(e);
                    this.template.schema.splice(n, 1), n + t > this.template.schema.length ? this.template.schema.unshift(e) : n + t < 0 ? this.template.schema.push(e) : this.template.schema.splice(n + t, 0, e), this.save();
                },
                maybeShowErrorTemplateAlert(e) {
                    if (!this.isAllRequiredFieldsAdded) {
                        e.preventDefault();
                        const t = this.defaultRequiredFields?.filter((e) => !this.template.fields?.some((t) => t.name === e.name));
                        if (t?.length) return alert(this.t("add_all_required_fields_to_continue") + ": " + t.map((e) => e.name).join(", "));
                    }
                    if (this.template.fields.length) {
                        const t = this.template.submitters.find((e) => !this.template.fields.some((t) => t.submitter_uuid === e.uuid));
                        t && (e.preventDefault(), alert(this.t("please_add_fields_for_the_submitter_name_or_remove_the_submitter_name_if_not_needed").replaceAll("{submitter_name}", t.name)));
                    } else e.preventDefault(), alert(this.t("please_draw_fields_to_prepare_the_document"));
                },
                onSaveClick() {
                    if (!this.isAllRequiredFieldsAdded) {
                        const e = this.defaultRequiredFields?.filter((e) => !this.template.fields?.some((t) => t.name === e.name));
                        if (e?.length) return alert(this.t("add_all_required_fields_to_continue") + ": " + e.map((e) => e.name).join(", "));
                    }
                    if (this.template.fields.length) {
                        const e = this.template.submitters.find((e) => !this.template.fields.some((t) => t.submitter_uuid === e.uuid));
                        e
                            ? alert(this.t("please_add_fields_for_the_submitter_name_or_remove_the_submitter_name_if_not_needed").replaceAll("{submitter_name}", e.name))
                            : ((this.isSaving = !0),
                              this.save()
                                  .then(() => {
                                      window.Turbo.visit(`/templates/${this.template.id}`);
                                  })
                                  .finally(() => {
                                      this.isSaving = !1;
                                  }));
                    } else alert(this.t("please_draw_fields_to_prepare_the_document"));
                },
                scrollToArea(e) {
                    this.documentRefs.find((t) => t.document.uuid === e.attachment_uuid).scrollToArea(e), (this.selectedAreaRef.value = e);
                },
                baseFetch(e, t = {}) {
                    return fetch(this.baseUrl + e, { ...t, headers: { "X-CSRF-Token": this.authenticityToken, ...this.fetchOptions.headers, ...t.headers } });
                },
                save({ force: e } = { force: !1 }) {
                    return (
                        (this.pendingFieldAttachmentUuids = []),
                        this.onChange && this.onChange(this.template),
                        this.autosave || e
                            ? (this.$nextTick(() => {
                                  this.$el.closest("template-builder") && (this.$el.closest("template-builder").dataset.template = JSON.stringify(this.template));
                              }),
                              this.pushUndo(),
                              this.baseFetch(`/templates/${this.template.id}`, {
                                  method: "PUT",
                                  body: JSON.stringify({ template: { name: this.template.name, schema: this.template.schema, submitters: this.template.submitters, fields: this.template.fields } }),
                                  headers: { "Content-Type": "application/json" },
                              }).then(() => {
                                  this.onSave && this.onSave(this.template);
                              }))
                            : Promise.resolve({})
                    );
                },
            },
        },
        $u = (0, Ga.A)(Ou, [
            [
                "render",
                function (e, t, n, o, i, r) {
                    const a = eo("IconInfoCircle"),
                        l = eo("Logo"),
                        s = eo("Contenteditable"),
                        d = eo("IconWritingSign"),
                        c = eo("IconUsersPlus"),
                        p = eo("IconInnerShadowTop"),
                        u = eo("IconDeviceFloppy"),
                        h = eo("IconChevronDown"),
                        b = eo("IconEye"),
                        f = eo("IconAdjustments"),
                        m = eo("DocumentPreview"),
                        g = eo("Upload"),
                        w = eo("IconPlus"),
                        y = eo("Dropzone"),
                        v = eo("Document"),
                        x = eo("DocumentControls"),
                        _ = eo("Fields"),
                        k = eo("MobileDrawField"),
                        C = eo("MobileFields");
                    return (
                        si(),
                        ui("div", ia, [
                            i.pendingFieldAttachmentUuids.length
                                ? (si(),
                                  ui("div", ra, [
                                      yi("div", aa, [
                                          vi(a, { class: "stroke-info shrink-0 w-6 h-6" }),
                                          yi("span", null, ne(r.t("uploaded_pdf_contains_form_fields_keep_or_remove_them")), 1),
                                          yi("div", null, [
                                              yi("button", { class: "btn btn-sm", onClick: t[0] || (t[0] = jr((...e) => r.removePendingFields && r.removePendingFields(...e), ["prevent"])) }, ne(r.t("remove")), 1),
                                              yi("button", { class: "btn btn-sm btn-neutral text-white", onClick: t[1] || (t[1] = jr((...e) => r.save && r.save(...e), ["prevent"])) }, ne(r.t("keep")), 1),
                                          ]),
                                      ]),
                                  ]))
                                : Ci("", !0),
                            e.$slots.buttons || n.withTitle
                                ? (si(),
                                  ui(
                                      "div",
                                      {
                                          key: 1,
                                          id: "title_container",
                                          class: J(["flex justify-between py-1.5 items-center pr-4 top-0 z-10", { sticky: n.withStickySubmitters || i.isBreakpointLg }]),
                                          style: W({ backgroundColor: n.backgroundColor }),
                                      },
                                      [
                                          yi("div", la, [
                                              n.withLogo ? (si(), ui("a", sa, [vi(l)])) : Ci("", !0),
                                              n.withTitle
                                                  ? (si(),
                                                    hi(
                                                        s,
                                                        {
                                                            key: 1,
                                                            "model-value": n.template.name,
                                                            editable: n.editable,
                                                            class: "text-xl md:text-3xl font-semibold focus:text-clip",
                                                            "icon-stroke-width": 2.3,
                                                            "onUpdate:modelValue": r.updateName,
                                                        },
                                                        null,
                                                        8,
                                                        ["model-value", "editable", "onUpdate:modelValue"]
                                                    ))
                                                  : Ci("", !0),
                                          ]),
                                          yi("div", da, [
                                              e.$slots.buttons
                                                  ? lo(e.$slots, "buttons", { key: 0 })
                                                  : (si(),
                                                    ui(
                                                        ni,
                                                        { key: 1 },
                                                        [
                                                            n.withSignYourselfButton
                                                                ? (si(),
                                                                  ui(
                                                                      "a",
                                                                      {
                                                                          key: 0,
                                                                          href: n.template.submitters.length > 1 ? `/templates/${n.template.id}/submissions/new?selfsign=true` : `/d/${n.template.slug}`,
                                                                          class: "btn btn-primary btn-ghost text-base hidden md:flex",
                                                                          target: n.template.submitters.length > 1 ? "" : "_blank",
                                                                          "data-turbo-frame": n.template.submitters.length > 1 ? "modal" : "",
                                                                          onClick: t[2] || (t[2] = (...e) => r.maybeShowErrorTemplateAlert && r.maybeShowErrorTemplateAlert(...e)),
                                                                      },
                                                                      [vi(d, { width: "22", class: "inline" }), yi("span", pa, ne(r.t("sign_yourself")), 1)],
                                                                      8,
                                                                      ca
                                                                  ))
                                                                : Ci("", !0),
                                                            n.withSendButton
                                                                ? (si(),
                                                                  ui(
                                                                      "a",
                                                                      {
                                                                          key: 1,
                                                                          href: `/templates/${n.template.id}/submissions/new?with_link=true`,
                                                                          "data-turbo-frame": "modal",
                                                                          class: "white-button md:!px-6",
                                                                          onClick: t[3] || (t[3] = (...e) => r.maybeShowErrorTemplateAlert && r.maybeShowErrorTemplateAlert(...e)),
                                                                      },
                                                                      [vi(c, { width: "20", class: "inline" }), yi("span", ha, ne(r.t("send")), 1)],
                                                                      8,
                                                                      ua
                                                                  ))
                                                                : Ci("", !0),
                                                            n.editable
                                                                ? (si(),
                                                                  ui("span", ba, [
                                                                      yi(
                                                                          "button",
                                                                          Ai({ class: ["base-button !rounded-r-none !pr-2", { disabled: i.isSaving }] }, i.isSaving ? { disabled: !0 } : {}, {
                                                                              onClick: t[4] || (t[4] = jr((...e) => r.onSaveClick && r.onSaveClick(...e), ["prevent"])),
                                                                          }),
                                                                          [i.isSaving ? (si(), hi(p, { key: 0, width: "22", class: "animate-spin" })) : (si(), hi(u, { key: 1, width: "22" })), yi("span", fa, ne(r.t("save")), 1)],
                                                                          16
                                                                      ),
                                                                      yi("div", ma, [
                                                                          yi("label", ga, [yi("span", wa, [vi(h, { class: "w-5 h-5 flex-shrink-0" })])]),
                                                                          yi("ul", ya, [
                                                                              yi("li", null, [
                                                                                  yi(
                                                                                      "a",
                                                                                      { href: `/templates/${n.template.id}/form`, "data-turbo": "false", class: "flex items-center justify-center space-x-2" },
                                                                                      [vi(b, { class: "w-6 h-6 flex-shrink-0" }), yi("span", xa, ne(r.t("save_and_preview")), 1)],
                                                                                      8,
                                                                                      va
                                                                                  ),
                                                                              ]),
                                                                              yi("li", null, [
                                                                                  yi(
                                                                                      "a",
                                                                                      {
                                                                                          href: `/templates/${n.template.id}/preferences`,
                                                                                          "data-turbo-frame": "modal",
                                                                                          class: "flex space-x-2",
                                                                                          onClick: t[5] || (t[5] = (...e) => r.closeDropdown && r.closeDropdown(...e)),
                                                                                      },
                                                                                      [vi(f, { class: "w-6 h-6 flex-shrink-0" }), yi("span", ka, ne(r.t("preferences")), 1)],
                                                                                      8,
                                                                                      _a
                                                                                  ),
                                                                              ]),
                                                                          ]),
                                                                      ]),
                                                                  ]))
                                                                : (si(), ui("a", { key: 3, href: `/templates/${n.template.id}`, class: "base-button" }, [yi("span", Sa, ne(r.t("back")), 1)], 8, Ca)),
                                                        ],
                                                        64
                                                    )),
                                          ]),
                                      ],
                                      6
                                  ))
                                : Ci("", !0),
                            yi(
                                "div",
                                { id: "main_container", class: J(["flex", e.$slots.buttons || n.withTitle ? "md:max-h-[calc(100%_-_60px)]" : "md:max-h-[100%]"]) },
                                [
                                    n.withDocumentsList
                                        ? (si(),
                                          ui(
                                              "div",
                                              {
                                                  key: 0,
                                                  id: "documents_container",
                                                  ref: "previews",
                                                  style: W({ display: i.isBreakpointLg ? "none" : "initial" }),
                                                  class: "overflow-y-auto overflow-x-hidden w-52 flex-none pr-3 mt-0.5 pt-0.5 hidden lg:block",
                                              },
                                              [
                                                  (si(!0),
                                                  ui(
                                                      ni,
                                                      null,
                                                      ro(
                                                          n.template.schema,
                                                          (e, t) => (
                                                              si(),
                                                              hi(
                                                                  m,
                                                                  {
                                                                      key: t,
                                                                      "with-arrows": n.template.schema.length > 1,
                                                                      item: e,
                                                                      document: r.sortedDocuments[t],
                                                                      "accept-file-types": n.acceptFileTypes,
                                                                      "with-replace-button": n.withUploadButton,
                                                                      editable: n.editable,
                                                                      template: n.template,
                                                                      onScrollTo: (t) => r.scrollIntoDocument(e),
                                                                      onRemove: r.onDocumentRemove,
                                                                      onReplace: r.onDocumentReplace,
                                                                      onUp: (t) => r.moveDocument(e, -1),
                                                                      onDown: (t) => r.moveDocument(e, 1),
                                                                      onChange: r.save,
                                                                  },
                                                                  null,
                                                                  8,
                                                                  ["with-arrows", "item", "document", "accept-file-types", "with-replace-button", "editable", "template", "onScrollTo", "onRemove", "onReplace", "onUp", "onDown", "onChange"]
                                                              )
                                                          )
                                                      ),
                                                      128
                                                  )),
                                                  yi(
                                                      "div",
                                                      { class: "sticky bottom-0 py-2 space-y-2", style: W({ backgroundColor: n.backgroundColor }) },
                                                      [
                                                          r.sortedDocuments.length && n.editable && n.withUploadButton
                                                              ? (si(),
                                                                hi(g, { key: 0, "accept-file-types": n.acceptFileTypes, "template-id": n.template.id, onSuccess: r.updateFromUpload }, null, 8, [
                                                                    "accept-file-types",
                                                                    "template-id",
                                                                    "onSuccess",
                                                                ]))
                                                              : Ci("", !0),
                                                          r.sortedDocuments.length && n.editable && n.withAddPageButton
                                                              ? (si(),
                                                                ui(
                                                                    "button",
                                                                    { key: 1, id: "add_blank_page_button", class: "btn btn-outline w-full", onClick: t[6] || (t[6] = jr((...e) => r.addBlankPage && r.addBlankPage(...e), ["prevent"])) },
                                                                    [i.isLoadingBlankPage ? (si(), hi(p, { key: 0, class: "animate-spin w-5 h-5" })) : (si(), hi(w, { key: 1, class: "w-5 h-5" })), _i(" " + ne(r.t("add_blank_page")), 1)]
                                                                ))
                                                              : Ci("", !0),
                                                      ],
                                                      4
                                                  ),
                                              ],
                                              4
                                          ))
                                        : Ci("", !0),
                                    yi("div", Fa, [
                                        yi(
                                            "div",
                                            Da,
                                            [
                                                r.sortedDocuments.length || (!n.withUploadButton && !n.withAddPageButton)
                                                    ? (si(),
                                                      ui(
                                                          ni,
                                                          { key: 1 },
                                                          [
                                                              (si(!0),
                                                              ui(
                                                                  ni,
                                                                  null,
                                                                  ro(
                                                                      r.sortedDocuments,
                                                                      (e) => (
                                                                          si(),
                                                                          ui(
                                                                              ni,
                                                                              { key: e.uuid },
                                                                              [
                                                                                  vi(
                                                                                      v,
                                                                                      {
                                                                                          ref_for: !0,
                                                                                          ref: r.setDocumentRefs,
                                                                                          "areas-index": r.fieldAreasIndex[e.uuid],
                                                                                          "selected-submitter": i.selectedSubmitter,
                                                                                          document: e,
                                                                                          "is-drag": !!i.dragField,
                                                                                          "input-mode": n.inputMode,
                                                                                          "default-fields": [...n.defaultRequiredFields, ...n.defaultFields],
                                                                                          "allow-draw": !n.onlyDefinedFields,
                                                                                          "default-submitters": n.defaultSubmitters,
                                                                                          "with-field-placeholder": n.withFieldPlaceholder,
                                                                                          "draw-field": i.drawField,
                                                                                          "draw-field-type": i.drawFieldType,
                                                                                          editable: n.editable,
                                                                                          "base-url": n.baseUrl,
                                                                                          onDraw: t[8] || (t[8] = (e) => [r.onDraw(e), n.withSelectedFieldType ? "" : (i.drawFieldType = ""), (i.showDrawField = !1)]),
                                                                                          onDropField: r.onDropfield,
                                                                                          onRemoveArea: r.removeArea,
                                                                                      },
                                                                                      null,
                                                                                      8,
                                                                                      [
                                                                                          "areas-index",
                                                                                          "selected-submitter",
                                                                                          "document",
                                                                                          "is-drag",
                                                                                          "input-mode",
                                                                                          "default-fields",
                                                                                          "allow-draw",
                                                                                          "default-submitters",
                                                                                          "with-field-placeholder",
                                                                                          "draw-field",
                                                                                          "draw-field-type",
                                                                                          "editable",
                                                                                          "base-url",
                                                                                          "onDropField",
                                                                                          "onRemoveArea",
                                                                                      ]
                                                                                  ),
                                                                                  i.isBreakpointLg && n.editable
                                                                                      ? (si(),
                                                                                        hi(
                                                                                            x,
                                                                                            {
                                                                                                key: 0,
                                                                                                "with-arrows": n.template.schema.length > 1,
                                                                                                item: n.template.schema.find((t) => t.attachment_uuid === e.uuid),
                                                                                                "with-replace-button": n.withUploadButton,
                                                                                                "accept-file-types": n.acceptFileTypes,
                                                                                                document: e,
                                                                                                template: n.template,
                                                                                                class: "pb-2 mb-2 border-b border-base-300 border-dashed",
                                                                                                onRemove: r.onDocumentRemove,
                                                                                                onReplace: r.onDocumentReplace,
                                                                                                onUp: (t) =>
                                                                                                    r.moveDocument(
                                                                                                        n.template.schema.find((t) => t.attachment_uuid === e.uuid),
                                                                                                        -1
                                                                                                    ),
                                                                                                onDown: (t) =>
                                                                                                    r.moveDocument(
                                                                                                        n.template.schema.find((t) => t.attachment_uuid === e.uuid),
                                                                                                        1
                                                                                                    ),
                                                                                                onChange: r.save,
                                                                                            },
                                                                                            null,
                                                                                            8,
                                                                                            ["with-arrows", "item", "with-replace-button", "accept-file-types", "document", "template", "onRemove", "onReplace", "onUp", "onDown", "onChange"]
                                                                                        ))
                                                                                      : Ci("", !0),
                                                                              ],
                                                                              64
                                                                          )
                                                                      )
                                                                  ),
                                                                  128
                                                              )),
                                                              r.sortedDocuments.length && i.isBreakpointLg && n.editable
                                                                  ? (si(),
                                                                    ui("div", Aa, [
                                                                        n.withUploadButton
                                                                            ? (si(),
                                                                              hi(g, { key: 0, "template-id": n.template.id, "accept-file-types": n.acceptFileTypes, onSuccess: r.updateFromUpload }, null, 8, [
                                                                                  "template-id",
                                                                                  "accept-file-types",
                                                                                  "onSuccess",
                                                                              ]))
                                                                            : Ci("", !0),
                                                                        n.withAddPageButton
                                                                            ? (si(),
                                                                              ui(
                                                                                  "button",
                                                                                  {
                                                                                      key: 1,
                                                                                      id: "add_blank_page_button",
                                                                                      class: "btn btn-outline w-full mt-4",
                                                                                      onClick: t[9] || (t[9] = jr((...e) => r.addBlankPage && r.addBlankPage(...e), ["prevent"])),
                                                                                  },
                                                                                  [
                                                                                      i.isLoadingBlankPage ? (si(), hi(p, { key: 0, class: "animate-spin w-5 h-5" })) : (si(), hi(w, { key: 1, class: "w-5 h-5" })),
                                                                                      _i(" " + ne(r.t("add_blank_page")), 1),
                                                                                  ]
                                                                              ))
                                                                            : Ci("", !0),
                                                                    ]))
                                                                  : Ci("", !0),
                                                          ],
                                                          64
                                                      ))
                                                    : (si(),
                                                      ui(
                                                          ni,
                                                          { key: 0 },
                                                          [
                                                              n.withUploadButton
                                                                  ? (si(),
                                                                    hi(y, { key: 0, "template-id": n.template.id, "accept-file-types": n.acceptFileTypes, onSuccess: r.updateFromUpload }, null, 8, [
                                                                        "template-id",
                                                                        "accept-file-types",
                                                                        "onSuccess",
                                                                    ]))
                                                                  : Ci("", !0),
                                                              n.withAddPageButton
                                                                  ? (si(),
                                                                    ui(
                                                                        "button",
                                                                        {
                                                                            key: 1,
                                                                            id: "add_blank_page_button",
                                                                            class: "btn btn-outline w-full mt-4",
                                                                            onClick: t[7] || (t[7] = jr((...e) => r.addBlankPage && r.addBlankPage(...e), ["prevent"])),
                                                                        },
                                                                        [i.isLoadingBlankPage ? (si(), hi(p, { key: 0, class: "animate-spin w-5 h-5" })) : (si(), hi(w, { key: 1, class: "w-5 h-5" })), _i(" " + ne(r.t("add_blank_page")), 1)]
                                                                    ))
                                                                  : Ci("", !0),
                                                          ],
                                                          64
                                                      )),
                                            ],
                                            512
                                        ),
                                    ]),
                                    n.withFieldsList
                                        ? (si(),
                                          ui(
                                              "div",
                                              { key: 1, id: "fields_list_container", class: J(["relative w-80 flex-none mt-1 pr-4 pl-0.5 hidden md:block", i.drawField ? "overflow-hidden" : "overflow-y-auto overflow-x-hidden"]) },
                                              [
                                                  i.showDrawField || i.drawField
                                                      ? (si(),
                                                        ui(
                                                            "div",
                                                            { key: 0, class: "sticky inset-0 h-full z-20", style: W({ backgroundColor: n.backgroundColor }) },
                                                            [
                                                                yi("div", Ta, [
                                                                    yi("p", null, ne(r.t("draw_field_on_the_document")), 1),
                                                                    yi("div", null, [
                                                                        yi("button", { class: "base-button", onClick: t[10] || (t[10] = (...e) => r.clearDrawField && r.clearDrawField(...e)) }, ne(r.t("cancel")), 1),
                                                                        i.drawField || i.drawOption || ["stamp", "signature", "initials", "heading"].includes(i.drawField?.type || i.drawFieldType)
                                                                            ? Ci("", !0)
                                                                            : (si(),
                                                                              ui(
                                                                                  "a",
                                                                                  {
                                                                                      key: 0,
                                                                                      href: "#",
                                                                                      class: "link block mt-3 text-sm",
                                                                                      onClick:
                                                                                          t[11] ||
                                                                                          (t[11] = jr(
                                                                                              (e) => [
                                                                                                  r.addField(i.drawFieldType),
                                                                                                  (i.drawField = null),
                                                                                                  (i.drawOption = null),
                                                                                                  n.withSelectedFieldType ? "" : (i.drawFieldType = ""),
                                                                                                  (i.showDrawField = !1),
                                                                                              ],
                                                                                              ["prevent"]
                                                                                          )),
                                                                                  },
                                                                                  ne(r.t("or_add_field_without_drawing")),
                                                                                  1
                                                                              )),
                                                                    ]),
                                                                ]),
                                                            ],
                                                            4
                                                        ))
                                                      : Ci("", !0),
                                                  yi("div", null, [
                                                      vi(
                                                          _,
                                                          {
                                                              ref: "fields",
                                                              fields: n.template.fields,
                                                              submitters: n.template.submitters,
                                                              "selected-submitter": i.selectedSubmitter,
                                                              "with-help": n.withHelp,
                                                              "default-submitters": n.defaultSubmitters,
                                                              "draw-field-type": i.drawFieldType,
                                                              "default-fields": [...n.defaultRequiredFields, ...n.defaultFields],
                                                              "default-required-fields": n.defaultRequiredFields,
                                                              "field-types": n.fieldTypes,
                                                              "with-sticky-submitters": n.withStickySubmitters,
                                                              "only-defined-fields": n.onlyDefinedFields,
                                                              editable: n.editable,
                                                              onAddField: r.addField,
                                                              onSetDraw: t[12] || (t[12] = (e) => [(i.drawField = e.field), (i.drawOption = e.option)]),
                                                              onSetDrawType: t[13] || (t[13] = (e) => [(i.drawFieldType = e), (i.showDrawField = !0)]),
                                                              onSetDrag: t[14] || (t[14] = (e) => (i.dragField = e)),
                                                              onChangeSubmitter: t[15] || (t[15] = (e) => (i.selectedSubmitter = e)),
                                                              onDragEnd: t[16] || (t[16] = (e) => (i.dragField = null)),
                                                              onScrollToArea: r.scrollToArea,
                                                          },
                                                          null,
                                                          8,
                                                          [
                                                              "fields",
                                                              "submitters",
                                                              "selected-submitter",
                                                              "with-help",
                                                              "default-submitters",
                                                              "draw-field-type",
                                                              "default-fields",
                                                              "default-required-fields",
                                                              "field-types",
                                                              "with-sticky-submitters",
                                                              "only-defined-fields",
                                                              "editable",
                                                              "onAddField",
                                                              "onScrollToArea",
                                                          ]
                                                      ),
                                                  ]),
                                              ],
                                              2
                                          ))
                                        : Ci("", !0),
                                ],
                                2
                            ),
                            yi("div", Pa, [
                                i.drawField && i.isBreakpointLg
                                    ? (si(),
                                      hi(
                                          k,
                                          {
                                              key: 0,
                                              "draw-field": i.drawField,
                                              fields: n.template.fields,
                                              submitters: n.template.submitters,
                                              "selected-submitter": i.selectedSubmitter,
                                              class: "md:hidden",
                                              editable: n.editable,
                                              onCancel: t[17] || (t[17] = (e) => [(i.drawField = null), (i.drawOption = null)]),
                                              onChangeSubmitter: t[18] || (t[18] = (e) => [(i.selectedSubmitter = e), (i.drawField.submitter_uuid = e.uuid)]),
                                          },
                                          null,
                                          8,
                                          ["draw-field", "fields", "submitters", "selected-submitter", "editable"]
                                      ))
                                    : Ci("", !0),
                                r.sortedDocuments.length && !i.drawField && n.editable
                                    ? (si(),
                                      hi(
                                          C,
                                          {
                                              key: 1,
                                              fields: n.template.fields,
                                              "default-fields": [...n.defaultRequiredFields, ...n.defaultFields],
                                              "default-required-fields": n.defaultRequiredFields,
                                              "field-types": n.fieldTypes,
                                              "selected-submitter": i.selectedSubmitter,
                                              onSelect: t[19] || (t[19] = (e) => r.startFieldDraw(e)),
                                          },
                                          null,
                                          8,
                                          ["fields", "default-fields", "default-required-fields", "field-types", "selected-submitter"]
                                      ))
                                    : Ci("", !0),
                            ]),
                            Ma,
                        ])
                    );
                },
            ],
        ]),
        Nu = { class: "modal modal-open items-start !animate-none overflow-y-auto" },
        ju = { class: "modal-box pt-4 pb-6 px-6 mt-20 max-h-none w-full max-w-3xl" },
        Bu = { class: "flex justify-between items-center border-b pb-2 mb-2 font-medium" },
        Uu = { key: 0, class: "card card-compact bg-base-200" },
        Lu = { class: "card-body" },
        Vu = { class: "grid md:grid-cols-2 gap-4" },
        Yu = ["for"],
        Wu = { class: "label-text" },
        Xu = ["id", "onUpdate:modelValue", "placeholder", "readonly"],
        Hu = ["for"],
        Ku = ["id", "placeholder", "readonly"],
        Zu = { class: "form-control mt-4" },
        Ju = ["disabled"],
        Gu = { key: 0, class: "flex items-center space-x-2" },
        Qu = { key: 1 },
        eh = { class: "space-y-4 mt-4" },
        th = { key: 0, class: "flex my-6 justify-center md:justify-between" },
        nh = { class: "hidden md:block text-sm" },
        oh = { class: "join" },
        ih = { key: 1, class: "join-item btn btn-disabled !bg-base-200 min-h-full h-10" },
        rh = { class: "join-item btn uppercase min-h-full h-10" },
        ah = { key: 3, class: "join-item btn btn-disabled !bg-base-200 min-h-full h-10" },
        lh = { class: "bg-base-200 w-full flex flex-col md:flex-row space-y-4 md:space-y-0 md:justify-between rounded-2xl px-6 py-5 md:items-center" },
        sh = { class: "flex items-center space-x-4" },
        dh = { class: "flex items-center space-x-3" },
        ch = ["data-tip"],
        ph = { class: "text-lg break-all" },
        uh = { class: "flex space-x-2 items-center" },
        hh = ["disabled"],
        bh = { class: "space-y-1 w-full md:mr-2" },
        fh = { class: "flex items-center space-x-3" },
        mh = ["data-tip"],
        gh = { key: 1, class: "w-full" },
        wh = { class: "flex items-center space-x-3" },
        yh = ["data-tip"],
        vh = { class: "text-lg break-all" },
        xh = { class: "flex space-x-2 items-center" },
        _h = ["disabled"],
        kh = ["disabled"],
        Ch = {
            name: "DownloadButton",
            components: {
                IconDownload: Ha("download", 0, [
                    ["path", { d: "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2", key: "svg-0" }],
                    ["path", { d: "M7 11l5 5l5 -5", key: "svg-1" }],
                    ["path", { d: "M12 4l0 12", key: "svg-2" }],
                ]),
                IconInnerShadowTop: Za,
            },
            inject: ["baseFetch", "t"],
            props: { submitterSlug: { type: String, required: !0 } },
            data: () => ({ isDownloading: !1 }),
            methods: {
                download() {
                    (this.isDownloading = !0),
                        this.baseFetch(`/embed/submitters/${this.submitterSlug}/download`)
                            .then((e) => e.json())
                            .then((e) => {
                                e
                                    .map((e) => () =>
                                        fetch(e).then(async (t) => {
                                            const n = URL.createObjectURL(await t.blob()),
                                                o = document.createElement("a");
                                            (o.href = n), o.setAttribute("download", decodeURI(e.split("/").pop())), o.click(), URL.revokeObjectURL(e);
                                        })
                                    )
                                    .reduce((e, t) => e.then(() => t()), Promise.resolve()),
                                    (this.isDownloading = !1);
                            });
                },
            },
        },
        Sh = {
            name: "BuilderSubmission",
            components: {
                DownloadButton: (0, Ga.A)(Ch, [
                    [
                        "render",
                        function (e, t, n, o, i, r) {
                            const a = eo("IconInnerShadowTop"),
                                l = eo("IconDownload");
                            return (
                                si(),
                                ui(
                                    "button",
                                    { class: "btn btn-neutral btn-sm text-white", disabled: i.isDownloading, onClick: t[0] || (t[0] = jr((...e) => r.download && r.download(...e), ["prevent"])) },
                                    [i.isDownloading ? (si(), hi(a, { key: 0, class: "animate-spin", widht: 16, height: 16 })) : (si(), hi(l, { key: 1, widht: 16, height: 16 })), yi("span", null, ne(r.t("download")), 1)],
                                    8,
                                    kh
                                )
                            );
                        },
                    ],
                ]),
            },
            inject: ["baseFetch", "t"],
            props: { submission: { type: Object, required: !0 }, template: { type: Object, required: !0 } },
            emits: ["remove"],
            data: () => ({ isRemoveLoading: !1 }),
            computed: {
                submitters() {
                    return (this.submission.template_submitters || this.template.submitters).map((e) => this.submission.submitters.find((t) => t.uuid === e.uuid)).filter(Boolean);
                },
                latestSubmitter() {
                    return this.submitters.filter((e) => e.completed_at).reduce((e, t) => (!e || t.completed_at > e.completed_at ? t : e), null);
                },
                statusBadges: () => ({ awaiting: "badge-info", sent: "badge-info", completed: "badge-success", opened: "badge-warning" }),
                isSubmissionCompleted() {
                    return this.submitters.every((e) => e.completed_at);
                },
            },
            methods: {
                formatTime: (e) => Intl.DateTimeFormat([], { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric" }).format(new Date(e)),
                remove() {
                    confirm(this.t("are_you_sure_")) &&
                        ((this.isRemoveLoading = !0),
                        this.baseFetch(`/embed/submissions/${this.submission.id}`, { method: "DELETE" })
                            .then(() => {
                                this.$emit("remove");
                            })
                            .finally(() => {
                                this.isRemoveLoading = !1;
                            }));
                },
            },
        },
        Fh = {
            name: "BuilderRecipients",
            components: {
                Submission: (0, Ga.A)(Sh, [
                    [
                        "render",
                        function (e, t, n, o, i, r) {
                            const a = eo("DownloadButton");
                            return (
                                si(),
                                ui("div", lh, [
                                    1 === r.submitters.length
                                        ? (si(),
                                          ui(
                                              ni,
                                              { key: 0 },
                                              [
                                                  yi("div", null, [
                                                      yi("div", sh, [
                                                          yi("span", dh, [
                                                              yi(
                                                                  "div",
                                                                  { class: "tooltip flex", "data-tip": r.formatTime(r.submitters[0].status_event_at) },
                                                                  [
                                                                      yi(
                                                                          "span",
                                                                          { class: J(["badge md:w-32 badge-lg bg-opacity-50 uppercase text-sm font-semibold", r.statusBadges[r.submitters[0].status]]) },
                                                                          ne(r.t(r.submitters[0].status)),
                                                                          3
                                                                      ),
                                                                  ],
                                                                  8,
                                                                  ch
                                                              ),
                                                              yi("span", ph, ne(r.submitters[0].email), 1),
                                                          ]),
                                                      ]),
                                                  ]),
                                                  yi("div", uh, [
                                                      r.submitters[0].completed_at ? (si(), hi(a, { key: 0, "submitter-slug": r.submitters[0].slug }, null, 8, ["submitter-slug"])) : Ci("", !0),
                                                      yi(
                                                          "button",
                                                          { class: "btn btn-outline btn-sm", title: "Delete", disabled: i.isRemoveLoading, onClick: t[0] || (t[0] = jr((...e) => r.remove && r.remove(...e), ["prevent"])) },
                                                          ne(r.t("remove")),
                                                          9,
                                                          hh
                                                      ),
                                                  ]),
                                              ],
                                              64
                                          ))
                                        : (si(),
                                          ui(
                                              ni,
                                              { key: 1 },
                                              [
                                                  yi("div", bh, [
                                                      yi("div", fh, [
                                                          r.isSubmissionCompleted
                                                              ? (si(),
                                                                ui(
                                                                    "div",
                                                                    { key: 0, class: "tooltip flex", "data-tip": r.formatTime(r.latestSubmitter.status_event_at) },
                                                                    [
                                                                        yi(
                                                                            "span",
                                                                            { class: J(["badge md:w-32 bg-opacity-50 badge-lg uppercase text-sm font-semibold", r.statusBadges[r.latestSubmitter.status]]) },
                                                                            ne(r.t(r.latestSubmitter.status)),
                                                                            3
                                                                        ),
                                                                    ],
                                                                    8,
                                                                    mh
                                                                ))
                                                              : (si(),
                                                                ui("div", gh, [
                                                                    (si(!0),
                                                                    ui(
                                                                        ni,
                                                                        null,
                                                                        ro(
                                                                            r.submitters,
                                                                            (e) => (
                                                                                si(),
                                                                                ui("div", { key: e.id, class: "flex justify-between items-center space-x-3" }, [
                                                                                    yi("span", wh, [
                                                                                        r.isSubmissionCompleted
                                                                                            ? Ci("", !0)
                                                                                            : (si(),
                                                                                              ui(
                                                                                                  "div",
                                                                                                  { key: 0, class: "tooltip flex", "data-tip": r.formatTime(e.status_event_at) },
                                                                                                  [yi("span", { class: J(["badge md:w-24 bg-opacity-50 uppercase text-xs font-semibold", r.statusBadges[e.status]]) }, ne(r.t(e.status)), 3)],
                                                                                                  8,
                                                                                                  yh
                                                                                              )),
                                                                                        yi("span", vh, ne(e.email), 1),
                                                                                    ]),
                                                                                    e.completed_at && !r.isSubmissionCompleted ? (si(), hi(a, { key: 0, "submitter-slug": e.slug }, null, 8, ["submitter-slug"])) : Ci("", !0),
                                                                                ])
                                                                            )
                                                                        ),
                                                                        128
                                                                    )),
                                                                ])),
                                                      ]),
                                                  ]),
                                                  yi("div", xh, [
                                                      r.isSubmissionCompleted ? (si(), hi(a, { key: 0, "submitter-slug": r.latestSubmitter.slug }, null, 8, ["submitter-slug"])) : Ci("", !0),
                                                      yi(
                                                          "button",
                                                          { class: "btn btn-outline btn-sm", title: "Delete", disabled: i.isRemoveLoading, onClick: t[1] || (t[1] = jr((...e) => r.remove && r.remove(...e), ["prevent"])) },
                                                          ne(r.t("remove")),
                                                          9,
                                                          _h
                                                      ),
                                                  ]),
                                              ],
                                              64
                                          )),
                                ])
                            );
                        },
                    ],
                ]),
                IconInnerShadowTop: Za,
            },
            inject: ["baseFetch", "t"],
            props: { template: { type: Object, required: !0 }, submitters: { type: Array, required: !1, default: () => [] }, submissions: { type: Array, required: !1, default: () => [] } },
            emits: ["close", "update", "add", "mount"],
            data: () => ({ isFormLoading: !1, page: 0, emailValues: {}, perPage: 5 }),
            computed: {
                uuidSubmitters() {
                    return this.template.submitters.reduce((e, t, n) => ((e[t.uuid] = this.submitters.find((e) => t.name === e.role) || this.submitters[n]), e), {});
                },
                sortedSubmission() {
                    return [...this.submissions].sort((e, t) => (e.created_at > t.created_at ? -1 : 1));
                },
                pageSubmissions() {
                    return this.sortedSubmission.slice(this.page * this.perPage, (this.page + 1) * this.perPage);
                },
                firstSubmitter() {
                    return this.template.submitters[0];
                },
            },
            mounted() {
                this.$emit("mount"),
                    this.template.submitters.forEach((e) => {
                        this.emailValues[e.uuid] = this.uuidSubmitters[e.uuid]?.email;
                    });
            },
            methods: {
                clearFields() {
                    this.template.submitters.forEach((e) => {
                        this.emailValues[e.uuid] = "";
                    });
                },
                submitRecipients() {
                    const e = new FormData(this.$refs.form);
                    (this.isFormLoading = !0),
                        this.baseFetch(`/embed/templates/${this.template.id}/submissions`, { method: "POST", body: e })
                            .then(async (e) => {
                                const t = await e.json();
                                this.clearFields(), this.$emit("update"), t.forEach((e) => this.$emit("add", e));
                            })
                            .finally(() => {
                                this.isFormLoading = !1;
                            });
                },
            },
        },
        Dh = (0, Ga.A)(Fh, [
            [
                "render",
                function (e, t, n, o, i, r) {
                    const a = eo("IconInnerShadowTop"),
                        l = eo("Submission");
                    return (
                        si(),
                        ui("div", Nu, [
                            yi("div", { class: "absolute top-0 bottom-0 right-0 left-0", onClick: t[0] || (t[0] = jr((t) => e.$emit("close"), ["prevent"])) }),
                            yi("div", ju, [
                                yi("div", Bu, [yi("span", null, ne(r.t("recipients")), 1), yi("a", { href: "#", class: "text-xl", onClick: t[1] || (t[1] = jr((t) => e.$emit("close"), ["prevent"])) }, "×")]),
                                yi("div", null, [
                                    yi(
                                        "form",
                                        { ref: "form", onSubmit: t[3] || (t[3] = jr((...e) => r.submitRecipients && r.submitRecipients(...e), ["prevent"])) },
                                        [
                                            n.template.submitters.length > 1
                                                ? (si(),
                                                  ui("div", Uu, [
                                                      yi("div", Lu, [
                                                          yi("div", Vu, [
                                                              (si(!0),
                                                              ui(
                                                                  ni,
                                                                  null,
                                                                  ro(
                                                                      n.template.submitters,
                                                                      (e) => (
                                                                          si(),
                                                                          ui("div", { key: e.uuid, class: "form-control" }, [
                                                                              yi("label", { for: e.uuid, class: "label pt-0 pb-1 text-xs" }, [yi("span", Wu, ne(e.name), 1)], 8, Yu),
                                                                              Cn(
                                                                                  yi(
                                                                                      "input",
                                                                                      {
                                                                                          id: e.uuid,
                                                                                          "onUpdate:modelValue": (t) => (i.emailValues[e.uuid] = t),
                                                                                          type: "email",
                                                                                          class: "input input-sm input-bordered w-full",
                                                                                          placeholder: r.t("email"),
                                                                                          readonly: r.uuidSubmitters[e.uuid]?.readonly,
                                                                                          autocomplete: "off",
                                                                                          required: "",
                                                                                          name: "emails[]",
                                                                                      },
                                                                                      null,
                                                                                      8,
                                                                                      Xu
                                                                                  ),
                                                                                  [[Ar, i.emailValues[e.uuid]]]
                                                                              ),
                                                                          ])
                                                                      )
                                                                  ),
                                                                  128
                                                              )),
                                                          ]),
                                                      ]),
                                                  ]))
                                                : (si(),
                                                  ui("div", { key: r.firstSubmitter.uuid, class: "form-control w-full" }, [
                                                      yi("label", { for: r.firstSubmitter.uuid, class: "label" }, ne(r.t("new_recipient")), 9, Hu),
                                                      Cn(
                                                          yi(
                                                              "input",
                                                              {
                                                                  id: r.firstSubmitter.uuid,
                                                                  "onUpdate:modelValue": t[2] || (t[2] = (e) => (i.emailValues[r.firstSubmitter.uuid] = e)),
                                                                  type: "email",
                                                                  class: "base-input",
                                                                  placeholder: r.t("email"),
                                                                  autocomplete: "off",
                                                                  readonly: r.uuidSubmitters[r.firstSubmitter.uuid]?.readonly,
                                                                  required: "",
                                                                  name: "emails[]",
                                                              },
                                                              null,
                                                              8,
                                                              Ku
                                                          ),
                                                          [[Ar, i.emailValues[r.firstSubmitter.uuid]]]
                                                      ),
                                                  ])),
                                            yi("div", Zu, [
                                                yi(
                                                    "button",
                                                    { type: "submit", class: "base-button", disabled: i.isFormLoading },
                                                    [
                                                        i.isFormLoading
                                                            ? (si(), ui("span", Gu, [vi(a, { class: "animate-spin", width: "18", height: "18" }), yi("span", null, ne(r.t("submitting_")), 1)]))
                                                            : (si(), ui("span", Qu, ne(r.t("send_now")), 1)),
                                                    ],
                                                    8,
                                                    Ju
                                                ),
                                            ]),
                                        ],
                                        544
                                    ),
                                    yi("div", eh, [
                                        (si(!0),
                                        ui(
                                            ni,
                                            null,
                                            ro(r.pageSubmissions, (o) => (si(), hi(l, { key: o.id, submission: o, template: n.template, onRemove: t[4] || (t[4] = (t) => e.$emit("update")) }, null, 8, ["submission", "template"]))),
                                            128
                                        )),
                                        n.submissions.length > i.perPage
                                            ? (si(),
                                              ui("div", th, [
                                                  yi(
                                                      "div",
                                                      nh,
                                                      ne(r.sortedSubmission.indexOf(r.pageSubmissions[0]) + 1) +
                                                          "-" +
                                                          ne(r.sortedSubmission.indexOf(r.pageSubmissions[r.pageSubmissions.length - 1]) + 1) +
                                                          " of " +
                                                          ne(n.submissions.length) +
                                                          " " +
                                                          ne("submissions"),
                                                      1
                                                  ),
                                                  yi("div", oh, [
                                                      i.page > 0
                                                          ? (si(), ui("button", { key: 0, class: "join-item btn min-h-full h-10", onClick: t[5] || (t[5] = jr((e) => (i.page -= 1), ["prevent"])) }, " « "))
                                                          : (si(), ui("span", ih, "«")),
                                                      yi("span", rh, ne(r.t("page")) + " " + ne(i.page + 1), 1),
                                                      i.page + 1 < n.submissions.length / i.perPage
                                                          ? (si(), ui("button", { key: 2, class: "join-item btn min-h-full h-10", onClick: t[6] || (t[6] = jr((e) => (i.page += 1), ["prevent"])) }, " » "))
                                                          : (si(), ui("span", ah, "»")),
                                                  ]),
                                              ]))
                                            : Ci("", !0),
                                    ]),
                                ]),
                            ]),
                        ])
                    );
                },
            ],
        ]),
        Ah = "function" == typeof atob,
        Th = "function" == typeof Buffer,
        Ph = "function" == typeof TextDecoder ? new TextDecoder() : void 0,
        Mh = ((e) => {
            let t = {};
            return e.forEach((e, n) => (t[e] = n)), t;
        })(("function" == typeof TextEncoder && new TextEncoder(), Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="))),
        zh = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
        Ih = String.fromCharCode.bind(String),
        Rh = "function" == typeof Uint8Array.from ? Uint8Array.from.bind(Uint8Array) : (e) => new Uint8Array(Array.prototype.slice.call(e, 0)),
        Eh = (e) => e.replace(/[^A-Za-z0-9\+\/]/g, ""),
        qh = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
        Oh = (e) => {
            switch (e.length) {
                case 4:
                    var t = (((7 & e.charCodeAt(0)) << 18) | ((63 & e.charCodeAt(1)) << 12) | ((63 & e.charCodeAt(2)) << 6) | (63 & e.charCodeAt(3))) - 65536;
                    return Ih(55296 + (t >>> 10)) + Ih(56320 + (1023 & t));
                case 3:
                    return Ih(((15 & e.charCodeAt(0)) << 12) | ((63 & e.charCodeAt(1)) << 6) | (63 & e.charCodeAt(2)));
                default:
                    return Ih(((31 & e.charCodeAt(0)) << 6) | (63 & e.charCodeAt(1)));
            }
        },
        $h = Ah
            ? (e) => atob(Eh(e))
            : Th
            ? (e) => Buffer.from(e, "base64").toString("binary")
            : (e) => {
                  if (((e = e.replace(/\s+/g, "")), !zh.test(e))) throw new TypeError("malformed base64.");
                  e += "==".slice(2 - (3 & e.length));
                  let t,
                      n,
                      o,
                      i = "";
                  for (let r = 0; r < e.length; )
                      (t = (Mh[e.charAt(r++)] << 18) | (Mh[e.charAt(r++)] << 12) | ((n = Mh[e.charAt(r++)]) << 6) | (o = Mh[e.charAt(r++)])),
                          (i += 64 === n ? Ih((t >> 16) & 255) : 64 === o ? Ih((t >> 16) & 255, (t >> 8) & 255) : Ih((t >> 16) & 255, (t >> 8) & 255, 255 & t));
                  return i;
              },
        Nh = Th
            ? (e) => Rh(Buffer.from(e, "base64"))
            : (e) =>
                  Rh(
                      $h(e)
                          .split("")
                          .map((e) => e.charCodeAt(0))
                  ),
        jh = Th ? (e) => Buffer.from(e, "base64").toString("utf8") : Ph ? (e) => Ph.decode(Nh(e)) : (e) => $h(e).replace(qh, Oh),
        Bh = (e) => jh(Eh(e.replace(/[-_]/g, (e) => ("-" == e ? "+" : "/")))),
        Uh = { ...Mu, new_recipient: "New Recipient", download: "Download", recipients: "Recipients", submitting_: "Submitting...", send_now: "Send Now", awaiting: "Awaiting", sent: "Sent", completed: "Completed", opened: "Opened" },
        Lh = {
            ...zu,
            new_recipient: "Nuevo Destinatario",
            download: "Descargar",
            recipients: "Destinatarios",
            submitting_: "Enviando...",
            send_now: "Enviar ahora",
            awaiting: "Pendiente",
            sent: "Enviado",
            completed: "Completado",
            opened: "Abierto",
        },
        Vh = {
            ...Iu,
            new_recipient: "Nuovo Destinatario",
            download: "Scarica",
            recipients: "Destinatari",
            submitting_: "Invio in corso...",
            send_now: "Invia ora",
            awaiting: "In attesa",
            sent: "Inviato",
            completed: "Completato",
            opened: "Aperto",
        },
        Yh = {
            ...Ru,
            new_recipient: "Novo Destinatário",
            download: "Baixar",
            recipients: "Destinatários",
            submitting_: "Enviando...",
            send_now: "Enviar agora",
            awaiting: "Aguardando",
            sent: "Enviado",
            completed: "Concluído",
            opened: "Aberto",
        },
        Wh = {
            ...Eu,
            new_recipient: "Nouveau Destinataire",
            download: "Télécharger",
            recipients: "Destinataires",
            submitting_: "Envoi en cours...",
            send_now: "Envoyer maintenant",
            awaiting: "En attente",
            sent: "Envoyé",
            completed: "Terminé",
            opened: "Ouvert",
        },
        Xh = {
            ...qu,
            new_recipient: "Neuer Empfänger",
            download: "Herunterladen",
            recipients: "Empfänger",
            submitting_: "Senden...",
            send_now: "Jetzt senden",
            awaiting: "Ausstehend",
            sent: "Gesendet",
            completed: "Fertig",
            opened: "Geöffnet",
        },
        Hh = {
            editable: "ניתן לעריכה",
            type_value: "הזן ערך",
            uploaded_pdf_contains_form_fields_keep_or_remove_them: "ה-PDF שהועלה מכיל שדות. לשמור או להסיר אותם?",
            keep: "לשמור",
            add_all_required_fields_to_continue: "הוסף את כל השדות הנדרשים כדי להמשיך",
            align: "יישור",
            left: "שמאלה",
            right: "ימינה",
            center: "מרכז",
            with_logo: "עם לוגו",
            add_condition: "הוסף תנאי",
            description: "תיאור",
            display_title: "כותרת הצגה",
            unchecked: "לא מסומן",
            equal: "שווה",
            not_equal: "לא שווה",
            contains: "מכיל",
            does_not_contain: "אינו מכיל",
            not_empty: "לא ריק",
            empty: "ריק",
            select_field_: "בחר שדה",
            select_value_: "בחר ערך",
            signing_date: "תאריך חתימה",
            remove_condition: "הסר תנאי",
            condition: "תנאי",
            are_you_sure: "האם אתה בטוח?",
            sign_yourself: "חתום על עצמך",
            set_signing_date: "קבע תאריך חתימה",
            send: "שלח",
            remove: "הסר",
            edit: "ערוך",
            settings: "הגדרות",
            up: "למעלה",
            down: "למטה",
            checked: "מסומן",
            save: "שמור",
            cancel: "ביטול",
            any: "כל",
            drawn: "מצוייר",
            formula: "נוסח",
            typed: "מקלדת",
            draw_field_on_the_document: "צייר שדה על המסמך",
            click_to_upload: "לחץ להעלאה",
            or_drag_and_drop_files: "או גרור ושחרר קבצים",
            uploading: "מעלה",
            processing_: "מעבד...",
            add_pdf_documents_or_images: "הוסף מסמכים PDF או תמונות",
            add_documents_or_images: "הוסף מסמכים או תמונות",
            required: "חובה",
            default_value: "ערך ברירת מחדל",
            format: "פורמט",
            read_only: "לקריאה בלבד",
            page: "עמוד",
            draw_new_area: "מצייר אזור חדש",
            copy_to_all_pages: "העתק לכל העמודים",
            add_option: "הוסף אפשרות",
            option: "אפשרות",
            first_party: "צד ראשון",
            second_party: "צד שני",
            third_party: "צד שלישי",
            fourth_party: "צד רביעי",
            fifth_party: "צד חמישי",
            sixth_party: "צד שישי",
            seventh_party: "צד שביעי",
            eighth_party: "צד שמיני",
            ninth_party: "צד תשיעי",
            tenth_party: "צד עשירי",
            eleventh_party: "צד אחד-עשר",
            twelfth_party: "צד שני-עשר",
            thirteenth_party: "צד שלוש-עשר",
            fourteenth_party: "צד ארבע-עשר",
            fifteenth_party: "צד חמישה-עשר",
            sixteenth_party: "צד שישה-עשר",
            seventeenth_party: "צד שבעה-עשר",
            eighteenth_party: "צד שמונה-עשר",
            nineteenth_party: "צד תשעה-עשר",
            twentieth_party: "צד עשרים",
            draw: "מצייר",
            add: "הוסף",
            or_add_field_without_drawing: "או הוסף שדה בלעדי ציור",
            text: "טקסט",
            number: "מספר",
            signature: "חתימה",
            initials: "ראשי",
            date: "תאריך",
            image: "תמונה",
            file: "קובץ",
            select: "בחר",
            checkbox: "עוגה",
            multiple: "מרובות",
            radio: "רדיו",
            cells: "תאים",
            stamp: "חותמת",
            payment: "תשלום",
            phone: "טלפון",
            field: "שדה",
            group: "קבוצה",
            draw_a_text_field_on_the_page_with_a_mouse: "מצייר שדה טקסט על העמוד בעזרת העכבר",
            draw_field: "מצייר שדה {field}",
            replace: "החלף",
            uploading_: "מעלה...",
            add_document: "הוסף מסמך",
            new_recipient: "נמען חדש",
            download: "הורד",
            recipients: "נמענים",
            submitting_: "מגיש...",
            send_now: "שלח כעת",
            awaiting: "ממתין",
            sent: "נשלח",
            completed: "הושלם",
            opened: "נפתח",
            none: "אין",
            ssn: "SSN",
            ein: "EIN",
            email: "דואר אלקטרוני",
            url: "URL",
            zip: "ZIP",
            custom: "מותאם אישית",
            numbers_only: "מספרים בלבד",
            letters_only: "אותיות בלבד",
            regexp_validation: "אימות על פי ביטוי רגולרי",
            enter_pdf_password: "הזן סיסמת PDF",
            wrong_password: "סיסמה שגויה",
            currency: "מטבע",
            save_and_preview: "שמור ותצוגה מקדימה",
            preferences: "העדפות",
            available_in_pro: "זמין בגרסת Pro",
            some_fields_are_missing_in_the_formula: "חסרים שדות בנוסחה.",
            learn_more: "למד עוד",
        },
        Kh = {
            editable: "قابل للتعديل",
            type_value: "نوع القيمة",
            uploaded_pdf_contains_form_fields_keep_or_remove_them: "الملف PDF الذي تم تحميله يحتوي على حقول. هل ترغب في الاحتفاظ بها أم إزالتها؟",
            keep: "احتفظ",
            add_all_required_fields_to_continue: "أضف جميع الحقول المطلوبة للمتابعة",
            align: "محاذاة",
            left: "يسار",
            add_condition: "أضف شرطاً",
            right: "يمين",
            center: "وسط",
            with_logo: "مع الشعار",
            description: "الوصف",
            display_title: "العنوان الظاهر",
            unchecked: "غير محدد",
            equal: "مساوي",
            signing_date: "تاريخ التوقيع",
            not_equal: "غير مساوي",
            contains: "يحتوي على",
            does_not_contain: "لا يحتوي على",
            not_empty: "ليس فارغاً",
            empty: "فارغ",
            select_field_: "اختر الحقل",
            select_value_: "اختر القيمة",
            remove_condition: "إزالة الشرط",
            condition: "الشرط",
            are_you_sure: "هل أنت متأكد؟",
            sign_yourself: "قم بتوقيع نفسك",
            set_signing_date: "تحديد تاريخ التوقيع",
            send: "إرسال",
            remove: "إزالة",
            edit: "تعديل",
            settings: "الإعدادات",
            up: "أعلى",
            down: "أسفل",
            checked: "تم التحقق",
            save: "حفظ",
            cancel: "إلغاء",
            any: "أي",
            drawn: "مرسوم",
            formula: "صيغة",
            typed: "مكتوب",
            draw_field_on_the_document: "رسم حقل على المستند",
            click_to_upload: "انقر للتحميل",
            or_drag_and_drop_files: "أو اسحب وأسقط الملفات",
            uploading: "جاري التحميل",
            processing_: "جاري المعالجة...",
            add_pdf_documents_or_images: "إضافة مستندات PDF أو صور",
            add_documents_or_images: "إضافة مستندات أو صور",
            required: "مطلوب",
            default_value: "القيمة الافتراضية",
            format: "التنسيق",
            read_only: "قراءة فقط",
            page: "الصفحة",
            draw_new_area: "ارسم منطقة جديدة",
            copy_to_all_pages: "نسخ إلى كل الصفحات",
            add_option: "إضافة خيار",
            option: "خيار",
            first_party: "الطرف الأول",
            second_party: "الطرف الثاني",
            third_party: "الطرف الثالث",
            fourth_party: "الطرف الرابع",
            fifth_party: "الطرف الخامس",
            sixth_party: "الطرف السادس",
            seventh_party: "الطرف السابع",
            eighth_party: "الطرف الثامن",
            ninth_party: "الطرف التاسع",
            tenth_party: "الطرف العاشر",
            eleventh_party: "الطرف الحادي عشر",
            twelfth_party: "الطرف الثاني عشر",
            thirteenth_party: "الطرف الثالث عشر",
            fourteenth_party: "الطرف الرابع عشر",
            fifteenth_party: "الطرف الخامس عشر",
            sixteenth_party: "الطرف السادس عشر",
            seventeenth_party: "الطرف السابع عشر",
            eighteenth_party: "الطرف الثامن عشر",
            nineteenth_party: "الطرف التاسع عشر",
            twentieth_party: "الطرف العشرون",
            draw: "رسم",
            add: "إضافة",
            or_add_field_without_drawing: "أو إضافة حقل بدون رسم",
            text: "نص",
            number: "رقم",
            signature: "توقيع",
            initials: "اختصارات",
            date: "تاريخ",
            image: "صورة",
            file: "ملف",
            select: "اختيار",
            checkbox: "كيك",
            multiple: "متعدد",
            radio: "راديو",
            cells: "خلايا",
            stamp: "ختم",
            payment: "دفع",
            phone: "هاتف",
            field: "حقل",
            group: "مجموعة",
            draw_a_text_field_on_the_page_with_a_mouse: "ارسم حقل نصي على الصفحة باستخدام الماوس",
            draw_field: "ارسم حقل {field}",
            replace: "استبدال",
            uploading_: "جاري التحميل",
            add_document: "إضافة مستند",
            new_recipient: "مستلم جديد",
            download: "تحميل",
            recipients: "المستلمون",
            submitting_: "جاري التقديم",
            send_now: "إرسال الآن",
            awaiting: "قيد الانتظار",
            sent: "تم الإرسال",
            completed: "تم الانتهاء",
            opened: "تم الفتح",
            none: "لا شيء",
            ssn: "SSN",
            ein: "EIN",
            email: "البريد الإلكتروني",
            url: "URL",
            zip: "ZIP",
            custom: "مخصص",
            numbers_only: "أرقام فقط",
            letters_only: "أحرف فقط",
            regexp_validation: "التحقق من التعبير النمطي",
            enter_pdf_password: "أدخل كلمة مرور PDF",
            wrong_password: "كلمة المرور غير صحيحة",
            currency: "عملة",
            save_and_preview: "حفظ ومعاينة",
            preferences: "التفضيلات",
            available_in_pro: "متاح في الإصدار المحترف",
            some_fields_are_missing_in_the_formula: "بعض الحقول مفقودة في الصيغة.",
            learn_more: "تعرف على المزيد",
        },
        Zh = {
            name: "TemplateBuilder",
            components: { Builder: $u, Logo: Qp, IconInfoCircle: Xs, IconDeviceFloppy: Pu, IconInnerShadowTop: Za, IconUsersPlus: Du, IconWritingSign: os, BuilderRecipients: Dh },
            provide() {
                return { baseFetch: this.baseFetch, t: this.t };
            },
            props: {
                token: { type: String, required: !1, default: "" },
                customCss: { type: String, required: !1, default: "" },
                withFieldPlaceholder: { type: Boolean, required: !1, default: !1 },
                backgroundColor: { type: String, required: !1, default: "" },
                withLogo: { type: Boolean, required: !1, default: !1 },
                onInit: { type: Function, required: !1, default: () => () => {} },
                language: { type: String, required: !1, default: "en" },
                onLoad: { type: Function, required: !1, default: () => () => {} },
                onSend: { type: Function, required: !1, default: () => () => {} },
                onUpload: { type: Function, required: !1, default: () => () => {} },
                onSave: { type: Function, required: !1, default: () => () => {} },
                onChange: { type: Function, required: !1, default: () => () => {} },
                preview: { type: Boolean, required: !1, default: !1 },
                inputMode: { type: Boolean, required: !1, default: !1 },
                saveButtonText: { type: String, required: !1, default: "" },
                sendButtonText: { type: String, required: !1, default: "" },
                autosave: { type: Boolean, required: !1, default: !0 },
                withSendButton: { type: Boolean, required: !1, default: !0 },
                drawFieldType: { type: String, required: !1, default: "text" },
                onlyDefinedFields: { type: Boolean, required: !1, default: !1 },
                fieldTypes: { type: Array, required: !1, default: () => [] },
                withUploadButton: { type: Boolean, required: !1, default: !0 },
                withAddPageButton: { type: Boolean, required: !1, default: !1 },
                withFieldsList: { type: Boolean, required: !1, default: !0 },
                withDocumentsList: { type: Boolean, required: !1, default: !0 },
                withTitle: { type: Boolean, required: !1, default: !0 },
                withSignYourselfButton: { type: Boolean, required: !1, default: !0 },
                fields: { type: Array, required: !1, default: () => [] },
                submitters: { type: Array, required: !1, default: () => [] },
                requiredFields: { type: Array, required: !1, default: () => [] },
                i18n: { type: Object, required: !1, default: () => {} },
                roles: { type: Array, required: !1, default: () => [] },
                customButton: { type: Object, required: !1, default: () => ({}) },
            },
            data: () => ({ template: null, submissions: [], isSubmissionsLoaded: !1, isSandbox: !1, isSaving: !1, replaceToken: "", isLoading: !1, isShowRecipients: !1 }),
            computed: {
                i18nDict() {
                    return i[this.language] || Uh;
                },
                payload() {
                    const e = this.replaceToken || this.token;
                    return e && JSON.parse(Bh(e.split(".")[1]));
                },
                isAllRequiredFieldsAdded() {
                    return !this.requiredFields?.some((e) => !this.template.fields?.some((t) => t.name === e.name));
                },
                upgradeUrl() {
                    return this.baseUrl.includes("docuseal.eu") ? "https://console.docuseal.eu/plans" : "https://console.docuseal.com/plans";
                },
                templateUrl() {
                    let e = this.baseUrl + "/d/" + this.template.slug;
                    return this.payload.user_email && (e += "?email=" + this.payload.user_email.replace(/\+\w+@/, "@")), e;
                },
                baseUrl: () => "https://docuseal.com",
                fetchOptions() {
                    return { headers: { "X-Embed-Token": this.replaceToken || this.token } };
                },
            },
            mounted() {
                this.onInit(), this.loadBuilder();
            },
            methods: {
                t(e) {
                    return this.i18n[e] || this.i18nDict[e] || Uh[e] || e;
                },
                save() {
                    return (
                        (this.isSaving = !0),
                        this.$refs.builder.save({ force: !0 }).finally(() => {
                            this.isSaving = !1;
                        })
                    );
                },
                checkRequiredFields(e) {
                    if (this.isAllRequiredFieldsAdded) return !0;
                    {
                        const t = this.requiredFields?.filter((e) => !this.template.fields?.some((t) => t.name === e.name));
                        return t?.length ? alert(this.t("add_all_required_fields_to_continue") + ": " + t.map((e) => e.name).join(", ")) : (e?.preventDefault(), !1);
                    }
                },
                ensureSaved() {
                    return this.autosave ? Promise.resolve({}) : this.save();
                },
                loadTemplate() {
                    return fetch(this.baseUrl + `/embed/templates/${this.payload.template_id}`, { method: "GET", ...this.fetchOptions }).then(async (e) =>
                        404 === e.status
                            ? console.error(`Unable to find template ${this.baseUrl}`)
                            : 403 === e.status
                            ? console.error(`Invalid authorization token ${this.baseUrl}`)
                            : e.status >= 400
                            ? console.error(`Error loading template ${this.baseUrl}`)
                            : void (this.template = await e.json())
                    );
                },
                findOrCreateTemplate() {
                    return (
                        (this.isLoading = !0),
                        fetch(this.baseUrl + "/embed/templates", { method: "POST", ...this.fetchOptions }).then(async (e) => {
                            if (404 === e.status) return console.error(`Unable to find template ${this.baseUrl}`);
                            if (403 === e.status) return console.error(`Invalid authorization token ${this.baseUrl}`);
                            if (422 === e.status) {
                                const { error: t } = await e.json();
                                return console.error(`Loading error - ${t}`);
                            }
                            if (e.status >= 400) return console.error(`Error loading template ${this.baseUrl}`);
                            const { token: t, template: n, sandbox: o } = await e.json();
                            (this.isSandbox = o), (this.replaceToken = t), (this.template = n);
                        })
                    );
                },
                baseFetch(e, t = {}) {
                    return fetch(this.baseUrl + e, { ...t, headers: { ...this.fetchOptions.headers, ...t.headers } });
                },
                loadSubmissions() {
                    if (this.payload?.template_id)
                        return (
                            (this.isSubmissionsLoaded = !0),
                            this.baseFetch(`/embed/templates/${this.payload.template_id}/submissions`, { method: "GET", ...this.fetchOptions }).then(async (e) => {
                                this.submissions = await e.json();
                            })
                        );
                },
                loadBuilder() {
                    (this.replaceToken = ""),
                        this.token &&
                            ((this.isLoading = !0),
                            this.payload.template_id
                                ? this.loadTemplate().finally(() => {
                                      (this.isLoading = !1),
                                          this.$nextTick(() => {
                                              this.onLoad(this.template);
                                          });
                                  })
                                : this.findOrCreateTemplate().finally(() => {
                                      (this.isLoading = !1),
                                          this.$nextTick(() => {
                                              this.onLoad(this.template);
                                          });
                                  }));
                },
            },
        },
        Jh = (0, Ga.A)(Zh, [
            [
                "render",
                function (e, t, n, o, i, r) {
                    const a = eo(""),
                        l = eo("Logo"),
                        s = eo("IconWritingSign"),
                        d = eo("IconUsersPlus"),
                        c = eo("IconInnerShadowTop"),
                        p = eo("IconDeviceFloppy"),
                        u = eo("Builder", !0),
                        h = eo("BuilderRecipients");
                    return (
                        si(),
                        ui("div", Xr, [
                            n.customCss ? (si(), hi(no(""), { key: 0 }, { default: hn(() => [_i(ne(n.customCss), 1)]), _: 1 })) : Ci("", !0),
                            i.isSandbox
                                ? (si(),
                                  ui("div", Hr, [
                                      vi(a),
                                      yi("span", null, [_i("  "), yi("a", { href: r.upgradeUrl, target: "_blank", class: "link font-semibold" }, "", 8, Kr), _i("  ")]),
                                  ]))
                                : Ci("", !0),
                            i.isLoading
                                ? (si(), ui("div", Zr, [yi("div", null, [n.withLogo ? (si(), hi(l, { key: 0, class: "mx-auto animate-bounce", width: 50, height: 50 })) : Ci("", !0), yi("span", null, ne(r.t("processing_")), 1)])]))
                                : (si(),
                                  ui("div", Jr, [
                                      i.template
                                          ? (si(),
                                            hi(
                                                u,
                                                {
                                                    key: 0,
                                                    ref: "builder",
                                                    "with-logo": !1,
                                                    editable: !n.preview && !n.inputMode,
                                                    "input-mode": n.inputMode,
                                                    autosave: n.autosave,
                                                    "default-fields": n.fields,
                                                    "default-required-fields": n.requiredFields,
                                                    "with-help": !1,
                                                    i18n: { ...r.i18nDict, ...n.i18n },
                                                    "default-draw-field-type": n.drawFieldType,
                                                    "default-submitters": n.roles,
                                                    "define-submitters": n.submitters.map((e) => e.role),
                                                    "field-types": n.fieldTypes,
                                                    template: i.template,
                                                    "with-fields-list": n.withFieldsList,
                                                    "with-field-placeholder": n.withFieldPlaceholder,
                                                    "with-documents-list": n.withDocumentsList,
                                                    "base-url": r.baseUrl + "/embed",
                                                    "on-upload": n.onUpload,
                                                    "on-save": n.onSave,
                                                    "on-change": n.onChange,
                                                    "accept-file-types": "image/*, application/pdf, .docx, .doc, .xlsx, .xls, .odt, .rtf",
                                                    "with-selected-field-type": !!n.fieldTypes.length,
                                                    "only-defined-fields": n.onlyDefinedFields,
                                                    "with-phone": !i.isSandbox,
                                                    "with-formula": !0,
                                                    "with-conditions": !0,
                                                    "background-color": n.backgroundColor,
                                                    "with-sticky-submitters": !1,
                                                    "with-upload-button": n.withUploadButton,
                                                    "with-add-page-button": n.withAddPageButton,
                                                    "with-title": n.withTitle,
                                                    "fetch-options": r.fetchOptions,
                                                },
                                                ao({ _: 2 }, [
                                                    n.withTitle || n.customButton?.title || (!n.autosave && !n.preview)
                                                        ? {
                                                              name: "buttons",
                                                              fn: hn(() => [
                                                                  n.withSignYourselfButton
                                                                      ? (si(),
                                                                        ui(
                                                                            "a",
                                                                            {
                                                                                key: 0,
                                                                                id: "sign_yourself_button",
                                                                                class: "btn btn-ghost text-base",
                                                                                target: "_blank",
                                                                                href: r.templateUrl,
                                                                                onClick: t[0] || (t[0] = (e) => r.checkRequiredFields(e) && r.ensureSaved()),
                                                                            },
                                                                            [vi(s, { width: "22", class: "inline" }), yi("span", Qr, ne(r.t("sign_yourself")), 1)],
                                                                            8,
                                                                            Gr
                                                                        ))
                                                                      : Ci("", !0),
                                                                  n.withSendButton
                                                                      ? (si(),
                                                                        ui(
                                                                            "button",
                                                                            {
                                                                                key: 1,
                                                                                id: "send_button",
                                                                                class: "white-button",
                                                                                onMouseenter: t[1] || (t[1] = (e) => !i.isSubmissionsLoaded && r.loadSubmissions()),
                                                                                onClick:
                                                                                    t[2] ||
                                                                                    (t[2] = jr(
                                                                                        (e) =>
                                                                                            r.checkRequiredFields() &&
                                                                                            r.ensureSaved().finally(() => {
                                                                                                i.isShowRecipients = !0;
                                                                                            }),
                                                                                        ["prevent"]
                                                                                    )),
                                                                            },
                                                                            [vi(d, { width: "20", class: "inline" }), yi("span", ea, ne(n.sendButtonText || r.t("send")), 1)],
                                                                            32
                                                                        ))
                                                                      : Ci("", !0),
                                                                  n.customButton.title
                                                                      ? (si(), ui("a", { key: 2, id: "custom_button", class: "base-button", href: n.customButton.url }, [yi("span", na, ne(n.customButton.title), 1)], 8, ta))
                                                                      : Ci("", !0),
                                                                  n.autosave || n.preview
                                                                      ? Ci("", !0)
                                                                      : (si(),
                                                                        ui(
                                                                            "button",
                                                                            Ai({ key: 3, id: "save_button", class: ["base-button", { disabled: i.isSaving }] }, i.isSaving ? { disabled: !0 } : {}, {
                                                                                onClick: t[3] || (t[3] = jr((e) => r.checkRequiredFields() && r.save(), ["prevent"])),
                                                                            }),
                                                                            [
                                                                                i.isSaving ? (si(), hi(c, { key: 0, width: "22", class: "animate-spin" })) : (si(), hi(p, { key: 1, width: "22" })),
                                                                                yi("span", oa, ne(n.saveButtonText || r.t("save")), 1),
                                                                            ],
                                                                            16
                                                                        )),
                                                              ]),
                                                              key: "0",
                                                          }
                                                        : void 0,
                                                ]),
                                                1032,
                                                [
                                                    "editable",
                                                    "input-mode",
                                                    "autosave",
                                                    "default-fields",
                                                    "default-required-fields",
                                                    "i18n",
                                                    "default-draw-field-type",
                                                    "default-submitters",
                                                    "define-submitters",
                                                    "field-types",
                                                    "template",
                                                    "with-fields-list",
                                                    "with-field-placeholder",
                                                    "with-documents-list",
                                                    "base-url",
                                                    "on-upload",
                                                    "on-save",
                                                    "on-change",
                                                    "accept-file-types",
                                                    "with-selected-field-type",
                                                    "only-defined-fields",
                                                    "with-phone",
                                                    "background-color",
                                                    "with-upload-button",
                                                    "with-add-page-button",
                                                    "with-title",
                                                    "fetch-options",
                                                ]
                                            ))
                                          : Ci("", !0),
                                      i.isShowRecipients
                                          ? (si(),
                                            hi(
                                                h,
                                                {
                                                    key: 1,
                                                    submissions: i.submissions,
                                                    submitters: n.submitters,
                                                    template: i.template,
                                                    onUpdate: r.loadSubmissions,
                                                    onMount: r.loadSubmissions,
                                                    onAdd: t[4] || (t[4] = (e) => n.onSend(e)),
                                                    onClose: t[5] || (t[5] = (e) => (i.isShowRecipients = !1)),
                                                },
                                                null,
                                                8,
                                                ["submissions", "submitters", "template", "onUpdate", "onMount"]
                                            ))
                                          : Ci("", !0),
                                  ])),
                        ])
                    );
                },
            ],
        ]);
    var Gh = n(391);
    const Qh = class extends HTMLElement {
        get propGetters() {
            return {
                token: () => this.dataset.token,
                withLogo: () => "true" === this.dataset.withLogo,
                withTitle: () => "false" !== this.dataset.withTitle,
                preview: () => "true" === this.dataset.preview,
                inputMode: () => "true" === this.dataset.inputMode,
                fields: () => JSON.parse(this.dataset.fields || "[]"),
                submitters: () => JSON.parse(this.dataset.submitters || "[]"),
                requiredFields: () => JSON.parse(this.dataset.requiredFields || "[]"),
                i18n: () => JSON.parse(this.dataset.i18n || "{}"),
                fieldTypes: () => (this.dataset.fieldTypes || "").split(",").filter(Boolean),
                drawFieldType: () => this.dataset.drawFieldType || "text",
                roles: () => (this.dataset.roles || "").split(",").filter(Boolean),
                withUploadButton: () => "false" !== this.dataset.withUploadButton,
                withAddPageButton: () => "true" === this.dataset.withAddPageButton,
                withSendButton: () => "false" !== this.dataset.withRecipientsButton && "false" !== this.dataset.withSendButton,
                onlyDefinedFields: () => "true" === this.dataset.onlyDefinedFields,
                withSignYourselfButton: () => "false" !== this.dataset.withSignYourselfButton,
                withDocumentsList: () => "false" !== this.dataset.withDocumentsList,
                withFieldsList: () => "false" !== this.dataset.withFieldsList,
                withFieldPlaceholder: () => "true" === this.dataset.withFieldPlaceholder,
                autosave: () => "false" !== this.dataset.autosave,
                saveButtonText: () => this.dataset.saveButtonText,
                sendButtonText: () => this.dataset.sendButtonText,
                customCss: () => this.dataset.customCss,
                language: () => this.dataset.language || "en",
                customButton: () => ({ title: this.dataset.customButtonTitle, url: this.dataset.customButtonUrl }),
                backgroundColor: () => this.dataset.backgroundColor || "transparent",
            };
        }
        static observedAttributes = [
            "data-token",
            "data-with-logo",
            "data-with-title",
            "data-preview",
            "data-input-mode",
            "data-fields",
            "data-submitters",
            "data-required-fields",
            "data-field-types",
            "data-roles",
            "data-with-upload-button",
            "data-with-add-page-button",
            "data-with-send-button",
            "data-only-defined-fields",
            "data-with-sign-yourself-button",
            "data-with-documents-list",
            "data-with-fields-list",
            "data-with-field-placeholder",
            "data-draw-field-type",
            "data-autosave",
            "data-save-button-text",
            "data-send-button-text",
            "data-language",
            "data-i18n",
            "data-custom-button-title",
            "data-custom-button-url",
            "data-background-color",
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
            let o = this.toCamelCase(e.replace(/^data-/, ""));
            ["customButtonTitle", "customButtonUrl"].includes(o) && (o = "customButton"),
                this.propGetters[o] &&
                    ((this.props[o] = this.propGetters[o].call()),
                    "token" === o &&
                        Ut(() => {
                            this.component.$refs.builder.loadBuilder();
                        }));
        }
        connectedCallback() {
            const e = this.attachShadow({ mode: "open" }),
                t = document.createElement("style");
            (t.textContent = Gh.A[0][1].replace(/:root/g, ":host").replace(/html {/g, ".ds {")),
                (this.appElem = document.createElement("div")),
                this.appElem.classList.add("ds", "h-full"),
                (this.style.height ||= "100vh"),
                (this.style.display ||= "block"),
                e.appendChild(t);
            const n = this.querySelectorAll("style"),
                o = (t) => {
                    t.forEach((t) => e.appendChild(t));
                };
            "undefined" != typeof document && 0 === n.length
                ? document.addEventListener("DOMContentLoaded", () => {
                      o(this.querySelectorAll("style"));
                  })
                : o(n);
            const i = Object.fromEntries(Object.entries(this.propGetters).map(([e, t]) => [e, t.call()]));
            (this.props = pt({
                ...i,
                ref: "builder",
                onInit: () => {
                    this.dispatchEvent(new CustomEvent("init"));
                },
                onLoad: (e) => {
                    this.dispatchEvent(new CustomEvent("load", { detail: JSON.parse(JSON.stringify(e)) }));
                },
                onUpload: (e) => {
                    this.dispatchEvent(new CustomEvent("upload", { detail: JSON.parse(JSON.stringify(e)) }));
                },
                onSend: (e) => {
                    this.dispatchEvent(new CustomEvent("send", { detail: JSON.parse(JSON.stringify(e)) }));
                },
                onSave: (e) => {
                    this.dispatchEvent(new CustomEvent("save", { detail: JSON.parse(JSON.stringify(e)) }));
                },
                onChange: (e) => {
                    this.dispatchEvent(new CustomEvent("change", { detail: JSON.parse(JSON.stringify(e)) }));
                },
            })),
                (this.app = ((...e) => {
                    const t = (Wr || (Wr = Xo(Yr))).createApp(...e),
                        { mount: n } = t;
                    return (
                        (t.mount = (e) => {
                            const o = (function (e) {
                                return _(e) ? document.querySelector(e) : e;
                            })(e);
                            if (!o) return;
                            const i = t._component;
                            x(i) || i.render || i.template || (i.template = o.innerHTML), (o.innerHTML = "");
                            const r = n(o, !1, o instanceof SVGElement);
                            return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), r;
                        }),
                        t
                    );
                })({ render: () => Xi(Jh, this.props) })),
                (this.component = this.app.mount(this.appElem)),
                e.appendChild(this.appElem);
        }
        save() {
            return this.component.$refs.builder.save();
        }
        disconnectedCallback() {
            this.app?.unmount(), this.appElem?.remove();
        }
    };
    window.customElements.get("docuseal-builder") || window.customElements.define("docuseal-builder", Qh);
})();
