import * as jwt from 'jsonwebtoken';

export interface IPayload {
    userid: number;
}

export const generateToken = (payload: IPayload) => {
    const token = jwt.sign(payload, 'final-exam-secret-lol', { expiresIn: '7d' });
    return token;
}