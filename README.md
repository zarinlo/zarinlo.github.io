# Personal Blog (Jekyll + GitHub Pages)

Personal blog with a Codelabs section and Light / Dark / Cyber theme switcher. Built for GitHub Pages.

## Features

- **Jekyll 4** – Markdown posts, static site
- **Modern Sass** – Dart Sass via `jekyll-sass-converter` 3.x (no legacy Ruby Sass)
- **Themes** – Light, Dark, Cyber (neon accents); choice persisted in `localStorage`
- **Codelabs** – List in `_data/codelabs.yml`; put standalone codelab HTML under `codelabs/`
- **SPA-like nav** – In-site links (with `data-pjax`) update content without full reload

## Local setup

Requires **Ruby 3.1+** (e.g. `rbenv install 3.2` or system Ruby). The project uses Jekyll 4 and Dart Sass; the lockfile pins current versions.

```bash
bundle install
bundle exec jekyll serve
```

Open http://localhost:4000

Or use the helper scripts:

```bash
./bin/start
./bin/stop
```

By default, the site runs at http://127.0.0.1:4000. You can override the port with `PORT=4001 ./bin/start` and stop that port with `PORT=4001 ./bin/stop`.
The scripts install missing gems into `/tmp/personal-blog-bundle` by default; override that with `PERSONAL_BLOG_BUNDLE_PATH=/path/to/bundle ./bin/start`.

## Deploy

Live site: **https://zarin.io**

The site is built with **Jekyll 4 and Dart Sass**, so it does not use GitHub’s built-in Jekyll 3 stack. Deployment is via **GitHub Actions**:

1. Push to this repo (`zarinlo/zarinlo.github.io`).
2. In **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**.
3. Confirm **Custom domain** is `zarin.io` (see root `CNAME` file).
4. The workflow [`.github/workflows/pages.yml`](.github/workflows/pages.yml) builds on push to `master` and deploys `_site` to Pages.

## Adding content

- **Posts**: Add `.md` files in `_posts/` with front matter (`layout: post`, `title`, `date`).
- **Codelabs**: Add entries to `_data/codelabs.yml` and place each codelab’s files under `codelabs/<name>/` (e.g. `codelabs/my-codelab/index.html`). Use `url: /codelabs/my-codelab/` in the YAML.

## After deploy

After pushing to `master`, allow 1–2 minutes for GitHub Pages to rebuild, then verify:

- [https://zarin.io/codelabs/](https://zarin.io/codelabs/) loads the listing page
- Menu **Codelabs** and homepage **View all** link work
- Individual codelab URLs still work (e.g. `/codelabs/springboot-api/`)
- [https://zarin.io/sitemap.xml](https://zarin.io/sitemap.xml) includes `/codelabs/`

## Codelabs listing page

The listing page source is [`codelabs-index.md`](codelabs-index.md); GitHub Pages serves the built static [`codelabs/index.html`](codelabs/index.html). Cards are rendered from [`_data/codelabs.yml`](_data/codelabs.yml) via [`_includes/codelab-grid.html`](_includes/codelab-grid.html). After editing the source or data, run `./bin/build-codelabs-index` to refresh the static HTML.

