export let store = {
    re_render_tree(data) {
        console.log("fake function");
    },
    subscribe(observer) {
        this.re_render_tree = observer
    },
    add_post(content) {
        if (content) {
            this._DATA.profile_page.posts.unshift(content);
            this.re_render_tree(this._DATA);
        }
    },
    add_message(content) {
        if (content) {
            let user = {
                name: "Stepan",
                content: [content]
            }
            this._DATA.messages_page.users.unshift(user);

        }
    },
    get_data() {
        return this._DATA;
    },

    _DATA: {
        messages_page: {
            users: [
                {
                    name: 'Иван Иванов',
                    content: ['Привет', 'Как дела', 'Го гулять']
                },
                {
                    name: 'Илон Маск',
                    content: ['Го на Марс']
                },
                {
                    name: 'Бил Гейтс',
                    content: ['Где мой чип']
                },
            ],
            new_message_text: "sasdas"
        },

        profile_page: {
            posts: [
                "Hi my name is Stepan. I'm a programmer from Germany. Please give me a big salary, 100k+ Euros", "Hello"
            ],
            new_post_text: "hello"
        }
    }
}

