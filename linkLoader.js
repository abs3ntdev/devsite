document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("config.json");
    const data = await response.json();

    const linkList = document.getElementById("link-list");
    const fragment = document.createDocumentFragment();

    data.links.forEach((link) => {
      const listItem = document.createElement("li");
      const anchor = document.createElement("a");
      anchor.href = link.url;
      anchor.textContent = link.name;
      anchor.target = "_blank";
      listItem.appendChild(anchor);
      fragment.appendChild(listItem);
    });

    linkList.appendChild(fragment);
  } catch (error) {
    console.error("Error loading config.json:", error);
  }
});

