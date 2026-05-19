import "clsx";
import { K as attr_style, J as attr_class, P as clsx, Z as ensure_array_like, G as attr, _ as escape_html } from "../../chunks/renderer.js";
function Header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const navLinkClass = "text-sm font-bold text-white/40 transition-colors hover:text-yellow-500";
    $$renderer2.push(`<nav id="navbar" class="fixed top-0 left-0 w-full z-50 transition-all duration-700 py-6 px-8"${attr_style("", {
      transform: "translateY(0)",
      background: "transparent",
      "backdrop-filter": "none"
    })}><div class="max-w-7xl mx-auto flex justify-between items-center"><a href="#home" class="group flex items-center gap-2"><span class="text-xl font-bold tracking-tighter text-white">Taufeeq <span class="text-yellow-500">Ali</span></span></a> <div class="hidden md:flex items-center space-x-10"><a href="#home"${attr_class(clsx(navLinkClass))}>Home</a> <a href="#about"${attr_class(clsx(navLinkClass))}>About</a> <a href="#skills"${attr_class(clsx(navLinkClass))}>Skills</a> <a href="#projects"${attr_class(clsx(navLinkClass))}>Projects</a> <a href="https://linkedin.com/in/taufeeq-ali" target="_blank" class="bg-white text-black text-[10px] font-bold px-6 py-2 rounded-full hover:bg-yellow-500 hover:text-white transition-all">Connect</a></div></div></nav>`);
  });
}
function Footer($$renderer) {
  const contactLinks = [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/taufeeq-ali",
      icon: "https://api.iconify.design/logos:linkedin-icon.svg"
    },
    {
      label: "Resume",
      href: "/Software Development Resume 2026.pdf",
      icon: "https://api.iconify.design/vscode-icons:file-type-pdf2.svg"
    },
    {
      label: "Email",
      href: "mailto:taufeeqali@gmail.com",
      icon: "https://api.iconify.design/material-symbols:mail-outline.svg?color=white"
    },
    {
      label: "GitHub",
      href: "https://github.com/tfq26",
      icon: "https://api.iconify.design/simple-icons:github.svg?color=white"
    }
  ];
  $$renderer.push(`<footer class="relative w-full overflow-hidden border-t border-white/10 bg-black px-4 py-12 sm:px-6 md:py-16"><div class="mx-auto flex w-full max-w-7xl flex-col gap-10"><div class="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"><div><a href="#home" class="text-2xl font-bold tracking-tighter text-white">Taufeeq <span class="text-yellow-500">Ali</span></a></div> <div class="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-end"><!--[-->`);
  const each_array = ensure_array_like(contactLinks);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let link = each_array[$$index];
    $$renderer.push(`<a${attr("href", link.href)}${attr("target", link.href.startsWith("http") ? "_blank" : void 0)}${attr("rel", link.href.startsWith("http") ? "noreferrer" : void 0)} class="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-[10px] font-bold uppercase tracking-widest text-white/60 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"><img${attr("src", link.icon)} alt="" class="size-4 object-contain" aria-hidden="true"/> ${escape_html(link.label)}</a>`);
  }
  $$renderer.push(`<!--]--></div></div></div></footer>`);
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    Header($$renderer2);
    $$renderer2.push(`<!----> <main>`);
    children($$renderer2);
    $$renderer2.push(`<!----></main> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _layout as default
};
