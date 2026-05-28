// Country data for /college/<country> landing pages.
// One template + one entry here = one optimized country page.
// Eligibility / fee / visa claims are the localization hooks — confirm
// against the official admissions policy before going live.

export type CountryFAQ = { q: string; a: string };

export type CountryStat = { v: string; l: string };

export type CountryStep = { t: string; d: string };

export type CountryTestimonial = {
  initials: string;
  name: string;
  role: string;
  quote: string;
};

export type Country = {
  slug: string;
  name: string;
  demonym: string;
  flag: string;
  currency: { code: string; symbol: string };
  eligibility: { hook: string; detail: string };
  fees: { display: string; note: string };
  pathways: string[];
  visaSteps: CountryStep[];
  reasons: { t: string; d: string }[];
  testimonials: CountryTestimonial[];
  conversionAngle: string;
  bilingualHero?: string;
  seo: {
    primaryKeyword: string;
    h1: string;
    heroLead: string;
    metaTitle: string;
    metaDescription: string;
    canonical: string;
    faq: CountryFAQ[];
  };
};

const SHARED_FAQ = (c: { name: string; demonym: string; currency: { code: string } }): CountryFAQ[] => [
  {
    q: `Is the chiropractic degree recognized for ${c.demonym} students?`,
    a: `Chiropractic India®'s 6-year Masters fellowship is delivered in partnership with Sri Sri University and prepares graduates for clinical practice and academic faculty roles. Specific licensing requirements vary by country — our international advisor walks every ${c.demonym} applicant through their home-country pathway before enrolment.`,
  },
  {
    q: `What are the eligibility requirements for ${c.demonym} students?`,
    a: `${c.demonym} students apply after completing their qualifying secondary or pre-university examination. The Faculty Training Program also welcomes graduates with a prior health-sciences background. Applications close approximately 12 weeks before the August 2026 inaugural intake.`,
  },
  {
    q: `How much does the program cost in ${c.currency.code}?`,
    a: `Tuition for the 6-year Masters fellowship is published in ${c.currency.code} on this page and reviewed annually. The fee covers tuition, clinical training at CI® Bangalore and access to the AI-supported academic platform. Scholarships are available on merit and need.`,
  },
  {
    q: "How do I get a student visa to India?",
    a: "Once you receive a conditional offer letter, Chiropractic India® issues a Bonafide Certificate that supports your Indian Student Visa application at the local Indian Embassy or Consulate. The team guides you through document checks, appointment booking and arrival logistics.",
  },
  {
    q: "Is the program taught in English?",
    a: "Yes. Instruction, clinical training and assessment are delivered fully in English on the AI-supported academic platform developed with Sri Sri University.",
  },
  {
    q: "How many clinical / patient hours are included?",
    a: "The Masters fellowship is clinically intensive — students complete supervised clinical hours across Dr Spine® internship hubs in India through the second half of the program, well above the minimums required by international chiropractic accrediting bodies.",
  },
  {
    q: `Where do graduates practice and how do I get licensed back home?`,
    a: `Graduates are equipped to practice as Doctors of Chiropractic and to teach as faculty. Licensing in ${c.name} follows your national health-professional registration route — our advisor maps the exact post-graduation pathway with you as part of admissions.`,
  },
];

