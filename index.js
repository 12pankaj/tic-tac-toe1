count=0;
	var chance=0;
	click = new Audio('music.wav');
	win = new Audio('win.mp3');
	low = new Audio('lowgusses.wav');
	var player1=prompt("enter x player name");
	var player2=prompt("enter O player name");
	var div=document.getElementById("div")
	var btn =document.getElementsByTagName('span');
	var ch=document.getElementById("chance");
			ch.innerHTML="<br/>this chance =  "+player1;
			var im=document.getElementById('image');

		function num(x) {
	//game.play()
		
		if(btn[x].innerHTML=='X' || btn[x].innerHTML=='O' || checkWinner()=='X' || checkWinner()=='O' || checkWinner()=='draw')  return 0;
		
		if(count==0)
		{
			btn[x].innerHTML='X';
			count=1;
			ch.innerHTML="<br/>this chance =  "+player2;
			chance++;
			click.play()
		
		}
		else
		{
			btn[x].innerHTML='O';
			click.play()
			ch.innerHTML="<br/>this chance =  "+player1;
			chance++;
			count=0;
		}
		
		checkWinner();
		if(checkWinner()=='X')
		{
		//	ch.innerHTML="<br/>Congratulations! "+ player1 +" 's have won! Thanks for playing."
			ch.innerHTML="<br/>"+player1;
			im.setAttribute("src","winner.png")
			win.play();
			setTimeout(() => {
            //audiogo.pause();
            win.pause();
        }, 1900);
		}
		else if(checkWinner()=='O')
		{
			//ch.innerHTML="<br/>Congratulations! "+ player2 +" 's have won! Thanks for playing."
			ch.innerHTML="<br/>"+player2;
			im.setAttribute("src","winner.png")
			win.play();
			setTimeout(() => {
            //audiogo.pause();
            win.pause();
        }, 1900);

		}
		else if(checkWinner()=="draw")
		{
		low.play();
			ch.innerHTML="<br/>Game is draw! Thanks for playing."
		}
}

	function checkWinner()
	{
		var c=0;
		for (a = 0; a < 8; a++) 
		{
			line = null;

			switch (a) {
			case 0:
				line = btn[0].innerHTML + btn[1].innerHTML + btn[2].innerHTML;
				c=1;
				break;
			case 1:
				line = btn[3].innerHTML + btn[4].innerHTML + btn[5].innerHTML;
				c=2;
				break;
			case 2:
				line = btn[6].innerHTML + btn[7].innerHTML + btn[8].innerHTML;
				c=3;
				break;
			case 3:
				line = btn[0].innerHTML + btn[3].innerHTML + btn[6].innerHTML;
				c=4;
				break;
			case 4:
				line = btn[1].innerHTML + btn[4].innerHTML + btn[7].innerHTML;
				c=5;
				break;
			case 5:
				line = btn[2].innerHTML + btn[5].innerHTML + btn[8].innerHTML;
				c=6;
				break;
			case 6:
				line = btn[0].innerHTML + btn[4].innerHTML + btn[8].innerHTML;
				c=7;
				break;
			case 7:
				line = btn[2].innerHTML + btn[4].innerHTML + btn[6].innerHTML;
				c=8;
				break;
			}
			if(line=="XXX" || line=="OOO")
		{
				switch(c)
				{
				case 1:
					{
						btn[0].setAttribute("class","col-4 border-end border-bottom border-3 border-primary h-100 bg-success hight")
						btn[1].setAttribute("class","col-4 border-bottom border-3 border-primary bg-success hight")
						btn[2].setAttribute("class","col-4 border-start border-bottom border-3 border-primary bg-success hight")
					}
					break;
				case 2:
					{
						btn[3].setAttribute("class","col-4 border-end border-bottom border-3 border-primary bg-success hight ")
						btn[4].setAttribute("class","col-4 border-bottom border-3 border-primary bg-success hight")
						btn[5].setAttribute("class","col-4 border-start border-bottom border-3 border-primary bg-success hight")
					}
					break;
				case 3:
					{
						btn[6].setAttribute("class","col-4 border-end border-3 border-primary bg-success hight ")
						btn[7].setAttribute("class","col-4  border-end border-3 border-primary bg-success hight")
						btn[8].setAttribute("class","col-4 border-start border-3 border-primary bg-success hight")
					}
					break;
				case 4:
					{
						btn[0].setAttribute("class","col-4 border-end border-bottom border-3 border-primary h-100 bg-success hight")
						btn[3].setAttribute("class","col-4 border-end border-bottom border-3 border-primary bg-success hight ")
						btn[6].setAttribute("class","col-4 border-end border-3 border-primary bg-success hight ")
					}
					break;
				case 5:
					{
						btn[1].setAttribute("class","col-4 border-end border-bottom border-3 border-primary bg-success hight")
						btn[4].setAttribute("class","col-4 border-end border-bottom border-3 border-primary bg-success hight")
						btn[7].setAttribute("class","col-4 border-end border-3 border-primary bg-success hight")	
					}
					break;
				case 6:
					{
						btn[2].setAttribute("class","col-4 border-start border-bottom border-3 border-primary bg-success hight")
						btn[5].setAttribute("class","col-4 border-end border-bottom border-3 border-primary bg-success hight")
						btn[8].setAttribute("class","col-4 border-start border-3 border-primary bg-success hight")
					}
					break;
				case 7:
					{
						btn[0].setAttribute("class","col-4 border-end border-bottom border-3 border-primary h-100 bg-success hight")
						btn[4].setAttribute("class","col-4 border-end border-bottom border-3 border-primary bg-success hight")
						btn[8].setAttribute("class","col-4 border-start border-3 border-primary bg-success hight")
					}
					break;
				case 8:
					{
						btn[2].setAttribute("class","col-4 border-start border-bottom border-3 border-primary bg-success hight")
						btn[4].setAttribute("class","col-4 border-end border-bottom border-3 border-primary bg-success hight")
						btn[6].setAttribute("class","col-4 border-end border-3 border-primary bg-success hight ")
					}
					break;
				}
		}
			//For X winner
			if (line=="XXX"){
				return "X";
			}
			
			// For O winner
			else if (line=="OOO") {
				return "O";
			}
		}
		if(chance==9)
		{
			return "draw";
		}

		}

	function restar()
	 {
		location.reload();
		
	}
	function retry() {
			count=0;
			chance=0;
			im.setAttribute("src","")
			win = new Audio('win.mp3');
			ch.innerHTML="<br/>this chance =  "+player1;
			for (a = 0; a <= 8; a++) 
			{
				if(a==2 || a==5 )
				{

				btn[a].setAttribute("class","col-4 border-bottom border-3 border-primary hight")	
				}
				else if(a==6 || a==7) 
				{
				btn[a].setAttribute("class","col-4 border-end border-3 border-primary hight")
			}
			else if(a==8)

				btn[a].setAttribute("class","col-4 border-primary hight")
				else
				btn[a].setAttribute("class","col-4 border-end border-bottom border-3 border-primary hight")
				btn[a].innerHTML="";
			}
	}