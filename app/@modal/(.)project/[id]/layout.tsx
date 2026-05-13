import Modal from "@/_components/Modal";
import { ReactNode } from "react";

export default function ModalLayout({ children }: { children: ReactNode }) {
  return <Modal>{children}</Modal>;
}
