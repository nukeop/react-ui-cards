import RecipeCard from "../RecipeCard";

export default {
    title: "Cards/Recipe card",
    component: RecipeCard,
    argTypes: {
        onLike: { action: 'Added to favourites' }
      }
}

export const Example1 = ({ onLike }) => <RecipeCard
    href='https://github.com/nekonee'
    thumbnail='https://i.imgur.com/VkHTicg.jpg'
    title='Fluffy pancakes'
    time='0:30'
    servings='3-5'
    likeCallback={onLike}
/>;

export const Example2 = ({ onLike }) => <RecipeCard
    href='https://github.com/nekonee'
    thumbnail='https://i.imgur.com/0308iuN.jpg'
    title='Cupcakes'
    time='1:30'
    servings='4-6'
    likeCallback={onLike}
/>;

export const Example3 = ({ onLike }) => <RecipeCard
    href='https://github.com/nekonee'
    thumbnail='https://i.imgur.com/s9oR6BE.jpg'
    title='Macarons'
    time='2:00'
    servings='7-10'
    likeCallback={onLike}
/>;