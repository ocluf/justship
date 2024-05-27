"use strict";

const _Request = Request;
const _Headers = Headers;

const http = require("node:http");
const https = require("node:https");

const httpAgent = new http.Agent({ keepAlive: true });
const httpsAgent = new https.Agent({ keepAlive: true });

function agentSelector(parsedUrl) {
    if (parsedUrl.protocol === 'https:') {
        return httpsAgent;
    } else {
        return httpAgent;
    }
}

function fetchWithAgentSelection(resource, options = {}) {
    return fetch(resource, { agent: agentSelector, ...options });
}
module.exports = { fetch: fetchWithAgentSelection, Request: _Request, Headers: _Headers };