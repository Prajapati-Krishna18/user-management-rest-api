# Node.js User Management API

A RESTful backend API built with Node.js, Express, and MongoDB to manage user data efficiently.

## Tech Stack
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **MongoDB**: Database
- **Mongoose**: ODM for MongoDB
- **dotenv**: Environment variables
- **CORS**: Cross-Origin Resource Sharing

## Features
- **Create User**: Add new users with validation.
- **Read Users**: Retrieve all users or a specific user by ID.
- **Update User**: Full or partial updates supported (PUT/PATCH).
- **Delete User**: Remove users from the database.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/users` | Create a new user |
| GET    | `/users` | Get all users |
| GET    | `/users/:id` | Get a single user by ID |
| PUT    | `/users/:id` | Update full user details |
| PATCH  | `/users/:id` | Update specific user fields |
| DELETE | `/users/:id` | Delete a user |

### Example Request Body
```json
{
  "name": "Krishna",
  "email": "krishna@gmail.com",
  "age": 21,
  "gender": "male"
}
```

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Prajapati-Krishna18/nodejs-user-management-api.git
   cd nodejs-user-management-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

4. **Run the application:**
   - **Production:** `npm start`
   - **Development:** `npm run dev`

## Deployment to Render

To deploy this API to [Render](https://render.com/), follow these steps:

1. **Create a New Web Service:** Connect your GitHub repository.
2. **Configure Build & Start Commands:**
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
3. **Set Environment Variables:**
   - Go to the **Environment** tab in your Render service dashboard.
   - Add the following variables:
     - `MONGO_URI`: Your full MongoDB Atlas connection string (e.g., `mongodb+srv://<username>:<password>@cluster0...`).
     - `PORT`: `10000` (Render's default) or leave blank as the app defaults to `process.env.PORT`.
4. **Deploy:** Click **Create Web Service**.

> [!IMPORTANT]
> Failure to set the `MONGO_URI` in the Render dashboard will cause a connection error during deployment.

## GitHub Push Instructions

```bash
git init
git add .
git commit -m "Initial commit - Node.js User Management API"
git branch -M main
git remote add origin https://github.com/Prajapati-Krishna18/nodejs-user-management-api.git
git push -u origin main
```
