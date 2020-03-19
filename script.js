const strlkL = document.getElementById('strlkL');
const strlkR = document.getElementById('strlkR');
const phon1 = document.getElementById('phon1');
const phon2 = document.getElementById('phon2');
const send = document.getElementById('send');
const close = document.getElementById('close');
const filter = document.getElementById('filter');
const artG = document.getElementById('artG');
const name = document.getElementById('name');
const email = document.getElementById('email');
var cordX, cordY, ph1 = 0, ph2 = 0;



artG.addEventListener('click', (event) => {
	artG.querySelectorAll('img').forEach(el => el.classList.remove('artActive'));
	if (event.target.className != "art_gallery") {
	event.target.classList.add('artActive');}
})

	var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext('2d'),
        slid0pos = 0;
        slid1pos = -1020;
        slid2 = new Image();  
        phone1 = new  Image();    
        phone2 = new Image();
        content1 = new Image();
        content2 = new Image();
        content1.src = 'assets/content1.png';
        content2.src = 'assets/content2.png';
        phone1.src = 'assets/iPhoneVertical.png'
        phone2.src = 'assets/iPhoneHorizontal.png'    
      slid2.src    = 'assets/Slide-2.png';  
      slid2.onload = function() {    
        ctx.drawImage(slid2, 	slid1pos, 0);  
      }
    	ctx.fillStyle = "#f06c64";
		ctx.fillRect(slid0pos, 0, 1020, 595);
		phone1.onload = function() {    
        ctx.drawImage(phone1, 	slid0pos + 110, 54);  
      }
      phone2.onload = function() {    
        ctx.drawImage(phone2, 	slid0pos + 425, 174);  
      }
      content1.onload = function () {
      	ctx.drawImage(content1, 	slid0pos + 124, 119); 
      }
      content2.onload = function () {
      	ctx.drawImage(content2, 	slid0pos + 484, 184); 
      }


phon1.addEventListener('click', (event) => {
	if (ph1 == 0) {
		ctx.fillStyle = '#000000';
	ctx.fillRect(slid0pos + 124, 119, 188, 333);
	ph1 = 1;
	} else {
		ctx.drawImage(content1, 	slid0pos + 124, 119);
		ph1 = 0;
	}
})
phon2.addEventListener('click', (event) => {
	if (ph2 == 0) {
		ctx.fillStyle = '#000000';
	ctx.fillRect(slid0pos + 481, 185.5, 337, 190);
	ph2 = 1;
	} else {
		ctx.clearRect(slid0pos + 481, 185.5, 337, 190);
		ctx.drawImage(content2,slid0pos + 481.5, 186.5);
		ph2 = 0;
	}
})


