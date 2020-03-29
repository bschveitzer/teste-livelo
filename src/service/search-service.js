import axios from 'axios';

export async function search(searchTerm) {
  try {
    return await axios.get(`/users/${searchTerm}`)
  } catch (err) {
    return err
  }
}