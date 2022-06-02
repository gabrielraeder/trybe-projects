# Boas-vindas ao repositório do projeto Carta Misteriosa!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

# Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do [Código de Conduta e do Manual da Pessoa Estudante da Trybe](https://app.betrybe.com/manual-estudante/codigo-de-etica-e-conduta).

# Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

Para entregar o seu projeto você deverá criar um *Pull Request* neste repositório.

  Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/4d67f5b4-34a6-489f-a205-b6c7dc50fc16/) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!

</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

- Você irá desenvolver um site que gere cartas misteriosas.

* Neste projeto, você implementará um gerador de cartas misteriosas.

**Ou seja, dado um valor digitado em um campo de texto, apresentar as palavras com uma aparência de uma carta onde cada palavra possui uma estilização própria.** 

💡Veja o exemplo a seguir de como o projeto pode se parecer depois de pronto. Lembre-se que você pode ~~e deve~~ ir além para deixar o projeto com a sua cara e impressionar a todas as pessoas!

![](mistery-letter-example.gif)
⚠️ Leia os requisitos atentamente e siga à risca o que for pedido. Em particular, **atente-se para os nomes de _ids_ que alguns elementos de seu projeto devem possuir**. ⚠️

O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.


</details>




# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

1. Clone o repositório
  * `git clone git@github.com:tryber/sd-023-a-project-mistery-letter.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `sd-023-a-project-mistery-letter`

2. Instale as dependências
    * `npm install`

3. Crie uma branch a partir da branch `main`
  * Verifique que você está na branch `main`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `main`
    * Exemplo: `git checkout main`
  * Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b joaozinho-project-mistery-letter`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto x'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin joaozinho-project-mistery-letter`

6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-023-a-project-mistery-letter/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-023-a-project-mistery-letter/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary>

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_
  5. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_

</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

