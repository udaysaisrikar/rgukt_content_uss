window.addEventListener('load', function()
{
    document.getElementById('loading').style.display = 'none';
    document.getElementById('testId').style.display = 'none';
    document.getElementById('content').style.display = 'block';
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