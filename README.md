Static Site Starter Project
==========

This is a quickstart Jekyll template for a static site. You can use this to quickly prototype web applications, build static sites (including some basic dynamic content), easily develop frontend code, or do all kinds of other things that don't require heavy dynamic content management. It contains Emerson Media's standards and best practices and is designed to reduce spin up time for new projects. Fork this repo to get started!

> **Stability:** This repo is very much a work in progress. It was first based on the fstrf.org, specrepos, and new emersonmedia.com projects in early 2015. If you learn anything or find things to make our lives easier for projects like this, please contribute them back here for next time.


## Setup / Installing

This installation presumes that both Ruby (required by Jekyll) and Node.js (required by Gulp) are installed on the system.

1. Install Jekyll (globally): `gem install jekyll` (may need to `sudo`)
2. Install Gulp (globally): `npm install --global gulp`
3. Install NPM Dependencies: `npm install`
4. Setup Nginx/Apache virtual host pointing to `/public`
    - Serve `/public/index.html` as the index

> **Note:** The NPM dependencies are set in `package.json`. Providing the package is CommonJS or AMD compatible, then nothing more than installing the package is required to begin using it. If it is not compatible, then you may need to modify the `browser` and `browserify-shim` properties of `package.json` to prepare it for the Browserify bundler that the build tasks use.


## Building

After the project dependencies have been met, you can generate a static build of the source suitable for production use. This project uses Jekyll to build the production-ready HTML templates while using Gulp to build the production-ready assets (CSS, JS, images and fonts). Because Jekyll wipes the destination directory (`/public`) when generating a new static build of the site, the Gulp build must be executed first. Gulp will generate from the source directories (`/styles`, `/scripts`, `/images`, and `/fonts`) the production-ready assets in the destination directory (`/assets`). Jekyll will then generate the static HTML builds in the destination directory (`/public`) by copying the `/assets` directory to `/public/assets`. This renders the destination directory (`/public`) as the final static output for the site templates and assets. For this reason the build directories of `/assets` and `/public` are excluded from the source code as they are dynamically generated.

1. Build the Gulp assets: `gulp build` (optionally with `--production` switch for production build)
2. Build the Jekyll templates: `jekyll build` (optionally with `--lsi` switch for production build)

At this point the `/public` directory will have a static build of the source templates. To build a more optimized production use `gulp build --production` and `jekyll build --lsi` instead. The configuration options for the Gulp build are set in `build.json` while the Jekyll configs are in `_config.yml`.


## Developing

After the project dependencies have been met, you can begin development. Development essentially consists of automated re-builds based on changes to the source. This allows for rapid development and helps the developer focus on organizing the source code efficiently as re-usable modules while ensuring that the final production build is still optimized.

1. Start assets watcher: `gulp watch`
2. Start Jekyll server: `jekyll serve --watch`
4. Open application in browser: `http://127.0.0.1:400` (see `_config.yml` for host bindings)
4. Edit your Gulp-built assets found in: `/fonts`, `/styles`, `/scripts`, and `/images`
5. Edit your Jekyll-built templates: `*.html`, `/layouts`, `/blog`
6. Refresh your browser to see changes

> **Pro Tip**: The `/assets` and `/public` are your build folders so *DO NOT* work in them. You can add `/public` and `/assets` to your Sublime Text exclude filters to help reduce your workspace clutter.

The `gulp watch` task will continuously run `gulp build` as you save changes to the watched folders. If you add new assets you may need to restart the `gulp watch` task so that it picks up on the new assets.

The `jekyll serve` command will start a server on the IP address and port configured in `_config.yml`. The `--watch` switch will regenerate the templates as changes are made (including to the Gulp assets) which effectively republishes the `/public` static build. Alternatively you could set up an Apache/Nginx virtual host that points to your `/public` directory. Take note, however, that you will still need to run the Jekyll watcher using `jekyll build --watch` to have the template automatically regenerated and published to `/public`.

### Adding a New Page

There are some page customization features built in to the Jekyll templates. Not all pages will need to take advantage of these customizations and should therefore be removed from the YAML front matter on pages that do not. For pages that do need to use these special customizations, you can use this block of YAML front matter for a complete reference:

