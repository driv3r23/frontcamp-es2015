"use strict";

import NewsApiProxy from "./newsapi.proxy";

let newsApi = new NewsApiProxy("2a1d89a4b5bf4e9d93d289b1f88ff16c", "section", document);

document.querySelector("button").onclick = function () {
    newsApi.createNewsList("bbc-sport");
};
