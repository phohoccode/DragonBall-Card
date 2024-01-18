const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const dragonball = $('#dragonball')
const cardsElement = $('.cards')
const leftButton = $('.left')
const rightButton = $('.right')
const search = $('.search')
const searchInput = $('.search-input')
const searchBtn = $('.search-btn')
const input = $('input')
const showSearch = $('.show-search')
const iconSearch = $('.icon-search')

const app = {
    currentIndex: 0,

    cards: [
        {
            id: 0,
            pathVideo: 'https://www.youtube.com/embed/q1bQ2LOUh6s',
            background: 'assets/img/background/goku-bg.jpg',
            Name: 'Son Goku',
            des: `Goku, tên đầy đủ là Kakarot, bắt đầu hành trình của mình từ thời thơ ấu khi mới là một đứa trẻ nhỏ. Sinh ra trên hành tinh Vegeta, cậu bé được gửi đến trái đất để thoát khỏi sự hủy diệt của hành tinh quê hương. Người nuôi cha mẹ của Goku, ông Gohan, tình cờ tìm thấy cậu bé và chăm sóc anh như con của mình.

            Goku lớn lên trong sự yên bình của ngôi nhà nhỏ trên núi, nơi ông Gohan dạy cho cậu về sức mạnh, tự giác và lòng nhân ái. Dưới tác động của bức tường cảm xúc, Goku phát triển sức mạnh ngoại dự kiến từ khi còn nhỏ, và ông Gohan đã truyền dạy cho cậu nghệ thuật chiến đấu và triết lý sống.
            
            Cuộc sống yên bình của Goku bị chấm dứt khi Raditz, anh trai của anh ta, xuất hiện trên trái đất. Raditz tiết lộ sự thật về nguồn gốc Saiyan của Goku và mục đích đến trái đất là để chấm dứt cuộc sống của anh ta. Goku phải đối mặt với sự thật đau lòng và quyết tâm tìm kiếm sức mạnh mới để bảo vệ người thân và thế giới.
            
            Bắt đầu từ đây, hành trình của Goku trở thành một chuỗi cuộc phiêu lưu, thách thức và sức mạnh mới. Anh ta tham gia nhiều giải đấu võ thuật, đối mặt với những kẻ thù mạnh mẽ như Frieza, Cell và Majin Buu. Goku không chỉ phát triển về mặt chiến đấu mà còn về mặt tâm hồn, hiểu rõ hơn về tình bạn, tình đồng đội và trách nhiệm của mình trong việc bảo vệ hòa bình thế giới.
            
            Với sức mạnh siêu nhiên và tinh thần bất khuất, Goku không chỉ là một chiến binh mạnh mẽ mà còn là biểu tượng của lòng kiên nhẫn, lòng trắc ẩn và lòng nhân ái. Cuộc sống của anh là một hành trình khám phá về bản thân, tìm kiếm sức mạnh mới và không ngừng học hỏi từ mọi thử thách.`,
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
                }
            ]
        },
        {
            id: 1,
            pathVideo: 'https://www.youtube.com/embed/6L-BNEU40_I',
            background: 'assets/img/background/vegeta-bg.jpg',
            Name: 'Vegeta',
            des: `Vegeta, một nhân vật đầy tính cách và phức tạp trong thế giới Dragon Ball, bắt đầu cuộc hành trình của mình từ khi còn nhỏ, là một Saiyan hoàng đế từ hành tinh Vegeta. Sinh ra trong hoàn cảnh cao quý nhưng khắc nghiệt, Vegeta đã phải đối mặt với số phận của một chiến binh Saiyan, từ sự chinh phục cho đến sự hi sinh.

            Vegeta tìm thấy sự tự do trên trái đất sau khi hành tinh quê hương của anh bị phá hủy. Ban đầu là một kẻ thù của Goku, nhưng sau đó anh ta trở thành một thành viên quan trọng của nhóm Dragon Ball, và cuối cùng, một người bạn đồng hành trung thành.
            
            Từ một chiến binh tàn bạo, Vegeta trải qua sự phát triển đáng kinh ngạc trong cuộc hành trình của mình. Anh ta không chỉ chiến đấu để vượt qua Goku mà còn để vượt qua chính bản thân mình và xóa bỏ bóng tối của quá khứ Saiyan đen tối.
            
            Vegeta chứng minh sức mạnh không chỉ là về cơ bắp và chiến thuật, mà còn là về lòng kiên trì và lòng tự hào. Thông qua những cuộc chiến đấu khốc liệt và những thất bại đau đớn, anh ta học được giá trị của gia đình và tình bạn. Mối quan hệ với Bulma và con trai Trunks đã làm thay đổi anh ta, làm cho trái tim của Vegeta trở nên ấm áp và nhân văn hơn.
            
            Cuối cùng, Vegeta không chỉ là một chiến binh mạnh mẽ mà còn là một nhân vật có độ sâu và phức tạp, thể hiện rõ sự mạnh mẽ của tình cảm và lòng nhân ái. Hành trình của Vegeta là một câu chuyện về sự phát triển, hy sinh và tìm kiếm ý nghĩa trong cuộc sống.
            `,
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
            id: 2,
            pathVideo: 'https://www.youtube.com/embed/4qvVPXV4YMk',
            background: 'assets/img/background/picolo-bg.png',
            Name: 'Piccolo Jr',
            des: `Piccolo, một nhân vật đầy tính cách và quan trọng trong vũ trụ Dragon Ball, đã trải qua một hành trình ấn tượng và đầy tính nhân văn. Ban đầu, anh ta xuất hiện như một thế lực đen tối, mục tiêu chính của Piccolo là hủy diệt Goku và chinh phục thế giới. Tuy nhiên, những biến cố đầy tính trận trộm và lòng nhân ái đã thay đổi hoàn toàn con người và định hình sự hiện diện của anh ta trong câu chuyện.

            Piccolo bắt đầu cuộc sống của mình như một phần của cơ thể đồng hồ đếch của Kami, một Namekian cao cấp. Tuy nhiên, khi Piccolo tách ra từ Kami và trở thành một thực thể riêng biệt, anh ta đối mặt với cảm giác cô đơn và phải đối diện với quá khứ đen tối của mình. Sự cô đơn và tình trạng ám ảnh đã làm nổi bật những khía cạnh tích cực của Piccolo, khi anh ta dần trở nên đáng tin cậy và tận tâm đối với đồng đội.
            
            Piccolo không chỉ là một chiến binh mạnh mẽ mà còn là một nhà lãnh đạo và người hướng dẫn. Anh ta đã đảm nhận trách nhiệm đào tạo Gohan, con trai của Goku, và giúp đỡ anh ta phát triển sức mạnh. Mối quan hệ giữa Piccolo và Gohan trở thành một điểm nhấn đặc biệt, với sự hiểu biết, tôn trọng và lòng hi sinh.
            
            Cuộc hành trình của Piccolo từ một kẻ thù đáng sợ đến một người hùng được kính trọng là minh chứng cho sức mạnh của sự tái tạo và khả năng thay đổi. Piccolo không chỉ là một nhân vật với khía cạnh chiến đấu xuất sắc mà còn là biểu tượng của sự trưởng thành, lòng nhân ái và trách nhiệm đối với cộng đồng.`,
            avatar: 'assets/img/avatar/picolo.jpg',
            origin: 'Namekian',
            date: '?-?-?',
            members: [

            ]
        },
        {
            id: 3,
            pathVideo: '',
            background: 'assets/img/background/gohan-bg.jpg',
            Name: 'Son Gohan',
            des: `Gohan, một nhân vật trọng yếu trong thế giới Dragon Ball, có một hành trình phát triển và ấn tượng từ một đứa trẻ nhỏ đến một chiến binh mạnh mẽ và trí tuệ. Con trai của Goku và Chi-Chi, Gohan từng bước chứng minh rằng sức mạnh thực sự không chỉ đến từ kỹ thuật chiến đấu, mà còn là kết quả của lòng nhân ái và sức mạnh tinh thần.

            Gohan xuất hiện lần đầu trong loạt truyện khi còn rất nhỏ, và ngay từ đó, anh đã làm cho người hâm mộ yêu mến với tấm lòng thuần khiết và tình cảm gia đình sâu sắc. Sau cái chết của ông Gohan, người nuôi dưỡng anh, Gohan bắt đầu cuộc hành trình của mình để trở thành một chiến binh mạnh mẽ, do Goku và Piccolo đảm trách việc đào tạo anh.
            
            Gohan trở nên nổi tiếng qua nhiều sự kiện quan trọng trong câu chuyện, từ cuộc chiến với Raditz, đến việc đánh bại Cell trong một trận chiến gây cảm động. Sức mạnh tiềm ẩn của anh được thể hiện khi trạng thái Super Saiyan xuất hiện lần đầu tiên trong cuộc chiến với Frieza.
            
            Tuy nhiên, Gohan không chỉ là một chiến binh mạnh mẽ, mà còn là một học sinh tài năng, điều này được thấy rõ qua các giai đoạn trong đời học sinh và đại học của anh. Gohan giữ vững sự cân bằng giữa cuộc sống của một chiến binh và một người học giả.
            
            Mối quan hệ gia đình và tình bạn của Gohan là một phần quan trọng của nhân vật. Tình cảm anh dành cho cha mẹ và em trai Goten, cùng với mối quan hệ với Videl và chiếc nhẫn cầu hôn, làm nổi bật sự ấn tượng và lòng trung hiếu của anh.
            
            Gohan là một nhân vật có sức ảnh hưởng lớn trong thế giới Dragon Ball, không chỉ qua sức mạnh vô song mà anh ta sở hữu mà còn qua tâm hồn lương thiện và đồng cảm của mình. Hành trình phát triển của Gohan là một câu chuyện về sự trưởng thành, tình yêu và trách nhiệm đối với thế giới và những người anh yêu quý.`,
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
            id: 4,
            pathVideo: '',
            background: 'assets/img/background/krilin-bg.jpg',
            Name: 'Krillin',
            des: `
            Krillin, một nhân vật được yêu thích trong thế giới Dragon Ball, có một hành trình đầy tính cảm và đối mặt với những thách thức lớn. Ngay từ những ngày đầu tiên khi là bạn thân của Goku, Krillin đã bắt đầu hành trình chiến đấu và phát triển bản thân.
            
            Ban đầu, Krillin tham gia giải đấu Tenkaichi để kiếm sống và theo đuổi ước mơ trở thành một chiến binh mạnh mẽ. Thông qua những cuộc chiến khốc liệt với những kẻ thù mạnh mẽ, Krillin nhanh chóng trở thành một phần quan trọng của nhóm chiến binh Z.
            
            Mặc dù có vẻ yếu đuối so với những chiến binh mạnh mẽ khác, Krillin luôn thể hiện lòng dũng cảm và quyết tâm. Anh ta đã đối mặt với nhiều thách thức nguy hiểm, từ cuộc chiến với môn phái Thiên Chúa đến đối đầu với các kẻ thù nguy hiểm như Frieza và Cell.
            
            Mối quan hệ giữa Krillin và Android 18 đã thêm vào sự phong phú và nhân văn của nhân vật. Tình cảm của họ phát triển từ ban đầu là mối quan hệ đối thủ thành một tình yêu chân thành, tạo ra một gia đình hạnh phúc với con trai Marin.
            
            Krillin không chỉ là một chiến binh với kỹ thuật chiến đấu đặc biệt mà còn là biểu tượng của lòng can đảm, lòng trung hiếu và tình bạn. Hành trình của Krillin là một câu chuyện về sự đổi mới, sự kiên nhẫn và khả năng đối mặt với những thử thách với tâm hồn mạnh mẽ và lạc quan.`,
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
            id: 5,
            pathVideo: '',
            background: 'assets/img/background/chichi-bg.jpg',
            Name: 'Chichi',
            des: `Chi-Chi, là một nhân vật đầy màu sắc và quan trọng trong vũ trụ Dragon Ball, là người vợ đảm đang của Goku và mẹ của Gohan và Goten. Chi-Chi có một đường hành trình phong phú, từ một cô gái trẻ ngây thơ đến người phụ nữ mạnh mẽ và yêu thương gia đình.

            Chi-Chi xuất hiện lần đầu trong series khi cô gặp Goku trong một cuộc thi đấu võ thuật, và sau đó, họ kết hôn. Đầu tiên, Chi-Chi thường lo lắng về tình yêu và sự chăm sóc gia đình, điều này thường xuyên dẫn đến những tình huống hài hước và đôi khi là những mâu thuẫn với sự phiêu lưu và chiến đấu của Goku.
            
            Mặc dù có vẻ như Chi-Chi là người nghiêm túc và kiên quyết khi đến việc nuôi dưỡng con cái và giữ cho họ đi học, cô cũng có một trái tim ấm áp và yêu thương. Chi-Chi luôn mong muốn cho con cái của mình một cuộc sống ổn định và hạnh phúc, và điều này thường đụng độ với mong muốn phiêu lưu và chiến đấu của Goku.
            
            Mặc dù Chi-Chi thường xuyên được miêu tả như một người mẹ chăm sóc và kiến thức về nhà, nhưng cô cũng thể hiện sự mạnh mẽ và kiên quyết. Đối mặt với những thách thức và nguy hiểm, Chi-Chi có thể trở thành một chiến binh mạnh mẽ, bảo vệ gia đình của mình bằng bất cứ cách nào cần thiết.
            
            Mối quan hệ giữa Chi-Chi và Goku thường được xây dựng qua những thử thách và thăng trầm. Dù có những khác biệt trong cách họ hiểu về hạnh phúc gia đình, tình yêu thương của họ vẫn là một phần quan trọng của cốt truyện và làm nổi bật sự đa chiều của nhân vật Chi-Chi trong thế giới Dragon Ball.`,
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
            id: 6,
            pathVideo: '',
            background: 'assets/img/background/goten-bg.jpg',
            Name: 'Son Goten',
            des: `Goten là một nhân vật quan trọng trong vũ trụ Dragon Ball, xuất hiện lần đầu trong loạt truyện sau sự kiện của Cell Saga. Anh là em trai của Gohan và là một nửa Saiyan, một nửa người trái đất, giống như anh trai mình.

            Goten thường được miêu tả với tính cách vui vẻ, tinh nghịch và luôn đầy năng lượng. Anh có khả năng biến thành Super Saiyan một cách dễ dàng từ khi còn rất nhỏ, điều mà người anh trai Gohan đã mất khá nhiều thời gian mới đạt được. Điều này tạo ra sự ngạc nhiên và kỳ diệu từ cộng đồng Dragon Ball.
            
            Mặc dù Goten không nhận được nhiều thời gian màn hình so với các nhân vật khác, anh thường xuất hiện trong các tình huống hài hước và giao tranh, đặc biệt là khi cùng với Trunks, bạn của anh, hình thành một đội Siêu Saiyan Trẻ.
            
            Goten đóng góp vào sức mạnh của nhóm Dragon Ball và thường xuyên thể hiện lòng đồng đội và lòng yêu thương gia đình. Mối quan hệ của anh với Gohan, Chi-Chi và Goku là một phần quan trọng của cốt truyện và thường tạo ra những khung cảnh gia đình ấm áp trong loạt truyện.`,
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
            id: 7,
            pathVideo: '',
            background: 'assets/img/background/bulma-bg.jpg',
            Name: 'Bulma',
            des: `
            Bulma, là một trong những nhân vật quan trọng nhất trong thế giới Dragon Ball, đóng một vai trò không thể phủ nhận trong hành trình của nhóm Dragon Ball. Dưới đây là một mô tả về Bulma:
            
            Bulma là một nhà khoa học thiên tài và là một trong những nhân vật chính từ khi loạt truyện Dragon Ball bắt đầu. Cô là người tìm ra Dragon Radar, một thiết bị giúp theo dõi Dragon Balls, điều quan trọng nhất cho cuộc phiêu lưu của Goku và đồng đội.
            
            Mặc dù không có sức mạnh chiến đấu nhưng Bulma đóng góp bằng khả năng trí tuệ, sự sáng tạo và kiến thức khoa học của mình. Cô luôn ở bên cạnh nhóm trong hành trình đi tìm kiếm Dragon Balls, chống lại thế lực đen tối và tham gia vào những cuộc phiêu lưu nguy hiểm.
            
            Bulma cũng có một vai trò quan trọng trong việc giữ cho nhóm Dragon Ball đầy đủ các phương tiện và trang thiết bị cần thiết. Mối quan hệ tình cảm giữa Bulma và Vegeta, một Saiyan mạnh mẽ, đã làm nổi bật tính đa chiều của nhân vật và tạo nên những khung cảnh hài hước và xúc động trong câu chuyện.
            
            Bulma cũng là một trong những nhân vật duyên dáng và mạnh mẽ, với tầm ảnh hưởng lớn đối với cả thế giới Dragon Ball và các người hâm mộ. Sự xuất hiện và đóng góp của Bulma đã tạo nên một hình tượng phụ nữ độc lập và mạnh mẽ trong thế giới anime và manga.`,
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
            id: 8,
            pathVideo: '',
            background: 'assets/img/background/trunks-bg.jpg',
            Name: 'Trunks',
            des: `Trunks, một nhân vật đặc biệt trong vũ trụ Dragon Ball, bắt đầu cuộc hành trình của mình khi còn là một đứa trẻ nhỏ. Là con trai của Bulma và Vegeta, Trunks hiện tại đã chứng minh sự mạnh mẽ và tính cách độc lập ngay từ những năm đầu đời.

            Từ khi còn nhỏ, Trunks đã thể hiện dấu hiệu sức mạnh đáng kinh ngạc. Mặc dù là một đứa trẻ, anh đã sớm phát hiện ra khả năng biến thành Super Saiyan, đặc biệt là khi thế giới đối mặt với những thách thức đáng sợ như Androids và Cell. Sự xuất hiện của anh đã đánh dấu một sự thay đổi quan trọng trong cuộc phiêu lưu của nhóm Dragon Ball.
            
            Trong giai đoạn thiếu niên của mình, Trunks hiện tại đã trải qua nhiều thử thách và cuộc phiêu lưu. Anh đã tham gia các cuộc chiến đấu không truce, chống lại các kẻ thù mạnh mẽ và học được nhiều từ những trận chiến đầy khó khăn. Sự đoàn kết với Goku, Gohan, và nhóm Dragon Ball đã hình thành tính cách và lòng trung hiếu của anh.
            
            Mối quan hệ giữa Trunks và gia đình cũng được đặc biệt chú ý. Anh ta thường xuyên cảm thấy áp lực từ trách nhiệm làm con trai của Vegeta và Bulma, nhưng đồng thời cũng là nguồn động viên mạnh mẽ để anh phát triển sức mạnh và trở thành một chiến binh đáng kính.
            
            Khi trưởng thành, Trunks hiện tại không chỉ là một chiến binh mạnh mẽ mà còn là một nhà lãnh đạo. Anh ta đã đóng góp vào bảo vệ thế giới khỏi những mối đe dọa lớn và trở thành một biểu tượng của lòng can đảm và đoàn kết.
            
            Cuộc hành trình của Trunks từ đứa trẻ đến người trưởng thành đầy sức mạnh và trí tuệ là một câu chuyện về sự đổi mới, lòng nhân ái và sự hi sinh cho mục tiêu lớn hơn bản thân.`,
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
            id: 9,
            pathVideo: '',
            background: 'assets/img/background/bulla-bg.jpg',
            Name: 'Bulla',
            des: `Bulla, con gái của Vegeta và Bulma, là một nhân vật trẻ tuổi và sáng tạo xuất hiện trong vũ trụ Dragon Ball. Dù chỉ mới xuất hiện sau một thời gian ngắn so với những nhân vật khác, Bulla đã để lại ấn tượng với sự linh hoạt và tương lai hứa hẹn trong hành trình của mình.

            Với đôi mắt xanh nước biển và mái tóc vàng óng ả, Bulla mang đến một diện mạo thuần khiết và quyến rũ. Cô hé lộ tính cách vô cùng năng động và tò mò, thể hiện sự hiếu động của một đứa trẻ lớn lên trong một gia đình đầy sự mạnh mẽ. Nguyên tắc đầu tiên của Bulla có thể là vẻ ngoài hồn nhiên, nhưng bên trong, cô là một người thông minh và tự chủ.
            
            Nhân vật Bulla phản ánh rõ sự đa dạng của dòng họ Briefs và Saiyan. Trong khi có sự kiên nhẫn và tư duy tích cực từ mẹ, Bulma, Bulla cũng mang đến sức mạnh và lòng kiên trì từ dòng máu Saiyan của cha mình, Vegeta. Cô không chỉ là một nhân vật phụ, mà còn đóng vai trò quan trọng trong các sự kiện, nhất là trong việc kế thừa các tài năng và sức mạnh từ gia đình.
            
            Bulla, giống như cha mình, thể hiện sự tự hào và kiêu hãnh trong việc là một thành viên của gia đình Briefs-Saiyan. Mặc dù cô thường xuyên thể hiện sự nghịch ngợm và trẻ con, Bulla cũng là một người chăm chỉ và có tình thương gia đình mạnh mẽ. Cô không ngần ngại thể hiện lòng yêu thương và quan tâm đặc biệt đối với cha mình, đưa ra hiểu biết và sự nhạy bén đáng kể.
            
            Dù là một nhân vật trẻ, Bulla đã bắt đầu thể hiện tiềm năng lớn và làm giàu thêm vũ trụ Dragon Ball với một tầm nhìn mới và tinh thần trẻ trung. Cô sẽ tiếp tục là một yếu tố quan trọng trong sự phát triển của câu chuyện và có thể đóng vai trò lớn trong những thách thức và cuộc phiêu lưu sắp tới của đội ngũ chiến binh Z.`,
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
            id: 10,
            pathVideo: '',
            background: 'assets/img/background/android18-bg.jpg',
            Name: 'Android 18',
            des: `Android 18, xuất hiện đầu tiên trong Dragon Ball Z và tiếp tục đóng vai trò quan trọng trong Dragon Ball Super, là một trong những nhân vật android tạo ra để hủy diệt Trái Đất. Tuy nhiên, số phận của cô đã thay đổi khi cô được cải tạo và giành quyền tự do, trở thành một chiến binh mạnh mẽ và có cái đầu lạnh.

            Với mái tóc vàng bạch kim, Android 18 nổi bật với vẻ đẹp quyến rũ, nhưng điều đó chỉ là bề ngoài. Bản tính cô là sự kết hợp giữa sự lạnh lùng và sự thông minh. Cô không ngần ngại thể hiện sự độc lập và quyết đoán trong mọi tình huống. Khả năng chiến đấu của Android 18 là một trong những điểm đặc biệt nổi bật. Cô sở hữu sức mạnh vô song, tốc độ nhanh nhẹn và khả năng chiến đấu chiến thuật.
            
            Ban đầu, Android 18 là một phần của kế hoạch hủy diệt của các androids, nhưng khi cô gặp Krillin, một chiến binh từ Trái Đất, tình cảm của cô bắt đầu thay đổi. Krillin đã giúp Android 18 giải thoát khỏi kiểm soát của tạo hóa và mở lòng cô với tình yêu. Họ kết hôn và có một gia đình hạnh phúc.
            
            Mặc dù còn giữ lại vẻ lạnh lùng và thái độ thực tế, Android 18 đã chứng minh rằng trái tim cô cũng có chỗ cho tình yêu và hòa bình. Cô thường xuyên thể hiện sự quan tâm đặc biệt đối với gia đình mình, đặt họ lên hàng đầu trước mọi thách thức.
            
            Trong cuộc phiêu lưu của Dragon Ball, Android 18 thường xuyên tham gia các trận chiến chống lại các thế lực đen tối, bảo vệ Trái Đất và những người cô yêu thương. Sự hiện diện của cô không chỉ là một đòn bẩy chiến đấu quan trọng mà còn mang đến một khía cạnh nhân văn và nhân quả đặc biệt, làm cho Android 18 trở thành một nhân vật đa chiều và đầy ấn tượng trong vũ trụ Dragon Ball.
            `,
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
            id: 11,
            pathVideo: '',
            background: 'assets/img/background/maron-bg.jpg',
            Name: 'Maron',
            des: `Trong thế giới Dragon Ball, Maron là một nhân vật nhỏ bé, xuất hiện trong Dragon Ball Z và Dragon Ball Super. Maron là con gái của Krillin và Android 18, và tên của cô được đặt theo tên của một người bạn của Bulma.

            Với đôi mắt lớn long lanh và mái tóc vàng nổi bật, Maron mang đến hình ảnh của một cô bé ngây thơ và đáng yêu. Cô thường xuất hiện trong bộ trang phục năng động và màu sắc tươi tắn, tạo nên vẻ đẹp trong trẻo của tuổi thơ. Tuy nhiên, nếu chỉ nhìn vào vẻ ngoài, có thể dễ dàng bỏ qua những khía cạnh đáng chú ý của nhân vật này.
            
            Maron xuất hiện trong câu chuyện như một phần quan trọng của gia đình Krillin và Android 18. Dù chỉ là một nhân vật phụ, đóng vai trò chủ yếu trong các tình tiết gia đình và hài hước. Cô là biểu tượng của sự gắn bó và hạnh phúc, làm cho gia đình Android 18 trở nên ấm cúng hơn.
            
            Tính cách của Maron thường thể hiện sự hiếu động và tò mò của một đứa trẻ, cùng với sự đáng yêu và ngây thơ. Dù có thời điểm cô trở thành nguồn khó khăn cho Krillin và Android 18 với những tình huống dễ cười, nhưng cô cũng góp phần làm phong phú thêm đường nét nhẹ nhàng và hài hước trong bối cảnh nhiều căng thẳng của Dragon Ball.
            
            Maron, mặc dù không tham gia vào những trận chiến lớn nhưng vẫn đóng một vai trò quan trọng trong việc định hình cuộc sống gia đình Krillin và Android 18. Bằng cách này, cô là một phần không thể thiếu trong cốt truyện, đánh dấu những khoảnh khắc nhẹ nhàng và hạnh phúc giữa những thách thức khó khăn của thế giới Dragon Ball.`,
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
            id: 12,
            pathVideo: '',
            background: 'assets/img/background/mr-satan-bg.jpg',
            Name: 'Mr.Satan',
            des: `
            Mr. Satan, hay còn được biết đến với cái tên "Hercule" trong một số phiên bản, là một nhân vật hài hước và đầy màu sắc trong thế giới Dragon Ball. Được giới thiệu lần đầu tiên trong Dragon Ball Z, Mr. Satan trở thành một phần quan trọng của câu chuyện, đem đến những phút giây giải trí và hài hước cho khán giả.
            
            Mr. Satan là một võ sĩ quyền anh nổi tiếng, nổi danh với việc chiến thắng các đối thủ không động đậy. Tính cách của ông nổi bật với sự kiêu ngạo và tự tin, đặc biệt là khi ông tự xưng là "Nhà vô địch thế giới." Tuy nhiên, đằng sau lớp vỏ vô cùng tự hào đó là một người đàn ông tràn đầy sự lo lắng và tình cảm gia đình sâu sắc.
            
            Trong Dragon Ball, Mr. Satan thường xuyên xuất hiện trong những tình huống hài hước, nơi ông thường tự hào về những thành tích võ thuật mà anh ta tin là mình đã đạt được. Tuy nhiên, điều đặc biệt là mặc dù ông có vẻ hơi hướng náo loạn, ông vẫn giữ được sự can đảm và trách nhiệm khi đối mặt với các thế lực đen tối.
            
            Một khía cạnh khác của Mr. Satan là tình yêu thương và lo lắng của ông đối với con gái mình, Videl, và sau này là đối với cháu gái của Videl, Pan. Mặc dù ông có thể thường xuyên tỏ ra hơi vụng trộm, nhưng tình cảm gia đình luôn là điểm động viên mạnh mẽ cho ông đối diện với những thách thức khó khăn.
            
            Một phần quan trọng của sự hiện diện của Mr. Satan là vai trò của ông trong việc hòa giải và giữ gìn hòa bình trên Trái Đất. Dù không có sức mạnh kiểu Saiyan, ông thường xuyên đóng vai trò quan trọng trong việc giúp Goku và nhóm chiến binh Z. Sự hiện diện của Mr. Satan không chỉ mang đến tiếng cười cho khán giả, mà còn giúp làm phong phú thêm các khía cạnh nhân văn và hài hước trong thế giới phức tạp của Dragon Ball.`,
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
            id: 13,
            pathVideo: '',
            background: 'assets/img/background/videl-bg.jpg',
            Name: 'Videl',
            des: `
            Videl, con gái của Mr. Satan (Hercule) và nổi tiếng trong Dragon Ball Z, là một nhân vật mạnh mẽ và nổi bật với tính cách quyết đoán và lòng dũng cảm. Xuất hiện lần đầu trong arc Cell, Videl bắt đầu hành trình của mình như một nữ chiến binh và sau đó trở thành một phần quan trọng của vũ trụ Dragon Ball.
            
            Với mái tóc đen dài và đôi mắt sáng lạng, Videl mang đến vẻ đẹp cá tính và mạnh mẽ. Tính cách của cô là sự kết hợp giữa sự độc lập và lòng nhân ái. Từng sống trong bóng tối của hình ảnh nổi tiếng của cha mình, Videl quyết tâm chứng minh sức mạnh và khả năng của mình không phụ thuộc vào danh tiếng của gia đình.
            
            Ban đầu, Videl tham gia giải đấu võ thuật để theo đuổi sự nghiệp chiến đấu. Nhưng khi cô gặp Gohan, một nhân vật mà sau này trở thành người chồng của cô, cuộc sống và mục tiêu của Videl thay đổi. Dù Gohan có sức mạnh đặc biệt và là một chiến binh mạnh mẽ, Videl không bao giờ ngần ngại đối mặt với những thách thức và luôn cố gắng vươn lên, vươn lên với tinh thần tự chủ và quả cảm.
            
            Videl cũng đóng vai trò quan trọng trong việc hình thành gia đình với Gohan. Họ có một tình yêu sâu sắc và hỗ trợ lẫn nhau trong mọi tình huống. Khi trở thành một người mẹ, Videl tiếp tục truyền đạt giá trị và lòng nhân ái cho con gái của họ, Pan.
            
            Mặc dù không có sức mạnh siêu nhiên nhưng Videl không ngần ngại tham gia vào những cuộc chiến và đóng một vai trò quan trọng trong việc bảo vệ Trái Đất khỏi những thế lực đen tối. Sự kết hợp giữa sức mạnh, lòng nhân ái và quyết tâm của Videl đã làm cho cô trở thành một trong những nhân vật phụ nữ nổi bật nhất và được yêu thích trong Dragon Ball.`,
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
            id: 14,
            pathVideo: '',
            background: 'assets/img/background/tien-shinhan-bg.jpg',
            Name: 'Tiên Shinhan',
            des: `Tiên Shinhan, hay còn được biết đến với tên gọi Tenshinhan, là một nhân vật có sức mạnh lớn và tính cách phức tạp trong thế giới Dragon Ball. Ban đầu là một đối thủ của Goku trong giải đấu võ thuật, Tiên Shinhan sau đó trở thành một chiến binh Z và đóng một vai trò quan trọng trong bảo vệ Trái Đất khỏi những thế lực đen tối.

            Với bộ trang phục truyền thống Trái Đất và đầu trọc, Tiên Shinhan có vẻ ngoài lạnh lùng và tâm hồn kiên cường. Ông là một học trò của Muten Roshi, và sở hữu nhiều kỹ thuật chiến đấu độc đáo, trong đó nổi bật nhất là Kikoho (Tri-Beam), một kỹ thuật mạnh mẽ nhưng đòi hỏi sức mạnh lớn từ người sử dụng.
            
            Tính cách của Tiên Shinhan thường là một sự pha trộn giữa tĩnh lặng và quyết đoán. Ban đầu là một chiến binh chuyên nghiệp, Tiên Shinhan dần dần thay đổi và trở nên hòa nhập với nhóm chiến binh Z. Anh ta phát triển mối quan hệ thân thiết với Goku và các đồng đội, trở thành một phần quan trọng trong nhóm.
            
            Một khía cạnh đặc biệt của Tiên Shinhan là tình bạn với Chiaotzu, một người bạn trung thành và đồng đội trên đường chiến đấu. Sự hiểu biết và tình cảm giữa họ thường xuyên được thể hiện trong những tình huống khó khăn.
            
            Tiên Shinhan thường xuyên tham gia vào những cuộc chiến quan trọng, đặc biệt là khi Trái Đất đối mặt với nguy cơ lớn. Sự trung thành, tâm huyết và sức mạnh của anh ta là một phần quan trọng trong việc bảo vệ hòa bình và công lý trên Trái Đất. Đối với người hâm mộ Dragon Ball, Tiên Shinhan là một nhân vật được kính trọng với sức mạnh và lòng trung hiếu.`,
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
            id: 15,
            pathVideo: '',
            background: 'assets/img/background/chiaotzu-bg.jpg',
            Name: 'Chiaotzu',
            des: `Chiaotzu, một nhân vật nhỏ bé và đáng yêu trong thế giới Dragon Ball, là đồng đội trung thành và bạn thân của Tiên Shinhan. Ban đầu, Chiaotzu xuất hiện như một đệ tử của Tiên Shinhan và thường xuyên tham gia các cuộc chiến đấu để bảo vệ Trái Đất khỏi những mối đe dọa đen tối.

            Với vẻ ngoài trắng trẻo, đầu tròn nhỏ, và đôi mắt lấp lánh, Chiaotzu có vẻ ngoài đáng yêu và thu hút sự quan tâm của người xem. Anh ta là một loại người nói tiếng không rõ, thường chỉ sử dụng tư duy telepathic để trò chuyện với người khác.
            
            Chiaotzu có một loạt các kỹ thuật chiến đấu độc đáo, như Dodon Ray và Telekinesis, giúp anh ta đóng một vai trò quan trọng trong các trận đấu. Mặc dù có kích thước nhỏ bé, Chiaotzu có sức mạnh đáng kinh ngạc và thường xuyên tham gia vào cuộc chiến với tinh thần đoàn kết và tình bạn.
            
            Tính cách của Chiaotzu thường là nhẹ nhàng, trung hiếu và luôn sẵn lòng hi sinh bản thân để bảo vệ người bạn và thế giới. Mối quan hệ với Tiên Shinhan là một điểm đặc biệt quan trọng trong câu chuyện, thể hiện sự tận tụy và đồng lòng giữa hai người.
            
            Mặc dù Chiaotzu không thường xuyên tham gia vào các cuộc phiêu lưu lớn nhưng vai trò của anh ta là quan trọng trong việc đánh bại những thế lực đen tối. Anh ta đại diện cho lòng trung hiếu và sự hy sinh trong hành trình bảo vệ Trái Đất của nhóm chiến binh Z. Cho dù có những giới hạn về sức mạnh, tâm hồn nhân văn và trung hiếu của Chiaotzu làm cho anh ta trở thành một nhân vật đáng kính trong vũ trụ Dragon Ball.`,
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
            id: 16,
            pathVideo: '',
            background: 'assets/img/background/yajirobe-bg.jpg',
            Name: 'Yajirobe',
            des: `Yajirobe, một nhân vật độc đáo và không thể thiếu trong thế giới Dragon Ball, là một người lính ẩn mình sống ở vùng núi và thường xuyên xuất hiện trong những tình huống quan trọng. Mặc dù anh ta không phải là một chiến binh kiểu Saiyan mạnh mẽ, vai trò của Yajirobe thường được đánh giá cao trong nhóm chiến binh Z.

            Với mái tóc đen xoăn và bộ trang phục lạ mắt, Yajirobe thường xuất hiện với vẻ ngoài lười biếng và không quan tâm. Tuy nhiên, dưới lớp vỏ ngoài ấy là một người tốt bụng và tận tụy. Anh ta thường có thái độ lười biếng, nhưng khi đến lúc cần thiết, anh ta có thể trở thành một chiến binh mạnh mẽ.
            
            Yajirobe có một thanh kiếm lớn và là một chiến binh chuyên nghiệp trong việc sử dụng vũ khí này. Anh ta thường xuyên xuất hiện để giúp đỡ nhóm chiến binh Z trong những tình huống khó khăn, thường là trong việc hỗ trợ nấu ăn hoặc mang theo một số thứ cần thiết cho cuộc chiến.
            
            Mặc dù có vẻ thô lỗ và thường xuyên có những cử chỉ thiếu tôn trọng, Yajirobe thực sự là một người có trái tim ấm áp và có lòng nhân ái. Anh ta thường xuyên thể hiện lòng lo lắng và quan tâm đặc biệt đối với nhóm chiến binh Z, dù anh ta thường giữ khoảng cách và không thích tham gia vào những cuộc chiến lớn.
            
            Yajirobe không chỉ là một nhân vật hài hước trong Dragon Ball mà còn là nguồn động viên và hỗ trợ quan trọng cho nhóm chiến binh Z. Sự tự tin trong việc sử dụng thanh kiếm, khả năng ẩn mình và tính tận tụy đã làm cho Yajirobe trở thành một phần không thể thiếu trong cuộc phiêu lưu của Goku và đồng đội.`,
            avatar: 'assets/img/avatar/yajirobe.png',
            origin: 'Trái Đất',
            date: '?-?-?',
            members: []
        },
        {
            id: 17,
            pathVideo: '',
            background: 'assets/img/background/dende-bg.jpg',
            Name: 'Dende',
            des: `
            Dende, một nhân vật quan trọng trong vũ trụ Dragon Ball, là một Namekian và một nhà thần học có sức mạnh và vai trò đặc biệt. Dende xuất hiện lần đầu tiên trong arc Frieza khi còn nhỏ tuổi, và sau đó trở thành Guardian of Earth, đóng vai trò quan trọng trong việc bảo vệ Trái Đất khỏi những mối đe dọa.
            
            Với vẻ ngoài nhỏ bé, mái tóc xanh và đôi mắt đen to tròn, Dende có vẻ ngoài trẻ trung và trong sáng. Sự tinh tế và yên bình của anh ta là điểm đặc biệt nổi bật trong số những nhân vật mạnh mẽ và hùng mạnh xung quanh.
            
            Dende thường xuyên xuất hiện ở thế giới Kami's Lookout, nơi có nhà thần của Trái Đất, và anh ta được bổ nhiệm làm Guardian of Earth sau khi Guru, nhà thần Namekian, truyền lại sức mạnh cho anh ta. Trong vai trò này, Dende có khả năng hồi phục và bảo vệ hòa bình trên Trái Đất.
            
            Một trong những đóng góp lớn nhất của Dende là việc tái tạo Shenron, chú rồng có khả năng thực hiện ba điều ước cho người triệu hồi. Dende đã cải thiện sức mạnh của Shenron, giúp chú trở nên mạnh mẽ và có thể thực hiện nhiều điều ước hơn so với phiên bản cũ.
            
            Dende thường thể hiện sự hiền lành, sẵn lòng giúp đỡ và hỗ trợ nhóm chiến binh Z trong các cuộc chiến. Anh ta có mối quan hệ thân thiết với Gohan và nhóm chiến binh, và sự xuất hiện của anh ta thường mang lại sự yên bình và hy vọng cho nhóm.
            
            Dende, với tính cách nhân văn và vai trò quan trọng trong việc bảo vệ Trái Đất, đã trở thành một nhân vật ấn tượng và có ý nghĩa sâu sắc trong câu chuyện Dragon Ball.`,
            avatar: 'assets/img/avatar/dende.png',
            origin: 'Namekian',
            date: '?-?-?',
            members: []
        },
        {
            id: 18,
            pathVideo: '',
            background: 'assets/img/background/launch-bg.jpg',
            Name: 'Launch',
            des: `
            Launch là một nhân vật độc đáo và có tính cách đặc biệt xuất hiện trong Dragon Ball. Cô là một phụ nữ với mái tóc màu xanh và mắt xanh, có khả năng biến đổi tính cách mỗi khi cô hắt hơi. Một khi cô hắt hơi, tính cách của cô chuyển từ một cô gái nhút nhát và hiền lành thành một kẻ hỗn độn và hậu đậu.
            
            Trong lúc tính cách hiền lành, Launch là một người phụ nữ dịu dàng và tận tụy. Cô xuất hiện lần đầu tiên khi Goku và nhóm chiến binh thực hiện nhiệm vụ tìm bảy viên Dragon Ball. Tính cách của cô ở giai đoạn này thường thể hiện sự lo lắng và quan tâm đặc biệt đối với nhóm.
            
            Tuy nhiên, khi cô hắt hơi, tính cách của Launch thay đổi hoàn toàn. Cô trở nên hỗn loạn, quậy phá và thậm chí có thể trở thành một tay cướp tàn bạo. Sự chuyển đổi giữa hai tính cách này xảy ra đột ngột và không có lý do rõ ràng.
            
            Mặc dù có vẻ ngoài đặc biệt và cái tên nổi tiếng, nhưng sau một thời gian, Launch ít xuất hiện và không tham gia vào những cuộc phiêu lưu lớn như các nhân vật chính khác. Điều này khiến cho số phận và nguồn gốc của cô trở nên mơ hồ và ít được phát triển trong câu chuyện Dragon Ball.
            
            Dù không được khám phá sâu sắc như một số nhân vật khác, sự độc đáo của tính cách và khả năng biến đổi của Launch đã tạo nên một nhân vật độc đáo và thu hút sự chú ý từ phía khán giả trong Dragon Ball.`,
            avatar: 'assets/img/avatar/launch.jpg',
            origin: 'Trái Đất',
            date: '?-?-?',
            members: []
        },
        {
            id: 19,
            pathVideo: '',
            background: 'assets/img/background/master-roshi-bg.png',
            Name: 'Master Roshi',
            des: `Master Roshi, còn được biết đến với tên gọi Kame-Sennin, là một nhân vật lão luyện và quen thuộc trong vũ trụ Dragon Ball. Ông là một nhà thần học, võ sư, và cũng là một người bạn thân thiết của Goku và nhóm chiến binh Z.

            Với mái tóc trắng, bộ râu dày và áo đen chấm bi, Master Roshi thường xuất hiện với vẻ ngoài của một người lão luyện. Tính cách của ông là sự kết hợp giữa sự hài hước và trí tuệ, thường xuyên thể hiện sự trìu mến đối với phụ nữ và đồng thời là một người thầy có trình độ cao về võ thuật.
            
            Master Roshi đóng vai trò quan trọng trong việc đào tạo Goku và Krillin từ khi họ còn nhỏ. Ông là người đầu tiên giới thiệu cho Goku kỹ thuật chiến đấu Kamehameha, một trong những kỹ thuật nổi tiếng trong vũ trụ Dragon Ball. Ngoài ra, ông cũng là người giúp Goku và nhóm chiến binh Z nhiều lần trong những cuộc chiến đấu quan trọng.
            
            Mặc dù có tính cách vui vẻ và hòa nhã, Master Roshi cũng thể hiện sự nghiêm túc và trách nhiệm đối với việc bảo vệ Trái Đất khỏi các mối đe dọa. Ông có sức mạnh đáng kể, đặc biệt là khi ông sử dụng sức mạnh thần thông và kỹ thuật võ thuật của mình.
            
            Master Roshi còn được biết đến với sự đam mê với việc thu thập ảnh gái xinh và thường xuyên tỏ ra lạc quan và trẻ trung, tạo nên một đối tượng thú vị và gần gũi với khán giả. Ông là một trong những nhân vật không thể thiếu, góp phần làm phong phú thêm những chi tiết hài hước và nhân văn trong thế giới Dragon Ball.
            `,
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
            id: 20,
            pathVideo: '',
            background: 'assets/img/background/taopaipai-bg.jpg',
            Name: 'Tao Pai Pai',
            des: `Tao Pai Pai, hay còn được biết đến với cái tên Mercenary Tao, là một nhân vật phản diện mạnh mẽ và nổi tiếng trong vũ trụ Dragon Ball. Là một sát thủ chuyên nghiệp, Tao Pai Pai xuất hiện trong arc Red Ribbon và trở thành một trong những đối thủ đáng gờm nhất mà Goku đã đối mặt.

            Với vẻ ngoài lạnh lùng, đầu trọc, và đôi mắt nổi bật, Tao Pai Pai mang đến ấn tượng của một sát thủ chuyên nghiệp và lạnh lùng. Anh ta sở hữu nhiều kỹ thuật chiến đấu độc đáo, như Dodon Ray - một kiểu tấn công năng lượng mạnh mẽ.
            
            Tao Pai Pai là một trong những tên tuổi lừng danh trong hội đồng Red Ribbon và nổi tiếng với khả năng ám sát bất kỳ mục tiêu nào mà anh ta được thuê. Anh ta có một tính cách tự tin, kiêu ngạo và thường xuyên thể hiện sự lạnh lùng đến mức tàn nhẫn.
            
            Trận chiến giữa Goku và Tao Pai Pai là một trong những moment kinh điển trong Dragon Ball. Dù là một tên sát thủ, Tao Pai Pai thường xuyên xuất hiện trong các tình huống hài hước do tính cách đôi khi quá mạnh mẽ và kiêu căng của mình.
            
            Mặc dù cuộc đối đầu giữa Goku và Tao Pai Pai đã kết thúc với thất bại của Tao Pai Pai, anh ta sau đó đã trở lại trong Dragon Ball Z và thậm chí trở thành một nhân vật tích cực trong một số tình tiết. Sự xuất hiện của Tao Pai Pai đã tạo ra một trong những nhân vật phản diện đáng nhớ và đầy tính biến động trong vũ trụ Dragon Ball.`,
            avatar: 'assets/img/avatar/taopaipai.jpg',
            origin: 'Unknown',
            date: '?-?-?',
            members: []
        },
        {
            id: 21,
            pathVideo: '',
            background: 'assets/img/background/yamcha-bg.jpg',
            Name: 'Yamcha',
            des: `Yamcha, một nhân vật quen thuộc trong thế giới Dragon Ball, là một chiến binh và võ sĩ xuất sắc, thường xuyên xuất hiện trong cuộc phiêu lưu của Goku và nhóm chiến binh Z. Mặc dù không phải là một Saiyan mạnh mẽ, Yamcha vẫn đóng một vai trò quan trọng trong hành trình bảo vệ Trái Đất.

            Với mái tóc đen, trang phục chiến binh và vết sẹo trên mặt, Yamcha thường xuất hiện với vẻ ngoài của một chiến binh kiên cường và dũng cảm. Tuy nhiên, mặc dù có kỹ thuật chiến đấu đa dạng, Yamcha thường xuyên trải qua những thất bại trong các trận đấu lớn, điều đã tạo nên điểm nhấn hài hước và bi động cho nhân vật.
            
            Một khía cạnh đặc biệt của Yamcha là sự đam mê với baseball, và anh ta thậm chí đã chơi cho đội quần vợt chuyên nghiệp của Trái Đất trong một số tình tiết hài hước.
            
            Tính cách của Yamcha thường là lạc quan, vui vẻ và thân thiện. Anh ta có mối quan hệ thân thiết với Goku và nhóm chiến binh Z. Mặc dù đã gặp nhiều thất bại trong các trận chiến lớn, Yamcha vẫn luôn kiên trì và sẵn sàng tham gia để bảo vệ thế giới khỏi những thế lực đen tối.
            
            Mặc dù ít khi tham gia vào các cuộc chiến lớn ở sau này, Yamcha vẫn là một nhân vật quan trọng trong vũ trụ Dragon Ball, đóng vai trò là một chiến binh trung thành và làm phong phú thêm đội ngũ nhân vật đa dạng của series này.
            `,
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
            id: 22,
            pathVideo: '',
            background: 'assets/img/background/puar-bg.png',
            Name: 'Puar',
            des: `
            Puar, một nhân vật nhỏ bé và đáng yêu trong thế giới Dragon Ball, là một đồng đội trung thành và bạn thân của Yamcha. Puar thường xuất hiện cùng với Yamcha trong các cuộc phiêu lưu và cuộc chiến đấu, đóng một vai trò quan trọng như người hỗ trợ và người bạn đồng hành.
            
            Với vẻ ngoài nhỏ nhắn, lông mày dựa ra và đôi tai nhỏ, Puar có vẻ ngoài đáng yêu và độc đáo. Puar có khả năng biến hình, cho phép anh ta thay đổi hình dạng thành bất cứ hình dạng nào anh ta muốn. Tính năng này thường được sử dụng để thực hiện các nhiệm vụ gián điệp hoặc giúp đỡ nhóm chiến binh Z trong các tình huống khó khăn.
            
            Puar thường thể hiện tính cách nhút nhát, nhưng là một người bạn đồng hành trung thành. Anh ta thường xuyên lo lắng và quan tâm đến Yamcha, cũng như các thành viên khác trong nhóm. Mối quan hệ giữa Puar và Yamcha thường được thể hiện qua sự hiểu biết sâu sắc và lòng trung hiếu.
            
            Mặc dù không phải là chiến binh mạnh mẽ, Puar thường xuyên tham gia vào các cuộc phiêu lưu và đóng góp bằng cách sử dụng khả năng biến hình của mình. Với tính cách tốt bụng và lòng trung hiếu, Puar đã trở thành một nhân vật đáng yêu và thân thuộc trong thế giới Dragon Ball.`,
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
            id: 23,
            pathVideo: '',
            background: 'assets/img/background/android17-bg.jpg',
            Name: 'Android 17',
            des: `
            Android 17, hay còn được biết đến là Seventeen, là một nhân vật mạnh mẽ và quan trọng trong thế giới Dragon Ball. Ban đầu là một trong những Android tạo ra để hủy diệt Goku, Android 17 đã trở thành một nhân vật tích cực và đóng một vai trò quan trọng trong bảo vệ Trái Đất.
            
            Với vẻ ngoài điển trai, mái tóc vàng và áo sơ mi đen, Android 17 thường xuất hiện với vẻ lạnh lùng và thờ ơ. Tính cách của anh ta thường làm cho anh ta trở thành một nhân vật bí ẩn và khó đoán. Anh ta thường thể hiện sự tình cảm với thiên nhiên và môi trường, thậm chí từ chối làm hại động vật khi tham gia vào các trận đấu.
            
            Ban đầu, Android 17 và Android 18 được tạo ra bởi Tiến sĩ Gero để làm nhiệm vụ hủy diệt Goku. Tuy nhiên, sau khi bị phong ấn, Android 17 được thức tỉnh bởi Goku và thành viên nhóm chiến binh Z khác. Anh ta chấp nhận trở thành một chiến binh và tham gia vào các cuộc chiến để bảo vệ Trái Đất.
            
            Android 17 thường xuyên hợp tác với các chiến binh khác để đối phó với các thế lực đen tối. Anh ta có sức mạnh và tố chất chiến đấu xuất sắc, đặc biệt là sau khi hồi sinh trong arc Cell Saga. Android 17 còn có khả năng hấp thụ năng lượng và biến thành Super Android 17 trong một số phiên bản và tác phẩm phụ.
            
            Với tính cách bí ẩn, sức mạnh đáng kinh ngạc và lòng trung hiếu đối với Trái Đất, Android 17 đã trở thành một nhân vật ấn tượng và được khán giả yêu thích trong vũ trụ Dragon Ball.`,
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
            id: 24,
            pathVideo: '',
            background: 'assets/img/background/oolong-bg.jpg',
            Name: 'Oolong',
            des: `Oolong, một nhân vật độc đáo và hấp dẫn trong thế giới Dragon Ball, là một con heo hình người có tâm hồn khá phức tạp. Với bộ mặt mếu máo, đôi tai to và bộ lông xám trông giống như một chú heo bình thường, Oolong chính là một hình ảnh sinh động của sự đa dạng trong Dragon Ball.

            Ban đầu, Oolong xuất hiện như một nhân vật hài hước, thường xuyên thách thức và đánh bại Goku trong những tình huống vui nhộn. Tuy nhiên, sau đó, anh ta tham gia nhóm của Bulma và Goku trong cuộc hành trình săn đuổi các viên Ngọc Rồng. Oolong là một đồng minh đáng tin cậy, sở hữu khả năng biến hình, nhờ đó anh ta có thể thay đổi hình dạng của mình thành bất cứ thứ gì anh ta muốn.
            
            Dưới vẻ ngoại hình lầy lội và tính cách hậu đậu, Oolong còn là một nhân vật có tâm hồn có phần ẩn sau lớp vỏ hài hước của mình. Anh ta thường xuyên tỏ ra tinh nghịch và đôi khi có phần tự ti về bản thân. Mặc dù là một con heo, Oolong lại có sở thích đặc biệt, đó là sưu tầm đồ chơi gấu bông. Điều này làm tôn lên khía cạnh đáng yêu và đáng quý của nhân vật.
            
            Trong quá trình cuộc phiêu lưu, Oolong dần thay đổi, từ một nhân vật chỉ quan tâm đến chính mình, anh ta đã trở nên quan tâm đến nhóm và thậm chí làm việc chung để bảo vệ thế giới khỏi những thế lực đen tối. Tính cách của Oolong ngày càng trở nên mạnh mẽ và trách nhiệm, đồng thời giữ lại được phần hài hước và duyên dáng của mình.
            
            Oolong, trong cuộc hành trình của mình, đã trở thành một phần quan trọng của đội ngũ và để lại ấn tượng sâu sắc trong trái tim người xem. Với sự kết hợp của tính cách hài hước, khả năng biến hình độc đáo, và sự thay đổi tích cực của mình, Oolong không chỉ là một nhân vật trong Dragon Ball mà còn là biểu tượng của sự phát triển và đa chiều.
            `,
            avatar: 'assets/img/avatar/oolong.jpg',
            origin: 'Unknown',
            date: '?-?-?',
            members: []
        },
        {
            id: 25,
            pathVideo: '',
            background: 'assets/img/background/cell-bg.png',
            Name: 'Cell',
            des: `
            Cell, một trong những nhân vật đặc biệt đáng sợ trong Dragon Ball, là một sinh vật có nguồn gốc tổ hợp từ các tế bào của nhiều chiến binh mạnh mẽ. Với vẻ ngoại hình lạ lùng và đặc sắc, Cell là một chủ thể được tạo ra với mục đích cuối cùng là hấp thụ các chiến binh mạnh nhất để trở thành hoàn hảo.
            
            Ban đầu, Cell xuất hiện dưới hình dạng Imperfect Cell - một hình dạng chưa hoàn thiện, với vẻ ngoại hình giống một con sâu khổng lồ. Tính cách của Cell được xây dựng với sự tinh tế và tính toán, thể hiện qua khả năng chiến đấu thông minh và sự hiểu biết sâu sắc về các chiến binh mà anh ta hướng đến.
            
            Cell không chỉ là một đối thủ mạnh mẽ với sức mạnh vô song, mà còn là một nhân vật có tính cách phức tạp. Trong quá trình tiến triển của câu chuyện, Cell trải qua các biến động tâm lý từ sự tự tin và kiêu hãnh khi tiến triển từ hình dạng Imperfect đến Semi-Perfect, và sau cùng là Perfect Cell. Dưới hình dạng Perfect, anh ta trở nên hoàn hảo, sở hữu sức mạnh khủng khiếp và tạo ra một sự lo lắng lớn trong cộng đồng chiến binh Dragon Ball.
            
            Cell không chỉ là biểu tượng của sự mạnh mẽ và nguy hiểm, mà còn là tác nhân thú vị cho những diễn biến phức tạp trong cốt truyện. Với khả năng hấp thụ và tiêu thụ các chiến binh, Cell đại diện cho sự đe dọa liên tục và áp đảo, đặt ra những thách thức đối với Goku và các chiến binh Z. Thông qua Cell, Dragon Ball mang lại cho khán giả một nhân vật không chỉ đầy sức mạnh, mà còn chứa đựng nhiều yếu tố tâm lý và tri giác.`,
            avatar: 'assets/img/avatar/cell.jpg',
            origin: 'Unknown',
            date: '?-?-?',
            members: []
        },
        {
            id: 26,
            pathVideo: '',
            background: 'assets/img/background/broly-bg.jpg',
            Name: 'Broly',
            des: `Broly, một trong những nhân vật mạnh mẽ và nổi tiếng nhất trong thế giới Dragon Ball, là một Saiyan với sức mạnh đáng kinh ngạc và một quá khứ đầy bi kịch. Tính cách của Broly thường được đặc trưng bởi sự tàn bạo và cuồng loạn, biểu hiện qua khả năng chiến đấu mạnh mẽ và khả năng tiêu diệt mọi thứ xung quanh mình.

            Ban đầu, Broly được giới thiệu qua bộ phim "Dragon Ball Z: Broly - The Legendary Super Saiyan" là một nhân vật huyền thoại, một Saiyan mới nổi có sức mạnh vượt trội so với bất kỳ chiến binh nào khác. Với vẻ ngoại hình hùng mạnh và đầy ấn tượng, Broly nhanh chóng thu hút sự chú ý của cộng đồng fan Dragon Ball.
            
            Sức mạnh của Broly không chỉ đến từ yếu tố gen di truyền mà còn xuất phát từ những trải nghiệm đau khổ trong quá khứ. Anh ta đã phải chịu đựng sự tàn ác của cha mình và trải qua những thời kỳ cô đơn và khó khăn. Điều này đã khiến Broly phát triển một tâm hồn cuồng loạn, và khi sức mạnh Super Saiyan của anh ta được giải phóng, mọi thứ xung quanh trở nên như bị hủy diệt.
            
            Tuy nhiên, sau này, với sự phát triển của câu chuyện và các bản phim mới, Broly được thể hiện với một chiều sâu tâm lý hơn. Anh ta không chỉ là một kẻ thù không thể kiểm soát, mà còn là một con người với những cảm xúc và mối liên kết với các nhân vật khác. Câu chuyện của Broly trở thành một phần quan trọng của sự phát triển và phức tạp của thế giới Dragon Ball, đồng thời tạo ra những diễn biến bất ngờ và thú vị cho người hâm mộ.`,
            avatar: 'assets/img/avatar/broly.jpg',
            origin: 'Saiyan',
            date: '?-?-?',
            members: []
        },
        {
            id: 27,
            pathVideo: '',
            background: 'assets/img/background/king-cold-bg.jpg ',
            Name: 'King Cold',
            des: `
            King Cold, người cha của Frieza và Cooler, là một nhân vật lớn mạnh mẽ xuất hiện trong thế giới Dragon Ball. Với vẻ ngoại hình hùng mạnh và vẻ lạnh lùng, King Cold nhanh chóng thu hút sự chú ý và giữ vững vị trí trùm cuối cùng của Frieza Force sau sự kiện Frieza bị Goku đánh bại trên hành tinh Namek.
            
            Với bộ não tài năng và khả năng lãnh đạo xuất sắc, King Cold thường xuyên đưa ra những quyết định chiến lược thông minh để bảo vệ lợi ích của gia tộc và mở rộng đế chế. Anh ta đưa Cooler, anh trai của Frieza, trở thành một trong những tướng lĩnh quan trọng của quân đội.
            
            Tính cách của King Cold phản ánh sự kiêu ngạo và quyền lực, nhưng cũng thể hiện sự lo lắng và tình cảm cha con. Việc anh ta tiếp tục tìm đến hành tinh Namek sau khi nghe về sự kiện Frieza thất bại là một biểu hiện rõ ràng về lòng yêu thương và quyết tâm bảo vệ gia đình.
            
            Tuy nhiên, sức mạnh không thể tránh khỏi sự thách thức của Goku, người đã trở thành Super Saiyan. Trong cuộc gặp gỡ giữa Goku và King Cold, sức mạnh của Super Saiyan đã chứng minh là đủ để đánh bại ngay cả những kẻ mạnh mẽ như anh ta. Sự kết thúc của King Cold đánh dấu một bước ngoặt trong câu chuyện và mở đường cho những phần mới của loạt truyện Dragon Ball. Mặc dù anh ta chỉ xuất hiện trong một thời gian ngắn, nhưng King Cold vẫn để lại dấu ấn với sức mạnh và tính cách độc đáo của mình.`,
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
            id: 28,
            pathVideo: '',
            background: 'assets/img/background/tullece-bg.png',
            Name: 'Tullece',
            des: `
            Tullece, hay còn được biết đến với tên gọi Tiinách (Turles trong tiếng Anh), là một nhân vật xuất hiện trong bộ phim "Dragon Ball Z: The Tree of Might" (Dai-3-Ki Tanjou!!). Tullece là một Saiyan, giống như Goku và Vegeta, nhưng không phải là một nhân vật chính trong loạt truyện Dragon Ball.
            
            Tullece xuất hiện với một vẻ ngoại hình rất giống Goku, tuy nhiên, anh ta có mái tóc dài và màu tóc đen. Trong "The Tree of Might," Tullece đến Trái Đất với mục đích sử dụng "Tree of Might" để tăng cường sức mạnh của mình và thống trị vũ trụ.
            
            Tính cách của Tullece thường được miêu tả như một nhân vật tàn bạo và tham lam, không ngần ngại sử dụng sức mạnh của cây sinh linh để đạt được mục tiêu cá nhân của mình. Anh ta không phải là một chiến binh hùng mạnh nhưng vẫn đủ mạnh để đối đầu với các chiến binh Z.
            
            Mặc dù Tullece chỉ xuất hiện trong một bộ phim và không có sự phát triển nhân cách sâu sắc như các nhân vật chính trong Dragon Ball, nhưng anh ta vẫn là một phần của thế giới mở rộng của series và mang lại những trận chiến hấp dẫn cho người hâm mộ.`,
            avatar: 'assets/img/avatar/tullece.jpg',
            origin: 'Saiyan',
            date: '?-?-?',
            members: []
        },
        {
            id: 29,
            pathVideo: '',
            background: 'assets/img/background/pilaf-bg.jpg',
            Name: 'Pilaf',
            des: `Emperor Pilaf, một nhân vật có tính cách hài hước và ít đáng sợ trong loạt truyện Dragon Ball, đã xuất hiện ngay từ mùa đầu tiên. Pilaf là một xà lợn nhỏ bé, thường mặc trang phục Trung Quốc truyền thống, và luôn mang theo đồng minh Shu và Mai.

            Tính cách chủ yếu của Pilaf là tham lam và ích kỷ. Ước mơ lớn nhất của anh ta là chiếm đoạt thế giới thông qua sức mạnh của Dragon Balls. Tuy nhiên, mọi kế hoạch của Pilaf thường xuyên thất bại do sự can thiệp của Goku và nhóm bạn. Dù có những ý định độc ác, Pilaf thường mang lại nụ cười cho khán giả thông qua những tình huống hài hước và bất ngờ.
            
            Trong mùa đầu tiên của Dragon Ball, Pilaf đặt mình vào những tình thế dở khóc dở cười khi cố gắng chiếm đoạt Dragon Balls và làm chủ thế giới. Tuy nhiên, sau những thất bại liên tục, Pilaf không còn là mối đe dọa lớn và thường chỉ xuất hiện trong những tình huống nhỏ trong các tập phim sau này.
            
            Mặc dù Pilaf không có sức mạnh lớn và thường chỉ làm nhân vật phụ, nhưng đóng góp của anh ta là không thể phủ nhận trong việc tạo ra những phần nhớ đáng yêu và hài hước trong long người hâm mộ của Dragon Ball.`,
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
            id: 30,
            pathVideo: '',
            background: 'assets/img/background/shu-bg.png',
            Name: 'Shu',
            des: `
            Shu, chú chó con hài hước và độc đáo trong loạt truyện Dragon Ball, thường xuyên xuất hiện cùng với Emperor Pilaf và Mai như một phần của bộ ba kỳ quặc trong mùa đầu tiên của series. Với bộ lông màu nâu và đôi tai to, Shu thường mặc bộ quần áo chống nhiễm điện và luôn đeo mặt nạ.
            
            Shu thường được mô tả là một nhân vật ngây thơ và hài hước, thường xuyên thực hiện các nhiệm vụ nhỏ và thú vị cho Emperor Pilaf. Mặc dù anh ta không có sức mạnh đáng kể và thường xuyên gặp khó khăn trong các kế hoạch của Pilaf, nhưng đó là những tình huống hài hước và ngộ nghĩnh mà Shu mang lại cho câu chuyện.
            
            Trong mùa đầu tiên, Shu thường tham gia vào các kế hoạch chiếm đoạt Dragon Balls, nhưng thường gặp thất bại vì sự can thiệp của Goku và nhóm bạn. Mặc dù có lúc anh ta cảm thấy sợ hãi và không hiệu quả, nhưng đôi khi Shu cũng thể hiện khả năng thông minh và linh hoạt để giải quyết tình huống.
            
            Dù Shu không phải là một nhân vật chính quan trọng trong câu chuyện Dragon Ball và thường chỉ xuất hiện trong những tình huống nhỏ, nhưng tính cách độc đáo và tính hài hước của anh ta đã làm cho anh trở nên đáng yêu trong lòng người hâm mộ. Shu mang lại một dáng vẻ nhẹ nhàng và giải trí cho loạt truyện, đồng thời là một phần không thể thiếu của nhóm quậy phá bất kỳ kế hoạch nào của Emperor Pilaf.`,
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
                    avatarMember: 'assets/img/avatar/mai.jpg',
                    NameMember: 'Mai',
                    originMember: 'Unknown',
                    dateMember: '?-?-?'
                }
            ]
        },
        {
            id: 31,
            pathVideo: '',
            background: 'assets/img/background/mai-bg.jpg',
            Name: 'Mai',
            des: `
            Mai là một nhân vật trong loạt truyện Dragon Ball, thường xuất hiện cùng với Emperor Pilaf và Shu như một thành viên của bộ ba kỳ quặc trong mùa đầu tiên của series. Mai là một phụ nữ xinh đẹp, mặc trang phục truyền thống Trung Quốc và thường sử dụng các loại vũ khí như súng và lựu đạn.
            
            Tính cách của Mai được mô tả là một nhân vật thực tế, tinh nghịch và đôi khi thậm chí là thông minh hơn so với Shu. Cô thường tham gia vào các kế hoạch của Emperor Pilaf để chiếm đoạt Dragon Balls, nhưng như bao lần trước đó, thường gặp thất bại do sự can thiệp của Goku và nhóm bạn.
            
            Mai không chỉ là một chiến binh với khả năng sử dụng vũ khí, mà còn là một phụ nữ tự lập và mạnh mẽ. Mặc dù thường xuyên thất bại trong việc thực hiện mục tiêu của mình, Mai vẫn giữ vững sự trung thành với Emperor Pilaf và là một phần quan trọng của nhóm.
            
            Dù Mai có lẽ không nhận được nhiều sự chú ý như các nhân vật chính trong Dragon Ball, nhưng tính cách linh hoạt, khả năng chiến đấu và đôi khi tính nghịch của cô đã làm cho Mai trở thành một phần độc đáo và thú vị trong loạt truyện. Cô thường xuất hiện trong những tình huống hài hước và đem lại một chút sáng tạo cho câu chuyện chính.`,
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
            id: 32,
            pathVideo: '',
            background: 'assets/img/background/korin-bg.jpg',
            Name: 'Korin',
            des: `Korin là một nhân vật quan trọng trong loạt truyện Dragon Ball, xuất hiện đầu tiên trong mùa thứ hai của series. Ông là một mèo khổng lồ sống ở đỉnh núi Korin, và có vai trò quan trọng trong việc huấn luyện và hỗ trợ Goku.

            Korin thường được miêu tả với bộ lông màu trắng và đôi mắt xanh biếc. Ông có khả năng sống rất lâu và sở hữu kiến thức rộng lớn về võ thuật và năng lực chiến đấu. Mặc dù Korin thường dường như là một nhân vật hài hước, nhưng ông thực sự là một giáo sư võ thuật xuất sắc.
            
            Khi Goku đầu tiên đến đỉnh núi Korin, Korin trở thành một người hướng dẫn quan trọng. Ông giúp Goku phát triển kỹ thuật di chuyển nhanh, gọi là "Kaioken", và cung cấp một vật phẩm quan trọng là "Senzu Bean", giúp người ăn nó hồi phục hoàn toàn sức khỏe và năng lượng.
            
            Mặc dù Korin không phải là một nhân vật chính trong Dragon Ball, nhưng đóng vai trò quan trọng trong việc giúp đỡ Goku và các chiến binh Z. Với sự hài hước và khôn ngoan, Korin trở thành một phần không thể thiếu của thế giới Dragon Ball và là một trong những nhân vật được nhớ đến.`,
            avatar: 'assets/img/avatar/korin.png',
            origin: 'Trái Đất',
            date: '?-?-?',
            members: []
        },
        {
            id: 33,
            pathVideo: '',
            background: 'assets/img/background/frieza-bg.png',
            Name: 'Frieza',
            des: `
            Frieza, hay còn được gọi là Freeza, là một trong những nhân vật chính quan trọng và là một trong những antagonists mạnh mẽ nhất trong loạt truyện Dragon Ball. Frieza là một nhân vật người ngoài hành tinh thuộc giống chủng Frost Demons, một chiến binh được biết đến với sức mạnh không đối thủ và tính cách tàn bạo.
            
            Với vẻ ngoại hình lạnh lùng và thiết kế nhân vật độc đáo, Frieza là một hoàng đế tàn nhẫn và thống trị một phần lớn vũ trụ Dragon Ball. Anh ta là kẻ thù chính trong các saga như "Frieza Saga" và "Namek Saga."
            
            Frieza có khả năng biến hình và có năm hình dạng khác nhau, với hình dạng thứ 4 (100% Power) thường được coi là mạnh nhất. Anh ta đã đánh bại Goku trước khi Goku trở thành Super Saiyan, và cuộc chiến giữa Frieza và Goku trên hành tinh Namek là một trong những moment quan trọng và kinh điển nhất trong Dragon Ball.
            
            Tính cách của Frieza được mô tả là tàn bạo, tinh quái và độc đoán. Anh ta thường giết chóc mà không do dự và thường xuyên thể hiện sự kiêu ngạo với sức mạnh của mình. Sự xuất hiện và hành động của Frieza đã tạo ra nhiều những đỉnh điểm căng thẳng và kịch tính trong cốt truyện, làm cho anh ta trở thành một trong những nhân vật đáng nhớ nhất trong vũ trụ Dragon Ball.`,
            avatar: 'assets/img/avatar/frieza.jpg',
            origin: 'Unknown',
            date: '?-?-?',
            members: [
                {
                    id_member: 27,
                    avatarMember: 'assets/img/avatar/king-cold.png',
                    NameMember: 'King Cold',
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
            id: 34,
            pathVideo: '',
            background: 'assets/img/background/cooler-bg.jpg',
            Name: 'Cooler',
            des: `Cooler, là một nhân vật quan trọng trong thế giới Dragon Ball và là anh trai của Frieza. Cooler xuất hiện trong bộ phim "Dragon Ball Z: Cooler's Revenge" và sau đó xuất hiện trong một số tác phẩm khác của Dragon Ball.

            Cooler chia sẻ nhiều đặc điểm với Frieza, nhưng anh ta có vẻ ngoại hình khác biệt, với giáp áo màu tím và hình dạng lạnh lùng. Cooler cũng là một chủ nhân của nhiều biến thể và hình dạng, bao gồm cả "Final Form," tương tự như Frieza.
            
            Trong "Cooler's Revenge," Cooler đến Trái Đất để trả thù Goku vì đã đánh bại Frieza trước đó. Cooler thể hiện sức mạnh lớn và khả năng chiến đấu thông minh, tạo ra một thách thức đáng kể cho Goku và các chiến binh Z.
            
            Mặc dù Cooler không xuất hiện nhiều trong series so với Frieza, nhưng anh ta mang lại một cái nhìn mới về gia tộc Frost Demons và mở rộng thêm về sự phức tạp của thế giới Dragon Ball. Cooler được nhớ đến như là một nhân vật mạnh mẽ và có tính cách tàn bạo, làm cho anh trở thành một phần quan trọng của loạt truyện này.`,
            avatar: 'assets/img/avatar/cooler.png',
            origin: 'Unknown',
            date: '?-?-?',
            members: [
                {
                    id_member: 27,
                    avatarMember: 'assets/img/avatar/king-cold.png',
                    NameMember: 'King Cold',
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
                        <iframe width="400" height="250" src="${card.pathVideo}" frameborder="0" allowfullscreen></iframe>
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
                                <div class="view-toggle">
                                    Xem Video
                                </div>
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

    renderItem(data) {
        const htmls = data.map(childData => {
            return `
                 <li class="item" data-index=${childData.id}>
                     <div class="figure">
                         <figure class="avatar">
                             <img src="${childData.avatar}" alt="">
                         </figure>
                         <div class="body">
                             <span class="member-name">Tên: ${childData.Name}</span>
                             <span class="origin">Nguồn gốc: ${childData.origin}</span>
                             <span class="date">Ngày sinh: ${childData.date}</span>
                         </div>
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
            _this.handleResetCard()

        })

        rightButton.addEventListener('click', () => {
            _this.nextCard()
            _this.handleResetCard()
        })

        input.addEventListener('click', (e) => {
            e.preventDefault()
        })

        searchBtn.addEventListener('click', () => {
            search.classList.toggle('active')
        })

        cardsElement.addEventListener('click', () => {
            search.classList.remove('active')
        })

        input.addEventListener('input', () => {
            showSearch.style.display = input.value !== '' ? 'flex' : 'none'

            // lọc danh sách thẻ dựa vào tên thẻ
            let items = _this.cards.filter(card => {
                return card.Name.toLowerCase().includes(input.value.toLowerCase())
            })
            
            this.renderItem(items)
        })

        showSearch.addEventListener('click', (e) => {
            const itemNode = e.target.closest('.item')
            
            if (itemNode) {
                _this.currentIndex = Number(itemNode.dataset.index)
                this.renderCard()
                search.classList.remove('active')
            }
        })


        cardsElement.addEventListener('click', (e) => {
            const rotateNode = e.target.closest('.rotate')
            const figureNode = e.target.closest('.figure-member')
            const headerNode = e.target.closest('header')
            const viewToggleNode = e.target.closest('.view-toggle')

            // xử lý khi click vào rotate
            if (rotateNode) {
                _this.handleRotateClick(rotateNode)
            }

            // xử lý khi click vào figure
            if (figureNode) {
                _this.handleFigureClick(figureNode)
            }

            // xử lý khi click vào header
            if (headerNode) {
                _this.handleHeaderClick(headerNode)
            }

            // xử lý khi click vào viewToggle
            if (viewToggleNode) {
                _this.handleViewToggleClick(viewToggleNode)
            }

        })

    },

    handleResetCard() {
        search.classList.remove('active')
        dragonball.classList.remove('video')
        search.style.display = 'flex'
        this.renderCard()
    },

    handleRotateClick(rotateNode) {
        const cardOn = rotateNode.closest('.card').querySelector('.card-on')
        const cardUnder = rotateNode.closest('.card').querySelector('.card-under')
        const iconNode = rotateNode.querySelector('.icon-rotate')
        
        rotateNode.classList.toggle('active')
        
        iconNode.style.transform = rotateNode.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0)'
        cardOn.style.display = rotateNode.classList.contains('active') ? 'none' : 'block'
        cardUnder.style.display = rotateNode.classList.contains('active') ? 'flex' : 'none'
    },

    handleFigureClick(figureNode) {
        this.currentIndex = Number(figureNode.dataset.index)
        this.renderCard()
        dragonball.classList.remove('video')
    },

    handleHeaderClick(headerNode) {
        const rowNode = headerNode.closest('.card-under').querySelector('.row')
        const iconHeaderNode = headerNode.querySelector('.icon')
        
        iconHeaderNode.classList.toggle('active')
        rowNode.style.display = iconHeaderNode.classList.contains('active') ? 'none' : 'flex'
        rowNode.style.animation = iconHeaderNode.classList.contains('active') ? `scrollUp .3s linear` : 'scrollDown .3s linear'
    },

    handleViewToggleClick(viewToggleNode) {
        const iframe = viewToggleNode.closest('.card').querySelector('iframe')

        dragonball.classList.toggle('video')
        search.style.display = dragonball.classList.contains('video') ? 'none' : 'flex'
        viewToggleNode.innerHTML = dragonball.classList.contains('video') ? 'Tắt Video' : 'Xem Video'
        
        if (dragonball.classList.contains('video') && iframe.getAttribute('src') === '') {
            alert('Video chưa được update!')
            dragonball.classList.remove('video')
            search.style.display = 'flex'
            viewToggleNode.innerHTML = 'Xem Video'
        }
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