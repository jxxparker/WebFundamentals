<!DOCTYPE html>
<html>
<head>
	<title>Jquery functions</title>
	<script type="text/javascript" src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
	<script type="text/javascript">
	$(document).ready(function(){
		$('.click').click(function(){
			alert("wooo")
		})
		$('.hide').click(function(){
			$(".hide").hide()
		})
		$('.show').click(function(){
			$(".hide").show()
		})
		$('.toggle').click(function(){
			$(".hide").toggle()
		})
		$('.slideDown').click(function(){
			$(".hidden").slideDown()
		})
		$('.slideUp').click(function(){
			$("#slideUp").slideUp()
		})
		$('.slideToggle').click(function(){
			$("#slideToggle").slideToggle()
		})
		$('.fadeIn').click(function(){
			$("#fadeIn").fadeIn()
		})
		$('.fadeOut').click(function(){
			$("#fadeOut").fadeOut()
		})
		$('.addClass').click(function(){
			$("#addClass").addClass("green")
		})
		$('.before').click(function(){
			$("#before").before("<h1>woot</h1>")
		})
		$('.after').click(function(){
			$("#after").after("<h1>woot</h1>")
		})
		$('.append').click(function(){
			$("#append").append("<span>I am a span tag</span>")
		})
		$('.html').click(function(){
			$("#html").html("<h1>Woot</h1>")
		})
		$('.attr').click(function(){
			var classVal = $("#attr").attr("class")
			$('#attr').append(classVal)
		})
		$('.attr2').click(function(){
			$("#attr").attr("class", "red")
		})
		$('.val').click(function(){
			console.log($("#val").val())
		})
		$('.val2').click(function(){
			$('#val').val("minh")
		})
		$('.text').click(function(){
			$("#text").text("hello")
		})
		var ele = $("#data")
		$.data(ele, "name", "minh")
		$('.data').click(function(){
			var value = $.data(ele,"name")
			$("#data").after(value)
		})
	})




        }
</head>
</html>
