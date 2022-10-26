$(() =>{
    $("#questionForm").submit(()=>{
        const data = {
            inputText: $("#inputText").val(),
        };

        $.get({ 
            url : '/8ball',
            data : JSON.stringify(data),
            contentyType : "application/json; charset=utf-8"
        }).done(resp =>{
            $("#inputText").val(response);
        })
          .fail(err =>{
            console.log("Error while reading from the server "+err);
          });
        return false;
    });

    $("#inputText").keypress(() => {
        $.get({ 
            url : '/8ball',
            data : JSON.stringify(data),
            contentyType : "application/json; charset=utf-8"
        }).done(resp =>{
            $("#inputText").val(response);
        })
          .fail(err =>{
            console.log("Error while reading from the server "+err);
          });
        return false;
    });
    $("#inputText").focus(() => {
        this.select();
        $.get({ 
            url : '/8ball',
            data : JSON.stringify(data),
            contentyType : "application/json; charset=utf-8"
        }).done(resp =>{
            $("#inputText").val(response);
        })
          .fail(err =>{
            console.log("Error while reading from the server "+err);
          });
        return false;
    });
});