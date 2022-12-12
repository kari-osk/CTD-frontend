import React from 'react'
import { Button } from './styled'

interface IButtonProps {
  arialabel?: string;
  primaryBtn: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function QuoteButton({ arialabel, primaryBtn, onClick }: IButtonProps) {
  return (
    <>
      {primaryBtn === true
        ?
        <Button
          aria-label={arialabel ? "Obter citação" : "Obter citação aleatória"}
          onClick={onClick}
        >
          {arialabel ? "Obter citação" : "Obter citação aleatória"}
        </Button>
        :
        <Button
          secondaryColor={true}
          onClick={onClick}>
          Apagar
        </Button>
      }
    </>
  )
}

