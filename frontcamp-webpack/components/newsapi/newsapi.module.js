"use strict";

import createNewsApiRequest from "./newsapi.functions";

export default class NewsApi {
    constructor(sourceApi, keyApi, containerApi) {
        this.sourceApi = sourceApi;
        this.keyApi = keyApi;
        this.containerApi = containerApi;
    }

    getNewsList() {
        fetch(createNewsApiRequest(this.sourceApi, this.keyApi))
            .then(response => {
                return response.json();
            })
            .then(response => {
                this.parseNewsList(response, this.containerApi);
            })
            .catch(error => {
                console.error(error);
            });
    }

    parseNewsList(response, container, list = "") {
        response["articles"].forEach(item => {
            list +=
                `<article>
                    <h2>${item.title}</h2>
                    <div>
                        <img src="${item.urlToImage}">
                        <p>${item.description}<br><a href="${item.url}">read more</a></p>
                    </div>
                </article>`;
        });

        document.querySelector(container).innerHTML = list;
    }
}