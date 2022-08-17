const React = require('react');

class Show extends React.Component {
  render() {
    const { product } = this.props;
    product.quantity > 0
      ? (product.inStock = true)
      : (product.inStock = false);
    return (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{product.productTitle}</title>
          <script
            src="https://kit.fontawesome.com/2f4558e6ee.js"
            crossorigin="anonymous"
          ></script>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossorigin="anonymous"
          ></link>
          <link rel="stylesheet" href="/css/app.css" />
        </head>
        <body>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="/products">
                <img
                  src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt=""
                  width="90"
                  height="24"
                  class="d-inline-block align-text-top"
                />
                <span> but from </span>
                <img
                  src="https://1000logos.net/wp-content/uploads/2021/05/Wish-logo.png"
                  alt=""
                  width="85"
                  height="24"
                  class="d-inline-block align-text-top"
                />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse "
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      aria-current="page"
                      href={`/products/${product.id}/edit`}
                    >
                      Edit Product
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div class="container mt-5">
            <div class="row gap-3">
              <div class="col">
                <img
                  src={product.image}
                  alt={product.productTitle}
                  height="400"
                  width="400"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div class="col-6">
                <h1>{product.productTitle}</h1>
                <p class="text-primary">
                  Brand: {product.manufacturer}
                </p>
                <h4 class="text-danger">${product.price}</h4>
                <div>
                  <ul>
                    {product.features.map((feature) => (
                      <li>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div class="col">
                <div>
                  <div class="container p-3 gap-3 border ">
                    <div>
                      <p class="text-danger">${product.price}</p>
                    </div>
                    <div>
                      <p>
                        {product.inStock
                          ? `${product.quantity} in Stock`
                          : 'OUT OF STOCK'}
                      </p>
                    </div>
                    <div class="d-grid gap-3">
                      <form
                        action={`/products/${product.id}?_method=PUT`}
                        method="POST"
                        style={{
                          display: product.inStock ? 'block' : 'none',
                        }}
                      >
                        <button
                          type="submit"
                          class="btn btn-warning w-100"
                          name="quantity"
                          value={product.quantity - 1}
                        >
                          Buy
                        </button>
                      </form>
                      <form
                        action={`/products/${product.id}?_method=DELETE`}
                        method="POST"
                      >
                        <button
                          type="submit"
                          class="btn btn-danger w-100"
                        >
                          Delete
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Show;
