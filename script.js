/* =============================================================================
   QUIET DARK PORTFOLIO — rendering & interactions
   Renders content from data.js. You should NOT need to edit this file.
   ============================================================================= */

(function () {
  "use strict";

  const ico = {
    github:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.11-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.05.78 2.12v3.14c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    globe:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    mail:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
    external:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
  };

  /* ---------- helpers ---------- */
  function el(tag, cls) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    return n;
  }
  function link(href, svg, label) {
    const a = el("a");
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.setAttribute("aria-label", label);
    a.innerHTML = svg;
    const s = el("span");
    s.textContent = label;
    a.appendChild(s);
    return a;
  }

  /* ---------- hero ---------- */
  function renderHero() {
    document.getElementById("heroRole").textContent = PROFILE.role;
    document.getElementById("heroName").textContent = PROFILE.name;
    document.getElementById("heroIntro").textContent = PROFILE.lede || PROFILE.tagline;

    const wrap = document.getElementById("heroLinks");
    const s = PROFILE.social || {};
    if (s.github) wrap.appendChild(link(s.github, ico.github, "GitHub"));
    if (s.linkedin) wrap.appendChild(link(s.linkedin, ico.linkedin, "LinkedIn"));
    // Email as a plain link, same style as GitHub/LinkedIn
    if (PROFILE.email) {
      const a = el("a");
      a.href = "mailto:" + PROFILE.email;
      a.setAttribute("aria-label", "Email " + PROFILE.email);
      a.innerHTML = ico.mail;
      const label = el("span");
      label.textContent = "Email";
      a.appendChild(label);
      wrap.appendChild(a);
    }
  }

  /* ---------- about ---------- */
  function renderAbout() {
    const body = document.getElementById("aboutBody");

    if (PROFILE.tagline) {
      const lead = el("p");
      lead.textContent = PROFILE.tagline;
      body.appendChild(lead);
    }
    if (PROFILE.about) {
      const p = el("p");
      p.textContent = PROFILE.about;
      body.appendChild(p);
    }

    if (FACTS && FACTS.length) {
      const facts = el("div", "facts-grid");
      FACTS.forEach((f) => {
        const cell = el("div", "fact-cell");
        const lab = el("div", "fact-label");
        lab.textContent = f.label;
        const val = el("div", "fact-value");
        val.textContent = f.value;
        cell.appendChild(lab);
        cell.appendChild(val);
        facts.appendChild(cell);
      });
      body.appendChild(facts);
    }
  }

  /* ---------- skills ---------- */
  function renderSkills() {
    const body = document.getElementById("skillsBody");
    SKILLS.forEach((group) => {
      const g = el("div", "skill-group reveal");
      const h = el("h3");
      h.textContent = group.category;
      g.appendChild(h);
      const tags = el("div", "skill-tags");
      group.items.forEach((skill) => {
        const t = el("span", "skill-tag");
        t.textContent = skill;
        tags.appendChild(t);
      });
      g.appendChild(tags);
      body.appendChild(g);
    });
  }

  /* ---------- projects ---------- */
  function buildProjectCard(p, index) {
    const card = el("a", "project-card reveal");
    if (p.slug && p.writeup && p.writeup.length) {
      card.href = "#/project/" + index;
    } else {
      const href = p.demo || p.github || "#";
      card.href = href;
      if (href !== "#") {
        card.target = "_blank";
        card.rel = "noopener noreferrer";
      }
    }

    const title = el("h3", "project-title");
    title.textContent = p.title;
    card.appendChild(title);

    if (p.description) {
      const d = el("p", "project-desc");
      d.textContent = p.description;
      card.appendChild(d);
    }
    if (p.tags && p.tags.length) {
      const tags = el("div", "project-tags");
      p.tags.forEach((t) => {
        const s = el("span");
        s.textContent = t;
        tags.appendChild(s);
      });
      card.appendChild(tags);
    }
    const arrow = el("span", "project-arrow");
    const hasWriteup = p.slug && p.writeup && p.writeup.length;
    arrow.textContent = hasWriteup ? "Read more →" : (p.github ? "View on GitHub →" : "View project →");
    card.appendChild(arrow);

    return card;
  }

  function renderProjects() {
    const list = document.getElementById("projectList");
    PROJECTS.forEach((p, i) => {
      list.appendChild(buildProjectCard(p, i));
    });
  }

  /* ---------- project detail ---------- */
  function renderProjectDetail(project, index) {
    const wrap = document.getElementById("projectContent");
    document.title = project.title + " — Nanda Simatupang";

    // --- title ---
    const title = el("h1", "pp-title");
    title.textContent = project.title;
    wrap.appendChild(title);

    // --- tags row ---
    if (project.tags && project.tags.length) {
      const tags = el("div", "pp-tags");
      project.tags.forEach((t) => {
        const s = el("span");
        s.textContent = t;
        tags.appendChild(s);
      });
      wrap.appendChild(tags);
    }

    // --- short description (lede) ---
    if (project.description) {
      const lede = el("p", "pp-lede");
      lede.textContent = project.description;
      wrap.appendChild(lede);
    }

    // --- links row (GitHub + demo) ---
    const links = el("div", "pp-links");
    if (project.github) {
      const a = el("a", "pp-link github");
      a.href = project.github;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.innerHTML = ico.github;
      const s = el("span");
      s.textContent = "View on GitHub";
      a.appendChild(s);
      links.appendChild(a);
    }
    if (project.demo) {
      const a = el("a", "pp-link demo");
      a.href = project.demo;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.innerHTML = ico.external;
      const s = el("span");
      s.textContent = "Live demo";
      a.appendChild(s);
      links.appendChild(a);
    }
    if (links.children.length) wrap.appendChild(links);

    // --- writeup blocks ---
    if (project.writeup && project.writeup.length) {
      const body = el("div", "pp-writeup");
      project.writeup.forEach((block) => {
        if (block.type === "heading") {
          const h = el("h2", "pp-heading");
          h.textContent = block.text;
          body.appendChild(h);
        } else if (block.type === "paragraph") {
          const p = el("p", "pp-paragraph");
          p.textContent = block.text;
          body.appendChild(p);
        } else if (block.type === "list") {
          const ul = el("ul", "pp-list");
          (block.items || []).forEach((item) => {
            const li = el("li");
            li.textContent = item;
            ul.appendChild(li);
          });
          body.appendChild(ul);
        }
      });
      wrap.appendChild(body);
    }
  }

  function showProjectDetail(index) {
    var project = PROJECTS[index];
    if (!project || !project.writeup || !project.writeup.length) {
      // Fallback: redirect to main projects section
      window.location.hash = "projects";
      return;
    }
    document.getElementById("mainContent").style.display = "none";
    document.getElementById("projectDetail").style.display = "block";
    window.scrollTo(0, 0);
    document.getElementById("toTop").classList.remove("visible");
    // Clear nav active states
    document.querySelectorAll(".nav-links a").forEach(function (l) { l.classList.remove("active"); });
    // Clear previous content
    document.getElementById("projectContent").innerHTML = "";
    renderProjectDetail(project, index);
  }

  function showMainContent(sectionId) {
    document.getElementById("mainContent").style.display = "";
    document.getElementById("projectDetail").style.display = "none";
    document.title = "Nanda Simatupang";
    if (sectionId && sectionId !== "top") {
      setTimeout(function () {
        var el = document.getElementById(sectionId);
        if (el) el.scrollIntoView();
      }, 0);
    }
  }

  function handleRoute() {
    var hash = window.location.hash.slice(1); // remove leading #
    var match = hash.match(/^\/project\/(\d+)$/);
    if (match) {
      var index = parseInt(match[1], 10);
      showProjectDetail(index);
    } else {
      showMainContent(hash || null);
    }
  }
  /* ---------- experience ---------- */
  function renderExp() {
    const list = document.getElementById("expList");
    TIMELINE.forEach((item) => {
      const isEdu = item.type === "education";
      const row = el("div", "exp-row reveal");

      const date = el("div", "exp-date");
      date.textContent = item.period;
      row.appendChild(date);

      const content = el("div");
      const label = el("div", "exp-label" + (isEdu ? " edu" : ""));
      label.textContent = isEdu ? "Education" : "Experience";
      content.appendChild(label);

      const title = el("div", "exp-title");
      title.textContent = item.title;
      content.appendChild(title);

      const org = el("div", "exp-org");
      org.textContent = item.org;
      content.appendChild(org);

      if (item.description) {
        const d = el("div", "exp-desc");
        d.textContent = item.description;
        content.appendChild(d);
      }
      row.appendChild(content);
      list.appendChild(row);
    });
  }

  /* ---------- certs ---------- */
  function renderCerts() {
    const list = document.getElementById("certList");
    const section = document.getElementById("certs");
    if (!CERTIFICATIONS || !CERTIFICATIONS.length) {
      if (section) section.style.display = "none";
      return;
    }
    CERTIFICATIONS.forEach((c) => {
      const li = el("li", "reveal");
      li.textContent = c;
      list.appendChild(li);
    });
  }

  /* ---------- contact ---------- */
  function renderContact() {
    document.getElementById("contactText").textContent =
      "I'm a fresh data science graduate open to junior roles and internships in machine learning, NLP, or data analysis. Feel free to reach out.";

    const emailLink = document.getElementById("contactEmail");
    emailLink.href = "mailto:" + PROFILE.email;
    emailLink.innerHTML = ico.mail;
    const s = el("span");
    s.textContent = PROFILE.email;
    emailLink.appendChild(s);

    const links = document.getElementById("contactLinks");
    const soc = PROFILE.social || {};
    if (soc.github) links.appendChild(link(soc.github, ico.github, "GitHub"));
    if (soc.linkedin) links.appendChild(link(soc.linkedin, ico.linkedin, "LinkedIn"));
    if (soc.website) links.appendChild(link(soc.website, ico.globe, "Website"));
  }

  /* ---------- footer ---------- */
  function renderFooter() {
    document.getElementById("footYear").textContent =
      "© " + new Date().getFullYear() + " Nanda Simatupang";
  }

  /* ---------- nav ---------- */
  function setupNav() {
    const burger = document.getElementById("navBurger");
    const linksWrap = document.getElementById("navLinks");
    const links = linksWrap.querySelectorAll("a");

    burger.addEventListener("click", () => {
      const open = linksWrap.classList.toggle("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", open);
    });
    links.forEach((l) =>
      l.addEventListener("click", () => {
        linksWrap.classList.remove("open");
        burger.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      })
    );

    const sections = document.querySelectorAll("main section[id], main header[id]");
    const map = {};
    links.forEach((l) => {
      const id = l.getAttribute("href").slice(1);
      if (id !== "top") map[id] = l;
    });
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            links.forEach((l) => l.classList.remove("active"));
            if (map[e.target.id]) map[e.target.id].classList.add("active");
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
  }

  /* ---------- reveal ---------- */
  function setupReveal() {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((e) => obs.observe(e));
  }

  /* ---------- back to top ---------- */
  function setupToTop() {
    const btn = document.getElementById("toTop");
    window.addEventListener("scroll", () => {
      // Only show on main content, not on project detail
      if (document.getElementById("mainContent").style.display === "none") return;
      btn.classList.toggle("visible", window.scrollY > 600);
    }, { passive: true });
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ---------- init ---------- */
  function init() {
    renderHero();
    renderAbout();
    renderSkills();
    renderProjects();
    renderExp();
    renderCerts();
    renderContact();
    renderFooter();
    setupNav();
    setupReveal();
    setupToTop();
    handleRoute();
    window.addEventListener("hashchange", handleRoute);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
