import {useCharacters} from '@/assets/hooks/useCharacters'
import {CharacterCard} from '@/components/CharacterCard/CharacterCard'
import {HeadMeta} from '@/components/HeadMeta/HeadMeta'
import {getLayout} from '@/components/Layout/Layout'
import styles from '@/styles/Home.module.css'

function Characters() {
  const characters = useCharacters()

  return (
    <>
      <HeadMeta title={'Characters'}/>
      <div className={styles.cardsWrap}>
        {characters && characters.map(character => (
          <CharacterCard key={character.id} character={character}/>
        ))}
      </div>
    </>
  )
}

Characters.getLayout = getLayout
export default Characters

