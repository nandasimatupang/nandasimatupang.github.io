---
layout: page
title: Portfolio
permalink: /portfolio/
---

<section class="portfolio">
  <h2>My Projects</h2>
  <div class="projects-container">
    {% for project in site.data.projects %}
    <div class="project-card">
      <img src="{{ project.image }}" alt="{{ project.title }}">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <div class="project-links">
        <a href="{{ project.demo }}" target="_blank" class="demo-link">Demo</a>
        <a href="{{ project.github }}" target="_blank" class="github-link">GitHub</a>
      </div>
      <div class="technologies">
        {% for tech in project.technologies %}
        <span class="tech-pill">{{ tech }}</span>
        {% endfor %}
      </div>
    </div>
    {% endfor %}
  </div>
</section>

<style>
.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.project-card {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
}

.project-links {
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-pill {
  background: #f0f0f0;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

.demo-link, .github-link {
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
}

.demo-link {
  background: #007bff;
  color: white;
}

.github-link {
  background: #333;
  color: white;
}
</style>