```
    ---
    layout:         default
    title:          "Example Page"
    description:    "Description of the example page content."
    keywords:       "example, page, key, word"
    section:        name
    ---
```

- `layout` (required): the template layout that should be used by the page. May be one of `base`, `default`, `post`
- `title` (required): a search engine optimized title that appears in the window title of the page.
- `description`: a search engine optimized description that is used in the meta tags of the page. If no description is provided, the global description will be used (found in `_config.yml`).
- `keywords`: a search engine optimized, comma-separated listed of words that represent the contents of the page. These keywords are used in the meta tags of the page. If no keywords are provided, the global keywords will be used (found in `_config.yml`).
- `section`: a name (file name without the `.html` suffix) of a parent page that this page belongs to (e.g.: `example`, `about`, etc.). This is used primarily by the navigation HTMl in order to properly highlight the active section's menu item.
- `author`: a key that references the unique author object as configured in `/data/authors.yml`. This is primarily used only by the blog posts.
- `image`: a featured image file name that is relative to the `/public/assets/imgs` path. This is primarily used only by the blog posts.
- `category`: a key that references the unique category object as configured in `/data/categories.yml`. This is primarily used only by the blog posts to create a category badge over the featured image.
- `body_class`: a list of CSS class names that will be added to the `body` element's `class` attribute.

## Adding a New Blog Post

Jekyll has built in support for blogging. It is super easy to add a new blog post:

1. Create a new Markdown or HTML file in the `/blogs/_posts` directory. Name it `yyyy-mm-dd-title.ext` where `yyyy-mm-dd` is a date in the such as `2015-01-01`, `title` is the lowercased, hyphenated title of the post such as `example-post`, and the `.ext` is either `.md` for Markdown or `.html` for HTML templates. For example, you would create `2015-01-01-example-post.md` for a post written in Markdown dated January 1, 2015 titled "Example Post".
2. Add the required YAML front matter to the top of your new file so Jekyll knows what to do with it. You can use any custom front matter your template supports (see [Adding a New Page](#adding-a-new-page)) but at least provide the following front matter so Jekyll works right:

```
    ---
    layout:   post
    title:    "Example Post"
    author:   johndoe
    ---
```

3. Write your post! Add all the content you want, fiddle with it, and get everything just right.
4. You can test your work regularly by looking at your posts in your browser. Start up the jekyll test server with `jekyll serve --watch`, and visit the site at [http://127.0.0.1:4000](http://127.0.0.1:4000).
5. When you're ready, stop your Jekyll server with Ctrl-C, commit your changes with `git`, and then `git push origin` so they stay version controlled.


## Deploying

You can think of deployment as the following high-level steps with their associated build commands:

1. Compile down the LESS and JS modules into CSS and JS: `gulp build` (optional `--production` flag for production)
2. Compile down the Jekyll templates into static HTML: `jekyll build` (optiona `--lsi` flag for better related blog posts)
3. Upload built static files and any dynamic scripts (e.g.: `php` files) to remote server.

To make this easier, there is a simple Gulp task defined in `Gulpfile.js` that automates this process. Simply run `gulp deploy:stage` to have the above three steps be automated and then deployed to domain configured as a staging server in `build.json`. Deploying to production uses a nearly identical task `gulp deploy:production --production`. Deploying to stage and to production can be done at the same time using the `gulp launch` task. This task is smarter and runs the `gulp deploy:stage` followed by `gulp deploy:production` tasks in sequence and with the `--production` switch to make both environments identical. The installation steps are required to be performed before executing this command otherwise the Composer, NPM, and Gulp dependencies will not be available for processing and uploading. After running the command, it may be necessary to add any environment specific files to the remote server including `.env`, `.htaccess`, or `.htpasswd` files. You can customize the deployment connection details and even add more remote deployments by editing the `build.json` configuration. It's smart enough to deploy to all deployments just by adding the connection credentials!


## Troubleshooting

- The `gulp watch` process is not without its quirks. In development, it's been observed that fonts and images do not get processed and exported to their respective destination paths. It's recommended that before deployment, a manual `gulp build && jekyll build` is ran to ensure that all of the assets get properly built.
