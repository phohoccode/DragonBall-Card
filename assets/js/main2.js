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
                },

            ]
        },
        {
            id: 1,
            pathVideo: '',
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
            pathVideo: '',
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
            id: 10,
            pathVideo: '',
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
            id: 11,
            pathVideo: '',
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
            id: 12,
            pathVideo: '',
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
            id: 13,
            pathVideo: '',
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
            id: 14,
            pathVideo: '',
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
            id: 15,
            pathVideo: '',
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
            id: 16,
            pathVideo: '',
            background: 'assets/img/background/yajirobe-bg.jpg',
            Name: 'Yajirobe',
            des: 'Yajirobe là một nhân vật lạ lẫm nhưng có đóng góp quan trọng trong cuộc chiến chống lại một số mối đe dọa trong Dragon Ball. Anh ta nổi tiếng với sức mạnh về vũ khí và đặc biệt là dao kiếm, và thường xuất hiện để giúp đỡ nhóm Z Fighters khi cần thiết.',
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
            des: 'Dende là một Namekian và đồng thời là Guardian của Trái Đất sau sự kiện Cell Saga. Anh có khả năng hồi phục và làm sống lại người chết. Dende thường hỗ trợ nhóm Z Fighters trong những cuộc chiến đấu quan trọng.',
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
            des: 'Launch là một nhân vật có tính cách hai mặt, biến đổi giữa hai dạng khác nhau khi cô nổi giận hoặc sợ hãi. Mặt một của Launch là dễ thương và nhân từ, trong khi mặt khác là táo bạo và hỗn loạn. Cô xuất hiện trong Dragon Ball và Dragon Ball Z.',
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
            id: 20,
            pathVideo: '',
            background: 'assets/img/background/taopaipai-bg.jpg',
            Name: 'Tao Pai Pai',
            des: 'Tao Pai Pai là một sát thủ chuyên nghiệp và là một trong những đối thủ nguy hiểm của Goku. Ông nổi tiếng với khả năng chiến đấu xuất sắc và sử dụng vũ khí độc đáo như đao giết và súng.',
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
            id: 22,
            pathVideo: '',
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
            id: 23,
            pathVideo: '',
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
            id: 24,
            pathVideo: '',
            background: 'assets/img/background/oolong-bg.jpg',
            Name: 'Oolong',
            des: 'Oolong là một trong những nhân vật đầu tiên gặp Goku trong Dragon Ball. Anh ta là một con heo biết nói và có khả năng biến hình. Mặc dù thường tham gia các cuộc phiêu lưu, nhưng Oolong thường xuyên gặp phải những tình huống hài hước.',
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
            des: 'Cell là một sinh vật có nguồn gốc từ sự hấp thụ các nhân vật Android. Anh ta là một trong những đối thủ mạnh mẽ nhất mà nhóm Z Fighters phải đối mặt. Cell có khả năng hấp thụ các Android để tiến triển và trở thành một siêu sinh vật.',
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
            des: 'Broly là một Saiyan với sức mạnh khủng khiếp, nổi tiếng trong loạt phim Dragon Ball Z và Dragon Ball Super. Anh ta có khả năng biến thành dạng Legendary Super Saiyan, nơi sức mạnh của anh ta tăng lên đáng kể.',
            avatar: 'assets/img/avatar/broly.jpg',
            origin: 'Saiyan',
            date: '?-?-?',
            members: []
        },
        {
            id: 27,
            pathVideo: '',
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
            id: 28,
            pathVideo: '',
            background: 'assets/img/background/tullece-bg.png',
            Name: 'Tullece',
            des: 'Tullece là một nhân vật xuất hiện trong bộ phim Dragon Ball Z: The Tree of Might. Anh ta là một Saiyan và sử dụng quả cầu Tree of Might để tăng cường sức mạnh của mình.',
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
            id: 30,
            pathVideo: '',
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
            id: 32,
            pathVideo: '',
            background: 'assets/img/background/korin-bg.jpg',
            Name: 'Korin',
            des: 'Korin là một nhân vật xuất hiện trong Dragon Ball, là một hổ trắng sống ở Tower Korin. Anh ta có thể cung cấp Senzu Beans, một loại thảo mộc có khả năng chữa lành và khôi phục sức mạnh người ăn.',
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
            id: 34,
            pathVideo: '',
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
        },
                     
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
            _this.renderCard()
            search.classList.remove('active')
            dragonball.classList.remove('video')

        })

        rightButton.addEventListener('click', () => {
            _this.nextCard()
            _this.renderCard()
            search.classList.remove('active')
            dragonball.classList.remove('video')
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
            let items = _this.cards.filter(item => {
                return item.Name.toLowerCase().includes(input.value.toLowerCase())
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

            if (viewToggleNode) {
                dragonball.classList.toggle('video')
                viewToggleNode.innerHTML = dragonball.classList.contains('video') ? 'Tắt Video' : 'Xem Video'
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