/**
 * Created by Kay on 2016/4/15.
 */
// 自定义背景音乐的 播放/暂停 功能
function playPause(){
    var music = document.getElementById("music");
    if (music.paused)
        music.play();
    else
        music.pause();
}