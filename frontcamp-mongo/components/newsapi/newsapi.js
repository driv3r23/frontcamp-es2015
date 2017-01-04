"use strict";

import NewsApi from "./newsapi.module.js";
import NewsApiDecorator from "./newsapi.decorator.js";

let newsApi = NewsApi.createNewsList("bbc-news", "2a1d89a4b5bf4e9d93d289b1f88ff16c", "main", document);
let newsApiDecorator = new NewsApiDecorator(newsApi);

newsApiDecorator.getNewsList();