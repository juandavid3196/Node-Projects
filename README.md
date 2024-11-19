# Node-Projects

## 1. Task Manager API
A RESTful API designed to perform CRUD (Create, Read, Update, Delete) operations on tasks, users, and projects. This project is ideal for efficiently managing tasks and provides endpoints for creating, reading, updating, and deleting tasks, users, and projects.s.

### Project Features

#### Task, Project and User Management
* Create new tasks, users and proyects with attributes like title, description, and status, email, password and more.
* Retrieve a list of all tasks, users or projects or a specific element.
* Update existing elements.
* Delete elements.
  
#### Database Integration
* Utilizes MongoDB for persistent data storage.

#### Modular Architecture
* The codebase is organized into controllers, routes, models, and configuration files for better scalability and maintainability.

#### Data Validation
* Leverages Mongoose for data validation before saving to the database.

#### Schema Integration
*Connects multiple schemas by ID to establish relationships within the database.

### Libraries used

* **Express** Framework to handle routes and HTTP requests.
* **Mongoose** ORM to interact with MongoDB in a structured and efficient manner
<br>

<img src="https://github.com/user-attachments/assets/448fecb0-02dc-4aa2-87d2-d706427d4509" alt="diagram-export-19-11-2024-11_17_29" width="500" />
<br><br>

## 2. Real-Time Chat Server

A real-time chat application built using WebSockets, enabling multiple users to connect and communicate dynamically. The project supports creating chat rooms, storing messages, and handling user interactions effectively.

### Porject Features

#### Real-Time Communication
* Facilitates real-time messaging between users using WebSockets.
  
#### Dynamic Chat Rooms
* Users can join or create chat rooms dynamically.
  
#### Message Logging
* Stores messages either in a local file or a database for record-keeping.

#### Scalability
* Designed to support multiple concurrent users.

### Libraries used

* **Express** Framework to handle routes and HTTP requests.
* **http**  module to create HTTP servers for handling web requests and responses..
* **ws** Enabling real-time, bidirectional communication between clients and servers.
<br>
<img src="https://github.com/user-attachments/assets/1c4e2043-54a3-4e7b-b0a0-ffc9b21f2a93" alt="diagram-export-19-11-2024-14_14_37" width="500" />
<br><br>

## 3. Basic Authentication and Authorization

A secure application to manage user registration, login, and role-based authorization. This project demonstrates the implementation of user authentication using hashed passwords and the protection of specific routes based on user roles.

### Porject Features

#### User Registration and Login
* Allows users to sign up and log in securely with validation..
  
#### Password Hashing
* Ensures password security using the bcrypt library.
  
#### Role-Based Authorization
* Protects routes and resources by assigning roles to users.

#### Secure Token Management
* Uses JSON Web Tokens (JWT) for session management.

### Libraries used

* **Express** Framework to handle routes and HTTP requests.
* **bcrypt** Password hashing for secure storage.
* **jsonwebtoken** JSON Web Tokens (JWT) for session management.
* **sequelize** ORM for managing database interactions.
* **sqlite** Providing fast, lightweight, and serverless database functionality.
<br>
<img src="https://github.com/user-attachments/assets/259e7756-7738-49d0-a1e5-c08551e0da6f" alt="diagram-export-19-11-2024-13_43_41" width="500" />
<br><br>

## 4. PDF Report Generator

A system that dynamically generates personalized PDF reports based on user-inputted data. The project leverages tools for PDF creation and supports downloading the generated reports directly from the API.

### Porject Features

#### Dynamic PDF Generation
* Customizable content based on user inputs.
  
#### API Integration
* Users can request report generation via RESTful API endpoints.
  
#### Downloadable Reports
* Provides the option to download reports directly through the API.
  
#### Test Data for Prototyping
* Includes sample data for quick testing.

### Libraries used

* **Express** Framework to handle routes and HTTP requests.
* **pdfkit** 	Tool for generating PDFs dynamically.
* **body-parser** Middleware for parsing JSON request payloads.
<br>
<img src="https://github.com/user-attachments/assets/29346d2b-3c06-46e9-a57b-42725f0b6fee" alt="diagram-export-19-11-2024-13_57_29" width="500" />
<br><br>










