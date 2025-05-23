;
import { useEffect, useState } from "react";
import { notification } from "antd";
import { hideLoader, showLoader } from "../components/common/preloader";
import swalAlert from "../components/common/alert";


export const useFetch = (func, query = {}, load = true) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(load);
    const [error, setError] = useState("");
    const [params, setParams] = useState(query);

    useEffect(() => {
        if (load) {
            getData(params);
        }
    }, []);

    const getData = (query) => {
        setLoading(true);
        setError("");
        setParams({ ...params, ...query });
        func({ ...params, ...query })
            .then(({ success, data, message }) => {
                setLoading(false);
                if (success === true) {
                    setData(data);
                } else {
                    setData(undefined);
                    setError(message);
                }
            })
            .catch((e) => {
                // console.log(e)
            });
    };
    const clear = () => setData(undefined);
    return [data, getData, { query: params, loading, error, clear }];
};

export const useAction = async (func, data, reload, alert = true, t) => {
    showLoader();
    const { success, message, data: d } = await func({ ...data });
    hideLoader();
    if (success === true) {
        if (reload) {
            reload(d);
        }
        if (alert) {
            notification.success({
                message: "Success",
                description: message || "Successfully done",
            });
        }
    } else {
        notification.error({
            message: "Failed",
            description: message || "Something went wrong",
        });
    }
};

export const useActionConfirm = async (
    func,
    data,
    reload,
    message,
    confirmText,
    t,
    alert = true
) => {
    const { isConfirmed } = await swalAlert.confirm(
        t ? t(message) : message,
        t ? t(confirmText) : confirmText,
        t
    );
    if (isConfirmed) {
        await useAction(func, data, reload, alert, t);
    }
};

export const userOutSideClick = (ref, func) => {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                func && func();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
};