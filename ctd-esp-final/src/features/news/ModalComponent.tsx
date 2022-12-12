import { CloseButton as Close } from "../../assets";
import { ContainerModal, CardModal, CloseButton, ContainerTexto, DescriptionModal, ImageModal, TitleModal, SubscribeButton } from './styled'

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
          <TitleModal>{title}</TitleModal>
          <DescriptionModal>{description}</DescriptionModal>
          {
            premium === true
              ? <SubscribeButton onClick={handleModalSubscription}>{buttonName}</SubscribeButton>
              : null
          }
        </ContainerTexto>
      </CardModal >
    </ContainerModal>

  )
}


