// Get tracking number from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const trackingNumber = urlParams.get("trackingid");

if (!trackingNumber) {
  document.getElementById("timeline").innerHTML =
    '<p style="color: red;">No tracking number provided. Please add ?trackingid=xxx to the URL.</p>';
  throw new Error("No tracking number provided");
}

// Call Eagle1 whereis API
fetch(`https://api.eg1.io/v0/whereis/${trackingNumber}`, {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer eagle1",
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    if (!data) {
      throw new Error("No data returned from API");
    }
    renderTrackingData(data);
  })
  .catch((error) => {
    console.error("Error loading JSON data:", error);
    const errorMessage = "Error loading tracking data: " + error.message;

    document.getElementById("timeline").innerHTML =
      `<p style="color: red;">${errorMessage}</p>`;
  });

// Function to render tracking data
function renderTrackingData(data) {
  // Get the latest event and status
  const latestEvent = data.events[data.events.length - 1];
  const latestStatus = latestEvent.what;
  document.getElementById("status").textContent = latestStatus;

  // Display header info
  document.getElementById("tracking-num").textContent = data.entity.id;

  // Only show origin if it exists
  const originElement = document.getElementById("origin-container");
  if (data.entity.additional?.origin) {
    originElement.style.display = "block";
    document.getElementById("origin").textContent =
      data.entity.additional.origin;
  } else {
    originElement.style.display = "none";
  }

  // Only show destination if it exists
  const destinationElement = document.getElementById("destination-container");
  if (data.entity.additional?.destination) {
    destinationElement.style.display = "block";
    document.getElementById("destination").textContent =
      data.entity.additional.destination;
  } else {
    destinationElement.style.display = "none";
  }

  // Check if last event has an exception
  if (latestEvent.additional?.exceptionCode) {
    const exceptionBlock = document.createElement("div");
    exceptionBlock.className = "mb-12 p-4 bg-red-50 text-sm";
    exceptionBlock.innerHTML = `
            <div class="text-red-600 uppercase mb-2">${latestEvent.additional.exceptionDesc}</div>
            <div class="text-red-600">${latestEvent.notes}</div>
        `;

    // Insert exception block after the header section and before the timeline
    const timelineElement = document.getElementById("timeline");
    timelineElement.parentNode.insertBefore(exceptionBlock, timelineElement);
  }

  // Display events in reverse chronological order
  const timeline = document.getElementById("timeline");
  data.events.forEach((event, index) => {
    const eventDiv = document.createElement("div");
    eventDiv.className = "relative pl-8 pb-12";

    // Add dot marker
    const dot = document.createElement("div");
    dot.className =
      "absolute left-0 top-2 w-1.5 h-1.5 -translate-x-1/2 rounded-full bg-black";
    eventDiv.appendChild(dot);

    const date = new Date(event.when).toLocaleString();
    // const notes = event.notes ? `<div class="text-sm text-black/60 mt-2 italic">${event.notes}</div>` : '';
    const notes = event.notes
      ? `<div class="text-sm ${event.additional?.exceptionCode ? "text-red-600" : "text-black/60"} mt-2 italic">${event.notes}</div>`
      : "";

    eventDiv.innerHTML += `
            <div class="text-xs text-black/60">${date}</div>
            <div class="mt-1">${event.where}</div>
            <div class="mt-1">${event.what}</div>
            ${notes}
        `;

    timeline.appendChild(eventDiv);
  });
}
