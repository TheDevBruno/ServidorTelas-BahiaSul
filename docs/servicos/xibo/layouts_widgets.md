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

### 2.5 Widget "Card de Notícias" (News Card para Regiões da Tela / Lateral)

Para exibir notícias no formato de **Card de Destaque** (com Título, Descrição, Data, Imagem e Barra de Progresso de Transição) em regiões como a Barra Lateral ou no Conteúdo Principal:

1. Adicione um Widget **HTML Incorporado** (*Embedded*) na região desejada do Layout.
2. Cole os códigos abaixo nas caixas **HTML**, **CSS** e **JavaScript**:

#### Campo HTML:
```html
<div class="bahiasul-news-card" id="newsCard">
    <div class="card-header">
        <span class="card-badge">ÚLTIMAS NOTÍCIAS</span>
        <span class="card-source" id="newsSource">BahiaSul Notícias</span>
    </div>
    <div class="card-media" id="cardMedia" style="display: none;">
        <img id="newsImage" src="" alt="Notícia" />
    </div>
    <div class="card-body">
        <h2 class="news-title" id="newsTitle">Carregando notícias...</h2>
        <p class="news-description" id="newsDescription">Acompanhe informações em tempo real no canal BahiaSul Mídia Indoor.</p>
    </div>
    <div class="card-footer">
        <span class="news-date" id="newsDate">Conexão BahiaSul</span>
        <div class="progress-container"><div class="progress-bar" id="progressBar"></div></div>
    </div>
</div>
```

#### Campo CSS:
```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap');
html, body { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background: transparent; font-family: 'Montserrat', sans-serif; }
.bahiasul-news-card {
    display: flex; flex-direction: column; width: 100%; height: 100%;
    background: #FFFFFF; border-radius: 12px; border-left: 6px solid #F26D21;
    box-shadow: 0 8px 24px rgba(11, 57, 96, 0.12); box-sizing: border-box; padding: 24px;
    position: relative; overflow: hidden; transition: opacity 0.4s ease-in-out;
}
.card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; border-bottom: 2px solid #F1F5F9; padding-bottom: 12px; }
.card-badge { background-color: #0B3960; color: #F26D21; font-weight: 800; font-size: 14px; padding: 6px 12px; border-radius: 4px; text-transform: uppercase; }
.card-source { color: #64748B; font-size: 13px; font-weight: 600; }
.card-media { width: 100%; max-height: 240px; overflow: hidden; border-radius: 8px; margin-bottom: 16px; display: flex; justify-content: center; align-items: center; background-color: #F8FAFC; }
.card-media img { width: 100%; height: 100%; object-fit: cover; border-radius: 8px; }
.card-body { flex: 1; display: flex; flex-direction: column; }
.news-title { color: #0B3960; font-size: 24px; font-weight: 800; line-height: 1.35; margin: 0 0 12px 0; }
.news-description { color: #333333; font-size: 16px; line-height: 1.55; font-weight: 400; margin: 0; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; }
.card-footer { display: flex; flex-direction: column; margin-top: 16px; padding-top: 12px; border-top: 1px solid #F1F5F9; }
.news-date { font-size: 12px; color: #94A3B8; font-weight: 600; margin-bottom: 10px; }
.progress-container { width: 100%; height: 4px; background-color: #E2E8F0; border-radius: 2px; overflow: hidden; }
.progress-bar { width: 0%; height: 100%; background-color: #F26D21; transition: width 0.1s linear; }
```

#### Campo JavaScript (Troque a URL na 1ª linha):
```javascript
const RSS_FEED_URL = 'https://g1.globo.com/rss/g1/';
const DISPLAY_DURATION_SEC = 8; // Duração por notícia em segundos

let newsItems = [], currentIndex = 0, progressInterval = null;
async function fetchNews() {
    try {
        const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(RSS_FEED_URL));
        const data = await res.json();
        if (data.status === 'ok' && data.items && data.items.length > 0) {
            newsItems = data.items;
            document.getElementById('newsSource').textContent = data.feed.title || 'BahiaSul Notícias';
            showCurrentNews();
        }
    } catch (e) {}
}
function showCurrentNews() {
    if (newsItems.length === 0) return;
    const card = document.getElementById('newsCard');
    card.style.opacity = '0.1';
    setTimeout(() => {
        const item = newsItems[currentIndex];
        document.getElementById('newsTitle').textContent = item.title;
        const cleanDesc = item.description ? item.description.replace(/<[^>]*>?/gm, '') : '';
        document.getElementById('newsDescription').textContent = cleanDesc;
        if (item.pubDate) {
            const dateObj = new Date(item.pubDate);
            document.getElementById('newsDate').textContent = 'Atualizado em ' + dateObj.toLocaleDateString('pt-BR') + ' às ' + dateObj.toLocaleTimeString('pt-BR', {hour:'2-digit', minute:'2-digit'});
        }
        const imgElement = document.getElementById('newsImage');
        const mediaElement = document.getElementById('cardMedia');
        const imageSrc = (item.enclosure && item.enclosure.link) ? item.enclosure.link : (item.thumbnail ? item.thumbnail : null);
        if (imageSrc) { imgElement.src = imageSrc; mediaElement.style.display = 'flex'; } else { mediaElement.style.display = 'none'; }
        card.style.opacity = '1';
        startProgressBar();
    }, 350);
}
function startProgressBar() {
    clearInterval(progressInterval);
    const bar = document.getElementById('progressBar');
    let elapsed = 0, stepMs = 100, totalMs = DISPLAY_DURATION_SEC * 1000;
    progressInterval = setInterval(() => {
        elapsed += stepMs;
        bar.style.width = ((elapsed / totalMs) * 100) + '%';
        if (elapsed >= totalMs) {
            clearInterval(progressInterval);
            currentIndex = (currentIndex + 1) % newsItems.length;
            showCurrentNews();
        }
    }, stepMs);
}
fetchNews();
setInterval(fetchNews, 15 * 60 * 1000);
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
