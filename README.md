# Covalence Final Exam

#### Full Stack Assessment

#### TypeScript, React, Express, MySQL

#### 4 Hours

## Objective

Your objective is to build a full-stack web project that interacts with a database of books. You'll need to create the schema, a REST API that can receive requests and respond appropriately, and a React front-end that can display information from your API.

## Final Exam Setup

### Database

The schema will be provided for you, but it will be _very_ beneficial to accustom yourself to the schema structure, table columns, and some of the data. So run some select statements or some describe table statements to familiarize yourself with the structure for this exam database. You can copy/paste the next section's SQL into your workbench to make the schema for the final exam. You can also create the use you will use for your `mysql.createPool()` connection.

#### Database Schema SQL

```sql
CREATE SCHEMA bookstore_final;
USE bookstore_final;

CREATE TABLE users (
    id INT AUTO_INCREMENT,
    name VARCHAR(60) NOT NULL,
    email VARCHAR(60) NOT NULL UNIQUE,
    password VARCHAR(60) NOT NULL,
    _created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE categories (
  id INT AUTO_INCREMENT,
  name varchar(20) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE books (
  id INT AUTO_INCREMENT,
  categoryid INT NOT NULL,
  title VARCHAR(100) NOT NULL,
  author VARCHAR(100) NOT NULL,
  price DECIMAL(5,2) NOT NULL DEFAULT '0.00',
  _created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (categoryid) REFERENCES categories (id)
);

INSERT INTO categories VALUES (1,'Science Fiction'),(2,'Fantasy'),(3,'Political Fiction'),(4,'Thriller'),(5,'Mystery');
INSERT INTO books VALUES (2,2,'The Hobbit','J.R.R. Tolkien',9.99,'2019-02-26 13:06:09'),(3,3,'1984','George Orwell',7.49,'2019-02-26 13:08:52'),(4,4,'The Outsider','Stephen King',20.63,'2019-02-26 13:11:07'),(5,5,'The Adventures of Sherlock Holmes','Sin Arthur Conan Doyle',8.99,'2019-02-26 13:12:33'),(11,1,'The Martian','Andy Weir',12.99,'2019-02-27 13:28:04');
```

### Project Setup

You will use the [barebones-react-typescript-express](https://github.com/covalence-io/barebones-react-typescript-express) starter template as your starting point. You're allowed to copy over a few files/folders as well!

**Note** You can use your server/front-end utilities and middleware for this project, so migrate those files via copy/paste for this exam. Comment the code inside of them out so they don't throw any errors until you start needing them.

-   client
    -   `utils/*`
-   server
    -   `utils/*`
    -   `middlewares/*`

#### Installing Modules

Go ahead and run a `npm install` and then a `npm run dev` to make sure it runs clean upon the initial clone. If you get a clean webpack output, go ahead and stop the server. You are allowed to install whatever modules you think you will need to complete this final exam. Here are some of the needed modules that are recommended:

```bash
npm i react-router @types/react-router react-router-dom @types/react-router-dom passport @types/passport passport-local @types/passport-local passport-jwt @types/passport-jwt jsonwebtoken @types/jsonwebtoken bcrypt @types/bcrypt mysql @types/mysql
```

Feel free to test another `npm run dev` after these installations to make sure everything is working clean.

If everything seems fine then you're ready to go ahead and push this to GitHub as your starting point. (note Stacey+Adam: DM me with your URL!)

### Exam Requirements

#### Server

##### REST API

You'll need to connect your schema to your Node project, and have API routes that respond with the typical CRUD operations for books and getting categories. You'll use auth routes for login and registering users.

##### API Route Behaviors

* Categories
	* Support getting all categories, and getting a single category by id
* Books
	* Support getting all books, creating a new book, and getting, updating, and deleting a single book
	* Follow RESTful principles when defining routes for the above behaviors
* Login
	* Allow a user to login with email and password, and create a token upon login
* Register
	* Allow a user to register themselves in your schema and receive a token upon successful registration

*Advice:* As you write each route make sure it responds correctly in Postman!  Otherwise you may be left scratching your head later. 😉

#### Client

Create an React site in the client folder of your project
* Use routing
* Use your utility/fetch to interact with your API
* Use localStorage to handle front-end auth

##### Views/Routes
* /
	* Show a page welcoming the user to your book store
	* Have a link to your book listing
	* Have a link to login/register views
* /login
	* Show a page with input fields for email and password to login an existing user.  It should send the user back to the list view upon success.
* /register
	* Show a page with input fields for name, email, and password to register a user new user.  It should send the user back to the list view upon success. 
* /books
	* Show a page listing the books you have available. The listing should include the title, author, price (formatted as currency), and category name for each book.
	* Each item in the listing should have a link to the single view
* /books/new
	* Show a page with input fields for title, author, and price. You will also need to have a select (drop-down) box that shows all categories in the system, allowing the book to be assigned a category. The database will not allow a book to be created without a category.
	* Saving the new book successfully should send the user back to the list view.
	* Should require user to be logged in
* /books/:id/update
	* Show a page with input fields prepopulated with the specified book data. The page should include input fields for title, author, and price. You will also need to have a select (drop-down) box that shows all categories in the system, allowing the book to be assigned to a different category.
	* Saving the updated book successfully should send the user back to either the single view or the list view (your choice).
	* Should require user to be logged in.
* /books/:id
	* Show a page that displays information for just the indicated book. The page should include the title, author, price (formatted as currency), and category name for the book.
	* Should also contain Edit and Delete buttons/icons
	* Clicking the delete button should delete the book and send them to the book list
	* Clicking the edit button should send the user to the edit book component

##### Submission Instructions

You need to commit about every 30 minutes during the exam, set your phone or a computer widget to remind you. When you are finished, make sure you have PUSHed to github. You will not be able to push to the repository once the assessment is finished. 