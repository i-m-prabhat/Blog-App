# Mini Blog Project

This is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, and Node.js) that allows users to create, publish, and manage blog posts/Article.

## Getting Started

To run the application locally, you'll need to have the following installed:

Node.js <br/>
MongoDB <br/>
<br/>

#### <a href="https://github.com/i-m-prabhat/Blog-App-backend.git">Click here to go >Blog App Backend  Repo</a>

1. Clone this repository: git clone `https://github.com/i-m-prabhat/Blog-App.git` <br/>
2. Install dependencies: `npm install` <br/>
3. Start the server: `npm start` <br/>
4. Start the client: `cd client && npm start` <br/>
5. Open your browser and navigate to `http://localhost:3000` <br/>

## Features

1. User authentication using JWT <br/>
2. Create, edit, and delete blog posts
3. Comment on blog posts
5. Responsive design

## Technologies Used

1. MongoDB
2. Express.js
3. React
4. Node.js
5. JWT
6. Tailwind CSS
7. Axios

## Features and Tools

### Tech Stack

<b>Frontend </b>: React.js, Redux.js, Axios.js, Tailwind CSS <br/>
<b>Backend</b>: Node.js, Express.js, MongoDB

### 1. Login/Signup

User can sign up and log in to the application using their email and password.
Passwords are hashed and salted before storing in the database for security.
User session is stored using JSON Web Tokens (JWT) for authentication and authorization.

### 2. Create Articles

Logged in users can create new articles by providing a title, content, categories, and tags.
Each article is associated with the user who created it and a unique identifier is assigned to it for database management.

### 3. View List of All Articles

Users can view a list of all the articles on the blog Home page.
Articles are displayed with the title, category, tags, and the number of comments.

### 4. Edit/Delete Articles

Users can edit or delete their own articles.
Editing an article updates its title, content, categories, and tags.
Deleting an article also deletes all the comments associated with it.

### 5. Categories, Tags, and Filters

Users can add categories and tags to their articles for better organization and searchability.
The blog page has filter options to display articles by category or tag.
Users can also search for articles using keywords.

### 6. Comments

Users can add comments to articles.
Each comment is associated with the user who posted it and the article it is posted on.
The total number of comments for each article is displayed on the blog page.

### 7. MongoDB Database

MongoDB is used as the backend database to store user information, articles, and comments.
Articles and comments are stored in separate collections, and the user collection is linked to them.
Data is accessed and manipulated using MongoDB's official Node.js driver and Mongoose.js, an Object Data Modeling (ODM) library for MongoDB.

## SnapShots

Home Page
![Screenshot (307)](https://user-images.githubusercontent.com/117756490/233847072-7dd9629e-d953-4747-adc6-7318e779921d.png)

Filter By Category
![Screenshot (308)](https://user-images.githubusercontent.com/117756490/233847073-5fe57fae-4ab3-425b-8df0-795bb45c9a83.png)
![Screenshot (309)](https://user-images.githubusercontent.com/117756490/233847077-9a14b8f0-9681-42e9-a605-81c460990f89.png)

Comment Form
![Screenshot (310)](https://user-images.githubusercontent.com/117756490/233847079-81d065e2-8ae9-4e64-abc2-c12dcd6ca543.png)

User Signup
![Screenshot (312)](https://user-images.githubusercontent.com/117756490/233847083-77599c8c-1d82-4cc5-808e-be6a329812fd.png)

User Login
![Screenshot (311)](https://user-images.githubusercontent.com/117756490/233847081-9f4f44eb-5d10-48bc-b24b-4d4548663756.png)

Create Article
![Screenshot (302)](https://user-images.githubusercontent.com/117756490/233847063-4c68b51b-f57f-46a3-950a-8771f748e66c.png)

Article Dashboard of user
![Screenshot (303)](https://user-images.githubusercontent.com/117756490/233847066-7b774468-9ef4-4f91-a679-7f0afe1f3479.png)

Article Update
![Screenshot (304)](https://user-images.githubusercontent.com/117756490/233847068-9fdb9fbf-7d19-458e-b78d-720788886d10.png)

Article Delete 
![Screenshot (305)](https://user-images.githubusercontent.com/117756490/233847069-9c10bb92-6d30-429b-81c6-4522ea5d778d.png)

Article deleted
![Screenshot (306)](https://user-images.githubusercontent.com/117756490/233847070-25d9c099-9e32-4c88-93c5-5c592df0188c.png)


404 Page Not Found
![Screenshot (313)](https://user-images.githubusercontent.com/117756490/233847084-f3c3d8e9-02ce-400d-ac2d-d3e9fb3fbfa4.png)


Made with 💘 by Prabhat
