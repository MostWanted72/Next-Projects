const url = "https://api.unsplash.com/";

export default async function DrinksPage() {
  const response = await fetch(url);
  console.log(response);
  return (
    <div>
      <h1 className="text-7xl">Drinks Page</h1>
    </div>
  );
}
