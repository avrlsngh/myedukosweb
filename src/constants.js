// instuctors objects

const hritisha = {
  id: "hritisha",
  name: "Hritisha Rewadia",
  heading: "Western Vocals",
  subHeading: "Opera Queen",
  imageURL: require("./assets/images/hritishaInstructor.jpg"),
  imageCover: "images/celebrities/hritishaCover.png",
  about:
    "Know the tricks and tips of Rajasthan 's first opera singer and \"Dada Saheb Phalke Film Festival\" Award Winner.\nShe holds many records for breaking glass with the voice. She'll tell you how you can master your voice and the correct way to have control over the advance step and techniques of singing. Know what you really can be as a singer.",
  trailerId: "n2A8v2Xq9fs",
  coursesId: "westernSinging",
};

const ravindra = {
  id: "ravindra",
  name: "Ravindra Upadhyay",
  heading: "Playback Singing",
  subHeading: "Bollywood Singer",
  imageURL: require("./assets/images/ravindraInstructor.jpg"),
  imageCover: "images/celebrities/ravindraCover.png",
  about:
    "The Bollywood Playback singer Ravindra Upadhyay, the voice behind Talaash-Jiya lage na, Happy new year, Iqbal , Raktracharitra movie songs & a winner of Channel V - Superstar reality show. He is going to share his experience of 25 years with you. Learn the essentials of singing and what is necessary for you as a playback singer and know how can be different from others.",
  trailerId: "b1qtSNcv5oA",
  coursesId: "playbackSinging",
};

const sandeep = {
  id: "sandeep",
  name: "Sandeep Lele",
  heading: "Acting",
  subHeading: "Bollywood Actor",
  imageURL: require("./assets/images/sandeepInstructor.jpg"),
  imageCover: "images/experts/sandeepCover.png",
  about:
    "Sandeep Lele is a renowned theatre artist & working as a teaching coach since 27 years. He worked in many movies, short films and advertisements. Learn from the very initial steps to moving forward with detailed technical acting aspects like creating complex characters, powerful performances, carrying your body in accordance with camera, performing with team, voice dynamics and projection with expressions, story organisation, plotting structures, conflict, suspense, theme, language, style, dialogue, monologue and various other things",
  trailerId: "9mgUzbQA6Ao",
  coursesId: "acting",
};

const swarna = {
  id: "swarna",
  name: "Swarna Ghosh",
  heading: "Classical Singing",
  imageURL: require("./assets/images/swarnaInstructor.jpg"),
  imageCover: "images/experts/swarnaCover.png",
  about:
    "Swarna Ghosh, a senior musician, ‘Baisara Beera’ fame artist is now coming on My Edukos to share her learning skills with you. Teaching since 15 years, she is also the gold medalist of Ravindra Bharati University. Here in this course she will start teaching with the basics of Indian Classical Music, Alankar, Riyaz to exploring Ragas like Bihag, Desh, Yaman, and essential singing elements like Taal, Breath, Pitch, improvisation & Much more.",
  trailerId: "sM2hOSsBzL8",
  coursesId: "classicalSinging",
};

const arpit = {
  id: "arpit",
  name: "Arpit Gangwal",
  heading: "Film Making",
  imageURL: require("./assets/images/arpitInstructor.jpg"),
  imageCover: "images/experts/arpitCover.png",
  about:
    "Arpit Gangwal is here to give you all his 10 years of filmmaking experience, everything from pre-production to pro-production in a 2 hour filmmaking course on MY edukos. He will talk about small scale film production techniques to the larger ones. This course has been made keeping in mind the geographic of India and the limitation of filmmaking we all have here. We often face troubles in making budgets, in meeting our visual expectations, in writing a film according to our resources, these are important subjects that many film schools and videos regarding filmmaking do not cover. ",
  trailerId: "XjQkH3FtRzQ",
  coursesId: "filmMaking",
};

