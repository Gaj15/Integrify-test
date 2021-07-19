
export const getUsers = async () => {
  const baseURL = 'https://jsonplaceholder.typicode.com/users';
  const response = await fetch(baseURL);
  return await response.json();
};

export const getUser = async id => {
  const baseURL = `https://jsonplaceholder.typicode.com/users/${id}`;
  const response = await fetch(baseURL);
  return await response.json();
};