const storageKey = "makori_it_portal_content";
const defaultPassword = "MakoriIT2026!";

const defaultContent = {
  heroTitle: "Makori Samuel Momanyi",
  heroSubtitle:
    "Passionate about technology, software development, networking, cybersecurity, and digital problem solving at Kisii University.",
  profileName: "Makori Samuel Momanyi",
  profileSchool: "Kisii University, Kenya",
  profileTags: ["IT Student", "Software Development", "Cybersecurity", "Networking"],
  aboutText:
    "I am a Bachelor of Information Technology student at Kisii University, currently building knowledge in programming, software development, computer networking, cybersecurity, data handling, and digital innovation. I enjoy learning, solving problems, and turning ideas into practical technology solutions.",
  aboutTextTwo:
    "My goal is to grow into a professional who can design systems, support users, secure networks, and create software that makes daily work easier and more efficient.",
  heroStats: [
    { label: "Focus", value: "IT" },
    { label: "Specialty", value: "Tech" },
    { label: "Goal", value: "Build" }
  ],
  impactStats: [
    { value: "5+", label: "IT foundations" },
    { value: "10+", label: "Skills explored" },
    { value: "30+", label: "Learning topics" },
    { value: "100%", label: "Growth mindset" }
  ],
  studyCards: [
    {
      icon: "💻",
      title: "Programming",
      text: "Understanding how to build software solutions using structured logic, coding principles, and practical problem solving."
    },
    {
      icon: "🌐",
      title: "Networking",
      text: "Concepts of communication, protocols, network design, routing, and connectivity between devices."
    },
    {
      icon: "🔐",
      title: "Cybersecurity",
      text: "Protecting systems, users, and digital information through risk awareness, security controls, and best practices."
    },
    {
      icon: "🗄️",
      title: "Databases",
      text: "Data storage, query handling, and building reliable systems that support information management."
    },
    {
      icon: "📊",
      title: "Data & Analytics",
      text: "Turning raw data into useful insight through analysis, interpretation, and evidence-based decisions."
    },
    {
      icon: "🧠",
      title: "Innovation",
      text: "Leveraging emerging technologies to solve real challenges and build digital experiences that add value."
    }
  ],
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Java",
    "SQL",
    "Git",
    "Networking",
    "Cybersecurity",
    "Web Design",
    "Problem Solving",
    "Research"
  ],
  projects: [
    {
      title: "Student Portfolio Website",
      text: "A personal website that showcases academic work, technical interests, and ongoing learning journey in IT.",
      link: "#"
    },
    {
      title: "IT Helpdesk System",
      text: "A small system concept for managing requests, support tickets, and troubleshooting in an organization.",
      link: "#"
    },
    {
      title: "Local Network Simulation",
      text: "A project focused on understanding network configuration, device communication, and practical connectivity basics.",
      link: "#"
    }
  ],
  resources: [
    {
      title: "W3Schools",
      text: "Learn HTML, CSS, JavaScript, SQL, and web fundamentals with simple examples.",
      link: "https://www.w3schools.com/"
    },
    {
      title: "Khan Academy",
      text: "A strong place to sharpen logic, math, computing principles, and digital literacy.",
      link: "https://www.khanacademy.org/"
    },
    {
      title: "Cisco Networking Academy",
      text: "Useful for networking, digital skills, and understanding connected systems.",
      link: "https://www.netacad.com/"
    }
  ],
  contactSummary:
    "Reach out for collaborations, projects, learning discussions, or academic opportunities.",
  contactItems: [
    { label: "Email", value: "samuelmomanyi709@gmail.com" },
    { label: "Institution", value: "Kisii University" },
    { label: "Location", value: "Kenya" },
    { label: "Focus", value: "Information Technology" }
  ],
  footerYear: new Date().getFullYear()
};

function getStoredContent() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    return saved && Object.keys(saved).length ? saved : defaultContent;
  } catch (error) {
    return defaultContent;
  }
}

function setStoredContent(data) {
  localStorage.setItem(storageKey, JSON.stringify(data));
}

