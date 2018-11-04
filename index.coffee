$(document).ready ->
#Sprite Objects
  sprites =
    1:
      name: "Shroomie"
      location: "sprites/hash1.png"
      height: "416"
      width: "236"
      placeSprite: ()-> 
        elem = document.createElement("img")
        elem.setAttribute("src", sprites[1].location)
        elem.setAttribute("height", sprites[1].height)
        elem.setAttribute("width", sprites[1].width)
        elem.style.display = "inline-block"
        elem.style.marginTop = "42px"
        document.getElementById("viewport").appendChild(elem)
    2:
      name: "Shroomie-Nervous"
      location: "sprites/hash2.png"
      height: "416"
      width: "236"
      placeSprite: ()-> 
        elem = document.createElement("img")
        elem.setAttribute("src", sprites[2].location)
        elem.setAttribute("height", sprites[2].height)
        elem.setAttribute("width", sprites[2].width)
        elem.style.display = "inline-block"
        elem.style.marginTop = "42px"
        document.getElementById("viewport").appendChild(elem)
    3:
      name: "Shroomie-Flustered"
      location: "sprites/hash3.png"
      height: "416"
      width: "236"
      placeSprite: ()-> 
        elem = document.createElement("img")
        elem.setAttribute("src", sprites[3].location)
        elem.setAttribute("height", sprites[3].height)
        elem.setAttribute("width", sprites[3].width)
        elem.style.display = "inline-block"
        elem.style.marginTop = "42px"
        document.getElementById("viewport").appendChild(elem)
    4:
      name: "Shroomie-Flustered-Eyes-Closed"
      location: "sprites/hash4.png"
      height: "416"
      width: "236"
      placeSprite: ()-> 
        elem = document.createElement("img")
        elem.setAttribute("src", sprites[4].location)
        elem.setAttribute("height", sprites[4].height)
        elem.setAttribute("width", sprites[4].width)
        elem.style.display = "inline-block"
        elem.style.marginTop = "42px"
        document.getElementById("viewport").appendChild(elem)
    5:
      name: "Shroomie-shocked"
      location: "sprites/hash5.png"
      height: "416"
      width: "236"
      placeSprite: ()-> 
        elem = document.createElement("img")
        elem.setAttribute("src", sprites[5].location)
        elem.setAttribute("height", sprites[5].height)
        elem.setAttribute("width", sprites[5].width)
        elem.style.display = "inline-block"
        elem.style.marginTop = "42px"
        document.getElementById("viewport").appendChild(elem)
    6:
      name: "Shroomie-Flirty"
      location: "sprites/hash6.png"
      height: "368"
      width: "291"
      placeSprite: ()-> 
        elem = document.createElement("img")
        elem.setAttribute("src", sprites[6].location)
        elem.setAttribute("height", sprites[6].height)
        elem.setAttribute("width", sprites[6].width)
        elem.style.display = "inline-block"
        elem.style.marginTop = "60px"
        document.getElementById("viewport").appendChild(elem)
    7:
      name: "Shroomie-thinking"
      location: "sprites/hash7.png"
      height: "416"
      width: "236"
      placeSprite: ()-> 
        elem = document.createElement("img")
        elem.setAttribute("src", sprites[7].location)
        elem.setAttribute("height", sprites[7].height)
        elem.setAttribute("width", sprites[7].width)
        elem.style.display = "inline-block"
        elem.style.marginTop = "42px"
        document.getElementById("viewport").appendChild(elem)
    8:
      name: "Babylon"
      location: "sprites/hash8.png"
      height: "446"
      width: "343"
      placeSprite: ()-> 
        elem = document.createElement("img")
        elem.setAttribute("src", sprites[8].location)
        elem.setAttribute("height", sprites[8].height)
        elem.setAttribute("width", sprites[8].width)
        elem.style.display = "inline-block"
        elem.style.marginTop = "12px"
        document.getElementById("viewport").appendChild(elem)
    9:
      name: "Cora"
      location: "sprites/hash9.png"
      height: "482"
      width: "377"
      placeSprite: ()-> 
        elem = document.createElement("img")
        elem.setAttribute("src", sprites[9].location)
        elem.setAttribute("height", sprites[9].height)
        elem.setAttribute("width", sprites[9].width)
        elem.style.display = "inline-block"
        elem.style.marginTop = "12px"
        document.getElementById("viewport").appendChild(elem)        
  sprites2 =
    1:
      name: "Glow Ball"
      location: "sprites/plus1.png"
      height: "322"
      width: "311"
      placeSprite: ()-> 
        elem = document.createElement("img")
        elem.setAttribute("src", sprites2[1].location)
        elem.setAttribute("height", sprites2[1].height)
        elem.setAttribute("width", sprites2[1].width)
        elem.style.display = "inline-block"
        elem.style.marginTop = "42px"
        document.getElementById("viewport").appendChild(elem)
    2:
      name: "Corpse Shroomie"
      location: "sprites/plus2.png"
      height: "534"
      width: "373"
      placeSprite: ()-> 
        elem = document.createElement("img")
        elem.setAttribute("src", sprites2[2].location)
        elem.setAttribute("height", sprites2[2].height)
        elem.setAttribute("width", sprites2[2].width)
        elem.style.display = "inline-block"
        elem.style.marginTop = "19px"
        document.getElementById("viewport").appendChild(elem)    
