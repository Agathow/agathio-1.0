
/* ===== EDIT YOUR CONTENT HERE ===== */
const LINKS={email:'mailto:fideliobagasprakoso@gmail.com',linkedin:'https://www.linkedin.com/in/fidelio-bagas-prakoso/',github:'https://github.com/your-username',instagram:'https://instagram.com/fideliobagas'};
const NAV=['Home','About','Expertise','Experience','Projects','Achievements','Contact'];
const EXPERTISE=[['bar_chart','Business Intelligence','Turning business questions into dashboards and KPIs people can act on.'],['analytics','Data Analytics','Exploring and cleaning data to find the patterns that matter.'],['pie_chart','Data Visualization','Clear charts, maps and stories built in Power BI, Tableau and Looker Studio.'],['database','Database Management','Designing and querying relational data with SQL, MySQL and Oracle.'],['draw','UI/UX Design','Mobile and web interfaces designed and prototyped in Figma.'],['code','Web Development','Responsive front ends and PHP-based web applications.']];
const TBA='Dates to be added';
const EXPERIENCE={'Experience':[{org:'BINUS University',logo:'images/logo/logo-binus.png',logo:'images/logo/logo-binus.png',role:'Scholarship Mentor',period:'Sep 2025 – Present',start:'2025-09',active:true,text:'Mentoring students through academic and personal guidance, helping them overcome learning challenges, improve study habits, and build self-confidence.'},{org:'Motion Production 28',logo:'images/logo/motion28.jpeg',logo:'images/logo/motion28.jpeg',period:'May 2024 – Jun 2026',start:'2024-05',end:'2026-06',roles:[
 {role:'Broadcaster',period:'May 2024 – Jun 2026',start:'2024-05',end:'2026-06',text:'As a broadcaster, I was responsible for live-streaming designs and outputs for onsite and online events. I managed the real-time visual flow by combining camera feeds with additional visual elements based on the event requirements.'},
 {role:'Camera Person',period:'May 2024 – Dec 2025',start:'2024-05',end:'2025-12',text:"As a camera person, I captured video footage for live event production, coordinating with the director’s instructions and ensuring the camera output was ready for the broadcast."}
]}],
'Education':[
    {org:'BINUS University',logo:'images/logo/logo-binus.png', role:"Bachelor's Degree in Information Systems",period:'Sep 2024 – Jul 2028',start:'2024-09',active:true},
    {org:'SMA Mardi Yuana Depok',logo:'images/logo/mardi-yuana.jpeg',role:'Social Sciences',period:'Jun 2021 – Jun 2024', end:'2024-06'}
    ],
'Volunteering & Organization':[
 {org:'Komsos Santo Paulus Depok',logo:'images/logo/logo-komsos.png',category:'Religious Organization',period:'Mar 2023 – Present',roles:[
  {role:'Coordinator of Multimedia',period:'Jan 2026 – Present',start:'2026-01',active:true,text:'Ensuring multimedia operations run smoothly and preparing the materials required for church activities.'},
  {role:'Broadcaster',period:'Mar 2023 – Jan 2026',start:'2023-03',end:'2026-01',text:'Supported religious activities and virtual live-streaming broadcasts on YouTube.',photos:['images/photo-project/komsos1.jpeg','images/photo-project/komsos2.jpeg']}
 ]},
 {org:'Teach for Indonesia',logo:'images/logo/download.png',category:'Education Volunteer',period:'Sep 2025 – Oct 2025',start:'2025-09',end:'2025-10',roles:[
  {role:'Fun Learning Volunteer',period:'Sep 2025 – Oct 2025',start:'2025-09',end:'2025-10',text:'Participated in a five-week teaching project for early childhood students.',photos:['images/photo-project/tfi 1.jpeg','images/photo-project/tfi2.jpeg']}
 ]},
 {org:'OSIS SMA Mardi Yuana Depok',logo:'images/logo/mardi-yuana.jpeg',category:'Student Council (Scomara)',period:'Feb 2023 – Oct 2023',start:'2023-02',end:'2023-10',roles:[
  {role:'Divisi Bela Negara',period:'Feb 2023 – Oct 2023',start:'2023-02',end:'2023-10',text:'Responsible for national day school events to boost student nationalism.',photos:['images/photo-project/scomara1.jpeg','images/photo-project/scomara2.jpeg']}
 ]},
 {org:'Sahabat Misdinar Indonesia',logo:'images/logo/smi-logo.jpeg',category:'National Community',period:'Apr 2021 – Jul 2023',start:'2021-04',end:'2023-07',roles:[
  {role:'Founder & Head of Digital Media',period:'Apr 2021 – Jul 2023',start:'2021-04',end:'2023-07',text:'Creating broadcast materials and covering national religious activities.',photos:['images/photo-project/smi1.jpeg','images/photo-project/smi2.jpeg']}
 ]}
]};

