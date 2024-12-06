import "./GameControls.css";

const GameControls = ({ gameOn, onDraw, onReshuffle, count, stopDraw }) => {
	return (
		<div>
			<p className="GameControls-count-p">
				Cards remaining: <span className="GameControls-count">{count}</span>
			</p>
			<div className="GameControls-btns">
				{!gameOn && count > 0 && <button onClick={onDraw}>Draw Card</button>}
				{gameOn && count > 0 && (
					<button className="GameControls-stop" onClick={stopDraw}>
						Stop Draw
					</button>
				)}
				{count === 0 && <button onClick={onReshuffle}>Reshuffle Cards</button>}
			</div>
		</div>
	);
};

export default GameControls;
