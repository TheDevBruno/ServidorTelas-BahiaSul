# Xibo CMS — Operação

## Diretório

```bash
cd /opt/bahiasul/xibo
```

## Status

```bash
sudo docker compose ps
```

## Iniciar

```bash
sudo docker compose up -d
```

## Parar

```bash
sudo docker compose down
```

## Reiniciar

```bash
sudo docker compose restart
```

## Atualizar

Antes de atualizar:

1. Realizar backup.
2. Validar estado atual.
3. Baixar imagens.
4. Recriar containers.
5. Validar funcionamento.

```bash
sudo docker compose pull
sudo docker compose up -d
sudo docker compose ps
```

## Logs

```bash
sudo docker compose logs --tail=100 cms-web
sudo docker compose logs --tail=100 cms-xmr
sudo docker compose logs --tail=100 cms-db
sudo docker compose logs --tail=100 cms-memcached
sudo docker compose logs --tail=100 cms-quickchart
```
