"use strict";

(function () {
    class NewsApi {
        constructor(sourceApi, keyApi, containerApi) {
            this.sourceApi = sourceApi;
            this.keyApi = keyApi;
            this.containerApi = containerApi;
        }

        createApiRequest(source, key) {
            return new Request(`https://newsapi.org/v1/articles?source=${source}&apiKey=${key}`);
        }

        getNewsList() {
            let that = this;

            fetch(this.createApiRequest(this.sourceApi, this.keyApi))
                .then(response => {
                    return response.json();
                })
                .then(response => {
                    that.parseNewsList(response, that.containerApi);
                })
                .catch(error => {
                    console.error(error);
                });
        }

        parseNewsList(response, container, list = "") {
            response["articles"].forEach(item => {
                list +=
                    `<article>
                        <h1>${item.title}</h1>
                        <p><img src="${item.urlToImage}"></p>
                        <p>${item.description}<br><a href="${item.url}">read more</a></p>
                    </article>`;
            });

            document.querySelector(container).innerHTML = list;
        }
    }

    let newsApi = new NewsApi("bbc-news", "2a1d89a4b5bf4e9d93d289b1f88ff16c", "main");
    newsApi.getNewsList();
}());
