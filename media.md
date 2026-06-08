---
layout: page
title: Media
description: Articles, blogs, tutorials, and media published here or linked from around the web
permalink: /media/
---

<div class="media-groups media-groups-page">
  {% if site.posts.size > 0 %}
  <section class="media-group">
    <h2 class="media-group-title">Published Here</h2>
    <ul class="media-list">
      {% for post in site.posts %}
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
    <h2 class="media-group-title">{{ group.section }}</h2>
    <ul class="media-list">
      {% for item in group.items %}
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
</div>

{% if site.posts.size == 0 and site.data.articles-media.size == 0 %}
<p class="post-list-empty">No media yet.</p>
{% endif %}
