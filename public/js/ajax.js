export const getData = async (url) => {
  try {
    const res = await fetch(`http://localhost:3010${url}`);
    return await res.json();
  } catch (error) {
    return { error };
  }
};
