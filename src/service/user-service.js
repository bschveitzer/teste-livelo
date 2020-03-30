import axios from 'axios';

/*
  Busca os repositórios de um determinado usuário.
 */
export async function getRepositories(username) {
  try {
    return await axios.get(`/users/${username}/repos`)
  } catch (err) {
    return err
  }
}
/*
  Busca os repositórios favoritos de um determinado usuário.
 */
export async function getStarred(username) {
  try {
    return await axios.get(`/users/${username}/starred`)
  } catch (err) {
    return err
  }
}