const PROJECTS = [
    {
    category: 'Web Development',
    title: 'SIGAP - Layanan Publik, Lebih Siap untuk Kamu',
    highlight: 'Silver Medal',
    icon: 'Computer',

    image: 'images/projects/sigap.png',
    prototype: 'https://sigap.free.nf/SIGAP/public/',

    tagline: 'Making public services more transparent and accountable.',
    role: 'Full Stack Developer',
    timeline: 'Oct 2026',

    tools: [
        'PHP',
        'MySQL',
        'JavaScript',
        'HTML',
        'CSS',
        'Figma'
    ],

    description: 'A public service transparency platform designed to help citizens access official service information, report suspected illegal fees, and monitor the progress of their reports.',

    overview: 'SIGAP (Sistem Informasi Gerakan Integritas Pelayanan Publik) is a digital platform that aims to improve transparency and accountability in public services. It provides citizens with access to official service information, fee verification, and a reporting system for suspected illegal charges. Through its integrated features, SIGAP encourages public participation while supporting more transparent public service monitoring.',

    challenge: {
        text: 'Public service users may face difficulties accessing accurate service information, identifying unofficial charges, and monitoring the progress of their complaints.',
        points: [
            'Limited access to transparent and standardized public service fee information.',
            'Difficulty reporting suspected illegal charges safely and conveniently.',
            'Lack of accessible mechanisms for tracking complaint progress.'
        ],
        after: 'These challenges became the foundation for developing SIGAP as an integrated public service transparency platform.'
    },

    solution: {
        text: 'SIGAP brings essential public service information and reporting capabilities into one accessible digital platform.',
        points: [
            'Public Service Directory: Provides service information, official fees, requirements, and estimated processing times.',
            'Fee Verification: Helps citizens compare requested payments with official service fees.',
            'Anonymous Reporting: Allows citizens to submit suspected illegal fee reports using a Report ID and Access Code.',
            'Report Tracking: Enables users to monitor report progress without requiring an account.',
            'Admin Dashboard: Supports report management, service information management, and monitoring insights.'
        ],
        after: 'The project received a Silver Medal recognition in a Web Development competition.'
    }
    },
    {
        category: 'Data Visualization',
        title: 'INDEEP Dashboard',
        highlight: 'Gold Medal',
        icon: 'analytics',

        fullName: 'Indonesia Economic Disparity Explorer',
        tagline: 'A Policy Intelligence Platform for Targeted and Inclusive Rural-Urban Development.',
        role: 'Data Analyst & Design Systems',
        timeline: 'Nov – Dec 2025',

        tools: [
            'Figma',
            'Google Sheets',
            'Looker Studio',
            'Google Colab'
        ],

        image: 'images/projects/Indeep.png',
        prototype: 'https://s.id/DashboardINDEEPVermakData',

        description: 'Transforming complex socio-economic data into interactive visual insights to reveal poverty and inequality patterns across Indonesia.',

        challenge: {
            text: 'Understanding poverty and inequality in Indonesia is not just about numbers. The main challenge was fragmented socio-economic data spread across raw tables and reports, making it difficult to:',
            points: [
                'Identify rural–urban inequality patterns.',
                'Compare regions across time and geography.',
                'Translate complex data into clear, actionable insights.'
            ],
            after: 'Without proper visualization, important trends remained hidden and difficult to communicate to decision-makers and the public.'
        },

        solution: {
            text: 'INDEEP was designed as a geographic-first interactive dashboard that transforms raw BPS Susenas data (2019–2024) into intuitive visual insights. Key solutions include:',
            points: [
                'Interactive maps to explore poverty and inequality by region.',
                'Trend charts to track changes over time.',
                'Drill-down views from national to provincial levels.'
            ],
            after: 'This approach allows users to move seamlessly from high-level patterns to regional insights, making complex socio-economic data easier to understand and discuss.'
        }
    },

    {
        category: 'UI/UX Design',
        title: 'EcoFit Mobile Apps',
        highlight: 'Best UX',
        icon: 'Apparel',

        image: 'images/projects/EcoFit Mobile Apps.png',
        prototype: 'https://www.figma.com/proto/pNoDCYVkCVcwaCrYpTzBCK/EcoFit-Mobile?page-id=0:1&node-id=399-1710&viewport=500,191,0.19&t=Ajc28sNUEGaOvHJr-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1:2',

        tagline: 'Sustainable fashion, made more discoverable.',
        role: 'UI/UX Design',
        timeline: 'Oct 2025',

        tools: [
            'Figma'
        ],

        description: 'A sustainable fashion application for discovering recycled and pre-loved clothing while inspiring eco-conscious style.',

        overview: 'EcoFit explores how a digital product can make sustainable fashion feel more approachable for everyday users. The experience focuses on discovering recycled and pre-loved clothing while encouraging more conscious style choices.',

        challenge: {
            text: 'The design challenge is to make sustainable fashion discovery clear, appealing, and easy to explore without overwhelming users with information.',
            points: [
                'Help users discover recycled and pre-loved fashion options.',
                'Present sustainable choices in an approachable digital experience.',
                'Encourage eco-conscious style through a considered user experience.'
            ],
            after: 'The project received a Best UX highlight.'
        },

        solution: {
            text: 'EcoFit frames sustainable fashion discovery as a focused mobile experience.',
            points: [
                'A discovery-led experience for recycled and pre-loved clothing.',
                'Visual presentation that supports browsing and product exploration.',
                'A user experience centered on sustainable style choices.'
            ],
            after: 'Detailed screens, research findings, and prototype interactions can be added to the case study when the final project materials are available.'
        }
    },

    {
        category: 'UI/UX Design',
        title: 'MetroMind Mobile Apps',
        icon: 'directions_transit',

        image: 'images/projects/MetromInd.png',
        prototype: 'https://bit.ly/MetroMindMobile',

        tagline: 'One connected experience for urban mobility.',
        role: 'UI/UX Design',
        timeline: 'To be added',

        tools: [
            'Figma'
        ],

        description: 'Designing an integrated urban mobility experience to help users navigate public transport more efficiently.',

        overview: 'MetroMind is an integrated mobility concept that brings public transportation options—including buses, trains, and angkot—into a more connected user experience.',

        challenge: {
            text: 'The project focuses on simplifying the experience of navigating different public transportation modes.',
            points: [
                'Bring multiple transport modes into one experience.',
                'Make it easier to understand and navigate public transport options.',
                'Support a more connected urban mobility journey.'
            ],
            after: 'Specific user research findings and validated pain points can be added when the project documentation is available.'
        },

        solution: {
            text: 'MetroMind proposes an integrated mobile experience for public transport navigation.',
            points: [
                'A unified starting point for bus, train, and angkot information.',
                'A clearer journey-planning experience across transport modes.',
                'An interface designed around everyday urban mobility needs.'
            ],
            after: 'Detailed prototype flows and final feature specifications can be added from the project prototype.'
        }
    },

    {
        category: 'UI/UX Design',
        title: 'Sentrika Mobile Apps',
        icon: 'medical_services',

        image: 'images/projects/Sentrika Mobile Apps.png',
        prototype: 'https://www.figma.com/proto/rcmxKJQeowW9RvQ6ZyR4af/Lomba-UI%2FUX?page-id=0:1&node-id=121-28&viewport=-1074,-263,0.24&t=76gVFzJxAJdJqL5J-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=42:36',

        tagline: 'Making healthcare services easier to navigate.',
        role: 'UI/UX Design',
        timeline: 'To be added',

        tools: [
            'Figma'
        ],

        description: 'A user-friendly health application designed to make medical services more accessible and easier to navigate.',

        overview: 'Sentrika is a health application concept focused on making access to medical services feel more straightforward and approachable.',

        challenge: {
            text: 'The project centers on reducing friction when users navigate health-related services and information.',
            points: [
                'Make medical services easier to find and understand.',
                'Create a user-friendly experience for navigating healthcare needs.',
                'Keep the interface approachable and easy to use.'
            ],
            after: 'Specific research findings and user pain points should be added from the original project documentation.'
        },

        solution: {
            text: 'Sentrika uses a clear mobile application experience to make medical services more accessible.',
            points: [
                'A straightforward service-discovery experience.',
                'Clear information hierarchy and navigation.',
                'A user-friendly interface for healthcare-related tasks.'
            ],
            after: 'Detailed feature descriptions and prototype flows can be added when the project screens are supplied.'
        }
    },

    {
        category: 'UI/UX Design',
        title: 'BINUS Square Mobile',
        icon: 'apartment',

        tagline: 'Smart Living for BINUS Students.',
        role: 'UI/UX Design',
        timeline: 'Sep – Dec 2024',

        tools: [
            'Figma'
        ],

        image: 'images/projects/BINUS SQUARE.png',
        prototype: 'https://bit.ly/BSQPrototype',

        description: 'Designing a centralized campus living application that brings housing information, essential services, and student engagement into one seamless experience.',

        challenge: {
            text: 'Student housing residents often rely on multiple channels to access information, services, and announcements within their living environment. Common challenges include:',
            points: [
                'Scattered information across chat groups, notice boards, and websites.',
                'Difficulty accessing housing services quickly.',
                'Limited engagement between residents and housing management.'
            ],
            after: 'This fragmentation makes daily campus living less efficient and harder to manage.'
        },

        solution: {
            text: 'BINUS Square Mobile was designed as a centralized campus living app that connects residents with essential housing information and services in one streamlined experience. Key solutions include:',
            points: [
                'Central access to announcements, services, and housing information.',
                'Simple navigation tailored to student needs.',
                'A clean interface that supports communication and engagement.'
            ],
            after: 'By unifying campus living features into one platform, the app helps students manage daily activities more efficiently and stay connected to their community.'
        }
    }
];

