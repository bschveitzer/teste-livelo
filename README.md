## Projeto de teste Compasso/Livelo

### Ferramentas utilizadas

1. NodeJs 12.14.1
2. Yarn ou NPM

### Comandos básicos

1. *yarn* ou *npm install* instala as dependências necessárias
2. *yarn run dev* inicia a aplicação em modo desenvolvimento no endereço [localhost:8080](https://localhost)
3. *yarn run build* builda a aplicação para produção

### Descrição e tecnologias

O projeto consiste em um buscador de informações de usuários no GitHub, como funcionalidade principal, tem uma busca pelo perfil de um determinado usuário.  </br> 
Com o perfil selecionado, duas novas funcionalidades secundárias surgem, a busca dos repositórios do usuário e a busca dos respositórios favoritos do usuário. </br>

Para esse projeto foi utilizado VueJS, juntamente com suas ferramentas de controle de estado VueX e controle de rotas VueRouter. </br>
Para as requisições rest foi utilizado a biblioteca Axios</br>
Os componentes de interface foram criados baseados na metodologia BEM CSS, com utilização do pré-processador SCSS. </br>
Créditos para [CSS Loaders](https://loading.io/css/) pelas animações de carregamento do projeto. </br>

### Trabalhos futuros e bugs conhecidos

1. Melhorar as animações de transição de páginas.
2. Implementar notificações de erros e respostas das requisições.
3. Criar componentes genéricos de grid e card, para melhor reutilização.
