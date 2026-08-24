<h1 align="center">Kex</h1>
<p align="center">A simple cryptographic RESTful API that provides powerful hashing and encryption through simple endpoints</p>

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

### 3. POST /api/v1/hash/sha256
Sends a text and returns the algorithm type and encrypted SHA-256 hash

- Input
```json
{
    "text: Hello World"
}
```
- Output
```json
{
    "algorithm": "SHA-256",
    "hash": "a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e"
}
```

### 4. POST /api/v1/hash/sha512
Sends a text and returns the algorithm type and encrypted SHA-512 hash

- Input
```json
{
    "text: Hello World"
}
```
- Output
```json
{
    "algorithm": "SHA-512",
    "hash": "2c74fd17edafd80e8447b0d46741ee243b7eb74dd2149a0ab1b9246fb30382f27e853d8585719e0e67cbda0daa8f516710
    64615d645ae27acb15bfb1447f459b"
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
