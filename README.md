# The Shop
***
## Routes

|        URL         | HTTP Verb | Action |  	       Notes            |
| ------------------ | --------- | ------ | ---------------------------- |
| /products/         | GET       | Index  | index of all products        |
| /products/new      | GET       | New    | form to create a new product |
| /products/:id      | DELETE    | Delete | delete a product             |
| /products/:id      | PUT       | Update | update a product             |
| /products/         | POST      | Create | create a new product         |
| /products/:id/edit | GET       | Edit   | form to edit a product       |
| /products/:id      | GET       | Show   | show individual product      |

***
## Getting Started

Game will start with board settings. You can choose difficulty level and time limit. Players will input their names and choose color that will indicate their turn. Each right input earns 1 point. There's a penalty of 1 point for wrong input to discourage guessing. Once the puzzle is solved the player with the highest score wins. Players then offered to continue with the same setting or reset the game.

### Prerequisites

Nothing. Just go [here](https://ps-the-shop.herokuapp.com/products/).

## Built With

- MongoDB
- Express
- Node
