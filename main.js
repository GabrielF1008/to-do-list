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


    $('ul').on('click', 'li', function () {
        $(this).find('h2').toggleClass('riscado');
    });
})  