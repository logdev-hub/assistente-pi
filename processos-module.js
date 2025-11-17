
// processos-module.js - Módulo de Processamento de Processos Logísticos
// ========================================================================

// Dados completos dos 5 processos (carregados dinamicamente)
let processosData = {};
let processosAtivo = 1;

// Função para carregar dados dos processos
async function carregarProcessos() {
    try {
        // Em produção, carregar do arquivo JSON
        // const response = await fetch('processos_dados.json');
        // processosData = await response.json();

        // Para demo, usar dados inline (será substituído)
        processosData = window.PROCESSOS_DATA || {};
        inicializarProcessos();
    } catch (error) {
        console.error('Erro ao carregar processos:', error);
    }
}

// Inicializar interface de processos
function inicializarProcessos() {
    criarAbas();
    mostrarProcesso(processosAtivo);
    setupEventListeners();
}

// Criar abas de navegação entre processos
function criarAbas() {
    const container = document.getElementById('processos-abas');
    if (!container || !processosData.processos) return;

    container.innerHTML = '';

    processosData.processos.forEach(proc => {
        const aba = document.createElement('button');
        aba.className = `nav-link ${proc.id === processosAtivo ? 'active' : ''}`;
        aba.textContent = `${proc.icone} ${proc.titulo}`;
        aba.onclick = () => mostrarProcesso(proc.id);
        container.appendChild(aba);
    });
}

// Mostrar processo selecionado
function mostrarProcesso(idProcesso) {
    processosAtivo = idProcesso;
    const processo = processosData.processos.find(p => p.id === idProcesso);

    if (!processo) return;

    // Atualizar aba ativa
    document.querySelectorAll('.nav-link').forEach((btn, idx) => {
        btn.classList.toggle('active', idx + 1 === idProcesso);
    });

    // Mostrar conteúdo
    mostrarQuadro(processo);
    mostrarFluxograma(processo);
    mostrarChecklist(processo);
}

// Mostrar quadro de atividades
function mostrarQuadro(processo) {
    const container = document.getElementById('quadro-container');
    if (!container) return;

    let html = `
        <div class="card mb-4">
            <div class="card-header" style="background-color: ${processo.cor}">
                <h5 class="mb-0" style="color: white;">
                    ${processo.icone} ${processo.titulo}
                    <span class="badge badge-light float-end">${processo.tempo_total_horas_minutos}</span>
                </h5>
            </div>
            <div class="card-body p-0">
                <div class="table-responsive">
                    <table class="table table-hover table-sm mb-0">
                        <thead style="background-color: #f8f9fa;">
                            <tr>
                                <th style="width: 5%;">Nº</th>
                                <th style="width: 25%;">Etapa</th>
                                <th style="width: 8%;">Tempo</th>
                                <th style="width: 35%;">Descrição</th>
                                <th style="width: 15%;">Responsável</th>
                                <th style="width: 12%;">Recursos</th>
                            </tr>
                        </thead>
                        <tbody>
    `;

    processo.etapas.forEach((etapa, idx) => {
        const bgColor = idx % 2 === 0 ? '#ffffff' : '#f8f9fa';
        html += `
            <tr style="background-color: ${bgColor};">
                <td><strong>${etapa.num}</strong></td>
                <td><strong>${etapa.nome}</strong></td>
                <td><span class="badge bg-primary">${etapa.tempo}min</span></td>
                <td><small>${etapa.descricao}</small></td>
                <td><small>${etapa.responsavel}</small></td>
                <td><small>${etapa.recursos}</small></td>
            </tr>
        `;
    });

    const tempoTotal = processo.etapas.reduce((sum, e) => sum + e.tempo, 0);
    html += `
                        </tbody>
                        <tfoot style="background-color: #e9ecef; font-weight: bold;">
                            <tr>
                                <td colspan="2">TEMPO TOTAL</td>
                                <td><span class="badge bg-danger">${tempoTotal}min</span></td>
                                <td colspan="3"></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    `;

    container.innerHTML = html;
}

// Mostrar fluxograma visual
function mostrarFluxograma(processo) {
    const container = document.getElementById('fluxograma-container');
    if (!container) return;

    let html = '<div class="fluxograma-wrapper">';

    processo.etapas.forEach((etapa, idx) => {
        html += `
            <div class="fluxograma-card" style="background: linear-gradient(135deg, ${processo.cor}20 0%, ${processo.cor}05 100%);">
                <div class="etapa-numero" style="background-color: ${processo.cor}; color: white;">
                    ${etapa.num}
                </div>
                <div class="etapa-info">
                    <strong>${etapa.nome}</strong>
                    <p class="tempo-badge">${etapa.tempo} min</p>
                </div>
            </div>
        `;

        if (idx < processo.etapas.length - 1) {
            html += '<div class="fluxograma-arrow">↓</div>';
        }
    });

    html += '</div>';
    container.innerHTML = html;
}

