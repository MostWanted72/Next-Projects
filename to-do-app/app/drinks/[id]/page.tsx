import Image from "next/image";
import Link from "next/link";

interface Props {
  params: {
    id: string;
  };
}

interface SingleDrink {
  strDrink: string;
  strDrinkThumb: string;
}

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const fetchSingleDrink = async (id: string) => {
  const response = await fetch(`${url}${id}`);
  return response.json();
};

export default async function SingleDrinkPage({ params }: Props) {
  const data = await fetchSingleDrink(params.id);
  const { strDrink, strDrinkThumb }: SingleDrink = data?.drinks[0];
  console.log("check this part", strDrinkThumb);

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        Back to drinks
      </Link>
      <Image
        src={strDrinkThumb}
        width={300}
        height={300}
        className="w-48 h-48 rounded-lg shadown-lg mb-4s"
        priority
        alt={strDrink}
      />
      <h1 className="text-xl mb-8">{strDrink}</h1>
    </div>
  );
}
