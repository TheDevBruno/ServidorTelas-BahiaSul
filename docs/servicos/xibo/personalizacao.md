# Xibo CMS — Personalização Visual (Design System Conexão BahiaSul)

## Visão Geral

Esta documentação especifica a personalização e substituição visual do **Xibo CMS v4** alinhada estritamente às diretrizes do **Design System oficial da Conexão BahiaSul**.

No Xibo CMS v4, o mecanismo nativo de personalização de marca (*White Label*) fica localizado na biblioteca compartilhada em:
`/opt/bahiasul/xibo/shared/cms/library/brand/`

A personalização unifica:
- **Paleta de Cores Institucional**: Azul Escuro (`#0B3960`), Azul Médio (`#1B5693`) e Laranja Destaque (`#F26D21`).
- **Tipografia**: Família de fontes `Montserrat` (ou `Open Sans`), utilizando títulos em maiúsculas (`UPPERCASE`) e destaques em negrito laranja.
- **Logótipos Nativos**: Substituição dos arquivos `logo.svg`, `logo-dark.svg`, `logo-icon.svg`, `192x192.png` e `512x512.png`.
- **Tema CSS Nativo (`theme.css`)**: Definição das variáveis de marca `--brand-primary: #0B3960;` e `--brand-accent: #F26D21;` combinadas às regras do Design System.

---

## Estrutura de Cores (Design System)

| Categoria | Nome | Código Hex | Aplicação no Xibo CMS |
|---|---|---|---|
| **Cor Principal** | Azul Escuro | `#0B3960` | `--brand-primary`, cabeçalho, menu lateral, títulos H1/H3, rodapé |
| **Cor Secundária** | Azul Médio | `#1B5693` | Estados de hover em itens de menu, destaque secundário e alternância |
| **Cor Destaque** | Laranja | `#F26D21` | `--brand-accent`, subtítulos H2, botões primários e destaques |
| **Texto Principal** | Cinza Escuro | `#333333` | Corpo de texto com legibilidade máxima (`#333333`) |
| **Texto Inverso** | Branco | `#FFFFFF` | Texto sobre fundos escuros (Azul e Laranja) |
| **Fundo Geral** | Cinza Claro | `#F8F9FA` | Fundo principal da aplicação |
| **Fundo Cartão** | Branco Puro | `#FFFFFF` | Fundo de painéis e cartões horizontais de interface |

---

## Estrutura do Diretório de Marca Oficial (`library/brand/`)

No volume compartilhado do container Xibo CMS (`/opt/bahiasul/xibo/shared/cms/library/brand/`):

| Arquivo | Função Nativa no Xibo v4 |
|---|---|
| `logo.svg` | Logótipo principal da Conexão BahiaSul |
| `logo-dark.svg` | Logótipo para fundo escuro do cabeçalho / barra superior |
| `logo-icon.svg` | Ícone do logótipo para o topo da barra lateral (sidebar) |
| `192x192.png` / `512x512.png` | Ícones de aplicativo e favicons da Conexão BahiaSul |
| `theme.css` | Folha de estilos nativa do tema da marca |

---

## Procedimento de Implantação no Servidor

Para aplicar as logos e o tema visual diretamente no diretório nativo de marca do Xibo CMS, execute os comandos abaixo no servidor:

```bash
# 1. Copiar as logos oficiais da Conexão BahiaSul para o diretório nativo da marca no Xibo
sudo cp -f /opt/bahiasul/ServidorTelas-BahiaSul/custom/xibo/logo.png /opt/bahiasul/xibo/shared/cms/library/brand/logo.svg
sudo cp -f /opt/bahiasul/ServidorTelas-BahiaSul/custom/xibo/logo.png /opt/bahiasul/xibo/shared/cms/library/brand/logo-dark.svg
sudo cp -f /opt/bahiasul/ServidorTelas-BahiaSul/custom/xibo/logo.png /opt/bahiasul/xibo/shared/cms/library/brand/logo-icon.svg
sudo cp -f /opt/bahiasul/ServidorTelas-BahiaSul/custom/xibo/logo.png /opt/bahiasul/xibo/shared/cms/library/brand/192x192.png
sudo cp -f /opt/bahiasul/ServidorTelas-BahiaSul/custom/xibo/logo.png /opt/bahiasul/xibo/shared/cms/library/brand/512x512.png

# 2. Configurar as variáveis e estilos do Design System no theme.css da marca
sudo bash -c "cat << 'EOF' > /opt/bahiasul/xibo/shared/cms/library/brand/theme.css
/* Brand theme CSS — Conexão BahiaSul Design System */
:root {
    --brand-primary: #0B3960;
    --brand-accent: #F26D21;
}
EOF
cat /opt/bahiasul/ServidorTelas-BahiaSul/custom/xibo/override.css >> /opt/bahiasul/xibo/shared/cms/library/brand/theme.css
"

# 3. Ajustar permissões e reiniciar os containers do Xibo
sudo chown -R www-data:www-data /opt/bahiasul/xibo/shared/cms/library/brand/
sudo chmod -R 775 /opt/bahiasul/xibo/shared/cms/library/brand/
sudo docker restart xibo-cms-web-1 xibo-cms-memcached-1
```
