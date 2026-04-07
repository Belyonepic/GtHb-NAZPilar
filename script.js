const image = document.getElementById('mainImage');
const hoverAreas = document.querySelectorAll(".hover-area");

hoverAreas.forEach(area => {
	area.addEventListener('mouseenter', () => {
		//image.src = area.dataset.img;

		//console.log("hover works")
		//console.log(area.dataset.img);
		const newSrc = area.getAttribute("data-img");
    	console.log("SETTING:", newSrc);

    	image.src = newSrc;
	});

	area.addEventListener('mouseleave', () => {
		image.src = 'imgs/Poster.png';
	});
});