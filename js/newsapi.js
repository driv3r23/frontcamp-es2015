"use strict";

(function () {
    let request = new Request('https://newsapi.org/v1/articles?source=bbc-news&apiKey=2a1d89a4b5bf4e9d93d289b1f88ff16c');

    fetch(request)
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            var newsList = "";

            response["articles"].forEach(function (item) {
                newsList +=
                    `<article>
                        <h1>${item.title}</h1>
                        <p><img src="${item.urlToImage}"></p>
                        <p>${item.description}<br><a href="${item.url}">read more</a></p>
                    </article>`;
            });

            newsList += `<p>powered by <a href="https://newsapi.org/">https://newsapi.org/</a></p>`;

            document.querySelector("body").innerHTML = newsList;
        }).catch(function(error) {
            console.error(error);
    });
}());
