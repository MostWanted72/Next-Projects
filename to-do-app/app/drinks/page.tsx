import DrinksList from "@/components/DrinkList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("failed to fetch");
  }
  return response.json();
};

export default async function DrinksPage() {
  const drinks = await fetchDrinks();
  return (
    <div>
      <DrinksList drinks={drinks.drinks} />
    </div>
  );
}
