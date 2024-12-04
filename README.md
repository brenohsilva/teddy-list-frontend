Teddy List Frontend

Este é o frontend da aplicação Teddy List, desenvolvido com React, Vite e outras tecnologias modernas para gerenciamento de clientes.

Pré-requisitos
Antes de iniciar, certifique-se de que você tenha instalado os seguintes softwares:

Node.js: Download Node.js (versão recomendada: LTS)
npm ou yarn: Gerenciador de pacotes que acompanha o Node.js.
Instalação
Clone o repositório:

git clone https://github.com/seu-usuario/seu-repositorio.git
Acesse o diretório do projeto:

cd seu-repositorio
Instale as dependências:

Com npm:

npm install
Ou com yarn:

yarn
Executar o Projeto
Inicie o servidor de desenvolvimento:

Com npm:

npm run dev
Ou com yarn:

yarn dev
Acesse a aplicação:

Abra o navegador e vá para: http://localhost:5173.

Construir para Produção
Se você deseja gerar os arquivos para produção:

Execute o comando de build:

Com npm:

npm run build
Ou com yarn:

yarn build
Inicie o servidor de produção (opcional):

Para testar o build localmente:

npm run preview
Ou com yarn:

yarn preview
Estrutura do Projeto
Abaixo está uma visão geral da estrutura do projeto:


src/
├── assets/          # Imagens e arquivos estáticos
├── components/      # Componentes reutilizáveis
│   ├── header/      # Cabeçalho da aplicação
│   ├── clientList/  # Listagem de clientes
│   ├── modals/      # Modais (criar, editar, excluir)
│   └── context/     # Gerenciamento de estado com Context API
├── App.tsx          # Componente principal
├── main.tsx         # Ponto de entrada do React
├── styles/          # Estilos globais (CSS)
├── vite-env.d.ts    # Declarações de tipos do Vite


Tecnologias Utilizadas
React
Vite
Bootstrap
React Router DOM
Context API
TypeScript
Contribuição