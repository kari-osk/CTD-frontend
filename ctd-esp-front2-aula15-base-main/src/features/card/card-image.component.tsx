import { FC, PropsWithChildren } from 'react';


const CardImage: FC<PropsWithChildren<object>> = ({ children }: PropsWithChildren<object>) => (
  <div className={'card-image'}>{children}</div>
  // <Image>{children}</Image>
);

export default CardImage;
