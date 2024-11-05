import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import { useEffect } from 'react';
import { SLASH } from '../../helpers/routes';

const Logout = () => {
  const { logout } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate(SLASH);
  }, [logout, navigate]);

  return null; 
};

export default Logout;