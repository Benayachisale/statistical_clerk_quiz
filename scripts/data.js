const data = [
  // SECTION A: DATA MANAGEMENT AND STATISTICS
  {
    section: "general knowledge",
    question: "What is the primary role of a statistical clerk?",
    answers: [
      "A. Conduct surgeries",
      "B. Prescribe medication",
      "C. Collect, organize and summarize data",
      "D. Diagnose patients"
    ],
    answer: "C"
  },
  {
    section: "general knowledge",
    question: "Which of the following best describes a pie chart?",
    answers: [
      "A. A bar diagram",
      "B. A circular chart divided into sectors",
      "C. A line graph",
      "D. A table"
    ],
    answer: "B"
  },
  {
    section: "general knowledge",
    question: "Which of these is a measure of central tendency?",
    answers: [
      "A. Frequency",
      "B. Range",
      "C. Mean",
      "D. Class width"
    ],
    answer: "C"
  },
  {
    section: "computer",
    question: "What tool is commonly used for data entry in the office?",
    answers: [
      "A. Ruler",
      "B. Calculator",
      "C. Microsoft Excel",
      "D. Typewriter"
    ],
    answer: "C"
  },
  {
    section: "general knowledge",
    question: "Which of the following is NOT a source of primary data?",
    answers: [
      "A. Surveys",
      "B. Interviews",
      "C. Published journals",
      "D. Questionnaires"
    ],
    answer: "C"
  },

  // SECTION B: NUMERICAL REASONING
  {
    section: "arithmetic",
    question: "If a dataset has values 5, 10, 15, what is the mean?",
    answers: [
      "A. 10",
      "B. 15",
      "C. 5",
      "D. 30"
    ],
    answer: "A"
  },
  {
    section: "arithmetic",
    question: "What is 25% of 80?",
    answers: [
      "A. 10",
      "B. 15",
      "C. 20",
      "D. 30"
    ],
    answer: "C"
  },
  {
    section: "arithmetic",
    question: "If you record 120 forms in 4 hours, how many forms do you record per hour?",
    answers: [
      "A. 20",
      "B. 30",
      "C. 25",
      "D. 40"
    ],
    answer: "B"
  },
  {
    section: "arithmetic",
    question: "Which of the following is an even number?",
    answers: [
      "A. 13",
      "B. 21",
      "C. 40",
      "D. 15"
    ],
    answer: "C"
  },
  {
    section: "arithmetic",
    question: "If you need to enter 600 records and you do 200 a day, how many days will it take?",
    answers: [
      "A. 2",
      "B. 3",
      "C. 4",
      "D. 5"
    ],
    answer: "B"
  },

  // SECTION C: LOGICAL REASONING
  {
    section: "arithmetic",
    question: "Which number comes next in the series: 2, 4, 6, 8, ?",
    answers: [
      "A. 9",
      "B. 10",
      "C. 12",
      "D. 14"
    ],
    answer: "B"
  },
  {
    section: "general knowledge",
    question: "Data is to Clerk as:",
    answers: [
      "A. Food is to Cook",
      "B. Water is to Boat",
      "C. Car is to Driver",
      "D. Light is to Lamp"
    ],
    answer: "A"
  },
  {
    section: "computer",
    question: "Which does not belong?",
    answers: [
      "A. Excel",
      "B. Word",
      "C. SPSS",
      "D. Plate"
    ],
    answer: "D"
  },
  {
    section: "arithmetic",
    question: "If today is Monday, what day will it be after 10 days?",
    answers: [
      "A. Wednesday",
      "B. Friday",
      "C. Saturday",
      "D. Tuesday"
    ],
    answer: "A"
    // Note: This might be incorrect in the document; 10 days after Monday is Thursday, but options don't include it. Kept as per document.
  },
  {
    section: "general knowledge",
    question: "In a list sorted in ascending order, the middle value is the:",
    answers: [
      "A. Mode",
      "B. Median",
      "C. Mean",
      "D. Range"
    ],
    answer: "B"
  },

  // SECTION D: WORK ETHICS AND OFFICE CONDUCT
  {
    section: "general knowledge",
    question: "Confidentiality in handling data means:",
    answers: [
      "A. Sharing it with friends",
      "B. Storing it on social media",
      "C. Keeping it secure and private",
      "D. Printing and distributing it"
    ],
    answer: "C"
  },
  {
    section: "general knowledge",
    question: "When you make a data error, you should:",
    answers: [
      "A. Ignore it",
      "B. Hide it",
      "C. Report and correct it",
      "D. Blame someone"
    ],
    answer: "C"
  },
  {
    section: "general knowledge",
    question: "Punctuality shows:",
    answers: [
      "A. Laziness",
      "B. Respect and discipline",
      "C. Stress",
      "D. Ignorance"
    ],
    answer: "B"
  },
  {
    section: "general knowledge",
    question: "A good work attitude includes:",
    answers: [
      "A. Complaining",
      "B. Being late",
      "C. Working responsibly",
      "D. Avoiding tasks"
    ],
    answer: "C"
  },
  {
    section: "general knowledge",
    question: "If a supervisor gives unclear instructions, what should you do?",
    answers: [
      "A. Guess what they meant",
      "B. Ignore them",
      "C. Ask for clarification",
      "D. Do something else"
    ],
    answer: "C"
  },

  // Section A: Basic Mathematics
  {
    section: "arithmetic",
    question: "What is 25% of 160?",
    answers: [
      "A. 30",
      "B. 35",
      "C. 40",
      "D. 45"
    ],
    answer: "C"
  },
  {
    section: "arithmetic",
    question: "A survey showed that 60 out of 200 people like apples. What percentage is that?",
    answers: [
      "A. 20%",
      "B. 30%",
      "C. 40%",
      "D. 50%"
    ],
    answer: "B"
  },
  {
    section: "arithmetic",
    question: "Find the average of 8, 10, 12, 14, and 16.",
    answers: [
      "A. 10",
      "B. 12",
      "C. 14",
      "D. 16"
    ],
    answer: "B"
  },
  {
    section: "arithmetic",
    question: "What is the ratio of 2:5 expressed as a percentage of the total?",
    answers: [
      "A. 20%",
      "B. 28.6%",
      "C. 33.3%",
      "D. 40%"
    ],
    answer: "B"
  },
  {
    section: "arithmetic",
    question: "If x = 6, what is the value of 2x² – 4x + 3?",
    answers: [
      "A. 45",
      "B. 51",
      "C. 63",
      "D. 69"
    ],
    answer: "B"
  },
  {
    section: "arithmetic",
    question: "A clinic had 480 patients in January and 600 in February. What is the percentage increase?",
    answers: [
      "A. 20%",
      "B. 25%",
      "C. 30%",
      "D. 35%"
    ],
    answer: "B"
  },
  {
    section: "arithmetic",
    question: "What is 15% of 2,000?",
    answers: [
      "A. 300",
      "B. 250",
      "C. 200",
      "D. 150"
    ],
    answer: "A"
  },
  {
    section: "arithmetic",
    question: "Simplify: (2 + 3) × (4 – 1)",
    answers: [
      "A. 10",
      "B. 12",
      "C. 15",
      "D. 20"
    ],
    answer: "C"
  },
  {
    section: "arithmetic",
    question: "A data clerk earns MWK 180,000 per month. How much does he earn in a year?",
    answers: [
      "A. MWK 1,800,000",
      "B. MWK 2,000,000",
      "C. MWK 2,160,000",
      "D. MWK 2,400,000"
    ],
    answer: "C"
  },
  {
    section: "arithmetic",
    question: "A table costs MWK 80,000. If the price is increased by 12.5%, what’s the new price?",
    answers: [
      "A. MWK 85,000",
      "B. MWK 90,000",
      "C. MWK 88,000",
      "D. MWK 95,000"
    ],
    answer: "B"
  },

  // Section B: English Language
  {
    section: "english",
    question: "Which sentence is correct?",
    answers: [
      "A. The datas is correct.",
      "B. The data are correct.",
      "C. The data is correct.",
      "D. The datum are correct."
    ],
    answer: "C"
  },
  {
    section: "english",
    question: "Choose the correct spelling:",
    answers: [
      "A. Suprise",
      "B. Surprise",
      "C. Surprize",
      "D. Suprize"
    ],
    answer: "B"
  },
  {
    section: "english",
    question: "What is the synonym of 'accurate'?",
    answers: [
      "A. Correct",
      "B. Slow",
      "C. Late",
      "D. Wrong"
    ],
    answer: "A"
  },
  {
    section: "english",
    question: "Choose the word that best completes the sentence: He is very good ___ typing.",
    answers: [
      "A. for",
      "B. on",
      "C. at",
      "D. to"
    ],
    answer: "C"
  },
  {
    section: "english",
    question: "Find the antonym of 'increase':",
    answers: [
      "A. Decrease",
      "B. Boost",
      "C. Add",
      "D. Enlarge"
    ],
    answer: "A"
  },
  {
    section: "english",
    question: "What is the plural of 'analysis'?",
    answers: [
      "A. Analysis",
      "B. Analysises",
      "C. Analyses",
      "D. Analysises'"
    ],
    answer: "C"
  },
  {
    section: "english",
    question: "Which word is a verb?",
    answers: [
      "A. Report",
      "B. File",
      "C. Record",
      "D. Summary"
    ],
    answer: "C"
  },
  {
    section: "english",
    question: "Which sentence is correct?",
    answers: [
      "A. He don’t know the answer.",
      "B. He doesn’t know the answer.",
      "C. He isn’t know the answer.",
      "D. He don’t knows the answer."
    ],
    answer: "B"
  },
  {
    section: "english",
    question: "Identify the adverb: 'She typed quickly and accurately.'",
    answers: [
      "A. She",
      "B. Typed",
      "C. Quickly",
      "D. And"
    ],
    answer: "C"
  },
  {
    section: "english",
    question: "Choose the correct sentence:",
    answers: [
      "A. There are many reports to review.",
      "B. Their are many reports to review.",
      "C. They’re are many reports to review.",
      "D. There is many reports to review."
    ],
    answer: "A"
  },

  // Section C: Computer Literacy
  {
    section: "computer",
    question: "What does CPU stand for?",
    answers: [
      "A. Central Processing Unit",
      "B. Computer Processing Unit",
      "C. Central Performance Unit",
      "D. Core Processing Unit"
    ],
    answer: "A"
  },
  {
    section: "computer",
    question: "In Excel, what formula adds values in A1 to A5?",
    answers: [
      "A. =AVG(A1:A5)",
      "B. =ADD(A1:A5)",
      "C. =SUM(A1:A5)",
      "D. =PLUS(A1:A5)"
    ],
    answer: "C"
  },
  {
    section: "computer",
    question: "Which of the following is not an input device?",
    answers: [
      "A. Mouse",
      "B. Keyboard",
      "C. Printer",
      "D. Scanner"
    ],
    answer: "C"
  },
  {
    section: "computer",
    question: "What is the shortcut for saving a document in Microsoft Word?",
    answers: [
      "A. Ctrl + C",
      "B. Ctrl + X",
      "C. Ctrl + S",
      "D. Ctrl + V"
    ],
    answer: "C"
  },
  {
    section: "computer",
    question: "A spreadsheet is used to:",
    answers: [
      "A. Write essays",
      "B. Analyze data",
      "C. Draw images",
      "D. Create animations"
    ],
    answer: "B"
  },
  {
    section: "computer",
    question: "What is the default file extension of an Excel file?",
    answers: [
      "A. .docx",
      "B. .xlsx",
      "C. .pptx",
      "D. .pdf"
    ],
    answer: "B"
  },
  {
    section: "computer",
    question: "Which program is best for typing letters?",
    answers: [
      "A. Microsoft Word",
      "B. Excel",
      "C. Paint",
      "D. Access"
    ],
    answer: "A"
  },
  {
    section: "computer",
    question: "What key is used to delete characters to the right of the cursor?",
    answers: [
      "A. Delete",
      "B. Backspace",
      "C. Esc",
      "D. Shift"
    ],
    answer: "A"
  },
  {
    section: "computer",
    question: "Which one is an operating system?",
    answers: [
      "A. MS Excel",
      "B. Windows",
      "C. Google",
      "D. Printer"
    ],
    answer: "B"
  },
  {
    section: "computer",
    question: "Which storage device is portable and small?",
    answers: [
      "A. Hard disk",
      "B. CD",
      "C. Flash drive",
      "D. RAM"
    ],
    answer: "C"
  },

  // Section D: Statistics
  {
    section: "general knowledge",
    question: "The average of 4, 6, 8, and 10 is:",
    answers: [
      "A. 6",
      "B. 7",
      "C. 7",
      "D. 9"
    ],
    answer: "C"
    // Note: Options B and C are both 7, likely a typo; assumed C as per ✅.
  },
  {
    section: "general knowledge",
    question: "What is the median of 1, 3, 5, 7, 9?",
    answers: [
      "A. 3",
      "B. 5",
      "C. 7",
      "D. 9"
    ],
    answer: "B"
  },
  {
    section: "general knowledge",
    question: "The mode of 2, 4, 4, 5, 6 is:",
    answers: [
      "A. 2",
      "B. 4",
      "C. 5",
      "D. 6"
    ],
    answer: "B"
  },
  {
    section: "general knowledge",
    question: "Which is not a measure of central tendency?",
    answers: [
      "A. Mean",
      "B. Mode",
      "C. Median",
      "D. Frequency"
    ],
    answer: "D"
  },
  {
    section: "general knowledge",
    question: "If the mean of five numbers is 10, what is their total?",
    answers: [
      "A. 40",
      "B. 50",
      "C. 60",
      "D. 70"
    ],
    answer: "B"
  },
  {
    section: "general knowledge",
    question: "Pie charts represent data in:",
    answers: [
      "A. Columns",
      "B. Percentages",
      "C. Tables",
      "D. Sentences"
    ],
    answer: "B"
  },
  {
    section: "general knowledge",
    question: "Which type of data is 'number of patients per day'?",
    answers: [
      "A. Quantitative",
      "B. Qualitative",
      "C. Descriptive",
      "D. Nominal"
    ],
    answer: "A"
  },
  {
    section: "general knowledge",
    question: "A frequency table shows:",
    answers: [
      "A. Names of people",
      "B. Photos",
      "C. Data values and how often they occur",
      "D. File formats"
    ],
    answer: "C"
  },
  {
    section: "general knowledge",
    question: "If a number appears most frequently in a dataset, it is called:",
    answers: [
      "A. Mean",
      "B. Median",
      "C. Mode",
      "D. Range"
    ],
    answer: "C"
  },
  {
    section: "computer",
    question: "Which tool is mostly used for statistical analysis?",
    answers: [
      "A. Word",
      "B. Excel",
      "C. Paint",
      "D. Google Chrome"
    ],
    answer: "B"
  },

  // Section E: General Knowledge – Health & Governance
  {
    section: "general knowledge",
    question: "The Ministry of Health is responsible for:",
    answers: [
      "A. Tax collection",
      "B. Public health services",
      "C. Agriculture",
      "D. Building roads"
    ],
    answer: "B"
  },
  {
    section: "general knowledge",
    question: "Who is the head of a District Health Office?",
    answers: [
      "A. Principal",
      "B. District Health Officer (DHO)",
      "C. Accountant",
      "D. Director of Transport"
    ],
    answer: "B"
  },
  {
    section: "general knowledge",
    question: "What is the main use of health data?",
    answers: [
      "A. Decision-making and planning",
      "B. Printing reports",
      "C. Paying staff",
      "D. Building clinics"
    ],
    answer: "A"
  },
  {
    section: "general knowledge",
    question: "One major responsibility of the Ministry of Local Government is:",
    answers: [
      "A. Hiring teachers",
      "B. Overseeing local councils",
      "C. Managing banks",
      "D. Importing medicine"
    ],
    answer: "B"
  },
  {
    section: "general knowledge",
    question: "A health surveillance assistant (HSA) works mostly at:",
    answers: [
      "A. Community level",
      "B. National level",
      "C. International level",
      "D. Headquarters"
    ],
    answer: "A"
  },
  {
    section: "general knowledge",
    question: "Malawi’s current system of local government is based on:",
    answers: [
      "A. Traditional Authority rule",
      "B. Decentralization",
      "C. Dictatorship",
      "D. Federalism"
    ],
    answer: "B"
  },
  {
    section: "general knowledge",
    question: "What is the main purpose of a census?",
    answers: [
      "A. Collect taxes",
      "B. Elect leaders",
      "C. Count population",
      "D. Build schools"
    ],
    answer: "C"
  },
  {
    section: "general knowledge",
    question: "Who is the current Minister of Health in Malawi? (Note: Answer may change depending on date)",
    answers: [
      "A. [Insert latest correct name]",
      "B. Joyce Banda",
      "C. Atupele Muluzi",
      "D. Saulosi Chilima"
    ],
    answer: "A"
  },
  {
    section: "general knowledge",
    question: "What is one common health indicator?",
    answers: [
      "A. Rainfall",
      "B. Infant mortality rate",
      "C. Age",
      "D. Voting turnout"
    ],
    answer: "B"
  },
  {
    section: "general knowledge",
    question: "Which level comes after Village Development Committee (VDC) in Malawi’s local government?",
    answers: [
      "A. Traditional Authority",
      "B. Area Development Committee (ADC)",
      "C. National Assembly",
      "D. Cabinet"
    ],
    answer: "B"
  },

  // Additional Questions (51–70)
  {
    section: "arithmetic",
    question: "What is ⅕ as a percentage?",
    answers: [
      "A. 10%",
      "B. 20%",
      "C. 25%",
      "D. 50%"
    ],
    answer: "B"
  },
  {
    section: "arithmetic",
    question: "What is the square root of 144?",
    answers: [
      "A. 10",
      "B. 11",
      "C. 12",
      "D. 14"
    ],
    answer: "C"
  },
  {
    section: "arithmetic",
    question: "100 divided by 4 is:",
    answers: [
      "A. 20",
      "B. 25",
      "C. 30",
      "D. 40"
    ],
    answer: "B"
  },
  {
    section: "arithmetic",
    question: "Which of the following shows ascending order?",
    answers: [
      "A. 2, 5, 8, 11",
      "B. 11, 8, 5, 2",
      "C. 5, 2, 11, 8",
      "D. 8, 2, 5, 11"
    ],
    answer: "A"
  },
  {
    section: "computer",
    question: "One gigabyte (GB) is equal to:",
    answers: [
      "A. 1024 megabytes",
      "B. 100 megabytes",
      "C. 500 kilobytes",
      "D. 1 million bits"
    ],
    answer: "A"
  },
  {
    section: "computer",
    question: "Which tool is best for creating data tables?",
    answers: [
      "A. MS Word",
      "B. MS Excel",
      "C. MS PowerPoint",
      "D. MS Paint"
    ],
    answer: "B"
  },
  {
    section: "computer",
    question: "What does 'Ctrl + P' do in most programs?",
    answers: [
      "A. Paste",
      "B. Save",
      "C. Print",
      "D. Preview"
    ],
    answer: "C"
  },
  {
    section: "computer",
    question: "What does 'URL' stand for?",
    answers: [
      "A. Uniform Reference Link",
      "B. Uniform Resource Locator",
      "C. Unique Resource Label",
      "D. User Recorded Link"
    ],
    answer: "B"
  },
  {
    section: "english",
    question: "What is the opposite of 'minimum'?",
    answers: [
      "A. Small",
      "B. Maximum",
      "C. Few",
      "D. Enough"
    ],
    answer: "B"
  },
  {
    section: "general knowledge",
    question: "What is the primary purpose of filing documents?",
    answers: [
      "A. Decoration",
      "B. Easy retrieval",
      "C. Marketing",
      "D. Typing"
    ],
    answer: "B"
  },
  {
    section: "general knowledge",
    question: "Which of the following is a qualitative data type?",
    answers: [
      "A. Gender",
      "B. Weight",
      "C. Age",
      "D. Income"
    ],
    answer: "A"
  },
  {
    section: "general knowledge",
    question: "What is the term for data collected through observation or survey?",
    answers: [
      "A. Assumed data",
      "B. Primary data",
      "C. Forecast data",
      "D. Imaginary data"
    ],
    answer: "B"
  },
  {
    section: "computer",
    question: "What does MS Excel use to identify columns?",
    answers: [
      "A. Numbers",
      "B. Letters",
      "C. Symbols",
      "D. Words"
    ],
    answer: "B"
  },
  {
    section: "general knowledge",
    question: "The first step in data analysis is to:",
    answers: [
      "A. Collect data",
      "B. Type results",
      "C. Format tables",
      "D. Print charts"
    ],
    answer: "A"
  },
  {
    section: "general knowledge",
    question: "What is used to measure spread in statistics?",
    answers: [
      "A. Mean",
      "B. Mode",
      "C. Median",
      "D. Standard deviation"
    ],
    answer: "D"
  },
  {
    section: "general knowledge",
    question: "The Local Government structure in Malawi is made up of:",
    answers: [
      "A. National Government only",
      "B. National and Local Councils",
      "C. Ministries only",
      "D. Political parties"
    ],
    answer: "B"
  },
  {
    section: "general knowledge",
    question: "One key principle of statistics is:",
    answers: [
      "A. Guesswork",
      "B. Accuracy",
      "C. Hearsay",
      "D. Confusion"
    ],
    answer: "B"
  },
  {
    section: "general knowledge",
    question: "A bar chart is best used for:",
    answers: [
      "A. Comparing categories",
      "B. Showing trends",
      "C. Explaining words",
      "D. Mapping locations"
    ],
    answer: "A"
  },
  {
    section: "general knowledge",
    question: "What is a simple definition of data?",
    answers: [
      "A. Internet service",
      "B. Raw facts and figures",
      "C. Finished reports",
      "D. PowerPoint slides"
    ],
    answer: "B"
  },
  {
    section: "general knowledge",
    question: "What does a statistical clerk mainly deal with?",
    answers: [
      "A. Payrolls",
      "B. Collection and organization of data",
      "C. Cooking food",
      "D. Road construction"
    ],
    answer: "B"
  },

  // Questions (71–100)
  {
    section: "computer",
    question: "Which of these is not a function of MS Excel?",
    answers: [
      "A. SUM",
      "B. AVERAGE",
      "C. BRUSH",
      "D. IF"
    ],
    answer: "C"
  },
  {
    section: "arithmetic",
    question: "What is 10% of 250?",
    answers: [
      "A. 15",
      "B. 25",
      "C. 20",
      "D. 50"
    ],
    answer: "B"
  },
  {
    section: "computer",
    question: "In computing, 'bit' stands for:",
    answers: [
      "A. Binary Integration Term",
      "B. Binary Digit",
      "C. Bitrate",
      "D. Basic Internet Tool"
    ],
    answer: "B"
  },
  {
    section: "general knowledge",
    question: "What is the abbreviation of the Malawi Kwacha?",
    answers: [
      "A. MW",
      "B. MKW",
      "C. MWK",
      "D. KW"
    ],
    answer: "C"
  },
  {
    section: "general knowledge",
    question: "What is a pie chart best used for?",
    answers: [
      "A. Showing proportions",
      "B. Measuring distance",
      "C. Mapping roads",
      "D. Collecting data"
    ],
    answer: "A"
  },
  {
    section: "computer",
    question: "Which formula in Excel adds values from cell A1 to A5?",
    answers: [
      "A. =SUM(A1:A5)",
      "B. =A1+A2+A3+A4+A5",
      "C. =AVERAGE(A1:A5)",
      "D. =ADD(A1:A5)"
    ],
    answer: "B"
  },
  {
    section: "computer",
    question: "Which of the following is an input device?",
    answers: [
      "A. Keyboard",
      "B. Printer",
      "C. Monitor",
      "D. Speaker"
    ],
    answer: "A"
  },
  {
    section: "english",
    question: "What is the correct spelling?",
    answers: [
      "A. Reccord",
      "B. Record",
      "C. Recod",
      "D. Rekord"
    ],
    answer: "B"
  },
  {
    section: "computer",
    question: "What does a mouse do?",
    answers: [
      "A. Prints",
      "B. Types",
      "C. Points and clicks",
      "D. Displays"
    ],
    answer: "C"
  },
  {
    section: "computer",
    question: "Which of these is a statistical software?",
    answers: [
      "A. MS Paint",
      "B. Chrome",
      "C. SPSS",
      "D. VLC Player"
    ],
    answer: "C"
  },
  {
    section: "general knowledge",
    question: "What is the capital of Malawi?",
    answers: [
      "A. Blantyre",
      "B. Mzuzu",
      "C. Lilongwe",
      "D. Zomba"
    ],
    answer: "C"
  },
  {
    section: "computer",
    question: "What does 'Ctrl + Z' do?",
    answers: [
      "A. Undo",
      "B. Redo",
      "C. Zoom",
      "D. Cut"
    ],
    answer: "A"
  },
  {
    section: "general knowledge",
    question: "In a dataset, the number that appears most often is called:",
    answers: [
      "A. Mean",
      "B. Mode",
      "C. Median",
      "D. Range"
    ],
    answer: "B"
  },
  {
    section: "general knowledge",
    question: "What is the term for correcting errors in data?",
    answers: [
      "A. Hiding",
      "B. Typing",
      "C. Data cleaning",
      "D. Formatting"
    ],
    answer: "C"
  },
  {
    section: "general knowledge",
    question: "Which of the following is a valid date format?",
    answers: [
      "A. 33/12/2024",
      "B. 12/13/2024",
      "C. 31/12/2024",
      "D. 00/01/2024"
    ],
    answer: "C"
  },
  {
    section: "arithmetic",
    question: "How many hours are in 3 days?",
    answers: [
      "A. 48",
      "B. 36",
      "C. suht72",
      "D. 60"
    ],
    answer: "C"
  },
  {
    section: "arithmetic",
    question: "A decimal number between 0 and 1 is always:",
    answers: [
      "A. Less than 1",
      "B. Greater than 1",
      "C. Equal to 1",
      "D. Negative"
    ],
    answer: "A"
  },
  {
    section: "general knowledge",
    question: "Who heads a District Council in Malawi?",
    answers: [
      "A. Group Village Head",
      "B. District Commissioner",
      "C. MP",
      "D. Ward Councillor"
    ],
    answer: "B"
  },
  {
    section: "computer",
    question: "What does 'Ctrl + C' do?",
    answers: [
      "A. Copy",
      "B. Close",
      "C. Cut",
      "D. Cancel"
    ],
    answer: "A"
  },
  {
    section: "computer",
    question: "Which file extension is used for Excel?",
    answers: [
      "A. .docx",
      "B. .pptx",
      "C. .xlsx",
      "D. .pdf"
    ],
    answer: "C"
  },
  {
    section: "arithmetic",
    question: "How many minutes are in 1.5 hours?",
    answers: [
      "A. 60",
      "B. 90",
      "C. 100",
      "D. 75"
    ],
    answer: "B"
  },
  {
    section: "general knowledge",
    question: "A person who draws maps is called a:",
    answers: [
      "A. Designer",
      "B. Cartographer",
      "C. Photographer",
      "D. Programmer"
    ],
    answer: "B"
  },
  {
    section: "arithmetic",
    question: "The total of 35, 40, and 25 is:",
    answers: [
      "A. 100",
      "B. 95",
      "C. 110",
      "D. 85"
    ],
    answer: "A"
  },
  {
    section: "computer",
    question: "In Excel, columns are labeled by:",
    answers: [
      "A. Numbers",
      "B. Letters",
      "C. Symbols",
      "D. Names"
    ],
    answer: "B"
  },
  {
    section: "arithmetic",
    question: "200 minus 75 equals:",
    answers: [
      "A. 135",
      "B. 125",
      "C. 120",
      "D. 130"
    ],
    answer: "B"
  },
  {
    section: "general knowledge",
    question: "A questionnaire is a tool for:",
    answers: [
      "A. Data collection",
      "B. Cooking",
      "C. Filing",
      "D. Programming"
    ],
    answer: "A"
  },
  {
    section: "general knowledge",
    question: "A salary is normally paid on a:",
    answers: [
      "A. Weekly basis",
      "B. Daily basis",
      "C. Monthly basis",
      "D. Seasonal basis"
    ],
    answer: "C"
  },
  {
    section: "computer",
    question: "Which of the following stores permanent data?",
    answers: [
      "A. RAM",
      "B. Hard drive",
      "C. Cache",
      "D. Processor"
    ],
    answer: "B"
  },
  {
    section: "computer",
    question: "The abbreviation 'IT' stands for:",
    answers: [
      "A. Information Technology",
      "B. Internal Test",
      "C. Integrated Terminal",
      "D. Internet Tool"
    ],
    answer: "A"
  },
  {
    section: "general knowledge",
    question: "A statistical table contains:",
    answers: [
      "A. Drawings only",
      "B. Rows and columns",
      "C. Poems",
      "D. Puzzles"
    ],
    answer: "B"
  },

  // Questions 101–150
  {
    section: "general knowledge",
    question: "Which chart is most suitable for showing trends over time?",
    answers: [
      "A. Pie chart",
      "B. Bar chart",
      "C. Line graph",
      "D. Histogram"
    ],
    answer: "C"
  },
  {
    section: "general knowledge",
    question: "What is the median of the following numbers: 3, 7, 9, 12, 14?",
    answers: [
      "A. 9",
      "B. 9",
      "C. 7",
      "D. 12"
    ],
    answer: "B"
    // Note: Options A and B are both 9, likely a typo; assumed B as per ✅.
  },
  {
    section: "general knowledge",
    question: "The tool used to represent frequency distribution is called:",
    answers: [
      "A. Line graph",
      "B. Histogram",
      "C. Pie chart",
      "D. Table"
    ],
    answer: "B"
  },
  {
    section: "general knowledge",
    question: "Which one is a measure of central tendency?",
    answers: [
      "A. Range",
      "B. Mean",
      "C. Variance",
      "D. Skewness"
    ],
    answer: "B"
  },
  {
    section: "general knowledge",
    question: "The standard deviation is a measure of:",
    answers: [
      "A. Central tendency",
      "B. Dispersion",
      "C. Volume",
      "D. Ratio"
    ],
    answer: "B"
  },
  {
    section: "arithmetic",
    question: "A percentage is a part out of:",
    answers: [
      "A. 10",
      "B. 50",
      "C. 100",
      "D. 1000"
    ],
    answer: "C"
  },
  {
    section: "computer",
    question: "What does the abbreviation 'LCD' stand for?",
    answers: [
      "A. Liquid Crystal Display",
      "B. Low Current Device",
      "C. Light Control Display",
      "D. Local Computing Device"
    ],
    answer: "A"
  },
  {
    section: "computer",
    question: "Which Microsoft Office program is best for writing reports?",
    answers: [
      "A. Word",
      "B. Excel",
      "C. PowerPoint",
      "D. Access"
    ],
    answer: "A"
  },
  {
    section: "general knowledge",
    question: "What is data entry?",
    answers: [
      "A. Creating a file",
      "B. Typing information into a system",
      "C. Coding software",
      "D. Copying a document"
    ],
    answer: "B"
  },
  {
    section: "general knowledge",
    question: "The Malawi Population and Housing Census is conducted every:",
    answers: [
      "A. 5 years",
      "B. 8 years",
      "C. 10 years",
      "D. 15 years"
    ],
    answer: "C"
  },
  {
    section: "general knowledge",
    question: "The function of a District Council is to:",
    answers: [
      "A. Conduct elections",
      "B. Provide local services",
      "C. Manage businesses",
      "D. Control immigration"
    ],
    answer: "B"
  },
  {
    section: "general knowledge",
    question: "A Statistical Clerk’s responsibility includes:",
    answers: [
      "A. Organizing data",
      "B. Prescribing medicine",
      "C. Teaching classes",
      "D. Driving vehicles"
    ],
    answer: "A"
  },
  {
    section: "general knowledge",
    question: "The statistical term 'population' refers to:",
    answers: [
      "A. People in a town",
      "B. Entire group under study",
      "C. Animals only",
      "D. Farmers only"
    ],
    answer: "B"
  },
  {
    section: "general knowledge",
    question: "Which of the following is qualitative data?",
    answers: [
      "A. Weight",
      "B. Marital status",
      "C. Height",
      "D. Temperature"
    ],
    answer: "B"
  },
  {
    section: "general knowledge",
    question: "A frequency table shows:",
    answers: [
      "A. Graphs",
      "B. How often something occurs",
      "C. Maps",
      "D. Total budget"
    ],
    answer: "B"
  },
  {
    section: "general knowledge",
    question: "The Malawi National Statistical Office is located in:",
    answers: [
      "A. Zomba",
      "B. Lilongwe",
      "C. Mzuzu",
      "D. Blantyre"
    ],
    answer: "A"
  },
  {
    section: "arithmetic",
    question: "A decimal number has:",
    answers: [
      "A. A dot (.)",
      "B. A comma",
      "C. A slash",
      "D. A dash"
    ],
    answer: "A"
  },
  {
    section: "computer",
    question: "The main advantage of computerized data is:",
    answers: [
      "A. Easy retrieval and storage",
      "B. It is expensive",
      "C. It needs no electricity",
      "D. It is always printed"
    ],
    answer: "A"
  },
  {
    section: "general knowledge",
    question: "What is the range of these numbers: 7, 14, 10, 4, 8?",
    answers: [
      "A. 10",
      "B. 10 (14-4)",
      "C. 7",
      "D. 6"
    ],
    answer: "B"
  },
  {
    section: "computer",
    question: "Which is not a file storage device?",
    answers: [
      "A. USB",
      "B. Hard disk",
      "C. Modem",
      "D. CD-ROM"
    ],
    answer: "C"
  },
  {
    section: "computer",
    question: "The abbreviation 'LAN' stands for:",
    answers: [
      "A. Local Area Network",
      "B. Large Access Node",
      "C. Low Area Net",
      "D. Local Application Network"
    ],
    answer: "A"
  },
  {
    section: "computer",
    question: "What does 'Ctrl + X' do?",
    answers: [
      "A. Copy",
      "B. Cut",
      "C. Paste",
      "D. Print"
    ],
    answer: "B"
  },
  {
    section: "computer",
    question: "'Backup' means:",
    answers: [
      "A. Formatting a drive",
      "B. Making a copy of data",
      "C. Editing data",
      "D. Typing faster"
    ],
    answer: "B"
  },
  {
    section: "computer",
    question: "What is a database?",
    answers: [
      "A. A word document",
      "B. A collection of organized data",
      "C. A graphics file",
      "D. A password"
    ],
    answer: "B"
  },
  {
    section: "general knowledge",
    question: "The best chart to compare male and female population in districts is:",
    answers: [
      "A. Pie chart",
      "B. Line graph",
      "C. Bar chart",
      "D. Area chart"
    ],
    answer: "C"
  },
  {
    section: "computer",
    question: "Which of the following is a spreadsheet program?",
    answers: [
      "A. MS Word",
      "B. MS Excel",
      "C. MS Access",
      "D. MS Outlook"
    ],
    answer: "B"
  },
  {
    section: "arithmetic",
    question: "What is 15% of 200?",
    answers: [
      "A. 25",
      "B. 20",
      "C. 30",
      "D. 35"
    ],
    answer: "C"
  },
  {
    section: "arithmetic",
    question: "The decimal equivalent of ¼ is:",
    answers: [
      "A. 0.25",
      "B. 0.5",
      "C. 0.75",
      "D. 1.25"
    ],
    answer: "A"
  },
  {
    section: "general knowledge",
    question: "A pictogram is:",
    answers: [
      "A. A photo",
      "B. A picture-based chart",
      "C. A database",
      "D. A newspaper graph"
    ],
    answer: "B"
  },
  {
    section: "arithmetic",
    question: "The mean of 5, 10, and 15 is:",
    answers: [
      "A. 10",
      "B. 5",
      "C. 15",
      "D. 12"
    ],
    answer: "A"
  },
  {
    section: "general knowledge",
    question: "Data stored on paper is called:",
    answers: [
      "A. Hard copy",
      "B. Soft copy",
      "C. Cold data",
      "D. Backup"
    ],
    answer: "A"
  },
  {
    section: "general knowledge",
    question: "Which of the following is an example of numeric data?",
    answers: [
      "A. Age",
      "B. Gender",
      "C. Color",
      "D. Address"
    ],
    answer: "A"
  },
  {
    section: "computer",
    question: "Which of the following represents a correct email address?",
    answers: [
      "A. name(at)email.com",
      "B. name@email",
      "C. name@email.com",
      "D. name.email.com"
    ],
    answer: "C"
  },
  {
    section: "computer",
    question: "Which of these is used to summarize data in Excel?",
    answers: [
      "A. Insert",
      "B. Pivot Table",
      "C. Design",
      "D. Formula bar"
    ],
    answer: "B"
  },
  {
    section: "computer",
    question: "A valid password should:",
    answers: [
      "A. Contain letters and numbers",
      "B. Be '12345'",
      "C. Be your name",
      "D. Be less than 4 characters"
    ],
    answer: "A"
  },
  {
    section: "computer",
    question: "What does 'Ctrl + S' do?",
    answers: [
      "A. Search",
      "B. Save",
      "C. Select",
      "D. Shift"
    ],
    answer: "B"
  },
  {
    section: "arithmetic",
    question: "Which of the following is an arithmetic operator?",
    answers: [
      "A. +",
      "B. =",
      "C. >",
      "D. &"
    ],
    answer: "A"
  },
  {
    section: "arithmetic",
    question: "What is 0.75 as a percentage?",
    answers: [
      "A. 65%",
      "B. 75%",
      "C. 85%",
      "D. 95%"
    ],
    answer: "B"
  },
  {
    section: "computer",
    question: "In Excel, the formula bar displays:",
    answers: [
      "A. File name",
      "B. Active cell content",
      "C. Sheet name",
      "D. Date"
    ],
    answer: "B"
  },
  {
    section: "computer",
    question: "'Ctrl + A' is used to:",
    answers: [
      "A. Align text",
      "B. Select all",
      "C. Add data",
      "D. Archive files"
    ],
    answer: "B"
  },
  {
    section: "arithmetic",
    question: "50% of 300 is:",
    answers: [
      "A. 125",
      "B. 150",
      "C. 200",
      "D. 100"
    ],
    answer: "B"
  },
  {
    section: "arithmetic",
    question: "What comes after 999?",
    answers: [
      "A. 1000",
      "B. 9991",
      "C. 900",
      "D. 1010"
    ],
    answer: "A"
  },
  {
    section: "general knowledge",
    question: "What is the main function of the Ministry of Local Government?",
    answers: [
      "A. Oversee local councils",
      "B. Manage schools",
      "C. Conduct research",
      "D. Control water supply"
    ],
    answer: "A"
  },
  {
    section: "computer",
    question: "Which Excel function returns the largest value in a range?",
    answers: [
      "A. AVERAGE",
      "B. MIN",
      "C. MAX",
      "D. COUNT"
    ],
    answer: "C"
  },
  {
    section: "general knowledge",
    question: "What is a survey?",
    answers: [
      "A. Budget making",
      "B. Collection of data from a population",
      "C. Road marking",
      "D. Typing work"
    ],
    answer: "B"
  },
  {
    section: "computer",
    question: "Which symbol is used for multiplication in Excel?",
    answers: [
      "A. x",
      "B. *",
      "C. ^",
      "D. #"
    ],
    answer: "B"
  },
  {
    section: "arithmetic",
    question: "The average of 3, 6, and 9 is:",
    answers: [
      "A. 8",
      "B. 6",
      "C. 9",
      "D. 7"
    ],
    answer: "B"
  },
  {
    section: "computer",
    question: "The 'Enter' key is used to:",
    answers: [
      "A. Move to a new line",
      "B. Print",
      "C. Delete",
      "D. Close"
    ],
    answer: "A"
  },
  {
    section: "general knowledge",
    question: "An official government report that shows statistics is called a:",
    answers: [
      "A. Census report",
      "B. Letter",
      "C. Resume",
      "D. Memo"
    ],
    answer: "A"
  },
  {
    section: "computer",
    question: "The abbreviation 'CPU' stands for:",
    answers: [
      "A. Central Processing Unit",
      "B. Control Panel Unit",
      "C. Computer Power Usage",
      "D. Compact Processing Unit"
    ],
    answer: "A"
  }
];