let quotes = {
  quote1:
    "The mind has two abilities – one is to focus, the other is to expand and relax.",
  quote2:
    "The mind is like a mirror, whatever comes in front of it is reflected in it.",
  quote3: "Mind can be our greatest enemy or our best friend.",
  quote4: "Just let it be! That is the secret to handle the mind.",
  quote5: "Wherever you go, you carry your own mind!",
  quote6: "When the mind is still, it gets the power to fulfill any thought.",
  quote7: "Your mind is responsible for your freedom and bondage.",
  quote8:
    "When we are in the grip of the mind, we make ourselves and others miserable.",
  quote9:
    "Every moment your mind is swinging to either the past or the future.",
  quote10:
    "The real worship, the real prayer to God is to create happiness in others.",
  quote11:
    "The goal of spirituality is to bring such happiness which nobody can take away from you.",
  quote12:
    "If wisdom cannot remove your misery and bring happiness, nothing else can.",
  quote13:
    "It is only through inner silence can you bring out happiness and celebration in life.",
  quote14:
    "Remember your life is short. Till the time you are on earth, do some good work, bring happiness and  turn tears into smiles.",
  quote15:
    "The magic is that a person who wants nothing will receive everything. Happiness is hidden by our wants.",
  quote16:
    "Every act in life is an expression of happiness or an expectation of it. For the wise person, it is an expression, not expectation.",
  quote17:
    "If you follow fun, misery follows you. If you follow knowledge, happiness follows you.",
  quote18:
    "Happiness is living in the moment with joy,awareness and  compassion; being free from within, feeling at home with everyone without barriers.",
  quote19:
    "Happiness is when you want nothing, and you want to give. Where the wanting and  desires end, when sharing begins, happiness is exactly there.",
  quote20:
    "If you are only a taker of happiness you get misery. If you are a giver of happiness, you get joy and love.",
  quote21:
    "When we see happiness in the happiness of others, that's when we will be truly happy.",
  quote22:
    "Purity in heart, clarity in mind, sincerity in action and  contentment is the formula for happiness.",
  quote23: "Live in the present Moment, happiness is only in the present.",
  quote24:
    "Accept People and Situations as they are. That will bring peace to your mind and then you can take appropriate actions.",
  quote25:
    "Don't be a football of other's opinions, else you will get kicked around.",
  quote26:
    "Don't see intentions behind other's mistakes. Forgive others as you would forgive yourself.",
  quote27: "Present moment is inevitable. ",
  quote28: "All the past is gone like a dream, hasn't it?",
  quote29: "Breath is the key to bringing mind in the present moment.",
  quote30: "Life is love, Life is Joy, Life is Enthusias.",
};

function getQuote() {
  s = Math.floor(Math.random() * 30 + 1);
  console.log(s);
  str = "quote" + s.toString();
  console.log(quotes[str]);
  return quotes[str];
}
var text = getQuote();

document.getElementById("quote-container").innerHTML = text;
