# Boas-vindas ao repositório do projeto de adivinhação de Cor

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

# Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

# Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

  Para entregar o seu projeto você deverá criar um _Pull Request_ neste repositório.

  Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/4d67f5b4-34a6-489f-a205-b6c7dc50fc16/) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!
</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

- Será desenvolvida uma aplicação utilizando JavaScript, HTML5 e CSS3.

- Nesta aplicação deverá ser possível jogar um jogo de adivinhação de cores onde:
  - Dentro de uma possibilidade de cores o jogador deverá tentar adivinhar qual cor foi aleatoriamente selecionada como a cor certa;
  - A paleta de cores deve ser apresentada por círculos coloridos;
  - Deverá existir um botão para iniciar e reiniciar o jogo;
  - Ao selecionar uma cor um texto deverá informar se você acertou ou não a cor correta.

💡Veja o exemplo a seguir de como o projeto pode se parecer depois de pronto. Lembre-se que você pode <s>e deve</s> ir além para deixar o projeto com a sua cara e impressionar à todos!

<p align="center">
  <img
    class="rounded mx-auto d-block"
    src="/guess-the-color.gif"
    alt="Gif exibindo um jogo de adivinhar a cor"
  >
</p>

</details>

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

1. Clone o repositório

- `git clone git@github.com:tryber/sd-023-a-project-color-guess.git`
- Entre na pasta do repositório que você acabou de clonar:
  - `cd sd-023-a-project-color-guess`

2. Instale as dependências e inicialize o projeto

- Instale as dependências:
  - `npm install`

3. Crie uma branch a partir da branch `master`

- Verifique que você está na branch `master`
  - Exemplo: `git branch`
- Se não estiver, mude para a branch `master`
  - Exemplo: `git checkout master`
- Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
  - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
  - Exemplo: `git checkout -b joaozinho-project-color-guess`

4. Crie na raiz do projeto os arquivos que você precisará desenvolver:

