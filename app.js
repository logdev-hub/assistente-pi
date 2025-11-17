// Dados da aplicação - Versão 3
const dados = {
    fornecedoresMercado: [
        {
            fornecedor: 'Taiwan Electronics',
            tipo_mercado: 'Oligopólio',
            icone: '🏛️',
            cor: '#007bff',
            definicao: 'Mercado dominado por poucos fornecedores com alto poder de mercado',
            caracteristicas: [
                'Poucos fabricantes internacionais',
                'Alto volume de produção',
                'Lead time 30-45 dias',
                'Poder de barganha baixo do comprador'
            ],
            exemplo: 'Poucos fabricantes de processadores/GPUs de alta performance',
            notas: { Preco: 8, Qualidade: 9, Prazo: 6, Capacidade: 10, Pagamento: 7, Certificacoes: 9 },
            pontuacao: 8.0,
            analise: 'Fornecedor estratégico apesar de prazos longos. Qualidade superior e capacidade garantida justificam manutenção no portfólio.'
        },
        {
            fornecedor: 'CompBR Nacional',
            tipo_mercado: 'Concorrência Perfeita',
            icone: '🏪',
            cor: '#28a745',
            definicao: 'Mercado com muitos fornecedores oferecendo produtos homogêneos',
            caracteristicas: [
                'Muitos concorrentes nacionais',
                'Produtos padronizados',
                'Lead time 10-15 dias',
                'Alto poder de barganha do comprador'
            ],
            exemplo: 'Muitos fornecedores de cabos, conectores e acessórios básicos',
            notas: { Preco: 9, Qualidade: 7, Prazo: 9, Capacidade: 6, Pagamento: 9, Certificacoes: 8 },
            pontuacao: 8.15,
            analise: 'Vencedor da matriz! Melhor relação custo-prazo com entrega nacional rápida e preços competitivos.'
        },
        {
            fornecedor: 'Monitor Premium Ltd',
            tipo_mercado: 'Monopólio',
            icone: '🏭',
            cor: '#dc3545',
            definicao: 'Único fornecedor disponível para produto específico',
            caracteristicas: [
                'Fornecedor único',
                'Produto especializado com certificação',
                'Lead time 25-60 dias',
                'Alto poder de barganha do fornecedor'
            ],
            exemplo: 'Único fornecedor de monitores 4K especializados com certificação específica',
            notas: { Preco: 4, Qualidade: 10, Prazo: 3, Capacidade: 8, Pagamento: 5, Certificacoes: 10 },
            pontuacao: 6.75,
            analise: 'Necessário para completude do portfólio. Dependência crítica exige gestão de estoque de segurança elevado.'
        }
    ],
    processos: {
        recebimento: {
            id: 'recebimento',
            titulo: 'Recebimento',
            cor: '#007bff',
            tempo_total: 190,
            etapas: [
                { num: 1, etapa: 'Agendamento', tempo: 10, desc: 'Fornecedor agenda entrega; Sistema gera protocolo', resp: 'Fornecedor/Recebimento' },
                { num: 2, etapa: 'Chegada Veículo', tempo: 15, desc: 'Check-in portaria; Documentação motorista', resp: 'Segurança' },
                { num: 3, etapa: 'Conferência Documental', tempo: 20, desc: 'Validação NF, XML, DANFE', resp: 'Analista Recebimento' },
                { num: 4, etapa: 'Posicionamento Doca', tempo: 10, desc: 'Alocação de doca disponível', resp: 'Coordenador Doca' },
                { num: 5, etapa: 'Descarga', tempo: 40, desc: 'Descarga com empilhadeira; Separação lotes', resp: 'Operador Empilhadeira' },
                { num: 6, etapa: 'Conferência Física', tempo: 30, desc: 'Contagem; Pesagem; Verificação avarias', resp: 'Conferente' },
                { num: 7, etapa: 'Conferência Fiscal', tempo: 20, desc: 'NF vs PC; Impostos; NCM; CFOP', resp: 'Analista Fiscal' },
                { num: 8, etapa: 'Entrada Sistema', tempo: 15, desc: 'Lançamento ERP/WMS; Etiquetagem', resp: 'Operador Sistema' },
                { num: 9, etapa: 'Auditoria Qualidade', tempo: 15, desc: 'Inspeção amostral 10%', resp: 'Controle Qualidade' },
                { num: 10, etapa: 'Endereçamento', tempo: 5, desc: 'Definição posição WMS', resp: 'Sistema WMS' },
                { num: 11, etapa: 'Movimentação', tempo: 8, desc: 'Transferência para endereço', resp: 'Operador Armazém' },
                { num: 12, etapa: 'Liberação', tempo: 2, desc: 'Aprovação NF; Confirmação sistema', resp: 'Comprador' }
            ],
            checklist: [
                { secao: 'Documentação', itens: [
                    'NF-e conferida e validada',
                    'XML recebido e integrado ao sistema',
                    'Protocolo de agendamento confirmado',
                    'Documento motorista verificado'
                ]},
                { secao: 'Recepção Física', itens: [
                    'Veículo posicionado em doca adequada',
                    'Lacres conferidos',
                    'Temperatura controlada (se aplicável)',
                    'Equipamentos de movimentação disponíveis',
                    'EPI utilizado pela equipe'
                ]},
                { secao: 'Conferência', itens: [
                    'Contagem tripla realizada (Classe A)',
                    'Pesagem conferida vs. NF',
                    'Avarias documentadas com fotos',
                    'Lotes e validades registrados'
                ]},
                { secao: 'Liberação', itens: [
                    'Divergências tratadas',
                    'Sistema WMS atualizado',
                    'Financeiro notificado'
                ]}
            ]
        },
        preparacao: {
            id: 'preparacao',
            titulo: 'Preparação para Armazenagem',
            cor: '#ffc107',
            tempo_total: 85,
            etapas: [
                { num: 1, etapa: 'Recepção Ordem', tempo: 5, desc: 'Recebimento da ordem de armazenagem', resp: 'Operador' },
                { num: 2, etapa: 'Separação Lotes', tempo: 15, desc: 'Organização por SKU e lote', resp: 'Conferente' },
                { num: 3, etapa: 'Classificação ABC', tempo: 10, desc: 'Identificação classe do produto', resp: 'Sistema WMS' },
                { num: 4, etapa: 'Paletização', tempo: 25, desc: 'Organização em paletes padrão', resp: 'Operador' },
                { num: 5, etapa: 'Etiquetagem', tempo: 10, desc: 'Impressão e aplicação etiquetas RFID', resp: 'Operador' },
                { num: 6, etapa: 'Verificação', tempo: 10, desc: 'Conferência paletização vs. padrão', resp: 'Supervisor' },
                { num: 7, etapa: 'Posição em Fila', tempo: 5, desc: 'Aguardo em área de transferência', resp: 'Operador' },
                { num: 8, etapa: 'Autorização', tempo: 5, desc: 'Liberação para armazenagem', resp: 'Coordenador' }
            ],
            checklist: [
                { secao: 'Ordens', itens: [
                    'Ordem de armazenagem validada',
                    'Prioridade definida (ABC)'
                ]},
                { secao: 'Organização', itens: [
                    'Produtos segregados por SKU',
                    'Paletização conforme padrão',
                    'Etiquetas RFID aplicadas'
                ]},
                { secao: 'Equipamentos', itens: [
                    'Paletes em bom estado',
                    'Impressora de etiquetas operacional'
                ]},
                { secao: 'Autorização', itens: [
                    'Liberação registrada no sistema'
                ]}
            ]
        },
        armazenagem: {
            id: 'armazenagem',
            titulo: 'Armazenagem',
            cor: '#28a745',
            tempo_total: 120,
            etapas: [
                { num: 1, etapa: 'Recepção Material', tempo: 5, desc: 'Recebimento de material preparado', resp: 'Operador Armazém' },
                { num: 2, etapa: 'Consulta Endereço', tempo: 8, desc: 'WMS define melhor posição disponível', resp: 'Sistema WMS' },
                { num: 3, etapa: 'Movimentação', tempo: 35, desc: 'Transporte até endereço com empilhadeira', resp: 'Operador Empilhadeira' },
                { num: 4, etapa: 'Posicionamento', tempo: 40, desc: 'Alocação na estrutura porta-paletes', resp: 'Operador Empilhadeira' },
                { num: 5, etapa: 'Leitura RFID', tempo: 5, desc: 'Confirmação automática por RFID', resp: 'Sistema' },
                { num: 6, etapa: 'Confirmação Manual', tempo: 10, desc: 'Validação visual pelo operador', resp: 'Operador' },
                { num: 7, etapa: 'Registro Sistema', tempo: 7, desc: 'Atualização saldo e localização WMS', resp: 'Sistema WMS' },
                { num: 8, etapa: 'Foto Endereço', tempo: 10, desc: 'Registro fotográfico da posição', resp: 'Operador' }
            ],
            checklist: [
                { secao: 'Movimentação', itens: [
                    'Endereço WMS consultado',
                    'Rota otimizada seguida',
                    'Segurança na movimentação'
                ]},
                { secao: 'Posicionamento', itens: [
                    'Posição correta confirmada',
                    'Estabilidade do palete verificada'
                ]},
                { secao: 'Confirmação', itens: [
                    'RFID lido com sucesso',
                    'Sistema WMS atualizado'
                ]},
                { secao: 'Auditoria', itens: [
                    'Foto do endereço registrada'
                ]}
            ]
        },
        separacao: {
            id: 'separacao',
            titulo: 'Separação de Materiais (Picking)',
            cor: '#17a2b8',
            tempo_total: 155,
            etapas: [
                { num: 1, etapa: 'Recepção Pedido', tempo: 10, desc: 'Recebimento lista picking do sistema', resp: 'Separador' },
                { num: 2, etapa: 'Roteirização', tempo: 5, desc: 'WMS define melhor rota de coleta', resp: 'Sistema WMS' },
                { num: 3, etapa: 'Coleta Itens', tempo: 80, desc: 'Picking com coletor código barras', resp: 'Separador' },
                { num: 4, etapa: 'Conferência Picking', tempo: 25, desc: 'Validação itens coletados vs. pedido', resp: 'Conferente' },
                { num: 5, etapa: 'Consolidação', tempo: 15, desc: 'Agrupamento de itens por pedido', resp: 'Separador' },
                { num: 6, etapa: 'Pesagem', tempo: 5, desc: 'Verificação peso vs. estimado', resp: 'Sistema' },
                { num: 7, etapa: 'Embalagem', tempo: 10, desc: 'Preparação para expedição', resp: 'Embalador' },
                { num: 8, etapa: 'Transferência', tempo: 5, desc: 'Movimentação para área expedição', resp: 'Operador' }
            ],
            checklist: [
                { secao: 'Recebimento', itens: [
                    'Lista picking validada'
                ]},
                { secao: 'Picking', itens: [
                    'Rota otimizada seguida',
                    'Leitura código barras a cada item',
                    'FIFO respeitado'
                ]},
                { secao: 'Conferência', itens: [
                    'Conferência 100% vs. pedido',
                    'Pesagem conferida'
                ]},
                { secao: 'Embalagem', itens: [
                    'Embalagem adequada ao produto',
                    'Etiqueta de expedição aplicada'
                ]}
            ]
        },
        expedicao: {
            id: 'expedicao',
            titulo: 'Expedição',
            cor: '#6f42c1',
            tempo_total: 135,
            etapas: [
                { num: 1, etapa: 'Recepção Material', tempo: 5, desc: 'Recebimento de separação', resp: 'Conferente Expedição' },
                { num: 2, etapa: 'Conferência Final', tempo: 20, desc: 'Validação completa pedido vs. NF', resp: 'Conferente' },
                { num: 3, etapa: 'Emissão Documentos', tempo: 15, desc: 'Geração NF-e, DANFE, etiquetas', resp: 'Sistema Fiscal' },
                { num: 4, etapa: 'Embalagem Final', tempo: 20, desc: 'Proteção adicional e lacração', resp: 'Embalador' },
                { num: 5, etapa: 'Separação Rota', tempo: 10, desc: 'Organização por transportadora/rota', resp: 'Coordenador' },
                { num: 6, etapa: 'Aguardo Veículo', tempo: 30, desc: 'Posição em área de embarque', resp: '-' },
                { num: 7, etapa: 'Check-in Transportadora', tempo: 10, desc: 'Validação motorista e veículo', resp: 'Segurança' },
                { num: 8, etapa: 'Carregamento', tempo: 15, desc: 'Carga otimizada no veículo', resp: 'Operador' },
                { num: 9, etapa: 'Lacração', tempo: 5, desc: 'Aplicação lacre numerado', resp: 'Segurança' },
                { num: 10, etapa: 'Saída', tempo: 5, desc: 'Liberação e registro de saída', resp: 'Portaria' }
            ],
            checklist: [
                { secao: 'Recebimento e Conferência', itens: [
                    'Material separado conferido',
                    'NF-e emitida e validada'
                ]},
                { secao: 'Preparação', itens: [
                    'Embalagem adequada aplicada',
                    'Documentação completa',
                    'Organização por rota'
                ]},
                { secao: 'Embalagem', itens: [
                    'Proteção contra intempéries',
                    'Etiquetas legíveis'
                ]},
                { secao: 'Carga e Saída', itens: [
                    'Transportadora validada',
                    'Carga conferida vs. romaneio',
                    'Lacre aplicado e registrado'
                ]}
            ]
        }
    },
    criterios: [
        { criterio: 'Preço', peso: 30, justificativa: 'Impacto direto na margem de contribuição e competitividade' },
        { criterio: 'Qualidade dos Produtos', peso: 25, justificativa: 'Reduz devoluções e custos de garantia; mantém reputação' },
        { criterio: 'Prazo de Entrega', peso: 20, justificativa: 'Afeta lead time e nível de estoque necessário' },
        { criterio: 'Capacidade de Fornecimento', peso: 10, justificativa: 'Garantia de atendimento em picos de demanda' },
        { criterio: 'Condições de Pagamento', peso: 10, justificativa: 'Impacto no fluxo de caixa operacional' },
        { criterio: 'Certificações e Compliance', peso: 5, justificativa: 'Conformidade legal e requisitos de clientes corporativos' }
    ],
    fornecedores: [
        {
            fornecedor: 'Taiwan Electronics',
            notas: { Preço: 8, Qualidade: 9, Prazo: 6, Capacidade: 10, Pagamento: 7, Certificacoes: 9 },
            pontuacao: 8.0
        },
        {
            fornecedor: 'Global Tech Importadora',
            notas: { Preço: 7, Qualidade: 8, Prazo: 8, Capacidade: 8, Pagamento: 8, Certificacoes: 7 },
            pontuacao: 7.65
        },
        {
            fornecedor: 'CompBR Nacional',
            notas: { Preço: 9, Qualidade: 7, Prazo: 9, Capacidade: 6, Pagamento: 9, Certificacoes: 8 },
            pontuacao: 8.15
        }
    ]
};

