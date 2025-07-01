const output = document.getElementById('output');
// Define constructor (use consistent capitalization)
function Applicant(name, location, role, experience, education, skills, languages, portfolio, relocate, remote, softSkills) {
    this.name = name;
    this.location = location;
    this.role = role;
    this.experience = experience;
    this.education = education;
    this.skills = skills;
    this.languages = languages;
    this.portfolio = portfolio;
    this.relocate = relocate;
    this.remote = remote;
    this.softSkills = softSkills;
    
    this.getSummary = function() {
      return `${this.name}, ${this.experience} years experience, located in ${this.location}.`;
    };
  }
  
  // Create instance with corrected parameters
  const applicant1 = new Applicant(
    'Gabriel Levesque', 'Quebec City, QC','Mechanical Engineer (Entry-Level)',0, 'BEng in Mechanical Engineering, Laval University',
    ['SolidWorks', 'MATLAB', 'CAD design'],['English', 'French'],'https://gabrielmech.ca',true, false,['Precision', 'Self-discipline']
  );

    output.innerHTML = applicant1.getSummary();
  
  