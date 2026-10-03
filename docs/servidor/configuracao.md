# Configuração do Servidor

## Identificação

| Item | Valor |
|---|---|
| Hostname | `servidortelas` |
| Plataforma | Proxmox VE |
| Sistema operacional | Debian GNU/Linux 13 (Trixie) |
| IPv4 | `10.98.254.189/24` |
| Rede | `10.98.254.0/24` |
| Gateway | `10.98.254.1` |
| Interface | `eth0` |
| SSH | TCP/22 |

## Recursos

| Recurso | Configuração |
|---|---|
| vCPU | 2 |
| RAM | 8 GB |
| Disco virtual | 127 GB |
| Partição `/` | 119 GB ext4 |
| Swap | 6,5 GB |
| Docker Bridge | `172.17.0.1/16` |

## Administração

Usuário administrativo: `Bruno`.

Operações privilegiadas devem utilizar `sudo`.

O acesso SSH direto de `root` permanece desabilitado.

## Docker

| Item | Valor |
|---|---|
| Docker Engine | `29.8.2` |
| Docker Compose | `v5.6.0` |
| Storage Driver | `overlayfs` |
| Docker Root Dir | `/var/lib/docker` |

O usuário `Bruno` utiliza `sudo docker`.

## Diretórios do projeto Xibo

```text
/opt/bahiasul/xibo/
├── backup/
├── config/
└── shared/
```

## Rede

```text
Rede:       10.98.254.0/24
Servidor:   10.98.254.189
Gateway:    10.98.254.1
Interface:  eth0
```

## Diagnóstico

```bash
cat /etc/os-release
hostname
ip addr
ip route
df -h
free -h
lscpu
sudo systemctl status ssh
sudo systemctl status docker
sudo docker ps
```

## Segurança

- Utilizar o usuário individual `Bruno`.
- Utilizar `sudo` para operações administrativas.
- Não utilizar `root` diretamente por SSH.
- Não armazenar senhas, tokens ou chaves privadas nesta documentação.
- Manter o endereço `10.98.254.189` reservado para esta VM.
