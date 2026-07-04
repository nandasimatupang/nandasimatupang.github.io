/* =============================================================================
   PORTFOLIO CONTENT — EDIT EVERYTHING HERE
   -----------------------------------------------------------------------------
   This is the ONLY file you need to edit to update your website.
   You can add, remove, or change any of the content below.
   Follow the patterns shown — commas, brackets, and quotes matter.

   QUICK GUIDE:
   - Text goes inside "double quotes"
   - Arrays (lists) go inside [ square brackets ], items separated by commas
   - Each item in a list is wrapped in { curly braces }
   - Add a new item by copying an existing block and changing the text
   - Remove an item by deleting its block (keep the commas tidy)
   ============================================================================= */

const PROFILE = {
  name: "Nanda Simatupang",
  // Shown small above your name (a one-line role label)
  role: "Data Science Graduate",
  // The intro paragraph under your name (shown on the hero — 1–2 sentences)
  lede: "Recent Data Science graduate from Universitas Airlangga. I work with machine learning, NLP, and deep learning — building models and tools from data prep to deployment.",
  // Opening line shown at the top of the About section
  tagline: "Turning data into insights, and insights into impact.",
  // The longer intro shown in the About section
  about:
    "I'm a Data Science graduate from Universitas Airlangga with a passion for machine learning, NLP, and deep learning. I enjoy building predictive models, analyzing complex datasets, and creating tools that make data useful. Through projects like aspect-based sentiment analysis and medical image classification, I've developed a strong foundation in the end-to-end machine learning lifecycle — from data preparation to deployment.",
  // Where you're based
  location: "Surabaya, Indonesia",
  // Link to your resume / CV (PDF recommended). Leave empty "" to hide the button.
  resume: "",
  // Your contact email (double-check this is correct!)
  email: "nandasimatupang2002@gmail.com",
  // Links to your profiles
  social: {
    linkedin: "https://www.linkedin.com/in/nandasimatupang",
    github: "https://github.com/nandasimatupang",
    website: "https://nandasimatupang.github.io",
  },
};

/* -----------------------------------------------------------------------------
   SKILLS
   Each group has a category name and a list of skills.
   Add a new group by copying a { ... } block.
   -------------------------------------------------------------------------- */
const SKILLS = [
  {
    category: "Machine Learning & AI",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing (NLP)",
      "BERT / Transformers",
      "Computer Vision",
      "Predictive Modeling",
    ],
  },
  {
    category: "Data & Tools",
    items: [
      "Data Analysis",
      "Data Visualization",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Jupyter Notebook",
      "Git & GitHub",
    ],
  },
];

/* -----------------------------------------------------------------------------
   QUICK FACTS
   Shown at the bottom of the About section as label / value pairs.
   Each fact has a short label and a value. Add or remove freely.
   -------------------------------------------------------------------------- */
const FACTS = [
  { label: "Degree", value: "B.Sc. Data Science" },
  { label: "Based in", value: "Surabaya, Indonesia" },
  { label: "Focus", value: "ML, NLP & Deep Learning" },
  { label: "Status", value: "Open to opportunities" },
];

/* -----------------------------------------------------------------------------
   EXPERIENCE / EDUCATION
   This is a "timeline" that shows your background.
   Each entry has: title, org, period, description, and a "type".
   - "type": "education"  shows an "Education" label
   - "type": "work"       shows an "Experience" label
   Add entries in the order you want them displayed.
   -------------------------------------------------------------------------- */
const TIMELINE = [
  {
    type: "education",
    title: "B.Sc. in Data Science",
    org: "Universitas Airlangga",
    period: "2020 — 2024",
    description:
      "Studied statistics, machine learning, data engineering, and analytics. Completed projects in NLP, computer vision, and predictive modeling.",
  },
  {
    type: "education",
    title: "Bangkit Academy",
    org: "Google, Tokopedia, Gojek & Traveloka",
    period: "Career Readiness Program",
    description:
      "Selected for an intensive career readiness program led by Google in collaboration with Indonesia's leading tech companies. Focused on technical and professional development.",
  },
  {
    type: "work",
    title: "Machine Learning Projects",
    org: "Independent / Academic",
    period: "2022 — Present",
    description:
      "Built and documented end-to-end ML projects including aspect-based sentiment analysis with BERT, dental disease image classification, and a custom data-labelling tool for NLP datasets.",
  },
];  /* -----------------------------------------------------------------------------
   PROJECTS
   Each project has: title, description, tags (tech used), links, and content.
   - "slug": a short unique ID (lowercase, no spaces) used in the URL.
     e.g. "absa" makes the detail page at #/project/absa
   - "image": optional path to an image (e.g. "images/my-project.jpg").
     Shows as a thumbnail on the card and a hero image on the detail page.
     Leave as "" if you don't have an image yet.
   - "github": link to the repository
   - "demo": optional live demo link (delete or leave "" if none)
   - "content": path to a markdown file with the project writeup.
     e.g. "projects/my-project.md"
     Write your project content in that .md file — plain markdown with
     headings (##), paragraphs, lists (-), images (![alt](path)), etc.
     You never need to touch JavaScript objects for content again.
  Add a new project by copying a whole { ... } block below.
  -------------------------------------------------------------------------- */
const PROJECTS = [
  {
    title: "Aspect-Based Sentiment Analysis (ABSA)",
    slug: "absa",
    image: "",
    description:
      "A natural language processing project that performs aspect-based sentiment analysis using BERT. The model identifies specific aspects in text and classifies the sentiment toward each one — useful for analyzing product reviews and customer feedback at a granular level.",
    tags: ["Python", "BERT", "NLP", "Transformers", "Deep Learning"],
    github: "https://github.com/nandasimatupang/absa_pantai",
    demo: "",
    content: "projects/absa.md",
  },
  {
    title: "Teeth Disease Classification",
    slug: "teeth-disease",
    image: "",
    description:
      "A computer vision project that classifies dental images to detect teeth diseases using deep learning. Demonstrates end-to-end image classification with preprocessing, model training, and evaluation — applicable to healthcare diagnostics.",
    tags: ["Python", "Deep Learning", "Computer Vision", "TensorFlow"],
    github: "https://github.com/nandasimatupang/teeth-disease",
    demo: "",
    content: "projects/teeth-disease.md",
  },
  {
    title: "ABSA Labelling Tool",
    slug: "absa-labelling-tool",
    image: "",
    description:
      "A custom-built utility for creating and managing labelled datasets for aspect-based sentiment analysis tasks. Supports the full ML lifecycle by streamlining the often time-consuming data preparation phase, making annotation faster and more consistent.",
    tags: ["Python", "Data Labelling", "NLP", "Tooling"],
    github: "https://github.com/nandasimatupang/ABSA-Labelling-Tool",
    demo: "",
    content: "projects/absa-labelling-tool.md",
  },
];

/* -----------------------------------------------------------------------------
   CERTIFICATIONS & ACHIEVEMENTS (optional)
   Each item is just a text string. Delete the whole block or add more lines.
   -------------------------------------------------------------------------- */
const CERTIFICATIONS = [
  "Bangkit Academy — Google Career Readiness Program",
  "Data Science Degree — Universitas Airlangga",
];
