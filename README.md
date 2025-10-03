# Meu Portfólio

Este repositório contém o código-fonte do meu site de portfólio pessoal, desenvolvido com Next.js, Tailwind CSS, React e TypeScript. O site é totalmente responsivo e conta com funcionalidades de troca de tema (dark mode e light mode) e internacionalização (troca de idiomas).

<img width="1895" height="900" alt="image" src="https://github.com/user-attachments/assets/8c247473-0afc-42bc-a837-626f0b786df7" />


## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização server-side e geração de sites estáticos.
- **Tailwind CSS**: Biblioteca de estilos utilitários para construção rápida de interfaces customizadas.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset de JavaScript que adiciona tipos estáticos ao código.
- **i18n**: Biblioteca para internacionalização, facilitando a tradução do site para diferentes idiomas.

## Arquitetura do Projeto

O projeto segue uma arquitetura baseada em componentes, modular e organizada, facilitando a manutenção e escalabilidade.

```
/
├── public/                 # Arquivos estáticos acessíveis publicamente
│   ├── aurelio_ribeiro.pdf
│   ├── next.svg
│   └── vercel.svg
├── src/
│   ├── app/                # Diretório principal da aplicação (App Router)
│   │   ├── favicon.ico
│   │   ├── globals.css     # Estilos globais
│   │   ├── layout.tsx      # Layout principal da aplicação
│   │   └── page.tsx        # Página inicial
│   ├── assets/             # Recursos estáticos como imagens e dados
│   │   ├── data/           # Dados de projetos e experiências (separados por idioma)
│   │   └── images/         # Imagens e logos
│   ├── components/         # Componentes React reutilizáveis
│   │   ├── sections/       # Componentes que representam seções da página
│   │   └── *.tsx           # Componentes individuais (botões, cards, etc.)
│   ├── contexts/           # Contextos React para gerenciamento de estado global
│   │   └── ThemeContext.tsx
│   ├── hooks/              # Hooks React customizados
│   ├── types/              # Definições de tipos TypeScript
│   └── i18nify.ts          # Configuração da internacionalização (i18n)
├── locales/                # Arquivos de tradução
│   ├── en.json
│   └── pt.json
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

### Detalhes da Arquitetura

- **`src/app`**: Utiliza o App Router do Next.js. O `layout.tsx` define a estrutura visual comum a todas as páginas, e o `page.tsx` é a página principal.
- **`src/assets`**: Armazena todos os recursos estáticos. As imagens estão em `images`, e os dados de projetos e experiências estão em `data`, com arquivos separados para cada idioma, permitindo a internacionalização do conteúdo.
- **`src/components`**: Contém todos os componentes React. A subpasta `sections` agrupa os componentes maiores que formam as diferentes seções do site (Sobre Mim, Projetos, etc.). Os demais arquivos `.tsx` são componentes menores e reutilizáveis, como botões e cards.
- **`src/contexts`**: Centraliza os contextos da aplicação. O `ThemeContext.tsx` é responsável por gerenciar o tema (claro/escuro) em toda a aplicação.
- **`src/hooks`**: Deveria conter hooks customizados, mas atualmente está vazio.
- **`src/types`**: Define as interfaces e tipos TypeScript utilizados no projeto, garantindo a tipagem e a segurança do código.
- **`locales`**: Contém os arquivos JSON com as traduções para os idiomas suportados (inglês e português).
- **`public`**: Armazena arquivos que precisam ser acessados diretamente pela URL, como o PDF do meu currículo.

## Seções do Site

1.  **Início**: Uma apresentação básica sobre mim.
2.  **Sobre Mim**: Uma seção que conta um pouco da minha trajetória.
3.  **Experiências**: Mostra os lugares onde já trabalhei.
4.  **Projetos**: Alguns links dos meus repositórios no GitHub.
5.  **Contatos**: Links para LinkedIn, E-mail e WhatsApp e um formulário para envio de e-mail.

## Instalação e Uso

### Pré-requisitos

- Node.js
- npm ou yarn

### Clonando o Repositório

```bash
git clone https://github.com/aureliodeboa/Portifolio.git
cd Portifolio
```

### Instalando Dependências

Com npm:

```bash
npm install
```

Com yarn:

```bash
yarn install
```

### Executando o Projeto

Com npm:

```bash
npm run dev
```

Com yarn:

```bash
yarn dev
```

O site estará disponível em `http://localhost:3000`.

## Contribuição

Sinta-se à vontade para fazer um fork deste repositório e enviar pull requests. Toda contribuição é bem-vinda!

## Licença

Este projeto está licenciado sob a licença MIT.

---

**Contato**

Para mais informações, entre em contato através das redes sociais ou envie um e-mail através do formulário no site.

- [LinkedIn](https://www.linkedin.com/in/aurelioribeiro/)
- [GitHub](https://github.com/aureliodeboa)

---

**Autor**

Aurélio Ribeiro

Desenvolvedor Full-Stack | Entusiasta de Tecnologia

---