function renderHomePage() {
  const content = getStoredContent();

  document.getElementById("heroTitle").textContent = content.heroTitle || defaultContent.heroTitle;
  document.getElementById("heroSubtitle").textContent = content.heroSubtitle || defaultContent.heroSubtitle;
  document.getElementById("profileName").textContent = content.profileName || defaultContent.profileName;
  document.getElementById("profileSchool").textContent = content.profileSchool || defaultContent.profileSchool;
  document.getElementById("aboutText").textContent = content.aboutText || defaultContent.aboutText;
  document.getElementById("aboutTextTwo").textContent = content.aboutTextTwo || defaultContent.aboutTextTwo;
  document.getElementById("contactSummary").textContent = content.contactSummary || defaultContent.contactSummary;
  document.getElementById("footerYear").textContent = content.footerYear || defaultContent.footerYear;

  const heroStatsContainer = document.getElementById("heroStats");
  heroStatsContainer.innerHTML = (content.heroStats || defaultContent.heroStats)
    .map((item) => `<li><strong>${item.value}</strong>${item.label}</li>`)
    .join("");

  const profileTags = document.getElementById("profileTags");
  profileTags.innerHTML = (content.profileTags || defaultContent.profileTags)
    .map((tag) => `<span>${tag}</span>`)
    .join("");

  const impactStatsContainer = document.getElementById("impactStats");
  impactStatsContainer.innerHTML = (content.impactStats || defaultContent.impactStats)
    .map((item) => `
      <div class="stat-box">
        <span class="value">${item.value}</span>
        <span class="label">${item.label}</span>
      </div>
    `)
    .join("");

  const studyCardsContainer = document.getElementById("studyCards");
  studyCardsContainer.innerHTML = (content.studyCards || defaultContent.studyCards)
    .map(
      (card) => `
        <article class="card study-card">
          <div class="icon-badge">${card.icon || "💡"}</div>
          <h3>${card.title}</h3>
          <p>${card.text}</p>
        </article>
      `
    )
    .join("");

  const skillsContainer = document.getElementById("skillsList");
  skillsContainer.innerHTML = (content.skills || defaultContent.skills)
    .map((skill) => `<div class="skill-item">${skill}</div>`)
    .join("");

  const projectList = document.getElementById("projectList");
  projectList.innerHTML = (content.projects || defaultContent.projects)
    .map(
      (project) => `
        <article class="project-card">
          <h3>${project.title}</h3>
          <p>${project.text}</p>
          <a href="${project.link || "#"}">Learn more</a>
        </article>
      `
    )
    .join("");

  const resourceList = document.getElementById("resourceList");
  resourceList.innerHTML = (content.resources || defaultContent.resources)
    .map(
      (item) => `
        <article class="resource-card">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
          <small>${item.link || "#"}</small>
          <br />
          <a href="${item.link || "#"}" target="_blank" rel="noreferrer">Open resource</a>
        </article>
      `
    )
    .join("");

  const contactItems = document.getElementById("contactItems");
  contactItems.innerHTML = (content.contactItems || defaultContent.contactItems)
    .map(
      (item) => `
        <div class="contact-entry">
          <strong>${item.label}</strong>
          <span>${item.value}</span>
        </div>
      `
    )
    .join("");
}

