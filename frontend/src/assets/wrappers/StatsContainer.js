import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  background: var(--bgmain1);
  row-gap: 2rem;
  @media (min-width: 400px) {
    grid-template-columns: 1fr;
    column-gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }
  @media (min-width: 1532px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 1rem;
  }
`;
export default Wrapper;
