
let messge2Give = function (local) {
    let alert = document.createElement('div');
        alert.id = '1'; 
    

    let form1 = document.body.querySelector('form');
        form1.style.cssText = 'display: none;';

    let local1 = local.substring(local.indexOf('?'), local.indexOf('='));
    
    let style = document.createElement('style');
        document.body.style.backgroundImage = 'url(1.png)';
        document.body.style.backgroundRepeat = 'no-repeat'; 
        document.body.style.backgroundPositionY = '100px';  

    if(local1 == '?alert') {
        alert.innerHTML = 'Добро пожаловать!';
        document.body.appendChild(alert);
        alert.style.cssText = `width: 400px; height: 40px; font-size: 30px; text-transform: uppercase; font-weight: bold; font-style: italic; color:	#A60017; text-align: center; background-color: #73FFA2; border: none; border-radius: 25px; margin: 50px auto;`;
        setTimeout('document.getElementById("1").hidden = true', 5000);
        form1.style.cssText = 'display: block;';
        document.getElementById('a').hidden = true;            
    } 

    if  (local1 == '?error') {
        alert.innerHTML = 'Вход запрещен!'; 
        document.body.appendChild(alert);
        alert.style.cssText = `width: 250px; height: 70px; font-size: 28px; text-transform: uppercase; font-weight: bold; font-style: italic; color:	#A60017; text-align: center; background-color: #FF7386; border: none; border-radius: 25px; margin: 0 auto;`;
        setTimeout('document.getElementById("1").hidden = true', 5000);
        document.body.style.backgroundImage = 'url(2.png)';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPositionY = '100px';
    }
        
    let valid = /^\?text=.{1,}&Submit.{0,}/;
      
    if(valid.test(local) == true) {      
        alert.innerHTML = 'Ваше сообщение отправлено!'; 
        document.body.appendChild(alert);
        alert.style.cssText = `font-size: 28px; text-transform: uppercase; font-weight: bold; font-style: italic; color:	#BF3044; text-align: center; margin: 0 auto; `;
        setTimeout('document.getElementById("1").hidden = true', 5000);     
    } 

    }  
let local = window.location.search;
messge2Give(local);



