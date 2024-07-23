import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  function logout() {
    console.log('cliquei');
    navigate('/login');
  }

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to='/' aria-label='Dogs - Home'>
          <Dogs />
        </Link>
        {data ? (
          <div>
            <Link className={styles.login} to='/conta'>
              {data.nome}
            </Link>
            <button onClick={userLogout}>Sair</button>
          </div>
        ) : (
          <Link className={styles.login} to='/login'>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
