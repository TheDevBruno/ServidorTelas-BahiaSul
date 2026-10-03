# Xibo CMS — Troubleshooting

## Containers

```bash
cd /opt/bahiasul/xibo

sudo docker compose ps
sudo docker compose logs --tail=200 cms-web
sudo docker compose logs --tail=200 cms-db
```

## Banco

Confirmar os serviços:

```bash
sudo docker compose config --services
```

O banco é:

```text
cms-db
```

## Web

```bash
sudo docker ps
sudo ss -lntp | grep ':80'
curl -I http://10.98.254.189
```

## XMR

```bash
sudo docker compose logs --tail=200 cms-xmr
sudo ss -lntp | grep ':9505'
```

## Docker

```bash
sudo systemctl status docker
sudo docker version
sudo docker info
```

## Rede

```bash
ip addr
ip route
/usr/bin/ping -c 4 10.98.254.1
/usr/bin/ping -c 4 8.8.8.8
curl -I https://download.docker.com
```

## Regra

Antes de alterar qualquer configuração:

1. Coletar estado atual.
2. Coletar logs.
3. Executar a correção.
4. Validar.
5. Atualizar a documentação.
6. Registrar no Git.