- Verifique que você está na raiz do projeto
  - Exemplo: `pwd` -> o retorno vai ser algo tipo _/Users/joaozinho/code/**sd-023-a-project-color-guess**_
- Crie os arquivos index.html, style.css e script.js
  - Exemplo: `touch index.html style.css script.js`

5. Adicione as mudanças ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças ainda não estão no _stage_
  - Exemplo: `git status` (devem aparecer listados os novos arquivos em vermelho)
- Adicione o novo arquivo ao _stage_ do Git
  - Exemplo:
    - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
    - `git status` (devem aparecer listados os arquivos em verde)
- Faça o `commit` inicial
  - Exemplo:
    - `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
    - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

6. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin joaozinho-project-color-guess`

7. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-023-a-project-color-guess/pulls)
- Clique no botão verde _"New pull request"_
- Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
- Clique no botão verde _"Create pull request"_
- Adicione uma descrição para o _Pull Request_, um título claro que o identifique, e clique no botão verde _"Create pull request"_
- **Não se preocupe em preencher mais nada por enquanto!**
- Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-023-a-project-color-guess/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

- Faça `commits` das alterações que você fizer no código regularmente

- Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

- Os comandos que você utilizará com mais frequência são:
    1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
    2. `git add` _(para adicionar arquivos ao stage do Git)_
    3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
    4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
    5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

  Para sinalizar que o seu projeto está pronto para o _"Code Review"_ dos seus colegas, faça o seguinte:

- Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

  - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-023-a`.

  Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

  Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

  Usaremos o [ESLint](https://eslint.org/) para fazer a análise estática do seu código.

  Este projeto já vem com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json`.

  Para poder rodar o `ESLint` em um projeto basta executar o comando `npm install` dentro do projeto e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

  Você pode também instalar o plugin do `ESLint` no `VSCode`. Para isso, basta fazer o download do [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e instalá-lo.
</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

## Cypress

Cypress é uma ferramenta de teste de front-end desenvolvida para a web.
Você pode rodar o cypress localmente para verificar se seus requisitos estão passando, para isso execute o um dos seguintes comandos:

Para executar os testes apenas no terminal:

```bash
npm test
```

Para executar os testes e vê-los rodando em uma janela de navegador:

```bash
npm run cypress:open
```

***ou***

```bash
npx cypress open
```

Após executar um dos dois comandos acima, será aberta uma janela de navegador e então basta clicar no nome do arquivo de teste que quiser executar (project.spec.js), ou para executar todos os testes clique em Run all specs

Você também pode assistir a [este vídeo](https://vimeo.com/539240375/a116a166b9) 😉🎙

**Para rodar o cypress é preciso ter rodado o comando npm install anteriormente.**

</details>

<details>
  <summary><strong>🗣 Nos dê feedbacks sobre o projeto!</strong></summary><br />

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário.
**Leva menos de 3 minutos!**

[FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH)

</details>

<details>
  <summary><strong>👀 Observações importantes:</strong></summary><br />
  
* Lembrem-se que como pessoas desenvolvedoras devemos fazer pesquisas e garimpar resultados para auxiliar no entendimento do assunto. Assim, para solucionar os requisitos do projeto é inevitável e estimulado que pesquisas sejam feitas nas mais variadas fontes (course, vídeos do course, google, youtube, etc) sempre tomando cuidado para utilizar fontes "confiáveis" nas pesquisas da Internet, como por exemplo:

* Caso a avaliação falhe com alguma mensagem de erro parecida com `[409:0326/130838.878602:FATAL:memory.cc(22)] Out of memory. size=4194304`, provavelmente as imagens que você está utilizando estão muito grandes. Tente redimensiona-las para um tamanho menor.

* Para verificar se a sua avaliação foi computada com sucesso, você pode verificar os **detalhes da execução do avaliador**.

  * Na página do seu _Pull Request_, acima do "botão de merge", procure por _**"Evaluator job"**_ e clique no link _**"Details"**_;

  * Na página que se abrirá, procure pela linha _**"Cypress evaluator step"**_ e clique nela;

  * Analise os resultados a partir da mensagem _**"(Run Starting)"**_;

  * Caso tenha dúvidas, consulte [este vídeo](https://vimeo.com/420861252) ou procure as pessoas instrutoras.

* Você tem liberdade para adicionar novos comportamentos ao seu projeto, seja na forma de aperfeiçoamentos em requisitos propostos ou novas funcionalidades, **desde que tais comportamentos adicionais não conflitem com os requisitos propostos**.

  * Em outras palavras, você pode fazer mais do que for pedido, mas nunca menos.

* Contudo, tenha em mente que **nada além do que for pedido nos requisitos será avaliado**. _Esta é uma oportunidade de você exercitar sua criatividade e experimentar com os conhecimentos adquiridos._

</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

  Para sinalizar que o seu projeto está pronto para o _"Code Review"_ dos seus colegas, faça o seguinte:

  - Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

    - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

    - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

    - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-023-a`.

  Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

  Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
  <summary><strong>🏗️ Como estruturar seu projeto</strong></summary><br />
  
* Os requisitos do seu projeto são avaliados automaticamente, sendo utilizada a resolução de tela de `1366 x 768` (1366 pixels de largura por 768 pixels de altura).

* #### ⚠️ Logo, recomenda-se desenvolver seu projeto usando a mesma resolução, via instalação [deste plugin](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh?hl=en) do `Chrome` para facilitar a configuração da resolução. ⚠️

* Atente-se para o tamanho das imagens que você utilizará neste projeto. **Não utilize imagens com um tamanho maior que _500Kb_.**
  * #### ⚠️ Utilize uma ferramenta [como esta](https://picresize.com/pt) para redimensionar as imagens. ⚠️

</details>

<details>
  <summary><strong>:link: Links auxiliares para o desenvolvimento do projeto</strong></summary><br />
  
  * [Javascript.com](http://javascript.com/)

  * [W3Schools](https://www.w3schools.com/js/default.asp)

  * [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

  * [StackOverflow](https://pt.stackoverflow.com/questions/tagged/javascript)

</details>

# Requisitos

>⚠️ Leia-os atentamente e siga à risca o que for pedido. Em particular, **atente-se para os nomes de _ids_ que alguns elementos de seu projeto devem possuir**. ⚠️

O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

## 1 - Adicione no seu site um título com o nome do seu jogo

<details>
  <summary>Sua página deve conter um elemento html com o id title</summary><br />

**O que será verificado:**

- Existe um elemento com **id** é `title`.
  
</details>

## 2 - Adicione um texto com o código RGB a ser adivinhado

<details>
  <summary>Sua página deverá conter um texto com a cor a ser adivinhada no formato rgb</summary><br />

**O que será verificado:**

- Se o id do texto é rgb-color;

- Se o texto contem os três números das cores RGB a ser adivinhada, no seguinte formato: `(168, 34, 1)`.

</details>

## 3 - Adicione à página opções de cores para serem adivinhadas

<details>
  <summary>Sua página deverá conter 6 círculos que deverão conter a classe ball</summary><br />

**O que será verificado:**

- Se existem 6 círculos como opção de cor de adivinhação;

- Se a largura e altura dos círculos possuem o mesmo tamanho;

- Se todos os círculos possuem a classe ball.

</details>

## 4 - Adicione cores nas bolas, elas devem ser geradas dinamicamente

<details>
  <summary>As cores dos círculos são geradas por javascript</summary><br />

**O que será verificado:**

- As cores de cada um dos 6 círculos coloridos devem ser geradas via JavaScript ao carregar a página.

</details>

## 5 - Ao clicar em um círculo colorido, deve ser mostrado um texto indicando se está correto

<details>
  <summary>Sua página deverá ter um texto que deverá mudar conforme a situação do jogo</summary><br />

**O que será verificado:**

- O **id** do elemento com o texto da resposta deve ser `answer`;

- Quando o jogo é iniciado, o texto exibido deve ser `"Escolha uma cor"`;

- Se o círculo colorido for o **correto**, deve ser exibido o texto "Acertou!";

- Se o círculo colorido for o **incorreto**, deve ser exibido o texto "Errou! Tente novamente!".

</details>

## 6 - Crie um botão para iniciar/reiniciar o jogo

<details>
  <summary>Sua página deverá contér um botão que possibilite iniciar e jogar novamente</summary><br />

**O que será verificado:**

  - O botão deve ter o id reset-game;

  - Ao clicar no botão, novas cores devem ser geradas via JavaScript e o elemento rgb-color deve ser atualizado;

  - Ao clicar no botão, o elemento answer deve voltar ao estado inicial, exibindo o texto "Escolha uma cor".

  
</details>

# Bônus

## 7 - Crie um placar que incremente 3 pontos para cada acerto no jogo

<details>
  <summary>Sua página deverá conter um elemento que deverá marcar o placar da pessoa jogadora</summary><br />

**O que será verificado:**

- O elemento deve ter o **id** `score`;

- O valor inicial dele deve ser 0;

- A cada acerto, é incrementado 3 pontos ao placar;

- Ao clicar no botão reiniciar, o placar NÃO deve ser redefinido.

</details>
