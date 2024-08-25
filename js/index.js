//HTML全体
const html = document.querySelector('#html');
//画面全体
const allPortfolio = document.querySelector('#allPortfolio');
//カーソル
const cursor = document.querySelector('#cursor'); 
//PUSH文字
const pushText =document.querySelector('#pushText');
//SCROLL文字
const scrollText =document.querySelector('#scrollText');
//0.1秒遅いカーソル
const cursorSlow = document.querySelector('#cursorSlow'); 
//0.2秒遅いカーソル
const cursorSlowSlow = document.querySelector('#cursorSlowSlow'); 
//ロード文字
const loadText = document.querySelector('#loadText');
// 右ロード画面
const loadLeft = document.querySelector('#loadLeft');
// 左ロード画面
const loadRight = document.querySelector('#loadRight');
//ホームナビゲーション
const navHome = document.querySelector("#navHome")
//ホームナビゲーション文字（英語）
const navHomeEn = document.querySelector("#navHomeEn")
//ホームビゲーション文字（日本語）
const navHomeJa = document.querySelector("#navHomeJa")
//プロフィールナビゲーション
const navprofile = document.querySelector("#navprofile")
//プロフィールナビゲーション文字（英語）
const navprofileEn = document.querySelector("#navprofileEn")
//プロフィールナビゲーション文字（日本語）
const navprofileJa = document.querySelector("#navprofileJa")
//スキルナビゲーション
const navskills = document.querySelector("#navskills")
//スキルナビゲーション文字（英語）
const navskillsEn = document.querySelector("#navskillsEn")
//スキルナビゲーション文字（日本語）
const navskillsJa = document.querySelector("#navskillsJa")
//ホーム画面
const home = document.querySelector("#home")
//星
const stars = document.querySelector('#stars')
//タイトル
const portfolio = document.querySelector('#portfolio')
const myName = document.querySelector('#myName')
//プロフィール画面
const profile = document.querySelector("#profile")
//雲
const clouds = document.querySelector('#clouds')
//プロフィールテキスト画面(スクロール文字用)
const profileTextScreen = document.querySelector('#profileTextScreen')
//スキル画面
const skills = document.querySelector("#skills")
//シャボン玉
const soaps = document.querySelector('#soaps')
//スキルテキスト画面(スクロール文字用)
const skillsTextScreen = document.querySelector('#skillsTextScreen')


//初期カーソル(レスポンシブ)
document.addEventListener('mousemove', (e) => {
    if (window.matchMedia('(max-width: 480px)').matches) {
        cursor.style.display = 'none';
        cursorSlow.style.display = 'none';
        cursorSlowSlow.style.display = 'none';
        html.style.cursor = 'pointer';
    } else if (window.matchMedia('(max-width:959px)').matches) {
        cursor.style.display = 'none';
        cursorSlow.style.display = 'none';
        cursorSlowSlow.style.display = 'none';
        html.style.cursor = 'pointer';
    }else{
        html.style.cursor = 'none';
        cursor.style.display = 'block';
        cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
        cursorSlow.animate(
            {
                display: ['block'],
                transform: ['translate(' + e.clientX + 'px, ' + e.clientY + 'px)']
            }
            ,
            {
                delay: 100,
                duration: 1000,
                easing: 'ease',
                fill: 'forwards'
            }
        )
        cursorSlowSlow.animate(
            {
                display: ['block'],
                transform: ['translate(' + e.clientX + 'px, ' + e.clientY + 'px)']
            }
            ,
            {
                delay: 200,
                duration: 1000,
                easing: 'ease',
                fill: 'forwards'
            }
        )
    }
})



