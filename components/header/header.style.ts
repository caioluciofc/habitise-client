import { CustomStyle } from '@/src/models';
import { Colors } from '@/design_system/';

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
    backgroundColor: Colors.darkgrey,
    color: Colors.white,
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
    justifyContent: 'space-between',
  },
  link: {
    marginLeft: '1rem',
    color: Colors.white,
    textDecoration: 'none',
  },
};
