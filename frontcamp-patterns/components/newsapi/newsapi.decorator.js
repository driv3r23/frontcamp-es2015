"use strict";

import NewsApi from "./newsapi.module";

export default class NewsApiDecorator extends NewsApi {
    constructor(newsApiObject) {
        super(newsApiObject.sourceApi, newsApiObject.keyApi, newsApiObject.containerApi, newsApiObject.documentObj);
    }

    getNewsList() {
        var that = this,
            httpRequest = new XMLHttpRequest();

        httpRequest.open("GET", "https://newsapi.org/v1/articles?source=" + this.sourceApi + "&apiKey=" + this.keyApi, true);
        httpRequest.send();
        httpRequest.onreadystatechange = function() {
            if (this.readyState != 4) return;

            that.parseNewsList(JSON.parse(this.responseText), that.containerApi, that.documentObj);
        };
    }
}