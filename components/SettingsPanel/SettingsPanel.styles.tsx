import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;

  :hover {
    background: ${({ theme }) => theme.colors.systemTray.bg};
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  .icon {
    width: 32px;
    height: 32px;
    font-size: 32px;
  }
`;

export const Tray = styled.div`
  display: flex;
  align-items: center;
`;

export const Settings = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  border: 0;
  background: transparent;
  cursor: pointer;
  color: inherit;
  padding: ${({ theme }) => theme.space.xxs};
  border-radius: ${({ theme }) => theme.borderRadius};
`;