Para sinalizar que o seu projeto está pronto para o _"Code Review"_ dos seus colegas, faça o seguinte:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas
  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**
  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**
  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-023-a`

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

⚠ Lembre-se que garantir que todas as _issues_ comentadas pelo **Lint** estão resolvidas! ⚠

</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
  <summary><strong>🏗 Como estruturar seu projeto</strong></summary><br />

- Será desenvolvida uma aplicação utilizando JavaScript, HTML5 e CSS3.

Este _Pull Request_ deverá conter, necessariamente, os arquivos `index.html`, `style.css` e `script.js`, que conterão seu código **_HTML_**, **_CSS_** e **_JavaScript_**, respectivamente. ⚠️ É importante que seus arquivos tenham exatamente estes nomes! ⚠️

Você pode adicionar outros arquivos se julgar necessário.

**👀  Observações importantes**

* Os requisitos do seu projeto são avaliados automaticamente, sendo utilizada a resolução de tela de `1366 x 768` (1366 pixels de largura por 768 pixels de altura).

  * #### ⚠️ Logo, recomenda-se desenvolver seu projeto usando a mesma resolução, via instalação [deste plugin](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh?hl=en) do `Chrome` para facilitar a configuração da resolução. ⚠️

* Caso for utilizar imagens nesse projeto, atente-se para o tamanho delas. **Não utilize imagens com um tamanho maior que _500Kb_.**
  * #### ⚠️ Utilize uma ferramenta [como esta](https://picresize.com/pt) para redimensionar as imagens. ⚠️

  * Caso a avaliação falhe com alguma mensagem de erro parecida com `[409:0326/130838.878602:FATAL:memory.cc(22)] Out of memory. size=4194304`, provavelmente as imagens que você está utilizando estão muito grandes. Tente redimensioná-las para um tamanho menor.

**👉Dicas**

- A propriedade `transform` só funciona em elementos do tipo `block` ou `inline-block`. Então, é sugerido adicionar a propriedade `display: inline-block` para que os elementos spans apresentem o conteúdo da forma correta.

- Que tal usar um [_loop_](https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/) para adicionar o mesmo evento em vários elementos? Ou então a técnica de [_event bubbling_](https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/) combinada com `classList`?

- Se precisar consultar os valores do _CSS_ de um elemento a partir do _JavaScript_, [dê uma olhada aqui](https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp).

- Para alterar alguma propriedade do _CSS_ de um elemento através do _JavaScript_, dê uma olhada no [atributo `style`](https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp) do elemento.

</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

Para garantir a qualidade do código, vamos utilizar neste projeto os linters `ESLint` e `StyleLint`.
Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível
e de fácil manutenção! Para rodá-los localmente no projeto, execute os comandos abaixo:

```bash
npm run lint
npm run lint:styles
```

Quando é executado o comando `npm run lint:styles`, ele irá avaliar se os seguintes arquivos com a extensão `CSS` está com o padrão correto.

Quando é executado o comando `npm run lint`, ele irá avaliar se os seguintes arquivos com a extensão `JS` e `JSX` está com o padrão correto.

⚠ **NESTE PROJETO O STYLELINT E ESLINT NÃO SERÃO AVALIADOS. VOCÊ PODE RODAR OS TESTES LOCALMENTE E FAZER AS CORREÇÕES SE DESEJAR!** ⚠


</details>

<details>
  <summary><strong>🛠 Testes e Cypress</strong></summary><br />

  Cypress é uma ferramenta de teste de front-end desenvolvida para a web.
Você pode rodar o cypress localmente para verificar se seus requisitos estão passando, para isso execute um dos seguintes comandos:

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
Você também pode assistir a [este](https://vimeo.com/539240375/a116a166b9) vídeo 😉🎙

**Para rodar o cypress é preciso ter rodado o comando npm install anteriormente.**

* Para verificar se a sua avaliação foi computada com sucesso, você pode verificar os **detalhes da execução do avaliador**.

  * Na página do seu _Pull Request_, acima do "botão de merge", procure por _**"Evaluator job"**_ e clique no link _**"Details"**_;

  * Na página que se abrirá, procure pela linha _**"Cypress evaluator step"**_ e clique nela;

  * Analise os resultados a partir da mensagem _**"(Run Starting)"**_;

  * Caso tenha dúvidas, consulte [este vídeo](https://vimeo.com/420861252) ou procure a monitoria.


* Você tem liberdade para adicionar novos comportamentos ao seu projeto, seja na forma de aperfeiçoamentos em requisitos propostos ou novas funcionalidades, **desde que tais comportamentos adicionais não conflitem com os requisitos propostos**.

  * Em outras palavras, você pode fazer mais do que for pedido, mas nunca menos.

* Contudo, tenha em mente que **nada além do que for pedido nos requisitos será avaliado**. _Esta é uma oportunidade de você exercitar sua criatividade e experimentar com os conhecimentos adquiridos._

</details>

<details>
  <summary><strong>🔗 Links auxiliares para o desenvolvimento do projeto</strong></summary><br />

* Lembrem-se que como pessoas desenvolvedoras devemos fazer pesquisas e garimpar resultados para auxiliar no entendimento do assunto. Assim, para solucionar os requisitos do projeto é inevitável e estimulado que pesquisas sejam feitas nas mais variadas fontes (course, vídeos do course, google, youtube, etc) sempre tomando cuidado para utilizar fontes "confiáveis" nas pesquisas da Internet, como por exemplo:

  * [Javascript.com](http://javascript.com/)

  * [W3Schools](https://www.w3schools.com/js/default.asp)

  * [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

  * [StackOverflow](https://pt.stackoverflow.com/questions/tagged/javascript)

</details>

<details>
  <summary><strong>🗣 Nos dê feedbacks sobre o projeto!</strong></summary><br />

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. Leva menos de 3 minutos!

Link: [FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH)

O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?

</details>

<details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary><br />

Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso?

Compartilhe esse projeto no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.

</details>



# Requisitos Obrigatórios:

## 1 - Deve haver um `input` com o id=\"carta-texto\" onde a pessoa usuária poderá digitar o conteúdo da carta

<details>
  <summary>Sua página deve conter um input com id="carta-texto"</summary><br />

**O que será verificado**

- Existe um elemento `input`
  - Com `id=carta-texto`

</details>

## 2 - Deve haver um parágrafo com o id=\"carta-gerada\" onde a pessoa usuária verá o resultado de sua carta misteriosa

<details>
  <summary>Sua página deve conter um parágrafo com id="carta-gerada"</summary><br />

**O que será verificado**

- Existe um elemento `p` 
  - Com o `id="carta-gerada"`

</details>

## 3 - Deve haver um botão com id=\"criar-carta\" e ao clicar nesse botão, a carta misteriosa deve ser gerada

<details>
  <summary>Sua página deve conter um botão com id="criar-carta"</summary><br />

**Pontos importantes:**

* Cada palavra deve aparecer dentro de uma tag `span`.
* As tags `span` devem ser adicionadas como filhas do parágrafo que possui o id `carta-gerada`.

**O que será verificado**

- Existe um elemento `button` 
  - Com `id="criar-carta"`

- Ao clicar no botão, a carta misteriosa deve ser gerada

</details>

## 4 - Ao criar uma carta através do botão com id="criar-carta", o `input` com id="carta-texto" deve permanecer com o texto digitado

<details>
  <summary>O input com o id="carta-texto" deve permanecer com o texto digitado</summary><br />

**O que será verificado**

- Ao criar uma carta através do botão `id="criar-carta"` o input com `id="carta-texto"` permanece com o texto digitado

</details>

## 5 - Se a pessoa usuária não preencher o campo ou preencher com apenas espaços vazios adicionar a mensagem 'Por favor, digite o conteúdo da carta.'

<details>
  <summary>Quando não houver texto, a mensagem "Por favor, digite o conteúdo da carta" deve aparecer em um parágrafo</summary><br />

**O que será verificado**

- Ao deixar em branco, irá exibir a mensagem "Por favor, digite o conteúdo da carta." no elemento `p` com o `id="carta-gerada"`
- Ao digitar espaços em branco irá exibir a mensagem "Por favor, digite o conteúdo da carta." no elemento `p` com o `id="carta-gerada"`

</details>

## 6 - Crie a classe `newspaper`

<details>
  <summary>A classe <code>newspaper</code> deve possuir propriedades específicas</summary><br />

**Pontos importantes:**

* Defina as propriedades:
  - `background-color` com o valor `rgb(250, 235, 215)`
  - `font-family` com o valor `Times New Roman`
  - `font-weight` com o valor `700`

**O que será verificado**

- Será validado se a classe `newspaper` possui as propriedades:
  - `background-color` igual a `rgb(250, 235, 215)`;
  - `font-family` igual a `Times New Roman`;
  - `font-weight` igual a `700`.

</details>

## 7 - Crie a classe `magazine1`.

<details>
  <summary>A classe <code>magazine1</code> deve possuir propriedades específicas</summary><br />

**Pontos importantes:**

* Defina as propriedades:
  - `background-color` com o valor `rgb(0, 128, 128)`
  - `color` com o valor `rgb(255, 255, 255)`
  - `font-family` com o valor `Verdana`
  - `font-weight` com o valor `900`
  - `text-transform` com o valor `uppercase`

**O que será verificado**

- Será validado se a classe `magazine1` possui as propriedades:
  - `background-color` igual a ` rgb(0, 128, 128)`;
  - `color` igual a `rgb(255, 255, 255)`;
  - `font-family` igual a `Verdana`;
  - `font-weight` igual a `900`;
  - `text-transform` igual a `uppercase`.

</details>

## 8 - Crie a classe `magazine2`.

<details>
  <summary>A classe <code>magazine2</code> deve possuir propriedades específicas</summary><br />

**Pontos importantes:**

* Defina as propriedades:
  - `background-image` com a imagem `images/pink-pattern.png`
  - `color` com o valor `rgb(255, 0, 255)`
  - `font-family` com o valor `Verdana`
  - `font-weight` com o valor `900`

**O que será verificado**

- A classe `magazine2` possui as propriedades:
  - `background-image` igual a `images/pink-pattern.png`;
  - `color` igual a `rgb(255, 0, 255)`;
  - `font-family` igual a `Verdana`;
  - `font-weight` igual a `900`.

</details>

## 9 - Crie a classe `medium`.

<details>
  <summary>A classe <code>medium</code> deve possuir propriedades específicas</summary><br />

**Pontos importantes:**

* Defina as propriedades:
  - `font-size` com o valor `20px`
  - `padding` com o valor `8px`

**O que será verificado**

- A classe `medium` possui a propriedade:
  - `font-size` igual a  `20px`;
  - `padding` igual a `8px`.

</details>

## 10 - Crie a classe `big`.

<details>
  <summary>A classe <code>big</code> deve possuir propriedades específicas</summary><br />

**Pontos importantes:**

* Defina as propriedades:
  - `font-size` com o valor `30px`;
  - `padding` com o valor `10px`.

**O que será verificado**

- A classe `big` possui as propriedades:
  - `font-size` com o valor `30px`;
  - `padding` com o valor `10px`.

</details>

## 11 - Crie a classe `reallybig`.

<details>
  <summary>A classe <code>reallybig</code> deve possuir propriedades específicas</summary><br />

**Pontos importantes:**

* Defina as propriedades:
  - `font-size` com o valor `40px`;
  - `padding` com o valor `15px`.

**O que será verificado**

- A classe `reallybig` possui as propriedades:
  - `font-size` com o valor `40px`;
  - `padding` com o valor `15px`.

</details>

## 12 - Crie a classe `rotateleft`.

<details>
  <summary>A classe <code>rotateleft</code> deve possuir propriedades específicas</summary><br />

**Pontos importantes:**

* Defina as propriedades:
  - `transform` com o valor `matrix(0.996195, -0.0871557, 0.0871557, 0.996195, 0, 0)`

**O que será verificado**

- A classe `rotateleft` possui a propriedade `transform` igual a `matrix(0.996195, -0.0871557, 0.0871557, 0.996195, 0, 0)`

</details>

## 13 - Crie a classe `rotateright`.

<details>
  <summary>A classe <code>rotateright</code> deve possuir propriedades específicas</summary><br />

**Pontos importantes:**

* Defina as propriedades:
  - `transform` com o valor `matrix(0.996195, 0.0871557, -0.0871557, 0.996195, 0, 0)`

**O que será verificado**

- A classe `rotateright` possui a propriedade `transform` igual a `matrix(0.996195, 0.0871557, -0.0871557, 0.996195, 0, 0)`

</details>

## 14 - Crie a classe `skewleft`.

<details>
  <summary>A classe <code>skewleft</code> deve possuir propriedades específicas</summary><br />

**Pontos importantes:**

* Defina as propriedades:
  - `transform` com o valor `matrix(1, 0, 0.176327, 1, 0, 0)`;

**O que será verificado**

- A classe `skewleft` possui a propriedade `transform` igual a `matrix(1, 0, 0.176327, 1, 0, 0)`

</details>

## 15 - Crie a classe `skewright`.

<details>
  <summary>A classe <code>skewright</code> deve possuir propriedades específicas</summary><br />

**Pontos importantes:**

* Defina as propriedades:
  - `transform` com o valor `matrix(1, 0, -0.176327, 1, 0, 0)`;

**O que será verificado**

- A classe `skewright` possui a propriedade `transform` igual a `matrix(1, 0, -0.176327, 1, 0, 0)`

</details>

## 16 - Adicione as classes de forma aleatória a fim de estilizar as palavras.

<details>
  <summary>Utilize o <code>Javascript</code> para atribuir as classes de forma aleatória</summary><br />

**Pontos importantes:**

* As classes devem ser adicionadas às tags `span` de forma **aleatória**.
* Sempre adicione mais de uma classe em uma palavra.
* Utilize as classes:
  - `newspaper`, `magazine1`, `magazine2` (Grupo estilo)
  - `medium`, `big`, `reallybig` (Grupo tamanho)
  - `rotateleft`, `rotateright` (Grupo rotação)
  - `skewleft`, `skewright` (Grupo inclinação)

* **Não** utilize mais de uma classe do mesmo grupo.
* Todas as palavras devem conter uma classe de cada grupo.
* Ou seja, se você utilizar as classes `magazine1`, `big`, `rotateleft` e `skewright` em uma palavra, as demais classes de cada grupo não devem ser usadas para essa mesma palavra. Por exemplo, do grupo estilo não seriam utilizadas as classes `newspaper` e `magazine2` pois a classe `magazine1` já está sendo utilizada.

**O que será verificado**

- Ao criar uma carta, ela recebe uma lista de classes aleatórias

- Ao criar uma segunda carta, ela recebe uma lista de classes aleatórias

- As classes das duas cartas não são exatamente iguais

</details>

# Requisitos Bônus:

## 17 - Com uma carta misteriosa gerada, adicione a possibilidade de alterar o estilo de uma palavra específica ao clicar nela

<details>
  <summary>Ao clicar na carta gerada, a classe dela é alterada</summary><br />

**Pontos importantes:**

* Ao clicar em uma palavra, um novo estilo **aleatório** deve ser aplicado.
* O número de mudanças deve ser ilimitado.

**O que será verificado**

- A palavra contém quatro classes, uma de cada grupo;

- Ao clicar em uma carta, uma nova lista aleatória de classes é gerada;

- Ao clicar novamente na mesma carta, uma nova lista aleatória de classes é gerada e se a nova lista é diferente da lista anterior;

</details>

## 18 - Deve haver um parágrafo com o id=\"carta-contador\" onde existirá um contador de palavras

<details>
  <summary>Sua página deve conter um paragrafo com id="carta-contador" que conte quantas palavras foram geradas</summary><br />

**Pontos importantes:**

* Esse contador deve informar a quantidade de palavras presentes na carta misteriosa gerada.



**O que será verificado**

- Existe um elemento `p` com o `id="carta-contador"`

- Ao criar uma carta o elemento `p` com o `id="carta-contador"`  é atualizado com o número de palavras da carta (valor numérico).

</details>
