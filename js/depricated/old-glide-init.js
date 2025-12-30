/// Location was Content > System > Pages > Master > Bottom Code (HTML)


var sliders = document.getElementsByClassName('glide');
if (sliders.length !== 0) {
    let check_resize = (glide, element) => {

        if (glide.slides_count <= glide.settings.perView) {
      	   //if (glide.mounted) {
      		//glide.disable();
      	   //}
            glide.update({startAt: 0}).disable();
            element.classList.add("hideArrows");
	
        } else {
            glide.enable();
	    element.classList.remove("hideArrows");	
        }
    };
	Array.prototype.forEach.call(sliders, function (element, index, array) {		
		if ("glide" in element.dataset) {

			var obj = element.dataset.glide;
			var carousel = new Glide(element, JSON.parse(obj));
			carousel.slides_count = element.querySelectorAll('.glide__slide').length;
			if(carousel.slides_count > 1 && !element.querySelectorAll('.glide__arrows').length){
				element.innerHTML = element.innerHTML  + '<div class="glide__arrows" data-glide-el="controls"><button class="glide__arrow glide__arrow--left" data-glide-dir="<"></button><button class="glide__arrow glide__arrow--right" data-glide-dir=">"></button></div>';
			}
			carousel.on('resize', () => {
				check_resize(carousel, element);
			});
			carousel.mount();
			check_resize(carousel, element);
		}
	})
}
