const baseApi = "https://localhost:44354/api/";

export const getAll = async (endpoint) => {
    const result = await fetch(baseApi + endpoint, {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    });

    return result.json();

}

export const get = async (endpoint, id) => {
    const result = await fetch(baseApi + endpoint + "/"+id, {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    });

    return result.json();

}

export const post = async (endpoint, object) => {
    const result = await fetch(baseApi + endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(object)
    });

    return result.json();
}

export const del = async (endpoint, id) => {
    const result = await fetch(baseApi + endpoint + "/" + id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    });

    return result.json();
}

export const put = async (endpoint, id, object) => {
    const result = await fetch(baseApi + endpoint + "/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(object)
    });

    return result.status;
}
