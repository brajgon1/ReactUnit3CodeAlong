import { Link } from "react-router-dom";

function ProductsPage() {

    const PRODUCTS = [
        { id: 'p1', name: "Product 1" },
        { id: 'p2', name: "Product 2" },
        { id: 'p3', name: "Product 3" },
    ]

  return (
    <>
      <h1>Product Page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
            <li key={prod.id}>
              <Link to={prod.id}>{prod.name}</Link>
            </li>
          )
        )}
      </ul>
    </>
  );
}

export default ProductsPage;
