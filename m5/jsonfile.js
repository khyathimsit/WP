var obj = [{
	"question": "break is the tag used to break a line.",
	"choices": [true, false],
	"correct" : true,
	"hints":["Recall all the basic tags discussed in the session","Refer all the empty tags"],
	"answer":'break tag is available in html.'
   },
   {
   	"question": "h4 is the tag used to display the most important content.",
	"choices": [true, false],
	"correct" : false,
	"hints":["Recall all the basic tags discussed in the session","There are 6 heading tags in html"],
	"answer":'h4 tag is available in html.'
   }
];
load();
function load() {
	for( i = 2; i > 0; i--) {
		var str = '<div id = \"question' + i +   '" class="jumbotron jumbotron-fluid" style = "border-radius: 15px; background-color: white;"></div';
		document.getElementById("question-body").insertAdjacentHTML('afterend', str);
		
		var qscontainer = '<div id = \"cont'+i+ '" class="container"></div';
		document.getElementById("question"+i).insertAdjacentHTML('afterbegin', qscontainer);

		var qstext = '<h3 id = "ques'+ i + '"> Q'+ i +') '+ obj[i-1].question +'</h3>';
		document.getElementById("cont"+i).insertAdjacentHTML('afterbegin', qstext);
		var qstext = document.getElementById("ques"+i);
		
		var hint = '<p><button id = "hintbtn'+i+'"class="btn btn-primary btn-lg" type="button" data-toggle="collapse" data-target="#collapseExample'+i+'" aria-expanded="false" aria-controls="collapseExample">\
    	Hint\
  		</button>\
		</p>\
		<div class="collapse" id="collapseExample' + i +'">\
  			<div class="card card-body">\
  				<div id = "hinttext' + i + '" class = "row" style = "font-size: 14px">\
    				' + obj[i - 1].hints[0] +'\
    				<br>\
  				</div>\
  				<div class = "row">\
  					<div class = "col-md-6">\
  						<button id = "p'+ i +'"type="button" class="btn btn-primary btn-lg" style = "float:right;" onclick = "next(this)" disabled>Hint1</button>\
  					</div>\
  				<div class = "col-md-6">\
  					<button id = "n' + i +'"type="button" class="btn btn-primary btn-lg" onclick = "next(this)" >Hint2</button>\
  				</div>\
  			</div>\
  		</div>\
	</div>';

	qstext.insertAdjacentHTML('afterend', hint);
		var options1 = '<div id = "true'+i+'" class="radio"><label style = "font-size: 15px;"><input id = "t'+i+'" type="radio" name="optradio" value = "true" onclick = "validation(this)" style="height:15px; width:15px; ">TRUE</label></div>'
		document.getElementById("collapseExample"+i).insertAdjacentHTML('afterend', options1);

		var options2 = '<div id = "false'+i+'"class="radio"><label style = "font-size: 15px;"><input id = "f'+i+'" type="radio" name="optradio" onclick = "validation(this)" style="height:15px; width:15px;">FALSE</label></div>'
		document.getElementById("true"+i).insertAdjacentHTML('afterend', options2);

		var wrongalert = '<div id = "wrongalert'+i+'"class="alert alert-danger" role="alert" style = "display: none;">\
  			<p> <strong>Incorrect!</strong> ' + obj[i - 1].answer + '</p>\
		</div>';
		document.getElementById("false"+i).insertAdjacentHTML('afterend', wrongalert);

        var rightalert = '<div id = "rightalert'+i+'"class="alert alert-success" role="alert" style = "display: none;">\
  			<p> <strong>Correct!</strong> ' + obj[i - 1].answer + '</p>\
		</div>';
        document.getElementById("wrongalert" + i).insertAdjacentHTML('afterend', rightalert);
	}
};

function next(button) {
	console.log(button);
	var btnid = button.id.split("");
	console.log(btnid);
	if(btnid[0] == "p") {
		document.getElementById("hinttext" + btnid[1]).innerHTML = obj[btnid[1] - 1].hints[0];
		document.getElementById("n" + btnid[1]).disabled = false;
		document.getElementById("p"+btnid[1]).disabled = true;
	} else {
		document.getElementById("hinttext" + btnid[1]).innerHTML = obj[btnid[1] - 1].hints[1];
		document.getElementById("p"+btnid[1]).disabled = false;
		document.getElementById("n"+btnid[1]).disabled = true;
	}
};

function validation(radiobtn) {
	var radiobtnid = radiobtn.id.split("");
	var ans = false;
	if(radiobtnid[0] == "t") {
		ans = true;
	}
	if(ans == obj[radiobtnid[1]-1].correct) {
		document.getElementById("rightalert"+radiobtnid[1]).style.display = "block";
		document.getElementById("f"+radiobtnid[1]).disabled = true;
		document.getElementById("t" + radiobtnid[1]).disabled = true;
		document.getElementById("hintbtn"+ radiobtnid[1]).disabled = true;
	} else {
		document.getElementById("wrongalert"+radiobtnid[1]).style.display = "block";
		document.getElementById("f"+radiobtnid[1]).disabled = true;
		document.getElementById("t" + radiobtnid[1]).disabled = true;
		document.getElementById("hintbtn"+ radiobtnid[1]).disabled = true;
	}
};

function reset() {
	var totalqs = obj.length;
	for(var i = totalqs; i>0;i--) {
		document.getElementById("question"+i).remove();
	}
	load();
}