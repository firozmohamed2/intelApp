
// 1. Firebase Configuration and Initialization
const firebaseConfig = {
    apiKey: "AIzaSyA88fPkOvcI4QA9qD3ROpk-ay-V6ibQQlc",
    authDomain: "my-application-7fd40.firebaseapp.com",
    projectId: "my-application-7fd40",
    storageBucket: "my-application-7fd40.appspot.com",
    messagingSenderId: "269589994279",
    appId: "1:269589994279:web:4c617a622c328a1224e702",
    measurementId: "G-D8MD1J28GR",
};


// Initialize Firebase App
firebase.initializeApp(firebaseConfig);



// Firestore Database Reference
const db = firebase.firestore();

// Variables for quiz data
let controlData = []; // To store fetched quiz data
var quizData;
var workingData;
var startTime,endTime,nextTime,showQTime,rightOption;
var showBooleanTime , showQ2Time,showQ3Time, showClarityTime,nextRightID,nextWrongID;
var sideBarData;







// 2. YouTube Player Control Elements

let player;
const playPauseBtn = document.getElementById('play-pause');
const seekBar = document.getElementById('seek-bar');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const muteBtn = document.getElementById('mute');
const volumeBar = document.getElementById('volume-bar');
const optionA= document.getElementById('option-a');
const optionB= document.getElementById('option-b');
const optionC= document.getElementById('option-c');
const optionD= document.getElementById('option-d');
const option3A= document.getElementById('option3-a');
const option3B= document.getElementById('option3-b');
const option3C= document.getElementById('option3-c');
const option2A= document.getElementById('option2-a');
const option2B= document.getElementById('option2-b');

const clearButton= document.getElementById('option-clear');
const notClearButon= document.getElementById('option-notClear');
const yesButton= document.getElementById('option-yes');
const notButton= document.getElementById('option-not');





let lastSeekedTime = null; // To prevent continuous seeking





       

// 3. Load the YouTube IFrame API
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-video', {
        events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
        }
    });
}

// 4. YouTube Player Ready Event
function onPlayerReady(event) {
    console.log("player ready");
    const duration = player.getDuration();
    durationEl.textContent = formatTime(duration);


// 5. Time Control Functions
    let checkInterval = null;
       
 // Start checking the player's time every 100ms   
    function startCheckingPlayerTime() {
        if (checkInterval) {                // Clear any existing interval if already running
            clearInterval(checkInterval);
        }
    
        // Set a new interval to check the current time every 100 milliseconds
        checkInterval = setInterval(() => {
            if (player && typeof player.getCurrentTime === 'function') {
                const currentTime = player.getCurrentTime(); // Get the current time of the video
    
                // Check if we need to go to the next video section
                if ( nextTime != 0 && currentTime >= nextTime) {
                    // Load the next section of the video

                    if(quizData[workingData.nextRightID]){
                        workingData = quizData[workingData.nextRightID];  // Update workingData with the next part
                        console.log(workingData);

                        
                        // Set the new start, pause, and next times
                        fetchMapValues(workingData);
                        // Avoid seeking repeatedly in the interval
                        if (lastSeekedTime !== startTime) {
                            seekToTime(startTime);  // Seek to the new start time
                            lastSeekedTime = startTime; // Record the last seeked time
                        }
                    }
                    else {
                        player.pauseVideo(); // Pause the video
                        alert("you have completed the work ");
                        clearInterval(checkInterval);
                    }
                }
    
                


                if(showQTime != 0 && currentTime>=showQTime){
                    player.pauseVideo(); // Pause the video
                    showOnlyContainer('options-container-4');

                }

                if(showQ3Time != 0 && currentTime>=showQ3Time){
                    player.pauseVideo(); // Pause the video
                    showOnlyContainer('options-container-3');

                }

                if(showQ2Time != 0 && currentTime>=showQ2Time){
                    player.pauseVideo(); // Pause the video
                    showOnlyContainer('options-container-2');

                }


                if(showBooleanTime != 0 && currentTime>=showBooleanTime){
                    player.pauseVideo(); // Pause the video
                    showOnlyContainer('boolean-container');

                }

                if(showClarityTime != 0 && currentTime>=showClarityTime){
                    player.pauseVideo(); // Pause the video
                    showOnlyContainer('clarity-container');

                }



                
            }
        }, 100); // Check every 100ms
    }
            
     // Function to set control data for start, pause, and next times
   
            
    // Function to seek to a specific time in the video
    function seekToTime(timeInSeconds) {
        if (player && typeof timeInSeconds === 'number') {
            player.seekTo(timeInSeconds, true);  // Seek accurately to the specified time
            player.playVideo();  // Optionally start playing the video
            console.log("Seeked to", timeInSeconds);
        }
    }
            
    // Call this function whenever you want to start the check
    startCheckingPlayerTime();


    // Sync the play/pause button
    playPauseBtn.addEventListener('click', () => {
        if (player.getPlayerState() === YT.PlayerState.PLAYING) {
            player.pauseVideo();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        } else {
            player.playVideo();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }
    });

    // Seek bar control
    seekBar.addEventListener('input', () => {
        const seekTo = (seekBar.value / 100) * player.getDuration();
        player.seekTo(seekTo);
    });

    // Mute/unmute control
    muteBtn.addEventListener('click', () => {
        if (player.isMuted()) {
            player.unMute();
            muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
            volumeBar.value = player.getVolume();
        } else {
            player.mute();
            muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
            volumeBar.value = 0;
        }
    });

    // Volume control
    volumeBar.addEventListener('input', () => {
        player.setVolume(volumeBar.value);
        if (player.isMuted()) {
            player.unMute();
            muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
    });

    fetchFirestoreData();

}

// When the player's state changes, update the UI
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        updateProgress();
    } else {
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

// Update the progress bar and time info
function updateProgress() {
    setInterval(() => {
        if (player && player.getPlayerState() === YT.PlayerState.PLAYING) {
            const currentTime = player.getCurrentTime();
            const duration = player.getDuration();
            currentTimeEl.textContent = formatTime(currentTime);
            seekBar.value = (currentTime / duration) * 100;
        }
    }, 1000);
}

// Format time in mm:ss
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}


