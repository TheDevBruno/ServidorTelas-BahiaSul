/* ==========================================================================
   Conexão BahiaSul — Substituição Global de Marca (Branding White Label)
   ========================================================================== */

(function () {
    'use strict';

    function replaceTextInNode(node) {
        if (!node || !node.nodeValue) return;
        let text = node.nodeValue;
        if (/xibo/i.test(text)) {
            text = text.replace(/Xibo Digital Signage/gi, 'BahiaSul Digital Signage');
            text = text.replace(/Xibo Signage Ltd/gi, 'BahiaSul Signage');
            text = text.replace(/Xibo Signage/gi, 'BahiaSul Signage');
            text = text.replace(/Xibo Developers/gi, 'BahiaSul Developers');
            text = text.replace(/Xibo/gi, 'BahiaSul');
            node.nodeValue = text;
        }
    }

    function processDOM() {
        // 1. Substituir Título da Aba do Navegador
        if (document.title && /xibo/i.test(document.title)) {
            document.title = document.title
                .replace(/Xibo Digital Signage/gi, 'BahiaSul Digital Signage')
                .replace(/Xibo Signage/gi, 'BahiaSul Signage')
                .replace(/Xibo/gi, 'BahiaSul');
        }

        // 2. Substituir links e textos dos links xibosignage.com
        const links = document.querySelectorAll('a[href*="xibosignage.com"]');
        links.forEach(function (link) {
            link.href = 'https://bahiasul.com.br';
            if (link.textContent.includes('xibosignage.com')) {
                link.textContent = link.textContent.replace(/xibosignage\.com/gi, 'bahiasul.com.br');
            }
        });

        // 3. Substituir nó de texto em todo o corpo do documento (modais, sobre, etc)
        if (document.body) {
            const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
            let node;
            while (node = walker.nextNode()) {
                replaceTextInNode(node);
            }
        }
    }

    // Executar imediatamente e ao carregar
    processDOM();
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', processDOM);
    } else {
        processDOM();
    }

    // Observar alterações dinâmicas no DOM para Vue SPA e Modais
    try {
        const observer = new MutationObserver(function () {
            processDOM();
        });
        if (document.body) {
            observer.observe(document.body, { childList: true, subtree: true, characterData: true });
        }
    } catch (e) {}
})();
