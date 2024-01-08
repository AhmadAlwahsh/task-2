// FDUC => Fetch Data and Update Context


export default async () => {
  const api = await fetch(
    "https://api.mockfly.dev/mocks/e621206b-5846-4ee2-b828-e0fca58f1ae7/articles"
  );
  return api.json();
}