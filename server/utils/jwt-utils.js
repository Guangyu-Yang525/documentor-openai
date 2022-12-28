import jwt from "jsonwebtoken";

export const jwtGenerator = (payload) =>
    jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "24hr" });
export const verifyJWT = (accessToken) =>
    jwt.verify(accessToken, process.env.SECRET_KEY)