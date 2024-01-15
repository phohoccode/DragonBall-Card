const buttonLeftElement = document.querySelector('.left')
const buttonRightElement = document.querySelector('.right')
const cardsElement = document.querySelector('.cards')
const cardElements = document.querySelectorAll('.card')
const cardOnElements = document.querySelectorAll('.card-on')
const cardUnderElements = document.querySelectorAll('.card-under')
const backgroundElemnts = document.querySelector('.background')
const NameElements = document.querySelector('.name')
const desElements = document.querySelector('.des')
const avatarElements = document.querySelector('.avatar')
const originElements = document.querySelector('.origin')
const dateElements = document.querySelector('.date')
const rotateElements = document.querySelectorAll('.rotate')
const iconRotateElements = document.querySelectorAll('.icon-rotate')
const rowElements = document.querySelectorAll('.row')
const headerElements = document.querySelectorAll('header')
const iconElements = document.querySelectorAll('.icon')
const animateBgs = document.querySelectorAll('.animated-bg')
const animateBgTexts = document.querySelectorAll('.animated-bg-text')

let indexDefault = 0
const lengthCart = cardElements.length
const indexArr = [0]

const cards = [
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
            }
        ]
    },
    {
        background: 'assets/img/background/vegeta-bg.jpg',
        Name: 'Vegata',
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
]

function checkIndex() {
    if (indexArr.includes(indexDefault)) {
        console.log('da qua')
        load()
    } else {
        console.log('chua qua')
        indexArr.push(indexDefault)
        addAnimation()
        setTimeout(load, 1000)
    }
    console.log(indexArr)
}

function addAnimation() {
    backgroundElemnts[indexDefault].classList.add('animated-bg')
    NameElements[indexDefault].classList.add('animated-bg', 'animated-bg-text')
    desElements[indexDefault].classList.add('animated-bg', 'animated-bg-text')
    avatarElements[indexDefault].classList.add('animated-bg')
    originElements[indexDefault].classList.add('animated-bg', 'animated-bg-text')
    dateElements[indexDefault].classList.add('animated-bg', 'animated-bg-text')
}

function removeAnimation() {
    backgroundElemnts[indexDefault].classList.remove('animated-bg')
    NameElements[indexDefault].classList.remove('animated-bg', 'animated-bg-text')
    desElements[indexDefault].classList.remove('animated-bg', 'animated-bg-text')
    avatarElements[indexDefault].classList.remove('animated-bg')
    originElements[indexDefault].classList.remove('animated-bg', 'animated-bg-text')
    dateElements[indexDefault].classList.remove('animated-bg', 'animated-bg-text')    
}

function load() {
    backgroundElemnts[indexDefault].innerHTML = `<img src="${cards[indexDefault].background}" alt="">`
    NameElements[indexDefault].innerHTML = `${cards[indexDefault].Name}`
    desElements[indexDefault].innerHTML = `${cards[indexDefault].des}`
    avatarElements[indexDefault].innerHTML = `<img src="${cards[indexDefault].avatar}" alt="">`
    originElements[indexDefault].innerHTML = `Nguồn gốc: ${cards[indexDefault].origin}`
    dateElements[indexDefault].innerHTML = `Ngày sinh: ${cards[indexDefault].date}`
    loadMemeber()
    removeAnimation()
}

function loadMemeber() {
    const htmls = cards[indexDefault].members.map((member, index) => {
        return ` 
        <div class="figure-member" data-index = ${member.id_member}>
            <figure class="avatar-member">
                <img src="${member.avatarMember}" alt="">
            </figure>
            <div class="body">
                <span class="member-name">Tên: ${member.NameMember}</span>
                <span class="origin-member">Nguồn gốc: ${member.originMember}</span>
                <span class="date-member">Ngày sinh: ${member.dateMember}</span>
            </div>
        </div>
        `
    })
    rowElements[indexDefault].innerHTML = htmls.join('')
}

function runDefault() {
    const currentCard = cardElements[indexDefault]
    currentCard.classList.add('active')
    addAnimation()
    setTimeout(load, 1000)
}

function setActive() {
    const currentCard = cardElements[indexDefault]
    cardElements.forEach(cartElement => {
        cartElement.classList.remove('active')
    })
    currentCard.classList.add('active')
}

function resetCard() {
    const checkCardOn = cardOnElements[indexDefault]
    const checkCardUnder = cardUnderElements[indexDefault]
    const checkRotate = rotateElements[indexDefault]
    const iconRotate = iconRotateElements[indexDefault]
    
    if ((checkCardOn.style.display === 'none')) {
        checkCardOn.style.display = 'block'
        checkCardUnder.style.display = 'none'
        checkRotate.classList.remove('active')
        iconRotate.style.transform = 'rotate(0)'
    }
}


buttonLeftElement.addEventListener('click', () => {
    indexDefault--

    if (indexDefault < 0) {
        indexDefault = lengthCart - 1
    }
    setActive()
    checkIndex()
    resetCard()
})

buttonRightElement.addEventListener('click', () => {
    indexDefault++
    console.log(indexDefault)

    if (indexDefault > lengthCart - 1) {
        indexDefault = 0
    }
    setActive()
    checkIndex()
    resetCard()
})


cardUnderElements.forEach(cardUnder => {
    cardUnder.addEventListener('click', (e) => {
        const figureElement = e.target.closest('.figure-member');

        if (figureElement) {
            const dataIndex = figureElement.dataset.index;
            // Kiểm tra nếu dataIndex là một số hợp lệ
            if (!isNaN(dataIndex)) {
                // Chuyển đổi dataIndex thành số nguyên và đặt làm indexDefault
                indexDefault = parseInt(dataIndex);
                setActive();
                checkIndex();
                resetCard();
            }
        }
    });
});


rotateElements.forEach((rotateElement, index) => {
    const currentIconRotate = iconRotateElements[index]
    const currentCardOn = cardOnElements[index]
    const currentCardUnder = cardUnderElements[index]
    rotateElement.addEventListener('click', () => {
        rotateElement.classList.toggle('active')
        currentIconRotate.style.transform = rotateElement.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0)'
        currentCardOn.style.display = rotateElement.classList.contains('active') ? 'none' : 'block'
        currentCardUnder.style.display = rotateElement.classList.contains('active') ? 'flex' : 'none'
    })
})

headerElements.forEach((header, index) => {
    const currentRow = rowElements[index]
    const currentIcon = iconElements[index]
    header.addEventListener('click', () => {
        currentIcon.classList.toggle('active')
        // currentRow.style.opacity = icon.classList.contains('active') ? '0' : '1'
        currentRow.style.display = currentIcon.classList.contains('active') ? 'none' : 'flex'
        currentRow.style.animation = currentIcon.classList.contains('active') ? `scrollUp .3s linear` : 'scrollDown .3s linear'

    })
})

runDefault()
