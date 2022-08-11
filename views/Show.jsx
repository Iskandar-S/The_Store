const React = require('react');

class Show extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>`${product.name}`</title>
          <link rel="stylesheet" href="/css/app.css" />
        </head>
        <body>
          <h1>{product.name}</h1>
          <img src={`${product.img}`} alt={`${product.name}`} />
        </body>
      </html>
    );
  }
}

module.exports = Show;
