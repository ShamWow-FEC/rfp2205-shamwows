import styled from 'styled-components';

export const Wrapper = styled.div`
  isolation: isolate;
  margin: 50px auto 0 auto;
  padding-bottom: 4rem;
  width: 70%;
  @media (max-width: 500px) {
    margin: 25px 0 0 0;
    width: 100%;
    padding: 15px;
  }

& .qa-component-header {
  margin: 1.25rem 0;

  @media(max-width:500px) {
    width: 100%;
    text-align: center;
    padding: 0 10px;
  }
}
`;

export const PrimaryBtnGroup = styled.div`
  display: flex;

  @media(max-width: 500px) {
    justify-content: space-between;
  }

  & .QAButton {
    height: 3rem;
    padding: 0 1rem;
    justify-content: flex-start;
    text-transform: uppercase;
    font-weight: 700;
    background: none;
    border: 1px solid #222;
    border-radius: 4px;
    margin-right: 10px;
    margin-top: 15px;
    transition: all 100ms ease-in-out;
    &:hover {
      transition: all 200ms ease-in-out;
      color: #eee;
      background: #222;
      cursor: pointer;
    }
    &:active {
      background: #444;
    }
    &:disabled {
      background: grey;
      color: white;
      opacity: 0.25;
    }

    @media(max-width: 500px) {
      flex: 1;
      padding: 0;
      height: 5rem;
    }
  }
`;