//ロード
window.addEventListener('load' , () => {
    //ロード文字
    loadText.classList.add('fadeOut')
    loadText.animate(
        {
            left: ['-50vw']
        }
        ,
        {
            delay: 3000,
            duration: 1000,
            easing: 'ease',
            fill: 'forwards'
        }
    )
    //左ロード画面
    loadLeft.animate(
        {
            borderBottomRightRadius: ['50vw 100vh']
        }
        ,
        {
            delay: 2000,
            duration: 1000,
            easing: 'ease',
            fill: 'forwards'
        }
    )
    loadLeft.animate(
        {
            left: ['-60vw']
        }
        ,
        {
            delay: 3000,
            duration: 1000,
            easing: 'ease',
            fill: 'forwards'
        }
    )
    loadLeft.animate(
        {
            display: ['none']
        }
        ,
        {
            delay: 4000,
            duration: 1,
            easing: 'ease',
            fill: 'forwards'
        }
    )
    // 右ロード画面
    loadRight.animate(
        {
            borderBottomLeftRadius: ['50vw 100vh']
        }
        ,
        {
            delay: 2000,
            duration: 1000,
            easing: 'ease',
            fill: 'forwards'
        }
    )
    loadRight.animate(
        {
            right: ['-60vw']
        }
        ,
        {
            delay: 3000,
            duration: 1000,
            easing: 'ease',
            fill: 'forwards'
        }
    )
    loadRight.animate(
        {
            display: ['none']
        }
        ,
        {
            delay: 4000,
            duration: 1,
            easing: 'ease',
            fill: 'forwards'
        }
    )
    //タイトル
    portfolio.animate(
        {
            top: ['55%','60%'],
            opacity: [0,1]
        }
        ,
        {
            delay: 3500,
            duration: 1000,
            easing: 'ease',
            fill: 'forwards'
        }
    )
    myName.animate(
        {
            top: ['55%','60%'],
            opacity: [0,1]
        }
        ,
        {
            delay: 4000,
            duration: 1000,
            easing: 'ease',
            fill: 'forwards'
        }
    )
})


//関数（ホバーイベント）
function navMouseenter(navEn,navJa){
    //カーソル
    cursor.animate(
        {
            top: ['-30px'],
            left: ['-30px'],
            height: ['60px'],
            width: ['60px'],
            backgroundColor: ['#eba0a0']
        }
        ,
        {
            duration: 500,
            easing: 'ease',
            fill: 'forwards'
        }
    )
    cursorSlow.animate(
        {
            opacity: ['0']
        }
        ,
        {
            duration: 500,
            easing: 'ease',
            fill: 'forwards'
        }
    )
    cursorSlowSlow.animate(
        {
            opacity: ['0']
        }
        ,
        {
            duration: 500,
            easing: 'ease',
            fill: 'forwards'
        }
    )
    if(navEn == "null" && navJa == "null"){
        //SCROLL文字
        scrollText.style.display = 'block';
        scrollText.animate(
            {
                opacity: ['1'],
            }
            ,
            {
                duration: 500,
                easing: 'ease',
                fill: 'forwards'
            }
        )
    }else{
        //PUSH文字
        pushText.style.display = 'block';
        pushText.animate(
            {
                opacity: ['1'],
            }
            ,
            {
                duration: 500,
                easing: 'ease',
                fill: 'forwards'
            }
        )
        //ナビゲーション文字（英語）
        navEn.animate(
            {
                opacity: ['0']
            }
            ,
            {
                duration: 500,
                easing: 'ease',
                fill: 'forwards'
            }
        )
        //ナビゲーション文字（日本語）
        navJa.animate(
            {
                opacity: ['1']
            }
            ,
            {
                duration: 500,
                easing: 'ease',
                fill: 'forwards'
            }
        )
    }
}
//ホームナビゲーションホバー時
navHome.addEventListener('mouseenter', () => {
    navMouseenter(navHomeEn,navHomeJa)
})
//プロフィールナビゲーションホバー時
navprofile.addEventListener('mouseenter', () => {
    navMouseenter(navprofileEn,navprofileJa)
})
//スキルナビゲーションホバー時
navskills.addEventListener('mouseenter', () => {
    navMouseenter(navskillsEn,navskillsJa)
})
//プロフィールテキスト画面(スクロール文字用)
profileTextScreen.addEventListener('mouseenter', () => {
    navMouseenter("null","null")
})
//スキルテキスト画面(スクロール文字用)
skillsTextScreen.addEventListener('mouseenter', () => {
    navMouseenter("null","null")
})



