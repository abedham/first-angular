export class Joke {
    setup: string;
    punchline: string;
    hide: boolean;
    constructor(setup, punchline) {
        this.setup = setup;
        this.punchline = punchline;
        this.hide = false;
    }
    toggle() {
        this.hide = !this.hide;
    }
}
