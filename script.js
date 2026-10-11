const catalogue = [
  {id:1,title:"Power Exchange & Authority",classification:"Interpersonal Dynamic",items:[
    "Dominance and submission","Formal power-exchange agreements","Structured obedience","Verbal commands and instructions","Rules, protocols, and rituals","Titles and forms of address","Service-oriented submission","Role-based authority","Negotiated authority transfer","Dominant-led scene structure","Switch dynamics","Long-term D/s arrangements"]},
  {id:2,title:"Restraint & Physical Control",classification:"Restriction of Movement",items:[
    "Wrist and ankle restraints","Cuffs and restraint accessories","Consensual immobilisation","Restrained positioning","Furniture-based restraint","Rope bondage","Decorative rope bondage","Predetermined restraint sequences","Supervised restraint scenes","Negotiated release protocols"]},
  {id:3,title:"Sensation & Intensity",classification:"Sensory Experience",items:[
    "Blindfolds and visual restriction","Sound and sensory atmosphere","Temperature play with appropriate safeguards","Texture-based sensation","Light touch and teasing","Contrasting sensations","Anticipation and delayed gratification","Pacing and intensity variation","Immersive environmental play","Planned pauses and check-ins"]},
  {id:4,title:"Impact Play & Physical Sensation",classification:"Negotiated Physical Sensation",items:[
    "Spanking","Paddles and impact implements","Flogging with appropriate implements","Open-hand impact play","Light-to-firm impact variation","Impact-play role scenarios","Clearly designated no-impact areas","Pre-agreed intensity limits","Regular physical and verbal check-ins"]},
  {id:5,title:"Humiliation, Praise & Psychological Dynamics",classification:"Emotional and Role-Based Play",items:[
    "Consensual verbal humiliation","Negotiated degradation role-play","Praise and approval","Praise-and-discipline contrasts","Strict performance expectations","Ritualised inspection scenarios","Formal correction and instruction","Pet names and negotiated titles","Objectification role-play with explicit boundaries","Psychological power-exchange scenarios","Reassurance and de-roling after a scene"]},
  {id:6,title:"Role-play & Scenario Design",classification:"Fictional Roles and Structured Encounters",items:[
    "Strict authority figure and subordinate","Formal interview or evaluation scenario","Protocol-based service role","Negotiated discipline scenario","Luxury and exclusivity role-play","Uniforms and costume elements","Scripted dialogue","Improvised dialogue within agreed limits","Predefined beginning and ending rituals","Character-based power exchange"]},
  {id:7,title:"Fetish & Wardrobe Preferences",classification:"Clothing, Materials, and Aesthetics",items:[
    "Leather clothing and accessories","Latex and rubber garments","Harnesses and body accessories","Boots and footwear","Gloves and formal attire","Masks and anonymity aesthetics","Uniform-inspired clothing","Lingerie and fetishwear","Specific colour palettes or materials","Client-supplied wardrobe items, subject to review"]},
  {id:8,title:"Service, Ritual & Protocol",classification:"Structured Interaction",items:[
    "Kneeling and formal greetings","Permission-based routines","Serving rituals","Posture and presentation protocols","Formal address requirements","Scheduled instruction periods","Task-based role-play","Rules of conduct during a scene","Opening and closing ceremonies","Written scene plans","Negotiated rewards and privileges"]},
  {id:9,title:"Intimacy & Sexual Boundaries",classification:"Private Preferences Requiring Individual Consultation",items:[
    "Sensual touch","Kissing and affectionate contact","Erotic role-play","Nudity preferences","Sexual activity preferences to be discussed privately","Condom and barrier preferences, where applicable","Explicitly excluded activities","Activities requiring additional discussion","No-contact or nonsexual scene preference"],note:"Selection of an intimacy-related preference does not imply consent to sexual contact or any other specific activity."},
  {id:10,title:"Intensity & Session Parameters",classification:"Preferred starting point; final arrangements require consultation",items:[
    "Level I: Gentle exploration","Level II: Moderate intensity","Level III: Firm, structured scene","Level IV: High psychological intensity","Level V: Individually negotiated advanced scene"],note:"Intensity labels describe preferences and do not constitute safety certifications or authorise specific activities.",extra:"Pacing preference",extraItems:["Slow and gradual","Structured and deliberate","Variable according to agreed parameters","To be determined during consultation"]},
  {id:11,title:"Limits & Aftercare",classification:"Boundaries, stop signals, comfort and follow-up",items:[
    "Hard limits to be documented in consultation","Conditional interests requiring separate agreement","Agreed safe word and nonverbal stop signal","Permission to pause or terminate at any time","Water and physical comfort after the session","Quiet time and privacy","Verbal reassurance, if requested","Post-session discussion, if welcomed","Follow-up communication preferences"],extra:"Preferred follow-up communication",extraItems:["No follow-up unless administratively necessary","Brief professional check-in","Follow-up discussion by appointment","To be discussed during consultation"]},
  {id:12,title:"Client Declaration",classification:"Acknowledgement",items:[
    "I understand that preferences are for discussion only","I understand that either party may decline or stop","I understand that submission does not guarantee an appointment"]}
];