export const COUNTRIES: Country[] = [
  // ---------- SRI LANKA ----------
  {
    slug: "sri-lanka",
    name: "Sri Lanka",
    demonym: "Sri Lankan",
    flag: "🇱🇰",
    currency: { code: "LKR", symbol: "Rs" },
    eligibility: {
      hook: "After G.C.E. Advanced Level (A/L)",
      detail:
        "Sri Lankan applicants who have completed G.C.E. A/Level — Biology Stream preferred — qualify for direct entry into the Masters Fellowship pathway. Mature applicants with a prior allied-health qualification are also reviewed.",
    },
    fees: {
      display: "From LKR 1,650,000 / year",
      note: "Indicative tuition in LKR. Includes academic, clinical and AI-platform access. Merit & need scholarships available.",
    },
    pathways: [
      "Doctor of Chiropractic — clinical practice in Sri Lanka and abroad",
      "Faculty Certification — eligible to teach in Indian, Sri Lankan and partner universities",
      "Pathway to Sri Lanka Medical / Allied Health Council registration (post-licensing)",
    ],
    visaSteps: [
      { t: "Receive conditional offer", d: "Submit application, transcripts and English proficiency proof. Offer issued within ~14 days." },
      { t: "Bonafide & financial proof", d: "CI® issues a Bonafide Certificate; arrange financial proof per Indian visa norms." },
      { t: "Apply at Indian High Commission, Colombo", d: "Book your Student Visa appointment; we provide the appointment-day checklist." },
      { t: "Arrival in Bangalore", d: "Airport pickup, onboarding week and orientation at CI® Bangalore." },
    ],
    reasons: [
      { t: "A short flight from Colombo", d: "Direct, low-cost daily flights to Bangalore. Familiar climate, food and culture for Sri Lankan students." },
      { t: "A/L eligibility — clean entry", d: "Designed for the Sri Lankan Biology Stream — no foundation year required for direct entrants." },
      { t: "English-medium throughout", d: "Lectures, labs, clinical rounds and assessments are fully in English." },
      { t: "Same-day WhatsApp advisor", d: "A dedicated Sri Lanka admissions advisor on WhatsApp during local hours." },
    ],
    testimonials: [
      {
        initials: "DP",
        name: "Dineshi Perera",
        role: "Prospective Cohort · Colombo",
        quote:
          "Being able to study chiropractic in English, close to home, and with proper clinical rotations — there's no comparable option for us in Colombo right now.",
      },
    ],
    conversionAngle:
      "Proximity, familiarity with Indian higher education, clean A/L eligibility and same-day WhatsApp advisor.",
    seo: {
      primaryKeyword: "study chiropractic in India for Sri Lankan students",
      h1: "Study Chiropractic in India for Sri Lankan Students",
      heroLead:
        "Chiropractic India® offers Sri Lankan students a 6-year Masters fellowship in chiropractic education, hosted at CI® Bangalore in partnership with Sri Sri University. The program is English-medium, clinically intensive, and opens with its inaugural August 2026 cohort — a short flight from Colombo.",
      metaTitle:
        "Study Chiropractic in India for Sri Lankan Students | Chiropractic India®",
      metaDescription:
        "A 6-year Masters fellowship for Sri Lankan students — English-medium, hands-on clinical training at CI Bangalore. August 2026 intake. Check eligibility & apply.",
      canonical: "https://chiropracticindia.com/college/sri-lanka",
      faq: SHARED_FAQ({ name: "Sri Lanka", demonym: "Sri Lankan", currency: { code: "LKR" } }),
    },
  },

  // ---------- PHILIPPINES ----------
  {
    slug: "philippines",
    name: "Philippines",
    demonym: "Filipino",
    flag: "🇵🇭",
    currency: { code: "PHP", symbol: "₱" },
    eligibility: {
      hook: "After Senior High School (Grade 12)",
      detail:
        "Filipino students who have completed Senior High School (Grade 12) — STEM or General Academic Strand — are eligible for direct entry into the Masters Fellowship. Allied-health graduates may apply for advanced standing.",
    },
    fees: {
      display: "From PHP 290,000 / year",
      note: "Indicative tuition in PHP. Includes academic, clinical and AI-platform access. Merit & need scholarships available.",
    },
    pathways: [
      "Doctor of Chiropractic — clinical practice in the Philippines and abroad",
      "Faculty Certification — eligible to teach in partner universities",
      "Pathway to PRC (Professional Regulation Commission) chiropractic licensing where applicable",
    ],
    visaSteps: [
      { t: "Receive conditional offer", d: "Submit application + transcripts. Offer issued within ~14 days." },
      { t: "Bonafide & financial proof", d: "CI® issues a Bonafide Certificate; arrange financial proof per Indian visa norms." },
      { t: "Apply at Embassy of India, Manila", d: "Book your Student Visa appointment; we share the appointment-day checklist." },
      { t: "Arrival in Bangalore", d: "Airport pickup, onboarding week and orientation at CI® Bangalore." },
    ],
    reasons: [
      { t: "English-medium · global recognition pathway", d: "All instruction in English; designed against international chiropractic education standards." },
      { t: "Senior High School direct entry", d: "Filipino STEM / GAS graduates enter directly into the Masters Fellowship." },
      { t: "Filipino cohort presence", d: "Inaugural August 2026 intake includes Filipino fellows — peer support from day one." },
      { t: "Lower total cost vs. North America / Australia", d: "Tuition and living costs in India are a fraction of comparable English-medium chiropractic programs." },
    ],
    testimonials: [
      {
        initials: "JR",
        name: "Joaquin Reyes",
        role: "Prospective Cohort · Cebu",
        quote:
          "The 6-year Masters Fellowship with proper clinical rotations is exactly what we lack in the Philippines. The English-medium delivery sealed the decision.",
      },
    ],
    conversionAngle:
      "English-medium instruction, Filipino testimonial above the fold, global recognition pathway up top.",
    seo: {
      primaryKeyword: "study chiropractic in India for Filipino students",
      h1: "Study Chiropractic in India for Filipino Students",
      heroLead:
        "Chiropractic India® offers Filipino students a 6-year Masters fellowship in chiropractic education, hosted at CI® Bangalore in partnership with Sri Sri University. The program is English-medium, clinically intensive, and opens with its inaugural August 2026 cohort.",
      metaTitle:
        "Study Chiropractic in India for Filipino Students | Chiropractic India®",
      metaDescription:
        "A 6-year Masters fellowship for Filipino students — English-medium, hands-on clinical training at CI Bangalore. August 2026 intake. Check eligibility & apply.",
      canonical: "https://chiropracticindia.com/college/philippines",
      faq: SHARED_FAQ({ name: "Philippines", demonym: "Filipino", currency: { code: "PHP" } }),
    },
  },

  // ---------- VIETNAM ----------
  {
    slug: "vietnam",
    name: "Vietnam",
    demonym: "Vietnamese",
    flag: "🇻🇳",
    currency: { code: "VND", symbol: "₫" },
    bilingualHero: "Du học ngành chiropractic tại Ấn Độ",
    eligibility: {
      hook: "After high school graduation (THPT)",
      detail:
        "Vietnamese students who have completed the National High School Graduation Examination (THPT) — Natural Sciences track preferred — are eligible for direct entry into the Masters Fellowship.",
    },
    fees: {
      display: "From VND 130,000,000 / year",
      note: "Indicative tuition in VND. Includes academic, clinical and AI-platform access. Need & merit scholarships available.",
    },
    pathways: [
      "Doctor of Chiropractic — clinical practice in Vietnam and across ASEAN",
      "Faculty Certification — eligible to teach in partner universities",
      "Pathway to Vietnam Ministry of Health practitioner registration (post-licensing)",
    ],
    visaSteps: [
      { t: "Receive conditional offer", d: "Submit application + transcripts. Offer issued within ~14 days." },
      { t: "Bonafide & financial proof", d: "CI® issues a Bonafide Certificate; arrange financial proof per Indian visa norms." },
      { t: "Apply at Embassy of India, Hanoi / CG Ho Chi Minh", d: "Book your Student Visa appointment; we share the appointment-day checklist in Vietnamese." },
      { t: "Arrival in Bangalore", d: "Airport pickup, onboarding week and orientation at CI® Bangalore." },
    ],
    reasons: [
      { t: "Affordable in VND", d: "Total program cost shown in VND. A fraction of comparable Western chiropractic programs." },
      { t: "Hỗ trợ song ngữ — bilingual support", d: "Vietnamese-speaking admissions advisor and bilingual FAQ for parents and applicants." },
      { t: "Parent reassurance built-in", d: "Dedicated parents' briefing call, transparent fee schedule and structured visa support." },
      { t: "ASEAN & global mobility", d: "Graduates are positioned for ASEAN practice and onward Faculty Certification." },
    ],
    testimonials: [
      {
        initials: "MA",
        name: "Minh Anh Nguyễn",
        role: "Prospective Cohort · Hanoi",
        quote:
          "The bilingual support and the clarity around fees and visa made the application feel approachable for our whole family.",
      },
    ],
    conversionAngle:
      "Bilingual hero + FAQ, total cost in VND, strong parent-reassurance content (parents co-decide), cost-conscious framing.",
    seo: {
      primaryKeyword: "study chiropractic in India for Vietnamese students",
      h1: "Study Chiropractic in India for Vietnamese Students",
      heroLead:
        "Chiropractic India® offers Vietnamese students a 6-year Masters fellowship in chiropractic education, hosted at CI® Bangalore in partnership with Sri Sri University. English-medium, affordable, and with full bilingual visa and admissions support. Inaugural August 2026 intake.",
      metaTitle:
        "Study Chiropractic in India for Vietnamese Students | Chiropractic India®",
      metaDescription:
        "A 6-year Masters fellowship for Vietnamese students — English-medium, affordable, with full visa and admissions support. August 2026 intake. Fees in VND.",
      canonical: "https://chiropracticindia.com/college/vietnam",
      faq: SHARED_FAQ({ name: "Vietnam", demonym: "Vietnamese", currency: { code: "VND" } }),
    },
  },

  // ---------- CAMBODIA ----------
  {
    slug: "cambodia",
    name: "Cambodia",
    demonym: "Cambodian",
    flag: "🇰🇭",
    currency: { code: "KHR · USD", symbol: "៛" },
    eligibility: {
      hook: "After Baccalaureate (Bac II)",
      detail:
        "Cambodian students who have completed the Baccalaureate (Bac II) — Science series preferred — are eligible for direct entry into the Masters Fellowship pathway.",
    },
    fees: {
      display: "From USD 3,200 / year (also shown in KHR)",
      note: "USD widely used; KHR equivalent shown on request. Tuition includes academic, clinical and AI-platform access. Scholarships available.",
    },
    pathways: [
      "Doctor of Chiropractic — clinical practice in Cambodia and across ASEAN",
      "Faculty Certification — eligible to teach in partner universities",
      "Pathway to Cambodia Ministry of Health practitioner registration (post-licensing)",
    ],
    visaSteps: [
      { t: "Receive conditional offer", d: "Submit application + Bac II transcripts. Offer issued within ~14 days." },
      { t: "Bonafide & financial proof", d: "CI® issues a Bonafide Certificate; arrange financial proof per Indian visa norms." },
      { t: "Apply at Embassy of India, Phnom Penh", d: "Book your Student Visa appointment; we share the appointment-day checklist." },
      { t: "Arrival in Bangalore", d: "Airport pickup, onboarding week and orientation at CI® Bangalore." },
    ],
    reasons: [
      { t: "Affordability front and centre", d: "Lower-cost English-medium chiropractic education than any comparable Western pathway." },
      { t: "Scholarships for Cambodian students", d: "Need and merit scholarships ring-fenced for the inaugural Cambodian cohort." },
      { t: "Visually simplified application", d: "Short, multi-step lead form; document checklist sent the same day." },
      { t: "Visa-support reassurance", d: "Step-by-step guidance with the Indian Embassy in Phnom Penh." },
    ],
    testimonials: [
      {
        initials: "SL",
        name: "Sokha Lim",
        role: "Prospective Cohort · Phnom Penh",
        quote:
          "Clear pricing in USD and a named scholarship for Cambodian applicants — it removed every doubt I had.",
      },
    ],
    conversionAngle:
      "Affordability + scholarships front and centre, visually simplified process, strong visa-support reassurance.",
    seo: {
      primaryKeyword: "study chiropractic in India for Cambodian students",
      h1: "Study Chiropractic in India for Cambodian Students",
      heroLead:
        "Chiropractic India® offers Cambodian students a 6-year Masters fellowship in chiropractic education, hosted at CI® Bangalore in partnership with Sri Sri University. English-medium, affordable, with scholarship and visa support. Inaugural August 2026 intake.",
      metaTitle:
        "Study Chiropractic in India for Cambodian Students | Chiropractic India®",
      metaDescription:
        "A 6-year Masters fellowship for Cambodian students — English-medium, affordable, with scholarship and visa support. August 2026 intake. Check eligibility & apply.",
      canonical: "https://chiropracticindia.com/college/cambodia",
      faq: SHARED_FAQ({ name: "Cambodia", demonym: "Cambodian", currency: { code: "USD" } }),
    },
  },

  // ---------- ETHIOPIA ----------
  {
    slug: "ethiopia",
    name: "Ethiopia",
    demonym: "Ethiopian",
    flag: "🇪🇹",
    currency: { code: "ETB", symbol: "Br" },
    eligibility: {
      hook: "After Grade 12 / Ethiopian Higher Education Entrance Exam",
      detail:
        "Ethiopian students who have completed Grade 12 and the Ethiopian Higher Education Entrance Exam (EHEEE) — Natural Science stream preferred — are eligible for direct entry.",
    },
    fees: {
      display: "From ETB 195,000 / year",
      note: "Indicative tuition in ETB. Includes academic, clinical and AI-platform access. Scholarships available for Ethiopian applicants.",
    },
    pathways: [
      "Doctor of Chiropractic — clinical practice in Ethiopia and across East Africa",
      "Faculty Certification — eligible to teach in partner universities and seed African chiropractic colleges",
      "Pathway to Ethiopian Food and Drug Authority practitioner registration (post-licensing)",
    ],
    visaSteps: [
      { t: "Receive conditional offer", d: "Submit application + transcripts. Offer issued within ~14 days." },
      { t: "Bonafide & financial proof", d: "CI® issues a Bonafide Certificate; arrange financial proof per Indian visa norms." },
      { t: "Apply at Embassy of India, Addis Ababa", d: "Book your Student Visa appointment; we share the appointment-day checklist." },
      { t: "Arrival in Bangalore", d: "Airport pickup, onboarding week and orientation at CI® Bangalore." },
    ],
    reasons: [
      { t: "Affordability + ring-fenced scholarships", d: "Need and merit scholarships ring-fenced for the inaugural Ethiopian cohort." },
      { t: "English-medium reassurance", d: "All instruction, clinical training and assessment in English." },
      { t: "Step-by-step embassy guidance", d: "Clear visa support with the Indian Embassy in Addis Ababa." },
      { t: "Africa-facing career pathway", d: "Graduates seed chiropractic colleges across East Africa — a true career-and-impact pathway." },
    ],
    testimonials: [
      {
        initials: "AT",
        name: "Abeba Tesfaye",
        role: "Prospective Cohort · Addis Ababa",
        quote:
          "A scholarship pathway for Ethiopian students, English-medium and a clear embassy process — this is the right next step for me.",
      },
    ],
    conversionAngle:
      "Affordability + scholarships front and centre, English-medium reassurance, step-by-step process with embassy guidance.",
    seo: {
      primaryKeyword: "study chiropractic in India for Ethiopian students",
      h1: "Study Chiropractic in India for Ethiopian Students",
      heroLead:
        "Chiropractic India® offers Ethiopian students a 6-year Masters fellowship in chiropractic education, hosted at CI® Bangalore in partnership with Sri Sri University. English-medium, affordable, with scholarship and embassy support. Inaugural August 2026 intake.",
      metaTitle:
        "Study Chiropractic in India for Ethiopian Students | Chiropractic India®",
      metaDescription:
        "A 6-year Masters fellowship for Ethiopian students — English-medium, affordable, with scholarship and visa support. August 2026 intake. Check eligibility & apply.",
      canonical: "https://chiropracticindia.com/college/ethiopia",
      faq: SHARED_FAQ({ name: "Ethiopia", demonym: "Ethiopian", currency: { code: "ETB" } }),
    },
  },
];

export const getCountry = (slug: string): Country | undefined =>
  COUNTRIES.find((c) => c.slug === slug);
