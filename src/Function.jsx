import storage from "./Storage/Storage";

export const sedRequest = async (method, params, url, redir = '', token = true) => {
    if (token) {
        const authToken = storage.get('authToken');
        axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
    }
    let res;
    await axios({ method: method, url: url, data: params }).then(
        response => {
            res = response.data,
                (method != 'GET') ? console.log('success') : '',
                setTimeout(() =>
                    (redir !== '') ? window.location.href = redir : '', 2000)
        }).catch((errors) => {
            let desc = '';
            res = errors.response.data,
                errors.response.data.errors.map((e) => { desc = desc + ' ' + e })
            console.log('error', errors.response.data.errors)
        })
    return res;
}
