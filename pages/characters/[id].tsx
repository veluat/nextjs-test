import {CharacterCard} from '@/components/CharacterCard/CharacterCard'
import {HeadMeta} from '@/components/HeadMeta/HeadMeta'
import {getLayout} from '@/components/Layout/Layout'
import {useCharacter} from '@/assets/hooks/useCharacter'
import styles from '@/styles/Home.module.css'

function Character() {
  const character = useCharacter()

  return (
    <>
      <HeadMeta title={'Character'}/>
      {character && (
        <div className={styles.charactersWrap}>
          <CharacterCard character={character}/>
          <div className={styles.characters}>
            <span>Species: {character.species}</span>
            <span>Gender: {character.gender}</span>
            <span>Status: {character.status}</span>
            <span>Location: {character.location.name}</span>
          </div>
        </div>)
      }
    </>
  )
}

Character.getLayout = getLayout
export default Character