const ACHIEVEMENTS = [
    {
        title: 'Silver Medal — IT FEST UMK 2026',
        issuer: 'Web Development',
        year: '2026',
        text: 'Awarded Silver Medal for developing SIGAP, a public service transparency platform.',
        icon: 'Counter_2'
    },
    {
        title: 'Gold Medal — Data Slayer 3.0',
        issuer: 'Dashboard Analytics Competition',
        year: '2025',
        text: 'First place in the Dashboard Analytics Competition at Data Slayer 3.0.',
        icon: 'workspace_premium'
    },
    {
        title: 'The Best User Experience',
        issuer: 'IEEE UI/UX Competition',
        year: '2025',
        text: 'Recognized for the Best User Experience in the national UI/UX competition.',
        icon: 'Mobile'
    },
    {
        title: 'BINUS SASC Mentor Scholarship',
        issuer: 'BINUS University',
        year: '2025-2026',
        text: 'Recipient of the BINUS University Scholarship through the Scholarship Mentor program.',
        icon: 'school'
    }
];


const CERTIFICATES=[
 {title:'Silver Medal - IT FEST UMK 2026',issuer:'IT FEST 2026 · Universitas Muria Kudus',year:'2026',image:'images/certificates/sigapweb.png '},
 {title:'Gold Medal - Data Slayer 3.0',issuer:'Data Slayer 3.0 · Telkom University Purwokerto',year:'2025',image:'images/certificates/indeep.png'},
 {title:'The Best User Experience — UI/UX Competition',issuer:'IEEE Indonesia Section · Universitas Brawijaya',year:'2025',image:'images/certificates/thebestuxieee25.jpg'},
 {title:'Certificate of Achievement — SASC Mentoring',issuer:'BINUS University',year:'2026',image:'images/certificates/mentor period 1.jpeg'},
 {title:'Applied Database Systems using Oracle AI Database',issuer:'Oracle Academy',year:'2026',image:'images/certificates/Oracle-Award of Completion.png'},
 {title:'Certificate of Appreciation — Digital Media',issuer:'Sahabat Misdinar Indonesia',year:'2023',image:'images/certificates/smi.png'},
 {title:'Certificate of Achievement — VMIX Operations Training',issuer:'Komsos Paroki Santo Paulus Depok',year:'2023',image:'images/certificates/komsos.jpeg'}
 ];
