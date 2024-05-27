import http from 'http';
import https from 'https';

const _Request = Request;
const _Headers = Headers;

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

export { fetchWithAgentSelection as fetch, _Request as Request, _Headers as Headers};