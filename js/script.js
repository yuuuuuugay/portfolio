//画面全体
const html = document.querySelector('html');



// カーソル
    //カーソル全体
    const cursor = document.querySelector('#cursor');
    //１つ目のカーソル
    const firstCursor = document.querySelector('#firstCursor');
    //２つ目のカーソル
    const secondCursor = document.querySelector('#secondCursor');
    //３つ目のカーソル
    const thirdCursor = document.querySelector('#thirdCursor');



// ロード画面
    //ロード文字
    const loadText = document.querySelector('#loadText');
    // 右ロード画面
    const loadLeft = document.querySelector('#loadLeft');
    // 左ロード画面
    const loadRight = document.querySelector('#loadRight');



// ナビゲーション
    //ナビゲーションエリア
    const nav = document.querySelector("#nav");
    //ナビゲーション全リンク
    const navLinks = document.querySelectorAll('.navLink');
    //ホームナビゲーション
    const navHome = document.querySelector("#navHome");
    //ホームナビゲーション文字（英語）
    const navHomeEn = document.querySelector("#navHomeEn");
    //ホームビゲーション文字（日本語）
    const navHomeJa = document.querySelector("#navHomeJa");
    //プロフィールナビゲーション
    const navAbout = document.querySelector("#navAbout");
    //プロフィールナビゲーション文字（英語）
    const navAboutEn = document.querySelector("#navAboutEn");
    //プロフィールナビゲーション文字（日本語）
    const navAboutJa = document.querySelector("#navAboutJa");
    //スキルナビゲーション
    const navSkill = document.querySelector("#navSkill");
    //スキルナビゲーション文字（英語）
    const navSkillEn = document.querySelector("#navSkillEn");
    //スキルナビゲーション文字（日本語）
    const navSkillJa = document.querySelector("#navSkillJa");
    //成果物ナビゲーション
    const navWork = document.querySelector("#navWork");
    //成果物ナビゲーション文字（英語）
    const navSOthersEn = document.querySelector("#navSOthersEn");
    //成果物ナビゲーション文字（日本語）
    const navWorkJa = document.querySelector("#navWorkJa");
    //コンタクトナビゲーション
    const navContact = document.querySelector("#navContact");
    //コンタクトナビゲーション文字（英語）
    const navContactEn = document.querySelector("#navContactEn");
    //コンタクトナビゲーション文字（日本語）
    const navContactJa = document.querySelector("#navContactJa");
    //全リンク
    const navs = document.querySelectorAll('a');



//モード切替
    //クエリ取得
    let query = window.location.search.slice(0);
    //トグル全体
    const toggle = document.querySelector("#toggle");
    //トグルエリア
    const toggleArea = document.querySelector("#toggleArea");
    //トグルボタン
    const toggleSwitch = document.querySelector("#toggleSwitch");



//画面
    //ホーム画面
    const home = document.querySelector('#home');
    //ホーム画面タイトル
    const portfolio = document.querySelector('#portfolio');
    const myName = document.querySelector('#myName');
    //アバウト画面
    const about = document.querySelector('#about');
    //スキル画面
    const skill = document.querySelector('#skill');
    //スキル画面全趣味
    const likings = document.querySelectorAll('.liking');
    //スキル画面趣味アイコン
    const likingIcons = document.querySelectorAll('.likingIcon');
    //スキル画面趣味テキスト
    const likingTextAreas = document.querySelectorAll('.likingTextArea');
    //スキル画面左矢印
    const arrowLeft = document.querySelector('#arrowLeft');
    //スキル画面右矢印
    const arrowRight = document.querySelector('#arrowRight');
    //ワーク画面
    const work = document.querySelector('#work');
    //コンタクト画面
    const contact = document.querySelector('#contact');
    //星
    const stars = document.querySelector('#stars');



