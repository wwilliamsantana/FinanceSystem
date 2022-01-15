const Modal = {
  open() {
    //Abrir overlay, add class "active"
    document.querySelector('.modal-overlay').classList.add('active')
  },
  close() {
    //Fechar overlay, removendo class "active"
    document.querySelector('.modal-overlay').classList.remove('active')
  }
}

const transaction = [
  {
    id: 1,
    description: 'Luz',
    amount: -50000,
    date: '23/01/2021'
  },
  {
    id: 2,
    description: 'Criação website',
    amount: 500000,
    date: '23/01/2021'
  },
  {
    id: 1,
    description: 'Internet',
    amount: -20000,
    date: '23/01/2021'
  }
]

const Transaction = {
  incomes() {
    //Somar entradas
  },
  expenses() {
    //somar as saídas
  },
  total() {
    //entradas - saídas
  }
}

const DOM = {
  addTransaction(transaction, index) {
    const tr = document.createElement('tr')
    tr.innerHTML = DOM.innerHTMLTransaction(transaction)
    console.log(tr.innerHTML)
  },
  innerHTMLTransaction(transaction) {
    const html = `
      <td class="description">${transaction.description}</td>
      <td class="expense">${transaction.amount}</td>
      <td class="date">${transaction.date}</td>
      <td>
      <img src="./assets/minus.svg" alt="Remover Transações">
      </td>
    `

    return html
  }
}

DOM.addTransaction(transaction[0])
