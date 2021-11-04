
import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: 'Marcius Bezerra', email: 'marciusbezerra@outlook.com' },
    { name: 'Paulo Henrique', email: 'paulohenrique@outlook.com' }
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        const to = { name: 'Marcius Carneiro', email: 'marciusbezerra@gmail.com' };

        emailService.sendMail(
            {
                to,
                message: { subject: 'Test Message', body: 'Test body' }
            }
        )
        res.json(to);
    }
}