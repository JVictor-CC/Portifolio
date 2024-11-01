import ExperienceCard from '../ExperienceCard'
import Habilities from '../Habilities'

const Experience = () => {
  const expereinceData = [
    {
      date: '2024 — PRESENT',
      enterprise: 'Freelancer',
      position: 'Desenvolvedor Web Freelancer',
      description:
        'Desenvolvi projetos Fullstack como e-commerce, site-cardapio para restaurante e Paginas de Produto.',
    },
    {
      date: '2023 — 2024',
      enterprise: 'UFF',
      position: 'Iniciaçao Científica',
      description:
        'Projeto de pesquisa desenvolvido em uma equipe composta por 3 alunos em conunto com a orientadora. Projeto na área de engenharia dirigida a modelos (MDE)',
    },
  ]

  return (
    <>
      <div className="space-y-8">
        {expereinceData.map((experience, index) => (
          <ExperienceCard
            key={index}
            date={experience.date}
            enterprise={experience.enterprise}
            position={experience.position}
            description={experience.description}
          />
        ))}
      </div>
      <h1 className="my-5 text-xl font-medium">Habilidades</h1>
      <Habilities />
    </>
  )
}

export default Experience
