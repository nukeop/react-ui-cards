# react-ui-cards

Various card components for React.

## Live demo
https://nukeop.github.io/react-ui-cards/

## Card types
- User cards
  Cards representing users or people.

  | attribute    | type        | description                                                                                                         |
  |--------------|-------------|---------------------------------------------------------------------------------------------------------------------|
  | cardClass    | string      | additional CSS classes you might want to apply to the Card. Putting 'float' here will enable an on-hover animation. |
  | href         | string/null | optional url the card will link to when clicked                                                                     |
  | header       | string      | url to the image that will be displayed in the upper part of the card                                               |
  | avatar       | string      | url to the image that will be displayed in the center of the card                                                   |
  | name         | string      | user's name                                                                                                         |
  | positionName | string      | user's role                                                                                                         |
  | stats        | array/null  | an optional array of objects with attributes 'name' and 'value' - this is displyed in the card's footer             |

![User card](https://i.imgur.com/2QMNcjY.png)

- Product cards
  Cards representing products available for purchase.
  
  | attribute   | type    | description                                                   |
  |-------------|---------|---------------------------------------------------------------|
  | photos      | array   | array of urls to photos of the product                        |
  | price       | string  | the price that will be displayed in the upper lefthand corner |
  | productName | string  | name of the product                                           |
  | description | string  | a short description of the product                            |
  | rating      | integer | rating of the product (0-5). Not implemented yet.             |
  | url         | string  | url the 'buy now' button will link to                         |

![Product card](https://i.imgur.com/qDCMzwV.png)
