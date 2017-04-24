"use strict";

LD38.Song.level1 = () => new LD38.Song({
	hp      : 9,
	bpm     : 115,
	delay   : 1500,
	duration: 233000,
	file    : "ld38-level1",
	next    : 'drumtest',
	spacing : 15,
	notes   : {
		
		//0 = chopper
		//1 = tank
		//2 = dunk
		//3 = bot
		
	//slow start
		0  : 4,
		4  : null,
		8  : 2,
		12 : null,

		16 : 4,
		20 : null,
		24 : 2,
		28 : null,

		32 : 4,
		36 : null,
		40 : 2,
		44 : null,

		48 : 4,
		52 : null,
		56 : null,
		60 : null,

	//vocals
		64 : 1,
		68 : null,
		72 : 4,
		76 : null,
		
		80 : 1,
		84 : null,
		88 : 4,
		92 : null,

		96 : 1,
		100 : null,
		104 : 4,
		108 : null,

		112 : 1,
		116 : null,
		120 : 4,
		124 : null,
		
		128 : 0,
		132 : null,
		136 : 4,
		140 : null,

		144 : 0,
		148 : null,
		152 : 4,
		156 : null,

		160 : 1,
		164 : null,
		168 : 4,
		172 : null,

		176 : 1,
		180 : null,
		184 : 4,
		188 : null,
		
	//drums
		192 : 3,
		224 : 3, 
		256 : 3, 		
		272 : 0,	
		288 : 3,		
		304 : 1,
			308 : 1,
			312 : 1,
			316 : 1,
		
	//instrumental melody
		320 : 2,
		
		336 : 1,
			340 : 0,
			344 : 1,
			348 : 0,
		
		352 : 3,
		
		368 : 1,
			372 : 0,
			376 : 1,
			380 : 0,
		
		384 : 3,		
		
		//400 : 0,
			404 : 0,
			412 : 0,
		
		416 : 3,
		
		432 : 1,
			440 : 1,
		
		448 : 3,
		
		464 : 1,
			468 : 0,
			472 : 1,
			476 : 0,
		
		480: 3,
		
		496 : 1,
			500 : 0,
			504 : 1,
				506: 0,
			508 : 1,
				510 : 0,
		
	//guitar 1
		512 : 2,
				526 : 1,
		
		528 : 3,
				542 : 1,
		
		544 : 3,
		
		560 : 1,
			564 : 0,
			568 : 1,
			572 : 0,
		
	//guitar 2
		576 : 3,
			590 : 1,
		
		592 : 3,
			606 : 1,
		
		608 : 3,
		
		624 : 1,
			628 : 0,
			632 : 1,
			636 : 0,
		
	//guitar 3
		640 : 2,
				654 : 0,
		
		656 : 3,
				670 : 0,
		
		672 : 3,
		
		688 : 1,
			692 : 0,
			696 : 1,
			700 : 0,
		
	//guitar 4
		704 : 3,
				718 : 0,
		
		720 : 3,
				734 : 0,
		
		736: 3,
		
		752 : 1,
			756 : 1,
			760 : 3,
			764 : 0,
		
	//drum interlude
		768 : 2,
			772 : null,
				774 : 0,
			776 : 0,
			780 : null,
		
		//784,
			788 : 1,
			//792,
			796 : 1,
		
		800 : 3,
			804 : null,
				806 : 0,
			808 : 0,
			812 : null,
		
		//816,
			820 : 1,
			//824,
			828 : 1,
			
		832 : 3,
			836 : null,
				838 : 0,
			840 : 0,
			844 : null,
		
		//848,
			852 : 1,
			//856,
			860 : 1,
		
		864 : 3,
			868 : null,
				870 : 0,
			872 : 0,
			876 : null,
		
		880 : 1,
			884 : 0,
			888 : 1,
				890 : 0,	
			892 : 1,
				894 : 0,
		
	//vocals ( 8 measures )
		896 : 2,
			908:3,
		
		912 : 1,
			916 : 0,
			920 : 1,
			924 : 0,
		
		928 : 3,
			940:3,
		
		944 : 1,
			948 : 0,
			952 : 1,
			956 : 0,
		
		960 : 3,
			972 : 3,
		
		976 : 1,
			980 : 0,
			984 : 1,
			988 : 0,
		
		992 : 3,
			1004 : 3,
		
		1008 : 1,
			1012 : 0,
			1016 : 1,
				1018 : 0,
			1020 : 1,
				1022 : 0,
		
	//instrumental melody ( 12 )
		1024 : 2,
			//1028
			1032 : 1,
				1034 : 0,
			1036 : 1,
				1038 : 0,
		
		//1040 : 3,
			//1044 : 3,
			//1048 : 1,
			//1052 : 1,
				1054 : 4,
		
		1056 : 3,
			1060 : 3,
			1064 : 1,
				1066 : 0,
			1068 : 1,
				1070:0,
		
		//1072 : 3,
			//1076 : 4,
			//1080 : 3,
			//1084 : 4,
				1086 : 4,
				
		1088 : 3,
			1092 : 3,
			1096 : 1,
				1098 : 0,
			1100 : 1,
				1102 : 0,
		
		1104 : 3,
		1108 : 4,
			1110 : 4,
		1112 : 3,
		1116 : 4,
			1118 : 4,
		
		1120 : 3,
		1124 : 3,
		1128 : 1,
			1130: 0,
		1132 : 1,
			1134: 0,
		
		1136 : 3,
		
		1152 : 1,
		
		1168 : 0,
		
		1184 : 1,
		1188 : 0,
		1192 : 1,
		1196 : 0,
		
		//1200,
			//1204,
			//1208,
				1210 : 4,
			//1212,	
				1214 : 4,
		
	//guitar 1
	
		1216 : 2,
				1230 : 1,
		
		1232 : 3,
				1246 : 1,
		
		1248 : 3,
		
		1264 : 0,
			1268 : 1,
			1272 : 1,
			1276 : 0,
		
	//guitar 2
		
		1280 : 3,
				1294 : 1,
		
		1296 : 3,
				1310 : 1,
		
		1312 : 3,
		
		1328 : 0,
			1332 : 1,
			1336 : 1,
			1340 : 0,
			
	//guitar 3
		
		1344 : 2,
				1358 : 0,
		
		1360 : 3,
				1374 : 0,
		
		1376 : 3,
	
		1392 : 1,
			1396 : 0,
			1400 : 1,
			1404 : 0,
	
	//guitar 4
	
		1408 : 3,
				1422 : 0,
		
		1424 : 3,
				1438 : 0,
		
		1440 : 3,
		
		1456 : 1,
			1460 : 1,
			1464 : 3,
			1468 : 3,
		
	//outtro ( 16 )
		1472 : 2,
		1484 : 3,
		
		1488 : 2,
		1500 : 3,
		
		1504 : 1,
		1508 : null,
		1510 : 1,
		1512 : null,
		1516 : 1,
		
		1520 : 0,
		1524 : null,
		1526 : 0,
		1528 : null,
		1532 : 0,
		
		1536 : 2,
		1548 : 3,
		
		1552 : 2,
		1564 : 3,
		
		1568 : 0,
		1572 : null,
		1574 : 1,
		1576 : null,
		1580 : null,
		
		1584 : 1,
		1588 : null,
		1590 : 3,
		1592 : null,
		1596 : 0,
		
		1600 : 2,
		//1604,
		//1608,
		1610 : 1,
		1612 : 0,
		
		1616 : 0,
		//1620,
		//1624,
		1626 : 1,
		1628 : 3,
		1630 : 0,
		
		1632 : 1,
		1636 : null,
		1638 : 1,
		1640 : null,
		1644 : 1,
		
		1648 : 0,
		1652 : null,
		1654 : 0,
		1656 : null,
		1660 : 1,
		
		1664 : 2,
		1676 : 3,
		
		1680 : 0,
		//1684 ,
		//1688,
		1692 : 4,
		1693 : 4,
		1694 : 3,
		
		1696 : 2,
		1700 : null,
		1704 : null,
		1708 : null,
		
		1712 : null,
		1716 : null,
		1720 : null,
		1724 : null,
		
		1728 : null,
		1732 : null,
		1736 : null,
		1740 : null,
		
		1744 : null,
		1748 : null,
		1752 : null,
		1756 : null,
		
		1760 : null,
		1764 : null,
		1768 : null,
		1772 : null,
	
	},
});

