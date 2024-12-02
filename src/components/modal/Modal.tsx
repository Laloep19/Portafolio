import "../../styles/modal.css";
import type { ComponentChildren } from "preact";
import { useState } from "preact/hooks";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import Overlay from "./Overlay";

interface detail {
  image: ImageMetadata;
  description: string;
  text: string;
}

interface ModalProps {
  children: ComponentChildren;
  title: string;
  details: detail[];
}

export default function Modal({ children, title, details }: ModalProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  useBodyScrollLock(modalOpen);
  return (
    <>
      <button onClick={openModal}>{children}</button>
      {modalOpen && (
        <Overlay
          title={title}
          content={details}
          close={closeModal}
        />
      )}
    </>
  );
}
