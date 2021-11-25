{
    
    const get_visitors_by_day = (day) => {
        console.log(day);
    };


    const innnit = () => {
        console.log("Script loaded");

        const $day_select = document.querySelector(".js-select");
        const $graph = document.querySelector(".js-graph");

        $day_select.addEventListener("click", () => get_visitors_by_day($day_select.value));
    };

    innnit();
}