$(()=>{
    $("#btn").submit(() => {
        const data = {
            name: $("#item4").val(),
            quantity: $("#item8").val(),
            price: $("#item10").val(),
        };
        $.post({
            url:"/addToCart",
            data: JSON.stringify(data),
            contentType:"application/json; charset=utf-8",
        })
        .done(response => {
            $("#msg").val("Successful");
        })
        .fail(err => {
            $("#msg").val("Failure "+err);
        })
        return false;
    });
});