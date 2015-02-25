staticsite
==========

This is a quickstart template for a static site. You can use this to quickly prototype web applications, build static sites such as AAA-1 or emersonmedia.com, easily develop frontend code, or do all kinds of other things. It contains Emerson Media's standards and best practices and is designed to reduce spin up time for new projects.

Clone and duplicate this repo to get started!

_**Note:** This repo is very much a work in progress. It was first based on the fstrf.org, specrepos, and new emersonmedia.com projects in early 2015. If you learn anything or find things to make our lives easier for projects like this, please contribute them back here for next time._

This source utilizes Jekyll (Ruby) as a static site generator and Gulp (Node.js) for faster and easier development. Jekyll and Node.js are easy to install and use. This source contains only the original assets and a build is required to begin using the static versions.


## Installing

This installation presumes that both Ruby (required by Jekyll) and Node.js (required by Gulp) are installed on the system.

1. Install Jekyll (globally): `gem install jekyll` (may need to `sudo`)
2. Install Gulp (globally): `npm install --global gulp`
3. Install NPM Dependencies: `npm install`

> **Note:** The NPM dependencies are set in `package.json`. Providing the package is CommonJS or AMD compatible, then nothing more than installing the package is required to begin using it. If it is not compatible, then you may need to modify the `browser` and `browserify-shim` properties of `package.json` to prepare it for the Browserify bundler that the build tasks use.


## Building

After the project dependencies have been met, you can generate a static build of the source suitable for production use. This project uses Jekyll to build the production-ready HTML templates while using Gulp to build the production-ready assets (css, js, images, and fonts). Because Jekyll wipes the destination directory (`public/`) when generating a new static build of the site, the Gulp build must be executed first. Gulp will generate from the source directories (`styles/`, `scripts`, `images`, `fonts`) the production-ready assets in the destination directory (`assets/`). Jekyll will then generate the static HTML builds in the destination directory (`public/`) and copy the `assets/` directory to `public/assets/`. This renders the destination directory (`public/`) as the final static output for the site templates and assets. For this reason the build directories of `assets/` and `public/` are excluded from the source code as they are dynamically generated.

1. Build the assets: `gulp build`
2. Build the Jekyll templates: `jekyll build`

At this point the `public/` directory will have a static build of the source templates. To build a more optimized production use `gulp build --production` instead. The configuration options for the Gulp build are set in `build.json` while the Jekyll configs are in `_config.yml`.


## Developing

After the project dependencies have been met, you can begin development. Development essentially consists of automated re-builds based on changes to the source. This allows for rapid development and helps the developer focus on organizing the source code efficiently as re-usable modules while ensuring that the final production build is still optimized.

1. Start assets watcher: `gulp watch`
2. Start Jekyll server: `jekyll serve --watch`
4. Open application in browser: `http://127.0.0.1:400` (see `_config.yml` for host bindings)
4. Edit your Gulp-built assets found in: `fonts/`, `styles/`, `scripts/`, `images/`
5. Edit your Jekyll-built templates: `*.html`, `layouts/`
6. Refresh your browser to see changes

> **Pro Tip**: The `assets/` and `public/` are your build folders so do not work in them. You can add `public/` and `assets/` to your Sublime Text exclude filters to help reduce your workspace clutter.

The `gulp watch` task will continuously run `gulp build` as you save changes to the watched folders. If you add new assets you may need to restart the `gulp watch` task so that it picks up on the new assets.

The `jekyll serve` command will start a server on the IP address and port configured in `_config.yml`. The `--watch` switch will regenerate the templates as changes are made (including to the Gulp assets) which effectively republishes the `public/` static build. Alternatively you could set up an Apache/Nginx virtual host that points to your `public/` directory. Take note, however, that you will still need to run the Jekyll watcher using `jekyll build --watch` to have the template automatically regenerated and published to `public/`.


## Exporting

When the project needs to be distributed for integration into the final Specimen Repository web application, the source code needs to be distributed in a production ready format. While ideally the build process could be utilized in production, architecture restrictions prevent use of certain binaries including `npm` and `jekyll` which make installation in production impossible. For this reason an bundled version of the source code can be distributed or an export of the built source can be prepared:

** Exported Build **

Use this option if `gulp` and `jekyll` binaries are NOT executable in the deployment environment:

1. Build a production version of the static site on the development environment (see [Building](#building))
2. Make an archive (e.g: `archive.zip`) of the `public/` directory
3. Unzip the `archive.zip` to the deployment environment

> **Pro Tip:** `zip -r archive.zip public/*`

** Bundled Source **

Use this option if `gulp` and `jekyll` binaries may be executed on the deployment environment:

1. Install the NPM dependencies on the development environment (see [Installing](#installing))
2. Make an archive (e.g: `archive.zip`) of the source including:

```
|- fonts/
|- images/
|- layouts/
|- node_modules/
|- scripts/
|- styles/
- .editorconfig
- .gitignore
- _config.yml
- build.json
- Gulpfile.js
- readme.md
- *.html
```

3. Unzip the `archive.zip` to the deployment environment
4. Generate a new production build (see [Building](#building)) on the deployment environment

> **Pro Tip:** `zip -r --exclude=".git*" --exclude="public*" --exclude="assets*" archive.zip ./* .gitignore .editorconfig`

## Troubleshooting

- The `gulp watch` process is not without its quirks. In development, it's been observed that fonts and images do not get processed and exported to their respective destination paths. It's recommended that before deployment, a manual `gulp build && jekyll build` is ran to ensure that all of the assets get properly built.
