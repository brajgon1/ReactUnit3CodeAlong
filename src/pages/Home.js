import { Link, useNavigate } from 'react-router-dom';

function HomePage() {

  const navigate = useNavigate();

  function navigateHandler() {
    navigate('products');
  }

  return (
    <>
      <h1>My Home Page</h1>
      <p>Go To <Link to="products">the List of Products</Link>. </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;