// lessons objects
const classicalSinging = {
  courseId: "classicalSingingSG",
  uid: "6i5xHfKahBTG2HYfOHFF",
  time: "77 minutes",
  amount: 999,
  trailerId: "sM2hOSsBzL8",
  trailerURL: "gs://myedukos-3bbec.appspot.com/trailers/1classical.mp4",
  name: "Classical Singing",
  instructorName: "Swarna Ghosh",
  instructorId: "swarna",
  imageUrl: "images/courses/classicalSinging.png",
  noOfLessons: 12,
  lessons: [
    "Introduction & Importance of Music",
    "Riyaz",
    "Alankars",
    "Breath",
    "Thaat",
    "Raga Bihag",
    "Raga Des",
    "Raga Yaman",
    "Folk singing ",
    "Raga Jai Jaiyanti & Bengali folk",
    "Bhajan",
    "Outro",
  ],
  aboutLessons: [
    "Before starting to learn the classical, we must first know the importance and significance of classical music. Classical training for any kind music is must to learn to master aspects of your musical journey. Swarna ma’am will teach you what and why do you have to master these indian techniques.",
    "Just like for speaking fluently we have to continuously read and listen, we singers have to follow a similar schedule of listening and singing. The indian singing training starts with the primary elements and how to follow and practice your singing schedule or Riyaz. This will help you to maintain your voice and enhance your vocal abilities and techniques. Learn how!",
    "Learn the beauty of fine singing . The most challenging ornament for a singer made easy by just the simple concepts taught by Swarna Ma’am. Alankar is a way to give an expression in the song by the pitch variation relationship with time. It can do wonders to make an impression. So let’s clear the concepts of Alankar and make our pitches perfect before developing our next step.",
    "Breathing is that powerful tool of singing which makes our audience breathe with us while performing.",
    "A thaat is a musical mode in Hindustani music which always has seven notes (excluding the repeated tonic) and is considered the basis for the system of organising and classifying ragas in North Indian classical music",
    "This is a very sweet melody equally popular with both the beginners as well as experts. P M G m G combination is Raag Vaachak. Madhyam Teevra and Madhyam Shuddha are used. As far as the Thaat of Raag Bihag is concerned, in olden days the Thaat was considered as Bilawal, as Madhyam Teevra was not used",
    "This Raag is a very sweet melody that announces itself with the combination D s m G R - G ,N s S. The musical compositions in this Raag bear the Shadja-Pancham (S-P) and Shadja-Madhyam (S-m) Bhava and therefore very pleasing and essentially melodic",
    "This Raag is rendered at the time when lights are put on. Its original name is Raag Kalyan and only during the Mughal's rule the name Yaman was introduced and became current. Aaroh with Nishad (N) is preferred and heightens the beauty of this melody.",
    "Here She is teaching her most popular composition she sung “Baisa Beera. The Rajasthani Folk Song.",
    "This is a very sweet and touching Raag that has a very wide public appeal. However it is a very complex Raag & in this chapter she is adding a Bengali folk with this Raga. A perfect example of improvisation",
    "Bhajan refers to any devotional song with religious theme or spiritual ideas, specifically among Indian religions, in any of the languages from the Indian subcontinent",
    "Swarna ma’am thanks you to learn with her and wishes you all the best and acknowledge on how to continue your classical practice and musical journey. All the best!",
  ],
  lessonURL: [
    "gs://myedukos-3bbec.appspot.com/ClassicalSinging/1Introduction.mp4",
    "gs://myedukos-3bbec.appspot.com/ClassicalSinging/2ElementsofIndianClassicalMusic.mp4",
    "gs://myedukos-3bbec.appspot.com/ClassicalSinging/3ExplanationofAlankar.mp4",
    "gs://myedukos-3bbec.appspot.com/ClassicalSinging/4BreathingExercise.mp4",
    "gs://myedukos-3bbec.appspot.com/ClassicalSinging/5ExplanationofThaat.mp4",
    "gs://myedukos-3bbec.appspot.com/ClassicalSinging/6RagaBihag.mp4",
    "gs://myedukos-3bbec.appspot.com/ClassicalSinging/7RaagDesh.mp4",
    "gs://myedukos-3bbec.appspot.com/ClassicalSinging/8RaagYaman.mp4",
    "gs://myedukos-3bbec.appspot.com/ClassicalSinging/9FolkBaisaraBeera&2Songs.mp4",
    "gs://myedukos-3bbec.appspot.com/ClassicalSinging/10RaagJaiJaiyanti.mp4",
    "gs://myedukos-3bbec.appspot.com/ClassicalSinging/11BhajanThumri.mp4",
    "gs://myedukos-3bbec.appspot.com/ClassicalSinging/Outro.mp4",
  ],
  thumbnails: [
    "gs://myedukos-3bbec.appspot.com/ClassicalSinging/thumbnails/1Swarna.jpg",
    "gs://myedukos-3bbec.appspot.com/ClassicalSinging/thumbnails/2Swarna.jpg",
    "gs://myedukos-3bbec.appspot.com/ClassicalSinging/thumbnails/3Swarna.jpg",
    "gs://myedukos-3bbec.appspot.com/ClassicalSinging/thumbnails/4Swarna.jpg",
    "gs://myedukos-3bbec.appspot.com/ClassicalSinging/thumbnails/5Swarna.jpg",
    "gs://myedukos-3bbec.appspot.com/ClassicalSinging/thumbnails/6Swarna.jpg",
    "gs://myedukos-3bbec.appspot.com/ClassicalSinging/thumbnails/7Swarna.jpg",
    "gs://myedukos-3bbec.appspot.com/ClassicalSinging/thumbnails/8Swarna.jpg",
    "gs://myedukos-3bbec.appspot.com/ClassicalSinging/thumbnails/9Swarna.jpg",
    "gs://myedukos-3bbec.appspot.com/ClassicalSinging/thumbnails/9Swarna.jpg",
    "gs://myedukos-3bbec.appspot.com/ClassicalSinging/thumbnails/9Swarna.jpg",
    "gs://myedukos-3bbec.appspot.com/ClassicalSinging/thumbnails/9Swarna.jpg",
  ],
};

