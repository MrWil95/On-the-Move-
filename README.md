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

- _Lorem ipsum, dolor sit amet,_
- _consectetur adipiscing elit._
- _Phasellus dapibus fermentum risus vitae bibendum._
- _Integer vel ipsum mollis odio sollicitudin ornare eu vel ex._
- _etc._

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
| React Router Dom | _Lorem ipsum dolor sit amet, consectetur._ |
| React SemanticUI | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Icons    | _Lorem ipsum dolor sit amet, consectetur._ |
|      Rails       | _Lorem ipsum dolor sit amet, consectetur._ |
|  JSON Web Token  | _Lorem ipsum dolor sit amet, consectetur._ |
|      Cors        | _Lorem ipsum dolor sit amet, consectetur._ |
|Styled Components | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

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

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

[Component Tree Sample](https://gist.git.generalassemb.ly/davidtwhitlatch/414107e2560ae0bb65e233570f2fe056#file-component-tree-png)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Footer/
        |__ Footer.css
        |__ Footer.jsx
      |__ Form/
        |__ Form.css
        |__ Form.jsx
      |__ Layout
        |__ Layout.css 
        |__ Layout.jsx
      |__ Nav/
        |__ Nav.jsx
        |__ NavBar.jsx
        |__ NavBurger.jsx
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
      |__ Events/
        |__ Events.css
        |__ Events.jsx
      |__ Posts/
        |__ Posts.css
        |__ Posts.jsx
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

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

[ERD Sample](https://drive.google.com/file/d/1kLyQTZqfcA4jjKWQexfEkG2UspyclK8Q/view)
<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
