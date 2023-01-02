import { verifyJWT } from "../utils/jwt-utils.js"

/**
 * Author: Guangyu Yang
 * 
 * authorization middleware that protect open ai apis from
 * unauthorized access by checking the JWT tokens
 */

export const authorization = (req, res, next) => {
    try {
        const authorizationHeader = req.header("Authorization")
        if (!authorizationHeader) {
            res.status(401).send({
                error: true,
                message: "invalid token with no header"
            })
            return
        }
        const slices = authorizationHeader.split(" ")
        if (slices.length < 2) {
            res.status(401).send({
                error: true,
                message: "invalid token with incorrect length"
            })
            return
        } 
        const [prefix, accessToken] = slices
        if (prefix != "Bearer") {
            res.status(401).send({
                error: true,
                message: "invalid token with incorrect prefix"
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