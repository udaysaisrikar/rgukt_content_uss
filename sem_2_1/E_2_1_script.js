/*window.addEventListener('load', function()
{
    document.getElementById('loading').style.display = 'none';
    document.getElementById('testId').style.display = 'none';
    document.getElementById('content').style.display = 'block';
});*/

document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById('loading');
    const content = document.getElementById('content');
    const testId = document.getElementById('testId');

    // Hide the loader and show the content after the page is fully loaded
    window.addEventListener('load', function() {
        loader.style.display = 'none';
        testId.style.display='none';
        content.style.display = 'block';
    });
});


function show_alert()
{
    window.alert("Check your Downloads...\uD83D\uDE09");
}

function large_alert()
{
    window.alert("It's a large file...Wait & check your downloads\uD83D\uDE09!!!");
}

function goBack() 
{
    window.history.go(-1);
}