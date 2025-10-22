# Introduction
The <b>Women Changing The World (WCW) Awards Platform</b> is a comprehensive web application designed to manage the entire lifecycle of award applications, from submission to judging. Built for the WCW Awards organization, this platform streamlines the process of accepting applications, managing users, and facilitating the judging process.

This platform serves three primary user groups:
- <b>Applicants:</b> Submit and manage award applications
- <b>Judges:</b> Review and score applications
- <b>Administrators:</b> Oversee the entire awards process, manage users, and configure application forms

The system is built using modern web technologies with Firebase as the backend, providing real-time updates, secure authentication, and scalable data storage.

# Key Features
- <b>Applicants:</b>
  - User Registration & Authentication: Secure sign-up and sign-in
  - Application Management: Create, save as draft, edit, and submit applications
  - Dynamic Forms: Season-specific questions with word count enforcement
  - Application History: View all past and current applications
  - Advanced Filtering: Sort and filter by ID, date, category, subcategory, award, and status
  - Preview Before Submit: Review complete application before final submission
  - Delete/Withdraw: Delete drafts or withdraw submitted applications
  - Profile Management: Update personal information and preferences
  - Photo Uploads: Attach high-resolution photos to applications
- <b>Admin:</b>
  - Dashboard Analytics: Visual overview of platform activity
  - User Management: Create, edit, and manage user accounts and roles
  - Entry Management: View, export (PDF/Excel), delete, and withdraw applications
  - Form Configuration: Configure seasons, questions, categories, awards, and eligibility criteria
  - Judge Assignment: Manually assign judges to applications
  - Judging Progress: Monitor judge activity and completion rates
  - Bulk Operations: Export all applications to Excel
  - Season Management: Create and manage award seasons with dates and settings
  - Real-time Updates: Live data synchronisation across all users
- <b>Judges:</b>
  - Assignment Management: View assigned applications
  - Scoring System: Score applications with comments
  - Abstention: Option to abstain from judging specific entries
  - Progress Tracking: Monitor completion status

 # Prerequisites
 Before setting up the project, ensure you have the following installed:
 - Required software:
     - Node.js (v14 or higher)
         - Download from: https://nodejs.org/
         - Verify installation by running the following command in the terminal: node --version
     - npm (should be installed when Node.js is installed)
         - Verify installation by running the following command in the terminal: npm --version
     - Firebase CLI
         - Install globally: npm install -g firebase-tools
         - Verify installation: firebase --version
     - Git (for version control)
         - Download from: https://git-scm.com/
- Firebase Requirement:

- External Libraries: The following libraries are loaded from CDNs and don't require local installation:
  - Chart.js (v4.x) - For dashboard charts
  - SheetJS (xlsx) (v0.18.5) - For Excel export functionality
  - Firebase SDK (v12.0.0) - Firebase services
 
  # Project Setup
  1. Clone the project from github
     ```
     git clone https://github.com/n11043806/WCW-Awards-Platform.git
     cd wcw-awards-platform
     ```
  2. Install Firebase CLI if not already installed
     ```
     npm install -g firebase-tools
     ```
  3. Login to Firebase
     ```
     firebase login
     ```
     This will open a browser window for authentication. Sign in with your Google account that has access to the Firebase project.
  4. Initialise Firebase in the Project
     Option A: If firebase.json already exists (recommended)
     ```
      # Link to your Firebase project
      firebase use --add
      
      # Select your project from the list
      # Give it an alias (e.g., "default" or "production")
     ```
     Option b:  If firebase.json doesn't exist
     ```
      # Initialize Firebase
      firebase init
      
      # Select the following features using spacebar:
      # [x] Firestore
      # [x] Hosting
      # [x] Storage
      # [x] Emulators (optional, for local development)
      
      # Follow the prompts:
      # - Select your Firebase project
      # - Firestore rules: Use default or existing firestore.rules
      # - Firestore indexes: Use default or existing firestore.indexes.json
      # - Hosting public directory: Enter "." (current directory)
      # - Configure as single-page app: No
      # - Set up automatic builds: No
      # - Overwrite files: No (if asked)
     ```

