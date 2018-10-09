import axios from 'axios';

export const getCards = async () => {
    try {
        const api = axios.create({ baseURL: "https://deckofcardsapi.com/api/deck/" });
        const firstResponse = await api.get('new/shuffle/?deck_count=1', '');
        const deckID = firstResponse.data.deck_id;
        const secondResponse = await api.get(deckID + '/draw/?count=52', '');
        return secondResponse.data.cards;
    }
    catch (error) {
        throw error.response.data;
    }
}