import NewsHeaderCard from "../NewsHeaderCard";

export default {
    title: "Cards/News header card",
    component: NewsHeaderCard
}

export const Example1 = () => <NewsHeaderCard
    href='https://github.com/nekonee'
    thumbnail='https://i.imgur.com/rLFk5nd.jpg'
    title='Polish mountaineers on the top'
    author='Daily Sport'
    date='Feb 2, 2018'
    tags={['nature', 'photo', () => (<i>component</i>)]}
/>

export const Example2 = () => <NewsHeaderCard
    href='https://github.com/nekonee'
    thumbnail='https://i.imgur.com/1fk52PJ.jpg'
    title='Most poisonous dishes you must avoid'
    author='Daily Health'
    date='Jan 2, 2018'
/>

export const Example3 = () => <NewsHeaderCard
    href='https://github.com/nekonee'
    thumbnail='https://i.imgur.com/n5Wg2Po.jpg'
    title='Cool looking test tubes'
    author='Daily Science'
    date='Mar 2, 2018'
/>;