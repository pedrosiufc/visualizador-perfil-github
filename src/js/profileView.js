/**
 * Renderiza o perfil do usuário e seus repositórios na página.
 * @param {object} userData - Os dados do perfil do usuário.
 * @param {Array<object>} userRepos - A lista de repositórios do usuário.
 * @param {HTMLElement} container - O elemento do DOM onde o perfil será renderizado.
 */
export function renderProfile(userData, userRepos, container) {
  
  // Gera o HTML para a lista de repositórios.
  const repositoriesHTML = userRepos && userRepos.length > 0 ? userRepos.map(repo => `
    <a href="${repo.html_url}" target="_blank">
        <div class="repository-card">    
            <h3>${repo.name}</h3>
            <div class="repository-stats">
                <span>⭐Stars: ${repo.stargazers_count}</span>
                <span>🍴 Forks: ${repo.forks_count}</span>
                <span>👀 Watchers: ${repo.watchers_count}</span>
                <span>💻 Language: ${repo.language || 'Não informada'}</span>
            </div>
        </div>
    </a>
    
    `).join('') : `<p>Nenhum repositório encontrado.</p>`;
    
    // Insere o HTML do perfil e dos repositórios no contêiner.
    container.innerHTML = `
    <div class="profile-card">
      <img src="${userData.avatar_url}" alt="Avatar de ${
    userData.name
  }" class="profile-avatar">
      <div class="profile-info">
        <h2>${userData.name}</h2>
        <p>${userData.bio || "Não possui bio cadastrada 😢."}</p>
      </div>
    </div>

    <div class="profile-counters">
        <div class="followers">
            <h4>👥 Seguidores</h4>
            <span>${userData.followers}</span>
        </div>
        <div class="following">
            <h4>👥 Seguindo</h4>
            <span>${userData.following}</span>
        </div>
    </div>
    <div class="repositories-section">
        <h2>Repositórios</h2>
        <div class="repositories-list">
            ${repositoriesHTML}
        </div>
    </div>
  `;
}
