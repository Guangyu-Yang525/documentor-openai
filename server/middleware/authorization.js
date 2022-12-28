import { verifyJWT } from "../utils/jwt-utils.js"

export const authorization = (req, res, next) => {
    try {
        const authorizationHeader = req.header("Authorization")
        if (!authorizationHeader) {
            res.status(401).send({
                error: true,
                message: "invalid token"
            })
            return
        }
        const slices = authorizationHeader.split(" ")
        if (slices.length < 2) {
            res.status(401).send({
                error: true,
                message: "invalid token"
            })
            return
        } 
        const [prefix, accessToken] = slices
        if (prefix != "Bearer") {
            res.status(401).send({
                error: true,
                message: "invalid token"
            })
            return
        }

        const payload = verifyJWT(accessToken)
        if (!payload) {
            res.status(401).send({
                error: true,
                message: "invalid token"
            })
            return
        }
        req.user = payload
        next()
    } catch (error) {
        res.status(500).send({ error })
    }
}