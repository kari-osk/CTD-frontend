import React from 'react'
import { Button } from './styled'

interface IButtonProps {
  arialabel?: string;
  primaryButton: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function QuoteButton({ arialabel, primaryButton, onClick }: IButtonProps) {
  return (
    <>
      {primaryButton === true
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

