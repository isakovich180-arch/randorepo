import { h } from "/js/vendor/dreamland/core.js";
const links = [
  { href: "/", src: "/png/house-solid.svg", alt: "home" },
  { href: "/g", src: "/png/gamepad-solid.svg", alt: "games" },
  { href: "/a", src: "/png/apps.svg", alt: "apps" },
  { href: "/t", src: "/png/tool.svg", alt: "tools" },
  { href: "/m", src: "/png/music.svg", alt: "music" },
  { href: "https://discord.gg/vVqY36mzvj", src: "/png/other.svg", alt: "discord" },
  { href: "/s", src: "/png/gear-solid.svg", alt: "settings" },
];
function translate(key, fallback) {
  return window.lang?.t(key, {}, fallback) || fallback;
}
function renderNavigation() {
  const mount = document.querySelector("[data-navigation], .navbar-right");
  if (!mount) return;
  mount.replaceWith(
    h(
      "nav",
      {
        class: "navbar-right",
        "data-language-navigation": "",
        "aria-label": translate("nav.navigation", "Primary navigation"),
      },
      h(
        "a",
        { href: "/", class: "old-theme-brand", "aria-label": "Truffled home" },
        h("img", { src: "/png/logo.png", alt: "" }),
        h("span", {}, "Truffled"),
      ),
      ...links.map(({ href, src, alt, label = alt }) =>
        h("a", { href, class: `nav-link nav-link--${alt}`, "aria-label": translate(`nav.${alt}`, label) }, h("img", { src, alt: "" })),
      ),
    ),
  );
}
renderNavigation();
window.addEventListener("site:languagechange", renderNavigation);
window.addEventListener("site:pagechange", renderNavigation);
