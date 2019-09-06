---
title: My First Post
date: 2019-09-04T00:00:00-05:00
excerpt: How thinking that “an object shouldn’t be able to save itself” exposes a
  fundamental misunderstanding of OOP, and how you should think instead.

---
Over the last several years, the way I write CSS has transitioned from a very "semantic" approach to something much more like what is often called "functional CSS."

Writing CSS this way can evoke [a pretty visceral reaction](https://twitter.com/mezzoblue/status/794419442272714752) from a lot of developers, so I'd like to explain how I got to this point and share some of the lessons and insights I've picked up along the way.

## Phase 1: "Semantic" CSS

One of the best practices you'll hear about when you're trying to learn how to CSS good is "separation of concerns."

The idea is that your HTML should only contain information about your _content_, and all of your styling decisions should be made in your CSS.

Take a look at this HTML:

``` html
<p class="text-center">
    Hello there!
</p>
```