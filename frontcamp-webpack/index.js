"use strict";

import "./css/style.less";

document.querySelector("button").onclick = function () {
    require.ensure([], function (require) {
        require("./components/newsapi/newsapi");
    })
};