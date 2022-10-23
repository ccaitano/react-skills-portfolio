import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
// import '../styles/Footer.css';

// TODO: Create a styles object called "styles"
const styles = {
  footer: {
      background: '#23303D',
      color: '#90A3A7',
      textAlign: 'center',
      padding: '10px'
  },
}
function Footer() {
  // TODO: Add a style attribute to header and the h1 element

  return (
    <footer className="footer" style={styles.footer}>
      <h6>2022</h6>
    </footer>
  );
}

export default Footer;
