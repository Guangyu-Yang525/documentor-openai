import jwt from "jsonwebtoken";

/**
 * Author: Guangyu Yang
 * 
 * jwt utils functions including generator and verify
 */

export const jwtGenerator = (payload) =>
    jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "24hr" });
export const verifyJWT = (accessToken) =>
    jwt.verify(accessToken, process.env.SECRET_KEY)