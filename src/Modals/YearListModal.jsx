import { yearList } from "../utils/data";
import styled from "styled-components";

function YearListModal() {
  return (
    <Wrapper>
      {yearList.map((year, index) => {
        return (
          <li key={index} className="year">
            {year}
          </li>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: start;
  width: 100%;
  height: 80%;

  .year {
    padding: 5px;
    margin: 5px;
    transition: 0.3s;
    cursor: pointer;
    width: fit-content;
  }

  .year:hover {
    background-color: var(--color3);
    transform: translateX(5px);
  }
`;

export default YearListModal;
