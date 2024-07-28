const counter = document.querySelector(".counter-number");

async function updateCounter() {
  try {
    let response = await fetch("https://brn5mbllmnthhweoexudmlmzfy0pryts.lambda-url.us-west-2.on.aws/");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    console.log(data); // Log the data to check its structure
    if (data.views !== undefined) {
      counter.innerHTML = ` Website Views: ${data.views}`;
    } else {
      counter.innerHTML = ` Website Views: Data not available`;
    }
  } catch (error) {
    console.error("Error fetching the data: ", error);
    counter.innerHTML = ` Website Views: Error fetching data`;
  }
}

updateCounter();