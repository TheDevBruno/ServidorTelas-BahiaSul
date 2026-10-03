# Xibo CMS — Mídia Indoor BahiaSul

## Finalidade

O Xibo CMS é o serviço central de gerenciamento da infraestrutura de Mídia Indoor BahiaSul.

```text
REDE / VPN BAHIASUL
        │
        ▼
10.98.254.189
Servidor de Telas
        │
        ▼
Docker
        │
        ▼
Xibo CMS
        │
   ┌────┼────┐
   ▼    ▼    ▼
  TV   TV    TV
```

## Componentes

| Componente | Versão/imagem |
|---|---|
| Xibo CMS | `4.5.3` |
| Xibo XMR | `1.3` |
| MySQL | `8.4` |
| Memcached | `alpine` |
| QuickChart | `ianw/quickchart` |

## Containers

```text
xibo-cms-web-1
xibo-cms-xmr-1
xibo-cms-db-1
xibo-cms-memcached-1
xibo-cms-quickchart-1
```

## Acesso

```text
http://10.98.254.189
```

## Documentação

- [Instalação](instalacao.md)
- [Configuração](configuracao.md)
- [Personalização Visual / Branding](personalizacao.md)
- [Operação](operacao.md)
- [Backup](backup.md)
- [Troubleshooting](troubleshooting.md)
