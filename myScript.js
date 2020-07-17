var showingSourceCode=false;
var isInEditMode=true;

function enableEditMode(){
	textField.document.designMode='On';
}

function execCmd(command){
	textField.document.execCommand(command, false, null);
}

function execCommandWithArg(command, arg){
	textField.document.execCommand(command, false, arg);
}

function toggleSource(){
	if (showingSourceCode){
		textField.document.getElementsByTagName('body')[0].innerHTML=textField.document.getElementsByTagName('body')[0].textContent;
		showingSourceCode=false;
	}else{
		textField.document.getElementsByTagName('body')[0].textContent=textField.document.getElementsByTagName('body')[0].innerHTML;
		showingSourceCode=true;
	}
}

function toggleEdit(){
	if(isInEditMode){
		textField.document.designMode='Off';
		isInEditMode=false;
	}else{
		textField.document.designMode='On';
		isInEditMode=true;
	}
}

function changeBackground(color){
	document.getElementById('farea').style.background=color;
}

$(function () {
        $(":file").change(function () {
            if (this.files && this.files[0]) {
                var reader = new FileReader();

                reader.onload = imageIsLoaded;
                reader.readAsDataURL(this.files[0]);
            }
        });
    });

    function imageIsLoaded(e) {
        $('#myImg').attr('src', e.target.result);
        $('#yourImage').attr('src', e.target.result);
    };

 /*Ribbon*/
 
 var showing = false;

$(document).on("click", ".tabItems", function(e) {
		var elementToShow = $(this).attr("href");
		if (!showing) {
				showing = true;
				setTimeout(function() {
						$(elementToShow).addClass("slide-out");
				}, 100);
		} else {
				if (!$(elementToShow).hasClass("showing")) {
						$(elementToShow).addClass("showing");
				}

				if ($(elementToShow).hasClass("slide-out")) {
						$(elementToShow).removeClass("slide-out");
				}
		}
		$(elementToShow).addClass("active");
});

$(document).click(function(e) {
		var tabs = $('.tabItems');
		var containers = $('#Text-control, #Image-control');

		if ((!containers.is(e.target) && containers.has(e.target).length === 0) && (!tabs.is(e.target) && tabs.has(e.target).length === 0)) {
				containers.removeClass("slide-out");
				containers.removeClass("showing");
				containers.removeClass("active");
				showing = false;
		}
});   