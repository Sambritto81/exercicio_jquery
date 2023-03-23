const form = document.getElementById('form-tarefas');
let linhas = '';

form.addEventListener('submit' ,function(e) {
    e.preventDefault();

    const inputNomeTarefa = document.getElementById('nome-tarefa');

    let linha = '<ul>';
    linha += `<li>${inputNomeTarefa.value}</li>`;
    linha += '</ul>';

    
    linhas += linha;
    const corpoTabela = document.querySelector('.lista');
    corpoTabela.innerHTML = linhas
    inputNomeTarefa.value = '';
    
    })

    $(document).ready(function() {
    
        $('form').on('submit', function(e) {
            e.preventDefault();
    
            const NomeDaTarefa = $('#nome-tarefa').val();
            const novaTarefa = $('<li></li>');
    
            $(`<li>${NomeDaTarefa}</li>`).appendTo(novaTarefa);
            $(novaTarefa).appendTo('ul');
    
            $("li").click(function () {
                $(this).addClass('feito');
            });
            
            $('#NomeDaTarefa').val("");
        })
    })