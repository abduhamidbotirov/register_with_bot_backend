export default (res, error, code) => {
    res.status(code).send({
        message: error,
        status: code
    });
};
