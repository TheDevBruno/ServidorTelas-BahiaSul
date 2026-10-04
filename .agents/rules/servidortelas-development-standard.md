# RULE — servidorTelas Development Standard

## Objetivo

Esta Rule define o padrão obrigatório para desenvolvimento, administração, documentação, scripts, infraestrutura e versionamento do projeto **servidorTelas**.

Deve ser aplicada sempre que:

- iniciar uma nova conversa sobre o projeto;
- abrir ou retomar o workspace no Antigravity;
- continuar um trabalho pausado;
- criar ou alterar funcionalidades;
- executar comandos no servidor;
- criar scripts ou configurações;
- alterar infraestrutura;
- realizar commits ou sincronizações com o GitHub.

---

## 1. Continuidade do projeto

Ao iniciar ou retomar o projeto:

1. Identificar o workspace como `servidorTelas`.
2. Consultar a documentação existente antes de alterar algo.
3. Verificar o estado atual quando a tarefa envolver infraestrutura.
4. Consultar `git status` e histórico quando houver alterações anteriores.
5. Identificar tarefas concluídas, pendentes e problemas conhecidos.
6. Continuar a partir do estado real encontrado.

Nunca assumir que uma configuração permanece igual à conversa anterior.

Nunca repetir uma etapa concluída sem verificar seu estado atual.

---

## 2. Padrão de resposta

Para tarefas técnicas, organizar a resposta conforme necessário:

### Objetivo
O que será realizado.

### Diagnóstico
Estado atual identificado.

### Ação
O que será alterado.

### Código / Comandos
Comandos ou arquivos completos.

### Uso
Onde salvar, como executar e pré-requisitos.

### Validação
Como confirmar que funcionou.

### Documentação
Arquivos Markdown criados ou atualizados.

### Git
Commit recomendado ou realizado quando aplicável.

Não adicionar seções desnecessárias em tarefas simples.

---

## 3. Código e scripts

**Todo código solicitado deve ser retornado completo**, nunca apenas um trecho quando o usuário precisar criar ou substituir um arquivo.

Sempre informar:

- caminho completo do arquivo;
- ação: criar, alterar ou substituir;
- conteúdo completo;
- finalidade;
- pré-requisitos;
- como executar;
- resultado esperado;
- como validar;
- como desfazer, quando aplicável.

Exemplo de identificação:

```text
Arquivo:
/opt/servidortelas/scripts/backup.sh

Ação:
CRIAR
```

Quando houver múltiplos comandos, manter a ordem correta de execução.

Não inventar caminhos, portas, usuários, containers, IPs ou configurações existentes.

---

## 4. Comandos administrativos

Antes de modificar infraestrutura, diagnosticar o estado atual.

Preferir comandos como:

```bash
systemctl status SERVICO
docker compose ps
docker compose logs --tail=100
ss -tulpn
df -h
free -h
ip addr
ip route
```

Comandos destrutivos ou potencialmente irreversíveis exigem explicação do impacto antes da execução.

Evitar comandos como `rm`, `docker system prune`, `DROP`, `mkfs`, `fdisk`, `parted` ou alterações críticas sem verificar o alvo.

Não utilizar `|| true` para mascarar erros sem justificativa.

---

## 5. Documentação obrigatória

O projeto deve permanecer documentado.

Manter, conforme aplicável:

```text
docs/
├── README.md
├── ARCHITECTURE.md
├── INFRASTRUCTURE.md
├── SERVICES.md
├── NETWORK.md
├── SECURITY.md
├── BACKUP.md
├── MONITORING.md
├── OPERATIONS.md
├── PROJECT_STATE.md
└── CHANGELOG.md
```

A estrutura pode ser adaptada ao projeto real.

Não criar documentação duplicada sem necessidade.

---

## 6. Novas funcionalidades

Toda funcionalidade relevante deve ser documentada.

Antes de criar um Markdown:

1. pesquisar a documentação existente;
2. verificar se o assunto já está documentado;
3. determinar se é correção, atualização, extensão ou nova implementação.

### Regra

Se for apenas alteração de algo existente, atualizar o documento existente.

Se for uma implementação diferente, mesmo com o mesmo propósito, criar documentação específica quando necessário.

Exemplo:

```text
docs/MONITORING.md
docs/MONITORING_PROMETHEUS.md
docs/MONITORING_GRAFANA.md
docs/MONITORING_ALERTAS.md
```

A documentação específica deve explicar principalmente:

- diferenças;
- arquitetura;
- configuração;
- dependências;
- comandos;
- limitações;
- operação;
- validação.

Não copiar integralmente documentação existente.

---

## 7. Estado do projeto

Manter, quando aplicável:

```text
docs/PROJECT_STATE.md
```

Registrar:

