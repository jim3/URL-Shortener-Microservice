# URL Shortener Microservice

Returns a shortened URL in JSON format when given a valid URL.

## API Usage:

| URL               | Method | Description             |
| ----------------- | ------ | ----------------------- |
| /api/shorturl/new | POST   | Creates a new short URL |

## Example usage:

| URL               | Method | Description                                                                   |
| ----------------- | ------ | ----------------------------------------------------------------------------- |
| /api/shorturl/new | POST   | { "original_url": "https://github.com", "short_url": "/api/shorturl/ld7zya" } |

## Example Output:

| URL                  | Method | Description               |
| -------------------- | ------ | ------------------------- |
| /api/shorturl/ld7zya | GET    | Redirects to original URL |
