function dropDown() {
    document.getElementById("Menu").classList.toggle("show");
    document.getElementById("ddmI").classList.toggle("change");
}

function change_map_floor(id) {
    switch (id) {
        case "floor_0":
            document.getElementById("map").style.backgroundImage = "url('imgs/map/0.svg')";
            break;
        case "floor_1":
            document.getElementById("map").style.backgroundImage = "url('imgs/map/1.svg')";
            break;
        case "floor_2":
            document.getElementById("map").style.backgroundImage = "url('imgs/map/2.svg')";
            break;
        case "floor_3":
            document.getElementById("map").style.backgroundImage = "url('imgs/map/3.svg')";
            break;
        case "floor_4":
            document.getElementById("map").style.backgroundImage = "url('imgs/map/4.svg')";
            break;
    }
}