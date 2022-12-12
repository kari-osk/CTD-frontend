import React from 'react'
import { Button, CardNewsContainer, DateCardNews, DescriptionCardNews, ImageCardNews, TitleCardNews } from './styled'

interface INewsProps {
  image: string;
  title: string;
  date: number | string;
  descriptionCurto?: string;
  handleBtn: React.MouseEventHandler;
}

export function Card({ image, title, date, descriptionCurto, handleBtn }: INewsProps) {
  return (
    <CardNewsContainer>
      <ImageCardNews src={image} />
      <TitleCardNews>{title}</TitleCardNews>
      <DateCardNews>{date}</DateCardNews>
      <DescriptionCardNews>{descriptionCurto}</DescriptionCardNews>
      <Button onClick={handleBtn}>Veja mais</Button>
    </CardNewsContainer>
  )
}


