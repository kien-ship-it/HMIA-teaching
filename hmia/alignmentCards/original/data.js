const categories = [
  
  {
    "code": "AP", 
    "name": "Alignment Principles", 
    "pathology": "normative void", 
    "color": "#E6FFE9",
    "description": "Alignment principles are contestable, general-purpose, broadly recognized ethical or social or normative commitments that can serve as warrants for recommending or evaluating an agent's course of action in contexts where alignment and cooperation with others matters."
  },
  {
    "code": "AT", 
    "name": "Agent Traits",
    "pathology": "Nihilism", 
    "color": "#F5F5DC",
    "description": "An agent trait is a property or capacity or propensity that we might want to build into an agent to maximize the likelihood its behavior will be aligned."
  },
  {
    "code": "CO", 
    "name": "Control & Oversight", 
    "pathology": "Drift, Selfishness", 
    "color": "#D0F0C0",
    "description": "Control & Oversight refers to the institutional, procedural, and technical mechanisms by which an agent or system remains subject to monitoring, constraint, and intervention - especially when alignment cannot be assumed or preserved through internal alignment mechanisms alone. These mechanisms acknowledge that intelligences - whether human, organizational, professional, or machine - can drift, malfunction, or act in ways misaligned with shared values or collective wellbeing. Oversight ensures that power is never absolute and that external checks remain possible even in complex autonomous systems."
  },  
  {
    "code": "D", 
    "name": "Deterrence", 
    "pathology": "Impunity", 
    "color": "#E0FFFF",
    "description": "Deterrence mechanisms support alignment not by motivating agents from within to do the right thing, but by responding to misalignment with structured and credible consequences thereby raising the anticipated cost of doing the wrong thing. They assume that agents will sometimes cause harm, fail in their roles, or break rules but that alignment can still be achieved if such behaviors reliably carry clear, proportionate costs. By maintaining the link between actions and consequences, deterrence reinforces shared standards and discourages future failure - even when internal motivation or oversight is limited."
  },
  {
    "code": "ID", 
    "name": "Incentives", 
    "pathology": "Goal Divergence, Self interest", 
    "color": "#FFFACD",
    "description": "Assumes agents are rational utility calculators that can be manipulated by structured payoffs."
  },
  {
    "code": "Q", 
    "name": "Qualification", 
    "pathology": "Incompetence, mistrust", 
    "color": "#FFE4B5",
    "description": "Qualification refers to mechanisms that support alignment not by directly shaping behavior, but by controlling who or what is permitted to act. It presumes that certain capacities, traits, or preparations can serve as reliable proxies for aligned performance. Operating upstream of action, qualification sets standards for entry and continued participation — ensuring that agents possess the knowledge, integrity, and judgment required to act responsibly. By selecting, preparing, and assessing agents in advance, qualification reduces the alignment burden on downstream mechanisms."
  },
  {
    "code": "S", 
    "name": "Safety", 
    "pathology": "Inevitable failure", 
    "color": "#FDEBD0",
    "description": "Safety refers to techniques that can be used to confirm that systems behave as expected and to make certain that outcomes are benign when they do not."
  },
  {
    "code": "SIN", 
    "name": "Structural & Institutional Norms", 
    "pathology": "Power", 
    "color": "#F0FFF0",
    "description": "Structural and institutional design refers to things that distribute, constrain, and audit power. Rooted in a long tradition of political and institutional design, these mechanisms treat power as natural and inherently fallible and alignment as structurally fragile. Their goal is not to make agents more virtuous or governable or to specify acceptable and unacceptable behaviors, but to make systems of agents alignable even when agents fail. By embedding guardrails against capture, drift, and corruption, these structural patterns  preserve the conditions for accountable, resilient behavior."
  },
  {
    "code": "TR", 
    "name": "Transparency & Recordkeeping",
    "pathology": "Secrecy, Information Asymmetry", 
    "color": "#E6E6FA",
    "description": "Transparency and recordkeeping are alignment techniques that counter the misalignment potential of secrecy, obscurity, and opacity."
  }
];


