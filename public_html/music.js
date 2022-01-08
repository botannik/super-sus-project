document.getElementById("mybtn").onclick = function()
{
    var myaudio = document.getElementById("myaudio")
    if(myaudio.paused == true)
    {
        document.getElementById("myaudio").play()
    }
    else if (myaudio.paused == false)
    {
        document.getElementById("myaudio").pause()
    }
}