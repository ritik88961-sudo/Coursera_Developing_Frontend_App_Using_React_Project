const Rating = ({ rating }) => {
  const totalStars = 5; // Total number of stars

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {[...Array(totalStars)].map((_, index) => {
        const wholeNumberStars = Math.floor(rating); // Whole stars (e.g., 3 for 3.1)
        const fractionalStar = rating - wholeNumberStars; // Decimal part (e.g., 0.1 for 3.1)

        // Determine how much to fill the current star
        let starFill = 0;
        if (index < wholeNumberStars) {
          starFill = 1; // Fully fill stars before the decimal part
        } else if (index === wholeNumberStars) {
          starFill = fractionalStar; // Partially fill the next star
        }

        return (
          <div
            key={index}
            style={{
              position: "relative",
              width: "24px",
              height: "24px",
              display: "inline-block",
            }}
          >
            <span
              style={{
                color: "gray",
                fontSize: "30px",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              ☆
            </span>
            <span
              style={{
                color: "orange",
                fontSize: "30px",
                position: "absolute",
                top: 0,
                left: 0,
                overflow: "hidden",
                width: `${starFill * 100}%`, // Adjust width based on the fill percentage
                whiteSpace: "nowrap",
              }}
            >
              ★
            </span>
          </div>
        );
      })}
      {/* Display the numeric rating */}
      <div style={{ position: "relative", top: "10px" }}>
        <span style={{ marginLeft: "8px", fontSize: "20px" }}>{rating}</span>
      </div>
    </div>
  );
};

export default Rating;
