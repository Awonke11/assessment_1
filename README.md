# 🧹 Chores Application 🧺

The **Chores Application** is a full-stack web application that allows users to manage their chores. Whether you're a meticulous organizer or a last-minute task-tackler, this app has you covered! 🌟

## Features ✨

- **Query Chores**: Retrieve a list of all chores from the SQL database. 📋
- **Add Chore**: Add a new chore to the database. 🆕
- **Remove Chore**: Delete a chore by its ID. 🗑️

## Tech Stack 🛠️

### Frontend 🎨

- **HTML**: Provides the structure for the user interface.
- **CSS**: Styles the application for a visually appealing experience.
- **JavaScript**: Adds interactivity and dynamic behavior to the frontend.

### Backend 🚀

1. **Node.js (Port 8000) 🌐**:
   - **Dependencies**:
     - `mysql2`: A MySQL client for Node.js.
     - `dotenv`: Loads environment variables from a `.env` file.
     - `nodemon`: Automatically restarts the server during development.
   - **Database**: MySQL 🗄️

2. **Spring Boot (Port 8080) 🌱**:
   - **Dependencies**:
     - Spring Boot Starter Pack with MongoDB (Version 3.0.6)
   - **Database**: MongoDB 🍃

## Endpoints 🚪

1. **Node.js Endpoints**:
   - `/`: Query all chores.
   - `/add`: Add a new chore.
   - `/remove/:id`: Remove a chore by its ID.

2. **Spring Boot Endpoints**:
   - `/`: Query all chores.
   - `/add`: Add a new chore.
   - `/remove/:id`: Remove a chore by its ID.

## Getting Started 🚀

1. Clone the repository.
2. Set up your database (MySQL for Node.js, MongoDB for Spring Boot).
3. Install dependencies (`npm install` for Node.js, Spring Boot dependencies for MongoDB).
4. Configure environment variables (e.g., database credentials) using `.env` files.
5. Run the application:
   - For Node.js: `npm start` 🏃
   - For Spring Boot: `./mvnw spring-boot:run` 🏃‍♂️

## Contributing 🤝

Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md).

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 📄

![16 Best Cities in Spain - Beautiful Places to Visit | The Planet D] ![5 of the Best Cities in Spain to Visit for the Ultimate Experience] ![The Most Popular Cities to Visit in Spain] ![16 Best Cities in Spain - Beautiful Places to Visit | The Planet D] ![The Most Popular Cities to Visit in Spain] ![10 Best Places to Visit in Spain - #TravelWorld]

Now, go conquer those chores! 🎉🧼🧹
