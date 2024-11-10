// Function when button get clicked
function click()
{
    // Get values
    var actual_dpi = document.getElementById("ac_dpi");
    var actual_sensi = document.getElementById("ac_sensi");
    var new_dpi = document.getElementById("new_dpi");

    // Get result paragraph to edit later
    var result_p = document.getElementById("output");

    // Create result variable
    var result = 0;

    // Exit if any value arent filled
    if (actual_dpi.value === "" || actual_sensi.value === "" || new_dpi.value === "")
    {
        return window.alert("You need to fill all inputs");
    }

    // Generate result
    result = (Number(actual_dpi.value) / Number(new_dpi.value)) * Number(actual_sensi.value);

    // Show the result for the user and exit
    return result_p.innerHTML = `Your new game sensitivity is going to be <strong>${String(result)}</strong>.`;
}

// Execute function when button get clicked
document.getElementById("btn").addEventListener("click", click);