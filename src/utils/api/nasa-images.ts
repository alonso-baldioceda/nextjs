import axios from "axios";

interface ImageData {
  title: string;
  url: string;
  explanation: string;
}

const fetchImages = async (
  apiUrl: string,
  apiKey: string,
  setImageDataList: React.Dispatch<React.SetStateAction<ImageData[]>>
) => {
  const currentDate = new Date();
  const promises: Promise<any>[] = [];

  // Make 30 requests, going back one day at a time
  for (let i = 0; i < 30; i++) {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() - i);
    const formattedDate = date.toISOString().split("T")[0];
    const url = `${apiUrl}?api_key=${apiKey}&date=${formattedDate}`;
    promises.push(axios.get<ImageData>(url));
  }

  try {
    const responses = await Promise.all(promises);
    const imageList = responses.map((response) => response.data);
    setImageDataList(imageList);
  } catch (error) {
    console.error("Error fetching data from NASA API:", error);
  }
};

export default fetchImages;
