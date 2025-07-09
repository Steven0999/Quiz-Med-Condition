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
    "question": "What should be checked when assessing circulation in an unconscious patient?",
    "options": {
      "A": "Only heart rate.",
      "B": "Assess for haemorrhage. Assess skin colour, temperature. Palpate radial. Check cap refill. Consider hypovolaemic shock.",
      "C": "Blood type.",
      "D": "Blood glucose only."
    },
    "answer": "B",
    "rationale": "Asses for haemorrhage. Assess skin colour, temperature. Palpate radial. Check cap refill. Consider hypovolaemic shock."
  },
  {
    "question": "What assessment tool is mentioned for checking neurological status in an unconscious patient as part of the 'D' for Disability?",
    "options": {
      "A": "Glasgow Coma Scale (GCS)",
      "B": "AVPU assessment",
      "C": "National Institutes of Health Stroke Scale (NIHSS)",
      "D": "Mini-Mental State Examination (MMSE)"
    },
    "answer": "B",
    "rationale": "AVPU assessment is mentioned."
  },
  {
    "question": "What is one of the key symptoms of Cauda Equina Syndrome related to pain in the lower back?",
    "options": {
      "A": "Mild muscle soreness",
      "B": "Severe low back pain",
      "C": "Intermittent backache",
      "D": "Pain only when moving"
    },
    "answer": "B",
    "rationale": "Red Flags for CES include Severe low back pain."
  },
  {
    "question": "What is the management recommendation for Cauda Equina Syndrome given its nature?",
    "options": {
      "A": "Rest and pain relievers.",
      "B": "Usually a surgical emergency.",
      "C": "Physical therapy only.",
      "D": "Observation for several days."
    },
    "answer": "B",
    "rationale": "CES is Usually a surgical emergency."
  },
  {
    "question": "What is the AVPU assessment used for in a neurological assessment?",
    "options": {
      "A": "Assessing blood pressure.",
      "B": "Assessing level of consciousness.",
      "C": "Assessing pain.",
      "D": "Assessing temperature."
    },
    "answer": "B",
    "rationale": "AVPU assessment is used to determine the patient's level of consciousness (Alert, Voice, Pain, Unresponsive)."
  },
  {
    "question": "What is one of the key things to consider after performing a FAST test for stroke, even if negative?",
    "options": {
      "A": "Rule out stroke completely.",
      "B": "Consider stroke even if the patient is FAST negative.",
      "C": "Refer to physical therapy.",
      "D": "Discharge the patient."
    },
    "answer": "B",
    "rationale": "Consider stroke even if the patient is FAST negative."
  },
  {
    "question": "What is one of the objectives related to altered levels of consciousness?",
    "options": {
      "A": "To outline long-term management strategies.",
      "B": "To outline the causes of altered levels of consciousness.",
      "C": "To differentiate between sleep and altered consciousness.",
      "D": "To classify all levels of consciousness."
    },
    "answer": "B",
    "rationale": "Objectives include outlining the causes of altered levels of consciousness."
  },
  {
    "question": "Which of the following is an associated feature of Migraine, but not typically of Tension-type headache?",
    "options": {
      "A": "No nausea/vomiting",
      "B": "Photophobia or phonophobia (more than one)",
      "C": "No aggravation by physical activity",
      "D": "Not disabling"
    },
    "answer": "B",
    "rationale": "Migraine can have one or more of: nausea, vomiting, photophobia, or phonophobia, whereas Tension-type has no more than one of photophobia or phonophobia."
  },
  {
    "question": "Which of the following describes the severity of a Cluster headache?",
    "options": {
      "A": "Mild or moderate",
      "B": "Not disabling",
      "C": "Moderate or severe",
      "D": "Very severe"
    },
    "answer": "D",
    "rationale": "The severity of a Cluster headache is Very severe."
  },
  {
    "question": "What is a general principle for managing a patient with ABCD compromise in the context of neurological emergencies?",
    "options": {
      "A": "Wait for specialist intervention.",
      "B": "Manage systematically.",
      "C": "Only manage specific symptoms.",
      "D": "Delay treatment."
    },
    "answer": "B",
    "rationale": "If ABCD COMPROMISE, MANAGE SYSTEMATICALLY."
  },
  {
    "question": "The links to 'k,s,b' in the presentation refer to which areas of competence for an AAP?",
    "options": {
      "A": "Kindness, Safety, Boundaries",
      "B": "Knowledge, Skills, Behaviours",
      "C": "Key Symptoms, Body Systems, Biometrics",
      "D": "Kinetics, Sensation, Balance"
    },
    "answer": "B",
    "rationale": "Links to k,s,b refer to Knowledge, Skills, Behaviours."
  },
  {
    "question": "According to the 'Knowledge' section, what do AAPs know how to use to support their role?",
    "options": {
      "A": "Advanced surgical instruments.",
      "B": "UK Ambulance Service Clinical Practice Guidelines and other documents.",
      "C": "Experimental medications.",
      "D": "International medical journals only."
    },
    "answer": "B",
    "rationale": "The AAP’s scope of practice. They will know how to prepare medications and undertake the relevant safety checks prior to administration. The will know and understand how to use UK Ambulance Service Clinical Practice Guidelines and other documents to support the AAP role."
  },
  {
    "question": "The 'Skills' of an AAP include managing service users across which age ranges?",
    "options": {
      "A": "Adults only.",
      "B": "Babies & children to care for the elderly.",
      "C": "Teenagers and young adults.",
      "D": "Middle-aged adults."
    },
    "answer": "B",
    "rationale": "Skills: Manage service users and others across the age ranges - from babies & children to care for the elderly."
  },
  {
    "question": "What is listed under 'Skills' for an AAP regarding circulatory management?",
    "options": {
      "A": "Only basic first aid.",
      "B": "Detailed cardiothoracic surgery.",
      "C": "Circulatory management within the emergency & urgent care setting.",
      "D": "Long-term cardiac rehabilitation."
    },
    "answer": "C",
    "rationale": "Skills include: airway, respiratory & circulatory management within the emergency & urgent care setting."
  },
  {
    "question": "What is a key 'Behaviour' expected of an AAP?",
    "options": {
      "A": "A neutral attitude.",
      "B": "A positive attitude in helping to improve patient care/experience.",
      "C": "A focus on efficiency over quality.",
      "D": "A detached approach to patient interaction."
    },
    "answer": "B",
    "rationale": "Behaviours: have a commitment to quality and care for service users and their relatives, a positive attitude in helping to improve patient care/experience."
  },
  {
    "question": "Which care standard emphasizes 'Your personal development' for an AAP?",
    "options": {
      "A": "Communication",
      "B": "Duty of care",
      "C": "Your personal development",
      "D": "Health and safety"
    },
    "answer": "C",
    "rationale": "Links to care standard: Your personal development."
  },
  {
    "question": "Which care standard relates to 'Work in a person centred way'?",
    "options": {
      "A": "Basic life support",
      "B": "Equality and diversity",
      "C": "Work in a person centred way",
      "D": "Safeguarding children"
    },
    "answer": "C",
    "rationale": "Links to care standard: Work in a person centred way."
  },
  {
    "question": "What is one of the components of neurological disorders that an AAP explains their role in assessing and managing?",
    "options": {
      "A": "Brain surgery",
      "B": "Advanced neuroimaging interpretation",
      "C": "Altered levels of consciousness",
      "D": "Neurodevelopmental disorders"
    },
    "answer": "C",
    "rationale": "Explain own role in the assessment and management of neurological disorders, including: Altered levels of consciousness."
  },
  {
    "question": "The term 'POUND' is a mnemonic for which type of headache?",
    "options": {
      "A": "Tension-type headache",
      "B": "Migraine",
      "C": "Cluster headache",
      "D": "Secondary headache"
    },
    "answer": "B",
    "rationale": "Migraine (POUND)."
  },
  {
    "question": "What does the 'P' in POUND (for Migraine) often refer to regarding its character?",
    "options": {
      "A": "Pressing",
      "B": "Pulsating",
      "C": "Pins and needles",
      "D": "Pressure"
    },
    "answer": "B",
    "rationale": "The character of a Migraine is Pulsating/throbbing, aligning with the 'P' in POUND."
  },
  {
    "question": "What is a physical examination feature that is a red flag in the SNOOP mnemonic for secondary headache, particularly for 'Neurologic' symptoms?",
    "options": {
      "A": "Normal reflexes",
      "B": "Abnormal neurologic examination",
      "C": "Clear speech",
      "D": "Normal gait"
    },
    "answer": "B",
    "rationale": "For 'Neurologic' in SNOOP, a physical examination feature is Abnormal neurologic examination."
  },
  {
    "question": "Which of the following is a 'Toxins' related cause of secondary headache?",
    "options": {
      "A": "Lead poisoning",
      "B": "Carbon monoxide poisoning",
      "C": "Food allergies",
      "D": "Medication side effect"
    },
    "answer": "B",
    "rationale": "Toxins such as Carbon monoxide poisoning can cause secondary headache."
  },
  {
    "question": "What is one of the 'Metabolic' causes of secondary headache listed?",
    "options": {
      "A": "Hyperglycemia",
      "B": "Hypoglycaemia",
      "C": "Hypothyroidism",
      "D": "Hyperthyroidism"
    },
    "answer": "B",
    "rationale": "Metabolic causes include Hypoxia, Hypercapnoea, Hypoglycaemia, and Preeclampsia."
  },
  {
    "question": "Which of the following is considered an 'Other' cause of secondary headache?",
    "options": {
      "A": "Stroke",
      "B": "Tumour",
      "C": "Sinusitis",
      "D": "Meningitis"
    },
    "answer": "C",
    "rationale": "Other causes include Sinusitis, Dental, TMJ dysfunction, Trigeminal neuralgia, and Post LP headache."
  },
  {
    "question": "What is a red flag for headaches related to 'Pregnancy' in the SNOOP mnemonic?",
    "options": {
      "A": "Normal pregnancy headache.",
      "B": "New-onset headache during pregnancy.",
      "C": "Headache relieved by rest.",
      "D": "Headache occurring only in the first trimester."
    },
    "answer": "B",
    "rationale": "New-onset headache during pregnancy is a red flag in SNOOP."
  },
  {
    "question": "What is the term for a sudden severe headache with no known cause, which is a common symptom of stroke?",
    "options": {
      "A": "Migraine",
      "B": "Tension headache",
      "C": "Thunderclap headache",
      "D": "Cluster headache"
    },
    "answer": "C",
    "rationale": "Sudden severe headache with no known cause can also be known as a Thunderclap headache, a red flag for secondary headaches including stroke."
  },
  {
    "question": "Which of the following is a red flag for stroke regarding symptom resolution?",
    "options": {
      "A": "Resolving symptoms",
      "B": "Un-resolving symptoms",
      "C": "Symptoms improving with rest",
      "D": "Symptoms lasting less than an hour"
    },
    "answer": "B",
    "rationale": "Red Flags for stroke include Un-resolving symptoms."
  },
  {
    "question": "What is one of the observations to be taken as part of a full set of observations for TIA management?",
    "options": {
      "A": "Blood type",
      "B": "GCS",
      "C": "Weight",
      "D": "Height"
    },
    "answer": "B",
    "rationale": "Full set of observations for TIA includes GCS."
  },
  {
    "question": "What does the 'F' in FAST or BEFAST assessment stand for in relation to speech?",
    "options": {
      "A": "Fluid speech",
      "B": "Fast speaking",
      "C": "Trouble speaking slurred speech, confused",
      "D": "Fluent speech"
    },
    "answer": "C",
    "rationale": "S – Speech (trouble speaking slurred speech, confused)."
  },
  {
    "question": "What is a management step for stroke if ABCD (Airway, Breathing, Circulation, Disability) is compromised?",
    "options": {
      "A": "Delay intervention.",
      "B": "Manage systematically.",
      "C": "Only address the most obvious compromise.",
      "D": "Wait for symptoms to improve."
    },
    "answer": "B",
    "rationale": "If ABCD COMPROMISE, MANAGE SYSTEMATICALLY."
  },
  {
    "question": "What is the area between the arachnoid membrane and the pia mater surrounding the brain called, where subarachnoid haemorrhage occurs?",
    "options": {
      "A": "Epidural space",
      "B": "Subdural space",
      "C": "Subarachnoid space",
      "D": "Ventricular space"
    },
    "answer": "C",
    "rationale": "Subarachnoid haemorrhage (SAH) is bleeding into the subarachnoid space—the area between the arachnoid membrane and the pia mater surrounding the brain."
  },
  {
    "question": "What can be a cause of acute hydrocephalus following a subarachnoid haemorrhage?",
    "options": {
      "A": "Increased CSF absorption",
      "B": "ICH (intracranial haemorrhage) causing brain tissue destruction",
      "C": "Decreased CSF production",
      "D": "Normal CSF flow"
    },
    "answer": "B",
    "rationale": "ICH (intracranial haemorrhage) causing brain tissue destruction & hydrocephalus."
  },
  {
    "question": "What is one of the physiological changes contributing to Acute global ischaemia in SAH?",
    "options": {
      "A": "Increased CPP",
      "B": "↓ coronary blood flow due to ↑ ICP",
      "C": "Increased cerebral blood flow",
      "D": "Decreased intracranial pressure"
    },
    "answer": "B",
    "rationale": "Acute global ischaemia Causes ↓ CBF secondary to ↑ ICP."
  },
  {
    "question": "Which of these is a systemic complication of SAH, affecting electrolyte balance?",
    "options": {
      "A": "Hypernatremia",
      "B": "Hyponatreamia (low blood sodium)",
      "C": "Hyperkalemia",
      "D": "Hypocalcemia"
    },
    "answer": "B",
    "rationale": "Other Systemic complications include Hyponatreamia (low blood sodium)."
  },
  {
    "question": "What is a red flag for seizures regarding recent medication changes?",
    "options": {
      "A": "No medication changes",
      "B": "Recent medication changes",
      "C": "Long-term stable medication",
      "D": "Adherence to medication"
    },
    "answer": "B",
    "rationale": "Red Flags for seizures include Recent medication changes."
  },
  {
    "question": "What is a red flag for seizures regarding recreational drug use?",
    "options": {
      "A": "No recreational drug use",
      "B": "Recreational drug use",
      "C": "Past recreational drug use but none recently",
      "D": "Cannabis use only"
    },
    "answer": "B",
    "rationale": "Red Flags for seizures include Recreational drug use."
  },
  {
    "question": "What is the common age group that AAP skills cover in emergency & urgent care setting?",
    "options": {
      "A": "Adults only",
      "B": "Elderly only",
      "C": "Babies & children to care for the elderly",
      "D": "Teenagers only"
    },
    "answer": "C",
    "rationale": "Manage service users and others across the age ranges - from babies & children to care for the elderly - within the emergency & urgent care setting."
  },
  {
    "question": "What type of injuries are covered under the 'Skills' of an AAP?",
    "options": {
      "A": "Only minor cuts",
      "B": "Bones-joints-ligaments-tendons injuries",
      "C": "Complex internal organ damage",
      "D": "Spinal cord transections"
    },
    "answer": "B",
    "rationale": "Skills include: bones-joints-ligaments-tendons injuries."
  },
  {
    "question": "What does the 'Behaviours' section emphasize regarding learning?",
    "options": {
      "A": "Learning only from mistakes.",
      "B": "Learning from successes and mistakes.",
      "C": "Avoiding learning to maintain consistency.",
      "D": "Only learning from formal courses."
    },
    "answer": "B",
    "rationale": "Behaviours: learning from successes and mistakes in line with the NHS Constitution."
  },
  {
    "question": "Which care standard is related to 'Health and safety'?",
    "options": {
      "A": "Communication",
      "B": "Health and safety",
      "C": "Fluids and nutrition",
      "D": "Safeguarding adults"
    },
    "answer": "B",
    "rationale": "Links to care standard: Health and safety."
  },
  {
    "question": "Which care standard relates to 'Infection prevention and control'?",
    "options": {
      "A": "Duty of care",
      "B": "Infection prevention and control",
      "C": "Basic life support",
      "D": "Handling information"
    },
    "answer": "B",
    "rationale": "Links to care standard: Infection prevention and control."
  },
  {
    "question": "What is the overall term for a sudden, uncontrolled electrical disturbance in the brain, causing a change in behaviour, movement, feelings, and consciousness?",
    "options": {
      "A": "Convulsion",
      "B": "Seizure",
      "C": "Epilepsy",
      "D": "Syncope"
    },
    "answer": "B",
    "rationale": "Seizures are a sudden, uncontrolled electrical disturbance in the brain. It causes a change in behaviour, movement, feelings and in levels of consciousness."
  },
  {
    "question": "Which common symptom/warning sign of epilepsy includes 'jerking movements of an arm, leg, or body'?",
    "options": {
      "A": "Feeling spacey",
      "B": "Jerking movements of an arm, leg, or body",
      "C": "Odd feelings",
      "D": "Unusual smells"
    },
    "answer": "B",
    "rationale": "Common Symptoms/Warning Signs include Jerking movements of an arm, leg, or body."
  },
  {
    "question": "Which medication is used for daily administration to reduce seizure occurrence?",
    "options": {
      "A": "Diazepam",
      "B": "Midazolam",
      "C": "CLONAZEPAM",
      "D": "Adrenaline"
    },
    "answer": "C",
    "rationale": "Individuals with Epilepsy will be medicated daily to reduce their seizure occurrence. These include medications such as KEPPRA (Levetiracetam), LAMOTRIGINE, CLONAZEPAM, TEGRATOL, SODIUM VALPORATE (epilem)."
  },
  {
    "question": "What is a red flag for seizures if there is 'No previous history of seizures'?",
    "options": {
      "A": "It means it's not a seizure.",
      "B": "It is a red flag indicating a need for further investigation.",
      "C": "It indicates a benign condition.",
      "D": "It suggests a temporary issue."
    },
    "answer": "B",
    "rationale": "Red Flags for seizures include No previous history of seizures."
  },
  {
    "question": "What is a key aspect of managing an unconscious patient related to their environment?",
    "options": {
      "A": "Increase room temperature.",
      "B": "Remove from extreme environments.",
      "C": "Keep lights dim.",
      "D": "Play soothing music."
    },
    "answer": "B",
    "rationale": "Manage the unconscious patient: Remove from extreme environments."
  },
  {
    "question": "Which of the following is NOT a type of primary headache mentioned?",
    "options": {
      "A": "Migraine",
      "B": "Tension headache",
      "C": "Cluster headache",
      "D": "Sinus headache"
    },
    "answer": "D",
    "rationale": "Examples of primary headaches are Migraine, Cluster headache, and Tension headache."
  },
  {
    "question": "What is the typical character of a Tension-type headache?",
    "options": {
      "A": "Pulsating/throbbing",
      "B": "Excruciating, stabbing, burning",
      "C": "Pressing/tightening/bandlike",
      "D": "Sharp, sudden pain"
    },
    "answer": "C",
    "rationale": "The character of a Tension-type headache is Pressing/tightening/bandlike."
  },
  {
    "question": "Which of the following is a symptom of a ruptured aneurysm?",
    "options": {
      "A": "Pain behind the eye",
      "B": "Thunderclap headache",
      "C": "Numbness on face",
      "D": "Vision changes without double vision"
    },
    "answer": "B",
    "rationale": "Ruptured Aneurysm symptoms include Thunderclap headache."
  }
];

