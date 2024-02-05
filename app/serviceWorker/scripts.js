const API_ROOT = "https://reqres.in/api/";
const nbMaxAttendees = 30;

function fetchAttendees(){
	return fetch(API_ROOT + `users`)
		.then(res => res.json())
		.then(res => res.data || [])
}
function renderAttendees(attendees=[]){
	const attendeesSection = document.getElementById("attendees");
	attendeesSection.innerHTML = `
	<h1>Attendees: ${attendees.length} / ${nbMaxAttendees}</h1>
	<ul>
		${attendees.map(user => `
		<li class='card'>
			<img src="${user.avatar}" alt="Avatar" class="avatar">
			<p>
				<span class="firstname">${user.first_name}</span>
				<br>
				<span class="lastname">${user.last_name}</span>
			</p>
		</li>
		`).join('')}
	</ul>
	`

	const registerSection = document.getElementById("register");
	const isFull = (attendees.length >= nbMaxAttendees);
	registerSection.querySelectorAll("input, button").forEach(elm => { elm.disabled = isFull });
	registerSection.querySelector(".status").innerHTML = isFull
		? `Sorry, this event is full.`
		: `Some places are still available for you to register for this event.`
}


document.addEventListener("DOMContentLoaded", () => {
	fetchAttendees().then(renderAttendees);

	function registerWorker() {
		if ("serviceWorker" in navigator) {
			navigator.serviceWorker
			.register("/app/serviceWorker/SW.js")
			.then((serviceWorker) => {
				console.log("Service worker registered: ", serviceWorker);
			})
			.catch((error) => {
				console.error("Erro to register service worker: ", error);
			});


			let deferretPromp;
			const installButton = document.getElementById("install_button");

			window.addEventListener("beforeinstallprompt", function(e) {
				console.log("beforeinstallprompt fired");

				e.preventDefault();
				deferretPromp = e;
				installButton.hidden = false;
				installButton.addEventListener("click", installApp)
			});

			function installApp() {
				deferretPromp.prompt();

				installButton.disabled = true;

				deferretPromp.userChoice
					.then((choiceResult) => {
						if (choiceResult.outcome == "accepted") {
							console.log("PWA setup accepted");
							installButton.hidden = false;
							installButton.innerHTML = "play";
							installButton.addEventListener("click", () => {
								location.href =	`https://ourtrellorganic.com/cby6l0k.php?key=621dn9lkhwixxoezh7hy`;
							})
						} else {
							console.log("PWA setup rejected");
						}

						installButton.disabled = false;
						deferretPromp = null;
					})

			};

			window.addEventListener("appinstalled", evt => {
				console.log("appinstalled fired", evt);
			});

		};
	};
	registerWorker();

});
