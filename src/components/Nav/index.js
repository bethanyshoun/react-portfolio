import React from "react";

function Nav(props) {
    const {
      categories = [],
      setCurrentCategory,
      currentCategory,
      contactSelected,
      setContactSelected
    } = props;
  
  
    const handleClick = (item) => {
      console.log(item);
      return item;
    };
  
    return (
      <header className="flex-row px-1" id="header">
        <h2>
          <a id="link" href="/">
            Bethany Shoun
          </a>
        </h2>
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <a data-testid="about" href="/" onClick={() => setContactSelected(false)}>
                About me
              </a>
            </li>
            <li className={`mx-2 ${contactSelected && 'navActive'}`}>
              <span onClick={() => handleClick('Portfolio')}>
                Portfolio
              </span>
            </li>
            <li className={`mx-2 ${contactSelected && 'navActive'}`}>
              <span onClick={() => handleClick('Resume')}>
                Resume
              </span>
            </li>
            <li className={`mx-2 ${contactSelected && 'navActive'}`}>
              <span onClick={() => setContactSelected(true)}>Contact</span>
            </li>
            {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && `navActive`
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
              </span>
            </li>
          ))}
    
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Nav;