import paths from "@/utills/paths";
import Image from "next/image";
import Link from "next/link";

interface Props {
  drinks: [
    {
      idDrink: string;
      strDrink: string;
      strDrinkThumb: string;
    }
  ];
}

export default function DrinksList({ drinks }: Props) {
  const renderDrinks = () =>
    drinks.map((drink) => (
      <li key={drink.idDrink}>
        <Link
          href={paths.drinks.byId(drink.idDrink)}
          className="text-xl font-medium"
        >
          <div className="relative h-48 mb-4">
            <Image
              sizes={`(max-width:768px) 100vw, (max-width:1200px) 50vw`}
              src={drink.strDrinkThumb}
              fill
              alt={drink.strDrink}
              className="rounded-md object-cover"
            />
          </div>
          {drink.strDrink}
        </Link>
      </li>
    ));
  return <ul className="grid sm:grid-cols-2 gap-6 mt-6">{renderDrinks()}</ul>;
}
