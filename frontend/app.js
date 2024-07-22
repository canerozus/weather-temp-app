document
  .getElementById("temperature-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const cityName = document.getElementById("city-name").value;
    const resultDiv = document.getElementById("result");

    try {
      const response = await fetch(
        `/temperature?q=${encodeURIComponent(cityName)}`,
        {
          method: "POST",
          body: JSON.stringify({ query: cityName }),
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
          },
        }
      );

      const data = await response.json();

      if (data.Status === "success") {
        resultDiv.innerHTML = `
              <h2>${data.Response.Name}</h2>
              <p>Temperature: ${data.Response.Temperature} ${data.Response.Unit}</p>
          `;
      } else {
        resultDiv.innerHTML = `<p>City not found.</p>`;
      }
    } catch (error) {
      console.error("Error:", error);
      resultDiv.innerHTML = `<p>Something went wrong. Please try again.</p>`;
    }
  });
