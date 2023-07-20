import { Link } from "react-router-dom";
import { navLinks } from "../../utils/data";
import { FaBars, FaFilter } from "react-icons/fa";
import Modal from "../../Modals/Modal";
import { useState, useEffect } from "react";
import YearListModal from "../../Modals/YearListModal";
import { useModalContext } from "../../Context/ModalContext";
import NavbarDropdown from "./NavbarDropdown";
import styled from "styled-components";
import { useGlobalContext } from "../../Context/GlobalContext";

const Navbar = () => {
  //Navbar dropdown links
  const [showLinks, setShowLinks] = useState(false);

  const { openYearsModal, isYearsClicked } = useModalContext();

  //close Navbar links when window grows bigger (isWindowSmall becomes false)
  const { isWindowSmall } = useGlobalContext();

  useEffect(() => {
    setShowLinks(false);
  }, [isWindowSmall]);

  return (
    <Wrapper>
      <>
        <nav className="nav">
          {/* icon */}
          <div className="nav-icon">
            <Link to="/">pylt</Link>
          </div>
          {/* navigation links */}
          <div className="nav-links-container">
            <ul className="links">
              {navLinks.map((link, index) => {
                const { url, text } = link;
                return (
                  <li key={index} className="link">
                    <Link to={url}>{text}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* toggle links bars*/}
          <button
            className="toggleBars"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
          {/* year selection */}
          <div onClick={openYearsModal} className="year-selection">
            <FaFilter />
          </div>
        </nav>
        <NavbarDropdown showLinks={showLinks} isWindowSmall={isWindowSmall} />
        {/* Years Modal */}
        <Modal>{isYearsClicked ? <YearListModal /> : null}</Modal>
      </>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: var(--shadow-1);
    background-color: var(--color3);
    padding: 1rem 1.5rem;
  }

  .nav-icon {
    text-transform: uppercase;
    color: var(--color4);
    font-weight: 500;
    text-decoration: none;
    font-size: var(--big-text);
  }

  .nav-icon a {
    text-decoration: none;
    color: var(--color4);
  }

  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
  }

  .links a {
    color: var(--color4);
    font-size: var(--medium-text);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    transition: var(--transition);
    text-decoration: none;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .links a:hover {
    color: var(--color1);
  }

  .toggleBars {
    display: none;
    cursor: pointer;
    color: var(--color4);
    background-color: var(--color3);
    border-style: none;
    font-size: var(--big-text);
    transition: var(--transition);
  }

  .toggleBars:hover {
    color: var(--color1);
    transform: scale(1.2);
  }

  .year-selection {
    cursor: pointer;
    color: var(--color4);
    transition: var(--transition);
    font-size: var(--big-text);
  }

  .year-selection:hover {
    scale: 1.2;
    color: var(--color1);
  }

  @media screen and (max-width: 700px) {
    .toggleBars {
      display: block;
    }

    .nav-links-container {
      display: none;
    }
  }
`;

export default Navbar;