//関数(ナビゲーションホバー解除時)
function navMouseleave(navEn,navJa){
    //カーソル
    cursor.animate(
        {
            top: ['-10px'],
            left: ['-10px'],
            height: ['20px'],
            width: ['20px'],
            backgroundColor: ['#d4c520']
            
        }
        ,
        {
            duration: 500,
            easing: 'ease',
            fill: 'forwards'
        }
    )
    cursorSlow.animate(
        {
            opacity: ['1']
        }
        ,
        {
            duration: 500,
            easing: 'ease',
            fill: 'forwards'
        }
    )
    cursorSlowSlow.animate(
        {
            opacity: ['1']
        }
        ,
        {
            duration: 500,
            easing: 'ease',
            fill: 'forwards'
        }
    )
    if(navEn == "null" && navJa == "null"){
        //SCROLL文字
        scrollText.style.display = 'none';
        scrollText.animate(
            {
                opacity: ['0'],
            }
            ,
            {
                duration: 500,
                easing: 'ease',
                fill: 'forwards'
            }
        )
    }else{
        //PUSH文字
        pushText.style.display = 'none';
        pushText.animate(
            {
                opacity: ['0'],
            }
            ,
            {
                duration: 500,
                easing: 'ease',
                fill: 'forwards'
            }
        )
        //ナビゲーション文字（英語）
        navEn.animate(
            {
                opacity: ['1']
            }
            ,
            {
                duration: 500,
                easing: 'ease',
                fill: 'forwards'
            }
        )
        //ナビゲーション文字（日本語）
        navJa.animate(
            {
                opacity: ['0']
            }
            ,
            {
                duration: 500,
                easing: 'ease',
                fill: 'forwards'
            }
        )
    }
}
//ホームナビゲーションホバー解除時
navHome.addEventListener('mouseleave', () => {
    navMouseleave(navHomeEn,navHomeJa)
})
//プロフィールナビゲーションホバー解除時
navprofile.addEventListener('mouseleave', () => {
    navMouseleave(navprofileEn,navprofileJa)
})
//スキルナビゲーションホバー解除時
navskills.addEventListener('mouseleave', () => {
    navMouseleave(navskillsEn,navskillsJa)
})
//プロフィールテキスト画面(スクロール文字用)
profileTextScreen.addEventListener('mouseleave', () => {
    navMouseleave('null','null')
})
//スキルテキスト画面(スクロール文字用)
skillsTextScreen.addEventListener('mouseleave', () => {
    navMouseleave('null','null')
})



//関数(ナビゲーションクリック時)
function navClick(){
    //左ロード画面
    loadLeft.animate(
        {
            display: ['block']
        }
        ,
        {
            duration: 1,
            easing: 'ease',
            fill: 'forwards'
        }
    )
    loadLeft.animate(
        {
            left: [0]
        }
        ,
        {
            duration: 500,
            easing: 'ease',
            fill: 'forwards'
        }
    )
    loadLeft.animate(
        {
            borderBottomRightRadius: [0]
        }
        ,
        {
            duration: 500,
            easing: 'ease',
            fill: 'forwards'
        }
    )
    loadLeft.animate(
        {
            borderBottomRightRadius: ['50vw 100vh']
        }
        ,
        {
            delay: 1000,
            duration: 500,
            easing: 'ease',
            fill: 'forwards'
        }
    )
    loadLeft.animate(
        {
            left: ['-60vw']
        }
        ,
        {
            delay: 1000,
            duration: 500,
            easing: 'ease',
            fill: 'forwards'
        }
    )
    loadLeft.animate(
        {
            display: ['none']
        }
        ,
        {
            delay: 1500,
            duration: 1,
            easing: 'ease',
            fill: 'forwards'
        }
    )
    // 右ロード画面
    loadRight.animate(
        {
            display: ['block']
        }
        ,
        {
            duration: 1,
            easing: 'ease',
            fill: 'forwards'
        }
    )
    loadRight.animate(
        {
            right: [0]
        }
        ,
        {
            duration: 500,
            easing: 'ease',
            fill: 'forwards'
        }
    )
    loadRight.animate(
        {
            borderBottomLeftRadius: [0]
        }
        ,
        {
            duration: 500,
            easing: 'ease',
            fill: 'forwards'
        }
    )
    loadRight.animate(
        {
            borderBottomLeftRadius: ['50vw 100vh']
        }
        ,
        {
            delay: 1000,
            duration: 500,
            easing: 'ease',
            fill: 'forwards'
        }
    )
    loadRight.animate(
        {
            right: ['-60vw']
        }
        ,
        {
            delay: 1000,
            duration: 500,
            easing: 'ease',
            fill: 'forwards'
        }
    )
    loadRight.animate(
        {
            display: ['none']
        }
        ,
        {
            delay: 1500,
            duration: 1,
            easing: 'ease',
            fill: 'forwards'
        }
    )
}
//関数（画面切り替え）
function navchange(navClick){
    if(navClick == 'navHome'){
        home.style.display = 'block';
        profile.style.display = 'none';
        skills.style.display = 'none';
    }else if(navClick == 'navprofile'){
        home.style.display = 'none';
        profile.style.display = 'block';
        skills.style.display = 'none';
    }else if(navClick == 'navskills'){
        home.style.display = 'none';
        profile.style.display = 'none';
        skills.style.display = 'block';
    }
}
//ホームナビゲーションクリック時
navHome.addEventListener('click', () => {
    navClick();
    setTimeout(navchange, 750,'navHome')
})
//プロフィールナビゲーションクリック時
navprofile.addEventListener('click', () => {
    navClick();
    setTimeout(navchange, 750,'navprofile')
})
//スキルナビゲーションクリック時
navskills.addEventListener('click', () => {
    navClick();
    setTimeout(navchange, 750,'navskills')
})



