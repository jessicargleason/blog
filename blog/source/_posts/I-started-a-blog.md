---
title: I Started a Blog!
date: 2020-11-29 15:00:12
tags:
    - experience
    - hexo
    - technical
---

I started a blog and you are here. When you start a blog, you have to write a blog post about how you started your blog—I don’t make the rules.

## Why?

The blog is an accessory to my [portfolio](https://www.jessicagleason.com) that just got a minor redesign. The portfolio’s got a summary of some things I’ve done at work, some things I’ve done in my spare time that are similar to the types of things I do at work, and also some summarizing of skills I use at work—mostly the technical kind, like what kind of languages I write code in and what kinds of tools I use to write code better. 

The thing is, I don’t spend every hour of my work life literally writing code. I discuss requirements and provide estimates and help write user stories and review pull requests and write documentation and reproduce bugs and so on and so forth. I don’t know where in my portfolio I get to talk about that sort of stuff, even though I feel like some of those parts are at least as important as any code I’ve written. And even when it comes to the code itself I have some things to share. I hope some of it is useful to other people. So, I decided it was time to get blogging.

It’s important to me that the blog be here—living on my website, and not a part of something like Medium. I like that there aren’t any comments (though you’re welcome to tell me what you think about something I’ve written if we chat somewhere else online or in person!). Quiet, interaction-free corners of the web seem to be a rarity these days and I’m trying to create more of them for myself. 

## What’s it built with?

It seemed obvious to me that I should introduce a static site generator for a few reasons: 

* security, because I already know myself and my tendency to neglect the portfolio so the less I have to keep an eye on it, the better
* performance, because I’m a web developer and want to make a good impression, besides obviously wanting to provide a good user experience
* simplicity, because this site will really only end up being a handful of pages with text on them and anything with a database seems like overkill
* my own education, because I have limited experience with static sites (I know I did some work on a Jekyll site for BarCamp Milwaukee many years ago, and used Metalsmith a couple times at a previous job) and I really want to learn more

I first went to [Gatsby](https://www.gatsbyjs.com/), since I hear so much about it and it seems to be a favorite of agencies building static sites for clients, so it could come up in my professional life someday. I was really impressed with their documentation, but at the same time, I started to sweat a little bit. I have to find time and energy to work on my portfolio on top of working full time and alongside whatever else is going on in my life (such as the stress of a pandemic) so I have to be careful not to bite off more than I can chew. I’m trying to learn React in my free time already, and while Gatsby would allow me to practice React and working with static site generators at the same time, that’s also a lot to juggle all at once.

This brought me to [Jamstack.org’s list of Static Site Generators](https://jamstack.org/generators/). I looked at a few and while not the most popular on the list, I was curious about [Hexo](https://hexo.io/),  which is written in JavaScript and presents itself specifically as a blog framework. Its documentation is full of reassurances that it’s “quite easy” which I was a little wary of. I feel conflicted about that kind of language in documentation in general—it does imply certain priorities the project has, like getting users up and running quickly, probably keeping the scope of features limited, etc. and I’m sure it doesn’t usually intend to be condescending. But, inevitably, for some people, it won’t be easy. And, indeed, while I figured out Hexo in an evening, that evening involved some frustrated Googling to work through errors and understand things the documentation didn’t necessarily spell out. Then when it came to actually customizing instead of just throwing posts into the default theme (and, the documentation reassures me, “it’s easy to build a Hexo theme,”) I struggled a bit, feeling like the documentation often missed the forest for the trees.

Once I got the blog up and running, I folded my portfolio page into it—which right now means I basically took over the “page” template of my Hexo blog. This is probably not the right way to go about it, but since I don’t have any current intention to add additional pages, I think that’s a bit of technical debt I can live with for now. The process of creating new posts by dropping in new files with markdown in them and re-generating the site is just as quick and simple as I wanted it to be.

Now that my portfolio is more than just a page, it seemed like about time I figure out some way of managing its deployment that is a little more modern and sophisticated than dragging files over FTP, which is how I was still interacting with this shared hosting I’ve had forever. Luckily, a tweet pointed me to just what I needed (and could reasonably tackle in my free time), an article by Jess Rezac: [Continuous Deployment of a Gatsby site to cPanel with Git Version Control](https://dev.to/cheerupemodev/continuous-deployment-of-a-gatsby-site-to-cpanel-with-git-version-control-5ha2). Even though I wasn’t using Gatsby, the concepts applied just as well to my Hexo site, and everything came together on the first try. 

So here we are! Now that the blog is up and running, I will probably turn my attention to some other side projects, but future plans mostly include:

* cleaning up the Hexo theme, as I used the default theme as a jumping off point and there are some things in there that I’m not using and could probably remove, not to mention a revisiting of the things I changed as I gain a better understanding of how the theme should be organized
* adding more details to my portfolio design to give more depth (pun intended) to my ocean theme
* create a post type for my portfolio projects and manage their listing that way

You can check out the [source code for the portfolio and blog on my GitHub](https://github.com/jessicargleason/blog). 