//ロード
window.addEventListener('load' , (e) => {
    //ロード文字
    loadText.animate(
        {opacity: ['1']},
        {duration: 1000,easing: 'ease',fill: 'forwards'}
    )
    loadText.animate(
        {opacity: ['0']},
        {delay: 1000,duration: 500,easing: 'ease',fill: 'forwards'}
    )
    loadText.animate(
        {top: ['0'],height: ['0'],display: ['none']},
        {delay: 1500,duration: 1000,easing: 'ease',fill: 'forwards'}
    )
    //左ロード画面
    loadLeft.animate(
        {borderBottomRightRadius: ['50vw 100vh']},
        {delay: 1000,duration: 750,easing: 'ease',fill: 'forwards'}
    )
    loadLeft.animate(
        {width: ['0']},
        {delay: 1750,duration: 1000,easing: 'ease',fill: 'forwards'}
    )
    // 右ロード画面
    loadRight.animate(
        {borderBottomLeftRadius: ['50vw 100vh']},
        {delay: 1000,duration: 750,easing: 'ease',fill: 'forwards'}
    )
    loadRight.animate(
        {width: ['0']},
        {delay: 1750,duration: 1000,easing: 'ease',fill: 'forwards'}
    )
    //ホーム画面タイトル
    if(portfolio && myName){
        portfolio.animate(
            {top: ['55%','60%'],opacity: [0,1]},
            {delay: 2500,duration: 1000,easing: 'ease',fill: 'forwards'}
        )
        myName.animate(
            {top: ['55%','60%'],opacity: [0,1]},
            {delay: 3000,duration: 1000,easing: 'ease',fill: 'forwards'}
        )
    }



    //ワーク詳細画面時
    let workDetailLink =window.location.href;
    if(workDetailLink.indexOf('Detail') !== -1){
        html.style.cursor = 'auto';
        navs.forEach(nav => {
            nav.style.cursor = 'pointer';
            if(nav.id == 'externalLink'){
                nav.style.textDecoration = 'underline';
                nav.style.color = '#0000EE';
            }
        })
        cursor.style.display = 'none';
        nav.classList.add("workDetailNav");
        navLinks.forEach(navLink => {
            navLink.classList.add("workDetailNavLink");
        })
        toggle.style.display = 'none';
    }



    //星アニメーション
    if(stars != null){
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
                if(portfolio != null && myName != null){
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
        }
    }
    //雪アニメーション
    if(contact != null){
        for (let i = 0; i <= 200; i++) {
            const random = Math.random()*100;
            const snow = document.createElement("span");
            snow.className = "snow";
            snow.style.display = 'block';
            const minSize = 5;
            const maxSize = 10;
            const size = Math.random() * (maxSize - minSize) + minSize;
            snow.style.width = `${size}px`;
            snow.style.height = `${size}px`;
            snow.style.left = `${Math.random()*100}%`;
            snow.style.animationDelay = `${Math.random() * 25}s`;
            contact.appendChild(snow);
        }
    }



    //ダークモード
    if(query == '?dark'){
        toggleArea.classList.add("toggleAreaActive");
        toggleSwitch.classList.add("toggleSwitchActive");
        const pmColorWhites = document.querySelectorAll('.pmColorWhite');
        pmColorWhites.forEach(pmColorWhite => {
            pmColorWhite.classList.add('colorWhite');
        })
        const pmColorBlacks = document.querySelectorAll('.pmColorBlack');
        pmColorBlacks.forEach(pmColorBlack => {
            pmColorBlack.classList.add('colorBlack');
        })
        const amBackGroundColorWhites = document.querySelectorAll('.pmBackGroundColorWhite');
        amBackGroundColorWhites.forEach(amBackGroundColorWhite => {
            amBackGroundColorWhite.classList.add('backGroundColorWhite');
        })
        const amBackGroundColorBlacks = document.querySelectorAll('.pmBackGroundColorBlack');
        amBackGroundColorBlacks.forEach(amBackGroundColorBlack => {
            amBackGroundColorBlack.classList.add('backGroundColorBlack');
        })
        if(home != null){
            home.classList.add('pmHome');
        }
        if(about != null){
            about.classList.add('pmAbout');
        }
        if(skill != null){
            skill.classList.add('pmSkill');
        }
        if(work != null){
            work.classList.add('pmWork');
        }
        if(contact != null){
            contact.classList.add('pmContact');
        }
    //ライトモード
    }else{
        const amColorWhites = document.querySelectorAll('.amColorWhite');
        amColorWhites.forEach(amColorWhite => {
            amColorWhite.classList.add('colorWhite');
        })
        const amColorBlacks = document.querySelectorAll('.amColorBlack');
        amColorBlacks.forEach(amColorBlack => {
            amColorBlack.classList.add('colorBlack');
        })
        const amNavBackGroundColorBlacks = document.querySelectorAll('.amNavBackGroundColorBlack');
        amNavBackGroundColorBlacks.forEach(amNavBackGroundColorBlack => {
            amNavBackGroundColorBlack.classList.add('backGroundColorWhite');
        })
        const amBackGroundColorWhites = document.querySelectorAll('.amBackGroundColorWhite');
        amBackGroundColorWhites.forEach(amBackGroundColorWhite => {
            amBackGroundColorWhite.classList.add('backGroundColorWhite');
        })
        const amBackGroundColorBlacks = document.querySelectorAll('.amBackGroundColorBlack');
        amBackGroundColorBlacks.forEach(amBackGroundColorBlack => {
            amBackGroundColorBlack.classList.add('backGroundColorBlack');
        })
        if(home != null){
            home.classList.add('amHome');
        }
        if(about != null){
            about.classList.add('amAbout');
        }
        if(skill != null){
            skill.classList.add('amSkill');
        }
        if(work != null){
            work.classList.add('amWork');
        }
        if(contact != null){
            contact.classList.add('amContact');
        }
    }
})



