export const getData = async (url: string) => {
  //  chace : force-cache tidak pakai loading
  // chace : no-store pakai loading

  // const res = await fetch("https://fakestoreapi.com/product", {
  //   cache: "no-store",
  // });
  const res = await fetch(url, {
    cache: "force-cache",
    next: {
      tags: ["products"],
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
