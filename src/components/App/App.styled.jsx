import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;

  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.background};
`;
