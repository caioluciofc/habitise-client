import { CustomStyle } from '@/src/models';

export const styles: CustomStyle = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#333',
    color: '#fff',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '50px', // Adjust as per your logo size
    marginRight: '1rem',
  },
  name: {
    fontSize: '1rem',
  },
  nav: {
    display: 'flex',
  },
  link: {
    marginLeft: '1rem',
    color: '#fff',
    textDecoration: 'none',
  },
};
