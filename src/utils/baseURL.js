const getBaseUrl = () => {
  if (window.location.hostname === "localhost") {
    return "http://localhost:5000"; // For local development
  } else {
    return "https://book-store-backend-green-delta.vercel.app/"; // For production
  }
};

export default getBaseUrl;
