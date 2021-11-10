import initStoryshots from '@storybook/addon-storyshots';

jest.mock('react-chartjs-2', () => ({
    Line: () => null,
}));

initStoryshots();