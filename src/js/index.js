// Importa as funções de busca da API do GitHub e a função de renderização do perfil.
import { fetchGithubUser, fetchGithubUserRepos } from './githubApi.js';
import { renderProfile } from './profileView.js';

// Obtém os elementos do DOM necessários.
const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

/**
 * Busca e exibe o perfil de um usuário do GitHub.
 * A função obtém o nome de usuário do campo de entrada, busca os dados do usuário e seus repositórios,
 * e então renderiza o perfil na página.
 */
async function getUserProfile() {
    const userName = inputSearch.value;
    if (!userName) {
        alert('Por favor, digite um nome de usuário do GitHub.');
        profileResults.innerHTML = "";
        return;
    }
    profileResults.innerHTML = `<p class="loading">Carregando...</p>`;
    try {
        // Busca os dados do usuário e seus repositórios.
        const userData = await fetchGithubUser(userName);
        const userRepos = await fetchGithubUserRepos(userName);
        // Renderiza o perfil com os dados obtidos.
        renderProfile(userData, userRepos, profileResults);
    } catch (error) {
        console.error('Erro ao buscar o perfil do usuário:', error);
        alert('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
        profileResults.innerHTML = "";
    }
}

// Adiciona um event listener para o clique no botão de busca.
btnSearch.addEventListener('click', getUserProfile);

// Adiciona um event listener para a tecla 'Enter' no campo de busca.
inputSearch.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        getUserProfile();
    }
});