const playbackSinging = {
  courseId: "playbackSingingRU",
  uid: "THY6xZYLAh0FhbH0xaX8",
  time: "130 minutes",
  amount: 1499,
  name: "Playback Singing",
  trailerId: "b1qtSNcv5oA",
  trailerURL: "gs://myedukos-3bbec.appspot.com/trailers/2playback.mp4",
  instructorName: "Ravindra Upadhyay",
  instructorId: "ravindra",
  imageUrl: "images/courses/playbackSinging.png",
  noOfLessons: 12,
  lessons: [
    "What is voice?",
    "Riyaz",
    "Breathing excercises",
    "Difference between live and studio",
    "How to prepare a song",
    "Improvisation",
    "Rhythm, taal and Laya",
    "Performance anxiety",
    "Important tips and tricks to sing a song better",
    "Importance of correct posture",
    "Ravindra Upadhyay’s journey ",
    "OUTRO",
  ],
  aboutLessons: [
    "It is always important to know the mechanism before practicality so that you know what you can do in different voice conditions and how to use your voice well. Learn how our voice works to function it’s best.",
    "Maintaining your singing and making voice last a lifetime requires the correct way of Riyaz. Know the tricks of Ravindra sir on correct way to Riyaz, so you can not only polish your singing but strive to develop your own unique singing style.This will help your vocal cords to be accustomed with it and will respond better",
    "Breathing is the primary fundamental aspect of singing. We cannot sing good without a good breath as good breathing leads us to good voice support and the ability to sing longer phrases in one breath. Learn good and correct way to increase your breathing capacity by Ravindra sir. ",
    "There’s a huge difference between live performance and studio recordings because the properties of sound changes according to different environment. Like for in live performances, the sound acts different for indoor and outdoor. Similarly for recording, the rooms acoustics, type of microphone and micing techniques for singing is equally important to know for your song recording sessions. Know them in details.",
    "You now the essentials of singing now. But ultimately our motive is to be creative enough and know how to prepare ourselves for our projects or songs. Here, Ravindra sir will acknowledge you how you can be independent to get ready for the final act.",
    "The only way you can stand out of the crowd is to not to be a copy. Ravindra sir will let you know how you can sound different and improvisation is a great way to achieve uniqueness. Improvisation not only means being creative and making a different presence in the song in terms of pitch, but also in your voice types, rhythm and expressions too.",
    "Rhythm is the main component of singing just like the pitch. There is no singing without any rhythm, a pace, a pulse, or a repetition. It is a relationship with time. Make an understanding with the primary rhythms and know how you can improvise in  those rhythms & playing with them to leave an impressive remark",
    "May it be a professional singer or just a beginner. Stage fear and anxiety is the biggest issue for many artists responsible for a low performance. Ravindra sir will tell you how to build up your confidence and fight your fear within",
    "Know the secretive tips and tricks by Ravindra sir which will not only enhance but will also help you to sound really flawless and smooth throughout your singing registers and techniques",
    "Without the correct body posture and body alignment, singing is just like a road trip with many bumps in the way. Correct posture and alignment of the body makes our singing smooth by proper projection of our voice. It plays a major role in the effortless singing we hear of professional voices. ",
    "Life is too short to make mistakes. Learn from the experiences of Ravindra sir and get to know how you can approach opportunities in the best way. It is good to know the experiences sometimes because it teach us what studies cannot teach. All the best!! ",
    "The module comes to the conclusion here. Ravindra Upadhyay thanks you for learning with him and wishes you all the best for playback singing.",
  ],
  lessonURL: [
    "gs://myedukos-3bbec.appspot.com/playbackSinging/1WhatIsVoice.mp4",
    "gs://myedukos-3bbec.appspot.com/playbackSinging/2Riyaz.mp4",
    "gs://myedukos-3bbec.appspot.com/playbackSinging/3BreathingExercise.mp4",
    "gs://myedukos-3bbec.appspot.com/playbackSinging/4DifferenceBetweenLive&Studio.mp4",
    "gs://myedukos-3bbec.appspot.com/playbackSinging/5HowToPrepareASong.mp4",
    "gs://myedukos-3bbec.appspot.com/playbackSinging/6Improvisataion.mp4",
    "gs://myedukos-3bbec.appspot.com/playbackSinging/7RhythmTaal&Laya.mp4",
    "gs://myedukos-3bbec.appspot.com/playbackSinging/8PerformanceAnxiety.mp4",
    "gs://myedukos-3bbec.appspot.com/playbackSinging/9ImportanceTips.mp4",
    "gs://myedukos-3bbec.appspot.com/playbackSinging/10ImportanceOfCorrectPosture.mp4",
    "gs://myedukos-3bbec.appspot.com/playbackSinging/11MyJourney.mp4",
    "gs://myedukos-3bbec.appspot.com/playbackSinging/12outro.mp4",
  ],
  thumbnails: [
    "gs://myedukos-3bbec.appspot.com/playbackSinging/thumbnails/1RU.jpg",
    "gs://myedukos-3bbec.appspot.com/playbackSinging/thumbnails/2RU.jpg",
    "gs://myedukos-3bbec.appspot.com/playbackSinging/thumbnails/3RU.jpg",
    "gs://myedukos-3bbec.appspot.com/playbackSinging/thumbnails/4RU.jpg",
    "gs://myedukos-3bbec.appspot.com/playbackSinging/thumbnails/5RU.jpg",
    "gs://myedukos-3bbec.appspot.com/playbackSinging/thumbnails/6RU.jpg",
    "gs://myedukos-3bbec.appspot.com/playbackSinging/thumbnails/7RU.jpg",
    "gs://myedukos-3bbec.appspot.com/playbackSinging/thumbnails/8RU.jpg",
    "gs://myedukos-3bbec.appspot.com/playbackSinging/thumbnails/9RU.jpg",
    "gs://myedukos-3bbec.appspot.com/playbackSinging/thumbnails/10RU.jpg",
    "gs://myedukos-3bbec.appspot.com/playbackSinging/thumbnails/11RU.jpg",
    "gs://myedukos-3bbec.appspot.com/playbackSinging/thumbnails/12RU.jpg",
  ],
};

