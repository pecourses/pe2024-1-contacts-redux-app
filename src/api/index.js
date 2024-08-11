import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getPosts = () => httpClient.get('/posts');

// --------------------------------------------------
// fetch('https://randomuser.me/api')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err))
//   .finally(() => {});

// async function getData () {
//   try {
//     const response = await fetch('http4s://randomuser.me/api');
//     const data = await response.json();
//     return data;
//   } catch (err) {
//     console.log(err);
//   } finally {
//   }
// }

// const res = await getData();
// console.log(res);

// Promise {status: (pending |fulfilled | rejected), result:}
// get, post, patch/put, delete

// const httpClient = axios.create({
//   baseURL: 'https://jsonplaceholder.typicode.com',
// });

// // 'https://jsonplaceholder.typicode.com/posts'
// try {
//   const response = await httpClient.get('/posts/100');
//   console.log(response.data);
// } catch (err) {
//   console.log(err);
// }

// httpClient
//   .get('/posts')
//   .then(response => console.log(response.data))
//   .catch(err => console.log(err));

// httpClient
//   .get('/users')
//   .then(response => console.log(response.data))
//   .catch(err => console.log(err));
