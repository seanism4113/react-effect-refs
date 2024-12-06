import { useState, useEffect } from "react";
import axios from "axios";
import useDeck from "./useDeck";
import CardDisplay from "./CardDisplay";
import GameControls from "./GameControls";
import "./CardGame.css";

const CardGame = () => {
	const CARDS_URL = "https://deckofcardsapi.com/api/deck";
	const deckId = useDeck();
	const [card, setCard] = useState(null);
	const [count, setCount] = useState(52);
	const [gameOn, setGameOn] = useState(false);

	useEffect(() => {
		if (!gameOn || !deckId || count === 0) return;

		const intervalId = setInterval(async () => {
			try {
				const response = await axios.get(`${CARDS_URL}/${deckId}/draw/?count=1`);
				setCard(response.data.cards[0].image);
				setCount(response.data.remaining);

				if (response.data.remaining === 0) {
					setGameOn(false);
					clearInterval(intervalId);
				}
			} catch (error) {
				console.error("Error drawing a card:", error);
				clearInterval(intervalId);
			}
		}, 1000);

		// Cleanup interval on unmount or game state change
		return () => clearInterval(intervalId);
	}, [gameOn, deckId, count]);

	const drawCards = () => count > 0 && setGameOn(true);

	const stopDraw = () => setGameOn(false);

	const reshuffleCards = async () => {
		try {
			if (!deckId) return;
			await axios.get(`${CARDS_URL}/${deckId}/shuffle`);
			setCount(52);
			setCard(null);
			setGameOn(false);
		} catch (error) {
			console.log("Error reshuffling cards", error);
		}
	};

	return (
		<>
			<h1 className="CardGame-header">Card Game</h1>
			<GameControls gameOn={gameOn} onDraw={drawCards} onReshuffle={reshuffleCards} count={count} stopDraw={stopDraw} />
			<CardDisplay card={card} count={count} />
		</>
	);
};

export default CardGame;
