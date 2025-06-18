# aws_codepipeline_s3_game

**Meme Match Game with AWS S3 Hosting & CI/CD via CodePipeline**

This project demonstrates how to build and deploy a **Meme Match Game** using **Amazon S3** for static web hosting and **AWS CodePipeline** for continuous integration and deployment (CI/CD). Every time you push changes to your GitHub repository, they are automatically deployed to an S3-hosted static website.

**Project Overview**
- A fun card-matching memory game using JavaScript, CSS, and HTML.
- Hosted on **Amazon S3** with public website access.
- Fully automated deployment pipeline using **AWS CodePipeline** and **AWS CodeBuild**.
- Source code managed in **GitHub**.
- Frontend changes are automatically deployed upon each push.

**Technologies Used**
- Frontend: HTML, CSS, JavaScript
- Cloud Services:
  - Amazon S3 (Static Website Hosting)
  - AWS CodePipeline (CI/CD Pipeline)
  - AWS CodeBuild (Build & Deploy Process)
  - AWS IAM (Access Control)
- Source Control: GitHub

**Working**
1. Changes are committed and pushed to the connected GitHub repository.
2. AWS CodePipeline automatically detects the changes and initiates the CI/CD process.
3. The S3 bucket, configured for static website hosting, serves the updated version to users via its public website URL.
 
**Deployment Steps**
**Step 1: Create an S3 Bucket**
1. Go to the S3 Console 
2. Create bucket
3. Uncheck: "Block all public access"
6. Create bucket

**Step 2: Enable Static Website Hosting**
1.Access the Properties tab of the S3 bucket.
2.Locate the Static website hosting section.
3.Enable static website hosting.
4.Specify index.html as the index document.
5.Save the changes.
 
**Step 3: Add Public Read Access**
1. Go to the Permissions tab → Bucket Policy
2. Edit the policy using the attached json file

**Step 4: Create a CodePipeline**
1.Navigate to the AWS CodePipeline console.
2.Create a new pipeline named meme-game-pipeline.
3.Allow AWS to create a new service role for the pipeline.
4.Add a Source stage with GitHub as the source provider, connecting and authorizing access to the repository.
5.Add a Deploy stage with Amazon S3 as the deployment provider.
6.Specify the target S3 bucke.
7.Enable extraction of files before deployment.
8.Complete the pipeline creation.

**Step 5: Test the CI/CD Pipeline**
1.Commit and push changes to the GitHub repository (e.g., update styles.css or index.html).
2.Monitor the pipeline execution within the AWS CodePipeline console.
3.Upon successful completion, access the S3 website endpoint URL in a browser.
4.Verify that the updated version of the game is live and functioning correctly.

<img width="1470" alt="Screenshot 2025-06-18 at 3 56 16 PM" src="https://github.com/user-attachments/assets/727e9370-3e48-4864-b93f-40fc339429b3" />

<img width="1470" alt="Screenshot 2025-06-18 at 3 56 59 PM" src="https://github.com/user-attachments/assets/31732a8b-d644-480f-9f97-8a461acf6f55" />

<img width="1470" alt="Screenshot 2025-06-18 at 3 57 53 PM" src="https://github.com/user-attachments/assets/7bfc17d4-2823-49de-af33-cacce8c45996" />

<img width="1470" alt="Screenshot 2025-06-18 at 3 58 48 PM" src="https://github.com/user-attachments/assets/2e040c83-5c8a-4866-8048-ff253b8a19c7" />

<img width="1470" alt="Screenshot 2025-06-18 at 3 59 18 PM" src="https://github.com/user-attachments/assets/e7a64daa-2e7c-4869-94ab-634729a06f4b" />

