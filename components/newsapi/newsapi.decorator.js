"use strict";

import NewsApi from "./newsapi.module";

export default class NewsApiDecorator extends NewsApi {
    constructor(newsApiObject) {
        super(newsApiObject.sourceApi, newsApiObject.keyApi, newsApiObject.containerApi, newsApiObject.documentObj);
    }

    parseNewsList(response) {
        return `<section>${super.parseNewsList(response)}</section>`;
    }
}