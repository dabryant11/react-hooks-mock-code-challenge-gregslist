import React, { useState } from "react";

function ListingCard({
  id,
  description,
  image,
  location,
  listings,
  setListings,
  search,
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  function toggleFav() {
    setIsFavorite(!isFavorite);
  }

  function deleteListing() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    });
    setListings(listings.filter((listing) => listing.id !== id));
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={toggleFav} className="emoji-button favorite active">
            ★
          </button>
        ) : (
          <button onClick={toggleFav} className="emoji-button favorite">
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={deleteListing} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
