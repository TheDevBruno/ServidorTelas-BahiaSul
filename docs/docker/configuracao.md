# Docker — Configuração

## Estado validado

- Docker Engine `29.8.2`
- Docker Compose `v5.6.0`
- Storage Driver `overlayfs`
- Docker Root Dir `/var/lib/docker`
- Serviço Docker ativo
- Container `hello-world` executado com sucesso

## Administração

```bash
sudo docker ps
sudo docker version
sudo docker info
sudo docker compose version
```

O usuário `Bruno` utiliza `sudo docker`.

## Xibo

Diretório:

```text
/opt/bahiasul/xibo/
```

Serviços:

| Serviço | Função |
|---|---|
| `cms-web` | Xibo CMS Web |
| `cms-xmr` | Xibo XMR |
| `cms-db` | MySQL |
| `cms-memcached` | Memcached |
| `cms-quickchart` | QuickChart |

Portas publicadas:

- `80/tcp` — Xibo Web
- `9505/tcp` — XMR

## Diagnóstico

```bash
cd /opt/bahiasul/xibo

sudo docker compose ps
sudo docker compose logs --tail=100 cms-web
sudo docker compose logs --tail=100 cms-xmr
sudo docker compose logs --tail=100 cms-db
sudo docker compose config
```
