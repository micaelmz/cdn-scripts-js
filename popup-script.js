(function() {
    'use strict';
    
    console.log('🚀 Script do CRM carregado!');
    alert('Hello World - CRM funcionando na Shopify! 🎉');
    
    // Mostra informações da loja
    if (window.Shopify) {
        console.log('Loja:', window.Shopify.shop);
        console.log('Currency:', window.Shopify.currency);
    }
})();
