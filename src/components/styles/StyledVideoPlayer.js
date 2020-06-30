import styled from 'styled-components';

const StyledWbnPlayer = styled.div`
  background: ${(props) => props.theme.bgcolor};
  border: ${(props) => props.theme.border};
  max-width: 1800px;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  max-height: 863px;
  transition: all 0.5s ease;
  font-size: 8px;

  @media screen and (max-width: 1200px) {
    display: block;
    max-height: 10000px;
    font-size: 8px;
  }
`;

export default StyledWbnPlayer;
