import { useState, useEffect } from "react";
import axios from "axios";

const useDeck = () => {
	const CARDS_URL = "https://deckofcardsapi.com/api/deck";
	const [deckId, setDeckId] = useState(null);

	useEffect(() => {
		const getDeck = async () => {
			try {
				const response = await axios.get(`${CARDS_URL}/new/shuffle/?deck_count=1`);
				setDeckId(response.data.deck_id);
			} catch (error) {
				console.log("Error getting the deck", error);
			}
		};
		getDeck();
	}, []);
	return deckId;
};

export default useDeck;