// --- DOM Elements ---
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackElement = document.getElementById('feedback');
const rationaleElement = document.getElementById('rationale');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentScoreSpan = document.getElementById('current-score');
const totalQuestionsSpan = document.getElementById('total-questions');
const restartBtn = document.getElementById('restart-btn');

// --- Quiz State Variables ---
let currentQuestionIndex = 0;
let score = 0;
let answeredQuestions = new Array(quizQuestions.length).fill(null); // To store user's answer for each question

// --- Functions ---

function loadQuestion(index) {
    if (index >= 0 && index < quizQuestions.length) {
        currentQuestionIndex = index;
        const question = quizQuestions[currentQuestionIndex];

        questionText.textContent = `${currentQuestionIndex + 1}. ${question.question}`;
        optionsContainer.innerHTML = ''; // Clear previous options
        feedbackElement.textContent = ''; // Clear previous feedback
        feedbackElement.className = 'feedback'; // Reset feedback class
        rationaleElement.textContent = ''; // Clear previous rationale
        rationaleElement.style.display = 'none'; // Hide rationale

        // Create option buttons
        for (const optionKey in question.options) {
            const optionValue = question.options[optionKey];
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.dataset.option = optionKey;
            button.textContent = `${optionKey}. ${optionValue}`;
            optionsContainer.appendChild(button);

            // Add event listener for answering
            button.addEventListener('click', handleAnswer);
        }

        // Update navigation button states
        prevBtn.disabled = currentQuestionIndex === 0;
        nextBtn.disabled = false; // Next is enabled unless it's the last question and not answered yet

        // If the question was already answered, show feedback and disable options
        if (answeredQuestions[currentQuestionIndex] !== null) {
            disableOptions();
            showFeedbackAndRationale(answeredQuestions[currentQuestionIndex]);
            if (currentQuestionIndex === quizQuestions.length - 1) {
                nextBtn.disabled = true; // Disable next if at the end and answered
            }
        }
        updateScoreDisplay();
    } else if (index === quizQuestions.length) {
        // End of quiz - show final score and option to restart
        displayFinalScore();
    }
}

