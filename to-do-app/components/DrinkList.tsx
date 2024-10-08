import Link from "next/link";

interface Props {
  drinks: [
    {
      idDrink: string;
      strDrink: string;
    }
  ];
}

export default function DrinksList({ drinks }: Props) {
  const renderDrinks = () =>
    drinks.map((drink) => (
      <Link
        key={drink.idDrink}
        href={`/drinks/${drink.idDrink}`}
        className="text-xl font-medium"
      >
        {drink.strDrink}
      </Link>
    ));
  return <ul className="menu menu-vertical pl-8">{renderDrinks()}</ul>;
}
