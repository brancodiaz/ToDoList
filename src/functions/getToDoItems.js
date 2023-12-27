const getToDoItems = async () => {
    const API_URL = 'https://localhost:7046/api/ToDo';
    try {
        const response = await fetch(API_URL);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
  };
  
  export default fetchDataFromApi;