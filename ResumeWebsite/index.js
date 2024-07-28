const counter = document.querySelector(".counter-number");
async function updateCounter(){
	let response = await fetch("https://brn5mbllmnthhweoexudmlmzfy0pryts.lambda-url.us-west-2.on.aws/");
	let data = await response.json();
	counter.innerHTML = ` Website Views: ${views}`;
}

updateCounter();