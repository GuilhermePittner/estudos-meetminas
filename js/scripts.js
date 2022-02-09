const _gallery = [
	{
		img: "assets/photo_0.png",
		description: "Conceição do Mato Dentro"
	},
	{
		img: "assets/photo_1.png",
		description: "Diamantina"
	},
	{
		img: "assets/photo_2.png",
		description: "Tiradentes"
	},
	{
		img: "assets/photo_3.png",
		description: "São Lourenço"
	},
	{
		img: "assets/photo_4.png",
		description: "Serro"
	},
	{
		img: "assets/photo_5.png",
		description: "São Tomé das Letras"
	},
	{
		img: "assets/photo_6.png",
		description: "Ipoema"
	},
	{
		img: "assets/photo_7.png",
		description: "Ouro Preto"
	}
]

const _elements = {
	date: document.querySelector(".date"),

	scrollLinks: document.querySelectorAll(".navbar-list__link, .footer-list__link"),
	navbarList: document.querySelector(".navbar-list"),
	toggle: document.querySelector(".navbar-header__toggle"),

	galleryItems: document.querySelectorAll(".galeria-item"),
	sliderThumbsImage: document.querySelectorAll(".slider-thumbs__img"),
	closeModalBtn: document.querySelector(".modal__close"),
	modal: document.querySelector(".modal"),

	slider: document.querySelector(".slider"),
	sliderImage: document.querySelector(".slider-image__img"),
	sliderImageNumber: document.querySelector(".slider-image__number"),
	sliderImageDescription: document.querySelector(".slider-image-description"),
	sliderPrevButton: document.querySelector(".slider-buttons__btn-prev"),
	sliderNextButton: document.querySelector(".slider-buttons__btn-next"),
}

let _sliderCounter = 0, _touchStart, _touchEnd;

_elements.date.innerHTML = new Date().getFullYear() + ".";


// --------------------- //
_elements.scrollLinks.forEach(link => {
	link.addEventListener("click", e => {
		_elements.navbarList.classList.remove("navbar-list--show-links");
		//remover a classe desejada para não ficar na tela o tempo todo

		const id = link.getAttribute("href"); // variável (constante) id está armazenando o conteúdo de onde está o HREF (link)
		const element = document.querySelector(id); // element está armazenando a tag em que o usuário quer ir

		const position = element.offsetTop - 62;
		window.scrollTo({
			top: position,
			behavior: "smooth"
		});
		e.preventDefault();
	})
});
// --------------------- //



// --------------------- //
_elements.toggle.addEventListener("click", () => {
	_elements.navbarList.classList.toggle("navbar-list--show-links");
	//o método TOGGLE adiciona (caso não exista) e remove (caso exista) a classe desejada ao mesmo tempo!
});
// --------------------- //

_elements.galleryItems.forEach(item => {
	
	item.addEventListener("click", e =>{
		const id = getImageId(e.target);

		updateModal(id);

		//acessando os estilos da classe MODAL e alterando para flex
		_elements.modal.style.display = "flex";

	})
});

_elements.sliderThumbsImage.forEach(img => {
	img.addEventListener("click", e =>{
		const id = getImageId(e.target);
		updateModal(id);
	})
});

_elements.closeModalBtn.addEventListener("click", () => {
	//ocultando a classe modal
	_elements.modal.style.display = "none";
});

_elements.sliderNextButton.addEventListener("click", () => nextImage());

_elements.sliderPrevButton.addEventListener("click", () => prevImage());

const getImageId = (target) => {
	const arrFromChildren = Array.from(target.parentNode.children);
	const id = arrFromChildren.indexOf(target);

	_sliderCounter = id;

	return id;
}

const updateModal = (imgId) => {
	_elements.sliderImage.src = _gallery[imgId].img;
	_elements.sliderImageNumber.innerHTML = (imgId+1) + "/" + _gallery.length;

	_elements.sliderImageDescription.innerHTML = (_gallery[imgId].description);

	_elements.sliderThumbsImage.forEach(img =>{
		img.classList.remove("slide-thumbs__img--active");
	})

	_elements.sliderThumbsImage[imgId].classList.add("slide-thumbs__img--active");
}

const nextImage = () => {
	_sliderCounter = ++_sliderCounter;
	if (_sliderCounter>7){
		_sliderCounter = 0;
	}
	updateModal(_sliderCounter);
	
}

const prevImage = () => {
	_sliderCounter = --_sliderCounter;
	if (_sliderCounter<0){
		_sliderCounter = 7;
	}
	updateModal(_sliderCounter);
}

/**************************************************************************/
/* As linhas de código abaixo correspondem a um capítulo e um vídeo bônus 
/* desse projeto. Neste capítulo/vídeo é ensinado como fazer o slider alterar
/* a imagem apenas arrastando o dedo na tela. 
/*
/* Caso deseje adquirir essa parte do projeto acompanhado do código fonte 
/* completo + código fonte comentado + layout do projeto no Figma, 
/* acesse o link abaixo:
/*
/* https://inkasadev.alumy.com
/**************************************************************************/

_elements.slider.addEventListener("", e => {

});

_elements.slider.addEventListener("", e => {

});
