const URI_BASE = "http://localhost:8080/tasks";

const fetchTask = (options = {}, endpoint = "") => {
    const init = {
        method: options.method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(options.data)
    };
    return fetch(URI_BASE + endpoint, init).then(resp => resp.json());
}

export default fetchTask;