var top_position = 25,
    left_position = 25;
var width = 300,
    heigth = 300;

function show_pattern() {
    var color_list = ["skyblue", "blanchedalmond", "salmon", "olivedrab", "navajowhite", "lightpink", "lightsteelblue", "cadetblue", "mediumaquamarine", "mediumslateblue", "mediumorchid", "lightblue","seagreen", "darkgrey","lemonchiffon"];
    while (width > 20) {
        var this_div = document.createElement("div");
        var random_color = Math.random() * color_list.length;
        random_color = Math.floor(random_color);

        this_div.style.top = top_position + "px";
        this_div.style.left = left_position + "px";
        this_div.style.width = width + "px";
        this_div.style.height = heigth + "px";
        this_div.style.background = color_list[random_color];
        this_div.style.borderColor = color_list[random_color];
        console.log("random_color: " + random_color);
        console.log("color_list: " + color_list)
        console.log("color_list.splice: " + color_list.splice(random_color,1));
        var the_body = document.getElementById("theBody");
        the_body.appendChild(this_div);

        top_position += 10;
        left_position += 10;
        width -= 20;
        heigth -= 20;

    }
}
