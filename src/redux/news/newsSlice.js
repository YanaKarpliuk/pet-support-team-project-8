import { createSlice } from "@reduxjs/toolkit";
import operations from "./newsOperation";

const { fetchNews } = operations

const newsInitialState = {
    items: [{
        id: '1',
        title: 'Обережно, кліщі! Як уберегти улюбленця',
        text: 'Травневі прогулянки з улюбленцем не лише приємні, але й потребують пильності. З початком теплої пори року активізуються кліщі, і треба бути уважним, щоб уберегти свого песика чи котика від дуже серйозних неприємностей зі здоров`ям.',
        date: '2022/01/20',
        link: 'https://www.youtube.com/'

    }, {
        id: '2',
        title: 'В День ветеринара в столиці пройде захід',
        text: 'В неділю, 14 серпня, в Тимчасовому притулку для тварин «ВДНГ» пройде тренінг на тему «Надання першої допомоги тваринам». Захід проводиться комунальним підприємством «Київська міська лікарня ветеринарної медицини»,',
        date: '2022/11/10',
        link: 'https://www.youtube.com/'
    }, {
        id: '3',
        title: 'У Телеграмі запрацював чат-бот',
        text: 'У столиці запрацював спеціальний Telegram-бот «Твій вет Київ», який надає безкоштовні ветеринарні консультації щодо догляду та лікування тварин. Знайти бот можна за посиланням https://t.me/VetHelpKyiv_bot.',
        date: '2022/02/20',
        link: 'https://www.youtube.com/'
    },
    {
        id: '4',
        title: 'Обережно, кліщі! Як уберегти улюбленця',
        text: 'Травневі прогулянки з улюбленцем не лише приємні, але й потребують пильності. З початком теплої пори року активізуються кліщі, і треба бути уважним, щоб уберегти свого песика чи котика від дуже серйозних неприємностей зі здоров`ям.',
        date: '2022/01/20',
        link: 'https://www.youtube.com/'
    }, {
        id: '5',
        title: 'В День обережно ветеринара в столиці пройде...',
        text: 'В неділю, 14 серпня, в Тимчасовому притулку для тварин «ВДНГ» пройде тренінг на тему «Надання першої допомоги тваринам». Захід проводиться комунальним підприємством «Київська міська лікарня ветеринарної медицини»,',
        date: '2022/11/10',
        link: 'https://www.youtube.com/'
    }, {
        id: '6',
        title: 'У Ютубі не запрацював чат-бот',
        text: 'У столиці запрацював спеціальний Telegram-бот «Твій вет Київ», який надає безкоштовні ветеринарні консультації щодо догляду та лікування тварин. Знайти бот можна за посиланням https://t.me/VetHelpKyiv_bot.',
        date: '2022/02/20',
        link: 'https://www.youtube.com/'
    }],
    error: null,
    isLoading: false
}

const newsSlice = createSlice({
    name: 'news',
    initialState: newsInitialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = [...state.items, ...action.payload]
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
    }
})

export const newsReducer = newsSlice.reducer;