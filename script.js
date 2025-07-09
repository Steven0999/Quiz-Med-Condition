// --- Quiz Questions Data ---
// This is the JSON data you provided. It's stored as a JavaScript array of objects.
const quizQuestions = [
  {
    "question": "Which type of headache is NOT correlated with any other underlying medical condition or injury?",
    "options": {
      "A": "Secondary Headache",
      "B": "Primary Headache",
      "C": "Cluster Headache",
      "D": "Migraine"
    },
    "answer": "B",
    "rationale": "Primary headaches are defined as headaches that are not correlated with any other underlying medical condition or injury."
  },
  {
    "question": "What percentage of total headache cases do primary headaches make up?",
    "options": {
      "A": "10%",
      "B": "50%",
      "C": "90%",
      "D": "75%"
    },
    "answer": "C",
    "rationale": "Primary headaches make up about 90% of total headache cases."
  },
  {
    "question": "Which of the following is an example of a primary headache?",
    "options": {
      "A": "Headache due to a tumour",
      "B": "Migraine",
      "C": "Headache due to trauma",
      "D": "Headache due to seizure"
    },
    "answer": "B",
    "rationale": "Examples of primary headaches include Migraine, Cluster headache, and Tension headache."
  },
  {
    "question": "A headache that is a sign of an underlying medical condition or injury is known as a:",
    "options": {
      "A": "Primary Headache",
      "B": "Tension Headache",
      "C": "Secondary Headache",
      "D": "Cluster Headache"
    },
    "answer": "C",
    "rationale": "Secondary headache is described as a sign of an underlying medical condition or injury."
  },
  {
    "question": "Which of these is a possible cause of a secondary headache?",
    "options": {
      "A": "Genetics",
      "B": "Tumour",
      "C": "Red Wine",
      "D": "Stress"
    },
    "answer": "B",
    "rationale": "Possible causes of Secondary headaches include Tumour, Trauma, and Seizure."
  },
  {
    "question": "What is the pathophysiology of a migraine?",
    "options": {
      "A": "Tightening and stiffness to head, neck and shoulder muscles.",
      "B": "Hypothalamus activation leading to tearing and nasal secretions.",
      "C": "An area of the brain becomes excitable, leading to chemical changes, inflammatory response, and vasodilation.",
      "D": "Blood flow leakage or blockage is temporary."
    },
    "answer": "C",
    "rationale": "Migraines involve an area of the brain becoming excitable, causing chemical changes which lead to an inflammatory response and vasodilation, stimulating pain receptors."
  },
  {
    "question": "Low levels of which neurotransmitter can cause vasodilation leading to migraines?",
    "options": {
      "A": "Dopamine",
      "B": "Serotonin",
      "C": "Acetylcholine",
      "D": "Norepinephrine"
    },
    "answer": "B",
    "rationale": "Low levels of serotonin can also cause this vasodilation in migraines."
  },
  {
    "question": "Which part of the brain becomes unusually activated by triggers in Cluster Headaches?",
    "options": {
      "A": "Cerebellum",
      "B": "Brainstem",
      "C": "Hypothalamus",
      "D": "Cerebral Cortex"
    },
    "answer": "C",
    "rationale": "In Cluster Headaches, the Hypothalamus becomes unusually activated by triggers."
  },
  {
    "question": "Which of the following is a common trigger for Cluster Headaches?",
    "options": {
      "A": "Red Wine",
      "B": "Chocolate",
      "C": "Tobacco Smoke",
      "D": "Cheese"
    },
    "answer": "C",
    "rationale": "TRIGGERS for Cluster Headaches include Tobacco Smoke, Wine, and Increased Stress."
  },
  {
    "question": "Tension Type Headaches are caused by tightening and stiffness in which muscles?",
    "options": {
      "A": "Leg muscles",
      "B": "Arm muscles",
      "C": "Head, neck and shoulder muscles",
      "D": "Abdominal muscles"
    },
    "answer": "C",
    "rationale": "Tension Type Headaches cause tightening and stiffness to head, neck and shoulder muscles."
  },
  {
    "question": "Which of the following is a trigger for Tension Type Headaches?",
    "options": {
      "A": "Tobacco Smoke",
      "B": "Red Wine",
      "C": "Sleep deprivation",
      "D": "Genetics"
    },
    "answer": "C",
    "rationale": "TRIGGERS for Tension Type Headaches include Tight Muscles, Stress, Sleep deprivation & Dehydration."
  },
  {
    "question": "The site of pain for a Tension-type headache is typically:",
    "options": {
      "A": "Always unilateral (eye)",
      "B": "Unilateral (can be bilateral)",
      "C": "Bilateral",
      "D": "Occipital only"
    },
    "answer": "C",
    "rationale": "The site for a Tension-type headache is Bilateral."
  },
  {
    "question": "What is the characteristic of pain for a Migraine?",
    "options": {
      "A": "Pressing/tightening/bandlike",
      "B": "Excruciating, stabbing, burning",
      "C": "Pulsating/throbbing",
      "D": "Constant dull ache"
    },
    "answer": "C",
    "rationale": "The character of pain for a Migraine is Pulsating/throbbing."
  },
  {
    "question": "Which type of primary headache is described as 'Excruciating, stabbing, burning' in character?",
    "options": {
      "A": "Tension-type headache",
      "B": "Migraine",
      "C": "Cluster headache",
      "D": "Chronic daily headache"
    },
    "answer": "C",
    "rationale": "Cluster headache pain is characterized as Excruciating, stabbing, burning."
  },
  {
    "question": "What is the typical severity of a Tension-type headache?",
    "options": {
      "A": "Very severe",
      "B": "Moderate or severe",
      "C": "Disabling",
      "D": "Mild or moderate"
    },
    "answer": "D",
    "rationale": "The severity of a Tension-type headache is typically Mild or moderate."
  },
  {
    "question": "Auras are associated features of which type of primary headache?",
    "options": {
      "A": "Tension-type headache",
      "B": "Cluster headache",
      "C": "Migraine",
      "D": "Rebound headache"
    },
    "answer": "C",
    "rationale": "Auras (senses, paralysis, double vision, vertigo, hearing impairment) are associated features of Migraine."
  },
  {
    "question": "Which of the following is NOT typically associated with a Tension-type headache?",
    "options": {
      "A": "No nausea/vomiting",
      "B": "No more than one of photophobia or phonophobia",
      "C": "Aggravation by physical activity",
      "D": "Not disabling"
    },
    "answer": "C",
    "rationale": "Tension-type headaches are characterized by no aggravation by physical activity."
  },
  {
    "question": "Attacks of Cluster headache typically last:",
    "options": {
      "A": "30 minutes to 7 days",
      "B": "Hours to days",
      "C": "5 minutes to 3 hours",
      "D": "More than 7 days"
    },
    "answer": "C",
    "rationale": "Attacks of Cluster headache last 5 minutes to 3 hours (1-8 episodes per day)."
  },
  {
    "question": "Which of the following is a vascular cause of secondary headache?",
    "options": {
      "A": "Meningitis",
      "B": "Tumour",
      "C": "Stroke",
      "D": "Sinusitis"
    },
    "answer": "C",
    "rationale": "Vascular causes of secondary headache include Subarachnoid haemorrhage, AVM, Stroke, Cavernous sinus thrombosis, Carotid or vertebral artery dissection, and Temporal arteritis."
  },
  {
    "question": "An infection-related cause of secondary headache is:",
    "options": {
      "A": "Trauma",
      "B": "Meningitis",
      "C": "Glaucoma",
      "D": "Hypoglycaemia"
    },
    "answer": "B",
    "rationale": "Infection causes of secondary headache include Meningitis, Encephalitis, and Brain abscess."
  },
  {
    "question": "The SNOOP mnemonic for secondary headache red flags includes 'S' for Systemic, referring to:",
    "options": {
      "A": "Sudden onset",
      "B": "History of malignancy, immunosuppression, or HIV",
      "C": "Speech difficulties",
      "D": "Severity of pain"
    },
    "answer": "B",
    "rationale": "The 'S' in SNOOP stands for Systemic, which includes history of malignancy, immunosuppression, or HIV or complaints of fever, chills, night sweats, myalgias, weight loss, or jaw claudication."
  },
  {
    "question": "In the SNOOP mnemonic, what does 'O' for Onset refer to regarding a red flag?",
    "options": {
      "A": "Gradual onset over several days",
      "B": "Headache reaches peak intensity in less than 1 minute (thunderclap)",
      "C": "Onset with physical activity",
      "D": "Onset only at night"
    },
    "answer": "B",
    "rationale": "The 'O' for Onset in SNOOP indicates a red flag if the headache reaches peak intensity in less than 1 minute (thunderclap)."
  },
  {
    "question": "Which of the following is a non-reducible risk factor for carotid stenosis (carotid artery disease)?",
    "options": {
      "A": "Physical inactivity",
      "B": "Diet",
      "C": "Genetics",
      "D": "Smoking"
    },
    "answer": "C",
    "rationale": "While 'Non-Reducible Risk Factors' is listed, specific examples are not provided in the text. However, genetics is a common non-reducible risk factor for many conditions like this. The text mentions 'Physical inactivity' as a Reducible Risk Factor, implying other factors would be non-reducible. The image provides an overview of carotid artery disease, stating 'Genetics' as a factor."
  },
  {
    "question": "A Transient Ischemic Attack (TIA) is characterized by symptoms that resolve within:",
    "options": {
      "A": "More than 24 hours",
      "B": "Less than 24 hours",
      "C": "One week",
      "D": "One month"
    },
    "answer": "B",
    "rationale": "A TIA (transient Ischemic Attack) is defined by symptoms resolving in less than 24 hours."
  },
  {
    "question": "Which statement is true regarding the signs and symptoms of a TIA compared to a CVA (Cerebrovascular Accident)?",
    "options": {
      "A": "TIA symptoms are more severe.",
      "B": "TIA symptoms do not resolve.",
      "C": "TIA symptoms are similar to CVA but resolve completely.",
      "D": "TIA only affects vision."
    },
    "answer": "C",
    "rationale": "TIA has Similar signs and symptoms as CVA, but they resolve completely."
  },
  {
    "question": "A stroke caused by a blood vessel supplying blood to the brain being obstructed is known as:",
    "options": {
      "A": "Haemorrhagic stroke",
      "B": "Ischemic stroke",
      "C": "Aneurysm",
      "D": "TIA"
    },
    "answer": "B",
    "rationale": "Ischemic stroke occurs when a blood vessel supplying blood to the brain is obstructed."
  },
  {
    "question": "Which of the following is a common symptom of a stroke?",
    "options": {
      "A": "Gradual onset of weakness",
      "B": "Sudden numbness or weakness on one side of the body",
      "C": "Mild headache that resolves quickly",
      "D": "Increased appetite"
    },
    "answer": "B",
    "rationale": "Common Symptoms of stroke include sudden numbness or weakness in the face, arm, or leg, especially on one side of the body."
  },
  {
    "question": "The 'F' in the FAST or BEFAST assessment for stroke stands for:",
    "options": {
      "A": "Fatigue",
      "B": "Face (uneven)",
      "C": "Fever",
      "D": "Fluid retention"
    },
    "answer": "B",
    "rationale": "F – Face (uneven) is part of the FAST or BEFAST assessment."
  },
  {
    "question": "What does the 'T' in the FAST or BEFAST assessment represent?",
    "options": {
      "A": "Temperature",
      "B": "Talkativeness",
      "C": "Time (onset of symptoms)",
      "D": "Tingling sensation"
    },
    "answer": "C",
    "rationale": "T – Time (onset of symptoms) is part of the FAST or BEFAST assessment."
  },
  {
    "question": "If a TIA (Transient Ischemic Attack) has fully resolved within hours and the patient is referred to a GP, what medication might be considered?",
    "options": {
      "A": "Warfarin",
      "B": "Aspirin",
      "C": "Clopidogrel",
      "D": "Ibuprofen"
    },
    "answer": "B",
    "rationale": "IF FULLY RESOLVED, IN HOURS AND REFERRED TO GP – ASPIRIN AND REF TO GP is the management for TIA."
  },
  {
    "question": "What is emphasized as critical in the management of a stroke?",
    "options": {
      "A": "Hydration",
      "B": "Pain management",
      "C": "Time is tissue",
      "D": "Family history"
    },
    "answer": "C",
    "rationale": "In stroke management, 'TIME IS TISSUE' is a critical emphasis."
  },
  {
    "question": "Subarachnoid haemorrhage (SAH) is defined as bleeding into which space?",
    "options": {
      "A": "Epidural space",
      "B": "Subdural space",
      "C": "Subarachnoid space",
      "D": "Intracerebral space"
    },
    "answer": "C",
    "rationale": "Subarachnoid haemorrhage (SAH) is bleeding into the subarachnoid space."
  },
  {
    "question": "Which of the following is a common cause of Subarachnoid Haemorrhage?",
    "options": {
      "A": "Hypertension",
      "B": "Ruptured Aneurysm",
      "C": "Diabetes",
      "D": "Epilepsy"
    },
    "answer": "B",
    "rationale": "Common causes of SAH include Head Trauma OR Ruptured Aneurysm."
  },
  {
    "question": "Cushing's Triad, a sign of increased intracranial pressure, includes which of the following?",
    "options": {
      "A": "High HR, Low BP, Slow Breathing",
      "B": "Low HR, High BP, Slow Breathing",
      "C": "High HR, High BP, Fast Breathing",
      "D": "Low HR, Low BP, Fast Breathing"
    },
    "answer": "B",
    "rationale": "CUSHINGS TRIAD consists of LOW HR, HIGH BP, and SLOW BREATHING."
  },
  {
    "question": "What is the primary definition of Epilepsy according to the provided material?",
    "options": {
      "A": "A sudden, uncontrolled electrical disturbance in the brain.",
      "B": "A neurological disorder that causes seizures or unusual sensations and behaviours.",
      "C": "A disorder where mechanisms to terminate a seizure fail.",
      "D": "A condition characterized by uncontrollable shaking."
    },
    "answer": "B",
    "rationale": "EPILEPSY is defined as 'A neurological disorder that causes seizures or unusual sensations and behaviours'."
  },
  {
    "question": "Which of the following describes Status Epilepticus?",
    "options": {
      "A": "A single, brief seizure.",
      "B": "Seizures that are easily controlled with daily medication.",
      "C": "A disorder where the mechanisms required to terminate the seizure fail, persisting for at least 20 minutes without consciousness being regained.",
      "D": "A type of convulsion without loss of consciousness."
    },
    "answer": "C",
    "rationale": "Status Epilepticus is 'A disorder where the mechanisms required to terminate the seizure fails. Persisting for at least 20mins without consciousness being regained'."
  },
  {
    "question": "Not all seizures are characterized by convulsions. What is a key distinction mentioned?",
    "options": {
      "A": "All seizures involve uncontrollable shaking.",
      "B": "Convulsions involve uncontrollable shaking, but seizures can simply involve confusion without physical reaction.",
      "C": "Seizures always lead to convulsions.",
      "D": "Convulsions are a type of seizure where consciousness is never lost."
    },
    "answer": "B",
    "rationale": "Not all seizures are characterized by convulsions. Convulsions involve uncontrollable shaking, but if you have a seizure you can simply feel confused without a physical reaction."
  },
  {
    "question": "Which of these is a risk factor for epilepsy?",
    "options": {
      "A": "Daily exercise",
      "B": "Brain tumours",
      "C": "Eating habits with regular meals",
      "D": "Adequate sleep"
    },
    "answer": "B",
    "rationale": "Risk Factors for epilepsy include Brain tumours."
  },
  {
    "question": "Which of the following is considered a common symptom or warning sign of epilepsy?",
    "options": {
      "A": "Sudden increase in energy",
      "B": "Unusual smells, tastes, or feelings",
      "C": "Enhanced concentration",
      "D": "Increased thirst"
    },
    "answer": "B",
    "rationale": "Common Symptoms/Warning Signs of epilepsy include Unusual smells, tastes, or feelings."
  },
  {
    "question": "Which of the following is listed as a common seizure trigger?",
    "options": {
      "A": "Regular medication use",
      "B": "Heavy alcohol use or seizures after alcohol withdrawal",
      "C": "Healthy diet",
      "D": "Consistent sleep schedule"
    },
    "answer": "B",
    "rationale": "Seizure Triggers include Heavy alcohol use or seizures after alcohol withdrawal."
  },
  {
    "question": "Which medication is an example of an anti-seizure medication used in emergency situations?",
    "options": {
      "A": "Levetiracetam (KEPPRA)",
      "B": "Midazolam (Buccal)",
      "C": "Lamotrigine",
      "D": "Sodium Valporate (epilem)"
    },
    "answer": "B",
    "rationale": "Common anti-seizure medications used in emergency situations include Diazepam (PR) and Midazolam (Buccal)."
  },
  {
    "question": "A red flag for seizures is if they last longer than how many minutes?",
    "options": {
      "A": "1 minute",
      "B": "2 minutes",
      "C": "5 minutes",
      "D": "10 minutes"
    },
    "answer": "C",
    "rationale": "Red Flags for seizures include Seizures lasting longer than 5 minutes."
  },
  {
    "question": "Meningococcal disease refers to any illness caused by which bacteria?",
    "options": {
      "A": "Streptococcus pneumoniae",
      "B": "Neisseria meningitidis",
      "C": "Haemophilus influenzae",
      "D": "Escherichia coli"
    },
    "answer": "B",
    "rationale": "Meningococcal disease refers to any illness caused by bacteria called Neisseria meningitidis."
  },
  {
    "question": "Meningococcal disease is a term used to describe which two major illnesses?",
    "options": {
      "A": "Bronchitis and Pneumonia",
      "B": "Meningitis and Septicaemia",
      "C": "Asthma and COPD",
      "D": "Stroke and TIA"
    },
    "answer": "B",
    "rationale": "Meningococcal disease is a term used to describe two major illnesses – meningitis and septicaemia (blood poisoning)."
  },
  {
    "question": "Through what mechanism are the bacteria that cause meningitis primarily transmitted from person-to-person?",
    "options": {
      "A": "Contaminated food",
      "B": "Waterborne transmission",
      "C": "Droplets of respiratory or throat secretions from carriers",
      "D": "Direct skin contact"
    },
    "answer": "C",
    "rationale": "The bacteria that cause meningitis are transmitted from person-to-person through droplets of respiratory or throat secretions from carriers."
  },
  {
    "question": "Which of the following is NOT a classic feature of meningococcal disease, though its absence does not exclude the diagnosis?",
    "options": {
      "A": "Neck stiffness",
      "B": "Photophobia",
      "C": "Rash",
      "D": "Diarrhea"
    },
    "answer": "D",
    "rationale": "Classic features (neck stiffness, photophobia and rash) should be sought; however, an absence of these is not evidence that meningococcal disease has been excluded."
  },
  {
    "question": "Which of the following is a red flag symptom for meningococcal disease?",
    "options": {
      "A": "Warm, dry skin",
      "B": "Increased urine output",
      "C": "Cold mottled skin",
      "D": "Decreased heart rate"
    },
    "answer": "C",
    "rationale": "Red Flags for meningococcal disease include Cold mottled skin."
  },
  {
    "question": "The mnemonic 'FISH SHAPED' is used to outline the causes of:",
    "options": {
      "A": "Stroke",
      "B": "Headaches",
      "C": "Unconsciousness",
      "D": "Seizures"
    },
    "answer": "C",
    "rationale": "The mnemonic 'FISH SHAPED' lists causes of Unconsciousness."
  },
  {
    "question": "What does the 'F' in 'FISH SHAPED' stand for regarding causes of unconsciousness?",
    "options": {
      "A": "Fever",
      "B": "Fainting",
      "C": "Flu",
      "D": "Fracture"
    },
    "answer": "B",
    "rationale": "F - FAINTING is the first cause listed in the FISH SHAPED mnemonic for unconsciousness."
  },
  {
    "question": "What does the 'S' in 'FISH SHAPED' stand for regarding causes of unconsciousness?",
    "options": {
      "A": "Sore throat",
      "B": "Stroke",
      "C": "Sweating",
      "D": "Stress"
    },
    "answer": "B",
    "rationale": "S - STROKE is one of the causes listed in the FISH SHAPED mnemonic for unconsciousness."
  },
  {
    "question": "What does 'E' in 'FISH SHAPED' stand for regarding causes of unconsciousness?",
    "options": {
      "A": "Exhaustion",
      "B": "Epilepsy",
      "C": "Eyesight problems",
      "D": "Emotional distress"
    },
    "answer": "B",
    "rationale": "E - EPILEPSY is one of the causes listed in the FISH SHAPED mnemonic for unconsciousness."
  },
  {
    "question": "Cauda Equina Syndrome (CES) is a rare and severe type of spinal stenosis where what occurs?",
    "options": {
      "A": "Inflammation of the spinal cord.",
      "B": "Compression of all the nerves in the lower back.",
      "C": "Damage to the upper cervical nerves.",
      "D": "Degeneration of intervertebral discs."
    },
    "answer": "B",
    "rationale": "CAUDA EQUINA SYNDROME (CES) is a rare and severe type of spinal stenosis where all of the nerves in the lower back suddenly become severely compressed."
  },
  {
    "question": "Which of the following can cause Cauda Equina Syndrome?",
    "options": {
      "A": "Herniated disk",
      "B": "Muscle strain",
      "C": "Ligament sprain",
      "D": "Sciatica"
    },
    "answer": "A",
    "rationale": "CES may be caused by a herniated disk, tumour, infection, fracture, or narrowing of the spinal canal."
  },
  {
    "question": "A key red flag for Cauda Equina Syndrome is 'saddle anaesthesia', which refers to altered sensations in which areas?",
    "options": {
      "A": "Arms and hands",
      "B": "Legs, buttocks, inner thighs, backs of your legs, or feet",
      "C": "Chest and abdomen",
      "D": "Face and neck"
    },
    "answer": "B",
    "rationale": "Red Flags for CES include Pain, numbness, or weakness in one or both legs, and Loss of or altered sensations in legs, buttocks, inner thighs, backs of your legs, or feet (saddle anaesthesia)."
  },
  {
    "question": "Which of the following is considered a surgical emergency?",
    "options": {
      "A": "Migraine",
      "B": "Tension headache",
      "C": "Cauda Equina Syndrome",
      "D": "Transient Ischemic Attack"
    },
    "answer": "C",
    "rationale": "Cauda Equina Syndrome is usually a surgical emergency."
  },
  {
    "question": "In the Primary Survey for patient assessment, what does 'S' stand for?",
    "options": {
      "A": "Site of pain",
      "B": "Signs and symptoms",
      "C": "Severity of illness",
      "D": "Speech"
    },
    "answer": "B",
    "rationale": "In the Primary Survey, S – Signs and symptoms."
  },
  {
    "question": "In the SAMPLE history taking mnemonic, what does 'M' refer to?",
    "options": {
      "A": "Movement",
      "B": "Medication",
      "C": "Meals",
      "D": "Mental status"
    },
    "answer": "B",
    "rationale": "In the SAMPLE mnemonic, M – medication."
  },
  {
    "question": "The SOCRATES mnemonic is used for detailed history taking, especially concerning:",
    "options": {
      "A": "General medical history",
      "B": "Social history",
      "C": "Pain assessment",
      "D": "Family history"
    },
    "answer": "C",
    "rationale": "SOCRATES is a mnemonic for pain assessment: S – Site, O – Onset, C – Character, R – Radiation, A – Associated symptoms, T – Timing, E – Exacerbating or relieving factors, S – Severity."
  },
  {
    "question": "What is the meaning of 'R' in the SOCRATES mnemonic?",
    "options": {
      "A": "Rate",
      "B": "Rash",
      "C": "Radiation",
      "D": "Recovery"
    },
    "answer": "C",
    "rationale": "R – Radiation is part of the SOCRATES mnemonic."
  },
  {
    "question": "The objectives of the 'Nervous conditions' module include outlining the pathophysiology, risk factors, signs and symptoms of which condition?",
    "options": {
      "A": "Asthma",
      "B": "COPD",
      "C": "Stroke",
      "D": "Diabetes"
    },
    "answer": "C",
    "rationale": "Objectives include outlining the pathophysiology, risks factors and the signs and symptoms of stroke."
  },
  {
    "question": "What is the primary concern for worry in a primary headache?",
    "options": {
      "A": "An underlying medical condition",
      "B": "The headache itself",
      "C": "The possibility of rupture",
      "D": "Associated neurological deficits"
    },
    "answer": "B",
    "rationale": "Your worry is the headache itself, nothing else."
  },
  {
    "question": "Which type of headache is considered 'life-threatening' in some cases due to underlying conditions?",
    "options": {
      "A": "Primary headaches",
      "B": "Migraine headaches",
      "C": "Secondary headaches",
      "D": "Tension headaches"
    },
    "answer": "C",
    "rationale": "In some cases, underlying conditions causing secondary headaches are life-threatening."
  },
  {
    "question": "What is one of the causes of vasodilation in migraines, besides an excitable brain area?",
    "options": {
      "A": "High levels of serotonin",
      "B": "Low levels of dopamine",
      "C": "Low levels of serotonin",
      "D": "Increased intracranial pressure"
    },
    "answer": "C",
    "rationale": "Low levels of serotonin can also cause this vasodilation."
  },
  {
    "question": "What is a characteristic of Cluster headaches related to the Parasympathetic Nervous System (NS)?",
    "options": {
      "A": "Activation leads to decreased tearing and nasal secretions.",
      "B": "Activation causes vasodilation, stimulating pain receptors.",
      "C": "Deactivation leads to vasoconstriction.",
      "D": "It has no role in Cluster headaches."
    },
    "answer": "B",
    "rationale": "Parasympathetic NS will also cause vasodilation – stimulating pain receptors."
  },
  {
    "question": "Which of the following is a trigger for migraines?",
    "options": {
      "A": "Tobacco Smoke",
      "B": "Tight Muscles",
      "C": "Chocolate",
      "D": "Sleep deprivation"
    },
    "answer": "C",
    "rationale": "TRIGGERS for migraines include Red Wine, Chocolate, Cheese, Genetics and Increased Stress Levels."
  },
  {
    "question": "What is the typical site of pain for a Migraine?",
    "options": {
      "A": "Bilateral",
      "B": "Always unilateral (eye)",
      "C": "Unilateral (can be bilateral)",
      "D": "Back of the head"
    },
    "answer": "C",
    "rationale": "The site for a Migraine is Unilateral (can be bilateral)."
  },
  {
    "question": "Which type of headache is always unilateral and typically around the eye?",
    "options": {
      "A": "Tension-type headache",
      "B": "Migraine",
      "C": "Cluster headache",
      "D": "Secondary headache"
    },
    "answer": "C",
    "rationale": "Cluster headache is Always unilateral (eye)."
  },
  {
    "question": "What is the typical severity of a Migraine?",
    "options": {
      "A": "Mild or moderate",
      "B": "Not disabling",
      "C": "Moderate or severe, disabling",
      "D": "Very severe"
    },
    "answer": "C",
    "rationale": "The severity of a Migraine is Moderate or severe and disabling (i.e. interferes with the ability to perform routine activity)."
  },
  {
    "question": "Associated features of a Migraine include one or more of which of the following?",
    "options": {
      "A": "Conjunctival infection",
      "B": "Lacrimation (tearing)",
      "C": "Nausea, vomiting, photophobia, or phonophobia",
      "D": "No nausea/vomiting"
    },
    "answer": "C",
    "rationale": "Associated features of Migraine include one or more of: nausea, vomiting, photophobia, or phonophobia."
  },
  {
    "question": "How long do Migraine attacks usually last?",
    "options": {
      "A": "30 minutes to 7 days",
      "B": "Hours to days (usually 4-72 hours)",
      "C": "5 minutes to 3 hours",
      "D": "More than a week"
    },
    "answer": "B",
    "rationale": "Migraine attacks last hours to days (usually 4-72 hours)."
  },
  {
    "question": "What distinguishes a CVA (Cerebrovascular Accident) from a TIA (Transient Ischemic Attack) in terms of symptom resolution?",
    "options": {
      "A": "CVA symptoms resolve completely, TIA do not.",
      "B": "TIA symptoms resolve completely, CVA symptoms do not.",
      "C": "Both CVA and TIA symptoms resolve completely.",
      "D": "Neither CVA nor TIA symptoms resolve."
    },
    "answer": "B",
    "rationale": "TIA symptoms resolve completely, whereas CVA symptoms do not resolve."
  },
  {
    "question": "A haemorrhagic stroke is primarily due to:",
    "options": {
      "A": "Blood vessel supplying blood to the brain is obstructed.",
      "B": "Due to clots.",
      "C": "Rupture of weak blood vessels.",
      "D": "Temporary blood flow leakage."
    },
    "answer": "C",
    "rationale": "Haemorrhagic stroke is due to rupture of weak blood vessels."
  },
  {
    "question": "The 'B' in BEFAST assessment stands for:",
    "options": {
      "A": "Breathing",
      "B": "Blood pressure",
      "C": "Balance (loss of balance)",
      "D": "Body temperature"
    },
    "answer": "C",
    "rationale": "B – Balance (loss of balance) is part of the BEFAST assessment."
  },
  {
    "question": "Which of these observations is part of the full set of observations for stroke management?",
    "options": {
      "A": "Weight",
      "B": "Height",
      "C": "GCS",
      "D": "Eye color"
    },
    "answer": "C",
    "rationale": "Full set of observations for stroke management includes GCS, HR, RR, Spo2, BP, BM, Temp, Pain Score."
  },
  {
    "question": "What is a key action to take for a stroke patient in terms of hospital care?",
    "options": {
      "A": "Keep them at home for observation.",
      "B": "GET TO HOSPITAL.",
      "C": "Administer over-the-counter pain relievers.",
      "D": "Wait for symptoms to resolve naturally."
    },
    "answer": "B",
    "rationale": "A key action in stroke management is GET TO HOSPITAL."
  },
  {
    "question": "What is a systemic complication that can occur due to sympathetic nervous system activation following a subarachnoid haemorrhage?",
    "options": {
      "A": "Increased gastrointestinal motility",
      "B": "Cardiac Dysfunction",
      "C": "Improved renal function",
      "D": "Reduced respiratory rate"
    },
    "answer": "B",
    "rationale": "Systemic complications due to sympathetic nervous system activation include Cardiac Dysfunction."
  },
  {
    "question": "In the context of subarachnoid haemorrhage, what does 'Hyponatreamia' refer to?",
    "options": {
      "A": "High blood pressure",
      "B": "Low blood sodium",
      "C": "High blood sugar",
      "D": "Low blood potassium"
    },
    "answer": "B",
    "rationale": "Other Systemic complications of SAH include Hyponatreamia (low blood sodium)."
  },
  {
    "question": "An un-ruptured aneurysm can present with which symptom?",
    "options": {
      "A": "Thunderclap headache",
      "B": "Seizures",
      "C": "Pain above and behind the eye",
      "D": "Loss of consciousness"
    },
    "answer": "C",
    "rationale": "Symptoms of an Un-ruptured Aneurysm include Pain above and behind the eye."
  },
  {
    "question": "A thunderclap headache is a common symptom of which neurological event?",
    "options": {
      "A": "Tension headache",
      "B": "Migraine",
      "C": "Ruptured Aneurysm",
      "D": "TIA"
    },
    "answer": "C",
    "rationale": "A Thunderclap headache is a symptom of a Ruptured Aneurysm."
  },
  {
    "question": "What position should a patient with a subarachnoid haemorrhage be placed in for postural drainage without compromising the airway?",
    "options": {
      "A": "Flat supine",
      "B": "Trendelenburg position",
      "C": "Sit pt upright",
      "D": "Prone position"
    },
    "answer": "C",
    "rationale": "Management & Treatment for SAH includes 'Sit pt upright for postural drainage without compromising airway'."
  },
  {
    "question": "Which of the following is a risk factor for epilepsy related to head injury?",
    "options": {
      "A": "Minor bumps to the head",
      "B": "Seizures occurring within days after head injury ('early posttraumatic seizures')",
      "C": "Wearing a helmet",
      "D": "Mild concussions"
    },
    "answer": "B",
    "rationale": "Risk Factors for epilepsy include Seizures occurring within days after head injury ('early posttraumatic seizures')."
  },
  {
    "question": "Which of these is NOT an infections of the brain that can be a risk factor for epilepsy?",
    "options": {
      "A": "Abscess",
      "B": "Meningitis",
      "C": "Encephalitis",
      "D": "Common Cold"
    },
    "answer": "D",
    "rationale": "Infections of the brain that are risk factors for epilepsy include abscess, meningitis, or encephalitis."
  },
  {
    "question": "What is described as an 'out-of-body' sensation as a common symptom/warning sign of epilepsy?",
    "options": {
      "A": "Increased sensory perception",
      "B": "Unusual experiences",
      "C": "Heightened awareness",
      "D": "Improved memory"
    },
    "answer": "B",
    "rationale": "Common Symptoms/Warning Signs include Unusual experiences – 'out-of-body' sensations; feeling detached; body looks or feels different."
  },
  {
    "question": "Which of the following is an anti-seizure medication that individuals with epilepsy will be medicated with daily to reduce seizure occurrence?",
    "options": {
      "A": "Diazepam",
      "B": "Midazolam",
      "C": "Levetiracetam (KEPPRA)",
      "D": "Morphine"
    },
    "answer": "C",
    "rationale": "Individuals with Epilepsy will be medicated daily to reduce their seizure occurrence with medications such as KEPPRA (Levetiracetam)."
  },
  {
    "question": "Which of these is a red flag for seizures regarding recent events?",
    "options": {
      "A": "Recent exercise",
      "B": "Recent head injuries within last 28 days",
      "C": "Recent healthy diet changes",
      "D": "Recent good night's sleep"
    },
    "answer": "B",
    "rationale": "Red Flags for seizures include Recent head injuries within last 28 days."
  },
  {
    "question": "What is a primary source of infection that can lead to meningitis?",
    "options": {
      "A": "Skin infection",
      "B": "Otis Media (inner ear infection)",
      "C": "Urinary tract infection",
      "D": "Gastroenteritis"
    },
    "answer": "B",
    "rationale": "Source of infections for meningitis include Otis Media – inner ear infection, Sinusitis, Mastoiditis, Basal Skull fracture, and Pneumonia."
  },
  {
    "question": "In meningococcal septicaemia, what do bacteria do in the bloodstream?",
    "options": {
      "A": "Decrease blood pressure",
      "B": "Invade the bloodstream, releasing toxins and causing cardiovascular collapse",
      "C": "Increase red blood cell production",
      "D": "Strengthen blood vessel walls"
    },
    "answer": "B",
    "rationale": "In septicaemia, bacteria invade the bloodstream, releasing toxins and causing cardiovascular collapse."
  },
  {
    "question": "What is one of the main symptoms of meningitis due to central nervous system dysfunction?",
    "options": {
      "A": "Improved cognitive function",
      "B": "Very hard to assess",
      "C": "Increased appetite",
      "D": "Decreased sensitivity to light"
    },
    "answer": "B",
    "rationale": "The main symptoms of meningitis are due to central nervous system dysfunction and can be very hard to assess."
  },
  {
    "question": "A red flag for meningococcal disease characterized by skin changes is:",
    "options": {
      "A": "Flushed, warm skin",
      "B": "Pale, dry skin",
      "C": "Cold mottled skin",
      "D": "Normal skin temperature"
    },
    "answer": "C",
    "rationale": "Red Flags for meningococcal disease include Cold mottled skin."
  },
  {
    "question": "What does the 'I' in 'FISH SHAPED' stand for regarding causes of unconsciousness?",
    "options": {
      "A": "Injury",
      "B": "Infection",
      "C": "Imbalance of heat",
      "D": "Intoxication"
    },
    "answer": "C",
    "rationale": "I – IMBALANCE OF HEAT is one of the causes listed in the FISH SHAPED mnemonic for unconsciousness."
  },
  {
    "question": "What does the 'H' in 'FISH SHAPED' stand for regarding causes of unconsciousness?",
    "options": {
      "A": "Headache",
      "B": "Hypotension",
      "C": "Heart attack",
      "D": "Hypoxia"
    },
    "answer": "C",
    "rationale": "H – HEART ATTACK is one of the causes listed in the FISH SHAPED mnemonic for unconsciousness."
  },
  {
    "question": "What does the 'A' in 'FISH SHAPED' stand for regarding causes of unconsciousness?",
    "options": {
      "A": "Allergies",
      "B": "Asphyxia",
      "C": "Anxiety",
      "D": "Anemia"
    },
    "answer": "B",
    "rationale": "A - ASPHYXIA is one of the causes listed in the FISH SHAPED mnemonic for unconsciousness."
  },
  {
    "question": "What does the 'P' in 'FISH SHAPED' stand for regarding causes of unconsciousness?",
    "options": {
      "A": "Pain",
      "B": "Poisoning",
      "C": "Paralysis",
      "D": "Pressure"
    },
    "answer": "B",
    "rationale": "P - POISONING is one of the causes listed in the FISH SHAPED mnemonic for unconsciousness."
  },
  {
    "question": "What does the 'D' in 'FISH SHAPED' stand for regarding causes of unconsciousness?",
    "options": {
      "A": "Dehydration",
      "B": "Dizziness",
      "C": "Diabetes",
      "D": "Drowsiness"
    },
    "answer": "C",
    "rationale": "D - DIABETES is one of the causes listed in the FISH SHAPED mnemonic for unconsciousness."
  },
  {
    "question": "Which of the following is an extreme emotional/stressful response that can cause unconsciousness?",
    "options": {
      "A": "Mild anxiety",
      "B": "Arrythmias",
      "C": "Slight discomfort",
      "D": "Relaxation"
    },
    "answer": "B",
    "rationale": "Extreme emotional/stressful responses such as Arrythmias can cause unconsciousness."
  },
  {
    "question": "What is a red flag for Cauda Equina Syndrome related to bladder or bowel function?",
    "options": {
      "A": "Increased urinary frequency",
      "B": "Retention of urine or faeces",
      "C": "Normal bowel movements",
      "D": "Mild constipation"
    },
    "answer": "B",
    "rationale": "Red Flags for CES include Retention of urine or faeces."
  },
  {
    "question": "In the Primary Survey, what does 'A' refer to?",
    "options": {
      "A": "Activity",
      "B": "Airway patency",
      "C": "Allergies",
      "D": "Assessment"
    },
    "answer": "B",
    "rationale": "D R A B C D E includes Assess airway patency – look listen feel."
  },
  {
    "question": "In the Primary Survey, what does 'B' refer to?",
    "options": {
      "A": "Blood pressure",
      "B": "Breathing adequacy",
      "C": "Body temperature",
      "D": "Bowel sounds"
    },
    "answer": "B",
    "rationale": "D R A B C D E includes Breathing adequate? Assess: rate, depth, adequacy, work of breathing, chest expansion, compliance, accessory muscle use, saturation."
  },
  {
    "question": "In the Primary Survey, what does 'C' refer to?",
    "options": {
      "A": "Consciousness",
      "B": "Circulation/haemorrhage",
      "C": "Cough",
      "D": "Cap refill"
    },
    "answer": "B",
    "rationale": "Asses for haemorrhage. Assess skin colour, temperature. Palpate radial. Check cap refill. Consider hypovolaemic shock."
  },
  {
    "question": "In the Primary Survey, what does 'D' refer to?",
    "options": {
      "A": "Dehydration",
      "B": "Disability/neurological assessment",
      "C": "Diet",
      "D": "Diagnosis"
    },
    "answer": "B",
    "rationale": "AVPU assessment. Pupil response. Check for purposeful movement & sensory function. BM."
  },
  {
    "question": "In the SAMPLE history taking mnemonic, what does 'A' refer to?",
    "options": {
      "A": "Associated symptoms",
      "B": "Allergies",
      "C": "Appetite",
      "D": "Activity"
    },
    "answer": "B",
    "rationale": "In the SAMPLE mnemonic, A – Allergies."
  },
  {
    "question": "In the SAMPLE history taking mnemonic, what does 'P' refer to?",
    "options": {
      "A": "Pain score",
      "B": "Past medical history",
      "C": "Pupil response",
      "D": "Physical exam"
    },
    "answer": "B",
    "rationale": "In the SAMPLE mnemonic, P – past medical history."
  },
  {
    "question": "In the SAMPLE history taking mnemonic, what does 'L' refer to?",
    "options": {
      "A": "Location of pain",
      "B": "Last meal",
      "C": "Level of consciousness",
      "D": "Loss of function"
    },
    "answer": "B",
    "rationale": "In the SAMPLE mnemonic, L – last meal."
  },
  {
    "question": "In the SAMPLE history taking mnemonic, what does 'E' refer to?",
    "options": {
      "A": "Exacerbating factors",
      "B": "Events leading up to this",
      "C": "Eye examination",
      "D": "Emotional state"
    },
    "answer": "B",
    "rationale": "In the SAMPLE mnemonic, E – events leading up to this."
  },
  {
    "question": "In the SAMPLE history taking mnemonic, what does 'R' refer to?",
    "options": {
      "A": "Respiratory rate",
      "B": "Risk factors",
      "C": "Rash",
      "D": "Reactivity"
    },
    "answer": "B",
    "rationale": "In the SAMPLE mnemonic, R – risk factors."
  },
  {
    "question": "In the SOCRATES mnemonic, what does 'O' stand for?",
    "options": {
      "A": "Observations",
      "B": "Onset",
      "C": "Origin",
      "D": "Overall condition"
    },
    "answer": "B",
    "rationale": "O – Onset is part of the SOCRATES mnemonic."
  },
  {
    "question": "In the SOCRATES mnemonic, what does 'C' stand for?",
    "options": {
      "A": "Cause",
      "B": "Character",
      "C": "Consciousness",
      "D": "Capillary refill"
    },
    "answer": "B",
    "rationale": "C – Character is part of the SOCRATES mnemonic."
  },
  {
    "question": "In the SOCRATES mnemonic, what does 'A' stand for?",
    "options": {
      "A": "Age",
      "B": "Associated symptoms",
      "C": "Aggravating factors",
      "D": "Alertness"
    },
    "answer": "B",
    "rationale": "A – Associated symptoms is part of the SOCRATES mnemonic."
  },
  {
    "question": "In the SOCRATES mnemonic, what does 'T' stand for?",
    "options": {
      "A": "Temperature",
      "B": "Timing",
      "C": "Treatment",
      "D": "Trauma"
    },
    "answer": "B",
    "rationale": "T – Timing is part of the SOCRATES mnemonic."
  },
  {
    "question": "In the SOCRATES mnemonic, what does 'E' stand for?",
    "options": {
      "A": "Examination",
      "B": "Exacerbating or relieving factors",
      "C": "Ethnicity",
      "D": "Edema"
    },
    "answer": "B",
    "rationale": "E – Exacerbating or relieving factors is part of the SOCRATES mnemonic."
  },
  {
    "question": "In the SOCRATES mnemonic, what does 'S' (second S) stand for?",
    "options": {
      "A": "Site",
      "B": "Signs",
      "C": "Severity",
      "D": "Speech"
    },
    "answer": "C",
    "rationale": "S – Severity is part of the SOCRATES mnemonic."
  },
  {
    "question": "What is one of the key objectives related to headaches in the Nervous Conditions module?",
    "options": {
      "A": "To treat all types of headaches with the same medication.",
      "B": "To outline the pathophysiology and types of headaches, as well as common causes and red flag signs and symptoms.",
      "C": "To ignore headaches unless they are severe.",
      "D": "To classify headaches based on patient's age."
    },
    "answer": "B",
    "rationale": "Objectives include outlining the pathophysiology and types of headaches, as well as common causes and red flag signs and symptoms."
  },
  {
    "question": "The term 'Epilepsy' is to be defined according to the module objectives. What is one of the key components of its definition?",
    "options": {
      "A": "A muscular disorder.",
      "B": "A cardiovascular condition.",
      "C": "A neurological disorder that causes seizures.",
      "D": "A respiratory illness."
    },
    "answer": "C",
    "rationale": "Objectives include defining the term: Epilepsy."
  },
  {
    "question": "What is mentioned as part of the objective for convulsions?",
    "options": {
      "A": "Outline dietary restrictions.",
      "B": "Outline the pathophysiology, associated medication and the signs and symptoms of convulsions.",
      "C": "Focus only on pediatric convulsions.",
      "D": "Discuss the history of convulsive disorders."
    },
    "answer": "B",
    "rationale": "Objectives include outlining the pathophysiology, associated medication and the signs and symptoms of convulsions."
  },
  {
    "question": "What is an objective related to meningococcal disease?",
    "options": {
      "A": "To discuss prevention strategies only.",
      "B": "To outline the pathophysiology and the signs and symptoms of meningococcal disease.",
      "C": "To identify all types of bacteria causing meningitis.",
      "D": "To explain the global impact of the disease."
    },
    "answer": "B",
    "rationale": "Objectives include outlining the pathophysiology and the signs and symptoms of meningococcal disease."
  },
  {
    "question": "What is an objective related to Cauda Equina Syndrome (CES)?",
    "options": {
      "A": "To explain surgical procedures for CES.",
      "B": "To outline the pathophysiology and the signs and symptoms of cauda equina syndrome (CES).",
      "C": "To assess the long-term rehabilitation for CES.",
      "D": "To identify specific causes of CES from a list."
    },
    "answer": "B",
    "rationale": "Objectives include outlining the pathophysiology and the signs and symptoms of cauda equina syndrome (CES)."
  },
  {
    "question": "One objective of the module is to explain one's own role in the assessment and management of neurological disorders, including:",
    "options": {
      "A": "Surgical interventions.",
      "B": "Advanced diagnostic procedures.",
      "C": "Headaches, Convulsions, Stroke, Meningococcal disease, Cauda equina syndrome (CES), Altered levels of consciousness.",
      "D": "Prescribing advanced medications."
    },
    "answer": "C",
    "rationale": "Objectives include explaining own role in the assessment and management of neurological disorders, including: Headaches, Convulsions, Stroke, Meningococcal disease, Cauda equina syndrome (CES), Altered levels of consciousness."
  },
  {
    "question": "The 'Nervous conditions' presentation links to which component of the diploma?",
    "options": {
      "A": "Component 15: Patient Assessment Examination and Physiological Measurements",
      "B": "Component 19: Management of Medical and Surgical Conditions and Emergencies",
      "C": "Component 22: Trauma Management",
      "D": "Component 10: Pharmacology"
    },
    "answer": "B",
    "rationale": "The presentation Links to diploma: Component 19: Management of Medical and Surgical Conditions and Emergencies."
  },
  {
    "question": "According to the Knowledge section, what should an AAP understand regarding medication administration?",
    "options": {
      "A": "How to create new medications.",
      "B": "Their own restrictions of the administration of medications in accordance with the AAP’s scope of practice.",
      "C": "Advanced pharmaceutical research.",
      "D": "Global drug supply chains."
    },
    "answer": "B",
    "rationale": "Knowledge: How to operate under given exemptions, clinical guidelines and will understand their own restrictions of the administration of medications in accordance with the AAP’s scope of practice."
  },
  {
    "question": "What do the 'Skills' for an AAP include regarding managing service users?",
    "options": {
      "A": "Only caring for elderly patients.",
      "B": "Only managing patients with minor injuries.",
      "C": "Manage service users and others across the age ranges - from babies & children to care for the elderly - within the emergency & urgent care setting.",
      "D": "Managing patients in a clinical setting only."
    },
    "answer": "C",
    "rationale": "Skills: Manage service users and others across the age ranges - from babies & children to care for the elderly - within the emergency & urgent care setting."
  },
  {
    "question": "Which of the following is part of the 'Skills' an AAP should possess, specifically concerning medical conditions?",
    "options": {
      "A": "Performing complex surgeries.",
      "B": "Diagnosing rare medical conditions.",
      "C": "Managing medical conditions.",
      "D": "Developing new medical treatments."
    },
    "answer": "C",
    "rationale": "Skills include managing medical conditions."
  },
  {
    "question": "What is a key 'Behaviour' expected of an AAP?",
    "options": {
      "A": "To be professional and passionate about the emergency and urgent care services.",
      "B": "To avoid learning from mistakes.",
      "C": "To disregard patient experience.",
      "D": "To prioritize personal gain over patient care."
    },
    "answer": "A",
    "rationale": "Behaviours: Be professional and passionate about the emergency and urgent care services."
  },
  {
    "question": "The 'Nervous conditions' presentation links to which care standard?",
    "options": {
      "A": "Professional boundaries.",
      "B": "Understand your role.",
      "C": "Financial management.",
      "D": "Marketing and promotion."
    },
    "answer": "B",
    "rationale": "Links to care standard: Understand your role."
  },
  {
    "question": "Which of these is a care standard linked in the presentation?",
    "options": {
      "A": "Advanced life support.",
      "B": "Clinical research.",
      "C": "Privacy and dignity.",
      "D": "Team leadership."
    },
    "answer": "C",
    "rationale": "Links to care standard: Privacy and dignity."
  },
  {
    "question": "What is the pass mark for the Exam (C19 – Management of Medical and Surgical Conditions and Emergencies)?",
    "options": {
      "A": "60%",
      "B": "70%",
