import React, { useEffect, useState } from "react";
import fetchImages from "../utils/api/nasa-images";
// import Image from "next/image";

interface ImageData {
  title: string;
  url: string;
  explanation: string;
}

const ImagesOfTheDay: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [imageDataList, setImageDataList] = useState<ImageData[]>([]);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (apiKey && apiUrl) {
      fetchImages(apiUrl, apiKey, setImageDataList);
      setLoading(false);
    } else {
      console.error("API key or API URL is not defined.");
    }
  }, []);

  return (
    <>
      <h1 className="text-2xl py-4 font-bold">Images of the last 30 days</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
          <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
            <tr>
              <th className="px-6 py-4">Description</th>
              <th className="px-6 py-4">Image</th>
            </tr>
          </thead>
          <tbody>
            {imageDataList.map((imageData, index) => (
              // Place the content of the imageDataList in a table
              <tr
                key={index}
                className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600"
              >
                <td className="px-6 py-4">
                  <p className="text-xl pb-4">{imageData.title}</p>
                  {imageData.explanation.length > 350 ? (
                    <p>
                      {imageData.explanation.substring(0, 350)}
                      <span className="text-blue-500">...</span>
                    </p>
                  ) : (
                    imageData.explanation
                  )}
                </td>
                <td className="px-6 py-4">
                  {imageData.url.includes("youtube") ? (
                    <img
                      src="/youtube.svg"
                      alt="YouTube"
                      width={200}
                      height={200}
                    />
                  ) : (
                    // <Image
                    //   src="/youtube.svg"
                    //   alt="YouTube"
                    //   width={200}
                    //   height={200}
                    // />
                    <img
                      src={imageData.url}
                      alt={imageData.title}
                      width={500}
                      height={500}
                    />
                    // <Image
                    //   src={imageData.url}
                    //   alt={imageData.title}
                    //   width={500}
                    //   height={500}
                    // />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default ImagesOfTheDay;
