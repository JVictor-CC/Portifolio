import { motion } from 'framer-motion'
import { animation } from '../lib/framerAnimations'
import CertificateUff from '../assets/diploma_uff.pdf'
import CertificateUffPreview from '../assets/diploma_uff_preview.png'
import authorshipDeclaration from '../assets/autoria_artigo.pdf'
import authorshipDeclarationPreview from '../assets/autoria_artigo_preview.png'

const Documents = () => {
  const docs = [
    {
      downloadUrl: CertificateUff,
      imageUrl: CertificateUffPreview,
      text: 'Diploma Ciência da Computação UFF',
    },
    {
      downloadUrl: authorshipDeclaration,
      imageUrl: authorshipDeclarationPreview,
      text: 'Declaração de Autoria de Artigo',
    },
  ]
  return (
    <motion.div
      variants={animation(1)}
      initial="hidden"
      animate="visible"
      className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4"
    >
      {docs.map((doc, index) => {
        return (
          <motion.div whileHover={{ scale: 1.1 }} key={index} className="min-w-28 max-w-52">
            <a href={doc.downloadUrl} download className="cursor-pointer">
              <img src={doc.imageUrl} alt={doc.text} />
            </a>
            <p className="text-center text-xs mt-2">{doc.text}</p>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default Documents
