exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('highschool_flashcards').del()
    .then(function() {
      // Inserts seed entries
      return knex('highschool_flashcards').insert([{
          "id": 1,
          "word": "Abjure",
          "partOfSpeech": "Verb",
          "definition": "To renounce upon oath; to firmly reject",
          "level": "High School",
          "synonyms": "Renounce, Relinquish, Abdicate, Abandon, Forgo"
        },
        {
          "id": 2,
          "word": "Annul",
          "partOfSpeech": "Verb",
          "definition": "To cancel",
          "level": "High School",
          "synonyms": "Nullify, Invalidate, Void, Disallow"
        },
        {
          "id": 3,
          "word": "Abrogate",
          "partOfSpeech": "Verb",
          "definition": "To abolish by authoritative action;",
          "level": "High School",
          "synonyms": "Repeal, Annul, Dissolve, Abolish, Revoke"
        },
        {
          "id": 4,
          "word": "Abstemious",
          "partOfSpeech": "Adjective",
          "definition": "Marked by restraint esp from food or alcohol (abstain)",
          "level": "High School",
          "synonyms": "Abstinent, Ascetic, Moderate, Restrained, Frugal"
        },
        {
          "id": 5,
          "word": "Acumen",
          "partOfSpeech": "Noun",
          "definition": "Keenness and depth of perception, discernment, or discrimination esp in practical matters",
          "level": "High School",
          "synonyms": "Astuteness, Acuity, Sharpness, Cleverness, Shrewdness"
        },
        {
          "id": 6,
          "word": "Antebellum",
          "partOfSpeech": "Adjective",
          "definition": "Existing before a war, esp the american civil war ante- (before) bellum (war)",
          "level": "High School",
          "synonyms": "Pre-War, Prior To War, Pre-Civil War"
        },
        {
          "id": 7,
          "word": "Auspicious",
          "partOfSpeech": "Adjective",
          "definition": "Suggesting a likely future success; propitious; prosperous",
          "level": "High School",
          "synonyms": "Bright, Hopeful, Promising, Fortunate, Rosy"
        },
        {
          "id": 8,
          "word": "Belie",
          "partOfSpeech": "Verb",
          "definition": "To give a false impression of or misrepresentation",
          "level": "High School",
          "synonyms": "Deviate, Vary, Diverge, Depart"
        },
        {
          "id": 9,
          "word": "Bellicose",
          "partOfSpeech": "Adjective",
          "definition": "Favoring or inclined to start quarrels or wars",
          "level": "High School",
          "synonyms": "Argumentative, Hostile, Quarrelsome, Combative, Agressive"
        },
        {
          "id": 10,
          "word": "Truculent",
          "partOfSpeech": "Adjective",
          "definition": "Eager or quick to argue or fight; aggressively defiant",
          "level": "High School",
          "synonyms": "Defiant, Aggressive, Antagonistic, Combative, Belligerent"
        },
        {
          "id": 11,
          "word": "Bowdlerize",
          "partOfSpeech": "Verb",
          "definition": "To censor or abridge by omitting or modifying undesirable parts; to expurgate",
          "level": "High School",
          "synonyms": "Abridge, Foreshorten, Abbreviate, Shorten, Cut"
        },
        {
          "id": 12,
          "word": "Chicanery",
          "partOfSpeech": "Noun",
          "definition": "Deception by artful subterfuge; trickery",
          "level": "High School",
          "synonyms": "Artifice, Cheating, Deviousness, Dishonesty, Dodge"
        },
        {
          "id": 13,
          "word": "Chromosome",
          "partOfSpeech": "Noun",
          "definition": "Rod-shaped or threadlike dna-containing structures of cellular organisms that are located in the nucleus of eukaryotes, and contain all or most of the genes of an organism",
          "level": "High School",
          "synonyms": "Dna, Genetic Material"
        },
        {
          "id": 14,
          "word": "Churlish",
          "partOfSpeech": "Adjective",
          "definition": "Marked by lack of civility or graciousness; surly; intractable resembling a churl ie vulgarity ",
          "level": "High School",
          "synonyms": "Boorish, Classless, Cloddish, Loutish, Uncouth"
        },
        {
          "id": 15,
          "word": "Circumlocution",
          "partOfSpeech": "Noun",
          "definition": "The use of an unnecessarily large number of words to express an idea; evasion in speech going-around style of speaking",
          "level": "High School",
          "synonyms": "Equivocation, Ambiguity, Obscurity"
        },
        {
          "id": 16,
          "word": "Circumnavigate",
          "partOfSpeech": "Verb",
          "definition": "To go completely around (like traveling around earth by water); to go around instead of through ",
          "level": "High School",
          "synonyms": "Circle, Circuit, Circumvent, Orbit, Go Around"
        },
        {
          "id": 17,
          "word": "Deciduous",
          "partOfSpeech": "Adjective",
          "definition": "Falling off or shed seasonally or at a certain stage of development",
          "level": "High School",
          "synonyms": "Ephemeral, Evanescent, Flash, Fleeting, Brief"
        },
        {
          "id": 18,
          "word": "Deleterious",
          "partOfSpeech": "Adjective",
          "definition": "Harmful often in a subtle or unexpected way",
          "level": "High School",
          "synonyms": "Damaging, Detrimental, Injurious, Adverse, Disadvantageous"
        },
        {
          "id": 19,
          "word": "Diffident",
          "partOfSpeech": "Adjective",
          "definition": "Hesitant in acting or speaking through lack of self-confidence; shy; reserved",
          "level": "High School",
          "synonyms": "Shy, Bashful, Modest, Self-Effacing, Meek"
        },
        {
          "id": 20,
          "word": "Enervate",
          "partOfSpeech": "Verb",
          "definition": "To reduce the mental or moral vigor of; to lessen the vitality or strength of; unnerve",
          "level": "High School",
          "synonyms": "Exhaust, Tire, Fatigue, Weary, Wear Out"
        },
        {
          "id": 21,
          "word": "Enfranchise",
          "partOfSpeech": "Verb",
          "definition": "To set free; to admit privilege or right",
          "level": "High School",
          "synonyms": "Liberate, Free, Emancipate"
        },
        {
          "id": 22,
          "word": "Epiphany",
          "partOfSpeech": "Noun",
          "definition": "A usually sudden manifestation or perception of the essential nature or meaning of something; a sudden realization",
          "level": "High School",
          "synonyms": "Realization, Flash, Revelation"
        },
        {
          "id": 23,
          "word": "Equinox",
          "partOfSpeech": "Noun",
          "definition": "Either of two times a year (around march 21 and september 23) where the sun crosses the equator and day and night are about the same length",
          "level": "High School",
          "synonyms": "No synonyms"
        },
        {
          "id": 24,
          "word": "Euro",
          "partOfSpeech": "Noun",
          "definition": "The common basic monetary unit of most countries of the european union",
          "level": "High School",
          "synonyms": "No synonyms"
        },
        {
          "id": 25,
          "word": "Evanescent",
          "partOfSpeech": "Adjective",
          "definition": "Tending to vanish like vapor; transient; deciduous; ephemeral",
          "level": "High School",
          "synonyms": "Vanishing, Fading, Evaporating, Ephemeral, Fleeting"
        },
        {
          "id": 26,
          "word": "Expurgate",
          "partOfSpeech": "Verb",
          "definition": "Remove objectionable material from a book",
          "level": "High School",
          "synonyms": "Bowdlerize, Purify, Censor, Shorten, Cut"
        },
        {
          "id": 27,
          "word": "Facetious",
          "partOfSpeech": "Adjective",
          "definition": "Treating serious issues with deliberately inappropriate humor; flippant; witty",
          "level": "High School",
          "synonyms": "Flippant, Frivolous, Tongue-In-Cheek, Ironic, Flip"
        },
        {
          "id": 28,
          "word": "Fatuous",
          "partOfSpeech": "Adjective",
          "definition": "Complacently or inanely foolish; silly; dumb; dense; obtuse",
          "level": "High School",
          "synonyms": "Silly, Foolish, Stupid, Inane, Idiotic"
        },
        {
          "id": 29,
          "word": "Feckless",
          "partOfSpeech": "Adjective",
          "definition": "Weak; ineffective; inexpedient; worthless",
          "level": "High School",
          "synonyms": "Useless, Worthless, Inept, Lazy, Idle"
        },
        {
          "id": 30,
          "word": "Fiduciary",
          "partOfSpeech": "Adjective",
          "definition": "Of, relating to, or involving a confidence or trust  especially with regard to the relationship between a trustee and a beneficiary",
          "level": "High School",
          "synonyms": "Guardian, Trustee"
        },
        {
          "id": 31,
          "word": "Filibuster",
          "partOfSpeech": "Verb",
          "definition": "The use of extreme dilatory (causing delay) tactics in an attempt to delay or prevent action especially in a legislative assembly",
          "level": "High School",
          "synonyms": "Stonewalling, Delaying, Procrastination, Obstruction, Temporizing"
        },
        {
          "id": 32,
          "word": "Gauche",
          "partOfSpeech": "Adjective",
          "definition": "Lacking social experience or grace; not tactful; crude",
          "level": "High School",
          "synonyms": "Awkward, Gawky, Inelegant, Graceless, Ungraceful"
        },
        {
          "id": 33,
          "word": "Gerrymander",
          "partOfSpeech": "Verb",
          "definition": "To divide (an area) into political units to give special advantages to one group, esp in politics to give advantage to a political party",
          "level": "High School",
          "synonyms": "Falsify, Manipulate"
        },
        {
          "id": 34,
          "word": "Hegemony",
          "partOfSpeech": "Noun",
          "definition": "Preponderant (dominant) influence or authority over others; domination; the influence exerted by a dominant group",
          "level": "High School",
          "synonyms": "Leadership, Dominance, Dominion, Supremacy, Authority"
        },
        {
          "id": 35,
          "word": "Hemoglobin,(Biology)",
          "partOfSpeech": "Noun",
          "definition": "Iron-containing respiratory pigment of vertebrate red blood cells that functions in oxygen transport to the tissues and carbon dioxide transport back to the lungs",
          "level": "High School",
          "synonyms": "Juice, Plasma"
        },
        {
          "id": 36,
          "word": "Homogeneous",
          "partOfSpeech": "Adjective",
          "definition": "Of the same or similar kind or nature; of uniform structure or composition",
          "level": "High School",
          "synonyms": "Same, Similar, Common, Together"
        },
        {
          "id": 37,
          "word": "Hubris",
          "partOfSpeech": "Noun",
          "definition": "Excessive pride or self-confidence",
          "level": "High School",
          "synonyms": "Arrogance, Conceit, Haughtiness, Hauteur, Pride"
        },
        {
          "id": 38,
          "word": "Hypotenuse,(Geometry)",
          "partOfSpeech": "Noun",
          "definition": "The side of a right triangle opposite the right angle",
          "level": "High School",
          "synonyms": "[(A^2)+(B^2)=(C^2)] C= Hypotenuse"
        },
        {
          "id": 39,
          "word": "Impeach",
          "partOfSpeech": "Verb",
          "definition": "To bring an accusation against; especially against a public official for misconduct",
          "level": "High School",
          "synonyms": "Indict, Charge, Accuse, Lay Charges Against, Arraign"
        },
        {
          "id": 40,
          "word": "Incognito",
          "partOfSpeech": "Adjective/verb",
          "definition": "One's identity concealed",
          "level": "High School",
          "synonyms": "Under An Assumed Name, Under A False Name, In Disguise, Disguised, Under Cover"
        },
        {
          "id": 41,
          "word": "Incontrovertible",
          "partOfSpeech": "Adjective",
          "definition": "Not open to question; indisputable; certain; undeniable; irrefutable",
          "level": "High School",
          "synonyms": "Indisputable, Incontestable, Undeniable, Irrefutable, Unassailable"
        },
        {
          "id": 42,
          "word": "Inculcate",
          "partOfSpeech": "Verb",
          "definition": "Teach or impress by frequent repetitions or admonitions; ingrain",
          "level": "High School",
          "synonyms": "Instill In, Implant In, Fix In, Impress In, Imprint In"
        },
        {
          "id": 43,
          "word": "Infrastructure",
          "partOfSpeech": "Noun",
          "definition": "The underlying foundation or basic framework; the system of public works of a country, state, or region",
          "level": "High School",
          "synonyms": "Basis, Foundation, Support"
        },
        {
          "id": 44,
          "word": "Interpolate",
          "partOfSpeech": "Verb",
          "definition": "To alter by inserting between things; to estimate between two values; introduce",
          "level": "High School",
          "synonyms": "Insert, Interpose, Interject, Enter, Add"
        },
        {
          "id": 45,
          "word": "Irony",
          "partOfSpeech": "Noun",
          "definition": "The use of words to express something other than or opposite to the literal meaning; incongruity between the actual and the expected",
          "level": "High School",
          "synonyms": "Paradox, Incongruity, Incongruousness"
        },
        {
          "id": 46,
          "word": "Jejune",
          "partOfSpeech": "Adjective",
          "definition": "Lacking nutritional value; dull; insipid; immature",
          "level": "High School",
          "synonyms": "Childish, Naive, Childlike"
        },
        {
          "id": 47,
          "word": "Kinetic",
          "partOfSpeech": "Adjective",
          "definition": "Of or relating to the motion of material bodies and the forces of energy associated therewith; active; dynamic",
          "level": "High School",
          "synonyms": "Moving, In Movement"
        },
        {
          "id": 48,
          "word": "Kowtow",
          "partOfSpeech": "Verb",
          "definition": "Be servile; to show respect; to suck up to",
          "level": "High School",
          "synonyms": "Cave In, Genuflect"
        },
        {
          "id": 49,
          "word": "Laissez-Faire",
          "partOfSpeech": "Noun",
          "definition": "The doctrine that government should not interfere in commercial affairs",
          "level": "High School",
          "synonyms": "Do-Nothing Policy, Neutrality"
        },
        {
          "id": 50,
          "word": "Lexicon",
          "partOfSpeech": "Noun",
          "definition": "A dictionary; the vocabulary of a language, speaker(s), or a subject (jargon); repertoire",
          "level": "High School",
          "synonyms": "Dictionary, Wordbook, Vocabulary List, Glossary, Thesaurus"
        },
        {
          "id": 51,
          "word": "Loquacious",
          "partOfSpeech": "Adjective",
          "definition": "Full of excessive talk; wordy; garrulous",
          "level": "High School",
          "synonyms": "Talkative, Voluble, Communicative, Expansive, Garrulous"
        },
        {
          "id": 52,
          "word": "Lugubrious",
          "partOfSpeech": "Adjective",
          "definition": "Mournful (exaggeratedly or affectedly mournful); dismal; glum; depressing",
          "level": "High School",
          "synonyms": "Gloomy, Sad, Unhappy, Doleful, Glum"
        },
        {
          "id": 53,
          "word": "Matamorphosis",
          "partOfSpeech": "Noun",
          "definition": "Change in physical form, structure, or substance; dramatic alteration of appearance or character",
          "level": "High School",
          "synonyms": "Transformation, Mutation, Transmutation, Change, Alteration"
        },
        {
          "id": 54,
          "word": "Mitosis, (Biology)",
          "partOfSpeech": "Noun",
          "definition": "The process that takes place in the nucleus of a dividing cell, which results in two cells identical to each other and the original cell",
          "level": "High School",
          "synonyms": "Cellular Splitting"
        },
        {
          "id": 55,
          "word": "Nanotechnology",
          "partOfSpeech": "Noun",
          "definition": "The science of manipulating materials on an atomic or molecular scale especially to build microscopic devices",
          "level": "High School",
          "synonyms": "No synonyms"
        },
        {
          "id": 56,
          "word": "Nihilism",
          "partOfSpeech": "Noun",
          "definition": "Rejection of all religious and moral principles, often in the belief that life is meaningless",
          "level": "High School",
          "synonyms": "Skepticism, Negativity, Cynicism, Pessimism, Disbelief"
        },
        {
          "id": 57,
          "word": "Nomenclature",
          "partOfSpeech": "Noun",
          "definition": "The act or process of naming; a system of terms or symbols used to name things",
          "level": "High School",
          "synonyms": "Classification, Codification"
        },
        {
          "id": 58,
          "word": "Nonsectarain",
          "partOfSpeech": "Adjective",
          "definition": "Not affiliated with or restricted to a particular religious group",
          "level": "High School",
          "synonyms": " Multicultural, Open, Independent"
        },
        {
          "id": 59,
          "word": "Notarize",
          "partOfSpeech": "Verb",
          "definition": "To acknowledge or attest as a notary public",
          "level": "High School",
          "synonyms": "Authenticate, Document"
        },
        {
          "id": 60,
          "word": "Obsequious",
          "partOfSpeech": "Adjective",
          "definition": "Marked by or exhibiting a fawning attentiveness; subservient oligarchy,a political system governed by a few people",
          "level": "High School",
          "synonyms": "Servile, Ingratiating, Sycophantic, Fawning, Unctuous"
        },
        {
          "id": 61,
          "word": "Omnipotent",
          "partOfSpeech": "Adjective",
          "definition": "Having unlimited power orthography,correct spelling",
          "level": "High School",
          "synonyms": "All-Powerful, Almighty, Supreme, Preeminent, Most High"
        },
        {
          "id": 62,
          "word": "Oxidize",
          "partOfSpeech": "Verb",
          "definition": "To combine (often chemically) with oxygen",
          "level": "High School",
          "synonyms": "Corrode, Rust"
        },
        {
          "id": 63,
          "word": "Parabola",
          "partOfSpeech": "Noun",
          "definition": "A u-shaped line on a graph paradigm,a model;",
          "level": "High School",
          "synonyms": "Arch, Curve"
        },
        {
          "id": 64,
          "word": "Paradigm",
          "partOfSpeech": "Noun",
          "definition": "The generally accepted perspective of a particular discipline at a given time",
          "level": "High School",
          "synonyms": "Model, Pattern, Example, Exemplar, Template"
        },
        {
          "id": 65,
          "word": "Parameter",
          "partOfSpeech": "Noun",
          "definition": "A determining or characteristic element; a factor that shapes the total outcome; a limit, boundary",
          "level": "High School",
          "synonyms": "Framework, Variable, Limit, Boundary, Limitation"
        },
        {
          "id": 66,
          "word": "Pecuniary",
          "partOfSpeech": "Adjective",
          "definition": "Relating to or involving money",
          "level": "High School",
          "synonyms": "Financial, Monetary, Money, Fiscal, Economic"
        },
        {
          "id": 67,
          "word": "Photosynthesis",
          "partOfSpeech": "Noun",
          "definition": "Process by which plants and some other organisms use light energy to convert water and carbon dioxide into oxygen and high-energy carbohydrates such as sugars and starches",
          "level": "High School",
          "synonyms": "No synonyms"
        },
        {
          "id": 68,
          "word": "Plagiarize",
          "partOfSpeech": "Verb",
          "definition": "Take without referencing from someone else's writing or speech",
          "level": "High School",
          "synonyms": "Copy, Infringe The Copyright Of, Pirate, Steal, Poach"
        },
        {
          "id": 69,
          "word": "Plasma",
          "partOfSpeech": "Noun",
          "definition": "The liquid part of blood polymer,large molecule formed when many smaller molecules bond together",
          "level": "High School",
          "synonyms": "No synonyms"
        },
        {
          "id": 70,
          "word": "Precipitous",
          "partOfSpeech": "Adjective",
          "definition": "Extremely steep",
          "level": "High School",
          "synonyms": "Steep, Sheer, Perpendicular, Abrupt, Sharp"
        },
        {
          "id": 71,
          "word": "Quasar",
          "partOfSpeech": "Noun",
          "definition": "An enormously bright, distant galaxy with a giant black hole at its center",
          "level": "High School",
          "synonyms": "No synonyms"
        },
        {
          "id": 72,
          "word": "Reciprocal",
          "partOfSpeech": "Adjective",
          "definition": "Mutual; given and received in return; exchangeable;",
          "level": "High School",
          "synonyms": "Accepted, Coincident, Collective, Communal, Communistic"
        },
        {
          "id": 73,
          "word": "Reparation",
          "partOfSpeech": "Noun",
          "definition": "Something done or paid in expiation of a wrong",
          "level": "High School",
          "synonyms": "Adjustment, Apology, Atonement, Damages, Dues"
        },
        {
          "id": 74,
          "word": "Recapitulate",
          "partOfSpeech": "Verb",
          "definition": "Summarize briefly",
          "level": "High School",
          "synonyms": "Summarize, Sum Up; Restate, Repeat, Reiterate"
        },
        {
          "id": 75,
          "word": "Respiration",
          "partOfSpeech": "Verb",
          "definition": "A single complete act of breathing in and out",
          "level": "High School",
          "synonyms": "Exhalation, Inhalation, Breathing"
        },
        {
          "id": 76,
          "word": "Sanguine",
          "partOfSpeech": "Adjective",
          "definition": "Confidently optimistic and cheerful, especially in a bad situation",
          "level": "High School",
          "synonyms": "Animated, Assured, Buoyant, Cheerful, Confident, Enthusiastic"
        },
        {
          "id": 77,
          "word": "Soliloquy",
          "partOfSpeech": "Noun",
          "definition": "The act of speaking one's thoughts out loud, esp as a dramatic monologue in a play",
          "level": "High School",
          "synonyms": "Discourse, Monologue"
        },
        {
          "id": 78,
          "word": "Subjugate",
          "partOfSpeech": "Verb",
          "definition": "To bring under control and governance as a subject, to conquer, to subdue",
          "level": "High School",
          "synonyms": "Conquer, Enslave"
        },
        {
          "id": 79,
          "word": "Suffragist",
          "partOfSpeech": "Noun",
          "definition": "One who advocates extension of suffrage (the right to vote) esp to women",
          "level": "High School",
          "synonyms": "No synonyms"
        },
        {
          "id": 80,
          "word": "Supercilious",
          "partOfSpeech": "Adjective",
          "definition": "Coolly and patronizingly haughty, arrogant, high-and-mighty",
          "level": "High School",
          "synonyms": "Bossy, Snobby, Uppity, Pompous, "
        },
        {
          "id": 81,
          "word": "Tautology",
          "partOfSpeech": "Noun",
          "definition": "A needless repetition of an idea, statement, or word",
          "level": "High School",
          "synonyms": "Indirectness, Wordiness"
        },
        {
          "id": 82,
          "word": "Taxonomy",
          "partOfSpeech": "Noun",
          "definition": "The study of the general principles of scientific classification, systematics, classification",
          "level": "High School",
          "synonyms": "Genetics, Ecology"
        },
        {
          "id": 83,
          "word": "Tectonic",
          "partOfSpeech": "Adjective",
          "definition": "Relating to the structure of the earth's crust and the large-scale processes that take place within it",
          "level": "High School",
          "synonyms": "Anatomical, Architectural"
        },
        {
          "id": 84,
          "word": "Tempestuous",
          "partOfSpeech": "Adjective",
          "definition": "Turbulent, stormy (tempest - storm)",
          "level": "High School",
          "synonyms": "Heated, Passionate"
        },
        {
          "id": 85,
          "word": "Thermodynamics",
          "partOfSpeech": "Noun",
          "definition": "Physics that deals with the mechanical action or relations of heat",
          "level": "High School",
          "synonyms": "No synonyms"
        },
        {
          "id": 86,
          "word": "Totalitarian",
          "partOfSpeech": "Adjective",
          "definition": "Of or relating to centralized control by an autocratic leader or hierarchy, authoritarian, dictorial",
          "level": "High School",
          "synonyms": "Oppressive, Tyrannical"
        },
        {
          "id": 87,
          "word": "Usurp",
          "partOfSpeech": "Verb",
          "definition": "To seize and hold in possession by force without right, to supplant",
          "level": "High School",
          "synonyms": "Annex, Wrest"
        },
        {
          "id": 88,
          "word": "Vacuous",
          "partOfSpeech": "Adjective",
          "definition": "Emptied or lacking content, marked by lack of ideas or intelligence, idle, empty",
          "level": "High School",
          "synonyms": "Air Headed, Dumb"
        },
        {
          "id": 89,
          "word": "Vehement",
          "partOfSpeech": "Adjective",
          "definition": "Marked by forceful energy, intensely emotional, deeply felt, bitterly antagonistic",
          "level": "High School",
          "synonyms": "Angry, Ardent"
        },
        {
          "id": 90,
          "word": "Vortex",
          "partOfSpeech": "Noun",
          "definition": "Something resembling a whirlpool or eddy",
          "level": "High School",
          "synonyms": "Spiral, Whirlpool"
        },
        {
          "id": 91,
          "word": "Wrought",
          "partOfSpeech": "Adjective",
          "definition": "Worked into shape by artistry or effort, ornamented, manufactured, excited",
          "level": "High School",
          "synonyms": "Fashioned, Molded"
        },
        {
          "id": 92,
          "word": "Xenophobe",
          "partOfSpeech": "Noun",
          "definition": "One who is unduly fearful of foreign things esp foreign people",
          "level": "High School",
          "synonyms": "Fanatic, Segregationist"
        },
        {
          "id": 93,
          "word": "Ziggurat",
          "partOfSpeech": "Noun",
          "definition": "An ancient mesopotamian temple tower, a structure or object of similar form",
          "level": "High School",
          "synonyms": "Architecture, Construction"
        }
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE highschool_flashcards_id_seq RESTART WITH 94;");
    });
};
