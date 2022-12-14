import { useEffect, useState } from "react";
import { AssinarImage } from "../../assets";
import { obterNoticias } from "./fakeRest";
import { ModalComponent } from "./ModalComponent";
import { Card } from "./Card";
import { Container, NewsList, Title } from "./styled";

// Componente News possui três cards, se for a modalida premium aparece o botão para assinar a newsletter, caso contrário o botão não é mostrado.
// CLicando no botão "Veja mais" o modal é aberto com a notícia
// Dentro do modal, clicando o botão "x" o modal é fechado

export interface INoticiasNormalizadas {
  id: number;
  title: string;
  description: string;
  date: number | string;
  premium: boolean;
  image: string;
  descriptionCurto?: string;
}

export const News = () => {
  const [newsInfo, setNewsInfo] = useState<INoticiasNormalizadas[]>([]);
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

  useEffect(() => {
    const obterInformacoes = async () => {
      const resposta = await obterNoticias();

      const data = resposta.map((data) => {
        const title = data.title
          .split(" ")
          .map((str) => {
            return str.charAt(0).toUpperCase() + str.slice(1);
          })
          .join(" ");

        const hora = new Date();
        const minutosDecorrido = Math.floor(
          (hora.getTime() - data.date.getTime()) / 60000
        );

        return {
          id: data.id,
          title,
          description: data.description,
          date: `Faz ${minutosDecorrido} minutos`,
          premium: data.premium,
          image: data.image,
          descriptionCurto: data.description.substring(0, 100),
        };
      });
      setNewsInfo(data);
    };
    obterInformacoes();
  }, []);


  return (
    <Container>
      <Title>Notícias dos Simpsons</Title>
      <NewsList>
        {
          newsInfo.map((news) => (
            <Card key={news.id}
              image={news.image}
              title={news.title}
              date={news.date}
              descriptionCurto={news.descriptionCurto}
              handleBtn={() => setModal(news)} />
          ))
        }

        {
          modal
            ? (
              modal.premium
                ? (
                  <ModalComponent
                    image={AssinarImage}
                    title="Asine a newsletter"
                    description="Assine nossa newsletter e receba novidades de nossos personagens favoritos"
                    premium={true}
                    handleModal={() => setModal(null)}
                    handleModalSubscription={() => setTimeout(() => {
                      alert("Inscrito com sucesso. Agora nós deve $ 100.000,00!");
                      setModal(null);
                    }, 500)}
                    buttonName="Assinar"
                  />
                )
                : (
                  <ModalComponent
                    image={modal.image}
                    title={modal.title}
                    description={modal.description}
                    premium={modal.premium}
                    handleModal={() => setModal(null)}
                  />
                )
            )
            : null}
      </NewsList>
    </Container>
  );
};



