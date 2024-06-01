/**
 * Retrieves a random quote from the list of quotes.
 * @returns {Object} An object containing a random quote and its author.
 */
const getQuote = () => {
  const quotes = [
    {
      statement:
        "Life isn’t about getting and having, it’s about giving and being.",
      author: "Kevin Kruse",
    },
    {
      statement:
        "Whatever the mind of man can conceive and believe, it can achieve.",
      author: "Napoleon Hill",
    },
    {
      statement: "Strive not to be a success, but rather to be of value.",
      author: "Albert Einstein",
    },
    {
      statement:
        "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
      author: "Robert Frost",
    },
    {
      statement:
        "I attribute my success to this: I never gave or took any excuse.",
      author: "Florence Nightingale",
    },
    {
      statement: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky",
    },
    {
      statement:
        "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
      author: "Michael Jordan",
    },
    {
      statement:
        "The most difficult thing is the decision to act, the rest is merely tenacity.",
      author: "Amelia Earhart",
    },
    {
      statement: "Every strike brings me closer to the next home run.",
      author: "Babe Ruth",
    },
    {
      statement:
        "Definiteness of purpose is the starting point of all achievement.",
      author: "W. Clement Stone",
    },
    {
      statement:
        "We must balance conspicuous consumption with conscious capitalism.",
      author: "Kevin Kruse",
    },
    {
      statement:
        "Life is what happens to you while you’re busy making other plans.",
      author: "John Lennon",
    },
    {
      statement: "We become what we think about.",
      author: "Earl Nightingale",
    },
    {
      statement:
        "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
      author: "Mark Twain",
    },
    {
      statement: "Life is 10% what happens to me and 90% of how I react to it.",
      author: "Charles Swindoll",
    },
    {
      statement:
        "The most common way people give up their power is by thinking they don’t have any.",
      author: "Alice Walker",
    },
    {
      statement: "The mind is everything. What you think you become.",
      author: "Buddha",
    },
    {
      statement:
        "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb",
    },
    {
      statement: "An unexamined life is not worth living.",
      author: "Socrates",
    },
    {
      statement: "Eighty percent of success is showing up.",
      author: "Woody Allen",
    },
    {
      statement:
        "Your time is limited, so don’t waste it living someone else’s life.",
      author: "Steve Jobs",
    },
    {
      statement: "Winning isn’t everything, but wanting to win is.",
      author: "Vince Lombardi",
    },
    {
      statement:
        "I am not a product of my circumstances. I am a product of my decisions.",
      author: "Stephen Covey",
    },
    {
      statement:
        "Every child is an artist.  The problem is how to remain an artist once he grows up.",
      author: "Pablo Picasso",
    },
    {
      statement:
        "You can never cross the ocean until you have the courage to lose sight of the shore.",
      author: "Christopher Columbus",
    },
    {
      statement:
        "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
      author: "Maya Angelou",
    },
    {
      statement: "Either you run the day, or the day runs you.",
      author: "Jim Rohn",
    },
    {
      statement:
        "Whether you think you can or you think you can’t, you’re right.",
      author: "Henry Ford",
    },
    {
      statement:
        "The two most important days in your life are the day you are born and the day you find out why.",
      author: "Mark Twain",
    },
    {
      statement:
        "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
      author: "Johann Wolfgang von Goethe",
    },
    {
      statement: "The best revenge is massive success.",
      author: "Frank Sinatra",
    },
    {
      statement:
        "People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.",
      author: "Zig Ziglar",
    },
    {
      statement: "Life shrinks or expands in proportion to one’s courage.",
      author: "Anais Nin",
    },
    {
      statement:
        "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.",
      author: "Vincent Van Gogh",
    },
    {
      statement:
        "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
      author: "Aristotle",
    },
    {
      statement:
        "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
      author: "Jesus",
    },
    {
      statement:
        "The only person you are destined to become is the person you decide to be.",
      author: "Ralph Waldo Emerson",
    },
    {
      statement:
        "Go confidently in the direction of your dreams.  Live the life you have imagined.",
      author: "Henry David Thoreau",
    },
    {
      statement:
        "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
      author: "Erma Bombeck",
    },
    {
      statement:
        "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
      author: "Booker T. Washington",
    },
    {
      statement:
        "Certain things catch your eye, but pursue only those that capture the heart.",
      author: " Ancient Indian Proverb",
    },
    {
      statement: "Believe you can and you’re halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      statement: "Everything you’ve ever wanted is on the other side of fear.",
      author: "George Addair",
    },
    {
      statement:
        "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
      author: "Plato",
    },
    {
      statement:
        "Teach thy tongue to say, “I do not know,” and thous shalt progress.",
      author: "Maimonides",
    },
    {
      statement: "Start where you are. Use what you have.  Do what you can.",
      author: "Arthur Ashe",
    },
    {
      statement:
        "When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.",
      author: "John Lennon",
    },
    {
      statement: "Fall seven times and stand up eight.",
      author: "Japanese Proverb",
    },
    {
      statement:
        "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
      author: "Helen Keller",
    },
    {
      statement: "Everything has beauty, but not everyone can see.",
      author: "Confucius",
    },
    {
      statement:
        "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
      author: "Anne Frank",
    },
    {
      statement: "When I let go of what I am, I become what I might be.",
      author: "Lao Tzu",
    },
    {
      statement:
        "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
      author: "Maya Angelou",
    },
    {
      statement:
        "Happiness is not something readymade.  It comes from your own actions.",
      author: "Dalai Lama",
    },
    {
      statement:
        "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
      author: "Sheryl Sandberg",
    },
    {
      statement:
        "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
      author: "Aristotle",
    },
    {
      statement: "If the wind will not serve, take to the oars.",
      author: "Latin Proverb",
    },
    {
      statement:
        "You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.",
      author: "Unknown",
    },
    {
      statement:
        "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
      author: "Marie Curie",
    },
    {
      statement:
        "Too many of us are not living our dreams because we are living our fears.",
      author: "Les Brown",
    },
    {
      statement:
        "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
      author: "Joshua J. Marine",
    },
    {
      statement: "If you want to lift yourself up, lift up someone else.",
      author: "Booker T. Washington",
    },
    {
      statement:
        "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
      author: "Leonardo da Vinci",
    },
    {
      statement:
        "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.",
      author: "Jamie Paolinetti",
    },
    {
      statement:
        "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
      author: "Erica Jong",
    },
    {
      statement:
        "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
      author: "Bob Dylan",
    },
    {
      statement:
        "I didn’t fail the test. I just found 100 ways to do it wrong.",
      author: "Benjamin Franklin",
    },
    {
      statement:
        "In order to succeed, your desire for success should be greater than your fear of failure.",
      author: "Bill Cosby",
    },
    {
      statement: "A person who never made a mistake never tried anything new.",
      author: " Albert Einstein",
    },
    {
      statement:
        "The person who says it cannot be done should not interrupt the person who is doing it.",
      author: "Chinese Proverb",
    },
    {
      statement: "There are no traffic jams along the extra mile.",
      author: "Roger Staubach",
    },
    {
      statement: "It is never too late to be what you might have been.",
      author: "George Eliot",
    },
    {
      statement: "You become what you believe.",
      author: "Oprah Winfrey",
    },
    {
      statement: "I would rather die of passion than of boredom.",
      author: "Vincent van Gogh",
    },
    {
      statement:
        "A truly rich man is one whose children run into his arms when his hands are empty.",
      author: "Unknown",
    },
    {
      statement:
        "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
      author: "Ann Landers",
    },
    {
      statement:
        "If you want your children to turn out well, spend twice as much time with them, and half as much money.",
      author: "Abigail Van Buren",
    },
    {
      statement:
        "Build your own dreams, or someone else will hire you to build theirs.",
      author: "Farrah Gray",
    },
    {
      statement:
        "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
      author: "Jesse Owens",
    },
    {
      statement: "Education costs money.  But then so does ignorance.",
      author: "Sir Claus Moser",
    },
    {
      statement:
        "I have learned over the years that when one’s mind is made up, this diminishes fear.",
      author: "Rosa Parks",
    },
    {
      statement:
        "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      statement:
        "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
      author: "Oprah Winfrey",
    },
    {
      statement:
        "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
      author: "Dalai Lama",
    },
    {
      statement:
        "You can’t use up creativity.  The more you use, the more you have.",
      author: "Maya Angelou",
    },
    {
      statement: "Dream big and dare to fail.",
      author: "Norman Vaughan",
    },
    {
      statement:
        "Our lives begin to end the day we become silent about things that matter.",
      author: "Martin Luther King Jr.",
    },
    {
      statement: "Do what you can, where you are, with what you have.",
      author: "Teddy Roosevelt",
    },
    {
      statement:
        "If you do what you’ve always done, you’ll get what you’ve always gotten.",
      author: "Tony Robbins",
    },
    {
      statement: "Dreaming, after all, is a form of planning.",
      author: "Gloria Steinem",
    },
    {
      statement:
        "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.",
      author: "Mae Jemison",
    },
    {
      statement:
        "You may be disappointed if you fail, but you are doomed if you don’t try.",
      author: "Beverly Sills",
    },
    {
      statement:
        "Remember no one can make you feel inferior without your consent.",
      author: "Eleanor Roosevelt",
    },
    {
      statement: "Life is what we make it, always has been, always will be.",
      author: "Grandma Moses",
    },
    {
      statement:
        "The question isn’t who is going to let me; it’s who is going to stop me.",
      author: "Ayn Rand",
    },
    {
      statement:
        "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
      author: "Henry Ford",
    },
    {
      statement:
        "It’s not the years in your life that count. It’s the life in your years.",
      author: "Abraham Lincoln",
    },
    {
      statement: "Change your thoughts and you change your world.",
      author: "Norman Vincent Peale",
    },
    {
      statement:
        "Either write something worth reading or do something worth writing.",
      author: "Benjamin Franklin",
    },
    {
      statement: "Nothing is impossible, the word itself says, “I’m possible!”",
      author: "–Audrey Hepburn",
    },
    {
      statement: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      statement: "If you can dream it, you can achieve it.",
      author: "Zig Ziglar",
    },
  ];
  const quoteIndex = Math.floor(Math.random() * 100 + 2);
  const randomQuote = quotes[quoteIndex];
  return randomQuote;
};

module.exports = getQuote;
