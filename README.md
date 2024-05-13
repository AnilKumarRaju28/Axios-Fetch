# Axios-Fetch

## Fetch 
- It is a built in web-api available with in NodeJS environments.
- Fetch API promises to handle asynchronous operations. .then() and .catch() methods to handle responses and errors respectively.
- It returns a response object that should be converted into json.
- Errors need to be handled manually by checking the ok property of the response object or by using response.ok and response.status

## Axios
- It is an external library that someone has written, so to use this we should install and use it in javascript file.
- Similar to Fetch, Axios also uses Promises for handling asynchronous operations, but it provides a simpler and more intuitive syntax compared to Fetch.
- Axios automatically parses JSON responses, simplifying the process of handling responses.
- Axios provides built-in support for handling errors, including HTTP errors and network errors. It simplifies error handling with a dedicated .catch() block.
