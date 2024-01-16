document.getElementById('signupButton').addEventListener('click', function() {
    document.getElementById('signupOverlay').style.display = 'block';
});

document.getElementById('closeOverlay').addEventListener('click', function() {
    document.getElementById('signupOverlay').style.display = 'none';
});

document.getElementById('signupButtonMd').addEventListener('click', function() {
    document.getElementById('signupOverlayMd').style.display = 'block';
});

document.getElementById('closeOverlayMd').addEventListener('click', function() {
    document.getElementById('signupOverlayMd').style.display = 'none';
});
function toggleRecommendedGroups() {
    const recommendedGroups = document.getElementById('recommendedGroups');
    
    // Toggle visibility
    recommendedGroups.style.display = (recommendedGroups.style.display === 'none' || recommendedGroups.style.display === '') ? 'block' : 'none';
}

// Add event listeners for the Sign In and Create Account buttons
document.getElementById('signupButton').addEventListener('click', toggleRecommendedGroups);
document.getElementById('create').addEventListener('click', toggleRecommendedGroups);

function flip(){
    document.getElementById("form").style.
        transform='rotateY(180deg)';
}
function flip1(){
    document.getElementById("form").style.
        transform='rotateY(0deg)';
}
function flip2(){
    document.getElementById("formMd").style.
        transform='rotateY(180deg)';
}
function flip3(){
    document.getElementById("formMd").style.
        transform='rotateY(0deg)';
}


document.getElementById('submit').addEventListener('click', function() {
    document.getElementById('signupOverlay').style.display = 'none';
    document.getElementById('account').style.opacity = 0;
    document.getElementById('accountCreated').style.display = 'flex';
});

document.getElementById('create').addEventListener('click', function() {
    document.getElementById('signupOverlay').style.display = 'none';
    document.getElementById('account').style.opacity = 0;
    document.getElementById('accountCreated').style.display = 'flex';
});

var locationInput = document.getElementById("location");

    // Get the buttons
    var signInButton = document.getElementById("signupButton");
    var createAccountButton = document.getElementById("create");

    // Event listener for the Sign In button
    signInButton.addEventListener("click", function() {
        locationInput.placeholder = "Enter your Location";
    });

    // Event listener for the Create Account button
    createAccountButton.addEventListener("click", function() {
        locationInput.placeholder = "Enter your Location";
    });



    