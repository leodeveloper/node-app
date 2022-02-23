The name of the game is “Robots Guessing Numbers”. Here’s how it works:
You have two processes written in node.js. One is the host, and the other is a player. The host
process generates a random number between 1 and 100. That’s the winning number.
The player process needs to guess that number. It should communicate locally with the host
process to guess the number. If it gets it wrong, the player should send another guess. This
continues until the number is found.
It’s up to you to decide how these processes should communicate with each other, and it’s up to
you to decide how to guess which number to try next.
When the player process has guessed the host’s number, the game begins again.
