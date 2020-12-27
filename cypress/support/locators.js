export default {
    LOGIN: {
        USER: '[data-test=email]',
        PASSWORD: '[data-test=passwd]',
        BTN_LOGIN: '.btn'
    },
    MESSAGE: '.toast',
    MENU: {
        HOME: '[data-test=menu-home] > .fas',
        SETTINGS: '[data-test=menu-settings]',
        CONTAS: '[href="/contas"]',
        RESET: '[href="/reset"]',
        MOVIMENTACAO: '[data-test=menu-movimentacao]',
        EXTRATO: '[data-test=menu-extrato]',
    },
    MOVIMENTACAO: {
        DESCRICAO: '[data-test=descricao]',
        VALOR: '[data-test=valor]',
        ENVOLVIDO: '[data-test=envolvido]',
        CONTA: '[data-test=conta]',
        STATUS: '[data-test=status]',
        SALVAR: 'button:contains("Salvar")',
        BTN_RECEITA: '[data-test=tipo-receita]',
        BTN_DESPESA: '[data-test=tipo-despesa]',
    },
    EXTRATO: {
        LISTA: '.list-group li',
        BUSCAR: transaction => `li:contains(${transaction})`,
        EDIT: transaction => `li:contains(${transaction}) .fa-edit`,
        REMOVE: transaction => `li:contains(${transaction}) .fa-trash-alt`,
    },
    CONTAS: {
        NOME: '[data-test=nome]',
        BTN_SALVAR: '.btn',
        EDIT: conta => `tr:contains(${conta}) .fa-edit`,
        REMOVE: conta => `tr:contains(${conta}) .fa-trash-alt`,
    },
}; 