const a0_0x311d84=a0_0xeb90;(function(_0x24545f,_0x5bc7aa){const _0x2f47b1=a0_0xeb90,_0x2c1c70=_0x24545f();while(!![]){try{const _0x2fc929=parseInt(_0x2f47b1(0x16a))/0x1*(parseInt(_0x2f47b1(0x167))/0x2)+-parseInt(_0x2f47b1(0x174))/0x3+parseInt(_0x2f47b1(0x16b))/0x4*(-parseInt(_0x2f47b1(0x180))/0x5)+parseInt(_0x2f47b1(0x171))/0x6+parseInt(_0x2f47b1(0x17d))/0x7*(-parseInt(_0x2f47b1(0x17b))/0x8)+parseInt(_0x2f47b1(0x168))/0x9+parseInt(_0x2f47b1(0x17f))/0xa;if(_0x2fc929===_0x5bc7aa)break;else _0x2c1c70['push'](_0x2c1c70['shift']());}catch(_0x2d148e){_0x2c1c70['push'](_0x2c1c70['shift']());}}}(a0_0x19d6,0x61050));function a0_0xeb90(_0x2f0509,_0x4454f){const _0x19d6af=a0_0x19d6();return a0_0xeb90=function(_0xeb90b4,_0x559e10){_0xeb90b4=_0xeb90b4-0x160;let _0x2eda82=_0x19d6af[_0xeb90b4];return _0x2eda82;},a0_0xeb90(_0x2f0509,_0x4454f);}const formularioUI=document['querySelector'](a0_0x311d84(0x166)),listaActividadesUI=document[a0_0x311d84(0x16e)](a0_0x311d84(0x176));function a0_0x19d6(){const _0x29e5c3=['delete_forever','</span>\x20-\x20','#formulario','26iyNhvw','2860929XZRcrX','innerHTML','10777hwmWsj','36456aQtMap','parse','getItem','querySelector','preventDefault','estado','2110728PbnQdQ','submit','done','1586484SCQaKd','addEventListener','#listaActividades','forEach','DOMContentLoaded','<div\x20class=\x22alert\x20alert-success\x22\x20role=\x22alert\x22><i\x20class=\x22material-icons\x20float-left\x22>keyboard_arrow_right</i><span\x20class=\x22font-weight-bold\x22>','path','408gPQzWu','target','74557ntphju','task','13432010ApeCTw','375gCtUnU','<div\x20class=\x22alert\x20alert-warning\x22\x20role=\x22alert\x22><i\x20class=\x22material-icons\x20float-left\x22>keyboard_arrow_right</i><span\x20class=\x22font-weight-bold\x22>','splice','actividad','#actividad','setItem','findIndex'];a0_0x19d6=function(){return _0x29e5c3;};return a0_0x19d6();}let arrayActividades=[];const CrearTask=_0x355e42=>{let _0x48f247={'actividad':_0x355e42,'estado':![]};return arrayActividades['push'](_0x48f247),_0x48f247;},GuardarDB=()=>{const _0x47ef32=a0_0x311d84;localStorage[_0x47ef32(0x162)](_0x47ef32(0x17e),JSON['stringify'](arrayActividades)),PintarDB();},PintarDB=()=>{const _0x2af93f=a0_0x311d84;listaActividadesUI[_0x2af93f(0x169)]='',arrayActividades=JSON[_0x2af93f(0x16c)](localStorage[_0x2af93f(0x16d)](_0x2af93f(0x17e))),arrayActividades===null?arrayActividades=[]:arrayActividades[_0x2af93f(0x177)](_0x3854db=>{const _0xb978eb=_0x2af93f;_0x3854db[_0xb978eb(0x170)]==!![]?listaActividadesUI[_0xb978eb(0x169)]+=_0xb978eb(0x179)+_0x3854db[_0xb978eb(0x160)]+_0xb978eb(0x165)+_0x3854db[_0xb978eb(0x170)]+'<span\x20class=\x22float-right\x22><i\x20class=\x22material-icons\x22>done</i><i\x20class=\x22material-icons\x22>delete_forever</i></span></div>':listaActividadesUI[_0xb978eb(0x169)]+=_0xb978eb(0x181)+_0x3854db[_0xb978eb(0x160)]+'</span>\x20-\x20'+_0x3854db[_0xb978eb(0x170)]+'<span\x20class=\x22float-right\x22><i\x20class=\x22material-icons\x22>done</i><i\x20class=\x22material-icons\x22>delete_forever</i></span></div>';});},EditarDB=_0x36ae73=>{const _0x50a450=a0_0x311d84;let _0x256271=arrayActividades[_0x50a450(0x163)](_0xe7b196=>{const _0xe69b1f=_0x50a450;return _0xe7b196[_0xe69b1f(0x160)]===_0x36ae73;});arrayActividades[_0x256271][_0x50a450(0x170)]=!![],GuardarDB();},EliminarDB=_0x3b390d=>{const _0x5ebbcb=a0_0x311d84;let _0x3054e0;arrayActividades['forEach']((_0x8b0e3d,_0x102247)=>{const _0x2128a6=a0_0xeb90;_0x8b0e3d[_0x2128a6(0x160)]===_0x3b390d&&(_0x3054e0=_0x102247);}),arrayActividades[_0x5ebbcb(0x182)](_0x3054e0,0x1),GuardarDB();};formularioUI[a0_0x311d84(0x175)](a0_0x311d84(0x172),_0x48fb90=>{const _0x592c79=a0_0x311d84;_0x48fb90[_0x592c79(0x16f)]();let _0x3b5f0e=document[_0x592c79(0x16e)](_0x592c79(0x161))['value'];CrearTask(_0x3b5f0e),GuardarDB(),formularioUI['reset']();}),document[a0_0x311d84(0x175)](a0_0x311d84(0x178),PintarDB),listaActividadesUI[a0_0x311d84(0x175)]('click',_0x27d33a=>{const _0x42a60a=a0_0x311d84;_0x27d33a[_0x42a60a(0x16f)]();if(_0x27d33a[_0x42a60a(0x17c)][_0x42a60a(0x169)]===_0x42a60a(0x173)||_0x27d33a['target']['innerHTML']===_0x42a60a(0x164)){let _0x1594fa=_0x27d33a[_0x42a60a(0x17a)][0x2]['childNodes'][0x1]['innerHTML'];_0x27d33a[_0x42a60a(0x17c)][_0x42a60a(0x169)]===_0x42a60a(0x164)&&EliminarDB(_0x1594fa),_0x27d33a['target'][_0x42a60a(0x169)]===_0x42a60a(0x173)&&EditarDB(_0x1594fa);}});