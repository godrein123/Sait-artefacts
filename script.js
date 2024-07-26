const burger = document.querySelector('.burger');
const nuv = document.querySelector('.nuv');

function toggleNuv() {
	if (nuv.style.display === "none" || nuv.style.display === "") {
		nuv.style.display = "block";
		setTimeout(() => {
		nuv.style.opacity = 1;	
		}, 150);
		} else {
			nuv.style.opacity = 0;
		setTimeout(() => {
			nuv.style.display = "none";
		}, 150);
		}
}

burger.addEventListener("click", toggleNuv);

function nuvResize() {
	if (window.innerWidth > 900) {
		nuv.style.display = 'block';
		burger.style.display = 'none';
	} else {
		nuv.style.display = 'none';
		burger.style.display = 'block';
	}
}

window.addEventListener("resize",nuvResize);

nuvResize();