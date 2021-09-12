import { FC } from 'react';

const P: FC<{ text: string }> = ({ text }) => {
    return <p style={{ color: 'red' }}>{text}</p>;
};

export default P;
