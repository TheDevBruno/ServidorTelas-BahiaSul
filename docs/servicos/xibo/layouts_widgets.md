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

### 2.7 Execução de Vídeos e Músicas (YouTube e Áudio de Fundo)

No Xibo CMS, você pode reproduzir vídeos e músicas de **duas formas principais**:

---

#### Método A: Vídeo ou Música do YouTube (Sem Tela Preta por Política de Autoplay)

Os navegadores modernos (Chrome, Chromium, Firefox e o player do Xibo) **bloqueiam o Autoplay quando o áudio está desmutado (`mute=0`) sem uma interação prévia do usuário**, fazendo o player do YouTube travar em **tela preta**.

Para resolver isso e fazer o vídeo `NE_lF0tSDuE` tocar **imediatamente com áudio sem travar em tela preta**:

1. Adicione um Widget **HTML Incorporado** (*Embedded*) na região do Layout.
2. Cole os códigos nas abas **HTML**, **CSS** e **JavaScript**:

##### Campo HTML:
```html
<div class="bahiasul-youtube-container">
    <div id="player"></div>
</div>
```

##### Campo CSS:
```css
html, body { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background: #000; }
.bahiasul-youtube-container { width: 100%; height: 100%; position: relative; }
.bahiasul-youtube-container iframe { width: 100%; height: 100%; border: none; display: block; }
```

##### Campo JavaScript:
```javascript
const YOUTUBE_VIDEO_ID = 'NE_lF0tSDuE'; // Cole o ID do vídeo desejado
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%', width: '100%', videoId: YOUTUBE_VIDEO_ID,
        playerVars: { 'autoplay': 1, 'controls': 0, 'loop': 1, 'playlist': YOUTUBE_VIDEO_ID, 'playsinline': 1 },
        events: { 'onReady': function(e) {
            e.target.playVideo();
            setTimeout(function() { try { e.target.unMute(); e.target.setVolume(100); } catch(err){} }, 1200);
        }}
    });
}

if (!window.YT) {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
```

---

#### Método B: Áudio de Fundo Nativo (Música Ambiente no Layout)

Se você deseja colocar uma música ambiente (arquivo `.mp3`) tocando no fundo continuamente enquanto os avisos, vídeos e fotos passam na tela:

1. Suba o arquivo de música `.mp3` na **Biblioteca de Mídias** do Xibo.
2. Acesse **Layouts** > selecione seu Layout > clique na aba **Edição de Propriedades**.
3. No campo **Áudio de Fundo** (*Background Audio*), selecione a música enviada.
4. Salve o Layout. O player irá reproduzir a música no fundo durante toda a exibição da tela!

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