function handleAnswer(event) {
    const selectedOption = event.target.dataset.option;
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const correctAnswer = currentQuestion.answer;

    disableOptions(); // Disable all options after one is selected

    // Mark selected option
    const optionButtons = optionsContainer.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        if (button.dataset.option === selectedOption) {
            if (selectedOption === correctAnswer) {
                button.classList.add('correct');
                feedbackElement.textContent = 'Correct!';
                feedbackElement.classList.add('correct-feedback');
                if (answeredQuestions[currentQuestionIndex] === null) { // Only increment score if not already answered
                    score++;
                }
            } else {
                button.classList.add('incorrect');
                feedbackElement.textContent = 'Incorrect!';
                feedbackElement.classList.add('incorrect-feedback');
            }
        }
        // Also highlight the correct answer if the selected one was incorrect
        if (button.dataset.option === correctAnswer) {
            button.classList.add('correct');
        }
    });

    answeredQuestions[currentQuestionIndex] = selectedOption; // Store the user's answer
    showFeedbackAndRationale(selectedOption);
    updateScoreDisplay();

    // If it's the last question, disable the next button
    if (currentQuestionIndex === quizQuestions.length - 1) {
        nextBtn.disabled = true;
    }
}

function showFeedbackAndRationale(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    rationaleElement.textContent = `Rationale: ${currentQuestion.rationale}`;
    rationaleElement.style.display = 'block'; // Show rationale
}

