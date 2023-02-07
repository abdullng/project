var imageURLs = [
       "https://helpdesk.qixbit.com/images/desk-top-1.png"
     , "https://helpdesk.qixbit.com/images/HalfPage.png"
     , "https://helpdesk.qixbit.com/images/desk-top-3.png"
  ];
  function getImageTag1() {
    var img = '<img src=\"';
    var randomIndex = Math.floor(Math.random() * imageURLs.length);
    img += imageURLs[randomIndex];
    img += '\" alt=\"Qixbit Trdading App\"/>';
    return img;
  }
