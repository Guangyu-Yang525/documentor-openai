import bcrypt from 'bcrypt'

/**
 * Author: Guangyu Yang
 * 
 * bcrypt utils functions for encrypt and check plain text password
 */

const saltRounds = 10

export const bcryptEncryption = async (password) => {
    const salt = await bcrypt.genSalt(saltRounds)
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword
}

export const bcryptComparePassword = async(password, hashedPassword) => {
    const passwordIsCorrect = await bcrypt.compare(password, hashedPassword)
    return passwordIsCorrect
}