function seekToTime(timeInSeconds) {
    if (player && typeof timeInSeconds === 'number') {
        player.seekTo(timeInSeconds, true);  // The second argument (true) ensures accurate seeking
        player.playVideo();
        console.log("seeked to", timeInSeconds);
    }
}






function fetchFirestoreData() {
    console.log("fetch ready");

    // Check if the DOM is already loaded or not
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", async function () {
            fetchDataFromFirestore();
        });
    } else {
        // DOM is already loaded, fetch Firestore data directly
        fetchDataFromFirestore();
    }
}

async function fetchDataFromFirestore() {
    try {
        const quizDoc = await db.collection("quizz").doc("ab").get();

        if (quizDoc.exists) {
            const data = quizDoc.data();
            console.log("mapsPanel",data.map);
            sideBarData= data.map;
            generateSidePanel(sideBarData);


            quizData = data.mapsData; // Assuming "quizData" holds the array of maps
            console.log(quizData[0]); // Log the entire data to the console
            workingData = quizData[0];
            fetchMapValues(workingData);

           

                // Check if startTime is valid, then seek to it
        seekToTime(startTime); // Seek and start the video after startTime is fetched
    

        } else {
            console.error("No quiz data found!");
        }
    } catch (error) {
        console.error("Error fetching data from Firestore:", error);
    }
}
        
function fetchMapValues(workingData){
    if(workingData){
    startTime = parseFloat(workingData.start);
    workingData.showQTime? showQTime = parseFloat(workingData.showQTime) : showQTime = 0;
    workingData.showQ3Time? showQ3Time = parseFloat(workingData.showQ3Time) : showQ3Time = 0;
    workingData.showQ2Time? showQ2Time = parseFloat(workingData.showQ2Time) : showQ2Time = 0;
    workingData.showBooleanTime? showBooleanTime = parseFloat(workingData.showBooleanTime) : showBooleanTime = 0;
    workingData.showClarityTime? showClarityTime = parseFloat(workingData.showClarityTime) : showClarityTime = 0;
    workingData.rightOption? rightOption = workingData.rightOption : rightOption = '0';
    workingData.nextRightID? nextRightID = workingData.nextRightID : nextRightID = '0';
    workingData.nextWrongID? nextWrongID = workingData.nextWrongID : nextWrongID = '0';
    workingData.nextTime? nextTime = workingData.nextTime : nextTime = '0';


    console.log("working Data",workingData);

    }
    else {
        alert("no data");
    }

    hideAllContainers();

}





function sidePanelStimulus(workingData){
    if(workingData){
    startTime = parseFloat(workingData.start);
    workingData.showQTime? showQTime = parseFloat(workingData.showQTime) : showQTime = 0;
    workingData.showQ3Time? showQ3Time = parseFloat(workingData.showQ3Time) : showQ3Time = 0;
    workingData.showQ2Time? showQ2Time = parseFloat(workingData.showQ2Time) : showQ2Time = 0;
    workingData.showBooleanTime? showBooleanTime = parseFloat(workingData.showBooleanTime) : showBooleanTime = 0;
    workingData.showClarityTime? showClarityTime = parseFloat(workingData.showClarityTime) : showClarityTime = 0;
    workingData.rightOption? rightOption = workingData.rightOption : rightOption = '0';
    workingData.nextRightID? nextRightID = workingData.nextRightID : nextRightID = '0';
    workingData.nextWrongID? nextWrongID = workingData.nextWrongID : nextWrongID = '0';
    workingData.nextTime? nextTime = workingData.nextTime : nextTime = '0';



    }
    else {
        alert("no data");
    }

    hideAllContainers();
    if (lastSeekedTime !== startTime) {
        seekToTime(startTime);
        lastSeekedTime = startTime;
    }
}

        



