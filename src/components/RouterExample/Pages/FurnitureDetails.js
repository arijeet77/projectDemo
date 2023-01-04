import { useParams } from "react-router-dom";

const FurnitureDetails = () => {
  const params = useParams();
  const furnitureDetails = [
    {
      id: "1",
      name: "HomeTown Henley Multipurpose Cabinet",
      material: "Wood",
      dimensions: "40D x 60W x 90H",
      price: 4500,
    },
    {
      id: "2",
      name: "Wakefit Study Table",
      material: "Wood",
      dimensions: "60D x 90W x 75H",
      price: 2700,
    },
    {
      id: "3",
      name: "Blue Diamond Orange leathrete Wing Chair",
      material: "Teak Wood",
      dimensions: "81D x 79W x 122H",
      price: 19500,
    },
  ];

  const result = furnitureDetails.filter((p) => p.id === params.furnitureId);

  return (
    <div>
      <h1>Furniture Details</h1>
      <div>
        {result.map((furniture) => (
          <div>
            <p>Name: {furniture.name}</p>
            <p>Material: {furniture.material}</p>
            <p>Dimensions: {furniture.dimensions}</p>
            <p>Cost: {furniture.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FurnitureDetails;
