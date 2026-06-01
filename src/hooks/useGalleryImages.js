import { useState, useEffect } from "react";
import axiosInstance from "../service/axiosInstance";

const BACKEND_URL = "http://localhost:5000";

/**
 * Custom hook to fetch all gallery images from the backend.
 * @returns {{ imageMap: Object, loading: Boolean }}
 * imageMap is keyed by the image title (e.g. "R4", "Dish") for easy lookup.
 */
const useGalleryImages = () => {
  const [imageMap, setImageMap] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axiosInstance.get("/gallery");
        const map = {};
        response.data.forEach((img) => {
          // Key by title for easy lookup, e.g. map["R4"] = "http://localhost:5000/uploads/..."
          map[img.title] = `${BACKEND_URL}${img.imageUrl}`;
        });
        setImageMap(map);
      } catch (err) {
        console.error("Failed to fetch gallery images:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  return { imageMap, loading };
};

export default useGalleryImages;
