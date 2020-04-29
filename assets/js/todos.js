//console.log("Test")
//console.log(jQuery)

//[[[[[[[[[[[[[[[[[[[[[[[[[[[[Todo App]]]]]]]]]]]]]]]]]]]]]]]]]]]]


//StrickTrogh the li
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed")
});

//Remove Li 
$("ul").on("click", ".deletIcon", function (event) {
    $(this).parent().slideUp(300, function () {
        $(this).remove() //here this refers to .parent
    })
    event.stopPropagation(); //this stops the event bubbling
});

$("input[type=text]").on("keypress", function (event) {
    if (event.which === 13) {
        var userInput = $(this).val()
        $(this).val("")
        var spansForTodo = "<span class=\"deletIcon\"><i class=\"fas fa-trash-alt\"></i></span>"
        $("ul").append("<li>" + spansForTodo + userInput + "</li>")
    }
});

$("#addTodoIcon").on("click", ".addTodo", function(){
    $("input").slideToggle();
});