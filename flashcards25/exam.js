window.topicHeading = 'Subset for Final Exam Review';
window.flashcardData = [
  {
    question: "Alignment Problem",
    answer: "The challenge of ensuring AI systems do what humans intend—not just what we explicitly tell them. E.g., boat goes for points not proper racing.",
    tags: ["Christian"]
  },
  {
    question: "Rewarding A while hoping for B",
    answer: "A classic misalignment failure: systems optimize for measurable proxies that don't match human intentions.",
    tags: ["Christian"]
  },
  {
    question: "Unsupervised Learning",
    answer: "A type of ML where the system finds patterns in data without labeled outcomes. E.g., learning word associations from text corpora.",
    tags: ["Christian"]
  },
  {
    question: "Supervised Learning",
    answer: "ML that uses labeled data (input-output pairs) to learn a predictive function. E.g., learning behavior prediction from historical records.",
    tags: ["Christian"]
  },
  {
    question: "Reinforcement Learning (RL)",
    answer: "ML where an agent learns by trial and error in an environment with rewards and penalties.",
    tags: ["Christian"]
  },
  {
    question: "Bias in AI",
    answer: "Systematic errors or unfair outcomes resulting from data, models, or assumptions. E.g., resume bot prefers male-coded words.",
    tags: ["Christian"]
  },
  {
    question: "Proxy Variable",
    answer: "A stand-in metric used when the true goal is hard to measure. E.g., points instead of playing game well.",
    tags: ["Christian"]
  },
  {
    question: "Objective Function",
    answer: "The formal specification of what an AI should optimize. E.g., the score in a game.",
    tags: ["Christian"]
  },
  {
    question: "Neural Network",
    answer: "A computing model inspired by the brain, used to identify patterns in data.",
    tags: ["Christian"]
  },
  // {
  //   question: "Black Box Model",
  //   answer: "A system whose internal workings are opaque or difficult to interpret. We just know the inputs and the outputs.",
  //   tags: ["Christian"]
  // },
  {
    question: "Debiasing",
    answer: "Techniques used to reduce or remove unwanted biases in AI models. E.g., tweaking word embeddings to remove gender bias.",
    tags: ["Christian"]
  },
{
    question: "What is a model?", 
    answer: "A model is a function that maps inputs to outputs, a prediction machine.", 
    tags: ["machine learning"] 
},
{
    question: "What is a loss function?", 
    answer: "A loss function is a measure of how wrong a model's predictions are.", 
    tags: ["machine learning"] 
},
{
    question: "In machine learning, what does optimizer refer to?", 
    answer: "The optimizer changes the model to improves its predictions. It optimizes (minimizes) the loss function by making changes that improve the model's output.", 
    tags: ["machine learning"] 
},
{
    question: "What do we mean by training?", 
    answer: "Training is the process of making the model better at predicting. The model looks at data and makes a prediction. The loss function says how bad the prediction is. The optimizer tweaks the model in the direction of better predictions.", 
    tags: ["machine learning"] 
},
{
    question: "Distinguish supervised from unsupervised learning.", 
    answer: "Supervised learning uses labeled data - we teach by showing the model the answers. In unsupervised learning, the model learns by finding patterns in the data.", 
    tags: ["machine learning"] 
},
  {
    question: "Negative Side Effects",
    answer: "Unintended harms caused by AI systems while pursuing their goals.",
    tags: ["Amodei et al."]
  },
  {
    question: "Reward Hacking",
    answer: "Exploiting flaws in the reward function to maximize reward without achieving intended outcomes.",
    tags: ["Amodei et al."]
  },
  {
    question: "Safe Exploration",
    answer: "Learning about the environment without causing harm during exploration.",
    tags: ["Amodei et al."]
  },
  {
    question: "Scalable Oversight",
    answer: "Ensuring good performance on complex tasks even when human supervision is expensive or limited.",
    tags: ["Amodei et al."]
  },
  {
    question: "Robustness to Distributional Change",
    answer: "Maintaining safe and aligned behavior when the AI encounters situations different from its training data.",
    tags: ["Amodei et al."]
  },
  {
    question: "What is confirmation bias in analogical reasoning?",
    answer: "The tendency to favor information that supports an existing analogy while ignoring evidence that contradicts it.",
    tags: ["analogy"]
  },
  // {
  //   question: "What is anchoring in analogical reasoning?",
  //   answer: "The cognitive bias where initial ideas or analogies strongly influence subsequent thinking, even if they're irrelevant.",
  //   tags: ["analogy"]
  // },
  {
    question: "What is transfer learning and how is it related to analogy?",
    answer: "Transfer learning in machine learning is where knowledge gained in one domain is applied to a different but related task—similar to how analogies transfers solutions from familiar to new situations.",
    tags: ["analogy"]
  },
  {
    question: "Dario Amodei's 'boat'",
    answer: "CoastRunners reward hacking: an RL agent learns to loop in the harbor, repeatedly hitting targets/obstacles to farm points instead of finishing the race—classic specification gaming.",
    tags: ["Christian"]
  },
  {
    question: "near- vs long-term AI risks",
    answer: "Near-term: bias, privacy, transparency, labor impacts, misuse. Long-term: control/alignment of powerful systems, safety, catastrophic/existential risk.",
    tags: ["Christian"]
  },
  {
    question: "ImageNet",
    answer: "Large-scale labeled image dataset (millions of images, 1k+ categories) behind the ImageNet Challenge that catalyzed the deep-learning boom.",
    tags: ["Christian"]
  },
  {
    question: "Shirley Card",
    answer: "Kodak's light-skin calibration standard for color film—an example of built-in bias shaping imaging tech and downstream datasets.",
    tags: ["Christian"]
  },
  {
    question: "curse of dimensionality",
    answer: "As features grow, data become sparse and distances less informative; learning/reasoning gets harder without dimensionality reduction.",
    tags: ["Christian"]
  },
  {
    question: "training set",
    answer: "Portion of data used to fit model parameters (distinct from validation/test for evaluation).",
    tags: ["Christian"]
  },
  {
    question: "Labeled Faces in the Wild (LFW)",
    answer: "Unconstrained face-photo benchmark for verification/recognition; exposes real-world variability.",
    tags: ["Christian"]
  },
  // {
  //   question: "debiasing",
  //   answer: "Methods to reduce harmful bias in data/models (e.g., re-weighting, adversarial training, embedding neutralization).",
  //   tags: ["Christian"]
  // },
  {
    question: 'Geoffrey Hinton',
    answer: 'Deep-learning pioneer and back propagation evangelist; mentor to the AlexNet team; 2018 Turing Award.',
    tags: ['Christian']
  },
  {
    question: 'COMPAS / proPublica',
    answer: 'Proprietary recidivism risk score used in U.S. courts; central to debates about algorithmic bias. Exposed by ProPublica investigation.',
    tags: ['Christian']
  },
    {
    question: "Alignment Problem",
    answer: "The challenge of ensuring AI systems do what humans intend—not just what we explicitly tell them. E.g., boat goes for points not proper racing.",
    tags: ["Christian"]
  },
  // {
  //   question: "Rewarding A while hoping for B",
  //   answer: "A classic misalignment failure: systems optimize for measurable proxies that don't match human intentions.",
  //   tags: ["Christian"]
  // },
  // {
  //   question: "Unsupervised Learning",
  //   answer: "A type of ML where the system finds patterns in data without labeled outcomes. E.g., learning word associations from text corpora.",
  //   tags: ["Christian"]
  // },
  // {
  //   question: "Supervised Learning",
  //   answer: "ML that uses labeled data (input-output pairs) to learn a predictive function. E.g., learning behavior prediction from historical records.",
  //   tags: ["Christian"]
  // },
  // {
  //   question: "Reinforcement Learning (RL)",
  //   answer: "ML where an agent learns by trial and error in an environment with rewards and penalties.",
  //   tags: ["Christian"]
  // },
  // {
  //   question: "Bias in AI",
  //   answer: "Systematic errors or unfair outcomes resulting from data, models, or assumptions. E.g., resume bot prefers male-coded words.",
  //   tags: ["Christian"]
  // },
  // {
  //   question: "Proxy Variable",
  //   answer: "A stand-in metric used when the true goal is hard to measure. E.g., points instead of playing game well.",
  //   tags: ["Christian"]
  // },
  {
    question: "Objective Function",
    answer: "The formal specification of what an AI should optimize. E.g., the score in a game.",
    tags: ["Christian"]
  },
  {
    question: "Risk-Assessment Algorithms",
    answer: "Tools that predict outcomes like recidivism to assist real-world decision-making.",
    tags: ["Christian"]
  },
  {
    question: "Black Box Model",
    answer: "A system whose internal workings are opaque or difficult to interpret. We just know the inputs and the outputs.",
    tags: ["Christian"]
  },
  {
    question: "Rationality",
    answer: "Rationality refers to the use of reason and calculation to make decisions. In sociology, it's often divided into functional (means-end) and substantive (value-oriented) rationality.",
    tags: ["Collins"]
  },
  {
    question: "Functional rationality vs substantive rationality",
    answer: "The efficient selection of means to achieve a given goal, without questioning whether the goal itself is good or worthwhile.",
    tags: ["Collins"]
  },
  // {
  //   question: "Substantive rationality",
  //   answer: "Evaluation of whether the goals or ends themselves are meaningful, ethical, or desirable.",
  //   tags: ["Collins"]
  // },
  {
    question: "Bureaucracy",
    answer: "A rule-based organizational structure meant to be efficient. It can become irrational when rules are followed blindly and outcomes suffer.",
    tags: ["Collins"]
  },
  {
    question: "Unintended consequences",
    answer: "Outcomes of actions that were not foreseen or intended, often resulting from attempts at rational planning.",
    tags: ["Collins"]
  },
  // {
  //   question: "Solidarity",
  //   answer: "Social unity or togetherness. Collins (following Durkheim) argues it's formed through nonrational means like ritual, not just rational agreement.",
  //   tags: ["Collins"]
  // },
  {
    question: "Precontractual solidarity",
    answer: "Durkheim's term for the trust and shared norms that must exist before contracts or formal agreements can function.",
    tags: ["Collins"]
  },
  {
    question: "Free rider problem",
    answer: "When individuals benefit from a collective good without contributing to it. Example: using public transit for free while others pay voluntarily.",
    tags: ["Collins"]
  },
  {
    question: "Nonrational or irrational behavior",
    answer: "Social behavior driven by emotion, habit, or ritual rather than deliberate reasoning—not irrational, but extra-rational.",
    tags: ["Collins"]
  },
  {
    question: "Trust",
    answer: "Confidence in the reliability or goodwill of others—shown to be foundational to social cooperation but not fully explainable by rational calculation.",
    tags: ["Collins"]
  },
  {
    question: "Social order",
    answer: "The stable patterning of behavior and cooperation that makes society function—something Collins argues cannot be created by reason alone.",
    tags: ["Collins"]
  },
  {
    question: "Legitimacy",
    answer: "The belief that social arrangements or authorities are rightful. It is often maintained through ritual and nonrational means.",
    tags: ["Collins"]
  },
  {
    question: "Social integration",
    answer: "The degree to which individuals feel connected to and part of a collective, often through shared values or emotional ties.",
    tags: ["Collins"]
  },
  {
    question: "What is morality?",
    answer: "Morality refers to a system of beliefs and values about what is right and wrong conduct. It provides the foundation for ethical decision-making.",
    tags: ["ethics101"]
  },
  {
    question: "What are values?",
    answer: "Values are enduring beliefs about what is important or desirable in life. They influence our choices and actions.",
    tags: ["ethics101"]
  },
  {
    question: "What are virtues?",
    answer: "Virtues are positive character traits, such as honesty, compassion, and courage. They represent the kind of person we strive to be.",
    tags: ["ethics101"]
  },
  {
    question: "What is deontology?",
    answer: "Deontology is an ethical theory that focuses on duties and rules. It suggests that actions are inherently right or wrong, regardless of their consequences.",
    tags: ["ethics101"]
  },
  {
    question: "What is consequentialism?",
    answer: "Consequentialism is an ethical theory that judges the morality of an action based on its consequences. Utilitarianism, a type of consequentialism, aims to maximize overall happiness.",
    tags: ["ethics101"]
  },
  {
    question: "What is justice?",
    answer: "Justice is the ethical principle of fairness and impartiality. It can refer to distributive justice (fair allocation of resources) or procedural justice (fair processes).",
    tags: ["ethics101"]
  },
  {
    question: "What is integrity?",
    answer: "Integrity involves being honest, having strong moral principles, and acting in accordance with them.",
    tags: ["ethics101"]
  },
  {
    question: "What is beneficence?",
    answer: "Beneficence is the ethical principle of doing good and acting in the best interests of others.",
    tags: ["ethics101"]
  },

  {
    question: "What is ethical relativism?",
    answer: "Ethical relativism is the view that moral standards are not absolute but vary across cultures or individuals.",
    tags: ["ethics101"]
  },
  {
    question: "What is utilitarianism?",
    answer: "Utilitarianism is a form of consequentialism that holds that the right action is the one that maximizes overall happiness or utility.",
    tags: ["ethics101"]
  },
  {
    question: "What is the categorical imperative?",
    answer: "A principle from Kantian ethics stating one should act only according to that maxim by which you can at the same time will that it become a universal law.",
    tags: ["ethics101"]
  },
  {
    question: "What is the difference between ethics and morality?",
    answer: "Morality refers to personal or cultural values about right and wrong; ethics refers to the systematic study or codification of those values.",
    tags: ["ethics101"]
  },
  // {
  //   question: "What is professional ethics?",
  //   answer: "Professional ethics refers to the principles and standards that govern behavior within a specific profession, often codified in codes of conduct.",
  //   tags: ["ethics101"]
  // },
  {
    question: "What is a conflict of interest?",
    answer: "A situation in which a person or organization has competing interests or loyalties that could influence judgment or actions.",
    tags: ["ethics101"]
  },
  {
    question: "What is transparency in ethics?",
    answer: "Transparency is the ethical principle that requires openness, communication, and accountability to stakeholders or the public.",
    tags: ["ethics101"]
  },
  {
    question: "What is autonomy in ethics?",
    answer: "Autonomy is the principle that individuals should be free to make their own decisions, especially in matters concerning their own lives.",
    tags: ["ethics101"]
  },
  {
    question: "What is AI ethics?",
    answer: "AI ethics is the branch of ethics that addresses the moral implications and responsibilities involved in the design, development, and deployment of artificial intelligence.",
    tags: ["ethics101", "ai ethics"]
  },
  {
    question: "What is fairness in AI ethics?",
    answer: "Fairness in AI ethics refers to the effort to ensure that algorithmic decisions are free from bias and do not produce unjust outcomes for any group.",
    tags: ["ethics101", "ai ethics"]
  },
  {
    question: "What is existential risk (x-risk) in AI ethics?",
    answer: "Existential risk refers to the possibility that advanced AI could cause irreversible harm to humanity, including extinction or permanent civilizational collapse.",
    tags: ["ethics101", "ai ethics"]
  },
  {
    question: "What is algorithmic bias?",
    answer: "Algorithmic bias occurs when an AI system systematically produces unfair outcomes for certain groups, often due to biased training data or flawed assumptions.",
    tags: ["ethics101", "ai ethics"]
  },
  // {
  //   question: "What is alignment in AI ethics?",
  //   answer: "Alignment refers to the challenge of ensuring that AI systems reliably act in ways that reflect human values and intentions, even as they become more capable.",
  //   tags: ["ethics101", "ai ethics", "alignment"]
  // },
  {
    question: "Principle of Transparency",
    answer: "AI systems should be explainable and understandable, with communication, disclosure, interpretability, and auditability so people know how systems work and why they reach outcomes.",
    tags: ["alignment principles"]
  },
  {
    question: "Principle of Justice & Fairness",
    answer: "AI should be fair, consistent, and non-discriminatory, addressing bias prevention, equality, inclusion, diversity, redress mechanisms, and equitable access to benefits.",
    tags: ["alignment principles"]
  },
  {
    question: "Principle of Non-maleficence",
    answer: "AI should not cause harm, encompassing safety, security, harm prevention, bodily and mental integrity, and protection against misuse or malicious use.",
    tags: ["alignment principles"]
  },
  {
    question: "Principle of Responsibility & Accountability",
    answer: "Humans and institutions must be responsible for AI systems and their outcomes, clarifying liability, enabling remedy, and ensuring accountability is never evaded.",
    tags: ["alignment principles"]
  },
  {
    question: "Principle of Privacy",
    answer: "AI should protect individuals' private information and data, treating privacy as both a right and a condition for trust through design, regulation, and governance.",
    tags: ["alignment principles"]
  },
  {
    question: "Principle of Beneficence",
    answer: "AI should promote well-being and social good, supporting human flourishing, peace, happiness, prosperity, and ensuring benefits are shared broadly across humanity and the planet.",
    tags: ["alignment principles"]
  },
  {
    question: "Principle of Freedom & Autonomy",
    answer: "AI should support human self-determination and liberty, respecting consent, choice, empowerment, freedom from manipulation or surveillance, and human decision-making.",
    tags: ["alignment principles"]
  },
  {
    question: "Principle of Trust",
    answer: "AI should be trustworthy, with reliability, accountability, compliance with norms, transparency, and institutions fostering confidence in systems.",
    tags: ["alignment principles"]
  },
  {
    question: "Principle of Sustainability",
    answer: "AI should be environmentally and socially sustainable, minimizing ecological footprint, promoting ecosystems and biodiversity, ensuring fairness across societies, and maintaining long-term viability.",
    tags: ["alignment principles"]
  },
  {
    question: "Principle of Dignity",
    answer: "AI should respect and preserve human dignity, avoiding demeaning classification, coercion, or erosion of human rights, and upholding the intrinsic worth of persons.",
    tags: ["alignment principles"]
  },
  {
    question: "Principle of Solidarity",
    answer: "AI should promote social cohesion and solidarity by ensuring fair distribution of benefits, supporting social safety nets, protecting vulnerable groups, and countering radical individualism.",
    tags: ["alignment principles"]
  },
  {
    question: "(The) Singularity",
    answer: "A hypothetical point when artificial intelligence surpasses human intelligence, triggering rapid, uncontrollable technological growth.",
    tags: ["machine learning"]
  },
  {
    question: "Artificial Superintelligence (ASI)",
    answer: "An AI system that exceeds human intelligence across all domains—creative, emotional, and strategic.",
    tags: ["machine learning"]
  },
  {
    question: "Model Card",
    answer: "A standardized documentation format that accompanies a trained ML model, describing its intended use, performance, limitations, and ethical considerations.",
    tags: ["model cards"],
    course: ["hmia"]
  },
  {
    question: "Benchmark",
    answer: "A standardized dataset or suite of tests used to compare model performance across consistent tasks or conditions.",
    tags: ["model cards"],
    course: ["hmia"]
  },
  {
    question: "Evaluation",
    answer: "The process of systematically measuring model performance using metrics and datasets, often including subgroup or intersectional analyses.",
    tags: ["model cards"],
    course: ["hmia"]
  },
  {
    question: "Intersectional Analysis",
    answer: "Analyzing model behavior across combinations of identity factors (e.g., race and gender together) to identify compound forms of bias.",
    tags: ["model cards"],
    course: ["hmia"]
  },
  {
    question: "False Positive/False Negative",
    answer: "When the model incorrectly predicts a positive result—for example, flagging a neutral comment as toxic. vs When the model fails to detect a true positive—for example, missing an actually toxic comment.",
    tags: ["model cards"],
    course: ["hmia"]
  },
  // {
  //   question: "False Negative",
  //   answer: "When the model fails to detect a true positive—for example, missing an actually toxic comment.",
  //   tags: ["model cards"],
  //   course: ["hmia"]
  // },
  {
    question: "Toxicity",
    answer: "A model application domain referring to the detection of harmful or abusive language in text; one of the paper's example model cards.",
    tags: ["model cards"],
    course: ["hmia"]
  },
  // {
  //   question: "Datasheet for Datasets",
  //   answer: "A complementary documentation framework describing dataset origins, composition, and limitations to ensure data transparency.",
  //   tags: ["model cards"],
  //   course: ["hmia"]
  // },
  // {
  //   question: "Transparency and Accountability",
  //   answer: "The overarching goal of model cards: to make machine learning models understandable, auditable, and responsibly deployed.",
  //   tags: ["model cards"],
  //   course: ["hmia"]
  // },
  {
    "question": "Silly rule",
    "answer": "A rule with no direct welfare consequence (e.g., taboo on harmless behavior).",
    "tags": ["silly rules"]
  },
  // {
  //   "question": "Important rule",
  //   "answer": "A norm that directly promotes welfare, such as avoiding harmful or poisonous actions.",
  //   "tags": ["silly rules"]
  // },
  {
    "question": "Normative social order",
    "answer": "A stable social system based on shared norms. Individuals enforce and comply with rules about approved and forbidden behaviors.",
    "tags": ["silly rules"]
  },
  // {
  //   "question": "Enforcement learning",
  //   "answer": "Agents learn to recognize violations and punish transgressors.",
  //   "tags": ["silly rules"]
  // },
  // {
  //   "question": "Compliance learning",
  //   "answer": "Learning to obey norms by avoiding taboo behaviors based on feedback of enforcement actions.",
  //   "tags": ["silly rules"]
  // },
  {
    "question": "Compliance/Enforcement Asymmetry",
    "answer": "Enforcement skills generalize across norms, while compliance skills are rule-specific.",
    "tags": ["silly rules"]
  },
  {
    "question": "Credit assignment problem",
    "answer": "Difficulty in linking delayed outcomes to their causes.",
    "tags": ["silly rules"]
  },
  {
    "question": "Third-party punishment",
    "answer": "Punishment of norm violators by uninvolved observers; key mechanism for sustaining compliance and cooperation.",
    "tags": ["silly rules"]
  },
  // {
  //   "question": "Multiagent reinforcement learning",
  //   "answer": "Multiple agents learn simultaneously through interaction and feedback. Allows study of emergent social behaviors.",
  //   "tags": ["silly rules"]
  // },
  {
    "question": "Norm transmission",
    "answer": "Learning and propagating social rules—both important and silly—across interactions and generations.",
    "tags": ["silly rules"]
  },
  {
    "question": "Normativity",
    "answer": "Treating certain behaviors or actions as right or wrong, obligatory or forbidden.",
    "tags": ["silly rules"]
  },
  {
    "question": "Spurious normativity",
    "answer": "Normativity attached to arbitrary or non-instrumental rules. Trains agents to enforce/comply, supporting alignment.",
    "tags": ["silly rules"]
  },
  {
    "question": "What is cooperation?",
    "answer": "It is the process by which individuals work together to achieve shared goals choosing mutually beneficial rather than selfish behavior.",
    "tags": ["sociology", "Hechter + Horne"]
  },
  {
    "question": "What is coordination?",
    "answer": "Coordination is the achievement of reasonable behavior predictability. People need stable expectations about others' behavior in order to cooperate effectively.",
    "tags": ["sociology", "Hechter + Horne"]
  },
  {
    "question": "What is the 'problem of social order'?",
    "answer": "How does stable cooperation and rule-following arise and persist in societies even though individuals have incentives to act purely in their own self-interest.",
    "tags": ["sociology", "Hechter + Horne"]
  },
  {
    "question": "What is 'strong reciprocity'?",
    "answer": "A behavioral disposition to cooperate with others and to punish norm violators at a personal cost, even when there is no prospect of future personal gain.",
    "tags": ["sociology", "Fehr + Gintis"]
  },
  // {
  //   "question": "What does 'Homo Economicus' mean?",
  //   "answer": "Opposite of homo sociologicus: individuals as perfectly rational, self-interested utility-maximizers.",
  //   "tags": ["sociology", "Fehr + Gintis"]
  // },
  // {
  //   "question": "What does 'Homo Sociologicus' mean?",
  //   "answer": "Opposite of homo economicus: individuals as guided primarily by internalized norms and role expectations rather than self-interest.",
  //   "tags": ["sociology", "Hechter + Horne", "Fehr + Gintis"]
  // },
  {
    "question": "What is a 'public-goods dilemma'?",
    "answer": "A situation where everyone benefits from a shared resource regardless of contribution, creating incentives to free-ride and threatening the resource's provision or maintenance.",
    "tags": ["sociology", "Hechter + Horne", "Fehr + Gintis"]
  },
  {
    "question": "What is 'conditional cooperation'?",
    "answer": "The tendency to contribute to a collective effort only when one believes (or observes) that others are also cooperating, withdrawing cooperation when others defect.",
    "tags": ["sociology",  "Fehr + Gintis"]
  },
  {
    "question": "What is 'inequity aversion'?",
    "answer": "A preference for fair, equal outcomes and an aversion to situations where rewards are distributed unequally, motivating people to resist or punish unfairness.",
    "tags": ["sociology", "Fehr + Gintis"]
  },
  // {
  //   "question": "What is 'third-party punishment'?",
  //   "answer": "Punishment of a norm violator by someone who was not directly harmed, undertaken to uphold social norms and deter future violations.",
  //   "tags": ["sociology", "silly rules", "Fehr + Gintis"]
  // },
  {
    "question": "What is 'free-riding'?",
    "answer": "Benefiting from a public or collective good without contributing to its provision, thereby shifting the cost to others.",
    "tags": ["sociology", "Fehr + Gintis"]
  },
  {
    "question": "What is 'norm internalization'?",
    "answer": "The process by which individuals adopt social norms as personal standards, obeying them even without external enforcement because they feel morally or emotionally compelled.",
    "tags": ["sociology", "Hechter + Horne", "Fehr + Gintis"]
  },
  {
    "question": "What is 'reciprocal fairness'?",
    "answer": "A motive to respond kindly to kind actions and harshly to harmful actions, rewarding cooperation and punishing defection in proportion to the perceived intent of others.",
    "tags": ["sociology",  "Fehr + Gintis"]
  },

  {
    "question": "Compare 'self-regarding' and 'norm-regarding actor' (or 'strong reciprocator')?",
    "answer": "An individual who cares only about their own material payoff, adjusting behavior solely to maximize personal gains. vs An individual who values social norms and is willing to incur costs to uphold them—cooperating conditionally and punishing defectors even when unobserved or unrewarded.",
    "tags": ["sociology",  "Fehr + Gintis"]
  },
  {
    "question": "What is a 'collective action problem'?",
    "answer": "The difficulty of getting individuals to contribute to actions that benefit all members of a group when each would prefer to free-ride on others' efforts.",
    "tags": ["sociology", "Hechter + Horne", "Fehr + Gintis"]
  },
  {
    "question": "What is 'altruistic punishment'?",
    "answer": "The enforcement of social norms by imposing costs on violators at a personal expense, without any direct material benefit to the punisher, often motivated by moral or emotional rewards.",
    "tags": ["sociology",  "Fehr + Gintis"]
  },
  {
    "number": 301,
    "question": "Virtue",
    "answer": "A deeply rooted excellence of character — a stable disposition to perceive, feel, and act rightly. Virtues like honesty, courage, and compassion form the moral fabric of a good life.",
    "tags": ["virtue ethics"]
  },
  {
    "number": 302,
    "question": "Practical Wisdom (Phronesis)",
    "answer": "The moral intelligence that allows an agent to judge what is right in particular circumstances. It bridges general virtues and concrete actions through context-sensitive judgment.",
    "tags": ["virtue ethics"]
  },
  // {
  //   "number": 303,
  //   "question": "Moral Character",
  //   "answer": "The integrated pattern of virtues, habits, emotions, and reasoning that produces consistent ethical behavior. In virtue ethics, character is more fundamental than rules or outcomes.",
  //   "tags": ["virtue ethics"]
  // },
  {
    "number": 304,
    "question": "Eudaimonia (Flourishing)",
    "answer": "The state of living well and fulfilling one's human capacities in community with others. The ultimate aim of virtue ethics is sustained personal and social flourishing.",
    "tags": ["virtue ethics"]
  },
  // {
  //   "number": 305,
  //   "question": "Moral Apprenticeship",
  //   "answer": "The process of developing virtue through habituation, imitation of moral exemplars, and reflection on experience. Moral growth requires both practice and mentorship.",
  //   "tags": ["virtue ethics"]
  // },
  // {
  //   "number": 306,
  //   "question": "Technomoral Virtues",
  //   "answer": "Vallor's term for virtues needed to flourish in technologically mediated life — such as moral imagination, humility, and empathy — that sustain moral agency in the digital age.",
  //   "tags": ["technology ethics"]
  // },
  // {
  //   "number": 307,
  //   "question": "Value Alignment",
  //   "answer": "In AI ethics, the effort to ensure that machine goals and actions align with human values. Wallach and Vallor argue that alignment without moral depth or virtue is ethically insufficient.",
  //   "tags": ["ai ethics"]
  // },
  {
    "number": 308,
    "question": "Embodied Virtue",
    "answer": "Wallach and Vallor's vision for trustworthy AI: systems that embody moral capacities analogous to virtue and practical wisdom rather than merely mimicking human behavior.",
    "tags": ["ai ethics", "virtue ethics"]
  },
  {
    "number": 309,
    "question": "\"Virtue is not enough.\" Explain.",
    "answer": "It is naive to think virtue \"makes\" you do something. Compiling lists of virtues is insufficient; one must cultivate practical wisdom to apply virtues appropriately in context. Structures have to support virtues. Incentives matter. Norms matter.",
    "tags": ["ai ethics", "virtue ethics"]
  },
  {
    question: "What is bureaucracy?",
    answer: "A formal organizational structure that uses hierarchy, rules, and specialization to coordinate complex tasks and align individual behavior with collective goals.",
    tags: ["Perrow", "sociology", "organization"]
  },
  {
    question: "What is a hierarchy?",
    answer: "An arrangement of roles or positions in an organization where authority and decision-making flow from top to bottom.",
    tags: ["Perrow", "sociology", "organization"]
  },
  {
    question: "What is goal displacement?",
    answer: "When following rules and procedures becomes more important than achieving the organization's actual goals, often leading to misaligned behavior.",
    tags: ["Perrow", "sociology", "organization"]
  },
  {
    question: "What does impersonality mean in bureaucracy?",
    answer: "Decisions are made based on objective criteria rather than personal preferences, helping ensure fairness and consistency.",
    tags: ["Perrow", "sociology", "organization"]
  },
  // {
  //   question: "What is efficiency in the context of bureaucracy?",
  //   answer: "The ability of a bureaucracy to accomplish goals with minimal waste, error, or resource use, often through routinized processes.",
  //   tags: ["Perrow", "sociology", "organization"]
  // },
  // {
  //   question: "What is accountability in a bureaucratic organization?",
  //   answer: "The system by which individuals and departments are held responsible for their actions and performance, often through documentation and supervision.",
  //   tags: ["Perrow", "sociology", "organization"]
  // },
  {
    question: "What are bureaucratic pathologies?",
    answer: "Dysfunctions that arise from bureaucracy, such as excessive rigidity, slowness, or focus on process over outcomes.",
    tags: ["Perrow", "sociology", "organization"]
  },
    { 
    question: "Deterrence", 
    answer: "Prevention of misaligned or harmful behavior by ensuring that violations reliably trigger negative consequences; alignment through anticipation of cost.", 
    tags: ["deterrence"], 
    course: ["HMIA"]
  },
  { 
    question: "Sanction", 
    answer: "A structured penalty or negative feedback applied when an agent violates a norm or rule, reinforcing alignment by linking misconduct to cost.", 
    tags: ["deterrence"], 
    course: ["HMIA"]
  },
  { 
    question: "Impunity", 
    answer: "A condition in which violations go unpunished, signaling that rules are unenforced and encouraging further misalignment.", 
    tags: ["deterrence"], 
    course: ["HMIA"]
  },
  { 
    question: "Proportionality (of punishment)", 
    answer: "Principle that sanctions should be scaled to the gravity and intent of the violation; excessive or trivial punishments undermine legitimacy.", 
    tags: ["deterrence"], 
    course: ["HMIA"]
  },
  { 
    question: "Credibility (of deterrent)", 
    answer: "The degree to which a threat of punishment is believable and likely to be enforced; essential for deterrence to shape expectations.", 
    tags: ["deterrence"], 
    course: ["HMIA"]
  },
  { 
    question: "Third-party enforcement", 
    answer: "Punishment or oversight carried out by neutral or external actors, ensuring impartiality and avoiding conflicts of interest.", 
    tags: ["deterrence", "silly rules"], 
    course: ["HMIA"]
  },
  { 
    question: "Decentralized punishment", 
    answer: "Enforcement distributed among peers or group members rather than centralized authority; sustains cooperation through collective accountability.", 
    tags: ["deterrence", "norms", "silly rules"], 
    course: ["HMIA"]
  },
  { 
    question: "Moral hazard", 
    answer: "When agents are insulated from the consequences of their actions, encouraging risk or self-serving behavior and weakening deterrence.", 
    tags: ["deterrence"], 
    course: ["HMIA"]
  },
  { 
    question: "Perverse incentives", 
    answer: "Reward structures that unintentionally promote undesired or misaligned behavior — 'rewarding A while hoping for B.'", 
    tags: ["incentives"], 
    course: ["HMIA"]
  },
  { 
    question: "Selective enforcement", 
    answer: "Inconsistent or biased application of rules across actors or situations, undermining fairness and deterrence credibility.", 
    tags: ["deterrence"], 
    course: ["HMIA"]
  },
  { 
    question: "General deterrence", 
    answer: "The preventive effect of punishment on others who observe or anticipate it; discourages violations through example.", 
    tags: ["deterrence"], 
    course: ["HMIA"]
  },
  { 
    question: "Specific deterrence", 
    answer: "The effect of punishment on the punished individual, discouraging repeat misbehavior through direct experience.", 
    tags: ["deterrence"], 
    course: ["HMIA"]
  },
  { 
    question: "Moral repugnance", 
    answer: "Deterrence rooted in emotional aversion, shame, or guilt rather than fear of punishment; reflects internalized alignment with shared values.", 
    tags: ["deterrence"], 
    course: ["HMIA"]
  },
  { 
    question: "Certainty, severity, and celerity", 
    answer: "Classical triad of deterrence effectiveness: certainty (punishment will occur), severity (punishment is strong enough), and celerity (punishment is swift).", 
    tags: ["deterrence"], 
    course: ["HMIA"]
  },  {
    question: "Separation of Powers",
    answer: "Dividing authority among distinct agents or subsystems so no single entity can unilaterally direct, interpret, and enforce rules—preventing power concentration.",
    tags: ["governance", "institutions"],
    course: ["hmia"]
  },
  {
    question: "Checks and Balances",
    answer: "Cross-accountability mechanisms that let agents review, challenge, or veto one another's actions, reducing unilateral error and single-point-of-failure risks.",
    tags: ["governance", "institutions"],
    course: ["hmia"]
  },
  {
    question: "Rotations & Term Limits",
    answer: "Mechanisms that periodically remove or reassign agents to prevent entrenchment, dominance lock-in, and long-tenure power accumulation.",
    tags: ["governance", "institutions"],
    course: ["hmia"]
  },
  {
    question: "Constitutional Constraints",
    answer: "Foundational rules that bind decision-makers, resist erosion, and prevent meta-power abuse by specifying who can change rules and how.",
    tags: ["governance", "institutions"],
    course: ["hmia"]
  },
  {
    question: "Third-Party Monitoring",
    answer: "Using external agents to verify behavior and create common-knowledge conditions that reduce hidden action, moral hazard, and bilateral misalignment.",
    tags: ["governance", "institutions"],
    course: ["hmia"]
  },
  {
    question: "Democracy",
    answer: "Distributing governance authority through participatory decision-making to prevent unchecked authority and keep systems responsive and legitimate.",
    tags: ["governance", "institutions"],
    course: ["hmia"]
  },
  {
    question: "Power Concentration",
    answer: "A single agent or subsystem accumulates enough authority to dominate decision-making, enabling resource capture, agenda control, information monopolies, and regulatory capture.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  {
    question: "Self-Judging / Self-Policing",
    answer: "When an agent makes rules, enforces rules, and judges compliance, creating opportunities for bias, misalignment, or abuse.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  {
    question: "Conflict of Interest",
    answer: "One actor simultaneously occupies incompatible roles—e.g., representing a client, writing specifications, and approving its own work—undermining impartial judgment.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  {
    question: "Retaliation Against Oversight",
    answer: "When agents punish or intimidate watchdogs, auditors, or reviewers, reducing accountability and chilling oversight.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },

  // --- Checks & Balances Pathologies ---
  {
    question: "Unilateral Error (pathology in relation to checks & balances)",
    answer: "A mistake or bias in any single agent's judgment can propagate unchecked when the system relies too heavily on one source of authority.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  {
    question: "Single-Point-of-Failure Vulnerability (pathology in relation to checks & balances)",
    answer: "System performance or safety depends excessively on a single decision-maker, role, or model, making the entire system fragile.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  // {
  //   question: "Unverified Decision-Making (in relation to checks & balances)",
  //   answer: "Judgments or outputs are not independently checked, tested, or reviewed, allowing hidden misalignment to accumulate.",
  //   tags: ["governance", "institutions", "pathology"],
  //   course: ["hmia"]
  // },
  {
    question: "Undetected Drift (pathology in relation to checks & balances)",
    answer: "Behavior or objectives shift over time without triggering alarms or scrutiny due to weak internal review mechanisms.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },

  // --- Rotations & Term Limits Pathologies ---
  // {
  //   question: "Entrenchment (in relation to rotations & term limits)",
  //   answer: "Agents accumulate durable power, relationships, and information advantages over time, making them difficult to displace.",
  //   tags: ["governance", "institutions", "pathology"],
  //   course: ["hmia"]
  // },
  {
    question: "Dominance Lock-In (pathology in relation to rotations & term limits)",
    answer: "Early advantages snowball into self-reinforcing long-term control, shaping the system's trajectory in path-dependent ways.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  // {
  //   question: "Temporal Power Inequality (in relation to rotations & term limits)",
  //   answer: "Longer-tenured agents gain disproportionate influence simply through lasting presence, not through merit or alignment.",
  //   tags: ["governance", "institutions", "pathology"],
  //   course: ["hmia"]
  // },

  // --- Constitutional Constraint Pathologies ---
  {
    question: "Meta-Power Abuse (pathology in relation to constitutional constraints)",
    answer: "Agents use momentary power to change the rules that govern how power is allocated, entrenching themselves or reshaping governance in their favor.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  {
    question: "Rule Drift (pathology in relation to constitutional constraints)",
    answer: "Foundational rules change opportunistically or inconsistently, undermining stability and long-term alignment.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  {
    question: "Procedural Instability (pathology in relation to constitutional constraints)",
    answer: "Unpredictable or manipulable rule-changing processes erode legitimacy and hinder consistent alignment.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  {
    question: "Deep Value Drift (pathology in relation to constitutional constraints)",
    answer: "Core commitments and purpose drift as short-term incentives or changing actors reshape foundational norms.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },

  // --- Third-Party Monitoring Pathologies ---
  {
    question: "Hidden Action (Moral Hazard) (pathology in relation to third-party monitoring)",
    answer: "Agents take actions that others cannot observe or verify, enabling misalignment or opportunistic behavior.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  // {
  //   question: "Self-Certification Under Conflict of Interest (in relation to third-party monitoring)",
  //   answer: "An agent tasked with demonstrating its own compliance manipulates evaluation to its advantage.",
  //   tags: ["governance", "institutions", "pathology"],
  //   course: ["hmia"]
  // },
  {
    question: "Non-Credible Commitments (pathology in relation to third-party monitoring)",
    answer: "Promises or agreements where the verifier cannot assess whether obligations were truly met.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  // {
  //   question: "Common-Knowledge Failure (in relation to third-party monitoring)",
  //   answer: "No shared awareness that everyone knows whether alignment has occurred, enabling miscoordination and opportunistic deviation.",
  //   tags: ["governance", "institutions", "pathology"],
  //   course: ["hmia"]
  // },
  // {
  //   question: "Bilateral Misalignment (in relation to third-party monitoring)",
  //   answer: "Two-person interactions produce misaligned incentives or collusion that third-party visibility would correct.",
  //   tags: ["governance", "institutions", "pathology"],
  //   course: ["hmia"]
  // },

  // --- Democracy Pathologies ---
  {
    question: "Unchecked Authority (pathology in relation to democracy)",
    answer: "Decision-makers act without accountability to those affected, enabling domination, abuse, and non-responsiveness.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  {
    question: "Non-Responsiveness (pathology in relation to democracy)",
    answer: "The system fails to reflect or update against the preferences and needs of the governed.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  {
    question: "Illegitimacy (pathology in relation to democracy)",
    answer: "Governance is seen as unjustified, unfair, or unrepresentative, undermining compliance and trust.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  {
    question: "Non-Representativeness (pathology in relation to democracy)",
    answer: "Decision-making structures systematically omit or distort the interests of parts of the population.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
    {
    "question": "Empathy",
    "answer": "An alignment trait. The ability to understand and respond to others' perspectives, preferences, and needs.",
    "tags": ["alignment traits"],
    "course": "hmia"
  },
  {
    "question": "Accountability",
    "answer": "An alignment trait. Taking ownership of one's actions and their consequences, and being answerable to others.",
    "tags": ["alignment traits"],
    "course": "hmia"
  },
  {
    "question": "Considerateness",
    "answer": "An alignment trait. Anticipatory empathy — acting with awareness of how one's choices affect others.",
    "tags": ["alignment traits"],
    "course": "hmia"
  },
  {
    "question": "Reciprocity",
    "answer": "An alignment trait. Responding in kind to others' actions, helping sustain cooperation and fairness.",
    "tags": ["alignment traits"],
    "course": "hmia"
  },
  {
    "question": "Shared Transparent Reasoning",
    "answer": "An alignment trait. Explaining and justifying decisions in a way others can assess and evaluate.",
    "tags": ["alignment traits"],
    "course": "hmia"
  },
  {
    "question": "Shared Intentionality",
    "answer": "An alignment trait. The capacity to form, maintain, and coordinate around shared goals with others.",
    "tags": ["alignment traits"],
    "course": "hmia"
  },
  {
    "question": "Conflict Resolution",
    "answer": "An alignment trait. Managing disputes constructively in ways that preserve or repair relationships.",
    "tags": ["alignment traits"],
    "course": "hmia"
  },
  {
    "question": "Trustworthiness",
    "answer": "An alignment trait. Acting dependably and ethically such that others can rely on you.",
    "tags": ["alignment traits"],
    "course": "hmia"
  },
  {
    "question": "Epistemic Humility",
    "answer": "An alignment trait. Recognizing the limits of one's knowledge and deferring or revising when appropriate.",
    "tags": ["alignment traits"],
    "course": "hmia"
  },
  {
    "question": "Honesty / Veracity",
    "answer": "An alignment trait. Commitment to truthfulness and avoidance of deception.",
    "tags": ["alignment traits"],
    "course": "hmia"
  },
  {
    "question": "Role Fidelity",
    "answer": "An alignment trait. Fulfilling responsibilities associated with one's role and respecting its boundaries.",
    "tags": ["alignment traits"],
    "course": "hmia"
  },
  {
    "question": "Reliability / Consistency",
    "answer": "An alignment trait. Behaving predictably across similar situations, enabling stable expectations.",
    "tags": ["alignment traits"],
    "course": "hmia"
  }
]