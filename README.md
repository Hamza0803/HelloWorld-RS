Certainly! Here's the `README.md` content formatted so you can directly copy and paste it into GitHub after clicking the "Add README" button:

---

# HelloWorld-RS

HelloWorld-RS is a simple web application built using React for the frontend, Strapi for the backend, and PostgreSQL as the database. The app allows users to log in, view, and post "Hello World" messages. 

## Features

- **User Authentication**: Secure login and signup functionality.
- **Message Posting**: Authenticated users can create new "Hello World" messages.
- **Message Viewing**: All users, including unauthenticated ones, can view a list of "Hello World" messages.
- **Pagination**: The list of messages is paginated for easy browsing.
- **Responsive Design**: The app is fully responsive, ensuring a great user experience on both desktop and mobile devices.

  
## Screenshots

### Login Page
![Login Page](./Screenshot%20from%202024-08-22%2017-53-43.png)

### Message Wall
![Message Wall](./Screenshot%20from%202024-08-22%2017-53-58.png)

### Create Message Page
![Create Message Page](./Screenshot%20from%202024-08-22%2017-54-16.png)


## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Strapi (Node.js, Koa)
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: (e.g., AWS, Netlify) - [Customize this if you've deployed the app]

## Installation and Setupx

Follow these instructions to set up and run the HelloWorld-RS app locally on your machine.

### Prerequisites

- **Node.js** (v14.x or higher)
- **Yarn** or **npm**
- **PostgreSQL** (v12.x or higher)
- **Strapi CLI**

### Clone the Repository

```bash
git clone https://github.com/your-username/HelloWorld-RS.git
cd HelloWorld-RS
```

### Backend Setup

1. **Navigate to the backend directory:**

    ```bash
    cd backend
    ```

2. **Install dependencies:**

    ```bash
    yarn install
    ```

3. **Configure the database:**

   Edit the `config/database.js` file with your PostgreSQL database credentials:

    ```javascript
    module.exports = ({ env }) => ({
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'bookshelf',
          settings: {
            client: 'postgres',
            host: env('DATABASE_HOST', '127.0.0.1'),
            port: env('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'helloworld_rs'),
            username: env('DATABASE_USERNAME', 'your-username'),
            password: env('DATABASE_PASSWORD', 'your-password'),
          },
          options: {
            ssl: false,
          },
        },
      },
    });
    ```

4. **Start Strapi:**

    ```bash
    yarn develop
    ```

    The Strapi admin panel should now be running at `http://localhost:1337/admin`.

5. **Create a new admin user** in the Strapi admin panel.

6. **Create the necessary content types** (if not already created) using the admin panel for `message`.

### Frontend Setup

1. **Navigate to the frontend directory:**

    ```bash
    cd ../frontend
    ```

2. **Install dependencies:**

    ```bash
    yarn install
    ```

3. **Start the React app:**

    ```bash
    yarn start
    ```

    The app should now be running at `http://localhost:3000`.

### Environment Variables

Make sure to set the following environment variables in your backend's `.env` file:

```plaintext
DATABASE_HOST=127.0.0.1
DATABASE_PORT=5432
DATABASE_NAME=helloworld_rs
DATABASE_USERNAME=your-username
DATABASE_PASSWORD=your-password
JWT_SECRET=your-secret-key
```

## Project Structure

```plaintext
HelloWorld-RS/
├── backend/
│   ├── config/
│   ├── src/
│   ├── .env
│   └── ...
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

For questions or support, please contact [Muhammad Hamza](mhamzaa0803@gmail.com).

---

### Additional Notes:

- Replace the placeholders like `your-username`, `your-password`, `your-secret-key`, and `your-email@example.com` with your actual details.
- Add any additional instructions or configurations specific to your setup or deployment environment if necessary.
