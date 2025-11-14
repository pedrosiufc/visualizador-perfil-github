// Define a URL base da API do GitHub.
const BASE_URL = "https://api.github.com";

/**
 * Busca os dados de um usuário do GitHub.
 * @param {string} userName - O nome de usuário do GitHub.
 * @returns {Promise<object>} - Uma promessa que resolve para os dados do usuário.
 * @throws {Error} - Lança um erro se o usuário não for encontrado.
 */
export async function fetchGithubUser(userName) {
  const response = await fetch(`${BASE_URL}/users/${userName}`);
  if (!response.ok) {
    throw new Error("Usuário não encontrado.");
  }
  return await response.json();
}

/**
 * Busca os repositórios de um usuário do GitHub.
 * @param {string} userName - O nome de usuário do GitHub.
 * @returns {Promise<Array<object>>} - Uma promessa que resolve para uma lista de repositórios.
 * @throws {Error} - Lança um erro se o usuário não for encontrado.
 */
export async function fetchGithubUserRepos(userName) {
  const response = await fetch(`${BASE_URL}/users/${userName}/repos?per_page=10&sort=created`);
  if (!response.ok) {
    throw new Error("Usuário não encontrado.");
  }
  return await response.json();
}
