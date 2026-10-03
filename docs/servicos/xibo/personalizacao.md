# Xibo CMS — Personalização Visual (Branding Conexão BahiaSul)

## Visão Geral

Esta documentação descreve a padronização e personalização visual da interface do **Xibo CMS** para a **Conexão BahiaSul Mídia Indoor**.

A personalização abrange:
- **Identidade Visual**: Paleta de cores oficial (Azul Oceano `#004B87`, Azul Secundário `#005F9E` e Teal/Ciano `#00A896`).
- **Logo Oficial**: Aplicação do logo **Conexão BahiaSul Mídia Indoor** no painel administrativo e na tela de login.
- **Tela de Login**: Layout moderno com gradiente fluido, efeito glassmorphic e tipografia refinada (fonte Inter).
- **Interface Administrativa**: Cabeçalho customizado, menu lateral escuro, tabelas e botões estilizados.

---

## Estrutura de Arquivos de Customização

Os arquivos da personalização visual ficam armazenados no repositório em `custom/xibo/` e são aplicados no Xibo CMS através do diretório compartilhado `/opt/bahiasul/xibo/shared/cms/custom/`:

| Arquivo | Destino no Xibo CMS | Descrição |
|---|---|---|
| `custom/xibo/override.css` | `/opt/bahiasul/xibo/shared/cms/custom/override.css` | CSS de personalização carregado automaticamente pelo Xibo v4 |
| `custom/xibo/logo.png` | `/opt/bahiasul/xibo/shared/cms/custom/logo.png` | Logo da Conexão BahiaSul para o topo do painel |
| `custom/xibo/logo-login.png` | `/opt/bahiasul/xibo/shared/cms/custom/logo-login.png` | Logo da Conexão BahiaSul para a tela de autenticação |

---

## Procedimento de Implantação no Servidor

Para aplicar a personalização visual no ambiente de execução do Xibo CMS, execute os seguintes comandos no servidor `servidortelas`:

```bash
# 1. Copiar os arquivos customizados para o diretório compartilhado do Xibo
sudo cp /opt/bahiasul/ServidorTelas-BahiaSul/custom/xibo/* /opt/bahiasul/xibo/shared/cms/custom/

# 2. Ajustar as permissões para o usuário do servidor web (www-data)
sudo chown -R www-data:www-data /opt/bahiasul/xibo/shared/cms/custom/
sudo chmod 644 /opt/bahiasul/xibo/shared/cms/custom/*
```

---

## Configurações no Painel Administrativo do Xibo CMS

Após copiar os arquivos, conclua a parametrização visual no painel do Xibo:

1. Acesse o painel web: `http://10.98.254.189/`
2. Navegue até **Administração** (`Administration`) -> **Configurações** (`Settings`).
3. Na aba **Regional / ApARÊNCIA** (`Regional / Regional Settings`):
   - **Nome da Instância (`Instance Name`)**: `Conexão BahiaSul - Mídia Indoor`
   - **Título da Aplicação (`Application Title`)**: `Servidor de Telas BahiaSul`
   - **URL do Logo (`Logo URL`)**: `/custom/logo.png`
   - **URL do Logo de Login (`Login Logo URL`)**: `/custom/logo-login.png`
4. Salve as alterações.

---

## Especificações da Identidade Visual (Cores e Tipografia)

| Elemento | Valor / Código Hex | Aplicação |
|---|---|---|
| Cor Primária | `#004B87` | Cabeçalho, botões primários e destaques |
| Cor Secundária | `#005F9E` | Gradientes e estados hover de menu |
| Cor de Acento | `#00A896` | Badges, indicadores e destaques |
| Fundo Dark (Sidebar/Login) | `#0F172A` | Barra lateral e gradiente da tela de login |
| Tipografia | `'Inter', sans-serif` | Fonte padrão em todas as interfaces do CMS |

---

## Validação

Para validar que o estilo visual está ativo:

1. Acesse a tela de login em `http://10.98.254.189/login` e confirme se o cartão de login exibe o gradiente da BahiaSul e a nova logo.
2. Efetue login e verifique a barra superior em Azul Oceano com o logo no canto superior esquerdo.
