// Edit your content here — components render from these values.

export const profile = {
  name: "Muhammad Daffa Fachreza",
  fullName: "Muhammad Daffa Fachreza",
  email: "muhdaffafachreza.12@gmail.com",
  github: "https://github.com/xsillery12",
  linkedin: "https://www.linkedin.com/in/muhammaddaffafachreza/",
  cv: "/Muhammad-Daffa-Fachreza-CV.pdf",
  location: "Jakarta, Indonesia",
};

export const metrics = [
  { val: "128K", sup: "+", label: "agents monitored" },
  { val: "40–50", sup: "%", label: "faster monthly reporting" },
  { val: "3.93", sup: "/4", label: "GPA, Information Systems" },
  { val: "1+", sup: " yr", label: "shipping production code" },
];

export const projects = [
  {
    feature: true,
    tag: "Full-stack",
    year: "2026",
    title: "BSI Agen Monitoring Dashboard",
    image: "/bsi_agen.webp",
    desc: "A monitoring dashboard for the operations team at Bank Syariah Indonesia, tracking 128,000+ agents. Transaction analytics, regional breakdowns, and automated monthly reports that cut reporting time by 40–50%.",
    chips: ["Vue.js", "Tailwind", "Chart.js", "FastAPI", "PostgreSQL"],
    link1: "https://github.com/xsillery12/dashboard-web-frontend",
    link2: "https://github.com/xsillery12/dashboard-web-backend",
  },
  {
    tag: "Team project",
    year: "2024",
    title: "Kampus Merdeka - RevoU Project",
    image: "/revou.webp",
    desc: "Medan24 Pizza Sales Dashboard is an interactive data visualization web application built to analyze pizza sales performance throughout 2015.",
    chips: ["HTML", "CSS", "Javascript", "Google Looker Studio", "BigQuery", "SQL", "GIT", "Chart.js"],
    // Swap for the exact repo URL when ready
    link: "https://github.com/xsillery12",
  },
  {
    tag: "Team project",
    year: "2025",
    title: "Chayon Online Course Website",
    image: "/chayon.webp",
    desc: "Chayon Online Course is a responsive online learning platform designed to help users upgrade their skills and advance their careers.",
    chips: ["Laravel", "Tailwind CSS", "Javascript"],
    // Swap for the exact repo URL when ready
    link: "https://github.com/xsillery12",
  },
  {
    tag: "Thesis",
    year: "2025",
    title: "Apotek Huda — Online Pharmacy",
    image: "/apotek_huda.webp",
    desc: "A responsive pharmacy storefront with 10+ product categories and a streamlined checkout, built as my undergraduate thesis.",
    chips: ["Laravel", "PHP", "MySQL"],
    link: "https://github.com/xsillery12",
  },
  {
    tag: "Team project",
    year: "2023",
    title: "Raakdatri — Clothing Store",
    image: "/raakdatri.webp",
    desc: "An e-commerce clothing site where I worked across UI/UX in Figma and full-stack development — a modern, responsive storefront.",
    chips: ["Figma", "JavaScript", "Full-stack"],
    link: "https://github.com/xsillery12",
  },
];

export const stackGroups = [
  { label: "Frontend", items: ["Vue.js", "React", "JavaScript", "HTML", "CSS", "Tailwind", "Chart.js"] },
  { label: "Backend", items: ["Python", "FastAPI", "PHP", "Laravel", "REST APIs"] },
  { label: "Databases", items: ["PostgreSQL", "MySQL", "Oracle", "SQL"] },
  { label: "Design & tools", items: ["Figma", "Adobe XD", "Git", "Looker Studio"] },
];

export const experience = [
  {
    date: "Dec 2025 — Jun 2026",
    role: "Junior IT",
    org: "PT. Bank Syariah Indonesia Tbk.",
    desc: "Built the BSI Agen monitoring dashboard, supported core-banking migration QA, and ran competitive benchmarking against other banks and fintechs.",
  },
  {
    date: "Oct — Dec 2025",
    role: "Programmer & Software Tester",
    org: "PT. Lestari Jaya Raya",
    desc: "Functional, UI/UX, and regression testing on internal apps; wrote test cases and reported bugs alongside the developer team.",
  },
  {
    date: "Mar — Sept 2025",
    role: "Front-End Web Developer",
    org: "Chayon Online Course",
    desc: "Built responsive interfaces from UI/UX designs and kept the live site healthy through regular maintenance.",
  },
];
