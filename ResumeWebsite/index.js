const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        let response = await fetch("https://brn5mbllmnthhweoexudmlmzfy0pryts.lambda-url.us-west-2.on.aws/");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        console.log("Fetched data:", data); // Log the entire data object

        // Corrected line with backticks for template literals
        counter.innerHTML = `Website Views: ${data.views}`;
    } catch (error) {
        console.error("Error fetching the data: ", error);
        counter.innerHTML = `Website Views: Error fetching data`;
    }
}

updateCounter();