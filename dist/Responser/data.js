export default {
    send: (res, data, code = 200) => {
        res.status(code).send(data);
    },
    msg: (res, data, code = 200) => {
        res.status(code).send({
            message: data
        });
    },
};
