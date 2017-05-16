var numb = 0;
$(document).ready(function(){
        $(".bag").click(function(){
          $("div.bags").fadeIn();
        });
        $(".close").stop().click(function(){
          $("div.bags").fadeOut();
        });      
        $(".shop").click(function(){
        	$("div#shops").fadeIn();
        });
        $(".close").stop().click(function(){
        	$("div#shops").fadeOut();
        });
        // $(".seed").click(function(){
        // 	$("div#assure").fadeIn();
        // });
        $(".close2").stop().click(function(){
        	$("div#assure").fadeOut();
        });
        $("#cancel").stop().click(function(){
          $("div#assure").fadeOut();
        });
        $(".barn").click(function(){
        	$("div.barns").fadeIn();
        });
        $(".close").stop().click(function(){
        	$("div.barns").fadeOut();
        });
        $(".setting").click(function(){
        	$("div#sets").fadeIn();
        });
        $(".close2").stop().click(function(){
        	$("div#sets").fadeOut();
        });
        //更换背景
        $(".back1").click(function(){
        	$("div.countain").addClass(".back1");
        });
        $(".back2").click(function(){
        	$("div.countain").addClass('.back2');
        });
        //浇水
        $(".water").click(function(){
          console.log("water");
          $( this ).addClass(".cursor");
        });
      
      var salenum = document.getElementById("salenum").value;
      var money = document.getElementById("money").innerHTML;
      var seedApple = document.getElementById("seedApple").innerHTML;
      
      //修改数目
      function sale(){
        salenum = 0;
      $("#reduce").click(function(){
        if(salenum > 0) {
          salenum--;
          document.getElementById("salenum").value = salenum;
        }
      });
      $("#increase").click(function(){
        if(salenum < 10) {
          salenum++;
          document.getElementById("salenum").value = salenum;
          console.log(salenum);
          numb = salenum;
        }
      });
    } 
     //购买
      $("#buyApple").click(function(){
          $("div#assure").fadeIn();
          sale();
          $("#sureBuy").click(function(){
            alert("购买成功！！");
            $("div#assure").fadeOut();
            document.getElementById("seedApple").innerHTML = salenum;
            money = money - 24*salenum;
            document.getElementById("money").innerHTML = money;
            document.getElementById("salenum").value = 0;
            console.log(salenum);
          });
        });

      $("#buyLemon").click(function(){
            salenum = 0;
          $("div#assure").fadeIn();
          sale();
          $("#sureBuy").click(function(){
            alert("购买成功！！");
            $("div#assure").fadeOut();
            document.getElementById("seedLemon").innerHTML = salenum;
            document.getElementById("salenum").value = 0;
          });
        });
      $("#buyOrange").click(function(){
            salenum = 0;
          $("div#assure").fadeIn();
          sale();
          $("#sureBuy").click(function(){
            alert("购买成功！！");
            $("div#assure").fadeOut();
            document.getElementById("seedOrange").innerHTML = salenum;
            document.getElementById("salenum").value = 0;
          });
        });
      $("#buyWatm").click(function(){
            salenum = 0;
          $("div#assure").fadeIn();
          sale();
          $("#sureBuy").click(function(){
            alert("购买成功！！");
            $("div#assure").fadeOut();
            document.getElementById("seedWatm").innerHTML = salenum;
            document.getElementById("salenum").value = 0;
          });
        });
      $("#buyCherry").click(function(){
            salenum = 0;
          $("div#assure").fadeIn();
          sale();
          $("#sureBuy").click(function(){
            alert("购买成功！！");
            $("div#assure").fadeOut();
            document.getElementById("seedCherry").innerHTML = salenum;
            document.getElementById("salenum").value = 0;
          });
        });
      $("#buyBanana").click(function(){
            salenum = 0;
          $("div#assure").fadeIn();
          sale();
          $("#sureBuy").click(function(){
            alert("购买成功！！");
            $("div#assure").fadeOut();
            document.getElementById("seedBanana").innerHTML = salenum;
            document.getElementById("salenum").value = 0;
          });
        });
      // var numApple = document.getElementById("num").value;      
    });

//收获次数
      var count = 0;
      //收获总数（个）             
      var gainCount = count * 5; 
	$(function ani() {
      // $("#seedsApple").(function(){
      //   console.log(seedApple);
      //   if(seedApple!= 0) 
      //     {$( this ).draggable({ revert: "valid" });}
      // });
	    $( "#seedsApple" ).draggable({ revert: "valid" });
	 	//$( ".gain" ).draggable({ revert: "valid" });{accept:".gain .shovel"}
	 	  $( ".land" ).droppable();
	    $( ".soil" ).droppable({
	    	  accept: ".seeds",
	      	activeClass: "ui-state-default",
	      	hoverClass: "ui-state-hover",
	      	drop: function( event, ui ) {
	      		var getGrowth= $(this);
	    	    $( this ).removeClass("soil")
        		.addClass( "ui-state-highlight");
        		setTimeout(function(){
         			console.log("grow")
         			$(getGrowth).addClass("ui-state-error");
         		},3000);
            // console.log(salenum);
            // salenum--;
            document.getElementById("seedApple").innerHTML = numb - 1;
         		$( ".gain" ).draggable({ 
         			revert: "valid" ,
	        		stop:function( event, ui ){
	        			console.log("gain")
	        			$(getGrowth).addClass("ui-icon-carat-1-n");
                count++;
                document.getElementById("numApple").innerHTML = count*7;
	        		}
        		});
         		$( ".shovel" ).draggable({ 
         			revert: "valid" ,
	        		stop:function( event, ui ){
	        			console.log("shovel")
	        			$(getGrowth).addClass("ui-icon-carat-1-ne");
	        		}
        		});
	    	}
	    });
//也可以点击鼠标之后进行收获，
//点击收获之后鼠标变成收获的手，
//再点击土地后进行收获，
//以浇水为例
    function water(){
      $(".water").click(function(){
        console.log(22);
        $( "div.countainer" ).addClass(".cursor");
      });
    }
//获取bag里面的数据，>0时才可以播种，否则不能拖动   
    
    

  	});
  	