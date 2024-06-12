# Meu Portfólio

Este repositório contém o código-fonte do meu site de portfólio pessoal, desenvolvido com Next.js, Tailwind CSS, React e TypeScript. O site é totalmente responsivo e conta com funcionalidades de troca de tema (dark mode e light mode) e internacionalização troca de idionmas.

## Funcionalidades

- **Next.js**: Framework React para renderização server-side e geração de sites estáticos.
- **Tailwind CSS**: Biblioteca de estilos utilitários para construção rápida de interfaces customizadas.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset de JavaScript que adiciona tipos estáticos ao código.
- **i18n**: Biblioteca para internacionalização, facilitando a tradução do site para diferentes idiomas.


## Seções do Site

1. **Início**: Uma apresentação básica sobre mim.
2. **Sobre Mim**: Uma seção que conta um pouco da minha trajetória.
3. **Experiências**: Mostra os lugares onde já trabalhei.
4. **Projetos**: Alguns links dos meus repositórios no GitHub.
5. **Contatos**: Links para LinkedIn,E-mail e WhatsApp e um formulário para envio de e-mail.

## Instalação e Uso

### Pré-requisitos

- Node.js
- npm ou yarn

### Clonando o Repositório

```bash
git clone https://github.com/aureliodeboa/Portifolio.git
cd seu-repositorio
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

## Estrutura do Projeto

```
/app
  - layout.tsx         # Configurações globais do app
  - page.tsx          # Página inicial

/assets               #diretoriio que possui todos os arquivos estaticos
 
/components
  - ButtonLink.tsx    # Componente dos botões da navbar
  - ButtonMidia.tsx   # Componente dos botões de contatos
  - ButtonTheme.tsx   # Componente de troca de tema
  - Container.tsx     # Componente do background do site
  - Navbar.tsx        # Componente Navbar
  - Swintchlanguage.tsx # Componente para troca de linguagem

/componets/sections
  - Profile.tsx          # Primeira secção do site
  - about-me.tsx         # Secção sobre mim
  - experiences.tsx      # Secçãode experiências
  - projects.tsx         # Secçãode projetos
  - contact.tsx          # Secção para contato

/contexts
  - ThemeContext.tsx  # Contexto para gerenciamento de tema

/types
  -ThemeContextType.ts  # Criação do type do contexto.

/src
  - i18nify.ts          # Configuração de internacionalização
  - globals.css       # Estilos globais com Tailwind CSS



```

## Contribuição

Sinta-se à vontade para fazer um fork deste repositório e enviar pull requests. Toda contribuição é bem-vinda!

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.

---

**Contato**

Para mais informações, entre em contato através das redes sociais ou envie um e-mail através do formulário no site.

- [LinkedIn](https://www.linkedin.com/in/aurelioribeiro/)
- [GitHub](https://github.com/aureliodeboa)


---

**Autor**

[Aurélio Ribeiro]

Desenvolvedor Full-Stack | Entusiasta de Tecnologia

---

Espero que este README forneça todas as informações necessárias para entender, configurar e contribuir para o projeto do meu portfólio pessoal. Se tiver alguma dúvida, não hesite em entrar em contato!
