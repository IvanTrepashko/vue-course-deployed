Vue.createApp({
    data() {
        return {
            playerHP: 100,
            monsterHP: 100,
            bestScore: 0,
            turns: 0,
            isActive: false,
            winner: null,
            logs: []
        }
    },
    methods: {
        attackMonster() {
            let playerDamage = getRandomNumber(7, 15);
            if (this.monsterHP - playerDamage <= 0) {
                this.monsterHP = 0;
                this.addLogMessage('Player', 'attacks', playerDamage)
            } else {
                this.monsterHP -= playerDamage;
                this.addLogMessage('Player', 'attacks', playerDamage)
                this.attackPlayer();
            }
            this.turns++;
        },
        specialAttackMonster() {
            let playerDamage = getRandomNumber(13, 18);
            if (this.monsterHP - playerDamage <= 0) {
                this.monsterHP = 0;
                this.addLogMessage('Player', 'attacks', playerDamage);
            } else {
                this.monsterHP -= playerDamage;
                this.addLogMessage('Player', 'attacks', playerDamage);
                this.attackPlayer();
            }
            this.turns++;
        },
        heal() {
            let healValue = getRandomNumber(15, 25);
            if (this.playerHP + healValue >= 100) {
                this.playerHP = 100;
                this.addLogMessage('Player', 'heals', healValue);
            } else {
                this.playerHP += healValue;
            }
            
            this.addLogMessage('Player', 'heals', healValue);
            this.attackPlayer();
            this.turns++;

        },
        surrender() {
            this.winner = "monster";
        },
        attackPlayer() {
            let monsterDamage = getRandomNumber(10, 18);
            if (this.playerHP - monsterDamage <= 0) {
                this.playerHP = 0;
                this.addLogMessage('Monster', 'attacks', monsterDamage);
            } else {
                this.playerHP -= monsterDamage;
            }
            this.addLogMessage('Monster', 'attacks', monsterDamage);
        },
        start() {
            this.turns = 0;
            this.playerHP = 100;
            this.monsterHP = 100;
            this.isActive = true;
            this.winner = null;
            this.logs = [];
        },
        addLogMessage(target, action, value) {
            this.logs.unshift({
                actionBy: target,
                actionType: action,
                actionValue: value
            });
        },
        getActionTarget(value) {
            if (value === "Player") {
                return 'log--player';
            } else {
                return 'log--monster'
            }
        },
        getActionType(value) {
            if (value === 'attacks') {
                return 'log--damage';
            } else {
                return 'log--heal';
            }
        },
        checkForWinner() {
            if (this.playerHP <= 0 && this.monsterHP) {
                this.winner = "draw";
            } else if (this.playerHP <= 0) {
                this.winner = "monster";
            } else if (this.monsterHP <= 0) {
                this.winner = "player";
                this.bestScore = this.turns;
            }
        }
    },
    computed: {
        canUseSpecialAttack() {
            return (this.turns % 3 !== 0 && this.turns !== 0);
        },
        canUseHeal() {
            return (this.turns % 3 !== 0 && this.turns !== 0);
        },
        playerBarStyles() {
            return { width: this.playerHP + '%'}
        },
        monsterBarStyles() {
            return {width: this.monsterHP + '%'}
        },
        result() {
            switch(this.winner) {
                case 'draw': {
                    return "It's a draw";
                }
                case 'player': {
                    return "It's a victory. Congratulations!";
                }
                case 'monster': {
                    return "You lost. So bad...";
                }
            }
        }
    },
    watch: {
        monsterHP(value) {
            if (value <= 0) {
                this.bestScore = this.turns;
                this.winner = 'player';
            }
        },
        playerHP(value) {
            if (value <= 0 && this.monsterHP <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = "monster";
            }
        }
    }
}).mount("#game")

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}