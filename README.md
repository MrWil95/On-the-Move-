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

|     Library       | Description                                                                                                               |
| :--------------:  | :-----------------------------------------                                                                                |
| React             | _Open-source JS library for building user interfaces_                                                                     |
| React Icons       | _Used to import icons for visual effect_                                                                                  |
| React Router      | _A standard library for routing in React_                                                                                 |
| React Router Dom  | _Enables you to implement dynamic routing in a web app_                                                                   |
| Axios             | _A promise-based HTTP Client for node.js and the browser, makes it easy to send asynchronous HTTP request_                |
| Styled Components | _A react library that allows you to write css in JavaScript files_                                                        |
| Rails             | _A ruby library used to build out the backend of an app_                                                                  |
| JSON Web Token    | _A secure way to transmit user info as a JSON object_                                                                     |
| Cors              | _Allows a server to indicate any origins (domain, scheme, or port), other than its own from which a browser should permit loading resources_                                                                                                                              |  
| Bcrypt            | _Bcrypt is a password-hashing function used for encryption_                                                               |
| Faker             | _Faker is a dependency used to create fake data in the backend_                                                           |
| Cloudinary        | _Cloudinary is a resource that will let the user easily uppload images to the cloud without the need for a url_           |

<br>

### Client (Front End)

#### [Wireframes](https://www.figma.com/file/EFZLYWVqB2ND5vHqfwpUQh/On-the-Move?node-id=0%3A1)

<br>Home Page</br>

![Home](url)

<br>Resources</br>

![Resources](url)

<br>Events</br>

![Events](url)

<br>SignIn/Up</br>

![SignIn](url)
![SignUp](url)

<br>About</br>

![About](url)

<br>SignedIn Pages</br>

![SignedIn Home](url)
![SignedIn Resources](url)
![SignedIn Events](url)


#### [Component Tree](https://whimsical.com/on-the-move-FDTEBNx8Kj4xQKEUTubwtu)

![Whimsical](https://res.cloudinary.com/dedlhqhuk/image/upload/v1635830379/On%20the%20Move/2021-11-02_vwgtfl.png)

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
      |__ PostsDelete/
        |__ PostsDelete.css
        |__ PostsDelete.jsx
      |__ SignIn/
        |__ SignIn.css
        |__ SignIn.jsx
      |__ SignUp/
        |__ SignUp.css
        |__ SignUp.jsx
      |__ Users/
        |__ Users.css
        |__ Users.jsx
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
      |__ SignIn/Up
        |__ SignIn/Up.css
        |__ SignIn/Up.jsx
|__ services/
      |__apiConfigs.js
      |__auth.js
      |__posts.js
      |__comments.js
      |__categories.js

```

#### Time Estimates

| Task                 | Priority | Estimated Time | Time Invested  | Actual Time |
| -------------------  | :------: | :------------: | :-----------:  | :---------: |
| rails new            |    H     |     .25 hrs    |        hrs     |     TBD     |   
| rails db:create      |    H     |     .25 hrs    |        hrs     |     TBD     |
| set up scaffold      |    H     |       1 hr     |        hrs     |     TBD     |
| set up backend auth  |    M     |       2 hrs    |        hrs     |     TBD     |
| backend routes       |    H     |       2 hrs    |        hrs     |     TBD     |
| create-react-app     |    H     |     .25 hrs    |        hrs     |     TBD     |
| frontend auth        |    M     |       2 hrs    |        hrs     |     TBD     |
| frontend routes      |    H     |       2 hrs    |        hrs     |     TBD     |
| append page data     |    H     |       4 hrs    |        hrs     |     TBD     |
| basic styling        |    H     |       7 hrs    |        hrs     |     TBD     |
| responsive styling   |    H     |     3.5 hrs    |        hrs     |     TBD     |
| animation            |    L     |     3.5 hrs    |        hrs     |     TBD     |
| create sections      |    L     |       2 hrs    |        hrs     |     TBD     |
| sub comments         |    L     |       2 hrs    |        hrs     |     TBD     |
| edit user's comments |    L     |       2 hrs    |        hrs     |     TBD     |
| favorite posts       |    L     |       3 hrs    |        hrs     |     TBD     |
| favorite comments    |    L     |       3 hrs    |        hrs     |     TBD     |
| flag comments/posts  |    L     |       3 hrs    |        hrs     |     TBD     |
| Hide user's posts    |    L     |       3 hrs    |        hrs     |     TBD     |
| Clean code           |    H     |       5 hrs    |        hrs     |     TBD     |
| Debugging            |    H     |       8 hrs    |        hrs     |     TBD     |
| TOTAL                |          |   56.75 hrs    |        hrs     |     TBD     |

<br>

### Server (Back End)

#### [ERD Model](https://drive.google.com/file/d/1b9VxoX8n9pMDqEhFOw3rTuJcxzhGAFY2/view?usp=sharing)

![ERD](https://res.cloudinary.com/dedlhqhuk/image/upload/v1635835249/On%20the%20Move/2021-11-02_4_ccf1ny.png)
<br>

***

## Post-MVP
 
- Sub Comments
- Edit user's comments
- Impliment sections within each section(Home(general posts), Resources, Events) to check specific areas
- User's profile
- Favorite posts/comments
- Allow user to flag comments & posts
- Hide other user's posts

***

## Code Showcase

```

```

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
