window.onload = function() {
document.querySelectorAll(".glide").forEach(function(glide){

	console.log("Glide Sliders Found");
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

		if ("glide" in glide.dataset) {

			var obj = glide.dataset.glide;
			var carousel = new Glide(glide, JSON.parse(obj));
			carousel.slides_count = glide.querySelectorAll('.glide__slide').length;
			if(carousel.slides_count > 1 && !glide.querySelectorAll('.glide__arrows').length){
				glide.innerHTML = glide.innerHTML  + '<div class="glide__arrows" data-glide-el="controls"><button class="glide__arrow glide__arrow--left" data-glide-dir="<"></button><button class="glide__arrow glide__arrow--right" data-glide-dir=">"></button></div>';
			}
			carousel.on('resize', () => {
				check_resize(carousel, glide);
			});
			carousel.mount();
			check_resize(carousel, glide);
		}

})
};