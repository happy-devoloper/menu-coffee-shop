function showDrink(drink) {
    const eat = document.querySelector('.menu .menu-type div:first-child');
    const menuDrinkList = document.querySelectorAll('.menu-drink-list')[0];
    const menuEatList = document.querySelectorAll('.menu-eat-list')[0];
    
    eat.style.backgroundColor = "#fffdf8";
    eat.style.color = "#000";

    drink.style.backgroundColor = "#616161";
    drink.style.color = "#fff";

    menuDrinkList.style.display = "block";
    menuEatList.style.display = "none";
}

function showEat(eat) {
    const drink = document.querySelector('.menu .menu-type div:last-child');
    const menuDrinkList = document.querySelectorAll('.menu-drink-list')[0];
    const menuEatList = document.querySelectorAll('.menu-eat-list')[0];

    drink.style.backgroundColor = "#fffdf8";
    drink.style.color = "#000";

    eat.style.backgroundColor = "#616161";
    eat.style.color = "#fff";

    menuDrinkList.style.display = "none";
    menuEatList.style.display = "block";
}