"use strict";

export default function createNewsApiRequest (source, key) {
    return new Request(`https://newsapi.org/v1/articles?source=${source}&apiKey=${key}`);
}