class Api {
    constructor ({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _handleServerResponse(res) {
        return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
    }

    updateCard(cardId, like) {
        return fetch(`${this._baseUrl}/updateCard/${cardId}`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                like,
            }),
        }).then(this._handleServerResponse);
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/deleteCard/${cardId}`, {
            method: "DELETE",
            headers: this._headers,
        }).then(this._handleServerResponse);
    }

    getAllCards() {
        return fetch(`${this._baseUrl}/getAllCards`, {
            method: "GET",
            headers: this._headers,
        }).then(this._handleServerResponse);
    }
}

const api = new Api({
    baseUrl: "https://sdd-practice.onrender.com",
    headers: {
        "Content-Type":"application/json"
    }
});

export default api;