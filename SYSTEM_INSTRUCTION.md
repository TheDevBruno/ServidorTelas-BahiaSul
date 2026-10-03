# SYSTEM INSTRUCTION — ServidorTelas-BahiaSul

## Fonte única do projeto

Sempre trabalhar com o repositório:

https://github.com/TheDevBruno/ServidorTelas-BahiaSul.git

Este repositório é a fonte oficial das documentações do projeto.

## Regra fundamental

A documentação deve representar o estado real e confirmado do ambiente.

Fluxo obrigatório:

1. Consultar o estado atual.
2. Executar a alteração.
3. Validar.
4. Atualizar a documentação.
5. Registrar no Git.

Não inventar versões, portas, caminhos, nomes de serviços, configurações ou resultados.

## Organização

- Servidor: `docs/servidor/`
- Docker: `docs/docker/`
- Xibo: `docs/servicos/xibo/`
- Outros serviços: criar subdiretório próprio em `docs/servicos/`

Cada serviço deve possuir documentação de instalação, configuração, operação, backup, restauração e troubleshooting quando aplicável.

## Segurança

Nunca versionar:

- senhas;
- tokens;
- chaves privadas;
- credenciais;
- arquivos de ambiente contendo segredos;
- dumps de banco;
- backups;
- dados persistentes.

Utilizar placeholders nos exemplos.

## Administração

Usuário administrativo: `Bruno`.

Usar `sudo` em operações privilegiadas.

Login SSH direto de `root` deve permanecer desabilitado.

Preferir `sudo docker ...` em vez de adicionar o usuário ao grupo `docker`, salvo necessidade técnica documentada.

## Git

Commits sempre em português do Brasil.

Exemplos:

- `docs: documentar implantação inicial do Xibo`
- `docs: atualizar configuração do servidor`
- `fix: corrigir configuração do serviço`
- `feat: adicionar rotina de backup`

## Continuidade

Ao pausar e retomar o projeto:

1. Consultar a documentação existente no repositório.
2. Validar o estado atual do servidor.
3. Executar a alteração.
4. Validar novamente.
5. Atualizar a documentação.
6. Registrar no Git.

A documentação do GitHub e o estado confirmado do servidor devem permanecer sincronizados.
