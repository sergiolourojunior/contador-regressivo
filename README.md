# Contador Regressivo Moderno

Uma aplicação web de contagem regressiva dinâmica e responsiva, com interface moderna, fundo animado e cores vibrantes. Ideal para destacar eventos importantes e compartilhar com amigos e familiares.

## Demonstração

Acesse a aplicação hospedada no GitHub Pages:

[https://sergiolourojunior.github.io/contador-regressivo/](https://sergiolourojunior.github.io/contador-regressivo/)

## Funcionalidades

- **Contagem regressiva dinâmica** para uma data específica.
- **Interface moderna e responsiva**, adaptada para dispositivos móveis e desktops.
- **Fundo animado** utilizando Particles.js, proporcionando um visual atraente.
- **Personalização** através de parâmetros na URL.

## Como Utilizar

1. **Acesse a aplicação:**

   ```
   https://sergiolourojunior.github.io/contador-regressivo/
   ```

2. **Adicione os parâmetros `frase` e `data` na URL:**

   - `frase`: A descrição do evento para o qual está fazendo a contagem regressiva.
   - `data`: A data alvo no formato ISO 8601 (`YYYY-MM-DDTHH:MM:SS`).

   **Exemplo:**

   ```
   https://sergiolourojunior.github.io/contador-regressivo/?frase=Meu%20Aniversário&data=2024-12-31T23:59:59
   ```

3. **Compartilhe o link** com outras pessoas para que elas possam ver a contagem regressiva para o evento.

## Tecnologias Utilizadas

- **HTML5** e **CSS3**: Estruturação e estilização básica da página.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.
- **JavaScript**: Lógica de contagem regressiva e manipulação do DOM.
- **Particles.js**: Biblioteca JavaScript para criação de fundos animados interativos.
- **GitHub Pages**: Hospedagem gratuita da aplicação.

## Configuração do Projeto

Caso deseje clonar o projeto e fazer suas próprias modificações:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/sergiolourojunior/contador-regressivo.git
   ```

2. **Navegue até o diretório do projeto:**

   ```bash
   cd contador-regressivo
   ```

3. **Abra o arquivo `index.html`** no seu navegador preferido ou utilize uma extensão como o Live Server para um ambiente de desenvolvimento local.

## Personalização

Você pode personalizar diversos aspectos da aplicação:

- **Cores e Estilos:**

  - Modifique as classes do Tailwind CSS no elemento `<body>` para alterar o gradiente de fundo.
  - Ajuste as classes de texto para mudar tamanhos, fontes e cores.

- **Animação de Fundo:**

  - Edite as configurações do Particles.js no script dentro do arquivo `index.html` para alterar o comportamento das partículas.

- **Conteúdo e Texto:**

  - Personalize as mensagens exibidas alterando o texto dentro das funções JavaScript.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma _issue_ ou enviar um _pull request_.

## Autor

- **Sérgio Louro Júnior** - [@sergiolourojunior](https://github.com/sergiolourojunior)

## Agradecimentos

- **Tailwind CSS** por facilitar a estilização responsiva.
- **Particles.js** por proporcionar um fundo animado incrível.
- **GitHub Pages** por oferecer hospedagem gratuita e simples.