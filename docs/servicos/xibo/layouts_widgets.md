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

### 2.3 Mapeamento das Abas do Widget RSS Ticker no Xibo CMS v4 (Interface em Português)

### 2.4 Configuração via Widget HTML Incorporado (Embedded RSS Feed Customizado)

Se você preferir **liberdade total de estilização e transição**, a melhor alternativa é usar o módulo **HTML Incorporado (Embedded)**:

1. No Designer de Layout do Xibo, arraste o Widget **HTML Incorporado** (*Embedded*) para a Região do Rodapé (`1920 x 100`).
2. O Xibo exibirá caixas para **HTML**, **CSS** e **JavaScript**:

#### Campo HTML:
```html
<div class="bahiasul-rss-container">
    <div class="rss-badge-box">
        <span class="rss-badge">NOTÍCIAS</span>
    </div>
    <div class="rss-scroll-viewport">
        <div class="rss-scroll-track" id="rssTrack">
            <span class="rss-item">Conexão BahiaSul — Carregando notícias...</span>
        </div>
    </div>
</div>
```

#### Campo CSS:
```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&display=swap');

html, body { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background: transparent; }

.bahiasul-rss-container {
    display: flex; align-items: center; width: 100%; height: 100%;
    background-color: #0B3960; border-top: 4px solid #F26D21; font-family: 'Montserrat', sans-serif;
}
.rss-badge-box { padding: 0 18px; z-index: 10; background-color: #0B3960; flex-shrink: 0; }
.rss-badge { background-color: #F26D21; color: #FFFFFF; font-weight: 800; font-size: 16px; padding: 6px 14px; border-radius: 4px; text-transform: uppercase; }
.rss-scroll-viewport { flex: 1; overflow: hidden; white-space: nowrap; }
.rss-scroll-track { display: inline-block; padding-left: 100%; white-space: nowrap; animation: marqueeScroll 35s linear infinite; }
.rss-item { font-size: 24px; font-weight: 600; color: #FFFFFF; }
.rss-separator { color: #F26D21; font-size: 26px; margin: 0 20px; font-weight: 800; }

@keyframes marqueeScroll { 0% { transform: translate3d(0, 0, 0); } 100% { transform: translate3d(-100%, 0, 0); } }
```

#### Campo JavaScript (Altere a variável `RSS_FEED_URL` para o feed desejado):
```javascript
const RSS_FEED_URL = 'https://g1.globo.com/rss/g1/'; // Cole aqui a URL do seu feed RSS

async function fetchAndRenderRSS() {
    const track = document.getElementById('rssTrack');
    if (!track) return;
    try {
        const apiUrl = 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(RSS_FEED_URL);
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.status === 'ok' && data.items && data.items.length > 0) {
            let html = '';
            data.items.slice(0, 12).forEach(item => {
                html += `<span class="rss-item">${item.title}</span><span class="rss-separator">•</span>`;
            });
            track.innerHTML = html;
        }
    } catch (e) {}
}
fetchAndRenderRSS();
setInterval(fetchAndRenderRSS, 15 * 60 * 1000);
```

---

#### HTML Template (Cole na caixa "Modelo Principal"):
```html
<div class="bahiasul-ticker-item">
    <span class="ticker-badge">NOTÍCIAS</span>
    <span class="ticker-title">[Title]</span>
    <span class="ticker-separator">•</span>
</div>
```

#### CSS Override (Cole na caixa "Folha de Estilo" ou mantenha no override.css global):
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
