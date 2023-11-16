# Rick and Morty - Personagens

Este projeto foi desenvolvido como um teste de desenvolvimento em framework Angular. Ele utiliza a API do Rick and Morty para exibir uma lista de personagens e seus detalhes.

## Estrutura do Projeto

* **src/:** Contém todo o código-fonte da aplicação Angular.
* **assets/:** Armazena arquivos estáticos como imagens, ícones, etc.
* **app/:** Contém os componentes, serviços e módulos da aplicação.

## Instalação

Para executar este projeto localmente, siga os passos abaixo:

1. Clone o repositório do GitHub:

```bash
git clone https://github.com/RoxanieFernandes/rick-and-morty.git

cd rick-and-morty/rick-and-morty
```
2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor local:
```bash
ng serve 
```
ou

```bash
npm start
```


4. Acesse a aplicação no navegador: 
http://localhost:4200/


## Funcionalidades Principais

* Listagem de Personagens: Mostra uma lista de personagens com imagens e nomes.
* Realiza busca de Personagens pelo nome.
* Detalhes dos Personagens: Ao clicar em um personagem, exibe os detalhes como status, espécie, etc.

## Documentação do Código

O código-fonte está organizado em componentes, serviços, módulos e interface para facilitar a manutenção e extensão do projeto.

## Documentação de Cores

| Cor               | Hexadecimal                                                |
| ----------------- | ---------------------------------------------------------------- |
| Botões       | ![#b5d932](https://via.placeholder.com/10/b5d932?text=+) #b5d932 |
| Links       | ![#434e1c](https://via.placeholder.com/10/434e1c?text=+) #434e1c |
| Título      | ![#555454](https://via.placeholder.com/10/555454?text=+) #555454 |


## Testes

Atualmente, não existem testes automatizados implementados para este projeto.

## Apêndice: Biblioteca ngx-infinite-scroll

Este projeto utiliza a biblioteca `ngx-infinite-scroll` para implementar a funcionalidade de scroll infinito na listagem de personagens. A biblioteca oferece uma maneira simples de carregar mais dados conforme o usuário rola a página para baixo.

Para adicionar a biblioteca ao projeto, foi executado o seguinte comando no terminal:

```bash
npm install ngx-infinite-scroll
```

A biblioteca foi utilizada no componente responsável pela listagem de personagens para carregar automaticamente novos personagens quando o usuário se aproxima do final da lista.

Para mais informações sobre a biblioteca `ngx-infinite-scroll`, consulte a documentação oficial [aqui](https://www.npmjs.com/package/ngx-infinite-scroll).

## Apêndice: Utilização do Bootstrap

Este projeto utiliza o framework CSS Bootstrap para estilização e layout de componentes. O Bootstrap oferece uma gama de estilos predefinidos e componentes prontos para uso, facilitando a criação de interfaces responsivas e visualmente atraentes.

Para adicionar o Bootstrap ao projeto, foi utilizado o seguinte procedimento:

1. **Instalação via npm:**
   O Bootstrap foi instalado via npm (Node Package Manager) executando o seguinte comando no terminal:

   ```bash
   npm install bootstrap
   ```

2. **Importação no Projeto:**
   Após a instalação, o Bootstrap foi importado no projeto, normalmente através do arquivo `styles.css`:

   ```css
   // No arquivo styles.css
   @import "~bootstrap/dist/css/bootstrap.min.css";
   ```
3. **Utilização:**
   Os estilos e componentes do Bootstrap foram utilizados para proporcionar um layout responsivo e consistente em diferentes partes da aplicação, como formulários, grids, botões, etc.

Para mais informações sobre o Bootstrap, consulte a documentação oficial [aqui](https://getbootstrap.com/).


## Aprendizado Durante o Desenvolvimento

Durante a criação deste projeto, tive a oportunidade de aprender e aprimorar várias habilidades técnicas e conceitos. Gostaria de destacar alguns pontos importantes:

### Utilização do Bootstrap
A integração do framework Bootstrap foi uma etapa desafiadora, mas enriquecedora. Ao explorar e aplicar os estilos e componentes oferecidos pelo Bootstrap, pude compreender melhor a importância de frameworks para agilizar o desenvolvimento front-end e garantir uma interface consistente e responsiva. A curva de aprendizado foi significativa, mas consegui aplicar os princípios básicos para criar um layout mais estruturado e atraente para a aplicação.

### Implementação do Scroll Infinito com ngx-infinite-scroll
A integração da biblioteca ngx-infinite-scroll para a funcionalidade de scroll infinito foi um desafio interessante. Ao explorar a documentação e exemplos disponíveis, adquiri conhecimento sobre como implementar a paginação de maneira dinâmica, permitindo o carregamento progressivo de conteúdo conforme o usuário se aproxima do final da lista. Esta experiência me proporcionou uma compreensão mais profunda sobre técnicas de scroll infinito e como aplicá-las em projetos reais.

### A Importância do Estudo Contínuo
Ambas as tecnologias, Bootstrap e ngx-infinite-scroll, demandaram um tempo significativo de estudo e prática para sua correta implementação. Durante esse processo, percebi a importância de estar sempre disposta a aprender e enfrentar desafios. Nem sempre as coisas saem como planejado, mas a capacidade de pesquisa, experimentação e persistência são fundamentais para alcançar resultados funcionais e significativos.

Embora possa haver áreas onde gostaria de melhorar ou refinar no projeto, considero que a aplicação das tecnologias aprendidas representa um passo importante no meu desenvolvimento como desenvolvedora. Estou ansiosa para aplicar esses conhecimentos em projetos futuros e continuar a aprender e evoluir na área de desenvolvimento web.


## Autores
- [@roxaniefernandes](https://www.github.com/RoxanieFernandes)


