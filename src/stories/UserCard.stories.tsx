import UserCard from "../UserCard";

export default {
    title: 'Cards/User Card'
}

export const Example1 = () => <UserCard
    float
    header='https://i.imgur.com/w5tX1Pn.jpg'
    avatar='https://i.imgur.com/uDYejhJ.jpg'
    name='Justin Case'
    positionName='Software Developer'
    stats={[
        {
            name: 'followers',
            value: 21
        },
        {
            name: 'following',
            value: 37
        },
        {
            name: 'posts',
            value: 117
        }
    ]}
/>

