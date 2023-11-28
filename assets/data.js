const podcasts = [
    {
        url: 'http://example.com/avaritia.mp3', // Load media from the network
        title: 'Avaritia',
        artist: 'deadmau5',
        album: 'while(1<2)',
        genre: 'Progressive House, Electro House',
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        artwork: 'http://example.com/cover.png', // Load artwork from the network
        duration: 402 // Duration in seconds
    },
    {
        title: '143 - Intelligenza Artificiale Generativa con Jacopo Perfetti',
        artist: 'Hacking Creativity',
        artwork: 'https://ibb.co/rbHMv81',
        url: 'https://chtbl.com/track/9E947E/api.spreaker.com/download/episode/52096290/def_hc_perfetti_v2_loud.mp3',
    },
    {
        title: 'IA : Microsoft investit 10 milliards dans Open AI pour tout dominer ?',
        artist: 'Choses à savoir TECH',
        artwork: require('./img/108164_0_idF_idE_500x500.jpg'),
        url: 'https://traffic.megaphone.fm/FODL8281657475.mp3?updated=1673441802',
    }
];

export default podcasts;