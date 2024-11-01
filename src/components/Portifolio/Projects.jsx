import ProjectCard from '../ProjectCard'

const Projects = () => {
  const projectData = [
    {
      imageSrc: 'https://via.placeholder.com/150', // Substitua pela URL da imagem do projeto
      projectName: 'ChatGPT clone',
      description: 'Uma aplicação fullstack de chat com inteligencia artificial',
      tools: ['React', 'Node', 'MongoDB', 'openai API'],
      url: 'https://github.com/JVictor-CC/My-Chat-GPT',
    },
    {
      imageSrc: 'https://via.placeholder.com/150', // Substitua pela URL da imagem do projeto
      projectName: 'Gerenciador de Tarefas',
      description: 'Uma aplicação web para gerenciar tarefas diárias e colaborar em equipes.',
      tools: ['React', 'Node.js', 'PostgreSQL', 'Prisma'],
      url: '',
    },
    {
      imageSrc: 'https://via.placeholder.com/150', // Substitua pela URL da imagem do projeto
      projectName: 'Análise de Sentimentos',
      description: 'Projeto de análise de sentimentos utilizando técnicas de machine learning.',
      tools: ['Python', 'Scikit-learn', 'Pandas'],
      url: '',
    },
  ]

  return (
    <div className="space-y-8">
      {projectData.map((project, index) => (
        <ProjectCard
          key={index}
          imageSrc={project.imageSrc}
          projectName={project.projectName}
          description={project.description}
          tools={project.tools}
          url={project.url}
        />
      ))}
    </div>
  )
}

export default Projects
