import React, { useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ search, listings, setListings }) {
  const [sortBy, setSortBy] = useState("");
  const filteredListings = listings.filter((listing) =>
    listing.description.toLowerCase().includes(search.toLowerCase())
  );

  const sortedListings = filteredListings.sort((listing1, listing2) => {
    if (!sortBy) {
      return 0;
    } else {
      return listing1[sortBy].localeCompare(listing2[sortBy]);
    }
  });

  const allListings = sortedListings.map((listing) => {
    return (
      <ListingCard
        key={listing.id}
        id={listing.id}
        description={listing.description}
        image={listing.image}
        location={listing.location}
        listings={listings}
        setListings={setListings}
      />
    );
  });

  function sortListings(e) {
    setSortBy(e.target.value);
    // const sortedListings = filteredListings.sort((listing1, listing2) => {
    //   if (!sortBy) {
    //     return 0;
    //   } else {
    //     return listing1[sortBy].localeCompare(listing2[sortBy]);
    //   }
    // });
    // return setListings(sortedListings);
  }

  return (
    <main>
      <select onChange={sortListings}>
        <option select hidden>
          Sort By
        </option>
        <option value="description"> Description</option>
        <option value="location"> Location</option>
        {/* <option value="price"> price</option> */}
      </select>

      <ul className="cards">{allListings}</ul>
    </main>
  );
}

export default ListingsContainer;