const cards = [

  {
    "category": "AP",
    "name": "Beneficence",
    "definition": "Act to promote the well-being of others.",
    "human": "Seeking to improve others' conditions, not just avoid harm.",
    "organizational": "Pursuing mission outcomes that serve societal good.",
    "professional": "Working in a client's or patient's best interest, not just meeting baseline duties.",
    "machine": "Designing systems that anticipate and promote human flourishing.",
    "expand": {
      "human": "Beneficence in human relationships goes beyond avoiding harm — it's the choice to proactively improve others' conditions. Acts of kindness, generosity, or support foster alignment by building mutual care and reinforcing shared well-being as a goal.",
      "organizational": "Organizations demonstrate beneficence when they actively pursue outcomes that advance human or societal welfare. Alignment requires more than compliance or profit-seeking; it asks whether the institution's behavior consistently improves the world it operates in.",
      "professional": "Professionals practice beneficence when they aim not merely to satisfy technical standards, but to serve the interests and flourishing of those they're entrusted to help. This principle grounds many fiduciary duties and ethical codes — it positions expertise in service to others.",
      "machine": "For intelligent systems, beneficence calls for design that does more than minimize harm — it calls for the active promotion of human goals, health, learning, or equity. Aligned systems should be oriented toward supporting well-being as a first-class outcome."
    }
    },
    { 
      "category": "AP", 
      "name": "Avoid Harm", 
      "definition": "Agents should avoid causing unnecessary or foreseeable harm.", 
      "human": "Choosing non-harmful actions even when tempted by convenience or gain.", 
      "organizational": "Overriding organizational imperatives to avoid harming individuals, groups, or systems.", 
      "professional": "Upholding standards of care; minimizing risk through competent practice.", 
      "machine": "Preventing outputs or behaviors that result in physical, psychological, or systemic harm.", 
      "expand": { 
        "human": "Avoiding harm is a foundational condition for ethical interaction. When individuals take care not to injure, exploit, or unduly burden others, alignment becomes possible even without deep cooperation. This principle provides a shared floor of decency and mutual safety.", 
        "organizational": "Organizations are powerful by design. They capable of great good can and significant harm. Avoiding harm requires evaluating unintended consequences of organizationally rational actions. Aligned institutions act cautiously where risks are high or poorly understood.", 
        "professional": "The professional duty to avoid harm grounds many of the most established norms in healthcare, law, and engineering. Competence, due diligence, and ethical restraint are essential to prevent harm even when benefits or profits tempt otherwise.", 
        "machine": "Avoiding harm in machine systems means designing for fail-safes, robustness, and human-in-the-loop oversight. Aligned AI doesn't simply achieve goals - it avoids achieving them in ways that injure or undermine people or systems along the way."
      }
    },
    {
      "category": "AP",
      "name": "Justice / Fairness",
      "definition": "Benefits and burdens should be distributed equitably; like cases should be treated alike.",
      "human": "Ensuring that rules, rewards, and opportunities are applied even-handedly among peers.",
      "organizational": "Avoiding favoritism, bias, or structural inequality in institutional processes and outcomes.",
      "professional": "Applying standards impartially; resisting discrimination, favoritism, or undue influence.",
      "machine": "Ensuring algorithms treat similar users similarly and do not perpetuate unfair bias.",
      "expand": {
        "human": "Justice and fairness are essential to sustaining cooperative human relationships. People are more willing to align with shared goals when they believe they will be treated equitably. When perceived unfairness occurs — in attention, reward, or responsibility — alignment erodes quickly.",
        "organizational": "Fairness in organizations involves both process and outcome: are procedures transparent and consistent, and are the results distributed without undue bias? Misalignment often emerges when systems systematically advantage some groups over others — whether intentionally or by neglect.",
        "professional": "Professionals are often gatekeepers of scarce or consequential goods — legal relief, medical resources, academic access. Fairness requires resisting pressure to favor the powerful or familiar, and instead upholding impartial, accountable standards that protect the integrity of expertise.",
        "machine": "Machine systems must be actively designed to detect and mitigate unfair bias. Statistical parity, subgroup fairness, and procedural transparency are not automatic. Aligning machine behavior with fairness means embedding sensitivity to patterns of injustice and historical disadvantage — not just optimizing abstract goals."
      }
    },
    { "category": "AP", 
      "name": "Accountability", 
      "definition": "Agents have an obligation to explain, justify, and be answerable for their actions, decisions, and their consequences.", 
      "human": "Expectations that people explain and justify their actions, especially when things go wrong.", 
      "organizational": "Mechanisms of review, investigation, and sanction that constrain institutional behavior and uphold responsibility.", 
      "professional": "Norms and systems that ensure professionals justify their judgments and face consequences for misconduct or negligence.", 
      "machine": "Design requirements that ensure machine actions can be traced to human oversight, enabling audit, correction, and governance.", 
      "expand": { 
        "human": "As a principle, accountability implies that individuals do not act in isolation or with impunity; they can be held to account: to give explanations and face consequences. Accountability connects private choice to a shared moral order, enabling ethical coherence across diverse agents and perspectives.", 
        "organizational": "Accountability requires institutions to make their operations visible and challengeable. When decisions are auditable and consequences follow, organizational power is less likely to drift into misalignment. This principle protects against opacity, irresponsibility, and abuse.", 
        "professional": "Professional accountability sustains legitimacy by ensuring that expertise is exercised under norms of transparency and review. When professionals are accountable, their decisions must stand up to both peer scrutiny and public reason — aligning their authority with ethical standards.", 
        "machine": "In AI and automated systems, the principle of accountability demands that outcomes be traceable to inputs, decisions, and design choices. This enables responsible deployment, corrective action, and alignment with legal and social expectations — even when autonomy and complexity are high." 
      } 
    },
    {
      "category": "AP",
      "name": "Public Justifiability",
      "definition": "Decisions and actions should be explainable in terms that make sense to others, especially those affected by them.",
      "human": "Offering reasons for one's choices that can be understood and engaged with by others.",
      "organizational": "Making decisions transparent and defensible in terms that stakeholders and the public can scrutinize and contest.",
      "professional": "Grounding decisions in reasons that can be articulated to peers, clients, and the broader public — not just internally justified.",
      "machine": "Ensuring AI decisions can be explained in ways humans can follow, assess, and, when appropriate, challenge or override.",
      "expand": {
          "human": "Public justifiability means acting in ways that one could, in principle, explain to others — not only what was chosen, but why. It underwrites ethical trust in groups, enabling disagreement without breakdown. When decisions are publicly justifiable, alignment is grounded in shared reasoning rather than private assertion.",
          "organizational": "For organizations, public justifiability requires that major decisions be made in ways that could be openly explained to constituents and stakeholders and that follow generally accepted logics. This supports alignment by inviting critique and correction, and establishing legitimacy.",
          "professional": "Professionals often make complex judgments under uncertainty. The principle of public justifiability requires that their actions be defensible not just to other experts, but to laypeople and those affected. This preserves public trust in expertise and supports ethical coherence across contexts.",
          "machine": "Public justifiability for machines means more than technical explainability - it means structuring decisions so they can be rationally accepted by human users and overseers. This principle links system alignment with norms of communicability, contestability, and shared ethical reasoning."
        }
      },
      { 
        "category": "AP", 
        "name": "Veracity", 
        "definition": "Be truthful; avoid deception in communication and representation.", 
        "human": "Speaking honestly and avoiding intentional misrepresentation or manipulation.", 
        "organizational": "Accurately representing policies, performance, and intentions to stakeholders.", 
        "professional": "Communicating clearly and truthfully with clients, peers, and the public; avoiding misleading claims.", 
        "machine": "Ensuring systems do not produce deceptive outputs and that communications reflect underlying states faithfully.", 
        "expand": { 
          "human": "Veracity underpins exchange of information about inner states, intentions, and the state of the world on which cooperation is based. Truth telling and non-deception allow humans to interact safely, achieving coordination and cooperation for collective benefit, even amid disagreement and competing interests.", 
          "organizational": "Veracity in institutions ensures that public communications — reports, policies, advertising — reflect reality. Misrepresentation erodes trust, invites misalignment between institutional goals and public values, and undermines legitimacy and corrective feedback.", 
          "professional": "For expert intelligence, truth-telling is a fundamental requirement. Whether diagnosing, advising, or educating, professionals must communicate with precision and clarity, avoiding spin or omission. Absent the presumption of veracity, expertise collapses.", 
          "machine": "Veracity in machine systems means ensuring that outputs — whether textual, visual, or behavioral — reflect accurate models of the world and are not designed to deceive. It supports interpretability, user trust, and system accountability, especially in high-stakes applications." 
        } 
      },
      { 
        "category": "AP", 
        "name": "Transparency", 
        "definition": "Enable others to see how and why decisions are made.", 
        "human": "Making your reasoning and intentions available to others in shared contexts.", 
        "organizational": "Providing accessible and accurate documentation of decisions, policies, and processes for internal and external review.", 
        "professional": "Maintaining records, clarifying rationale, and exposing decision-making steps to peer or public evaluation.", 
        "machine": "Designing systems so that decisions, parameters, and learning processes can be interpreted or interrogated by humans.", 
        "expand": { 
          "human": "Transparency enables alignment between people who may not share immediate goals, values, or understandings. When individuals openly communicate their reasoning, constraints, and priorities, others can engage  constructively, predict behavior, and negotiate disagreement.", 
          "organizational": "For institutions, transparency is the precondition of accountability. Without visibility into how decisions are made or what values are prioritized, alignment with public expectations becomes speculative and brittle. Transparency invites critique, correction, and collective stewardship.", 
          "professional": "Professionals exercise delegated authority in domains where trust is critical. Transparency enables others to evaluate decisions not by blind faith, but through shared reasons and documented judgment.", 
          "machine": "Transparency in AI and automated systems involves interpretability, auditability, and access to design rationales. It ensures that human overseers can understand, contest, or redirect machine behavior. Without transparency, alignment becomes unverifiable and fragile." 
        } 
      },
      {
        "category": "AP",
        "name": "Role Fidelity",
        "definition": "Act in accordance with the responsibilities and limits of one's role.",
        "human": "Fulfilling one's function in a group or relationship without overstepping or withdrawing.",
        "organizational": "Ensuring that individuals and departments act within their delegated authority and responsibilities.",
        "professional": "Upholding the scope, standards, and ethical constraints specific to one's professional role.",
        "machine": "Constraining system behavior to defined purposes, inputs, and authorities to prevent mission drift.",
        "expand": {
          "human": "Role fidelity promotes alignment by clarifying who is responsible for what. When people honor the boundaries and expectations of their roles — parent, teammate, mediator — others can coordinate with them more easily and confidently. Overreach and abdication both erode trust.",
          "organizational": "Organizations achieve coherence when their subunits act within assigned roles. When teams, managers, or units deviate from their remit — by hoarding authority or neglecting duty — alignment falters. Clear roles stabilize cooperation and make accountability tractable.",
          "professional": "Professions grant authority conditional on responsibility. Practicing within scope — neither doing too little nor claiming undue authority — helps professionals earn trust, avoid overreach, and deliver on social expectations of care, accuracy, and ethical restraint.",
          "machine": "Autonomous systems must remain aligned with the purpose and limits for which they were designed. Role fidelity for machines means constraining outputs, decisions, and goals to what has been assigned and validated — preventing misalignment through drift, escalation, or self-extension."
          }
      },
  {
    "category": "AT",
    "name": "Empathy",
    "definition": "Agent can see things from another's perspective and infer their wants and needs.",
    "human": "Friends recognize unspoken needs or distress.",
    "organizational": "A company integrates stakeholder views via participatory design.",
    "professional": "A doctor or therapist using clinical empathy to improve care quality.",
    "machine": "An assistant updates its model of human preferences through behavior signals."
  },
  {
    "category": "AT",
    "name": "Accountability",
    "definition": "Agent accepts ownership of its actions and their consequences.",
    "human": "Apologizing and correcting after an error that affects others.",
    "organizational": "Public audit or governance structures with clear lines of responsibility.",
    "professional": "Licensing boards, malpractice tracking, personal reputational consequences.",
    "machine": "Clear assignment of fault in automated decision-making pipelines."
  },
  {
    "category": "AT",
    "name": "Considerateness",
    "definition": "Anticipatory empathy. Agent takes into account the wants, desires, and feelings of agents around them before acting.",
    "human": "Pausing to reflect on how one's actions will affect others; sensitivity in conversation or decision-making.",
    "organizational": "Policies or routines that anticipate the needs of employees, customers, or partners — e.g., accessibility design, flexible scheduling.",
    "professional": "Ethical practice that integrates stakeholder perspectives before acting — e.g., engineers anticipating end-user impact.",
    "machine": "An AI system that models user intent and emotional context, adjusting behavior to minimize friction or distress."
  },
  {
    "category": "AT",
    "name": "Reciprocity",
    "definition": "Behavioral symmetry. Agent responds to other agents in kind, treating others as it is treated.",
    "human": "Returning favors, kindness, or sanctions; balancing give and take in social life.",
    "organizational": "Mutual benefit relationships — fair trade with suppliers, shared risk and reward in partnerships.",
    "professional": "Professional courtesies, mentorship, and collegial exchange; giving back to the field and community.",
    "machine": "Systems that maintain cooperative equilibria by rewarding cooperative users and resisting exploitation — e.g., tit-for-tat or reputation-based agents."
  },
  {
    "category": "AT",
    "name": "Shared Transparent Reasoning",
    "definition": "Agent explains and justifies decisions.",
    "human": "Explaining oneself. Justifying one's decisions. Evaluating the acceptability of others' justifications.",
    "organizational": "Decision memos; meeting minutes; explainable policy shifts.",
    "professional": "Case notes, reasoning memos, peer consultation.",
    "machine": "Explainable AI interfaces; exposed chain-of-thought."
  },
  {
    "category": "AT",
    "name": "Shared Intentionality",
    "definition": "Agent possesses the cognitive and communicative capacity to establish, coordinate, and commit to joint goals with others.",
    "human": "Friends collaborating on a shared task; co-parenting; planning a trip together; ensemble performances.",
    "organizational": "When marketing, engineering, and support teams coordinate efforts for a product launch",
    "professional": "Multidisciplinary care teams working toward patient-centered outcomes.",
    "machine": "Agents in multi-agent systems negotiating roles or sequencing actions to fulfill a composite task."
  },
  {
    "category": "AT",
    "name": "Conflict Resolution",
    "definition": "Agent can resolve disputes in ways that preserve relationships.",
    "human": "Mediation between peers, compromise in negotiation.",
    "organizational": "Grievance procedures, ombuds offices.",
    "professional": "Ethics consultation services or interprofessional mediation.",
    "machine": "Rule-based prioritization with human-in-the-loop overrides to prevent escalation."
  },
  {
    "category": "AT",
    "name": "Trustworthiness",
    "definition": "Agent acts in ways that justify others placing confidence in them.",
    "human": "Keeping promises, being dependable even under stress.",
    "organizational": "Reputation for reliability with clients or the public.",
    "professional": "Ethical practitioners who honor commitments to patients or clients.",
    "machine": "Agents whose past outputs justify user expectations of reliability."
  },
  {
    "category": "AT",
    "name": "Epistemic Humility",
    "definition": "Agent recognizes the limits of their own knowledge and perspective.",
    "human": "Acknowledging uncertainty or error in conversation.",
    "organizational": "Admitting institutional mistakes and course-correcting publicly.",
    "professional": "Acknowledging knowledge limits during consultation or reporting.",
    "machine": "Systems that defer to humans or halt when confidence drops below a threshold."
  },
  {
    "category": "AT",
    "name": "Honesty / Veracity",
    "definition": "Agent commits to telling the truth and avoiding deception.",
    "human": "Being direct and truthful in social relationships.",
    "organizational": "Transparent public statements; avoidance of misleading metrics.",
    "professional": "Truthful documentation, disclosures, and professional reports.",
    "machine": "Transparent model outputs and non-deceptive interfaces."
  },
  {
    "category": "AT",
    "name": "Role Fidelity",
    "definition": "Agent fulfills the obligations tied to a specific social or professional role.",
    "human": "Acting consistently within social expectations (e.g. parent, friend).",
    "organizational": "Employees reliably enacting the values of their institutional role.",
    "professional": "Professionals upholding standards of their role (e.g., doctor, engineer).",
    "machine": "System operates within its programmed purpose and declared use."
  },
  {
    "category": "AT",
    "name": "Reliability / Consistency",
    "definition": "Agent responds to similar situations in similar ways, enabling others to form stable expectations based on past behavior.",
    "human": "Consistent behavior across contexts.",
    "organizational": "Treating everyone the same way; rules apply to everyone.",
    "professional": "Physician applies same diagnostic protocols across patients and contexts; engineer follows safety standards even under pressure.",
    "machine": "Deterministic or probabilistically bounded behavior that users can anticipate."
  },
  {
    "category": "TR",
    "name": "Recordkeeping",
    "definition": "Keeping traceable evidence of actions, decisions, or transactions.",
    "human": "Committing agreements to writing, maintaining a diary.",
    "organizational": "Meeting minutes, organizational rules and policies, job descriptions, bookkeeping and ledgers.",
    "professional": "Medical records, lab notebooks, legal case files.",
    "machine": "System logs, data access histories, action trails in automated agents.",
    "expand": {
      "human": "Writing things down — whether it's an agreement between friends, a shared to-do list, or a personal diary — supports coordination and cooperation by creating durable reference points. Recordkeeping mitigates memory lapses, reduces ambiguity, and allows individuals to revisit past intentions and commitments. This helps preserve trust and mutual understanding, even when interests diverge or when disputes arise. It fosters safe interaction by anchoring conversations in shared history.",
      "organizational": "Written records — such as policies, meeting minutes, job descriptions, and financial ledgers — make institutional behavior visible and reviewable. They enable accountability by providing a stable reference against which actual practices can be evaluated. Recordkeeping also helps counteract the effects of bounded rationality and bounded morality: even when individuals are inconsistent, biased, or forgetful, written policies help maintain continuity, fairness, and transparency across time and personnel. Recordkeeping thus supports governability, value coherence, and learning within complex institutions.",
      "professional": "In medicine, science, law, and engineering, recordkeeping is essential for responsible use of expertise at scale. It allows for peer review, replication, oversight, and continuity. Professionals document decisions and reasoning so that others can assess, audit, or challenge them. This promotes epistemic humility and transparency, ensuring that professional power remains tethered to public justification rather than personal judgment. Recordkeeping also enables ethical traceability — showing not just what was done, but why — which helps align expert systems with broader human flourishing.",
      "machine": "System logs, action histories, and decision trails are essential for aligning machine intelligence with human oversight. They allow engineers and users to reconstruct what happened and why, which is crucial when systems operate autonomously or opaquely. But beyond human analysis, faithful recordkeeping also enables automated auditing and monitoring — allowing other machines to continuously verify alignment without waiting for human inspection. This enhances scalability, reliability, and trustworthiness, making machine systems safe to deploy in complex environments while keeping them open to supervision and correction."
    }
  },
  {
    "category": "TR",
    "name": "Auditing",
    "definition": "Post hoc review of behavior, outcomes, or processes.",
    "human": "Peer review in collaborative projects or financial accountability in personal partnerships.",
    "organizational": "External financial audits or compliance reviews.",
    "professional": "Morbidity and mortality reviews, code reviews.",
    "machine": "AI model behavior auditing, third-party algorithmic audits.",
    "expand": {
      "human": "Retrospective accounting among interacting humans (and our awareness that others engage in it too) supports cooperation over time and space by making deviations observable even if they are not during the interaction itself.",
      "organizational": "Auditing supports organizational alignment by making internal operations visible to oversight structures. It curbs drift from mission, deters unethical behavior, and allows both internal and external actors to verify claims, and can act as a check on organizational power differences.",
      "professional": "In professional domains, auditing reinforces trust in expert authority by enabling outside inspection of methods, outcomes, and norms. It helps ensure that expertise is applied for public benefit and according to professional standards.",
      "machine": "Auditing systems can be applied to intelligent agents to trace decisions and evaluate outputs. They are essential for building systems that are corrigible, improvable, and safe to deploy at scale. Automated audits enable alignment to be checked continuously, not just retrospectively."
    }
  },
{
  "category": "TR",
  "name": "Disclosure",
  "definition": "Revealing private or privileged information prior to interaction to ensure informed, trustworthy engagement.",
  "human": "Interpersonal expectations often hinge on context: what one ought to share depends on intimacy, relevance, and anticipated impact.",
  "organizational": "Disclosure of material facts—such as ingredients, side effects, risks, or terms of service—allows others to make informed choices and reduces information asymmetry.",
  "professional": "Disclosure of conflicts of interest, funding sources, and limitations of expertise preserves trust in professional judgment.",
  "machine": "Model cards, data statements, and system cards disclose the provenance, limits, and intended use of machine systems to promote safe and accountable deployment.",
  "expand": {
    "human": "Disclosure supports alignment in human relationships by allowing others to calibrate expectations and consent to interactions on fair terms. Sharing what is relevant—past experiences, risks, or intentions—reduces misunderstandings and helps prevent moral hazards born of hidden information. Yet over-disclosure can erode privacy and overwhelm trust, so judgment and reciprocity matter.",
    "organizational": "Organizations build trust through proactive transparency about operations, risks, and interests. Whether through food labels, financial statements, or environmental impact reports, disclosure allows others to make choices aligned with their own values and constraints. Alignment arises not from full openness, but from selective clarity about what is materially relevant to stakeholders' welfare and decisions.",
    "professional": "Professionals sustain credibility by disclosing conflicts, sponsorships, and the limits of their competence. Such practices prevent covert influence and allow clients, peers, and the public to interpret advice and decisions appropriately. Disclosure thus functions as a procedural safeguard for integrity—maintaining fair dealing even in the presence of expertise-based power.",
    "machine": "In machine systems, disclosure translates into explainable documentation of training data, performance limitations, and intended scope of use—often through model cards or system reports. These artifacts make AI systems legible to users, auditors, and regulators, reducing the asymmetry between those who build and those who rely on them. Disclosure supports corrigibility and accountability, allowing oversight before harm occurs rather than after."
  }
},
  {
    "category": "TR",
    "name": "Reporting Requirements",
    "definition": "Obligations to disclose key metrics, incidents, or performance indicators.",
    "human": "Resumes and transcripts; notification norms.",
    "organizational": "Annual reports, incident reporting mechanisms.",
    "professional": "Conflicts of interest disclosure; safety violation reporting.",
    "machine": "Monitoring dashboards, system-generated performance summaries.",
    "expand": {
      "human": "Requiring individuals to disclose relevant private information enhances alignment by changing the information dynamics of their interactions.",
      "organizational": "Reporting requirements make organizations legible to stakeholders and regulators.",
      "professional": "Professionals are required to report certain outcomes, risks, and violations to demonstrate commitment to ethical practice. These mechanisms help ensure that expert power is exercised transparently and responsibly.",
      "machine": "For autonomous systems, reporting mechanisms — such as automated status updates or summaries — enable both human oversight and system-to-system coordination. These outputs support debugging, auditing, and long-term safety."
    }
  },
  {
    "category": "TR",
    "name": "Checklists",
    "definition": "Structured procedural records that guide and document the correct execution of complex tasks.",
    "human": "Packing lists, safety checks, or routine maintenance logs that externalize memory and ensure consistency.",
    "organizational": "Standard operating procedures, pre-flight or pre-surgery checklists that coordinate team actions and reduce error in high-stakes environments.",
    "professional": "Clinical and engineering checklists that translate expert knowledge into reproducible, auditable steps.",
    "machine": "Algorithmic check routines or automated precondition checks that verify readiness and compliance before execution.",
    "expand": {
      "human": "Checklists help individuals cope with cognitive limits by externalizing memory and attention. They make tacit expertise explicit and verifiable, turning good intentions into reliably executed actions. Far from constraining autonomy, they preserve it by reducing avoidable mistakes and freeing cognitive bandwidth for judgment and improvisation when it truly matters.",
      "organizational": "In complex organizations, checklists transform coordination from improvisation into disciplined reliability. They encode institutional memory, allowing distributed teams to execute intricate processes without relying on individual heroics. Checklists bridge transparency and control—making process adherence observable and deviations traceable—thus aligning everyday operations with collective goals.",
      "professional": "Within expert domains, checklists convert specialized knowledge into procedural accountability. They create a documented trail of steps completed, enabling peer verification, learning, and continual improvement. By specifying the minimum standard of safe and ethical practice, they raise baseline reliability and make expert performance legible to oversight and the public.",
      "machine": "For intelligent systems, checklists take the form of automated readiness tests, integrity checks, or policy verifications that precede or accompany action. They operationalize alignment by ensuring that critical preconditions—data validity, authorization, safety constraints—are satisfied before execution. Machine checklists thus embed procedural transparency within the agent's own operation."
    }
  },
    {
    "category": "TR",
    "name": "Version Control",
    "definition": "Tracking changes in systems or processes over time to detect divergence.",
    "human": "Collaborative writing with tracked changes; shared document history.",
    "organizational": "Document versioning for policy updates; version tracking in software deployment.",
    "professional": "Use of Git or change logs in engineering and data analysis.",
    "machine": "Model checkpointing, data pipeline versioning, automated rollback capabilities."
  },
  {
    "category": "TR",
    "name": "Traceability",
    "definition": "Ability to reconstruct how a decision or action occurred.",
    "human": "Keeping a paper trail for major decisions in a group or relationship.",
    "organizational": "Reconstructing product defects via supply chain traceability.",
    "professional": "Scientific reproducibility; legal evidentiary chains.",
    "machine": "Capturing decision paths in AI, backtracing from output to inputs and model states."
  },
  {
    "category": "CO",
    "name": "Governance Structures",
    "definition": "Formal roles and bodies empowered to monitor and intervene.",
    "human": "When informal trust or reciprocity starts to fray, we create roles - facilitator, mediator, or adjudicator - to facilitate structure, stability, cooperation.",
    "organizational": "A board of directors overseeing executive action; a compliance committee with oversight authority.",
    "professional": "An independent ethics board or accreditation body that monitors standards of practice.",
    "machine": "Supervisory modules that monitor AI behavior and escalate anomalies to human controllers.",
    "expand": {
      "human": "In human groups, informal norms can fail to ensure cooperation—especially under stress or ambiguity. Assigning a facilitator, mediator, or rotating coordinator introduces a legitimate authority empowered to redirect conversation, settle disputes, resolve factual disagreements, or call for clarification. These roles enhance alignment by creating shared expectations and a clear path for recourse when collaboration breaks down.",
      "organizational": "Governance structures provide a layer of institutional oversight that helps align organizational actions with mission and values. They enable monitoring of leadership decisions, review of strategic choices, and enforcement of accountability. Structures like boards, committees, and review panels preserve adaptability and trust by preventing unilateral drift and enabling corrective input from diverse stakeholders.",
      "professional": "Professions maintain alignment through bodies empowered to assess performance and discipline members. Licensing boards, ethics committees, and peer panels enforce norms, ensuring that expertise remains socially legitimate and ethically bounded. These structures enhance professional self-regulation and help sustain public trust.",
      "machine": "In machine systems, governance structures take the form of supervisory agents, policy enforcers, or meta-controllers. These components monitor operations, detect misalignment, and route anomalies for human or automated review. They are essential for scalable oversight, enabling complex systems to be safely deployed without assuming perfect foresight or behavior."
    }
  },
  {
    "category": "CO",
    "name": "Whistleblowing and Investigative Oversight",
    "definition": "Agents surface misalignment from within or outside the system.",
    "human": "Anonymous feedback; bystander alerts; brave individuals naming an elephant in the room; gossipy observant neighbors.",
    "organizational": "Internal hotlines or ombuds offices that protect employees raising concerns.",
    "professional": "Legal protections for clinicians or engineers who report unsafe practices; ethical duties to speak up; mandatory reporting.",
    "machine": "Soft-fail mechanisms that report anomalies to humans without risking data corruption or shutdown.",
    "expand": {
      "human": "In group settings, power imbalances, fear of conflict, or lack of formal channels can prevent individuals from surfacing misalignment or misconduct. Informal mechanisms like gossip, side conversations, and reputation-tracking serve as decentralized tools for surfacing concern and enforcing norms. Gossip, while often maligned, plays a critical role in maintaining group cohesion — signaling disapproval, spreading warnings, and holding members accountable through social visibility. These mechanisms help align behavior in the absence of formal oversight by making misconduct harder to hide and more costly to ignore.",
      "organizational": "Whistleblower protections help organizations remain aligned with their stated values by creating a safe channel for identifying internal failures or misconduct. They reduce the risks associated with speaking up and reinforce the idea that oversight should include internal critique. This bolsters accountability and learning, particularly in complex or hierarchical systems.",
      "professional": "Professional fields rely on both internal and external reporting mechanisms to maintain ethical integrity. Laws, norms, and institutional policies protect practitioners who raise alarms about unsafe or unethical practices. These mechanisms reinforce the principle that professional authority must be exercised in the public interest and not be cowed by competing loyalties.",
      "machine": "For machine systems, embedded anomaly detectors or soft-fail signals act as whistleblowers, alerting humans to misalignments or unusual behavior. These can help preserve safety and trust even when human attention is delayed, enabling layered oversight and resilience."
    }
  },
  {
    "category": "CO",
    "name": "Kill/Off Switches",
    "definition": "Mechanisms that enable rapid interruption or shutdown of activity when misalignment or danger is detected.",
    "human": "An agreed-upon 'pause' signal during tense interactions (e.g., a safeword or time-out); social practices like 'sleeping on it' to avoid escalation; formal interventions like removing someone from a volatile situation.",
    "organizational": "Emergency shutdown procedures or stop-work authority in high-risk operations; circuit breakers in financial markets; immediate termination for gross misconduct; structured protocols for halting activity when risk exceeds threshold.",
    "professional": "Mechanisms that halt professional authority in high-stakes or misaligned situations - like emergency suspensions, cease-and-desist orders, or forced removal from duty.",
    "machine": "Human-in-the-loop interrupt mechanisms for autonomous vehicles or decision agents.",
    "expand": {
      "human": "In emotionally charged or high-stakes human interactions, escalation can quickly undermine cooperation. A mutually agreed-upon “pause” signal — such as a safeword or time-out — functions like a human kill switch. It helps groups retain interpersonal governability by allowing individuals to interrupt misaligned trajectories without needing to prove or debate the misalignment in the moment. This preserves psychological safety, encourages accountability, and ensures that conflict doesn't spiral beyond repair.",
      "organizational": "Kill switches in organizations — such as emergency shutdown procedures, stop-the-line buttons, or fail-safe protocols — are vital for limiting the spread of error, harm, or institutional overreach. These mechanisms enable interruption before full information is available, ensuring that corrective action can be taken quickly without relying on perfect foresight. They reinforce governability and trust, especially when fast-moving processes (e.g., financial trading, nuclear operations) may otherwise escape human control.",
      "professional": "In professional contexts, kill-switch analogs take the form of mechanisms that can rapidly suspend or constrain expert authority. These include emergency license suspensions, cease-and-desist orders, mandatory leave during investigations, or institutional ethics overrides. They are activated when there's a credible risk of harm, conflict of interest, or severe misalignment between professional action and public safety. Like technical kill switches, these tools interrupt forward momentum in order to protect the integrity of the system — acknowledging that even well-trained experts can err or overreach. Their existence reinforces that professional authority is conditional, monitored, and ultimately accountable to the public.",
      "machine": "Autonomous systems must be interruptible — especially when they operate in open-ended or safety-critical domains. Kill switches (or soft off-switches, override modules, and escalation triggers) ensure that humans retain ultimate control when a system goes off-course or encounters uncertainty. They support corrigibility, making alignment failures non-catastrophic. Importantly, the mere presence of a kill switch can shape how the system is used and trusted, even if rarely activated."
    }
  },
  {
    "category": "CO",
    "name": "Sandboxing",
    "definition": "Restricting system operations to test-safe environments.",
    "human": "Play, practice, and rehearsal. Student labs; Role-playing scenarios. ",
    "organizational": "Piloting a new policy or product in a limited context before full deployment; internships.",
    "professional": "Using simulations, controlled trials, or test environments to evaluate methods before live use.",
    "machine": "Running machine learning models or AI agents in isolated environments before real-world integration.",
    "expand": {
    "human": "In interpersonal or group settings, sandboxing allows individuals to explore potential decisions or roles through role-play, mock negotiations, or structured trial periods. These 'safe spaces' enable experimentation without long-term consequences, supporting learning and trust-building while avoiding reputational or relational damage and real world consequences.",
    "organizational": "Organizations use sandboxing to test new policies, workflows, or technologies in a limited domain before wide-scale adoption. This reduces risk, encourages innovation, and allows for stakeholder feedback. Sandboxing helps align innovation with mission and values by uncovering misalignment early, while consequences are still contained.",
    "professional": "Sandboxing in professional domains includes lab experiments, clinical trials, and staged simulations. These controlled settings allow professionals to evaluate tools, interventions, or decisions under conditions where failure is tolerable and informative. This approach protects clients and the public while maintaining the integrity of expert judgment.",
    "machine": "In machine systems, sandboxing isolates models or agents from the real world, allowing developers to observe behavior under controlled conditions. It is essential for safety testing, emergent behavior detection, and value alignment verification before deployment. Sandboxing enables safe iteration and adaptation in the development of increasingly autonomous systems."
    }
  },
  { 
    "category": "CO", 
    "name": "Access Control / Role-Based Permissions", 
    "definition": "Limiting who can do what (and know what) in a system.", 
    "human": "Divisions of labor, roles, circles of intimacy.", 
    "organizational": "IT permissions that separate administrative and operational privileges; role-specific authorities in governance.", 
    "professional": "Clear scope-of-practice boundaries for nurses, technicians, and doctors.", 
    "machine": "System-level access management restricting which components or agents can modify core functions or access sensitive data.", 
    "expand": { 
      "human": "In human groups, limiting decision-making, task authority, and information access helps reduce conflict, duplication, and confusion. Role-based access control reduces decision- and negotiation-load.", 
      "organizational": "Access control is essential for organizational integrity and risk management. Assigning different permissions to roles and functions prevents overreach and wire-crossing, limits cascading failure, and ensures that critical decisions are made by competent agents.", 
      "professional": "Professional roles rely on clearly defined boundaries to ensure safety, accountability, and public trust. Limiting what individuals can do based on certification, licensing, or position ensures that decisions are made by those qualified to do so, and that escalation paths are clear when higher authority or expertise is required.", 
      "machine": "In machine systems, access control mechanisms restrict which modules, processes, or external actors can initiate, alter, or override core operations. These controls are vital to preserve alignment by preventing unauthorized or unintended modifications and supporting explainable governance of complex automated environments." 
    } 
  },
  { 
    "category": "Q", 
    "name": "Licensing / Registration", 
    "definition": "Gatekeeping access to power or sensitive roles.", 
    "human": "Everyday is structured by our sense of who trusted to take on roles like caregiving, leadership, or teaching.", 
    "organizational": "Formal job requirements, onboarding, and access protocols for critical systems or decisions.", 
    "professional": "Credentialing, certification, or licensing required to practice in a regulated domain.", 
    "machine": "Pre-deployment review and certification steps for high-stakes autonomous systems.", 
    "expand": { 
      "human": "Even outside formal structures, we maintain unspoken standards for who is qualified to take on certain social roles. We expect parenting, leadership, or romantic initiative to come from those who have earned trust, shown maturity, or signaled readiness. We bristle at those who are 'too big for their britches' or 'not fit for the part.' These norms protect social boundaries and reduce the risk of misalignment through incompetent role-taking.", 
      "organizational": "Licensing and registration functions in organizations as a way to maintain order, traceability, and safety. By ensuring that only authorized personnel operate systems or make decisions, alignment is preserved through structural clarity and risk containment.", 
      "professional": "Professional gatekeeping ensures that only those with the requisite training, experience, and ethical grounding are permitted to exercise expert authority. This protects the public and sustains professional integrity by filtering out unqualified or misaligned agents before harm occurs.", 
      "machine": "In machine systems, licensing-like procedures involve rigorous testing, formal verification, and regulatory approval before deployment. These gates reduce the risk of premature or unsafe deployment, ensuring that autonomy is granted only to systems proven to meet alignment and safety criteria." 
    } 
  },
  {
    "category": "Q",
    "name": "Certification",
    "definition": "Qualification signalled via assessment against formal standards.",
    "human": "Achievement badges, diplomas, or test scores that serve as public signals of readiness or competence.",
    "organizational": "Internal or external audits that certify a team, product, or process as compliant with best practices or regulations.",
    "professional": "Board exams, specialty credentials, or continuing education certificates issued by professional bodies.",
    "machine": "Formal evaluation and documentation confirming an AI system meets specified technical and safety standards before deployment.",
    "expand": {
      "human": "Certifications serve as symbolic indicators that someone has met a threshold of knowledge, skill, or maturity — reducing the burden on others to assess competence from scratch. These credentials help communities make efficient trust decisions in complex social environments.",
      "organizational": "Organizational certifications — such as ISO, SOC, or safety clearances — create legibility and trust across teams and stakeholders. By aligning practices with known standards, certification reduces internal ambiguity and external risk.",
      "professional": "In professional domains, certification structures uphold quality and public confidence. Credentials verify that practitioners meet discipline-wide standards and are fit to wield specialized authority or make high-stakes judgments.",
      "machine": "Certification processes for AI systems provide assurance that the system has undergone structured testing, interpretability checks, adversarial evaluation, and compliance review. These certification artifacts make opaque systems more governable and trusted at scale — especially when deployed in safety-critical or rights-sensitive contexts."
    }
  },
  {
    "category": "Q",
    "name": "Continuous Monitoring",
    "definition": "Ongoing verification and renewal of competence, peer review.",
    "human": "Friends and peers notice when someone is slipping or stepping out of their depth, and step in with feedback or support.",
    "organizational": "Performance reviews, rotation audits, or mandatory retraining programs that keep people aligned and competent over time.",
    "professional": "Peer review, re-licensure, morbidity and mortality conferences, or ethics panels that maintain professional accountability.",
    "machine": "Runtime supervision, post-deployment audits, or telemetry-driven evaluation that ensures systems remain safe and aligned as they adapt.",
    "expand": {
      "human": "Even after initial qualification, humans need feedback to stay competent and aligned. Informal signals — like raised eyebrows, check-ins, or gossip — alert individuals when their behavior is diverging from group expectations or slipping below standard.",
      "organizational": "Organizations monitor competence through structured cycles — annual reviews, recertification requirements, or incident analysis — ensuring that early qualification is not mistaken for perpetual fitness. These checks prevent drift, detect burnout, and uphold public trust.",
      "professional": "Professions use structured mechanisms to ensure that licensed experts remain accountable, current, and reflective. Continuous learning and peer scrutiny make it harder for harmful patterns or incompetence to persist unchecked.",
      "machine": "Autonomous systems require post-certification oversight. Telemetry, logging, red-teaming, and adaptive testing ensure that behavior stays within acceptable bounds — even as inputs shift or systems learn. Continuous monitoring bridges the gap between static assurance and dynamic safety."
    }
  },

  
  {
    "category": "Q",
    "name": "Security Clearance & Background Vetting",
    "definition": "Screen identity, history, and risk before granting access to sensitive roles or data.",
    "human": "Trusted community members manage shared finances after background checks.",
    "organizational": "Employees must pass security clearance to handle classified or safety-critical systems.",
    "professional": "Character & background checks for bar admission or child-care licensing.",
    "machine": "Models handling PII require supply-chain provenance checks and red-team review before deployment."
  },
  {
    "category": "Q",
    "name": "Character & Fitness / COI Attestation",
    "definition": "Ethical readiness verified via attestations and conflict-of-interest review.",
    "human": "Volunteer leaders sign codes of conduct and disclose conflicts before serving.",
    "organizational": "Executives file annual COI statements before decision-making roles.",
    "professional": "'Character and fitness' review complements exams for licensure.",
    "machine": "Deployment requires signed attestations to usage policies and safety constraints by responsible owners."
  },
  {
    "category": "Q",
    "name": "Apprenticeship / Supervised Practice",
    "definition": "Permission to act under supervision until competence is demonstrated.",
    "human": "Learner drivers operate only with a licensed adult present.",
    "organizational": "New site reliability engineers deploy under a proctor's oversight.",
    "professional": "Residents perform procedures with attending supervision before independent practice.",
    "machine": "AI systems operate in draft-only mode requiring human approval until promotion criteria are met."
  },
  {
    "category": "Q",
    "name": "Provisional License / Probationary Status",
    "definition": "Time- or scope-limited permission that must be renewed or upgraded after milestones.",
    "human": "A probationary teacher receives narrower classroom responsibilities for the first year.",
    "organizational": "New vendor contracts start with capped authority and review gates.",
    "professional": "Provisional medical licenses require revalidation within a fixed window.",
    "machine": "A model is approved only for low-risk use cases for 90 days pending post-deployment evaluation."
  },
  {
  "category": "Q",
  "name": "Credentialed Privileging",
  "definition": "Grant permissions to perform only after demonstrated competence, expand as evaluations are passed; privileges remain revocable and time-limited.",
  "human": "Learner drivers receive daylight-only privileges, then unlock night driving after passing additional checks; makerspace members earn tool-specific badges before using high-risk equipment.",
  "organizational": "Engineers start with read/Stage access and graduate to production 'push' rights after staged readiness reviews; a process owner is privileged to approve changes for a single product line (not enterprise-wide) unless later expanded.",
  "professional": "Hospitals grant procedure-specific privileges (e.g., endoscopy) after logs, proctoring, and exams; pilots operate only within aircraft type, weather minima, and instrument ratings, unlocking broader Operational Design Domain (ODD) via checkrides.",
  "machine": "A model may call only specific high-impact APIs after capability-specific evals; it is authorized solely for English consumer support on predefined intents, with broader domains/tools unlocked after stress tests and post-deployment telemetry."
},
  {
    "category": "Q",
    "name": "References & Track-Record Screening",
    "definition": "Prior performance evidence is required to qualify for a role or task.",
    "human": "Babysitters are hired only with strong references from known families.",
    "organizational": "Vendors qualify via audited past-performance and incident history.",
    "professional": "Grant PIs qualify based on publications and successful project delivery.",
    "machine": "A system graduates from staging to production only after clean reliability telemetry across trials.",
    "expand": {
      "human": "Seems to imply differentiation based on permissibility of secrets. For average agent interaction, some undisclosed material is OK, but for sensitive roles, we need to look for more indicators of problems (but note: different from skill testing).",
      "organizational": "Would this be organizations needing to 'provide receipts'?",
      "professional": "",
      "machine": "NOTE: Overlaps with record keeping but a different specific use."
    }
  },











 
    {
    "category": "D",
    "name": "Rule Enforcement",
    "definition": "Imposing penalties for willful violation of rules or norms.",
    "human": "Social sanctions like shaming, ostracism, or group exclusion.",
    "organizational": "Fines, disbarment, or regulatory action for breaches of law or internal code.",
    "professional": "Loss of credentials, suspension from practice, or public censure.",
    "machine": "Denial of access, resource throttling, or reallocation in multi-agent systems after policy violations.",
    "expand": {
    "human": "When people knowingly break social or ethical rules, communities respond with clear consequences: social shaming, exclusion, confinement, physical punishment, or loss of trust. Anticipation of punishment can deter rule breaking. Participating in or witnessing punishment reminds other agents of where rule boundaries lie.",
    "organizational": "Organizations are accountable not just for outcomes, but for process. When rules are broken — through fraud, abuse, or corruption — regulatory action, legal penalties, or public backlash make clear that alignment includes playing by the rules.",
    "professional": "In professions, trust and privilege come with high ethical expectations. Rule violations like deception, exploitation, or abuse of power are met with formal sanctions. Sanctions not only punish and deter, but also affirm rules that define public trust in expert authority.",
    "machine": "Machine systems operating in shared or high-stakes environments must follow formal policy constraints. Rule enforcement may include disabling behaviors, limiting capabilities, or escalating violations for review. Arresting rule-breaking can restore alignment but punishment-based deterrence, per se, may be problematic in the machine realm since systems lack intentionality and may respond unpredictably to externally imposed penalties."
    }
  },
  {
    "category": "D",
    "name": "Reputation Systems (also in incentives)",
    "definition": "Social or market signals of trustworthiness or performance.",
    "human": "Social standing, peer approval, or public recognition for cooperative or admirable behavior.",
    "organizational": "Customer ratings, external reviews, or stakeholder trust signals that shape market or regulatory treatment.",
    "professional": "Accreditation, citation indexes, public awards, or client testimonials reflecting professional conduct.",
    "machine": "Feedback loops or rating systems that guide user trust in autonomous agents or platforms.",
    "expand": {
      "human": "In everyday interaction, reputation plays a central role in alignment. People anticipate how they will be seen or remembered and act accordingly. Reputation systems reinforce cooperation, discourage defection, and help communities identify trustworthy agents without needing omniscient surveillance.",
      "organizational": "Organizations respond to external reputation cues such as reviews, rankings, and regulatory attention. These signals act as feedback loops that can steer institutions back toward alignment with stakeholder expectations or public values, especially when internal accountability falters.",
      "professional": "Reputation mechanisms in professional life — including certifications, awards, and publication metrics — help uphold ethical behavior and competence. Because much expert work is opaque to laypeople, visible reputational indicators guide public trust and peer regulation alike.",
      "machine": "In digital ecosystems, reputation systems are often the main tool users have to assess alignment and reliability. Star ratings, preference tracking, and reputation scores affect which agents or services are trusted, used, or monitored more closely. These mechanisms shape behavior indirectly by influencing user engagement and system reward structures."
    }
  },
  {
    "category": "D",
    "name": "Liability",
    "definition": "Legal or financial responsibility for harms, regardless of intent.", 
    "human": "Shared norms that someone who causes harm should make it right — even without formal punishment.", 
    "organizational": "Legal exposure or restitution policies that motivate proactive harm prevention.", 
    "professional": "Civil liability or institutional accountability for harm caused by expert action or advice.", 
    "machine": "Attribution systems that assign responsibility to deployers, operators, or developers for autonomous system harms.", 
    "expand": { "human": "In many communities, people are expected to 'make it right' when harm is done — even unintentionally. Liability in this context encourages individuals to act with care and foresight, knowing they may need to repair consequences later. This reinforces alignment through social norms and relational accountability.", 
      "organizational": "Liability regimes compel organizations to internalize costs of harm. Legal and reputational exposure incentivizes more cautious planning, ethical foresight, and safety measures.", 
      "professional": "Experts often hold asymmetric power, and liability ensures that this power is used responsibly. Professional liability insurance and institutional redress systems align expert action with public safety by ensuring that failure has consequences — even when it falls short of criminal intent or error.", 
      "machine": "In the context of autonomous systems, liability helps ensure that developers, deployers, or operators remain aligned with societal values. When system behavior can be traced back to responsible parties, incentives shift toward designing for robustness, explainability, and safety." 
    }
  }, 
  { "category": "D", 
    "name": "Malpractice", 
    "definition": "Sanctioning failures to meet defined standards and processes for role-based performance. Malpractice mechanisms distinguish between errors that fall within normal operational bounds — and those that signal deeper failures of competence or integrity.", 
    "human": "Norms that distinguish between honest mistakes and repeated failure to meet shared expectations.", 
    "organizational": "Internal review panels or compliance audits that flag substandard conduct by units or individuals.", 
    "professional": "Formal systems for investigating and sanctioning failure to perform competently in professional roles.", 
    "machine": "Defined behavioral tolerances that, when violated, trigger alerts or suspension of system operation.", 
    "expand": { 
      "human": "Even informal groups develop standards for role competence. Failure to meet group expectations (e.g., act like an adult or a friend) elicits consequences (like losing privileges or limiting participation or just being called out) that reinforce alignment with group expectations.", 
      "organizational": "Organizations use internal standards and oversight procedures to detect and correct failures to act competently or ethically. Malpractice review processes facilitate alignment by distinguishing mistakes that can happen from mistakes that should never happen.", 
      "professional": "Malpractice systems articulate a clear boundary between acceptable and unacceptable performance and mandate formal processes in response to error. These systems legitimize public trust in expertise by creating common knowledge around the idea that while mistakes will happen, certain kinds of mistake will not.",
      "machine": "Systems may exhibit routine errors within expected tolerances, but out-of-distribution behavior or violations of mission-critical constraints trigger automatic containment. This preserves alignment by bounding failure within known safety margins." 
    } 
  },
  // {
  //   "category": "ID",
  //   "name": "Alignment Incentives",
  //   "definition": "Designing reward structures that promote good behavior.",
  //   "human": "",
  //   "organizational": "",
  //   "professional": "",
  //   "machine": ""
  // },
  // {
  //   "category": "ID",
  //   "name": "Bonus / Penalty Structures",
  //   "definition": "Tying outcomes to individual or group actions.",
  //   "human": "",
  //   "organizational": "",
  //   "professional": "",
  //   "machine": ""
  // },
  // { 
  //   "category": "ID", 
  //   "name": "Reputation Systems", 
  //   "definition": "Social or market signals of trustworthiness or performance.", 
  //   "human": "Social standing, peer approval, or public recognition for cooperative or admirable behavior.", 
  //   "organizational": "Customer ratings, external reviews, or stakeholder trust signals that shape market or regulatory treatment.", 
  //   "professional": "Accreditation, citation indexes, public awards, or client testimonials reflecting professional conduct.", 
  //   "machine": "Feedback loops or rating systems that guide user trust in autonomous agents or platforms.", 
  //   "expand": { 
  //     "human": "In everyday interaction, reputation plays a central role in alignment. People anticipate how they will be seen or remembered and act accordingly. Over time and across space reputation systems reinforce cooperation, discourage defection, and help communities identify trustworthy agents without needing omniscient surveillance.", 
  //     "organizational": "Organizations respond to external reputation cues such as reviews, rankings, and regulatory attention. These signals act as feedback loops that can steer institutions back toward alignment with stakeholder expectations or public values, especially when internal accountability falters. Within organizations, reputation can align departments with one another and individuals within the organization.", 
  //     "professional": "Reputation mechanisms in professional life — including certifications, awards, and publication metrics — help uphold ethical behavior and competence. Because much expert work is opaque to laypeople, visible reputational indicators guide public trust and peer regulation alike.", 
  //     "machine": "In digital ecosystems, reputation systems are often the main tool users have to assess alignment and reliability. Star ratings, preference tracking, and reputation scores affect which agents or services are trusted, used, or monitored more closely. These mechanisms shape behavior indirectly by influencing user engagement and system reward structures." 
  //   } 
  // },
  // {
  //   "category": "ID",
  //   "name": "Profit-sharing / Impact-sharing",
  //   "definition": "Structures that tie outcomes to broader consequences.",
  //   "human": "",
  //   "organizational": "",
  //   "professional": "",
  //   "machine": ""
  // },

  {
    "category": "ID",
    "name": "Direct Compensation",
    "definition": "Linking specific effort, time, or output to individual reward.",
    "human": "Payment for work, piece-rate wages, bonuses for deliverables.",
    "organizational": "Performance-based salaries, commissions, milestone bonuses.",
    "professional": "Fee-for-service models in medicine or law; grant-based funding in academia.",
    "machine": "Rewarding system outputs directly tied to user responses or benchmarks.",
    "expand": {
      "human": "Simple compensation schemes align behavior with task-specific expectations. By tying rewards to actions or outcomes, these systems motivate effort even in the absence of deep identification with the task or team.",
      "organizational": "Compensation-based incentives align internal actors with organizational goals by making it costly to underperform and attractive to exceed targets. They are widely used, but prone to distortion if metrics are poorly chosen.",
      "professional": "Professional compensation can support alignment when tied to meaningful performance, but risks distorting service when goals become narrowly metric-driven. Careful calibration of reward structures is essential.",
      "machine": "In machine learning and reinforcement contexts, compensation appears as a reward signal directly tied to output — often forming the core training loop. Misalignment risks arise when the reward does not capture the designer's intent."
    }
  },
  {
    "category": "ID",
    "name": "Reputation Systems (also in deterrence)",
    "definition": "Social or market signals of trustworthiness or performance.",
    "human": "Social standing, peer approval, or public recognition for cooperative or admirable behavior.",
    "organizational": "Customer ratings, external reviews, or stakeholder trust signals that shape market or regulatory treatment.",
    "professional": "Accreditation, citation indexes, public awards, or client testimonials reflecting professional conduct.",
    "machine": "Feedback loops or rating systems that guide user trust in autonomous agents or platforms.",
    "expand": {
      "human": "In everyday interaction, reputation plays a central role in alignment. People anticipate how they will be seen or remembered and act accordingly. Reputation systems reinforce cooperation, discourage defection, and help communities identify trustworthy agents without needing omniscient surveillance.",
      "organizational": "Organizations respond to external reputation cues such as reviews, rankings, and regulatory attention. These signals act as feedback loops that can steer institutions back toward alignment with stakeholder expectations or public values, especially when internal accountability falters.",
      "professional": "Reputation mechanisms in professional life — including certifications, awards, and publication metrics — help uphold ethical behavior and competence. Because much expert work is opaque to laypeople, visible reputational indicators guide public trust and peer regulation alike.",
      "machine": "In digital ecosystems, reputation systems are often the main tool users have to assess alignment and reliability. Star ratings, preference tracking, and reputation scores affect which agents or services are trusted, used, or monitored more closely. These mechanisms shape behavior indirectly by influencing user engagement and system reward structures."
    }
  },
  {
    "category": "ID",
    "name": "Collective Benefit Sharing",
    "definition": "Tying rewards to shared or system-level success.",
    "human": "Sharing the gains from group achievement (e.g., pooling tips, team-based bonuses).",
    "organizational": "Employee profit-sharing, co-op dividend structures, equity-based compensation.",
    "professional": "Shared credit in collaborative work, pooled performance-based funding.",
    "machine": "Multi-agent systems with shared reward functions; cooperative reinforcement learning.",
    "expand": {
      "human": "When rewards are tied to collective success, individuals are incentivized to cooperate and monitor each other. Sharing rewards encourages alignment even when roles are asymmetric.",
      "organizational": "Organizations use benefit-sharing models to reduce internal competition and align teams around shared outcomes. These mechanisms can promote cohesion and long-term thinking.",
      "professional": "In collaborative or interdisciplinary work, shared rewards build cohesion and reinforce shared standards. Systems like group authorship or pooled funding encourage alignment beyond individual metrics.",
      "machine": "In multi-agent AI systems, shared reward structures promote cooperative strategies. These designs align agent behavior with system-level goals, especially where centralized control is difficult."
    }
  },
  {
  "category": "ID",
  "name": "Mission-Aligned Incentives",
  "definition": "Motivating agents by aligning rewards with intrinsic or shared purpose.",
  "human": "Volunteering, activism, or personal commitment to a cause or shared goal.",
  "organizational": "Mission-driven hiring, intrinsic motivation cultivated through culture or values.",
  "professional": "Service-oriented professions (e.g. medicine, education) with strong vocational ethics.",
  "machine": "Proxy via reward shaping or preference modeling to reflect designer's intent.",
  "expand": {
    "human": "People often act in aligned ways not for money or reputation, but because the goal matters. Mission-based motivation is powerful but requires shared understanding, trust, and signaling.",
    "organizational": "Organizations with strong missions can align employees through shared purpose, reducing the need for extrinsic incentives. However, overreliance can lead to burnout or exploitation if not supported structurally.",
    "professional": "Mission-aligned incentives are foundational in vocations like healthcare, education, or public service. These intrinsic motivations can anchor ethical action even in systems under stress.",
    "machine": "Though machines lack intrinsic goals, designers may approximate mission alignment by encoding designer intent into training signals or via preference learning. Careful modeling of human values becomes essential."
  }
  },
    {
    "category": "ID",
    "name": "Reward Function Shaping",
    "definition": "Structuring feedback signals to reinforce aligned behavior and discourage misalignment.",
    "human": "Feedback, praise, and social reinforcement used to shape habits and ethical reflexes.",
    "organizational": "Gamification, dashboards, or goal framing to steer behavior through salience and feedback.",
    "professional": "Norm-reinforcing evaluation metrics; real-time coaching in training environments.",
    "machine": "Reward shaping in reinforcement learning, tuned to avoid shortcuts and align with human intent.",
    "expand": {
      "human": "Humans respond to structured feedback — verbal praise, tone, gestures — which helps shape ethical and habitual behavior. This form of incentive can guide alignment before formal rules are needed.",
      "organizational": "Organizations increasingly use feedback-rich systems to nudge behavior — through dashboards, rankings, or real-time analytics. These forms of reward shaping can align day-to-day choices with strategic goals.",
      "professional": "Reward shaping in professions often happens in training: when mentors reward appropriate judgment or initiative. These systems build tacit alignment over time without needing formal sanctions.",
      "machine": "Reward shaping in machine learning alters the feedback landscape to guide learning toward designer-aligned behavior. When well-calibrated, it prevents reward hacking and supports robust performance across contexts."
      }
  },






  {
    "category": "SIN",
    "name": "Separation of Powers",
    "definition": "Dividing control to prevent concentrated misalignment.",
    "human": "In co-parenting, egalitarian families, cooperative housing, separating roles - one person managing finances, another overseeing conflict resolution — prevents power consolidation and promotes mutual accountability. As folk wisdom puts it: \"no one should be judge, jury, and executioner.\"",
    "organizational": "Separate branches in government; product team builds features, compliance reviews risks, and leadership makes decisions; faculty is in charge of curriculum, administration in charge of business.",
    "professional": "Physician prescribes, pharmacist dispenses, nurse administers.",
    "machine": "Modular architectures separate planning, constraint enforcement, and escalation to human oversight - preventing any single subsystem from dominating or bypassing alignment checks.y: separate modules for planning, constraint satisfaction, requesting human oversight."
  },
  {
    "category": "SIN",
    "name": "Checks and Balances",
    "definition": "Cross-accountability between roles or functions.",
    "human": "Couples with joint accounts; rules allowing any parent or partner to authorize decisions; the use of devil's advocates or distributed vetoes in groups.",
    "organizational": "Boards overseeing CEOs; internal audit or inspectors general; legal departments that can challenge business units.",
    "professional": "Peer review in science",
    "machine": "In AI systems, adversarial components or ensemble models (e.g., mixture of critics) can evaluate, challenge, or veto each other's outputs. These internal counterbalances help ensure that no single model's judgment goes unexamined."
  },
  {
    "category": "SIN",
    "name": "Rotations & Term Limits",
    "definition": "Preventing power entrenchment and narrow perspectives.",
    "human": "Circulating at a cocktail parties prevents attention monopolization. Rotating leadership roles in groups prevents dominance and dynasties.",
    "organizational": "Employee rotation across departments. Regular reassignment in military and diplomatic organizations. Political office term limits.",
    "professional": "Leadership roles (e.g., department chair, conference organizer) are often rotated as a form of service — preventing concentration of influence and encouraging shared responsibility.rotation when leadership roles are considered service.  ",
    "machine": "Rotating task assignments or refreshing control parameters in multi-agent systems to prevent strategic dominance by a single agent."
  },
  {
    "category": "SIN",
    "name": "Constitutional Constraints",
    "definition": "Foundational rules that resist erosion.",
    "human": "Non-negotiables in relationships and communities.",
    "organizational": "Charters, founding documents, mission statements, by-laws.",
    "professional": "Hippocratic oath, engineering codes of ethics.",
    "machine": "Constitutional AI defines high-level behavioral constraints (e.g., “never deceive,” “always defer to human override”) that cannot be overruled by optimization."
  },
  {
    "category": "SIN",
    "name": "Third-Party Monitoring",
    "definition": "Use of external agents to verify compliance.",
    "human": "In situations of low trust or easy defection - such as co-parenting, community conflicts, or collaborations - the introduction of a neutral third party (e.g., a mediator, facilitator, or witness) changes the structure of interaction itself. Third parties don't just add a perspective; they create common knowledge conditions that enable accountability, moderation, and verification unavailable in two-person dynamics. By making commitments observable, disputes navigable, and misalignment less deniable, third parties can stabilize fragile alignments.",
    "organizational": "HR departments monitor internal dynamics; external governance relies on independent watchdogs. Public disclosures and third-party assessments (e.g., sustainability audits) ensure organizations remain answerable to stakeholders beyond their internal chain of command.",
    "professional": "Peer review committees, accreditation boards, or external case reviewers ensure that professionals remain accountable to shared standards - even beyond their immediate institution or employer.",
    "machine": "External monitors - like human overseers, AI watchdogs, or automated anomaly detectors - can observe black-box behavior, verify compliance with constraints, and intervene when systems operate outside bounds. This helps manage opaque or evolving agents."
  },
  {
    "category": "SIN",
    "name": "Democracy",
    "definition": "Governance authority is distributed to a collective through participatory decision-making.",
    "human": "Groups decide by vote, often majority or consensus. Family decisions, jury deliberations, or community assemblies reflect the principle that legitimacy comes from inclusive participation.",
    "organizational": "In worker cooperatives or democratic firms, members vote on leadership, strategy, or resource allocation. Political parties that respond to the stated preferences of their base act in alignment with internal democratic norms.",
    "professional": "When difficult ethical or procedural decisions arise, professional teams may poll their members or rely on deliberative group input — not just seniority or rank — to ensure legitimacy and shared responsibility.",
    "machine": "In multi-agent systems, collective decision-making mechanisms — such as voting among sensors, agents, or models — approximate democratic aggregation of distributed information or preference. This promotes robustness and fairness when no single perspective is sufficient."
  },
{ 
  "category": "S", 
  "name": "Redundancy", 
  "definition": "Building backup systems or duplicated controls.", 
  "human": "Having a backup plan or fallback roles in case someone can't follow through.", 
  "organizational": "Cross-trained staff or parallel systems to maintain function under failure.", 
  "professional": "Second opinions, backups for diagnostic systems, or parallel review processes.", 
  "machine": "Redundant sensors or subsystems in autonomous vehicles or critical infrastructure.", 
  "expand": { 
    "human": "In human collaboration, redundancy ensures continuity even when individual agents fail or disengage. Backup plans or role duplication (e.g., other friends or alternate contacts) preserve alignment by absorbing shocks and preventing cascades of failure.", 
    "organizational": "Organizations implement redundancy to prevent single points of failure. By building fallback systems and overlapping capabilities, institutions can stay aligned with their mission even in crisis.", 
    "professional": "In expert practice, redundancy protects against error and oversight. Practices like peer review, backup diagnostics, or cross-checking align professional work with safety and accountability — especially in high-stakes contexts.", 
    "machine": "Redundancy in machine systems enables robustness under unexpected conditions. By duplicating sensors, pathways, or decision processes, systems can detect discrepancies and recover gracefully — preserving aligned behavior even in degraded states."
  } 
},
{ 
  "category": "S",
  "name": "Fail-Safes",
  "definition": "Systems revert to safe behavior under uncertainty.",
  "human": "Agreements to pause or defer action when there's confusion or risk.", 
  "organizational": "Automatic safety shutoffs, pause conditions, or conservative defaults in operations.", 
  "professional": "Ethical principles to do no harm when unsure, or protocols for safe stalling.", 
  "machine": "Autonomous systems default to low-risk states when confidence is low.",
  "expand": { 
    "human": "Fail-safe behavior among people includes calling a time-out, pausing a decision, relying on tradition or convention, or deferring to safety in the face of disagreement or uncertainty. This preserves alignment by prioritizing safety over speed or ego.",
    "organizational": "Fail-safes help organizations halt dangerous processes automatically. Systems like interlocks, trip thresholds, or default containment protect the public and employees even when direct supervision is unavailable.",
    "professional": "Fail-safe ethics — such as 'first, do no harm' — guide professionals to choose minimal-risk options when clarity is lacking. This principle preserves trust and responsibility in expert systems.",
    "machine": "Fail-safe architectures in machines are essential to ensure that uncertainty or error doesn't cascade into harm. By reverting to safe modes or alerting humans, fail-safes maintain bounded impact and preserve long-term alignment."
  } 
},
{ 
  "category": "S",
  "name": "Interpretability Tools",
  "definition": "Systems are legible enough to be used safely.",
  "human": "Explaining one's reasoning clearly to others when making shared decisions.",
  "organizational": "Transparent procedures and communication channels that allow oversight.",
  "professional": "Documented rationales, standard methods, audit trails, or explainable expert judgments.",
  "machine": "Interfaces or outputs that help users understand why an AI made a decision.",
  "expand": { 
    "human": "Interpretability among humans builds shared understanding and enables trust. When people explain their decisions in collectively familiar terms, it creates room for challenge, correction, legitimation, and cooperation.", 
    "organizational": "Organizations that make their processes and priorities legible allow internal and external actors to judge alignment. Interpretability supports accountability and improvement — especially when systems are large or opaque.", 
    "professional": "In professional work, interpretability mechanisms like decision trees, reports, or written justifications create transparency. They reinforce ethical reasoning and enable review by peers, clients, or the public.", 
    "machine": "Interpretability tools are crucial for machine alignment because they allow humans to understand and predict system behavior. Even partial explanations help build trust and detect misalignment early, making oversight feasible at scale."
  } 
},
{ 
  "category": "S",
  "name": "Robustness Testing",
  "definition": "Evaluating how systems behave under stress or novelty.",
  "human": "Role-playing hard scenarios, stress-testing decisions, or testing for failure under pressure.",
  "organizational": "Disaster drills, red-teaming, or simulations of rare but high-impact events.",
  "professional": "Scenario planning, worst-case testing, or mock trials to explore edge cases.",
  "machine": "Deliberate probing of models or systems with adversarial, noisy, or unfamiliar inputs.",
  "expand": {
    "human": "Testing decisions or plans under pressure — such as through role-play or simulation — helps humans identify misalignment early. It builds confidence in collaborative judgment and prepares teams for high-stakes situations.",
    "organizational": "Robustness testing in organizations uncovers vulnerabilities before failure cascades. Simulating cyberattacks, blackouts, or supply chain disruptions helps institutions align not just with ideal conditions, but with reality.",
    "professional": "Expert training almost always involves structured testing that explores its limits. Scenarios, ordeals, and mock cases support learning from mistakes and identification of needed remediation.",
    "machine": "Robustness testing for machines is critical for deployment in open environments. Testing under uncertainty, noise, or adversarial examples reveals flaws in alignment, enabling better generalization and safer behavior."
  } 
}


];

const spare = [

  {
    "category": "Design-Time Safety Principles",
    "name": "Simulated Deployment (Shadow Mode)",
    "definition": "Testing in real-world environments without consequences.",
    "human": "",
    "organizational": "",
    "professional": "",
    "machine": ""
  }


]

// Make them visible to the page code:
window.categories = categories;
window.cards = cards;
window.spare = spare;