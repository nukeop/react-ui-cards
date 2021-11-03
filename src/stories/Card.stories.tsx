import Card from "../Card"

export default {
    title: 'Cards/Base Card'
};

export const Example1 = () => <Card>
    Card content
</Card>

export const FloatingCard = () => <Card float>
    Hover over me
</Card>

export const CustomClass = () => <>
<style>
    {`
        .custom-card {
            background-color: #faebd7;
            border-radius: 5px;
            padding: 10px;
            margin: 10px;
        }
    `}
</style>
<Card className='custom-card'>
    Card with custom className
</Card>
</>