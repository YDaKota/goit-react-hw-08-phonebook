import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Page404() {
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timerId);
  }, [navigate]);

  return (
    <div>
      <h3>Page not Found!</h3>
      <button type="submit" >
        <NavLink to='/'>Go Back</NavLink> </button>
    </div>
  );
}

export default Page404;