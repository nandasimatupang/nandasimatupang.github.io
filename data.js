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
  // The intro paragraph under your name (one or two sentences)
  lede: "Recent Data Science graduate from Universitas Airlangga. I work with machine learning, NLP, and deep learning — building models and tools from data prep to deployment.",
  // Shown in the About section as the opening line
  tagline: "Turning data into insights, and insights into impact.",
  // The longer intro shown in the About section
  about:
    "I'm a Data Science graduate from Universitas Airlangga with a passion for machine learning, NLP, and deep learning. I enjoy building predictive models, analyzing complex datasets, and creating tools that make data useful. Through projects like aspect-based sentiment analysis and medical image classification, I've developed a strong foundation in the end-to-end machine learning lifecycle — from data preparation to deployment.",
  // Where you're based
  location: "Surabaya, Indonesia",
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
    category: "Languages",
    items: ["Python", "SQL", "HTML/CSS", "JavaScript"],
  },
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
  {
    category: "Libraries & Frameworks",
    items: ["Streamlit", "Matplotlib", "Seaborn"],
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
];

/* -----------------------------------------------------------------------------
   PROJECTS
   Each project has: title, description, tags (tech used), links, and a writeup.
   - "slug": a short unique ID (lowercase, no spaces) used in the URL.
     e.g. "absa" makes the detail page at project.html#absa
  - "github": link to the repository
  - "demo": optional live demo link (delete or leave "" if none)
  - "writeup": a list of content blocks shown on the project detail page.
     Each block has a "type" and content. Available types:
       { type: "heading",  text: "Section Title" }
       { type: "paragraph", text: "A paragraph of explanation..." }
       { type: "list",     items: ["First point", "Second point"] }
     Add as many blocks as you want, in any order.
     The writeup is YOUR space to explain the project in detail —
     the problem, your approach, what you learned, results, etc.
  Add a new project by copying a whole { ... } block below.
  -------------------------------------------------------------------------- */
const PROJECTS = [
  {
    title: "Aspect-Based Sentiment Analysis (ABSA)",
    slug: "absa",
    description:
      "A natural language processing project that performs aspect-based sentiment analysis using BERT. The model identifies specific aspects in text and classifies the sentiment toward each one — useful for analyzing product reviews and customer feedback at a granular level.",
    tags: ["Python", "BERT", "NLP", "Transformers", "Deep Learning"],
    github: "https://github.com/nandasimatupang/absa_pantai",
    demo: "",
    writeup: [
      { type: "heading", text: "The Problem" },
      { type: "paragraph", text: "Standard sentiment analysis tells you whether a review is positive or negative overall. But a single review often mentions multiple things — a product's battery life might be praised while its screen is criticized. Aspect-Based Sentiment Analysis (ABSA) solves this by identifying each aspect in the text and classifying the sentiment toward each one separately." },
      { type: "heading", text: "Approach" },
      { type: "paragraph", text: "I used a BERT-based model to tackle this as a sequence labeling task. The pipeline breaks down into: tokenizing the input text, identifying aspect terms, and predicting the sentiment polarity (positive, negative, neutral) for each aspect." },
      { type: "list", items: [
        "Data preprocessing: cleaning and tokenizing review datasets",
        "Fine-tuning BERT for aspect-term extraction and sentiment classification",
        "Evaluation using accuracy and F1-score metrics",
      ] },
      { type: "heading", text: "What I Learned" },
      { type: "paragraph", text: "This project deepened my understanding of transformer architectures and how to fine-tune pre-trained models for a specific NLP task. I also gained experience handling imbalanced sentiment labels and structuring an end-to-end ML pipeline." },
    ],
  },
  {
    title: "Teeth Disease Classification",
    slug: "teeth-disease",
    description:
      "A computer vision project that classifies dental images to detect teeth diseases using deep learning. Demonstrates end-to-end image classification with preprocessing, model training, and evaluation — applicable to healthcare diagnostics.",
    tags: ["Python", "Deep Learning", "Computer Vision", "TensorFlow"],
    github: "https://github.com/nandasimatupang/teeth-disease",
    demo: "",
    writeup: [
      { type: "heading", text: "The Problem" },
      { type: "paragraph", text: "Early detection of dental diseases can improve treatment outcomes, but manual diagnosis from X-ray images is time-consuming and requires expertise. This project explores whether a deep learning model can automatically classify dental images by disease type." },
      { type: "heading", text: "Approach" },
      { type: "paragraph", text: "I built an image classification model using a convolutional neural network. The workflow covered the full pipeline from raw images to a trained model." },
      { type: "list", items: [
        "Image preprocessing: resizing, normalization, and augmentation",
        "Model architecture: CNN with multiple convolutional and pooling layers",
        "Training with TensorFlow, using categorical cross-entropy loss",
        "Evaluation on a held-out test set measuring accuracy and confusion matrix",
      ] },
      { type: "heading", text: "What I Learned" },
      { type: "paragraph", text: "Working with medical images taught me the importance of careful preprocessing and data augmentation when training data is limited. I also learned how to interpret a confusion matrix to understand where the model struggles — an important skill for any real-world classification problem." },
    ],
  },
  {
    title: "ABSA Labelling Tool",
    slug: "absa-labelling-tool",
    description:
      "A custom-built utility for creating and managing labelled datasets for aspect-based sentiment analysis tasks. Supports the full ML lifecycle by streamlining the often time-consuming data preparation phase, making annotation faster and more consistent.",
    tags: ["Python", "Data Labelling", "NLP", "Tooling"],
    github: "https://github.com/nandasimatupang/ABSA-Labelling-Tool",
    demo: "",
    writeup: [
      { type: "heading", text: "The Problem" },
      { type: "paragraph", text: "Building an ABSA model requires labelled training data where each aspect term and its sentiment are manually annotated. Doing this by hand in a spreadsheet is slow, error-prone, and hard to keep consistent across annotators. I needed a dedicated tool to make this faster and more reliable." },
      { type: "heading", text: "What It Does" },
      { type: "list", items: [
        "Load and display text documents one at a time for annotation",
        "Highlight and tag aspect terms within the text",
        "Assign sentiment polarity to each tagged aspect",
        "Export the annotated dataset in a structured format for model training",
      ] },
      { type: "heading", text: "What I Learned" },
      { type: "paragraph", text: "Building my own tooling made me appreciate how much of real-world machine learning is data preparation, not modeling. Designing a tool that's actually pleasant to use forced me to think about the annotator's workflow — a perspective that carries over into how I approach data quality in any ML project." },
    ],
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
