import React from 'react';

export interface IUser {
    name?: string;
    email: string;
}

interface Props {
    user: IUser;
}

export const User: React.FC<Props> = ({ user }) => {
    return (
        <div>
            <strong>Nome: </strong> {user.name || 'Não informou nome'} <br />
            <strong>Email: </strong> {user.email} <br />
        </div>
    );
};