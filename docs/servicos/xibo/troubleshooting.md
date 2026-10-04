# Xibo CMS — Troubleshooting

## Falha de Player: "This display does not have a licence" (Identificador 1000)

### Causa
Esta mensagem ocorre quando uma tela/player se conecta ao Xibo CMS, mas o status de licença (`isLicensed`) ou autorização (`isAuthorized`) da tela não está ativo na base de dados. Enquanto não estiver licenciado, o player é impedido de reproduzir layouts e mídias.

### Solução no Painel Web
1. Acesse o painel web: `http://10.98.254.189/`
2. Navegue até **Telas** (`Displays`) ➔ **Telas** (`Displays`).
3. No menu de ação (`...`) da tela desejada, clique em **Autorizar** / **Editar**.
4. Marque a opção **Licenciado? (`Is Licensed?`)** como **Sim**.
5. Salve as alterações.

### Solução via Linha de Comando (Ativar todas as telas)
Para autorizar e licenciar todas as telas diretamente no banco de dados e reiniciar o cache:

```bash
sudo docker exec xibo-cms-db-1 mysql -u cms -pldlLtpdaqdImgY0NMLu7cRBK cms -e "
UPDATE display SET isLicensed = 1, isAuthorized = 1;
"
sudo docker restart xibo-cms-web-1 xibo-cms-memcached-1
```

---

## Erro no Widget: "A referência da sua biblioteca 0 não existe"

### Causa
Este aviso no Xibo v4 ocorre quando um Widget recém-criado tenta salvar o formulário no CMS sem associar uma mídia ou quando há um campo de biblioteca não selecionado no módulo.

### Como Resolver
1. **Recriar o Widget**:
   - Exclua o widget atual que está exibindo o alerta vermelho.
   - Adicione um novo Widget **HTML Incorporado** (*Embedded*) ou **Página Web** (*Webpage*).
2. **Utilizar o Módulo Página Web (Para Vídeos/YouTube)**:
   - Se o objetivo for reproduzir vídeos/músicas do YouTube, o módulo **Página Web** é o mais indicado.
   - Basta arrastá-lo para a região e colocar a URL direta: `https://www.youtube.com/embed/CODIGO_DO_VIDEO?autoplay=1`.

---

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
