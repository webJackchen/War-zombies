oS.Init({PName:[oPeashooter,oSunFlower,oCherryBomb,oWallNut,oPotatoMine,oSnowPea,oChomper,oRepeater],ZName:[oZombie,oConeheadZombie,oPoleVaultingZombie,oBucketheadZombie],PicArr:["images/background1.jpg","images/ZombieNoteSmall.png"],backgroundImage:"images/background1.jpg",CanSelectCard:1,LevelName:"关卡 1-9",LargeWaveFlag:{10:$("imgFlag3"),20:$("imgFlag2"),30:$("imgFlag1")},LoadMusic:function(){NewEle("oEmbed","embed","width:0;height:0",{src:"music/Look up at the.swf"},EDAll)}},{ArZ:[oZombie,oZombie,oZombie,oZombie,oZombie,oZombie,oConeheadZombie,oConeheadZombie,oPoleVaultingZombie,oBucketheadZombie],FlagNum:30,SumToZombie:{1:6,2:9,3:10,"default":10},FlagToSumNum:{a1:[3,5,9,10,13,15,19,20,23,25,29],a2:[1,2,3,10,4,5,6,15,7,8,9,25]},FlagToMonitor:{9:[ShowLargeWave,0],19:[ShowLargeWave,0],29:[ShowFinalWave,0]},FlagToEnd:function(){NewImg("imgSF","images/ZombieNoteSmall.png","left:667px;top:220px",EDAll,{onclick:function(){SelectModal(10)}});NewImg("PointerUD","images/PointerDown.gif","top:185px;left:676px",EDAll)}});