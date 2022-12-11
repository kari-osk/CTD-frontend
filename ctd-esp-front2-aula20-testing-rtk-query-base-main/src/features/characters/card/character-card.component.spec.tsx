// import { queryByText } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { addCharacterToFollowingList } from "features/following/following.slices";
import { type } from "os";
import { store } from "store/store";
import CharacterCardComponent from "./character-card.component";


describe('CharacterCardComponent', () => {
  // describe('when unfavorite button is clicked', () => {
  //   beforeEach(() => {
  //     store.dispatch(addCharacterToFollowingList(1))
  //   })
  //   it('unfavorite the character', () => {

  //   })
  // })
  describe('CharacterCardComponent', () => {
    it('check if the character is favorite', async () => {
      // render(<CharacterCardComponent character={character} />)
      // const starFavorite = queryByText('is_favorite')
    })
  })
})