// Mostrar checklist
function mostrarChecklist(processo) {
    const container = document.getElementById('checklist-container');
    if (!container) return;

    let html = '<div class="checklist-wrapper">';

    processo.checklist.forEach((secao, secaoIdx) => {
        html += `
            <div class="card mb-3">
                <div class="card-header bg-light">
                    <h6 class="mb-0">
                        <strong>✓ ${secao.secao}</strong>
                    </h6>
                </div>
                <div class="card-body pt-3">
                    <div class="checklist-items">
        `;

        secao.itens.forEach(item => {
            const criticoClass = item.critico ? 'critico' : '';
            const criticoIcon = item.critico ? '⚠️' : '✔️';

            html += `
                <div class="checklist-item ${criticoClass}">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="check_${item.id}">
                        <label class="form-check-label" for="check_${item.id}">
                            <span class="critico-icon">${criticoIcon}</span>
                            ${item.item}
                        </label>
                    </div>
                </div>
            `;
        });

        html += `
                    </div>
                </div>
            </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;
}

// Setup event listeners
function setupEventListeners() {
    // Delegação de eventos para checkboxes
    document.addEventListener('change', function(e) {
        if (e.target.classList.contains('form-check-input')) {
            const label = e.target.nextElementSibling;
            if (e.target.checked) {
                label.style.opacity = '0.6';
                label.style.textDecoration = 'line-through';
            } else {
                label.style.opacity = '1';
                label.style.textDecoration = 'none';
            }
        }
    });

    // Botões de impressão
    const btnImprimir = document.getElementById('btn-imprimir-checklist');
    if (btnImprimir) {
        btnImprimir.addEventListener('click', imprimirChecklist);
    }
}

// Imprimir checklist
function imprimirChecklist() {
    const processo = processosData.processos.find(p => p.id === processosAtivo);
    if (!processo) return;

    const printWindow = window.open('', '', 'height=600,width=800');

    let conteudo = `
        <html>
        <head>
            <title>Checklist - ${processo.titulo}</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h1 { text-align: center; color: #333; }
                h2 { color: #0056b3; margin-top: 20px; border-bottom: 2px solid #0056b3; padding-bottom: 5px; }
                .item { margin: 10px 0; }
                .critico { color: red; font-weight: bold; }
                table { width: 100%; border-collapse: collapse; }
                td { padding: 8px; border: 1px solid #ddd; }
                .checkbox { width: 20px; }
            </style>
        </head>
        <body>
            <h1>Checklist - ${processo.titulo}</h1>
            <p><strong>Tempo Total:</strong> ${processo.tempo_total_horas_minutos}</p>
    `;

    processo.checklist.forEach(secao => {
        conteudo += `<h2>${secao.secao}</h2><div>`;

        secao.itens.forEach(item => {
            const criticoClass = item.critico ? 'critico' : '';
            conteudo += `
                <div class="item">
                    <input type="checkbox" class="checkbox">
                    <span class="${criticoClass}">${item.item}</span>
                </div>
            `;
        });

        conteudo += '</div>';
    });

    conteudo += '</body></html>';

    printWindow.document.write(conteudo);
    printWindow.document.close();
    printWindow.print();
}

// Exportar checklist para CSV
function exportarChecklistCSV() {
    const processo = processosData.processos.find(p => p.id === processosAtivo);
    if (!processo) return;

    let csv = 'Processo,Seção,Item,Crítico\n';

    processo.checklist.forEach(secao => {
        secao.itens.forEach(item => {
            csv += `"${processo.titulo}","${secao.secao}","${item.item}","${item.critico ? 'Sim' : 'Não'}"\n`;
        });
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `checklist-${processo.titulo}.csv`;
    a.click();
}

// Resetar checklist
function resetarChecklist() {
    document.querySelectorAll('.form-check-input').forEach(checkbox => {
        checkbox.checked = false;
        const label = checkbox.nextElementSibling;
        label.style.opacity = '1';
        label.style.textDecoration = 'none';
    });
}

// Inicializar ao carregar página
document.addEventListener('DOMContentLoaded', carregarProcessos);
