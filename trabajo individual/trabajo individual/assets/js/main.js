var id="bienvenido"
alert(id)

let colors = document.getElementById("todo")


function generarLetra(){
	let letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
	let numero = (Math.random()*15).toFixed(0);
	return letras[numero];
}
	
function colorHEX(){
	let coolor = "";
	for(let i=0;i<6;i++){
		coolor = coolor + generarLetra() ;
	}
	return "#" + coolor;
}
function changecolor(){
    let colorido= document.getElementById('todo');
    colorido.style.background= colorHEX()
}



// Initialise Carousel
const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
	Dots: false,
  });
  
  // Thumbnails
  const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
	Sync: {
	  target: mainCarousel,
	  friction: 0,
	},
	Dots: false,
	Navigation: false,
	center: true,
	slidesPerPage: 1,
	infinite: false,
  });
  
  // Customize Fancybox
  Fancybox.bind('[data-fancybox="gallery"]', {
	Carousel: {
	  on: {
		change: (that) => {
		  mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
			friction: 0,
		  });
		},
	  },
	},
  });