const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  await new Promise((r) => setTimeout(r, 1000));
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("failed to fetch");
  }
  return response.json();
};

export default async function DrinksPage() {
  const drinks = await fetchDrinks();
  console.log(drinks);
  return (
    <div>
      <h1 className="text-7xl">Drinks Page</h1>
    </div>
  );
}
