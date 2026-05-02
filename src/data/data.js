let store = {
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
        this.re_render_tree(this.get_data());
    },
    add_direct_message(content) {
        if (content) {

        }
    },
    on_message_change(text) {
        this._DATA.messages_page.new_message_text = text;
        this.re_render_tree(this.get_data());
    },

    on_post_change(text) {
        this._DATA.profile_page.new_post_text = text;
        this.re_render_tree(this.get_data());
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
                    content: ['Где мой чип'] // Переделать массив в массив обьектов с временем,  сендером и тд.
                },
            ],
            new_message_text: ""
        },

        profile_page: {
            posts: [
                "Hi my name is Stepan. I'm a programmer from Germany. Please give me a big salary, 100k+ Euros", "Hello"
            ],
            new_post_text: "hello"
        }
    }
}

export default store;