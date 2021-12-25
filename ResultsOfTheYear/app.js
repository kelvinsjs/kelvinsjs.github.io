const marquee = document.querySelector(".marquee__inner");
marquee.style.transform = "translateY(-"+(0.35*window.innerHeight)+"px)"

console.log("22:06 24.12. Как же ахуенно делать что-то для сервера во время того, как тебя срет тот, кто для серва нихуя не сделал")

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

const smileBox = $(".smile-box")

let page3counter = 0;

if ("onhashchange" in window) { // event supported?
	window.onhashchange = function () {
		if (((document.querySelector(".counter").innerText) - 1) > 200) {
			console.log(".")
		} else {
			outNum(460000, 'counter');
		}

		if (window.location.href.includes("page-3")) {
			if (page3counter < 0.1) {
				for (let k = 0; k < Math.round((smileBox.height() - 60)/100); k++) {
					smileBox.append(`<div class="smile-line"></div>`)
				}
				$(".smile-line").each(function() {
					for (let j = 0; j < Math.round(($(this).width())/100); j++) {
						setTimeout(() => {
							$(this).append(`<img src="./img/kekv.png" alt="kekv" class="kekv">`)
						}, j*(1.5/Math.round(($(this).width())/100))*1000)
					}
				})
				page3counter += 1;
				setTimeout(() => {
					smileBox.hide();
					document.querySelector('.page3box').classList.remove('d-n');
				}, 2000)
			} else {
				console.log("page 3 full")
			}
		}
	}
} else { // event not supported:
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

document.querySelector('.hide-ok').addEventListener('click', () => {
	$(".hide-block").hide()
})