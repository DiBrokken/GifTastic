var topics = ['sport', 'travel', 'humor', 'baby animals', 'fails'];


//  Take the topics in this array and create buttons in your HTML.
//  -try using a loop that appends a button for each string in the array.

    for (var i in topics){
        var button = $('<button>').text(topics[i]);

        $('#buttons').append(button);
    }

// 3. When the user clicks on a button, the page should grab 10 static, 
//    non-animated gif images from the GIPHY API and place them on the page.

    $('button').on('click', function(){
        var divButtons = $(this).text();
        //this clears the page from the previously loaded pictures
        $("#pics").empty();

        var reqURL = "https://api.giphy.com/v1/gifs/search?api_key=em5r8LyhAJkRwqS4fnAWKOp5T2WxNR4v&q=" + divButtons + "&limit=10&offset=0&rating=G&lang=en"
        $.ajax({url: reqURL})
        .then(function(response){
    
        
        for (var i in response.data){
        var still = response.data[i].images.original_still.url;
        var animated = response.data[i].images.original.url;
        var rating = response.data[i].rating;
        var par = $('<p>').text(rating);
        
        
        var gif = $('<img>');        
        gif.attr('src', still);
        gif.attr('data-still', still);
        gif.attr('data-animate', animated);
        gif.attr('data-state', "still");
        gif.addClass('animal-image');
        
        $('#pics').append(gif);
        $('#rating').append(par);
        
         // this function unpauses the gifs and animates them by clicking on them. 

        $('img').on('click', function(){
            var dataState = $(this).attr('data-state');

            if (dataState == "still"){                
                $(this).attr('src', $(this).attr('data-animate'));
            }else{
                $(this).attr('src', $(this).attr('data-still'));
            }
        //**function not working properly.  gifs do not pause when clicking again**

        });
    };
    
    });
