import { Link } from "react-router-dom";
import { navLinks } from "../../utils/data";
import styled from "styled-components";

const NavbarDropdown = ({ showLinks, isWindowSmall }) => {
  return (
    <Wrapper>
      <div
        className={
          showLinks && isWindowSmall
            ? "nav-links-container-dropdown nav-dropdown-show"
            : "nav-links-container-dropdown"
        }
      >
        <ul className="links-dropdown">
          {navLinks.map((link, index) => {
            const { url, text } = link;
            return (
              <Link key={index} to={url} onClick={() => setShowLinks(false)}>
                <li key={index} className="link-dropdown">
                  {text}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .nav-links-container-dropdown {
    display: none;
  }

  .nav-dropdown-show {
    display: block;
  }

  .links-dropdown {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    list-style-type: none;
  }

  .link-dropdown {
    padding: 0.5rem;
    box-shadow: var(--shadow-1);
    cursor: pointer;
    transition: var(--transition);
  }

  .links-dropdown a {
    color: var(--color4);
    font-size: var(--small-text);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    transition: var(--transition);
    text-decoration: none;
  }

  .link-dropdown:hover {
    background-color: var(--color3);
    transform: translateX(5px);
    color: var(--color1);
  }
`;

export default NavbarDropdown;