const catalogueRoot = document.getElementById("catalogue");
catalogue.forEach(section => {
  const details = document.createElement("details");
  details.className = "catalogue-card";
  if (section.id === 1) details.open = true;
  const summary = document.createElement("summary");
  summary.innerHTML = `<span class="num">${String(section.id).padStart(2,"0")}</span><span><strong>${section.title}</strong><small>${section.classification}</small></span><span class="plus">＋</span>`;
  details.appendChild(summary);
  const content = document.createElement("div");
  content.className = "catalogue-content";
  const list = document.createElement("div");
  list.className = "preference-list";
  section.items.forEach((item, i) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.name = `preferences_${String(section.id).padStart(2,"0")}`;
    input.value = item;
    label.append(input, document.createTextNode(item));
    list.appendChild(label);
  });
  content.appendChild(list);
  if (section.extraItems) {
    const extraLabel = document.createElement("label");
    extraLabel.className = "catalogue-notes";
    extraLabel.append(document.createTextNode(section.extra));
    const select = document.createElement("select");
    select.name = `extra_${section.id}`;
    const blank = document.createElement("option");
    blank.value = ""; blank.textContent = "Select preference";
    select.appendChild(blank);
    section.extraItems.forEach(item => { const option = document.createElement("option"); option.textContent = item; option.value = item; select.appendChild(option); });
    extraLabel.appendChild(select);
    content.appendChild(extraLabel);
  }
  if (section.note) {
    const note = document.createElement("p");
    note.className = "catalogue-note";
    note.style.cssText = "font-size:10px;color:#66645d;margin:0 0 14px";
    note.textContent = section.note;
    content.appendChild(note);
  }
  const notesLabel = document.createElement("label");
  notesLabel.className = "catalogue-notes";
  notesLabel.append(document.createTextNode(section.id === 11 ? "Hard limits, conditional interests, and aftercare notes" : section.id === 9 ? "Exclusions or activities requiring additional discussion" : "Additional notes or preferences"));
  const textarea = document.createElement("textarea");
  textarea.name = `notes_${String(section.id).padStart(2,"0")}`;
  textarea.rows = 2;
  textarea.placeholder = "Optional — add context for the consultation";
  notesLabel.appendChild(textarea);
  content.appendChild(notesLabel);
  details.appendChild(content);
  catalogueRoot.appendChild(details);
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.querySelector("span").textContent = open ? "−" : "＋";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.querySelector("span").textContent = "＋";
}));

const form = document.getElementById("client-form");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
function updateProgress() {
  const required = [...form.querySelectorAll("[required]")];
  const completed = required.filter(el => el.type === "checkbox" ? el.checked : String(el.value).trim() !== "").length;
  const percent = required.length ? Math.round(completed / required.length * 100) : 0;
  progressBar.style.width = `${percent}%`;
  progressText.textContent = `${percent}%`;
}
form.addEventListener("input", updateProgress);
form.addEventListener("change", updateProgress);
form.addEventListener("reset", () => setTimeout(updateProgress, 0));

const modal = document.getElementById("confirmation-modal");
function closeModal() { modal.hidden = true; document.body.style.overflow = ""; }
document.getElementById("close-modal").addEventListener("click", closeModal);
document.getElementById("done-modal").addEventListener("click", closeModal);
modal.addEventListener("click", event => { if (event.target === modal) closeModal(); });
document.addEventListener("keydown", event => { if (event.key === "Escape" && !modal.hidden) closeModal(); });

form.addEventListener("submit", event => {
  event.preventDefault();
  const age = Number(form.elements.age.value);
  if (age < 18) {
    form.elements.age.setCustomValidity("Applicants must be at least 18 years old.");
    form.elements.age.reportValidity();
    form.elements.age.setCustomValidity("");
    return;
  }
  if (form.elements.signatureName.value.trim().toLowerCase() !== form.elements.legalName.value.trim().toLowerCase() &&
      !form.elements.preferredName.value.trim()) {
    // Signature can differ from legal name, so do not block submission; this is only a local demo.
  }
  const ref = `BI-2026-${Math.random().toString(36).slice(2,8).toUpperCase()}`;
  document.getElementById("application-ref").textContent = ref;
  document.getElementById("confirmation-copy").textContent = "The form passed the browser's required-field checks. This is a local demonstration only; no application was transmitted or stored.";
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("close-modal").focus();
});

updateProgress();