#Background Objects
  backgrounds =
    1:
      name: "Cora - Atk"
      location: "url(sprites/at1.jpg)"
      placeBG: ()->
        view = document.getElementById("viewport")
        view.style.backgroundImage = backgrounds[1].location
        view.style.backgroundPosition = "center"
        view.style.backgroundSize = "cover"
    2:
      name: "Forest Gate"
      location: "url(sprites/at2.jpg)"
      placeBG: ()->
        view = document.getElementById("viewport")
        view.style.backgroundImage = backgrounds[2].location
        view.style.backgroundPosition = "center"
        view.style.backgroundSize = "cover"
    3:
      name: "Heart"
      location: "url(sprites/at3.jpg)"
      placeBG: ()->
        view = document.getElementById("viewport")
        view.style.backgroundImage = backgrounds[3].location
        view.style.backgroundPosition = "center"
        view.style.backgroundSize = "cover"	
    4:
      name: "Knife"
      location: "url(sprites/at4.jpg)"
      placeBG: ()->
        view = document.getElementById("viewport")
        view.style.backgroundImage = backgrounds[4].location
        view.style.backgroundPosition = "center"
        view.style.backgroundSize = "cover" 
    5:
      name: "Forest Clearing"
      location: "url(sprites/at5.jpg)"
      placeBG: ()->
        view = document.getElementById("viewport")
        view.style.backgroundImage = backgrounds[5].location
        view.style.backgroundPosition = "center"
        view.style.backgroundSize = "cover"
    6:
      name: "Forest Path"
      location: "url(sprites/at6.jpg)"
      placeBG: ()->
        view = document.getElementById("viewport")
        view.style.backgroundImage = backgrounds[6].location
        view.style.backgroundPosition = "center"
        view.style.backgroundSize = "cover"
    7:
      name: "Sky Rain"
      location: "url(sprites/at7.jpg)"
      placeBG: ()->
        view = document.getElementById("viewport")
        view.style.backgroundImage = backgrounds[7].location
        view.style.backgroundPosition = "center"
        view.style.backgroundSize = "cover"
    8:
      name: "Temple Room"
      location: "url(sprites/at8.jpg)"
      placeBG: ()->
        view = document.getElementById("viewport")
        view.style.backgroundImage = backgrounds[8].location
        view.style.backgroundPosition = "center"
        view.style.backgroundSize = "cover"         
 
#counters and globals
  loopcounter = 0
  sentenceCounter = 0
  branchEnd = false
  createdSprite = false
  bad = false
  endClicks = 0
  textPool = ""
  ###
  #Abandoned back button counters
  traceCounter = 0
  sentenceTraceCounter = 0
  ###
       
