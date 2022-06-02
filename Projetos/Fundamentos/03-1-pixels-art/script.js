window.onload = function () {
    let boardSize = 5;
    
    // Tamanho do quadro definido por input
    function boardLength() {
        
        let exclude = document.getElementsByClassName('clear')
        let sizeCheck = document.getElementById('board-size').value
        if (sizeCheck > 0) {

            for (let index = 0; index < boardSize; index += 1){
                document.getElementById('pixel-board').removeChild(document.getElementById('pixel-board').lastChild)
            }
            let input = document.getElementById('board-size').value
            if (input < 5) {
                boardSize = 5;
            }
            else if (input > 50) {
                boardSize = 50
            } else {
                boardSize = document.getElementById('board-size').value
            }
            addDiv('lines', 'div')
            addColumns('pixel', 'li')
        } else {
            alert('Board inválido!')
        }
    }

    document.getElementById('generate-board').addEventListener('click', boardLength)

    // Cria uma caixa com base nas diferentes classes
    function createBox(className, element) {
        let box = document.createElement(element);
        box.className = className;
        return box;
    }

    // função para criar divs filhas da seção ID pixel-board
    function addDiv(classe, elemento) {
        let parent = document.getElementById('pixel-board')
        for (let index = 0; index < boardSize; index += 1) {
            parent.appendChild(createBox(classe, elemento))
        }
    }
    addDiv('lines', 'div')

    // funçao para adicionar divs filhas as divs linhas

    function addColumns(classe, elemento) {
        let parent = document.getElementsByClassName('lines')
        for (let i = 0; i < parent.length; i += 1) {
            for (let index = 0; index < boardSize; index += 1) {
                parent[i].appendChild(createBox(classe, elemento))
            }
        }
    }
    addColumns('pixel', 'li')

    // inserir cores as opções

    function generateRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      

    document.getElementById('color1').style.backgroundColor = 'black'
    document.getElementById('color2').style.backgroundColor = generateRandomColor()
    document.getElementById('color3').style.backgroundColor = generateRandomColor()
    document.getElementById('color4').style.backgroundColor = generateRandomColor()

    // Mudar a cor selecionada via classe selected

    const color1 = document.getElementById('color1');
    const color2 = document.getElementById('color2');
    const color3 = document.getElementById('color3');
    const color4 = document.getElementById('color4');
    const selected = document.getElementsByClassName('selected');

    function selectColor(event) {
        let color = event.target
        selected[0].classList.remove('selected');
        color.classList.add('selected');
    }

    color1.addEventListener('click', selectColor)
    color2.addEventListener('click', selectColor)
    color3.addEventListener('click', selectColor)
    color4.addEventListener('click', selectColor)

    // preencher os pixels com cor selecionada

    function paintPixel(event) {
        let color = document.querySelector('.selected').style.backgroundColor
        if (event.target.style.backgroundColor === color) {
            event.target.style.backgroundColor = 'rgb(255, 255, 255)'
        }
        else {
            event.target.style.backgroundColor = color
        }
    }

    document.querySelector('#pixel-board').addEventListener('click', paintPixel)


    // botão de limpar

    function clearBox() {
        let board = document.querySelectorAll('.pixel')
        for (let value of board) {
            value.style.backgroundColor = 'rgb(255, 255, 255)'
        }
    }

    document.getElementById('clear-board').addEventListener('click', clearBox)


    

}