const westernSinging = {
  courseId: "westernSingingHR",
  uid: "trKsZbh4mveTHunmTBij",
  time: "121 minutes",
  amount: 1499,
  name: "Western Singing",
  trailerId: "n2A8v2Xq9fs",
  trailerURL: "gs://myedukos-3bbec.appspot.com/trailers/5.westernsinging.mp4",
  instructorName: "Hritisha Rewadia",
  instructorId: "hritisha",
  imageUrl: "images/courses/westernSinging.png",
  noOfLessons: 12,
  lessons: [
    "ELEMENTS OF SINGING",
    "MUSIC THEORY",
    "VOICE HEALTH, PROTECTION AND MAINTENANCE",
    "WARMUPS",
    "HEAD VOICE(4A)",
    "CHEST VOICE(4B)",
    "DIAGPHRAM VOICE(4C)",
    "MIXED VOICE(4D)",
    "BREATHING(4E)",
    "TONALITY AND QUICK PRE-PREP",
    "FIGHTING STAGE FEAR AND ANXIETY",
    "OUTRO",
  ],
  aboutLessons: [
    "Before starting, the primary is knowing what is voice, body and singing all about altogether. Know the most important elements and not ignoring even the minute steps which can be a solution to your major problems",
    "There's a theory behind every practical. Get trained in music theory which will make you communicate like a musician and so you can build up the foundation of the technicalities for your singing too.",
    "A singers instrument is his/her voice and it's irreplaceable. So, its good to keep your voice shelf-life long, be able to cope in your bad vocal conditions and knowing what will affect and what is most suitable for your voice",
    "Develop your singing voices for perfect voice projection, dynamic control, deep longer breaths & begin to sound like a professional. This is all everything magical is coming from.",
    "Starting with the voices with head voice. Developing a balanced voice is very necessary to sound professional. Head voice gives your voice a soft and light sound. Learn how to develop this one",
    "Chest voice is the sound with bold, lower, thicker and warmer tone. You normally use it while speaking but in singing in chest voice is alot more different than just speaking. Chest voice can do impressive wonders for singing really high bold songs or even the Indian songs are majorly sung in chest voice. Check it out to see what other things it can do",
    "A flattened diagphram keeps a supply of air in the lungs which is used to “support” the air released with proper placement in the mouth for effortless singing. It holds the air in the body and gives the singer control of a resistant, steady breath",
    'The mixed voice is the "in between voice" that connects the two vocal  registers. The reason artists can sing so high in what seems to be their chest voice  is that they have developed a "mixed register", where vocal  cord zip up so one is singing in head voice, but the voice  still resonate partly in the chest',
    "Breathing is the single most important element in singing. Singers not only breathe into their lungs but also in their body. In order to control your voice you have to put out exactly the amount of breath you need for the sound you want. How you exhale controls the quality of the sound, the volume and partially controls the pitch and the tone. Learn the correct way to breathe.",
    "Shaping your voice into textures is building yourself as a extraordinary singer but not as a copy. And also get ready to the face the situations to immediately prepare your voice for sudden unexpected performances",
    "The most common factor even professional face sometimes. Don't be shy & scared to show what you really are. Learn how can you defeat your resistors in your performance, coming into the character between thousands of people, being expressive and throw that fear out in the garbage. There's no need of it for you as an artist",
    "Hritisha thanks you to learn with her and sends her well wishes. She concerns to tell how you have to continue your singing schedule and what's coming up next for mastering next step of your voice advancement. All the best!",
  ],
  lessonURL: [
    "gs://myedukos-3bbec.appspot.com/WesternSinging/chapter1.mp4",
    "gs://myedukos-3bbec.appspot.com/WesternSinging/Chapter2.mp4",
    "gs://myedukos-3bbec.appspot.com/WesternSinging/chapter3.mp4",
    "gs://myedukos-3bbec.appspot.com/WesternSinging/chapter4.mp4",
    "gs://myedukos-3bbec.appspot.com/WesternSinging/chapter4A.mp4",
    "gs://myedukos-3bbec.appspot.com/WesternSinging/CHAPTER4B.mp4",
    "gs://myedukos-3bbec.appspot.com/WesternSinging/CHAPTER4C.mp4",
    "gs://myedukos-3bbec.appspot.com/WesternSinging/CHAPTER4D.mp4",
    "gs://myedukos-3bbec.appspot.com/WesternSinging/CHAPTER4E.mp4",
    "gs://myedukos-3bbec.appspot.com/WesternSinging/CHAPTER5.mp4",
    "gs://myedukos-3bbec.appspot.com/WesternSinging/CHAPTER6.mp4",
    "gs://myedukos-3bbec.appspot.com/WesternSinging/OUTRO.mp4",
  ],
  thumbnails: [
    "gs://myedukos-3bbec.appspot.com/WesternSinging/thumbnails/HR1.jpg",
    "gs://myedukos-3bbec.appspot.com/WesternSinging/thumbnails/HR2.jpg",
    "gs://myedukos-3bbec.appspot.com/WesternSinging/thumbnails/HR3.jpg",
    "gs://myedukos-3bbec.appspot.com/WesternSinging/thumbnails/HR4.jpg",
    "gs://myedukos-3bbec.appspot.com/WesternSinging/thumbnails/HR5.jpg",
    "gs://myedukos-3bbec.appspot.com/WesternSinging/thumbnails/HR6.jpg",
    "gs://myedukos-3bbec.appspot.com/WesternSinging/thumbnails/HR7.jpg",
    "gs://myedukos-3bbec.appspot.com/WesternSinging/thumbnails/HR8.jpg",
    "gs://myedukos-3bbec.appspot.com/WesternSinging/thumbnails/HR9.jpg",
    "gs://myedukos-3bbec.appspot.com/WesternSinging/thumbnails/HR10.jpg",
    "gs://myedukos-3bbec.appspot.com/WesternSinging/thumbnails/HR11.jpg",
    "gs://myedukos-3bbec.appspot.com/WesternSinging/thumbnails/HR12.jpg",
  ],
};

