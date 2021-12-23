const marquee = document.querySelector(".marquee__inner");
marquee.style.transform = "translateY(-"+(0.35*window.innerHeight)+"px)"

const time = 5; // ms
const step = 1000; 

function outNum(num, elem) {
	let l = document.querySelector('.' + elem);
	n = 0;
	let t = Math.round(time/(num/step));
	let interval = setInterval(() => {
		n = n + step;
		if (n == num) {
			clearInterval(interval);
		}
		l.innerHTML = n;
	},
	t);
}

if ("onhashchange" in window) { // event supported?
	window.onhashchange = function () {
		if (((document.querySelector(".counter").innerText) - 1) > 200) {
			console.log(".")
		} else {
			outNum(460000, 'counter');
		}
	}
}
else { // event not supported:
	var storedHash = window.location.hash;
	window.setInterval(function () {
		if (window.location.hash != storedHash) {
			storedHash = window.location.hash;
			if (((document.querySelector(".counter").innerText) - 1) > 200) {
				console.log(".")
			} else {
				outNum(460000, 'counter');
			}
		}
	}, 100);
}
