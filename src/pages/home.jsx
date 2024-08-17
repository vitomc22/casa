import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/spartan.jpeg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Sua carreira começa conosco
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
              Nosso objetivo é capacitar os participantes com ferramentas e conhecimentos essenciais
              para enfrentar os desafios de um concurso público, 
              desde a escolha do edital até a preparação final para a prova.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Público-Alvo
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
              Este curso é destinado a todos que desejam se preparar para concursos públicos, 
              seja para uma primeira tentativa ou para quem já está na jornada e busca aprimorar seus resultados.
                <br />
                <br />
                Ao final deste curso, os participantes estarão melhor preparados para enfrentar as etapas de um concurso público com confiança e eficácia, 
                aumentando suas chances de sucesso na conquista de uma carreira no serviço público. Preparem-se para transformar seus estudos em resultados!
              </Typography>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="./img/casa_logo2.jpg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal">Seja um guerreiro!</Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    📞Alô, Guerreiro(a) de plantão!😁
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                  Aqui você encontra o melhor time de professores, materiais exclusivos, cronograma/planejamento individual, estudo direcionado e muito mais! Concedemos SUPORTE TOTAL até a sua aprovação!✅
                  Clique no botão abaixo e saiba mais!
                  </Typography>
                  <a
                   href="https://whats.link/falecomacasadosguerreirosconcursos"
                   target="_blank"
                    >
                    <Button variant="gradient" size="sm" fullWidth>
                       Fale conosco
                    </Button>
                  </a>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle section="Nosso time" heading="Aqui nós temos heróis">
            Conheça nossos professores e venha se tornar um guerreiro!
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="Concursos Públicos" heading="⚡️ Do zero até a aprovação">
          Prepare-se com determinação e foco, e lembre-se: cada hora de estudo é um passo a mais na direção de uma vida mais segura, estável e recompensadora.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle section="Entre em contato!" heading="Como podemos te ajudar?">
            Clique no botão abaixo e venha nos conhecer.
          </PageTitle>
          <a
                   href="https://whats.link/falecomacasadosguerreirosconcursos"
                   target="_blank"
                    >
           <Button color="green" variant="gradient" size="lg" className="mt-8" fullWidth>
              Send Message
            </Button>            
          </a>                    
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
