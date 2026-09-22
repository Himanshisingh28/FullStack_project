# Fullstack Project — Backend (Product CRUD)

MongoDB + Express backend jisme `Product` resource ka poora CRUD (Create, Read, Update, Delete) implement kiya gaya hai.

## Tech Stack
- Node.js
- Express
- MongoDB (Mongoose)

## Project Structure
```
fullstack_project/
├── models/
│   └── Product.js            # Mongoose schema + model
├── controllers/
│   └── productController.js  # CRUD logic
├── routes/
│   └── productRoutes.js      # API routes
├── index.js                   # Entry point (server + DB connection)
├── package.json
└── .gitignore
```

## Setup

1. Dependencies install karo:
   ```bash
   npm install
   ```

2. MongoDB local mein chal raha ho ya Atlas connection string ho — `index.js` mein `mongoose.connect(...)` update kar lo.

3. Server run karo:
   ```bash
   npm run dev
   ```
   Server chalega `http://localhost:3000` par.

## API Endpoints

| Method | Endpoint                  | Description          |
|--------|----------------------------|-----------------------|
| POST   | `/api/products`            | Naya product banao    |
| GET    | `/api/products`            | Saare products list   |
| GET    | `/api/products/:id`        | Ek product fetch karo  |
| PUT    | `/api/products/:id`        | Product update karo   |
| DELETE | `/api/products/:id`        | Product delete karo   |

### Example request body (POST / PUT)
```json
{
  "name": "Wireless Mouse",
  "description": "Ergonomic mouse",
  "price": 19.99,
  "stock": 100
}
```

## Testing
API test karne ke liye **Thunder Client** (VS Code extension) ya **Postman** use karo.

## Notes
- `.env` file banake secrets (jaise `MONGO_URI`) usme rakho, code mein hardcode mat karo.
- `node_modules` aur `.env` `.gitignore` mein hone chahiye — kabhi commit mat karo.

## Next Steps
- React frontend banake `fetch`/`axios` se in APIs ko connect karna
- `cors` package add karna taaki frontend alag port se backend ko call kar sake
- Input validation add karna (jaise `express-validator`)