import { getAllFilms, getFilmById, getFilmByTitle, getFilmsByPagination, getSortedFilms } from '../services/services';

test('get all films', () => {
    const data = {vote_count:395, id:445651,video:false,vote_average:6.8,title:'The Darkest Minds',popularity:75.509,poster_path:'/94RaS52zmsqaiAe1TG20pdbJCZr.jpg',original_language:'en',original_title:'The Darkest Minds',genre_ids:[878,53],backdrop_path:'/5BxrMNGl3YDiWgHCVJu8iLQoJDM.jpg',adult:false,overview:'After a disease kills 98% of America\'s children, the surviving 2% develop superpowers and are placed in internment camps. A 16-year-old girl escapes her camp and joins a group of other teens on the run from the government.',release_date:'2018-08-02'};

    expect(getAllFilms()[0]).toEqual(data);
});

test('get films by title', () => {
    const data = {vote_count:395, id:445651,video:false,vote_average:6.8,title:'The Darkest Minds',popularity:75.509,poster_path:'/94RaS52zmsqaiAe1TG20pdbJCZr.jpg',original_language:'en',original_title:'The Darkest Minds',genre_ids:[878,53],backdrop_path:'/5BxrMNGl3YDiWgHCVJu8iLQoJDM.jpg',adult:false,overview:'After a disease kills 98% of America\'s children, the surviving 2% develop superpowers and are placed in internment camps. A 16-year-old girl escapes her camp and joins a group of other teens on the run from the government.',release_date:'2018-08-02'};

    expect(getFilmByTitle('darke')[0]).toEqual(data);
});

test('get film by id', () => {
    const data = {vote_count:395, id:445651,video:false,vote_average:6.8,title:'The Darkest Minds',popularity:75.509,poster_path:'/94RaS52zmsqaiAe1TG20pdbJCZr.jpg',original_language:'en',original_title:'The Darkest Minds',genre_ids:[878,53],backdrop_path:'/5BxrMNGl3YDiWgHCVJu8iLQoJDM.jpg',adult:false,overview:'After a disease kills 98% of America\'s children, the surviving 2% develop superpowers and are placed in internment camps. A 16-year-old girl escapes her camp and joins a group of other teens on the run from the government.',release_date:'2018-08-02'};

    expect(getFilmById(445651)).toEqual(data);
});

test('get film by pagination', () => {
    const data = [
        {
            adult: false,
            backdrop_path: '/tnwMCH4yLBY4qpe6Nr4n66u4U3f.jpg',
            genre_ids: [
                28,
                80,
                18,
                53
            ],
            id: 400535,
            original_language: 'en',
            original_title: 'Sicario: Day of the Soldado',
            overview: 'Agent Matt Graver teams up with operative Alejandro Gillick to prevent Mexican drug cartels from smuggling terrorists across the United States border.',
            popularity: 63.189,
            poster_path: '/msqWSQkU403cQKjQHnWLnugv7EY.jpg',
            release_date: '2018-06-27',
            title: 'Sicario: Day of the Soldado',
            video: false,
            vote_average: 6.6,
            vote_count: 504
        },
        {
            adult: false,
            backdrop_path: '/mabuNsGJgRuCTuGqjFkWe1xdu19.jpg',
            genre_ids: [
                28,
                12,
                16,
                10751
            ],
            id: 260513,
            original_language: 'en',
            original_title: 'Incredibles 2',
            overview: 'Elastigirl springs into action to save the day, while Mr. Incredible faces his greatest challenge yet � taking care of the problems of his three children.',
            popularity: 63.152,
            poster_path: '/x1txcDXkcM65gl7w20PwYSxAYah.jpg',
            release_date: '2018-06-14',
            title: 'Incredibles 2',
            video: false,
            vote_average: 7.6,
            vote_count: 2768
        }
    ];

    expect(getFilmsByPagination(2, 2)).toEqual(data);
});

test('get sorted films by desc', () => {
    const data = {
        vote_count: 0,
        id: 552332,
        video: false,
        vote_average: 0,
        title: 'Happy Face',
        popularity: 3.842,
        poster_path: '/b9WpRCKiYSVPt5RQ24QfXpTaTgE.jpg',
        original_language: 'en',
        original_title: 'Happy Face',
        genre_ids: [
            18
        ],
        backdrop_path: '/vWfDKXRPgLxvxEdkhLveLxTmsgp.jpg',
        adult: false,
        overview: 'Montreal 1992 \ufffdEstranged from his cancer-stricken mother, Stan, a quixotic 19-year-old, dons a disguise and joins a therapy workshop for disfigured patients in a misguided attempt to reconnect with her.',
        release_date: '2018-10-06'
    };

    expect(getSortedFilms('id', 'desc')[0]).toEqual(data);
});

test('get sorted films that are equal', () => {
    const data = {
        vote_count: 63,
        id: 2,
        video: false,
        vote_average: 6.9,
        title: 'Ariel',
        popularity: 4.382,
        poster_path: '/gZCJZOn4l0Zj5hAxsMbxoS6CL0u.jpg',
        original_language: 'fi',
        original_title: 'Ariel',
        genre_ids: [
            18,
            80
        ],
        backdrop_path: '/z2QUexmccqrvw1kDMw3R8TxAh5E.jpg',
        adult: false,
        overview: 'Taisto Kasurinen is a Finnish coal miner whose father has just committed suicide and who is framed for a crime he did not commit. In jail, he starts to dream about leaving the country and starting a new life. He escapes from prison but things don\'t go as planned...',
        release_date: '1988-10-21'
    };

    expect(getSortedFilms('adult', 'desc')[0]).toEqual(data);
});

test('get sorted film as empty array', () => {
    const data = [];

    expect(getSortedFilms('id', 'qwe')).toEqual(data);
});

test('get sorted films by asc', () => {
    const data = {
        vote_count: 63,
        id: 2,
        video: false,
        vote_average: 6.9,
        title: 'Ariel',
        popularity: 4.382,
        poster_path: '/gZCJZOn4l0Zj5hAxsMbxoS6CL0u.jpg',
        original_language: 'fi',
        original_title: 'Ariel',
        genre_ids: [
            18,
            80
        ],
        backdrop_path: '/z2QUexmccqrvw1kDMw3R8TxAh5E.jpg',
        adult: false,
        overview: 'Taisto Kasurinen is a Finnish coal miner whose father has just committed suicide and who is framed for a crime he did not commit. In jail, he starts to dream about leaving the country and starting a new life. He escapes from prison but things don\'t go as planned...',
        release_date: '1988-10-21'
    };

    expect(getSortedFilms('id', 'asc')[0]).toEqual(data);
});
