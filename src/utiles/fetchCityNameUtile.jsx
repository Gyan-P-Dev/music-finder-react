export const fetchCityName = async (lat, lng) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const endpoint = `${process.env.REACT_APP_OPENCAGEDATA_API}?q=${lat}+${lng}&key=${API_KEY}`;
  try {
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data = await response.json();
    if (data?.results?.length > 0) {
      return data.results[0].components.city || "City not available";
    }
    return "City not available";
  } catch (error) {
    console.error("Error fetching city:", error);
    return "Error retrieving city";
  }
};
