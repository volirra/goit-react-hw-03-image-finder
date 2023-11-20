import styled from '@emotion/styled';

export const OverlayWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2; //1200
`;

export const ModalWindow = styled.div`
  max-height: calc(100vh - 24px);
  max-width: calc(100vw - 48px);
`;
