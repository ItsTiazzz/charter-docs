# Charter Preview Docs

Information on the public preview of Charter, a mod by Arathain about contracts, covenants and regrets,
is quite scarce. Me, ItsTiazzz (Sylvia), and a friend, Val, were set to find out as much about this
mod as possible to be able to help other people in dire need of information about this version
of the mod.

## Accessing
The documentation site can be found at https://tiazzz.me/charter-docs!

To run it locally:
1. Clone the repository;
2. Run `npm install` in the main folder;
3. Run `npm run docs:build` and then `npm run docs:preview`.
4. Check the log output for a link.

When using the latest code, some errors may occur during `build`. You can 
either fix them yourself, grab the code from the 
[releases](https://github.com/ItsTiazzz/charter-docs/releases) (Recommended) or grab a dist from 
[GitHub Actions](https://github.com/ItsTiazzz/charter-docs/actions).

In the end we just recommend using the site 
[published on GitHub Pages](https://tiazzz.me/charter-docs) or from the releases as those
are certified to be the most accurate. The latest master branch might contain WIP pages that
aren't fully done or tested yet

## Contributing
If you just want to point out small things, or add small bits of information
to a page, feel free to just hit us up on Discord, or send an e-mail to
[business+charter@tiazzz.me](mailto:business+charter@tiazzz.me). Discord contact
info can be found on [this page](https://tiazzz.me/charter-docs/introduction/wiki).

Alternatively, if you want to make more major/direct changes to the wiki, also relating to its
internals (such as the CSS and some code stuff), feel free to make a Pull Request.

When making a PR, make sure to clearly explain what changes you made, and why we should merge it
into the wiki.

Make sure to always `build` and `preview` before submitting changes, as some features
may work in `dev`, but will need some specific tailoring for the final dist. Thanks!

## Translating
If you want to translate the wiki into a different language, preferably make a PR
and follow this [VitePress guide](https://vitepress.dev/guide/i18n). If you can't, send us a compressed
archive of just the page contents via Discord or e-mail, and we'll figure out the rest with you, such
as the sidebar and nav.

A few things to remember when translating:
- Do not change the folder structure or file names. While you are free to change the contents
of the pages, you should keep the structure consistent with the English version, as well as 
our custom header anchors.
- Remember that, in case you're PR'ing, you also need to change things in the
`config.mts`, such as the sidebars and navigation.
- Credit yourself!! Add yourself in the entry on the About this wiki page on your
translation telling that you translated it! Translation is the first step in making content online
accessible to people all over the world, and you _definitely_ deserve recognition for helping
us with that step.