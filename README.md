# Node.js User Management API

A production-ready RESTful backend API built with Node.js, Express, and MongoDB to manage user data efficiently.

## Features
- **Full CRUD operations**: Create, Read (all/single), Update (full/partial), and Delete.
- **Advanced Querying**: Built-in support for Pagination, Filtering, and Sorting.
- **Global Error Handling**: Centralized error responses for consistent API behavior.
- **Security**: Implements `helmet` for secure HTTP headers.
- **Logging**: Integrated `morgan` for HTTP request logging.
- **CORS Support**: Cross-Origin Resource Sharing enabled.

## Tech Stack
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **MongoDB**: Database
- **Mongoose**: ODM for MongoDB
- **Helmet**: Security enhancement
- **Morgan**: HTTP request logger
- **dotenv**: Environment variable management

## API Endpoints

### 1. User Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/users` | Create a new user |
| GET    | `/users` | Get all users (supports pagination, filter, search) |
| GET    | `/users/:id` | Get a single user by ID |
| PUT    | `/users/:id` | Update full user details |
| PATCH  | `/users/:id` | Update specific user fields |
| DELETE | `/users/:id` | Delete a user |

#### Advanced GET Parameters:
- **Search**: `?search=krishna` (Searches in name and email)
- **Filtering**: `?gender=male&age[gte]=20`
- **Sorting**: `?sort=name` or `?sort=-createdAt` (prefix with `-` for descending)
- **Pagination**: `?page=1&limit=5`

### 2. General / Health Check
- `GET /`: Health check and basic API info.

## Example Request Body (POST/PUT/PATCH)
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
   NODE_ENV=development
   ```

4. **Run the application:**
   - **Production:** `npm start`
   - **Development:** `npm run dev`

## Deployment

To deploy this API to [Render](https://render.com/):

1. **Create a New Web Service:** Connect your GitHub repository.
2. **Configure Build & Start Commands:**
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
3. **Set Environment Variables:**
   - `MONGO_URI`: Your MongoDB Atlas connection string.
   - `NODE_ENV`: `production`
   - `PORT`: `10000` (Render default).

