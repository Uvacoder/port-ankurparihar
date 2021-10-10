# ankurparihar.github.io
[Ankur's Little Playground](https://ankurparihar.github.io)

### PageSpeed score powered by [readme-pagespeed-insights](https://github.com/ankurparihar/readme-pagespeed-insights)
<p align="center">
	<img align="center" src="./pagespeed.svg" width="800px">
</p>



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

There are pretty good frameworks and tools to build SPA and SSG (static site generator) like [Gatsby](https://www.gatsbyjs.org/) and [NuxtJS](https://nuxtjs.org/) that highly align with goals I have in my mind. But instead of using any framework, I decided to build it from scratch, because
- I don't feel comfortable using something which I don't know how works internally.
- Didn't have much time to spend on learning some framework. Also, learning is good but problem solving is even better!
- Doing it from scratch also allows me to learn about reliability and performance issues, on the lowest level, which is missing most of the time while using a framework, since they take care of it internally.

After giving it a thought I went with vanilla(pure) HTML, CSS and JavaScript(no jQuery). Javascript part is what taught me the most. Almost completely written by myself from scratch solving various problems.

It might accomodate new techs in future.

**_The biggest achievement_** - to design and implement SPA system architecture from scratch which makes this site very good in terms of performance. This is also my first experience in frontend system architecture design.

## Caveats
- Currently its not easy to develop
- No standard procedure or tools used for optimizing and minifying files, its done manually.
- Uses an external library for scrolling, [simplebar](https://github.com/Grsmto/simplebar)
- Repository structure is not good, a proper setup for developing, building and deployment is required.
- Github actions needed for deploying, pagespeed scores is needed.
- CDN to be used for efficient caching and incresing performance.


**Read [contributing guidelines](./CONTRIBUTING.md) for internal working**