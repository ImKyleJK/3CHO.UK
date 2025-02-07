$(document).ready(function() {
  function setTime(){
    var date = new Date();
    timestamp = date.getTime();
  }
  
  //Call setTime when you make initial call  
  //Set the delay here in ms 
  var updateDelay = getRndInteger(8000,140000);
  
  var lastRefresh = document.getElementById("donation-refresh"); 

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  function updateDonation() {
    var names = new Array("John S", "Brudda144", "Exampled", "Personal");
    var amounts = new Array("£5.00", "£8.44", "£100", "£50.43");
    name = names[Math.floor( Math.random() * names.length )];
    amount = amounts[Math.floor( Math.random() * amounts.length )];
    document.getElementById("donation-name").innerHTML = (`<i class="fa-solid fa-user p-r-sm"></i> ${name}` || `Loading`);
    document.getElementById("donation-amount").innerHTML = (`${amount}` || '<i class="fas fa-circle-notch fa-spin"></i>');
    setTime();
  }

  function updateLastRefreshTime() {        
   var currentDate = new Date();
   var currentTime = currentDate.getTime();
   var timeSince = Math.floor((currentTime - timestamp)/1000);
   let timeStampDescription = "";        
   if(timeSince > 31536000){;
     timeStampDescription = Math.floor(timeSince/31536000) + " years"
   } else if(timeSince > 86400){
     timeStampDescription = Math.floor(timeSince/86400) + " days"
   } else if(timeSince > 3600){
     timeStampDescription = Math.floor(timeSince/3600) + " hours"
   } else if(timeSince > 60) {
     timeStampDescription = Math.floor(timeSince/60) + " minutes"
   } else{ 
     timeStampDescription = timeSince + " seconds"
   }
   lastRefresh.innerText = timeStampDescription;          
  }        

  setInterval(updateLastRefreshTime, 1000); 
  setInterval(updateDonation, updateDelay);   

  setTimeout(function() {
    document.getElementById("one-item").innerHTML =
      "<i class='fa-brands fa-soundcloud'></i> SoundCloud";
    document.getElementById("one-url").innerHTML = "<a href='https://soundcloud.com/3chouk' target='_blank' rel='noopener noreferrer'><i class='fa-solid fa-arrow-up-right-from-square'></i></a>";
    document.getElementById("one-av").src = "https://yt3.googleusercontent.com/xzjNaaWytxA5F6JsqAzw6LC1XbiU-MTthDxuM2tlV_y2frbZHN5wI8FVVnMhjeomfFNII-d2=s900-c-k-c0x00ffffff-no-rj";
    document.getElementById("one-av2").src = "https://yt3.googleusercontent.com/xzjNaaWytxA5F6JsqAzw6LC1XbiU-MTthDxuM2tlV_y2frbZHN5wI8FVVnMhjeomfFNII-d2=s900-c-k-c0x00ffffff-no-rj";

    document.getElementById("two-item").innerHTML =
      "<i class='fa-brands fa-tiktok'></i> TikTok";
    document.getElementById("two-url").innerHTML = "<a href='https://www.tiktok.com/@3cho.uk' target='_blank' rel='noopener noreferrer'><i class='fa-solid fa-arrow-up-right-from-square'></i></a>";
    document.getElementById("two-av").src = "https://yt3.googleusercontent.com/n2F5svHzfGDDEIRWDKt6WF_jeJqwzba7NTKx5lbVzNVa9lKnK5iVT1pH824C-g76IRzWR1_hjA=s900-c-k-c0x00ffffff-no-rj";
    document.getElementById("two-av2").src = "https://yt3.googleusercontent.com/n2F5svHzfGDDEIRWDKt6WF_jeJqwzba7NTKx5lbVzNVa9lKnK5iVT1pH824C-g76IRzWR1_hjA=s900-c-k-c0x00ffffff-no-rj";

    document.getElementById("three-item").innerHTML =
      "<i class='fa-brands fa-spotify'></i> Spotify";
    document.getElementById("three-url").innerHTML = "<a href='https://spotify.com/' target='_blank' rel='noopener noreferrer'><i class='fa-solid fa-arrow-up-right-from-square'></i></a>";
    document.getElementById("three-av").src = "https://yt3.googleusercontent.com/UMGZZMPQkM3kGtyW4jNE1GtpSrydfNJdbG1UyWTp5zeqUYc6-rton70Imm7B11RulRRuK521NQ=s900-c-k-c0x00ffffff-no-rj";
    document.getElementById("three-av2").src = "https://yt3.googleusercontent.com/UMGZZMPQkM3kGtyW4jNE1GtpSrydfNJdbG1UyWTp5zeqUYc6-rton70Imm7B11RulRRuK521NQ=s900-c-k-c0x00ffffff-no-rj";

    setTimeout(function() {
      document.getElementById("show-name").innerHTML = "3CHO's Dance Hits";
      document.getElementById("show-date").innerHTML = "27th Feb @ 21:00 GMT";
      document.getElementById("show-bg").src = "_art_/asset-0005.png";
      document.getElementById("show-icon").innerHTML = "<div class='showImage' style='background-image: url(_art_/asset-0007.png)'></div>";

        setTimeout(function() {
          document.getElementById("one-artist").innerHTML = "GBP (feat. 21 Savage)";
          document.getElementById("one-song").innerHTML = "Central Cee";
          document.getElementById("one-art").src = "https://i.scdn.co/image/ab67616d000048515609b89507db8644ff7e1e7a";
          document.getElementById("one-bg").src = "https://i.scdn.co/image/ab67616d000048515609b89507db8644ff7e1e7a";
      
          document.getElementById("two-artist").innerHTML = "Raving In The Studio";
          document.getElementById("two-song").innerHTML = "Aitch, Bou";
          document.getElementById("two-art").src = "https://i.scdn.co/image/ab67616d000048519d8bb94c45b88a8b7abc5c7a";
          document.getElementById("two-bg").src = "https://i.scdn.co/image/ab67616d000048519d8bb94c45b88a8b7abc5c7a";
      
          document.getElementById("three-artist").innerHTML = "Simmer Down";
          document.getElementById("three-song").innerHTML = "Casper Walsh";
          document.getElementById("three-art").src = "https://i.scdn.co/image/ab67616d000048510492ef6aa58e709ef23a4b0a";
          document.getElementById("three-bg").src = "https://i.scdn.co/image/ab67616d000048510492ef6aa58e709ef23a4b0a";
    
          updateDonation()
        }, 500);
    }, 500);
  }, 500);
});
