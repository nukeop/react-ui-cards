import PaymentCard from "../PaymentCard";

export default {
    title: 'Cards/Payment card',
    component: PaymentCard,
};

export const Example1 = () => <PaymentCard
    issuerIcon='https://i.imgur.com/MulWZzk.png'
    backgroundPattern='spiral'
    number='4445 8509 0753 1365'
    date='12/18'
    name='Jean Pierre Polnareff'
    cvv='213'
/>;

export const Example2 = () => <PaymentCard
    background='linear-gradient(135deg, #00b4db, #0083b0)'
    issuerIcon='https://i.imgur.com/31vser1g.png'
    number='5458 8074 7691 1254'
    date='05/20'
    name='Joseph Joestar'
    cvv='714'
/>;

export const Example3 = () => <PaymentCard
    background='linear-gradient( 135deg, #11998e, #38ef7d)'
    backgroundPattern='triangles'
    issuerIcon='https://i.imgur.com/CRdoJbX.png'
    number='3421 7270 0864 956'
    date='02/22'
    name='Jotaro Kujo'
    cvv='880'
/>;
