  

export function generateStaticParams() {
  return [{ name: "iphone" }, { name: "samsung" }, { name: "nokia" }];
}

export default async function productname({ params }) {
  const { name } = await params;
  return <h1>product {name}</h1>;
}
