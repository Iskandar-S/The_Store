const React = require('react');

class New extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>New Product</title>
          <link rel="stylesheet" href="/css/app.css" />
        </head>
        <body>
          <form action="/pokemon" method="POST">
            Product name: <input type="text" name="name" />
            <br />
            Image url: <input type="text" name="img" />
            <br />
            <input type="submit" name="" value="Create Product" />
          </form>
        </body>
      </html>
    );
  }
}

module.exports = New;
