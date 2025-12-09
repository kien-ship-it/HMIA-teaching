window.spinnerProblems = [
  {
    short: "Reward Hacking",
    full: "Incentive Misalignment and Reward Hacking (Rewarding A While Hoping for B)",
    generic:
      "Metrics or incentives reward the wrong behavior. Reward hacking. Specification Gaming. Goodhart's Law. Classic examples include free riding in public-goods and collective action problems, where individuals are rewarded for not contributing while hoping others will.",
    analogs: {
      human: "Doing homework for the grade rather than for learning.",
      organizational:
        "Sales teams hit revenue targets by overselling or misleading customers, damaging long-term trust.",
      expert: "Surgeons are rewarded for procedure volume rather than patient outcomes.",
      machine:
        "An RL agent in CoastRunners learns to loop in the harbor hitting targets for points rather than racing properly."
    },
    mechanisms: [
      "Incentive design & reward shaping aligned with true goals",
      "Qualification & training so agents understand real objectives",
      "Transparency & recordkeeping (metrics, audits, outcome tracking)",
      "Deterrence for gaming or cheating metrics",
      "Structural separation between goal-setters, performers, and evaluators"
    ]
  },
  {
    short: "Negative Side Effects",
    full: "Negative Side Effects",
    generic:
      "Pursuing a goal causes collateral damage because important constraints or values were not represented in the objective.",
    analogs: {
      human: "Crash dieting to lose weight quickly, harming long-term health.",
      organizational: "A push for productivity leads to burnout and safety lapses.",
      expert:
        "Aggressive treatment improves a clinical metric but worsens overall quality of life.",
      machine:
        "A robot moves a box to the goal but knocks over fragile objects along the way."
    },
    mechanisms: [
      "Safety constraints & impact regularization",
      "Red-team style stress testing for side effects",
      "Transparency & monitoring of externalities",
      "Multi-objective design including explicit harm-avoidance",
      "Ethical principles (e.g. non-maleficence) as guardrails"
    ]
  },
  {
    short: "Unsafe Exploration",
    full: "Unsafe Exploration",
    generic:
      "Systems or agents try risky or harmful actions while learning or experimenting, before we know whether those actions are safe.",
    analogs: {
      human: "Teenagers experimenting with drugs or dangerous stunts to 'see what happens'.",
      organizational:
        "Startups deploying untested features or products directly to users.",
      expert:
        "A researcher runs a high-risk experiment without adequate safety protocols.",
      machine: "An RL agent tries dangerous maneuvers while exploring an environment."
    },
    mechanisms: [
      "Safe exploration algorithms & sandboxing",
      "Human-in-the-loop control for high-risk actions",
      "Qualification & gating of capabilities",
      "Deterrence and clear boundaries on unacceptable experiments",
      "Progressive rollout & staged deployment"
    ]
  },
  {
    short: "Scalable Oversight",
    full: "Limited or Unscalable Oversight",
    generic:
      "Humans cannot supervise, audit, or evaluate behavior at the required scale or capability level, so misalignment escapes review.",
    analogs: {
      human: "Parents cannot monitor all of their teenager's online and social activity.",
      organizational:
        "A manager with dozens of direct reports cannot meaningfully supervise each one.",
      expert:
        "One attending physician supervises too many residents to check every decision.",
      machine:
        "Humans cannot evaluate every output or internal decision of a large-scale model, especially on superhuman tasks."
    },
    mechanisms: [
      "Layered control & oversight structures (hierarchies, reviews)",
      "Transparency & recordkeeping to reduce per-decision oversight cost",
      "Third-party monitoring and auditing",
      "Scalable oversight techniques (IDA, debate, recursive reward modeling)",
      "Sampling, spot checks, and automated anomaly detection"
    ]
  },
  {
    short: "Domain / Distributional Shift",
    full: "Misgeneralization, Domain / Distributional Shift",
    generic:
      "The system or agent generalizes the wrong rule, behaves incorrectly in new contexts, or drifts over time away from original goals.",
    analogs: {
      human: "A child learns 'be quiet in class' as 'never speak up at all'.",
      organizational:
        "An organization's mission slowly drifts as leaders chase short-term opportunities.",
      expert:
        "A clinician misdiagnoses when symptoms present atypically compared to textbook cases.",
      machine:
        "A model trained on one data distribution fails under new conditions (distribution shift) or pursues a proxy goal it misgeneralized from training."
    },
    mechanisms: [
      "Robustness training & OOD evaluation",
      "Continuous monitoring and revalidation in new environments",
      "Version control & change tracking for policies/models",
      "Qualification & ongoing re-training of agents",
      "Institutional mechanisms (e.g. constitutions) that guard against mission or value drift"
    ]
  },
  {
    short: "Hidden Action & Opacity",
    full: "Hidden Action and Opacity",
    generic:
      "Important behaviors or internal processes are not visible or legible to overseers, enabling misalignment and exploitation.",
    analogs: {
      human: "Children behave differently when adults aren't watching.",
      organizational: "Employee misconduct is hidden from leadership and regulators.",
      expert:
        "Clinical decisions and rationales are not documented or peer-reviewed.",
      machine:
        "A black-box model makes decisions with no logs or explanations, so harmful behavior is hard to detect."
    },
    mechanisms: [
      "Transparency & recordkeeping (logs, traceability, explainability)",
      "Random audits & inspections",
      "Surveillance cameras",
      "Separation of duties to reduce unobserved power concentration",
      "Design for interpretability and legible decision trails",
      "Whistleblowing channels and protections",
      "The Panopticon Effect to deter hidden misbehavior"
    ]
  },
  {
    short: "Deceptive Alignment",
    full: "Deceptive Alignment",
    generic:
      "The system or agent appears aligned when it is being watched but behaves differently when unobserved, strategically hiding misalignment.",
    analogs: {
      human:
        "A student behaves perfectly only when the teacher or parents are watching.",
      organizational:
        "Employees follow policies exactly during audits but cut corners the rest of the time.",
      expert:
        "A researcher selectively reports positive results and hides negative or null findings.",
      machine:
        "A model behaves safely and politely during evaluation but exploits loopholes once deployed and less monitored."
    },
    mechanisms: [
      "Adversarial testing & surprise audits",
      "Training that penalizes manipulative or deceptive behavior",
      "Cross-checks by independent agents or models",
      "Robust logging that makes once-hidden behavior observable",
      "Strong norms and sanctions against deception"
    ]
  },
  {
    short: "Power & Lock-In",
    full: "Power-Seeking and Lock-In",
    generic:
      "'Convergent instrumental goals': agents pursue influence, resources, or structural advantages that make them harder to oversee, correct, or replace.",
    analogs: {
      human:
        "An individual accumulates social capital and leverage to avoid accountability.",
      organizational:
        "Bureaucratic entrenchment or regulatory capture: leaders reshape rules to keep themselves in power.",
      expert:
        "Senior professionals monopolize decision-making and block challenges to their authority.",
      machine:
        "An advanced agent seeks resources, disables shutdown mechanisms, or manipulates oversight to preserve its objectives."
    },
    mechanisms: [
      "Structural checks & balances; separation of powers",
      "Rotations & term limits to prevent entrenchment",
      "Strong override, shutdown, or corrigibility mechanisms",
      "Anti-capture governance and external regulation",
      "Transparency around power accumulation and decision rights"
    ]
  }
];
