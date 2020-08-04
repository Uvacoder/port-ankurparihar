# ankurparihar.github.io
[Ankur's Little Playground](https://ankurparihar.github.io)

## SPA Architecture
- This webapp runs as a single page application (SPA)
- Constant parts of the page like _toolbar_, _navigation-menu_, _footer_ etc. does not reload between navigations.
- When user tries to navigate away from within the application (i.e. using navigation menu or footer links), the URL is parsed.
- The decision to load page partially or complete reload is based on predefined logic
- For each page of website separate static html files are generated.

### Benefits of being SPA
- Reduce data consumption as only partial data is loaded.
- SEO friendly - separate meta tags for each page
- Fast - less data required between pages
- Serverless - generate static files as well

## Building from scratch - And why?

Although there are pretty good frameworks and tools to build SPA and SSG (static site generator) like [Gatsby](https://www.gatsbyjs.org/) and [NuxtJS](https://nuxtjs.org/) that highly align with goals I have in my mind. But there are few issues I find with using them, like
- You need to learn them to use them. Learning is good but problem solving is even better!
- You have to learn additional things like node.js, ReactJS(for Gatsby) or VueJS(for NuxtJS), webpack etc. etc. No time to spend on those things.
- You have no idea what's going on behind the scene. When you look at generated files, they seems all garbage and makes no sense!
- You can't be assured about its reliability and performance even if widely used and backed by huge community.

So after giving it a thought I went with vanilla(pure) HTML, CSS and JavaScript(no jQuery also). HTML and CSS part is clearly very frustrating. So I use code snippets from around the web for this. Huge thanks to [Vuetify](https://vuetifyjs.com/) and hanime(NSFW Warning!!!), where I mostly look for help. Javascript part was good. Almost completely written by myself from scratch solving various problems.

The biggest achievement for me is to design and implement SPA system architecture from scratch which makes this site very good in terms of performance. This is also my first experience in system architecture design.


Read [contributing guidelines](./CONTRIBUTING.md) for internal working