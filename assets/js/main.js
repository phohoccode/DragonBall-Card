const dragonBallElement = document.querySelector('#dragonball')
const cartsElement = document.querySelector('.cards')
const buttonLeftElement = document.querySelector('.left')
const buttonRightElement = document.querySelector('.right')
const cardElements = document.querySelectorAll('.card')
const cardOnElement = document.querySelectorAll('.card-on')
const cardUnderElement = document.querySelectorAll('.card-under')
const backgroundElemnt = document.querySelectorAll('.background')
const NameElement = document.querySelectorAll('.name')
const DesElement = document.querySelectorAll('.des')
const avatarElement = document.querySelectorAll('.avatar')
const originElement = document.querySelectorAll('.origin')
const dateElement = document.querySelectorAll('.date')
const rotateElements = document.querySelectorAll('.rotate')
const iconRotateElement = document.querySelectorAll('.icon-rotate')
const rowElement = document.querySelectorAll('.row')
const iconElement = document.querySelectorAll('.icon')


let indexDefault = 0
const lengthCart = cardElements.length
const indexArr = [0]

const carts = [
    {
        background: 'assets/img/background/goku-bg.jpg',
        Name: 'Son Goku',
        des: 'Goku là một chiến binh siêu mạnh, nổi tiếng với khả năng chiến đấu phi thường và sức mạnh tiềm ẩn lớn. Anh đã đạt đến nhiều dạng siêu Saiyan và có khả năng tiến triển lên cấp độ sức mạnh cao hơn. Goku cũng nổi tiếng với tinh thần lạc quan, lòng trung hiếu và tinh thần chiến đấu không ngừng.',
        avatar: 'assets/img/avatar/goku.jpg',
        origin: 'Saiyan',
        date: '18-4-737',
        members: [
            {
                avatarMember: 'assets/img/avatar/chichi.png',
                NameMember: 'ChiChi',
                originMember: 'Trái Đất',
                dateMember: '15-8-757'
            },
            {
                avatarMember: 'assets/img/avatar/gohan.jpg',
                NameMember: 'Gohan',
                originMember: 'Half-Saiyan',
                dateMember: '18-5-757'
            },
            {
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
                avatarMember: 'assets/img/avatar/bulma.png',
                NameMember: 'Bulma',
                originMember: 'Trái Đất',
                dateMember: '18-8-733'
            },
            {
                avatarMember: 'assets/img/avatar/trunks.png',
                NameMember: 'Trunks',
                originMember: 'Saiyan Hybrid',
                dateMember: '?-?-766'
            },
            {
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
        Name: 'Gohan',
        des: 'Gohan được giới thiệu lần đầu trong Dragon Ball Z khi còn là một đứa trẻ. Anh là một phần Saiyan và một phần người Trái Đất, nên có sức mạnh tiềm ẩn lớn. Gohan phát triển từ một đứa trẻ nhút nhát thành một chiến binh mạnh mẽ, đặc biệt là khi anh chuyển sang các dạng Super Saiyan.',
        avatar: 'assets/img/avatar/gohan.jpg',
        origin: 'Half-Saiyan',
        date: '18-5-757',
        members: [
            {
                avatarMember: 'assets/img/avatar/goku.jpg',
                NameMember: 'Goku',
                originMember: 'Saiyan',
                dateMember: '18-4-737'
            },
            {
                avatarMember: 'assets/img/avatar/chichi.png',
                NameMember: 'ChiChi',
                originMember: 'Trái Đất',
                dateMember: '15-8-757'
            },
            {
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
        origin: 'Người Trái Đất',
        date: '15-8-757',
        members: [
            {
                avatarMember: 'assets/img/avatar/android18.png',
                NameMember: 'Android 18',
                originMember: 'Trái Đất',
                dateMember: '?-?-?'
            },
            {
                avatarMember: 'assets/img/avatar/maron.jpeg',
                NameMember: 'Maron',
                originMember: 'Saiyan hybrid',
                dateMember: '?-?-?'
            }
        ]
    }
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
    backgroundElemnt[indexDefault].classList.add('animated-bg')
    NameElement[indexDefault].classList.add('animated-bg', 'animated-bg-text')
    DesElement[indexDefault].classList.add('animated-bg', 'animated-bg-text')
    avatarElement[indexDefault].classList.add('animated-bg')
    originElement[indexDefault].classList.add('animated-bg', 'animated-bg-text')
    dateElement[indexDefault].classList.add('animated-bg', 'animated-bg-text')
    // rotateElements[indexDefault].classList.add('animated-bg')
}

function removeAnimation() {
    backgroundElemnt[indexDefault].classList.remove('animated-bg')
    NameElement[indexDefault].classList.remove('animated-bg', 'animated-bg-text')
    DesElement[indexDefault].classList.remove('animated-bg', 'animated-bg-text')
    avatarElement[indexDefault].classList.remove('animated-bg')
    originElement[indexDefault].classList.remove('animated-bg', 'animated-bg-text')
    dateElement[indexDefault].classList.remove('animated-bg', 'animated-bg-text')
    // rotateElements[indexDefault].classList.remove('animated-bg')


}

function load() {
    backgroundElemnt[indexDefault].innerHTML = `<img src="${carts[indexDefault].background}" alt="">`
    NameElement[indexDefault].innerHTML = `${carts[indexDefault].Name}`
    DesElement[indexDefault].innerHTML = `${carts[indexDefault].des}`
    avatarElement[indexDefault].innerHTML = `<img src="${carts[indexDefault].avatar}" alt="">`
    originElement[indexDefault].innerHTML = `Nguồn gốc: ${carts[indexDefault].origin}`
    dateElement[indexDefault].innerHTML = `Ngày sinh: ${carts[indexDefault].date}`
    // rotateElements[indexDefault].innerHTML = `<i class="icon-rotate fa-light fa-arrow-right-long"></i>`
    // const htmls = carts[indexDefault].members.map((member, index) => {
    //     return ` 
    //         <div class="figure-member">
    //             <figure class="avatar-member">
    //                 <img src="${member.avatarMember}" alt="">
    //             </figure>
    //             <div class="body">
    //                 <span class="member-name">${member.NameMember}</span>
    //                 <span class="origin-member">${member.originMember}</span>
    //                 <span class="date-member">${member.dateMember}</span>
    //             </div>
    //         </div>
    //     `
    // })
    // rowElement[indexDefault].innerHTML = htmls.join('')
    loadMemeber()
    removeAnimation()
}

function loadMemeber() {
    const htmls = carts[indexDefault].members.map((member, index) => {
        return ` 
            <div class="figure-member">
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
    rowElement[indexDefault].innerHTML = htmls.join('')
}


function run() {
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


buttonLeftElement.addEventListener('click', () => {
    indexDefault--

    if (indexDefault < 0) {
        indexDefault = lengthCart - 1
    }
    setActive()
    checkIndex()
})

buttonRightElement.addEventListener('click', () => {
    indexDefault++
    console.log(indexDefault)

    if (indexDefault > lengthCart - 1) {
        indexDefault = 0
    }
    setActive()
    checkIndex()
})

rotateElements.forEach((rotateElement, index) => {
    const currentIconRotate = iconRotateElement[index]
    const currentCardOn = cardOnElement[index]
    const currentCardUnder = cardUnderElement[index]
    rotateElement.addEventListener('click', () => {
        rotateElement.classList.toggle('active')
        currentIconRotate.style.transform = rotateElement.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0)'
        currentCardOn.style.display = rotateElement.classList.contains('active') ? 'none' : 'block'
        currentCardUnder.style.display = rotateElement.classList.contains('active') ? 'flex' : 'none'
    })
})

iconElement.forEach((icon, index) => {
    const currentRow = rowElement[index]
    icon.addEventListener('click', () => {
        icon.classList.toggle('active')
        // currentRow.style.opacity = icon.classList.contains('active') ? '0' : '1'
        currentRow.style.display = icon.classList.contains('active') ? 'none' : 'flex'
        currentRow.style.animation = icon.classList.contains('active') ? `scrollUp .3s linear` : 'scrollDown .3s linear'

    })
})

run()
