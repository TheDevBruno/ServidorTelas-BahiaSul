# Xibo CMS — Configuração

## Publicação

Xibo Web:

```text
10.98.254.189:80
```

XMR:

```text
10.98.254.189:9505
```

## Serviços

| Serviço | Container | Porta |
|---|---|---|
| `cms-web` | `xibo-cms-web-1` | `80:80` |
| `cms-xmr` | `xibo-cms-xmr-1` | `9505:9505` |
| `cms-db` | `xibo-cms-db-1` | interna |
| `cms-memcached` | `xibo-cms-memcached-1` | interna |
| `cms-quickchart` | `xibo-cms-quickchart-1` | interna |

## Banco

MySQL `8.4`.

```text
MYSQL_USER=cms
MYSQL_DATABASE=cms
```

A senha não deve ser documentada.

## Validação

```bash
cd /opt/bahiasul/xibo
sudo docker compose ps
sudo docker compose config
curl -I http://10.98.254.189
```
