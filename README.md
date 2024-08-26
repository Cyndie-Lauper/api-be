## Features
- **RESTful API**: Follows REST architecture for easy integration.
- **Scalable**: Designed to scale horizontally with ease.
- **Secure**: Implements industry-standard security practices.
- **Documentation**: Comprehensive API documentation for developers.

## Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v14.x or higher)
- **npm** (v6.x or higher)
- **MongoDB** (or any other database you're using)

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/Cyndii-Lauper/ApiForge.git
    cd ApiForge
    ```

2. Install dependencies:
    ```bash
    bun install
    ```

3. Create a `.env` file in the root directory and copy the environment variables from env.example to it:
4. After connecting to mongodb, initialize database
   ```bash
    bun run seed
    ```

5. Start the server:
    ```bash
    bun dev
    ```

### Usage
The API is available at `http://localhost:3000`. For full API documentation, visit `http://localhost:3000/api-docs`.

### Example Endpoints
- `GET /api/v1/resource`: Fetch a list of resources.
- `POST /api/v1/resource`: Create a new resource.
- `PATCH /api/v1/resource/:id`: Update an existing resource.
- `DELETE /api/v1/resource/:id`: Delete a resource.

## Project Structure
```
└── 📁..
    └── 📁app
        └── 📁auth
        └── 📁config
        └── 📁databases
        └── 📁middleware
        └── 📁utils
        └── 📁v1
            └── 📁controllers
            └── 📁models
            └── 📁routes
            └── 📁services
    └── 📁docker
    └── .env
    └── package.json
    └── README.md
    └── server.js
    └── swagger.yaml
    └── vercel.json
    └── wait-for-it.sh
```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue to discuss your ideas.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
