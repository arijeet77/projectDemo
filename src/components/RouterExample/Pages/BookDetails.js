import { useParams } from "react-router-dom";

const BookDetails = () => {
  const params = useParams();
  const bookDetails = [
    {
      id: "1",
      name: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      type: "Paperback",
      publisher: "Penguin Random House",
      pages: 512,
      price: 450,
    },
    {
      id: "2",
      name: "Wings of Fire",
      author: "A. P. J. Abdul Kalam",
      type: "Paperback",
      publisher: "Universities Press",
      pages: 180,
      price: 100,
    },
    {
      id: "3",
      name: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      type: "Hardcover",
      publisher: " Penguin",
      pages: 512,
      price: 559,
    },
    {
      id: "4",
      name: "The Blue Umbrella",
      author: "Ruskin Bond",
      type: "Paperback",
      publisher: "Rupa Publications India",
      pages: 90,
      price: 94,
    },
    {
      id: "5",
      name: "The 48 Laws of Power",
      author: "Robert Greene",
      type: "Paperback",
      publisher: "Profile Books",
      pages: 480,
      price: 499,
    },
  ];

  const result = bookDetails.filter((p) => p.id === params.bookId);

  return (
    <div>
      <h1>Book Details</h1>
      <div>
        {result.map((book) => (
          <div>
            <p>Name: {book.name}</p>
            <p>Author: {book.author}</p>
            <p>Publisher: {book.publisher}</p>
            <p>Type: {book.type}</p>
            <p>Pages: {book.pages}</p>
            <p>Cost: {book.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookDetails;
