const React = require('react');

class Index extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Home</title>
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
                      href="/products/new"
                    >
                      Add Product
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div class="container mt-5">
            <div class="row row-cols-1 row-cols-md-4 g-4">
              {products.map((product) => {
                return (
                  <div>
                    <div class="card">
                      <div class="card-body">
                        <a href={`/products/${product.id}`}>
                          <img
                            src={product.image}
                            alt={product.productTitle}
                            class="card-img"
                            style={{ objectFit: 'contain' }}
                            height="350"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossorigin="anonymous"
          ></script>
        </body>
      </html>
    );
  }
}

module.exports = Index;