//星
window.addEventListener('load', () => {
    for (let i = 0; i <= 400; i++) {
        const random = Math.random()*100;
        if(random < 98){
            const star = document.createElement("span");
            star.className = "star";
            star.style.display = 'block';
            const minSize = 1;
            const maxSize = 3;
            const size = Math.random() * (maxSize - minSize) + minSize;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${Math.random()*100}%`;
            star.style.top = `${Math.random()*100}%`;
            star.style.animationDelay = `${Math.random() * 10}s`;
            stars.appendChild(star);
        }else{
            const flowStar = document.createElement("span");
            flowStar.className = "flowStar";
            flowStar.style.display = 'block';
            flowStar.innerHTML = '<span>★</span>';
            const minSize = 5;
            const maxSize = 7;
            const size = Math.random() * (maxSize - minSize) + minSize;
            flowStar.style.width = `${size}px`;
            flowStar.style.height = `${size}px`;
            flowStar.style.fontSize = `${(size * 9) - (size*size)}px`;
            flowStar.style.left = `${Math.random()*100}%`;
            flowStar.style.top = `${Math.random()*100}%`;
            flowStar.style.animationDelay = `${Math.random() * 10}s`;
            stars.appendChild(flowStar);
        }
    }
})



//雲
function cloud(cloudCount){
    for (let i = 0; i <= cloudCount; i++) {
        const random = Math.random()*100;
        const cloud = document.createElement("span");
        cloud.className = "cloud";
        cloud.style.display = 'block';
        cloud.innerHTML = '<span>☁</span>';
        const minSize = 50; // 雲の最小サイズ
        const maxSize = 300; // 雲の最大サイズ
        const size = Math.random() * (maxSize - minSize) + minSize;
        cloud.style.width = `${size}px`;
        cloud.style.height = `${size}px`;
        cloud.style.fontSize = `${size}px`;
        cloud.style.left = `${Math.random()*100}%`;
        cloud.style.top = `${Math.random()*100}%`;
        cloud.style.animationDelay = `${Math.random() * 10}s`;
        clouds.appendChild(cloud);
    }
}
//雲の数（レスポンシブ対応）
window.addEventListener('load', () => {
    if (window.matchMedia('(max-width: 480px)').matches) {
        cloud('20')
    } else if (window.matchMedia('(max-width:959px)').matches) {
        cloud('30')
    }else{
        cloud('50')
    }
})



//シャボン玉
function soap(soapCount){
    for (let i = 0; i <= soapCount; i++) {
        const random = Math.random()*100;
        const soap = document.createElement("span");
        soap.className = "soap";
        soap.style.display = 'block';
        const minSize = 50;
        const maxSize = 150;
        const size = Math.random() * (maxSize - minSize) + minSize;
        soap.style.width = `${size}px`;
        soap.style.height = `${size}px`;
        soap.style.left = `${Math.random()*100}%`;
        soap.style.top = `${Math.random()*100}%`;
        soap.style.animationDelay = `${Math.random() * 10}s`;
        soap.style.opacity = '0';
        soaps.appendChild(soap);
    }
}
//シャボン玉の数（レスポンシブ対応）
window.addEventListener('load', () => {
    if (window.matchMedia('(max-width: 480px)').matches) {
        soap('20')
    } else if (window.matchMedia('(max-width:959px)').matches) {
        soap('30')
    }else{
        soap('50')
    }
})
