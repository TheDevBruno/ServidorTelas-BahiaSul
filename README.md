# Servidor de Telas BahiaSul

Servidor central da infraestrutura de Mídia Indoor BahiaSul.

## Fonte oficial

**Repositório:** https://github.com/TheDevBruno/ServidorTelas-BahiaSul.git

Este repositório é a fonte oficial das documentações do projeto. Toda documentação nova ou alteração deve ser registrada aqui e mantida sincronizada com o estado real do servidor.

## Estado atual

| Item | Estado |
|---|---|
| Hostname | `servidortelas` |
| Plataforma | Proxmox VE |
| SO | Debian 13 Trixie |
| IPv4 | `10.98.254.189/24` |
| Gateway | `10.98.254.1` |
| CPU | 2 vCPU |
| RAM | 8 GB |
| Disco | 127 GB |
| Docker | Instalado |
| Xibo CMS | 4.5.3 |
| Xibo Web | TCP/80 |
| XMR | TCP/9505 |
| MySQL | 8.4 |
| Memcached | Ativo |
| QuickChart | Ativo |

## Diretório do Xibo

```text
/opt/bahiasul/xibo/

### 3. Criar o `SYSTEM_INSTRUCTION.md`

```bash
cat > SYSTEM_INSTRUCTION.md <<'EOF'
# SYSTEM INSTRUCTION — ServidorTelas-BahiaSul

## Fonte única do projeto

Sempre trabalhar com o repositório:

https://github.com/TheDevBruno/ServidorTelas-BahiaSul.git

Este repositório é a fonte oficial das documentações do projeto. Nunca criar ou manter documentação técnica equivalente em outro repositório.

## Regra fundamental

A documentação deve representar o estado real e confirmado do ambiente.

Fluxo obrigatório:

1. Consultar o estado atual.
2. Executar a alteração.
3. Validar.
4. Atualizar a documentação.
5. Registrar no Git.

Não inventar versões, portas, caminhos, nomes de serviços, configurações ou resultados.

## Agregação ao servidor e aos serviços

Toda documentação deve estar associada ao recurso que documenta.

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
- arquivos de ambiente que contenham segredos.

Usar placeholders nos exemplos.

## Administração

Usuário administrativo: `Bruno`.

Usar `sudo` em operações privilegiadas.

Login SSH direto de `root` deve permanecer desabilitado.

Preferir `sudo docker ...` em vez de adicionar o usuário ao grupo `docker`, salvo necessidade técnica documentada.

## Git

Commits sempre em português do Brasil.

Exemplos:

```text
docs: documentar implantação inicial do Xibo
docs: atualizar configuração do servidor
fix: corrigir configuração do serviço
feat: adicionar rotina de backup

### 3. Criar o `SYSTEM_INSTRUCTION.md`

```bash
cat > SYSTEM_INSTRUCTION.md <<'EOF'
# SYSTEM INSTRUCTION — ServidorTelas-BahiaSul

## Fonte única do projeto

Sempre trabalhar com o repositório:

https://github.com/TheDevBruno/ServidorTelas-BahiaSul.git

Este repositório é a fonte oficial das documentações do projeto. Nunca criar ou manter documentação técnica equivalente em outro repositório.

## Regra fundamental

A documentação deve representar o estado real e confirmado do ambiente.

Fluxo obrigatório:

1. Consultar o estado atual.
2. Executar a alteração.
3. Validar.
4. Atualizar a documentação.
5. Registrar no Git.

Não inventar versões, portas, caminhos, nomes de serviços, configurações ou resultados.

## Agregação ao servidor e aos serviços

Toda documentação deve estar associada ao recurso que documenta.

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
- arquivos de ambiente que contenham segredos.

Usar placeholders nos exemplos.

## Administração

Usuário administrativo: `Bruno`.

Usar `sudo` em operações privilegiadas.

Login SSH direto de `root` deve permanecer desabilitado.

Preferir `sudo docker ...` em vez de adicionar o usuário ao grupo `docker`, salvo necessidade técnica documentada.

## Git

Commits sempre em português do Brasil.

Exemplos:

```text
docs: documentar implantação inicial do Xibo
docs: atualizar configuração do servidor
fix: corrigir configuração do serviço
feat: adicionar rotina de backup

### 5. Criar documentação do Docker

```bash
cat > docs/docker/configuracao.md <<'EOF'
# Docker — Configuração

## Estado

Docker está instalado e ativo no servidor `servidortelas`.

## Versões

```text
Docker Engine: 29.8.2
Compose: v5.6.0
Storage Driver: overlayfs
Docker Root Dir: /var/lib/docker


### 5. Criar documentação do Docker

```bash
cat > docs/docker/configuracao.md <<'EOF'
# Docker — Configuração

## Estado

Docker está instalado e ativo no servidor `servidortelas`.

## Versões

```text
Docker Engine: 29.8.2
Compose: v5.6.0
Storage Driver: overlayfs
Docker Root Dir: /var/lib/docker

### 7. Verificar o que será enviado

**Muito importante:** não copie o `config.env` nem o backup para o Git.

Crie o `.gitignore`:

```bash
cat > .gitignore <<'EOF'
# Segredos
*.env
*.env.*
!.env.example
config.env

# Backups e dados
backup/
*.sql
*.sql.gz
*.tar
*.tar.gz
shared/
