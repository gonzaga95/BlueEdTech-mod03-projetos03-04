export function badRequest(error, res) {
    return res.status(400).send(error.message);
}
