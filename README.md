# Shoplite

# As a result of the backend being hosted on [Render's](https://render.com) free tier, it will take quite a bit before the API responds to initial requests. You may even have to refresh the page to resend requests. Unfortunately, short of paying to upgrade my tier, there is nothing I can do about this.

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li>
      <a href="#features-&-info">Features & Info</a>
    </li>
    <li>
      <a href="#challenges">Challenges</a>
    </li>
    <li>
      <a href="#what-i-would-do-if-i-had-more-time">What I would do if I had more time</a>
    </li>
    <li>
      <a href="#bugs">Bugs</a>
    </li>
  </ol>
</details>

## Getting Started

This project was built with React and Typescript, with SASS for the styling and Redux for state management. To see the site live, see [this link](https://shoplite.onrender.com/). To see the admin site, visit [here](https://shoplite-admin.onrender.com/) and log in with

```
username: admin
password: admin
```

You can find the [api here](https://shoplite-api.onrender.com/api/).

## Features & Info

## Key Features

* Authentication
  * Login [Public]
  * SignUp [Public]
  * Logout [User]
  * Tokens [User]
* User
  * Create New User [Public]
  * Get All Users [Admin]
  * Get User Data Using It's ID [Public]
  * Delete User Using It's ID [Admin]
* Cart Services
  * Add Product To Cart [User]
  * Reduce Product Quantity By One [User]
  * Increase Product Quantity By One [User]
  * Get Cart [User]
  * Delete Cart Item [User]
  * Delete Cart [User]
* Product Services
  * Query products [Public]
  * Query Product Using It's ID [Public]
  * Create new product [Admin]
  * Update Product Details [Admin]
  * Update Product Main Image [Admin]
  * Update Product Images [Admin]
  * Delete Product Using It's ID [Admin]
  * Add Product Color [Admin]
  * Add Product Size [Admin]
  * Delete Product Color [Admin]
  * Delete Product Size [Admin]
* Favorite Services
  * Get Favorite Products List [User]
  * Add Product to Favorite List [User]
  * Remove Product From Favorite List [User]
* Order Services
  * Create New Order [User]
  * Query Orders [User]
  * Query Order Using It's ID [User]
* Category Services
  * Create New Category [User]
  * Query Categories [Public]
  * Query Category Using It's ID [Public]
  * Update Category Details [Admin]
  * Update Category Image [Admin]
  * Delete Category [Admin]

## Challenges

* Working without a clearly defined plan, design system, etc, made this project more of a hassle than it should have been. I'll take some time off to redefine my priorities before tackling this again.
* Handling the JWT with cookies caused some site-breaking error when I deployed this app at first due to Chrome's recent policy on limiting third-party cookies. It took me quite a bit to figure out exactly what I needed to do to fix that.

## What I would do if I had more time

* This app did not need Redux. If I were to do it again, I'd just use react-query to cache the api responses.
* This project definitely could have benefited from having a more coherent design system going in.
* I started building this project without taking the time out to properly plan out its architecture, and it shows. I will need to do a large scale refactor in the future.
* I would use a third party library designed for handling authentication instead of writing my own with JWT.
* The error handling on the app is... not the best. I've learned a lot from since I started this, though, and I'll be fixing that soon.

## Bugs

* If you delete your local storage and refresh the site on page with dynamic user information, it breaks the site. This is due to poor error handling, and I'll take care of this issue in my next refactor.
* The free Render tier is incredibly slow at firing up the api, so pages with dynamic information can remain blank for long stretches of time as it loads. I can "fix" this by adding a loading skeleton, but that's as far as I can go without paying to upgrade the tier.


If you discover any more bugs, feel free to open an issue.
