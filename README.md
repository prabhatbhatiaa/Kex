<h1 align="center">Kex</h1>
<p align="center">A simple cryptographic API to learn and understand REST API's and essential cyber security concepts</p>

---

## Tech Stack

- Node.js
- Express.js
- Nodemon (development)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/prabhatbhatiaa/Kex.git
cd Kex
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
``` bash
npm start
```

4. For development with Nodemon:
```bash
npm run dev
```

The API will run on:
```bash
http://localhost:3000
```

## API Endpoints
### 1. GET /
Returns a basic message from the Kex API.
```json
{
  "message": "This is the Kex API"
}
```

### 2. GET /api/v1/algorithms
Returns the currently supported cryptographic algorithms.
```json
{
  "hashing": [
    "SHA-256",
    "SHA-512"
  ],
  "encryption": [
    "AES-256-GCM",
    "XOR"
  ],
  "authentication": [
    "HMAC-SHA256"
  ],
  "encoding": [
    "Base64"
  ]
}
```
## Project Structure
```
Kex/
├── server.js
├── package.json
├── package-lock.json
└── .gitignore
```

## Future Plans

- Add hashing endpoints
- Add encryption and decryption
- Add HMAC support
- Add encoding/decoding endpoints
- Add request validation
- Add API documentation

## License
```
This project is open source and available under the MIT License.
```
