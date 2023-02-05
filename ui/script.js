$(document).ready(function () {
    window.addEventListener("message", function (event) {
        if (event.data.action === true) {
            $("#container").show();
            let inputCount = event.data.count;
            let titleInput = event.data.title;
            let form = document.getElementById("form");
            let title = document.getElementById("title");
            let inputs = form.getElementsByTagName("input");
            let placeholders = event.data.placeholders
            form.style.display = "grid";
            title.textContent = titleInput;
            for (let i = 0; i < inputCount; i++) {
                if(inputs[i] != undefined){
                    inputs[i].style.display = "block";
                    inputs[i].value = "";
                    inputs[i].placeholder = placeholders[i];
                }
            }

            $("#submit").click(function () {
                let form = document.getElementById("form");
                let inputElements = form.getElementsByTagName("input");
                let inputValues = [];
        
                for (let i = 0; i < inputCount; i++) {
                    if (!inputElements[i].value) {
                        $.post('http://yurima-dialog/alert', JSON.stringify());
                        return;
                    }
                    inputValues.push(inputElements[i].value);
                }
                for (let i = 0; i < inputs.length; i++) {
                    inputs[i].style.display = "none";
                }
                form.style.display = "none";
                $.post('http://yurima-dialog/result', JSON.stringify(inputValues));
                return;
            })

            document.addEventListener("keydown", function(event) {
                if (event.key === "Escape") {
                    for (let i = 0; i < inputs.length; i++) {
                        inputs[i].style.display = "none";
                    }
                    form.style.display = "none";
                    $.post('http://yurima-dialog/closemenu', JSON.stringify({}));
                    return
                }
            });
        
            $("#cancel").click(function () {
                for (let i = 0; i < inputs.length; i++) {
                    inputs[i].style.display = "none";
                }
                form.style.display = "none";
                $.post('http://yurima-dialog/closemenu', JSON.stringify({}));
                return
            })     
        } 
    }) 
});