function initializeAdminPage() {
  const loginForm = document.getElementById("loginForm");
  const editorForm = document.getElementById("editorForm");
  const statusBox = document.getElementById("statusBox");
  const content = getStoredContent();

  function setStatus(message, type) {
    statusBox.className = `alert ${type}`;
    statusBox.textContent = message;
  }

  function loadEditorData() {
    document.getElementById("heroTitleInput").value = content.heroTitle || defaultContent.heroTitle;
    document.getElementById("heroSubtitleInput").value = content.heroSubtitle || defaultContent.heroSubtitle;
    document.getElementById("aboutTextInput").value = content.aboutText || defaultContent.aboutText;
    document.getElementById("aboutTextTwoInput").value = content.aboutTextTwo || defaultContent.aboutTextTwo;
    document.getElementById("contactSummaryInput").value = content.contactSummary || defaultContent.contactSummary;
    document.getElementById("profileTagsInput").value = (content.profileTags || defaultContent.profileTags).join("\n");
    document.getElementById("skillsInput").value = (content.skills || defaultContent.skills).join("\n");
    document.getElementById("studyCardsInput").value = (content.studyCards || defaultContent.studyCards)
      .map((card) => `${card.title}|${card.icon}|${card.text}`)
      .join("\n");
    document.getElementById("projectsInput").value = (content.projects || defaultContent.projects)
      .map((item) => `${item.title}|${item.text}|${item.link}`)
      .join("\n");
    document.getElementById("resourcesInput").value = (content.resources || defaultContent.resources)
      .map((item) => `${item.title}|${item.text}|${item.link}`)
      .join("\n");
    document.getElementById("contactItemsInput").value = (content.contactItems || defaultContent.contactItems)
      .map((item) => `${item.label}|${item.value}`)
      .join("\n");
  }

  function parseMultilineList(rawValue) {
    return rawValue
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
  }

  function parsePipeList(rawValue) {
    return rawValue
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const parts = line.split("|");
        return parts;
      });
  }

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const password = document.getElementById("adminPassword").value;

    if (password === defaultPassword) {
      sessionStorage.setItem("itPortalAdmin", "true");
      loginForm.classList.add("hidden");
      editorForm.classList.remove("hidden");
      loadEditorData();
      setStatus("Admin access granted. You can edit the site content below.", "success");
    } else {
      setStatus("Incorrect password. Please try again.", "error");
    }
  });

  document.getElementById("logoutButton").addEventListener("click", () => {
    sessionStorage.removeItem("itPortalAdmin");
    editorForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    setStatus("Logged out successfully.", "success");
  });

  document.getElementById("resetButton").addEventListener("click", () => {
    if (confirm("Reset the portal content to the default IT student content?")) {
      setStoredContent(defaultContent);
      loadEditorData();
      renderHomePage();
      setStatus("Content reset to the default site content.", "success");
    }
  });

  editorForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const updatedContent = {
      heroTitle: document.getElementById("heroTitleInput").value,
      heroSubtitle: document.getElementById("heroSubtitleInput").value,
      profileName: document.getElementById("profileNameInput").value || defaultContent.profileName,
      profileSchool: document.getElementById("profileSchoolInput").value || defaultContent.profileSchool,
      profileTags: parseMultilineList(document.getElementById("profileTagsInput").value),
      aboutText: document.getElementById("aboutTextInput").value,
      aboutTextTwo: document.getElementById("aboutTextTwoInput").value,
      contactSummary: document.getElementById("contactSummaryInput").value,
      skills: parseMultilineList(document.getElementById("skillsInput").value),
      studyCards: parsePipeList(document.getElementById("studyCardsInput").value).map(([title, icon, text]) => ({
        title: title || "New Topic",
        icon: icon || "💡",
        text: text || "Add details about this topic."
      })),
      projects: parsePipeList(document.getElementById("projectsInput").value).map(([title, text, link]) => ({
        title: title || "New Project",
        text: text || "Project description.",
        link: link || "#"
      })),
      resources: parsePipeList(document.getElementById("resourcesInput").value).map(([title, text, link]) => ({
        title: title || "New Resource",
        text: text || "Resource description.",
        link: link || "#"
      })),
      contactItems: parsePipeList(document.getElementById("contactItemsInput").value).map(([label, value]) => ({
        label: label || "Label",
        value: value || "Value"
      })),
      heroStats: defaultContent.heroStats,
      impactStats: defaultContent.impactStats,
      footerYear: new Date().getFullYear()
    };

    setStoredContent(updatedContent);
    renderHomePage();
    setStatus("Content saved successfully. Your website has been updated.", "success");
  });

  const isLoggedIn = sessionStorage.getItem("itPortalAdmin") === "true";
  if (isLoggedIn) {
    loginForm.classList.add("hidden");
    editorForm.classList.remove("hidden");
    loadEditorData();
    setStatus("Admin session restored. You can continue editing.", "success");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  if (document.body.dataset.page === "home") {
    renderHomePage();
  }

  if (document.body.dataset.page === "admin") {
    initializeAdminPage();
  }
});
