"use strict";

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".blog-post-delete").addEventListener('click', function(event){
        event.preventDefault();

        let xhr = new XMLHttpRequest(),
            url = this.getAttribute("href");

        xhr.open('DELETE', url, true);

        xhr.onload = function() {
            if(this.responseText) return alert(JSON.parse(this.responseText).message);

            location.reload();
        };

        xhr.send();
    });
});