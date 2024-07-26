const counter = document.querySelector(".counter-number");
async function updateCounter(){
	let response = await fetch("https://vplzutgvz4a3p4cmuqqhp7lfty0sjtlx.lambda-url.us-east-1.on.aws/");
	let data = await response.json();
	counter.innerHTML = ' Website Views: ${data}';
}

updateCounter();