const filmMaking = {
  courseId: "filmMakingAG",
  uid: "0l0jqmNqgQrScVUrkhTI",
  time: "118 minutes",
  amount: 999,
  name: "Film Making",
  trailerId: "XjQkH3FtRzQ",
  trailerURL: "gs://myedukos-3bbec.appspot.com/trailers/3filmMaking.mp4",
  instructorName: "Arpit Gangwal",
  instructorId: "arpit",
  imageUrl: "images/courses/filmMaking.png",
  noOfLessons: 21,
  lessons: [
    "History of cinema",
    "Brief History of Indian Cinema",
    "Basic Terminologies of filmmaking",
    "Idea to Screenplay",
    "Types of Story Structure",
    "3 Act Structure",
    "5 Act Structure",
    "Tell Story From A Character ",
    "Characterization",
    "Motive and Conflict",
    "Visual Artforms are Similar",
    "Pre-Production Stages",
    "Different Camera Angles ",
    "Crew On Sets",
    "Post-Production",
    "Learn Basic Editing",
    "Music and Sounds",
    "Film Distribution",
    "My views on Filmmaking",
    "Work as an AD",
    "The Conclusion",
  ],
  aboutLessons: [
    "How did it all started? ",
    "We need to know our Indian forefathers cinema and the legacy they have left for us to continue and flourish.",
    "Its important to understand the basic terms of cinema, before we get dive into the visual world of creativity.",
    "It all starts with a 2 line thought and it all ends in a 150 pages document. A journey to be learned and practiced.",
    "Do you want to start your story from birth or do you want it from death? Lets learn the two way road of storytelling",
    "Ever wondered why Hollywood make so many cool films? Well, now we have an answer to it. An important story breakdown",
    "Breaking down the 3 Act Structure to two more times so that we can have an elaborative formation",
    "If you have a clarity of your main characters, you will have a clarity in your story as well. Lets understand how character develops.",
    "Understanding the physiology, sociology and psychology of a character helps you to develop important traits of your hero that further helps in storytelling",
    "Raj wants love from Simran and Thakur wants revenge from Gabbar. Lets try to decode what inspires a character to take actions!",
    "Visual Artforms are Similar - Music video, short film, webseries, film or an advertisement...they are divided by runtime but united by storytelling",
    "Pre-Production Stages - Its great that you have written a script but more fun comes later when you decide to finally make it into a film. What goes before shooting? Lets learn it here",
    "Different Camera Angles -  Master, Mid and Close, that's all you got to learn as a filmmaker",
    "Crew On Sets - The different designations in filmmaking that will help you choosing which are the ones you want in your film.",
    "Editing is gives a feel and music gives a soul. Lets understand the stages of feel and soul of our film.",
    "Lets try to understand why you need to know basic editing and how it will help you as a writer and director.",
    "Remember the Batman theme of Hans Zimmer? Yes! You need to learn why sound and music are the most important part of cinema",
    "Box Office! Youtube Channel! Netflix! Amazon! We need to know what we are doing with our film once we complete it fully",
    "The world of cinema is bitter-sweet. Its less bitter but more sweet. Lets hope you guys get to learn something from my experiences",
    "Know why you need to work as an Assistant Director before you start your own big project",
    "Is filmmaking for you? Are you ready for the real world challenges? Lets hope you have an answer after this video",
  ],
  lessonURL: [
    "gs://myedukos-3bbec.appspot.com/FilmMaking/1HistoryofCinema.mp4",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/2HistoryofIndianCinema.mp4",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/3BasicTerminologiesoffilmmaking.mp4",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/4IdeatoscreenplayAnOverview.mp4",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/5Typesofstorystructures.mp4",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/6_3ActStructure.mp4",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/7_5ActStructure.mp4",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/8HowToTellStoryFromCharacter.mp4",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/9Characterization.mp4",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/10MotiveandConflict.mp4",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/11SimilarityBetweenAllMediaArtforms.mp4",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/12MajorPreProductionStages.mp4",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/13DifferentShotsandCameraAngles.mp4",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/14ListOfBasicCrewRequiredOnSet.mp4",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/15PostProductionStages.mp4",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/16Whyyouneedtoknowediting.mp4",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/17MusicandSoundInCinema.mp4",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/18FilmDistribution.mp4",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/19MyPersonalsuggestionsonfilmmaking.mp4",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/20YoushouldworkasanAssistantDirector.mp4",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/21ShouldYouOptForFilmmakingConclusion.mp4",
  ],
  thumbnails: [
    "gs://myedukos-3bbec.appspot.com/FilmMaking/thumbnails/AG1.jpg",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/thumbnails/AG2.jpg",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/thumbnails/AG3.jpg",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/thumbnails/AG4.jpg",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/thumbnails/AG5.jpg",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/thumbnails/AG6.jpg",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/thumbnails/AG7.jpg",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/thumbnails/AG8.jpg",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/thumbnails/AG9.jpg",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/thumbnails/AG10.jpg",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/thumbnails/AG11.jpg",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/thumbnails/AG12.jpg",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/thumbnails/AG13.jpg",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/thumbnails/AG14.jpg",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/thumbnails/AG15.jpg",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/thumbnails/AG16.jpg",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/thumbnails/AG17.jpg",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/thumbnails/AG18.jpg",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/thumbnails/AG19.jpg",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/thumbnails/AG20.jpg",
    "gs://myedukos-3bbec.appspot.com/FilmMaking/thumbnails/AG21.jpg",
  ],
};

