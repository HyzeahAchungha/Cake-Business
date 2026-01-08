import search from "../../../../src/assets/search.svg";
export const SearchButton = () => {
  return (
    <button className="text-[lab(35.6337_-1.58697_-10.8425)] bg-transparent caret-transparent min-h-0 min-w-0 text-sm hover:text-[lab(24.9401_45.2703_-51.2728)] transition-colors">
      <img
        src={search}
        alt="Icon"
        className="box-border caret-transparent h-5 w-5 "
      />
    </button>
  );
};