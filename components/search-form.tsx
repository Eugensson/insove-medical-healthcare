import { RiSearchLine } from "react-icons/ri";

interface SearchFormProps {
  containerStyles?: string;
  labelStyles?: string;
  inputStyles?: string;
}

export const SearchForm = ({
  containerStyles,
  labelStyles,
  inputStyles,
}: SearchFormProps) => {
  return (
    <form className={containerStyles}>
      <label htmlFor="search-input" className={labelStyles}>
        <RiSearchLine size={24} className="text-accent" />
      </label>
      <input
        type="text"
        id="search-input"
        className={inputStyles}
        placeholder="Search..."
      />
    </form>
  );
};
