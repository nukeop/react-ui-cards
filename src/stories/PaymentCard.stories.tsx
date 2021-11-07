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
    background='linear-gradient( 135deg, #11998e, #38ef7d)'
    backgroundPattern='triangles'
    issuerIcon='https://i.imgur.com/CRdoJbX.png'
    number='3421 7270 0864 956'
    date='02/22'
    name='Jotaro Kujo'
    cvv='880'
/>;
