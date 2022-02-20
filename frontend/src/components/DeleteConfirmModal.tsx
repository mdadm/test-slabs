import React, { ReactElement } from 'react'
import styled from "styled-components";

const StyledModal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.25);
    animation-name: appear;
    animation-duration: 300ms;
    
    @keyframes appear {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @keyframes slide-in {
      from {
        transform: translateY(-150px);
      }
      to {
        transform: translateY(0);
      }
    }
`;

const StyledModalDialog = styled.div`
    width: 100%;
    max-width: 550px;
    background: white;
    position: relative;
    margin: 0 20px;
    max-height: calc(100vh - 40px);
    text-align: left;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: slide-in;
    animation-duration: 0.5s;
`;

const StyledModalHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 24px;
    border-bottom: 1px solid #dbdbdb;
    justify-content: space-between;
`;

const StyledModalBody = styled.div`
    overflow: auto;
`;

const StyledModalContent = styled.div`
    padding: 24px;
`;

const StyledModalTitle = styled.div`
    margin: 0;
`;

type ModalProps = {
  visible: boolean
  title: string
  content: ReactElement | string
  footer: ReactElement | string
  onClose: () => void
}

export const DeleteConfirmModal = (
  {
    visible = false,
    title = '',
    content = '',
    footer = '',
    onClose,
  }: ModalProps) => {

  console.log('DeleteConfirmModal!');

  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case 'Escape':
        onClose();
        break;
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', onKeydown)
    return () => document.removeEventListener('keydown', onKeydown)
  })

  if (!visible) return null

  return (
    <StyledModal onClick={onClose}>
      <StyledModalDialog onClick={e => e.stopPropagation()}>
        <StyledModalHeader>
          <StyledModalTitle>
            <h3>{title}</h3>
          </StyledModalTitle>
        </StyledModalHeader>
        <StyledModalBody>
          <StyledModalContent>
            {content}
          </StyledModalContent>
        </StyledModalBody>
        {footer && <div>{footer}</div>}
      </StyledModalDialog>
    </StyledModal>
  )
}