#classes section
  clearHTML = (elementID)->
    document.getElementById(elementID).innerHTML = ''
  
  branch = (branchid)->
    document.getElementById('name').innerHTML = branches[branchid].name
    clearHTML('options')
    clearHTML('text')
    clearHTML('viewport')
    counterReset() 
    document.onclick = ->
      clearHTML('directions')
      if loopcounter < branches[branchid].text.length
        clearHTML('text')
        clearTextPool()
      textParser(branchid)
      if branchEnd == true
        branchEnd = false
        for targetBranch,buttonText of branches[branchid].options
          createOption(targetBranch, buttonText)
  
  createOption = (branchid, text)->
    button = document.createElement('button')
    button.innerHTML = text
    ###
    backbutton abandoned code
    document.getElementById('back').onclick = ->
      backButton(branchid)
    ###
    button.onclick = ->
      morality(branchid)
      switch branchid 
        when "branch4"
          if bad == false
            if endClicks == 2
              branch(branchid)
            else
              endClicks += 1
              branch('branchE')              
          else 
            branch('branchB')          
        when "branch0"
          endClicks = 0
          branch(branchid)
        else branch(branchid) 
    document.getElementById('options').appendChild(button)
 
  textParser = (id)->
    stringID = branches[id].text
    for i in [loopcounter...stringID.length]
      #create a text checker here in conditionals for sprite creation
        #backTracer() Abandoned function
        if stringID[i] == "#"
          if sentenceCounter == 1
            sentenceCounter = 0
            loopcounter = i-1
            break
          else   
            spriteNum = i+1
            numID = parseInt(stringID[spriteNum])
            createSprite(numID)
            loopcounter = i+2
            createdSprite = true
        else if stringID[i] == "+"
          if sentenceCounter == 1
            sentenceCounter = 0
            loopcounter = i-1
            break
          else   
            spriteNum = i+1
            numID = parseInt(stringID[spriteNum])
            createSprite2(numID)
            loopcounter = i+2
            createdSprite = true    
        else if createdSprite == true
          createdSprite = false
          continue        
        else if stringID[i] == "@"
          if sentenceCounter == 1
            sentenceCounter = 0
            loopcounter = i-1
            break
          else   
            spriteNum = i+1
            numID = parseInt(stringID[spriteNum])
            createBackground(numID)
            loopcounter = i+2
            createdSprite = true
        else if stringID[i] == "{"
        #attribute reading logic will go here
          if sentenceCounter == 1
            sentenceCounter = 0
            loopcounter = i-1
            break  
          else
            loopcounter = i+1
            for j in [loopcounter...stringID.length]
              if stringID[j] != '}'
                #document.getElementById('text').innerHTML += stringID[j]
                writeText(id,j)
              else 
                loopcounter = j+2
                printText()  
                break 
            sentenceCounter = 0    
          break
        else if stringID[i] == "%"
          $("img").fadeOut(800)
        else if stringID[i] == "^"
          clearHTML('viewport')
        else if stringID[i] == "$"
        #music logic goes here 
          if sentenceCounter == 1
            sentenceCounter = 0
            loopcounter = i-1
            break
          else   
            spriteNum = i+1
            songID = stringID[spriteNum]
            playSong(songID)
            loopcounter = i+2
            createdSprite = true  
        else if stringID[i]!= "." and stringID[i]!="!" and stringID[i]!="?"
          #document.getElementById('text').innerHTML += stringID[i]
          writeText(id,i)
        else
          #document.getElementById('text').innerHTML += stringID[i]
          writeText(id,i)
          loopcounter = i+1
          endChecker(id)
          printText() 
          if sentenceCounter < 1
            sentenceCounter += 1 
            #sentenceTraceCounter += 1
          else
            sentenceCounter = 0
            #sentenceTraceCounter += 1
            break
            
  endChecker = (currentBranch)->
    if loopcounter >= branches[currentBranch].text.length
      branchEnd = true
  
  morality = (status)->
    textColor = document.getElementById('text')   
    if status == "branch1"
      bad = true
      textColor.style.color = "red"    
    else if status == "branch2"
      bad = false
      textColor.style.color = "blue"
   
  counterReset = ()->
    loopcounter = 0
    sentenceCounter = 0
    branchEnd = false
  
  createSprite = (spriteID)->
    clearHTML('viewport')
    sprites[spriteID].placeSprite()
    
  createSprite2 = (spriteID)->
    clearHTML('viewport')
    sprites2[spriteID].placeSprite()  
    
  createBackground = (bgID)->
    view = document.getElementById("viewport")
    view.style.backgroundImage = ""	
    backgrounds[bgID].placeBG()
    
  writeText = (txt,currentChar)->
    textPool += branches[txt].text[currentChar]
  
  printText = ->  
    $(->  
      $("#text").typed(
        strings: [textPool], typeSpeed: 0 
      )      
    )
  clearTextPool = ->
    textPool = ""  
    
  jiggle_cursor = ->
    $('.typed-cursor').toggle()
    setTimeout (->
      jiggle_cursor()
      return
    ), 400
    return
  
  audio = $("#ui")[0]
  $(document).on {
    mouseenter: (e) ->
      audio.play()
      return
  }, ':button'
  
  playSong = (songID)->
    $("#boombox").attr("src", songID+".mp3")
  
  $('i').click ->
    $(this).find('i').toggleClass 'fa fa-pause fa fa-music'
    return    
    
#This is where the code is executed.
  window.onload = ->
    jiggle_cursor()
    branch("branch0")
    
 
