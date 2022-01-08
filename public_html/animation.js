var
    example = document.getElementById("myCanvas")
    ctx = example.getContext('2d')

    pic = document.getElementById("mybtn")

    x=100 // начальная координата картинки по горизонтали
    // если картинка загружена, то включаем таймер, который будет вызывать функцию движения картинки:
    pic.onload = function() {
    setInterval(motion, 1000/30)
}
    // функция движения картинки
    function motion() {
    ctx.drawImage(pic, x, 0) // выводим картинку по координатам (pic, x, 0)
    x++ // увеличиваем координату X
}
