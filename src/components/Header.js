import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
// import '../styles/Header.css';
// FOG - #EFEFEF
// MIDNIGHT - #23303D
// TIDE - #395159
// MIST - #90A3A7
// SUNSET - #935430
// SHELL - #CBA688

// TODO: Create a styles object called "styles"
const styles = {
    header: {
        background: '#23303D',
        textAlign: 'center',
        padding: '10px'
    },
    name: {
        color: '#EFEFEF'
    }
}
function Header() {
  // TODO: Add a style attribute to header and the h1 element

  return (
    <header className="header" style={styles.header}>
      <h1 style={styles.name}>Cheryl Caitano</h1>
    </header>
  );
}

export default Header;
