const kazpostApiClient = require('./client/kazpost-api-client');

const kazpostApi = {
    getChildren: (parentId, from = 0) => {
        return kazpostApiClient.get(`objects/${parentId}?from=${from}`);
    },
    getBuildings: (parentId, from = 0) => {
        return kazpostApiClient.get(`buildings/${parentId}?from=${from}`);
    }
};

module.exports = kazpostApi;
