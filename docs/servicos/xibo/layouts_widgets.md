# Xibo CMS — Guia de Layouts, RSS Feeds e Widgets (Conexão BahiaSul)

## Visão Geral

Este documento orienta a criação, estruturação e estilização de **Layouts, RSS Feeds (Tickers) e Widgets** no Xibo CMS v4, seguindo o padrão visual do **Design System Conexão BahiaSul**.

---

## 1. Arquitetura e Resolução de Layouts

### 1.1 Padrões de Tela Recomendados

- **Horizontal (Landscape)**: `1920 x 1080` (Full HD 16:9)
- **Vertical (Portrait)**: `1080 x 1920` (Full HD 9:16)

### 1.2 Divisão em Regiões / Zonas (Horizontal 1920x1080)

| Região | Posição (X, Y) | Dimensões (W x H) | Conteúdo / Widget |
|---|---|---|---|
| **Cabeçalho (Header)** | `0, 0` | `1920 x 120` | Logo BahiaSul (esquerda) + Relógio/Data (direita) |
| **Área Principal (Main)** | `0, 120` | `1380 x 860` | Vídeos institucionais, imagens, apresentações e avisos |
| **Barra Lateral (Sidebar)** | `1380, 120` | `540 x 860` | Widget Clima/Tempo, Cotações, Avisos em destaque |
| **Rodapé (Footer / Ticker)** | `0, 980` | `1920 x 100` | RSS Ticker de notícias com rolagem horizontal |

---

## 2. Configuração do Widget RSS / Ticker (Notícias)

### 2.1 Adicionando o Widget Ticker no Designer de Layout

1. No painel do Xibo CMS (`http://10.98.254.189`), acesse **Layouts** > **Gerenciar Layouts**.
2. Clique no layout desejado e selecione **Designer**.
3. Adicione ou selecione a Região do Rodapé (ou crie uma região `1920x100` na parte inferior).
4. No menu de Widgets laterais, arraste o módulo **Ticker / RSS** para a região.

### 2.2 Configuração das Propriedades do RSS Feed

- **URL do Feed RSS**: Insira a URL desejada (Exemplos de Feeds públicos ou internos):
  - *G1 Notícias*: `https://g1.globo.com/rss/g1/`
  - *UOL Notícias*: `https://rss.uol.com.br/feed/noticias.xml`
- **Update Interval (Intervalo de Atualização)**: `15` ou `30` minutos (para evitar sobrecarga da rede).
- **Número de Itens**: `10` a `15` notícias.
- **Efeito de Transição / Animação**:
  - *Rolagem Horizontal Contínua (Marquee Left)* para rodapés.
  - *Fade / Carrossel com Intervalo* para blocos de notícias na lateral.
- **Duração de Exibição por Item**: `10` segundos.

### 2.3 Template de Estilização HTML/CSS do Ticker (Design System)

No campo **Appearance / Template** do Widget Ticker, insira a estrutura estilizada com as cores e tipografia da Conexão BahiaSul:

#### HTML Template:
```html
<div class="bahiasul-ticker-item">
    <span class="ticker-badge">NOTÍCIAS</span>
    <span class="ticker-title">[Title]</span>
    <span class="ticker-separator">•</span>
</div>
```

#### CSS Override (na aba CSS do Widget ou no override.css global):
```css
.bahiasul-ticker-item {
    display: inline-flex;
    align-items: center;
    font-family: 'Montserrat', 'Open Sans', sans-serif;
    font-size: 24px;
    color: #FFFFFF;
    background-color: #0B3960; /* Azul Escuro BahiaSul */
    padding: 12px 24px;
    border-top: 4px solid #F26D21; /* Laranja Destaque */
}

.ticker-badge {
    background-color: #F26D21; /* Laranja Destaque */
    color: #FFFFFF;
    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: 4px;
    margin-right: 15px;
}

.ticker-title {
    font-weight: 500;
    color: #FFFFFF;
}

.ticker-separator {
    color: #F26D21;
    margin: 0 20px;
    font-size: 28px;
}
```

---

## 3. Configuração de Outros Widgets Essenciais

### 3.1 Widget Relógio e Data (Clock)

1. Adicione o Widget **Clock** no **Header** (canto superior direito).
2. **Formato da Data**: `dd/MM/yyyy` ou `EEEE, dd 'de' MMMM`.
3. **Formato da Hora**: `HH:mm:ss` (Relógio Digital 24 horas).
4. **Estilo CSS**:
   ```css
   .clock-container {
       font-family: 'Montserrat', sans-serif;
       color: #0B3960;
       font-weight: 700;
       font-size: 28px;
       text-align: right;
   }
   ```

### 3.2 Widget de Previsão do Tempo (Weather)

1. Adicione o Widget **Weather / Weather Forecast** na **Barra Lateral**.
2. Configure a Cidade/Localização (ex: `Salvador, BR` ou coordenadas).
3. **Formato**: Temperatura atual + Previsão para os próximos dias + Ícones ilustrativos.
4. **Estilo do Card de Clima**:
   ```css
   .weather-card {
       background: #FFFFFF;
       border-radius: 8px;
       box-shadow: 0 4px 12px rgba(11, 57, 96, 0.15);
       border-left: 6px solid #1B5693;
       padding: 15px;
       color: #333333;
   }
   ```

---

## 4. Boas Práticas e Validação

1. **Pré-Visualização (Layout Preview)**:
   - Sempre utilize a opção **Preview Layout** no Xibo CMS para checar alinhamento, sobreposição de texto e legibilidade à distância.
2. **Otimização de Transições**:
   - Evite sobrepor muitas animações simultâneas em hardware com recursos limitados de players Android/Windows.
3. **Publicação / Agendamento (Scheduling)**:
   - Após finalizar o Layout, defina o Layout como **Publicado (Published)**.
   - Associe o Layout às **Displays / Grupos de Telas** desejadas através do menu **Schedule (Agendamento)**.
