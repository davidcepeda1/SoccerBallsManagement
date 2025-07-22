# University Search API

This project is a simple Express-based API that allows users to search for universities based on the country specified in the query parameter.

## Features

- Search for universities by country.
- Returns a list of universities in JSON format.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/university-search-api.git
   ```

2. Navigate to the project directory:

   ```
   cd university-search-api
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Running the API

To start the server, run:

```
npm start
```

The API will be running on `http://localhost:3000`.

### API Endpoints

#### Search Universities

- **Endpoint:** `/search`
- **Method:** GET
- **Query Parameters:**
  - `country`: The name of the country to search for universities.

**Example Request:**

```
GET /search?country=Ecuador
```

**Example Response:**

```json
[
    {
        "name": "University of Ecuador",
        "location": "Quito, Ecuador"
    },
    {
        "name": "National Polytechnic School",
        "location": "Quito, Ecuador"
    }
]
```

### License

This project is licensed under the MIT License. See the LICENSE file for details.