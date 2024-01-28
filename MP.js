const openmenu = document.querySelector(".openmenu");

const closemenu = document.querySelector(".closemenu");

const mainmenu = document.querySelector(".mainmenu");


openmenu.addEventListener('click', show);
function show(){
	mainmenu.style.display='flex';
	mainmenu.style.top='0';
}

closemenu.addEventListener('click', close);
function close(){
	mainmenu.style.top ='-100%';
}