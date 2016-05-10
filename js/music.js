/**
 * Created by Kay on 2016/4/15.
 */
// 自定义背景音乐的 播放/暂停 功能
function playPause(){
    var music = document.getElementById("music");
    var aTitle = document.getElementById("aTitle");
    if (music.paused){
        music.play();
        aTitle.title = "暂停音乐";
    }
    else{
        music.pause();
        aTitle.title = "播放音乐";
    }
}
