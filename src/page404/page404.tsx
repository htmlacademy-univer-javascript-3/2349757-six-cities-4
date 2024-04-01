import React from 'react';
import { Link } from 'react-router-dom';


function Page404(): JSX.Element {
  return (
    <React.Fragment>
      <h1>Page 404</h1>
      <Link to={'/'}>Перейти на главную страницу</Link>
    </React.Fragment>
  );
}

export default Page404;
