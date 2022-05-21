window.addEventListener("DOMContentLoaded", () => {
    handleNavigationMenu();
});

const handleNavigationMenu = () => {
    const navigationMenu = document.getElementById("navigation-menu");

    const closeNavigationMenu = document.getElementById("close-navigation-menu");
    const openNavigationMenu = document.getElementById("open-navigation-menu");

    closeNavigationMenu.addEventListener("click", () => {
        navigationMenu.style = "display: none";

        openNavigationMenu.style = "display: unset";
        openNavigationMenu.focus();
    });

    openNavigationMenu.addEventListener("click", () => {
        navigationMenu.style = "display: flex";

        closeNavigationMenu.focus();
        openNavigationMenu.style = "display: none";
    });
}