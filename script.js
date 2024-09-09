const firebaseConfig = {
    apiKey: "AIzaSyA88fPkOvcI4QA9qD3ROpk-ay-V6ibQQlc",
    authDomain: "my-application-7fd40.firebaseapp.com",
    projectId: "my-application-7fd40",
    storageBucket: "my-application-7fd40.appspot.com",
    messagingSenderId: "269589994279",
    appId: "1:269589994279:web:4c617a622c328a1224e702",
    measurementId: "G-D8MD1J28GR",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let controlData = []; // To store fetched quiz data
var quizData;
var workingData;
var startTime,pauseTime,endTime,nextTime;








let player;
        const playPauseBtn = document.getElementById('play-pause');
        const seekBar = document.getElementById('seek-bar');
        const currentTimeEl = document.getElementById('current-time');
        const durationEl = document.getElementById('duration');
        const muteBtn = document.getElementById('mute');
        const volumeBar = document.getElementById('volume-bar');


       

        // Load the YouTube IFrame API
        function onYouTubeIframeAPIReady() {
            player = new YT.Player('youtube-video', {
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        }

        // When the player is ready, attach event listeners
        function onPlayerReady(event) {
            console.log("player ready");
            const duration = player.getDuration();
            durationEl.textContent = formatTime(duration);







            let checkInterval = null;
            let lastSeekedTime = null; // To prevent continuous seeking
            
            function startCheckingPlayerTime() {
                // Clear any existing interval if already running
                if (checkInterval) {
                    clearInterval(checkInterval);
                }
            
                // Set a new interval to check the current time every 100 milliseconds
                checkInterval = setInterval(() => {
                    if (player && typeof player.getCurrentTime === 'function') {
                        const currentTime = player.getCurrentTime(); // Get the current time of the video
                        console.log("Current Time: ", currentTime);
            
                        // Check if we need to go to the next video section
                        if (currentTime >= nextTime) {
                            // Load the next section of the video
                            workingData = quizData[workingData.serial];  // Update workingData with the next part
                            console.log(workingData);
            
                            // Set the new start, pause, and next times
                            setControlData(workingData.start, workingData.pause, workingData.nextTime);
            
                            // Avoid seeking repeatedly in the interval
                            if (lastSeekedTime !== startTime) {
                                seekToTime(startTime);  // Seek to the new start time
                                lastSeekedTime = startTime; // Record the last seeked time
                            }
                        }
            
                        // Check if the current time exceeds or equals the pause time
                        if (currentTime >= pauseTime) {
                            player.pauseVideo(); // Pause the video
                            console.log("Video Paused at: ", currentTime);
                        }
                    }
                }, 100); // Check every 100ms
            }
            
            // Function to set control data for start, pause, and next times
            function setControlData(start, pause, next) {
                startTime = parseFloat(start);  // Convert start to number
                pauseTime = parseFloat(pause);  // Convert pause to number
                nextTime = parseFloat(next);    // Convert next to number
            
                console.log("Start Time: ", startTime);
                console.log("Pause Time: ", pauseTime);
                console.log("Next Time: ", nextTime);
            }
            
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


        function setControlData(start, pause, next) {
            startTime = start;
            pauseTime = pause;
            nextTime = next;
            console.log("Start Time: ", startTime);
            console.log("Pause Time: ", pauseTime);
            console.log("Next Time: ", nextTime);
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
                const quizDoc = await db.collection("intelclass").doc("physicsf1").get();
                console.log("hey");
        
                if (quizDoc.exists) {
                    const data = quizDoc.data();
                    quizData = data.data; // Assuming "quizData" holds the array of maps
                    console.log(quizData[0]); // Log the entire data to the console
                    workingData = quizData[0];
                    startTime = workingData.start;
                    pauseTime = workingData.pause;
                    nextTime=workingData.nextTime;
                    startTime = parseFloat(workingData.start); // Convert to number
                    pauseTime = parseFloat(workingData.pause); // Convert to number
                    nextTime = parseFloat(workingData.nextTime); // Convert to number

                     // Check if startTime is valid, then seek to it
            if (typeof startTime === 'number') {
                setControlData(startTime, pauseTime, nextTime);
                seekToTime(startTime); // Seek and start the video after startTime is fetched
            } else {
                console.error("Invalid startTime");
            }


                } else {
                    console.error("No quiz data found!");
                }
            } catch (error) {
                console.error("Error fetching data from Firestore:", error);
            }
        }
        


        

// Example usage:
// Set the target time to 60 seconds (1 minute) and start the timer





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



        // Load YouTube Iframe API dynamically
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



        