const acting = {
  courseId: "acting",
  uid: "Skmry1lYjpalKLRoWQxF",
  time: "118 minutes",
  amount: 999,
  name: "Acting",
  trailerId: "9mgUzbQA6Ao",
  trailerURL: "gs://myedukos-3bbec.appspot.com/trailers/3filmMaking.mp4",
  instructorName: "Sandeep Lele",
  instructorId: "sandeep",
  imageUrl: "images/courses/Acting.png",
  noOfLessons: 22,
  lessons: [
    "WHO CAN BE AN ACTOR ",
    "WHAT IS ACTING",
    "CONCENTRATION",
    "BLOCKING",
    "WALK EXERCISE(4A)",
    "FOCUS EXERCISE",
    "BRAIN VERSUS PRESENT ACTING ",
    "PURE AND CLEAN PRONUNCIATION ",
    "READING SKILLS",
    "BREATHING EXERCISE DEMONSTRATION (9A)",
    "HUSH-HUSH VOICE EXERCISE (9B)",
    "READING(variations)",
    "READING (relationship)",
    "READING CONFLICT ",
    "EMOTIONS (how to generate them)",
    "MONOLOGUE PRACTICE",
    "NOW TO THEATRE (importance of it)",
    "OBSERVATION",
    "DUETS",
    "PURPOSE OF SCREEN",
    "FACIAL EXPRESSIONS",
    "CONCLUSION",
  ],
  aboutLessons: [
    "Who can become an Actor and for whom this course is designed? This course is for newcomers, for those who are doing theatre and media for years and for the parents who want to groom their little ones talent to bring out more in them.",
    "In this chapter you will know what acting is all about( which is the communication of emotion and ideas), also the different approaches required for theatre and camera acting is elaborated in this chapter.",
    "Concentration is the key to all art forms and skills. It is an essential need for an artist. The importance of concentration and focus for acting is explained in this chapter ",
    "The job of an actor is not only to perform but also to be seen while performing. How to walk and block yourself on stage and in front of camera has been explained in this chapter. Blocking is the the first step of acting.",
    "In this chapter walk for an actor is explained ; the nuances of walk. Walking from point A to point B, taking right turns, taking a curve while you are walking is explained by Sandeep sir.",
    "Focus or concentration is the key for an actor. Without focus every actor is just an ordinary person. How to exercise it when you have a team and even when you are alone is very well explained in this section.",
    "For an outstanding performance it is a must that an actor is always acting in present (not wondering in past and future). Also switching mood off and on is what most of the immature actors do. Active brain versus present acting is tonight in this chapter. The better approach has been outlined in this chapter.",
    "For an acceptable acting, every actor must be well versed in the language of his/her country. The importance of correct pronunciation as well as how to improve them has been explained in this chapter.",
    "New actors have a tendency to drop their last words in the sentences as well as their voice projection or weight or volume. In this chapter breathing exercise to improve the voice and have a deep and far reaching voice has been taught.",
    "In this chapter the demonstration of breathing exercise has been given by Sandeep sir on how to breed to create a solid focus.",
    "In this chapter hash hash voice exercise is demonstrated which is a great exercise to bring your whole body behind your words has been taught. It puts your voice in your base. An actor's biggest asset.",
    "Sandeep sir will tell you the importance of putting a proper weight on words. Putting a proper pressure and weight in the beginning helps an actor to bring out the true meaning of what the dialogue means",
    "Delivering a dialogue with variation is the key to success for an actor. There are various ways through which one can do this. Relationship is an important role in it. In this chapter the importance of playing relationship while reading has been brought out.",
    "In order to Variate, an actor brings the conflict which adds spice and expression in the dialogue because conflict is the key to any story. Conflict keeps it going and if the actor also take it as his duty to bring the conflict out of the dialogue, he is successful.",
    "An actor's voice is not the only instrument on stage and in front of a camera lens but is his body too. But along with the voice the body shows the correct emotion too. Only then an actor can give a complete visual performance importance of bringing the true emotions in your body and the speech.",
    "After all the preparation in language and emotion and expression through the body, the actor is now ready to do some real hard practice which is through monologue. In this chapter, practicing with monologues has been explained. What to do, what not to do, what to add has been placed.",
    "Drama and films are a teamwork. After learning all the techniques, nuances, exercises, working with monologue, an actor needs to practice with continuity. The importance of theatre has been explained in this chapter.",
    "Whatever we see on paper or on a screen is reproduction of everything which is happening around us. To be able to re-create, reproduce the script on screen, on stage, an actor must be a very good observer. How to observe, what to observe has been explained in this chapter to be professional actor.",
    "Taking the learnt skill to the next level is called Duets. Because the media is not only 'monologues', there are multiple characters in a scene and you ought to practice conversing with them too while reflecting everything and still being in the present. In this chapter this technique has been elaborated",
    "When an actor pursue acting professionally, he gets a lot of opportunities to play big roles. So getting big roles is not important while acting a scene but making an understanding with that scene is. Every scene has a purpose, there are characters who have a specific object to achieve in that scene. How to play the desired object in a scene and not overpowering other characters present in that scene has been explained in this chapter",
    "Face is the face of an actor, his eyes is his greatest asset. How to use them specifically in closeup is the key for a media actor. Also revisit of the exercises learnt till yet has been revised in this chapter.",
    "Being a good actor is not sufficient for a person to be an admirable. There are other qualities like punctuality, proper attitude, reading habits, factors which make him a remarkable personality. With these final words the module comes to an end. ",
  ],
  lessonURL: [
    "gs://myedukos-3bbec.appspot.com/Acting/Chapter1.mp4",
    "gs://myedukos-3bbec.appspot.com/Acting/Chapter2.mp4",
    "gs://myedukos-3bbec.appspot.com/Acting/Chapter3.mp4",
    "gs://myedukos-3bbec.appspot.com/Acting/Chapter4.mp4",
    "gs://myedukos-3bbec.appspot.com/Acting/chapter4A.mp4",
    "gs://myedukos-3bbec.appspot.com/Acting/chapter5.mp4",
    "gs://myedukos-3bbec.appspot.com/Acting/chapter6.mp4",
    "gs://myedukos-3bbec.appspot.com/Acting/Chapter7.mp4",
    "gs://myedukos-3bbec.appspot.com/Acting/chapter8.mp4",
    "gs://myedukos-3bbec.appspot.com/Acting/chapter8A.mp4",
    "gs://myedukos-3bbec.appspot.com/Acting/Chapter8B.mp4",
    "gs://myedukos-3bbec.appspot.com/Acting/chapter9.mp4",
    "gs://myedukos-3bbec.appspot.com/Acting/Chapter10.mp4",
    "gs://myedukos-3bbec.appspot.com/Acting/chapter11.mp4",
    "gs://myedukos-3bbec.appspot.com/Acting/Chapter12.mp4",
    "gs://myedukos-3bbec.appspot.com/Acting/chapter13.mp4",
    "gs://myedukos-3bbec.appspot.com/Acting/chapter14.mp4",
    "gs://myedukos-3bbec.appspot.com/Acting/chapter15.mp4",
    "gs://myedukos-3bbec.appspot.com/Acting/Chapter.mp4",
    "gs://myedukos-3bbec.appspot.com/Acting/Chapter17.mp4",
    "gs://myedukos-3bbec.appspot.com/Acting/chapter18.mp4",
    "gs://myedukos-3bbec.appspot.com/Acting/chapter19.mp4",
  ],
  thumbnails: [
    "gs://myedukos-3bbec.appspot.com/Acting/thumbnails/SL1.jpg",
    "gs://myedukos-3bbec.appspot.com/Acting/thumbnails/SL2.jpg",
    "gs://myedukos-3bbec.appspot.com/Acting/thumbnails/SL3.jpg",
    "gs://myedukos-3bbec.appspot.com/Acting/thumbnails/SL4.jpg",
    "gs://myedukos-3bbec.appspot.com/Acting/thumbnails/SL5.jpg",
    "gs://myedukos-3bbec.appspot.com/Acting/thumbnails/SL6.jpg",
    "gs://myedukos-3bbec.appspot.com/Acting/thumbnails/SL7.jpg",
    "gs://myedukos-3bbec.appspot.com/Acting/thumbnails/SL8.jpg",
    "gs://myedukos-3bbec.appspot.com/Acting/thumbnails/SL9.jpg",
    "gs://myedukos-3bbec.appspot.com/Acting/thumbnails/SL10.jpg",
    "gs://myedukos-3bbec.appspot.com/Acting/thumbnails/SL11.jpg",
    "gs://myedukos-3bbec.appspot.com/Acting/thumbnails/SL12.jpg",
    "gs://myedukos-3bbec.appspot.com/Acting/thumbnails/SL13.jpg",
    "gs://myedukos-3bbec.appspot.com/Acting/thumbnails/SL14.jpg",
    "gs://myedukos-3bbec.appspot.com/Acting/thumbnails/SL15.jpg",
    "gs://myedukos-3bbec.appspot.com/Acting/thumbnails/SL16.jpg",
    "gs://myedukos-3bbec.appspot.com/Acting/thumbnails/SL17.jpg",
    "gs://myedukos-3bbec.appspot.com/Acting/thumbnails/SL18.jpg",
    "gs://myedukos-3bbec.appspot.com/Acting/thumbnails/SL19.jpg",
    "gs://myedukos-3bbec.appspot.com/Acting/thumbnails/SL20.jpg",
    "gs://myedukos-3bbec.appspot.com/Acting/thumbnails/SL21.jpg",
    "gs://myedukos-3bbec.appspot.com/Acting/thumbnails/SL22.jpg",
  ],
};

module.exports = {
  instructors: {
    hritisha,
    ravindra,
    sandeep,
    swarna,
    arpit,
  },
  courses: {
    classicalSinging,
    playbackSinging,
    westernSinging,
    filmMaking,
    acting,
  },
};
