const React = require('react');

class Edit extends React.Component {
  render() {
    const { product } = this.props;
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>${product.name}</title>
        <link rel="stylesheet" href="/css/app.css" />
      </head>
      <body>
        <ul>
          {products.map((product) => {
            return (
              <li key={product.id}>
                <a href={`/products/${product.id}`}>
                  <img
                    src={`${product.img}`}
                    alt={`${product.name}`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </body>
    </html>;
  }
}