strlkL.addEventListener('click', (event) => {
	let timerId;
	
	if (slid1pos == 0) {
		slid0pos = -1020;
		ctx.fillStyle = "#f06c64";
		ctx.drawImage(phone1, 	slid0pos + 110, 54);
		ctx.drawImage(phone2, 	slid0pos + 420, 173);
		ctx.fillRect(slid0pos, 0, 1020, 595);
		timerId = setInterval(function(){
		

		ctx.clearRect(0, 0, 1020, 595);
		slid1pos = slid1pos + 10;
		ctx.drawImage(slid2,slid1pos, 0);
		slid0pos = slid0pos + 10;
		ctx.fillStyle = "#f06c64";
		ctx.fillRect(slid0pos, 0, 1020, 595);
		ctx.drawImage(phone1, 	slid0pos + 110, 54);
		ctx.drawImage(phone2, 	slid0pos + 420, 173);
		if (ph1 == 1) {ctx.fillStyle = '#000000';
	ctx.fillRect(slid0pos + 124, 119, 188, 333);}
	if (ph2 == 1) {ctx.fillStyle = '#000000';
	ctx.fillRect(slid0pos + 481, 185.5, 337, 190);}
		if (slid0pos >= 0) {
			
			clearInterval(timerId);
			return;
		}
	
	}, 1);}
	if (slid0pos == 0) {
		slid1pos = -1020;
		ctx.drawImage(slid2,slid1pos, 0);
		timerId = setInterval(function(){
		

		ctx.clearRect(0, 0, 1020, 595);
		slid1pos = slid1pos + 10;
		ctx.drawImage(slid2,slid1pos, 0);
		slid0pos = slid0pos + 10;
		ctx.fillStyle = "#f06c64";
		ctx.fillRect(slid0pos, 0, 1020, 595);
		ctx.drawImage(phone1, 	slid0pos + 110, 54);
		ctx.drawImage(phone2, 	slid0pos + 420, 173);
		if (ph1 == 1) {ctx.fillStyle = '#000000';
	ctx.fillRect(slid0pos + 124, 119, 188, 333);}
	if (ph2 == 1) {ctx.fillStyle = '#000000';
	ctx.fillRect(slid0pos + 481, 185.5, 337, 190);}
		if (slid1pos >= 0) {
			
			clearInterval(timerId);
			return;
		}
	}, 1);}
	
})
strlkR.addEventListener('click', (event) => {
	let timerId;
	
	if (slid1pos == 0) {
		slid0pos = 1020;
		ctx.fillStyle = "#f06c64";
		ctx.fillRect(slid0pos, 0, 1020, 595);
		ctx.drawImage(phone1, 	slid0pos + 110, 54);
		ctx.drawImage(phone2, 	slid0pos + 420, 173);

		timerId = setInterval(function(){
		

		ctx.clearRect(0, 0, 1020, 595);
		slid1pos = slid1pos - 10;
		ctx.drawImage(slid2,slid1pos, 0);
		slid0pos = slid0pos - 10;
		ctx.fillStyle = "#f06c64";
		ctx.fillRect(slid0pos, 0, 1020, 595);
		ctx.drawImage(phone1, 	slid0pos + 110, 54);
		ctx.drawImage(phone2, 	slid0pos + 420, 173);
		if (ph1 == 1) {ctx.fillStyle = '#000000';
	ctx.fillRect(slid0pos + 124, 119, 188, 333);}
	if (ph2 == 1) {ctx.fillStyle = '#000000';
	ctx.fillRect(slid0pos + 481, 185.5, 337, 190);}
		if (slid0pos == 0) {
			
			clearInterval(timerId);
			return;
		}
	
	}, 1);}
	if (slid0pos == 0) {
		slid1pos = 1020;
		ctx.drawImage(slid2,slid1pos, 0);
		timerId = setInterval(function(){
		

		ctx.clearRect(0, 0, 1020, 595);
		slid1pos = slid1pos - 10;
		ctx.drawImage(slid2,slid1pos, 0);
		slid0pos = slid0pos - 10;
		ctx.fillStyle = "#f06c64";
		ctx.fillRect(slid0pos, 0, 1020, 595);
		ctx.drawImage(phone1, 	slid0pos + 110, 54);
		ctx.drawImage(phone2, 	slid0pos + 420, 173);
		if (ph1 == 1) {ctx.fillStyle = '#000000';
	ctx.fillRect(slid0pos + 124, 119, 188, 333);}
	if (ph2 == 1) {ctx.fillStyle = '#000000';
	ctx.fillRect(slid0pos + 481, 185.5, 337, 190);}
		if (slid1pos == 0) {
			
			clearInterval(timerId);
			return;
		}
	}, 1);}
	
})



filter.addEventListener('click', (event) => {
	var arrOfSrc = [];
	var arrOfPic = ["pic1", "pic2", "pic3", "pic4", "pic5", "pic6", "pic7", "pic8", "pic9", "pic10", "pic11", "pic12"];
	for (var i = 0; i < arrOfPic.length; i++) {
		arrOfSrc.push(document.getElementById(arrOfPic[i]).src)
	}
	for (var i = arrOfSrc.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arrOfSrc[i];
        arrOfSrc[i] = arrOfSrc[j];
        arrOfSrc[j] = temp;
    }
    for (var i = 0; i < arrOfPic.length; i++) {
    	document.getElementById(arrOfPic[i]).src = arrOfSrc[i]
    }
})









close.addEventListener('click', (event)=> {
	document.getElementById("get").className = 'gethid';
	name.value = '';
	email.value = '';
	document.getElementById('dis').value = '';
	document.getElementById('sub').value = '';
});

send.addEventListener('click', (event) =>  {
	if (name.value != '' && email.value != '') {
	var a = document.getElementById('sub').value.toString();
	if (a == '')
	{document.getElementById('subreturn').innerText = 'Без темы'} else {document.getElementById('subreturn').innerText = 'Тема: ' + a}
	a = document.getElementById('dis').value.toString();
	if (a == '')
	{document.getElementById('disreturn').innerText = 'Без описания'} else {document.getElementById('disreturn').innerText = 'Описание: ' + a}
	
	document.getElementById("get").className = "get";} else {alert('Ошибка, заполните поле name и email')}
});