/* ===== END CONTENT ===== */

const $=s=>document.querySelector(s),id=l=>l.toLowerCase(),esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const list=a=>`<ul>${a.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`;
// nav
const navHTML=NAV.map(l=>`<a href="#${id(l)}">${l}</a>`).join('');
$('#links').innerHTML=navHTML;$('#drawer').innerHTML=navHTML+'<a class="btn primary" href="cv/Fidelio_Bagas_Prakoso_CV.pdf" download>Download CV</a>';
$('#burger').onclick=()=>{const o=$('#drawer').classList.toggle('open');$('#burger').setAttribute('aria-expanded',o)};
$('#drawer').onclick=e=>e.target.closest('a')&&$('#drawer').classList.remove('open');
const secs=NAV.map(l=>$('#'+id(l)));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)document.querySelectorAll('.links a,.drawer a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
secs.forEach(s=>io.observe(s));
addEventListener('scroll',()=>$('#nav').classList.toggle('scrolled',scrollY>20),{passive:true});
// theme
const setIco=()=>$('#themeIco').textContent=document.documentElement.dataset.theme==='dark'?'light_mode':'dark_mode';setIco();
$('#theme').onclick=()=>{const t=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=t;try{localStorage.setItem('theme',t)}catch(e){}setIco()};
// hero headline
$('#h1').innerHTML="Hi, I'm Fidelio Bagas Prakoso.".split(' ').map((w,i)=>`<span class="mask"><span style="animation-delay:${.15+i*.09}s">${w}&nbsp;</span></span>`).join('');
// Portrait card: subtle 3D tilt on pointer movement, leaning back on hover.
const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
const heroVisual=$('#heroVisual'),profileCard=$('#profileCard');
if(heroVisual && profileCard && !rm){
 heroVisual.addEventListener('pointermove',e=>{
  if(e.pointerType==='touch')return;
  const r=profileCard.getBoundingClientRect();
  const x=(e.clientX-r.left)/r.width*2-1;
  const y=(e.clientY-r.top)/r.height*2-1;
  const rotateY=Math.max(-8,Math.min(8,x*7));
  const rotateX=Math.max(-7,Math.min(7,-y*6));
  profileCard.style.transform=`perspective(1100px) rotateX(${rotateX+5}deg) rotateY(${rotateY}deg) translateZ(-18px) scale(.975)`;
 });
 heroVisual.addEventListener('pointerleave',()=>{
  profileCard.style.transform='';
 });
}
// links
$('#liA').href=LINKS.linkedin;$('#igA').href=LINKS.instagram;$('#yr').textContent=new Date().getFullYear();
// expertise
$('#exp').innerHTML=EXPERTISE.map(([i,t,d])=>`<div class="card rv"><span class="ico"><span class="material-symbols-outlined">${i}</span></span><h3>${t}</h3><p class="muted">${d}</p></div>`).join('');
// experience tabs
const tabs=Object.keys(EXPERIENCE);let activeTab=tabs[0];
function monthIndex(ym){const [y,m]=ym.split('-').map(Number);return y*12+(m-1)}
function durationLabel(start,end=null){if(!start)return '';const now=new Date();const current=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}`;const total=Math.max(0,monthIndex(end||current)-monthIndex(start));const years=Math.floor(total/12),months=total%12;const bits=[];if(years)bits.push(`${years} yr${years>1?'s':''}`);if(months||!years)bits.push(`${months} mo${months===1?'':'s'}`);return bits.join(' ')}
function durationLabelInclusive(start,end){if(!start)return '';const total=Math.max(1,monthIndex(end)-monthIndex(start)+1);const years=Math.floor(total/12),months=total%12;const bits=[];if(years)bits.push(`${years} yr${years>1?'s':''}`);if(months||!years)bits.push(`${months} mo${months===1?'':'s'}`);return bits.join(' ')}
function roleMarkup(r){
 const active=!!r.active,completed=!!r.end;
 const duration=r.start?(completed?durationLabelInclusive(r.start,r.end):durationLabel(r.start)):'';
 const state=active?'Currently active':completed?'Completed':'Details pending';
 const cls=active?'active':completed?'completed':'pending';
 return `<li class="company-role ${cls}">
   <span class="role-dot"></span>
   <div class="role-heading">
     <h4>${esc(r.role||'Role')}</h4>
     <span class="role-period">${esc(r.period||TBA)}${duration?` · <b>${duration}</b>`:''}</span>
   </div>
   ${r.text?`<p>${esc(r.text)}</p>`:''}
   ${r.photos?.length?`<div class="role-gallery">${r.photos.map((src,i)=>`<img src="${esc(src)}" alt="${esc(r.role)} activity photo ${i+1}" loading="lazy">`).join('')}</div>`:''}
   <span class="role-state">${state}</span>
 </li>`;
}
function showTab(t){
 activeTab=t;
 $('#tabs').innerHTML=tabs.map(k=>`<button role="tab" aria-selected="${k===t}" class="${k===t?'on':''}" data-t="${esc(k)}">${esc(k)}</button>`).join('');
 const tl=$('#tl');
 tl.style.animation='none';tl.offsetHeight;tl.style.animation='';
 tl.innerHTML=EXPERIENCE[t].map(x=>{
   const roles=x.roles||[{role:x.role,period:x.period,start:x.start,end:x.end,active:x.active,text:x.text}];
   const groupStart=x.start||roles.map(r=>r.start).filter(Boolean).sort()[0];
   const groupEnd=x.end||roles.map(r=>r.end).filter(Boolean).sort().slice(-1)[0];
   const groupActive=!!x.active||roles.some(r=>r.active);
   const groupDuration=groupStart?(groupActive?durationLabel(groupStart):durationLabelInclusive(groupStart,groupEnd||groupStart)):'';
   const initials=x.org.split(/\s+/).slice(0,2).map(w=>w[0]).join('').toUpperCase();
   const logo=x.logo
     ? `<img src="${esc(x.logo)}" alt="${esc(x.org)} logo" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><span class="company-logo-fallback" style="display:none">${esc(initials)}</span>`
     : `<span class="company-logo-fallback">${esc(initials)}</span>`;
   const range=x.period||roles[0].period||TBA;
   return `<li class="company-item ${groupActive?'active':'completed'}">
     <span class="dot"></span>
     <div class="company-header">
       <div class="company-logo">${logo}</div>
       <div class="company-title"><h3>${esc(x.org)}</h3><p>${t==='Volunteering & Organization'?esc(x.category||'Organization'):esc(range)+(groupDuration?` · ${groupDuration}`:'')}</p></div>
     </div>
     <ol class="company-roles">${roles.map(roleMarkup).join('')}</ol>
   </li>`;
 }).join('');
}
$('#tabs').onclick=e=>{const b=e.target.closest('button');b&&showTab(b.dataset.t)};showTab(tabs[0]);setInterval(()=>showTab(activeTab),60*60*1000);
// projects
$('#proj').innerHTML = PROJECTS.map((p, i) => `
    <article class="pcard rv" style="transition-delay:${(i % 3) * 0.1}s">

        <div class="pimg">
            ${p.image
                ? `<img src="${p.image}" alt="${esc(p.title)} banner" loading="lazy">`
                : '<div class="ph">Banner placeholder</div>'
            }

            ${p.highlight ? `
                <span class="tag">
                    <span class="material-symbols-outlined" aria-hidden="true">
                        ${p.highlight === 'Gold Medal' ? 'workspace_premium' : 'verified'}
                    </span>
                    ${esc(p.highlight)}
                </span>
            ` : ''}
        </div>

        <div class="pbody">
            <p class="cat">
                <span class="material-symbols-outlined" aria-hidden="true">
                    ${p.icon || 'folder_open'}
                </span>
                ${esc(p.category)}
            </p>

            <h3>${esc(p.title)}</h3>

            <p class="muted">${esc(p.description)}</p>

            <button class="link" data-i="${i}">
                View details
                <span class="material-symbols-outlined">
                    arrow_outward
                </span>
            </button>
        </div>

    </article>
`).join('');

let lastFocus;
function openModal(p){lastFocus=document.activeElement;const blk=(title,d)=>d?`<section class="case-section"><h4>${title}</h4><p>${d.text}</p>${list(d.points||[])}${d.after?`<p>${d.after}</p>`:''}</section>`:'';
const meta=p.role||p.timeline||p.tools?`<dl><div><dt>Role</dt><dd>${esc(p.role||'To be added')}</dd></div><div><dt>Timeline</dt><dd>${esc(p.timeline||'To be added')}</dd></div><div><dt>Tools</dt><dd>${esc((p.tools||[]).join(', ')||'To be added')}</dd></div></dl>`:'';
const proto=p.prototype?`<div class="project-actions"><a class="btn primary" href="${esc(p.prototype)}" target="_blank" rel="noreferrer"><span class="material-symbols-outlined">open_in_new</span> Open prototype</a></div>`:`<div class="project-actions"><span class="muted prototype-note">Prototype link can be added here when the Figma or demo URL is ready.</span></div>`;
$('#modal').innerHTML=`<button class="icon-btn close" id="mx" aria-label="Close"><span class="material-symbols-outlined">close</span></button>${p.image?`<img class="mimg" src="${p.image}" alt="${esc(p.title)} banner">`:'<div class="mimg ph">Project visual preview</div>'}<div class="mbody"><p class="cat">${esc(p.category)}</p><h3>${esc(p.title)}</h3>${p.fullName?`<p class="full">${esc(p.fullName)}</p>`:''}${p.tagline?`<p class="tagline">${esc(p.tagline)}</p>`:''}${meta}<section class="case-section"><h4>Project overview</h4><p>${esc(p.overview||p.description)}</p></section><section class="case-section"><h4>Project summary</h4><p>${esc(p.description)}</p></section>${blk('The challenge',p.challenge)}${blk('The solution',p.solution)}${p.highlight?`<p class="tagline">✳ ${esc(p.highlight)}</p>`:''}${proto}</div>`;
$('#ov').classList.add('open');document.body.style.overflow='hidden';$('#mx').focus();$('#mx').onclick=closeModal}function closeModal(){$('#ov').classList.remove('open');document.body.style.overflow='';lastFocus&&lastFocus.focus()}
$('#proj').onclick=e=>{const b=e.target.closest('.link');b&&openModal(PROJECTS[b.dataset.i])};
$('#ov').onclick=e=>e.target.id==='ov'&&closeModal();addEventListener('keydown',e=>e.key==='Escape'&&closeModal());
// achievements, certificates, contact
$('#ach').innerHTML = ACHIEVEMENTS.map(a => `
    <div class="card rv">
        <span class="ico">
            <span class="material-symbols-outlined">
                ${a.icon}
            </span>
        </span>

        <h3>${a.title}</h3>
        <p class="role">${a.issuer} · ${a.year}</p>
        <p class="muted">${a.text}</p>
    </div>
`).join('');

$('#cert').innerHTML=CERTIFICATES.map(c=>`<figure class="cert rv">${c.image?`<img src="${c.image}" alt="${esc(c.title)}" loading="lazy">`:'<div class="ph">Certificate placeholder</div>'}<figcaption><b>${c.title}</b><span>${c.issuer} · ${c.year}</span></figcaption></figure>`).join('');
$('#ct').innerHTML=[['mail','Email',LINKS.email,'fideliobagasprakoso@gmail.com'],['work','LinkedIn',LINKS.linkedin,'Fidelio Bagas Prakoso'],['photo_camera','Instagram',LINKS.instagram,'@fideliobagas']].map(([i,n,h,t])=>`<a class="card contact rv" href="${h}" target="_blank" rel="noreferrer"><span class="ico"><span class="material-symbols-outlined">${i}</span></span><div><b>${n}</b><span>${t}</span></div></a>`).join('');
// Interactive trait-card deck in About Me.
const traitItems=['Analytical','Organized','Creative','Curious','Problem Solver','Detail-Oriented'];
const traitDeck=document.querySelector('#traitDeck');
let traitOrder=[...traitItems];
function renderTraitDeck(){
 if(!traitDeck)return;
 traitDeck.innerHTML=traitOrder.slice(0,4).map((trait,index)=>{
   const layer=index===0?'trait-card-front':`trait-card-back trait-card-${index}`;
   return `<button class="trait-card ${layer}" type="button" data-trait="${index}" aria-label="${index===0?'Show next trait':trait}" ${index===0?'':'tabindex="-1" aria-hidden="true"'}>
     <span>TRAIT ${String(traitItems.indexOf(trait)+1).padStart(2,'0')}${index===0?' · CLICK TO EXPLORE':''}</span>
     <strong>${trait}</strong>
     ${index===0?'<small>Click to reveal another trait ↗</small>':''}
   </button>`;
 }).join('');
}
if(traitDeck){
 renderTraitDeck();
 traitDeck.addEventListener('click',event=>{
   const front=event.target.closest('.trait-card-front');
   if(!front)return;
   front.classList.add('is-exiting');
   window.setTimeout(()=>{
     traitOrder.push(traitOrder.shift());
     renderTraitDeck();
   },300);
 });
}

// scroll reveal (after all content is rendered)
const rio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');rio.unobserve(e.target)}}),{rootMargin:'0px 0px -60px 0px'});
document.querySelectorAll('.rv').forEach(el=>rio.observe(el));


/* ===== EXPERIENCE PHOTO LIGHTBOX ===== */

// Create lightbox
const experienceLightbox = document.createElement('div');

experienceLightbox.id = 'experienceLightbox';
experienceLightbox.className = 'photo-lightbox';

experienceLightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Close image">
        &times;
    </button>
    <img src="" alt="Experience documentation">
`;

document.body.appendChild(experienceLightbox);

const experienceLightboxImg = experienceLightbox.querySelector('img');

// Open image when clicked
document.addEventListener('click', function (e) {
    const photo = e.target.closest('#experience .role-gallery img');

    if (photo) {
        experienceLightboxImg.src = photo.src;
        experienceLightboxImg.alt = photo.alt;
        experienceLightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close when clicking outside or close button
    if (
        e.target === experienceLightbox ||
        e.target.closest('#experienceLightbox .lightbox-close')
    ) {
        experienceLightbox.classList.remove('active');
        document.body.style.overflow = '';
        experienceLightboxImg.src = '';
    }
});

// Close using Escape key
document.addEventListener('keydown', function (e) {
    if (
        e.key === 'Escape' &&
        experienceLightbox.classList.contains('active')
    ) {
        experienceLightbox.classList.remove('active');
        document.body.style.overflow = '';
        experienceLightboxImg.src = '';
    }
});
