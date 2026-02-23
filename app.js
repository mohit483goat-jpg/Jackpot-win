// Betting System Logic

class BettingSystem {
    constructor() {
        this.wallet = 0;
        this.history = [];
    }

    // Add funds to wallet
    addFunds(amount) {
        this.wallet += amount;
        console.log(`Added ${amount} to wallet. Current balance: ${this.wallet}`);
    }

    // Place a bet
    placeBet(amount, betType, betValue) {
        if (amount > this.wallet) {
            console.log('Insufficient funds in wallet. Bet cannot be placed.');
            return;
        }
        this.wallet -= amount;
        const result = this.calculateResult(betType, betValue);
        this.history.push({ amount, betType, betValue, result });
        console.log(`Bet placed: ${amount} on ${betType} ${betValue}. Result: ${result}`);
    }

    // Calculate result
    calculateResult(betType, betValue) {
        // Simulate the outcome
        // Here you would have your logic for number and color betting.
        if (betType === 'number') {
            const payout = 9; // 9x payout for number bets
            let outcome = Math.floor(Math.random() * 36); // Simulate number outcome (0-35)
            return outcome === betValue ? outcome * payout : 0; // Return winnings or 0
        } else if (betType === 'color') {
            const colors = ['red', 'black'];
            const outcome = colors[Math.floor(Math.random() * colors.length)];
            return outcome === betValue ? 2 : 0; // 2x payout for color bets
        }
    }
}

// Example Usage
const bettingSystem = new BettingSystem();
bettingSystem.addFunds(100);
bettingSystem.placeBet(10, 'number', 7); // betting on number 7
bettingSystem.placeBet(5, 'color', 'red'); // betting on red
