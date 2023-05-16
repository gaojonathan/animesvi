/* MENU */
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}

/* SLIDE */


const slides=document.querySelector(".slider").children;
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const indicator=document.querySelector(".indicator");
let index=0;


  prev.addEventListener("click",function(){
	  prevSlide();
	  updateCircleIndicator(); 
	  resetTimer();
  })

  next.addEventListener("click",function(){
	 nextSlide(); 
	 updateCircleIndicator();
	 resetTimer();
	 
  })

  // create circle indicators
   function circleIndicator(){
	   for(let i=0; i< slides.length; i++){
		   const div=document.createElement("div");
				 div.innerHTML=i+1;
			   div.setAttribute("onclick","indicateSlide(this)")
			   div.id=i;
			   if(i==0){
				   div.className="active";
			   }
			  indicator.appendChild(div);
	   }
   }
   circleIndicator();

   function indicateSlide(element){
		index=element.id;
		changeSlide();
		updateCircleIndicator();
		resetTimer();
   }
	
   function updateCircleIndicator(){
	   for(let i=0; i<indicator.children.length; i++){
		   indicator.children[i].classList.remove("active");
	   }
	   indicator.children[index].classList.add("active");
   }

  function prevSlide(){
	   if(index==0){
		   index=slides.length-1;
	   }
	   else{
		   index--;
	   }
	   changeSlide();
  }

  function nextSlide(){
	 if(index==slides.length-1){
		 index=0;
	 }
	 else{
		 index++;
	 }
	 changeSlide();
  }

  function changeSlide(){
			 for(let i=0; i<slides.length; i++){
				  slides[i].classList.remove("active");
			 }

	  slides[index].classList.add("active");
  }

  function resetTimer(){
		// when click to indicator or controls button 
		// stop timer 
		clearInterval(timer);
		// then started again timer
		timer=setInterval(autoPlay,4000);
  }

 
 function autoPlay(){
	 nextSlide();
	 updateCircleIndicator();
 }

 let timer=setInterval(autoPlay,4000);

 /*buscador
 document.addEventListener("keyup", e=>{

	if (e.target.matches("#buscador")){
  
		if (e.key ==="Escape")e.target.value = ""
  
		document.querySelectorAll(".articulo").forEach(fruta =>{
  
			fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
			  ?fruta.classList.remove("filtro")
			  :fruta.classList.add("filtro")
		})
  
	}
  
  
  })*/

  //SEARCH
  document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}

document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

bars_search =       document.getElementById("ctn-bars-search");
cover_ctn_search =  document.getElementById("cover-ctn-search");
inputSearch =       document.getElementById("inputSearch");
box_search =        document.getElementById("box-search");

function mostrar_buscador(){

    bars_search.style.top = "80px";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();

    if (inputSearch.value === ""){
        box_search.style.display = "none";
    }

}

function ocultar_buscador(){

    bars_search.style.top = "-10px";
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";
    box_search.style.display = "none";

}

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno(){


    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    for (i = 0; i < li.length; i++){

        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){

            li[i].style.display = "";
            box_search.style.display = "block";

            if (inputSearch.value === ""){
                box_search.style.display = "none";
            }

        }else{
            li[i].style.display = "none";
        }

    }



}

