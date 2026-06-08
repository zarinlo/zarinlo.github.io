---
layout: default
description: Cyber Engineering Manager, Developer Advocate, Pragmatic
---

<div class="home">
  <section class="hero">
    <h1 class="hero-title">Zarin Elias Lokhandwala</h1>
    <p class="hero-rotator" aria-live="polite">
      <span class="rotating-line-wrap">
        <span
        data-rotate-text
        class="rotating-line"
        data-rotate-items="Cyber Engineering Manager|Developer Advocate|Pragmatic"
        >Cyber Engineering Manager</span>
      </span>
    </p>
  </section>

  <section class="home-section" id="about">
    <div class="home-section-heading">
      <h2 class="home-section-title">About</h2>
    </div>
    <article class="about-card">
      <p class="about-copy">{{ site.data.profile.bio }}</p>
      <ul class="profile-tags" aria-label="Profile strengths">
        {% for tag in site.data.profile.tags %}
        <li class="profile-tag">{{ tag }}</li>
        {% endfor %}
      </ul>
    </article>
  </section>

  <section class="home-section" id="media">
    <div class="home-section-heading">
      <h2 class="home-section-title">Media</h2>
      <a href="{{ '/media/' | relative_url }}" class="home-section-link" data-pjax>View all</a>
    </div>
    <div class="media-groups">
      {% if site.posts.size > 0 %}
      <section class="media-group">
        <h3 class="media-group-title">Published Here</h3>
        <ul class="media-list">
          {% for post in site.posts limit:3 %}
          <li class="media-list-item">
            <a href="{{ post.url | relative_url }}" class="media-list-link" data-pjax>{{ post.title }}</a>
            <p class="media-list-meta">{{ post.date | date: "%b %d, %Y" }}</p>
          </li>
          {% endfor %}
        </ul>
      </section>
      {% endif %}

      {% for group in site.data.articles-media %}
      <section class="media-group">
        <h3 class="media-group-title">{{ group.section }}</h3>
        <ul class="media-list">
          {% for item in group.items limit:3 %}
          <li class="media-list-item">
            <a href="{{ item.url }}" class="media-list-link" target="_blank" rel="noreferrer">{{ item.title }}</a>
            {% if item.source %}
            <p class="media-list-meta">
              {% if item.source_url %}
              <a href="{{ item.source_url }}" class="media-source-link" target="_blank" rel="noreferrer">{{ item.source }}</a>
              {% else %}
              {{ item.source }}
              {% endif %}
            </p>
            {% endif %}
          </li>
          {% endfor %}
        </ul>
      </section>
      {% endfor %}

      {% if site.posts.size == 0 and site.data.articles-media.size == 0 %}
      <p class="home-empty">Media will show up here as you publish or add it.</p>
      {% endif %}
    </div>
  </section>

  <section class="home-section" id="codelabs">
    <div class="home-section-heading">
      <h2 class="home-section-title">Codelabs</h2>
      <a href="{{ '/codelabs/' | relative_url }}" class="home-section-link" data-pjax>View all</a>
    </div>
    {% include codelab-grid.html %}
  </section>

  {% for group in site.data.recognition %}
  <section class="home-section" id="{{ group.category | slugify }}">
    <div class="home-section-heading">
      <h2 class="home-section-title">{{ group.category }}</h2>
    </div>
    {% if group.category == 'Speaking' %}
    <div class="speaking-table-wrap">
      <table class="speaking-table">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Conference</th>
            <th scope="col">Talk</th>
            <th scope="col">Links</th>
          </tr>
        </thead>
        <tbody>
          {% for item in group.items %}
          <tr>
            <td data-label="Date">{{ item.date }}</td>
            <td data-label="Conference">
              <span class="speaking-host">{{ item.organization }}</span>
            </td>
            <td data-label="Talk">
              <span class="speaking-title">{{ item.title }}</span>
            </td>
            <td data-label="Links">
              {% if item.links %}
              <div class="speaking-links" aria-label="{{ item.title }} resources">
                {% for link in item.links %}
                <a
                  href="{% if link.url contains '://' %}{{ link.url }}{% else %}{{ link.url | relative_url }}{% endif %}"
                  class="speaking-link speaking-link-{{ link.type }}"
                  {% if link.url contains '://' %}target="_blank" rel="noreferrer"{% else %}data-pjax{% endif %}
                  aria-label="Open {{ item.title }} {{ link.label | downcase }}"
                  title="{{ link.label }}"
                >
                  {% if link.type == 'deck' %}
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path fill="currentColor" d="M4 4.5A2.5 2.5 0 0 1 6.5 2h11A2.5 2.5 0 0 1 20 4.5v11A2.5 2.5 0 0 1 17.5 18h-4.15l1.75 2.5h2.4a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1 0-1.5h2.4l1.75-2.5H6.5A2.5 2.5 0 0 1 4 15.5v-11Zm2.5-1A1 1 0 0 0 5.5 4.5v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-11Zm5.98 14.5h-.96l-1.75 2.5h4.46L12.48 18ZM8 7.25A.75.75 0 0 1 8.75 6h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 8 7.25Zm0 3A.75.75 0 0 1 8.75 9.5h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 8 10.25Z"/>
                  </svg>
                  {% elsif link.type == 'codelab' %}
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path fill="currentColor" d="M8.22 8.22a.75.75 0 0 1 0 1.06L5.5 12l2.72 2.72a.75.75 0 1 1-1.06 1.06l-3.25-3.25a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Zm7.56 0a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 1 1-1.06-1.06L18.5 12l-2.72-2.72a.75.75 0 0 1 0-1.06Zm-2.2-2.04a.75.75 0 0 1 .5.93l-3.2 10.5a.75.75 0 1 1-1.44-.44l3.2-10.5a.75.75 0 0 1 .94-.49Z"/>
                  </svg>
                  {% else %}
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path fill="currentColor" d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                  </svg>
                  {% endif %}
                  <span class="sr-only">{{ link.label }}</span>
                </a>
                {% endfor %}
              </div>
              {% endif %}
            </td>
          </tr>
          {% endfor %}
        </tbody>
      </table>
    </div>
    {% else %}
    <div class="recognition-list">
      {% for item in group.items %}
      <article class="recognition-item">
        <div class="recognition-item-heading">
          <h3 class="recognition-title">
            {% if item.url %}
            <a href="{{ item.url }}" class="recognition-link" target="_blank" rel="noreferrer">{{ item.title }}</a>
            {% else %}
            {{ item.title }}
            {% endif %}
          </h3>
          {% if item.date %}<span class="recognition-date">{{ item.date }}</span>{% endif %}
        </div>
        {% if item.organization %}<p class="recognition-meta">{{ item.organization }}</p>{% endif %}
        {% if item.description %}
        <p class="recognition-description">
          {% if item.description_parts %}
          {%- for part in item.description_parts -%}
          {%- if part.url -%}
          <a href="{{ part.url }}" class="recognition-description-link" target="_blank" rel="noreferrer">{{ part.text }}</a>
          {%- else -%}
          {{ part.text }}
          {%- endif -%}
          {%- endfor -%}
          {% elsif item.description_link %}
          {% assign description_parts = item.description | split: item.description_link.text %}
          {{ description_parts[0] }}<a href="{{ item.description_link.url }}" class="recognition-description-link" target="_blank" rel="noreferrer">{{ item.description_link.text }}</a>{{ description_parts[1] }}
          {% else %}
          {{ item.description }}
          {% endif %}
        </p>
        {% endif %}
        {% if item.links %}
        <div class="speaking-links" aria-label="{{ item.title }} resources">
          {% for link in item.links %}
          <a
            href="{% if link.url contains '://' %}{{ link.url }}{% else %}{{ link.url | relative_url }}{% endif %}"
            class="speaking-link speaking-link-{{ link.type }}"
            {% if link.url contains '://' %}target="_blank" rel="noreferrer"{% else %}data-pjax{% endif %}
            aria-label="Open {{ item.title }} {{ link.label | downcase }}"
            title="{{ link.label }}"
          >
            {% if link.type == 'deck' %}
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path fill="currentColor" d="M4 4.5A2.5 2.5 0 0 1 6.5 2h11A2.5 2.5 0 0 1 20 4.5v11A2.5 2.5 0 0 1 17.5 18h-4.15l1.75 2.5h2.4a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1 0-1.5h2.4l1.75-2.5H6.5A2.5 2.5 0 0 1 4 15.5v-11Zm2.5-1A1 1 0 0 0 5.5 4.5v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-11Zm5.98 14.5h-.96l-1.75 2.5h4.46L12.48 18ZM8 7.25A.75.75 0 0 1 8.75 6h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 8 7.25Zm0 3A.75.75 0 0 1 8.75 9.5h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 8 10.25Z"/>
            </svg>
            {% elsif link.type == 'codelab' %}
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path fill="currentColor" d="M8.22 8.22a.75.75 0 0 1 0 1.06L5.5 12l2.72 2.72a.75.75 0 1 1-1.06 1.06l-3.25-3.25a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Zm7.56 0a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 1 1-1.06-1.06L18.5 12l-2.72-2.72a.75.75 0 0 1 0-1.06Zm-2.2-2.04a.75.75 0 0 1 .5.93l-3.2 10.5a.75.75 0 1 1-1.44-.44l3.2-10.5a.75.75 0 0 1 .94-.49Z"/>
            </svg>
            {% else %}
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path fill="currentColor" d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
            </svg>
            {% endif %}
            <span class="sr-only">{{ link.label }}</span>
          </a>
          {% endfor %}
        </div>
        {% endif %}
      </article>
      {% endfor %}
    </div>
    {% endif %}
  </section>
  {% endfor %}

  <section class="home-section" id="consulting">
    <div class="home-section-heading">
      <h2 class="home-section-title">{{ site.data.profile.consulting.title }}</h2>
    </div>
    <article class="consulting-card">
      <p class="consulting-status">{{ site.data.profile.consulting.company }} &middot; {{ site.data.profile.consulting.status }}</p>
      <p class="consulting-copy">{{ site.data.profile.consulting.intro }}</p>
      <p class="consulting-copy">{{ site.data.profile.consulting.description }}</p>
      <ul class="consulting-focus" aria-label="Consulting focus areas">
        {% for item in site.data.profile.consulting.focus %}
        <li>{{ item }}</li>
        {% endfor %}
      </ul>
      <div class="consulting-actions">
        <a href="{{ site.data.profile.consulting.url }}" class="consulting-link" target="_blank" rel="noreferrer">Learn more about {{ site.data.profile.consulting.company }}</a>
        <span class="consulting-note">More details coming soon. For now, reach out through the links below.</span>
      </div>
    </article>
  </section>

  <section class="home-section" id="contact">
    <div class="home-section-heading">
      <h2 class="home-section-title">Contact</h2>
    </div>
    <div class="contact-links" aria-label="Contact links">
      <a class="contact-link" href="https://github.com/zarinlo" target="_blank" rel="noreferrer" aria-label="GitHub">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.4 7.85 10.92.57.1.78-.25.78-.56 0-.27-.01-1.18-.02-2.13-3.19.69-3.87-1.35-3.87-1.35-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.97.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a10.9 10.9 0 0 1 5.79 0c2.21-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.68 5.39-5.24 5.68.41.36.78 1.07.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.2.67.79.56a11.53 11.53 0 0 0 7.84-10.92C23.5 5.66 18.35.5 12 .5Z"/>
        </svg>
      </a>
      <a class="contact-link" href="https://www.linkedin.com/in/zarinlokhandwala/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M4.98 3.5A2.49 2.49 0 0 0 2.5 6a2.49 2.49 0 0 0 2.48 2.5A2.49 2.49 0 0 0 7.47 6 2.49 2.49 0 0 0 4.98 3.5ZM2.9 9.5h4.16V21H2.9V9.5Zm6.76 0h3.99v1.57h.06c.55-1.05 1.92-2.15 3.95-2.15 4.23 0 5.01 2.78 5.01 6.39V21h-4.16v-5.06c0-1.21-.02-2.77-1.69-2.77-1.69 0-1.95 1.32-1.95 2.68V21H9.66V9.5Z"/>
        </svg>
      </a>
      <a class="contact-link contact-link-medium" href="https://medium.com/@zarinlo" target="_blank" rel="noreferrer" aria-label="Medium">
        <svg viewBox="0 0 195 195" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M46.534 65.216c.163-1.608-.45-3.198-1.651-4.28L32.651 46.201V44H70.63l29.356 64.381L125.795 44H162v2.201l-10.458 10.027c-.902.687-1.349 1.816-1.162 2.935v73.674c-.187 1.118.26 2.248 1.162 2.935l10.213 10.027V148h-51.372v-2.201l10.58-10.272c1.04-1.039 1.04-1.345 1.04-2.934V73.042l-29.417 74.714H88.61L54.362 73.042v50.074c-.285 2.105.414 4.225 1.896 5.747l13.76 16.691v2.201H31v-2.201l13.761-16.691c1.471-1.525 2.13-3.659 1.773-5.747V65.216Z"/>
        </svg>
      </a>
      <a class="contact-link contact-link-apple-music" href="https://music.apple.com/profile/zarinlo" target="_blank" rel="noreferrer" aria-label="Apple Music">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 0 0-1.877-.726 10.496 10.496 0 0 0-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 0 0 1.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 0 0 1.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.045-1.773-.6-1.943-1.536a1.88 1.88 0 0 1 1.038-2.022c.323-.16.67-.25 1.018-.324.378-.082.758-.153 1.134-.24.274-.063.457-.23.51-.516a.904.904 0 0 0 .02-.193c0-1.815 0-3.63-.002-5.443a.725.725 0 0 0-.026-.185c-.04-.15-.15-.243-.304-.234-.16.01-.318.035-.475.066-.76.15-1.52.303-2.28.456l-2.325.47-1.374.278c-.016.003-.032.01-.048.013-.277.077-.377.203-.39.49-.002.042 0 .086 0 .13-.002 2.602 0 5.204-.003 7.805 0 .42-.047.836-.215 1.227-.278.64-.77 1.04-1.434 1.233-.35.1-.71.16-1.075.172-.96.036-1.755-.6-1.92-1.544-.14-.812.23-1.685 1.154-2.075.357-.15.73-.232 1.108-.31.287-.06.575-.116.86-.177.383-.083.583-.323.6-.714v-.15c0-2.96 0-5.922.002-8.882 0-.123.013-.25.042-.37.07-.285.273-.448.546-.518.255-.066.515-.112.774-.165.733-.15 1.466-.296 2.2-.444l2.27-.46c.67-.134 1.34-.27 2.01-.403.22-.043.442-.088.663-.106.31-.025.523.17.554.482.008.073.012.148.012.223.002 1.91.002 3.822 0 5.732z"/>
        </svg>
      </a>
    </div>
  </section>
</div>
