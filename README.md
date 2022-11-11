# Welcome to my personal website repository!

The purpose of this project is to:

1. Create my very own public facing website where I can document my coding experience and personal projects
2. Improve my front-end web development skills
3. Learn [React](https://reactjs.org/)

Please come along with me for the journey!

Until my website is up and running, I will be keeping a record of my progress in this readme file!

---

## November 11, 2022

Today I began the conceptual design phase for my website. I started by reading [this article](https://www.hostinger.com/tutorials/web-developer-portfolio) that showcases many different developers's websites. I am leaning towards developing a more minimal but artisitc website like the websites of [Keita Yamada](https://p5aholic.me/info/) and [Maxime Bonhomme](https://bonhomme.lol/), However, I am not sure how conducive the React framework is to developing a website these (especially Keita Yamada's).

I created a quick whiteboard markup of the main page of my website and what it would contain. At the momemt, I am planning on having my main page contain my name and four links to the pages: about me, what i'm working on now (blog page), projects, contact. I think that I might end up combing the blog page and projects page initially since I don't have many projects to show off. At the moment, my website feels like its going to be pretty static, so many choosing React wasn't the best idea. If I feel like it later, I might convert this website to a static site and come up with another, more dynamic web app idea! In the meantime, however, my next step is to start to develop the basic structure of the website in React!

## November 9, 2022

Today I continued working through the [React tutorial documentation](https://reactjs.org/tutorial/tutorial.html). I learned about basic React components, components props, and how a component tells react what to display via the render method using JSX notation. Next, I learned how to have a react component respond to a click by including <code>onClick = {() => /_ some code _/}</code> I also learned about how to set a component's state by adding a constructor to the class with the form:

```
constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
```

I also learned how to pass state between components, in this case passing state between the board object and the individual squares. I learned about the benefits of using an immutable data structure to maintain the state of the object. Some of the benefits include the fact that:

1. Immutability makes complex features like reverting back to older state much simpler
2. Immutability makes detecting changes easy, just see if the two objects are equal!
3. Immutability allows React (or another framework) to know when to re-render components

Next I learned that you can define a simple React component with just a render function as a function instead of an entire class. Apart from being slightly shorter syntactically, I believe that using this method would likely be more efficient since probably does not result in any of the super methods from the React.Component class being called. _Side note: Remember not to use "this.something" when converting to the function form of a component"_. Next, while implementing the "Time Travel" functionality of the a game, I learned about the need for keys when rendering lists. List item components should have unique keys associated with them to ensure that they are properly maintained/created/destroyed when a render occurs.

## November 8, 2022

I started my work today by aiming to select a framework with which to build my website. I initially thought that I would use a static framework like react-static, as I don't expect my website to require the use of very much dynamic content. However, I decided to use React as I believe that it will be the most useful front-end for me to learn. With that decision made, I began reading the [React tutorial documentation](https://reactjs.org/tutorial/tutorial.html). I created the react app and also configured Cloudflare Pages to automatically build the site whenever the main branch of this repo is updated.
