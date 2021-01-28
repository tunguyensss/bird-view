import axios from 'axios';

export default async function fetchData(endpoint) {
  const res = await axios.get(endpoint);

  return res;
}
