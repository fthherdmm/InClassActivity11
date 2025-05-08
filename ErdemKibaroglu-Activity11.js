$(document).ready(function () {
    $("#nav_list a").on("click", function (e) {
        e.preventDefault();

        const fileName = $(this).attr("title") + ".json";
        const filePath = "json_files/" + fileName;

        console.log("Loading JSON:", filePath);

        $.getJSON(filePath)
            .done(function (data) {
                $("main").empty();

                const speakerData = data.speakers[0];
                const newContent = `
                    <h1>${speakerData.title}</h1>
                    <img src="${speakerData.image}" alt="${speakerData.speaker}">
                    <h2>${speakerData.month}<br>${speakerData.speaker}</h2>
                    <p>${speakerData.text}</p>
                `;

                $("main").html(newContent);
            })
            .fail(function () {
                console.error("JSON cannot be loaded:", filePath);
                $("main").html("<p>Speaker information cannot be loaded.</p>");
            });
    });
});
