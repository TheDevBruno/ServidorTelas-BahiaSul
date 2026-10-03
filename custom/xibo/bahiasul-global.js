/* ==========================================================================
   Conexão BahiaSul — Script de Redirecionamento Global e Troca de Nomes
   ========================================================================== */

(function () {
    'use strict';

    function processDOM() {
        // 1. Redirecionar todos os links xibosignage.com para bahiasul.com.br
        const links = document.querySelectorAll('a[href*="xibosignage.com"]');
        links.forEach(function (link) {
            link.href = 'https://bahiasul.com.br';
            link.target = '_blank';
        });

        // 2. Centralizar e atualizar link da logo da tela de login
        const loginLogoLinks = document.querySelectorAll('.login-card-logo a');
        loginLogoLinks.forEach(function (a) {
            a.href = 'https://bahiasul.com.br';
        });

        // 3. Substituir título do documento se contiver Xibo
        if (document.title && document.title.includes('Xibo')) {
            document.title = document.title.replace(/Xibo/g, 'Conexão BahiaSul');
        }

        // 4. Substituir ocorrências de texto "Xibo" por "Conexão BahiaSul"
        if (document.body) {
            const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
            let node;
            while (node = walker.nextNode()) {
                if (node.nodeValue && node.nodeValue.includes('Xibo')) {
                    node.nodeValue = node.nodeValue.replace(/Xibo/g, 'Conexão BahiaSul');
                }
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', processDOM);
    } else {
        processDOM();
    }

    // Observar alterações dinâmicas no DOM para Vue SPA
    try {
        const observer = new MutationObserver(function () {
            processDOM();
        });
        if (document.body) {
            observer.observe(document.body, { childList: true, subtree: true });
        }
    } catch (e) {
        console.log('MutationObserver initialized');
    }
})();
