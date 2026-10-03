# Xibo CMS — Instalação

## Pré-requisitos

- Debian 13 Trixie
- Rede configurada
- SSH funcional
- Docker Engine
- Docker Compose Plugin

## Diretório

```bash
sudo mkdir -p /opt/bahiasul/xibo/{backup,config,shared}
cd /opt/bahiasul/xibo
```

## Imagens

```text
ghcr.io/xibosignage/xibo-cms:release-4.5.3
ghcr.io/xibosignage/xibo-xmr:1.3
mysql:8.4
memcached:alpine
ianw/quickchart
```

## Implantação

```bash
sudo docker compose config --images
sudo docker compose pull
sudo docker compose up -d
sudo docker compose ps
```

## Serviços esperados

```text
cms-web
cms-xmr
cms-db
cms-memcached
cms-quickchart
```

O banco utiliza o serviço `cms-db`.
