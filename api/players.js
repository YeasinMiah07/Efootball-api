import { players } from '../players';

export default function handler(req, res) {
    const randomPlayer = players[Math.floor(Math.random() * players.length)];
    res.status(200).json(randomPlayer);
}
