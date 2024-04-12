import React, { useState, useEffect } from "react";

function Reviews() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://o-complex.com:1337/reviews");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Пустой массив зависимостей, чтобы запрос выполнялся только при монтировании компонента

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="container">
      <div className="row gap-3">
        <div className="col-1"></div>
        {data.map((review, index) => (
          <div key={index} className="col-md-5   col-sm-12 col-5 my-3 bg-figma   p-4 rounded-4">
            <h2>отзыв:{index + 1}</h2>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
