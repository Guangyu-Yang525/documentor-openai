import jwt from "jsonwebtoken";

export const jwtGenerator = (payload) => jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "24hr" })