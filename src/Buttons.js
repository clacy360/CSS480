// testing code from internet
const btnArr = [
    ["Toggle Text 1"],
    ["Toggle Text 2"],
    ["Toggle Text 3"],
    ["Toggle Text 4"],
    ["Toggle Text 5"]
  ];
  
  const Button = ({ text, onClick }) => {
    return (
      <button
        style={{ padding: "10px", borderRadius: "4px", width: "150px" }}
        onClick={onClick}
      >
        {text}
      </button>
    );
  };
  
  export const Buttons = ({ onSelect }) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {btnArr.map((btn, index) => (
          <Button key={index} text={btn} onClick={() => onSelect(index)} />
        ))}
      </div>
    );
  };