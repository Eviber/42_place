// ==UserScript==
// @name         42 Logo template
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  try to take over the canvas!
// @author       Eviber
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/Eviber/42_place/raw/main/userscript.user.js
// @downloadURL  https://github.com/Eviber/42_place/raw/main/userscript.user.js
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
  window.addEventListener(
    "load",
    () => {
      document
        .getElementsByTagName("mona-lisa-embed")[0]
        .shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0]
        .shadowRoot.children[0].appendChild(
          (function () {
            const i = document.createElement("img");
            i.src =
              "https://raw.githubusercontent.com/Eviber/42_place/main/template_42.png";
            i.style =
              "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            return i;
          })()
        );
    },
    false
  );
}
