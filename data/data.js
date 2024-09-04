export const IMAGES_QUIZ = [
  {
    id: 'q1',
    sport: 'Formula',
    image: require('../assets/img/quizbg/Formula.jpg'),
    Formula: require('../assets/img/icons/FormulaPrize.png'),
    iconName: 'FormulaPrize',
  },
  {
    id: 'w1',
    sport: 'Golf',
    image: require('../assets/img/quizbg/golf1.jpg'),
    Golf: require('../assets/img/icons/GulfPrize.png'),
    iconName: 'GulfPrize',
  },
  {
    id: 'e1',
    sport: 'Rugby',
    image: require('../assets/img/quizbg/rugby.jpg'),
    Rugby: require('../assets/img/icons/RugbyPrize.png'),
    iconName: 'RugbyPrize',
  },
  {
    id: 'r1',
    sport: 'Boxing',
    image: require('../assets/img/quizbg/boxing.jpg'),
    Boxing: require('../assets/img/icons/boxingPrize.png'),
    iconName: 'boxingPrize',
  },
  {
    id: 't1',
    sport: 'UFC',
    image: require('../assets/img/quizbg/UFC.jpg'),
    UFC: require('../assets/img/icons/ufcPrize.png'),
    iconName: 'ufcPrizes',
  },
];

export const IMAGES_GUESS = [
  {
    id: 'fo1',
    sport: 'Football',
    image: require('../assets/img/quizbg/football.jpg'),
    Football: require('../assets/img/icons/footballPrize.png'),
    iconName: '',
  },
  {
    id: 'b1',
    sport: 'Basketball',
    image: require('../assets/img/quizbg/basketball.jpg'),
    Basketball: require('../assets/img/icons/basketballPrize.png'),
    iconName: '',
  },
  {
    id: 'v1',
    sport: 'Volleyball',
    image: require('../assets/img/quizbg/voleyball.jpg'),
    Volleyball: require('../assets/img/icons/volleyPrize.png'),
    iconName: '',
  },
  {
    id: 'ba1',
    sport: 'Baseball',
    image: require('../assets/img/quizbg/baseball.jpg'),
    Baseball: require('../assets/img/icons/basketballPrize.png'),
    iconName: '',
  },
  {
    id: 'ho1',
    sport: 'Hockey',
    image: require('../assets/img/quizbg/hockey2.png'),
    Hockey: require('../assets/img/icons/hockeyPrize.png'),
    iconName: '',
  },
];

