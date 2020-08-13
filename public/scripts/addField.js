// Procurar o botao
document.querySelector("#add-time")
// Quando cliclar no botao
.addEventListener('click', cloneField)
// Executar uma acao
function cloneField() {
    // Duplicar os campos. Que camps?
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true) // Colocar sempre "Node" para indicar elementos .HTML /// boolean: true ou false /// const mantem a variável constante

    // Limpar os camps. Que campos?
    const fields = newFieldsContainer.querySelectorAll('input')

    // Para cada campo, limpar
    fields.forEach(function(field) {
        // Pegar o field do momento e limpar ele
        field.value = ""
        console.log(field)
    })

    // Colocar na pagina: onde?
    document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}