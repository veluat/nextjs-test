import Image from 'next/image'
import {CharacterType} from '@/assets/hooks/useCharacters'
import styles from './CharacterCard.module.scss'

type PropsType = {
  character: CharacterType
}

export const CharacterCard = ({character}: PropsType) => {

  return (
    <div className={styles.card}>
      <div>{character.name}</div>
      <Image src={character.image}
             width={300}
             height={300}
             alt={`Picture of ${character.name}`}/>
    </div>
  )
}