import { useField } from "../../hooks/useField";
import { Button, H1, IconLarge, Select } from "../styled-components";
import { FormSelection } from "./FormSelection";
import { MenuSelection } from "./MenuSelection";
import { MenuTltle } from "./MenuTitle";

export const MenuPage = ({
  handleInit,
  selectCategorie,
  selectDifficult,
  setSelectCategorie,
  setSelectDificulty,
}) => {
  const { onChange: onChangeCategorie } = useField(setSelectCategorie);
  const { onChange: onChangeDificulty } = useField(setSelectDificulty);
  return (
    <div>
      <MenuTltle>
        <IconLarge
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </IconLarge>
        <H1>Quiz Game</H1>
      </MenuTltle>
      <MenuSelection>
        <FormSelection hg={30} submit={handleInit}>
          <Select
            name="select"
            value={selectCategorie}
            onChange={onChangeCategorie}
          >
            <option>Select Category</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musicals &amp; Theatres</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="17">Science &amp; Nature</option>
            <option value="18">Science: Computers</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Entertainment: Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">
              Entertainment: Japanese Anime &amp; Manga
            </option>
            <option value="32">Entertainment: Cartoon &amp; Animations</option>
          </Select>
          <Select
            name="select"
            value={selectDifficult}
            onChange={onChangeDificulty}
            id="select"
          >
            <option value="">Select Dificulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Select>
          <Button>Iniciar</Button>
        </FormSelection>
      </MenuSelection>
    </div>
  );
};
