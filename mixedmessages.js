let mixedMessages = {
    _messages: [],

    get messages() {
        return this._messages;
    },

    set messages(messages) {
        messages = this._messages;
    },

    addNewMessage(message, author) {
        let newMessage = {
            message: message,
            author: author
        };

        this.messages.push(newMessage);
    },

    displayRandomMessage() {
        let randomNum = Math.floor(Math.random() * this.messages.length);

        console.log(`\n\n"${this.messages[randomNum].message}"\n\t-${this.messages[randomNum].author}`);
    }
};

mixedMessages.addNewMessage("She would not fail. And she would not let fear choose her path.", "Leigh Bardugo");
mixedMessages.addNewMessage("My humanity is bound up in yours, for we can only be human together.", "Desmond Tutu");
mixedMessages.addNewMessage("Speak your mind even if your voice shakes.", "Maggie Kuhn");
mixedMessages.addNewMessage("Walt's fundamentals for success still ring true. You build the best product you can.\n You give people delivery of exceptional service. You learn from your experience. \nAnd you celebrate success. You never stop growing. You never stop believing.", "The Walt Disney Institute");
mixedMessages.addNewMessage("Everything grand is made from a series of ugly little moments. \nEverything worthwhile by hours of self-doubt and days of drudgery. \nAll the works by people you and I admire sit atop a foundation of failures. \nSo whatever your project, whatever your struggle, whatever your dream, \nkeep toiling because the world needs your skyscraper.", "Pierce Brown");

mixedMessages.displayRandomMessage();
