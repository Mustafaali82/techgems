const routines = {
  "Paul Graham": {
    image: "/images/Paul.webp",
    week: {
      Monday: {
        morning: {
          "06:00 AM": "Wake up & quick meditation 🧘",
          "06:30 AM": "Write essays ✍️",
          "08:00 AM": "Breakfast 🍳",
          "09:00 AM": "Deep work on new ideas 💡",
        },
        afternoon: {
          "12:00 PM": "Lunch 🥗",
          "01:00 PM": "Meetings with founders 👥",
          "03:00 PM": "Coding & reviewing projects 👨‍💻",
        },
        evening: {
          "06:00 PM": "Reading & research 📚",
          "07:30 PM": "Dinner with family 🍽️",
        },
        night: {
          "09:00 PM": "Reflections & note-taking 📝",
          "10:30 PM": "Sleep 🛏️",
        },
      },
      Tuesday: {
        morning: {
          "06:00 AM": "Wake up & morning walk 🚶",
          "07:00 AM": "Writing & brainstorming ✍️",
          "09:00 AM": "Breakfast & emails 📧",
        },
        afternoon: {
          "12:00 PM": "Lunch & casual reading 📖",
          "02:00 PM": "Deep focus work 🚀",
        },
        evening: {
          "06:00 PM": "Exercise 🏋️‍♂️",
          "07:30 PM": "Dinner & socializing 🍽️",
        },
        night: {
          "09:00 PM": "Planning for the next day 📅",
          "10:30 PM": "Sleep 🛏️",
        },
      },
      Wednesday: {
        morning: {
          "06:00 AM": "Wake up & yoga 🧘",
          "07:00 AM": "Writing session ✍️",
          "09:00 AM": "Breakfast & catching up on news 📰",
        },
        afternoon: {
          "12:00 PM": "Lunch 🥗",
          "02:00 PM": "Mentoring young entrepreneurs 👨‍🏫",
        },
        evening: {
          "06:00 PM": "Gym workout 💪",
          "07:30 PM": "Dinner & relaxation 🍽️",
        },
        night: {
          "09:00 PM": "Reading & reflecting 📚",
          "10:30 PM": "Sleep 🛏️",
        },
      },
      Thursday: {
        morning: {
          "06:00 AM": "Wake up & light stretching 🤸‍♂️",
          "07:00 AM": "Writing & ideation session ✍️",
          "09:00 AM": "Breakfast & strategic thinking 💭",
        },
        afternoon: {
          "12:00 PM": "Lunch 🍱",
          "02:00 PM": "Work on essays or books 📖",
        },
        evening: {
          "06:00 PM": "Walking & listening to podcasts 🎧",
          "07:30 PM": "Dinner & unwinding 🍷",
        },
        night: {
          "09:00 PM": "Note-taking & reviewing day 📝",
          "10:30 PM": "Sleep 🛏️",
        },
      },
      Friday: {
        morning: {
          "06:00 AM": "Wake up & meditation 🧘",
          "07:00 AM": "Write blog or essay ✍️",
          "09:00 AM": "Breakfast & emails 📩",
        },
        afternoon: {
          "12:00 PM": "Lunch & quick power nap 😴",
          "02:00 PM": "One-on-one mentoring 💬",
        },
        evening: {
          "06:00 PM": "Outdoor jogging 🏃",
          "07:30 PM": "Dinner & family time 🍽️",
        },
        night: {
          "09:00 PM": "Brainstorming new ideas 💡",
          "10:30 PM": "Sleep 🛏️",
        },
      },
      Saturday: {
        morning: {
          "07:00 AM": "Wake up & late breakfast ☕",
          "09:00 AM": "Leisure reading & exploring new books 📚",
        },
        afternoon: {
          "12:00 PM": "Lunch with family 🥘",
          "02:00 PM": "Casual networking & socializing 🤝",
        },
        evening: {
          "06:00 PM": "Watching movies or documentaries 🎥",
          "07:30 PM": "Dinner 🍷",
        },
        night: {
          "09:00 PM": "Reflection & relaxation 🛀",
          "10:30 PM": "Sleep 🛏️",
        },
      },
      Sunday: {
        morning: {
          "07:30 AM": "Wake up & slow morning ☀️",
          "09:00 AM": "Reading & journaling 📖",
        },
        afternoon: {
          "12:00 PM": "Brunch & light walk 🚶",
          "02:00 PM": "Exploring new ideas & hobbies 🎨",
        },
        evening: {
          "06:00 PM": "Family dinner 🍽️",
          "07:30 PM": "Planning the upcoming week 📅",
        },
        night: {
          "09:00 PM": "Light reading & early sleep 😴",
          "10:00 PM": "Sleep 🛏️",
        },
      },
    },
  },  
  "Elon Musk": {
    image: "/images/Elon.png",
    week: {
      Monday: {
        morning: {
          "06:00 AM": "Wake up & quick shower 🚿",
          "06:30 AM": "Emails & critical work 📧",
          "07:30 AM": "Commute & light breakfast ☕",
          "08:00 AM": "Meetings at Tesla 🚗",
        },
        afternoon: {
          "12:00 PM": "Lunch (usually quick & working) 🍔",
          "01:00 PM": "Engineering & design reviews 🏗️",
          "04:00 PM": "More meetings & work on new projects 🚀",
        },
        evening: {
          "07:00 PM": "Exercise & short break 🏋️",
          "08:00 PM": "Dinner with family or work calls 🍽️",
        },
        night: {
          "10:00 PM": "Emails & wrap-up tasks 📩",
          "12:00 AM": "Sleep 🛏️",
        },
      },
      Tuesday: {
        morning: {
          "06:00 AM": "Wake up & morning routine 🚿",
          "06:30 AM": "Emails & urgent decisions 📧",
          "08:00 AM": "Meetings & engineering discussions at SpaceX 🚀",
        },
        afternoon: {
          "12:00 PM": "Quick working lunch 🥪",
          "01:00 PM": "Focus on new tech & development 🏗️",
          "03:00 PM": "Factory floor visit & team coordination 🏭",
        },
        evening: {
          "07:00 PM": "Workout session 💪",
          "08:00 PM": "Dinner & reading 📖",
        },
        night: {
          "10:00 PM": "Emails & Tesla updates 📩",
          "12:30 AM": "Sleep 🛏️",
        },
      },
      Wednesday: {
        morning: {
          "06:00 AM": "Wake up & shower 🚿",
          "06:30 AM": "Work on Tesla AI & software updates 🤖",
          "08:00 AM": "Meetings with Tesla engineers ⚙️",
        },
        afternoon: {
          "12:00 PM": "Lunch (often skipped or quick) 🥗",
          "01:00 PM": "Review product prototypes & designs 🏭",
          "04:00 PM": "Finance & investor meetings 💰",
        },
        evening: {
          "07:00 PM": "Call with Starlink team 📡",
          "08:00 PM": "Dinner with family 🍽️",
        },
        night: {
          "10:00 PM": "Emails & late-night coding session 💻",
          "01:00 AM": "Sleep 🛏️",
        },
      },
      Thursday: {
        morning: {
          "06:00 AM": "Wake up & planning 🚀",
          "07:00 AM": "Meetings at SpaceX & project discussions 🌌",
          "10:00 AM": "Rocket design & testing updates 🏗️",
        },
        afternoon: {
          "12:30 PM": "Quick lunch (or skipped) 🥪",
          "01:00 PM": "Team brainstorming for Mars mission 🚀",
          "04:00 PM": "Factory visits & hardware reviews 🏭",
        },
        evening: {
          "07:00 PM": "Workout session & relaxation 🏋️",
          "08:00 PM": "Dinner & book reading 📖",
        },
        night: {
          "10:00 PM": "Emails & final daily wrap-up 📩",
          "12:30 AM": "Sleep 🛏️",
        },
      },
      Friday: {
        morning: {
          "06:00 AM": "Wake up & shower 🚿",
          "07:00 AM": "Tesla software updates & team meetings ⚙️",
          "10:00 AM": "AI & automation research 🤖",
        },
        afternoon: {
          "12:30 PM": "Lunch & networking with investors 🍽️",
          "02:00 PM": "Engineering deep work 🏗️",
        },
        evening: {
          "07:00 PM": "Tesla & SpaceX sync-up call 📞",
          "08:00 PM": "Dinner with close friends/family 🍷",
        },
        night: {
          "10:00 PM": "Emails & late-night brainstorming 📩",
          "01:00 AM": "Sleep 🛏️",
        },
      },
      Saturday: {
        morning: {
          "07:00 AM": "Wake up later than usual ☀️",
          "08:00 AM": "Workout & relaxation 🏋️",
          "10:00 AM": "Exploring new business ideas 💡",
        },
        afternoon: {
          "12:30 PM": "Lunch with kids & quality time 👨‍👦‍👦",
          "02:00 PM": "Reading & self-learning 📚",
        },
        evening: {
          "06:00 PM": "SpaceX weekend review 🚀",
          "08:00 PM": "Casual social event or dinner 🥂",
        },
        night: {
          "11:00 PM": "Relaxing & watching movies 🎬",
          "01:00 AM": "Sleep 🛏️",
        },
      },
      Sunday: {
        morning: {
          "08:00 AM": "Wake up & family time 🏡",
          "09:00 AM": "Brunch & casual discussions 🍳",
        },
        afternoon: {
          "01:00 PM": "Deep thinking & reading 📖",
          "03:00 PM": "Personal time & hobbies 🎸",
        },
        evening: {
          "06:00 PM": "Planning for the next week 📅",
          "08:00 PM": "Dinner & unwind 🍽️",
        },
        night: {
          "10:00 PM": "Last-minute emails & final checks 📩",
          "12:00 AM": "Sleep 🛏️",
        },
      },
    },
  },
  "Mark Zuckerberg": {
    image: "/images/Mark.png",
    week: {
      Monday: {
        morning: {
          "06:00 AM": "Wake up & workout 🏋️‍♂️",
          "07:00 AM": "Breakfast (usually healthy) 🥑",
          "08:00 AM": "Checking emails & news 📧",
          "09:00 AM": "Meetings with Meta leadership 👥",
        },
        afternoon: {
          "12:30 PM": "Lunch (quick, often same meal daily) 🥗",
          "01:30 PM": "Coding & reviewing new Meta projects 💻",
          "03:00 PM": "Strategy meetings on AI & Metaverse 🚀",
        },
        evening: {
          "06:30 PM": "Exercise or running session 🏃‍♂️",
          "08:00 PM": "Dinner with family 🍽️",
        },
        night: {
          "10:00 PM": "Reading books 📖",
          "11:30 PM": "Sleep 🛏️",
        },
      },
      Tuesday: {
        morning: {
          "06:00 AM": "Wake up & workout 🏋️‍♂️",
          "07:30 AM": "Emails & Meta updates 📩",
          "09:00 AM": "Engineering team discussions 👨‍💻",
        },
        afternoon: {
          "12:30 PM": "Quick lunch (same as usual) 🥪",
          "02:00 PM": "VR/AR development & testing 🕶️",
          "04:00 PM": "Meta AI product review 🤖",
        },
        evening: {
          "07:00 PM": "Outdoor running or exercise 🏃",
          "08:30 PM": "Family dinner 🍕",
        },
        night: {
          "10:00 PM": "Planning for next day 📅",
          "11:30 PM": "Sleep 🛏️",
        },
      },
      Wednesday: {
        morning: {
          "06:00 AM": "Wake up & workout 🏋️",
          "07:00 AM": "Breakfast & morning updates 🥑",
          "09:00 AM": "Meta hardware division meetings 🔬",
        },
        afternoon: {
          "12:30 PM": "Lunch (usually the same) 🥗",
          "02:00 PM": "Metaverse & AI project discussions 🚀",
          "04:00 PM": "Brainstorming & coding new ideas 💡",
        },
        evening: {
          "07:00 PM": "Outdoor running or gym 🏃‍♂️",
          "08:30 PM": "Dinner with family 🍽️",
        },
        night: {
          "10:00 PM": "Reading or learning new skills 📚",
          "11:30 PM": "Sleep 🛏️",
        },
      },
      Thursday: {
        morning: {
          "06:00 AM": "Workout & morning routine 🏋️",
          "07:30 AM": "Emails & updates on projects 📩",
          "09:00 AM": "Product & engineering meetings 👨‍💻",
        },
        afternoon: {
          "12:30 PM": "Lunch (quick & same meal) 🥗",
          "02:00 PM": "Coding & technical brainstorming 💻",
          "04:00 PM": "Meta’s social impact projects review 🌍",
        },
        evening: {
          "07:00 PM": "Exercise & relaxation 🏃",
          "08:30 PM": "Dinner & family time 🍷",
        },
        night: {
          "10:00 PM": "Work on personal projects 📖",
          "11:30 PM": "Sleep 🛏️",
        },
      },
      Friday: {
        morning: {
          "06:00 AM": "Wake up & gym session 🏋️",
          "07:30 AM": "Emails & updates on Meta projects 📩",
          "09:00 AM": "AI, VR, and Metaverse discussions 🚀",
        },
        afternoon: {
          "12:30 PM": "Lunch (quick & routine meal) 🥗",
          "02:00 PM": "Live product testing & engineering deep work 🔬",
          "04:00 PM": "Long-term strategy planning 💡",
        },
        evening: {
          "07:00 PM": "Exercise or a long walk 🏃",
          "08:30 PM": "Dinner with family 🍽️",
        },
        night: {
          "10:00 PM": "Reading & research 📖",
          "11:30 PM": "Sleep 🛏️",
        },
      },
      Saturday: {
        morning: {
          "08:00 AM": "Wake up & workout 🏋️",
          "09:30 AM": "Breakfast & weekend planning ☕",
        },
        afternoon: {
          "12:30 PM": "Lunch with family & friends 🍽️",
          "02:00 PM": "Exploring new technology & books 📖",
        },
        evening: {
          "06:00 PM": "Outdoor activities or sports ⚽",
          "08:30 PM": "Dinner & relaxation 🍷",
        },
        night: {
          "10:30 PM": "Watching movies or gaming 🎮",
          "12:00 AM": "Sleep 🛏️",
        },
      },
      Sunday: {
        morning: {
          "08:00 AM": "Wake up & casual morning routine 🌞",
          "09:30 AM": "Brunch with family 🍳",
        },
        afternoon: {
          "12:30 PM": "Reading & reflecting on the week 📚",
          "02:00 PM": "Personal projects & charity work 🌍",
        },
        evening: {
          "06:00 PM": "Outdoor running or sports ⚽",
          "08:30 PM": "Dinner & relaxation 🍽️",
        },
        night: {
          "10:00 PM": "Planning for the next week 📅",
          "11:30 PM": "Sleep 🛏️",
        },
      },
    },
  },
  "Steve Jobs": {
    image: "/images/Steve.png",
    week: {
      Monday: {
        morning: {
          "06:00 AM": "Wake up & morning reflection ☀️",
          "06:30 AM": "Walk & brainstorming ideas 🚶",
          "08:00 AM": "Light breakfast (fruits) 🍏",
          "09:00 AM": "Work at Apple HQ - Product reviews 📱",
        },
        afternoon: {
          "12:30 PM": "Lunch (usually simple & vegetarian) 🥗",
          "02:00 PM": "Design discussions & development meetings 🎨",
          "04:00 PM": "Customer experience & marketing planning 📊",
        },
        evening: {
          "07:00 PM": "Family dinner 🍽️",
          "08:30 PM": "Evening walk & creative thinking 🚶‍♂️",
        },
        night: {
          "10:00 PM": "Reading & personal reflection 📖",
          "11:30 PM": "Sleep 🛏️",
        },
      },
      Tuesday: {
        morning: {
          "06:00 AM": "Wake up & meditate 🧘",
          "07:00 AM": "Long walk for creative ideas 🚶",
          "08:30 AM": "Breakfast & news 📰",
          "09:30 AM": "Meeting with Apple engineers ⚙️",
        },
        afternoon: {
          "12:30 PM": "Lunch (vegetarian, minimal) 🥑",
          "02:00 PM": "Innovation & product strategy sessions 🚀",
          "04:00 PM": "Reviewing prototypes & UI/UX 🎨",
        },
        evening: {
          "07:00 PM": "Dinner with family 🍕",
          "08:30 PM": "Deep thinking & problem-solving 🤔",
        },
        night: {
          "10:00 PM": "Reading & note-taking 📓",
          "11:30 PM": "Sleep 🛏️",
        },
      },
      Wednesday: {
        morning: {
          "06:00 AM": "Wake up & creative brainstorming 💡",
          "07:00 AM": "Walk & thinking time 🚶",
          "08:30 AM": "Breakfast (simple, usually fruits) 🍏",
          "09:00 AM": "Apple marketing & branding discussions 📢",
        },
        afternoon: {
          "12:30 PM": "Lunch (light & quick) 🥗",
          "02:00 PM": "Meetings with Jony Ive on product design 🖥️",
          "04:00 PM": "Customer experience & product launch planning 📊",
        },
        evening: {
          "07:00 PM": "Exercise & relaxation 🏃",
          "08:30 PM": "Dinner with close friends & family 🍽️",
        },
        night: {
          "10:00 PM": "Meditation & journaling ✍️",
          "11:30 PM": "Sleep 🛏️",
        },
      },
      Thursday: {
        morning: {
          "06:00 AM": "Wake up & walk 🚶",
          "07:30 AM": "Emails & Apple business updates 📩",
          "09:00 AM": "Software & hardware team meetings 👨‍💻",
        },
        afternoon: {
          "12:30 PM": "Lunch (light meal, usually fruits) 🍎",
          "02:00 PM": "Vision & future product planning 🚀",
          "04:00 PM": "Design philosophy discussions with teams 🎨",
        },
        evening: {
          "07:00 PM": "Exercise & relaxation 🏋️",
          "08:30 PM": "Dinner with family 🍽️",
        },
        night: {
          "10:00 PM": "Personal reflections & deep thinking 🤔",
          "11:30 PM": "Sleep 🛏️",
        },
      },
      Friday: {
        morning: {
          "06:00 AM": "Wake up & morning walk 🚶",
          "07:30 AM": "Creative time & note-taking ✍️",
          "09:00 AM": "Meeting with Apple leadership 👥",
        },
        afternoon: {
          "12:30 PM": "Lunch (usually vegetarian) 🥗",
          "02:00 PM": "Product feedback & refinement 📱",
          "04:00 PM": "Marketing & storytelling discussions 📢",
        },
        evening: {
          "07:00 PM": "Exercise & relaxation 🏃",
          "08:30 PM": "Dinner 🍷",
        },
        night: {
          "10:00 PM": "Reading & learning new topics 📖",
          "11:30 PM": "Sleep 🛏️",
        },
      },
      Saturday: {
        morning: {
          "07:00 AM": "Wake up & morning routine 🌞",
          "08:30 AM": "Casual breakfast & family time 🍳",
          "10:00 AM": "Reflecting on life & philosophy 📜",
        },
        afternoon: {
          "12:30 PM": "Lunch & relaxation 🍽️",
          "02:00 PM": "Personal projects & thinking sessions 💡",
        },
        evening: {
          "06:00 PM": "Outdoor activity or long walks 🌳",
          "08:30 PM": "Dinner & relaxation 🍷",
        },
        night: {
          "10:30 PM": "Watching movies or meditation 🎬",
          "12:00 AM": "Sleep 🛏️",
        },
      },
      Sunday: {
        morning: {
          "08:00 AM": "Wake up & slow morning ☀️",
          "09:30 AM": "Brunch with family & friends 🍳",
        },
        afternoon: {
          "12:30 PM": "Deep reflection on future ideas 🔮",
          "02:00 PM": "Spending time in nature & walking 🌿",
        },
        evening: {
          "06:00 PM": "Meditation & self-reflection 🧘",
          "08:30 PM": "Dinner 🍽️",
        },
        night: {
          "10:00 PM": "Reading books 📚",
          "11:30 PM": "Sleep 🛏️",
        },
      },
    },
  },
};

export default routines;
