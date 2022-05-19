function fibonacci(limit, startnum1, startnum2){
    const fib = [startnum1, startnum2];

    for(i = 2; i <= limit; i++){
        fib[i] = fib[i-1] + fib[i-2]; 
    }

    return fib;
}

function result(minutes, seconds){
    const minutesString = String(minutes);
    const firstNum = Number(minutesString.charAt(0));
    const lastNum = Number(minutesString.charAt(1));
    
    const arrayNums = fibonacci(seconds, firstNum, lastNum);
    const containerResult = document.querySelector('.watch-result');
    containerResult.innerHTML='';
    for(i = arrayNums.length - 1; i >= 0; i--){
        console.log(arrayNums[i])
        const textResult = document.createElement('p');
        textResult.textContent = `${arrayNums[i]},`;
        containerResult.appendChild(textResult);
    }
}

function watch(){
    //contenedor del reloj
    const timeHtml = document.getElementById('time');
    setInterval(()=>{

        time = new Date();

        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();

        //evitar numeros solos
        if(hours < 10){
            hours = `0${hours}`;
        }
        if(minutes < 10){
            minutes = `0${minutes}`;
        }
        if(seconds < 10){
            seconds = `0${seconds}`;
        }
        timeHtml.innerHTML = `${hours} : ${minutes} : ${seconds}`;
    }, 1000);

    const button = document.getElementById('takeTime');
    button.addEventListener('click', () => {
        time = new Date();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        result(minutes, seconds);
    });
}
watch();


