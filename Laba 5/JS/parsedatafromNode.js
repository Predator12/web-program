$.ajax({
    url: 'http://localhost:8080/api/posts',
    type: "get",
    dataType: "json",

    success: function(data) {
        drawNewPost(data);
        console.log(data);
    }
});

function drawNewPost(data) {
    for (var i = 0; i < data.length; i++) {
        PostDetails(data[i]);
        console.log(data[i]);
    }
}

function PostDetails(rowData) {
    var row = $("<li class=\"list-group-item\">\n" +
        "    <article class=\"element\">\n" +
        "        <figure><img src=\"images/sud_0.jpg\" alt=\"\">\n" +
        "            <figcaption><a href=\"#\"><i class=\"fa fa-eye\"></i></a></figcaption>\n" +
        "        </figure>\n" +
        "        <div class=\"excerpt\">\n" +
        "            <h6 class=\"heading\"></h6>\n" +
        "            <p class=\"longdescription\"></p>\n" +
        "            <p class=\"shortdescription\"></p>\n" +
        "        </div>\n" +
        "    </article>\n" +
        "</li></br>")
    $(".wrapper").append(row);
    row.append($("<h6>" + rowData.longdescription + "</h6>"));
    row.append($("<p>" + rowData.namearticle + "</p>"));
    row.append($("<p>" + rowData.shortdescription + "</p>"));

}
