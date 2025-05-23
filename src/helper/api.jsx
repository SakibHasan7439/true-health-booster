import axios from "axios";

//apply base url for axios
const API_URL = "https://healthbooster.softxmind.com/api";
const axiosApi = axios.create({
    baseURL: API_URL,
    validateStatus: function (status) {
        return status >= 200 && status < 600; // default
    },
});

axiosApi.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);

export async function get(url, data, config = {}, token_name = "auth_token") {
    axiosApi.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(token_name) ?? ""
        }`;
    return await axiosApi
        .get(url, { ...config, params: { ...data } })
        .then((response) => response.data);
}

export async function post(url, data, config = {}, token_name = "auth_token") {
    axiosApi.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(token_name) ?? ""
        }`;
    return axiosApi
        .post(url, convertObjectToFormData(data), { ...config })
        .then((response) => response.data);
}
export async function newPost(url, data, config = {}, token_name = "auth_token") {
    axiosApi.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(token_name) ?? ""
        }`;
    return axiosApi
        .post(url, { ...data }, { ...config })
        .then((response) => response.data);
}

export async function put(url, data, config = {}, token_name = "auth_token") {
    axiosApi.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(token_name) ?? ""
        }`;
    return axiosApi
        .put(url, { ...data }, { ...config })
        .then((response) => response.data);
}

export async function del(url, data, config = {}, token_name = "auth_token") {
    axiosApi.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(token_name) ?? ""
        }`;
    return await axiosApi
        .delete(url, { ...config, params: data })
        .then((response) => response.data);
}

export const convertObjectToFormData = (object) => {
    let form_data = new FormData();
    for (let key in object) {
        if (object[key] !== null && object[key] !== undefined) {
            if (Array.isArray(object[key])) {
                object[key].forEach((item, index) => {
                    if (
                        typeof item === "object" &&
                        !isFile(item) &&
                        item !== null &&
                        item !== undefined
                    ) {
                        for (let sub_key in item) {
                            form_data.append(
                                `${key}[${index}][${sub_key}]`,
                                item[sub_key]
                            );
                        }
                    } else {
                        form_data.append(`${key}[${index}]`, item);
                    }
                });
            } else {
                form_data.append(key, object[key]);
            }
        }
    }
    return form_data;
};

function isFile(input) {
    return "File" in window && input instanceof File;
}

