document.addEventListener("DOMContentLoaded", () => {
    const hotels = document.querySelectorAll(".container .card");

    document.querySelectorAll("input[type='checkbox'] ").forEach((checkbox) => {
        checkbox.addEventListener("change", applyFilters);
    });

    function applyFilters() {
        let selectedPrices = getCheckedValues(".filter-price");


        hotels.forEach((hotel) => {
            let hotelPrice = parseInt(hotel.querySelector(".rent").textContent.replace("$", "").trim());


            let priceMatch = selectedPrices.length === 0 || selectedPrices.some(range => {
                let [min, max] = range.split("-").map(Number);
                return hotelPrice >= min && hotelPrice <= max;
            });



            if (priceMatch) {
                hotel.closest(".col-12.mb-4").style.display = "block";
            } else {
                hotel.closest(".col-12.mb-4").style.display = "none";
            }
        });
    }

    function getCheckedValues(selector) {
        return Array.from(document.querySelectorAll(selector + ":checked")).map(checkbox => checkbox.value);
    }



    // mobile filter


    const budgetSelect = document.getElementById("budget");

    budgetSelect.addEventListener("change", applyFilter);

    function applyFilter() {
        let selectedRange = budgetSelect.value;

        hotels.forEach(hotel => {
            let hotelPrice = parseInt(hotel.querySelector(".rent").textContent.replace("$", "").trim());

            if (selectedRange === "all") {
                hotel.closest(".col-12.mb-4").style.display = "block";
                return;
            }

            let [min, max] = selectedRange.split("-").map(Number);
            if (hotelPrice >= min && hotelPrice <= max) {
                hotel.closest(".col-12.mb-4").style.display = "block";
            } else {
                hotel.closest(".col-12.mb-4").style.display = "none";
            }
        });
    }




    // name search

    let search_name = document.querySelectorAll(".search_here")


    search_name.forEach(search => {

        search.addEventListener('input', () => {
            let match = search.value.toLowerCase().trim();

            hotels.forEach(hotel => {


                let place_name = hotel.querySelector("h4").textContent.toLowerCase().trim();



                if (place_name.includes(match) || place_name === "") {
                    hotel.closest(".col-12.mb-4").style.display = "block";

                } else {
                    hotel.closest(".col-12.mb-4").style.display = "none";
                }

            })

        })

    })


    


});




    let search_name = document.querySelector(".search_here");
    let hotels = document.querySelectorAll(".col-12.mb-4"); // Ensure this targets correct hotel cards

    search_name.addEventListener("input", () => {
        let match = search_name.value.toLowerCase().trim();

        hotels.forEach(hotel => {
            let place_name = hotel.querySelector("h4")?.textContent.toLowerCase().trim();

            if (match === "") {
                hotel.style.display = "block"; // Show all when input is empty
            } else if (place_name.includes(match)) {
                hotel.style.display = "block"; // Show matching hotels
            } else {
                hotel.style.display = "none"; // Hide non-matching hotels
            }
        });
    });



