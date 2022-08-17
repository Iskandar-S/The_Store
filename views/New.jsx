const React = require('react');

class New extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Add Product</title>
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
                  src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
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
            </div>
          </nav>
          <div class="container mt-5">
            <form action="/products" method="POST">
              <div class="mb-3">
                <label for="InputProductTitle" class="form-label">
                  Product title
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="productTitle"
                />
              </div>
              <div class="mb-3">
                <label for="InputManufacturer" class="form-label">
                  Manufacturer/Brand
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="manufacturer"
                />
              </div>
              <div class="mb-3">
                <label for="InputQuantity" class="form-label">
                  Quantity
                </label>
                <input
                  type="number"
                  class="form-control"
                  name="quantity"
                />
              </div>
              <div class="mb-3">
                <label for="InputPrice" class="form-label">
                  Price
                </label>
                <input
                  type="number"
                  class="form-control"
                  name="price"
                />
              </div>
              <div class="mb-3">
                <label for="InputFeatures" class="form-label">
                  Features
                </label>
                <textarea
                  class="form-control"
                  name="features"
                  rows="3"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="InputFeatures" class="form-label">
                  Features
                </label>
                <textarea
                  class="form-control"
                  name="features"
                  rows="3"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="InputFeatures" class="form-label">
                  Features
                </label>
                <textarea
                  class="form-control"
                  name="features"
                  rows="3"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="InputFeatures" class="form-label">
                  Features
                </label>
                <textarea
                  class="form-control"
                  name="features"
                  rows="3"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="InputImageURL" class="form-label">
                  Image URL
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="image"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Add
              </button>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = New;
