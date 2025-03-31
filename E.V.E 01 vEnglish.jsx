//Hi this is the English version of E.V.E 01. This version is translated from the Spanish version, so I hope you forgive me for any translation errors.
//I also translated the comments in case you are curious how this script works.

// Expression Injector
var expressionsArray = [];
var expressionObj = {
        "Wiggle": "wiggle(0,0)",
        "LoopOut": "loopOut()",
        "Time": "time*",
        "Other": "",
    };

for(var k in expressionObj) {
    expressionsArray.push(k);
    }

// Main Window

(function(thisObj) {

    buildUI(thisObj);

    function buildUI(thisObj) {



        var mainWindow = (thisObj instanceof Panel) ? thisObj : new Window("palette", "E.V.E 01", undefined, {

            resizeable: true

        });
      
//Greeting lines. The greeting is randomly defined by the math.random function.

      var groupOne = mainWindow.add("group", undefined, "groupOne");
      groupOne.orientation = "row";
      var gema = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\b\x00\x00\x00\f\b\x06\x00\x00\x00_\u009E\u00FC\u009D\x00\x00\x017iCCPAdobe RGB (1998)\x00\x00(\u0091\u0095\u008F\u00BFJ\u00C3P\x14\u0087\u00BF\x1BE\u00C5\u00A1V\b\u00E2\u00E0p'QPl\u00D5\u00C1\u008CI[\u008A X\u00ABC\u0092\u00ADIC\u0095b\x12n\u00AE\x7F\u00FA\x10\u008En\x1D\\\u00DC}\x02'G\u00C1A\u00F1\t|\x03\u00C5\u00A9\u0083C\u0084\f\x05\u008B\u00DF\u00F4\u009D\u00DF9\x1C\u00CE\x01\u00A3b\u00D7\u009D\u0086Q\u0086\u00F3X\u00ABv\u00D3\u0091\u00AE\u00E7\u00CB\u00D9\x17f\u0098\x02\u0080N\u0098\u00A5v\u00ABu\x00\x10'q\u00C4\x18\u00DF\u00EF\b\u0080\u00D7M\u00BB\u00EE4\u00C6\u00FB\x7F2\x1F\u00A6J\x03#`\u00BB\x1Be!\u0088\n\u00D0\u00BF\u00D2\u00A9\x061\x04\u00CC\u00A0\u009Fj\x10\x0F\u0080\u00A9N\u00DA5\x10O@\u00A9\u0097\u00FB\x1BP\nr\u00FF\x00J\u00CA\u00F5|\x10_\u0080\u00D9s=\x1F\u008C9\u00C0\fr_\x01L\x1D]k\u0080Z\u0092\x0E\u00D4Y\u00EFT\u00CB\u00AAeY\u00D2\u00EE&A$\u008F\x07\u0099\u008E\u00CE3\u00B9\x1F\u0087\u0089J\x13\u00D5\u00D1Q\x17\u00C8\u00EF\x03`1\x1Fl7\x1D\u00B9V\u00B5\u00AC\u00BD\u00F5\x7F\u00FE=\x11\u00D7\u00F3en\u009FG\b@,=\x17YAx\u00A1.\x7FU\x18;\u0093\u00EBb\u00C7p\x19\x0E\u00EFazTd\u00BB7p\u00B7\x01\x0B\u00B7E\u00B6Z\u0085\u00F2\x16<\x0E\x7F\x00\u00C0\u00C6O\u00FD\u00F3S?\u00C8\x00\x00\x00\tpHYs\x00\x00\x0E\u00C4\x00\x00\x0E\u00C4\x01\u0095+\x0E\x1B\x00\x00\x07PiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 6.0-c002 79.164460, 2020/05/12-16:04:17        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC 2018 (Windows)\" xmp:CreateDate=\"2020-04-06T12:19:57-04:00\" xmp:ModifyDate=\"2022-07-14T16:08:22-04:00\" xmp:MetadataDate=\"2022-07-14T16:08:22-04:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"Adobe RGB (1998)\" xmpMM:InstanceID=\"xmp.iid:f6a3f50c-39dc-144e-bf86-cb881d274491\" xmpMM:DocumentID=\"adobe:docid:photoshop:ebaf6930-6592-ba44-83da-4280af8bb397\" xmpMM:OriginalDocumentID=\"xmp.did:ccb665d3-790e-e448-831a-87e57ed12c69\"> <photoshop:TextLayers> <rdf:Bag> <rdf:li photoshop:LayerName=\"aplicar\" photoshop:LayerText=\"aplicar\"/> </rdf:Bag> </photoshop:TextLayers> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:ccb665d3-790e-e448-831a-87e57ed12c69\" stEvt:when=\"2020-04-06T12:19:57-04:00\" stEvt:softwareAgent=\"Adobe Photoshop CC 2018 (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:2ef41101-b4b8-b647-b697-edd9ea7d3ee3\" stEvt:when=\"2020-04-06T21:33:19-04:00\" stEvt:softwareAgent=\"Adobe Photoshop CC 2018 (Windows)\" stEvt:changed=\"/\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:f6a3f50c-39dc-144e-bf86-cb881d274491\" stEvt:when=\"2022-07-14T16:08:22-04:00\" stEvt:softwareAgent=\"Adobe Photoshop 21.2 (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>!!\u0087\u00AF\x00\x00\x00\u00B0IDAT\x18\u0095m\u00D01j\x02a\x18\u0084\u00E1g\x7F6\u00A6\u00B1\u00B41g\u00F0\fi\u00BC@\b\u0088'\u0088\u0085`\x13\u00AC\x02\u00C6\u00C6\u00CA#X\u00D8\u00A4\x11\x1B\u00F1\x06\x06\u00C4+\x04r\x01\u00B7\x13l\u00B2\u0085\x01\x0B\u00FF\u00D5U\u009C\u00F2\u009B\u0097\u00F9\u0098I^7o\u00A2\x1E0\u00C5\x1E}\u00FCA\u00EA\u00A2\x17\u00B4P\u00C17\u00E6\x10\u00A2Y\u00C7'\x1E\u0091\u00A0\u008B\u00A7\x02H\u00F1\u008EF)\u00ED\x19\x1F\u00A8\u00A6h\u00A2\u00E7Z\t\u00DAX\x05tb\u00F4\u00ADj\x18\x05\u00FC \u00BF\x03\x1C\u00B0\b\x18bq\x07Xb\x1C\u00F0\u008F\t\u00B6%3\u00C3\x00\u00BB\u00A2\u00E6\n\u00E3\b\u00C3(\u00BE>\u00EF\x003\u00FCb\u008D\u00AF\u00E2X^2\u008B\u008Dr\u00A7\u00B9\u00C1\x11\u00DBo \x7F:\u00D0\u00849\x00\x00\x00\x00IEND\u00AEB`\u0082" ;
      var gemaEve = groupOne.add ("IconButton", undefined, gema, {style: 'toolbutton'});
      
      var Saludo; 
      var a = parseInt((Math.random() * 10) +1 ) ;
       
      if( a == 1){
Saludo = groupOne.add("statictext", undefined, "Hi! ", {multiline: true});
               }
      if (a == 2){
Saludo = groupOne.add("statictext", undefined, "Hi!, Do you already have my other versions? ", {multiline: true});      
     }
      if (a == 3){
Saludo = groupOne.add("statictext", undefined,"Hi, how's your going?", {multiline: true});
}
      if (a == 4){
Saludo = groupOne.add("statictext", undefined, "Greetings, I'm ready to work", {multiline: true});
}
      if (a == 5){
Saludo = groupOne.add("statictext", undefined, "All set to start", {multiline: true});
}
      if (a == 6){
Saludo = groupOne.add("statictext", undefined, "Systems running ", {multiline: true});
}
      if (a == 7){
Saludo = groupOne.add("statictext", undefined, "If you have any questions about me, you can ask Egon",{multiline: true});
}
      if (a == 8){
Saludo = groupOne.add("statictext", undefined, "Hello, what will we work on today?", {multiline: true});
}
      if (a == 9){
Saludo = groupOne.add("statictext", undefined, "Hello, Egon sends his regards" , {multiline: true});
}
      if (a == 10){
Saludo = groupOne.add("statictext", undefined, "I've been waiting for you" , {multiline: true});
}

Saludo.justify = "center";

      
//End of lines for greeting   
//Defining the variables for the option list.

      var groupTwo = mainWindow.add("group", undefined, "groupTwo");
      groupTwo.orienttion = "row";
      groupTwo.alignment = "middle";
      var dropDown = groupTwo.add("dropdownlist", undefined, expressionsArray);
      dropDown.selection = 0;
    
      
      var dropDown2 = groupTwo.add("dropdownlist", undefined, ["Position", "Rotation", "Scale", "Opacity", "Other" ]);
      dropDown2.selection = 0;


      var groupThree = mainWindow.add ("group", undefined, "groupThree");
      groupThree.orientation = "row";
      var expressionText = groupThree.add ("editText", undefined, expressionObj[expressionsArray[0]], {multiline: true});
      groupThree.alignment = "middle";
      expressionText.size = [161, 30];
    

      var groupFour = mainWindow.add ("group", undefined, "groupFour");
      groupFour.orientation = "row";
      groupFour.alignment = "middle";
      var boton = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00?\x00\x00\x00\x1C\b\x02\x00\x00\x00Y\x05\u00F0\x10\x00\x00\x017iCCPAdobe RGB (1998)\x00\x00(\u0091\u0095\u008F\u00BFJ\u00C3P\x14\u0087\u00BF\x1BE\u00C5\u00A1V\b\u00E2\u00E0p'QPl\u00D5\u00C1\u008CI[\u008A X\u00ABC\u0092\u00ADIC\u0095b\x12n\u00AE\x7F\u00FA\x10\u008En\x1D\\\u00DC}\x02'G\u00C1A\u00F1\t|\x03\u00C5\u00A9\u0083C\u0084\f\x05\u008B\u00DF\u00F4\u009D\u00DF9\x1C\u00CE\x01\u00A3b\u00D7\u009D\u0086Q\u0086\u00F3X\u00ABv\u00D3\u0091\u00AE\u00E7\u00CB\u00D9\x17f\u0098\x02\u0080N\u0098\u00A5v\u00ABu\x00\x10'q\u00C4\x18\u00DF\u00EF\b\u0080\u00D7M\u00BB\u00EE4\u00C6\u00FB\x7F2\x1F\u00A6J\x03#`\u00BB\x1Be!\u0088\n\u00D0\u00BF\u00D2\u00A9\x061\x04\u00CC\u00A0\u009Fj\x10\x0F\u0080\u00A9N\u00DA5\x10O@\u00A9\u0097\u00FB\x1BP\nr\u00FF\x00J\u00CA\u00F5|\x10_\u0080\u00D9s=\x1F\u008C9\u00C0\fr_\x01L\x1D]k\u0080Z\u0092\x0E\u00D4Y\u00EFT\u00CB\u00AAeY\u00D2\u00EE&A$\u008F\x07\u0099\u008E\u00CE3\u00B9\x1F\u0087\u0089J\x13\u00D5\u00D1Q\x17\u00C8\u00EF\x03`1\x1Fl7\x1D\u00B9V\u00B5\u00AC\u00BD\u00F5\x7F\u00FE=\x11\u00D7\u00F3en\u009FG\b@,=\x17YAx\u00A1.\x7FU\x18;\u0093\u00EBb\u00C7p\x19\x0E\u00EFazTd\u00BB7p\u00B7\x01\x0B\u00B7E\u00B6Z\u0085\u00F2\x16<\x0E\x7F\x00\u00C0\u00C6O\u00FD\u00F3S?\u00C8\x00\x00\x00\tpHYs\x00\x00\x0E\u00C4\x00\x00\x0E\u00C4\x01\u0095+\x0E\x1B\x00\x00\x07LiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 6.0-c002 79.164460, 2020/05/12-16:04:17        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC 2018 (Windows)\" xmp:CreateDate=\"2020-04-06T12:19:57-04:00\" xmp:ModifyDate=\"2022-07-14T15:59:06-04:00\" xmp:MetadataDate=\"2022-07-14T15:59:06-04:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"Adobe RGB (1998)\" xmpMM:InstanceID=\"xmp.iid:e47575e3-4e19-f443-9c9c-b829425176fc\" xmpMM:DocumentID=\"adobe:docid:photoshop:9534e5d7-7c71-894e-8d5e-0ceb860ec77a\" xmpMM:OriginalDocumentID=\"xmp.did:ccb665d3-790e-e448-831a-87e57ed12c69\"> <photoshop:TextLayers> <rdf:Bag> <rdf:li photoshop:LayerName=\"apply\" photoshop:LayerText=\"apply\"/> </rdf:Bag> </photoshop:TextLayers> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:ccb665d3-790e-e448-831a-87e57ed12c69\" stEvt:when=\"2020-04-06T12:19:57-04:00\" stEvt:softwareAgent=\"Adobe Photoshop CC 2018 (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:2ef41101-b4b8-b647-b697-edd9ea7d3ee3\" stEvt:when=\"2020-04-06T21:33:19-04:00\" stEvt:softwareAgent=\"Adobe Photoshop CC 2018 (Windows)\" stEvt:changed=\"/\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:e47575e3-4e19-f443-9c9c-b829425176fc\" stEvt:when=\"2022-07-14T15:59:06-04:00\" stEvt:softwareAgent=\"Adobe Photoshop 21.2 (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00EB\u009D\u00875\x00\x00\x03\u00FEIDATX\u0085\u00ED\u0098\x7Fh\x1Be\x1C\u00C6\u009F\u00E4\u00F2\u00E3\u00924ic\u009At\ti\u0092-&\u0084\u00A64\u00CD\u00DA\u00AD\u00D4\u00AC)h\u00D6Z7\u0084N\u00D6_\u0094\u00B1\u00C9\x1C\u00C2P1\u0090)B\x05a\u00A2\u0098\u00B99EY\x0BN\x107u\u0085\u00FD\u00D0\u00B1\u0081\u00CBJ\u00D7\u00A9S\u00E9f\u008A&l\u00EB\u00D2\u00C6u\u00B4e\u00A5\u008DmrY\u00DB\u00E4\x12\u00FF8\u008D\u00A1\x0B4q\u008E\u00AC\u00D0\u00E7\u00AF\u00BB\u00E7\u00FD>\u00DF\u00FB\u00DC\u00DD{//\u00C7\x02@J\x04\u00EAj\u009DT[\u008C\u0095 :F\u00CF\u008D\u0087\u00EE\f\x06\u00E7\u00E7\u00EE\u00B1\u00C8BA\u00D9\u00D6J\u0099\u00B7J\u00EC3\u00E6\x1B,+%\u00B81\u00CA8:]y\u00D5\x7F\u00D6K\u00E8l\x06\u00D5\u00ADMb\u00FF\u00CA@\x07\u00C0J\x10\u00FC)\x19A\u0093\t\u00E3\f[\u00A2\u0092\u008A\u0086u\u00F9F\u00CAY\x05\u00C3k\x0BUR6\u00C1%\u00D81n\u00BEar\x16+\u00C6as\tv\u00BE1\x1EH\u00AB\u00F4\u00F9\u00D3*}\u00FE\u00C4\u00C95P\u00DE\u00A6l\u00D8Q~\u00D4u\u00F9O\u00DF|\u00CA\u00EC\u00EC\u00A9Q\u00A8%\x00\u00EE\u00DE\u0099;{x\u0088\x19jv[\u00D6\u009A\x15\u008C9p\u00E2\u00E6mO\b@\u0091\u0099|\u00DE]7\u00EA\u00BB{\u00CA5\u00C4\x04E\x12~w\u00DB\x00\u00D3\u00A7v\u00AF\u00AEv\u008B\u00E1\u00B7\x1F\u00C7.\u00EC\u00BF\u009E\rL\u00CE\u00CF\u00BE\u00FD\u00F5\u008D\u00B6&\u00D3\u0096W\u00CA\u00D3\u00CDM\u00CF\x1A\u00ACv\u00ADq\u00BD\u00A2\u00B1\u00A3\u00E2\u00BD\u008B\u00AD\x1A\u0087\x14\u0080\u00DA,\u00B45\u0099\x18\u00F3\u00ED\u00D3\u00DBk\u00F7\u00EA\x00\u0088\u0094\x1C[\u0093Im\x162\u00C1\u00A9\u00D9\u00B1\u0086VKgO\rsc;\u00BB\u00ECV\u00BBv\u00F0'o\u00960\u00B9\u00D1\u0097\u00B7)M\x16\rEE\u009F\u00EE\u00B0\x16\u0099\u00C9\u0094\u009F\x04\x1D\u0089D\u009EX\u00F3\u00DC\u009B\u00AF\u00BD#+\u00914\u00EE6\x01H \x06\u00E0\u00C5\u00CE}\u009BkZ\u0092\u00A0[^\u00DD\b \u0081\u00C5\u00D4\x10\u0080/\\\u00FDW\u00BE\u00FF\u00A5\u00B1\u00A3B\u00E3\u0090\u00B6tU\x17\u0097\x14\u00BE\u00FF\u00EE'\u0093\u009E\u00D8C\u00A1\x7Fj\u0087\u0091\u00A2\u00A2\u00BD\u00C7\u00CF\bE\u00E4\u0092\u00C7\x0F\u00B0*\u00B0\u008D=\u00AD\x02\u00C0\u0093\u00D0)W\u0089\r\u00C5\u00BEz*B\u0091\x05\u00C4\u00FD\r\u00E50~\u00F8\u00D6\u0097I$\u009CG\x1A\u00EA\u00B6\u009A\u00BE;\u00DF\u00D7\u00B7\x7F\u0082\x0F\u00F1\u00FFO\u00AFqH\u00AB\u00ED\u0086\x1F\x06~\u00EE\u00D9\u00D3?\x12\bV=\u00A9M\x1F\x15\x15\b\u009D\u00E76\u00EF\u00FB\u00A0\u008D\u00A2\u00A2'?\u00BF\u0090\u00F2[\u009D6\u00B7\u00B7]Q\"?\u00FF\u00CD\u00C5\u008Cm\u00C3\x1Ey\u00EF\u00F13\u00A5zE$\x129\u00E4\u00EA}\f\u00DA\u008Ce\x0FJ\u00BF\u00CDY)\x14\t\u00AC\u00EB-\u00DFN\x1E(Y\u00A3\u00D0\u00EAU\u00CDnKz\u00C1\x02B\u00BF^\u00F3\u00BE\u00BC\u00FB\u008D[_\u00C5Sf\f\u00E1\u00DB\u00E3#\u0087\x0F\x1C\u00E9\u00DE\u00D3\u0097\u00B1-\x1F\u00E2\u00FE\x137\x00\f]\u00F3\u00F3|\u008Fg\u00CF\u0083\u00EC\u00D7\u009C\"3Ye\u00D7\u008F\x04\u0082\u0081\u009B\x7F\x00H\"a\u00B3\u00D7\u00D45\x1B\u0098\u00A5\x03\x00\x15\u00A1\\\u00CF|\x04@\x0E\u00A3\b\u00B2T\u00F0\u00D3\u0083\u00A7\u00AF{\u00C6D\u0090)\u00F1\u00EFL[g,u\u009E\u00932\u00C7G]\u0097\x05P\x02 \u00C0\u00E3\u0080\u00F7P\u00E8[\u00BA\u00AA\u0085\"A\u00F7\u00A1c\u009E\u008F}\u008C\u00F3R\u00CF\u00E4\u00CE\x17\u00DA\u009B\u00DD\u0096\x7Fn\u0080\u00A5C\u00ED\u00FDA)\u00D6\u00E9\u00A0^b\u00EA\u00F4j\u009D\u00FE\u00EF\u00E3\u00AF\x0F^a>\u00E5\u00FF \u00D6\u0086]u\u00A5\u009Fm_\u00B6n\u00DE<\u00CCQ\u00CED=\x1A\t\u0094\u008C3\u0081\u00DF\u00E5\x0E\u008A=Q\u00CA\u00F6\u00A9\u00A6\u00CC\u0097\x00\u00C8}\u00F5\u00E9\u0091\u00A8\u00D9\u00CFS\u0086iOY\u00FAW\u00B8\u00800\u00E1\u00F0\u00A7\u0097\u00D1\u009E2\x00\u0084\u00C3\u00BF8!\x16\u00FA\u00CA\u00B2G\x1F\u00DB\u00D5\u009B-}\x1C\u008B4\x16\u0096\u00AC\x06\x0B\b\x13\u00E0s\u00C0\u008Bc\x11\u00C0\u0092\u00F7\u009E1\u00C2\u00A4\u00D2O\u0099\u0082T\u00AB\u009C\u00E8\u00B3\u009D9\u009CL\u00932E\u0096\u00F1\u00AA\x19#\u00E9\u00A9e\u00CDe\u00B5\u00B2\u00F79\u00AB\u00F4\u00F9\x13\u009B\u008E\u00D1\tn\u00B6\u00FB\u008AGGIn<\x11\u00A3\u00D9s\u00E3!\u00CA\x10\u00CC7L\u00CE\u008A\x18Fg\u00C7CDt&ZP\u009F h\u0092?%[>\u00F4\b(\u00C9\u008DGL\u0081i\u00EB`\u00E0\u00D2\r\x16\x00\u00B2P\u00A0\u00AEZi\x7F\x02\u00AF\x06\u00E7g\u00EF\u00FD\x05\u00BD\r_\x14}\u00F8\u00A8,\x00\x00\x00\x00IEND\u00AEB`\u0082" ;
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
    
    
// This function detects which property is selected

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
       
    // Separate everything into two cases, one for when Position, Rotation, Scale and Opacity are selected, and another case in which Other is selected
    
    // First case. First define possible error messages.
    
        if((dropDown2.selection.index ==0) || (dropDown2.selection.index ==1)||(dropDown2.selection.index ==2)||(dropDown2.selection.index ==3)) {
            {
                
            if(app.project.activeItem == null || !(app.project.activeItem instanceof CompItem)) {
        alert("Please select a composition");
            return false;
        }
          if(app.project.activeItem.selectedLayers.length != 1) {
            alert("You must select a layer, I still can't read minds...");
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
    alert("Expression applied successfully, let's keep working!");
    }

            return false;
            }
        
   //Second case. In this case an error message is added since in the "other" option it is required to have at least one property selected.
   
        else {
           if(app.project.activeItem == null || !(app.project.activeItem instanceof CompItem)) {
        alert("Please select a composition");
            return false;
        }
          if(app.project.activeItem.selectedLayers.length != 1) {
            alert("You must select a layer, I still can't read minds...");
            return false;
        }
         if(app.project.activeItem.selectedLayers[0].selectedProperties.length < 1) {
            alert("You have to select a property to apply the expression (Remember that there can be more than one property at the same time)");
            return false;
        }
    
        for(var q = 0; q < app.project.activeItem.selectedLayers[0].selectedProperties.length; q++) {
        app.project.activeItem.selectedLayers[0].selectedProperties[q].expression = expressionText.text;
        }
    alert("Expression applied successfully, let's keep working!", " ");
            }
    }


      return mainWindow;
    }

})(this);
