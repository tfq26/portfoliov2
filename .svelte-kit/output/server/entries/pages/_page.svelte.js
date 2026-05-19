import "clsx";
import { Z as ensure_array_like, G as attr, _ as escape_html, K as attr_style, ah as stringify, ad as sanitize_props, ab as rest_props, $ as fallback, N as attributes, P as clsx, Y as element, af as slot, O as bind_props, ag as spread_props } from "../../chunks/renderer.js";
function Hero($$renderer) {
  $$renderer.push(`<section id="home" class="relative flex min-h-[100svh] flex-col items-center overflow-hidden px-4 pb-16 pt-24 text-center sm:px-6 sm:pb-20 sm:pt-32"><div class="z-10 flex w-full max-w-7xl flex-col items-center"><h1 class="mb-5 max-w-[12ch] text-[3.1rem] font-bold leading-[0.98] tracking-tighter min-[380px]:text-6xl md:mb-8 md:max-w-none md:text-8xl lg:text-[120px]">Designing the future <br/></h1> <span class="mb-6 text-3xl font-bold leading-tight tracking-tighter text-yellow-500 min-[380px]:text-4xl md:mb-8 md:text-7xl lg:text-[40px]">Starts with a question</span> <p class="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/50 md:mb-12 md:text-xl">I'm <span class="text-yellow-50">Taufeeq Ali</span>. A
			Software Engineer focused on delivering products and solutions that solve real problems.</p> <div class="mb-12 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4 md:mb-20"><a href="#projects" class="rounded-full bg-white px-8 py-4 text-center text-xs font-bold uppercase tracking-widest text-black transition-all duration-300 hover:bg-zinc-200 sm:px-10">Explore Projects</a> <a href="#about" class="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-center text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white/10 sm:px-10">The Journey</a></div> <div class="relative w-full perspective-1000 svelte-1q37ri0"><div class="glass-card mockup-card group relative overflow-hidden border-white/10 shadow-2xl transition-transform duration-700 svelte-1q37ri0"><img src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400" alt="System Mockup" class="aspect-[16/10] h-auto w-full object-cover opacity-80 transition-opacity duration-1000 group-hover:opacity-100 sm:aspect-auto"/> <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div></div> <div class="absolute -bottom-20 left-1/2 -z-10 h-64 w-[80%] -translate-x-1/2 bg-white/5 blur-[100px]"></div></div></div></section>`);
}
function About($$renderer) {
  $$renderer.push(`<section id="about" class="relative w-full overflow-hidden px-4 py-20 sm:px-6 md:py-32"><div class="mx-auto max-w-7xl"><div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"><div class="reveal"><h2 class="mb-6 text-3xl font-bold tracking-tight min-[380px]:text-4xl md:mb-8 md:text-6xl">Crafting <span class="text-yellow-500">Robust</span> <br/> Technical
                    Foundations</h2> <div class="space-y-5 text-base leading-relaxed text-white/60 md:space-y-6 md:text-lg"><p>I am a Computer Science student at the University of
                        Texas at Dallas with a deep-rooted passion for
                        architecting scalable, high-performance web
                        applications. My interest in software engineering began
                        with a curiosity for how complex systems operate behind
                        the scenes, which evolved into a focus on Full Stack
                        software development.</p> <p>Beyond standard development, I am a Cloud Enthusiast
                        with a particular focus on Azure Cloud Services and the
                        integration of Artificial Intelligence into user-centric
                        products. I specialize in bridging the gap between
                        human-centric design and powerful, efficient
                        engineering.</p></div> <div class="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-6"><a href="/Software Development Resume 2026.pdf" target="_blank" class="rounded-full bg-white px-8 py-4 text-center font-bold text-black transition-all duration-300 hover:bg-brand-gold hover:text-white">Download CV</a></div></div> <div class="reveal"><div class="glass-card group relative overflow-hidden border-white/5 p-6 sm:p-8 md:p-10"><div class="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-gold/10 blur-[80px] transition-colors duration-700 group-hover:bg-brand-gold/20"></div> <h3 class="mb-8 text-2xl font-bold mx-auto text-yellow-500">Beyond the Code</h3> <div class="space-y-7 md:space-y-8"><div class="flex items-start gap-4 sm:gap-6"><div class="flex h-11 w-11 shrink-0 items-center justify-center text-xl sm:h-12 sm:w-12 sm:text-2xl">🎮</div> <div><h4 class="mb-1 font-bold text-white">Cooking</h4> <p class="text-sm text-white/40">Cooking was my first creative outlet that let me express myself for the people i care about. It provided me
                                    the opportunity to learn discipline, patience, and techniques that ultiamtely translated to how I approach software development.</p></div></div> <div class="flex items-start gap-4 sm:gap-6"><div class="flex h-11 w-11 shrink-0 items-center justify-center text-xl sm:h-12 sm:w-12 sm:text-2xl">🎾</div> <div><h4 class="mb-1 font-bold text-white">Sports</h4> <p class="text-sm text-white/40">Sports are a fun and let me relax and spend time away from the screen. I enjoy playing Pickleball as I 
                                    love the challenge of improving my game and competing against Friends and Family. Sports are a key 
                                    way to let me step away from problems and examine the scope of my work and how I can improve as 
                                    an individual.</p></div></div> <div class="flex items-start gap-4 sm:gap-6"><div class="flex h-11 w-11 shrink-0 items-center justify-center sm:h-12 sm:w-12 sm:text-2xl">🕹️</div> <div><h4 class="mb-1 font-bold text-white">Video Games</h4> <p class="text-sm text-white/40">Like most kids growing up, video games were a big part of my childhood. I have always found myself escaping into the immersive 
                                    worlds and engaging gameplay that games offer and have since used them as a means to approach traditional problems in new 
                                    ways.</p></div></div></div> <div class="mt-10 shadow-yellow-300/80 rounded-md shadow-sm bg-white/[0.02] p-5 sm:mt-12 sm:p-6"><p class="text-sm italic leading-relaxed text-white font-bold">"Design is not just what it looks like and feels like. Design is how it works." <span class="font-normal text-yellow-500">- Steve Jobs</span></p></div></div></div></div></div></section>`);
}
function Skills($$renderer) {
  const allIcons = [
    {
      name: "React",
      icon: "https://api.iconify.design/logos:react.svg"
    },
    {
      name: "Vue.js",
      icon: "https://api.iconify.design/logos:vue.svg"
    },
    {
      name: "Svelte",
      icon: "https://api.iconify.design/logos:svelte-icon.svg"
    },
    {
      name: "Next.js",
      icon: "https://api.iconify.design/logos:nextjs-icon.svg"
    },
    {
      name: "Tailwind",
      icon: "https://api.iconify.design/logos:tailwindcss-icon.svg"
    },
    {
      name: "TypeScript",
      icon: "https://api.iconify.design/logos:typescript-icon.svg"
    },
    {
      name: "Node.js",
      icon: "https://api.iconify.design/logos:nodejs-icon.svg"
    },
    {
      name: "DotNet",
      icon: "https://api.iconify.design/logos:dotnet.svg"
    },
    {
      name: "Java",
      icon: "https://api.iconify.design/logos:java.svg"
    },
    {
      name: "PostgreSQL",
      icon: "https://api.iconify.design/logos:postgresql.svg"
    },
    {
      name: "MongoDB",
      icon: "https://api.iconify.design/logos:mongodb-icon.svg"
    },
    {
      name: "Docker",
      icon: "https://api.iconify.design/logos:docker-icon.svg"
    },
    {
      name: "Azure",
      icon: "https://api.iconify.design/logos:microsoft-azure.svg"
    },
    {
      name: "AWS",
      icon: "https://api.iconify.design/simple-icons:amazonaws.svg?color=white"
    },
    {
      name: "Firebase",
      icon: "https://api.iconify.design/logos:firebase.svg"
    },
    {
      name: "OpenAI",
      icon: "https://api.iconify.design/simple-icons:openai.svg?color=white"
    }
  ];
  const categories = [
    {
      id: "frontend",
      label: "Frontend",
      skills: [
        "React",
        "Svelte",
        "Vue.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "Accessibility",
        "Responsive UI",
        "Component Design"
      ]
    },
    {
      id: "backend",
      label: "Backend",
      skills: [
        "Node.js",
        "Express",
        "Java",
        ".NET",
        "REST APIs",
        "GraphQL",
        "PostgreSQL",
        "MongoDB",
        "Authentication",
        "API Design"
      ]
    },
    {
      id: "cloud",
      label: "Cloud & Data",
      skills: [
        "Azure",
        "AWS",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Serverless",
        "Firebase",
        "Data Modeling",
        "Observability",
        "Infrastructure"
      ]
    },
    {
      id: "ai",
      label: "AI / ML",
      skills: [
        "OpenAI",
        "Gemini",
        "LangChain",
        "Prompting",
        "RAG",
        "Embeddings",
        "Vector Search",
        "Evaluation",
        "AI Agents",
        "Automation"
      ]
    }
  ];
  $$renderer.push(`<section id="skills" class="relative w-full overflow-hidden bg-black px-4 py-20 sm:px-6 md:py-48 svelte-1f1pl16"><div class="mx-auto w-full max-w-none svelte-1f1pl16"><div class="reveal mb-16 text-center md:mb-32 svelte-1f1pl16"><h2 class="mb-5 text-4xl font-bold tracking-tighter md:mb-8 md:text-7xl svelte-1f1pl16">Technical <span class="text-yellow-500 svelte-1f1pl16">Proficiency.</span></h2> <p class="mx-auto max-w-2xl text-base leading-relaxed text-white/40 md:text-xl svelte-1f1pl16">shuffling through the core technologies that power my architectural decisions and 
				engineering solutions.</p></div> <div class="reveal relative mb-20 md:mb-48 svelte-1f1pl16"><div class="absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-black to-transparent sm:w-24 md:w-32 svelte-1f1pl16"></div> <div class="absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-black to-transparent sm:w-24 md:w-32 svelte-1f1pl16"></div> <div class="flex overflow-hidden group svelte-1f1pl16"><div class="animate-scroll flex space-x-8 py-4 group-hover:pause sm:space-x-12 md:space-x-16 svelte-1f1pl16"><!--[-->`);
  const each_array = ensure_array_like([...allIcons, ...allIcons, ...allIcons]);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$renderer.push(`<div class="flex min-w-16 flex-col items-center gap-4 sm:min-w-20 md:gap-6 svelte-1f1pl16"><div class="flex h-12 w-12 items-center justify-center opacity-60 transition-all duration-500 hover:scale-125 hover:opacity-100 md:h-16 md:w-16 svelte-1f1pl16"><img${attr("src", item.icon)}${attr("alt", item.name)} class="h-full w-full object-contain svelte-1f1pl16"/></div> <span class="text-[10px] font-bold text-white/50 svelte-1f1pl16">${escape_html(item.name)}</span></div>`);
  }
  $$renderer.push(`<!--]--></div></div></div> <div class="reveal mx-auto w-full max-w-6xl svelte-1f1pl16"><div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 svelte-1f1pl16"><!--[-->`);
  const each_array_1 = ensure_array_like(categories);
  for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
    let cat = each_array_1[$$index_2];
    $$renderer.push(`<div class="border-t border-white/10 pt-6 svelte-1f1pl16"><div class="mb-6 flex items-center gap-3 svelte-1f1pl16"><h3 class="text-xl font-bold tracking-tight text-yellow-500 svelte-1f1pl16">${escape_html(cat.label)}</h3></div> <ul class="space-y-3 svelte-1f1pl16"><!--[-->`);
    const each_array_2 = ensure_array_like(cat.skills);
    for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
      let skill = each_array_2[$$index_1];
      $$renderer.push(`<li class="items-center justify-center pb-2 svelte-1f1pl16"><span class="text-sm font-medium text-white/85 svelte-1f1pl16">${escape_html(skill)}</span></li>`);
    }
    $$renderer.push(`<!--]--></ul></div>`);
  }
  $$renderer.push(`<!--]--></div></div></div></section>`);
}
function Timeline($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { items = [], title = "", description = "", renderItem: renderItem2 } = $$props;
    let height = 0;
    let scrollProgress = 0;
    $$renderer2.push(`<div class="w-full bg-black font-sans md:px-10"><div class="mx-auto w-full max-w-none px-4 py-20 sm:px-6 md:px-8 lg:px-10"><h2 class="mb-6 max-w-4xl text-4xl font-bold tracking-tighter text-white min-[380px]:text-5xl md:mb-8 md:text-7xl">${escape_html(title)}</h2> <p class="max-w-2xl text-base leading-relaxed text-white/40 md:text-xl">${escape_html(description)}</p></div> <div class="relative z-0 mx-auto w-full max-w-none pb-20"><!--[-->`);
    const each_array = ensure_array_like(items);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let item = each_array[index];
      $$renderer2.push(`<div class="flex justify-start pt-12 md:gap-10 md:pt-40"><div class="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm"><div class="absolute left-3 flex size-10 items-center justify-center rounded-full bg-black md:left-3"><div class="size-4 rounded-full border border-white/10 bg-white/5 p-2"></div></div> <h3 class="hidden text-xl font-bold text-white/20 md:block md:pl-20 md:text-5xl"${attr_style("", {
        color: scrollProgress > index / items.length ? "white" : "rgba(255,255,255,0.2)",
        transition: "color 0.5s ease"
      })}>${escape_html(item.label)}</h3></div> <div class="relative w-full pl-16 pr-4 md:pl-4">`);
      if (renderItem2) {
        $$renderer2.push("<!--[0-->");
        renderItem2($$renderer2, item);
        $$renderer2.push(`<!---->`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div></div>`);
    }
    $$renderer2.push(`<!--]--> <div class="absolute left-8 top-0 w-[2px] overflow-hidden bg-gradient-to-b from-transparent via-white/10 to-transparent md:left-8"${attr_style("", { height: `${stringify(height)}px` })}><div class="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-brand-gold via-blue-500 to-transparent transition-all duration-300"${attr_style("", {
      height: `${stringify(scrollProgress * 100)}%`,
      opacity: 0
    })}></div></div></div></div>`);
  });
}
const experience = [
  {
    id: "argo-intern",
    label: "Summer 2025",
    role: "Software Development Intern",
    company: "ARGO Data",
    description: "Supported critical infrastructure for major banking customers on the Early Detection & Monitoring Service team.",
    technologies: [
      ".NET",
      "JavaScript",
      "Vue.js",
      "MapLibre"
    ]
  },
  {
    id: "argo-apprentice",
    label: "2025 - 2026",
    role: "Software Engineering Apprentice",
    company: "ARGO Data",
    description: "Following an exceptional internship performance, I focus on architecting modern features and enhancing the scalability of flagship banking platforms.",
    technologies: [
      ".NET 8+",
      "React",
      "PostgreSQL",
      "Docker"
    ]
  }
];
function renderItem($$renderer, item) {
  $$renderer.push(`<div class="reveal group relative flex flex-col py-4"><h3 class="mb-2 text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-brand-gold md:text-3xl">${escape_html(item.role)}</h3> <div class="mb-5 text-lg font-medium text-white/60 md:mb-6 md:text-xl">${escape_html(item.company)}</div> <p class="mb-8 max-w-2xl text-base leading-relaxed text-white/40 md:mb-10 md:text-lg">${escape_html(item.description)}</p> <div class="flex flex-wrap gap-3"><!--[-->`);
  const each_array = ensure_array_like(item.technologies);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let tech = each_array[$$index];
    $$renderer.push(`<span class="text-[10px] font-bold uppercase tracking-widest text-white/20 border border-white/5 px-4 py-2 rounded-full bg-white/[0.02]">${escape_html(tech)}</span>`);
  }
  $$renderer.push(`<!--]--></div></div>`);
}
function Experience($$renderer) {
  $$renderer.push(`<section id="experience" class="relative w-full bg-black">`);
  Timeline($$renderer, {
    title: "Timeline of Experience",
    description: "A timeline of my growth in the industry, from initial internships to architectural leadership in academic and professional projects.",
    items: experience,
    renderItem
  });
  $$renderer.push(`<!----></section>`);
}
/**
 * @license lucide-svelte v0.474.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Icon($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  $$renderer.component(($$renderer2) => {
    let name = fallback($$props["name"], void 0);
    let color = fallback($$props["color"], "currentColor");
    let size = fallback($$props["size"], 24);
    let strokeWidth = fallback($$props["strokeWidth"], 2);
    let absoluteStrokeWidth = fallback($$props["absoluteStrokeWidth"], false);
    let iconNode = fallback($$props["iconNode"], () => [], true);
    const mergeClasses = (...classes) => classes.filter((className, index, array) => {
      return Boolean(className) && array.indexOf(className) === index;
    }).join(" ");
    $$renderer2.push(`<svg${attributes(
      {
        ...defaultAttributes,
        ...$$restProps,
        width: size,
        height: size,
        stroke: color,
        "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        class: clsx(mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$sanitized_props.class))
      },
      void 0,
      void 0,
      void 0,
      3
    )}><!--[-->`);
    const each_array = ensure_array_like(iconNode);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let [tag, attrs] = each_array[$$index];
      element($$renderer2, tag, () => {
        $$renderer2.push(`${attributes({ ...attrs }, void 0, void 0, void 0, 3)}`);
      });
    }
    $$renderer2.push(`<!--]--><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></svg>`);
    bind_props($$props, {
      name,
      color,
      size,
      strokeWidth,
      absoluteStrokeWidth,
      iconNode
    });
  });
}
function Arrow_up_right($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.474.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    ["path", { "d": "M7 7h10v10" }],
    ["path", { "d": "M7 17 17 7" }]
  ];
  Icon($$renderer, spread_props([
    { name: "arrow-up-right" },
    $$sanitized_props,
    {
      /**
       * @component @name ArrowUpRight
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNyA3aDEwdjEwIiAvPgogIDxwYXRoIGQ9Ik03IDE3IDE3IDciIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/arrow-up-right
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Brain_circuit($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.474.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
      }
    ],
    ["path", { "d": "M9 13a4.5 4.5 0 0 0 3-4" }],
    ["path", { "d": "M6.003 5.125A3 3 0 0 0 6.401 6.5" }],
    ["path", { "d": "M3.477 10.896a4 4 0 0 1 .585-.396" }],
    ["path", { "d": "M6 18a4 4 0 0 1-1.967-.516" }],
    ["path", { "d": "M12 13h4" }],
    ["path", { "d": "M12 18h6a2 2 0 0 1 2 2v1" }],
    ["path", { "d": "M12 8h8" }],
    ["path", { "d": "M16 8V5a2 2 0 0 1 2-2" }],
    ["circle", { "cx": "16", "cy": "13", "r": ".5" }],
    ["circle", { "cx": "18", "cy": "3", "r": ".5" }],
    ["circle", { "cx": "20", "cy": "21", "r": ".5" }],
    ["circle", { "cx": "20", "cy": "8", "r": ".5" }]
  ];
  Icon($$renderer, spread_props([
    { name: "brain-circuit" },
    $$sanitized_props,
    {
      /**
       * @component @name BrainCircuit
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgNWEzIDMgMCAxIDAtNS45OTcuMTI1IDQgNCAwIDAgMC0yLjUyNiA1Ljc3IDQgNCAwIDAgMCAuNTU2IDYuNTg4QTQgNCAwIDEgMCAxMiAxOFoiIC8+CiAgPHBhdGggZD0iTTkgMTNhNC41IDQuNSAwIDAgMCAzLTQiIC8+CiAgPHBhdGggZD0iTTYuMDAzIDUuMTI1QTMgMyAwIDAgMCA2LjQwMSA2LjUiIC8+CiAgPHBhdGggZD0iTTMuNDc3IDEwLjg5NmE0IDQgMCAwIDEgLjU4NS0uMzk2IiAvPgogIDxwYXRoIGQ9Ik02IDE4YTQgNCAwIDAgMS0xLjk2Ny0uNTE2IiAvPgogIDxwYXRoIGQ9Ik0xMiAxM2g0IiAvPgogIDxwYXRoIGQ9Ik0xMiAxOGg2YTIgMiAwIDAgMSAyIDJ2MSIgLz4KICA8cGF0aCBkPSJNMTIgOGg4IiAvPgogIDxwYXRoIGQ9Ik0xNiA4VjVhMiAyIDAgMCAxIDItMiIgLz4KICA8Y2lyY2xlIGN4PSIxNiIgY3k9IjEzIiByPSIuNSIgLz4KICA8Y2lyY2xlIGN4PSIxOCIgY3k9IjMiIHI9Ii41IiAvPgogIDxjaXJjbGUgY3g9IjIwIiBjeT0iMjEiIHI9Ii41IiAvPgogIDxjaXJjbGUgY3g9IjIwIiBjeT0iOCIgcj0iLjUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/brain-circuit
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Chart_line($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.474.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    ["path", { "d": "M3 3v16a2 2 0 0 0 2 2h16" }],
    ["path", { "d": "m19 9-5 5-4-4-3 3" }]
  ];
  Icon($$renderer, spread_props([
    { name: "chart-line" },
    $$sanitized_props,
    {
      /**
       * @component @name ChartLine
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMyAzdjE2YTIgMiAwIDAgMCAyIDJoMTYiIC8+CiAgPHBhdGggZD0ibTE5IDktNSA1LTQtNC0zIDMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/chart-line
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Compass($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.474.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    [
      "path",
      {
        "d": "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
      }
    ],
    ["circle", { "cx": "12", "cy": "12", "r": "10" }]
  ];
  Icon($$renderer, spread_props([
    { name: "compass" },
    $$sanitized_props,
    {
      /**
       * @component @name Compass
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTYuMjQgNy43Ni0xLjgwNCA1LjQxMWEyIDIgMCAwIDEtMS4yNjUgMS4yNjVMNy43NiAxNi4yNGwxLjgwNC01LjQxMWEyIDIgMCAwIDEgMS4yNjUtMS4yNjV6IiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/compass
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Database($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.474.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    ["ellipse", { "cx": "12", "cy": "5", "rx": "9", "ry": "3" }],
    ["path", { "d": "M3 5V19A9 3 0 0 0 21 19V5" }],
    ["path", { "d": "M3 12A9 3 0 0 0 21 12" }]
  ];
  Icon($$renderer, spread_props([
    { name: "database" },
    $$sanitized_props,
    {
      /**
       * @component @name Database
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8ZWxsaXBzZSBjeD0iMTIiIGN5PSI1IiByeD0iOSIgcnk9IjMiIC8+CiAgPHBhdGggZD0iTTMgNVYxOUE5IDMgMCAwIDAgMjEgMTlWNSIgLz4KICA8cGF0aCBkPSJNMyAxMkE5IDMgMCAwIDAgMjEgMTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/database
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Fingerprint($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.474.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    ["path", { "d": "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" }],
    ["path", { "d": "M14 13.12c0 2.38 0 6.38-1 8.88" }],
    ["path", { "d": "M17.29 21.02c.12-.6.43-2.3.5-3.02" }],
    ["path", { "d": "M2 12a10 10 0 0 1 18-6" }],
    ["path", { "d": "M2 16h.01" }],
    ["path", { "d": "M21.8 16c.2-2 .131-5.354 0-6" }],
    ["path", { "d": "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" }],
    ["path", { "d": "M8.65 22c.21-.66.45-1.32.57-2" }],
    ["path", { "d": "M9 6.8a6 6 0 0 1 9 5.2v2" }]
  ];
  Icon($$renderer, spread_props([
    { name: "fingerprint" },
    $$sanitized_props,
    {
      /**
       * @component @name Fingerprint
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMTBhMiAyIDAgMCAwLTIgMmMwIDEuMDItLjEgMi41MS0uMjYgNCIgLz4KICA8cGF0aCBkPSJNMTQgMTMuMTJjMCAyLjM4IDAgNi4zOC0xIDguODgiIC8+CiAgPHBhdGggZD0iTTE3LjI5IDIxLjAyYy4xMi0uNi40My0yLjMuNS0zLjAyIiAvPgogIDxwYXRoIGQ9Ik0yIDEyYTEwIDEwIDAgMCAxIDE4LTYiIC8+CiAgPHBhdGggZD0iTTIgMTZoLjAxIiAvPgogIDxwYXRoIGQ9Ik0yMS44IDE2Yy4yLTIgLjEzMS01LjM1NCAwLTYiIC8+CiAgPHBhdGggZD0iTTUgMTkuNUM1LjUgMTggNiAxNSA2IDEyYTYgNiAwIDAgMSAuMzQtMiIgLz4KICA8cGF0aCBkPSJNOC42NSAyMmMuMjEtLjY2LjQ1LTEuMzIuNTctMiIgLz4KICA8cGF0aCBkPSJNOSA2LjhhNiA2IDAgMCAxIDkgNS4ydjIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/fingerprint
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Lock($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.474.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    [
      "rect",
      {
        "width": "18",
        "height": "11",
        "x": "3",
        "y": "11",
        "rx": "2",
        "ry": "2"
      }
    ],
    ["path", { "d": "M7 11V7a5 5 0 0 1 10 0v4" }]
  ];
  Icon($$renderer, spread_props([
    { name: "lock" },
    $$sanitized_props,
    {
      /**
       * @component @name Lock
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTEiIHg9IjMiIHk9IjExIiByeD0iMiIgcnk9IjIiIC8+CiAgPHBhdGggZD0iTTcgMTFWN2E1IDUgMCAwIDEgMTAgMHY0IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/lock
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Server($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.474.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    [
      "rect",
      {
        "width": "20",
        "height": "8",
        "x": "2",
        "y": "2",
        "rx": "2",
        "ry": "2"
      }
    ],
    [
      "rect",
      {
        "width": "20",
        "height": "8",
        "x": "2",
        "y": "14",
        "rx": "2",
        "ry": "2"
      }
    ],
    ["line", { "x1": "6", "x2": "6.01", "y1": "6", "y2": "6" }],
    ["line", { "x1": "6", "x2": "6.01", "y1": "18", "y2": "18" }]
  ];
  Icon($$renderer, spread_props([
    { name: "server" },
    $$sanitized_props,
    {
      /**
       * @component @name Server
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iOCIgeD0iMiIgeT0iMiIgcng9IjIiIHJ5PSIyIiAvPgogIDxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSI4IiB4PSIyIiB5PSIxNCIgcng9IjIiIHJ5PSIyIiAvPgogIDxsaW5lIHgxPSI2IiB4Mj0iNi4wMSIgeTE9IjYiIHkyPSI2IiAvPgogIDxsaW5lIHgxPSI2IiB4Mj0iNi4wMSIgeTE9IjE4IiB5Mj0iMTgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/server
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Shield_alert($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.474.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
      }
    ],
    ["path", { "d": "M12 8v4" }],
    ["path", { "d": "M12 16h.01" }]
  ];
  Icon($$renderer, spread_props([
    { name: "shield-alert" },
    $$sanitized_props,
    {
      /**
       * @component @name ShieldAlert
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgMTNjMCA1LTMuNSA3LjUtNy42NiA4Ljk1YTEgMSAwIDAgMS0uNjctLjAxQzcuNSAyMC41IDQgMTggNCAxM1Y2YTEgMSAwIDAgMSAxLTFjMiAwIDQuNS0xLjIgNi4yNC0yLjcyYTEuMTcgMS4xNyAwIDAgMSAxLjUyIDBDMTQuNTEgMy44MSAxNyA1IDE5IDVhMSAxIDAgMCAxIDEgMXoiIC8+CiAgPHBhdGggZD0iTTEyIDh2NCIgLz4KICA8cGF0aCBkPSJNMTIgMTZoLjAxIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/shield-alert
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Projects($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const projects = [
      {
        title: "Pegasus Intelligence",
        description: "High-performance data workspace merging database management with an AI-driven natural language querying engine.",
        icon: Database,
        image: "https://images.unsplash.com/photo-1756965812897-3f4c2a6c242c",
        tags: ["PostgreSQL", "AI Querying", "Data UX"],
        link: "https://github.com/tfq26",
        detail: "A workspace designed to make database exploration faster and more legible by pairing structured data workflows with natural language querying.",
        highlights: [
          "Natural language query layer",
          "Schema-aware data navigation",
          "Performance-focused workspace design"
        ]
      },
      {
        title: "Tempo Browser",
        description: "A minimalist, performance-hardened browser built with Rust and Lit, featuring deterministic startup and resource intelligence.",
        icon: Compass,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
        tags: ["Rust", "Lit", "Performance"],
        link: "https://github.com/tfq26",
        detail: "A focused browser experiment exploring startup determinism, lean interaction patterns, and resource visibility for everyday browsing.",
        highlights: [
          "Deterministic startup path",
          "Minimal interaction shell",
          "Runtime resource awareness"
        ]
      },
      {
        title: "Cetus Platform",
        description: "Decision intelligence platform utilizing Go orchestration and Python evaluation services for complex idea simulations.",
        icon: Chart_line,
        image: "https://images.unsplash.com/photo-1621314724606-fbf4c4231613",
        tags: ["Go", "Python", "Simulation"],
        link: "https://github.com/tfq26",
        detail: "An evaluation platform for modeling ideas, comparing outcomes, and coordinating simulation services across multiple runtimes.",
        highlights: [
          "Go-based orchestration",
          "Python evaluation workers",
          "Scenario comparison workflows"
        ]
      },
      {
        title: "Blitz Financial",
        description: "Enterprise-grade fintech dashboard and API infrastructure designed for high-trust financial signal processing.",
        icon: Shield_alert,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
        tags: ["Fintech", "Dashboards", "APIs"],
        link: "https://github.com/tfq26",
        detail: "A financial operations interface focused on dense signal display, reliable API boundaries, and trust-centered product decisions.",
        highlights: [
          "Signal-first dashboard layout",
          "API infrastructure planning",
          "High-trust product surface"
        ]
      },
      {
        title: "Janus Vault",
        description: "Secure credential management system and infrastructure vault for managing sensitive enterprise secrets.",
        icon: Lock,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        tags: ["Security", "Secrets", "Infrastructure"],
        link: "https://github.com/tfq26",
        detail: "A vault concept for managing sensitive application credentials with strong access boundaries and infrastructure-friendly workflows.",
        highlights: [
          "Credential lifecycle design",
          "Access boundary modeling",
          "Secure infrastructure workflows"
        ]
      },
      {
        title: "Kerbex Auth",
        description: "Custom, extensible OIDC-compliant authentication worker replacing third-party services with localized data control.",
        icon: Fingerprint,
        image: "https://images.unsplash.com/photo-1539193143244-c83d9436d633",
        tags: ["OIDC", "Auth", "Workers"],
        link: "https://github.com/tfq26",
        detail: "An authentication worker designed around extensibility, standards-aware identity flows, and better control over user data.",
        highlights: [
          "OIDC-aligned architecture",
          "Worker-based auth flow",
          "Localized data ownership"
        ]
      },
      {
        title: "Libra Assistant",
        description: "Technical troubleshooting and Q&A engine built on Azure AI for precise guidance in distributed systems.",
        icon: Brain_circuit,
        image: "https://images.unsplash.com/photo-1755441172753-ac9b90dcd930",
        tags: ["Azure AI", "Q&A", "Support"],
        link: "https://github.com/tfq26",
        detail: "A technical assistant for distributed-system troubleshooting, using AI to make support answers more precise and context aware.",
        highlights: [
          "Azure AI grounding",
          "Troubleshooting workflows",
          "Distributed systems guidance"
        ]
      },
      {
        title: "Orion Distributed",
        description: "Resource monitoring and storage service architecture managing jobs, telemetry, and distributed storage operations.",
        icon: Server,
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
        tags: ["Telemetry", "Storage", "Distributed"],
        link: "https://github.com/tfq26",
        detail: "A distributed operations architecture for coordinating jobs, observing telemetry, and managing storage-service behavior at scale.",
        highlights: [
          "Job coordination model",
          "Telemetry surface planning",
          "Distributed storage operations"
        ]
      }
    ];
    $$renderer2.push(`<section id="projects" class="relative w-full bg-black px-4 py-20 sm:px-6 md:py-48"><div class="mx-auto w-full max-w-none"><div class="reveal mb-16 md:mb-32"><div class="grid items-end gap-8 lg:grid-cols-2 lg:gap-12"><h2 class="text-4xl font-bold leading-none tracking-tighter min-[380px]:text-5xl md:text-8xl">Technical <br/> <span class="text-yellow-500">Portfolio.</span></h2> <p class="mb-2 max-w-lg text-base leading-relaxed text-white/40 md:mb-4 md:text-xl">A selection of projects I've built across various domains, 
					from AI apps to Security tools to even a web browser.</p></div></div> <div class="reveal mx-auto flex w-full max-w-5xl flex-col gap-3"><!--[-->`);
    const each_array = ensure_array_like(projects);
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let project = each_array[$$index_1];
      $$renderer2.push(`<button type="button" class="group grid w-full grid-cols-1 items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-left transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:grid-cols-[7rem_1fr_auto] sm:p-5"><div class="relative h-44 overflow-hidden rounded-xl bg-white/5 sm:h-24"><img${attr("src", project.image)}${attr("alt", project.title)} class="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-100" loading="lazy"/> <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div></div> <div class="min-w-0"><div class="mb-3 flex items-center gap-3"><div class="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/50">`);
      if (project.icon) {
        $$renderer2.push("<!--[-->");
        project.icon($$renderer2, { size: 17 });
        $$renderer2.push("<!--]-->");
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push("<!--]-->");
      }
      $$renderer2.push(`</div> <h3 class="text-xl font-bold tracking-tight text-white md:text-2xl">${escape_html(project.title)}</h3></div> <p class="max-w-2xl text-sm leading-relaxed text-white/45 md:text-base">${escape_html(project.description)}</p> <div class="mt-4 flex flex-wrap gap-2"><!--[-->`);
      const each_array_1 = ensure_array_like(project.tags);
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let tag = each_array_1[$$index];
        $$renderer2.push(`<span class="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/30">${escape_html(tag)}</span>`);
      }
      $$renderer2.push(`<!--]--></div></div> <div class="flex items-center justify-between gap-3 border-t border-white/5 pt-4 sm:border-t-0 sm:pt-0"><span class="text-[10px] font-bold uppercase tracking-widest text-white/30 transition-colors group-hover:text-brand-gold">View Project</span> <div class="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/40 transition-all group-hover:border-brand-gold/40 group-hover:text-brand-gold">`);
      Arrow_up_right($$renderer2, { size: 16 });
      $$renderer2.push(`<!----></div></div></button>`);
    }
    $$renderer2.push(`<!--]--></div></div></section> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function _page($$renderer) {
  Hero($$renderer);
  $$renderer.push(`<!----> `);
  About($$renderer);
  $$renderer.push(`<!----> `);
  Skills($$renderer);
  $$renderer.push(`<!----> `);
  Experience($$renderer);
  $$renderer.push(`<!----> `);
  Projects($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
