export const DATA = {
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
        ]
    },

    profile_page: {
        posts: [
            "Hi my name is Stepan. I'm a programmer from Germany. Please give me a big salary, 100k+ Euros", "Hello"
        ]
    }
}

export const add_post = (content) => {
    if (content) {
        DATA.profile_page.posts.push(content);
    }
}