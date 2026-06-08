---
layout: page
title: Codelabs
description: Hands-on tutorials for building APIs, frontends, and understanding web architecture.
permalink: /codelabs/
---

<p class="codelabs-intro">Hands-on codelabs. Each opens in the same tab; use the browser back button to return.</p>

{% include codelab-grid.html %}

{% if site.data.codelabs == nil or site.data.codelabs.size == 0 %}
<p class="codelab-list-empty">No codelabs listed yet. Add entries in <code>_data/codelabs.yml</code> and put HTML under <code>codelabs/</code>.</p>
{% endif %}
