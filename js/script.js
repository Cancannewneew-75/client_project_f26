document.querySelector("#year").textContent = new Date().getFullYear();

const checklistItems = document.querySelectorAll(".checklist-item");
const checklistStatus = document.querySelector("#checklist-status");

function updateChecklist() {
    const completedItems =
        document.querySelectorAll(".checklist-item:checked").length;

    checklistStatus.textContent =
        completedItems + " of " + checklistItems.length + " tasks completed";
}

if (checklistStatus) {
    checklistItems.forEach(function(item) {
        item.addEventListener("change", updateChecklist);
    });

    updateChecklist();
}