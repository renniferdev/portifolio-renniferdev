import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-out;
  backdrop-filter: blur(4px);

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  background-color: var(--container-color);
  border-radius: 1.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 95vw;
  width: 95vw;
  max-height: 95vh;
  height: 95vh;
  display: flex;
  flex-direction: column;
  animation: slideUp 0.3s ease-out;
  overflow: hidden;

  @keyframes slideUp {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    max-width: 98vw;
    width: 98vw;
    max-height: 98vh;
    height: 98vh;
    border-radius: 1rem;
  }

  @media (max-width: 480px) {
    max-width: 100vw;
    width: 100vw;
    border-radius: 0;
    max-height: 100vh;
    height: 100vh;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid rgba(124, 58, 237, 0.1);
  background-color: var(--container-color);
  z-index: 10;
`;

const DownloadLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.9rem;
  border-radius: 0.5rem;
  background: linear-gradient(135deg, var(--first-color) 0%, var(--first-color-alt) 100%);
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-color);
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  &:hover {
    background-color: rgba(124, 58, 237, 0.1);
    color: var(--first-color);
    transform: rotate(90deg);
  }
`;

const ModalBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const PDFContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const PDFViewer = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0.5rem;
`;

function CVModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const cvPath = '/img/Rennifer-Teixeira-Curriculo-Desenvolvedor-Full Stack.pdf';

  return (
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalContent>
        <ModalHeader>
          <DownloadLink href={cvPath} download aria-label="Baixar currículo em PDF">
            <i className="uil uil-download-alt"></i>
            Baixar PDF
          </DownloadLink>
          <CloseButton onClick={onClose} aria-label="Fechar">
            <i className="uil uil-times"></i>
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          <PDFContainer>
            <PDFViewer
              src={cvPath}
              type="application/pdf"
              title="Currículo - Rennifer Teixeira"
              allowFullScreen
            />
          </PDFContainer>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
}

export default CVModal;
