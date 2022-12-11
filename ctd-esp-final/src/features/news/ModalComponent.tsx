import { CloseButton as Close } from "../../assets";
import { ContainerModal, CardModal, CloseButton, ContainerTexto, DescriptionModal, ImageModal, TituloModal, BotaoAssinar } from './styled'

export interface IModalProps {
  title: string;
  description: string;
  premium: boolean;
  image: string;
  handleModal?: React.MouseEventHandler;
  handleModalSubscription?: React.MouseEventHandler | undefined;
  buttonName?: string;
}

export function ModalComponent({ title, description, premium, image, handleModal, handleModalSubscription, buttonName }: IModalProps) {

  return (
    <ContainerModal>
      < CardModal >
        <CloseButton onClick={handleModal}>
          <img src={Close} alt="close-button" />
        </CloseButton>
        <ImageModal src={image} alt="news-image" />
        <ContainerTexto>
          <TituloModal>{title}</TituloModal>
          <DescriptionModal>{description}</DescriptionModal>
          {
            premium === true
              ? <BotaoAssinar onClick={handleModalSubscription}>{buttonName}</BotaoAssinar>
              : null
          }
        </ContainerTexto>
      </CardModal >
    </ContainerModal>

  )
}


