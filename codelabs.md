---
layout: page
title: Codelabs
description: Standalone Google Codelabs
permalink: /codelabs/
---

<p class="codelabs-intro">Hands-on codelabs. Each opens in the same tab; use the browser back button to return.</p>

<ul class="codelab-list">
  {% for c in site.data.codelabs %}
  <li class="codelab-item">
    <a href="{{ c.url | relative_url }}" class="codelab-link">{{ c.title }}</a>
    {% if c.description %}<p class="codelab-desc">{{ c.description }}</p>{% endif %}
  </li>
  {% endfor %}
</ul>

{% if site.data.codelabs == nil or site.data.codelabs.size == 0 %}
<p class="codelab-list-empty">No codelabs listed yet. Add entries in <code>_data/codelabs.yml</code> and put HTML under <code>codelabs/</code>.</p>
{% endif %}
