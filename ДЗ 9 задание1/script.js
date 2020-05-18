

let messgeGive = function (typeM, stringM) {
    let error = document.createElement('div');
        error.id = '1'; 
    let alert = document.createElement('div');
        alert.id = '2'; 
    let msg = document.createElement('div');
        msg.id = '3'; 
    let style = document.createElement('style');

    switch(typeM) {

        case 'error': 
        error.innerHTML = stringM;
        document.body.appendChild(error);          
        error.style.cssText = `width: 300px; height: 30px; background-color: #A6A400; border-radius: 7px; border: 1px solid black;font-size: 18px; text-transform: uppercase; font-weight: bold; text-align: center; padding-top: 15px; margin: 10% 10%;`;
        setTimeout('document.getElementById("1").outerHTML =""', 5000);
        break;

        case 'alert':
        alert.innerHTML = stringM;
        document.body.appendChild(alert);
        alert.style.cssText = `width: 500px; height: 50px; background-color: #FFFC00; border-radius: 7px; border: 1px solid black;font-size: 18px; text-transform: uppercase; font-weight: bold; text-align: center; padding-top: 40px; margin: 10% 10%;`;
        setTimeout('document.getElementById("2").outerHTML =""', 5000);
        break;

        case 'msg':
        msg.innerHTML = stringM;
        document.body.appendChild(msg);
        msg.style.cssText = `width: 300px; height: 30px; background-color: #74E868; border-radius: 7px; border: 1px solid black;font-size: 18px; text-transform: uppercase; font-weight: bold; text-align: center; padding-top: 15px; margin: 10% 10%;`;
        setTimeout('document.getElementById("3").outerHTML =""', 5000);
        break;
    }
}
messgeGive('error', 'Ошибка ввода');
messgeGive('alert', 'Ваше сообщение отправлено!!!');
messgeGive('msg', 'Привет! Как дела?');


  
  


