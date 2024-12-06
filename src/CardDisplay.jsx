import "./CardDisplay.css";

const CardDisplay = ({ card, count }) => {
	return (
		<div className="CardDisplay">
			{count > 0 && card && <img className="CardDisplay-image" src={card} alt="Card" />}
			{count === 52 && <img className="CardDisplay-image" src="https://deckofcardsapi.com/static/img/back.png" />}
			{count === 0 && <p className="CardDisplay-errorMsg">Error: No cards remaining!</p>}
		</div>
	);
};

export default CardDisplay;
