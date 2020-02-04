$(document).ready(function () {
    $("#container").hide();
    $("#btn2").hide();
    $("#btn3").hide();
    $(".form-group.t1").hide();
    $("#btn1").click(function () {


        gridSize = $("#numRows").val() * $("#numCols").val();

        if (gridSize != 0) {
            var label = document.createElement("label");
            var text = document.createTextNode("Enter products thumbnails links: ");
            label.append(text);
            $("#container").prepend(label);
            for (var i = 0; i < gridSize; i++) {
                var formGroup = document.createElement("div");
                formGroup.className = "form-group txtField";
                var field = document.createElement("input");
                field.className = "form-control txtField";
                field.placeholder = "Enter link";
                field.setAttribute("required", "required");

                formGroup.append(field);
                $("#container").append(formGroup);

                var col = document.createElement("div");
                col.className = "col-" + 12 / gridSize + "px-2";
                var field2 = document.createElement("textarea");
                field2.className = "form-control txtArea";
                field2.placeholder = "Enter Items";
                field2.setAttribute("required", "required");
                formGroup = document.createElement("div");
                formGroup.className = "form-group px-2";
                formGroup.append(field2);
                col.append(formGroup);
                $("#row1").append(col);
            }
            $("#container").show();



            $("#btn2").show();
            $(".form-group.t1").show();
        }


    });
    $("#form3").submit(function () {

        var cols = $("#numCols").val();
        var rows = $("#numRows").val();
        gridSize = $("#numRows").val() * $("#numCols").val();
        var links = $(".form-control.txtField");

        var items = $(".form-control.txtArea");
        var itemsVal = [];
        for (var i = 0; i < items.length; i++) {
            itemsVal[i] = $(items[i]).val().split("\n");
        }
        var container = document.createElement("div");
        container.className = "container-fluid bounceInUp";

        var heading = document.createElement("h1");
        heading.className = "alves flash";

        var headingText = document.createTextNode("TOP BRANDS OF THE WEEK");

        heading.append(headingText);
        container.append(heading);

        var linkCounter = 0;
        var itemsCounter = 0;
        var itemsCounter1 = 0;
        for (var i = 0; i < rows; i++) {
            var row = document.createElement("div");
            row.className = "row m-0 p-0 bounceInUp";

            for (var j = 0; j < cols; j++) {

                var col = document.createElement("div");
                col.className = "col-lg-" + 12 / cols + " col-md-" + 12 / cols + " col-sm-" + 12 / cols + " col-" + 12 / cols + "  m-0";


                var innerRow = document.createElement("div");
                innerRow.className = "row m-0 p-0";
                innerRow.id = "cell";

                var imgCol = document.createElement("div");
                imgCol.className = "col-lg-5 col-md-12 col-sm-12 col-12  m-0 d-flex justify-content-center";

                var img = document.createElement("img");
                img.className = "img-fluid";

                img.src = $(links[linkCounter++]).val();

                var listCol = document.createElement("div");
                listCol.className = "col-lg-7 col-md-12 col-sm-12 col-12  m-0";

                var listHeading = document.createElement("h6");

                var listHeadingText = document.createTextNode(itemsVal[itemsCounter++][0]);


                var list = document.createElement("ul");
                list.className = "list-group";

                for (var k = 1; k < itemsVal[itemsCounter1].length; k++) {


                    var listItem = document.createElement("li");
                    listItem.className = "list-group-item";
                    var itemText = document.createTextNode(itemsVal[itemsCounter1][k]);
                    listItem.append(itemText);
                    list.append(listItem);
                }
                itemsCounter1++;
                listHeading.append(listHeadingText);


                listCol.append(listHeading);
                listCol.append(list);

                imgCol.append(img);
                innerRow.append(imgCol);
                innerRow.append(listCol);
                col.append(innerRow);

                row.append(col);

            }

            container.append(row);


            $("#con").empty();
            $("#con").append(container);

        }
    });
});