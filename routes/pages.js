/**
 * ROTAS DE PÁGINAS
 * 
 * Este arquivo contém todas as rotas relacionadas às páginas HTML
 * da nossa aplicação. Aqui você pode adicionar novas páginas facilmente.
 */

const express = require('express');
const router = express.Router();

/**
 * PÁGINA INICIAL
 */
router.get('/', (req, res) => {
    console.log('🏠 Acessando página inicial...');
    
    const pageData = {
        title: 'Aplicativo Híbrido - Aula 1',
        description: 'Bem-vindo ao nosso aplicativo híbrido de gerenciamento de tarefas!',
        currentTime: new Date().toLocaleString('pt-BR'),
        version: '1.0.0'
    };
    
    res.render('index', pageData);
});

/**
 * PÁGINA SOBRE
 */
router.get('/sobre', (req, res) => {
    console.log('ℹ️ Acessando página sobre...');
    
    const pageData = {
        title: 'Sobre o Projeto',
        description: 'Informações sobre o aplicativo híbrido',
        features: [
            'Interface moderna e responsiva',
            'Funciona sem banco de dados',
            'API REST completa',
            'Sistema de rotas organizado'
        ],
        technologies: [
            'Node.js',
            'Express.js',
            'MongoDB (opcional)',
            'HTML5/CSS3/JavaScript'
        ]
    };
    
    res.render('sobre', pageData);
});

/**
 * PÁGINA DE CONTATO
 */
router.get('/contato', (req, res) => {
    console.log('📞 Acessando página de contato...');
    
    const pageData = {
        title: 'Contato',
        description: 'Entre em contato conosco',
        contactInfo: {
            email: 'professor@exemplo.com',
            telefone: '(21) 99999-9999',
            endereco: 'Universidade de Vassouras'
        }
    };
    
    res.render('contato', pageData);
});

/**
* NOVA PÁGINA
*/
router.get('/nova-pagina', (req, res) => {
    console.log('🆕 Acessando nova página...');
    
    const pageData = {
        title: 'Nova Página',
        description: 'Descrição da sua nova página',
        customData: 'Dados personalizados',
        items: ['Item 1', 'Item 2', 'Item 3']
    };
    
    res.render('nova-pagina', pageData);
});

/**
 * PÁGINA DE TAREFAS
 */
router.get('/tarefas', (req, res) => {
    console.log('📋 Acessando página de tarefas...');
    
    try {
        const tarefasSimuladas = [
            { id: 1, titulo: 'Configurar ambiente', concluida: true, data: '2024-01-01' },
            { id: 2, titulo: 'Criar rotas', concluida: true, data: '2024-01-02' },
            { id: 3, titulo: 'Implementar funcionalidades', concluida: false, data: '2024-01-03' }
        ];
        
        const pageData = {
            title: 'Gerenciador de Tarefas',
            description: 'Gerencie suas tarefas de forma eficiente',
            tasks: tarefasSimuladas
        };
        
        res.render('tarefas', pageData);
    } catch (error) {
        console.error('Erro ao carregar tarefas:', error);
        res.render('tarefas', {
            title: 'Gerenciador de Tarefas',
            description: 'Gerencie suas tarefas de forma eficiente',
            tasks: [],
            error: 'Erro ao carregar tarefas'
        });
    }
});

/**
 * PÁGINA DASHBOARD
 */
router.get('/dashboard', (req, res) => {
    console.log('📊 Acessando página dashboard...');
    
    const pageData = {
        title: 'Dashboard - Estatísticas',
        description: 'Visualize as estatísticas das suas tarefas'
    };
    
    res.render('dashboard', pageData);
});

/**
 * PÁGINA 404 - DEVE SER A ÚLTIMA ROTA!
 */
router.get('*', (req, res) => {
    console.log(`❌ Página não encontrada: ${req.originalUrl}`);
    
    const pageData = {
        title: 'Página não encontrada',
        description: 'A página que você procura não existe',
        requestedUrl: req.originalUrl
    };
    
    res.status(404).render('404', pageData);
});

module.exports = router;