//カーソル
document.addEventListener('mousemove', (e) => {
    if (window.matchMedia('(min-width: 960px)').matches) {
        firstCursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
        secondCursor.animate(
            {transform: ['translate(' + e.clientX + 'px, ' + e.clientY + 'px)']},
            {delay: 100,duration: 1000,easing: 'ease',fill: 'forwards'}
        )
        thirdCursor.animate(
            {transform: ['translate(' + e.clientX + 'px, ' + e.clientY + 'px)']},
            {delay: 200,duration: 1000,easing: 'ease',fill: 'forwards'}
        )
    }
})



//ナビゲーションホバー
function navMouseenter(navEn,navJa,cursorSize,cursorHalfSize){
    //カーソル
    firstCursor.animate(
        {top: [cursorHalfSize],left: [cursorHalfSize],height: [cursorSize],width: [cursorSize],opacity: ['0.6'],backgroundColor: ['#eba0a0']},
        {duration: 500,easing: 'ease',fill: 'forwards'}
    )
    secondCursor.animate(
        {opacity: ['0']},
        {duration: 500,easing: 'ease',fill: 'forwards'}
    )
    thirdCursor.animate(
        {opacity: ['0']},
        {duration: 500,easing: 'ease',fill: 'forwards'}
    )
    //ヘッダーナビゲーション文字切り替え
    if(navEn != null && navJa != null){
        //ナビゲーション文字（英語）
        navEn.animate(
            {opacity: ['0']},
            {duration: 500,easing: 'ease',fill: 'forwards'}
        )
        //ナビゲーション文字（日本語）
        navJa.animate(
            {opacity: ['1']},
            {duration: 500,easing: 'ease',fill: 'forwards'}
        )
    }
}



//ナビゲーションホバー解除
function navMouseleave(navEn,navJa){
    //カーソル
    firstCursor.animate(
        {top: ['-10px'],left: ['-10px'],height: ['20px'],width: ['20px'],opacity: ['0.9'],backgroundColor: ['#d4c520'] },
        {duration: 500,easing: 'ease',fill: 'forwards'}
    )
    secondCursor.animate(
        {opacity: ['1']},
        {duration: 500,easing: 'ease',fill: 'forwards'}
    )
    thirdCursor.animate(
        {opacity: ['1']},
        {duration: 500,easing: 'ease',fill: 'forwards'}
    )
    //ヘッダーナビゲーション文字切り替え
    if(navEn != null && navJa != null){
        //ナビゲーション文字（英語）
        navEn.animate(
            {opacity: ['1']},
            {duration: 500,easing: 'ease',fill: 'forwards'}
        )
        //ナビゲーション文字（日本語）
        navJa.animate(
            {opacity: ['0']},
            {duration: 500,easing: 'ease',fill: 'forwards'}
        )
    }
}

