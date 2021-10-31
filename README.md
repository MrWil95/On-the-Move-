<h1 align="center"><strong>On the Move</strong></h1>

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**On the Move** is a blog app for all those people out there who love to, or have to, move around a lot. This app will provide resources, added for the users by the users, that will make moving to and from their desired location(s) easier. Some resources include finding the best deals on moving material/equipment in the current area, finding companies that can help them with the move if needed, getting to know the area through posts from locals, and learning about events that might not always show up through a Google search. Users can create an account, add posts, edit or delete their own posts, and comment on other posts.


<br>

## MVP

The **On the Move** MVP will consist of full CRUD implementation through the ability to create a user account, create readable posts within the blog, and allowing the user to update or delete their posts.

<br>

### Goals

- _Complete full CRUD on the backend_
- _Complete full CRUD on the fontend_
- _User comments on posts_
- _Beautifully styled and responsive site with vanilla CSS & Styled Components_
- _User authentication_
- _Multiple routes/screens to send posts to(similar to Reddit)_
- _Allow only the user to edit or delete his/her posts_
- _Allow user & post owner to delete comments on posts(user can only delete his/her comments)_

<br>

### Libraries and Dependencies

|     Library       | Description                                                               |
| :--------------:  | :-----------------------------------------                                |
|      React        | _Open-source JS library for building user interfaces_                     |
|   React Icons     | _Used to import icons for visual effect_                                  |
|   React Router    | _A standard library for routing in React_                                 |
| React Router Dom  | _Enables you to implement dynamic routing in a web app_                   |
|      Axios        | _A promise-based HTTP Client for node.js and the browser,_                |
|                     _makes it easy to send asynchronous HTTP request_                         |
| Styled Components | _A react library that allows you to write css in JavaScript files_        |
|      Rails        | _A ruby library used to build out the backend of an app_                  |
|  JSON Web Token   | _A secure way to transmit user info as a JSON object_                     |
|      Cors         | _Allows a server to indicate any origins (domain, scheme, or port),_      |  
|                     _other than its own from which a browser should permit loading resources_ |           |                                                                                               |


<br>

### Client (Front End)

#### Wireframes

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

[Component Tree Sample](https://gist.git.generalassemb.ly/davidtwhitlatch/414107e2560ae0bb65e233570f2fe056#file-component-tree-png)

#### Component Architecture

``` structure

src/
|__ components/
      |__Comments/
        |__Comments.jsx
      |__ Footer/
        |__ Footer.css
        |__ Footer.jsx
      |__ Form/
        |__ Form.css
        |__ Form.jsx
      |__ Layout/
        |__ Layout.css 
        |__ Layout.jsx
      |__ Nav/
        |__ Nav.jsx
        |__ NavBar.jsx
        |__ NavBurger.jsx
      |__Posts/
        |__Posts.jsx
      |__ PostsDelete/
        |__ PostsDelete.css
        |__ PostsDelete.jsx
      |__ Users/
        |__ Users.css
        |__ Users.jsx
|__ containers/
      |__ CommentsContainer.jsx
      |__ PostsContainer.jsx
      |__ UsersContainer.jsx
|__ screens/
      |__ About/
        |__ About.css
        |__ About.jsx
      |__ Events/
        |__ Events.css
        |__ Events.jsx
      |__ Home/
        |__ Home.css
        |__ Home.jsx
      |__ PostsCreate/
        |__ PostsCreate.css
        |__ PostsCreate.jsx
      |__ PostsEdit/
        |__ PostsEdit.css
        |__ PostsEdit.jsx
      |__ Resources/
        |__ Resources.css
        |__ Resources.jsx
      |__ SignIn/
        |__ SignIn.css
        |__ SignIn.jsx
      |__ SignUp/
        |__ SignUp.css
        |__ SignUp.jsx
|__ services/
      |__apiConfigs.js
      |__posts.js
      |__comments.js

```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

[ERD Sample](https://drive.google.com/file/d/1kLyQTZqfcA4jjKWQexfEkG2UspyclK8Q/view)
<br>

***

## Post-MVP

- Stop user from editing comments not belonging to them on their posts and other's posts 
- Allow user to edit/delete their comment on other's post(s)
- Impliment sections within each section(Home(general posts), Resources, Events) to check specific areas
- Allow user to flag any comment on their post

***

## Code Showcase

```

```

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