export const QUIZ_DATA = [
  {
    notLocked: true,
    score: '0',
    close: false,
    id: 'q1',
    name: 'Formula',
    levelQuestions: [
      {
        interestingFact:
          "Lewis Hamilton's 2020 victory marked his seventh World Championship, trying him with Michael Schumacher for the most titles in F1 history",
        id: 'qq1',
        question: 'Who won the Formula 1 World Championship in 2020?',
        options: [
          'Lewis Hamilton',
          'Max Verstappen',
          'Sebastian Vettel',
          'Charles Leclerc',
        ],
        correctAnswer: 'Lewis Hamilton',
      },
      {
        interestingFact:
          'The Circuit de Monaco is known for its tight corners and elevation changes, making it one of the most challenging tracks in Formula 1.',
        id: 'qq2',
        question: 'Which circuit hosts the Monaco Grand Prix?',
        options: ['Silverstone', 'Monza', 'Circuit de Monaco', 'Suzuka'],
        correctAnswer: 'Circuit de Monaco',
      },
      {
        interestingFact:
          'Valtteri Bottas set the record in 2016 at the Mexican Grand Prix, reaching a top speed of 372.5 km/h.',
        id: 'qq3',
        question: 'What is the maximum speed recorded in an F1 race?',
        options: ['350 km/h', '370 km/h', '330 km/h', '340 km/h'],
        correctAnswer: '370 km/h',
      },
      {
        interestingFact:
          'Max Verstappen won the 2016 Spanish Grand Prix at just 18 years old, making him the youngest winner in F1 history.',
        id: 'qq4',
        question: 'Who is the youngest F1 race winner?',
        options: [
          'Fernando Alonso',
          'Lewis Hamilton',
          'Sebastian Vettel',
          'Max Verstappen',
        ],
        correctAnswer: 'Max Verstappen',
      },
      {
        interestingFact:
          "Ferrari has won 16 Constructors' Championships, the most in Formula 1 history, with their first title in 1961.",
        id: 'qq5',
        question: "Which team has the most Constructors' Championships?",
        options: ['Ferrari', 'Mercedes', 'McLaren', 'Red Bull'],
        correctAnswer: 'Ferrari',
      },
      {
        interestingFact:
          'Lewis Hamilton has over 100 pole positions, far surpassing the previous record held by Ayrton Senna and Michael Schumacher.',
        id: 'qq6',
        question: 'Who holds the record for the most pole positions?',
        options: [
          'Ayrton Senna',
          'Michael Schumacher',
          'Lewis Hamilton',
          'Alain Prost',
        ],
        correctAnswer: 'Lewis Hamilton',
      },
      {
        interestingFact:
          'Suzuka is one of the few circuits in the world with a figure-eight layout, adding to its unique challenge.',
        id: 'qq7',
        question: 'Which country hosts the Suzuka Circuit?',
        options: ['China', 'Japan', 'Malaysia', 'South Korea'],
        correctAnswer: 'Japan',
      },
      {
        interestingFact:
          'The Prancing Horse logo was inspired by the emblem of an Italian World War I pilot, Count Francesco Baracca.',
        id: 'qq8',
        question: "What is the nickname of Ferrari's F1 team?",
        options: [
          'The Silver Arrows',
          'The Prancing Horse',
          'The Red Bull',
          'The Flying Scots',
        ],
        correctAnswer: 'The Prancing Horse',
      },
      {
        interestingFact:
          'The rivalry between Senna and Prost was one of the most intense in F1 history, highlighted by their clashes in the late 1980s and early 1990s.',
        id: 'qq9',
        question: "Who was Ayrton Senna's biggest rival in F1?",
        options: [
          'Nigel Mansell',
          'Alain Prost',
          'Nelson Piquet',
          'Niki Lauda',
        ],
        correctAnswer: 'Alain Prost',
      },
      {
        interestingFact:
          "The Halo was controversial when first introduced, but it has since been credited with saving several drivers' lives.",
        id: 'qq10',
        question: 'In which year did F1 introduce the Halo safety device?',
        options: ['2015', '2017', '2018', '2019'],
        correctAnswer: '2018',
      },
    ],
  },
  {
    notLocked: false,
    score: '0',
    close: false,
    id: 'w1',
    name: 'Golf',
    levelQuestions: [
      {
        interestingFact:
          'Jack Nicklaus has won 18 major championships, more than any other golfer in history.',
        id: 'gq1',
        question: 'Who is the golfer with the most major championships?',
        options: [
          'Tiger Woods',
          'Jack Nicklaus',
          'Arnold Palmer',
          'Gary Player',
        ],
        correctAnswer: 'Jack Nicklaus',
      },
      {
        interestingFact:
          'The term "birdie" originated in the United States and dates back to the early 20th century.',
        id: 'gq2',
        question: 'What is the term for scoring one stroke under par?',
        options: ['Eagle', 'Birdie', 'Par', 'Bogey'],
        correctAnswer: 'Birdie',
      },
      {
        interestingFact:
          'Augusta National is famous for its azaleas and Magnolia Lane, as well as the iconic green jacket awarded to the Masters winner.',
        id: 'gq3',
        question: 'Which golf course hosts The Masters Tournament?',
        options: [
          'Pebble Beach',
          'St Andrews',
          'Augusta National',
          'Pinehurst',
        ],
        correctAnswer: 'Augusta National',
      },
      {
        interestingFact:
          'Bobby Jones completed the grand slam in 1930, winning the U.S. Open, The Open Championship, the U.S. Amateur, and the British Amateur.',
        id: 'gq4',
        question:
          'Who is the only golfer to complete a "grand slam" in a single calendar year?',
        options: ['Ben Hogan', 'Tiger Woods', 'Bobby Jones', 'Sam Snead'],
        correctAnswer: 'Bobby Jones',
      },
      {
        interestingFact:
          'The 14-club rule has been in place since 1938, implemented to prevent players from carrying too many specialized clubs.',
        id: 'gq5',
        question:
          'What is the maximum number of clubs a golfer can carry in their bag during a round?',
        options: ['10', '12', '14', '16'],
        correctAnswer: '14',
      },
      {
        interestingFact:
          'Tiger Woods held all four major championships simultaneously in 2000-2001, a feat known as the "Tiger Slam."',
        id: 'gq6',
        question: 'Who won the "Tiger Slam"?',
        options: [
          'Phil Mickelson',
          'Rory McIlroy',
          'Tiger Woods',
          'Jordan Spieth',
        ],
        correctAnswer: 'Tiger Woods',
      },
      {
        interestingFact:
          'The game of golf originated in Scotland in the 15th century, with the Old Course at St Andrews being the oldest golf course in the world.',
        id: 'gq7',
        question: 'Which country is the birthplace of golf?',
        options: ['United States', 'Scotland', 'England', 'Ireland'],
        correctAnswer: 'Scotland',
      },
      {
        interestingFact:
          'An albatross, or double eagle, is one of the rarest achievements in golf and is significantly more uncommon than a hole-in-one.',
        id: 'gq8',
        question: 'What is the term for a hole-in-one on a par five?',
        options: ['Double Eagle', 'Albatross', 'Eagle', 'Birdie'],
        correctAnswer: 'Albatross',
      },
      {
        interestingFact:
          "Nick Faldo has won a record 23 Ryder Cup matches for Team Europe, making him the most successful player in the competition's history.",
        id: 'gq9',
        question: 'Who has won the most Ryder Cup matches?',
        options: [
          'Nick Faldo',
          'Seve Ballesteros',
          'Arnold Palmer',
          'Sergio Garcia',
        ],
        correctAnswer: 'Nick Faldo',
      },
      {
        interestingFact:
          'The standard diameter of 4.25 inches was set by the Royal and Ancient Golf Club of St Andrews in 1891 and has remained unchanged since.',
        id: 'gq10',
        question: 'What is the diameter of a golf hole?',
        options: ['3.5 inches', '4.25 inches', '4 inches', '4.5 inches'],
        correctAnswer: '4.25 inches',
      },
    ],
  },
  {
    notLocked: false,
    score: '0',
    close: false,
    id: 'e1',
    name: 'Rugby',
    levelQuestions: [
      {
        interestingFact:
          'New Zealand has won the Rugby World Cup three times (1987, 2011, 2015), and is known for its haka, a traditional Maori war dance performed before matches.',
        id: 'wq1',
        question: 'Which country has won the most Rugby World Cups?',
        options: ['England', 'Australia', 'New Zealand', 'South Africa'],
        correctAnswer: 'New Zealand',
      },
      {
        interestingFact:
          'The try is worth 5 points, and after scoring, the team has the opportunity to kick for an additional 2 points with a conversion.',
        id: 'wq2',
        question:
          'What is the maximum number of points a try is worth in rugby?',
        options: ['3', '5', '6', '7'],
        correctAnswer: '5',
      },
      {
        interestingFact:
          'The Springboks are known for their physical style of play and have won the Rugby World Cup three times.',
        id: 'wq3',
        question: 'Which rugby team is known as the "Springboks"?',
        options: ['England', 'Australia', 'South Africa', 'Ireland'],
        correctAnswer: 'South Africa',
      },
      {
        interestingFact:
          'Both Jonah Lomu of New Zealand and Bryan Habana of South Africa have scored 15 tries each in Rugby World Cup tournaments.',
        id: 'wq4',
        question: 'Who is the all-time top try scorer in Rugby World Cups?',
        options: [
          'Jonah Lomu',
          'Bryan Habana',
          'Daisuke Ohata',
          'Jonah Lomu and Bryan Habana',
        ],
        correctAnswer: 'Jonah Lomu and Bryan Habana',
      },
      {
        interestingFact:
          'The Six Nations is the oldest rugby championship, dating back to 1883 when it was initially known as the Home Nations Championship.',
        id: 'wq5',
        question:
          'What is the name of the international rugby competition between England, Scotland, Wales, Ireland, France, and Italy?',
        options: [
          'Tri-Nations',
          'Six Nations',
          'Rugby Championship',
          'Bledisloe Cup',
        ],
        correctAnswer: 'Six Nations',
      },
      {
        interestingFact:
          'The fly-half is crucial in directing the game and is often responsible for decision-making during play.',
        id: 'wq6',
        question: 'Which position wears the number 10 jersey in rugby?',
        options: ['Scrum-half', 'Full-back', 'Fly-half', 'Hooker'],
        correctAnswer: 'Fly-half',
      },
      {
        interestingFact:
          "World Rugby, the sport's governing body, is based in Dublin and oversees the laws of the game and global rugby tournaments.",
        id: 'qq7',
        question: 'Where is the headquarters of World Rugby located?',
        options: [
          'Sydney, Australia',
          'Dublin, Ireland',
          'London, England',
          'Wellington, New Zealand',
        ],
        correctAnswer: 'Dublin, Ireland',
      },
      {
        interestingFact:
          'The Webb Ellis Cup is named after William Webb Ellis, who is often credited with inventing the game of rugby by picking up a football and running with it during a school match.',
        id: 'wq8',
        question:
          'What is the trophy awarded to the winner of the Rugby World Cup called?',
        options: [
          'Webb Ellis Cup',
          'William Webb Cup',
          'Rugby Championship Trophy',
          'Bledisloe Cup',
        ],
        correctAnswer: 'Webb Ellis Cup',
      },
      {
        interestingFact:
          'The All Blacks perform the haka, a traditional Maori challenge, before every match, a ritual that has become one of the most iconic sights in sports.',
        id: 'wq9',
        question:
          'Which rugby team is known for performing the "haka" before their matches?',
        options: ['Australia', 'New Zealand', 'Fiji', 'Samoa'],
        correctAnswer: 'New Zealand',
      },
      {
        interestingFact:
          'A rugby union match is 80 minutes long, divided into two halves of 40 minutes each, with injury time added at the discretion of the referee.',
        id: 'wq10',
        question: 'How long is a standard rugby union match?',
        options: ['60 minutes', '70 minutes', '80 minutes', '90 minutes'],
        correctAnswer: '80 minutes',
      },
    ],
  },
  {
    notLocked: false,
    score: '0',
    close: false,
    id: 'r1',
    name: 'Boxing',
    levelQuestions: [
      {
        interestingFact:
          'Muhammad Ali was not only known for his incredible skill in the ring but also for his charismatic personality and strong stance on social issues.',
        id: 'eq1',
        question: 'Who is considered the "Greatest of All Time" in boxing?',
        options: [
          'Muhammad Ali',
          'Mike Tyson',
          'Floyd Mayweather',
          'Sugar Ray Leonard',
        ],
        correctAnswer: 'Muhammad Ali',
      },
      {
        interestingFact:
          'Becoming an undisputed champion is a rare achievement in boxing, as it requires holding all four major titles in a weight division simultaneously.',
        id: 'eq2',
        question:
          'What is the term for a boxer who wins all four major world titles (WBA, WBC, IBF, WBO)?',
        options: [
          'Unified Champion',
          'Undisputed Champion',
          'Lineal Champion',
          'World Champion',
        ],
        correctAnswer: 'Undisputed Champion',
      },
      {
        interestingFact:
          "Archie Moore, known as 'The Mongoose,' scored 131 knockouts in his career, the most in boxing history.",
        id: 'eq3',
        question:
          'Who holds the record for the most knockouts in professional boxing?',
        options: [
          'Mike Tyson',
          'Sugar Ray Robinson',
          'Archie Moore',
          'George Foreman',
        ],
        correctAnswer: 'Archie Moore',
      },
      {
        interestingFact:
          'The heavyweight division is the highest weight class in professional boxing, with no upper weight limit.',
        id: 'eq4',
        question:
          'What weight class is also known as the "Heavyweight" division?',
        options: ['154 lbs', '160 lbs', '175 lbs', '200+ lbs'],
        correctAnswer: '200+ lbs',
      },
      {
        interestingFact:
          "Buster Douglas' victory over Tyson in 1990 is considered one of the biggest upsets in boxing history.",
        id: 'eq5',
        question:
          'Who was the first boxer to defeat Mike Tyson in his professional career?',
        options: [
          'Evander Holyfield',
          'Lennox Lewis',
          'James "Buster" Douglas',
          'Larry Holmes',
        ],
        correctAnswer: 'James "Buster" Douglas',
      },
      {
        interestingFact:
          'The hook is a powerful punch that, when landed correctly, can lead to a knockout by targeting the side of the head.',
        id: 'eq6',
        question:
          'What is the name of the punch that lands to the side of the head, near the ear?',
        options: ['Jab', 'Cross', 'Uppercut', 'Hook'],
        correctAnswer: 'Hook',
      },
      {
        interestingFact:
          'Amanda Serrano has won titles in seven weight classes, making her one of the most decorated female boxers in history.',
        id: 'eq7',
        question:
          'Who was the first female boxer to win titles in five different weight classes?',
        options: [
          'Laila Ali',
          'Ann Wolfe',
          'Cecilia Brækhus',
          'Amanda Serrano',
        ],
        correctAnswer: 'Amanda Serrano',
      },
      {
        interestingFact:
          'Roy Jones Jr. is the only boxer in history to start his career at light middleweight and go on to win a heavyweight title.',
        id: 'eq8',
        question:
          'What does the "R" in RJJ stand for in boxing legend Roy Jones Jr.\'s name?',
        options: ['Richard', 'Robert', 'Roy', 'Roger'],
        correctAnswer: 'Roy',
      },
      {
        interestingFact:
          'An undefeated record is highly prized in boxing, with Floyd Mayweather famously retiring with a 50-0 record.',
        id: 'eq9',
        question: 'What is the term for a boxer with an unbeaten record?',
        options: ['Champion', 'Contender', 'Undefeated', 'Challenger'],
        correctAnswer: 'Undefeated',
      },
      {
        interestingFact:
          'The International Boxing Hall of Fame is located in Canastota, New York, and honors the greatest boxers and contributors to the sport.',
        id: 'eq10',
        question:
          'In which city is the International Boxing Hall of Fame located?',
        options: ['Las Vegas', 'New York City', 'Canastota', 'Los Angeles'],
        correctAnswer: 'Canastota',
      },
    ],
  },
  {
    notLocked: false,
    score: '0',
    close: false,
    id: 't1',
    name: 'UFC',
    levelQuestions: [
      {
        interestingFact:
          'Conor McGregor held both the Featherweight and Lightweight titles at the same time in 2016, becoming the first fighter in UFC history to do so.',
        id: 'tq1',
        question:
          'Who was the first UFC fighter to hold two belts simultaneously?',
        options: [
          'Georges St-Pierre',
          'Jon Jones',
          'Daniel Cormier',
          'Conor McGregor',
        ],
        correctAnswer: 'Conor McGregor',
      },
      {
        interestingFact:
          "Khabib's ground-and-pound is known for being relentless and is a key component of his undefeated record.",
        id: 'tq2',
        question:
          'What is the signature move of UFC fighter Khabib Nurmagomedov?',
        options: [
          'Triangle Choke',
          'Rear-Naked Choke',
          'Guillotine',
          'Ground-and-Pound',
        ],
        correctAnswer: 'Ground-and-Pound',
      },
      {
        interestingFact:
          "Ronda Rousey made history by headlining the first women's fight in UFC at UFC 157, where she defended her Bantamweight title.",
        id: 'tq3',
        question: 'Who was the first woman to fight in the UFC?',
        options: ['Ronda Rousey', 'Amanda Nunes', 'Miesha Tate', 'Holly Holm'],
        correctAnswer: 'Ronda Rousey',
      },
      {
        interestingFact:
          'Anderson Silva held the UFC Middleweight title for nearly 7 years, the longest title reign in UFC history.',
        id: 'tq4',
        question: 'Which UFC fighter is nicknamed "The Spider"?',
        options: [
          'Anderson Silva',
          'Israel Adesanya',
          'Lyoto Machida',
          'Vitor Belfort',
        ],
        correctAnswer: 'Anderson Silva',
      },
      {
        interestingFact:
          'The UFC initially focused on open-weight tournaments but introduced the Heavyweight division as the first official weight class.',
        id: 'tq5',
        question: 'What was the first weight class introduced in the UFC?',
        options: ['Lightweight', 'Welterweight', 'Heavyweight', 'Middleweight'],
        correctAnswer: 'Heavyweight',
      },
      {
        interestingFact:
          'Cain Velasquez defeated Brock Lesnar at UFC 121, becoming the first Mexican-American to win a major MMA heavyweight title.',
        id: 'tq6',
        question:
          'Who defeated Brock Lesnar to win the UFC Heavyweight Championship?',
        options: [
          'Cain Velasquez',
          'Frank Mir',
          'Shane Carwin',
          'Junior dos Santos',
        ],
        correctAnswer: 'Cain Velasquez',
      },
      {
        interestingFact:
          "Demetrious 'Mighty Mouse' Johnson defended his Flyweight title a record 11 times, making him one of the most dominant champions in UFC history.",
        id: 'tq7',
        question: 'Who is the longest-reigning UFC Flyweight Champion?',
        options: [
          'Henry Cejudo',
          'Demetrious Johnson',
          'Joseph Benavidez',
          'Brandon Moreno',
        ],
        correctAnswer: 'Demetrious Johnson',
      },
      {
        interestingFact:
          'The UFC was founded in 1993 as a tournament to determine the most effective martial art, but it has since evolved into a global MMA phenomenon.',
        id: 'tq8',
        question: 'In which year was the UFC founded?',
        options: ['1991', '1993', '1995', '1997'],
        correctAnswer: '1993',
      },
      {
        interestingFact:
          'Royce Gracie was inducted into the UFC Hall of Fame in 2003, recognizing his influence in proving the effectiveness of Brazilian Jiu-Jitsu.',
        id: 'tq9',
        question: 'Who was the first UFC Hall of Famer?',
        options: [
          'Royce Gracie',
          'Chuck Liddell',
          'Randy Couture',
          'Tito Ortiz',
        ],
        correctAnswer: 'Royce Gracie',
      },
      {
        interestingFact:
          'The Octagon design was chosen to ensure fighter safety and reduce the likelihood of fighters being trapped in corners.',
        id: 'tq10',
        question:
          "What is the name of the UFC's signature octagonal fighting ring?",
        options: ['The Cage', 'The Pit', 'The Octagon', 'The Arena'],
        correctAnswer: 'The Octagon',
      },
    ],
  },
];

