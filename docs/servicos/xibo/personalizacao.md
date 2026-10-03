# Xibo CMS — Personalização Visual (Design System Conexão BahiaSul)

## Visão Geral

Esta documentação especifica a reformulação visual do **Xibo CMS** alinhada estritamente às diretrizes do **Design System oficial da Conexão BahiaSul**.

A reformulação unifica:
- **Paleta de Cores Institucional**: Azul Escuro (`#0B3960`), Azul Médio (`#1B5693`) e Laranja Destaque (`#F26D21`).
- **Tipografia**: Família de fontes `Montserrat` (ou `Open Sans`), utilizando títulos em maiúsculas (`UPPERCASE`) e destaques em negrito laranja.
- **Logótipo Oficial**: Aplicação da marca oficial "Conexão BahiaSul - Internet feita para você!".
- **Componentes e Cartões de Interface (UI Cards)**: Cantos arredondados de `8px`, fundo de cartão branco puro (`#FFFFFF`), borda superior e botões primários em laranja.
- **Rodapé Institucional e Bordões**: Faixa em Azul Escuro e barra inferior em Laranja contendo os bordões da empresa:
  - *"Internet feita para você!"*
  - *"Faça sua parte, inspire outros e seja o exemplo!"*

---

## Estrutura de Cores (Design System)

| Categoria | Cor / Nome | Código Hex | Aplicação no Xibo CMS |
|---|---|---|---|
| **Cor Principal** | Azul Escuro | `#0B3960` | Cabeçalho, menu lateral, títulos H1/H3, rodapé e blocos principais |
| **Cor Secundária** | Azul Médio | `#1B5693` | Estados de hover, alternância em listas/tabelas e navegação |
| **Cor Destaque** | Laranja | `#F26D21` | Subtítulos H2, botões primários, alertas, barra de rodapé e destaques |
| **Texto Principal** | Cinza Escuro | `#333333` | Corpo de texto e descrições gerais |
| **Texto Inverso** | Branco Puro | `#FFFFFF` | Textos sobre fundos escuros (Azul/Laranja) |
| **Fundo Geral** | Cinza Claro | `#F8F9FA` | Fundo das páginas do sistema |
| **Fundo de Cartões**| Branco | `#FFFFFF` | Cartões de interface, tabelas e painéis |

---

## Diretrizes Tipográficas

- **Família de Fontes**: `Montserrat`, `Open Sans` ou `Roboto` (Sans-serif).
- **Título Principal (H1)**: Azul Escuro (`#0B3960`), Extra Negrito (Black 900), Maiúsculas (`UPPERCASE`). Ex: `"SISTEMA DE DESIGN"`.
- **Subtítulo (H2)**: Laranja (`#F26D21`), Negrito (Bold 700), Maiúsculas (`UPPERCASE`). Ex: `"DIRETRIZES VISUAIS"`.
- **Títulos de Cartões e Listas**: Azul Escuro (`#0B3960`), Negrito (Bold 700), Maiúsculas (`UPPERCASE`).
- **Corpo de Texto**: `#333333` Regular (400) com **ênfase em laranja negrito**.

---

## Estrutura de Arquivos de Implantação

Os arquivos da personalização visual estão versionados no repositório em `custom/xibo/` e são aplicados no volume compartilhado do container Xibo CMS em `/opt/bahiasul/xibo/shared/cms/custom/`:

| Arquivo | Destino no Xibo CMS | Função |
|---|---|---|
| [`custom/xibo/override.css`](file:///opt/bahiasul/ServidorTelas-BahiaSul/custom/xibo/override.css) | `/opt/bahiasul/xibo/shared/cms/custom/override.css` | Folha de estilos baseada no Design System oficial |
| `custom/xibo/logo.png` | `/opt/bahiasul/xibo/shared/cms/custom/logo.png` | Logótipo oficial em alta definição para o cabeçalho |
| `custom/xibo/logo-login.png` | `/opt/bahiasul/xibo/shared/cms/custom/logo-login.png` | Logótipo oficial para o cartão da tela de login |

---

## Procedimento de Implantação no Servidor

Para aplicar a personalização visual reformulada no ambiente Docker do Xibo, execute os seguintes comandos no servidor `servidortelas`:

```bash
# 1. Copiar os arquivos customizados para o diretório compartilhado do Xibo
sudo cp /opt/bahiasul/ServidorTelas-BahiaSul/custom/xibo/* /opt/bahiasul/xibo/shared/cms/custom/

# 2. Ajustar as permissões para o usuário do servidor web (www-data)
sudo chown -R www-data:www-data /opt/bahiasul/xibo/shared/cms/custom/
sudo chmod 644 /opt/bahiasul/xibo/shared/cms/custom/*
```

---

## Configurações no Painel Administrativo do Xibo CMS

Acesse `http://10.98.254.189/` e navegue até **Administração** (`Administration`) ➔ **Configurações** (`Settings`) ➔ **Regional / Aparência**:

- **Nome da Instância (`Instance Name`)**: `Conexão BahiaSul`
- **Título da Aplicação (`Application Title`)**: `Servidor de Telas BahiaSul`
- **URL do Logo (`Logo URL`)**: `/custom/logo.png`
- **URL do Logo de Login (`Login Logo URL`)**: `/custom/logo-login.png`

Salvar e recarregar o navegador (`Ctrl + F5`).
