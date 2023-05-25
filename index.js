
// Скорость

$('#but1').click(f1)
function f1(){
    let x = Number ($('#in1').val())
    let y = Number ($('#in2').val())
    let r = (x/y)
    $('#result1').text('Скорость: '+ r +' км/ч')
}

// Количество шоколадок

$('#but2').click(f2)
function f2(){
    let x = Number ($('#in3').val())
    let y = Number ($('#in4').val())
    let r = Math.floor (x/y)
    let d = (x - y * r)
    $('#result1').text('Можете купить : '+ r +' шоколадок' + ' Сдача '+ d + ' руб.')
}

// Конвертер валют

$('#but3').click(f3)
function f3(){
    let x = Number ($('#in5').val())
    const y = 0.93
    let r = (x * y)
    $('#result1').text('Будет '+ r +' €')
}