function disableOptions() {
    const optionButtons = optionsContainer.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.disabled = true;
    });
}

function enableOptions() {
    const optionButtons = optionsContainer.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.disabled = false;
        button.classList.remove('correct', 'incorrect'); // Remove feedback classes
    });
}

function updateScoreDisplay() {
    currentScoreSpan.textContent = score;
    totalQuestionsSpan.textContent = quizQuestions.length;
}

function displayFinalScore() {
    questionText.textContent = 'Quiz Completed!';
    optionsContainer.innerHTML = '';
    feedbackElement.textContent = `You scored ${score} out of ${quizQuestions.length}!`;
    feedbackElement.className = 'feedback correct-feedback'; // Can adjust styling for final score
    rationaleElement.style.display = 'none';
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    restartBtn.style.display = 'block'; // Show restart button
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answeredQuestions = new Array(quizQuestions.length).fill(null);
    restartBtn.style.display = 'none'; // Hide restart button
    loadQuestion(currentQuestionIndex);
}

// --- Event Listeners ---
prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        loadQuestion(currentQuestionIndex - 1);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion(currentQuestionIndex + 1);
    } else {
        displayFinalScore(); // If at the end, clicking next finishes the quiz
    }
});

restartBtn.addEventListener('click', restartQuiz);

// --- Initialize Quiz ---
document.addEventListener('DOMContentLoaded', () => {
    loadQuestion(currentQuestionIndex);
    updateScoreDisplay();
});