# Project Structure
```
  wcw-awards-platform/
  ├── Images/                          # Image assets
  │   ├── Logo.png                     # WCW logo
  │   └── homepageimage2.jpg          # Landing page background
  │
  ├── index.html                       # Landing page
  ├── signin.html                      # Sign-in page
  ├── signup.html                      # Sign-up page
  │
  ├── Applicant Pages/
  │   ├── applicantdashboard.html     # Applicant main dashboard
  │   ├── applicantprofile.html       # Applicant profile management
  │   ├── applicationform.html        # Application submission form
  │   └── applicationhistory.html     # Application history & management
  │
  ├── Admin Pages/
  │   ├── admindashboard.html         # Admin main dashboard
  │   ├── adminprofile.html           # Admin profile management
  │   ├── adminentriestab.html        # Entries management
  │   ├── adminnewform.html           # Create entry on behalf of user
  │   ├── admineditform.html          # Form configuration
  │   ├── adminusertab.html           # User management
  │   ├── adminnewuser.html           # Create new user
  │   ├── admininviteuser.html        # Invite user via email
  │   ├── adminjudgetab.html          # Judging progress overview
  │   ├── adminmanagejudge.html       # Judge assignment management
  │   ├── adminmanuallyassign.html    # Manual judge assignment
  │   ├── adminjudginground.html      # Judging round configuration
  │   └── adminrounddetails.html      # Round details management
  │
  ├── Judge Pages/
  │   └── judgedashboard.html         # Judge dashboard (referenced but not provided)
  │
  ├── Configuration Files/
  │   ├── firebase.json               # Firebase project configuration
  │   ├── firestore.rules             # Firestore security rules
  │   ├── firestore.indexes.json      # Firestore index definitions
  │   ├── storage.rules               # Storage security rules
  │   └── .firebaserc                 # Firebase project aliases
  │
  ├── Documentation/
  │   ├── README.md                   # This file
  │   ├── UserGuideSetup.md           # User guide for applicants
  │   ├── UserGuideApplication.md     # User guide for administrators
  │   └── UserTesting.md              # Testing template
  │
  └── app.js                          # Shared JavaScript utilities
```

# Firebae Configuration - collections structure
  1. users collection
     ```
      {
        "userId": {
          "email": "user@example.com",
          "fullName": "John Doe",
          "role": "applicant", // or "admin" or "judge"
          "createdAt": Timestamp,
          "darkMode": "disabled" // optional
        }
      }
     ```
  2. Applications collection
     ```
      {
        "applicationId": {
          "user_id": "userId",
          "applicant_id": "userId",
          "season": "WCW25",
          "stage": "Draft", // or "Submitted" or "Withdrawn"
          "category": "BUSINESS AWARDS",
          "subcategory": "Emerging Business",
          "awards_choice": "WCWA Global 2025",
          "name": "Applicant Name",
          "email": "applicant@example.com",
          "mobile_number": "+61400000000",
          "address": "123 Street, City",
          "website": "www.example.com",
          "instagram_url": "@username",
          "linkedin_url": "linkedin.com/in/username",
          "eligibility": true,
          // Dynamic question answers based on season
          "question_ID_1": "Answer text...",
          "question_ID_2": "Answer text...",
          "createdAt": Timestamp,
          "updatedAt": Timestamp,
          "submittedAt": Timestamp // if submitted
        }
      }
     ```
  3. Season collection
     ```
      {
        "WCW25": {
          "status": "current", // or "past"
          "Name": "WCW25",
          "Round_Type": "entry", // or "judging" or "feedback"
          "Judging_View": "scoring", // or "viewOnly"
          "Start": Timestamp,
          "End": Timestamp,
          "Review/Resubmission_End": Timestamp
        }
      }
     ```
  4. applicationInfo collection
     ```
      {
        "questionDocId": {
          "Question": "Tell us about yourself",
          "question_ID": "tellUsAboutYourself",
          "wordLimit": 100,
          // Season-specific fields for ordering
          "WCW25": "Q1",
          "WCW26": "Q2"
        },
        "DatesInfo": {
          "Body": "<h2>Important Dates</h2><p>...</p>",
          "lastUpdated": Timestamp
        }
      }
     ```
  5. Categories Collection
     ```
      {
        "BUSINESS AWARDS": {
          "CS1": "Emerging Business",
          "CS2": "Established Business",
          "CS3": "Social Enterprise",
          "createdAt": Timestamp
        }
      }
     ```
  6. Award Collection
     ```
      {
        "WCWA Global 2025": {
          "createdAt": Timestamp
        }
      }
     ```
  7. judgeAssignments Collection
     ```
      {
        "judgeId__applicationId": {
          "judgeId": "userId",
          "judgeName": "Judge Name",
          "judgeEmail": "judge@example.com",
          "applicationId": "appId",
          "entryName": "Applicant Name",
          "scoreSet": "Finalist Judging",
          "round": "Round 1",
          "status": "pending", // or "in-progress" or "completed"
          "method": "manual",
          "assignedAt": Timestamp,
          "assignedBy": "adminUserId",
          "updatedAt": Timestamp
        }
      }
     ```
# User Roles
<b>Applicant</b>
- Access: Applicant dashboard, application forms, application history, profile
- Permissions: Create, edit, submit own applications; view own history
- Default role: Assigned automatically on sign-up
- 
<b>Admin</b>
- Access: All pages
- Permissions:
  - Manage all users and their roles
  - View, edit, delete, and export all applications
  - Configure forms, seasons, questions, categories, and awards
  - Assign judges to applications
  - Monitor judging progress
- Assigned by: Manual Firestore update or another admin
  
<b>Judge</b>
- Access: Judge dashboard, assigned applications
- Permissions: View assigned applications, submit scores and comments, abstain from entries
- Assigned by: Admin

# Get Help
- Firebase Documentation: https://firebase.google.com/docs
- Firebase Console: https://console.firebase.google.com/
- WCW Support: https://support.awardforce.com/hc/en-us
- Check browser console: Press F12 to open Developer Tools
     
