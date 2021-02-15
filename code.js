$(document).ready(
    function () {
        $("#submit_details").click(submitDetails);
        $("#submit_address").click(submitAddress);

        function submitDetails(event) {
            event.preventDefault();
            //This just hides the pizza box and shows the delivery box.
            $("#pizza_details").hide();
            $("#pizza_delivery").show();
        }

        function submitAddress(event) {
            event.preventDefault();

            var ingredients = 0;
            var checkedBoxes= $("input[name=toppings]:checked");

            checkedBoxes.each(function() {
                ingredients += $(this).data("price");
            });

            var meats = 0;
            var checkedBoxes= $("input[name=meats]:checked");

            checkedBoxes.each(function() {
                meats += $(this).data("price");
            });

            //Declaring Jquery Variables
            var pizzaSize = $("input[name=size]:checked").val();
            var pizzaCrust = $("input[name=crust]:checked").val();
            var meatBoxes = [];
            $("input[name=meats]:checked").each(function() {
                meatBoxes.push($(this).val());
            });

            // total price of meats selected
            //sum for $1.50 each
            var meatTotal = $("input[name=meats]:checked").length;
            meatTotal += 1.50;

            var veggieBoxes= [];
            $("input[name=toppings]:checked").each(function() {
                veggieBoxes.push($(this).val());
            });

            //collect total price of selected veggies
            var veggieTotal = $("input[name=toppings]:checked").length;
            veggieTotal *= 1;

            //Prices
            var selectedRadioButton = $("input[name=size]:checked");
            var size = selectedRadioButton.data("price");
            var delivery = 2;
            var subtotal = ingredients+size+meats;
            var tax = subtotal * .051;
            var total = subtotal + tax + delivery;

            //Customer info
            var name = $("#delivery_1").val();
            var address = $("#delivery_2").val();
            var phone = $("#delivery_3").val();

            $("#pizza_delivery").hide();
            $("#order_details").show();

            // pizza details
            $("#selected_size").text(`Pizza Size: ${pizzaSize}`);
            $("#selected_crust").text(`Crust Type: ${pizzaCrust}`);
            $("#selected_meats").text(`Meats: ${meatBoxes}`);
            $("#selected_veggies").text(`Veggies: ${veggieBoxes}`);

            //show prices
            $("#subtotal").text("Subtotal: $"+subtotal.toFixed(2));
            $("#calculated_tax").text("Tax: $"+tax.toFixed(2));
            $("#delivery_fee").text("Delivery: $"+delivery.toFixed(2));
            $("#total").text("Total: $"+total.toFixed(2));

            //show address
            $("#customer_name").text(name);
            $("#customer_address").text(address);
            $("#customer_phone").text(phone);
        }
    });
