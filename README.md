# To-Do List Next

## Descrição

To-Do List Next é uma aplicação web moderna para gerenciamento de tarefas, projetada para oferecer uma experiência fluida e eficiente aos usuários. Com ela, é possível criar, visualizar, atualizar e excluir tarefas de forma simples e intuitiva. O projeto utiliza tecnologias de ponta como **Next.js** para renderização híbrida (server-side e client-side), **tRPC** para comunicação tipada entre cliente e servidor, e **Zod** para validação robusta de dados.

A aplicação é ideal para quem busca organizar suas atividades diárias com uma interface limpa e funcional, aproveitando o poder do TypeScript para garantir segurança e consistência no código.

## Funcionalidades

- **Listar todas as tarefas**: Veja todas as suas tarefas em uma lista organizada.
- **Visualizar detalhes de uma tarefa**: Consulte informações como título, descrição, data de criação e última atualização.
- **Criar uma nova tarefa**: Adicione tarefas rapidamente com título e descrição opcional.
- **Atualizar uma tarefa existente**: Edite os detalhes de uma tarefa já criada.
- **Excluir uma tarefa**: Remova tarefas concluídas ou desnecessárias com um clique.
- **Carregamento infinito**: Role a página para carregar mais tarefas automaticamente (implementado com lazy loading).

## Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)**: Framework React para renderização server-side e client-side, com suporte a rotas dinâmicas e otimização de performance.
- **[React](https://reactjs.org/)**: Biblioteca JavaScript para construção de interfaces de usuário interativas.
- **[tRPC](https://trpc.io/)**: Framework para APIs tipadas em TypeScript, permitindo comunicação eficiente entre cliente e servidor.
- **[Zod](https://github.com/colinhacks/zod)**: Biblioteca de validação de esquemas, garantindo dados consistentes e seguros.
- **[UUID](https://github.com/uuidjs/uuid)**: Geração de identificadores únicos para cada tarefa.
- **[React Query](https://tanstack.com/query)**: Gerenciamento de estado assíncrono e caching de dados do servidor.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset JavaScript que adiciona tipagem estática ao projeto.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:
- **Node.js** (versão 18 ou superior)
- **npm** (geralmente instalado com o Node.js)
- Um terminal (como Bash, PowerShell ou Terminal do VS Code)
- Opcionalmente, **Git** para clonar o repositório

## Instalação

Siga os passos abaixo para rodar o projeto localmente:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/CarlosEduardocaldas6432/To-Do-List-NextJS.git
   ```
2. **Navegue até o diretório do projeto**:
   ```bash
   cd todolistnext
   ```
3. **Instale as dependências**:
   ```bash
   npm install
   ```
4. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
5. **Acesse a aplicação**:
   Abra seu navegador em `http://localhost:3000`.

## Uso

- **Listar Tarefas**: Acesse a página inicial (`/`) para visualizar todas as tarefas existentes.
- **Adicionar Tarefa**: Clique no botão "Adicionar Tarefa" na página principal e preencha o formulário.
- **Editar Tarefa**: Clique em "Editar" ao lado de uma tarefa para modificar seu título ou descrição.
- **Excluir Tarefa**: Clique em "Excluir" para remover uma tarefa da lista.
- **Navegação**: Use os links na interface para alternar entre adicionar e editar tarefas.

### Exemplo de Tarefa Renderizada
Cada tarefa é exibida com:
- **Título** em destaque.
- **Descrição** (se fornecida).
- **Data de Criação** e **Última Atualização** formatadas.

## Estrutura do Projeto

Aqui está uma visão geral da organização do código:

```
todolistnext/
├── /components             # Componentes React reutilizáveis
│   └── ListaDeTarefasClient.tsx  # Componente client-side para exibir e interagir com tarefas
├── /data                   # Modelos e interfaces
│   └── /model
│       └── Tarefa.ts       # Definição da interface Tarefa
├── /pages                  # Páginas da aplicação Next.js
│   └── api                 # Rotas de API
│       └── trpc            # Endpoint tRPC
│           └── route.ts    # Handler das requisições tRPC
├── /server                 # Lógica do servidor
│   └── /trpc
│       ├── router.ts       # Configuração do router tRPC
│       └── tarefa.ts       # Definição das rotas relacionadas a tarefas
├── /utils                  # Utilitários e helpers
│   ├── trpc.ts             # Cliente tRPC
│   ├── createCaller.ts     # Função para criar chamadas tRPC no servidor
│   └── FormataData.ts      # Função para formatar datas
├── /css                    # Estilos CSS
│   └── listaDeTarefa
│       └── ListaDeTarefas.module.css  # Estilos modulares para a lista de tarefas
├── ListaDeTarefasServer.tsx  # Componente server-side para buscar tarefas
├── TrpcProvider.tsx        # Provedor de contexto tRPC e React Query
├── package.json            # Configuração do projeto e dependências
└── README.md               # Documentação do projeto (este arquivo)
```

### Detalhes Técnicos
- **tRPC**: As operações CRUD (criar, listar, atualizar, excluir) são definidas no arquivo `tarefa.ts` e acessadas via cliente tRPC.
- **Validação**: O Zod é usado para validar os dados de entrada em todas as mutações e consultas.
- **Estado Local**: O componente client-side (`ListaDeTarefasClient.tsx`) gerencia o estado das tarefas exibidas com React Hooks (`useState`, `useEffect`).
- **Estilização**: CSS Modules é utilizado para escopo local de estilos, evitando conflitos.

## Scripts Disponíveis

No arquivo `package.json`, você encontrará os seguintes scripts:

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Gera uma build otimizada para produção.
- `npm run start`: Inicia a aplicação em modo produção.
- `npm run lint`: Executa o linter para verificar problemas no código.

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature ou correção:
   ```bash
   git checkout -b minha-feature
   ```
3. Commit suas mudanças:
   ```bash
   git commit -m "Adiciona minha feature"
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request no GitHub.

Por favor, abra uma issue antes de grandes mudanças para discutir a implementação.

## Resolução de Problemas

- **Erro ao instalar dependências**: Verifique se está usando a versão correta do Node.js e tente `npm cache clean --force` antes de reinstalar.
- **Erro ao excluir tarefa**: Certifique-se de que o servidor está ativo e o ID da tarefa é válido.
- **Porta 3000 ocupada**: Altere a porta no comando `npm run dev` adicionando `-- -p 3001`.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE). Você é livre para usar, modificar e distribuir o código conforme os termos da licença.

## Contato

Para dúvidas ou sugestões, entre em contato pelo GitHub ou abra uma issue no repositório.

---

**Agradecemos por considerar este projeto! Esperamos que você aproveite usando-o.**