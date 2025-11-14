# Visualizador de Perfil do GitHub

Um aplicativo da web simples para visualizar perfis de usuários do GitHub e seus repositórios.

## Funcionalidades

-   Buscar usuários do GitHub pelo nome de usuário.
-   Exibir informações do perfil do usuário, como nome, avatar, biografia, seguidores e contagem de seguidores.
-   Listar os 10 repositórios mais recentes do usuário.
-   Exibir estatísticas do repositório, como estrelas, forks, observadores e linguagem.
-   Design responsivo que se adapta a diferentes tamanhos de tela.

## Arquitetura

O projeto segue uma arquitetura front-end modular, separando as preocupações em três módulos JavaScript principais:

-   **`githubApi.js` (Camada de API)**: Responsável por toda a comunicação com a API do GitHub. Ele abstrai as chamadas de API, facilitando o gerenciamento e a modificação dos endpoints da API em um só lugar.
-   **`profileView.js` (Camada de Visualização)**: Responsável pela apresentação dos dados. Ele recebe os dados como entrada e gera o HTML a ser exibido ao usuário. Essa separação de preocupações facilita a alteração da interface do usuário sem afetar a lógica do aplicativo.
-   **`index.js` (Camada de Lógica/Controlador)**: Atua como a "cola" que conecta as outras duas camadas. Ele lida com eventos do usuário, orquestra o fluxo de dados (buscando na API e passando para a visualização) e gerencia o estado geral do aplicativo.

Essa abordagem modular torna o código mais organizado, fácil de entender e mais fácil de manter.

## Tecnologias Utilizadas

-   HTML5
-   CSS3
-   JavaScript (ES6 Modules)
-   GitHub API

## Ferramenta de IA Utilizada

Este projeto foi desenvolvido com o auxílio do **Gemini**, uma ferramenta de IA do Google, que ajudou na análise de código, depuração, geração de código e criação deste `README.md`.

## Como Executar

1.  Clone este repositório:
    ```bash
    git clone https://github.com/seu-usuario/visualizador-perfil-github.git
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd visualizador-perfil-github
    ```
3.  Abra o arquivo `index.html` em seu navegador.

Alternativamente, você pode usar um servidor local como o `live-server`:

1.  Instale o `live-server` globalmente (se ainda não o tiver):
    ```bash
    npm install -g live-server
    ```
2.  Inicie o servidor no diretório do projeto:
    ```bash
    live-server
    ```
3.  Abra seu navegador e acesse `http://127.0.0.1:8080` (ou o endereço fornecido pelo `live-server`).
