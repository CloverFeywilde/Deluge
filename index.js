(function() {
  $(document).ready(function() {
    var audio, backgrounds, bad, branch, branchEnd, clearHTML, clearTextPool, counterReset, createBackground, createOption, createSprite, createSprite2, createdSprite, endChecker, endClicks, jiggle_cursor, loopcounter, morality, playSong, printText, sentenceCounter, sprites, sprites2, textParser, textPool, writeText;
    sprites = {
      1: {
        name: "Shroomie",
        location: "sprites/hash1.png",
        height: "416",
        width: "236",
        placeSprite: function() {
          var elem;
          elem = document.createElement("img");
          elem.setAttribute("src", sprites[1].location);
          elem.setAttribute("height", sprites[1].height);
          elem.setAttribute("width", sprites[1].width);
          elem.style.display = "inline-block";
          elem.style.marginTop = "42px";
          return document.getElementById("viewport").appendChild(elem);
        }
      },
      2: {
        name: "Shroomie-Nervous",
        location: "sprites/hash2.png",
        height: "416",
        width: "236",
        placeSprite: function() {
          var elem;
          elem = document.createElement("img");
          elem.setAttribute("src", sprites[2].location);
          elem.setAttribute("height", sprites[2].height);
          elem.setAttribute("width", sprites[2].width);
          elem.style.display = "inline-block";
          elem.style.marginTop = "42px";
          return document.getElementById("viewport").appendChild(elem);
        }
      },
      3: {
        name: "Shroomie-Flustered",
        location: "sprites/hash3.png",
        height: "416",
        width: "236",
        placeSprite: function() {
          var elem;
          elem = document.createElement("img");
          elem.setAttribute("src", sprites[3].location);
          elem.setAttribute("height", sprites[3].height);
          elem.setAttribute("width", sprites[3].width);
          elem.style.display = "inline-block";
          elem.style.marginTop = "42px";
          return document.getElementById("viewport").appendChild(elem);
        }
      },
      4: {
        name: "Shroomie-Flustered-Eyes-Closed",
        location: "sprites/hash4.png",
        height: "416",
        width: "236",
        placeSprite: function() {
          var elem;
          elem = document.createElement("img");
          elem.setAttribute("src", sprites[4].location);
          elem.setAttribute("height", sprites[4].height);
          elem.setAttribute("width", sprites[4].width);
          elem.style.display = "inline-block";
          elem.style.marginTop = "42px";
          return document.getElementById("viewport").appendChild(elem);
        }
      },
      5: {
        name: "Shroomie-shocked",
        location: "sprites/hash5.png",
        height: "416",
        width: "236",
        placeSprite: function() {
          var elem;
          elem = document.createElement("img");
          elem.setAttribute("src", sprites[5].location);
          elem.setAttribute("height", sprites[5].height);
          elem.setAttribute("width", sprites[5].width);
          elem.style.display = "inline-block";
          elem.style.marginTop = "42px";
          return document.getElementById("viewport").appendChild(elem);
        }
      },
      6: {
        name: "Shroomie-Flirty",
        location: "sprites/hash6.png",
        height: "368",
        width: "291",
        placeSprite: function() {
          var elem;
          elem = document.createElement("img");
          elem.setAttribute("src", sprites[6].location);
          elem.setAttribute("height", sprites[6].height);
          elem.setAttribute("width", sprites[6].width);
          elem.style.display = "inline-block";
          elem.style.marginTop = "60px";
          return document.getElementById("viewport").appendChild(elem);
        }
      },
      7: {
        name: "Shroomie-thinking",
        location: "sprites/hash7.png",
        height: "416",
        width: "236",
        placeSprite: function() {
          var elem;
          elem = document.createElement("img");
          elem.setAttribute("src", sprites[7].location);
          elem.setAttribute("height", sprites[7].height);
          elem.setAttribute("width", sprites[7].width);
          elem.style.display = "inline-block";
          elem.style.marginTop = "42px";
          return document.getElementById("viewport").appendChild(elem);
        }
      },
      8: {
        name: "Babylon",
        location: "sprites/hash8.png",
        height: "446",
        width: "343",
        placeSprite: function() {
          var elem;
          elem = document.createElement("img");
          elem.setAttribute("src", sprites[8].location);
          elem.setAttribute("height", sprites[8].height);
          elem.setAttribute("width", sprites[8].width);
          elem.style.display = "inline-block";
          elem.style.marginTop = "12px";
          return document.getElementById("viewport").appendChild(elem);
        }
      },
      9: {
        name: "Cora",
        location: "sprites/hash9.png",
        height: "482",
        width: "377",
        placeSprite: function() {
          var elem;
          elem = document.createElement("img");
          elem.setAttribute("src", sprites[9].location);
          elem.setAttribute("height", sprites[9].height);
          elem.setAttribute("width", sprites[9].width);
          elem.style.display = "inline-block";
          elem.style.marginTop = "12px";
          return document.getElementById("viewport").appendChild(elem);
        }
      }
    };
    sprites2 = {
      1: {
        name: "Glow Ball",
        location: "sprites/plus1.png",
        height: "322",
        width: "311",
        placeSprite: function() {
          var elem;
          elem = document.createElement("img");
          elem.setAttribute("src", sprites2[1].location);
          elem.setAttribute("height", sprites2[1].height);
          elem.setAttribute("width", sprites2[1].width);
          elem.style.display = "inline-block";
          elem.style.marginTop = "42px";
          return document.getElementById("viewport").appendChild(elem);
        }
      },
      2: {
        name: "Corpse Shroomie",
        location: "sprites/plus2.png",
        height: "534",
        width: "373",
        placeSprite: function() {
          var elem;
          elem = document.createElement("img");
          elem.setAttribute("src", sprites2[2].location);
          elem.setAttribute("height", sprites2[2].height);
          elem.setAttribute("width", sprites2[2].width);
          elem.style.display = "inline-block";
          elem.style.marginTop = "19px";
          return document.getElementById("viewport").appendChild(elem);
        }
      }
    };
    backgrounds = {
      1: {
        name: "Cora - Atk",
        location: "url(sprites/at1.jpg)",
        placeBG: function() {
          var view;
          view = document.getElementById("viewport");
          view.style.backgroundImage = backgrounds[1].location;
          view.style.backgroundPosition = "center";
          return view.style.backgroundSize = "cover";
        }
      },
      2: {
        name: "Forest Gate",
        location: "url(sprites/at2.jpg)",
        placeBG: function() {
          var view;
          view = document.getElementById("viewport");
          view.style.backgroundImage = backgrounds[2].location;
          view.style.backgroundPosition = "center";
          return view.style.backgroundSize = "cover";
        }
      },
      3: {
        name: "Heart",
        location: "url(sprites/at3.jpg)",
        placeBG: function() {
          var view;
          view = document.getElementById("viewport");
          view.style.backgroundImage = backgrounds[3].location;
          view.style.backgroundPosition = "center";
          return view.style.backgroundSize = "cover";
        }
      },
      4: {
        name: "Knife",
        location: "url(sprites/at4.jpg)",
        placeBG: function() {
          var view;
          view = document.getElementById("viewport");
          view.style.backgroundImage = backgrounds[4].location;
          view.style.backgroundPosition = "center";
          return view.style.backgroundSize = "cover";
        }
      },
      5: {
        name: "Forest Clearing",
        location: "url(sprites/at5.jpg)",
        placeBG: function() {
          var view;
          view = document.getElementById("viewport");
          view.style.backgroundImage = backgrounds[5].location;
          view.style.backgroundPosition = "center";
          return view.style.backgroundSize = "cover";
        }
      },
      6: {
        name: "Forest Path",
        location: "url(sprites/at6.jpg)",
        placeBG: function() {
          var view;
          view = document.getElementById("viewport");
          view.style.backgroundImage = backgrounds[6].location;
          view.style.backgroundPosition = "center";
          return view.style.backgroundSize = "cover";
        }
      },
      7: {
        name: "Sky Rain",
        location: "url(sprites/at7.jpg)",
        placeBG: function() {
          var view;
          view = document.getElementById("viewport");
          view.style.backgroundImage = backgrounds[7].location;
          view.style.backgroundPosition = "center";
          return view.style.backgroundSize = "cover";
        }
      },
      8: {
        name: "Temple Room",
        location: "url(sprites/at8.jpg)",
        placeBG: function() {
          var view;
          view = document.getElementById("viewport");
          view.style.backgroundImage = backgrounds[8].location;
          view.style.backgroundPosition = "center";
          return view.style.backgroundSize = "cover";
        }
      }
    };
    loopcounter = 0;
    sentenceCounter = 0;
    branchEnd = false;
    createdSprite = false;
    bad = false;
    endClicks = 0;
    textPool = "";

    /*
     *Abandoned back button counters
    traceCounter = 0
    sentenceTraceCounter = 0
     */
    clearHTML = function(elementID) {
      return document.getElementById(elementID).innerHTML = '';
    };
    branch = function(branchid) {
      document.getElementById('name').innerHTML = branches[branchid].name;
      clearHTML('options');
      clearHTML('text');
      clearHTML('viewport');
      counterReset();
      return document.onclick = function() {
        var buttonText, targetBranch, _ref, _results;
        clearHTML('directions');
        if (loopcounter < branches[branchid].text.length) {
          clearHTML('text');
          clearTextPool();
        }
        textParser(branchid);
        if (branchEnd === true) {
          branchEnd = false;
          _ref = branches[branchid].options;
          _results = [];
          for (targetBranch in _ref) {
            buttonText = _ref[targetBranch];
            _results.push(createOption(targetBranch, buttonText));
          }
          return _results;
        }
      };
    };
    createOption = function(branchid, text) {
      var button;
      button = document.createElement('button');
      button.innerHTML = text;

      /*
      backbutton abandoned code
      document.getElementById('back').onclick = ->
        backButton(branchid)
       */
      button.onclick = function() {
        morality(branchid);
        switch (branchid) {
          case "branch4":
            if (bad === false) {
              if (endClicks === 2) {
                return branch(branchid);
              } else {
                endClicks += 1;
                return branch('branchE');
              }
            } else {
              return branch('branchB');
            }
            break;
          case "branch0":
            endClicks = 0;
            return branch(branchid);
          default:
            return branch(branchid);
        }
      };
      return document.getElementById('options').appendChild(button);
    };
    textParser = function(id) {
      var i, j, numID, songID, spriteNum, stringID, _i, _j, _ref, _ref1, _results;
      stringID = branches[id].text;
      _results = [];
      for (i = _i = loopcounter, _ref = stringID.length; loopcounter <= _ref ? _i < _ref : _i > _ref; i = loopcounter <= _ref ? ++_i : --_i) {
        if (stringID[i] === "#") {
          if (sentenceCounter === 1) {
            sentenceCounter = 0;
            loopcounter = i - 1;
            break;
          } else {
            spriteNum = i + 1;
            numID = parseInt(stringID[spriteNum]);
            createSprite(numID);
            loopcounter = i + 2;
            _results.push(createdSprite = true);
          }
        } else if (stringID[i] === "+") {
          if (sentenceCounter === 1) {
            sentenceCounter = 0;
            loopcounter = i - 1;
            break;
          } else {
            spriteNum = i + 1;
            numID = parseInt(stringID[spriteNum]);
            createSprite2(numID);
            loopcounter = i + 2;
            _results.push(createdSprite = true);
          }
        } else if (createdSprite === true) {
          createdSprite = false;
          continue;
        } else if (stringID[i] === "@") {
          if (sentenceCounter === 1) {
            sentenceCounter = 0;
            loopcounter = i - 1;
            break;
          } else {
            spriteNum = i + 1;
            numID = parseInt(stringID[spriteNum]);
            createBackground(numID);
            loopcounter = i + 2;
            _results.push(createdSprite = true);
          }
        } else if (stringID[i] === "{") {
          if (sentenceCounter === 1) {
            sentenceCounter = 0;
            loopcounter = i - 1;
            break;
          } else {
            loopcounter = i + 1;
            for (j = _j = loopcounter, _ref1 = stringID.length; loopcounter <= _ref1 ? _j < _ref1 : _j > _ref1; j = loopcounter <= _ref1 ? ++_j : --_j) {
              if (stringID[j] !== '}') {
                writeText(id, j);
              } else {
                loopcounter = j + 2;
                printText();
                break;
              }
            }
            sentenceCounter = 0;
          }
          break;
        } else if (stringID[i] === "%") {
          _results.push($("img").fadeOut(800));
        } else if (stringID[i] === "^") {
          _results.push(clearHTML('viewport'));
        } else if (stringID[i] === "$") {
          if (sentenceCounter === 1) {
            sentenceCounter = 0;
            loopcounter = i - 1;
            break;
          } else {
            spriteNum = i + 1;
            songID = stringID[spriteNum];
            playSong(songID);
            loopcounter = i + 2;
            _results.push(createdSprite = true);
          }
        } else if (stringID[i] !== "." && stringID[i] !== "!" && stringID[i] !== "?") {
          _results.push(writeText(id, i));
        } else {
          writeText(id, i);
          loopcounter = i + 1;
          endChecker(id);
          printText();
          if (sentenceCounter < 1) {
            _results.push(sentenceCounter += 1);
          } else {
            sentenceCounter = 0;
            break;
          }
        }
      }
      return _results;
    };
    endChecker = function(currentBranch) {
      if (loopcounter >= branches[currentBranch].text.length) {
        return branchEnd = true;
      }
    };
    morality = function(status) {
      var textColor;
      textColor = document.getElementById('text');
      if (status === "branch1") {
        bad = true;
        return textColor.style.color = "red";
      } else if (status === "branch2") {
        bad = false;
        return textColor.style.color = "blue";
      }
    };
    counterReset = function() {
      loopcounter = 0;
      sentenceCounter = 0;
      return branchEnd = false;
    };
    createSprite = function(spriteID) {
      clearHTML('viewport');
      return sprites[spriteID].placeSprite();
    };
    createSprite2 = function(spriteID) {
      clearHTML('viewport');
      return sprites2[spriteID].placeSprite();
    };
    createBackground = function(bgID) {
      var view;
      view = document.getElementById("viewport");
      view.style.backgroundImage = "";
      return backgrounds[bgID].placeBG();
    };
    writeText = function(txt, currentChar) {
      return textPool += branches[txt].text[currentChar];
    };
    printText = function() {
      return $(function() {
        return $("#text").typed({
          strings: [textPool],
          typeSpeed: 0
        });
      });
    };
    clearTextPool = function() {
      return textPool = "";
    };
    jiggle_cursor = function() {
      $('.typed-cursor').toggle();
      setTimeout((function() {
        jiggle_cursor();
      }), 400);
    };
    audio = $("#ui")[0];
    $(document).on({
      mouseenter: function(e) {
        audio.play();
      }
    }, ':button');
    playSong = function(songID) {
      return $("#boombox").attr("src", songID + ".mp3");
    };
    $('i').click(function() {
      $(this).find('i').toggleClass('fa fa-pause fa fa-music');
    });
    return window.onload = function() {
      jiggle_cursor();
      return branch("branch0");
    };
  });

}).call(this);
