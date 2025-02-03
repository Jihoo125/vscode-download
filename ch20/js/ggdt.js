document.addEventListener("DOMContentLoaded", function () {
    const container = document.createElement("div"); // Create a container for the tables
    const searchInput = document.getElementById("sea");
    document.body.appendChild(container);

    // Generate multiplication tables dynamically
    for (let i = 1; i <= 100; i++) {
        const table = document.createElement("table");
        table.classList.add("table");
        table.setAttribute("data-index", i); // Set data-index for searching

        const headerRow = document.createElement("tr");
        const headerCell = document.createElement("th");
        headerCell.textContent = `${i}단`;
        headerRow.appendChild(headerCell);
        table.appendChild(headerRow);

        for (let j = 1; j <= 100; j++) {
            const row = document.createElement("tr");
            const cell = document.createElement("td");
            cell.textContent = `${i} x ${j} = ${i * j}`;
            row.appendChild(cell);
            table.appendChild(row);
        }

        container.appendChild(table);
    }

    // Add search functionality
    searchInput.addEventListener("input", function () {
        const searchValue = searchInput.value.toLowerCase();
        const tables = document.querySelectorAll(".table");

        tables.forEach((table) => {
            const index = table.getAttribute("data-index");
            if (index.startsWith(searchValue) || searchValue === "") {
                table.style.display = ""; // Show the table
            } else {
                table.style.display = "none"; // Hide the table
            }
        });
    });
});