export const MATCH_DATA = [
  {
    notLocked: true,
    score: '0',
    task: 'Choose the right coach of football club ',
    name: 'Football',
    id: 'fo1',
    levelQuestions: [
      {
        options: [
          {
            club: 'Liverpool',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/640px-Liverpool_FC.svg.png',
          },
          {
            club: 'Real Madrid',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvstryYp8XR5PpzQ1EbePtHWurZqEqHxRuow&s',
          },
          {
            club: 'Manchester City',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/800px-Manchester_City_FC_badge.svg.png',
          },
        ],
        answer: {person: 'Pep Guardiola', club: 'Manchester City'},
      },
      {
        options: [
          {
            club: 'Inter Milan',
            image:
              'https://upload.wikimedia.org/wikipedia/uk/4/4d/FCInterMilan2021.png',
          },
          {
            club: 'Liverpool',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/640px-Liverpool_FC.svg.png',
          },
          {
            club: 'Chelsea',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png',
          },
        ],
        answer: {person: 'Jürgen Klopp', club: 'Liverpool'},
      },
      {
        options: [
          {
            club: 'Juventus',
            image:
              'https://imageio.forbes.com/i-forbesimg/media/lists/teams/juventus_416x416.jpg?format=jpg',
          },
          {
            club: 'Real Madrid',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvstryYp8XR5PpzQ1EbePtHWurZqEqHxRuow&s',
          },
          {
            club: 'Bayern Munich',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/800px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png',
          },
        ],
        answer: {person: 'Carlo Ancelotti', club: 'Real Madrid'},
      },
      {
        options: [
          {
            club: 'Inter Milan',
            image:
              'https://upload.wikimedia.org/wikipedia/uk/4/4d/FCInterMilan2021.png',
          },
          {
            club: 'Liverpool',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/640px-Liverpool_FC.svg.png',
          },
          {
            club: 'Arsenal',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png',
          },
        ],
        answer: {person: 'Mikel Arteta ', club: 'Arsenal'},
      },
      {
        options: [
          {
            club: 'FC Barcelona',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png',
          },
          {
            club: 'Atlético Madrid',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Atletico_Madrid_Logo_2024.svg/1200px-Atletico_Madrid_Logo_2024.svg.png',
          },
          {
            club: 'Arsenal',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png',
          },
        ],
        answer: {person: 'Xavi Hernández', club: 'FC Barcelona'},
      },
      {
        options: [
          {
            club: 'Manchester City',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/800px-Manchester_City_FC_badge.svg.png',
          },
          {
            club: 'Atlético Madrid',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Atletico_Madrid_Logo_2024.svg/1200px-Atletico_Madrid_Logo_2024.svg.png',
          },
          {
            club: 'Bayern Munich',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/800px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png',
          },
        ],
        answer: {person: 'Thomas Tuchel', club: 'Bayern Munich'},
      },
      {
        options: [
          {
            club: 'Manchester City',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/800px-Manchester_City_FC_badge.svg.png',
          },
          {
            club: 'Inter Milan',
            image:
              'https://upload.wikimedia.org/wikipedia/uk/4/4d/FCInterMilan2021.png',
          },
          {
            club: 'Juventus',
            image:
              'https://imageio.forbes.com/i-forbesimg/media/lists/teams/juventus_416x416.jpg?format=jpg',
          },
        ],
        answer: {person: 'Simone Inzaghi', club: 'Inter Milan'},
      },
      {
        options: [
          {
            club: 'Atlético Madrid',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Atletico_Madrid_Logo_2024.svg/1200px-Atletico_Madrid_Logo_2024.svg.png',
          },
          {
            club: 'Juventus',
            image:
              'https://imageio.forbes.com/i-forbesimg/media/lists/teams/juventus_416x416.jpg?format=jpg',
          },
          {
            club: 'Inter Milan',
            image:
              'https://upload.wikimedia.org/wikipedia/uk/4/4d/FCInterMilan2021.png',
          },
        ],
        answer: {person: 'Diego Simeone', club: 'Atlético Madrid'},
      },
      {
        options: [
          {
            club: 'FC Barcelona',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png',
          },
          {
            club: 'Chelsea',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png',
          },
          {
            club: 'Manchester City',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/800px-Manchester_City_FC_badge.svg.png',
          },
        ],
        answer: {person: 'Mauricio Pochettino', club: 'Chelsea'},
      },
      {
        options: [
          {
            club: 'Bayern Munich',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/800px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png',
          },
          {
            club: 'Arsenal',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png',
          },
          {
            club: 'Juventus',
            image:
              'https://imageio.forbes.com/i-forbesimg/media/lists/teams/juventus_416x416.jpg?format=jpg',
          },
        ],
        answer: {person: 'Massimiliano Allegri', club: 'Juventus'},
      },
    ],
  },
  {
    notLocked: false,
    score: '0',
    task: 'Choose the right player of football club',
    name: 'Basketball',
    id: 'b1',
    levelQuestions: [
      {
        options: [
          {
            club: 'Boston Celtics',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXCX1lht9mOcDqiNI8Tg1IkkJnG_LnIxsc2w&s',
          },
          {
            club: 'Los Angeles Lakers',
            image:
              'https://seeklogo.com/images/L/los-angeles-lakers-logo-805BBEB14F-seeklogo.com.png',
          },
          {
            club: 'Phoenix Suns',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhyZdwUEaD675rVLNGOx7XpNCkXTeHiGf0aw&s',
          },
        ],
        answer: {person: 'LeBron James', club: 'Los Angeles Lakers'},
      },
      {
        options: [
          {
            club: 'Golden State Warriors',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxfY3OJxOojGPzBhhRp5tJ8OmrzNuvY0f_0Q&s',
          },
          {
            club: 'Denver Nuggets',
            image:
              'https://logowik.com/content/uploads/images/denver-nuggets5185.jpg',
          },
          {
            club: 'Milwaukee Bucks',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Milwaukee_Bucks_logo.svg/640px-Milwaukee_Bucks_logo.svg.png',
          },
        ],
        answer: {person: 'Stephen Curry', club: 'Golden State Warriors'},
      },
      {
        options: [
          {
            club: 'Philadelphia 76ers',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Philadelphia_76ers_logo.svg/1200px-Philadelphia_76ers_logo.svg.png',
          },
          {
            club: 'Miami Heat',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhBSLpOPTRhHUURdhGPGT6eOv1Mn2IIaNkIw&s',
          },
          {
            club: 'Phoenix Suns',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhyZdwUEaD675rVLNGOx7XpNCkXTeHiGf0aw&s',
          },
        ],
        answer: {person: 'Kevin Durant', club: 'Phoenix Suns'},
      },
      {
        options: [
          {
            club: 'Denver Nuggets',
            image:
              'https://logowik.com/content/uploads/images/denver-nuggets5185.jpg',
          },
          {
            club: 'Dallas Mavericks',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Dallas_Mavericks_logo.svg/640px-Dallas_Mavericks_logo.svg.png',
          },
          {
            club: 'Boston Celtics',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXCX1lht9mOcDqiNI8Tg1IkkJnG_LnIxsc2w&s',
          },
        ],
        answer: {person: 'Luka Dončić', club: 'Dallas Mavericks'},
      },
      {
        options: [
          {
            club: 'Los Angeles Clippers',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Los_Angeles_Clippers_%282024%29.svg/1200px-Los_Angeles_Clippers_%282024%29.svg.png',
          },
          {
            club: 'Philadelphia 76ers',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Philadelphia_76ers_logo.svg/1200px-Philadelphia_76ers_logo.svg.png',
          },
          {
            club: 'Milwaukee Bucks',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Milwaukee_Bucks_logo.svg/640px-Milwaukee_Bucks_logo.svg.png',
          },
        ],
        answer: {person: 'Giannis Antetokounmpo', club: 'Milwaukee Bucks'},
      },
      {
        options: [
          {
            club: 'Boston Celtics',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXCX1lht9mOcDqiNI8Tg1IkkJnG_LnIxsc2w&s',
          },
          {
            club: 'Denver Nuggets',
            image:
              'https://logowik.com/content/uploads/images/denver-nuggets5185.jpg',
          },
          {
            club: 'Miami Heat',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhBSLpOPTRhHUURdhGPGT6eOv1Mn2IIaNkIw&s',
          },
        ],
        answer: {person: 'Nikola Jokić', club: 'Denver Nuggets'},
      },
      {
        options: [
          {
            club: 'Boston Celtics',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXCX1lht9mOcDqiNI8Tg1IkkJnG_LnIxsc2w&s',
          },
          {
            club: 'Dallas Mavericks',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Dallas_Mavericks_logo.svg/640px-Dallas_Mavericks_logo.svg.png',
          },
          {
            club: 'Golden State Warriors',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxfY3OJxOojGPzBhhRp5tJ8OmrzNuvY0f_0Q&s',
          },
        ],
        answer: {person: 'Jayson Tatum', club: 'Boston Celtics'},
      },
      {
        options: [
          {
            club: 'Los Angeles Clippers',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Los_Angeles_Clippers_%282024%29.svg/1200px-Los_Angeles_Clippers_%282024%29.svg.png',
          },
          {
            club: 'Denver Nuggets',
            image:
              'https://logowik.com/content/uploads/images/denver-nuggets5185.jpg',
          },
          {
            club: 'Los Angeles Lakers',
            image:
              'https://seeklogo.com/images/L/los-angeles-lakers-logo-805BBEB14F-seeklogo.com.png',
          },
        ],
        answer: {person: 'Kawhi Leonard', club: 'Los Angeles Clippers'},
      },
      {
        options: [
          {
            club: 'Miami Heat',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhBSLpOPTRhHUURdhGPGT6eOv1Mn2IIaNkIw&s',
          },
          {
            club: 'Phoenix Suns',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhyZdwUEaD675rVLNGOx7XpNCkXTeHiGf0aw&s',
          },
          {
            club: 'Los Angeles Clippers',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Los_Angeles_Clippers_%282024%29.svg/1200px-Los_Angeles_Clippers_%282024%29.svg.png',
          },
        ],
        answer: {person: 'Jimmy Butler', club: 'Miami Heat'},
      },
      {
        options: [
          {
            club: 'Milwaukee Bucks',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Milwaukee_Bucks_logo.svg/640px-Milwaukee_Bucks_logo.svg.png',
          },
          {
            club: 'Philadelphia 76ers',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Philadelphia_76ers_logo.svg/1200px-Philadelphia_76ers_logo.svg.png',
          },
          {
            club: 'Phoenix Suns',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhyZdwUEaD675rVLNGOx7XpNCkXTeHiGf0aw&s',
          },
        ],
        answer: {person: 'Joel Embiid', club: 'Philadelphia 76ers'},
      },
    ],
  },
  {
    notLocked: false,
    score: '0',
    task: 'Who is a coach of specific football team',
    name: 'Volleyball',
    id: 'v1',
    levelQuestions: [
      {
        options: [
          {
            club: "Brazil Men's National Team",
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brazil_National_Football_Team_%28no_stars%29.svg/1200px-Brazil_National_Football_Team_%28no_stars%29.svg.png',
          },
          {
            club: "USA Men's National Team",
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqsfceTlDHXwovr6OijQY4riGiMSaq3JpUDA&s',
          },
          {
            club: "Germany Men's National Team",
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKo9tRPkKp2xBWaVFeTnF2j4eSifv3wBwZWA&s',
          },
        ],
        answer: {person: 'Karch Kiraly', club: "USA Women's National Team"},
      },
      {
        options: [
          {
            club: "Brazil Men's National Team",
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brazil_National_Football_Team_%28no_stars%29.svg/1200px-Brazil_National_Football_Team_%28no_stars%29.svg.png',
          },
          {
            club: "Türkiye Women's National Team",
            image:
              'https://w7.pngwing.com/pngs/503/965/png-transparent-turkey-national-football-team-turkey-women-s-national-football-team-iran-national-football-team-the-uefa-european-football-championship-football.png',
          },
          {
            club: "Poland Men's National Team",
            image:
              'https://w7.pngwing.com/pngs/405/127/png-transparent-2018-fifa-world-cup-poland-national-football-team-england-national-football-team-polish-football-association-world-cup-team-text-team-logo.png',
          },
        ],
        answer: {
          person: 'Giovanni Guidetti',
          club: "Türkiye Women's National Team",
        },
      },
      {
        options: [
          {
            club: "USA Men's National Team",
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqsfceTlDHXwovr6OijQY4riGiMSaq3JpUDA&s',
          },
          {
            club: "Germany Men's National Team",
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKo9tRPkKp2xBWaVFeTnF2j4eSifv3wBwZWA&s',
          },
          {
            club: "Brazil Men's National Team",
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Brazilian_Football_Confederation_logo.svg/1200px-Brazilian_Football_Confederation_logo.svg.png',
          },
        ],
        answer: {person: 'Andrea Giani', club: "Germany Men's National Team"},
      },
      {
        options: [
          {
            club: "Serbia Women's National Team",
            image:
              'https://upload.wikimedia.org/wikipedia/en/a/ac/Grb_fudbalske_reprezentacije_Srbije.png',
          },
          {
            club: "Italy Women's National Team",
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBoXI9UIRV-NhsqbuMoETJmZTgPjywSNWLMg&s',
          },
          {
            club: "Türkiye Women's National Team",
            image:
              'https://w7.pngwing.com/pngs/503/965/png-transparent-turkey-national-football-team-turkey-women-s-national-football-team-iran-national-football-team-the-uefa-european-football-championship-football.png',
          },
        ],
        answer: {
          person: 'Lorenzo Bernardi',
          club: "Italy Women's National Team",
        },
      },
      {
        options: [
          {
            club: "Serbia Women's National Team",
            image:
              'https://upload.wikimedia.org/wikipedia/en/a/ac/Grb_fudbalske_reprezentacije_Srbije.png',
          },
          {
            club: "USA Women's National Team",
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/United_States_women%27s_national_soccer_team_logo.svg/800px-United_States_women%27s_national_soccer_team_logo.svg.png',
          },
          {
            club: "Brazil Women's National Team",
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brazil_National_Football_Team_%28no_stars%29.svg/1200px-Brazil_National_Football_Team_%28no_stars%29.svg.png',
          },
        ],
        answer: {
          person: 'Bernardo Rezende (Bernardinho) ',
          club: "Brazil Women's National Team",
        },
      },
      {
        options: [
          {
            club: "USA Men's National Team",
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqsfceTlDHXwovr6OijQY4riGiMSaq3JpUDA&s',
          },
          {
            club: "Brazil Men's National Team",
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Brazilian_Football_Confederation_logo.svg/1200px-Brazilian_Football_Confederation_logo.svg.png',
          },
          {
            club: "Poland Men's National Team",
            image:
              'https://w7.pngwing.com/pngs/405/127/png-transparent-2018-fifa-world-cup-poland-national-football-team-england-national-football-team-polish-football-association-world-cup-team-text-team-logo.png',
          },
        ],
        answer: {person: 'John Speraw', club: "USA Men's National Team"},
      },
      {
        options: [
          {
            club: "France Men's National Team",
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5xsRF1U1JwM65_D2GIEXl8v37VR-8PNHhYA&s',
          },
          {
            club: "USA Women's National Team",
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/United_States_women%27s_national_soccer_team_logo.svg/800px-United_States_women%27s_national_soccer_team_logo.svg.png',
          },
          {
            club: "Brazil Men's National Team",
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Brazilian_Football_Confederation_logo.svg/1200px-Brazilian_Football_Confederation_logo.svg.png',
          },
        ],
        answer: {person: 'Laurent Tillie', club: "France Men's National Team"},
      },
      {
        options: [
          {
            club: "Italy Women's National Team",
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBoXI9UIRV-NhsqbuMoETJmZTgPjywSNWLMg&s',
          },
          {
            club: "Serbia Women's National Team",
            image:
              'https://upload.wikimedia.org/wikipedia/en/a/ac/Grb_fudbalske_reprezentacije_Srbije.png',
          },
          {
            club: "France Men's National Team",
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5xsRF1U1JwM65_D2GIEXl8v37VR-8PNHhYA&s',
          },
        ],
        answer: {
          person: 'Daniele Santarelli',
          club: "Serbia Women's National Team",
        },
      },
      {
        options: [
          {
            club: "Poland Men's National Team",
            image:
              'https://w7.pngwing.com/pngs/405/127/png-transparent-2018-fifa-world-cup-poland-national-football-team-england-national-football-team-polish-football-association-world-cup-team-text-team-logo.png',
          },
          {
            club: "France Men's National Team",
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5xsRF1U1JwM65_D2GIEXl8v37VR-8PNHhYA&s',
          },
          {
            club: "Serbia Women's National Team",
            image:
              'https://upload.wikimedia.org/wikipedia/en/a/ac/Grb_fudbalske_reprezentacije_Srbije.png',
          },
        ],
        answer: {person: 'Vital Heynen', club: "Poland Men's National Team"},
      },
      {
        options: [
          {
            club: "USA Men's National Team",
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqsfceTlDHXwovr6OijQY4riGiMSaq3JpUDA&s',
          },
          {
            club: "Poland Men's National Team",
            image:
              'https://w7.pngwing.com/pngs/405/127/png-transparent-2018-fifa-world-cup-poland-national-football-team-england-national-football-team-polish-football-association-world-cup-team-text-team-logo.png',
          },
          {
            club: "Brazil Men's National Team",
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Brazilian_Football_Confederation_logo.svg/1200px-Brazilian_Football_Confederation_logo.svg.png',
          },
        ],
        answer: {
          person: 'José Roberto Guimarães (Zé Roberto)',
          club: "Brazil Men's National Team",
        },
      },
    ],
  },
  {
    notLocked: false,
    score: '0',
    task: 'Match the player with baseball club',
    name: 'Baseball',
    id: 'ba1',
    levelQuestions: [
      {
        options: [
          {
            club: 'Los Angeles Angels',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Los_Angeles_Angels_of_Anaheim_Insignia.svg/2048px-Los_Angeles_Angels_of_Anaheim_Insignia.svg.png',
          },
          {
            club: 'New York Yankees',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/New_York_Yankees_logo.svg/1200px-New_York_Yankees_logo.svg.png',
          },
          {
            club: 'Toronto Blue Jays',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZfcpbz3QOA1bzFtCcweMISwKPEE6c8dne1w&s',
          },
        ],
        answer: {person: 'Aaron Judge', club: 'New York Yankees'},
      },
      {
        options: [
          {
            club: 'Los Angeles Dodgers',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/LA_Dodgers.svg/2048px-LA_Dodgers.svg.png',
          },
          {
            club: 'Philadelphia Phillies',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Philadelphia_Phillies_%282019%29_logo.svg/1200px-Philadelphia_Phillies_%282019%29_logo.svg.png',
          },
          {
            club: 'Houston Astros',
            image:
              'https://logos-world.net/wp-content/uploads/2020/05/Houston-Astros-Logo-2013-Present.png',
          },
        ],
        answer: {person: 'Mookie Betts', club: 'Los Angeles Dodgers'},
      },
      {
        options: [
          {
            club: 'Texas Rangers',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/d/d3/Texas_Rangers_logo.png',
          },
          {
            club: 'Los Angeles Dodgers',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/LA_Dodgers.svg/2048px-LA_Dodgers.svg.png',
          },
          {
            club: 'Los Angeles Angels',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Los_Angeles_Angels_of_Anaheim_Insignia.svg/2048px-Los_Angeles_Angels_of_Anaheim_Insignia.svg.png',
          },
        ],
        answer: {person: 'Shohei Ohtani', club: 'Los Angeles Angels'},
      },
      {
        options: [
          {
            club: 'Los Angeles Dodgers',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/LA_Dodgers.svg/2048px-LA_Dodgers.svg.png',
          },
          {
            club: 'New York Yankees',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/New_York_Yankees_logo.svg/1200px-New_York_Yankees_logo.svg.png',
          },
          {
            club: 'Los Angeles Angels',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Los_Angeles_Angels_of_Anaheim.svg/640px-Los_Angeles_Angels_of_Anaheim.svg.png',
          },
        ],
        answer: {person: 'Mike Trout', club: 'Los Angeles Angels'},
      },
      {
        options: [
          {
            club: 'Houston Astros',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiCUAyxISC_OkonVO1mpkL7aXHm_8kH9gT_A&s',
          },
          {
            club: 'Texas Rangers',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/d/d3/Texas_Rangers_logo.png',
          },
          {
            club: 'Philadelphia Phillies',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Philadelphia_Phillies_%282019%29_logo.svg/1200px-Philadelphia_Phillies_%282019%29_logo.svg.png',
          },
        ],
        answer: {person: 'Bryce Harper', club: 'Philadelphia Phillies'},
      },
      {
        options: [
          {
            club: 'Toronto Blue Jays',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZfcpbz3QOA1bzFtCcweMISwKPEE6c8dne1w&s',
          },
          {
            club: 'Houston Astros',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiCUAyxISC_OkonVO1mpkL7aXHm_8kH9gT_A&s',
          },
          {
            club: 'San Diego Padres',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR44tzMtwd-rmkxBYJukwaRbM24Cp60wOMVFA&s',
          },
        ],
        answer: {person: 'José Altuve', club: 'Houston Astros'},
      },
      {
        options: [
          {
            club: 'Philadelphia Phillies',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Philadelphia_Phillies_%282019%29_logo.svg/1200px-Philadelphia_Phillies_%282019%29_logo.svg.png',
          },
          {
            club: 'Texas Rangers',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/d/d3/Texas_Rangers_logo.png',
          },
          {
            club: 'Houston Astros',
            image:
              'https://logos-world.net/wp-content/uploads/2020/05/Houston-Astros-Logo-2013-Present.png',
          },
        ],
        answer: {person: 'Jacob deGrom', club: 'Texas Rangers'},
      },
      {
        options: [
          {
            club: 'Los Angeles Angels',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Los_Angeles_Angels_of_Anaheim.svg/640px-Los_Angeles_Angels_of_Anaheim.svg.png',
          },
          {
            club: 'Los Angeles Dodgers',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/LA_Dodgers.svg/1024px-LA_Dodgers.svg.png',
          },
          {
            club: 'Houston Astros',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiCUAyxISC_OkonVO1mpkL7aXHm_8kH9gT_A&s',
          },
        ],
        answer: {person: 'Freddie Freeman', club: 'Los Angeles Dodgers'},
      },
      {
        options: [
          {
            club: 'Toronto Blue Jays',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZfcpbz3QOA1bzFtCcweMISwKPEE6c8dne1w&s',
          },
          {
            club: 'Los Angeles Dodgers',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/LA_Dodgers.svg/1024px-LA_Dodgers.svg.png',
          },
          {
            club: 'Houston Astros',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiCUAyxISC_OkonVO1mpkL7aXHm_8kH9gT_A&s',
          },
        ],
        answer: {person: 'Vladimir Guerrero Jr.', club: 'Toronto Blue Jays'},
      },
      {
        options: [
          {
            club: 'San Diego Padres',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR44tzMtwd-rmkxBYJukwaRbM24Cp60wOMVFA&s',
          },
          {
            club: 'New York Yankees',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/New_York_Yankees_logo.svg/1200px-New_York_Yankees_logo.svg.png',
          },
          {
            club: 'Texas Rangers',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/d/d3/Texas_Rangers_logo.png',
          },
        ],
        answer: {person: 'Manny Machado', club: 'San Diego Padres'},
      },
    ],
  },
  {
    notLocked: false,
    score: '0',
    task: 'Match the player with Hockey club',
    name: 'Hockey',
    id: 'ho1',
    levelQuestions: [
      {
        options: [
          {
            club: 'Colorado Avalanche',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLxAKK-PTC-GnRvNQjHIv7y5nINXKDSjFwzg&s',
          },
          {
            club: 'Edmonton Oilers',
            image:
              'https://upload.wikimedia.org/wikipedia/ru/archive/0/02/20220823104023%21Edmonton_oilers_logo.png',
          },
          {
            club: 'New York Rangers',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/New_York_Rangers.svg/1200px-New_York_Rangers.svg.png',
          },
        ],
        answer: {person: 'Connor McDavid', club: 'Edmonton Oilers'},
      },
      {
        options: [
          {
            club: 'Pittsburgh Penguins',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Pittsburgh_Penguins_logo_%282016%29.svg/800px-Pittsburgh_Penguins_logo_%282016%29.svg.png',
          },
          {
            club: 'Montreal Canadiens',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkz6w3V3qo2-L3xaTb_MCj4eQtprHcsi6BPw&s',
          },
          {
            club: 'Tampa Bay Lightning',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfnYcO2bvJ2FC2dS9uxOVCGuGWX1lV-YWIQ&s',
          },
        ],
        answer: {person: 'Sidney Crosby', club: 'Pittsburgh Penguins'},
      },
      {
        options: [
          {
            club: 'Edmonton Oilers',
            image:
              'https://upload.wikimedia.org/wikipedia/ru/archive/0/02/20220823104023%21Edmonton_oilers_logo.png',
          },
          {
            club: 'Washington Capitals',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Washington_Capitals_logo.svg/1200px-Washington_Capitals_logo.svg.png',
          },
          {
            club: 'New York Rangers',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/New_York_Rangers.svg/1200px-New_York_Rangers.svg.png',
          },
        ],
        answer: {person: 'Alexander Ovechkin', club: 'Washington Capitals'},
      },
      {
        options: [
          {
            club: 'Tampa Bay Lightning',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfnYcO2bvJ2FC2dS9uxOVCGuGWX1lV-YWIQ&s',
          },
          {
            club: 'Washington Capitals',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Washington_Capitals_logo.svg/1200px-Washington_Capitals_logo.svg.png',
          },
          {
            club: 'Toronto Maple Leafs',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Toronto_Maple_Leafs_2016_logo.svg/800px-Toronto_Maple_Leafs_2016_logo.svg.png',
          },
        ],
        answer: {person: 'Auston Matthews', club: 'Toronto Maple Leafs'},
      },
      {
        options: [
          {
            club: 'Pittsburgh Penguins',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Pittsburgh_Penguins_logo_%282016%29.svg/800px-Pittsburgh_Penguins_logo_%282016%29.svg.png',
          },
          {
            club: 'Montreal Canadiens',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkz6w3V3qo2-L3xaTb_MCj4eQtprHcsi6BPw&s',
          },
          {
            club: 'New York Rangers',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/New_York_Rangers.svg/1200px-New_York_Rangers.svg.png',
          },
        ],
        answer: {person: 'Carey Price', club: 'Montreal Canadiens'},
      },
      {
        options: [
          {
            club: 'Colorado Avalanche',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLxAKK-PTC-GnRvNQjHIv7y5nINXKDSjFwzg&s',
          },
          {
            club: 'Toronto Maple Leafs',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Toronto_Maple_Leafs_2016_logo.svg/800px-Toronto_Maple_Leafs_2016_logo.svg.png',
          },
          {
            club: 'Washington Capitals',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Washington_Capitals_logo.svg/1200px-Washington_Capitals_logo.svg.png',
          },
        ],
        answer: {person: 'Nathan MacKinnon', club: 'Colorado Avalanche'},
      },
      {
        options: [
          {
            club: 'Montreal Canadiens',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkz6w3V3qo2-L3xaTb_MCj4eQtprHcsi6BPw&s',
          },
          {
            club: 'Pittsburgh Penguins',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Pittsburgh_Penguins_logo_%282016%29.svg/800px-Pittsburgh_Penguins_logo_%282016%29.svg.png',
          },
          {
            club: 'Tampa Bay Lightning',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfnYcO2bvJ2FC2dS9uxOVCGuGWX1lV-YWIQ&s',
          },
        ],
        answer: {person: 'Carey Price', club: 'Montreal Canadiens'},
      },
      {
        options: [
          {
            club: 'Toronto Maple Leafs',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Toronto_Maple_Leafs_2016_logo.svg/800px-Toronto_Maple_Leafs_2016_logo.svg.png',
          },
          {
            club: 'Edmonton Oilers',
            image:
              'https://upload.wikimedia.org/wikipedia/ru/archive/0/02/20220823104023%21Edmonton_oilers_logo.png',
          },
          {
            club: 'New York Rangers',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/New_York_Rangers.svg/1200px-New_York_Rangers.svg.png',
          },
        ],
        answer: {person: 'Leon Draisaitl', club: 'Edmonton Oilers'},
      },
      {
        options: [
          {
            club: 'Pittsburgh Penguins',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Pittsburgh_Penguins_logo_%282016%29.svg/800px-Pittsburgh_Penguins_logo_%282016%29.svg.png',
          },
          {
            club: 'Tampa Bay Lightning',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfnYcO2bvJ2FC2dS9uxOVCGuGWX1lV-YWIQ&s',
          },
          {
            club: 'Edmonton Oilers',
            image:
              'https://upload.wikimedia.org/wikipedia/ru/archive/0/02/20220823104023%21Edmonton_oilers_logo.png',
          },
        ],
        answer: {person: 'Andrei Vasilevskiy', club: 'Tampa Bay Lightning'},
      },
      {
        options: [
          {
            club: 'Pittsburgh Penguins',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Pittsburgh_Penguins_logo_%282016%29.svg/800px-Pittsburgh_Penguins_logo_%282016%29.svg.png',
          },
          {
            club: 'New York Rangers',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/New_York_Rangers.svg/1200px-New_York_Rangers.svg.png',
          },
          {
            club: 'Edmonton Oilers',
            image:
              'https://upload.wikimedia.org/wikipedia/ru/archive/0/02/20220823104023%21Edmonton_oilers_logo.png',
          },
        ],
        answer: {person: 'Artemi Panarin', club: 'New York Rangers'},
      },
    ],
  },
];