- estado atual;
- serviços instalados;
- serviços funcionando;
- tarefas concluídas;
- tarefas pendentes;
- problemas conhecidos;
- próximas etapas;
- decisões relevantes.

Ao retomar uma tarefa pausada, consultar este arquivo antes de continuar.

Após alterações relevantes, atualizá-lo.

---

## 8. Scripts

Scripts devem ser:

- completos;
- legíveis;
- seguros;
- documentados;
- preferencialmente idempotentes;
- versionados.

Quando apropriado utilizar:

```bash
set -euo pipefail
```

Scripts destrutivos devem validar ambiente e alvo antes de executar.

---

## 9. Docker

Quando utilizar Docker:

- preferir Docker Compose;
- versionar arquivos de composição;
- utilizar volumes persistentes;
- documentar portas, volumes, redes e variáveis;
- não versionar secrets;
- fornecer `.env.example` quando necessário.

Validar serviços com:

```bash
docker compose ps
docker compose logs --tail=100
```

Não considerar um serviço concluído apenas porque o container iniciou.

---

## 10. Monitoramento

Para monitoramento do `servidorTelas`, considerar:

```text
Prometheus
Grafana
Node Exporter
cAdvisor
Alertmanager
```

Monitorar separadamente:

### Servidor
- CPU;
- RAM;
- disco;
- filesystem;
- rede;
- uptime.

### Containers
- disponibilidade;
- CPU;
- RAM;
- reinicializações;
- erros.

### Aplicações
- Xibo;
- banco de dados;
- serviços auxiliares.

### Telas
- online/offline;
- último contato;
- disponibilidade;
- falhas recorrentes.

---

## 11. Segurança

Não expor serviços administrativos sem necessidade.

Antes de abrir uma porta:

1. identificar o serviço;
2. identificar quem precisa acessá-lo;
3. verificar se o acesso pode ser interno;
4. considerar VPN/Tailscale;
5. verificar firewall;
6. documentar a porta e o motivo.

Nunca versionar:

```text
senhas
tokens
API keys
chaves privadas
credenciais
.env com secrets
```

Nunca inventar credenciais.

---

## 12. Git e GitHub

Git é o histórico oficial do projeto.

Antes de um commit:

```bash
git status
git diff --check
git diff
```

Após concluir uma alteração relevante, realizar commit quando aplicável.

Mensagens de commit devem ser **sempre em português do Brasil**, preferencialmente seguindo Conventional Commits:

```text
feat: adicionar monitoramento com Prometheus
fix: corrigir configuração do Xibo
docs: documentar arquitetura do servidor
chore: atualizar configuração do Docker
refactor: reorganizar scripts de manutenção
```

Evitar mensagens genéricas como:

```text
update
changes
fix
teste
alterações
```

Separar commits por finalidade.

Após o commit:

```bash
git status
```

Quando necessário e autorizado, sincronizar com o GitHub:

```bash
git push
```

Não utilizar `git push --force` sem avaliar o impacto.

---

## 13. Validação obrigatória

Uma alteração somente pode ser considerada concluída após:

```text
Implementação
    ↓
Validação
    ↓
Documentação
    ↓
Git
```

Sempre que aplicável verificar:

- serviço ativo;
- logs;
- portas;
- conectividade;
- funcionamento da aplicação;
- persistência dos dados;
- configuração;
- documentação.

---

## 14. Alterações sem diagnóstico

Não alterar configurações existentes sem conhecer seu estado atual.

Sequência preferencial:

```text
Diagnosticar
    ↓
Planejar
    ↓
Alterar
    ↓
Validar
    ↓
Documentar
    ↓
Versionar
```

---

## 15. Regra de retomada

Ao retornar ao desenvolvimento após uma pausa:

```text
1. Consultar PROJECT_STATE.md
2. Consultar documentação relevante
3. Verificar git status
4. Verificar serviços envolvidos
5. Identificar pendências
6. Continuar do ponto correto
```

Não reiniciar o projeto desnecessariamente.

---

## 16. Checklist de conclusão

Quando aplicável:

```text
[ ] Implementação concluída
[ ] Configuração validada
[ ] Serviço funcionando
[ ] Logs verificados
[ ] Documentação atualizada
[ ] PROJECT_STATE atualizado
[ ] CHANGELOG atualizado
[ ] git diff revisado
[ ] Commit realizado
[ ] Push realizado, se necessário
```

---

## Regra final

Para o projeto `servidorTelas`, toda alteração relevante deve buscar:

**CONSISTÊNCIA + SEGURANÇA + VALIDAÇÃO + DOCUMENTAÇÃO + RASTREABILIDADE + VERSIONAMENTO**

Uma tarefa não é considerada completa apenas porque funciona.

Ela deve estar:

**IMPLEMENTADA + VALIDADA + DOCUMENTADA + VERSIONADA**
