findData = fetch('data.json').then((res)=>{
    if(!res.ok)return console.log('Wrong');
    return res.json();
    })


colorFlag = false;

daily = document.getElementById('daily');
weekly = document.getElementById('weekly');
monthly = document.getElementById('monthly');

daily.addEventListener('click', useDaily);
weekly.addEventListener('click', useWeekly);
monthly.addEventListener('click', useMonthly);

work_h1 = document.querySelector('#wor h1');
pr_wrk = document.querySelector('#pr-wrk');
play_h1 = document.getElementById('play-h1');
pr_play = document.getElementById('pr-play');
study_h1 = document.getElementById('study-h1');
pr_study = document.getElementById('pr-study');
exer_h1 = document.getElementById('exer-h1');
pr_exer = document.getElementById('pr-exer');
social_h1 = document.getElementById('social-h1');
pr_social = document.getElementById('pr-social');
self_h1 = document.getElementById('self-h1');
pr_self = document.getElementById('pr-self');


function setColorFlag(){
    if (colorFlag == true){
        daily.style.color = 'var(--Desaturated-blue)';
        weekly.style.color = 'var(--Desaturated-blue)';
        monthly.style.color = 'var(--Desaturated-blue)';
        colorFlag = false; 
    }
}
function clearField(){
    work_h1.innerHTML = '';
    pr_wrk.innerHTML = '';
    play_h1.innerHTML = '';
    pr_play.innerHTML = '';
    study_h1.innerHTML = '';
    pr_study.innerHTML = '';
    exer_h1.innerHTML = '';
    pr_exer.innerHTML = '';
    social_h1.innerHTML = '';
    pr_social.innerHTML = '';
    self_h1.innerHTML = '';
    pr_self.innerHTML = '';
}

function useDaily(){
    setColorFlag();
    daily.style.color = '#fff';
    colorFlag = true;
    let data = findData;
    
    data.then((data)=>{
        for (i=0; i< data.length; i++){
            let e = data[i];
            if (e.title == 'Work'){
                work_h1.innerHTML = `${e.timeframes.daily.current} hr`;
               pr_wrk.innerHTML = `Last week - ${e.timeframes.daily.previous} hr`;
               } else if (e.title == 'Play'){
                   play_h1.innerHTML = `${e.timeframes.daily.current} hr`;
                  pr_play.innerHTML = `Last week - ${e.timeframes.daily.previous} hr`;
               } else if (e.title == 'Study'){
                   study_h1.innerHTML = `${e.timeframes.daily.current} hr`;
                  pr_study.innerHTML = `Last week - ${e.timeframes.daily.previous} hr`;
               } else if (e.title == 'Exercise'){
                   exer_h1.innerHTML = `${e.timeframes.daily.current} hr`;
                  pr_exer.innerHTML = `Last week - ${e.timeframes.daily.previous} hr`;
                  }else if (e.title == 'Social'){
                   social_h1.innerHTML = `${e.timeframes.daily.current} hr`;
                  pr_social.innerHTML = `Last week - ${e.timeframes.daily.previous} hr`;
                  }else if (e.title == 'Self Care'){
                   self_h1.innerHTML = `${e.timeframes.daily.current} hr`;
                  pr_self.innerHTML = `Last week - ${e.timeframes.daily.previous} hr`;
                  }
        }
})
 
    
}

function useWeekly(){
    clearField();
    let data = findData;
    setColorFlag();
    weekly.style.color = '#fff';
    colorFlag = true;
    data.then((data)=>{
        for(i=0; i<data.length;i++){
            e = data[i];
            if (e.title == 'Work'){
                work_h1.innerHTML = `${e.timeframes.weekly.current} hr`;
               pr_wrk.innerHTML = `Last week - ${e.timeframes.weekly.previous} hr`;
               } else if (e.title == 'Play'){
                   play_h1.innerHTML = `${e.timeframes.weekly.current} hr`;
                  pr_play.innerHTML = `Last week - ${e.timeframes.weekly.previous} hr`;
               } else if (e.title == 'Study'){
                   study_h1.innerHTML = `${e.timeframes.weekly.current} hr`;
                  pr_study.innerHTML = `Last week - ${e.timeframes.weekly.previous} hr`;
               } else if (e.title == 'Exercise'){
                   exer_h1.innerHTML = `${e.timeframes.weekly.current} hr`;
                  pr_exer.innerHTML = `Last week - ${e.timeframes.weekly.previous} hr`;
                  }else if (e.title == 'Social'){
                   social_h1.innerHTML = `${e.timeframes.weekly.current} hr`;
                  pr_social.innerHTML = `Last week - ${e.timeframes.weekly.previous} hr`;
                  }else if (e.title == 'Self Care'){
                   self_h1.innerHTML = `${e.timeframes.weekly.current} hr`;
                  pr_self.innerHTML = `Last week - ${e.timeframes.weekly.previous} hr`;
                  }
        }

    })
    
}
function useMonthly(){
    let data = findData;
    clearField();
    setColorFlag();
    monthly.style.color= '#fff';
    colorFlag = true;
    data.then((data)=>{
        for(i=0;i<data.length;i++){
            e = data[i];
            if (e.title == 'Work'){
                work_h1.innerHTML = `${e.timeframes.monthly.current} hr`;
               pr_wrk.innerHTML = `Last week - ${e.timeframes.monthly.previous} hr`;
               } else if (e.title == 'Play'){
                   play_h1.innerHTML = `${e.timeframes.monthly.current} hr`;
                  pr_play.innerHTML = `Last week - ${e.timeframes.monthly.previous} hr`;
               } else if (e.title == 'Study'){
                   study_h1.innerHTML = `${e.timeframes.monthly.current} hr`;
                  pr_study.innerHTML = `Last week - ${e.timeframes.monthly.previous} hr`;
               } else if (e.title == 'Exercise'){
                   exer_h1.innerHTML = `${e.timeframes.monthly.current} hr`;
                  pr_exer.innerHTML = `Last week - ${e.timeframes.monthly.previous} hr`;
                  }else if (e.title == 'Social'){
                   social_h1.innerHTML = `${e.timeframes.monthly.current} hr`;
                  pr_social.innerHTML = `Last week - ${e.timeframes.monthly.previous} hr`;
                  }else if (e.title == 'Self Care'){
                   self_h1.innerHTML = `${e.timeframes.monthly.current} hr`;
                  pr_self.innerHTML = `Last week - ${e.timeframes.monthly.previous} hr`;
                  }
        }
    })
    
}

