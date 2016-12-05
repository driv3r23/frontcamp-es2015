"use strict";

import NewsApi from "./newsapi.module";

export default class NewsApiProxy extends NewsApi {
    createNewsList(source) {
        if(!this.responseData) {
            super.createNewsList(source);
        }
    }
}