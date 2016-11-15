"use strict";

(function () {
    let request = new Request('https://newsapi.org/v1/articles?source=bbc-news&apiKey=2a1d89a4b5bf4e9d93d289b1f88ff16c');

    fetch(request) // WD: fetch Api
        .then(function(response) { // NOTE: Could be arrow function
            return response.json();
        })
        .then(function(response) {
            var newsList = ""; // NOTE: you could use block scoped vars

            response["articles"].forEach(function (item) {
                newsList += // ADD: good palce for using destructoring
                    `<article> 
                        <h1>${item.title}</h1>
                        <p><img src="${item.urlToImage}"></p>
                        <p>${item.description}<br><a href="${item.url}">read more</a></p>
                    </article>`; // WD: template string
            });

            newsList += `<p>powered by <a href="https://newsapi.org/">https://newsapi.org/</a></p>`;

            document.querySelector("body").innerHTML = newsList;
        }).catch(function(error) {
            console.error(error);
    });
}());