// 9. Show Specific Containers

function showOnlyContainer(containerToShow) {
    const containers = [
        document.querySelector('.options-container-4'),
        document.querySelector('.options-container-3'),
        document.querySelector('.options-container-2'),
        document.querySelector('.clarity-container'),
        document.querySelector('.boolean-container')
    ];

    // Hide all containers
    containers.forEach(container => {
        container.style.display = 'none';
    });

    // Show the specified container
    if (containerToShow) {
        const container = document.querySelector(`.${containerToShow}`);
        if (container) {
            container.style.display = 'flex';
        }
    }
}

function hideAllContainers() {
    const containers = [
        document.querySelector('.options-container-4'),
        document.querySelector('.options-container-3'),
        document.querySelector('.options-container-2'),
        document.querySelector('.clarity-container'),
        document.querySelector('.boolean-container')
    ];

    // Hide all containers
    containers.forEach(container => {
        container.style.display = 'none';
    });

    
}




[optionA, optionB, optionC, optionD].forEach((option, index) => {
    const optionLetter = ['a', 'b', 'c', 'd'][index];
    option.addEventListener('click', () => handleOptionClick(optionLetter));
});

[option3A, option3B, option3C].forEach((option, index) => {
    const optionLetter = ['a', 'b', 'c'][index];
    option.addEventListener('click', () => handleOptionClick(optionLetter));
});

[option2A, option2B].forEach((option, index) => {
    const optionLetter = ['a', 'b'][index];
    option.addEventListener('click', () => handleOptionClick(optionLetter));
});

[clearButton, notClearButon].forEach((option, index) => {
    const optionLetter = ['clear', 'notClear'][index];
    option.addEventListener('click', () => handleClarityClick(optionLetter));
});

[yesButton, notButton].forEach((option, index) => {
    const optionLetter = ['yes', 'not'][index];
    option.addEventListener('click', () => handleBooleanClick(optionLetter));
});


function handleBooleanClick(option){
    workingData = quizData[option === "yes" ? workingData.nextRightID : workingData.nextWrongID];
    hideAllContainers();


    fetchMapValues(workingData);
    if (lastSeekedTime !== startTime) {
        seekToTime(startTime);
        lastSeekedTime = startTime;
    }

} 

function handleClarityClick(option){
    workingData = quizData[option === "Clear" ? workingData.nextRightID : workingData.nextWrongID];
    hideAllContainers();


    fetchMapValues(workingData);
    if (lastSeekedTime !== startTime) {
        seekToTime(startTime);
        lastSeekedTime = startTime;
    }

} 



function handleOptionClick(option) {
    console.log("Right option:", rightOption, "clicked option:", option);

    workingData = quizData[rightOption === option ? workingData.nextRightID : workingData.nextWrongID];
    hideAllContainers();


    fetchMapValues(workingData);
    if (lastSeekedTime !== startTime) {
        seekToTime(startTime);
        lastSeekedTime = startTime;
    }
}


// Load YouTube Iframe API dynamically
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);






// side panel 
        
 // Array of topics
 const topics = [
    { id: 'topic1', title: 'Introduction to Quantum Physics' },
    { id: 'topic2', title: 'Relativity and Space-Time' },
    { id: 'topic3', title: 'Thermodynamics' },
    { id: 'topic4', title: 'Electromagnetism' },
    { id: 'topic5', title: 'Optics and Light' }
];

// Function to dynamically generate the side panel list
// function generateSidePanel(sideBarData) {

    
//     const panel = document.getElementById('topic-panel');
//     topics.forEach(topic => {
//         const topicLink = document.createElement('a');
//         topicLink.href = '#';
//         topicLink.innerHTML = topic.title;
//         topicLink.onclick = () => displayTopic(topic);
//         panel.appendChild(topicLink);
//     });

//         if (Array.isArray(sideBarData)) {
//             sideBarData.forEach((_, key) => console.log(key));
//         } else {
//             console.error("sideBarData is not an array:", sideBarData);
//         }
    
    
// }



function generateSidePanel(sideBarData) {
    if (typeof sideBarData === 'object' && sideBarData !== null) {
        Object.entries(sideBarData).forEach(([key, value]) => {
            console.log(key, value);  // key is the topic (e.g., 'Electric field'), value is the corresponding ID (e.g., '0')

            // Dynamically create links for the side panel
            const panel = document.getElementById('topic-panel');
            const topicLink = document.createElement('a');
            topicLink.href = '#';
            topicLink.innerHTML = key;  // Use the key as the title
            topicLink.onclick = () => displayTopic(key, value);  // Optionally, pass value to identify the topic
            panel.appendChild(topicLink);
        });
    } else {
        console.error("sideBarData is not an object:", sideBarData);
    }
}




 // Function to display the selected topic's content
 function displayTopic(key,value) {

    console.log(key + value);
    sidePanelStimulus(quizData[value]);
}

// Initialize the side panel on page load
window.onload = function () {
}
