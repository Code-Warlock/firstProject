// $(document).ready(function() {
//     $("#signin").click(function() {
//         if ($("#dessy3").html == ""){
//             alert("One or more fields is empty")
//         }else{
//             alert("Welcome")
//         }
//     })
// })
document.getElementById("signin").onclick = function() {
    if(document.getElementById("dessy3").value == "") {
        alert("Hello ")
    }
}