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
          "08:00 AM": "Wake up & check Facebook updates 📱",
          "08:30 AM": "Exercise (running or gym) 🏃‍♂️",
          "09:30 AM": "Breakfast with family 🥞",
          "10:00 AM": "Deep work on Meta projects 🖥️",
        },
        afternoon: {
          "01:00 PM": "Lunch & light reading 🍽️📖",
          "02:00 PM": "Team meetings & project discussions 🏢",
          "04:00 PM": "Review product roadmaps & future plans 📊",
        },
        evening: {
          "06:30 PM": "Dinner with family & personal time 🍲",
          "08:00 PM": "Reading or coding for fun 📚💻",
        },
        night: {
          "10:00 PM": "Meditation & winding down 🧘",
          "11:00 PM": "Sleep 😴",
        },
      },
      Tuesday: {
        morning: {
          "08:00 AM": "Wake up & check emails 📧",
          "08:30 AM": "Morning exercise 🏋️‍♂️",
          "09:30 AM": "Breakfast 🍳",
          "10:00 AM": "AI & VR research at Meta 🧠",
        },
        afternoon: {
          "01:00 PM": "Lunch & quick relaxation 🍜",
          "02:00 PM": "Business strategy & innovation discussions 💡",
          "04:00 PM": "Meeting with engineers & developers 👨‍💻",
        },
        evening: {
          "06:30 PM": "Dinner with family 🍕",
          "08:00 PM": "VR experiments & reading 🕶️",
        },
        night: {
          "10:30 PM": "Unplugging & relaxing 📴",
          "11:00 PM": "Sleep 🛏️",
        },
      },
      Wednesday: {
        morning: {
          "08:00 AM": "Wake up & news catch-up 🗞️",
          "08:30 AM": "Gym session 🏋️‍♂️",
          "09:30 AM": "Breakfast & family time 🥞",
          "10:00 AM": "Code review & product feedback 💻",
        },
        afternoon: {
          "01:00 PM": "Lunch & rest 🍛",
          "02:00 PM": "Strategy meetings at Meta 📊",
          "04:00 PM": "AI & Metaverse research 🌍",
        },
        evening: {
          "06:30 PM": "Dinner 🍣",
          "08:00 PM": "Experimenting with new technology ⚙️",
        },
        night: {
          "10:30 PM": "Relaxation & bedtime routine 🧘",
          "11:00 PM": "Sleep 💤",
        },
      },
      Thursday: {
        morning: {
          "08:00 AM": "Wake up & morning run 🏃",
          "08:30 AM": "Shower & breakfast 🚿",
          "09:30 AM": "Focus time for deep work 🖥️",
        },
        afternoon: {
          "01:00 PM": "Lunch & power nap 🥗",
          "02:00 PM": "Meta leadership meetings 🏢",
          "04:00 PM": "Product testing & feature analysis 🔬",
        },
        evening: {
          "06:30 PM": "Dinner & family discussions 🍽️",
          "08:00 PM": "Exploring AI advancements 🤖",
        },
        night: {
          "10:30 PM": "Reading & self-improvement books 📚",
          "11:00 PM": "Sleep 🛏️",
        },
      },
      Friday: {
        morning: {
          "08:00 AM": "Wake up & light stretching 🏋️",
          "08:30 AM": "Coffee & quick check-ins ☕",
          "09:30 AM": "Deep work on Meta’s AI strategy 🖥️",
        },
        afternoon: {
          "01:00 PM": "Lunch break 🍕",
          "02:00 PM": "Meetings with product designers 🎨",
          "04:00 PM": "User feedback sessions 🗣️",
        },
        evening: {
          "06:30 PM": "Dinner & relaxation 🍛",
          "08:00 PM": "Watching documentaries 🎥",
        },
        night: {
          "10:30 PM": "Reflecting on the week & planning ahead 🗒️",
          "11:00 PM": "Sleep 💤",
        },
      },
      Saturday: {
        morning: {
          "09:00 AM": "Wake up & leisure breakfast 🥞",
          "10:00 AM": "Outdoor walk or activity 🌳",
        },
        afternoon: {
          "01:00 PM": "Lunch with friends 🍽️",
          "02:30 PM": "Exploring new coding ideas 👨‍💻",
        },
        evening: {
          "06:30 PM": "Dinner & entertainment 🍿",
          "08:00 PM": "Gaming or VR time 🎮",
        },
        night: {
          "10:30 PM": "Reading & relaxation 📖",
          "11:30 PM": "Sleep 🛏️",
        },
      },
      Sunday: {
        morning: {
          "09:30 AM": "Wake up & brunch 🍳",
          "11:00 AM": "Casual reading & thinking time 📚",
        },
        afternoon: {
          "01:00 PM": "Family & personal time 🏡",
          "03:00 PM": "Leisure walk or hobby time 🚶",
        },
        evening: {
          "06:30 PM": "Dinner 🍲",
          "08:00 PM": "Preparing for the upcoming week 📝",
        },
        night: {
          "10:30 PM": "Relaxing & winding down 🎵",
          "11:00 PM": "Sleep 💤",
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
  "Alan Turing": {
    image: "/images/Alun.png",
    week: {
      Monday: {
        morning: {
          "06:00 AM": "Wake up & quick run 🏃‍♂️",
          "07:00 AM": "Breakfast (tea & toast) 🍞☕",
          "08:00 AM": "Mathematical research & paper writing ✍️",
          "10:00 AM": "Work at Bletchley Park on Enigma Machine 🔐",
        },
        afternoon: {
          "12:30 PM": "Lunch & casual discussions 🍽️",
          "02:00 PM": "Algorithm development & cryptanalysis 🔎",
          "04:00 PM": "Cycling or short break 🚴‍♂️",
        },
        evening: {
          "07:00 PM": "Dinner & personal reading 📖",
          "08:30 PM": "Theoretical work on artificial intelligence 🤖",
        },
        night: {
          "10:00 PM": "Reflective thinking & journaling 📝",
          "11:30 PM": "Sleep 🛏️",
        },
      },
      Tuesday: {
        morning: {
          "06:30 AM": "Wake up & morning run 🏃",
          "07:30 AM": "Breakfast & newspaper reading 📰",
          "09:00 AM": "Enigma code-breaking & logical analysis 🔢",
        },
        afternoon: {
          "12:30 PM": "Lunch & discussions with colleagues 🍽️",
          "02:00 PM": "Testing new cryptographic theories 🔎",
          "04:30 PM": "Break & mathematical puzzles 🧩",
        },
        evening: {
          "07:00 PM": "Dinner & relaxing with books 📚",
          "08:30 PM": "Turing machine refinements & AI thoughts 🤖",
        },
        night: {
          "10:30 PM": "Deep reflection & future ideas 💡",
          "11:45 PM": "Sleep 🛏️",
        },
      },
      Wednesday: {
        morning: {
          "07:00 AM": "Wake up & morning meditation 🧘",
          "08:00 AM": "Breakfast (simple meal) 🍞",
          "09:00 AM": "Work on computing machine concepts 💻",
        },
        afternoon: {
          "12:30 PM": "Lunch & break 🥗",
          "02:00 PM": "Cryptographic breakthroughs & new ciphers 🔐",
          "04:00 PM": "Cycling & fresh air 🚴",
        },
        evening: {
          "07:00 PM": "Dinner with intellectual debates 🍽️",
          "08:30 PM": "Deep research & logical deduction 📊",
        },
        night: {
          "10:30 PM": "Note-taking & reflection 📒",
          "11:30 PM": "Sleep 🛏️",
        },
      },
      Thursday: {
        morning: {
          "06:30 AM": "Wake up & short run 🏃",
          "07:30 AM": "Light breakfast & tea ☕",
          "09:00 AM": "Working on mathematical proofs 🔢",
        },
        afternoon: {
          "12:30 PM": "Lunch & socializing 🥗",
          "02:00 PM": "Code-breaking experiments 🔎",
          "04:00 PM": "Cycling & exercise 🚴",
        },
        evening: {
          "07:00 PM": "Dinner & discussion on AI & logic 🍽️",
          "08:30 PM": "Reading philosophy & science books 📖",
        },
        night: {
          "10:30 PM": "Night walk & thinking time 🌙",
          "11:45 PM": "Sleep 🛏️",
        },
      },
      Friday: {
        morning: {
          "07:00 AM": "Wake up & mental exercises 🧠",
          "08:00 AM": "Breakfast & letters to colleagues ✉️",
          "09:30 AM": "Deep focus work on computing theories 🖥️",
        },
        afternoon: {
          "12:30 PM": "Lunch & quiet reflection 🍎",
          "02:00 PM": "Turing machine research 📊",
          "04:00 PM": "Outdoor run & exercise 🏃‍♂️",
        },
        evening: {
          "07:00 PM": "Dinner & conversations with peers 🍽️",
          "08:30 PM": "Personal AI projects & logical research 🤖",
        },
        night: {
          "10:30 PM": "Night reading & note-taking 📖",
          "11:30 PM": "Sleep 🛏️",
        },
      },
      Saturday: {
        morning: {
          "08:00 AM": "Wake up & long-distance running 🏃‍♂️",
          "09:30 AM": "Brunch with friends 🍳",
          "11:00 AM": "Personal research & puzzle solving 🧩",
        },
        afternoon: {
          "01:00 PM": "Relaxation & socializing 🎭",
          "03:00 PM": "Mathematical theories & deep thought 🧐",
        },
        evening: {
          "06:00 PM": "Dinner with intellectuals 🍷",
          "08:30 PM": "Playing chess or puzzles ♟️",
        },
        night: {
          "10:30 PM": "Reflecting on the future of computing 💡",
          "11:45 PM": "Sleep 🛏️",
        },
      },
      Sunday: {
        morning: {
          "09:00 AM": "Wake up & slow morning 🌤️",
          "10:00 AM": "Brunch & casual reading ☕",
        },
        afternoon: {
          "01:00 PM": "Hiking or outdoor relaxation 🌲",
          "03:00 PM": "Mathematical proofs & AI theories 🤖",
        },
        evening: {
          "07:00 PM": "Dinner & reflecting on the week's work 🍽️",
          "08:30 PM": "Writing letters & deep research 📜",
        },
        night: {
          "10:30 PM": "Reading & quiet reflection 📖",
          "11:30 PM": "Sleep 🛏️",
        },
      },
    },
  },
  "Ton Roosendaal": {
    image: "/images/Roosendaal.png",
    week: {
      Monday: {
        morning: {
          "07:00 AM": "Wake up & morning coffee ☕",
          "08:00 AM": "Emails & communication 📧",
          "09:00 AM": "Team meetings & project planning 🗂️",
        },
        afternoon: {
          "12:00 PM": "Lunch break 🍽️",
          "01:00 PM": "Development & coding session 💻",
          "04:00 PM": "Review community contributions 🌐",
        },
        evening: {
          "06:00 PM": "Dinner with family 🍲",
          "07:30 PM": "Personal projects & research 📚",
        },
        night: {
          "10:00 PM": "Relaxation & reading 📖",
          "11:00 PM": "Sleep 🛏️",
        },
      },
      Tuesday: {
        morning: {
          "07:00 AM": "Wake up & exercise 🏃",
          "08:00 AM": "Breakfast & news update 📰",
          "09:00 AM": "Design discussions & brainstorming 💡",
        },
        afternoon: {
          "12:00 PM": "Lunch break 🥗",
          "01:00 PM": "Feature development & testing 🛠️",
          "04:00 PM": "Community engagement & feedback 📣",
        },
        evening: {
          "06:00 PM": "Dinner 🍛",
          "07:30 PM": "Open source collaboration 🤝",
        },
        night: {
          "10:00 PM": "Leisure time & hobbies 🎸",
          "11:00 PM": "Sleep 🛏️",
        },
      },
      Wednesday: {
        morning: {
          "07:00 AM": "Wake up & meditation 🧘",
          "08:00 AM": "Breakfast & planning 🗒️",
          "09:00 AM": "Code reviews & merges 🔍",
        },
        afternoon: {
          "12:00 PM": "Lunch break 🍜",
          "01:00 PM": "Documentation & writing 🖋️",
          "04:00 PM": "User support & issue tracking 🛠️",
        },
        evening: {
          "06:00 PM": "Dinner 🍲",
          "07:30 PM": "Artistic exploration & 3D modeling 🎨",
        },
        night: {
          "10:00 PM": "Reading & relaxation 📖",
          "11:00 PM": "Sleep 🛏️",
        },
      },
      Thursday: {
        morning: {
          "07:00 AM": "Wake up & stretching 🧘",
          "08:00 AM": "Breakfast & emails 📧",
          "09:00 AM": "Strategic planning & meetings 🗂️",
        },
        afternoon: {
          "12:00 PM": "Lunch break 🥪",
          "01:00 PM": "Development & feature implementation 💻",
          "04:00 PM": "Community outreach & updates 🌐",
        },
        evening: {
          "06:00 PM": "Dinner 🍝",
          "07:30 PM": "Personal coding projects 🖥️",
        },
        night: {
          "10:00 PM": "Leisure activities 🎮",
          "11:00 PM": "Sleep 🛏️",
        },
      },
      Friday: {
        morning: {
          "07:00 AM": "Wake up & light exercise 🚶",
          "08:00 AM": "Breakfast & project review 🗒️",
          "09:00 AM": "Team collaborations & sync-ups 🤝",
        },
        afternoon: {
          "12:00 PM": "Lunch break 🍛",
          "01:00 PM": "Bug fixing & optimization 🛠️",
          "04:00 PM": "Community Q&A session ❓",
        },
        evening: {
          "06:00 PM": "Dinner 🍲",
          "07:30 PM": "Exploring new technologies 🔍",
        },
        night: {
          "10:00 PM": "Reading & unwinding 📖",
          "11:00 PM": "Sleep 🛏️",
        },
      },
      Saturday: {
        morning: {
          "08:00 AM": "Wake up & leisure breakfast 🥞",
          "09:00 AM": "Outdoor activities & relaxation 🌳",
        },
        afternoon: {
          "12:00 PM": "Lunch with friends 🍴",
          "01:00 PM": "Creative projects & hobbies 🎨",
        },
        evening: {
          "06:00 PM": "Dinner 🍣",
          "07:30 PM": "Movie night or cultural events 🎬",
        },
        night: {
          "10:00 PM": "Reflecting & planning 🗒️",
          "11:00 PM": "Sleep 🛏️",
        },
      },
      Sunday: {
        morning: {
          "08:00 AM": "Wake up & family time 👨‍👩‍👧‍👦",
          "09:00 AM": "Brunch 🍳",
        },
        afternoon: {
          "12:00 PM": "Rest & leisure 🛋️",
          "01:00 PM": "Reading & learning 📚",
        },
        evening: {
          "06:00 PM": "Dinner 🍜",
          "07:30 PM": "Preparation for the week ahead 📅",
        },
        night: {
          "10:00 PM": "Early to bed 🛏️",
        },
      },
    },
  },
  "Linus Torvalds": {
    image: "/images/Linus Torvalds.png",
    week: {
      Monday: {
        morning: {
          "07:00 AM": "Wake up & morning coffee ☕",
          "07:30 AM": "Check & respond to emails 📧",
          "09:00 AM": "Deep coding & Linux kernel maintenance 👨‍💻",
        },
        afternoon: {
          "12:30 PM": "Lunch with family 🍽️",
          "02:00 PM": "More development work, reviewing patches 🛠️",
        },
        evening: {
          "06:00 PM": "Scuba diving practice (if possible) 🤿",
          "07:30 PM": "Dinner & spending time with family 🍽️",
        },
        night: {
          "09:00 PM": "Reading tech blogs & news 📖",
          "10:30 PM": "Sleep 🛏️",
        },
      },
      Tuesday: {
        morning: {
          "07:00 AM": "Wake up & quick stretch 🚶",
          "07:30 AM": "Code review & kernel updates 🔍",
          "09:30 AM": "Deep work & debugging 🖥️",
        },
        afternoon: {
          "12:30 PM": "Lunch & walk outside 🌳",
          "02:00 PM": "Video calls with contributors 📞",
          "04:00 PM": "Coding & kernel discussion in forums 💻",
        },
        evening: {
          "06:00 PM": "Workout & relaxation 🏋️‍♂️",
          "07:30 PM": "Dinner 🍽️",
        },
        night: {
          "09:00 PM": "Gaming or hobby programming 🎮",
          "10:30 PM": "Sleep 🛏️",
        },
      },
      Wednesday: {
        morning: {
          "07:00 AM": "Wake up & coffee ☕",
          "08:00 AM": "Code review & bug fixing 🔧",
        },
        afternoon: {
          "12:00 PM": "Lunch 🍲",
          "01:30 PM": "Writing & discussing Linux proposals 📝",
        },
        evening: {
          "06:00 PM": "Outdoor walk 🌳",
          "07:00 PM": "Family dinner & relaxation 🍽️",
        },
        night: {
          "09:00 PM": "Watching documentaries or reading 📺",
          "10:30 PM": "Sleep 🛏️",
        },
      },
      Thursday: {
        morning: {
          "07:00 AM": "Wake up & morning emails 📧",
          "08:00 AM": "Kernel patch review & merging 🔍",
        },
        afternoon: {
          "12:30 PM": "Lunch 🥪",
          "02:00 PM": "Kernel testing & performance tuning ⚙️",
        },
        evening: {
          "06:00 PM": "Exercise & relaxation 🏃‍♂️",
          "07:30 PM": "Dinner with family 🍛",
        },
        night: {
          "09:00 PM": "Tech reading or gaming 🎮",
          "10:30 PM": "Sleep 🛏️",
        },
      },
      Friday: {
        morning: {
          "07:00 AM": "Wake up & plan the day 📝",
          "08:00 AM": "Code review & community discussions 💻",
        },
        afternoon: {
          "12:00 PM": "Lunch & casual reading 📖",
          "02:00 PM": "Feature brainstorming & testing 🛠️",
        },
        evening: {
          "06:00 PM": "Swimming or outdoor activity 🏊",
          "07:30 PM": "Dinner 🍕",
        },
        night: {
          "09:00 PM": "Relaxation & spending time with family ❤️",
          "10:30 PM": "Sleep 🛏️",
        },
      },
      Saturday: {
        morning: {
          "08:00 AM": "Wake up & relax 🌅",
          "09:00 AM": "Personal programming projects 👨‍💻",
        },
        afternoon: {
          "12:30 PM": "Lunch 🥗",
          "02:00 PM": "Scuba diving or outdoor activities 🤿",
        },
        evening: {
          "06:00 PM": "Family time & dinner 🍜",
          "08:00 PM": "Watch movies or play games 🎬",
        },
        night: {
          "10:30 PM": "Sleep 🛏️",
        },
      },
      Sunday: {
        morning: {
          "08:30 AM": "Wake up & coffee ☕",
          "10:00 AM": "Leisurely coding or open-source work 🖥️",
        },
        afternoon: {
          "12:30 PM": "Lunch & tech discussions 🍽️",
          "03:00 PM": "Outdoor activities 🌳",
        },
        evening: {
          "06:30 PM": "Dinner with family & relaxation 🍷",
        },
        night: {
          "09:00 PM": "Reading or hobby projects 📚",
          "10:30 PM": "Sleep 🛏️",
        },
      },
    },
  },
  "Bjarne Stroustrup": {
    image: "/images/Bjrane.png",
    week: {
      Monday: {
        morning: {
          "06:30 AM": "Wake up & morning coffee ☕",
          "07:00 AM": "Reading & reviewing new research papers 📖",
          "08:00 AM": "Breakfast & light exercise 🏋️‍♂️",
          "09:00 AM": "Deep work on C++ improvements & academic research 💻",
        },
        afternoon: {
          "12:30 PM": "Lunch & short break 🍽️",
          "02:00 PM": "Meetings with students & researchers 👥",
          "04:00 PM": "Code review & writing articles ✍️",
        },
        evening: {
          "06:30 PM": "Outdoor walk or cycling 🚴",
          "07:30 PM": "Dinner with family 🍷",
        },
        night: {
          "09:00 PM": "Casual reading or watching documentaries 🎥",
          "10:30 PM": "Sleep 🛏️",
        },
      },
      Tuesday: {
        morning: {
          "06:30 AM": "Wake up & coffee ☕",
          "07:00 AM": "Plan the day & answer emails 📧",
          "08:30 AM": "Deep focus on C++ development & debugging 🖥️",
        },
        afternoon: {
          "12:00 PM": "Lunch & book reading 📖",
          "01:30 PM": "Lecturing & mentoring students 🎓",
          "03:00 PM": "Writing technical papers & documentation 📝",
        },
        evening: {
          "06:00 PM": "Light exercise & relaxation 🏃",
          "07:30 PM": "Dinner 🍲",
        },
        night: {
          "09:00 PM": "Writing notes & brainstorming new ideas 💡",
          "10:30 PM": "Sleep 🛏️",
        },
      },
      Wednesday: {
        morning: {
          "06:30 AM": "Wake up & morning meditation 🧘",
          "07:00 AM": "Research on C++ concepts & future features 🔍",
          "09:00 AM": "Technical work & coding 💻",
        },
        afternoon: {
          "12:30 PM": "Lunch & a walk 🚶",
          "02:00 PM": "Collaboration with other researchers 📊",
          "04:00 PM": "Reviewing industry trends & tech updates 🌎",
        },
        evening: {
          "06:30 PM": "Reading fiction or philosophy books 📚",
          "07:30 PM": "Dinner 🍽️",
        },
        night: {
          "09:00 PM": "Writing personal notes & reflections ✍️",
          "10:30 PM": "Sleep 🛏️",
        },
      },
      Thursday: {
        morning: {
          "06:30 AM": "Wake up & plan tasks for the day 📋",
          "08:00 AM": "Deep programming session on C++ projects 💻",
        },
        afternoon: {
          "12:30 PM": "Lunch 🍛",
          "02:00 PM": "Meetings with developers & industry experts 👥",
        },
        evening: {
          "06:00 PM": "Exercise & relaxation 🏋️",
          "07:30 PM": "Dinner 🍕",
        },
        night: {
          "09:00 PM": "Reflecting on the day & casual reading 📖",
          "10:30 PM": "Sleep 🛏️",
        },
      },
      Friday: {
        morning: {
          "06:30 AM": "Wake up & enjoy a quiet morning ☕",
          "07:30 AM": "Writing & refining research papers ✍️",
        },
        afternoon: {
          "12:30 PM": "Lunch & relaxation 🍲",
          "02:00 PM": "Brainstorming new C++ features & enhancements 🚀",
        },
        evening: {
          "06:00 PM": "Outdoor cycling & relaxation 🚴",
          "07:30 PM": "Dinner with friends & family 🍽️",
        },
        night: {
          "09:00 PM": "Listening to classical music 🎵",
          "10:30 PM": "Sleep 🛏️",
        },
      },
      Saturday: {
        morning: {
          "08:00 AM": "Wake up & relax 🌅",
          "09:00 AM": "Leisurely programming & hobby projects 🎨",
        },
        afternoon: {
          "12:30 PM": "Lunch & long walk 🌳",
          "02:00 PM": "Engaging with the programming community 💬",
        },
        evening: {
          "06:00 PM": "Playing chess or board games ♟️",
          "07:30 PM": "Dinner 🍜",
        },
        night: {
          "09:00 PM": "Reading books or enjoying a movie 🎬",
          "10:30 PM": "Sleep 🛏️",
        },
      },
      Sunday: {
        morning: {
          "08:30 AM": "Wake up & breakfast with family ☕",
          "10:00 AM": "Light programming & hobby coding 🖥️",
        },
        afternoon: {
          "12:30 PM": "Lunch & quiet reading time 📖",
          "03:00 PM": "Relaxing activities & weekend reflection 🌿",
        },
        evening: {
          "06:30 PM": "Dinner & family time 🍷",
        },
        night: {
          "09:00 PM": "Casual discussions & note-taking 📝",
          "10:30 PM": "Sleep 🛏️",
        },
      },
    },
  },
  "Larry Page": {
    image: "/images/Larry.png",
    week: {
      Monday: {
        morning: {
          "06:30 AM": "Wake up & morning meditation 🧘",
          "07:00 AM": "Light exercise & stretching 🏃",
          "08:00 AM": "Breakfast & catching up on news 🌎",
          "09:00 AM": "Deep work on innovation & Google X projects 💡",
        },
        afternoon: {
          "12:30 PM": "Lunch & quick break 🍽️",
          "02:00 PM": "Meetings with Google executives & product teams 👥",
          "04:00 PM": "Exploring futuristic tech & reading research papers 📖",
        },
        evening: {
          "06:30 PM": "Outdoor walk or biking 🚴",
          "07:30 PM": "Dinner with family & friends 🍷",
        },
        night: {
          "09:00 PM": "Casual brainstorming & journaling ✍️",
          "10:30 PM": "Sleep 🛏️",
        },
      },
      Tuesday: {
        morning: {
          "06:30 AM": "Wake up & review new tech trends 🔍",
          "07:00 AM": "Exercise & mindfulness 🏋️",
          "08:30 AM": "Breakfast & family time ☕",
          "09:30 AM": "Strategy meetings & project planning 🚀",
        },
        afternoon: {
          "12:30 PM": "Lunch & quick relaxation 🍲",
          "02:00 PM": "Hands-on coding & experimenting with AI models 🤖",
        },
        evening: {
          "06:00 PM": "Tennis or cycling for fitness 🎾",
          "07:30 PM": "Dinner & book reading 📚",
        },
        night: {
          "09:00 PM": "Innovative thinking & note-taking 📝",
          "10:30 PM": "Sleep 🛏️",
        },
      },
      Wednesday: {
        morning: {
          "06:30 AM": "Wake up & morning coffee ☕",
          "07:00 AM": "Tech discussions & idea exploration 💭",
          "09:00 AM": "Deep work on Google innovations & patents 💡",
        },
        afternoon: {
          "12:30 PM": "Lunch 🍽️",
          "02:00 PM": "Speaking with researchers & AI engineers 🤝",
          "04:00 PM": "Reading books & exploring new tech concepts 📖",
        },
        evening: {
          "06:30 PM": "Workout & relaxation 🏋️",
          "07:30 PM": "Dinner with close friends 🍕",
        },
        night: {
          "09:00 PM": "Writing & reflecting on ideas ✍️",
          "10:30 PM": "Sleep 🛏️",
        },
      },
      Thursday: {
        morning: {
          "06:30 AM": "Wake up & exercise 🏃",
          "08:00 AM": "Breakfast & checking emails 📧",
          "09:30 AM": "Focus on innovative projects & research 🔬",
        },
        afternoon: {
          "12:30 PM": "Lunch & networking with thought leaders 🍛",
          "02:00 PM": "Meetings with Alphabet team on futuristic projects 🚀",
        },
        evening: {
          "06:00 PM": "Reading & tech deep dives 📚",
          "07:30 PM": "Dinner & quality time with family 🍷",
        },
        night: {
          "09:00 PM": "Exploring moonshot ideas 🚀",
          "10:30 PM": "Sleep 🛏️",
        },
      },
      Friday: {
        morning: {
          "06:30 AM": "Wake up & light yoga 🧘",
          "07:30 AM": "Experimenting with AI & robotics 🤖",
        },
        afternoon: {
          "12:30 PM": "Lunch & strategy discussions 🍲",
          "02:00 PM": "Collaborating with engineers & tech leaders 💻",
        },
        evening: {
          "06:00 PM": "Hiking or adventure sports 🏞️",
          "07:30 PM": "Dinner 🍕",
        },
        night: {
          "09:00 PM": "Reviewing upcoming innovations 📊",
          "10:30 PM": "Sleep 🛏️",
        },
      },
      Saturday: {
        morning: {
          "08:00 AM": "Wake up & breakfast with family ☀️",
          "09:00 AM": "Casual coding & experimental projects 💻",
        },
        afternoon: {
          "12:30 PM": "Lunch & weekend relaxation 🍜",
          "02:00 PM": "Meeting with entrepreneurs & startups 🚀",
        },
        evening: {
          "06:00 PM": "Outdoor activities & unwinding 🏖️",
          "07:30 PM": "Dinner & philosophical discussions 🧠",
        },
        night: {
          "09:00 PM": "Casual reading & brainstorming 📖",
          "10:30 PM": "Sleep 🛏️",
        },
      },
      Sunday: {
        morning: {
          "08:30 AM": "Wake up & leisure time ☕",
          "10:00 AM": "Creative brainstorming & hobby projects 🎨",
        },
        afternoon: {
          "12:30 PM": "Lunch & quiet time 🍲",
          "03:00 PM": "Reflection on the week & strategic planning 📝",
        },
        evening: {
          "06:30 PM": "Dinner & light socializing 🍷",
        },
        night: {
          "09:00 PM": "Final review of the week's achievements 📊",
          "10:30 PM": "Sleep 🛏️",
        },
      },
    },
  },
};

export default routines;
