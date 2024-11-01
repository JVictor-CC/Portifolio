import StudiesCard from '../StudiesCard'

const Studies = () => {
  const expereinceData = [
    {
      date: '2017 — 2024',
      institution: 'Universidade Federal Fluminense',
      course: 'Bacharelado em Ciência da Computação',
    },
    {
      date: '2024 — 2024',
      institution: 'Coursera & Google',
      course: 'Certificado Profissional em Analise de Dados da Google',
    },
  ]

  return (
    <div className="space-y-8">
      {expereinceData.map((experience, index) => (
        <StudiesCard
          key={index}
          date={experience.date}
          institution={experience.institution}
          course={experience.course}
        />
      ))}
    </div>
  )
}

export default Studies
