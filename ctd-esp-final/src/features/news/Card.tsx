import React from 'react'
import { BotaoLeitura, CardNoticiaContainer, DateCardNoticia, DescriptionCardNoticia, ImageCardNoticia, TituloCardNoticia } from './styled'

interface INewsProps {
  image: string;
  title: string;
  date: number | string;
  descriptionCurto?: string;
  handleBtn: React.MouseEventHandler;
}

export function Card({ image, title, date, descriptionCurto, handleBtn }: INewsProps) {
  return (
    <CardNoticiaContainer>
      <ImageCardNoticia src={image} />
      <TituloCardNoticia>{title}</TituloCardNoticia>
      <DateCardNoticia>{date}</DateCardNoticia>
      <DescriptionCardNoticia>{descriptionCurto}</DescriptionCardNoticia>
      <BotaoLeitura onClick={handleBtn}>Veja mais</BotaoLeitura>
    </CardNoticiaContainer>
  )
}


