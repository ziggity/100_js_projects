var data={ "notes": [
    {
      "title": "Of mice and men",
      "author": 'John Steinbeck',
      "quote": "Maybe ever’body in the whole damn world is scared of each other."
    },
    {
      "title" : "1984",
      "author": "George Orwell",
      "quote": "It was a bright cold day in April, and the clocks were striking thirteen." 
    },
    {
      "title" : "Oracle Night",
      "author": "Paul Aster",
      "quote": "We excreted autumn and winter colors, but running invisibly through our veins, the very stuff that kept us alive, was the crimson of a mad artist&mdash;a red as brilliant as fresh paint."
    },
    {
      "title": "The Time Machine",
      "author": "H.G Wells",
      "quote": "It sounds plausible enough tonight, but wait until tomorrow. Wait for the common sense of the morning."
    },
    {
      "title": "The Martian",
      "author": "Andy Weir",
      "quote": "My asshole is doing as much to keep me alive as my brain."
    },
    {
      "title": "Different Seasons",
      "author": "Stephen King",
      "quote": "Some birds are not meant to be caged, that\'s all. Their feathers are too bright, their songs too sweet and wild. So you let them go, or when you open the cage to feed them they somehow fly out past you. And the part of you that knows it was wrong to imprison them in the first place rejoices, but still, the place where you live is that much more drab and empty for their departure."
    }
   ]
  };
  
  function randomize() {
    var range = data.notes.length;
    var random_index = Math.floor(Math.random() * range);
    var item = data.notes[random_index];
   
    
    $('.quote-content').html(item.quote); 
    $('.quote-book').html(item.title);
    $('.quote-author').html(item.author);
  }
  
  function getQuote() {
    var $button = $('.next')
  
    $button.on('click', randomize);
  }
  
  $(document).ready(function() {
    randomize();
    getQuote();
  });
  