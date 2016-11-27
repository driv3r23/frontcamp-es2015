"use strict";

import "./css/style.less";

import NewsApi from "./components/newsapi/newsapi.module.js";

let newsApi = new NewsApi("bbc-news", "2a1d89a4b5bf4e9d93d289b1f88ff16c", "main");
newsApi.getNewsList();