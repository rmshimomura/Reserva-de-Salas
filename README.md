# Reserva de salas CCE - UEL
Aqui ficará o código em React do protótipo de programa para o ensalamento no CCE

## Observações importantes:
- O desenvolvimento de funções e testes será realizado fazendo uma branch que deriva da branch de ```development```, de tal forma que não irão afetar a branch ```master```.
- O merge das novas funcionalidades pós teste será realizado na branch de ```development```, seguido de ainda mais testes, a fim de testar e procurar por possíveis problemas com o sistema.
- Após confirmação do bom funcionamento na branch de ```development```, será realizado o merge com a branch ```master```, lançando assim uma nova versão do programa.
- A operação de merge, criação e aprovação do pull request será feita diretamente no site do GitHub, mediante aprovação de todos os membros do grupo.

## Procedimentos a ser seguidos em relação as branches:

Inicialmente, deve ser seguido as operações:

1. Inicialize o repositório git: ```git init```
2. Adicione o source: ```git remote add origin https://github.com/rmshimomura/Reserva-de-Salas.git```
3. Baixe os arquivos na branch ```master``` do repositório remoto: ```git pull origin master```
4. Setar fonte de atualizações da branch local para a branch remota: ```git branch --set-upstream-to=origin/master master```
5. Criar nova branch de ```development```: ```git checkout -b development```
6. Atulizar .git: ```git fetch```
7. Setar fonte de atualizações da branch local para a branch remota: ```git branch --set-upstream-to=origin/development development```
8. Baixe os arquivos remotos para o seu repositório local: ```git pull```

### Criação de novas funcionalidades:
1. ```git checkout development```
2. ```git pull```
3. ```git checkout -b <nome_da_funcionalidade>```
4. ```git add <arquivos...>```
5. ```git commit -m <mensagem...>```
6. Após ter certeza do funcionamento da nova implementação faça: ```git push origin <nome_da_funcionalidade>```
7. (Merge será feito posteriormente, como descrito nas observações importantes).

## Comandos importantes:

1. ```git checkout <nome_da_branch>```: Troca de branch
2. ```git fetch```: Atualiza as referências para novas branches
