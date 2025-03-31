// Inyector de expresiones
var expressionsArray = [];
var expressionObj = {
        "Wiggle": "wiggle(0,0)",
        "LoopOut": "loopOut()",
        "Time": "time*",
        "Otro": "",
    };

for(var k in expressionObj) {
    expressionsArray.push(k);
    }

// Ventana Principal

(function(thisObj) {

    buildUI(thisObj);

    function buildUI(thisObj) {



        var mainWindow = (thisObj instanceof Panel) ? thisObj : new Window("palette", "E.V.E 01", undefined, {

            resizeable: true

        });
      
//Líneas para el saludo. El saludo es definido de forma aleatoria por la funcion math.random.

      var groupOne = mainWindow.add("group", undefined, "groupOne");
      groupOne.orientation = "row";
      var gema = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\b\x00\x00\x00\f\b\x06\x00\x00\x00_\u009E\u00FC\u009D\x00\x00\x017iCCPAdobe RGB (1998)\x00\x00(\u0091\u0095\u008F\u00BFJ\u00C3P\x14\u0087\u00BF\x1BE\u00C5\u00A1V\b\u00E2\u00E0p'QPl\u00D5\u00C1\u008CI[\u008A X\u00ABC\u0092\u00ADIC\u0095b\x12n\u00AE\x7F\u00FA\x10\u008En\x1D\\\u00DC}\x02'G\u00C1A\u00F1\t|\x03\u00C5\u00A9\u0083C\u0084\f\x05\u008B\u00DF\u00F4\u009D\u00DF9\x1C\u00CE\x01\u00A3b\u00D7\u009D\u0086Q\u0086\u00F3X\u00ABv\u00D3\u0091\u00AE\u00E7\u00CB\u00D9\x17f\u0098\x02\u0080N\u0098\u00A5v\u00ABu\x00\x10'q\u00C4\x18\u00DF\u00EF\b\u0080\u00D7M\u00BB\u00EE4\u00C6\u00FB\x7F2\x1F\u00A6J\x03#`\u00BB\x1Be!\u0088\n\u00D0\u00BF\u00D2\u00A9\x061\x04\u00CC\u00A0\u009Fj\x10\x0F\u0080\u00A9N\u00DA5\x10O@\u00A9\u0097\u00FB\x1BP\nr\u00FF\x00J\u00CA\u00F5|\x10_\u0080\u00D9s=\x1F\u008C9\u00C0\fr_\x01L\x1D]k\u0080Z\u0092\x0E\u00D4Y\u00EFT\u00CB\u00AAeY\u00D2\u00EE&A$\u008F\x07\u0099\u008E\u00CE3\u00B9\x1F\u0087\u0089J\x13\u00D5\u00D1Q\x17\u00C8\u00EF\x03`1\x1Fl7\x1D\u00B9V\u00B5\u00AC\u00BD\u00F5\x7F\u00FE=\x11\u00D7\u00F3en\u009FG\b@,=\x17YAx\u00A1.\x7FU\x18;\u0093\u00EBb\u00C7p\x19\x0E\u00EFazTd\u00BB7p\u00B7\x01\x0B\u00B7E\u00B6Z\u0085\u00F2\x16<\x0E\x7F\x00\u00C0\u00C6O\u00FD\u00F3S?\u00C8\x00\x00\x00\tpHYs\x00\x00\x0E\u00C4\x00\x00\x0E\u00C4\x01\u0095+\x0E\x1B\x00\x00\x07PiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 6.0-c002 79.164460, 2020/05/12-16:04:17        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC 2018 (Windows)\" xmp:CreateDate=\"2020-04-06T12:19:57-04:00\" xmp:ModifyDate=\"2022-07-14T16:08:22-04:00\" xmp:MetadataDate=\"2022-07-14T16:08:22-04:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"Adobe RGB (1998)\" xmpMM:InstanceID=\"xmp.iid:f6a3f50c-39dc-144e-bf86-cb881d274491\" xmpMM:DocumentID=\"adobe:docid:photoshop:ebaf6930-6592-ba44-83da-4280af8bb397\" xmpMM:OriginalDocumentID=\"xmp.did:ccb665d3-790e-e448-831a-87e57ed12c69\"> <photoshop:TextLayers> <rdf:Bag> <rdf:li photoshop:LayerName=\"aplicar\" photoshop:LayerText=\"aplicar\"/> </rdf:Bag> </photoshop:TextLayers> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:ccb665d3-790e-e448-831a-87e57ed12c69\" stEvt:when=\"2020-04-06T12:19:57-04:00\" stEvt:softwareAgent=\"Adobe Photoshop CC 2018 (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:2ef41101-b4b8-b647-b697-edd9ea7d3ee3\" stEvt:when=\"2020-04-06T21:33:19-04:00\" stEvt:softwareAgent=\"Adobe Photoshop CC 2018 (Windows)\" stEvt:changed=\"/\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:f6a3f50c-39dc-144e-bf86-cb881d274491\" stEvt:when=\"2022-07-14T16:08:22-04:00\" stEvt:softwareAgent=\"Adobe Photoshop 21.2 (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>!!\u0087\u00AF\x00\x00\x00\u00B0IDAT\x18\u0095m\u00D01j\x02a\x18\u0084\u00E1g\x7F6\u00A6\u00B1\u00B41g\u00F0\fi\u00BC@\b\u0088'\u0088\u0085`\x13\u00AC\x02\u00C6\u00C6\u00CA#X\u00D8\u00A4\x11\x1B\u00F1\x06\x06\u00C4+\x04r\x01\u00B7\x13l\u00B2\u0085\x01\x0B\u00FF\u00D5U\u009C\u00F2\u009B\u0097\u00F9\u0098I^7o\u00A2\x1E0\u00C5\x1E}\u00FCA\u00EA\u00A2\x17\u00B4P\u00C17\u00E6\x10\u00A2Y\u00C7'\x1E\u0091\u00A0\u008B\u00A7\x02H\u00F1\u008EF)\u00ED\x19\x1F\u00A8\u00A6h\u00A2\u00E7Z\t\u00DAX\x05tb\u00F4\u00ADj\x18\x05\u00FC \u00BF\x03\x1C\u00B0\b\x18bq\x07Xb\x1C\u00F0\u008F\t\u00B6%3\u00C3\x00\u00BB\u00A2\u00E6\n\u00E3\b\u00C3(\u00BE>\u00EF\x003\u00FCb\u008D\u00AF\u00E2X^2\u008B\u008Dr\u00A7\u00B9\u00C1\x11\u00DBo \x7F:\u00D0\u00849\x00\x00\x00\x00IEND\u00AEB`\u0082" ;
      var gemaEve = groupOne.add ("IconButton", undefined, gema, {style: 'toolbutton'});
      
      var Saludo; 
      var a = parseInt((Math.random() * 10) +1 ) ;
       
      if( a == 1){
Saludo = groupOne.add("statictext", undefined, "Hola! ", {multiline: true});
               }
      if (a == 2){
Saludo = groupOne.add("statictext", undefined, "Hola!, ¿ya tienes mis otras versiones? ", {multiline: true});      
     }
      if (a == 3){
Saludo = groupOne.add("statictext", undefined,"Hola, ¿Que tal va tu dia? ", {multiline: true});
}
      if (a == 4){
Saludo = groupOne.add("statictext", undefined, "Saludos, todo listo para trabajar ", {multiline: true});
}
      if (a == 5){
Saludo = groupOne.add("statictext", undefined, "Todo Listo para empezar", {multiline: true});
}
      if (a == 6){
Saludo = groupOne.add("statictext", undefined, "Sistemas funcionando ", {multiline: true});
}
      if (a == 7){
Saludo = groupOne.add("statictext", undefined, "Si tiene alguna duda sobre mí, puedes preguntarle a Egon",{multiline: true});
}
      if (a == 8){
Saludo = groupOne.add("statictext", undefined, "Hola, ¿En que trabajeremos hoy? ", {multiline: true});
}
      if (a == 9){
Saludo = groupOne.add("statictext", undefined, "Hola, Egon te envía saludos " , {multiline: true});
}
      if (a == 10){
Saludo = groupOne.add("statictext", undefined, "Te estuve esperando :D " , {multiline: true});
}

Saludo.justify = "center";

      
//Fin de las lineas para el saludo     
//Definiendo las variables para la lista de opciones.

      var groupTwo = mainWindow.add("group", undefined, "groupTwo");
      groupTwo.orienttion = "row";
      groupTwo.alignment = "middle";
      var dropDown = groupTwo.add("dropdownlist", undefined, expressionsArray);
      dropDown.selection = 0;
    
      
      var dropDown2 = groupTwo.add("dropdownlist", undefined, ["Posición", "Rotación", "Escala", "Opacidad", "Otro" ]);
      dropDown2.selection = 0;


      var groupThree = mainWindow.add ("group", undefined, "groupThree");
      groupThree.orientation = "row";
      var expressionText = groupThree.add ("editText", undefined, expressionObj[expressionsArray[0]], {multiline: true});
      groupThree.alignment = "middle";
      expressionText.size = [161, 30];
    

      var groupFour = mainWindow.add ("group", undefined, "groupFour");
      groupFour.orientation = "row";
      groupFour.alignment = "middle";
      var boton = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00?\x00\x00\x00\x1C\b\x02\x00\x00\x00Y\x05\u00F0\x10\x00\x00\x017iCCPAdobe RGB (1998)\x00\x00(\u0091\u0095\u008F\u00BFJ\u00C3P\x14\u0087\u00BF\x1BE\u00C5\u00A1V\b\u00E2\u00E0p'QPl\u00D5\u00C1\u008CI[\u008A X\u00ABC\u0092\u00ADIC\u0095b\x12n\u00AE\x7F\u00FA\x10\u008En\x1D\\\u00DC}\x02'G\u00C1A\u00F1\t|\x03\u00C5\u00A9\u0083C\u0084\f\x05\u008B\u00DF\u00F4\u009D\u00DF9\x1C\u00CE\x01\u00A3b\u00D7\u009D\u0086Q\u0086\u00F3X\u00ABv\u00D3\u0091\u00AE\u00E7\u00CB\u00D9\x17f\u0098\x02\u0080N\u0098\u00A5v\u00ABu\x00\x10'q\u00C4\x18\u00DF\u00EF\b\u0080\u00D7M\u00BB\u00EE4\u00C6\u00FB\x7F2\x1F\u00A6J\x03#`\u00BB\x1Be!\u0088\n\u00D0\u00BF\u00D2\u00A9\x061\x04\u00CC\u00A0\u009Fj\x10\x0F\u0080\u00A9N\u00DA5\x10O@\u00A9\u0097\u00FB\x1BP\nr\u00FF\x00J\u00CA\u00F5|\x10_\u0080\u00D9s=\x1F\u008C9\u00C0\fr_\x01L\x1D]k\u0080Z\u0092\x0E\u00D4Y\u00EFT\u00CB\u00AAeY\u00D2\u00EE&A$\u008F\x07\u0099\u008E\u00CE3\u00B9\x1F\u0087\u0089J\x13\u00D5\u00D1Q\x17\u00C8\u00EF\x03`1\x1Fl7\x1D\u00B9V\u00B5\u00AC\u00BD\u00F5\x7F\u00FE=\x11\u00D7\u00F3en\u009FG\b@,=\x17YAx\u00A1.\x7FU\x18;\u0093\u00EBb\u00C7p\x19\x0E\u00EFazTd\u00BB7p\u00B7\x01\x0B\u00B7E\u00B6Z\u0085\u00F2\x16<\x0E\x7F\x00\u00C0\u00C6O\u00FD\u00F3S?\u00C8\x00\x00\x00\tpHYs\x00\x00\x0E\u00C4\x00\x00\x0E\u00C4\x01\u0095+\x0E\x1B\x00\x00\x07PiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 6.0-c002 79.164460, 2020/05/12-16:04:17        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC 2018 (Windows)\" xmp:CreateDate=\"2020-04-06T12:19:57-04:00\" xmp:ModifyDate=\"2022-07-14T15:59:25-04:00\" xmp:MetadataDate=\"2022-07-14T15:59:25-04:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"Adobe RGB (1998)\" xmpMM:InstanceID=\"xmp.iid:f7a0b16d-de0a-0c44-ba77-3562dd3acd8d\" xmpMM:DocumentID=\"adobe:docid:photoshop:5ec9357f-48d2-9d4b-83b3-672fc181c8a2\" xmpMM:OriginalDocumentID=\"xmp.did:ccb665d3-790e-e448-831a-87e57ed12c69\"> <photoshop:TextLayers> <rdf:Bag> <rdf:li photoshop:LayerName=\"aplicar\" photoshop:LayerText=\"aplicar\"/> </rdf:Bag> </photoshop:TextLayers> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:ccb665d3-790e-e448-831a-87e57ed12c69\" stEvt:when=\"2020-04-06T12:19:57-04:00\" stEvt:softwareAgent=\"Adobe Photoshop CC 2018 (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:2ef41101-b4b8-b647-b697-edd9ea7d3ee3\" stEvt:when=\"2020-04-06T21:33:19-04:00\" stEvt:softwareAgent=\"Adobe Photoshop CC 2018 (Windows)\" stEvt:changed=\"/\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:f7a0b16d-de0a-0c44-ba77-3562dd3acd8d\" stEvt:when=\"2022-07-14T15:59:25-04:00\" stEvt:softwareAgent=\"Adobe Photoshop 21.2 (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00B2\x7F\u00F3\x06\x00\x00\x04\u00F9IDATX\u0085\u00EDXmLSg\x14>\u00BDm\u00A1\u00F4B\u00A1`\x0B\u00B7\u00A9-\u00A4\u00B46\u0094\u00D0BY\x19\u00D4\u00D6\u00C5\u00959\u00863+d\u00E3#\u00CE\u00CC\u0085\x1232\u00CD\u0088D\u00E3\u00C0l\u0099\u0089\u00D1\u0092lN\u0097LL\u009Cq\u00C1\u0091\u0098\u008D\x19\u00CCb\u00B4\u00DB\u00FC`A\tn\u00B8p\u0089\u00E3C;g(\x03\u00A1\x03\u00FA\x16\u00A4\u00B4\u00EC\u00C7e\u00D7\u00BB[>$\u00FB\u00D1\u0091\u00F8\u00FCh\u00EE{\u00CEy\u009E\u00FB\u009Cs\u00DF\u00F7\u00E6\u00A6\x1C\x00\x10\u0088b\u00E4\u00B9\u00A9b\u00E5:X\x0B\b\x06\u0082\u0093C\u00DE\u0087]\u00EE\u0099\u00C9i\u008E >&c\u00AB!\u00A9\u00DB\x18Gj\"m\u00EC\u00A9\x10\u00E2\x07\u0090\u00E6\u00FE\u0098\u00E1v\u00EF\u00C5nn\u00AAY-\x1B\u00D8\x18\u00D7\u00BB6\u00AC\x03\x00'\u00C4\u008D\x1EM\u00E2\x06\x05!\u00CD8&\u0092\u0089\u00F1\u00FE\u00D4H[Z5b\u00FB\u00D3\u00E2eb\u008C\u00CB\u00E7b\x01~\u00A4\u00CD\u00AC\x1A\u009C\x00\x0F\u00E3s\u00B1H\u00DB\u00F8Ox\u00E6>rx\u00E6>r\u00E0-\u0095\u00C8,'^\u00DA\u0091y\u00BA\u00EE\u00C6_\u00E4\f\x1D\u00DC\u00DE\u0094'\u0095\u008B\x00`\u00E4\u00E1\u00E4\u00C5cw\u00A8\u0094\u00DD\u00A9O\u00D3IY\u0095\x14\u00FD\u00F2\u00D9\u009E\u009E\x16\x0F\x15\u00C9\u00AFI\u00CD/V\u00B3\u00B8\x14\x12t\u0082\u00B7\u009D\x16f1\u00AD@]\u00DF'GZ\u00EB\u00EE\u0084\u009B\\r\u00F6\x15\u00FBM\u00E6\"m\u00F1\u009ELfp\u00E36u\u00B6U\u00A9\u00C9\u0091n\u00A9\u00CC:\u00FA}\u0099\u00C2&\x06\x00\u00B9Nh.\u00D2\u00E2\u00C4\u00BF\x06\u0091f\u008C3\x17i\u00D3\u008Cqt\u00DB{O\u00BCJq\u00ED\x0E\x13\u00CD\u00A5P\u00BC'\u00D3\\\u00A4\u00AD\u00D8o\nW\u00D0\u00E4H59\u00D2\u00ED{\u00AD\r7\u00B6>\u00AD\u00FB\u00CCrB\u00ABW \u00E4\x7F\u00B92;A'\u00A0\u00E3\u00F3\x10\u00F4\u00F9|\x05)\u00A5\x07\u00F7\x1DNJ\x16m\u00A9\u00D2\x02@\b\x02\x00\x10\u0082Y\u00A6\u00C2\x1CL\u00D3\u00BFv\u00A7\u00DE\u00EE0u\u00B4w\x16\u00E6\u0095\x15\u00A4\u0094~\u00D4p\u00B4\u00AF\u00BF\u00AF\u00DF\u00F5\u0080.\u00B6l\u00D3\"\u00E4\u00D7\u00EA\x15\u00F95\u00A9,\u0085\u0096/[\x0BRJ;\u00DA;\r\x1B\u00D3\u0098\r/\u00E7\u00FE\u00C5\x1D\x1A\u0084\u00FC\u00E7\u00CF]\x10\u00E2\x02\u00D6\u00F8\x018YP\u0082\u008D\u00C9\x00 J\x14\\\u0094\u00CE\u0082\u00C5\u00AEF\u00C8\x7Fp\u00D7\u00C9u\u00E4\u00A6,(\u00F9\u00E1\u00D0\u00C8.\u00CB\u00E1hXx,v\u00A7^\u0092,>\x7F\u00EE\x02B\u00FEbG\x16\u008B+\u0089\u0097W\u0096\u00D7\x10\u0084l\u00E4\u00CF\u00D1G\u009EG\u00AC\u00EC\"\u00FB^a\x13\u00E7Z\u00D5\u00ED\u00D7o6U_\u00B5n\u00CE7nV6C\x17\u009D\u00C5c\u0085\u00B5\u00DF\x15n\u00C8!\x10\u00F2\x7Fs\u00F6\n@\u00FC\u008A\u00EEcb\u00F9\u00C8\u0087\u0084d\x06\x0F\u00A2\x00 \x11\u0094\u0089\u00A0d\u00F6vo\u00D0\u00DDT}U&O1[\u00F3\x146\u00F1\x03\u0097\u0097\u00CE\u0096;\u00B6\u0080\x03\x10\u00F2\x7F\u00B0\u00AFq\u0092\u00C4y\u00C0e*/2\u00FB\u0092Z\u0083\x10\u008F\u00C9\u00CE\u00D1\u00B7\r7&\u00A7H\u0095*\u0099\u00DD\u00A9g\x16<\x06\u00EF/?w\u00EF\u00AE:0\u00D02\u00B7\u00A2u\x00\x18\u00ECwK\u0093%\u0096\u009A'\x1F\u0082\u00F4\x1E\u00B0;\u00F5J\x15\u0091\u009C\"m\x1Bn\u00CC\u00CE\u00D1\u00E3\u00B8\u00B0\u00A4\u00D6\u00C0\u00E4\u009E9\u00D5|\u00AC\u00F1s\x1C\x17\u009A\u00F4\x16\u00AAy&\u00D8\u00B3O\u00D0\t\u008CV\u00D5\u00BDA\u00F7`\u00DF\u00EF\x000\x0F!\u00B35\u00CFbW\u00D3G\x1E\u00F9P\u00DD+\u00C7\x01@\x02\x1A\x1C\u0092hbY\u00AD\x19\u00AB\u00E5\u00C1b\u00EF\u0087O?l\u00CE\u00FA6\u00E3\u009D#\u0085*\u00FD\u00AFhb\u00C6T\u0098.OO:R\u00D5\u00D6\u00D3\u00E2\u00A16\u00D5O\u00D7oq\x00\x03\x00\u0095Fi\u00B4\u00AA\x14\u00B6nz\u00FC\u00B3\x13\u0082\u00AF\u00EBnn.$_\u00D8fh\u00A9\u00EEY\u00C1\u00FD\x1B\r\u00B9B<\u00E6\u00E4\u00C7\u00CD\u00AE\u00CFH*\u00F2n\u00D3\u00F0[\u008E\n\u00BBS\u00FF\u008F'N*\u00E4\u0087\x0F\u00D8R\u00B4p<\x02\u00E0c\u00A5\u00A6\\\u0092\u00DDU\x07\u00EA\x0F\u00BDgw\u0098\x00\x00!\u00FF\u00A5\u008B\u0097o\u00B5\u00F4\u00BCVoV\u00AA\u00883\u00A7\u00BE:^\u00DDFU\u00DAjtGN\u00BC_Rk\u00F8\u00C4\u00F5#\x15\u00C1\u0080+\x01Mw\u00E7\u00DD7\x1D\u00BA\u00C2z\u00ED\u0095Cw\u0099\u00CA\u009C\u00E7vZ\u00D6\x7F\u00F1:\u00BD\u009E\u00D1\u00F5\u00F3\u0088q\u00BFK!\x02\u0082\u008Ax\u00A0GbC\u0098g=F\u00CAFu\u00D7\x00@BnbJ\u00F8u\u00BDQ\u00C4\x14\u00BD\u009C\u00F5\u00C4\t\u00C9\u008CQ\u00E8\x13\u00DB\u00BC^\u0097X\x02\x1A\x00@0\u00E6\u0086\u008E\r6I\u00EE\u00F3Y\u0097Z\u00DB\x03d\u00E2z0rtc\x01b`\u00D4\u0085\x13\u00B0\u00D0\u00F9$x\u0084\u00B6\x07\u00E1\n\u0094\x07\u00BE'}\u009E|\u00F2\u00B4\u00FF\u00D8y\u009E\u00ED~\x0Ef\u0083\u00F0\u0098~!Px\fS\\\u0088\u00E6A\u00D4\x1C\u00CC\x02\x00k\u00FFQ\x14zIUR\u00ACp\x1D\x04\u00E3\" \u00A8\u0082\u00E5\u00EF\u00C5R`\u00C6i\u00F7\u00EC\u009D\u00C3\u0083\u00A8\u00F0\u00C3AK\u0084\u00A7\u0096\u00A20Y\u00CC\b3\u00B8\u00FC\u00BD\u0096\u00B9\u00A6\u00B1\u00B6\u00BFs\u009E\u00B9\u008F\x1C\u00B0` \x18\u00E2\x07\"mc\u00D5\u0098\u00E7\u00CF\u0085\x02Alr\u00C8\u008B\u00D4\u00EEH\u009BY5|\u00EA\u00FB\x13C^\u00AE\x7F\u00DC\x1F\u00BB)\u00C4\r\n\u00A2G\u0093V&\u00FD\x0F0\u00CF\u009F\u00F3i\x07\u00C7\u00B2\u00BB\x06\u00AF\u00FD\u00C6\x01\x00A|\u008C\u00DC\u00B8\u00D6\u00FE\t\u00BC\u00ED\u009E\u0099\u0098\u00FE\x1B\u00D5\x1D\u00E4\u00D4\u00B7\u00AAm\x05\x00\x00\x00\x00IEND\u00AEB`\u0082" ;
      var applyButton = groupFour.add ("IconButton", undefined, boton, {style: 'toolbutton'});
     

        mainWindow.onResizing = mainWindow.onResize = function() {

            this.layout.resize();

        };

        if (mainWindow instanceof Window) {

            mainWindow.center();

            mainWindow.show();
            
            

        } else {

            mainWindow.layout.layout(true);

            mainWindow.layout.resize();
            


        }
    
    
// Esta funcion detecta que propiedad esta seleccionada

dropDown.onChange = function() {
    expressionText.text = expressionObj[expressionsArray[dropDown.selection.index]];
    }

function getPropertyName() {
    switch(dropDown2.selection.index) {
        case 0:
            return "Position";
        break;
        case 1:
            return "Rotation";
        break;
        case 2:
            return "Scale";
        break;
        case 3:
            return "Opacity";
        break;
        case 4:
             return "Otro";
        break;
     }
 }




applyButton.onClick = function() {
       
    // Separe todo en dos casos, uno para cuando se seleccione Posicion, Rotacion, Escala y Opacidad, y otro caso en el cual se seleccione Otro
    
    // Primer Caso. Primero definir mensajes de posibles errores.
    
        if((dropDown2.selection.index ==0) || (dropDown2.selection.index ==1)||(dropDown2.selection.index ==2)||(dropDown2.selection.index ==3)) {
            {
                
            if(app.project.activeItem == null || !(app.project.activeItem instanceof CompItem)) {
        alert("Selecciona una composición por favor");
            return false;
        }
          if(app.project.activeItem.selectedLayers.length != 1) {
            alert("Debes seleccionar una capa, aun no puedo leer las mentes...");
            return false;
            
            
            return false;
            }
        
        
        else {
            app.beginUndoGroup("Expression Injection");
                injectExpression(app.project.activeItem.selectedLayers);
                app.endUndoGroup();
            }
    }


function injectExpression(layerArray) {
    
   
    for(var i = 0; i < layerArray.length; i++) {
        layerArray[i].property(getPropertyName()).expression = expressionText.text;
        }
    alert("Expresion aplicada con exito, sigamos trabajando!");
    }

            return false;
            }
        
   //Segundo Caso. En este caso se agrega un mensaje de error ya que en la opcion "otro" se requiere tener almenos una propiedad seleccionada.
   
        else {
           if(app.project.activeItem == null || !(app.project.activeItem instanceof CompItem)) {
        alert("Selecciona una composición por favor");
            return false;
        }
          if(app.project.activeItem.selectedLayers.length != 1) {
            alert("Debes seleccionar una capa, aun no puedo leer las mentes...");
            return false;
        }
         if(app.project.activeItem.selectedLayers[0].selectedProperties.length < 1) {
            alert("Tienes que seleccionar una propiedad para aplicar la expresion (Recuerda que pueden ser mas de una propiedad a la vez) ");
            return false;
        }
    
        for(var q = 0; q < app.project.activeItem.selectedLayers[0].selectedProperties.length; q++) {
        app.project.activeItem.selectedLayers[0].selectedProperties[q].expression = expressionText.text;
        }
    alert("Expresion aplicada con exito, sigamos trabajando", " ");
            }
    }


      return mainWindow;
    }

})(this);
