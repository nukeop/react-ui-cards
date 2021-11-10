import FlippingCard from "../FlippingCard";
import FlippingCardBack from "../FlippingCard/FlippingCardBack";
import FlippingCardFront from "../FlippingCard/FlippingCardFront";

export default {
    title: 'Cards/Flipping card',
    component: FlippingCard,
};

export const Example1 = () => <FlippingCard>
    <FlippingCardBack>
        <div
            style={{
                width: '100%',
                height: '100%',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundImage: 'url(https://i.imgur.com/wjbYGNv.jpg)'
            }}>
        </div>
    </FlippingCardBack>
    <FlippingCardFront>
        <div
            style={{
                width: '100%',
                height: '100%',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundImage: 'url(https://i.imgur.com/3sKjY8V.jpg)'
            }}>
        </div>
    </FlippingCardFront>
</FlippingCard>;

export const Example2 = () => <FlippingCard>
    <FlippingCardBack>
        <div
            style={{
                width: '100%',
                height: '100%',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundImage: 'url(https://i.imgur.com/m0GnZH3.jpg)'
            }}>
        </div>
    </FlippingCardBack>
    <FlippingCardFront>
        <div
            style={{
                width: '100%',
                height: '100%',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundImage: 'url(https://i.imgur.com/E1jz6WQ.jpg)'
            }}>
        </div>
    </FlippingCardFront>
</FlippingCard>;

export const Example3 = () => <FlippingCard>
    <FlippingCardBack>
        <div
            style={{
                width: '100%',
                height: '100%',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundImage: 'url(https://i.imgur.com/1abAoUz.jpg)'
            }}>
        </div>
    </FlippingCardBack>
    <FlippingCardFront>
        <div
            style={{
                width: '100%',
                height: '100%',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundImage: 'url(https://i.imgur.com/UjbK2Wb.png)'
            }}>
        </div>
    </FlippingCardFront>
</FlippingCard>;