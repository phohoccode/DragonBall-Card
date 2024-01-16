const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const cardsElement = $('.cards')
const leftButton = $('.left')
const rightButton = $('.right')
const search = $('.search')
const inputSearch = $('input')
const iconSearch = $('.search i')
const showSearch = $('.show-search')


const app = {
    currentIndex: 0,

    cards: [
        {
            background: 'assets/img/background/goku-bg.jpg',
            Name: 'Son Goku',
            des: 'Goku là một chiến binh siêu mạnh, nổi tiếng với khả năng chiến đấu phi thường và sức mạnh tiềm ẩn lớn. Anh đã đạt đến nhiều dạng siêu Saiyan và có khả năng tiến triển lên cấp độ sức mạnh cao hơn. Goku cũng nổi tiếng với tinh thần lạc quan, lòng trung hiếu và tinh thần chiến đấu không ngừng.',
            avatar: 'assets/img/avatar/goku.jpg',
            origin: 'Saiyan',
            date: '18-4-737',
            members: [
                {
                    id_member: 5,
                    avatarMember: 'assets/img/avatar/chichi.png',
                    NameMember: 'ChiChi',
                    originMember: 'Trái Đất',
                    dateMember: '?-?-?'
                },
                {
                    id_member: 3,
                    avatarMember: 'assets/img/avatar/gohan.jpg',
                    NameMember: 'Gohan',
                    originMember: 'Half-Saiyan',
                    dateMember: '18-5-757'
                },
                {
                    id_member: 6,
                    avatarMember: 'assets/img/avatar/gotent.jpg',
                    NameMember: 'Gotent',
                    originMember: 'Saiyan',
                    dateMember: '?-?-767'
                },

            ]
        },
        {
            background: 'assets/img/background/vegeta-bg.jpg',
            Name: 'Vegeta',
            des: 'Vegeta nổi tiếng với tính cách kiêu ngạo, tinh thần chiến đấu mạnh mẽ và lòng tự trọng cao. Anh cũng là một chiến binh mạnh mẽ, có khả năng tiến triển lên cấp độ siêu Saiyan và chiến đấu với sức mạnh đáng kinh ngạc. Mặc dù ban đầu là một nhân vật lạnh lùng và tự hào, nhưng qua thời gian, Vegeta phát triển và thể hiện sự trung hiếu và tình thương đối với gia đình.',
            avatar: 'assets/img/avatar/vegeta.jpg',
            origin: 'Saiyan',
            date: '5-12-732',
            members: [
                {
                    id_member: 7,
                    avatarMember: 'assets/img/avatar/bulma.png',
                    NameMember: 'Bulma',
                    originMember: 'Trái Đất',
                    dateMember: '18-8-733'
                },
                {
                    id_member: 8,
                    avatarMember: 'assets/img/avatar/trunks.png',
                    NameMember: 'Trunks',
                    originMember: 'Saiyan Hybrid',
                    dateMember: '?-?-766'
                },
                {
                    id_member: 9,
                    avatarMember: 'assets/img/avatar/bulla.jpg',
                    NameMember: 'Bulla',
                    originMember: 'Saiyan Hybrid',
                    dateMember: '?-?-?'
                }
            ]
        },
        {
            background: 'assets/img/background/picolo-bg.png',
            Name: 'Piccolo Jr',
            des: 'Ban đầu, Piccolo xuất hiện trong Dragon Ball là một kẻ thù của Goku. Tuy nhiên, anh sau đó trở thành một nhân vật chính và đồng minh quan trọng của nhóm. Piccolo nổi tiếng với sức mạnh và khả năng chiến đấu xuất sắc, cũng như khả năng học nhanh và thức tỉnh sức mạnh mới.',
            avatar: 'assets/img/avatar/picolo.jpg',
            origin: 'Namekian',
            date: '?-?-?',
            members: [

            ]
        },
        {
            background: 'assets/img/background/gohan-bg.jpg',
            Name: 'Son Gohan',
            des: 'Gohan được giới thiệu lần đầu trong Dragon Ball Z khi còn là một đứa trẻ. Anh là một phần Saiyan và một phần người Trái Đất, nên có sức mạnh tiềm ẩn lớn. Gohan phát triển từ một đứa trẻ nhút nhát thành một chiến binh mạnh mẽ, đặc biệt là khi anh chuyển sang các dạng Super Saiyan.',
            avatar: 'assets/img/avatar/gohan.jpg',
            origin: 'Saiyan Hybrid',
            date: '18-5-757',
            members: [
                {
                    id_member: 0,
                    avatarMember: 'assets/img/avatar/goku.jpg',
                    NameMember: 'Goku',
                    originMember: 'Saiyan',
                    dateMember: '18-4-737'
                },
                {
                    id_member: 5,
                    avatarMember: 'assets/img/avatar/chichi.png',
                    NameMember: 'ChiChi',
                    originMember: 'Trái Đất',
                    dateMember: '?-?-?'
                },
                {
                    id_member: 6,
                    avatarMember: 'assets/img/avatar/gotent.jpg',
                    NameMember: 'Gotent',
                    originMember: 'Saiyan Hybrid',
                    dateMember: '?-?-767'
                }
            ]
        },
        {
            background: 'assets/img/background/krilin-bg.jpg',
            Name: 'Krillin',
            des: 'Krillin là bạn thân từ thuở nhỏ của Goku và là một trong những chiến binh mạnh mẽ nhất của Trái Đất. Anh thường tham gia cùng Goku trong nhiều cuộc phiêu lưu và chiến đấu. Mặc dù không có sức mạnh Saiyan nhưng Krillin được biết đến với kỹ thuật chiến đấu tinh tế và sự gan dạ trong các tình huống khó khăn.',
            avatar: 'assets/img/avatar/krilin.jpg',
            origin: 'Trái Đất',
            date: '20-5-736',
            members: [
                {
                    id_member: 10,
                    avatarMember: 'assets/img/avatar/android18.png',
                    NameMember: 'Android 18',
                    originMember: 'Trái Đất',
                    dateMember: '?-?-?'
                },
                {
                    id_member: 11,
                    avatarMember: 'assets/img/avatar/maron.jpeg',
                    NameMember: 'Maron',
                    originMember: 'Saiyan hybrid',
                    dateMember: '?-?-?'
                }
            ]
        },
        {
            background: 'assets/img/background/chichi-bg.jpg',
            Name: 'Chichi',
            des: 'Chi-Chi là một nhân vật phụ quan trọng trong loạt truyện Dragon Ball. Cô gặp Goku khi còn rất nhỏ và sau đó kết hôn với anh sau sự kiện giải đấu môn võ. Chi-Chi thường được mô tả là một người phụ nữ mạnh mẽ, có tình yêu lớn với gia đình và đặt nặng vào việc giáo dục con cái.',
            avatar: 'assets/img/avatar/chichi.png',
            origin: 'Trái Đất',
            date: '?-?-?',
            members: [
                {
                    id_member: 0,
                    avatarMember: 'assets/img/avatar/goku.jpg',
                    NameMember: 'Goku',
                    originMember: 'Saiyan',
                    dateMember: '18-4-737'
                },
                {
                    id_member: 3,
                    avatarMember: 'assets/img/avatar/gohan.jpg',
                    NameMember: 'Gohan',
                    originMember: 'Saiyan Hybrid',
                    dateMember: '18-5-757'
                },
                {
                    id_member: 6,
                    avatarMember: 'assets/img/avatar/gotent.jpg',
                    NameMember: 'Gotent',
                    originMember: 'Saiyan Hybrid',
                    dateMember: '?-?-767'
                }
            ]
        },
        {
            background: 'assets/img/background/goten-bg.jpg',
            Name: 'Son Goten',
            des: 'Goten xuất hiện trong loạt truyện Dragon Ball Z và Dragon Ball Super.Anh ta thừa hưởng sức mạnh Saiyan và thường xuyên tham gia vào các cuộc phiêu lưu và trận đấu để bảo vệ Trái đất.Goten thường được thấy với chiếc đầu mái tóc đen và đôi mắt đen tinh nghịch, giống với Goku khi còn nhỏ.',
            avatar: 'assets/img/avatar/gotent.jpg',
            origin: 'Saiyan Hybrid',
            date: '?-?-767',
            members: [
                {
                    id_member: 0,
                    avatarMember: 'assets/img/avatar/goku.jpg',
                    NameMember: 'Goku',
                    originMember: 'Saiyan',
                    dateMember: '18-4-737'
                },
                {
                    id_member: 5,
                    avatarMember: 'assets/img/avatar/chichi.png',
                    NameMember: 'ChiChi',
                    originMember: 'Trái Đất',
                    dateMember: '?-?-?'
                },
                {
                    id_member: 3,
                    avatarMember: 'assets/img/avatar/gohan.jpg',
                    NameMember: 'Gohan',
                    originMember: 'Saiyan Hybrid',
                    dateMember: '18-5-757'
                },
            ]
        },
        {
            background: 'assets/img/background/bulma-bg.jpg',
            Name: 'Bulma',
            des: 'Bulma là con gái của Tiến sĩ Brief, một nhà khoa học nổi tiếng trong thế giới Dragon Ball. Cô chơi một vai trò quan trọng trong toàn bộ câu chuyện với đóng góp của mình trong việc phát minh các thiết bị quan trọng và hỗ trợ nhóm Z Fighters.',
            avatar: 'assets/img/avatar/bulma.png',
            origin: 'Trái Đất',
            date: '18-8-733',
            members: [
                {
                    id_member: 1,
                    avatarMember: 'assets/img/avatar/Vegeta.jpg',
                    NameMember: 'Vegeta',
                    originMember: 'Saiyan',
                    dateMember: '5-12-732'
                },
                {
                    id_member: 8,
                    avatarMember: 'assets/img/avatar/trunks.png',
                    NameMember: 'Trunks',
                    originMember: 'Saiyan Hybrid',
                    dateMember: '?-?-766'
                },
                {
                    id_member: 9,
                    avatarMember: 'assets/img/avatar/bulla.jpg',
                    NameMember: 'Bulla',
                    originMember: 'Saiyan Hybrid',
                    dateMember: '?-?-?'
                },
            ]
        },
        {
            background: 'assets/img/background/trunks-bg.jpg',
            Name: 'Trunks',
            des: 'Trunks là con trai của Bulma và Vegeta, là một nửa người và một nửa Saiyan. Gia đình của anh ta là một phần quan trọng của nhóm Z Fighters, nhóm những người mạnh mẽ chiến đấu để bảo vệ thế giới khỏi những mối đe dọa.',
            avatar: 'assets/img/avatar/trunks.png',
            origin: 'Saiyan Hybrid',
            date: '?-?-767',
            members: [
                {
                    id_member: 1,
                    avatarMember: 'assets/img/avatar/Vegeta.jpg',
                    NameMember: 'Vegeta',
                    originMember: 'Saiyan',
                    dateMember: '5-12-732'
                },
                {
                    id_member: 7,
                    avatarMember: 'assets/img/avatar/bulma.png',
                    NameMember: 'Bulma',
                    originMember: 'Trái Đất',
                    dateMember: '18-8-733'
                },
                {
                    id_member: 8,
                    avatarMember: 'assets/img/avatar/trunks.png',
                    NameMember: 'Trunks',
                    originMember: 'Saiyan Hybrid',
                    dateMember: '?-?-766'
                },
            ]
        },
        {
            background: 'assets/img/background/bulla-bg.jpg',
            Name: 'Bulla',
            des: 'Bulla là con gái của Bulma và Vegeta, là em gái của Trunks. Gia đình của Bulla là một phần quan trọng của nhóm Z Fighters, một nhóm những chiến binh mạnh mẽ chiến đấu để bảo vệ thế giới khỏi các mối đe dọa.',
            avatar: 'assets/img/avatar/bulla.jpg',
            origin: 'Saiyan Hybrid',
            date: '?-?-?',
            members: [
                {
                    id_member: 1,
                    avatarMember: 'assets/img/avatar/Vegeta.jpg',
                    NameMember: 'Vegeta',
                    originMember: 'Saiyan',
                    dateMember: '5-12-732'
                },
                {
                    id_member: 7,
                    avatarMember: 'assets/img/avatar/bulma.png',
                    NameMember: 'Bulma',
                    originMember: 'Trái Đất',
                    dateMember: '18-8-733'
                },
                {
                    id_member: 3,
                    avatarMember: 'assets/img/avatar/gohan.jpg',
                    NameMember: 'Gohan',
                    originMember: 'Saiyan Hybrid',
                    dateMember: '18-5-757'
                },
            ]
        },
        {
            background: 'assets/img/background/android18-bg.jpg',
            Name: 'Android 18',
            des: ' Android 18 là một trong những Android được tạo ra bởi Tiến sĩ Gero để hủy diệt Z Fighters. Tuy nhiên, sau khi bị hồi sinh và được đổi chánh, cô trở thành một người hùng và tham gia vào nhóm Z Fighters. Android 18 kết hôn với Krillin và có một con gái tên là Marron.',
            avatar: 'assets/img/avatar/android18.png',
            origin: 'Trái Đất',
            date: '?-?-?',
            members: [
                {
                    id_member: 4,
                    avatarMember: 'assets/img/avatar/krilin.jpg',
                    NameMember: 'Krilin',
                    originMember: 'Trái Đất',
                    dateMember: '20-5-736'
                },
                {
                    id_member: 11,
                    avatarMember: 'assets/img/avatar/maron.jpeg',
                    NameMember: 'Maron',
                    originMember: 'Saiyan hybrid',
                    dateMember: '?-?-?'
                }
            ]
        },
        {
            background: 'assets/img/background/maron-bg.jpg',
            Name: 'Maron',
            des: 'Maron là con gái của Nam và một nhân vật không phải là Android 18. Cô xuất hiện trong filler episode của loạt Dragon Ball Z và không xuất hiện trong manga. Lưu ý rằng có một sự nhầm lẫn khi Maron xuất hiện, vì tên của cô giống với tên của Android 18 trước khi được hồi sinh.',
            avatar: 'assets/img/avatar/maron.jpeg',
            origin: 'Saiyan hybrid',
            date: '?-?-?',
            members: [
                {
                    id_member: 4,
                    avatarMember: 'assets/img/avatar/krilin.jpg',
                    NameMember: 'Krilin',
                    originMember: 'Trái Đất',
                    dateMember: '20-5-736'
                },
                {
                    id_member: 10,
                    avatarMember: 'assets/img/avatar/android18.png',
                    NameMember: 'Android 18',
                    originMember: 'Trái Đất',
                    dateMember: '?-?-?'
                },
            ]
        },
        {
            background: 'assets/img/background/mr-satan-bg.jpg',
            Name: 'Mr.Satan',
            des: 'Mr. Satan là một nhân vật hài hước và có lẽ là nhân vật đa dạng nhất trong Dragon Ball. Trong khi ông thường tự đặt ra là anh hùng lớn lao, thực tế là ông thường chỉ là người làm phiền và thường được cứu giúp bởi các nhân vật mạnh mẽ như Goku và nhóm Z Fighters. Gia đình của ông thường xuất hiện trong các tình huống hài hước và ông thường được hiển thị như một người cha yêu thương và đầy lòng tự trọng đối với con gái và cháu gái.',
            avatar: 'assets/img/avatar/mr-satan.png',
            origin: 'Trái đất',
            date: '?-?-?',
            members: [
                {
                    id_member: 13,
                    avatarMember: 'assets/img/avatar/videl.png',
                    NameMember: 'Videl',
                    originMember: 'Trái Đất',
                    dateMember: '?-?-?'
                }
            ]
        },
        {
            background: 'assets/img/background/videl-bg.jpg',
            Name: 'Videl',
            des: 'Videl là con gái của Mr. Satan và là một nhân vật quan trọng trong Dragon Ball Z và Dragon Ball Super.',
            avatar: 'assets/img/avatar/videl.png',
            origin: 'Trái đất',
            date: '?-?-?',
            members: [
                {
                    id_member: 12,
                    avatarMember: 'assets/img/avatar/mr-satan.png',
                    NameMember: 'Mr.Satan',
                    originMember: 'Trái Đất',
                    dateMember: '?-?-?'
                }
            ]
        },
        {
            background: 'assets/img/background/tien-shinhan-bg.jpg',
            Name: 'Tiên Shinhan',
            des: 'Tiên Shinhan, hay còn được gọi là Tienshinhan, là một chiến binh mạnh mẽ tham gia vào nhóm Z Fighters. Anh có kỹ thuật chiến đấu đặc sắc, bao gồm cả kỹ thuật Tri-Beam. Tiên Shinhan có mối quan hệ đặc biệt với Chiaotzu, người bạn đồng đội thân thiết của anh.',
            avatar: 'assets/img/avatar/tien-shinhan.png',
            origin: 'Trái Đất',
            date: '?-?-?',
            members: [
                {
                    id_member: 15,
                    avatarMember: 'assets/img/avatar/chiaotzu.png',
                    NameMember: 'Chiaotzu',
                    originMember: 'Trái Đất',
                    dateMember: '?-?-?'
                }
            ]
        },
        {
            background: 'assets/img/background/chiaotzu-bg.jpg',
            Name: 'Chiaotzu',
            des: 'Chiaotzu là một nhân vật với khả năng siêu năng lực và là bạn thân thân của Tien Shinhan. Anh ta thường tham gia cùng Tien trong các cuộc chiến đấu và đôi khi hy sinh bản thân để bảo vệ nhóm.',
            avatar: 'assets/img/avatar/chiaotzu.png',
            origin: 'Trái Đất',
            date: '?-?-?',
            members: [
                {
                    id_member: 14,
                    avatarMember: 'assets/img/avatar/tien-shinhan.png',
                    NameMember: 'Tien Shinhan',
                    originMember: 'Trái Đất',
                    dateMember: '?-?-?'
                }
            ]
        },
        {
            background: 'assets/img/background/yajirobe-bg.jpg',
            Name: 'Yajirobe',
            des: 'Yajirobe là một nhân vật lạ lẫm nhưng có đóng góp quan trọng trong cuộc chiến chống lại một số mối đe dọa trong Dragon Ball. Anh ta nổi tiếng với sức mạnh về vũ khí và đặc biệt là dao kiếm, và thường xuất hiện để giúp đỡ nhóm Z Fighters khi cần thiết.',
            avatar: 'assets/img/avatar/yajirobe.png',
            origin: 'Trái Đất',
            date: '?-?-?',
            members: []
        },
        {
            background: 'assets/img/background/dende-bg.jpg',
            Name: 'Dende',
            des: 'Dende là một Namekian và đồng thời là Guardian của Trái Đất sau sự kiện Cell Saga. Anh có khả năng hồi phục và làm sống lại người chết. Dende thường hỗ trợ nhóm Z Fighters trong những cuộc chiến đấu quan trọng.',
            avatar: 'assets/img/avatar/dende.png',
            origin: 'Namekian',
            date: '?-?-?',
            members: []
        },
        {
            background: 'assets/img/background/launch-bg.jpg',
            Name: 'Launch',
            des: 'Launch là một nhân vật có tính cách hai mặt, biến đổi giữa hai dạng khác nhau khi cô nổi giận hoặc sợ hãi. Mặt một của Launch là dễ thương và nhân từ, trong khi mặt khác là táo bạo và hỗn loạn. Cô xuất hiện trong Dragon Ball và Dragon Ball Z.',
            avatar: 'assets/img/avatar/launch.jpg',
            origin: 'Trái Đất',
            date: '?-?-?',
            members: []
        },
        {
            background: 'assets/img/background/master-roshi-bg.png',
            Name: 'Master Roshi',
            des: 'Master Roshi, hay còn được biết đến với tên gọi Kame-Sennin, là một nhân vật lão luyện và mạnh mẽ. Ông là một trong những người thầy huấn luyện đầu tiên của Goku và Krillin. Master Roshi nổi tiếng với sức mạnh và kiến thức rộng lớn về kỹ thuật chiến đấu.',
            avatar: 'assets/img/avatar/master-roshi.png',
            origin: 'Trái Đất',
            date: '?-?-?',
            members: [
                {
                    id_member: 0,
                    avatarMember: 'assets/img/avatar/goku.jpg',
                    NameMember: 'Goku',
                    originMember: 'Saiyan',
                    dateMember: '18-4-737'
                },
                {
                    id_member: 4,
                    avatarMember: 'assets/img/avatar/krilin.jpg',
                    NameMember: 'Krilin',
                    originMember: 'Trái Đất',
                    dateMember: '20-5-736'
                },
            ]
        },
        {
            background: 'assets/img/background/taopaipai-bg.jpg',
            Name: 'Tao Pai Pai',
            des: 'Tao Pai Pai là một sát thủ chuyên nghiệp và là một trong những đối thủ nguy hiểm của Goku. Ông nổi tiếng với khả năng chiến đấu xuất sắc và sử dụng vũ khí độc đáo như đao giết và súng.',
            avatar: 'assets/img/avatar/taopaipai.jpg',
            origin: 'Unknown',
            date: '?-?-?',
            members: []
        },
        {
            background: 'assets/img/background/yamcha-bg.jpg',
            Name: 'Yamcha',
            des: 'Yamcha là một trong những nhân vật đầu tiên xuất hiện trong Dragon Ball và là một chiến binh mạnh mẽ. Anh ta thường tham gia vào các cuộc phiêu lưu và chiến đấu bảo vệ Trái Đất, mặc dù đôi khi gặp phải thất bại.',
            avatar: 'assets/img/avatar/yamcha.jpg',
            origin: 'Trái Đất',
            date: '?-?-?',
            members: [
                {
                    id_member: 22,
                    avatarMember: 'assets/img/avatar/puar.jpg',
                    NameMember: 'Puar',
                    originMember: 'Unknown',
                    dateMember: '?-?-?'
                }
            ]
        },
        {
            background: 'assets/img/background/puar-bg.png',
            Name: 'Puar',
            des: 'Puar là một hậu duệ của chủng tộc shapeshifting, có khả năng biến hình thành nhiều hình dạng khác nhau. Puar thường xuất hiện cùng với Yamcha và là một người bạn trung thành của nhóm Z Fighters.',
            avatar: 'assets/img/avatar/puar.jpg',
            origin: 'Unknown',
            date: '?-?-?',
            members: [
                {
                    id_member: 21,
                    avatarMember: 'assets/img/avatar/yamcha.jpg',
                    NameMember: 'Yamcha',
                    originMember: 'Trái Đất',
                    dateMember: '?-?-?'
                }
            ]
        },
        {
            background: 'assets/img/background/android17-bg.jpg',
            Name: 'Android 17',
            des: 'Android 17 là một trong những Android được tạo ra bởi Tiến sĩ Gero để hủy diệt Z Fighters. Tuy nhiên, sau khi bị hồi sinh và được đổi chánh, anh ta trở thành một người hùng và tham gia vào nhóm Z Fighters. Android 17 có khả năng chiến đấu mạnh mẽ và là một chiến binh đáng gờm trong các trận đấu.',
            avatar: 'assets/img/avatar/android17.png',
            origin: 'Trái Đất',
            date: '?-?-?',
            members: [
                {
                    id_member: 10,
                    avatarMember: 'assets/img/avatar/android18.png',
                    NameMember: 'Android 18',
                    originMember: 'Trái Đất',
                    dateMember: '?-?-?'
                },
            ]
        },
        {
            background: 'assets/img/background/oolong-bg.jpg',
            Name: 'Oolong',
            des: 'Oolong là một trong những nhân vật đầu tiên gặp Goku trong Dragon Ball. Anh ta là một con heo biết nói và có khả năng biến hình. Mặc dù thường tham gia các cuộc phiêu lưu, nhưng Oolong thường xuyên gặp phải những tình huống hài hước.',
            avatar: 'assets/img/avatar/oolong.jpg',
            origin: 'Unknown',
            date: '?-?-?',
            members: []
        },
        {
            background: 'assets/img/background/cell-bg.png',
            Name: 'Cell',
            des: 'Cell là một sinh vật có nguồn gốc từ sự hấp thụ các nhân vật Android. Anh ta là một trong những đối thủ mạnh mẽ nhất mà nhóm Z Fighters phải đối mặt. Cell có khả năng hấp thụ các Android để tiến triển và trở thành một siêu sinh vật.',
            avatar: 'assets/img/avatar/cell.jpg',
            origin: 'Unknown',
            date: '?-?-?',
            members: []
        },
        {
            background: 'assets/img/background/broly-bg.jpg',
            Name: 'Broly',
            des: 'Broly là một Saiyan với sức mạnh khủng khiếp, nổi tiếng trong loạt phim Dragon Ball Z và Dragon Ball Super. Anh ta có khả năng biến thành dạng Legendary Super Saiyan, nơi sức mạnh của anh ta tăng lên đáng kể.',
            avatar: 'assets/img/avatar/broly.jpg',
            origin: 'Saiyan',
            date: '?-?-?',
            members: []
        },
        {
            background: 'assets/img/background/king-cold-bg.jpg ',
            Name: 'Vua Cold',
            des: 'Vua Cold là cha của Frieza và Cooler, là một trong những nhân vật mạnh mẽ và độc đáo trong vũ trụ Dragon Ball. Ông là người lãnh đạo của tộc Frieza và thường xuất hiện trong các tình huống chiến đấu nguy hiểm.',
            avatar: 'assets/img/avatar/king-cold.png',
            origin: 'Unknown',
            date: '?-?-?',
            members: [
                {
                    id_member: 33,
                    avatarMember: 'assets/img/avatar/frieza.jpg',
                    NameMember: 'Frieza',
                    originMember: 'Unknown',
                    dateMember: '?-?-?'
                },
                {
                    id_member: 34,
                    avatarMember: 'assets/img/avatar/cooler.png',
                    NameMember: 'Cooler',
                    originMember: 'Unknown',
                    dateMember: '?-?-?'
                }
            ]
        },
        {
            background: 'assets/img/background/tullece-bg.png',
            Name: 'Tullece',
            des: 'Tullece là một nhân vật xuất hiện trong bộ phim Dragon Ball Z: The Tree of Might. Anh ta là một Saiyan và sử dụng quả cầu Tree of Might để tăng cường sức mạnh của mình.',
            avatar: 'assets/img/avatar/tullece.jpg',
            origin: 'Saiyan',
            date: '?-?-?',
            members: []
        },
        {
            background: 'assets/img/background/pilaf-bg.jpg',
            Name: 'Pilaf',
            des: 'Pilaf là một nhân vật có tính cách tinh quái xuất hiện trong Dragon Ball. Anh ta thường xuất hiện cùng với đồng bọn là Shu và Mai. Mặc dù không mạnh mẽ, nhóm Pilaf thường xuyên tham gia vào các kế hoạch để đánh bại nhóm Z Fighters.',
            avatar: 'assets/img/avatar/pilaf.png',
            origin: 'Unknown',
            date: '?-?-?',
            members: [
                {
                    id_member: 30,
                    avatarMember: 'assets/img/avatar/shu.png',
                    NameMember: 'Shu',
                    originMember: 'Unknown',
                    dateMember: '?-?-?'
                },
                {
                    id_member: 31,
                    avatarMember: 'assets/img/avatar/mai.jpg',
                    NameMember: 'Mai',
                    originMember: 'Unknown',
                    dateMember: '?-?-?'
                }
            ]
        },
        {
            background: 'assets/img/background/shu-bg.png',
            Name: 'Shu',
            des: 'Shu là một nhân vật xuất hiện trong Dragon Ball, thường xuất hiện cùng với nhóm Pilaf gồm Pilaf, Shu và Mai. Anh ta thường tham gia vào các kế hoạch của nhóm để đánh bại nhóm Z Fighters, nhưng thường xuyên thất bại do những tình huống hài hước.',
            avatar: 'assets/img/avatar/shu.png',
            origin: 'Unknown',
            date: '?-?-?',
            members: [
                {
                    id_member: 29,
                    avatarMember: 'assets/img/avatar/pilaf.png',
                    NameMember: 'Pilaf',
                    originMember: 'Unknown',
                    dateMember: '?-?-?'
                },
                {
                    id_member: 31,
                    avatarMember: 'assets/img/avatar/mai.png',
                    NameMember: 'Mai',
                    originMember: 'Unknown',
                    dateMember: '?-?-?'
                }
            ]
        },
        {
            background: 'assets/img/background/mai-bg.jpg',
            Name: 'Mai',
            des: 'Mai là một nhân vật xuất hiện trong Dragon Ball, thường xuất hiện cùng với nhóm Pilaf gồm Pilaf, Shu và Mai. Cô thường tham gia vào các kế hoạch của nhóm để đánh bại nhóm Z Fighters, nhưng thường xuyên thất bại do những tình huống hài hước.',
            avatar: 'assets/img/avatar/mai.jpg',
            origin: 'Unknown',
            date: '?-?-?',
            members: [
                {
                    id_member: 29,
                    avatarMember: 'assets/img/avatar/pilaf.png',
                    NameMember: 'Pilaf',
                    originMember: 'Unknown',
                    dateMember: '?-?-?'
                },
                {
                    id_member: 30,
                    avatarMember: 'assets/img/avatar/shu.png',
                    NameMember: 'Shu',
                    originMember: 'Unknown',
                    dateMember: '?-?-?'
                }
            ]
        },        
        {
            background: 'assets/img/background/korin-bg.jpg',
            Name: 'Korin',
            des: 'Korin là một nhân vật xuất hiện trong Dragon Ball, là một hổ trắng sống ở Tower Korin. Anh ta có thể cung cấp Senzu Beans, một loại thảo mộc có khả năng chữa lành và khôi phục sức mạnh người ăn.',
            avatar: 'assets/img/avatar/korin.png',
            origin: 'Trái Đất',
            date: '?-?-?',
            members: []
        },
        {
            background: 'assets/img/background/frieza-bg.png',
            Name: 'Frieza',
            des: 'Frieza, còn được biết đến với tên gọi là Freeza, là một nhân vật phản diện chính trong Dragon Ball. Anh ta là một độc tài vũ trụ mạnh mẽ và tàn nhẫn, là một trong những kẻ thù đáng sợ nhất mà nhóm Z Fighters từng phải đối mặt. Frieza có năng lực biến hình và có nhiều biến thể mạnh mẽ.',
            avatar: 'assets/img/avatar/frieza.jpg',
            origin: 'Unknown',
            date: '?-?-?',
            members: [
                {
                    id_member: 27,
                    avatarMember: 'assets/img/avatar/king-cold.png',
                    NameMember: 'Vua Cold',
                    originMember: 'Unknown',
                    dateMember: '?-?-?'
                },
                {
                    id_member: 34,
                    avatarMember: 'assets/img/avatar/cooler.png',
                    NameMember: 'Cooler',
                    originMember: 'Unknown',
                    dateMember: '?-?-?'
                }
            ]
        },
        {
            background: 'assets/img/background/cooler-bg.jpg',
            Name: 'Cooler',
            des: 'Cooler là anh trai của Frieza và một nhân vật mạnh mẽ trong vũ trụ Dragon Ball. Tương tự như Frieza, Cooler là một nhân vật tàn nhẫn và quyết tâm chinh phục vũ trụ. Anh ta xuất hiện trong một số phiên bản và phần phụ truyện của loạt truyện.',
            avatar: 'assets/img/avatar/cooler.png',
            origin: 'Unknown',
            date: '?-?-?',
            members: [
                {
                    id_member: 27,
                    avatarMember: 'assets/img/avatar/king-cold.png',
                    NameMember: 'Vua Cold',
                    originMember: 'Unknown',
                    dateMember: '?-?-?'
                },
                {
                    id_member: 33,
                    avatarMember: 'assets/img/avatar/frieza.jpg',
                    NameMember: 'Frieza',
                    originMember: 'Unknown',
                    dateMember: '?-?-?'
                }
            ]
        }
                           
    ],

    renderCard() {
        const htmls = this.cards.map((card, index) => {
            return `
            <div class="card ${this.currentIndex === index ? 'active' : ''}" data-index = ${index}>
                <div class="card-on">
                    <div class="background">         
                        <img src="${card.background}" alt="">
                    </div>
                    <div class="content">
                        <h2 class="name">${card.Name}</h2>
                        <p class="des">${card.des}</p>
                        <div class="figure">
                            <figure class="avatar">
                                <img src="${card.avatar}" alt="">
                            </figure>
                            <div class="body">
                                <span class="origin">Nguồn gốc: ${card.origin}</span>
                                <span class="date">Ngày sinh: ${card.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-under">
                        <header>
                            <label for="">Family members</label>
                            <div class="icon">
                                <i class="icon-down fa-light fa-chevron-down"></i>
                                <i class="icon-up fa-light fa-chevron-up"></i>
                            </div>
                        </header>
                        <div class="row">
                                ${card.members.map((member) => `
                                    <div class="figure-member" data-index="${member.id_member}">
                                        <figure class="avatar-member">
                                            <img src="${member.avatarMember}" alt="">
                                        </figure>
                                        <div class="body">
                                            <span class="member-name">Tên: ${member.NameMember}</span>
                                            <span class="origin-member">Nguồn gốc: ${member.originMember}</span>
                                            <span class="date-member">Ngày sinh: ${member.dateMember}</span>
                                        </div>
                                    </div>
                            `).join('')}
                        </div>
                </div>
                <div class="rotate">
                    <i class="icon-rotate fa-light fa-arrow-right-long"></i>
                </div>
            </div>
            `
        })
        cardsElement.innerHTML = htmls.join('')
    },

    renderItem() {
        const htmls = items.map((item, index) => {
            return `
                <li class="item">
                    <figure>
                        <img src="${item.avatar}" alt="" class="item-img">
                    </figure>
                    <div class="item-body">
                        <span class="item-origin">${item.origin}</span>
                        <span class="item-date">${item.date}</span>
                    </div>
              </li>      
            `
        })
        showSearch.innerHTML = htmls.join('')
    },

    handleEvent() {
        const _this = this
        leftButton.addEventListener('click', () => {
            _this.prevCard()
            _this.renderCard()
        })

        rightButton.addEventListener('click', () => {
            _this.nextCard()
            _this.renderCard()
        })

        search.addEventListener('click', (e) => {
            e.preventDefault()
        })

        iconSearch.addEventListener('click', () => {
            search.classList.toggle('active')
            showSearch.style.display = search.classList.contains('active') ? 'flex' : 'none'
        })

        cardsElement.addEventListener('click', () => {
            search.classList.remove('active')
            showSearch.style.display = 'none'

        })

        inputSearch.addEventListener('input', (e) => {
            const valueSearch = e.target.value
            if (valueSearch !== '') {
                console.log('done')
                showSearch.style.display = 'flex'
            } else {
                showSearch.style.display = 'none'
            }
            let items = _this.cards.filter(value => {
                return value.Name.toLowerCase().includes(valueSearch)
            })
            console.log(items)
            const htmls = items.map((item, index) => {
                return `
                    <li class="item" data-index=${item.members.id_member}>
                        <div class="figure">
                            <figure class="avatar">
                                <img src="${item.avatar}" alt="">
                            </figure>
                            <div class="body">
                                <span class="member-name">${item.Name}</span>
                                <span class="origin">Nguồn gốc: ${item.origin}</span>
                                <span class="date">Ngày sinh: ${item.date}</span>
                            </div>
                        </div>
                  </li>      
                `
            })
            showSearch.innerHTML = htmls.join('')
        })

        showSearch.addEventListener('click', (e) => {

        })

        cardsElement.addEventListener('click', (e) => {
            const rotateNode = e.target.closest('.rotate')
            const figureNode = e.target.closest('.figure-member')
            const headerNode = e.target.closest('header')

            if (rotateNode) {
                const cardOn = rotateNode.closest('.card').querySelector('.card-on')
                const cardUnder = rotateNode.closest('.card').querySelector('.card-under')
                const iconNode = rotateNode.querySelector('.icon-rotate')
                rotateNode.classList.toggle('active')
                iconNode.style.transform = rotateNode.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0)'
                cardOn.style.display = rotateNode.classList.contains('active') ? 'none' : 'block'
                cardUnder.style.display = rotateNode.classList.contains('active') ? 'flex' : 'none'
            }

            if (figureNode) {
                _this.currentIndex = Number(figureNode.dataset.index)
                this.renderCard()
            }

            if (headerNode) {
                const rowNode = headerNode.closest('.card-under').querySelector('.row')
                const iconHeaderNode = headerNode.querySelector('.icon')
                iconHeaderNode.classList.toggle('active')
                rowNode.style.display = iconHeaderNode.classList.contains('active') ? 'none' : 'flex'
                rowNode.style.animation = iconHeaderNode.classList.contains('active') ? `scrollUp .3s linear` : 'scrollDown .3s linear'
            }

        })

    },

    nextCard() {
        this.currentIndex++

        if (this.currentIndex > this.cards.length - 1) {
            this.currentIndex = 0
        }
    },

    prevCard() {
        this.currentIndex--

        if (this.currentIndex < 0) {
            this.currentIndex = this.cards.length - 1
        }
    },


    start() {
        this.renderCard()
        this.handleEvent()
    }
}

app.start()