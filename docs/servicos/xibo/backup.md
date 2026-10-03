# Xibo CMS — Backup

## Local

```text
/opt/bahiasul/xibo/backup/
```

## Backup inicial

Foi realizado backup inicial após a implantação contendo:

- `docker-compose.yml`
- `config.env`
- configuração resolvida do Compose
- relação de imagens
- informações dos containers
- dump MySQL
- `shared.tar.gz`
- `SHA256SUMS`

Esses arquivos não devem ser versionados no Git.

## Dump MySQL

Para MySQL 8.4:

```bash
sudo docker compose exec -T cms-db sh -c 'mysqldump --no-tablespaces -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" "$MYSQL_DATABASE"' > /caminho/para/xibo.sql
```

## Validação

```bash
ls -lh /caminho/para/xibo.sql
grep -c "CREATE TABLE" /caminho/para/xibo.sql
tail -n 5 /caminho/para/xibo.sql
```

## Integridade

```bash
sha256sum arquivo1 arquivo2 > SHA256SUMS
sha256sum -c SHA256SUMS
```

## Nunca versionar

- `config.env`
- dumps SQL
- backups
- dados compartilhados
- senhas
- tokens
