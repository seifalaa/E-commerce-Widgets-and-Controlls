function createGrid() {
    var rows = document.getElementById("numRows").value;
    var cols = document.getElementById("numCols").value;
    var gridSize = rows * cols;
    var picLinks = $("#picLinks").val().split("\n");
    var listData = $("#listsData").val().split("\n");

    var container = document.createElement("div");
    container.className = "container-fluid bounceInUp";

    var heading = document.createElement("h1");
    heading.className = "alves flash";

    var headingText = document.createTextNode("TOP BRANDS OF THE WEEK");

    heading.appendChild(headingText);
    container.appendChild(heading);

    for (var i = 0; i < rows; i++) {


        var row = document.createElement("div");
        row.className = "row m-0 p-0 bounceInUp";



        var counter = 1;
        for (var j = 0; j < cols; j++) {


            var col = document.createElement("div");
            col.className = "col-lg-" + 12 / cols + " col-md-" + 12 / cols + " col-sm-" + 12 / cols + " col-" + 12 / cols + "  m-0";
            col.id = "One";

            var innerRow = document.createElement("div");
            innerRow.className = "row m-0 p-0";
            innerRow.id = "cell";

            var imgCol = document.createElement("div");
            imgCol.className = "col-lg-5 col-md-12 col-sm-12 col-12  m-0 d-flex justify-content-center";

            var img = document.createElement("img");
            img.className = "img-fluid";
            img.src = picLinks[j];

            var listCol = document.createElement("div");
            listCol.className = "col-lg-7 col-md-12 col-sm-12 col-12  m-0";

            var listHeading = document.createElement("h6");

            var listHeadingText = document.createTextNode(listData[j * 6]);

            var list = document.createElement("ul");
            list.className = "list-group";

            for (var k = 0; k < 5; k++) {

                var listItem = document.createElement("li");
                listItem.className = "list-group-item";
                var itemText = document.createTextNode(listData[counter]);
                listItem.appendChild(itemText);
                counter++;
                list.appendChild(listItem);
            }

            counter++;

            listHeading.appendChild(listHeadingText);


            listCol.appendChild(listHeading);
            listCol.appendChild(list);


            imgCol.appendChild(img);
            innerRow.appendChild(imgCol);
            innerRow.appendChild(listCol);

            col.appendChild(innerRow);

            row.appendChild(col);

        }

        container.appendChild(row);

        var parent = document.getElementById("con");
        parent.parentNode.removeChild(parent);

        document.body.appendChild(container);


    }

}