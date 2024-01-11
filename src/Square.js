const Square = ({ colorValue }) => {
  return (
    <section 
    className="square"
    style={{backgroundColor: colorValue}}
    >
        <p>{colorValue ? colorValue : "empty value"}</p>
      
    </section >
  );
}

Square.defaultProps = {
    colorValue: "empty color value"
}

export default Square;
