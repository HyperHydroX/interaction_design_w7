{
    const get_api_data = (url) => fetch(url).then((r) => r.json());

    const draw_chart = (chart_data) => {
        const ctx = document.querySelector(".js-graph").getContext("2d");

        
        const data = {
        labels: ['Week1', 'Week2', 'Week3', 'Week4', 'Week5', 'Week6', 'Week7'],
            datasets: [{
                label: 'Visitors',
                data: chart_data,
                fill: false,
                fill: true,
                backgroundColor: "rgb(163, 160, 251, .2)",
                borderColor: '#a3a0fb',
                pointBackgroundColor: '#ffffff',
                tension: 0.3,
            }]
        };
        const chart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                scales: {
                    y: {

                    }
                },
                plugins: {
                    legend: {
                        position:'bottom',
                    }
                }
            }
        });

        chart.update();

        
    };

    const get_data = (api_data) => {
        const total_visitors = [];


        api_data.forEach(element => {
            console.log(element);
            total_visitors.push(element.aantalBezoekers);
        });

        console.log(total_visitors);
       
        draw_chart(total_visitors);

    };

    const get_visitors_by_day = async (day="maandag") => {
        console.log(day);

        const api_endpoint = `https://labomctstudenten.azurewebsites.net/api/visitors/${day}`;

        const data = await get_api_data(api_endpoint);
        console.log(data);

        get_data(data);
    };


    const innit = () => {
        console.log("Script loaded");
        get_visitors_by_day()
        const $day_select = document.querySelector(".js-select");
        

        $day_select.addEventListener("change", () => get_visitors_by_day($day_select.value));
    };

    innit();
}