navs.forEach(nav => {
    if (window.matchMedia('(min-width: 960px)').matches) {
        //ナビゲーションホバー
        nav.addEventListener('mouseenter', () => {
            //ホームナビゲーションホバー時
            if(nav.id == "navHome"){
                navMouseenter(navHomeEn,navHomeJa,'50px','-25px');
            //プロフィールナビゲーションホバー時
            }else if(nav.id == "navAbout"){
                navMouseenter(navAboutEn,navAboutJa,'50px','-25px');
            //スキルナビゲーションホバー時
            }else if(nav.id == "navSkill"){
                navMouseenter(navSkillEn,navSkillJa,'50px','-25px');
            //ワークナビゲーションホバー時
            }else if(nav.id == "navWork"){
                navMouseenter(navSOthersEn,navWorkJa,'50px','-25px');
            //コンタクトナビゲーションホバー時
            }else if(nav.id == "navContact"){
                navMouseenter(navContactEn,navContactJa,'50px','-25px');
            //トグルホバー時
            }else if(nav.id == "toggleArea"){
                navMouseenter(null,null,'40px','-20px');
            //ワーク詳細画面リンクホバー時
            }else if(nav.id == "externalLink"){
                
            //その他のaタグホバー時
            }else{
                navMouseenter(null,null,'80px','-40px');
            }
        })
        //ナビゲーションホバー解除
        nav.addEventListener('mouseleave', () => {
            //ホームナビゲーションホバー解除時
            if(nav.id == "navHome"){
                navMouseleave(navHomeEn,navHomeJa);
            //プロフィールナビゲーションホバー解除時
            }else if(nav.id == "navAbout"){
                navMouseleave(navAboutEn,navAboutJa);
            //スキルナビゲーションホバー解除時
            }else if(nav.id == "navSkill"){
                navMouseleave(navSkillEn,navSkillJa);
            //ワークナビゲーションホバー解除時
            }else if(nav.id == "navWork"){
                navMouseleave(navSOthersEn,navWorkJa);
            //コンタクトナビゲーションホバー解除時
            }else if(nav.id == "navContact"){
                navMouseleave(navContactEn,navContactJa);
            //ワーク詳細画面リンク
            }else if(nav.id == 'externalLink'){

            //その他のaタグホバー解除時
            }else{
                navMouseleave(null,null);
            }
        })
    }
    //画面切り替え
    nav.addEventListener('click', (e) => {
        if(nav.id != "mail" && nav.id != 'externalLink'){
            e.preventDefault();
            var TransitionDelay = function(){
                window.location.href = nav.href + query;
            }
            // 0.5秒後遷移
            setTimeout ( TransitionDelay, 500 );
            //左ロード画面
            loadLeft.animate(
                {width: ['51%'],borderBottomRightRadius: [0]},
                {duration: 500,easing: 'ease',fill: 'forwards'}
            )
            // 右ロード画面
            loadRight.animate(
                {width: ['51%'],borderBottomLeftRadius: [0]},
                {duration: 500,easing: 'ease',fill: 'forwards'}
            )
        }
    })
})




//トグルクリック時
if(toggleArea != null){
    toggleArea.addEventListener('click', (e) => {
        if(query == '?dark'){
            query = '?light';
        }else{
            query = '?dark';
        }
        toggleArea.classList.toggle("toggleAreaActive");
        toggleSwitch.classList.toggle("toggleSwitchActive");
    })
}



