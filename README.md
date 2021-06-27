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

There are pretty good frameworks and tools to build SPA and SSG (static site generator) like [Gatsby](https://www.gatsbyjs.org/) and [NuxtJS](https://nuxtjs.org/) that highly align with goals I have in my mind. But for some reasons, I find less comfortable using them, like
- I need to learn them to use them. Learning is good but problem solving is even better!
- I have to spend some time on learning few other things like node.js, ReactJS(for Gatsby) or VueJS(for NuxtJS), webpack etc. etc. Not knowing which direction to head currently.
- As a beginner, I have no idea what's going on behind the scene in the library.
- Doing it from scratch allows me to learn about reliability and performance issues, on the lowest level.

After giving it a thought I went with vanilla(pure) HTML, CSS and JavaScript(no jQuery also). Javascript part is the taught me the most. Almost completely written by myself from scratch solving various problems.

But it will accomodate new techs in future.

**_The biggest achievement_** - to design and implement SPA system architecture from scratch which makes this site very good in terms of performance. This is also my first experience in frontend system architecture design.


Read [contributing guidelines](./CONTRIBUTING.md) for internal working