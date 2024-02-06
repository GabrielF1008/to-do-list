$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault()
        const novaTarefa = $('#tarefa').val()
        console.log(novaTarefa)
        const novoItem = $('<li class="tarefa" style="display: none"></li>')
        $(`<h2>${novaTarefa}</h2>`).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(800)
        $('#tarefa').val('')
    })

    $('ul li').click(function () {
        const tarefaComListra = (`<h2 style="text-decoration: line-through;">${novaTarefa}</h2>`)
        $(tarefaComListra).appendTo('ul li h2')
    })
})  