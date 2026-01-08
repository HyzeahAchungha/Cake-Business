import shoppingbag from "../../../../src/assets/shopping-bag.svg";
export const CartButton = () => {
  return (
    <div className="relative box-border caret-transparent">
      <button className="text-[lab(35.6337_-1.58697_-10.8425)] bg-transparent caret-transparent text-center p-2 rounded-[30px]">
        <img
          src={shoppingbag}
          alt="Icon"
          className="box-border caret-transparent h-5 w-5"
        />
      </button>
    </div>
  );
};