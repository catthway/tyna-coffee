# tyna-coffee
## Objetivo
Criar um site simples e funcional para a cafeteria *Tyna-Coffee*, utilizando boas práticas de versionamento e colaboração com Git.

## Funcionalidades
- Página inicial com a apresentação da cafeteria.
- Página de menu com os produtos disponíveis.
- Página de contato com formulário para mensagens dos clientes.
- Design responsivo.

## Estrutura
- index.html: Página inicial.
- menu.html: Página de menu.
- contact.html: Página de contato.
- assets/css/style.css: Estilo do site.
- assets/js/script.js: Scripts adicionais.
- assets/images/: Imagens do site.

## Cronograma de Desenvolvimento
| Etapa                  | Descrição                          | Prazo       |
|------------------------|------------------------------------|-------------|
| Configuração inicial   | Configurar repositório e estrutura | 1 dia       |
| Design da interface    | Criar layout responsivo           | 2 dias      |
| Desenvolvimento        | Implementar funcionalidades       | 3 dias      |
| Testes e ajustes finais| Garantir responsividade e usabilidade | 2 dias  |


### Desafios Enfrentados no Desenvolvimento

1. Organização de Arquivos 
   Durante o desenvolvimento, um dos maiores desafios foi a organização dos arquivos, especialmente as imagens. Inicialmente, as imagens estavam em locais inadequados ou com nomes errados, o que causava problemas ao tentar exibi-las nas páginas.  
   Solução: Utilizei o Git para versionar as imagens e garantir que estivessem corretamente organizadas. O Git permitiu acompanhar as mudanças nas imagens e nos arquivos, garantindo que as pastas e os arquivos fossem referenciados corretamente no código.

2. Configuração do GitHub Pages  
   Outro desafio foi a configuração do GitHub Pages para exibir corretamente o site. O arquivo index.html não estava sendo encontrado corretamente, resultando em erros 404 ao acessar a página.  
   Solução: Após revisar a estrutura do repositório e garantir que o arquivo index.html estivesse na raiz, consegui configurar corretamente o GitHub Pages e resolver o problema.

3. Manutenção do Código Durante o Desenvolvimento  
   O projeto teve várias etapas, incluindo a criação do menu, da página de contato, e ajustes no design. A dificuldade foi garantir que diferentes partes do projeto pudessem ser desenvolvidas de maneira isolada sem afetar outras partes do site.  
   *Solução: Para isso, utilizei branches no Git para trabalhar em funcionalidades separadas, como "Menu" e "Contato", e assim evitar interferência no código principal.

### Como o Git Ajudou a Gerenciar o Projeto

1. Controle de Versão  
   O Git foi fundamental para registrar cada alteração no código, permitindo que eu mantivesse um histórico completo do projeto. Cada nova funcionalidade foi registrada com commits claros, o que facilitou a reversão de mudanças quando necessário e a manutenção da integridade do projeto.

2. Uso de Branches 
   Utilizando branches, pude desenvolver diferentes partes do projeto de forma isolada, como por exemplo, a funcionalidade do menu e a seção de contato. Isso permitiu que o código principal na branch main estivesse sempre funcional, sem o risco de interromper o fluxo de trabalho.

3. Facilidade para Colaborar e Fazer Deploy  
   Com o GitHub Pages, o deploy do projeto foi automatizado, facilitando a publicação do site diretamente do repositório. Cada commit e push que eu fazia no repositório automaticamente atualizava o site, sem a necessidade de fazer deploy manualmente, tornando o processo muito mais ágil.

4. Colaboração e Feedback  
   Embora o projeto tenha sido desenvolvido individualmente, o Git facilita a colaboração, pois qualquer alteração feita no código pode ser facilmente compartilhada com outras pessoas (caso o projeto seja colaborativo no futuro). Além disso, a estrutura do Git permite um bom controle de versões e revisões do código.
