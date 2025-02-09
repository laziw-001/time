let clock = document.getElementById('clock')
function time() {
	let date = new Date();

	let hours = date.getHours() >= 10 ? date.getHours() : '0' + date.getHours(); 
	let minutes = date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes();
	let seconds = date.getSeconds() >= 10 ? date.getSeconds() : '0' + date.getSeconds();

	clock.innerHTML = `
		<div class='time'>
			<div class='hours'>${hours}<span>Hours</span></div>
			<div class='hours'>${minutes}<span>Minutes</span></div>
			<div class='hours'>${seconds}<span>Seconds</span></div>
		</div>
	`

}
time()
setInterval(() => {
	time();
}, 1000);

  