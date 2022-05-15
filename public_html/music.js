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
// Show loading animation.
// var myaudio = document.getElementById("myaudio")
//
// if (myaudio !== undefined) {
//     myaudio.then(_ => {
//         // Automatic playback started!
//         // Show playing UI.
//         // We can now safely pause video...
//         myaudio.pause();
//     })
//         .catch(error => {
//             // Auto-play was prevented
//             // Show paused UI.
//         });
// }