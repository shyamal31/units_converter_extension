// add an invisible modal element to the top of the page
let unitModal = document.createElement('div');
unitModal.setAttribute('class', 'modal');
unitModal.style.visibility = 'hidden';
document.body.appendChild(unitModal);

// This function checks selected text (if any) when the mouse button is released and checks if  we can convert it into units
document.addEventListener('mouseup', (e) => {
    let selection = window.getSelection().toString().trim();
    const MAX_LENGTH = 30;

    //selected text is should be between lengths 0 - max_length
    if (selection.length > 0 && selection.length < MAX_LENGTH) {

        // Get all possible unit conversions for given selections
        (async () => {
            let result = await get_conversions(selection);
            // Provided data
           // var data = "0.03809997943 m,0.00002367929113 mi,0.00003809997943 km,3.809997943 cm,38.09997943 mm,0.04166651850 yd,0.1249999365 ft,0.0001895521364 fur,0.001893919542 chain";

            // Split the data into an array based on the comma
            var dataArray = result.result.split(',');

            // Initialize two arrays for data greater and less than 10^-3
            var greaterThan10Minus3 = [];
            var lessThan10Minus3 = [];

            // Traverse the data and segregate it
            for (var i = 0; i < dataArray.length; i++) {
                var value = parseFloat(dataArray[i].split(' ')[0]); // Parse the numeric value
                var unit = dataArray[i].split(' ')[1]; // Extract the unit

                if (value > 0.001 && value < 1000) {
                    // Data greater than 10^-3 and less than 10^3
                    greaterThan10Minus3.push(value + ' ' + unit);
                } else {
                    // Data outside the specified range
                    lessThan10Minus3.push(value + ' ' + unit);
                }
            }

            // Output the segregated data
            console.log("Data greater than 10^-3 and less than 10^3:");
            console.log(greaterThan10Minus3);

            console.log("Data outside the specified range:");
            console.log(lessThan10Minus3);
            //console.log("Result from content script:- ",result);
            
            // Assuming you have the data segregation code from the previous response

            // Create a function to update the modal content
            function updateModalContent() {
                // Combine the content for the "View All" button
                var content = greaterThan10Minus3;

                // Create the content for the "View All" button
                var viewAllButton = "<button id=\"viewAllButton\">View All</button>";

                // Add the "View All" button if applicable
                if (lessThan10Minus3.length > 0) {
                    content.push(viewAllButton);
                }

                // Display the modal
                var resultContent = "<p class=\"modal_heading\">" + selection + "</p>" +
                    "<p class=\"modal_content\">" + content.join("<hr class=\"modal_newline\">") + "</p>";
                showModal(e.clientX, e.clientY, resultContent);

                // Add an event listener to the "View All" button
                var viewAllButtonElement = document.getElementById("viewAllButton");
                if (viewAllButtonElement) {
                    viewAllButtonElement.addEventListener("click", function() {
                        // Append the content from the lessThan10Minus3 array
                        var contentForLess = lessThan10Minus3.join("<hr class=\"modal_newline\">");
                        var extendedContent = "<p class=\"modal_heading\">" + selection + "</p>" +
                            "<p class=\"modal_content\">" + greaterThan10Minus3.join("<hr class=\"modal_newline\">") +
                            "<hr class=\"modal_newline\">" + contentForLess + "</p>";
                        showModal(e.clientX, e.clientY, extendedContent);
                    });
                }
            }

            // Initial display
            updateModalContent();

            // if (result.result.length > 0) {
            //     // Once the result is obtained, give the modal a heading as the trimmed selection and add each comma seperated results to new line
            //     result.result = "<p class=\"modal_heading\">" + selection + "</p>" +
            //         "<p class=\"modal_content\">" +
            //         result.result.replace(/,/g, "<hr class=\"modal_newline\">") + "</p>";
            //     // Display  the modal
            //     showModal(e.clientX, e.clientY, result.result);
            // }
        })();
    }

}, false);

// This function hides the modal when the mouse button is pressed
document.addEventListener('mousedown', (e) => {
    unitModal.style.visibility = 'hidden';
}, false);
/**
 * Display the modal at the cursor location and make it visible
 * @param {Object} mouseX 
 * @param {Object} mouseY 
 * @param {Object} html 
 */
// Display the modal at the cursor location and make it visible
function showModal(mouseX, mouseY, html) {
    unitModal.innerHTML = html;
    unitModal.style.top = document.documentElement.scrollTop + mouseY + 'px';
    unitModal.style.left = mouseX + 'px';
    unitModal.style.visibility = 'visible';
}