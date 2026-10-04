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

### 2.6 Widget "Instagram Conexão BahiaSul" (@conexaobahiasul)

Para incentivar os clientes e visitantes a seguirem o Instagram oficial **`@conexaobahiasul`** (`https://www.instagram.com/conexaobahiasul/`) com **QR Code dinâmico escaneável na TV**:

1. Adicione um Widget **HTML Incorporado** (*Embedded*) no Layout.
2. Cole os códigos abaixo nas abas **HTML**, **CSS** e **JavaScript**:

#### Campo HTML:
```html
<div class="bahiasul-insta-card">
    <div class="insta-header">
        <div class="profile-info">
            <div class="insta-avatar"><img src="/library/brand/logo.svg" alt="BahiaSul Logo" /></div>
            <div class="profile-text">
                <div class="profile-handle">@conexaobahiasul <span class="verified-badge">✓</span></div>
                <div class="profile-sub">Conexão BahiaSul • Provedor de Internet</div>
            </div>
        </div>
        <div class="insta-logo-badge">
            <svg class="insta-icon" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </div>
    </div>
    <div class="insta-content">
        <div class="post-preview">
            <div class="post-tag">SIGA A BAHIASUL NO INSTAGRAM</div>
            <h2 class="post-title" id="postTitle">Fique por dentro de todas as novidades e dicas da Conexão BahiaSul!</h2>
            <p class="post-desc" id="postDesc">Aponte a câmera do celular para o QR Code ao lado e acompanhe nossos conteúdos exclusivos.</p>
        </div>
        <div class="qr-box">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https://www.instagram.com/conexaobahiasul/" alt="QR Code Instagram BahiaSul" />
            <span class="qr-label">ESCANEE O QR CODE</span>
        </div>
    </div>
    <div class="insta-footer">
        <span class="footer-link">instagram.com/conexaobahiasul</span>
        <span class="footer-cta">@conexaobahiasul • Mídia Indoor</span>
    </div>
</div>
```

#### Campo CSS:
```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap');
html, body { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background: transparent; font-family: 'Montserrat', sans-serif; }
.bahiasul-insta-card { display: flex; flex-direction: column; width: 100%; height: 100%; background: linear-gradient(135deg, #0B3960 0%, #072540 100%); border-radius: 14px; box-shadow: 0 10px 30px rgba(11, 57, 96, 0.25); box-sizing: border-box; padding: 24px; color: #FFFFFF; border-top: 5px solid #F26D21; }
.insta-header { display: flex; justify-content: space-between; align-items: center; padding-bottom: 16px; border-bottom: 1px solid rgba(255, 255, 255, 0.15); }
.profile-info { display: flex; align-items: center; gap: 14px; }
.insta-avatar { width: 56px; height: 56px; border-radius: 50%; padding: 3px; background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); display: flex; align-items: center; justify-content: center; }
.insta-avatar img { width: 100%; height: 100%; border-radius: 50%; background-color: #0B3960; object-fit: cover; }
.profile-handle { font-size: 20px; font-weight: 800; color: #FFFFFF; display: flex; align-items: center; gap: 6px; }
.verified-badge { background-color: #3897f0; color: #FFFFFF; font-size: 11px; width: 16px; height: 16px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; }
.profile-sub { font-size: 13px; color: #CBD5E1; font-weight: 500; margin-top: 2px; }
.insta-logo-badge { width: 44px; height: 44px; border-radius: 12px; background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); display: flex; align-items: center; justify-content: center; }
.insta-icon { width: 26px; height: 26px; fill: #FFFFFF; }
.insta-content { flex: 1; display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 20px 0; }
.post-preview { flex: 1; }
.post-tag { background-color: #F26D21; color: #FFFFFF; font-weight: 800; font-size: 12px; padding: 5px 12px; border-radius: 4px; display: inline-block; margin-bottom: 14px; letter-spacing: 1px; }
.post-title { font-size: 24px; font-weight: 800; line-height: 1.35; margin: 0 0 12px 0; color: #FFFFFF; }
.post-desc { font-size: 16px; color: #94A3B8; line-height: 1.5; margin: 0; }
.qr-box { background: #FFFFFF; padding: 14px; border-radius: 12px; display: flex; flex-direction: column; align-items: center; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3); flex-shrink: 0; }
.qr-box img { width: 140px; height: 140px; border-radius: 6px; }
.qr-label { color: #0B3960; font-size: 11px; font-weight: 800; margin-top: 8px; letter-spacing: 0.5px; }
.insta-footer { display: flex; justify-content: space-between; align-items: center; padding-top: 14px; border-top: 1px solid rgba(255, 255, 255, 0.15); font-size: 13px; }
.footer-link { color: #F26D21; font-weight: 700; }
.footer-cta { color: #94A3B8; font-weight: 600; }
```

#### Campo JavaScript:
```javascript
const posts = [
    { title: 'Fique por dentro de todas as novidades e dicas da Conexão BahiaSul!', desc: 'Acompanhe nosso perfil no Instagram para conteúdos exclusivos e ofertas de ultravelocidade.' },
    { title: 'Precisa de Suporte ou Atendimento Rápido?', desc: 'Conecte-se conosco no Instagram @conexaobahiasul ou acesse nosso site bahiasul.com.br' },
    { title: 'Internet de Alta Performance para Sua Casa e Empresa!', desc: 'Siga @conexaobahiasul e compartilhe sua experiência com nossa conexão de fibra óptica.' }
];
let postIndex = 0;
setInterval(() => {
    postIndex = (postIndex + 1) % posts.length;
    document.getElementById('postTitle').textContent = posts[postIndex].title;
    document.getElementById('postDesc').textContent = posts[postIndex].desc;
}, 10000);
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
