var containers = document.querySelectorAll(".container");
for (var i = 0; i < containers.length; i++) {
    containers[i].addEventListener("click", function (event) {
        for (var e = 0; e < containers.length; e++) {
            containers[e].classList.remove("selected");
            if (event.target !== null && event.target instanceof HTMLElement) {
                event.target.classList.add("selected");
            }
            else {
                console.log("event.target is null");
            }
            ;
        }
        ;
    });
}
;
