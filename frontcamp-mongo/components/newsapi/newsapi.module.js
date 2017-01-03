"use strict";

import createNewsApiRequest from "./newsapi.functions.js";

export default class NewsApi {
    constructor(sourceApi, keyApi, containerApi, documentObj) {
        this.sourceApi = sourceApi;
        this.keyApi = keyApi;
        this.containerApi = containerApi;
        this.documentObj = documentObj;
    }

    getNewsList() {
        fetch(createNewsApiRequest(this.sourceApi, this.keyApi))
            .then(response => {
                return response.json();
            })
            .then(response => {
                this.pasteIntoContainer(this.parseNewsList(response), this.containerApi, this.documentObj);
            })
            .catch(error => {
                console.error(error);
            });
    }

    parseNewsList(response) {
        let newsList = "";

        response["articles"].forEach(item => {
            newsList +=
                `<article>
                    <h2>${item.title}</h2>
                    <div>
                        <img src="${item.urlToImage}">
                        <p>${item.description}<br><a href="${item.url}">read more</a></p>
                    </div>
                </article>`;
        });

        return newsList;
    }

    pasteIntoContainer(data, container, document) {
        document.querySelector(container).innerHTML = data;
    }

    static createNewsList(sourceApi, keyApi, containerApi, documentObj) {
        if (!NewsApi.instance) {
            NewsApi.instance = new NewsApi(sourceApi, keyApi, containerApi, documentObj);
        }
        return NewsApi.instance;
    }
}