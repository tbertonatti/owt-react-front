const HandledFetch = (url, data = {}) => {
    return fetch(url, data).then(response => {
        return response.json();
    }).then(response => {
        if (response.code === 200) {
            return response;
        } else {
            throw Error(response.message);
        }
    }).catch(err => {
        if (typeof err.message === 'string' && err.message.includes('Unexpected ')) {
            throw Error('Failed to fetch');
        } else {
            throw Error(err);
        }
    });
};
export const HttpGet = (url) => {
    return HandledFetch(url)
};