// Função para formatar moeda
function formatarMoeda(valor) {
    return 'R$ ' + valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Função para obter badge de classe
function getBadgeClasse(classe) {
    const badges = {
        'A': '<span class="badge badge-classe-a">Classe A</span>',
        'B': '<span class="badge badge-classe-b">Classe B</span>',
        'C': '<span class="badge badge-classe-c">Classe C</span>'
    };
    return badges[classe] || '';
}

// Renderizar Curva ABC
function renderizarCurvaABC() {
    const tbody = document.getElementById('curvaABCTableBody');
    if (!tbody) return;

    tbody.innerHTML = dados.produtos.map(p => `
        <tr>
            <td><strong>${p.codigo}</strong></td>
            <td>${p.produto}</td>
            <td class="text-end">${formatarMoeda(p.faturamento)}</td>
            <td class="text-end">${p.percentual_acum.toFixed(2)}%</td>
            <td class="text-center">${getBadgeClasse(p.classe)}</td>
        </tr>
    `).join('');
}

// Renderizar KPIs
function renderizarKPIs() {
    const container = document.getElementById('kpisContainer');
    if (!container) return;

    container.innerHTML = dados.kpis.map(kpi => `
        <div class="col-md-6">
            <div class="card kpi-card">
                <div style="font-size: 2rem;">${kpi.icone}</div>
                <h5 style="color: var(--color-primary); margin-top: 0.5rem;">${kpi.nome}</h5>
                <p class="small text-muted mb-2">${kpi.descricao}</p>
                <div class="formula" style="font-size: 0.85rem; padding: 0.5rem;">${kpi.formula}</div>
                <div class="kpi-value">${kpi.atual}</div>
                <div class="kpi-meta">Meta: ${kpi.meta}</div>
            </div>
        </div>
    `).join('');
}

// Renderizar Processo de Recebimento
function renderizarProcessoRecebimento() {
    const container = document.getElementById('processoRecebimentoContainer');
    if (!container) return;

    container.innerHTML = dados.processoRecebimento.map(etapa => `
        <div class="processo-step">
            <div class="d-flex align-items-start">
                <span class="step-number">${etapa.num}</span>
                <div class="flex-grow-1">
                    <h6 style="color: var(--color-primary); margin-bottom: 0.5rem;">
                        ${etapa.icone} ${etapa.nome}
                    </h6>
                    <p class="mb-2">${etapa.desc}</p>
                    <p class="small text-muted mb-0"><strong>Responsável:</strong> ${etapa.resp}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Renderizar Critérios de Fornecedores
function renderizarCriteriosFornecedores() {
    const tbody = document.getElementById('criteriosTableBody');
    if (!tbody) return;

    tbody.innerHTML = dados.criterios.map(c => `
        <tr>
            <td><strong>${c.criterio}</strong></td>
            <td class="text-center"><span class="badge bg-primary">${c.peso}%</span></td>
            <td>${c.justificativa}</td>
        </tr>
    `).join('');
}

// Renderizar Avaliação de Fornecedores
function renderizarAvaliacaoFornecedores() {
    const tbody = document.getElementById('avaliacaoTableBody');
    if (!tbody) return;

    // Ordenar por pontuação decrescente
    const fornecedoresOrdenados = [...dados.fornecedores].sort((a, b) => b.pontuacao - a.pontuacao);

    tbody.innerHTML = fornecedoresOrdenados.map((f, index) => {
        const rowClass = index === 0 ? 'fornecedor-rank-1' : '';
        const ranking = index === 0 ? '🥇 1º' : index === 1 ? '🥈 2º' : '🥉 3º';
        
        return `
            <tr class="${rowClass}">
                <td><strong>${f.fornecedor}</strong></td>
                <td class="text-center">${f.notas.Preço}</td>
                <td class="text-center">${f.notas.Qualidade}</td>
                <td class="text-center">${f.notas.Prazo}</td>
                <td class="text-center">${f.notas.Capacidade}</td>
                <td class="text-center">${f.notas.Pagamento}</td>
                <td class="text-center">${f.notas.Certificacoes}</td>
                <td class="text-center"><strong style="font-size: 1.2rem; color: var(--color-primary);">${f.pontuacao.toFixed(2)}</strong></td>
                <td class="text-center"><strong>${ranking}</strong></td>
            </tr>
        `;
    }).join('');
}

// Smooth scroll para seções
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Destacar link ativo na navegação
function atualizarNavegacaoAtiva() {
    const sections = ['home', 'secao1', 'secao2', 'secao3', 'secao4', 'secao5', 'secao6', 'secao7'];
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let currentSection = '';
        
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - 100) {
                    currentSection = sectionId;
                }
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
}

// Mostrar/ocultar botão "Voltar ao Topo"
function controlarBotaoTopo() {
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderizarCurvaABC();
    renderizarKPIs();
    renderizarProcessoRecebimento();
    renderizarCriteriosFornecedores();
    renderizarAvaliacaoFornecedores();
    atualizarNavegacaoAtiva();
    controlarBotaoTopo();
});

// Expor função scrollToSection globalmente
window.scrollToSection = scrollToSection;