//スキル画面スライダー
let count = 0;
let countBefore = 0;
let countAfter = 0;
function slider(countBefore,countAfter,height){
    likingIcons[countBefore].animate(
        {transform: ['translateY(10px)']},
        {delay: 0,duration: 100,easing: 'linear',fill: 'forwards'}
    )
    likingIcons[countBefore].animate(
        {transform: ['translateY(-20px)']},
        {delay: 100,duration: 500,easing: 'ease',fill: 'forwards'}
    )
    likingIcons[countBefore].animate(
        {transform: ['translateY(' + height + ')']},
        {delay: 400,duration: 300,easing: 'ease-in',fill: 'forwards'}
    )
    likingTextAreas[countBefore].animate(
        {transform: ['translateY(10px)']},
        {delay: 100,duration: 100,easing: 'linear',fill: 'forwards'}
    )
    likingTextAreas[countBefore].animate(
        {transform: ['translateY(-20px)']},
        {delay: 200,duration: 500,easing: 'ease',fill: 'forwards'}
    )
    likingTextAreas[countBefore].animate(
        {transform: ['translateY(' + height + ')']},
        {delay: 500,duration: 300,easing: 'ease-in',fill: 'forwards'}
    )
    likings[countBefore].animate(
        {height: [0]},
        {delay: 800,duration: 1,easing: 'ease',fill: 'forwards'}
    )
    likingIcons[countBefore].animate(
        {transform: ['translateY(0)']},
        {delay: 800,duration: 1,easing: 'ease',fill: 'forwards'}
    )
    likingTextAreas[countBefore].animate(
        {transform: ['translateY(0)']},
        {delay: 800,duration: 1,easing: 'ease',fill: 'forwards'}
    )
    likings[countAfter].animate(
        {height: [height]},
        {delay: 800,duration: 1,easing: 'ease',fill: 'forwards'}
    )
    likingIcons[countAfter].animate(
        {transform: ['translateY(' + height + ')']},
        {delay: 800,duration: 1,easing: 'ease',fill: 'forwards'}
    )
    likingTextAreas[countAfter].animate(
        {transform: ['translateY(' + height + ')']},
        {delay: 800,duration: 1,easing: 'ease',fill: 'forwards'}
    )
    likingIcons[countAfter].animate(
        {transform: ['translateY(-20px)']},
        {delay: 1000,duration: 300,easing: 'ease-out',fill: 'forwards'}
    )
    likingIcons[countAfter].animate(
        {transform: ['translateY(10px)']},
        {delay: 1300,duration: 250,easing: 'ease',fill: 'forwards'}
    )
    likingIcons[countAfter].animate(
        {transform: ['translateY(0px)']},
        {delay: 1550,duration: 100,easing: 'ease-in',fill: 'forwards'}
    )
    likingTextAreas[countAfter].animate(
        {transform: ['translateY(-20px)']},
        {delay: 1100,duration: 300,easing: 'ease-out',fill: 'forwards'}
    )
    likingTextAreas[countAfter].animate(
        {transform: ['translateY(10px)']},
        {delay: 1400,duration: 250,easing: 'ease',fill: 'forwards'}
    )
    likingTextAreas[countAfter].animate(
        {transform: ['translateY(0)']},
        {delay: 1650,duration: 100,easing: 'ease-in',fill: 'forwards'}
    )
}
function arrowClick(arrow){
    if(arrow == "arrowLeft"){
        countBefore = count;
        if(count == 0){
            count = likings.length - 1;
        }else{
            count--;
        }
        countAfter = count;        
    }else{
        countBefore = count;
        if(count == likings.length - 1){
            count = 0;
        }else{
            count++;
        }
        countAfter = count;
    }
    if (window.matchMedia('(min-width: 960px)').matches) {
        slider(countBefore,countAfter,'250px');
    }else if(window.matchMedia('(min-width:520px) and ( max-width:960px)').matches){
        slider(countBefore,countAfter,'300px');
    }else{
        slider(countBefore,countAfter,'350px');
    }
}
//左矢印
if(arrowLeft != null){
    arrowLeft.addEventListener('click', () => {
        arrowClick("arrowLeft");
    })
}
//右矢印
if(arrowRight != null){
    arrowRight.addEventListener('click', () => {
        arrowClick("arrowRight");
    })
}
