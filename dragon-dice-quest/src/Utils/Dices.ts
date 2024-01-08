

interface DiceProps {
    sides: number;     
    count: number;     
    modifier?: number;  

}

export const rollDice = (rolls: DiceProps | DiceProps[]): number => {
    // Se rolls não for um array, transforme-o em um.
    const rollsArray = Array.isArray(rolls) ? rolls : [rolls];

    let total = 0;
    for (const roll of rollsArray) {
        for (let i = 0; i < roll.count; i++) {
            const diceRoll = Math.floor(Math.random() * roll.sides) + 1;
            total += diceRoll + (roll.modifier || 0);
        }
    }
    return total;
};