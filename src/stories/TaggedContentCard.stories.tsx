import TaggedContentCard from "../TaggedContentCard";

export default {
    title: 'Cards/Tagged content card',
    component: TaggedContentCard
}

export const Example1 = () => <TaggedContentCard
    href='https://github.com/nukeop'
    thumbnail='https://i.imgur.com/yCch7GN.jpg'
    title='Cheesecake'
    description='a cake with raspberries'
    tags={[
        'food',
        'cake',
        'fruits'
    ]}
/>;

export const Example2 = () => <TaggedContentCard
    href='https://github.com/nukeop'
    thumbnail='https://i.imgur.com/57I3RAq.jpg'
    title='Cupcakes'
    description='a bite-sized cake'
    tags={[
        'food',
        'cake',
        'icing'
    ]}
/>;

export const Example3 = () => <TaggedContentCard
    href='https://github.com/nukeop'
    thumbnail='https://i.imgur.com/H0f0R6p.jpg'
    title='Burger'
    description='the cornerstone of every nutritious breakfast'
    tags={[
        'food',
        'sandwich',
        'meat'
    ]}
/>;