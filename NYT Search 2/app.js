//1) listen for "search" button ("#searchBtn").on("click")
$("#searchBtn").on("click", function(){
    var searchTerm =  $("#searchTerm").val();
    var numberRecords = $("#recordNumber").val();
    
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=f0JXJ2shj6pvsrEXkQ1uqciz8eoO9Mmv"
     
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        var newsArticles = response.response.docs;
        console.log(newsArticles[0].headline.main);
        $(".placeholder").append(newsArticles[0].headline.main);



    });

});

//2) grab values from form (i.e. .val())
//3) build your queryURL w/values
//4) call ajax function
//5) console.log your response
//6) write your response from data to div

